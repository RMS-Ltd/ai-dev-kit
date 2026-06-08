#!/usr/bin/env python3
"""
Wave 2 baseline scenarios (E02:S17:T02).

Deterministic: RW-S03, S04, S05, S06, V01
"""

from __future__ import annotations

import os
import subprocess
import sys
import tempfile
from pathlib import Path

import pytest
import yaml

REPO_ROOT = Path(__file__).resolve().parents[2]
SCRIPTS = REPO_ROOT / "packages/frameworks/workflow-mgt/scripts"
VERSION_DIR = SCRIPTS / "version"
VALIDATION_DIR = SCRIPTS / "validation"

sys.path.insert(0, str(VERSION_DIR))
sys.path.insert(0, str(VALIDATION_DIR))

import finalize_rw_semver_registry as frsr  # noqa: E402
import resolve_rw_build as rrb  # noqa: E402
import semver_converter as sc  # noqa: E402
from task_touch_registry_audit import audit_registry, has_collisions  # noqa: E402


def _registry_fixture(tmp_path: Path, monkeypatch, *, counter: int = 200) -> Path:
    registry_path = tmp_path / "semver-registry.yaml"
    registry_path.write_text(
        yaml.dump(
            {
                "rc_0": {
                    "epic_to_minor": {},
                    "story_to_patch": {},
                    "task_touch_mode": {
                        "epic_count": 0,
                        "task_touch_counter": counter,
                        "mapping_history": [],
                    },
                }
            }
        ),
        encoding="utf-8",
    )
    config = {"semver_mapping_strategy": "task_touch"}
    monkeypatch.setattr(sc, "find_registry_file", lambda: registry_path)
    monkeypatch.setattr(sc, "load_rw_config", lambda: config)
    return registry_path


def _git_init(tmp: Path, version_rel: str, *, story=17, task=1, build=2) -> Path:
    subprocess.run(["git", "init"], cwd=tmp, check=True, capture_output=True)
    subprocess.run(["git", "config", "user.email", "rw@test"], cwd=tmp, check=True, capture_output=True)
    subprocess.run(["git", "config", "user.name", "rw"], cwd=tmp, check=True, capture_output=True)
    vf = tmp / version_rel
    vf.parent.mkdir(parents=True, exist_ok=True)
    vf.write_text(
        f"VERSION_RC = 0\nVERSION_EPIC = 2\nVERSION_STORY = {story}\n"
        f"VERSION_TASK = {task}\nVERSION_BUILD = {build}\n"
    )
    subprocess.run(["git", "add", "-A"], cwd=tmp, check=True, capture_output=True)
    subprocess.run(["git", "commit", "-m", "init"], cwd=tmp, check=True, capture_output=True)
    return vf


SCENARIO_WAVE2 = ["RW-S03", "RW-S04", "RW-S05", "RW-S06", "RW-V01"]


class TestWave2Semver:
    def test_RW_S03_new_task_new_internal_key(self, monkeypatch):
        """RW-S03: --art to T02 from T01 → BUILD 1, new E:S:T."""
        with tempfile.TemporaryDirectory() as tmpdir:
            tmp = Path(tmpdir)
            version_rel = "src/ai_dev_kit/version.py"
            orig = os.getcwd()
            try:
                os.chdir(tmp)
                vf = _git_init(tmp, version_rel, story=17, task=1, build=2)
                monkeypatch.setattr(rrb, "git_ref_exists", lambda _ref: False)
                monkeypatch.setattr(rrb, "head_est_from_git", lambda _p: None)
                ok, payload, errors = rrb.resolve_rw_build(vf, "E02:S17:T02", art=True)
                assert ok, errors
                assert payload["task"] == 2
                assert payload["next_build"] == 1
                assert payload["internal_version"] == "0.2.17.2+1"
            finally:
                os.chdir(orig)

    def test_RW_S04_finalize_at_tag_boundary(self, tmp_path, monkeypatch):
        """RW-S04: read-only lookup does not advance counter; finalize does."""
        _registry_fixture(tmp_path, monkeypatch, counter=300)
        before = sc.get_task_touch_counter(0)
        sc.convert_internal_to_semver_task_touch(0, 2, 17, 2, 1, finalize=False)
        mid = sc.get_task_touch_counter(0)
        sc.convert_internal_to_semver_task_touch(0, 2, 17, 2, 1, finalize=True)
        after = sc.get_task_touch_counter(0)
        assert mid == before
        assert after == before + 1

    def test_RW_S05_injective_validator_catches_collision(self, tmp_path):
        """RW-S05: duplicate PATCH/core in mapping_history → collision."""
        registry_path = tmp_path / "semver-registry.yaml"
        registry = {
            "rc_0": {
                "task_touch_mode": {
                    "task_touch_counter": 500,
                    "mapping_history": [
                        {
                            "internal_version": "0.2.17.1+1",
                            "semver": "0.4.500+1",
                            "patch": 500,
                        },
                        {
                            "internal_version": "0.2.17.1+2",
                            "semver": "0.4.500+2",
                            "patch": 500,
                        },
                    ],
                }
            }
        }
        registry_path.write_text(yaml.dump(registry), encoding="utf-8")
        r = subprocess.run(
            [
                sys.executable,
                str(VALIDATION_DIR / "validate_semver_registry_injective.py"),
                "--registry",
                str(registry_path),
            ],
            capture_output=True,
            text=True,
            cwd=REPO_ROOT,
        )
        assert r.returncode != 0
        report = audit_registry(registry)
        assert has_collisions(report)

    def test_RW_S06_release_contract_after_finalize(self, tmp_path, monkeypatch):
        """RW-S06: finalize creates mapping row (contract precondition)."""
        registry_path = _registry_fixture(tmp_path, monkeypatch, counter=600)
        payload = frsr.finalize_rw_semver_registry("0.2.17.2+1")
        assert payload["created"] is True
        data = yaml.safe_load(registry_path.read_text(encoding="utf-8"))
        history = data["rc_0"]["task_touch_mode"]["mapping_history"]
        assert any(e["internal_version"] == "0.2.17.2+1" for e in history)
        # Re-finalize idempotent
        payload2 = frsr.finalize_rw_semver_registry("0.2.17.2+1")
        assert payload2["created"] is False


class TestWave2Volume:
    def test_RW_V01_ten_sequential_releases(self, tmp_path, monkeypatch):
        """RW-V01: 10× finalize on same task → counter +10, injective PATCHes."""
        _registry_fixture(tmp_path, monkeypatch, counter=700)
        patches = []
        for build in range(1, 11):
            iv = f"0.2.16.4+{build}"
            p = frsr.finalize_rw_semver_registry(iv)
            assert p["created"] is True
            patches.append(int(p["semver_full"].split(".")[2].split("+")[0]))
        assert patches == list(range(701, 711))
        assert len(set(patches)) == 10
        assert sc.get_task_touch_counter(0) == 710

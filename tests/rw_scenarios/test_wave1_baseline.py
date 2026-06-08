#!/usr/bin/env python3
"""
Wave 1 baseline scenarios (E02:S17:T02).

Deterministic characterization for: RW-B01, B02, B03, B06, S01, S02, G03, G04.
Each test is tagged with scenario_id for run-log correlation.
"""

from __future__ import annotations

import os
import subprocess
import sys
import tempfile
from pathlib import Path

import pytest

REPO_ROOT = Path(__file__).resolve().parents[2]
SCRIPTS = REPO_ROOT / "packages/frameworks/workflow-mgt/scripts"
VERSION_DIR = SCRIPTS / "version"
VALIDATION_DIR = SCRIPTS / "validation"

sys.path.insert(0, str(VERSION_DIR))
sys.path.insert(0, str(VALIDATION_DIR))

import resolve_rw_build as rrb  # noqa: E402
from validate_version_bump import validate_tagged_build_collision  # noqa: E402


def _git_init(tmp: Path, version_rel: str, *, epic=2, story=17, task=1, build=1) -> Path:
    subprocess.run(["git", "init"], cwd=tmp, check=True, capture_output=True)
    subprocess.run(["git", "config", "user.email", "rw-scenario@test"], cwd=tmp, check=True, capture_output=True)
    subprocess.run(["git", "config", "user.name", "rw-scenario"], cwd=tmp, check=True, capture_output=True)
    vf = tmp / version_rel
    vf.parent.mkdir(parents=True, exist_ok=True)
    vf.write_text(
        f"VERSION_RC = 0\n"
        f"VERSION_EPIC = {epic}\n"
        f"VERSION_STORY = {story}\n"
        f"VERSION_TASK = {task}\n"
        f"VERSION_BUILD = {build}\n"
    )
    subprocess.run(["git", "add", "-A"], cwd=tmp, check=True, capture_output=True)
    subprocess.run(["git", "commit", "-m", "init"], cwd=tmp, check=True, capture_output=True)
    return vf


def _run_validator(script: str, args: list[str], cwd: Path | None = None) -> subprocess.CompletedProcess:
    return subprocess.run(
        [sys.executable, str(VALIDATION_DIR / script)] + args,
        cwd=cwd or REPO_ROOT,
        capture_output=True,
        text=True,
    )


SCENARIO_WAVE1 = [
    "RW-B01",
    "RW-B02",
    "RW-B03",
    "RW-B06",
    "RW-S01",
    "RW-S02",
    "RW-G03",
    "RW-G04",
]


@pytest.mark.parametrize("scenario_id", SCENARIO_WAVE1)
def test_wave1_scenario_registered(scenario_id: str):
    assert scenario_id in SCENARIO_WAVE1


class TestWave1Build:
    def test_RW_B01_same_task_build_plus_one_untagged(self, monkeypatch):
        """RW-B01: untagged HEAD → BUILD +1."""
        with tempfile.TemporaryDirectory() as tmpdir:
            tmp = Path(tmpdir)
            version_rel = "src/ai_dev_kit/version.py"
            orig = os.getcwd()
            try:
                os.chdir(tmp)
                vf = _git_init(tmp, version_rel, build=2)
                monkeypatch.setattr(rrb, "git_ref_exists", lambda _ref: False)
                ok, payload, errors = rrb.resolve_rw_build(vf, "E02:S17:T01", art=True)
                assert ok, errors
                assert payload["next_build"] == 3
                assert payload["reason"] == "same_task_build_plus_one"
            finally:
                os.chdir(orig)

    def test_RW_B02_tagged_head_still_increments(self, monkeypatch):
        """RW-B02: tagged HEAD BUILD → next BUILD +1 (no reuse)."""
        with tempfile.TemporaryDirectory() as tmpdir:
            tmp = Path(tmpdir)
            version_rel = "src/ai_dev_kit/version.py"
            orig = os.getcwd()
            try:
                os.chdir(tmp)
                vf = _git_init(tmp, version_rel, build=2)
                subprocess.run(["git", "tag", "v0.2.17.1+2"], cwd=tmp, check=True, capture_output=True)
                monkeypatch.setattr(rrb, "git_ref_exists", lambda ref: ref == "v0.2.17.1+2")
                ok, payload, errors = rrb.resolve_rw_build(vf, "E02:S17:T01", art=True)
                assert ok, errors
                assert payload["next_build"] == 3
                assert payload["internal_version"] == "0.2.17.1+3"
            finally:
                os.chdir(orig)

    def test_RW_B03_tagged_build_reuse_blocked(self, monkeypatch):
        """RW-B03: VERSION_BUILD not incremented when HEAD tag exists → collision."""
        with tempfile.TemporaryDirectory() as tmpdir:
            tmp = Path(tmpdir)
            version_rel = "src/ai_dev_kit/version.py"
            orig = os.getcwd()
            try:
                os.chdir(tmp)
                vf = _git_init(tmp, version_rel, build=2)
                subprocess.run(["git", "tag", "v0.2.17.1+2"], cwd=tmp, check=True, capture_output=True)
                monkeypatch.setattr(
                    "validate_version_bump.git_ref_exists",
                    lambda ref: ref == "v0.2.17.1+2",
                )
                monkeypatch.setattr(
                    "validate_version_bump.get_version_build_from_git_ref",
                    lambda _vf, _ref: 2,
                )
                ok, errors = validate_tagged_build_collision(0, 2, 17, 1, 2, vf, policy_zero_ok=False)
                assert not ok
                assert any("TAGGED BUILD NOT INCREMENTED" in e for e in errors)
            finally:
                os.chdir(orig)

    def test_RW_B06_art_cross_task_adoption(self, monkeypatch):
        """RW-B06: --art jumps E:S:T; BUILD resolves for requested task."""
        with tempfile.TemporaryDirectory() as tmpdir:
            tmp = Path(tmpdir)
            version_rel = "src/ai_dev_kit/version.py"
            orig = os.getcwd()
            try:
                os.chdir(tmp)
                vf = _git_init(tmp, version_rel, story=16, task=10, build=6)
                monkeypatch.setattr(rrb, "git_ref_exists", lambda _ref: False)
                monkeypatch.setattr(rrb, "head_est_from_git", lambda _p: None)
                ok, payload, errors = rrb.resolve_rw_build(vf, "E02:S17:T01", art=True)
                assert ok, errors
                assert payload["story"] == 17 and payload["task"] == 1
                assert payload["next_build"] == 1
                assert payload["reason"] == "art_first_build"
            finally:
                os.chdir(orig)


class TestWave1Semver:
    def test_RW_S01_task_touch_counter_increments(self, tmp_path, monkeypatch):
        """RW-S01: finalize path assigns monotonic PATCH."""
        import semver_converter as sc

        registry = tmp_path / "semver-registry.yaml"
        registry.write_text(
            "rc_0:\n  epic_to_minor: {}\n  story_to_patch: {}\n"
            "  task_touch_mode:\n    epic_count: 0\n    task_touch_counter: 10\n    mapping_history: []\n",
            encoding="utf-8",
        )
        config = {"semver_mapping_strategy": "task_touch"}
        monkeypatch.setattr(sc, "find_registry_file", lambda: registry)
        monkeypatch.setattr(sc, "load_rw_config", lambda: config)

        before = sc.get_task_touch_counter(0)
        result = sc.convert_internal_to_semver_task_touch(0, 2, 17, 1, 1, finalize=True)
        after = sc.get_task_touch_counter(0)
        assert after == before + 1
        assert result[2] == after  # PATCH equals counter

    def test_RW_S02_three_sequential_releases_injective(self, tmp_path, monkeypatch):
        """RW-S02: three finalize calls → three distinct PATCH values."""
        import semver_converter as sc

        registry = tmp_path / "semver-registry.yaml"
        registry.write_text(
            "rc_0:\n  epic_to_minor: {}\n  story_to_patch: {}\n"
            "  task_touch_mode:\n    epic_count: 0\n    task_touch_counter: 100\n    mapping_history: []\n",
            encoding="utf-8",
        )
        config = {"semver_mapping_strategy": "task_touch"}
        monkeypatch.setattr(sc, "find_registry_file", lambda: registry)
        monkeypatch.setattr(sc, "load_rw_config", lambda: config)

        patches = []
        for build in (1, 2, 3):
            r = sc.convert_internal_to_semver_task_touch(0, 2, 17, 1, build, finalize=True)
            patches.append(r[2])
        assert patches == [101, 102, 103]
        assert len(set(patches)) == 3


class TestWave1Gates:
    def test_RW_G03_intent_mismatch_without_art(self):
        """RW-G03: story/task mismatch aborts at Step 1d without --art."""
        with tempfile.TemporaryDirectory() as tmpdir:
            tmp = Path(tmpdir)
            vf = tmp / "version.py"
            vf.write_text(
                "VERSION_RC = 0\nVERSION_EPIC = 2\nVERSION_STORY = 16\n"
                "VERSION_TASK = 10\nVERSION_BUILD = 6\n"
            )
            r = _run_validator(
                "validate_rw_task_intent.py",
                ["--requested", "E02:S17:T01", "--version-file", str(vf)],
            )
            assert r.returncode != 0
            assert "MISMATCH" in r.stdout

    def test_RW_G04_intent_pass_with_art(self):
        """RW-G04: --art accepts cross-anchor adoption."""
        with tempfile.TemporaryDirectory() as tmpdir:
            tmp = Path(tmpdir)
            vf = tmp / "version.py"
            vf.write_text(
                "VERSION_RC = 0\nVERSION_EPIC = 2\nVERSION_STORY = 16\n"
                "VERSION_TASK = 10\nVERSION_BUILD = 6\n"
            )
            r = _run_validator(
                "validate_rw_task_intent.py",
                ["--requested", "E02:S17:T01", "--art", "--version-file", str(vf)],
            )
            assert r.returncode == 0
            assert "--art adoption enabled" in r.stdout


if __name__ == "__main__":
    subprocess.run([sys.executable, "-m", "pytest", __file__, "-v"], cwd=REPO_ROOT, check=True)

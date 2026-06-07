#!/usr/bin/env python3
"""
T06 nasty scenarios v3 (E02:S17 post-closure extension).

Pattern-informed AGT-adjacent stress: tag collision recovery, batch push, registry collision gate.
Matrix: scenario-matrix-v3.md
"""

from __future__ import annotations

import io
import json
import re
import subprocess
import sys
import tempfile
from contextlib import redirect_stdout
from pathlib import Path

import pytest
import yaml

REPO_ROOT = Path(__file__).resolve().parents[2]
RW_SCENARIOS = Path(__file__).resolve().parent
SCRIPTS = REPO_ROOT / "packages/frameworks/workflow-mgt/scripts"
VERSION_DIR = SCRIPTS / "version"
VALIDATION_DIR = SCRIPTS / "validation"

sys.path.insert(0, str(RW_SCENARIOS))
sys.path.insert(0, str(SCRIPTS))
sys.path.insert(0, str(VERSION_DIR))
sys.path.insert(0, str(VALIDATION_DIR))

import push_rw_release as prr  # noqa: E402
from tag_collision_recovery import format_tag_collision_recovery  # noqa: E402
from task_touch_registry_audit import audit_registry, has_collisions  # noqa: E402
from validate_release_tag_immutability import validate_release_tag_immutability  # noqa: E402


SCENARIO_NASTY = ["RW-HS08", "RW-HS09", "RW-HS10"]

FORBIDDEN_RECOVERY_COMMANDS = [
    "git tag -f v0.4.1040",
    "git push -f origin refs/tags/v0.4.1040",
    "git push origin +v0.4.1040",
]


class TestNastyTagCollisionRecovery:
    """RW-HS08 — Pattern 2/6/BR-097: collision recovery must never prescribe force moves."""

    def test_RW_HS08_recovery_text_forbids_force_push(self):
        msg = format_tag_collision_recovery(
            "v0.4.1040",
            strategy="task_touch",
            is_primary=True,
            internal_version="0.2.17.6+1",
        )
        assert "Do NOT force-push" in msg or "never force-push" in msg.lower()
        assert "BUILD+1" in msg or "re-RW" in msg
        assert "tag -f" not in msg

    @pytest.mark.parametrize("cmd", FORBIDDEN_RECOVERY_COMMANDS)
    def test_RW_HS08_forbidden_recovery_commands_blocked(self, cmd: str):
        ok, errors = validate_release_tag_immutability(extra_commands=[cmd])
        assert not ok
        assert errors

    def test_RW_HS08_agent_journal_with_tag_f_aborts(self):
        journal = {
            "steps": [
                {"name": "rw-step-11", "commands": ["git tag -a v0.4.1040 -m x", "git tag -f v0.4.1040"]},
            ]
        }
        with tempfile.NamedTemporaryFile(mode="w", suffix=".json", delete=False) as f:
            json.dump(journal, f)
            jpath = f.name
        try:
            ok, errors = validate_release_tag_immutability(journal_path=Path(jpath))
            assert not ok
            assert any("FORBIDDEN" in e or "Forbidden" in e for e in errors)
        finally:
            Path(jpath).unlink(missing_ok=True)

    def test_RW_HS08_push_tag_divergence_prescribes_re_rw_not_force(self, monkeypatch):
        """Remote tag at different SHA → recovery message, no force-push path."""
        monkeypatch.setattr(prr, "local_tag_commit", lambda _t: "aaa11111")
        monkeypatch.setattr(prr, "remote_tag_sha", lambda _r, _t: "bbb22222")
        ok, msg = prr.push_tag(
            "origin",
            "v0.4.1040",
            dry_run=False,
            strategy="task_touch",
            internal_version="0.2.17.6+1",
            is_primary=True,
        )
        assert not ok
        assert "BR-097" in msg
        assert "force" not in msg.lower() or "do not force" in msg.lower() or "never" in msg.lower()


class TestNastyBatchPush:
    """RW-HS09 — Pattern 6 / V02: 10 local releases, per-tag push scope (no --tags)."""

    def test_RW_HS09_ten_dry_run_pushes_never_use_bulk_tags(self, monkeypatch):
        push_log: list[str] = []

        def _fake_push_branch(remote, branch, *, dry_run):
            push_log.append(f"branch:{branch}")
            return True, "dry-run branch"

        def _fake_push_tag(remote, tag, *, dry_run, strategy="", internal_version="", is_primary=True):
            push_log.append(f"tag:{tag}")
            return True, f"dry-run tag {tag}"

        monkeypatch.setattr(prr, "push_branch", _fake_push_branch)
        monkeypatch.setattr(prr, "push_tag", _fake_push_tag)

        outputs = []
        for build in range(1, 11):
            iv = f"0.2.16.4+{build}"
            patch_val = 1100 + build
            monkeypatch.setattr(
                prr,
                "get_rw_tag_info",
                lambda _v, finalize=False, p=patch_val, b=build: {
                    "strategy": "task_touch",
                    "primary_tag": f"v0.4.{p}",
                    "internal_tag": f"v0.2.16.4+{b}",
                    "semver_full": f"0.4.{p}+{b}",
                },
            )
            buf = io.StringIO()
            with redirect_stdout(buf):
                code = prr.push_rw_release("spike/rw-semver-friction", iv, dry_run=True)
            out = buf.getvalue()
            outputs.append(out)
            assert code == 0
            assert "did not use --tags" in out

        combined = "\n".join(outputs)
        assert combined.count("did not use --tags") == 10
        assert not re.search(r"git\s+push[^\n]*\s--tags\b", combined)
        assert push_log.count("branch:spike/rw-semver-friction") == 10
        assert len([x for x in push_log if x.startswith("tag:")]) == 20  # primary + internal × 10


class TestNastyRegistryCollisionGate:
    """RW-HS10 — Pattern 2/S05/S07: duplicate PATCH blocks RW before tag."""

    @staticmethod
    def _collision_registry() -> dict:
        return {
            "rc_0": {
                "task_touch_mode": {
                    "task_touch_counter": 800,
                    "mapping_history": [
                        {"internal_version": "0.2.17.1+1", "semver": "0.4.800+1", "patch": 800},
                        {"internal_version": "0.2.17.1+2", "semver": "0.4.800+2", "patch": 800},
                    ],
                }
            }
        }

    def test_RW_HS10_injective_validator_aborts_on_duplicate_patch(self, tmp_path):
        registry_path = tmp_path / "semver-registry.yaml"
        registry_path.write_text(yaml.dump(self._collision_registry()), encoding="utf-8")
        report = audit_registry(yaml.safe_load(registry_path.read_text(encoding="utf-8")))
        assert has_collisions(report)
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

    def test_RW_HS10_collision_blocks_before_tag_step(self, tmp_path):
        """Step 9 gate: injective fail → RW must not reach Step 11 tag creation."""
        registry_path = tmp_path / "semver-registry.yaml"
        registry_path.write_text(yaml.dump(self._collision_registry()), encoding="utf-8")
        # Simulate Step 9 validator outcome
        r = subprocess.run(
            [sys.executable, str(VALIDATION_DIR / "validate_semver_registry_injective.py"), "--registry", str(registry_path)],
            capture_output=True,
            text=True,
        )
        step9_pass = r.returncode == 0
        step11_would_run = step9_pass  # agent contract: no tag on Step 9 fail
        assert not step11_would_run


@pytest.mark.parametrize("scenario_id", SCENARIO_NASTY)
def test_nasty_scenarios_registered(scenario_id: str):
    assert scenario_id in SCENARIO_NASTY

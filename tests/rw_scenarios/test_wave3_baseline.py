#!/usr/bin/env python3
"""
Wave 3 baseline scenarios (E02:S17:T02).

Deterministic: RW-B07, B08, G06, P01 (partial), S07 (recovery text), V02 (dry-run push scope)
AGT manual follow-up: full agent B07 recovery, V02 batch operator push, P01 UKW→RW chain
"""

from __future__ import annotations

import io
import json
import os
import subprocess
import sys
import tempfile
from contextlib import redirect_stdout
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parents[2]
SCRIPTS = REPO_ROOT / "packages/frameworks/workflow-mgt/scripts"
VERSION_DIR = SCRIPTS / "version"
VALIDATION_DIR = SCRIPTS / "validation"

sys.path.insert(0, str(VERSION_DIR))
sys.path.insert(0, str(VALIDATION_DIR))

import push_rw_release as prr  # noqa: E402
import resolve_rw_build as rrb  # noqa: E402
from tag_collision_recovery import format_tag_collision_recovery  # noqa: E402
from validate_release_tag_immutability import (
    validate_release_tag_immutability,  # noqa: E402
)


def _run_validator(script: str, args: list[str]) -> subprocess.CompletedProcess:
    return subprocess.run(
        [sys.executable, str(VALIDATION_DIR / script)] + args,
        cwd=REPO_ROOT,
        capture_output=True,
        text=True,
    )


def _git_init(tmp: Path, version_rel: str, *, story=16, task=4, build=37) -> Path:
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


SCENARIO_WAVE3 = ["RW-B07", "RW-B08", "RW-V02", "RW-P01", "RW-G06", "RW-S07"]


class TestWave3Operator:
    def test_RW_B07_forbidden_force_tag_detected(self):
        """RW-B07: git tag -f in command stream → immutability validator fails."""
        ok, errors = validate_release_tag_immutability(
            extra_commands=["git tag -f v0.4.1040 refs/heads/spike/rw-semver-friction"]
        )
        assert not ok
        assert any("FORBIDDEN" in e or "Forbidden" in e for e in errors)

    def test_RW_B07_clean_commands_pass(self):
        ok, errors = validate_release_tag_immutability(
            extra_commands=["git tag -a v0.4.1040 -m release", "git push origin refs/tags/v0.4.1040"]
        )
        assert ok, errors

    def test_RW_B08_release_scoped_tag_names(self, monkeypatch):
        """RW-B08: push helper resolves per-release tags (not --tags)."""
        monkeypatch.setattr(
            prr,
            "get_rw_tag_info",
            lambda _v, finalize=False: {
                "strategy": "task_touch",
                "primary_tag": "v0.4.1040",
                "internal_tag": "v0.2.17.2+2",
                "semver_full": "0.4.1040+2",
            },
        )
        names = prr.release_tag_names("0.2.17.2+2")
        assert names == ["v0.4.1040", "v0.2.17.2+2"]

    def test_RW_V02_dry_run_no_bulk_tags_flag(self, monkeypatch):
        """RW-V02 (partial): dry-run push uses per-tag refs, never --tags."""
        monkeypatch.setattr(prr, "push_branch", lambda *a, **k: (True, "dry-run branch"))
        monkeypatch.setattr(prr, "push_tag", lambda *a, **k: (True, "dry-run tag"))
        monkeypatch.setattr(
            prr,
            "get_rw_tag_info",
            lambda _v, finalize=False: {
                "strategy": "task_touch",
                "primary_tag": "v0.4.1040",
                "internal_tag": "v0.2.17.2+2",
            },
        )
        buf = io.StringIO()
        with redirect_stdout(buf):
            code = prr.push_rw_release("spike/rw-semver-friction", "0.2.17.2+2", dry_run=True)
        out = buf.getvalue()
        assert code == 0
        assert "did not use --tags" in out
        assert not __import__("re").search(r"git\s+push[^\n]*\s--tags\b", out)


class TestWave3PerpetualAndIntent:
    def test_RW_P01_perpetual_same_task_build_plus_one(self, monkeypatch):
        """RW-P01 (partial): UKW/CMW --perpetual-same-task forces BUILD+1."""
        with tempfile.TemporaryDirectory() as tmpdir:
            tmp = Path(tmpdir)
            version_rel = "src/ai_dev_kit/version.py"
            orig = os.getcwd()
            try:
                os.chdir(tmp)
                vf = _git_init(tmp, version_rel, story=16, task=4, build=37)
                monkeypatch.setattr(rrb, "git_ref_exists", lambda _ref: False)
                ok, payload, errors = rrb.resolve_rw_build(
                    vf, "E02:S16:T04", art=True, perpetual_same_task=True
                )
                assert ok, errors
                assert payload["next_build"] == 38
                assert payload["reason"] == "same_task_build_plus_one"
            finally:
                os.chdir(orig)

    def test_RW_G06_confirmed_override_after_mismatch(self):
        """RW-G06: mismatch fails; --confirmed-override passes after operator confirm."""
        with tempfile.TemporaryDirectory() as tmpdir:
            vf = Path(tmpdir) / "version.py"
            vf.write_text(
                "VERSION_RC = 0\nVERSION_EPIC = 2\nVERSION_STORY = 17\n"
                "VERSION_TASK = 1\nVERSION_BUILD = 2\n"
            )
            fail = _run_validator(
                "validate_rw_task_intent.py",
                ["--requested", "E02:S17:T02", "--version-file", str(vf)],
            )
            assert fail.returncode != 0
            ok = _run_validator(
                "validate_rw_task_intent.py",
                [
                    "--requested",
                    "E02:S17:T02",
                    "--version-file",
                    str(vf),
                    "--confirmed-override",
                ],
            )
            assert ok.returncode == 0
            assert "confirmed-override" in ok.stdout.lower() or "override" in ok.stdout.lower()


class TestWave3CollisionRecovery:
    def test_RW_S07_recovery_text_forbids_force_push(self):
        """RW-S07 (partial): collision recovery prescribes BUILD+1, not tag -f."""
        msg = format_tag_collision_recovery(
            "v0.4.1040",
            strategy="task_touch",
            is_primary=True,
            internal_version="0.2.17.2+2",
        )
        assert "Do NOT force-push" in msg or "never force-push" in msg.lower()
        assert "BUILD+1" in msg or "re-RW" in msg

    def test_RW_S07_journal_scan_integration(self, tmp_path):
        """RW-S07/B07: forbidden tag -f in journal JSON is caught."""
        journal = {
            "steps": [
                {"commands": ["git tag -f v0.4.1040"]},
            ]
        }
        jpath = tmp_path / "rw-bad.json"
        jpath.write_text(json.dumps(journal), encoding="utf-8")
        ok, errors = validate_release_tag_immutability(journal_path=jpath)
        assert not ok

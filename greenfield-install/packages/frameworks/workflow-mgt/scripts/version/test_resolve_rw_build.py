#!/usr/bin/env python3
"""Tests for resolve_rw_build.py (BR-097 / E02:S01:T24)."""

import os
import subprocess
import sys
import tempfile
from pathlib import Path

script_dir = Path(__file__).resolve().parent
validation_dir = script_dir.parent / "validation"
for p in (script_dir, validation_dir):
    if str(p) not in sys.path:
        sys.path.insert(0, str(p))

import resolve_rw_build as rrb  # noqa: E402


def _write_version(path: Path, rc=0, epic=5, story=9, task=14, build=2) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(
        f"VERSION_RC = {rc}\n"
        f"VERSION_EPIC = {epic}\n"
        f"VERSION_STORY = {story}\n"
        f"VERSION_TASK = {task}\n"
        f"VERSION_BUILD = {build}\n"
    )


def _git_init_with_version(tmp: Path, version_rel: str, **version_kw) -> None:
    subprocess.run(["git", "init"], cwd=tmp, check=True, capture_output=True)
    subprocess.run(["git", "config", "user.email", "t@test"], cwd=tmp, check=True, capture_output=True)
    subprocess.run(["git", "config", "user.name", "t"], cwd=tmp, check=True, capture_output=True)
    vf = tmp / version_rel
    _write_version(vf, **version_kw)
    subprocess.run(["git", "add", "-A"], cwd=tmp, check=True, capture_output=True)
    subprocess.run(["git", "commit", "-m", "init"], cwd=tmp, check=True, capture_output=True)


def test_same_task_tagged_head_increments_build(monkeypatch):
    """T1: same task with tagged HEAD BUILD → next_build = head+1."""
    with tempfile.TemporaryDirectory() as tmpdir:
        tmp = Path(tmpdir)
        version_rel = "src/proj/version.py"
        orig = os.getcwd()
        try:
            os.chdir(tmp)
            _git_init_with_version(tmp, version_rel)
            subprocess.run(
                ["git", "tag", "v0.5.9.14+2"],
                cwd=tmp,
                check=True,
                capture_output=True,
            )
            vf = tmp / version_rel

            def fake_exists(tag):
                return tag == "v0.5.9.14+2"

            monkeypatch.setattr(rrb, "git_ref_exists", fake_exists)

            ok, payload, errors = rrb.resolve_rw_build(
                vf,
                "E05:S09:T14",
                art=True,
                doc_policy_zero=False,
            )
            assert ok, errors
            assert payload["next_build"] == 3
            assert payload["reason"] == "same_task_build_plus_one"
        finally:
            os.chdir(orig)


def test_doc_policy_zero_untagged_build_zero(monkeypatch):
    """T2: untagged HEAD, --doc-policy-zero, BUILD=0 path."""
    with tempfile.TemporaryDirectory() as tmpdir:
        tmp = Path(tmpdir)
        version_rel = "src/proj/version.py"
        orig = os.getcwd()
        try:
            os.chdir(tmp)
            _git_init_with_version(tmp, version_rel)
            vf = tmp / version_rel
            vf.write_text(vf.read_text().replace("VERSION_BUILD = 2", "VERSION_BUILD = 0"))
            subprocess.run(["git", "add", vf], cwd=tmp, check=True, capture_output=True)
            subprocess.run(["git", "commit", "-m", "build0"], cwd=tmp, check=True, capture_output=True)

            monkeypatch.setattr(rrb, "git_ref_exists", lambda _ref: False)

            ok, payload, errors = rrb.resolve_rw_build(
                vf,
                "E05:S09:T14",
                art=True,
                doc_policy_zero=True,
            )
            assert ok, errors
            assert payload["next_build"] == 0
            assert payload["reason"] == "doc_policy_zero_untagged"
        finally:
            os.chdir(orig)


def test_doc_policy_zero_blocked_when_tag_exists(monkeypatch):
    """T3: tagged HEAD + --doc-policy-zero → fail."""
    with tempfile.TemporaryDirectory() as tmpdir:
        tmp = Path(tmpdir)
        version_rel = "src/proj/version.py"
        orig = os.getcwd()
        try:
            os.chdir(tmp)
            _git_init_with_version(tmp, version_rel)
            subprocess.run(["git", "tag", "v0.5.9.14+2"], cwd=tmp, check=True, capture_output=True)
            vf = tmp / version_rel

            monkeypatch.setattr(rrb, "git_ref_exists", lambda ref: ref == "v0.5.9.14+2")

            ok, payload, errors = rrb.resolve_rw_build(
                vf,
                "E05:S09:T14",
                art=True,
                doc_policy_zero=True,
            )
            assert not ok
            assert any("Tagged BUILD reuse blocked" in e for e in errors)
        finally:
            os.chdir(orig)


def test_art_cross_task_uses_max_tagged_build(monkeypatch):
    """T4: --art on different HEAD E:S:T → next BUILD from tagged history for requested task."""
    with tempfile.TemporaryDirectory() as tmpdir:
        tmp = Path(tmpdir)
        version_rel = "src/proj/version.py"
        orig = os.getcwd()
        try:
            os.chdir(tmp)
            _git_init_with_version(tmp, version_rel, epic=2, story=13, task=5, build=1)
            for build in (1, 2):
                subprocess.run(
                    ["git", "tag", f"v0.2.1.24+{build}"],
                    cwd=tmp,
                    check=True,
                    capture_output=True,
                )
            vf = tmp / version_rel
            ok, payload, errors = rrb.resolve_rw_build(
                vf,
                "E02:S01:T24",
                art=True,
            )
            assert ok, errors
            assert payload["next_build"] == 3
            assert payload["reason"] == "art_tagged_follow_on"
        finally:
            os.chdir(orig)


def test_cli_json_output(monkeypatch, tmp_path):
    vf = tmp_path / "src" / "fynd_deals" / "version.py"
    _write_version(vf, epic=2, story=1, task=24, build=0)
    monkeypatch.setattr(rrb, "head_est_from_git", lambda _p: (0, 2, 1, 24, 0))
    monkeypatch.setattr(rrb, "get_version_build_from_git_ref", lambda _p, _r: 0)
    monkeypatch.setattr(rrb, "git_ref_exists", lambda _ref: False)

    ok, payload, errors = rrb.resolve_rw_build(
        vf, "E02:S01:T24", art=True, doc_policy_zero=True
    )
    assert ok, errors
    assert payload["internal_version"] == "0.2.1.24+0"

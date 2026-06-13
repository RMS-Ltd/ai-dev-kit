"""Tests for build_rw_commit_message.py (UXR-027 / E02:S01:T31)."""

from __future__ import annotations

import json
import subprocess
import sys
from pathlib import Path

_SCRIPTS = Path(__file__).resolve().parent
sys.path.insert(0, str(_SCRIPTS))

from version.build_rw_commit_message import build_rw_commit_message  # noqa: E402


def test_subject_uses_semver_prefix():
    result = build_rw_commit_message(
        "0.2.1.31+1",
        "GitHub Actions run title external SemVer",
        epic=2,
        story=1,
        task=31,
    )
    assert result["subject"].startswith("Release v")
    assert "0.2.1.31" not in result["subject"]
    assert "GitHub Actions run title external SemVer" in result["subject"]


def test_body_contains_internal_traceability():
    result = build_rw_commit_message(
        "0.2.1.31+1",
        "summary",
        epic=2,
        story=1,
        task=31,
    )
    assert "Internal: v0.2.1.31+1" in result["body"]
    assert "Epic: 2 | Story: 1 | Task: 31" in result["body"]


def test_strips_leading_v_from_internal():
    result = build_rw_commit_message(
        "v0.2.1.31+1",
        "summary",
        epic=2,
        story=1,
        task=31,
    )
    assert "Internal: v0.2.1.31+1" in result["body"]


def test_cli_json_output():
    script = _SCRIPTS / "version" / "build_rw_commit_message.py"
    proc = subprocess.run(
        [
            sys.executable,
            str(script),
            "--internal-version",
            "0.2.1.31+1",
            "--summary",
            "test summary",
            "--epic",
            "2",
            "--story",
            "1",
            "--task",
            "31",
            "--json",
        ],
        capture_output=True,
        text=True,
        check=True,
        cwd=Path(__file__).resolve().parents[3],
    )
    payload = json.loads(proc.stdout)
    assert payload["subject"].startswith("Release v")
    assert "Internal: v0.2.1.31+1" in payload["body"]

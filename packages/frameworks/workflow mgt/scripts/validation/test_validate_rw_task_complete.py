"""Tests for validate_rw_task_complete.py (FR-060)."""

from __future__ import annotations

import subprocess
import sys
from pathlib import Path

import pytest

SCRIPT = Path(__file__).resolve().parent / "validate_rw_task_complete.py"


def _run(args: list, cwd: Path) -> subprocess.CompletedProcess:
    return subprocess.run(
        [sys.executable, str(SCRIPT)] + args,
        cwd=cwd,
        capture_output=True,
        text=True,
    )


def test_cli_requires_requested(tmp_path: Path):
    r = _run([], cwd=tmp_path)
    assert r.returncode == 2


@pytest.fixture
def minimal_complete_task(tmp_path: Path) -> Path:
    root = tmp_path
    task_dir = root / "docs/project-management/kanban/epics/Epic-9/Story-001-test"
    task_dir.mkdir(parents=True)
    task_file = task_dir / "T01-foo.md"
    task_file.write_text(
        "---\nlifecycle: evergreen\n---\n\n"
        "# T01\n\n**Task ID:** E9:S01:T01\n**Status:** COMPLETE\n",
        encoding="utf-8",
    )
    return root


def test_full_mode_passes_complete(minimal_complete_task: Path):
    r = _run(["--requested", "E9S01T01"], cwd=minimal_complete_task)
    assert r.returncode == 0, r.stderr + r.stdout


def test_full_mode_passes_in_progress(minimal_complete_task: Path):
    task = list(minimal_complete_task.rglob("T01-foo.md"))[0]
    task.write_text(
        "---\n---\n\n**Task ID:** E9:S01:T01\n**Status:** IN PROGRESS\n",
        encoding="utf-8",
    )
    r = _run(["--requested", "E9:S01:T01"], cwd=minimal_complete_task)
    assert r.returncode == 0, r.stderr + r.stdout


def test_full_mode_perpetual_in_progress_ok(minimal_complete_task: Path):
    task = list(minimal_complete_task.rglob("T01-foo.md"))[0]
    task.write_text(
        "---\n---\n\n# UKW\n\n**Task ID:** E9:S01:T01\n"
        "**Task Type:** Perpetual Maintenance\n**Status:** IN PROGRESS (Perpetual)\n",
        encoding="utf-8",
    )
    r = _run(["--requested", "E9S01T01"], cwd=minimal_complete_task)
    assert r.returncode == 0, r.stderr + r.stdout


def test_full_mode_fails_todo(minimal_complete_task: Path):
    task = list(minimal_complete_task.rglob("T01-foo.md"))[0]
    task.write_text(
        "---\n---\n\n**Task ID:** E9:S01:T01\n**Status:** TODO\n",
        encoding="utf-8",
    )
    r = _run(["--requested", "E9:S01:T01"], cwd=minimal_complete_task)
    assert r.returncode == 1, r.stderr + r.stdout


def test_full_mode_fails_todo_with_impl_evidence_with_drift_reason(minimal_complete_task: Path):
    task = list(minimal_complete_task.rglob("T01-foo.md"))[0]
    task.write_text(
        (
            "---\n---\n\n"
            "**Task ID:** E9:S01:T01\n"
            "**Status:** TODO\n\n"
            "## Input\n\n"
            "- [IPW-E9S01T01-foo](../../../../implementation-cycles/IPW-E9S01T01-foo.md)\n\n"
            "## Implementation note\n\n"
            "pytest -q passed\n"
        ),
        encoding="utf-8",
    )
    r = _run(["--requested", "E9:S01:T01"], cwd=minimal_complete_task)
    assert r.returncode == 1, r.stderr + r.stdout
    assert "FR-077 drift" in r.stdout
    assert "Implementation execution must transition task-doc status" in r.stdout


def test_rw_k_skips_complete_check(minimal_complete_task: Path):
    task = list(minimal_complete_task.rglob("T01-foo.md"))[0]
    task.write_text(
        "**Task ID:** E9:S01:T01\n**Status:** IN PROGRESS\n",
        encoding="utf-8",
    )
    r = _run(["--requested", "E9S01T01", "--mode", "rw-k"], cwd=minimal_complete_task)
    assert r.returncode == 0, r.stderr + r.stdout


def test_missing_task_doc(tmp_path: Path):
    (tmp_path / "docs/project-management/kanban/epics/Epic-1").mkdir(parents=True)
    r = _run(["--requested", "E1S01T99"], cwd=tmp_path)
    assert r.returncode == 1

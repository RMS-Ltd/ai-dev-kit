"""Tests for validate_ipw_status_drift.py (FR-077)."""

from __future__ import annotations

import subprocess
import sys
from pathlib import Path


SCRIPT = Path(__file__).resolve().parent / "validate_ipw_status_drift.py"


def _run(args: list, cwd: Path) -> subprocess.CompletedProcess:
    return subprocess.run(
        [sys.executable, str(SCRIPT)] + args,
        cwd=cwd,
        capture_output=True,
        text=True,
    )


def _write_task(path: Path, status: str, body: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(
        (
            "---\n---\n\n"
            "# T01\n\n"
            "**Task ID:** E2:S01:T01\n"
            f"**Status:** {status}\n\n"
            "## Input\n\n"
            "- [IPW-E2S01T01-foo](../../../../implementation-cycles/IPW-E2S01T01-foo.md)\n\n"
            f"{body}\n"
        ),
        encoding="utf-8",
    )


def test_passes_when_no_ipw_tasks(tmp_path: Path):
    root = tmp_path
    (root / "docs/project-management/kanban/epics/Epic-2/Story-001").mkdir(parents=True)
    r = _run([], cwd=root)
    assert r.returncode == 0


def test_detects_todo_with_implementation_evidence(tmp_path: Path):
    root = tmp_path
    task = root / "docs/project-management/kanban/epics/Epic-2/Story-001/T01-foo.md"
    _write_task(
        task,
        "TODO",
        "## Implementation note\n\nReleased **v0.2.1.1+1** with tests.\n",
    )
    r = _run([], cwd=root)
    assert r.returncode == 1
    assert "IPW status drift detected" in r.stdout


def test_ignores_complete_with_evidence(tmp_path: Path):
    root = tmp_path
    task = root / "docs/project-management/kanban/epics/Epic-2/Story-001/T01-foo.md"
    _write_task(task, "COMPLETE", "## Verification evidence\n\npytest -q -> 5 passed\n")
    r = _run([], cwd=root)
    assert r.returncode == 0


def test_requested_task_mode_detects_targeted_drift(tmp_path: Path):
    root = tmp_path
    drifted = root / "docs/project-management/kanban/epics/Epic-2/Story-001/T01-foo.md"
    _write_task(
        drifted,
        "TODO",
        "## Implementation note\n\nReleased **v0.2.1.1+1** with tests.\n",
    )
    clean = root / "docs/project-management/kanban/epics/Epic-2/Story-001/T02-bar.md"
    clean.parent.mkdir(parents=True, exist_ok=True)
    clean.write_text(
        (
            "---\n---\n\n# T02\n\n"
            "**Task ID:** E2:S01:T02\n"
            "**Status:** COMPLETE\n\n"
            "## Input\n\n"
            "- [IPW-E2S01T02-bar](../../../../implementation-cycles/IPW-E2S01T02-bar.md)\n"
        ),
        encoding="utf-8",
    )
    r = _run(["--requested", "E2:S01:T01"], cwd=root)
    assert r.returncode == 1
    assert "requested task" in r.stdout


def test_requested_task_mode_passes_when_requested_clean(tmp_path: Path):
    root = tmp_path
    clean = root / "docs/project-management/kanban/epics/Epic-2/Story-001/T01-foo.md"
    _write_task(clean, "IN PROGRESS", "## Verification evidence\n\npytest -q -> 5 passed\n")
    r = _run(["--requested", "E2S01T01"], cwd=root)
    assert r.returncode == 0
    assert "requested task has no IPW status drift" in r.stdout


def test_requested_task_mode_is_deterministic_when_other_tasks_drift(tmp_path: Path):
    root = tmp_path
    clean = root / "docs/project-management/kanban/epics/Epic-2/Story-001/T01-foo.md"
    _write_task(clean, "IN PROGRESS", "## Verification evidence\n\npytest -q -> 5 passed\n")
    drifted = root / "docs/project-management/kanban/epics/Epic-2/Story-001/T02-bar.md"
    drifted.parent.mkdir(parents=True, exist_ok=True)
    drifted.write_text(
        (
            "---\n---\n\n# T02\n\n"
            "**Task ID:** E2:S01:T02\n"
            "**Status:** TODO\n\n"
            "## Input\n\n"
            "- [IPW-E2S01T02-bar](../../../../implementation-cycles/IPW-E2S01T02-bar.md)\n\n"
            "## Implementation note\n\n"
            "Released **v0.2.1.2+1** with tests.\n"
        ),
        encoding="utf-8",
    )
    r = _run(["--requested", "E2S01T01"], cwd=root)
    assert r.returncode == 0
    assert "requested task has no IPW status drift" in r.stdout


def test_requested_task_mode_can_scan_all_when_enabled(tmp_path: Path):
    root = tmp_path
    clean = root / "docs/project-management/kanban/epics/Epic-2/Story-001/T01-foo.md"
    _write_task(clean, "IN PROGRESS", "## Verification evidence\n\npytest -q -> 5 passed\n")
    drifted = root / "docs/project-management/kanban/epics/Epic-2/Story-001/T02-bar.md"
    drifted.parent.mkdir(parents=True, exist_ok=True)
    drifted.write_text(
        (
            "---\n---\n\n# T02\n\n"
            "**Task ID:** E2:S01:T02\n"
            "**Status:** TODO\n\n"
            "## Input\n\n"
            "- [IPW-E2S01T02-bar](../../../../implementation-cycles/IPW-E2S01T02-bar.md)\n\n"
            "## Implementation note\n\n"
            "Released **v0.2.1.2+1** with tests.\n"
        ),
        encoding="utf-8",
    )
    r = _run(["--requested", "E2S01T01", "--scan-all-with-requested"], cwd=root)
    assert r.returncode == 1
    assert "IPW status drift detected" in r.stdout


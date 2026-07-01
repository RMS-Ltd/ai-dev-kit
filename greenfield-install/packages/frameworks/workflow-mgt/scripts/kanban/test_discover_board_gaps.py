"""Tests for discover_board_gaps.py (FR-043 / E04:S14:T11)."""

from __future__ import annotations

import json
import subprocess
import sys
from pathlib import Path

SCRIPT = Path(__file__).resolve().parent / "discover_board_gaps.py"
REPO_ROOT = Path(__file__).resolve().parents[5]

# Import module under test for unit fixtures
sys.path.insert(0, str(SCRIPT.parent))
from discover_board_gaps import (  # noqa: E402
    board_task_ids,
    fbu_status,
    is_active_task_status,
    normalize_est,
    scan_gaps,
    task_doc_status,
)


def test_normalize_est():
    assert normalize_est("e4:s14:t11") == "E4:S14:T11"


def test_task_doc_status_todo():
    content = "**Status:** TODO\n"
    assert task_doc_status(content) == "TODO"
    assert is_active_task_status(task_doc_status(content))


def test_task_doc_status_in_progress():
    content = "**Status:** IN PROGRESS\n"
    assert task_doc_status(content) == "IN PROGRESS"


def test_fbu_status_open():
    content = "**Status:** OPEN\n"
    assert fbu_status(content) == "OPEN"


def test_fbu_status_terminal_returns_none():
    content = "**Status:** COMPLETE\n"
    assert fbu_status(content) is None


def test_board_task_ids_extracts_unique():
    board = "- **E04:S14:T11** – gap - TODO\n- **E04:S14:T11** – dup\n"
    ids = board_task_ids(board)
    assert ids == {"E4:S14:T11"}


def test_scan_gaps_fixture_tree(tmp_path: Path):
    kroot = tmp_path / "docs" / "kanban"
    epics = kroot / "epics" / "epic-04" / "story-14"
    epics.mkdir(parents=True)
    task = epics / "T99-fixture-task.md"
    task.write_text(
        "# T99\n\n**Task ID:** E04:S14:T99\n**Status:** TODO\n",
        encoding="utf-8",
    )
    (kroot / "kboard.md").write_text("### Must Have\n", encoding="utf-8")
    fbu = kroot / "fbu"
    fbu.mkdir()
    (fbu / "FR-999-fixture.md").write_text(
        "# FR-999\n\n**Status:** OPEN\n",
        encoding="utf-8",
    )
    # Minimal rw-config so loader finds kanban_root
    (tmp_path / "rw-config.yaml").write_text(
        "use_kanban: true\nkanban_root: docs/kanban\nfbu_root: fbu\n",
        encoding="utf-8",
    )
    report = scan_gaps(tmp_path)
    assert any(t.task_id == "E4:S14:T99" for t in report.tasks_missing_from_board)
    assert any(f.fbu_id == "FR-999" for f in report.open_fbu_without_task)


def test_discover_script_exits_zero_on_repo():
    proc = subprocess.run(
        [sys.executable, str(SCRIPT), "--project-root", str(REPO_ROOT)],
        capture_output=True,
        text=True,
        cwd=REPO_ROOT,
        check=False,
    )
    assert proc.returncode == 0
    assert "missing_tasks=" in proc.stdout


def test_discover_script_json_shape():
    proc = subprocess.run(
        [sys.executable, str(SCRIPT), "--project-root", str(REPO_ROOT), "--json"],
        capture_output=True,
        text=True,
        cwd=REPO_ROOT,
        check=False,
    )
    assert proc.returncode == 0
    data = json.loads(proc.stdout)
    assert "summary" in data
    assert "missing_tasks" in data["summary"]
    assert "taskless_fbu" in data["summary"]

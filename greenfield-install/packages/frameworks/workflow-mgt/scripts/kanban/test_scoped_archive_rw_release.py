#!/usr/bin/env python3
"""Tests for scoped_archive_rw_release.py (BR-113)."""

import importlib.util
import sqlite3
import sys
import tempfile
from pathlib import Path


def _load(name: str, filename: str):
    path = Path(__file__).resolve().parent / filename
    spec = importlib.util.spec_from_file_location(name, path)
    mod = importlib.util.module_from_spec(spec)
    sys.modules[name] = mod
    spec.loader.exec_module(mod)
    return mod


def _load_scoped():
    return _load("scoped_archive_rw_release", "scoped_archive_rw_release.py")


def _init_db(db_path: Path):
    conn = sqlite3.connect(db_path)
    conn.execute(
        """
        CREATE TABLE IF NOT EXISTS completed_task (
          epic INTEGER NOT NULL,
          story INTEGER NOT NULL,
          task INTEGER NOT NULL,
          internal_version TEXT NOT NULL,
          completed_at TEXT NOT NULL,
          completing_agent TEXT,
          summary TEXT,
          archived_at TEXT NOT NULL,
          kboard_row_snapshot TEXT,
          PRIMARY KEY (epic, story, task)
        )
        """
    )
    conn.commit()
    conn.close()


def test_terminal_task_archived_and_pruned():
    mod = _load_scoped()
    with tempfile.TemporaryDirectory() as tmp:
        root = Path(tmp)
        kanban = root / "docs/kanban"
        kanban.mkdir(parents=True)
        (root / ".adk").mkdir()
        _init_db(root / ".adk/kanban-completed.db")
        (root / "rw-config.yaml").write_text(
            "kanban_root: docs/kanban\nkanban_board: kboard.md\n"
            "kanban_completed:\n  db: .adk/kanban-completed.db\n",
            encoding="utf-8",
        )
        task = kanban / "epics/epic-04/story-14/T13-done.md"
        task.parent.mkdir(parents=True)
        task.write_text("**Status:** COMPLETE\n", encoding="utf-8")
        board = """## MoSCOW
### Should Have (S)
- **E04:S14:T13** – archival test | [Task](epics/epic-04/story-14/T13-done.md) | Last modified: 2026-07-01 12:00 UTC
### Could Have (C)
- **E04:S14:T99** – other | [Task](epics/epic-04/story-14/T99-other.md) | Last modified: 2026-07-01 12:00 UTC
"""
        new_board, changes, result = mod.apply_rw_scoped_terminal_archival(
            board,
            kanban_root=kanban,
            project_root=root,
            epic=4,
            story=14,
            task=13,
            internal_version="0.4.14.13+1",
            dry_run=False,
        )
        assert result.archived
        assert result.pruned
        assert "E04:S14:T13" not in new_board
        assert "E04:S14:T99" in new_board
        assert any("ledger upsert" in c for c in changes)


def test_perpetual_skipped():
    mod = _load_scoped()
    with tempfile.TemporaryDirectory() as tmp:
        root = Path(tmp)
        kanban = root / "docs/kanban"
        kanban.mkdir(parents=True)
        (root / "rw-config.yaml").write_text("kanban_root: docs/kanban\n", encoding="utf-8")
        task = kanban / "epics/epic-02/story-16/T02-perp.md"
        task.parent.mkdir(parents=True)
        task.write_text(
            "**Status:** IN PROGRESS\nperpetual_task: true\n",
            encoding="utf-8",
        )
        board = """### Ongoing (O)
- **E02:S16:T02** – perp | [Task](epics/epic-02/story-16/T02-perp.md) | Last modified: 2026-07-01 12:00 UTC
"""
        _, _, result = mod.apply_rw_scoped_terminal_archival(
            board,
            kanban_root=kanban,
            project_root=root,
            epic=2,
            story=16,
            task=2,
            internal_version="0.2.16.2+1",
            dry_run=True,
        )
        assert result.skipped
        assert "perpetual" in result.skip_reason


def test_waiting_skipped():
    mod = _load_scoped()
    skip = mod.archival_skip_reason("⏳ SHIPPED (verification pending)", False)
    assert skip
    assert "waiting" in skip or "shipped" in skip

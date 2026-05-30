#!/usr/bin/env python3
"""Tests for archive_completed.py (FR-102)."""

import importlib.util
import tempfile
from pathlib import Path


def _load_module():
    path = Path(__file__).resolve().parent / "archive_completed.py"
    spec = importlib.util.spec_from_file_location("archive_completed", path)
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod


def test_terminal_task_status():
    mod = _load_module()
    assert mod.is_terminal_task_status("COMPLETE")
    assert mod.is_terminal_task_status("✅ COMPLETE (v0.2.16.15+1)")
    assert not mod.is_terminal_task_status("IN PROGRESS")
    assert not mod.is_terminal_task_status("TODO")


def test_perpetual_task_not_archivable():
    mod = _load_module()
    with tempfile.TemporaryDirectory() as tmp:
        root = Path(tmp)
        kanban = root / "docs/project-management/kanban"
        kanban.mkdir(parents=True)
        task = kanban / "epics/Epic-2/Story-016/T04-perpetual.md"
        task.parent.mkdir(parents=True)
        task.write_text(
            "**Status:** IN PROGRESS\n**Task Type:** Perpetual Maintenance\nperpetual_task: true\n",
            encoding="utf-8",
        )
        board = """## MoSCOW Prioritized In-Progress Tasks
### Ongoing (O) - Perpetual Tasks
- **E2:S16:T04** – UKW perpetual | [Task](epics/Epic-2/Story-016/T04-perpetual.md) | Last modified: 2026-05-30 00:00 UTC
"""
        cands = mod.scan_kboard_candidates(board, kanban)
        assert len(cands) == 1
        assert not cands[0].archivable
        assert "perpetual" in cands[0].skip_reason


def test_complete_task_archivable():
    mod = _load_module()
    with tempfile.TemporaryDirectory() as tmp:
        root = Path(tmp)
        kanban = root / "docs/project-management/kanban"
        kanban.mkdir(parents=True)
        task = kanban / "epics/Epic-2/Story-016/T15-done.md"
        task.parent.mkdir(parents=True)
        task.write_text("**Status:** COMPLETE\n**Version Anchor:** v0.2.16.15+1\n", encoding="utf-8")
        board = """## MoSCOW Prioritized In-Progress Tasks
### Should Have (S) - Important Tasks
- **E2:S16:T15** – done | [Task](epics/Epic-2/Story-016/T15-done.md) | Last modified: 2026-05-30 20:30 UTC
"""
        cands = mod.scan_kboard_candidates(board, kanban)
        assert len(cands) == 1
        assert cands[0].archivable

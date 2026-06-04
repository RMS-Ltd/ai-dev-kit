#!/usr/bin/env python3
"""Tests for state_icons.py (UXR-012 / E4:S13:T07)."""

from __future__ import annotations

import sys
from pathlib import Path

THIS_DIR = Path(__file__).resolve().parent
KANBAN_DIR = THIS_DIR / "kanban"
if str(KANBAN_DIR) not in sys.path:
    sys.path.insert(0, str(KANBAN_DIR))

import state_icons as si  # noqa: E402

KB_LINE = (
    "- **E4:S19:T03** – FR-087: investigate why `E6:S07` became default housing "
    "and decide closure/scope - IN PROGRESS (HIGH, note) | Last modified: 2026-05-14 11:06 UTC"
)
COMPLETE_LINE = (
    "- **E2:S15:T08** – Board stamp authority and forensic timestamp recovery (FR-097) "
    "- ✅ COMPLETE (v0.2.15.8+2) - [Task](epics/x.md) | Last modified: 2026-05-20 19:00 UTC"
)


def test_primary_and_fallback():
    assert si.primary_icon("TODO") == "📋"
    assert si.fallback_icon("TODO") == "○"
    assert si.primary_icon("IN_PROGRESS") == "🔄"


def test_inject_inserts_icon():
    new_line, ch = si.inject_primary_icon_into_moscow_line(KB_LINE)
    assert ch is True
    assert "🔄 IN PROGRESS" in new_line
    assert "Last modified: 2026-05-14 11:06 UTC" in new_line


def test_inject_idempotent_complete():
    new_line, ch = si.inject_primary_icon_into_moscow_line(COMPLETE_LINE)
    assert ch is False
    assert new_line == COMPLETE_LINE
    assert si.row_has_primary_icon(COMPLETE_LINE)


def test_strip_then_reapply_todo():
    line = (
        "- **E5:S01:T31** – Multi-agent coordination (FR-031) - TODO (C priority) "
        "| Last modified: 2026-01-14 00:00 UTC"
    )
    n1, c1 = si.inject_primary_icon_into_moscow_line(line)
    assert c1 is True
    n2, c2 = si.inject_primary_icon_into_moscow_line(n1)
    assert c2 is False
    assert si.row_has_primary_icon(n1)


def test_rewrite_todo_inprogress_to_complete_plain():
    line = (
        "- **E4:S13:T07** – Kanban state icons - TODO (C) | Last updated: 2026-05-20"
    )
    out = si.rewrite_todo_or_in_progress_to_complete_in_line(line)
    assert " - ✅ COMPLETE " in out
    assert "TODO" not in out.split(" - ✅ COMPLETE ")[1].split("|")[0]


def test_rewrite_todo_inprogress_to_complete_with_icon():
    line = (
        "- **E4:S13:T07** – Kanban state icons - 🔄 IN PROGRESS (C) | Last updated: 2026-05-20"
    )
    out = si.rewrite_todo_or_in_progress_to_complete_in_line(line)
    assert " - ✅ COMPLETE " in out
    assert "IN PROGRESS" not in out.split(" - ✅ COMPLETE ")[1].split("|")[0]
    assert "🔄" not in out.split(" - ✅ COMPLETE ")[1].split("|")[0]


def test_rewrite_no_match_unchanged():
    line = "- **E1:S1:T1** – x - 🟢 OPEN | Last modified: 2026-01-01"
    assert si.rewrite_todo_or_in_progress_to_complete_in_line(line) == line


def test_fixture_board_validator():
    sys.path.insert(0, str(THIS_DIR / "validation"))
    import validate_kanban_state_icons as vsci  # noqa: E402
    import tempfile

    with tempfile.TemporaryDirectory() as tmp:
        root = Path(tmp)
        bad = root / "b.md"
        bad.write_text(
            "## MoSCOW Prioritized\n\n"
            "- **FR-1** – t - OPEN | Last modified: 2026-01-01 00:00 UTC\n",
            encoding="utf-8",
        )
        ok, findings = vsci.validate_board_file(bad)
        assert ok is False
        assert findings

        good = root / "g.md"
        good.write_text(
            "## MoSCOW Prioritized\n\n"
            "- **FR-1** – t - 🟢 OPEN | Last modified: 2026-01-01 00:00 UTC\n",
            encoding="utf-8",
        )
        ok2, f2 = vsci.validate_board_file(good)
        assert ok2 is True
        assert not f2


if __name__ == "__main__":
    for name in sorted(globals()):
        if name.startswith("test_"):
            globals()[name]()
    print("test_state_icons: OK")

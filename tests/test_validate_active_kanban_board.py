"""Tests for validate_active_kanban_board (FR-109)."""

from __future__ import annotations

import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
VAL_DIR = ROOT / "packages/frameworks/workflow-mgt/scripts/validation"
if str(VAL_DIR) not in sys.path:
    sys.path.insert(0, str(VAL_DIR))

from validate_active_kanban_board import validate_board_file  # noqa: E402


def _minimal_kboard_moscow(*rows: str) -> str:
    body = "\n\n".join(rows)
    return f"""# Board

## MoSCOW Prioritized In-Progress Tasks

### Must Have (M) - Critical Tasks

{body}
"""


def test_passes_live_open_row(tmp_path: Path) -> None:
    content = _minimal_kboard_moscow(
        "- **E02:S16:T04** – UKW perpetual - 🔄 PERPETUAL - "
        "[Task](t.md) | —No IPP— | Last modified: 2026-06-04 12:00 UTC"
    )
    path = tmp_path / "kboard.md"
    path.write_text(content, encoding="utf-8")
    ok, findings = validate_board_file(path)
    assert ok
    assert not findings


def test_blocks_missing_ipp_segment(tmp_path: Path) -> None:
    content = _minimal_kboard_moscow(
        "- **E08:S03:T12** – Waiting task - ⏳ WAITING - "
        "[Task](t.md) | [BR-099](br.md) | Last modified: 2026-06-04 12:00 UTC"
    )
    path = tmp_path / "kboard.md"
    path.write_text(content, encoding="utf-8")
    ok, findings = validate_board_file(path)
    assert not ok
    assert any("missing IPP segment" in f for f in findings)


def test_passes_row_with_linked_ipp(tmp_path: Path) -> None:
    content = _minimal_kboard_moscow(
        "- **E02:S16:T20** – IPP restore - 🔄 IN PROGRESS - "
        "[Task](t.md) | [UXR-023](uxr.md) | "
        "[—IPP—](../../implementation-cycles/IPP-E02S16T20.md) | "
        "Last modified: 2026-06-04 12:00 UTC"
    )
    path = tmp_path / "kboard.md"
    path.write_text(content, encoding="utf-8")
    ok, findings = validate_board_file(path)
    assert ok
    assert not findings


def test_blocks_terminal_complete_row(tmp_path: Path) -> None:
    content = _minimal_kboard_moscow(
        "- **E02:S16:T02** – Done task - ✅ COMPLETE - "
        "[Task](t.md) | —No IPP— | Last modified: 2026-06-04 12:00 UTC"
    )
    path = tmp_path / "kboard.md"
    path.write_text(content, encoding="utf-8")
    ok, findings = validate_board_file(path)
    assert not ok
    assert any("terminal status" in f for f in findings)


def test_blocks_journal_line(tmp_path: Path) -> None:
    content = _minimal_kboard_moscow(
        "**2026-06-04:** Archived T02 to kanban-completed.",
        "- **E02:S16:T04** – UKW - 🔄 PERPETUAL - "
        "[Task](t.md) | —No IPP— | Last modified: 2026-06-04 12:00 UTC",
    )
    path = tmp_path / "kboard.md"
    path.write_text(content, encoding="utf-8")
    ok, findings = validate_board_file(path)
    assert not ok
    assert any("journal line" in f for f in findings)


def test_blocks_legacy_statistics_section(tmp_path: Path) -> None:
    path = tmp_path / "kboard.md"
    path.write_text(
        "# FBU\n\n## Board Statistics\n\nTotal: 99\n",
        encoding="utf-8",
    )
    ok, findings = validate_board_file(path)
    assert not ok
    assert any("Board Statistics" in f for f in findings)

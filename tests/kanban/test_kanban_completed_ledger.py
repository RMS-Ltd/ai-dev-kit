"""Tests for FR-134 kanban-completed SQLite ledger."""

from __future__ import annotations

import sys
from pathlib import Path

import pytest

ROOT = Path(__file__).resolve().parents[2]
SCRIPTS = ROOT / "packages" / "frameworks" / "workflow-mgt" / "scripts"
if str(SCRIPTS) not in sys.path:
    sys.path.insert(0, str(SCRIPTS))

from kanban_completed.db import open_db, utc_now_iso  # noqa: E402
from kanban_completed.export_pdf import write_completed_ledger_pdf  # noqa: E402
from kanban_completed.ledger import (  # noqa: E402
    CompletedTaskRow,
    list_recent,
    parse_markdown_ledger,
    upsert_completed_task,
)


def _sample_row(**kwargs) -> CompletedTaskRow:
    base = dict(
        epic=4,
        story=14,
        task=12,
        internal_version="v0.4.14.12+1",
        completed_at="2026-06-15T20:00:00Z",
        completing_agent="test",
        summary="SQLite ledger test",
        archived_at=utc_now_iso(),
    )
    base.update(kwargs)
    return CompletedTaskRow(**base)


def test_upsert_idempotent(tmp_path: Path) -> None:
    db = tmp_path / "kanban-completed.db"
    conn = open_db(db)
    row = _sample_row()
    upsert_completed_task(conn, row)
    upsert_completed_task(conn, row)
    recent = list_recent(conn, limit=5)
    assert len(recent) == 1
    assert recent[0].internal_version == "v0.4.14.12+1"


def test_parse_markdown_snippet() -> None:
    text = """
- **[E04:S14:T12](epics/epic-04/story-14/T12.md)** — Summary line
  **Completed:** `2026-06-15T20:00:00Z` | **Version:** `v0.4.14.12+1` | **Agent:** `RW`
"""
    rows = list(parse_markdown_ledger(text))
    assert len(rows) == 1
    assert rows[0].epic == 4 and rows[0].story == 14 and rows[0].task == 12
    assert rows[0].completed_at.startswith("2026-06-15")


def test_pdf_export_smoke(tmp_path: Path) -> None:
    db = tmp_path / "kanban-completed.db"
    pdf = tmp_path / "kanban-completed.pdf"
    conn = open_db(db)
    upsert_completed_task(conn, _sample_row())
    rows = list_recent(conn, limit=20)
    write_completed_ledger_pdf(pdf, recent=rows, all_rows=rows)
    data = pdf.read_bytes()
    assert data.startswith(b"%PDF")
    assert len(data) > 200

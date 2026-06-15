#!/usr/bin/env python3
"""Validate kanban-completed SQLite ledger (FR-134)."""

from __future__ import annotations

import argparse
import sys
from pathlib import Path

_SCRIPT_DIR = Path(__file__).resolve().parent
_WORKFLOW_SCRIPTS = _SCRIPT_DIR.parent
for _p in (_WORKFLOW_SCRIPTS,):
    if str(_p) not in sys.path:
        sys.path.insert(0, str(_p))

from kanban_completed.config import find_project_root, ledger_paths  # noqa: E402
from kanban_completed.db import open_db  # noqa: E402
from kanban_completed.ledger import count_rows  # noqa: E402


def main(argv: list[str] | None = None) -> int:
    root = find_project_root()
    parser = argparse.ArgumentParser(description="Validate kanban-completed ledger")
    parser.add_argument("--project-root", type=Path, default=root)
    parser.add_argument("--db", type=Path, default=None)
    parser.add_argument("--pdf", type=Path, default=None)
    parser.add_argument("--strict", action="store_true")
    args = parser.parse_args(argv)

    db_path, pdf_path = ledger_paths(args.project_root)
    if args.db:
        db_path = args.db
    if args.pdf:
        pdf_path = args.pdf

    errors: list[str] = []
    if not db_path.is_file():
        errors.append(f"missing DB: {db_path}")
    else:
        conn = open_db(db_path)
        dup = conn.execute(
            """
            SELECT epic, story, task, COUNT(*) AS c
            FROM completed_task
            GROUP BY epic, story, task
            HAVING c > 1
            """
        ).fetchall()
        if dup:
            errors.append(f"duplicate PK rows: {len(dup)}")
        if count_rows(conn) == 0 and args.strict:
            errors.append("ledger empty (--strict)")

    if args.strict and not pdf_path.is_file():
        errors.append(f"missing PDF report: {pdf_path}")

    if errors:
        for err in errors:
            print(f"validate_kanban_completed: {err}", file=sys.stderr)
        return 1
    print(f"validate_kanban_completed: OK rows={count_rows(open_db(db_path)) if db_path.is_file() else 0}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

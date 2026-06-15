#!/usr/bin/env python3
"""Export kanban-completed SQLite ledger to PDF (FR-134)."""

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
from kanban_completed.db import open_db, utc_now_iso  # noqa: E402
from kanban_completed.export_pdf import write_completed_ledger_pdf  # noqa: E402
from kanban_completed.ledger import list_all, list_recent  # noqa: E402


def main(argv: list[str] | None = None) -> int:
    root = find_project_root()
    parser = argparse.ArgumentParser(description="Export completed-task ledger report")
    parser.add_argument("--project-root", type=Path, default=root)
    parser.add_argument("--db", type=Path, default=None)
    parser.add_argument("--pdf", type=Path, default=None)
    parser.add_argument("--recent", type=int, default=20)
    parser.add_argument("--pdf-only", action="store_true", default=True)
    args = parser.parse_args(argv)

    db_path, pdf_path = ledger_paths(args.project_root)
    if args.db:
        db_path = args.db
    if args.pdf:
        pdf_path = args.pdf

    conn = open_db(db_path)
    write_completed_ledger_pdf(
        pdf_path,
        recent=list_recent(conn, limit=args.recent),
        all_rows=list_all(conn),
        generated_at=utc_now_iso(),
    )
    print(f"export_kanban_completed_report: wrote {pdf_path}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

#!/usr/bin/env python3
"""Import legacy kanban-completed.md into SQLite ledger (FR-134)."""

from __future__ import annotations

import argparse
import sys
from pathlib import Path

_SCRIPT_DIR = Path(__file__).resolve().parent
_WORKFLOW_SCRIPTS = _SCRIPT_DIR.parent
for _p in (_WORKFLOW_SCRIPTS,):
    if str(_p) not in sys.path:
        sys.path.insert(0, str(_p))

from kanban_completed.config import find_project_root, ledger_paths, load_rw_config  # noqa: E402
from kanban_completed.db import open_db  # noqa: E402
from kanban_completed.ledger import parse_markdown_ledger, upsert_completed_task  # noqa: E402


def main(argv: list[str] | None = None) -> int:
    root = find_project_root()
    cfg = load_rw_config(root)
    kanban_root = root / (cfg.get("kanban_root") or "docs/kanban")
    default_md = kanban_root / "kanban-completed.md"

    parser = argparse.ArgumentParser(description="Import kanban-completed.md → SQLite")
    parser.add_argument("--project-root", type=Path, default=root)
    parser.add_argument("--db", type=Path, default=None)
    parser.add_argument("--markdown", type=Path, default=default_md)
    args = parser.parse_args(argv)

    md_path = args.markdown
    if not md_path.is_file():
        print(f"import_kanban_completed_md: missing {md_path}", file=sys.stderr)
        return 1

    db_path = args.db or ledger_paths(args.project_root)[0]
    conn = open_db(db_path)
    text = md_path.read_text(encoding="utf-8", errors="replace")
    count = 0
    for row in parse_markdown_ledger(text):
        upsert_completed_task(conn, row)
        count += 1
    print(f"import_kanban_completed_md: imported {count} row(s) into {db_path}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

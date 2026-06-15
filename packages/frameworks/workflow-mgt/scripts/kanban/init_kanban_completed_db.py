#!/usr/bin/env python3
"""Initialize empty kanban-completed SQLite ledger (FR-134)."""

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


def main(argv: list[str] | None = None) -> int:
    root = find_project_root()
    parser = argparse.ArgumentParser(description="Initialize .adk/kanban-completed.db")
    parser.add_argument("--project-root", type=Path, default=root)
    parser.add_argument("--db", type=Path, default=None)
    parser.add_argument("--force", action="store_true")
    args = parser.parse_args(argv)

    db_path = args.db or ledger_paths(args.project_root)[0]
    if db_path.is_file() and not args.force:
        print(f"init_kanban_completed_db: OK — already exists: {db_path}")
        return 0
    open_db(db_path)
    print(f"init_kanban_completed_db: created {db_path}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

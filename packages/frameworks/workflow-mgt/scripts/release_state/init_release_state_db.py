#!/usr/bin/env python3
"""Initialize empty SQLite release-state DB (greenfield / pre-RW)."""

from __future__ import annotations

import argparse
import sys
from pathlib import Path

_SCRIPT_DIR = Path(__file__).resolve().parent
_WORKFLOW_SCRIPTS = _SCRIPT_DIR.parent
for _p in (_WORKFLOW_SCRIPTS, _SCRIPT_DIR):
    if str(_p) not in sys.path:
        sys.path.insert(0, str(_p))

from release_state.db import open_db  # noqa: E402


def find_project_root(start: Path) -> Path:
    current = start.resolve()
    for candidate in [current, *current.parents]:
        if (candidate / "rw-config.yaml").is_file():
            return candidate
    return start.resolve()


def init_empty_db(db_path: Path) -> Path:
    db_path.parent.mkdir(parents=True, exist_ok=True)
    open_db(db_path)
    return db_path


def main(argv: list[str] | None = None) -> int:
    root = find_project_root(Path.cwd())
    parser = argparse.ArgumentParser(
        description="Initialize empty .adk/release-state.db (sqlite mode, no legacy YAML)."
    )
    parser.add_argument(
        "--project-root",
        type=Path,
        default=root,
        help="Adopter project root (default: nearest rw-config.yaml ancestor).",
    )
    parser.add_argument(
        "--db",
        type=Path,
        default=None,
        help="DB path (default: <project-root>/.adk/release-state.db).",
    )
    parser.add_argument(
        "--force",
        action="store_true",
        help="Re-initialize schema if DB already exists.",
    )
    args = parser.parse_args(argv)

    project_root = args.project_root.resolve()
    db_path = args.db or (project_root / ".adk" / "release-state.db")

    if db_path.is_file() and not args.force:
        print(f"init_release_state_db: OK — already exists: {db_path}")
        return 0

    init_empty_db(db_path)
    print(f"init_release_state_db: created {db_path}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

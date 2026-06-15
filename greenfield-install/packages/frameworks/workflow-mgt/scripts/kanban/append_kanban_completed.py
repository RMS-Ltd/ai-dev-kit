#!/usr/bin/env python3
"""Upsert a row in the kanban-completed SQLite ledger (FR-134)."""

from __future__ import annotations

import argparse
import re
import sys
from pathlib import Path

_SCRIPT_DIR = Path(__file__).resolve().parent
_WORKFLOW_SCRIPTS = _SCRIPT_DIR.parent
for _p in (_WORKFLOW_SCRIPTS,):
    if str(_p) not in sys.path:
        sys.path.insert(0, str(_p))

from kanban_completed.config import find_project_root, ledger_paths  # noqa: E402
from kanban_completed.db import open_db, utc_now_iso  # noqa: E402
from kanban_completed.ledger import CompletedTaskRow, upsert_completed_task  # noqa: E402

EST_RE = re.compile(r"^E(\d+):S(\d+):T(\d+)$", re.I)


def parse_est(token: str) -> tuple[int, int, int]:
    m = EST_RE.match(token.strip())
    if not m:
        raise ValueError(f"Invalid task token: {token!r} (expected E##:S##:T##)")
    return int(m.group(1)), int(m.group(2)), int(m.group(3))


def main(argv: list[str] | None = None) -> int:
    root = find_project_root()
    parser = argparse.ArgumentParser(description="Upsert completed task in SQLite ledger")
    parser.add_argument("--project-root", type=Path, default=root)
    parser.add_argument("--db", type=Path, default=None)
    parser.add_argument("--task", required=True, help="E##:S##:T##")
    parser.add_argument("--version", required=True, help="vRC.EPIC.STORY.TASK+BUILD")
    parser.add_argument("--timestamp", default=None, help="ISO 8601 UTC completion time")
    parser.add_argument("--agent", default="UKW", help="Completing agent label")
    parser.add_argument("--summary", default="", help="One-line summary")
    parser.add_argument("--snapshot", default=None, help="Optional kboard row snapshot")
    args = parser.parse_args(argv)

    epic, story, task = parse_est(args.task)
    version = args.version if args.version.startswith("v") else f"v{args.version}"
    completed_at = args.timestamp or utc_now_iso()
    archived_at = utc_now_iso()

    db_path = args.db or ledger_paths(args.project_root)[0]
    conn = open_db(db_path)
    row = CompletedTaskRow(
        epic=epic,
        story=story,
        task=task,
        internal_version=version,
        completed_at=completed_at,
        completing_agent=args.agent,
        summary=args.summary,
        archived_at=archived_at,
        kboard_row_snapshot=args.snapshot,
    )
    upsert_completed_task(conn, row)
    print(f"append_kanban_completed: upserted {row.token} @ {version}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

#!/usr/bin/env python3
"""Blocking gate: terminal released task off active kboard + in ledger (BR-113)."""

from __future__ import annotations

import argparse
import sys
from pathlib import Path

_SCRIPT_DIR = Path(__file__).resolve().parent
_WORKFLOW_ROOT = _SCRIPT_DIR.parent
for _p in (_WORKFLOW_ROOT,):
    if str(_p) not in sys.path:
        sys.path.insert(0, str(_p))

from kanban.scoped_archive_rw_release import (  # noqa: E402
    archival_skip_reason,
    find_kboard_row_line,
    format_est_token,
    parse_est_token,
    resolve_task_doc,
)
from kanban.archive_completed import parse_task_doc_fields  # noqa: E402
from kanban_completed.config import find_project_root, ledger_paths, load_rw_config  # noqa: E402
from kanban_completed.db import open_db  # noqa: E402
from kanban_completed.ledger import get_completed_task  # noqa: E402


def validate(
    project_root: Path,
    requested: str,
    *,
    strict: bool,
) -> tuple[bool, list[str]]:
    errors: list[str] = []
    epic, story, task = parse_est_token(requested)
    token = format_est_token(epic, story, task)
    cfg = load_rw_config(project_root)
    kanban_root = project_root / cfg.get("kanban_root", "docs/kanban")
    board_path = kanban_root / cfg.get("kanban_board", "kboard.md")
    if not board_path.is_file():
        errors.append(f"kboard not found: {board_path}")
        return not strict or not errors, errors

    board_content = board_path.read_text(encoding="utf-8")
    task_doc = resolve_task_doc(project_root, kanban_root, epic, story, task, board_content)
    if task_doc is None:
        errors.append(f"task doc not found for {token}")
        return not strict or not errors, errors

    status, _, perpetual = parse_task_doc_fields(task_doc)
    skip = archival_skip_reason(status, perpetual)
    if skip:
        return True, [f"SKIP ({token}): {skip} — archival not required"]

    row = find_kboard_row_line(board_content, epic, story, task)
    if row:
        errors.append(f"terminal released task {token} still on active kboard.md")

    db_path, _ = ledger_paths(project_root)
    if not db_path.is_file():
        errors.append(f"completed ledger missing: {db_path}")
    else:
        conn = open_db(db_path)
        if get_completed_task(conn, epic, story, task) is None:
            errors.append(f"terminal released task {token} missing from completed ledger")

    ok = len(errors) == 0
    return ok, errors if errors else [f"PASS: {token} archived and pruned"]


def main(argv: list[str] | None = None) -> int:
    root = find_project_root()
    parser = argparse.ArgumentParser(description="RW scoped terminal archival gate (BR-113)")
    parser.add_argument("--project-root", type=Path, default=root)
    parser.add_argument("--requested", required=True)
    parser.add_argument("--strict", action="store_true")
    args = parser.parse_args(argv)

    ok, messages = validate(args.project_root, args.requested, strict=args.strict)
    for m in messages:
        print(m)
    if args.strict and not ok:
        return 1
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

#!/usr/bin/env python3
"""
RW Step 7 scoped terminal archival (BR-113 / E04:S14:T13).

Ledger upsert (FR-134) then prune the released task row from active kboard.md.
Batch archival remains UKW -c (FR-102); this path handles only the RW release E:S:T.
"""

from __future__ import annotations

import argparse
import json
import re
import sys
from dataclasses import dataclass, asdict
from pathlib import Path
from typing import List, Optional, Tuple

_SCRIPT_DIR = Path(__file__).resolve().parent
_WORKFLOW_SCRIPTS = _SCRIPT_DIR.parent
for _p in (_WORKFLOW_SCRIPTS,):
    if str(_p) not in sys.path:
        sys.path.insert(0, str(_p))

from kanban.archive_completed import (  # noqa: E402
    is_terminal_task_status,
    parse_task_doc_fields,
    resolve_task_doc_from_line,
)
from kanban_completed.config import find_project_root, ledger_paths, load_rw_config  # noqa: E402
from kanban_completed.db import open_db, utc_now_iso  # noqa: E402
from kanban_completed.ledger import CompletedTaskRow, upsert_completed_task  # noqa: E402

EST_TOKEN_RE = re.compile(r"E0*(\d+):S0*(\d+):T0*(\d+)", re.I)
ROW_LINE_RE = re.compile(
    r"^-\s+\*\*E0*(\d+):S0*(\d+):T0*(\d+)\*\*",
    re.I,
)
ACTIVE_SECTION_MARKERS = (
    "### Must Have",
    "### Should Have",
    "### Could Have",
    "### Verification",
    "### Ongoing",
)


@dataclass
class ScopedArchiveResult:
    task_token: str
    archived: bool
    pruned: bool
    skipped: bool
    skip_reason: str = ""
    ledger_version: str = ""
    row_snapshot: str = ""

    def to_dict(self) -> dict:
        return asdict(self)


def parse_est_token(token: str) -> Tuple[int, int, int]:
    m = EST_TOKEN_RE.search(token.strip())
    if not m:
        raise ValueError(f"Invalid E:S:T token: {token!r}")
    return int(m.group(1)), int(m.group(2)), int(m.group(3))


def format_est_token(epic: int, story: int, task: int) -> str:
    return f"E{epic:02d}:S{story:02d}:T{task:02d}"


def _row_matches_est(line: str, epic: int, story: int, task: int) -> bool:
    m = ROW_LINE_RE.match(line.strip())
    if not m:
        return False
    return int(m.group(1)) == epic and int(m.group(2)) == story and int(m.group(3)) == task


def _in_active_moscow_section(line: str, section: Optional[str]) -> bool:
    if section in ("must", "should", "could", "ongoing", "verification"):
        return line.strip().startswith("- **")
    return False


def _active_section_from_heading(line: str, current: Optional[str]) -> Optional[str]:
    stripped = line.strip()
    if stripped.startswith("### Must Have"):
        return "must"
    if stripped.startswith("### Should Have"):
        return "should"
    if stripped.startswith("### Could Have"):
        return "could"
    if stripped.startswith("### Verification"):
        return "verification"
    if stripped.startswith("### Ongoing"):
        return "ongoing"
    if stripped.startswith("### Won't Have"):
        return "wont"
    return current


def find_kboard_row_line(board_content: str, epic: int, story: int, task: int) -> Optional[str]:
    section: Optional[str] = None
    for line in board_content.splitlines():
        section = _active_section_from_heading(line, section)
        if _in_active_moscow_section(line, section) and _row_matches_est(line, epic, story, task):
            return line
    return None


def prune_kboard_row(board_content: str, epic: int, story: int, task: int) -> Tuple[str, Optional[str]]:
    lines = board_content.splitlines()
    section: Optional[str] = None
    out: List[str] = []
    removed: Optional[str] = None
    for line in lines:
        section = _active_section_from_heading(line, section)
        if removed is None and _in_active_moscow_section(line, section) and _row_matches_est(
            line, epic, story, task
        ):
            removed = line
            continue
        out.append(line)
    text = "\n".join(out)
    text = re.sub(r"\n{3,}", "\n\n", text)
    return text, removed


def archival_skip_reason(status: str, perpetual: bool) -> str:
    if perpetual:
        return "perpetual task"
    upper = (status or "").upper()
    if "PERPETUAL" in upper:
        return "perpetual task"
    if "WAITING" in upper or ("SHIPPED" in upper and "COMPLETE" not in upper):
        return "waiting or shipped verification"
    if "IN PROGRESS" in upper and not is_terminal_task_status(status):
        return "in progress"
    if "PARTIAL" in upper and "COMPLETE" not in upper:
        return "partial completion"
    if not is_terminal_task_status(status):
        return f"task status not terminal: {status[:60]}"
    return ""


def resolve_task_doc(
    project_root: Path,
    kanban_root: Path,
    epic: int,
    story: int,
    task: int,
    board_content: str,
) -> Optional[Path]:
    row = find_kboard_row_line(board_content, epic, story, task)
    if row:
        doc = resolve_task_doc_from_line(row, kanban_root)
        if doc and doc.exists():
            return doc
    cfg = load_rw_config(project_root)
    pattern = cfg.get("task_doc_pattern") or "epics/epic-{epic:02d}/story-{story:02d}-*/T{task:02d}-*.md"
    rel_glob = pattern.format(epic=epic, story=story, task=task)
    matches = sorted(kanban_root.glob(rel_glob))
    return matches[0] if matches else None


def apply_rw_scoped_terminal_archival(
    board_content: str,
    *,
    kanban_root: Path,
    project_root: Path,
    epic: int,
    story: int,
    task: int,
    internal_version: str,
    completing_agent: str = "RW Step 7",
    completed_at: Optional[str] = None,
    dry_run: bool = False,
) -> Tuple[str, List[str], ScopedArchiveResult]:
    token = format_est_token(epic, story, task)
    result = ScopedArchiveResult(
        task_token=token, archived=False, pruned=False, skipped=True
    )
    changes: List[str] = []

    task_doc = resolve_task_doc(project_root, kanban_root, epic, story, task, board_content)
    if task_doc is None:
        result.skip_reason = "task doc not found"
        changes.append(f"Scoped archival skipped ({token}): task doc not found")
        return board_content, changes, result

    status, _, perpetual = parse_task_doc_fields(task_doc)
    skip = archival_skip_reason(status, perpetual)
    if skip:
        result.skip_reason = skip
        changes.append(f"Scoped archival skipped ({token}): {skip}")
        return board_content, changes, result

    row_line = find_kboard_row_line(board_content, epic, story, task)
    if row_line is None:
        result.skipped = True
        result.skip_reason = "no active kboard row (already pruned or absent)"
        changes.append(f"Scoped archival: {token} not on active kboard (ledger check only)")
        # Still upsert ledger if terminal — release may have pruned manually
    else:
        result.row_snapshot = row_line.strip()

    version = internal_version if internal_version.startswith("v") else f"v{internal_version}"
    ts = completed_at or utc_now_iso()
    summary = f"**{token}** — RW Step 7 scoped terminal archival @ {version}"

    if not dry_run:
        db_path, _ = ledger_paths(project_root)
        conn = open_db(db_path)
        upsert_completed_task(
            conn,
            CompletedTaskRow(
                epic=epic,
                story=story,
                task=task,
                internal_version=version,
                completed_at=ts,
                completing_agent=completing_agent,
                summary=summary,
                archived_at=utc_now_iso(),
                kboard_row_snapshot=result.row_snapshot or None,
            ),
        )
    result.archived = True
    result.ledger_version = version
    changes.append(f"Scoped archival: ledger upsert {token} @ {version}")

    if row_line is not None:
        new_content, removed = prune_kboard_row(board_content, epic, story, task)
        if removed:
            board_content = new_content
            result.pruned = True
            result.skipped = False
            result.skip_reason = ""
            changes.append(f"Scoped archival: pruned active kboard row for {token}")
        if not dry_run:
            pass  # caller writes board
    else:
        result.skipped = not result.archived

    return board_content, changes, result


def main(argv: Optional[List[str]] = None) -> int:
    root = find_project_root()
    parser = argparse.ArgumentParser(description="RW Step 7 scoped terminal archival (BR-113)")
    parser.add_argument("--project-root", type=Path, default=root)
    parser.add_argument("--requested", required=True, help="E##:S##:T##")
    parser.add_argument("--internal-version", required=True)
    parser.add_argument("--kanban-root", type=Path, default=None)
    parser.add_argument("--kboard", type=Path, default=None)
    parser.add_argument("--completed-at", default=None)
    parser.add_argument("--dry-run", action="store_true")
    parser.add_argument("--json", action="store_true")
    args = parser.parse_args(argv)

    epic, story, task = parse_est_token(args.requested)
    cfg = load_rw_config(args.project_root)
    kanban_root = args.kanban_root or (args.project_root / cfg.get("kanban_root", "docs/kanban"))
    board_path = args.kboard or (kanban_root / cfg.get("kanban_board", "kboard.md"))
    if not board_path.is_file():
        print(f"scoped_archive_rw_release: kboard not found: {board_path}", file=sys.stderr)
        return 2

    content = board_path.read_text(encoding="utf-8")
    new_content, changes, result = apply_rw_scoped_terminal_archival(
        content,
        kanban_root=kanban_root,
        project_root=args.project_root,
        epic=epic,
        story=story,
        task=task,
        internal_version=args.internal_version,
        completed_at=args.completed_at,
        dry_run=args.dry_run,
    )
    if result.pruned and not args.dry_run:
        board_path.write_text(new_content, encoding="utf-8")

    if args.json:
        print(json.dumps({"changes": changes, "result": result.to_dict()}, indent=2))
    else:
        for c in changes:
            print(c)
    return 0 if (result.archived or result.skip_reason) else 1


if __name__ == "__main__":
    raise SystemExit(main())

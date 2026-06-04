#!/usr/bin/env python3
"""Detect IPW-derived tasks that remain TODO despite implementation evidence.

FR-077 guard: catches "implemented but TODO" drift so status transitions are
applied deterministically before release finalization.
"""

from __future__ import annotations

import argparse
import re
import sys
from pathlib import Path
from typing import List, Optional, Tuple

_SCRIPT_DIR = Path(__file__).resolve().parent
_KANBAN_DIR = _SCRIPT_DIR.parent / "kanban"
if str(_KANBAN_DIR) not in sys.path:
    sys.path.insert(0, str(_KANBAN_DIR))

from ukw_syntax_parser import parse_single_task_id


STATUS_RE = re.compile(r"^\*\*Status:\*\*\s*(.+?)\s*$", re.IGNORECASE | re.MULTILINE)
IPW_MARKER_RE = re.compile(r"\b(?:IPW|ICW)-E\d+S\d+T\d+\b", re.IGNORECASE)
IMPLEMENTATION_SIGNAL_RES = [
    re.compile(r"^##\s+Implementation note\b", re.IGNORECASE | re.MULTILINE),
    re.compile(r"^##\s+Verification evidence\b", re.IGNORECASE | re.MULTILINE),
    re.compile(r"\bpytest\b", re.IGNORECASE),
    re.compile(r"\bReleased\s+\*\*v\d+\.\d+\.\d+\.\d+\+\d+\*\*", re.IGNORECASE),
]


def _status_line(content: str) -> Optional[str]:
    m = STATUS_RE.search(content)
    if not m:
        return None
    return m.group(1).strip()


def _is_ipw_derived(content: str) -> bool:
    return bool(IPW_MARKER_RE.search(content))


def _implementation_signal(content: str) -> Optional[str]:
    for pattern in IMPLEMENTATION_SIGNAL_RES:
        if pattern.search(content):
            return pattern.pattern
    return None


def discover_task_docs(kanban_root: Path) -> List[Path]:
    epics_root = kanban_root / "epics"
    if not epics_root.exists():
        return []
    docs = sorted(epics_root.glob("**/T*-*.md"))
    return [p for p in docs if p.is_file()]


TASK_ID_RE = re.compile(r"\*\*Task ID:\*\*\s*E(\d+):S(\d+):T(\d+)\b", re.IGNORECASE)


def parse_task_id(content: str) -> Optional[Tuple[int, int, int]]:
    m = TASK_ID_RE.search(content)
    if not m:
        return None
    return (int(m.group(1)), int(m.group(2)), int(m.group(3)))


def validate_task_doc(path: Path) -> Optional[str]:
    content = path.read_text(encoding="utf-8", errors="replace")
    if not _is_ipw_derived(content):
        return None

    status = _status_line(content)
    if not status or "TODO" not in status.upper():
        return None

    signal = _implementation_signal(content)
    if signal is None:
        return None

    return (
        f"{path}: IPW/ICW-derived task has status TODO but contains implementation "
        f"evidence (matched: {signal})"
    )


def find_requested_task_doc(
    docs: List[Path],
    requested: Tuple[int, int, int],
) -> Optional[Path]:
    target = requested
    for doc in docs:
        content = doc.read_text(encoding="utf-8", errors="replace")
        task_id = parse_task_id(content)
        if task_id == target:
            return doc
    return None


def main() -> int:
    parser = argparse.ArgumentParser(
        description="Validate no IPW-derived tasks are implemented while still TODO (FR-077)."
    )
    parser.add_argument(
        "--kanban-root",
        default="docs/project-management/kanban",
        help="Kanban root directory (default: docs/project-management/kanban)",
    )
    parser.add_argument(
        "--project-root",
        default=".",
        help="Project root directory (default: current working directory)",
    )
    parser.add_argument(
        "--requested",
        default=None,
        help=(
            "Optional target task id (e.g. E2S01T17). If provided, validates this task "
            "deterministically and exits after requested-task evaluation unless "
            "--scan-all-with-requested is supplied."
        ),
    )
    parser.add_argument(
        "--scan-all-with-requested",
        action="store_true",
        help=(
            "When --requested is provided, continue scanning all remaining tasks after "
            "requested-task validation. Default behavior is requested-task-only."
        ),
    )
    args = parser.parse_args()

    project_root = Path(args.project_root).resolve()
    kanban_root = (project_root / args.kanban_root).resolve()
    if not kanban_root.exists():
        print(f"ERROR: kanban root not found: {kanban_root}")
        return 1

    docs = discover_task_docs(kanban_root)
    findings: List[str] = []
    requested_msg = None
    requested_doc: Optional[Path] = None
    if args.requested:
        parsed = parse_single_task_id(args.requested.strip())
        if parsed is None:
            print(f"ERROR: could not parse requested task id: {args.requested!r}")
            return 2
        requested_doc = find_requested_task_doc(docs, parsed)
        if requested_doc is None:
            print(f"ERROR: requested task doc not found for E{parsed[0]}:S{parsed[1]}:T{parsed[2]}")
            return 1
        requested_msg = validate_task_doc(requested_doc)
        if requested_msg:
            print("FAIL: IPW status drift detected for requested task")
            print(f" - {requested_msg}")
            print(
                " - Remediation: implementation execution must transition task-doc status "
                "to IN PROGRESS or COMPLETE before RW Step 1.4."
            )
            return 1
        if not args.scan_all_with_requested:
            print(f"Scanned task docs: {len(docs)}")
            print(f"PASS: requested task has no IPW status drift ({args.requested})")
            print("PASS: no IPW implemented-but-TODO drift detected")
            return 0

    for doc in docs:
        if requested_doc is not None and doc == requested_doc:
            continue
        finding = validate_task_doc(doc)
        if finding:
            findings.append(finding)

    print(f"Scanned task docs: {len(docs)}")
    if findings:
        print("FAIL: IPW status drift detected")
        for finding in findings:
            print(f" - {finding}")
        return 1

    if args.requested:
        print(f"PASS: requested task has no IPW status drift ({args.requested})")
    print("PASS: no IPW implemented-but-TODO drift detected")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())


#!/usr/bin/env python3
"""
Board Stamp Authority validator (FR-097 / E2:S15:T08).

Compares before/after board content and blocks when row `Last modified`
stamps change without evidence (manifest or linked-source delta).
"""

from __future__ import annotations

import argparse
import json
import sys
from pathlib import Path
from typing import List, Optional

_SCRIPT_DIR = Path(__file__).resolve().parent
_KANBAN_DIR = _SCRIPT_DIR.parent / "kanban"
if str(_KANBAN_DIR) not in sys.path:
    sys.path.insert(0, str(_KANBAN_DIR))

from stamp_authority import (  # noqa: E402
    active_board_paths,
    load_evidence_manifest,
    load_rw_config,
    validate_stamp_diff,
)


def _read_board(path: Path) -> str:
    return path.read_text(encoding="utf-8", errors="replace")


def validate_board_pair(
    before_path: Path,
    after_path: Path,
    *,
    project_root: Path,
    evidence_manifest_path: Optional[Path] = None,
    strict: bool = True,
) -> tuple[bool, list]:
    before_content = _read_board(before_path)
    after_content = _read_board(after_path)
    manifest = None
    if evidence_manifest_path and evidence_manifest_path.exists():
        manifest = load_evidence_manifest(evidence_manifest_path)
    passed, denied = validate_stamp_diff(
        before_content,
        after_content,
        project_root=project_root,
        board_path=after_path,
        evidence_manifest=manifest,
    )
    return passed, denied


def main(argv: Optional[List[str]] = None) -> int:
    parser = argparse.ArgumentParser(
        description="Validate MoSCOW row stamp changes have evidence (FR-097)."
    )
    parser.add_argument(
        "--before",
        required=True,
        help="Path to board snapshot before workflow (or board file at start).",
    )
    parser.add_argument(
        "--after",
        required=True,
        help="Path to board file after workflow edits.",
    )
    parser.add_argument(
        "--project-root",
        type=Path,
        default=Path.cwd(),
        help="Repository root (default: cwd).",
    )
    parser.add_argument(
        "--evidence-manifest",
        type=Path,
        default=None,
        help="JSON manifest of allowed stamp changes per row_id.",
    )
    parser.add_argument(
        "--report",
        type=Path,
        default=None,
        help="Write JSON report of denied deltas.",
    )
    parser.add_argument(
        "--strict",
        action="store_true",
        default=True,
        help="Exit 1 on denial (default: true).",
    )
    parser.add_argument(
        "--no-strict",
        action="store_false",
        dest="strict",
        help="Warn only; exit 0.",
    )
    args = parser.parse_args(argv)

    before_path = Path(args.before)
    after_path = Path(args.after)
    project_root = args.project_root.resolve()

    if not before_path.exists():
        print(f"STAMP DIFF ABORTED: before snapshot missing: {before_path}", file=sys.stderr)
        return 1
    if not after_path.exists():
        print(f"STAMP DIFF ABORTED: after board missing: {after_path}", file=sys.stderr)
        return 1

    passed, denied = validate_board_pair(
        before_path,
        after_path,
        project_root=project_root,
        evidence_manifest_path=args.evidence_manifest,
        strict=args.strict,
    )

    report = {
        "passed": passed,
        "before": str(before_path),
        "after": str(after_path),
        "denied_count": len(denied),
        "denied": [
            {
                "row_id": d.row_id,
                "before": d.before,
                "after": d.after,
                "reason": d.reason,
            }
            for d in denied
        ],
    }
    if args.report:
        args.report.write_text(json.dumps(report, indent=2), encoding="utf-8")

    if passed:
        print("validate_board_stamp_diff: PASS (no un evidenced stamp deltas)")
        return 0

    print(
        f"validate_board_stamp_diff: FAIL — {len(denied)} row(s) changed stamp without evidence:",
        file=sys.stderr,
    )
    for d in denied:
        print(
            f"  - {d.row_id}: {d.before!r} -> {d.after!r} ({d.reason})",
            file=sys.stderr,
        )
    return 1 if args.strict else 0


if __name__ == "__main__":
    raise SystemExit(main())

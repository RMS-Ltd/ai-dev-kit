#!/usr/bin/env python3
"""
Board timestamp restoration helper (FR-144 / E06:S09:T45).

Kit port of SBL attempt-12 restore_board_timestamps.py pattern.
"""

from __future__ import annotations

import argparse
import json
import sys
from pathlib import Path
from typing import Any, Dict, List, Optional, Tuple

_SCRIPTS_DIR = Path(__file__).resolve().parent.parent
if str(_SCRIPTS_DIR) not in sys.path:
    sys.path.insert(0, str(_SCRIPTS_DIR))

from stamp_authority import (
    homogeneity_clusters,
    homogeneity_threshold_from_config,
    parse_moscow_rows,
    replace_row_terminal_stamp,
)
from timestamp_index import (
    build_timestamp_index,
    lookup_stamp,
    parse_est,
    write_timestamp_index,
)
from rw_config_loader import load_rw_config  # noqa: E402


def load_index(path: Path) -> Dict[str, Any]:
    return json.loads(path.read_text(encoding="utf-8"))


def report_flat_dates(
    board_content: str,
    *,
    threshold: int = 3,
) -> Dict[str, Any]:
    clusters = homogeneity_clusters(board_content, threshold=threshold)
    rows = parse_moscow_rows(board_content)
    stamped = [r for r in rows if r.stamp]
    unique_stamps = {r.stamp for r in stamped if r.stamp}
    return {
        "moscow_rows": len(rows),
        "stamped_rows": len(stamped),
        "unique_stamps": len(unique_stamps),
        "homogeneity_clusters": clusters,
        "flat_date_suspected": len(clusters) > 0,
    }


def apply_board_from_index(
    board_content: str,
    index: Dict[str, Any],
    *,
    dry_run: bool = False,
) -> Tuple[str, List[Dict[str, str]]]:
    lines = board_content.split("\n")
    changes: List[Dict[str, str]] = []
    for row in parse_moscow_rows(board_content):
        if not row.row_id.startswith("E"):
            continue
        task_id = parse_est(row.row_id) or row.row_id
        target = lookup_stamp(index, task_id)
        if not target or target == row.stamp:
            continue
        changes.append(
            {
                "row_id": row.row_id,
                "before": row.stamp or "",
                "after": target,
                "source": (index.get("entries") or {}).get(task_id, {}).get("source", ""),
            }
        )
        if not dry_run:
            lines[row.line_index] = replace_row_terminal_stamp(lines[row.line_index], target)
    updated = board_content if dry_run else "\n".join(lines)
    return updated, changes


def main() -> int:
    parser = argparse.ArgumentParser(description="Restore board timestamps (FR-144)")
    sub = parser.add_subparsers(dest="command", required=True)

    idx_p = sub.add_parser("index", help="Build timestamp-index.json from legacy root")
    idx_p.add_argument("--legacy-root", type=Path, required=True)
    idx_p.add_argument("--lineage", type=Path, default=None)
    idx_p.add_argument("--json-out", type=Path, required=True)

    rep_p = sub.add_parser("report", help="Flat-date / homogeneity report")
    rep_p.add_argument("--board", type=Path, required=True)
    rep_p.add_argument("--project-root", type=Path, default=Path.cwd())

    app_p = sub.add_parser("apply-board", help="Apply index stamps to kboard.md")
    app_p.add_argument("--board", type=Path, required=True)
    app_p.add_argument("--index", type=Path, required=True)
    app_p.add_argument("--dry-run", action="store_true")

    args = parser.parse_args()

    if args.command == "index":
        built = build_timestamp_index(args.legacy_root, lineage_path=args.lineage)
        write_timestamp_index(built, args.json_out)
        print(f"Wrote {args.json_out} ({built.to_dict()['entry_count']} entries)")
        return 0

    board_content = args.board.read_text(encoding="utf-8", errors="replace")

    if args.command == "report":
        config = load_rw_config(args.project_root.resolve())
        threshold = homogeneity_threshold_from_config(args.project_root.resolve(), config)
        report = report_flat_dates(board_content, threshold=threshold)
        print(json.dumps(report, indent=2))
        return 0

    if args.command == "apply-board":
        index = load_index(args.index)
        updated, changes = apply_board_from_index(
            board_content, index, dry_run=args.dry_run
        )
        if not args.dry_run and changes:
            args.board.write_text(updated, encoding="utf-8")
        print(json.dumps({"changes": changes, "count": len(changes)}, indent=2))
        return 0

    return 2


if __name__ == "__main__":
    raise SystemExit(main())

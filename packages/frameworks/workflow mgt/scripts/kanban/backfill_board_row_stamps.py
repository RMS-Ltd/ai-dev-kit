#!/usr/bin/env python3
"""
Automatic forensic backfill for homogenized MoSCOW row stamps (FR-097).

Derives per-row `Last modified` from linked FR/BR/UXR/task doc dates or git.
"""

from __future__ import annotations

import argparse
import json
import sys
from dataclasses import asdict
from pathlib import Path
from typing import List, Optional

_SCRIPT_DIR = Path(__file__).resolve().parent
if str(_SCRIPT_DIR) not in sys.path:
    sys.path.insert(0, str(_SCRIPT_DIR))

from stamp_authority import (  # noqa: E402
    active_board_paths,
    apply_backfill_to_board,
    homogeneity_clusters,
    load_rw_config,
)


def backfill_board(
    board_path: Path,
    project_root: Path,
    *,
    cluster_stamp: Optional[str] = None,
    homogeneity_threshold: int = 10,
    dry_run: bool = True,
) -> dict:
    from stamp_authority import kanban_root_from_config

    config = load_rw_config(project_root)
    kanban_root = kanban_root_from_config(project_root, config)
    original = board_path.read_text(encoding="utf-8")
    updated, results = apply_backfill_to_board(
        original,
        kanban_root,
        project_root,
        cluster_stamp=cluster_stamp,
        homogeneity_threshold=homogeneity_threshold,
    )
    changed = sum(1 for r in results if r.new_stamp and r.old_stamp != r.new_stamp)
    ambiguous = sum(1 for r in results if r.source == "ambiguous")
    if not dry_run and updated != original:
        board_path.write_text(updated, encoding="utf-8")
    return {
        "board": str(board_path),
        "dry_run": dry_run,
        "rows_considered": len(results),
        "rows_changed": changed,
        "rows_ambiguous": ambiguous,
        "clusters_before": homogeneity_clusters(original, threshold=homogeneity_threshold),
        "clusters_after": homogeneity_clusters(updated, threshold=homogeneity_threshold),
        "results": [asdict(r) for r in results],
    }


def main(argv: Optional[List[str]] = None) -> int:
    parser = argparse.ArgumentParser(description="Backfill homogenized board row stamps.")
    parser.add_argument("--project-root", type=Path, default=Path.cwd())
    parser.add_argument(
        "--boards",
        default="kboard,fbuboard",
        help="Comma-separated board basenames under kanban_root.",
    )
    parser.add_argument(
        "--cluster-stamp",
        default=None,
        help="Only re-stamp rows with this exact stamp (e.g. '2026-04-20 15:52 UTC').",
    )
    parser.add_argument("--homogeneity-threshold", type=int, default=10)
    parser.add_argument("--dry-run", action="store_true", default=False)
    parser.add_argument("--report", type=Path, required=True)
    args = parser.parse_args(argv)

    project_root = args.project_root.resolve()
    config = load_rw_config(project_root)
    from stamp_authority import kanban_root_from_config

    kanban_root = kanban_root_from_config(project_root, config)
    names = [n.strip() for n in args.boards.split(",") if n.strip()]
    reports = []
    for name in names:
        board_path = kanban_root / f"{name}.md"
        if not board_path.exists():
            print(f"skip missing board: {board_path}", file=sys.stderr)
            continue
        reports.append(
            backfill_board(
                board_path,
                project_root,
                cluster_stamp=args.cluster_stamp,
                homogeneity_threshold=args.homogeneity_threshold,
                dry_run=args.dry_run,
            )
        )

    payload = {"boards": reports, "dry_run": args.dry_run}
    args.report.parent.mkdir(parents=True, exist_ok=True)
    args.report.write_text(json.dumps(payload, indent=2), encoding="utf-8")
    total_changed = sum(r["rows_changed"] for r in reports)
    print(
        f"backfill_board_row_stamps: {'dry-run' if args.dry_run else 'applied'} "
        f"{total_changed} row(s) changed; report -> {args.report}"
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

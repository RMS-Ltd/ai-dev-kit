#!/usr/bin/env python3
"""Validate flat-date boards when legacy timestamp index exists (FR-144)."""

from __future__ import annotations

import argparse
import json
import sys
from pathlib import Path

_SCRIPTS_DIR = Path(__file__).resolve().parent.parent
_KANBAN = _SCRIPTS_DIR / "kanban"
for p in (_SCRIPTS_DIR, _KANBAN):
    if str(p) not in sys.path:
        sys.path.insert(0, str(p))

from restore_board_timestamps import load_index, report_flat_dates  # noqa: E402
from rw_config_loader import load_rw_config  # noqa: E402
from stamp_authority import homogeneity_threshold_from_config  # noqa: E402
from timestamp_index import build_timestamp_index  # noqa: E402


def main() -> int:
    parser = argparse.ArgumentParser(description="Flat-date board gate (FR-144)")
    parser.add_argument("--board", type=Path, required=True)
    parser.add_argument("--project-root", type=Path, default=Path.cwd())
    parser.add_argument("--legacy-root", type=Path, default=None)
    parser.add_argument("--timestamp-index", type=Path, default=None)
    parser.add_argument("--strict", action="store_true")
    args = parser.parse_args()

    root = args.project_root.resolve()
    config = load_rw_config(root)
    threshold = homogeneity_threshold_from_config(root, config)

    index_data = None
    if args.timestamp_index and args.timestamp_index.is_file():
        index_data = load_index(args.timestamp_index)
    elif args.legacy_root and args.legacy_root.is_dir():
        index_data = build_timestamp_index(args.legacy_root).to_dict()

    board_content = args.board.read_text(encoding="utf-8", errors="replace")
    report = report_flat_dates(board_content, threshold=threshold)
    report["legacy_index_entries"] = (index_data or {}).get("entry_count", 0)
    report["legacy_index_available"] = bool(index_data and index_data.get("entry_count"))

    blocking = report["legacy_index_available"] and report["flat_date_suspected"]
    report["blocking"] = blocking
    report["passed"] = not blocking

    if args.strict:
        print(json.dumps(report, indent=2))
        return 1 if blocking else 0

    status = "FAIL" if blocking else "PASS"
    print(f"validate_flat_date_board: {status}")
    if blocking:
        for stamp, ids in report["homogeneity_clusters"].items():
            print(f"  cluster '{stamp}' on {len(ids)} rows")
    return 1 if blocking else 0


if __name__ == "__main__":
    raise SystemExit(main())

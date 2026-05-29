#!/usr/bin/env python3
"""Snapshot kboard.md and fbuboard.md for FR-097 stamp-diff validation."""

from __future__ import annotations

import argparse
import shutil
from datetime import datetime
from pathlib import Path

from stamp_authority import active_board_paths, load_rw_config


def main() -> int:
    parser = argparse.ArgumentParser(description="Snapshot active kanban boards.")
    parser.add_argument("--project-root", type=Path, default=Path.cwd())
    parser.add_argument(
        "--out-dir",
        type=Path,
        default=None,
        help="Output directory (default: .kanban-snapshots/<timestamp>).",
    )
    args = parser.parse_args()
    project_root = args.project_root.resolve()
    config = load_rw_config(project_root)
    boards = active_board_paths(project_root, config)
    ts = datetime.utcnow().strftime("%Y%m%dT%H%M%SZ")
    out_dir = args.out_dir or (project_root / ".kanban-snapshots" / ts)
    out_dir.mkdir(parents=True, exist_ok=True)
    for board in boards:
        if board.exists():
            shutil.copy2(board, out_dir / board.name)
    print(out_dir)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

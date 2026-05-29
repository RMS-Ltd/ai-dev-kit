#!/usr/bin/env python3
"""
Normalize terminal `Last modified` timestamps on active Kanban board rows.

Updates MoSCOW bullet rows in:
- docs/project-management/kanban/kboard.md
- docs/project-management/kanban/fbuboard.md

Row format enforced:
| Last modified: YYYY-MM-DD HH:MM UTC
"""

from __future__ import annotations

import re
from datetime import datetime
from pathlib import Path


def normalize_board(path: Path, timestamp_value: str) -> int:
    if not path.exists():
        return 0

    ts_pattern = re.compile(r"\|\sLast modified:\s\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}\sUTC\s*$")
    lines = path.read_text(encoding="utf-8").splitlines()

    in_moscow = False
    updated = 0
    out = []

    for line in lines:
        stripped = line.strip()
        if stripped.startswith("## MoSCOW"):
            in_moscow = True
        elif in_moscow and stripped.startswith("## ") and not stripped.startswith("## MoSCOW"):
            in_moscow = False

        if in_moscow and stripped.startswith("- **"):
            if ts_pattern.search(line):
                new_line = ts_pattern.sub(f"| Last modified: {timestamp_value}", line)
            else:
                new_line = f"{line} | Last modified: {timestamp_value}"
            if new_line != line:
                updated += 1
            line = new_line

        out.append(line)

    if updated:
        path.write_text("\n".join(out) + "\n", encoding="utf-8")
    return updated


def main() -> int:
    root = Path.cwd()
    timestamp_value = datetime.utcnow().strftime("%Y-%m-%d %H:%M UTC")
    boards = [
        root / "docs/project-management/kanban/kboard.md",
        root / "docs/project-management/kanban/fbuboard.md",
        root / "docs/project-management/kanban/kanban-board.md",
        root / "docs/project-management/kanban/fr-br-uxr-board.md",
    ]

    total = 0
    for board in boards:
        changed = normalize_board(board, timestamp_value)
        total += changed
        print(f"{board}: {changed} row(s) updated")

    print(f"Total rows updated: {total}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

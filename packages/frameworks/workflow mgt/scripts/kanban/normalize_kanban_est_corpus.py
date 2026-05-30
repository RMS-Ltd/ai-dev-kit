#!/usr/bin/env python3
"""Normalize inline E/S/T tokens in markdown files (UXR-014 corpus sweep)."""

from __future__ import annotations

import argparse
import sys
from pathlib import Path

_SCRIPT_DIR = Path(__file__).resolve().parent
sys.path.insert(0, str(_SCRIPT_DIR))

from est_format import normalize_est_inline_in_text  # noqa: E402


def normalize_tree(root: Path, dry_run: bool = False) -> tuple[int, int]:
    files_touched = 0
    total_changes = 0
    for path in sorted(root.rglob("*.md")):
        text = path.read_text(encoding="utf-8")
        new_text, changes = normalize_est_inline_in_text(text)
        if changes:
            files_touched += 1
            total_changes += changes
            if not dry_run:
                path.write_text(new_text, encoding="utf-8")
            print(f"{path}: {changes} token(s)")
    return files_touched, total_changes


def main() -> int:
    parser = argparse.ArgumentParser(description="Normalize E/S/T inline notation in markdown.")
    parser.add_argument("roots", nargs="+", help="Root directories to scan")
    parser.add_argument("--dry-run", action="store_true")
    args = parser.parse_args()
    grand_files = 0
    grand_changes = 0
    for root in args.roots:
        p = Path(root)
        if not p.exists():
            print(f"skip missing: {p}")
            continue
        f, c = normalize_tree(p, dry_run=args.dry_run)
        grand_files += f
        grand_changes += c
    print(f"Done: {grand_files} file(s), {grand_changes} token change(s)")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

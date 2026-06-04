#!/usr/bin/env python3
"""
One-shot migration: rename legacy framework directories under packages/frameworks/

Use after vendoring ai-dev-kit via submodule/copy when directories still have
spaces or '&' (workflow mgt, numbering & versioning, tooling & automation).

Usage:
    python relocate_legacy_framework_dirs.py [--frameworks-root PATH] [--dry-run]
"""

from __future__ import annotations

import argparse
import sys
from pathlib import Path

_SCRIPT_DIR = Path(__file__).resolve().parent
if str(_SCRIPT_DIR) not in sys.path:
    sys.path.insert(0, str(_SCRIPT_DIR))

from framework_install_slug import LEGACY_SOURCE_DIR_TO_SLUG, framework_install_slug


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "--frameworks-root",
        type=Path,
        default=Path("packages/frameworks"),
        help="Directory containing framework packages (default: packages/frameworks)",
    )
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="Print planned renames without modifying disk",
    )
    return parser.parse_args()


def main() -> int:
    args = parse_args()
    root = args.frameworks_root.resolve()
    if not root.is_dir():
        print(f"ERROR: frameworks root not found: {root}", file=sys.stderr)
        return 1

    changed = 0
    for legacy_name, slug in sorted(LEGACY_SOURCE_DIR_TO_SLUG.items()):
        src = root / legacy_name
        dst = root / slug
        if not src.is_dir():
            continue
        if dst.exists():
            print(
                f"SKIP: {legacy_name!r} → {slug!r} (target already exists; remove legacy dir manually)",
                file=sys.stderr,
            )
            continue
        if args.dry_run:
            print(f"DRY-RUN: rename {src} → {dst}")
        else:
            src.rename(dst)
            print(f"Renamed: {src} → {dst}")
        changed += 1

    if changed == 0:
        print(f"No legacy framework directories to relocate under {root}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

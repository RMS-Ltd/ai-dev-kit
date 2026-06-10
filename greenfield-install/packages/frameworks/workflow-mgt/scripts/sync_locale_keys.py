#!/usr/bin/env python3
"""
Sync missing YAML keys from en-GB into target locale key catalogs (E21:S03:T05).

Adds keys present in en-GB but absent in the target locale file. Does not overwrite
existing target values. For full tree bootstrap use scaffold_locale_trees.py.

Usage:
    python sync_locale_keys.py --target es [--package kanban|workflow-mgt|all] [--dry-run]
"""

from __future__ import annotations

import argparse
import sys
from pathlib import Path
from typing import List

from locale_translation_utils import (
    PACKAGES,
    repo_root_from_script,
    sync_locale_keys_for_package,
)


def main(argv: List[str] | None = None) -> int:
    parser = argparse.ArgumentParser(
        description="Sync missing locale keys from en-GB (E21:S03:T05)"
    )
    parser.add_argument(
        "--project-root",
        type=Path,
        default=repo_root_from_script(Path(__file__)),
        help="Repository root",
    )
    parser.add_argument(
        "--target",
        required=True,
        help="Target locale code (e.g. es, fr, zh-CN)",
    )
    parser.add_argument(
        "--package",
        choices=["kanban", "workflow-mgt", "all"],
        default="all",
    )
    parser.add_argument("--dry-run", action="store_true")
    args = parser.parse_args(argv)

    packages = list(PACKAGES) if args.package == "all" else [args.package]
    exit_code = 0

    for package in packages:
        try:
            stats = sync_locale_keys_for_package(
                args.project_root,
                package,
                args.target,
                dry_run=args.dry_run,
            )
        except (FileNotFoundError, ValueError) as exc:
            print(f"ERROR {package}: {exc}")
            exit_code = 1
            continue

        mode = "DRY RUN" if args.dry_run else "OK"
        print(
            f"{mode} {package}/{args.target}: "
            f"{stats['keys_added']} key(s) added in {stats['files_updated']} file(s)"
        )

    return exit_code


if __name__ == "__main__":
    sys.exit(main())

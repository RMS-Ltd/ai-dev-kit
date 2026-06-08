#!/usr/bin/env python3
"""
Structural validation for framework locale trees (E21:S03:T05).

Checks manifest asset paths, YAML parse, en-GB key parity, and placeholder tokens.

Usage:
    python validate_locale_translations.py [--package kanban|workflow-mgt|all] [--locale CODE] [--strict]
"""

from __future__ import annotations

import argparse
import sys
from pathlib import Path
from typing import List

from locale_translation_utils import (
    PACKAGES,
    Severity,
    repo_root_from_script,
    should_exit_nonzero,
    validate_package_locales,
)


def main(argv: List[str] | None = None) -> int:
    parser = argparse.ArgumentParser(
        description="Validate locale translation structure (E21:S03:T05)"
    )
    parser.add_argument(
        "--project-root",
        type=Path,
        default=repo_root_from_script(Path(__file__)),
        help="Repository root",
    )
    parser.add_argument(
        "--package",
        choices=["kanban", "workflow-mgt", "all"],
        default="all",
    )
    parser.add_argument(
        "--locale",
        action="append",
        dest="locales",
        help="Locale code to validate (repeatable); default all on-disk locales",
    )
    parser.add_argument(
        "--strict",
        action="store_true",
        help="Exit 1 on key parity or placeholder mismatches (not only hard structural errors)",
    )
    parser.add_argument(
        "--verbose",
        action="store_true",
        help="Print interim-copy advisory warnings (default: count only)",
    )
    args = parser.parse_args(argv)

    packages = list(PACKAGES) if args.package == "all" else [args.package]
    locale_filter = args.locales

    all_issues = []
    for package in packages:
        all_issues.extend(
            validate_package_locales(
                args.project_root,
                package,
                locale_filter=locale_filter,
            )
        )

    errors = [i for i in all_issues if i.severity == Severity.ERROR]
    warnings = [i for i in all_issues if i.severity == Severity.WARNING]
    interim_copy = [i for i in warnings if i.code == "interim_copy"]

    for issue in all_issues:
        if issue.code == "interim_copy" and not args.verbose:
            continue
        print(issue.format_line())

    print(
        f"Summary: {len(errors)} error(s), {len(warnings)} warning(s)"
        + (
            f" ({len(interim_copy)} interim-copy advisory; use --verbose to list)"
            if interim_copy and not args.verbose
            else ""
        )
        + f", strict={'on' if args.strict else 'off'}"
    )

    if should_exit_nonzero(all_issues, strict=args.strict):
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())

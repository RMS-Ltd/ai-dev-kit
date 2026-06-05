#!/usr/bin/env python3
"""Non-blocking lint for unpadded inline E/S/T notation (UXR-014)."""

from __future__ import annotations

import argparse
import sys
from pathlib import Path

_KANBAN_DIR = Path(__file__).resolve().parent.parent / "kanban"
sys.path.insert(0, str(_KANBAN_DIR))

from est_format import find_unpadded_est_violations  # noqa: E402


def scan_paths(paths: list[Path]) -> int:
    total = 0
    for path in paths:
        if path.is_dir():
            files = sorted(path.rglob("*.md"))
        else:
            files = [path]
        for f in files:
            try:
                text = f.read_text(encoding="utf-8")
            except OSError:
                continue
            violations = find_unpadded_est_violations(text)
            if violations:
                total += len(violations)
                for v in sorted(set(violations)):
                    print(f"{f}: unpadded {v}")
    return total


def main() -> int:
    parser = argparse.ArgumentParser(
        description="Report unpadded E/S/T inline tokens (informational; non-blocking for RW)."
    )
    parser.add_argument(
        "paths",
        nargs="*",
        default=["docs/project-management/kanban/kboard.md", "docs/project-management/kanban/kboard.md"],
        help="Files or directories to scan",
    )
    parser.add_argument(
        "--strict",
        action="store_true",
        help="Exit 1 when violations found (opt-in strict mode)",
    )
    args = parser.parse_args()
    roots = [Path(p) for p in args.paths]
    count = scan_paths(roots)
    if count:
        print(f"validate_est_inline_format: {count} unpadded token(s) found")
        return 1 if args.strict else 0
    print("validate_est_inline_format: PASS (no unpadded colon-form tokens)")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

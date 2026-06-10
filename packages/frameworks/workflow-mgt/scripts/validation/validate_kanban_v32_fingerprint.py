#!/usr/bin/env python3
"""Validate Kanban v3.2 fresh-install fingerprint (F9/F17 / E06:S09:T27)."""

from __future__ import annotations

import argparse
import sys
from pathlib import Path


def _repo_root() -> Path:
    return Path(__file__).resolve().parents[4]


def _load_catalog():
    kanban_scripts = _repo_root() / "packages" / "frameworks" / "kanban" / "scripts"
    if str(kanban_scripts) not in sys.path:
        sys.path.insert(0, str(kanban_scripts))
    from kanban_v32_catalog import assert_v32_fingerprint

    return assert_v32_fingerprint


def main() -> int:
    parser = argparse.ArgumentParser(description="Kanban v3.2 install fingerprint gate")
    parser.add_argument(
        "--kanban-path",
        type=Path,
        default=Path("docs/kanban"),
        help="Kanban root to validate (default: docs/kanban)",
    )
    parser.add_argument("--strict", action="store_true", help="Non-zero exit on failure")
    args = parser.parse_args()

    kanban_path = args.kanban_path
    if not kanban_path.is_dir():
        print(f"FAIL: kanban path not found: {kanban_path}")
        return 1 if args.strict else 0

    assert_v32_fingerprint = _load_catalog()
    ok, errors = assert_v32_fingerprint(kanban_path)
    if ok:
        print(f"PASS: Kanban v3.2 fingerprint OK at {kanban_path}")
        return 0

    print(f"FAIL: Kanban v3.2 fingerprint ({len(errors)} issue(s)):")
    for err in errors:
        print(f"  - {err}")
    return 1 if args.strict else 0


if __name__ == "__main__":
    raise SystemExit(main())

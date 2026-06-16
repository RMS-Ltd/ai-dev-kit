#!/usr/bin/env python3
"""CLI for Kanban v4 template completeness (logic lives in kanban_v4_catalog.py)."""

from __future__ import annotations

import argparse
import sys
from pathlib import Path

_SCRIPT_DIR = Path(__file__).resolve().parent
if str(_SCRIPT_DIR) not in sys.path:
    sys.path.insert(0, str(_SCRIPT_DIR))

from kanban_v4_catalog import validate_v4_templates  # noqa: E402


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--strict", action="store_true")
    args = parser.parse_args()
    errors = validate_v4_templates(strict=args.strict)
    if errors:
        for e in errors:
            print(e, file=sys.stderr)
        return 1
    print("validate_v4_template_completeness: OK")
    return 0


if __name__ == "__main__":
    sys.exit(main())

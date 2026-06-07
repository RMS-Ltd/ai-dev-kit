#!/usr/bin/env python3
"""
Ingest release metadata read model from git SoT (CHANGELOG + semver-registry.yaml).

Usage:
    python ingest_release_metadata.py [--full] [--project-root PATH]
"""

from __future__ import annotations

import argparse
import sys
from pathlib import Path

_PKG = Path(__file__).resolve().parent
_SCRIPTS = _PKG.parent
if str(_SCRIPTS) not in sys.path:
    sys.path.insert(0, str(_SCRIPTS))

from release_metadata.ingest import run_ingest  # noqa: E402


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--full", action="store_true", help="Force full re-ingest")
    parser.add_argument("--project-root", type=Path, default=None)
    args = parser.parse_args()

    try:
        result = run_ingest(project_root=args.project_root, full=args.full)
    except Exception as exc:
        print(f"ERROR: {exc}", file=sys.stderr)
        return 1

    if result.skipped:
        print(f"SKIP: manifest unchanged ({result.store_path})")
        return 0

    print(f"OK: {result.mode} ingest → {result.store_path}")
    print(f"  semver: {result.semver_stats}")
    print(f"  changelog: {result.changelog_stats}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

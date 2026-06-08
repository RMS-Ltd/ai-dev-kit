"""Query joined release metadata from the read model."""

from __future__ import annotations

import argparse
import json
import re
import sqlite3
import sys
from typing import Any, Dict, List, Optional

from .config import get_store_config
from .ingest_semver import normalize_internal_version
from .store import open_store


def _parse_est(token: str) -> Optional[tuple]:
    m = re.match(r"E(\d+):S(\d+):T(\d+)", token.strip(), re.I)
    if not m:
        return None
    return int(m.group(1)), int(m.group(2)), int(m.group(3))


def query_by_version(conn: sqlite3.Connection, internal_version: str) -> Optional[Dict[str, Any]]:
    iv = normalize_internal_version(internal_version)
    row = conn.execute(
        """
        SELECT r.*, sm.semver, sm.semver_core, sm.patch,
               cr.source_path, cr.summary, cr.release_date_utc AS changelog_date
        FROM release r
        LEFT JOIN semver_mapping sm ON sm.internal_version = r.internal_version
        LEFT JOIN changelog_release cr ON cr.internal_version = r.internal_version
        WHERE r.internal_version = ?
        """,
        (iv,),
    ).fetchone()
    if not row:
        return None
    return dict(row)


def query_by_est(conn: sqlite3.Connection, epic: int, story: int, task: int) -> List[Dict[str, Any]]:
    rows = conn.execute(
        """
        SELECT r.internal_version, sm.semver, cr.summary
        FROM release r
        LEFT JOIN semver_mapping sm ON sm.internal_version = r.internal_version
        LEFT JOIN changelog_release cr ON cr.internal_version = r.internal_version
        WHERE r.epic = ? AND r.story = ? AND r.task = ?
        ORDER BY r.internal_version DESC
        """,
        (epic, story, task),
    ).fetchall()
    return [dict(r) for r in rows]


def main(argv: Optional[List[str]] = None) -> int:
    parser = argparse.ArgumentParser(description="Query release metadata read model")
    parser.add_argument("--version", help="Internal version e.g. 0.2.1.24+3")
    parser.add_argument("--est", help="E:S:T token e.g. E02:S01:T25")
    parser.add_argument("--json", action="store_true", help="JSON output")
    args = parser.parse_args(argv)

    if not args.version and not args.est:
        parser.error("provide --version or --est")

    cfg = get_store_config()
    if not cfg["store_path"].exists():
        print(f"ERROR: store not found: {cfg['store_path']} (run ingest first)", file=sys.stderr)
        return 1

    with open_store(cfg["store_path"], init=False) as conn:
        if args.version:
            result = query_by_version(conn, args.version)
            if not result:
                print(f"No row for {args.version}", file=sys.stderr)
                return 1
            if args.json:
                print(json.dumps(result, indent=2, default=str))
            else:
                for k, v in result.items():
                    print(f"{k}: {v}")
            return 0

        est = _parse_est(args.est)
        if not est:
            print(f"Invalid --est: {args.est}", file=sys.stderr)
            return 1
        results = query_by_est(conn, *est)
        if args.json:
            print(json.dumps(results, indent=2, default=str))
        else:
            for r in results:
                print(f"{r.get('internal_version')} | {r.get('semver')} | {r.get('summary', '')[:80]}")
        return 0


if __name__ == "__main__":
    raise SystemExit(main())

#!/usr/bin/env python3
"""
Non-blocking advisory: warn when release metadata ingest cursor is stale.

RW Step 9 optional gate — ingest failure must not block releases.
"""

from __future__ import annotations

import argparse
import sys
from datetime import datetime, timezone
from pathlib import Path

_SCRIPTS = Path(__file__).resolve().parent.parent
if str(_SCRIPTS) not in sys.path:
    sys.path.insert(0, str(_SCRIPTS))

from release_metadata.config import get_store_config  # noqa: E402
from release_metadata.store import open_store  # noqa: E402

DEFAULT_MAX_AGE_DAYS = 2


def _parse_ts(ts: str) -> datetime:
    # ingest_cursor uses "YYYY-MM-DD HH:MM:SS UTC"
    return datetime.strptime(ts.replace(" UTC", ""), "%Y-%m-%d %H:%M:%S").replace(tzinfo=timezone.utc)


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--max-age-days", type=int, default=DEFAULT_MAX_AGE_DAYS)
    parser.add_argument("--strict", action="store_true", help="Exit 1 when stale (opt-in CI)")
    args = parser.parse_args()

    cfg = get_store_config()
    if not cfg["store_path"].exists():
        print(f"ADVISORY: release metadata store missing ({cfg['store_path']}); run ingest_release_metadata.py --full")
        return 1 if args.strict else 0

    with open_store(cfg["store_path"], init=False) as conn:
        row = conn.execute(
            "SELECT last_run_at FROM ingest_cursor WHERE domain = 'global'"
        ).fetchone()
        if not row:
            print("ADVISORY: no ingest cursor; run ingest_release_metadata.py --full")
            return 1 if args.strict else 0

        last = _parse_ts(row["last_run_at"])
        age_days = (datetime.now(timezone.utc) - last).total_seconds() / 86400
        if age_days > args.max_age_days:
            print(
                f"ADVISORY: ingest last run {row['last_run_at']} ({age_days:.1f}d ago); "
                f"threshold {args.max_age_days}d"
            )
            return 1 if args.strict else 0

    print("OK: release metadata ingest freshness within threshold")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

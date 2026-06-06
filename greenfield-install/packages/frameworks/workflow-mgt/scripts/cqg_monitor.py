#!/usr/bin/env python3
"""6-hour CQG monitor — HEAD skip and 12h staleness force."""

from __future__ import annotations

import argparse
import sys
from pathlib import Path

_REPO_ROOT = Path(__file__).resolve().parents[4]
_VALIDATORS = _REPO_ROOT / "packages/frameworks/tooling-automation/validators"
if str(_VALIDATORS) not in sys.path:
    sys.path.insert(0, str(_VALIDATORS))

from code_quality.config import load_config  # noqa: E402
from code_quality.cqg_engine import CQGEngine  # noqa: E402


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(
        description="CQG monitor (cron 0 */6 * * *; skip unchanged HEAD <12h)"
    )
    parser.add_argument("--force", action="store_true", help="Bypass skip guard")
    parser.add_argument("--config", type=Path, default=_REPO_ROOT / "rw-config.yaml")
    args = parser.parse_args(argv)

    config = load_config(args.config)
    if not config.enabled:
        print("Monitor disabled (code_quality_gate.enabled=false)")
        return 0

    engine = CQGEngine(config, repo_root=_REPO_ROOT)
    try:
        result = engine.monitor(force=args.force)
    except RuntimeError as exc:
        print(f"Monitor error: {exc}", file=sys.stderr)
        return 1

    if result.skipped:
        print(f"Skipped: HEAD unchanged within {config.staleness_hours}h staleness window")
        return 0

    print(result.report.to_markdown())
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

#!/usr/bin/env python3
"""RW Step 9 — Code Quality Gate validator (advisory by default)."""

from __future__ import annotations

import argparse
import sys
from pathlib import Path

_REPO_ROOT = Path(__file__).resolve().parents[5]
_VALIDATORS = _REPO_ROOT / "packages/frameworks/tooling-automation/validators"
if str(_VALIDATORS) not in sys.path:
    sys.path.insert(0, str(_VALIDATORS))

from code_quality.config import load_config  # noqa: E402
from code_quality.cqg_engine import CQGEngine  # noqa: E402


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(
        description="Validate code quality gate (RW Step 9; advisory unless --strict)"
    )
    parser.add_argument("--strict", action="store_true", help="Fail on threshold breach")
    parser.add_argument("--requested", default=None, help="RW task token (passthrough)")
    parser.add_argument("--art", action="store_true", help="RW adoption context (passthrough)")
    parser.add_argument("--sarif", type=Path, default=None, help="Use existing SARIF file")
    parser.add_argument("--config", type=Path, default=_REPO_ROOT / "rw-config.yaml")
    args = parser.parse_args(argv)

    if not args.config.is_file():
        print(f"SKIP: rw-config.yaml not found at {args.config}", file=sys.stderr)
        return 0

    try:
        config = load_config(args.config)
    except ValueError as exc:
        print(f"ERROR: {exc}", file=sys.stderr)
        return 1

    if not config.enabled:
        print("SKIP: code_quality_gate.enabled is false")
        return 0

    engine = CQGEngine(config, repo_root=_REPO_ROOT)
    try:
        result = engine.run(sarif_path=args.sarif)
    except RuntimeError as exc:
        if args.sarif:
            print(f"ERROR: {exc}", file=sys.stderr)
            return 1
        print(f"ADVISORY SKIP: {exc}", file=sys.stderr)
        return 0

    print(result.report.to_markdown())
    strict = args.strict or not config.rw_advisory
    if strict and result.threshold_breached:
        print("FAIL: threshold breached (--strict)", file=sys.stderr)
        return 1
    if result.threshold_breached:
        print("ADVISORY: threshold breached (exit 0; use --strict to block)")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

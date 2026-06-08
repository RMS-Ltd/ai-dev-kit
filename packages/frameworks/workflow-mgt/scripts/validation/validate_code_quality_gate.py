#!/usr/bin/env python3
"""IDW Phase 6 — Code Quality Gate validator (strict by default)."""

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
        description=(
            "Validate code quality gate (IDW Phase 6; strict unless "
            "idw_advisory: true or --no-strict)"
        )
    )
    parser.add_argument(
        "--strict",
        action="store_true",
        help="Fail on threshold breach (default when idw_advisory is false)",
    )
    parser.add_argument(
        "--no-strict",
        action="store_true",
        help="Advisory only — exit 0 on threshold breach",
    )
    parser.add_argument(
        "--skip",
        action="store_true",
        help="Skip CQG (docs-only / no Python code scope)",
    )
    parser.add_argument("--requested", default=None, help="IDW task token (passthrough)")
    parser.add_argument("--sarif", type=Path, default=None, help="Use existing SARIF file")
    parser.add_argument("--config", type=Path, default=_REPO_ROOT / "rw-config.yaml")
    args = parser.parse_args(argv)

    if args.skip:
        print("SKIP: CQG not required for this implementation scope")
        return 0

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
        print(f"FAIL: {exc}", file=sys.stderr)
        return 1

    print(result.report.to_markdown())
    if args.no_strict:
        strict = False
    elif args.strict:
        strict = True
    else:
        strict = not config.idw_advisory

    if strict and result.threshold_breached:
        print("FAIL: threshold breached", file=sys.stderr)
        return 1
    if result.threshold_breached:
        print("ADVISORY: threshold breached (exit 0; use --strict or idw_advisory: false)")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

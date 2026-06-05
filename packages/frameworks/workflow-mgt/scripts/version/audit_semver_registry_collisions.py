#!/usr/bin/env python3
"""Read-only audit of task_touch mapping_history injectivity (PATCH + SemVer core)."""

from __future__ import annotations

import argparse
import sys
from pathlib import Path

script_dir = Path(__file__).parent
sys.path.insert(0, str(script_dir))

from semver_converter import load_semver_registry  # noqa: E402
from task_touch_registry_audit import (  # noqa: E402
    audit_registry,
    format_report,
    has_collisions,
)


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--registry", type=Path, help="Path to semver-registry.yaml")
    parser.add_argument("--rc", type=int, default=0)
    args = parser.parse_args()

    if args.registry:
        import yaml

        with open(args.registry, encoding="utf-8") as f:
            registry = yaml.safe_load(f) or {}
    else:
        registry = load_semver_registry()

    report = audit_registry(registry, rc=args.rc)
    print(format_report(report))
    return 1 if has_collisions(report) else 0


if __name__ == "__main__":
    raise SystemExit(main())

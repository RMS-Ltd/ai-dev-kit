#!/usr/bin/env python3
"""
Blocking validator: task_touch mapping_history must be injective on PATCH and SemVer core.

Reads semver-registry.yaml from project root (or --registry). Exit 0 = OK, 1 = collisions.
"""

from __future__ import annotations

import argparse
import sys
from pathlib import Path


# Project root: cwd or parent walk for semver-registry.yaml
def _find_project_root(start: Path) -> Path:
    for parent in [start, *start.parents]:
        if (parent / "semver-registry.yaml").exists():
            return parent
    return start


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--registry", type=Path, help="Path to semver-registry.yaml (legacy)")
    parser.add_argument("--rc", type=int, default=0)
    args = parser.parse_args()

    root = _find_project_root(Path.cwd())
    version_dir = Path(__file__).resolve().parent.parent / "version"
    scripts_dir = Path(__file__).resolve().parent.parent
    sys.path.insert(0, str(version_dir))
    sys.path.insert(0, str(scripts_dir))

    import yaml
    from semver_converter import get_release_state_backend, load_semver_registry
    from task_touch_registry_audit import audit_registry, format_report, has_collisions

    if args.registry:
        with open(args.registry, encoding="utf-8") as f:
            registry = yaml.safe_load(f) or {}
    elif get_release_state_backend() == "sqlite":
        registry = load_semver_registry()
    else:
        reg_path = root / "semver-registry.yaml"
        if not reg_path.exists():
            print(f"ERROR: registry not found: {reg_path}", file=sys.stderr)
            return 1
        with open(reg_path, encoding="utf-8") as f:
            registry = yaml.safe_load(f) or {}

    report = audit_registry(registry, rc=args.rc)
    print(format_report(report))
    if has_collisions(report):
        print(
            "\nFAIL: SemVer registry is not injective (FR-045 / E03:S02:T12). "
            "Run audit_semver_registry_collisions.py and repair_semver_registry_collisions.py.",
            file=sys.stderr,
        )
        return 1
    print("OK: semver registry task_touch mapping is injective")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

#!/usr/bin/env python3
"""Advisory validator: workflow encapsulation metadata vs command guides (FR-126 / T10).

Non-blocking by default. Checks workflow-registry.yaml for command_guide paths and
reports missing files. Extend with contract-field checks as remediation waves land.
"""

from __future__ import annotations

import argparse
import sys
from pathlib import Path

try:
    import yaml
except ImportError:  # pragma: no cover
    yaml = None  # type: ignore


def _repo_root() -> Path:
    here = Path(__file__).resolve()
    for parent in here.parents:
        if (parent / "rw-config.yaml").exists() or (parent / ".git").exists():
            return parent
    return here.parents[4]


def _registry_path(root: Path) -> Path:
    return (
        root
        / "packages/frameworks/workflow-mgt/workflows/workflow-registry.yaml"
    )


def load_registry(path: Path) -> dict:
    if yaml is None:
        raise RuntimeError("PyYAML required: pip install pyyaml")
    with path.open(encoding="utf-8") as f:
        data = yaml.safe_load(f)
    return data.get("workflow_registry", data)


def validate(root: Path) -> list[str]:
    issues: list[str] = []
    reg_path = _registry_path(root)
    if not reg_path.exists():
        return [f"registry missing: {reg_path}"]

    reg = load_registry(reg_path)
    workflows = reg.get("workflows", {})

    for key, wf in workflows.items():
        abbr = wf.get("abbreviation", key)
        guide = wf.get("command_guide")
        if not guide:
            issues.append(f"{abbr}: no command_guide in registry (encapsulation partial)")
            continue
        guide_path = root / guide
        if not guide_path.exists():
            issues.append(f"{abbr}: command_guide not found: {guide}")

    composite = reg.get("composite_workflows", {})
    mwf = composite.get("mwf", {}).get("delivery", {})
    if not mwf.get("legs"):
        issues.append("composite mwf.delivery: missing legs")

    return issues


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "--strict",
        action="store_true",
        help="Exit 1 on any advisory issue (default: report only)",
    )
    args = parser.parse_args()
    root = _repo_root()
    issues = validate(root)

    if issues:
        print("validate_workflow_encapsulation: advisory findings:")
        for item in issues:
            print(f"  - {item}")
        return 1 if args.strict else 0

    print("validate_workflow_encapsulation: OK (command guides present)")
    return 0


if __name__ == "__main__":
    sys.exit(main())

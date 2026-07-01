#!/usr/bin/env python3
"""Validate E02 workflow story parity for guided KMA (FR-143)."""

from __future__ import annotations

import argparse
import json
import sys
from pathlib import Path

# Allow import from sibling scripts/
_SCRIPTS = Path(__file__).resolve().parents[1]
if str(_SCRIPTS) not in sys.path:
    sys.path.insert(0, str(_SCRIPTS))

from kma_workflow_story_parity import check_workflow_story_parity  # noqa: E402


def _default_registry() -> Path:
    return (
        Path(__file__).resolve().parents[3]
        / "workflow-mgt/workflows/workflow-registry.yaml"
    )


def main() -> int:
    parser = argparse.ArgumentParser(
        description="KMA workflow story parity preflight (FR-143)"
    )
    parser.add_argument("--tsp", type=Path, required=True, help="TARGET-EST-TREE.md")
    parser.add_argument(
        "--registry",
        type=Path,
        default=None,
        help="workflow-registry.yaml (default: framework registry)",
    )
    parser.add_argument(
        "--story-map",
        type=Path,
        default=None,
        help="Optional E02-WORKFLOW-STORY-MAP.md",
    )
    parser.add_argument(
        "--mode",
        choices=["guided", "score", "score_only", "blind"],
        default="guided",
        help="KMA mode — blocking only in guided/score",
    )
    parser.add_argument(
        "--strict",
        action="store_true",
        help="Exit 1 when parity check fails in blocking modes",
    )
    parser.add_argument("--stdout-json", action="store_true", help="Print JSON report")
    args = parser.parse_args()

    registry_path = args.registry or _default_registry()
    if not args.tsp.is_file():
        print(f"ERROR: TSP not found: {args.tsp}", file=sys.stderr)
        return 2
    if not registry_path.is_file():
        print(f"ERROR: registry not found: {registry_path}", file=sys.stderr)
        return 2

    report = check_workflow_story_parity(
        registry_path=registry_path,
        tsp_path=args.tsp,
        story_map_path=args.story_map,
        mode=args.mode,
    )
    payload = json.dumps(report, indent=2, sort_keys=True)
    if args.stdout_json:
        print(payload)
    else:
        status = "PASS" if report["passed"] else "FAIL"
        print(f"workflow story parity: {status} ({report['severity']})")
        print(
            f"  registry={report['registry_count']} e02_stories={report['e02_story_count']} "
            f"parity={report['parity_score']}"
        )
        for msg in report["messages"]:
            print(f"  - {msg}")

    if args.strict and report["blocking"] and not report["passed"]:
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())

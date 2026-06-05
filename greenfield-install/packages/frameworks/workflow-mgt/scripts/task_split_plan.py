#!/usr/bin/env python3
"""
CLI for FR-011 multi-epic task split planning (E4:S08:T07).

Usage:
    python task_split_plan.py --source-epic 3 --primary-epic 3 --primary-score 65 \\
        --secondary 2:55:partial --tasks tasks.json
    python task_split_plan.py --fixture mixed_responsibility
"""

from __future__ import annotations

import argparse
import json
import sys
from pathlib import Path
from typing import List, Tuple

SCRIPT_DIR = Path(__file__).resolve().parent
if str(SCRIPT_DIR) not in sys.path:
    sys.path.insert(0, str(SCRIPT_DIR))

from task_split.engine import build_split_plan  # noqa: E402


FIXTURES = {
    "mixed_responsibility": {
        "source_epic": 3,
        "primary_epic": 3,
        "primary_confidence": 65.0,
        "primary_match_type": "partial",
        "secondary_epics": [(2, 55.0, "partial")],
        "source_tasks": [
            {
                "source_story": 1,
                "source_task": 1,
                "title": "Implement versioning schema",
                "description": "semver bump automation",
            },
            {
                "source_story": 1,
                "source_task": 2,
                "title": "Create release workflow",
                "description": "RW UKW intake automation",
            },
            {
                "source_story": 1,
                "source_task": 3,
                "title": "Version bump automation",
                "description": "build number schema",
            },
        ],
        "reference_texts": {
            "story.md": "See E3:S01:T01 and E3:S01:T02 for tracking.",
        },
    },
}


def _parse_secondary(raw: List[str]) -> List[Tuple[int, float, str]]:
    result: List[Tuple[int, float, str]] = []
    for item in raw:
        parts = item.split(":")
        if len(parts) != 3:
            raise ValueError(
                f"Invalid --secondary '{item}'; expected EPIC:SCORE:MATCH_TYPE"
            )
        result.append((int(parts[0]), float(parts[1]), parts[2]))
    return result


def main() -> int:
    parser = argparse.ArgumentParser(
        description="FR-011 multi-epic task split plan generator"
    )
    parser.add_argument(
        "--fixture",
        choices=sorted(FIXTURES.keys()),
        help="Run built-in scenario (ignores other args except --format)",
    )
    parser.add_argument("--source-epic", type=int, help="Source user epic number")
    parser.add_argument("--primary-epic", type=int, help="Primary canonical epic")
    parser.add_argument("--primary-score", type=float, default=0.0)
    parser.add_argument(
        "--primary-match-type",
        default="partial",
        choices=["exact", "semantic", "partial", "no_match"],
    )
    parser.add_argument(
        "--secondary",
        action="append",
        default=[],
        metavar="EPIC:SCORE:TYPE",
        help="Secondary epic match (repeatable)",
    )
    parser.add_argument(
        "--tasks",
        type=Path,
        help="JSON file: list of source task dicts",
    )
    parser.add_argument(
        "--references",
        type=Path,
        help="JSON file: path -> text for reference rewrite",
    )
    parser.add_argument(
        "--format",
        choices=["json", "text"],
        default="json",
    )
    args = parser.parse_args()

    if args.fixture:
        data = FIXTURES[args.fixture]
        plan = build_split_plan(
            data["source_epic"],
            data["primary_epic"],
            data["primary_confidence"],
            data["primary_match_type"],
            data["secondary_epics"],
            data["source_tasks"],
            data.get("reference_texts"),
        )
    else:
        if args.source_epic is None or args.primary_epic is None:
            parser.error("--source-epic and --primary-epic are required without --fixture")
        tasks = []
        if args.tasks:
            tasks = json.loads(args.tasks.read_text(encoding="utf-8"))
        refs = None
        if args.references:
            refs = json.loads(args.references.read_text(encoding="utf-8"))
        plan = build_split_plan(
            args.source_epic,
            args.primary_epic,
            args.primary_score,
            args.primary_match_type,
            _parse_secondary(args.secondary),
            tasks,
            refs,
        )

    if args.format == "json":
        print(json.dumps(plan.to_dict(), indent=2))
    else:
        print(plan.summary)
        print(plan.detection_rationale)
        for a in plan.assignments:
            print(f"  {a.source_id} -> {a.target_id}: {a.rationale}")
        if plan.id_remap:
            print("ID remap:", plan.id_remap)
        if plan.unresolved_references:
            print("Unresolved:", plan.unresolved_references)

    return 0


if __name__ == "__main__":
    sys.exit(main())

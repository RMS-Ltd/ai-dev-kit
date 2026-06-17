#!/usr/bin/env python3
"""
KMA story basename collision detector (M02 / UXR-017).

Scans per-epic story-{nn}-*.md basenames for duplicates within an epic folder.

Part of FR-136 / E06:S09:T39.
"""

from __future__ import annotations

import argparse
import json
import re
import sys
from collections import defaultdict
from pathlib import Path
from typing import Any, Dict, List

_EPIC_DIR_RE = re.compile(r"^epic-(\d{1,3})$", re.IGNORECASE)
_STORY_FILE_RE = re.compile(r"^story-\d{1,3}-.*\.md$", re.IGNORECASE)


def detect_collisions(kanban_root: Path) -> Dict[str, Any]:
    """Return collision report for story basenames within each epic folder."""
    kanban_root = kanban_root.resolve()
    epics_dir = kanban_root / "epics"
    collisions: List[Dict[str, Any]] = []
    epics_scanned = 0
    stories_scanned = 0

    if not epics_dir.is_dir():
        return {
            "kanban_root": str(kanban_root),
            "epics_scanned": 0,
            "stories_scanned": 0,
            "collision_count": 0,
            "collisions": [],
            "clean": True,
        }

    for epic_path in sorted(epics_dir.iterdir()):
        if not epic_path.is_dir() or not _EPIC_DIR_RE.match(epic_path.name):
            continue
        epics_scanned += 1
        epic_num = int(_EPIC_DIR_RE.match(epic_path.name).group(1))  # type: ignore[union-attr]
        by_basename: Dict[str, List[str]] = defaultdict(list)
        for story_path in epic_path.rglob("*.md"):
            if not _STORY_FILE_RE.match(story_path.name):
                continue
            stories_scanned += 1
            rel = str(story_path.relative_to(kanban_root))
            by_basename[story_path.name.lower()].append(rel)
        for basename, paths in sorted(by_basename.items()):
            if len(paths) > 1:
                collisions.append(
                    {"epic": epic_num, "basename": basename, "paths": sorted(paths)}
                )

    return {
        "kanban_root": str(kanban_root),
        "epics_scanned": epics_scanned,
        "stories_scanned": stories_scanned,
        "collision_count": len(collisions),
        "collisions": collisions,
        "clean": len(collisions) == 0,
    }


def main() -> int:
    parser = argparse.ArgumentParser(description="KMA story basename collision detector")
    parser.add_argument("--kanban-root", type=Path, required=True)
    parser.add_argument("--json", action="store_true", help="Emit JSON report")
    args = parser.parse_args()

    if not args.kanban_root.is_dir():
        print(f"ERROR: kanban root not found: {args.kanban_root}", file=sys.stderr)
        return 2

    report = detect_collisions(args.kanban_root)
    if args.json:
        print(json.dumps(report, indent=2, sort_keys=True))
    else:
        print(f"Kanban root: {report['kanban_root']}")
        print(f"Epics scanned: {report['epics_scanned']}, stories: {report['stories_scanned']}")
        print(f"Collisions: {report['collision_count']} ({'clean' if report['clean'] else 'FAIL'})")
        for c in report["collisions"]:
            print(f"  epic-{c['epic']:02d} {c['basename']}: {c['paths']}")
    return 0 if report["clean"] else 1


if __name__ == "__main__":
    sys.exit(main())

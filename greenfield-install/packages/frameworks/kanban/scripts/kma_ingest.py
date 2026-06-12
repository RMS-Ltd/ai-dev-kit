#!/usr/bin/env python3
"""
KMA ingest helper — deterministic legacy corpus inventory (read-only).

Used by KMA Step 1 and replay tests. Does not modify the legacy tree.

Part of FR-127 / E06:S09:T31.
"""

from __future__ import annotations

import argparse
import json
import re
import sys
from dataclasses import dataclass, field
from pathlib import Path
from typing import Dict, List, Set

# Epic doc patterns (brownfield variants)
_EPIC_FILE_RE = re.compile(
    r"^(?:Epic|E)[-_]?(\d+)\.md$", re.IGNORECASE
)
# Story file: E{n}-S{m}.md or Story-{n}-*.md
_STORY_FILE_RE = re.compile(
    r"^(?:E(\d+)[-_]S(\d+)|Story[-_](\d+)[-_].*)\.md$", re.IGNORECASE
)
# Inline E:S:T or E-S-T tokens in content
_INLINE_EST_RE = re.compile(
    r"\bE(\d{1,2})[:\-]S(\d{1,3})[:\-]T(\d{1,2})\b", re.IGNORECASE
)


@dataclass
class IngestReport:
    legacy_root: str
    epics: List[Dict] = field(default_factory=list)
    stories: List[Dict] = field(default_factory=list)
    inline_task_tokens: Set[str] = field(default_factory=set)
    naming_patterns: List[str] = field(default_factory=list)

    def to_dict(self) -> Dict:
        return {
            "legacy_root": self.legacy_root,
            "epic_count": len(self.epics),
            "story_count": len(self.stories),
            "inline_task_count": len(self.inline_task_tokens),
            "naming_patterns": self.naming_patterns,
            "epics": self.epics,
            "stories": self.stories,
            "inline_task_tokens": sorted(self.inline_task_tokens),
        }


def ingest_legacy_corpus(legacy_root: Path) -> IngestReport:
    """Read-only inventory of legacy kanban corpus."""
    legacy_root = legacy_root.resolve()
    report = IngestReport(legacy_root=str(legacy_root))
    patterns_seen: Set[str] = set()

    if not legacy_root.is_dir():
        return report

    for path in legacy_root.rglob("*.md"):
        if not path.is_file():
            continue
        rel = path.relative_to(legacy_root)
        name = path.name

        epic_m = _EPIC_FILE_RE.match(name)
        if epic_m:
            report.epics.append(
                {"path": str(rel), "epic_num": int(epic_m.group(1)), "pattern": "epic_file"}
            )
            patterns_seen.add("epic_file")
            continue

        story_m = _STORY_FILE_RE.match(name)
        if story_m:
            epic_num = story_m.group(1) or story_m.group(3)
            story_num = story_m.group(2) or story_m.group(3)
            report.stories.append(
                {
                    "path": str(rel),
                    "epic_num": int(epic_num) if epic_num else None,
                    "story_num": int(story_num) if story_num else None,
                    "pattern": "E{n}-S{m}" if story_m.group(1) else "Story-{n}",
                }
            )
            patterns_seen.add("E{n}-S{m}" if story_m.group(1) else "Story-{n}")
            continue

        # Inline tokens in any markdown file
        try:
            text = path.read_text(encoding="utf-8", errors="replace")
        except OSError:
            continue
        for m in _INLINE_EST_RE.finditer(text):
            token = f"E{m.group(1)}:S{m.group(2)}:T{m.group(3)}"
            report.inline_task_tokens.add(token)
            patterns_seen.add("inline_E:S:T")

    report.naming_patterns = sorted(patterns_seen)
    return report


def main() -> int:
    parser = argparse.ArgumentParser(description="KMA legacy corpus ingest (read-only)")
    parser.add_argument("--legacy-root", type=Path, required=True, help="Legacy kanban root")
    parser.add_argument("--json", action="store_true", help="Emit JSON report")
    args = parser.parse_args()

    report = ingest_legacy_corpus(args.legacy_root)
    if args.json:
        print(json.dumps(report.to_dict(), indent=2))
    else:
        d = report.to_dict()
        print(f"Legacy root: {d['legacy_root']}")
        print(f"Epics: {d['epic_count']}, Stories: {d['story_count']}, Inline tasks: {d['inline_task_count']}")
        print(f"Patterns: {', '.join(d['naming_patterns']) or '(none)'}")
    return 0


if __name__ == "__main__":
    sys.exit(main())

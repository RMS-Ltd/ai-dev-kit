#!/usr/bin/env python3
"""
Build TARGET-EST-TREE.md from operator est-tree source (deduped unique E:S:T).

Optional maintainer tool for TSP regeneration. First-seen title wins per token.

Part of FR-136 / E06:S09:T39.
"""

from __future__ import annotations

import argparse
import re
import sys
from collections import defaultdict
from pathlib import Path
from typing import Dict, List, Optional, Tuple

_EST_LINE_RE = re.compile(
    r"\bE(\d{1,2})[:\-]S(\d{1,3})[:\-]T(\d{1,3})\b", re.IGNORECASE
)
_TITLE_AFTER_RE = re.compile(
    r"[—\-]\s*\*?([^*\n|]+)\*?", re.IGNORECASE
)

UAT_STORY_HEADER_MARKERS = ("uat", "user acceptance", "acceptance test")


def normalize_est(epic: int, story: int, task: int) -> str:
    t = f"T{task:02d}" if task < 101 else f"T{task:03d}"
    return f"E{epic}:S{story}:{t}"


def parse_source_lines(path: Path) -> Dict[str, str]:
    """Dedupe E:S:T tokens; first-seen title wins; longest named title on conflict."""
    tokens: Dict[str, str] = {}
    for line in path.read_text(encoding="utf-8", errors="replace").splitlines():
        m = _EST_LINE_RE.search(line)
        if not m:
            continue
        token = normalize_est(int(m.group(1)), int(m.group(2)), int(m.group(3)))
        title_m = _TITLE_AFTER_RE.search(line[m.end() :])
        title = title_m.group(1).strip() if title_m else ""
        if token not in tokens:
            tokens[token] = title
        elif title and len(title) > len(tokens[token]):
            tokens[token] = title
    return tokens


def group_by_epic_story(tokens: Dict[str, str]) -> Dict[Tuple[int, int], List[Tuple[str, str]]]:
    grouped: Dict[Tuple[int, int], List[Tuple[str, str]]] = defaultdict(list)
    for token, title in sorted(tokens.items()):
        parts = token.split(":")
        epic = int(parts[0][1:])
        story = int(parts[1][1:])
        grouped[(epic, story)].append((token, title))
    return grouped


def render_tsp(
    tokens: Dict[str, str],
    project: str = "adopter",
    source_note: str = "",
) -> str:
    grouped = group_by_epic_story(tokens)
    epics = sorted({e for e, _ in grouped})
    lines = [
        "---",
        "lifecycle: evergreen",
        "---",
        "",
        f"# {project} — Target E/S/T tree (TSP)",
        "",
        "**Role:** Canonical structural target for KMA guided mode.",
    ]
    if source_note:
        lines.append(f"**Source:** {source_note}")
    lines.extend(
        [
            "",
            f"| Metric | Count |",
            f"|--------|------:|",
            f"| Unique tasks (`E:S:T`) | {len(tokens)} |",
            f"| Epic bands | {len(epics)} |",
            "",
            "---",
            "",
        ]
    )
    current_epic: Optional[int] = None
    current_story: Optional[int] = None
    for (epic, story), tasks in sorted(grouped.items()):
        if epic != current_epic:
            lines.append(f"## E{epic:02d} — Epic {epic:02d}")
            lines.append("")
            current_epic = epic
            current_story = None
        if story != current_story:
            lines.append(f"### E{epic:02d}:S{story:02d} — Story {story:02d} [E{epic:02d}:S{story:02d}]")
            current_story = story
        for token, title in tasks:
            if title:
                lines.append(f"- **{token}** — *{title}*")
            else:
                lines.append(f"- **{token}**")
        lines.append("")
    return "\n".join(lines).rstrip() + "\n"


def main() -> int:
    parser = argparse.ArgumentParser(description="Build TARGET-EST-TREE.md from est-tree source")
    parser.add_argument("--source", type=Path, required=True, help="Operator est-tree markdown")
    parser.add_argument("--output", type=Path, required=True, help="TARGET-EST-TREE.md output")
    parser.add_argument("--project", default="adopter", help="Project name in header")
    args = parser.parse_args()

    if not args.source.is_file():
        print(f"ERROR: source not found: {args.source}", file=sys.stderr)
        return 2

    tokens = parse_source_lines(args.source)
    if not tokens:
        print("ERROR: no E:S:T tokens found in source", file=sys.stderr)
        return 1

    tsp = render_tsp(tokens, project=args.project, source_note=str(args.source))
    args.output.parent.mkdir(parents=True, exist_ok=True)
    args.output.write_text(tsp, encoding="utf-8")
    print(f"Wrote {len(tokens)} unique tasks to {args.output}")
    return 0


if __name__ == "__main__":
    sys.exit(main())

#!/usr/bin/env python3
"""Escape {placeholder} patterns in docs/*.md outside fenced code so MDX does not treat them as expressions."""

from __future__ import annotations

import re
import sys
from pathlib import Path

REPO = Path(__file__).resolve().parent.parent
DOCS = REPO / "docs"
SKIP_SUBSTR = "changelog-and-release-notes/changelog-archive"

# Order matters: longer names first (e.g. name before n, PROJECT_NAME before PROJECT).
PLACEHOLDERS = [
    "PERPETUAL_TASK",
    "PROJECT_NAME",
    "PROJECT_TYPE",
    "TECH_STACK",
    "ORGANIZATION",
    "internal_version",
    "semver_version",
    "kanban_path",
    "description",
    "start_line",
    "end_line",
    "content",
    "story",
    "BUILD",
    "TASK",
    "EPIC",
    "STORY",
    "DOMAIN",
    "semver",
    "project",
    "task",
    "build",
    "epic",
    "name",
    "slug",
    "N",
    "n",
    "NN",
    "B",
]


def escape_line(line: str) -> str:
    s = line
    for ph in PLACEHOLDERS:
        pat = re.compile(r"(?<!\\)\{" + re.escape(ph) + r"\}")
        rep = "\\{" + ph + "\\}"
        s = pat.sub(rep, s)
    return s


def process_file(path: Path) -> bool:
    raw = path.read_text(encoding="utf-8")
    lines = raw.splitlines(keepends=True)
    out: list[str] = []
    in_fence = False
    changed = False
    for line in lines:
        if line.lstrip().startswith("```"):
            in_fence = not in_fence
            out.append(line)
            continue
        if in_fence:
            out.append(line)
            continue
        new_line = escape_line(line)
        if new_line != line:
            changed = True
        out.append(new_line)
    if changed:
        path.write_text("".join(out), encoding="utf-8")
    return changed


def main() -> int:
    touched = 0
    for path in sorted(DOCS.rglob("*.md")):
        if SKIP_SUBSTR in str(path).replace("\\", "/"):
            continue
        if process_file(path):
            touched += 1
            print(path.relative_to(REPO))
    print(f"Updated {touched} files", file=sys.stderr)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

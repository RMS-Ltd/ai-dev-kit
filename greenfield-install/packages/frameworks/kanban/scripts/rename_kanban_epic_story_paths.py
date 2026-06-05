#!/usr/bin/env python3
"""
Rename Epic-/Story- path segments to epic-/story- (UXR-017 / ADR-015).

Usage:
  python rename_kanban_epic_story_paths.py --kanban-root PATH [--dry-run] [--content-only]
"""

from __future__ import annotations

import argparse
import re
import sys
from pathlib import Path
from typing import List, Tuple

# Segment renames (order: dirs deepest first handled by sorting paths by depth desc)
EPIC_DIR_RE = re.compile(r"\bEpic-(\d+)\b")
STORY_SEG_RE = re.compile(r"\bStory-(\d{3}|\d{1,2})\b")


def _case_safe_rename(src: Path, dst: Path, dry_run: bool) -> None:
    if src == dst or not src.exists():
        return
    if dst.exists():
        if src.is_file() and dst.is_file():
            return  # already migrated
        print(f"  skip (target exists): {dst}", file=sys.stderr)
        return
    if dry_run:
        print(f"  mv {src} -> {dst}")
        return
    if src.name.lower() == dst.name.lower() and src.name != dst.name:
        tmp = src.parent / f"{dst.name}-uxr017-tmp"
        src.rename(tmp)
        tmp.rename(dst)
    else:
        src.rename(dst)


def _rename_paths_under(root: Path, dry_run: bool) -> List[Tuple[Path, Path]]:
    """Collect directory and file renames (deepest paths first)."""
    renames: List[Tuple[Path, Path]] = []

    for path in sorted(root.rglob("*"), key=lambda p: len(p.parts), reverse=True):
        if path.name.startswith("Epic-") and path.is_dir():
            new_name = "epic-" + path.name[5:]
            renames.append((path, path.parent / new_name))
        elif path.name.startswith("Epic-") and path.is_file():
            new_name = "epic-" + path.name[5:]
            renames.append((path, path.parent / new_name))
        elif path.name.startswith("Story-") and path.is_file():
            new_name = "story-" + path.name[6:]
            renames.append((path, path.parent / new_name))
        elif path.name.startswith("Story-") and path.is_dir():
            new_name = "story-" + path.name[6:]
            renames.append((path, path.parent / new_name))

    return renames


def _rewrite_content(text: str) -> str:
    """Replace Epic-/Story- path segments in markdown links and prose paths."""
    import kanban_paths as _kp

    text = EPIC_DIR_RE.sub(lambda m: f"epic-{_kp.segment_number(int(m.group(1)))}", text)
    text = STORY_SEG_RE.sub(
        lambda m: f"story-{_kp.segment_number(int(m.group(1)))}",
        text,
    )
    return text


def _update_file_contents(root: Path, dry_run: bool) -> int:
    count = 0
    for path in root.rglob("*"):
        if not path.is_file():
            continue
        if path.suffix not in (".md", ".yaml", ".yml", ".py", ".json", ".txt", ".cursorrules"):
            continue
        try:
            original = path.read_text(encoding="utf-8")
        except (UnicodeDecodeError, OSError):
            continue
        updated = _rewrite_content(original)
        if updated != original:
            count += 1
            if dry_run:
                print(f"  content {path}")
            else:
                path.write_text(updated, encoding="utf-8")
    return count


def main() -> None:
    parser = argparse.ArgumentParser(description="Rename Epic-/Story- kanban path segments to lowercase.")
    parser.add_argument("--kanban-root", type=Path, required=True, help="Kanban root or templates root")
    parser.add_argument("--dry-run", action="store_true")
    parser.add_argument("--content-only", action="store_true", help="Skip path renames; only rewrite file contents")
    args = parser.parse_args()

    root = args.kanban_root.resolve()
    if not root.is_dir():
        print(f"ERROR: not a directory: {root}", file=sys.stderr)
        sys.exit(1)

    if not args.content_only:
        renames = _rename_paths_under(root, args.dry_run)
        print(f"Path renames: {len(renames)}")
        for src, dst in renames:
            _case_safe_rename(src, dst, args.dry_run)

    n = _update_file_contents(root, args.dry_run)
    print(f"Content files updated: {n}")
    print("Done." if not args.dry_run else "Dry run complete.")


if __name__ == "__main__":
    main()

#!/usr/bin/env python3
"""
Normalize epic/story/task path segment padding (UXR-017 extension).

- epic-N -> epic-NN (N <= 99); epic-100+ -> epic-NNN
- story-NNN- -> story-NN- (same rule)
- T01- -> T01- (tasks <= 99); T100+ unchanged

Usage:
  python migrate_kanban_segment_padding.py --root PATH [--dry-run] [--paths-only] [--content-only]
"""

from __future__ import annotations

import argparse
import re
import sys
from pathlib import Path
from typing import List, Tuple

sys.path.insert(0, str(Path(__file__).parent))
import kanban_paths as kp  # noqa: E402

_RE_EPIC_PATH = re.compile(r"\b(epic|Epic)-(\d+)\b")
_RE_STORY_PATH = re.compile(r"\b(story|Story)-(\d{1,3})(?=-)")
_RE_TASK_PATH = re.compile(r"\bT(\d{1,3})-")


def _canonical_epic_seg(n: int) -> str:
    return f"epic-{kp.segment_number(n)}"


def _canonical_story_seg(n: int) -> str:
    return f"story-{kp.segment_number(n)}"


def _canonical_task_seg(n: int) -> str:
    return f"T{kp.task_segment_number(n)}-"


_RE_EPIC_SLUG_FILE = re.compile(r"^(?:epic|Epic)-(\d+)(-.+\.md)$", re.I)


def _new_epic_slug_file(name: str) -> str | None:
    """e.g. Epic-4-Kanban-Framework.md -> epic-04-Kanban-Framework.md"""
    m = _RE_EPIC_SLUG_FILE.match(name)
    if not m:
        return None
    canon = kp.segment_number(int(m.group(1)))
    new = f"epic-{canon}{m.group(2)}"
    return new if new != name else None


def _new_epic_name(name: str) -> str | None:
    slug = _new_epic_slug_file(name)
    if slug:
        return slug
    m = kp._RE_EPIC_SEG.match(name.replace(".md", ""))
    if not m:
        return None
    n = int(m.group(1))
    canon = kp.segment_number(n)
    prefix = "epic-" if name.lower().startswith("epic") else "Epic-"
    if name.endswith(".md"):
        new = f"{prefix}{canon}.md"
    else:
        new = f"{prefix}{canon}"
    return new if new != name else None


def _new_story_name(name: str) -> str | None:
    m = kp._RE_STORY_SEG.match(name)
    if not m:
        return None
    n = int(m.group(1))
    canon = kp.segment_number(n)
    rest = name[m.end() :]
    prefix = "story-" if name.lower().startswith("story") else "Story-"
    new = f"{prefix}{canon}{rest}"
    return new if new != name else None


def _new_task_name(name: str) -> str | None:
    m = kp._RE_TASK_FILE.match(name)
    if not m:
        return None
    n = int(m.group(1))
    canon = kp.task_segment_number(n)
    new = f"T{canon}-" + name[m.end() :]
    return new if new != name else None


def _case_safe_rename(src: Path, dst: Path, dry_run: bool) -> None:
    if src == dst or not src.exists():
        return
    if dst.exists():
        print(f"  skip (target exists): {dst}", file=sys.stderr)
        return
    if dry_run:
        print(f"  mv {src} -> {dst}")
        return
    if src.name.lower() == dst.name.lower() and src.name != dst.name:
        tmp = src.parent / f"__pad_tmp_{dst.name}"
        src.rename(tmp)
        tmp.rename(dst)
    else:
        src.rename(dst)


def template_pack_scan_roots(templates_root: Path) -> List[Path]:
    """All directories to scan for path renames in the framework template pack."""
    roots = [templates_root]
    for sub in ("epics", "stories", "tasks"):
        p = templates_root / sub
        if p.is_dir():
            roots.append(p)
    return roots


def collect_path_renames(scan_root: Path) -> List[Tuple[Path, Path]]:
    renames: List[Tuple[Path, Path]] = []

    for path in sorted(scan_root.rglob("*"), key=lambda p: len(p.parts), reverse=True):
        new_name = None
        if path.name.startswith(("epic-", "Epic-")) and (
            path.is_dir() or (path.is_file() and path.suffix == ".md")
        ):
            new_name = _new_epic_name(path.name)
        elif path.name.startswith(("story-", "Story-")):
            new_name = _new_story_name(path.name)
        elif kp._RE_TASK_FILE.match(path.name) and path.is_file():
            new_name = _new_task_name(path.name)

        if new_name:
            renames.append((path, path.parent / new_name))

    return renames


def rewrite_content(text: str) -> str:
    def epic_sub(m: re.Match) -> str:
        n = int(m.group(2))
        return _canonical_epic_seg(n)

    def story_sub(m: re.Match) -> str:
        n = int(m.group(2))
        return _canonical_story_seg(n)

    def task_sub(m: re.Match) -> str:
        n = int(m.group(1))
        return _canonical_task_seg(n)

    text = _RE_EPIC_PATH.sub(epic_sub, text)
    text = _RE_STORY_PATH.sub(story_sub, text)
    text = _RE_TASK_PATH.sub(task_sub, text)
    return text


def update_contents(root: Path, dry_run: bool) -> int:
    count = 0
    suffixes = {".md", ".yaml", ".yml", ".py", ".json", ".txt", ".cursorrules"}
    for path in root.rglob("*"):
        if not path.is_file() or path.suffix not in suffixes:
            continue
        try:
            original = path.read_text(encoding="utf-8")
        except (UnicodeDecodeError, OSError):
            continue
        updated = rewrite_content(original)
        if updated != original:
            count += 1
            if dry_run:
                print(f"  content {path}")
            else:
                path.write_text(updated, encoding="utf-8")
    return count


def main() -> None:
    parser = argparse.ArgumentParser(description="Migrate kanban path segment padding to 2-digit default.")
    parser.add_argument("--root", type=Path, required=True, help="Repo root or kanban epics parent")
    parser.add_argument("--dry-run", action="store_true")
    parser.add_argument("--paths-only", action="store_true")
    parser.add_argument("--content-only", action="store_true")
    parser.add_argument(
        "--template-pack",
        action="store_true",
        help="Scan framework templates/ tree (Epic-N dirs, templates/epics flat files, stories/, tasks/)",
    )
    args = parser.parse_args()

    root = args.root.resolve()
    if args.template_pack:
        if not root.is_dir():
            print(f"ERROR: templates root not found: {root}", file=sys.stderr)
            sys.exit(1)
        scan_roots = template_pack_scan_roots(root)
        content_root = root
    else:
        epics_root = root / "epics" if (root / "epics").is_dir() else root
        if not epics_root.is_dir():
            print(f"ERROR: epics root not found: {epics_root}", file=sys.stderr)
            sys.exit(1)
        scan_roots = [epics_root]
        content_root = root if root.name != "epics" else root.parent.parent

    if not args.content_only:
        renames: List[Tuple[Path, Path]] = []
        for scan_root in scan_roots:
            renames.extend(collect_path_renames(scan_root))
        # de-dupe by src path
        seen_src = set()
        unique: List[Tuple[Path, Path]] = []
        for src, dst in renames:
            if src not in seen_src:
                seen_src.add(src)
                unique.append((src, dst))
        print(f"Path renames: {len(unique)}")
        for src, dst in unique:
            _case_safe_rename(src, dst, args.dry_run)

    if not args.paths_only:
        n = update_contents(content_root, args.dry_run)
        print(f"Content files updated: {n}")

    print("Done." if not args.dry_run else "Dry run complete.")


if __name__ == "__main__":
    main()

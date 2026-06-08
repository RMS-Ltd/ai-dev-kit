#!/usr/bin/env python3
"""Validate kanban naming hygiene in docs/kanban/epics/.

Exits 0 on clean tree, exits 1 with report on violations.
Uses only Python stdlib.
"""

import argparse
import re
import sys
from collections import defaultdict
from pathlib import Path

_KANBAN_SCRIPTS = Path(__file__).resolve().parent.parent.parent.parent / "kanban" / "scripts"
if str(_KANBAN_SCRIPTS) not in sys.path:
    sys.path.insert(0, str(_KANBAN_SCRIPTS))
import kanban_paths as kp  # noqa: E402

KANBAN_EPICS = Path("docs/kanban/epics")
_EPIC_DIR_RE = re.compile(r"^(?:epic|Epic)-(\d+)$", re.IGNORECASE)
_STORY_FILE_RE = re.compile(r"^(?:story|Story)-(\d+)-.*\.md$", re.IGNORECASE)
_STORY_DIR_RE = re.compile(r"^(?:story|Story)-(\d+)", re.IGNORECASE)


def _iter_epic_dirs(epics_root: Path):
    for epic_dir in epics_root.iterdir():
        if epic_dir.is_dir() and _EPIC_DIR_RE.match(epic_dir.name):
            yield epic_dir


def find_t0xx_files(epics_root: Path) -> list:
    """Find deprecated T0xx files (T01-T099)."""
    pattern = re.compile(r"^T0\d{2}-")
    return [str(p) for p in epics_root.rglob("T0[0-9][0-9]-*") if pattern.match(p.name)]


def find_duplicate_stories(epics_root: Path) -> list:
    """Find duplicate story numbers within same epic."""
    issues = []
    for epic_dir in _iter_epic_dirs(epics_root):
        story_files = defaultdict(list)
        for f in epic_dir.iterdir():
            if not f.is_file() or f.suffix != ".md":
                continue
            match = _STORY_FILE_RE.match(f.name)
            if match:
                story_files[int(match.group(1))].append(f.name)

        for story_num, files in sorted(story_files.items()):
            if len(files) > 1:
                issues.append({
                    "epic": epic_dir.name,
                    "story_number": story_num,
                    "files": files,
                })

    return issues


def find_duplicate_tasks(epics_root: Path) -> list:
    """Find duplicate task numbers within same story directory."""
    issues = []
    task_pattern = re.compile(r"^T(\d+)-")

    for epic_dir in _iter_epic_dirs(epics_root):
        for story_dir in epic_dir.iterdir():
            if not story_dir.is_dir() or not _STORY_DIR_RE.match(story_dir.name):
                continue

            task_files = defaultdict(list)
            for f in story_dir.iterdir():
                if not f.is_file() or f.suffix != ".md":
                    continue
                match = task_pattern.match(f.name)
                if match:
                    task_files[int(match.group(1))].append(f.name)

            for task_num, files in sorted(task_files.items()):
                if len(files) > 1:
                    issues.append({
                        "epic": epic_dir.name,
                        "story_dir": story_dir.name,
                        "task_number": task_num,
                        "files": files,
                    })

    return issues


def find_orphaned_directories(epics_root: Path) -> list:
    """Find story directories with no matching .md at epic root."""
    issues = []

    for epic_dir in _iter_epic_dirs(epics_root):
        for story_dir in epic_dir.iterdir():
            if not story_dir.is_dir() or not _STORY_DIR_RE.match(story_dir.name):
                continue

            match = _STORY_DIR_RE.match(story_dir.name)
            if not match:
                continue

            story_num = match.group(1)
            expected_md = list(epic_dir.glob(f"story-{story_num}-*.md")) + list(
                epic_dir.glob(f"Story-{story_num}-*.md")
            )
            if not expected_md:
                issues.append({
                    "epic": epic_dir.name,
                    "directory": story_dir.name,
                })

    return issues


def find_segment_padding_issues(epics_root: Path) -> list:
    """Paths with non-canonical epic/story/task segment padding (ADR-015 / UXR-017)."""
    all_v = kp.padding_violations(epics_root)
    capitalised = {v for v in all_v if "Epic-" in v or "Story-" in v}
    return [{"path": v} for v in all_v if v not in capitalised]


def main():
    parser = argparse.ArgumentParser(description="Validate kanban naming hygiene.")
    parser.add_argument(
        "--strict",
        action="store_true",
        help="Treat capitalised Epic-/Story- path segments as errors (ADR-015 Wave 2)",
    )
    parser.add_argument(
        "--epics-root",
        type=Path,
        default=KANBAN_EPICS,
        help="Kanban epics directory (default: docs/kanban/epics)",
    )
    args = parser.parse_args()
    epics_root = args.epics_root

    if not epics_root.exists():
        print(f"ERROR: Kanban epics root not found: {epics_root}")
        sys.exit(1)

    t0xx = find_t0xx_files(epics_root)
    dup_stories = find_duplicate_stories(epics_root)
    dup_tasks = find_duplicate_tasks(epics_root)
    orphans = find_orphaned_directories(epics_root)
    padding_issues = find_segment_padding_issues(epics_root)
    all_padding = kp.padding_violations(epics_root)
    capitalised = [v for v in all_padding if "Epic-" in v or "Story-" in v]

    total = len(t0xx) + len(dup_stories) + len(dup_tasks) + len(orphans)
    if args.strict:
        total += len(padding_issues) + len(capitalised)

    if total == 0 and not ((padding_issues or capitalised) and not args.strict):
        print("✅ Kanban naming validation PASSED")
        print("   0 T0xx files, 0 duplicate stories, 0 duplicate tasks, 0 orphans")
        if padding_issues or capitalised:
            print(
                f"   ⚠️  {len(padding_issues)} padding, {len(capitalised)} capitalised "
                "(warn-only; use --strict to fail)"
            )
        sys.exit(0)

    print("❌ Kanban naming validation FAILED")
    print()

    if t0xx:
        print(f"Deprecated T0xx files: {len(t0xx)}")
        for path in t0xx:
            print(f"  {path}")
        print()

    if dup_stories:
        print(f"Duplicate story files: {len(dup_stories)}")
        for issue in dup_stories:
            print(f"  {issue['epic']}/Story-{issue['story_number']:03d}: {issue['files']}")
        print()

    if dup_tasks:
        print(f"Duplicate task files: {len(dup_tasks)}")
        for issue in dup_tasks:
            print(
                f"  {issue['epic']}/{issue['story_dir']}/T{issue['task_number']:02d}: "
                f"{issue['files']}"
            )
        print()

    if orphans:
        print(f"Orphaned directories: {len(orphans)}")
        for issue in orphans:
            print(f"  {issue['epic']}/{issue['directory']}")
        print()

    if padding_issues and args.strict:
        print(f"Segment padding issues: {len(padding_issues)}")
        for issue in padding_issues[:50]:
            print(f"  {issue['path']}")
        if len(padding_issues) > 50:
            print(f"  ... and {len(padding_issues) - 50} more")
        print()

    if capitalised:
        label = "Capitalised epic/story segments (ADR-015)"
        print(f"{label}: {len(capitalised)}")
        for path in capitalised[:50]:
            print(f"  {path}")
        if len(capitalised) > 50:
            print(f"  ... and {len(capitalised) - 50} more")
        print()

    sys.exit(1)


if __name__ == "__main__":
    main()

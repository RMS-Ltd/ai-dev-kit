#!/usr/bin/env python3
"""Validate kanban naming hygiene in docs/project-management/kanban/epics/.

Exits 0 on clean tree, exits 1 with report on violations.
Uses only Python stdlib.
"""

import re
import sys
from collections import defaultdict
from pathlib import Path

KANBAN_EPICS = Path("docs/project-management/kanban/epics")


def find_t0xx_files(epics_root: Path) -> list:
    """Find deprecated T0xx files (T001-T099)."""
    pattern = re.compile(r"^T0\d{2}-")
    return [str(p) for p in epics_root.rglob("T0[0-9][0-9]-*") if pattern.match(p.name)]


def find_duplicate_stories(epics_root: Path) -> list:
    """Find duplicate story numbers within same epic."""
    issues = []
    story_pattern = re.compile(r"^Story-(\d+)-.*\.md$")

    for epic_dir in epics_root.iterdir():
        if not epic_dir.is_dir() or not epic_dir.name.startswith("Epic-"):
            continue

        story_files = defaultdict(list)
        for f in epic_dir.iterdir():
            if not f.is_file() or f.suffix != ".md":
                continue
            match = story_pattern.match(f.name)
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

    for epic_dir in epics_root.iterdir():
        if not epic_dir.is_dir() or not epic_dir.name.startswith("Epic-"):
            continue

        for story_dir in epic_dir.iterdir():
            if not story_dir.is_dir() or not story_dir.name.startswith("Story-"):
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

    for epic_dir in epics_root.iterdir():
        if not epic_dir.is_dir() or not epic_dir.name.startswith("Epic-"):
            continue

        for story_dir in epic_dir.iterdir():
            if not story_dir.is_dir() or not story_dir.name.startswith("Story-"):
                continue

            match = re.match(r"^Story-(\d+)", story_dir.name)
            if not match:
                continue

            story_num = match.group(1)
            expected_md = list(epic_dir.glob(f"Story-{story_num}-*.md"))
            if not expected_md:
                issues.append({
                    "epic": epic_dir.name,
                    "directory": story_dir.name,
                })

    return issues


def find_zero_padding_issues(epics_root: Path) -> list:
    """Find story files with missing zero-padding."""
    issues = []

    for epic_dir in epics_root.iterdir():
        if not epic_dir.is_dir() or not epic_dir.name.startswith("Epic-"):
            continue

        for f in epic_dir.iterdir():
            if not f.is_file() or f.suffix != ".md":
                continue

            if re.match(r"^Story-\d{1,2}-.*\.md$", f.name) and not re.match(
                r"^Story-\d{3}-.*\.md$", f.name
            ):
                issues.append({
                    "epic": epic_dir.name,
                    "file": f.name,
                })

    return issues


def main():
    if not KANBAN_EPICS.exists():
        print(f"ERROR: Kanban epics root not found: {KANBAN_EPICS}")
        sys.exit(1)

    t0xx = find_t0xx_files(KANBAN_EPICS)
    dup_stories = find_duplicate_stories(KANBAN_EPICS)
    dup_tasks = find_duplicate_tasks(KANBAN_EPICS)
    orphans = find_orphaned_directories(KANBAN_EPICS)
    zero_pad = find_zero_padding_issues(KANBAN_EPICS)

    total = len(t0xx) + len(dup_stories) + len(dup_tasks) + len(orphans) + len(zero_pad)

    if total == 0:
        print("✅ Kanban naming validation PASSED")
        print("   0 Txxx files, 0 duplicate stories, 0 duplicate tasks, 0 orphans, 0 zero-padding")
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

    if zero_pad:
        print(f"Zero-padding issues: {len(zero_pad)}")
        for issue in zero_pad:
            print(f"  {issue['epic']}/{issue['file']}")
        print()

    sys.exit(1)


if __name__ == "__main__":
    main()

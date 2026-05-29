#!/usr/bin/env python3
"""Generate JSON inventory of kanban naming hygiene issues.

Scans docs/project-management/kanban/epics/ and produces:
- JSON inventory (machine-readable)
- Human-readable Markdown report

Issues detected:
1. Deprecated T0xx files (T001-T099) → should be T01-T99
2. Duplicate task files within same story directory
3. Duplicate story files within same epic
4. Orphaned story directories (no matching .md at epic root)
5. Zero-padding issues (Story-N or Story-NN instead of Story-NNN)
"""

import json
import os
import re
from pathlib import Path
from collections import defaultdict
from datetime import datetime

# Resolve relative to project root (this script lives in scripts/cleanup/)
SCRIPT_DIR = Path(__file__).resolve().parent
PROJECT_ROOT = SCRIPT_DIR.parent.parent
KANBAN_EPICS = PROJECT_ROOT / "docs/project-management/kanban/epics"


def scan_t0xx_files(epics_root: Path) -> list:
    """Find deprecated T0xx files (T001-T099) that should be T01-T99."""
    issues = []
    pattern = re.compile(r"^T0(\d{2})-(.*)")

    for path in epics_root.rglob("T0[0-9][0-9]-*"):
        # Skip files that are legitimately in a 3-digit directory (T100+)
        # We only care about T001-T099 here
        filename = path.name
        match = pattern.match(filename)
        if not match:
            continue

        task_num = match.group(1)  # e.g. "01" from T001
        rest = match.group(2)
        new_name = f"T{int(task_num):02d}-{rest}"

        # Determine if target already exists
        target_path = path.parent / new_name
        target_exists = target_path.exists()

        issues.append({
            "type": "deprecated_t0xx",
            "path": str(path),
            "filename": filename,
            "suggested_new_name": new_name,
            "suggested_new_path": str(target_path),
            "target_exists": target_exists,
            "action": "delete" if target_exists else "git_mv",
            "reason": (
                f"Target {new_name} already exists (duplicate content). "
                "Delete deprecated T0xx file."
                if target_exists
                else f"Rename deprecated 3-digit to canonical 2-digit: {new_name}"
            ),
        })

    return issues


def scan_duplicate_tasks(epics_root: Path) -> list:
    """Find duplicate task numbers within the same story directory."""
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
                if not f.is_file() or not f.suffix == ".md":
                    continue
                match = task_pattern.match(f.name)
                if match:
                    task_num = int(match.group(1))
                    task_files[task_num].append(f)

            for task_num, files in task_files.items():
                if len(files) > 1:
                    # Determine canonical file (prefer shortest name, or Txx over T0xx)
                    canonical = min(
                        files,
                        key=lambda f: (
                            0 if re.match(r"^T\d{2}-", f.name) else 1,
                            len(f.name),
                            f.name,
                        ),
                    )
                    duplicates = [f for f in files if f != canonical]
                    issues.append({
                        "type": "duplicate_task",
                        "story_dir": str(story_dir),
                        "task_number": task_num,
                        "canonical_file": str(canonical),
                        "canonical_filename": canonical.name,
                        "duplicate_files": [str(f) for f in duplicates],
                        "duplicate_filenames": [f.name for f in duplicates],
                        "action": "git_rm_duplicates",
                    })

    return issues


def scan_duplicate_stories(epics_root: Path) -> list:
    """Find duplicate story numbers within the same epic."""
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
                story_num = int(match.group(1))
                story_files[story_num].append(f)

        for story_num, files in story_files.items():
            if len(files) > 1:
                # No automatic canonical choice — needs human decision
                issues.append({
                    "type": "duplicate_story",
                    "epic": epic_dir.name,
                    "story_number": story_num,
                    "files": [str(f) for f in files],
                    "filenames": [f.name for f in files],
                    "action": "human_decision_required",
                    "note": (
                        "Decide canonical file per story number. "
                        "Registry stories (fr-repo/br-repo) vs functional stories."
                    ),
                })

    return issues


def scan_orphaned_directories(epics_root: Path) -> list:
    """Find story directories with no matching .md file at epic root."""
    issues = []

    for epic_dir in epics_root.iterdir():
        if not epic_dir.is_dir() or not epic_dir.name.startswith("Epic-"):
            continue

        for story_dir in epic_dir.iterdir():
            if not story_dir.is_dir() or not story_dir.name.startswith("Story-"):
                continue

            # Extract story number from directory name
            match = re.match(r"^Story-(\d+)", story_dir.name)
            if not match:
                continue

            story_num = match.group(1)
            # Look for Story-NNN-*.md at epic root
            expected_md = list(epic_dir.glob(f"Story-{story_num}-*.md"))
            if not expected_md:
                issues.append({
                    "type": "orphaned_directory",
                    "epic": epic_dir.name,
                    "directory": str(story_dir),
                    "directory_name": story_dir.name,
                    "story_number": story_num,
                    "action": "human_decision_required",
                    "note": (
                        f"Either create Epic-{epic_dir.name.split('-')[1]}/"
                        f"Story-{story_num}-{{slug}}.md or remove directory."
                    ),
                })

    return issues


def scan_zero_padding(epics_root: Path) -> list:
    """Find story files with missing zero-padding (Story-N or Story-NN)."""
    issues = []

    for epic_dir in epics_root.iterdir():
        if not epic_dir.is_dir() or not epic_dir.name.startswith("Epic-"):
            continue

        for f in epic_dir.iterdir():
            if not f.is_file() or f.suffix != ".md":
                continue

            # Match Story-N-*.md or Story-NN-*.md (but not Story-NNN)
            match = re.match(r"^Story-(\d{1,2})-.*\.md$", f.name)
            if match:
                story_num = int(match.group(1))
                new_name = f"Story-{story_num:03d}-" + f.name.split("-", 2)[2]
                issues.append({
                    "type": "zero_padding",
                    "epic": epic_dir.name,
                    "path": str(f),
                    "filename": f.name,
                    "suggested_new_name": new_name,
                    "suggested_new_path": str(epic_dir / new_name),
                    "action": "git_mv",
                })

    return issues


def generate_inventory() -> dict:
    """Run all scans and return inventory dict."""
    inventory = {
        "generated_at": datetime.now().astimezone().isoformat(),
        "scanned_root": str(KANBAN_EPICS),
        "issues": [],
        "summary": {},
    }

    t0xx = scan_t0xx_files(KANBAN_EPICS)
    dup_tasks = scan_duplicate_tasks(KANBAN_EPICS)
    dup_stories = scan_duplicate_stories(KANBAN_EPICS)
    orphans = scan_orphaned_directories(KANBAN_EPICS)
    zero_pad = scan_zero_padding(KANBAN_EPICS)

    inventory["issues"] = t0xx + dup_tasks + dup_stories + orphans + zero_pad

    inventory["summary"] = {
        "deprecated_t0xx_count": len(t0xx),
        "duplicate_task_groups": len(dup_tasks),
        "duplicate_story_groups": len(dup_stories),
        "orphaned_directories": len(orphans),
        "zero_padding_issues": len(zero_pad),
        "total_issues": len(inventory["issues"]),
        "t0xx_to_rename": sum(1 for i in t0xx if i["action"] == "git_mv"),
        "t0xx_to_delete": sum(1 for i in t0xx if i["action"] == "delete"),
    }

    return inventory


def generate_report(inventory: dict) -> str:
    """Generate human-readable Markdown report from inventory."""
    s = inventory["summary"]
    lines = [
        "# Kanban Naming Hygiene Inventory",
        "",
        f"**Generated:** {inventory['generated_at']}",
        f"**Scanned:** `{inventory['scanned_root']}`",
        "",
        "## Summary",
        "",
        f"| Issue Type | Count |",
        f"| ---------- | ----- |",
        f"| Deprecated T0xx files (T001–T099) | {s['deprecated_t0xx_count']} |",
        f"|  — Of which: to rename (`git mv`) | {s['t0xx_to_rename']} |",
        f"|  — Of which: to delete (target exists) | {s['t0xx_to_delete']} |",
        f"| Duplicate task groups | {s['duplicate_task_groups']} |",
        f"| Duplicate story groups | {s['duplicate_story_groups']} |",
        f"| Orphaned directories | {s['orphaned_directories']} |",
        f"| Zero-padding issues | {s['zero_padding_issues']} |",
        f"| **Total issues** | **{s['total_issues']}** |",
        "",
        "---",
        "",
    ]

    # Group issues by type
    by_type = defaultdict(list)
    for issue in inventory["issues"]:
        by_type[issue["type"]].append(issue)

    if by_type["deprecated_t0xx"]:
        lines.extend([
            "## Deprecated T0xx Files (T001–T099 → T01–T99)",
            "",
        ])
        for issue in by_type["deprecated_t0xx"]:
            action = issue["action"]
            icon = "🗑️" if action == "delete" else "📝"
            lines.append(
                f"- {icon} `{issue['filename']}` → `{issue['suggested_new_name']}` "
                f"({action})"
            )
            if issue.get("reason"):
                lines.append(f"  - {issue['reason']}")
        lines.append("")

    if by_type["duplicate_task"]:
        lines.extend([
            "## Duplicate Task Files",
            "",
        ])
        for issue in by_type["duplicate_task"]:
            lines.append(
                f"- **{issue['story_dir']}** — T{issue['task_number']:02d}"
            )
            lines.append(f"  - Keep: `{issue['canonical_filename']}`")
            for dup in issue["duplicate_filenames"]:
                lines.append(f"  - Delete: `{dup}`")
        lines.append("")

    if by_type["duplicate_story"]:
        lines.extend([
            "## Duplicate Story Files (Human Decision Required)",
            "",
        ])
        for issue in by_type["duplicate_story"]:
            lines.append(f"- **{issue['epic']}** — Story-{issue['story_number']:03d}")
            for fname in issue["filenames"]:
                lines.append(f"  - `{fname}`")
            lines.append(f"  - *{issue['note']}*")
        lines.append("")

    if by_type["orphaned_directory"]:
        lines.extend([
            "## Orphaned Story Directories",
            "",
        ])
        for issue in by_type["orphaned_directory"]:
            lines.append(
                f"- `{issue['directory_name']}` in **{issue['epic']}**"
            )
            lines.append(f"  - {issue['note']}")
        lines.append("")

    if by_type["zero_padding"]:
        lines.extend([
            "## Zero-Padding Issues",
            "",
        ])
        for issue in by_type["zero_padding"]:
            lines.append(
                f"- `{issue['filename']}` → `{issue['suggested_new_name']}`"
            )
        lines.append("")

    return "\n".join(lines)


def main():
    inventory = generate_inventory()

    # Write JSON
    json_path = Path("kanban_naming_inventory.json")
    with open(json_path, "w") as f:
        json.dump(inventory, f, indent=2)
    print(f"Wrote JSON inventory: {json_path}")

    # Write Markdown report
    report_path = Path("kanban_naming_inventory.md")
    with open(report_path, "w") as f:
        f.write(generate_report(inventory))
    print(f"Wrote report: {report_path}")

    # Print summary to stdout
    s = inventory["summary"]
    print(f"\nSummary: {s['deprecated_t0xx_count']} T0xx, "
          f"{s['duplicate_task_groups']} dup-task groups, "
          f"{s['duplicate_story_groups']} dup-story groups, "
          f"{s['orphaned_directories']} orphans, "
          f"{s['zero_padding_issues']} zero-padding")


if __name__ == "__main__":
    main()

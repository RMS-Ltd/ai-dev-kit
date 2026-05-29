#!/usr/bin/env python3
"""Execute kanban naming cleanup based on inventory JSON.

Performs:
1. git rm for duplicate story files
2. git rm for duplicate task files
3. git mv for T0xx → Txx renames

Uses only Python stdlib. Run from project root.
"""

import json
import subprocess
import sys
from pathlib import Path

INVENTORY_PATH = Path("kanban_naming_inventory.json")
KANBAN_ROOT = Path("docs/project-management/kanban")


def git_mv(src: Path, dst: Path) -> bool:
    """Execute git mv. Returns True on success."""
    cmd = ["git", "mv", str(src), str(dst)]
    try:
        subprocess.run(cmd, check=True, capture_output=True, text=True)
        print(f"  git mv {src} -> {dst}")
        return True
    except subprocess.CalledProcessError as e:
        print(f"  ERROR git mv {src}: {e.stderr.strip()}")
        return False


def git_rm(path: Path) -> bool:
    """Execute git rm. Returns True on success."""
    cmd = ["git", "rm", str(path)]
    try:
        subprocess.run(cmd, check=True, capture_output=True, text=True)
        print(f"  git rm {path}")
        return True
    except subprocess.CalledProcessError as e:
        print(f"  ERROR git rm {path}: {e.stderr.strip()}")
        return False


def load_inventory() -> dict:
    with open(INVENTORY_PATH) as f:
        return json.load(f)


def execute_cleanup(inventory: dict) -> dict:
    stats = {
        "t0xx_renamed": 0,
        "t0xx_rename_errors": 0,
        "dup_stories_deleted": 0,
        "dup_story_errors": 0,
        "dup_tasks_deleted": 0,
        "dup_task_errors": 0,
    }

    # Phase 1: Delete duplicate story files
    print("\n=== Phase 1: Delete duplicate story files ===")
    for issue in inventory["issues"]:
        if issue["type"] != "duplicate_story":
            continue
        for dup_path in issue.get("duplicate_files", []):
            p = Path(dup_path)
            if p.exists():
                if git_rm(p):
                    stats["dup_stories_deleted"] += 1
                else:
                    stats["dup_story_errors"] += 1
            else:
                print(f"  SKIP (not found): {p}")

    # Phase 2: Delete duplicate task files
    print("\n=== Phase 2: Delete duplicate task files ===")
    for issue in inventory["issues"]:
        if issue["type"] != "duplicate_task":
            continue
        for dup_path in issue.get("duplicate_files", []):
            p = Path(dup_path)
            if p.exists():
                if git_rm(p):
                    stats["dup_tasks_deleted"] += 1
                else:
                    stats["dup_task_errors"] += 1
            else:
                print(f"  SKIP (not found): {p}")

    # Phase 3: Rename T0xx -> Txx
    print("\n=== Phase 3: Rename T0xx -> Txx ===")
    for issue in inventory["issues"]:
        if issue["type"] != "deprecated_t0xx":
            continue
        if issue["action"] != "git_mv":
            continue
        src = Path(issue["path"])
        dst = Path(issue["suggested_new_path"])
        if not src.exists():
            print(f"  SKIP (not found): {src}")
            continue
        if dst.exists():
            print(f"  SKIP (target exists): {dst}")
            stats["t0xx_rename_errors"] += 1
            continue
        if git_mv(src, dst):
            stats["t0xx_renamed"] += 1
        else:
            stats["t0xx_rename_errors"] += 1

    return stats


def main():
    if not INVENTORY_PATH.exists():
        print(f"Inventory not found: {INVENTORY_PATH}")
        print("Run generate_kanban_naming_inventory.py first.")
        sys.exit(1)

    # Verify clean git state
    result = subprocess.run(
        ["git", "status", "--porcelain"],
        capture_output=True, text=True, check=True
    )
    if result.stdout.strip():
        print("WARNING: Git working tree is not clean. Staged changes exist.")
        print("Continuing anyway...")

    inventory = load_inventory()
    stats = execute_cleanup(inventory)

    print("\n=== Summary ===")
    print(f"Duplicate stories deleted: {stats['dup_stories_deleted']} "
          f"(errors: {stats['dup_story_errors']})")
    print(f"Duplicate tasks deleted:   {stats['dup_tasks_deleted']} "
          f"(errors: {stats['dup_task_errors']})")
    print(f"T0xx files renamed:        {stats['t0xx_renamed']} "
          f"(errors: {stats['t0xx_rename_errors']})")

    total_errors = (
        stats["dup_story_errors"]
        + stats["dup_task_errors"]
        + stats["t0xx_rename_errors"]
    )
    if total_errors > 0:
        print(f"\n{total_errors} errors occurred. Review output above.")
        sys.exit(1)
    print("\nAll operations completed successfully.")


if __name__ == "__main__":
    main()

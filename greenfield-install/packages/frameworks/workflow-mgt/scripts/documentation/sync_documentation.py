#!/usr/bin/env python3
"""
Synchronize Documentation

Synchronizes documentation between different locations (e.g., framework docs and project docs).

Part of: Epic 5, Story 3 - Documentation Automation
Task: E5:S03:T01 - Create automated documentation update scripts

Usage:
    python sync_documentation.py --source PATH --target PATH [--dry-run]
"""

import argparse
import shutil
import sys
from pathlib import Path
from typing import Dict, List, Optional, Tuple


def sync_file(
    source_path: Path,
    target_path: Path,
    dry_run: bool = False
) -> Tuple[bool, List[str]]:
    """
    Sync a single file from source to target.
    
    Returns:
        (success, list_of_changes)
    """
    changes = []
    
    if not source_path.exists():
        return False, [f"Source file not found: {source_path}"]
    
    # Check if target needs update
    if target_path.exists():
        source_content = source_path.read_text(encoding='utf-8')
        target_content = target_path.read_text(encoding='utf-8')
        
        if source_content == target_content:
            return True, []  # Already in sync
    
    changes.append(f"Sync: {source_path.name}")
    
    if not dry_run:
        # Ensure target directory exists
        target_path.parent.mkdir(parents=True, exist_ok=True)
        
        # Copy file
        shutil.copy2(source_path, target_path)
    
    return True, changes


def sync_directory(
    source_dir: Path,
    target_dir: Path,
    dry_run: bool = False,
    exclude_patterns: Optional[List[str]] = None
) -> Tuple[int, int]:
    """
    Sync a directory from source to target.
    
    Returns:
        (files_synced, files_updated)
    """
    if exclude_patterns is None:
        exclude_patterns = []
    
    files_synced = 0
    files_updated = 0
    
    if not source_dir.exists():
        return files_synced, files_updated
    
    # Walk source directory
    for source_path in source_dir.rglob("*"):
        if source_path.is_dir():
            continue
        
        # Check exclude patterns
        should_exclude = False
        for pattern in exclude_patterns:
            if pattern in str(source_path):
                should_exclude = True
                break
        
        if should_exclude:
            continue
        
        # Calculate target path
        relative_path = source_path.relative_to(source_dir)
        target_path = target_dir / relative_path
        
        success, changes = sync_file(source_path, target_path, dry_run)
        
        if success:
            files_synced += 1
            if changes:
                files_updated += 1
                print(f"  {'[DRY RUN] ' if dry_run else ''}✅ {relative_path}")
    
    return files_synced, files_updated


def main():
    parser = argparse.ArgumentParser(description="Synchronize documentation between locations")
    parser.add_argument(
        "--source",
        type=Path,
        required=True,
        help="Source directory or file",
    )
    parser.add_argument(
        "--target",
        type=Path,
        required=True,
        help="Target directory or file",
    )
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="Show what would be synced without making changes",
    )
    parser.add_argument(
        "--exclude",
        nargs="+",
        help="Patterns to exclude from sync",
    )
    args = parser.parse_args()
    
    source = Path(args.source)
    target = Path(args.target)
    
    if not source.exists():
        print(f"❌ Source not found: {source}", file=sys.stderr)
        return 1
    
    print(f"🔍 Synchronizing: {source} → {target}")
    
    if source.is_file():
        success, changes = sync_file(source, target, args.dry_run)
        if success:
            if changes:
                print(f"  {'[DRY RUN] ' if args.dry_run else ''}✅ Synced: {source.name}")
            else:
                print(f"  ✅ Already in sync: {source.name}")
        else:
            print(f"  ❌ Failed: {changes}", file=sys.stderr)
            return 1
    elif source.is_dir():
        files_synced, files_updated = sync_directory(
            source,
            target,
            args.dry_run,
            args.exclude
        )
        
        if args.dry_run:
            print(f"\n🔍 DRY RUN: Would sync {files_synced} file(s), {files_updated} would be updated")
        else:
            print(f"\n✅ Synced {files_synced} file(s), {files_updated} updated")
    else:
        print(f"❌ Source is not a file or directory: {source}", file=sys.stderr)
        return 1
    
    return 0


if __name__ == "__main__":
    sys.exit(main())


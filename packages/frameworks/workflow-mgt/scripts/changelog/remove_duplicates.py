#!/usr/bin/env python3
"""
Remove Duplicate Changelog Entries

Detects and removes duplicate version entries from changelog, keeping the first occurrence.

Usage:
    python remove_duplicates.py [--dry-run] [--config <config_file>]
"""

import argparse
import sys
from pathlib import Path
from typing import Dict, List, Set, Tuple

# Add scripts directory to path
scripts_path = Path(__file__).parent.parent
if str(scripts_path) not in sys.path:
    sys.path.insert(0, str(scripts_path))

from changelog.changelog_utils import (
    load_rw_config,
    get_main_changelog_path,
    extract_changelog_entries
)


def remove_duplicates(content: str, keep_first: bool = True) -> Tuple[str, List[str], int]:
    """
    Remove duplicate version entries from changelog content.
    
    Args:
        content: Changelog content
        keep_first: If True, keep first occurrence; if False, keep last occurrence
    
    Returns:
        (new_content, removed_versions, removed_count)
    """
    entries = extract_changelog_entries(content)
    lines = content.split('\n')
    
    # Track seen versions
    seen_versions: Set[str] = set()
    removed_versions: List[str] = []
    removed_count = 0
    
    # Build list of line ranges to remove
    lines_to_remove: Set[int] = set()
    
    # If keeping first, iterate forward; if keeping last, iterate backward
    entry_iter = entries if keep_first else reversed(entries)
    
    for entry in entry_iter:
        version_str = entry.version_str
        
        if version_str in seen_versions:
            # This is a duplicate - mark for removal
            removed_versions.append(version_str)
            removed_count += 1
            # Mark all lines in this entry for removal
            for line_num in range(entry.start_line, entry.end_line + 1):
                lines_to_remove.add(line_num)
        else:
            seen_versions.add(version_str)
    
    # Rebuild content without removed lines
    new_lines = [line for i, line in enumerate(lines) if i not in lines_to_remove]
    new_content = '\n'.join(new_lines)
    
    return new_content, removed_versions, removed_count


def main():
    """Main function."""
    parser = argparse.ArgumentParser(description="Remove duplicate changelog entries")
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="Show what would be removed without modifying file"
    )
    parser.add_argument(
        "--config",
        type=Path,
        help="Path to rw-config.yaml (optional)"
    )
    args = parser.parse_args()
    
    try:
        project_root = Path.cwd()
        config = None
        if args.config:
            import yaml
            with open(args.config, 'r') as f:
                config = yaml.safe_load(f)
        else:
            config = load_rw_config(project_root)
        
        changelog_path = get_main_changelog_path(config)
        
        if not changelog_path.exists():
            print(f"❌ Changelog file not found: {changelog_path}", file=sys.stderr)
            return 1
        
        content = changelog_path.read_text(encoding='utf-8')
        new_content, removed_versions, removed_count = remove_duplicates(content, keep_first=True)
        
        if removed_count == 0:
            print("✅ No duplicates found")
            return 0
        
        print(f"🔍 Found {removed_count} duplicate entry/entries:")
        for version in removed_versions:
            print(f"  - {version}")
        
        if args.dry_run:
            print("\n🔍 DRY RUN: File would be modified (use without --dry-run to apply)")
            return 0
        
        # Write modified content
        changelog_path.write_text(new_content, encoding='utf-8')
        print(f"✅ Removed {removed_count} duplicate entry/entries")
        print(f"✅ Updated {changelog_path}")
        
        return 0
    
    except Exception as e:
        print(f"❌ Error: {e}", file=sys.stderr)
        import traceback
        traceback.print_exc()
        return 1


if __name__ == "__main__":
    sys.exit(main())


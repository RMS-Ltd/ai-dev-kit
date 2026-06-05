#!/usr/bin/env python3
"""
Archive Changelog Entries

Moves changelog entries from main changelog to archive file, preserving content, ordering, and links.

Usage:
    python archive_entries.py [--dry-run] [--config <config_file>]
"""

import argparse
import sys
from pathlib import Path
from typing import Dict, List, Tuple

# Add scripts directory to path
scripts_path = Path(__file__).parent.parent
if str(scripts_path) not in sys.path:
    sys.path.insert(0, str(scripts_path))

from changelog.changelog_utils import (
    load_rw_config,
    get_main_changelog_path,
    get_archive_changelog_path,
    extract_changelog_entries,
    compare_versions
)


def create_archive_header() -> str:
    """Create archive file header."""
    return """# Changelog Archive

This file contains historical changelog entries archived from `CHANGELOG.md`.

For recent changes, see [CHANGELOG.md](../../CHANGELOG.md).

---
"""


def archive_entries(
    entries_to_archive: List,
    main_content: str,
    archive_content: str,
    preserve_ordering: bool = True
) -> Tuple[str, str]:
    """
    Archive entries from main changelog to archive file.
    
    Args:
        entries_to_archive: List of ChangelogEntry objects to archive
        main_content: Current main changelog content
        archive_content: Current archive file content (may be empty)
        preserve_ordering: Maintain newest first ordering in archive
    
    Returns:
        (new_main_content, new_archive_content)
    """
    main_lines = main_content.split('\n')
    main_entries = extract_changelog_entries(main_content)
    
    # Get version strings to archive
    versions_to_archive = {entry.version_str for entry in entries_to_archive}
    
    # Build new main content (remove archived entries)
    lines_to_remove = set()
    for entry in main_entries:
        if entry.version_str in versions_to_archive:
            # Mark all lines in this entry for removal
            for line_num in range(entry.start_line, entry.end_line + 1):
                lines_to_remove.add(line_num)
    
    new_main_lines = [line for i, line in enumerate(main_lines) if i not in lines_to_remove]
    new_main_content = '\n'.join(new_main_lines)
    
    # Build new archive content (add archived entries)
    # If archive is empty, add header
    if not archive_content.strip():
        archive_lines = [create_archive_header().strip()]
    else:
        archive_lines = archive_content.split('\n')
    
    # Extract existing archive entries to check for duplicates
    existing_archive_entries = extract_changelog_entries(archive_content)
    existing_versions = {entry.version_str for entry in existing_archive_entries}
    
    # Add archived entries (newest first to maintain ordering)
    # Sort entries to archive by version number (canonical ordering)
    # After Step 3.5, main_entries is already sorted, so we sort by version components
    sorted_entries_to_archive = sorted(
        entries_to_archive,
        key=lambda e: e.version_components,
        reverse=True  # Newest first for archive (Keep a Changelog format)
    )
    
    for entry in sorted_entries_to_archive:
        if entry.version_str not in existing_versions:
            # Add entry to archive (insert after header, before existing entries)
            # Format: entry text + separator
            entry_text = entry.full_text.rstrip()
            if not entry_text.endswith('---'):
                entry_text += '\n---'
            archive_lines.insert(1, entry_text)  # Insert after header
            existing_versions.add(entry.version_str)
    
    new_archive_content = '\n'.join(archive_lines)
    
    return new_main_content, new_archive_content


def main():
    """Main function."""
    parser = argparse.ArgumentParser(description="Archive changelog entries")
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="Show what would be archived without modifying files"
    )
    parser.add_argument(
        "--config",
        type=Path,
        help="Path to rw-config.yaml (optional)"
    )
    parser.add_argument(
        "--entries",
        nargs='+',
        help="Version strings of entries to archive (if not provided, uses identify_archival_entries)"
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
        
        main_changelog_path = get_main_changelog_path(config)
        archive_changelog_path = get_archive_changelog_path(config)
        
        if not main_changelog_path.exists():
            print(f"❌ Main changelog file not found: {main_changelog_path}", file=sys.stderr)
            return 1
        
        # Ensure archive directory exists
        archive_changelog_path.parent.mkdir(parents=True, exist_ok=True)
        
        main_content = main_changelog_path.read_text(encoding='utf-8')
        archive_content = archive_changelog_path.read_text(encoding='utf-8') if archive_changelog_path.exists() else ""
        
        main_entries = extract_changelog_entries(main_content)
        
        # Determine entries to archive
        if args.entries:
            # Use provided version strings
            versions_to_archive = set(args.entries)
            entries_to_archive = [e for e in main_entries if e.version_str in versions_to_archive]
        else:
            # Use identify_archival_entries logic
            from changelog.identify_archival_entries import identify_archival_entries
            policy = get_archival_policy(config)
            total_lines = len(main_content.split('\n'))
            entries_to_archive, metadata = identify_archival_entries(main_entries, policy, total_lines)
        
        if not entries_to_archive:
            print("✅ No entries to archive")
            return 0
        
        print(f"📦 Archiving {len(entries_to_archive)} entries:")
        for entry in entries_to_archive[:5]:
            print(f"  - {entry.version_str} ({entry.date_str})")
        if len(entries_to_archive) > 5:
            print(f"  ... and {len(entries_to_archive) - 5} more")
        
        if args.dry_run:
            print("\n🔍 DRY RUN: Files would be modified (use without --dry-run to apply)")
            return 0
        
        # Perform archival
        new_main_content, new_archive_content = archive_entries(
            entries_to_archive,
            main_content,
            archive_content
        )
        
        # Write files
        main_changelog_path.write_text(new_main_content, encoding='utf-8')
        archive_changelog_path.write_text(new_archive_content, encoding='utf-8')
        
        print(f"✅ Archived {len(entries_to_archive)} entries")
        print(f"✅ Updated {main_changelog_path}")
        print(f"✅ Updated {archive_changelog_path}")
        
        return 0
    
    except Exception as e:
        print(f"❌ Error: {e}", file=sys.stderr)
        import traceback
        traceback.print_exc()
        return 1


if __name__ == "__main__":
    sys.exit(main())


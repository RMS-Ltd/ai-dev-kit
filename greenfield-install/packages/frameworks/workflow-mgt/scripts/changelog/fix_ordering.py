#!/usr/bin/env python3
"""
Fix Changelog Ordering

Sorts changelog entries by canonical version number (RC.EPIC.STORY.TASK+BUILD).
Preserves all entry content exactly, only reorders entries.

Usage:
    python fix_ordering.py [--dry-run] [--config <config_file>]
"""

import argparse
import sys
from pathlib import Path
from typing import Optional

# Add scripts directory to path
scripts_path = Path(__file__).parent.parent
if str(scripts_path) not in sys.path:
    sys.path.insert(0, str(scripts_path))

from changelog.changelog_utils import (
    load_rw_config,
    get_main_changelog_path,
    extract_changelog_entries,
    compare_versions
)
from validation.validate_changelog_format import detect_changelog_format


def extract_header(content: str, first_entry_start: int) -> str:
    """
    Extract changelog header (everything before first entry).
    
    Args:
        content: Full changelog content
        first_entry_start: Line number where first entry starts
    
    Returns:
        Header text (including trailing newlines)
    """
    lines = content.split('\n')
    if first_entry_start == 0:
        return ""
    header_lines = lines[:first_entry_start]
    return '\n'.join(header_lines) + ('\n' if header_lines else '')


def fix_changelog_ordering(content: str, format_type: str = None) -> str:
    """
    Fix changelog ordering by sorting entries by canonical version number.
    
    Args:
        content: Changelog content
        format_type: 'canonical' or 'keep_a_changelog' (auto-detected if None)
    
    Returns:
        Reordered changelog content
    """
    if not content.strip():
        return content
    
    # Auto-detect format if not specified
    if format_type is None:
        format_type = detect_changelog_format(content)
    
    # Extract all entries
    entries = extract_changelog_entries(content)
    
    if len(entries) == 0:
        # No entries to sort
        return content
    
    if len(entries) == 1:
        # Single entry, no sorting needed
        return content
    
    # Find first entry start line to extract header
    first_entry = entries[0]
    header = extract_header(content, first_entry.start_line)
    
    # Sort entries by version components (canonical ordering: lowest first)
    # For Keep a Changelog format, we still sort by version number, but will reverse later
    sorted_entries = sorted(
        entries,
        key=lambda e: e.version_components
    )
    
    # For Keep a Changelog format, reverse to newest first
    if format_type == 'keep_a_changelog':
        sorted_entries = list(reversed(sorted_entries))
    
    # Reconstruct changelog with sorted entries
    # Preserve exact entry content, only reorder
    sorted_lines = []
    
    # Add header
    if header:
        sorted_lines.append(header.rstrip())
    
    # Add sorted entries
    for i, entry in enumerate(sorted_entries):
        # Add entry text (full_text includes header line)
        entry_text = entry.full_text.rstrip()
        sorted_lines.append(entry_text)
        
        # Add separator (---) between entries, but not after last entry
        if i < len(sorted_entries) - 1:
            sorted_lines.append('---')
    
    return '\n'.join(sorted_lines) + '\n'


def main():
    """Main function."""
    parser = argparse.ArgumentParser(description="Fix changelog ordering")
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="Show what would be fixed without modifying files"
    )
    parser.add_argument(
        "--config",
        type=Path,
        help="Path to rw-config.yaml (optional)"
    )
    parser.add_argument(
        "--format",
        choices=['canonical', 'keep_a_changelog', 'auto'],
        default='auto',
        help="Changelog format: 'canonical' (lowest first), 'keep_a_changelog' (newest first), or 'auto' (detect, default)"
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
        
        if not main_changelog_path.exists():
            print(f"❌ Main changelog file not found: {main_changelog_path}", file=sys.stderr)
            return 1
        
        main_content = main_changelog_path.read_text(encoding='utf-8')
        
        # Determine format type
        format_type = None if args.format == 'auto' else args.format
        
        # Fix ordering
        fixed_content = fix_changelog_ordering(main_content, format_type)
        
        if fixed_content == main_content:
            print("✅ Changelog already correctly ordered")
            return 0
        
        if args.dry_run:
            print("🔍 DRY RUN: Changelog ordering would be fixed")
            print(f"  Original entries: {len(extract_changelog_entries(main_content))}")
            print(f"  Fixed entries: {len(extract_changelog_entries(fixed_content))}")
            return 0
        
        # Write fixed content
        main_changelog_path.write_text(fixed_content, encoding='utf-8')
        print(f"✅ Fixed changelog ordering")
        print(f"✅ Updated {main_changelog_path}")
        
        return 0
    
    except Exception as e:
        print(f"❌ Error: {e}", file=sys.stderr)
        import traceback
        traceback.print_exc()
        return 1


if __name__ == "__main__":
    sys.exit(main())


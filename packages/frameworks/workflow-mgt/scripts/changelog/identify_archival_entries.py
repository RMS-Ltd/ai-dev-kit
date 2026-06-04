#!/usr/bin/env python3
"""
Identify Entries for Archival

Identifies changelog entries eligible for archival based on archival policy criteria.

Usage:
    python identify_archival_entries.py [--dry-run] [--config <config_file>]
"""

import argparse
import sys
from pathlib import Path
from typing import Dict, List, Tuple
from datetime import datetime, timedelta

# Add scripts directory to path
scripts_path = Path(__file__).parent.parent
if str(scripts_path) not in sys.path:
    sys.path.insert(0, str(scripts_path))

from changelog.changelog_utils import (
    load_rw_config,
    get_main_changelog_path,
    get_archival_policy,
    extract_changelog_entries,
    calculate_entry_age_months,
    compare_versions
)


def identify_archival_entries(
    entries: List,
    policy: Dict,
    total_lines: int,
    preserve_minimum: bool = True
) -> Tuple[List, Dict]:
    """
    Identify entries eligible for archival based on policy criteria.
    
    Args:
        entries: List of ChangelogEntry objects (ordered newest first)
        policy: Archival policy configuration
        total_lines: Total line count of changelog
        preserve_minimum: If True, always preserve minimum_retention_entries
    
    Returns:
        (entries_to_archive, metadata)
    """
    entries_to_archive = []
    metadata = {
        'criteria_met': [],
        'entries_by_criterion': {
            'size_based': [],
            'time_based': [],
            'version_count_based': []
        }
    }

    # Mode override: latest_only
    #
    # When policy['mode'] == 'latest_only', we keep only the newest concrete
    # release entry in CHANGELOG.md (entries[0]) and archive all older
    # releases. The "Unreleased" section is not part of `entries` and is
    # therefore always preserved.
    #
    # This mode is intended for projects that maintain detailed per-release
    # changelog files and want the main changelog to function purely as a
    # "latest release + Unreleased" landing page rather than a long history.
    mode = policy.get('mode')
    if mode == 'latest_only' and entries:
        if len(entries) > 1:
            # Archive everything except the newest entry
            entries_to_archive = list(entries[1:])
            metadata['criteria_met'].append('latest_only')
            metadata['entries_by_criterion']['version_count_based'] = [
                e.version_str for e in entries_to_archive
            ]
        return entries_to_archive, metadata
    
    # Minimum retention
    minimum_retention = policy.get('minimum_retention_entries', 50)
    max_index_to_keep = len(entries) - minimum_retention if preserve_minimum else len(entries)
    
    # Criterion 1: Size-based (if changelog exceeds threshold)
    size_threshold = policy.get('size_threshold_lines', 1000)
    target_size = policy.get('target_size_lines', 750)
    
    if total_lines > size_threshold:
        metadata['criteria_met'].append('size_based')
        # Calculate how many lines to remove to reach target
        lines_to_remove = total_lines - target_size
        # Approximate: archive entries from oldest (end of list) until we've removed enough lines
        # This is approximate - actual archival will be more precise
        
        # Criterion 2: Time-based (entries older than threshold)
        time_threshold_months = policy.get('time_threshold_months', 2)
        cutoff_date = datetime.now() - timedelta(days=time_threshold_months * 30)
        
        for i in range(len(entries) - 1, max_index_to_keep, -1):  # Iterate from oldest (end) to newest
            entry = entries[i]
            age_months = calculate_entry_age_months(entry)
            
            if age_months is not None and age_months > time_threshold_months:
                if entry not in entries_to_archive:
                    entries_to_archive.append(entry)
                    metadata['entries_by_criterion']['time_based'].append(entry.version_str)
        
        if metadata['entries_by_criterion']['time_based']:
            metadata['criteria_met'].append('time_based')
    
    # Criterion 3: Version count-based (if more than threshold entries)
    version_count_threshold = policy.get('version_count_threshold', 100)
    
    if len(entries) > version_count_threshold:
        metadata['criteria_met'].append('version_count_based')
        # Keep last N entries, archive older ones
        keep_count = version_count_threshold
        
        for i in range(keep_count, len(entries)):
            entry = entries[i]
            if entry not in entries_to_archive and i >= max_index_to_keep:
                entries_to_archive.append(entry)
                metadata['entries_by_criterion']['version_count_based'].append(entry.version_str)
    
    # Remove duplicates (entry might match multiple criteria)
    # Sort by position in original list (newest first, so archive from end)
    entries_to_archive = sorted(set(entries_to_archive), key=lambda e: entries.index(e), reverse=True)
    
    return entries_to_archive, metadata


def main():
    """Main function."""
    parser = argparse.ArgumentParser(description="Identify entries for archival")
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
        
        policy = get_archival_policy(config)
        changelog_path = get_main_changelog_path(config)
        
        if not changelog_path.exists():
            print(f"❌ Changelog file not found: {changelog_path}", file=sys.stderr)
            return 1
        
        content = changelog_path.read_text(encoding='utf-8')
        total_lines = len(content.split('\n'))
        entries = extract_changelog_entries(content)
        
        entries_to_archive, metadata = identify_archival_entries(entries, policy, total_lines)
        
        print(f"📊 Archival Analysis")
        print(f"  Total entries: {len(entries)}")
        print(f"  Total lines: {total_lines}")
        print(f"  Criteria met: {', '.join(metadata['criteria_met']) if metadata['criteria_met'] else 'none'}")
        print(f"  Entries to archive: {len(entries_to_archive)}")
        
        if entries_to_archive:
            print(f"\n📦 Entries to archive:")
            for entry in entries_to_archive[:10]:  # Show first 10
                age = calculate_entry_age_months(entry)
                age_str = f"{age:.1f} months" if age else "unknown age"
                print(f"  - {entry.version_str} ({entry.date_str}, {age_str})")
            if len(entries_to_archive) > 10:
                print(f"  ... and {len(entries_to_archive) - 10} more")
        else:
            print("\n✅ No entries need archiving at this time")
        
        return 0
    
    except Exception as e:
        print(f"❌ Error: {e}", file=sys.stderr)
        import traceback
        traceback.print_exc()
        return 1


if __name__ == "__main__":
    sys.exit(main())


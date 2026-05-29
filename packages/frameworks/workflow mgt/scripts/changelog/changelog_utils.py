#!/usr/bin/env python3
"""
Changelog Utility Functions

Common utilities for CMW scripts: version parsing, entry extraction, date parsing, etc.
"""

import re
from datetime import datetime, timedelta
from pathlib import Path
from typing import Tuple, List, Optional, Dict, NamedTuple
import yaml

# Version patterns
OLD_VERSION_PATTERN = re.compile(r"## \[(\d+)\.(\d+)\.(\d+)\.(\d+)\] - (\d{4}-\d{2}-\d{2})")
NEW_VERSION_PATTERN = re.compile(r"## \[(\d+)\.(\d+)\.(\d+)\.(\d+)\+(\d+)\] - (\d{2}-\d{2}-\d{2})")


class ChangelogEntry(NamedTuple):
    """Represents a changelog entry."""
    version_str: str
    version_components: Tuple[int, int, int, int, int]  # (RC, EPIC, STORY, TASK, BUILD)
    date_str: str
    date_obj: Optional[datetime]
    content: str
    start_line: int
    end_line: int
    full_text: str  # Full entry text including header


def parse_version(version_str: str) -> Tuple[int, int, int, int, int]:
    """
    Parse version string (RC.EPIC.STORY.TASK+BUILD) into components.
    
    Returns:
        (RC, EPIC, STORY, TASK, BUILD)
    """
    if '+' in version_str:
        # New format: RC.EPIC.STORY.TASK+BUILD
        parts = version_str.split('+')
        build = int(parts[1])
        main_parts = parts[0].split('.')
        if len(main_parts) == 4:
            return (int(main_parts[0]), int(main_parts[1]), int(main_parts[2]), int(main_parts[3]), build)
    else:
        # Old format: RC.EPIC.STORY.PATCH (treat PATCH as TASK, BUILD=0)
        parts = version_str.split('.')
        if len(parts) == 4:
            return (int(parts[0]), int(parts[1]), int(parts[2]), int(parts[3]), 0)
    
    raise ValueError(f"Invalid version format: {version_str}")


def parse_date(date_str: str, version_str: str) -> Optional[datetime]:
    """
    Parse date string into datetime object.
    
    Supports both formats:
    - DD-MM-YY (new format)
    - YYYY-MM-DD (old format)
    """
    try:
        # Try new format: DD-MM-YY
        if re.match(r"\d{2}-\d{2}-\d{2}", date_str):
            # Assume 20XX for 2-digit year
            parts = date_str.split('-')
            day, month, year_2dig = int(parts[0]), int(parts[1]), int(parts[2])
            year = 2000 + year_2dig if year_2dig < 50 else 1900 + year_2dig
            return datetime(year, month, day)
        
        # Try old format: YYYY-MM-DD
        if re.match(r"\d{4}-\d{2}-\d{2}", date_str):
            return datetime.strptime(date_str, "%Y-%m-%d")
    except (ValueError, IndexError):
        pass
    
    return None


def extract_changelog_entries(content: str) -> List[ChangelogEntry]:
    """
    Extract all changelog entries from content.
    
    Returns:
        List of ChangelogEntry objects, ordered as they appear in the file (newest first for Keep a Changelog format)
    """
    entries = []
    lines = content.split('\n')
    
    # Find all version headers
    version_header_pattern = re.compile(r"^## \[([^\]]+)\] - (.+)$")
    
    current_entry_start = None
    current_version_str = None
    current_date_str = None
    current_lines = []
    
    for i, line in enumerate(lines):
        # Check if this is a version header
        match = version_header_pattern.match(line)
        if match:
            # Save previous entry if exists
            if current_entry_start is not None and current_version_str:
                entry_text = '\n'.join(current_lines)
                try:
                    version_components = parse_version(current_version_str)
                    date_obj = parse_date(current_date_str, current_version_str)
                    entries.append(ChangelogEntry(
                        version_str=current_version_str,
                        version_components=version_components,
                        date_str=current_date_str,
                        date_obj=date_obj,
                        content=entry_text,
                        start_line=current_entry_start,
                        end_line=i - 1,
                        full_text=entry_text
                    ))
                except ValueError:
                    pass  # Skip invalid versions
            
            # Start new entry
            current_version_str = match.group(1)
            current_date_str = match.group(2)
            current_entry_start = i
            current_lines = [line]
        elif current_entry_start is not None:
            # Add line to current entry
            current_lines.append(line)
            # Check if we've hit the separator (next entry starts)
            if line.strip() == '---' and len(current_lines) > 1:
                # This is the separator, entry ends here (inclusive)
                pass
    
    # Save last entry
    if current_entry_start is not None and current_version_str:
        entry_text = '\n'.join(current_lines)
        try:
            version_components = parse_version(current_version_str)
            date_obj = parse_date(current_date_str, current_version_str)
            entries.append(ChangelogEntry(
                version_str=current_version_str,
                version_components=version_components,
                date_str=current_date_str,
                date_obj=date_obj,
                content=entry_text,
                start_line=current_entry_start,
                end_line=len(lines) - 1,
                full_text=entry_text
            ))
        except ValueError:
            pass
    
    return entries


def compare_versions(v1: Tuple[int, int, int, int, int], v2: Tuple[int, int, int, int, int]) -> int:
    """
    Compare two versions using canonical ordering.
    
    Returns:
        -1 if v1 < v2
        0 if v1 == v2
        1 if v1 > v2
    
    Ordering: RC → EPIC → STORY → TASK → BUILD
    """
    rc1, epic1, story1, task1, build1 = v1
    rc2, epic2, story2, task2, build2 = v2
    
    for comp1, comp2 in [(rc1, rc2), (epic1, epic2), (story1, story2), (task1, task2), (build1, build2)]:
        if comp1 < comp2:
            return -1
        if comp1 > comp2:
            return 1
    
    return 0


def load_rw_config(project_root: Path = None) -> Optional[Dict]:
    """Load rw-config.yaml if it exists."""
    if project_root is None:
        project_root = Path.cwd()
    
    config_path = project_root / "rw-config.yaml"
    if not config_path.exists():
        return None
    
    try:
        with open(config_path, 'r', encoding='utf-8') as f:
            return yaml.safe_load(f)
    except Exception:
        return None


def get_main_changelog_path(config: Optional[Dict] = None) -> Path:
    """Get path to main changelog file."""
    if config and 'main_changelog' in config:
        return Path(config['main_changelog'])
    return Path("CHANGELOG.md")


def get_archive_changelog_path(config: Optional[Dict] = None) -> Path:
    """Get path to archive changelog file."""
    if config and 'changelog_archival' in config and 'archive_path' in config['changelog_archival']:
        return Path(config['changelog_archival']['archive_path'])
    
    # Default path
    return Path("docs/changelog-and-release-notes/changelog-archive/CHANGELOG_ARCHIVE.md")


def get_archival_policy(config: Optional[Dict] = None) -> Dict:
    """Get archival policy configuration."""
    defaults = {
        'size_threshold_lines': 1000,
        'target_size_lines': 750,
        'time_threshold_months': 2,
        'version_count_threshold': 100,
        'minimum_retention_entries': 50
    }
    
    if config and 'changelog_archival' in config:
        defaults.update(config['changelog_archival'])
    
    return defaults


def calculate_entry_age_months(entry: ChangelogEntry) -> Optional[float]:
    """
    Calculate age of entry in months from current date.
    
    Returns:
        Age in months, or None if date cannot be parsed
    """
    if entry.date_obj is None:
        return None
    
    now = datetime.now()
    delta = now - entry.date_obj
    return delta.days / 30.0  # Approximate months


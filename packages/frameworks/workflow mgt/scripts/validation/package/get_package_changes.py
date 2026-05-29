#!/usr/bin/env python3
"""
Get package changes for agent analysis.

This script analyzes git diff to identify what changed in a package.
It is used as a TOOL by the agent to gather data for analysis, not to determine bump type.

Usage:
    python get_package_changes.py <package_path>
    
Example:
    python get_package_changes.py packages/frameworks/workflow\ mgt
"""

import sys
import subprocess
from pathlib import Path
from typing import Dict, List, Optional


def get_git_diff(package_path: Path) -> Optional[str]:
    """Get git diff for package directory."""
    try:
        result = subprocess.run(
            ['git', 'diff', '--cached', str(package_path)],
            capture_output=True,
            text=True,
            cwd=package_path.parent.parent
        )
        
        # If no staged changes, check unstaged
        if not result.stdout.strip():
            result = subprocess.run(
                ['git', 'diff', str(package_path)],
                capture_output=True,
                text=True,
                cwd=package_path.parent.parent
            )
        
        return result.stdout if result.stdout.strip() else None
    except Exception as e:
        print(f"Warning: Could not get git diff: {e}", file=sys.stderr)
        return None


def analyze_changes(package_path: Path) -> Dict[str, any]:
    """
    Analyze changes in package.
    
    Returns:
        Dictionary with change analysis:
        {
            'added': [list of added files],
            'removed': [list of removed files],
            'modified': [list of modified files],
            'change_types': [list of change types],
            'impact': 'impact_assessment'
        }
    """
    git_diff = get_git_diff(package_path)
    
    if not git_diff:
        return {
            'added': [],
            'removed': [],
            'modified': [],
            'change_types': [],
            'impact': 'no_changes'
        }
    
    added = []
    removed = []
    modified = []
    
    # Parse git diff output
    lines = git_diff.split('\n')
    for line in lines:
        if line.startswith('+++') and '/dev/null' not in line:
            # New file
            file_path = line.replace('+++ b/', '').strip()
            if file_path.startswith(str(package_path.name)):
                added.append(file_path)
        elif line.startswith('---') and '/dev/null' in line:
            # Deleted file
            file_path = line.replace('--- a/', '').replace('/dev/null', '').strip()
            if file_path.startswith(str(package_path.name)):
                removed.append(file_path)
        elif line.startswith('---') and '/dev/null' not in line:
            # Modified file
            file_path = line.replace('--- a/', '').strip()
            if file_path.startswith(str(package_path.name)) and file_path not in removed:
                modified.append(file_path)
    
    # Classify change types
    change_types = []
    if added:
        change_types.append('files_added')
    if removed:
        change_types.append('files_removed')
    if modified:
        change_types.append('files_modified')
    
    # Assess impact (basic assessment - agent will refine)
    impact = 'unknown'
    if removed:
        impact = 'potentially_breaking'
    elif added:
        impact = 'new_feature'
    elif modified:
        impact = 'modification'
    
    return {
        'added': added,
        'removed': removed,
        'modified': modified,
        'change_types': change_types,
        'impact': impact
    }


def main():
    """Main function."""
    if len(sys.argv) != 2:
        print("Usage: get_package_changes.py <package_path>", file=sys.stderr)
        sys.exit(1)
    
    package_path = Path(sys.argv[1])
    
    if not package_path.exists():
        print(f"❌ Package path does not exist: {package_path}", file=sys.stderr)
        sys.exit(1)
    
    changes = analyze_changes(package_path)
    
    # Output as JSON-like format for agent parsing
    print(f"Added files: {changes['added']}")
    print(f"Removed files: {changes['removed']}")
    print(f"Modified files: {changes['modified']}")
    print(f"Change types: {changes['change_types']}")
    print(f"Impact assessment: {changes['impact']}")
    
    sys.exit(0)


if __name__ == "__main__":
    main()


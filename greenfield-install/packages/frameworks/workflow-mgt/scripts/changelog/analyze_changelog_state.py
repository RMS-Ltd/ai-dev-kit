#!/usr/bin/env python3
"""
Analyze Changelog State

Analyzes current changelog state: size, entry count, version list, entry ages, format compliance, ordering status, duplicate detection.

Usage:
    python analyze_changelog_state.py [--config <config_file>]
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
    extract_changelog_entries,
    compare_versions,
    calculate_entry_age_months
)
from validation.validate_changelog_format import detect_changelog_format


def analyze_changelog_state(config: Dict = None) -> Dict:
    """
    Analyze changelog state and return metrics.
    
    Returns:
        Dictionary with analysis results:
        {
            'line_count': int,
            'entry_count': int,
            'version_list': List[str],
            'entry_ages': List[Dict],
            'format_compliance': Dict,
            'ordering_status': Dict,
            'duplicate_detection': Dict
        }
    """
    project_root = Path.cwd()
    rw_config = config or load_rw_config(project_root)
    changelog_path = get_main_changelog_path(rw_config)
    
    if not changelog_path.exists():
        raise FileNotFoundError(f"Changelog file not found: {changelog_path}")
    
    content = changelog_path.read_text(encoding='utf-8')
    lines = content.split('\n')
    
    # Extract entries
    entries = extract_changelog_entries(content)
    
    # Calculate metrics
    line_count = len(lines)
    entry_count = len(entries)
    version_list = [entry.version_str for entry in entries]
    
    # Entry ages
    entry_ages = []
    for entry in entries:
        age_months = calculate_entry_age_months(entry)
        entry_ages.append({
            'version': entry.version_str,
            'date': entry.date_str,
            'age_months': age_months
        })
    
    # Format compliance
    format_type = detect_changelog_format(content)
    format_compliance = {
        'format_type': format_type,
        'is_keep_a_changelog': format_type == 'keep_a_changelog'
    }
    
    # Ordering status
    ordering_valid = True
    ordering_violations = []
    for i in range(len(entries) - 1):
        current_entry = entries[i]
        next_entry = entries[i + 1]
        
        comparison = compare_versions(current_entry.version_components, next_entry.version_components)
        
        if format_type == 'keep_a_changelog':
            # Should be newest first (current >= next)
            if comparison < 0:
                ordering_valid = False
                ordering_violations.append({
                    'version1': current_entry.version_str,
                    'version2': next_entry.version_str,
                    'message': f"{current_entry.version_str} appears before {next_entry.version_str} but is older"
                })
    
    ordering_status = {
        'valid': ordering_valid,
        'format_type': format_type,
        'violations': ordering_violations
    }
    
    # Duplicate detection
    version_counts = {}
    duplicates = []
    for entry in entries:
        version_str = entry.version_str
        if version_str in version_counts:
            version_counts[version_str] += 1
            duplicates.append(version_str)
        else:
            version_counts[version_str] = 1
    
    duplicate_detection = {
        'has_duplicates': len(duplicates) > 0,
        'duplicate_versions': list(set(duplicates)),
        'version_counts': version_counts
    }
    
    return {
        'line_count': line_count,
        'entry_count': entry_count,
        'version_list': version_list,
        'entry_ages': entry_ages,
        'format_compliance': format_compliance,
        'ordering_status': ordering_status,
        'duplicate_detection': duplicate_detection,
        'entries': entries  # Include entries for further processing
    }


def main():
    """Main function."""
    parser = argparse.ArgumentParser(description="Analyze changelog state")
    parser.add_argument(
        "--config",
        type=Path,
        help="Path to rw-config.yaml (optional, auto-detected if not provided)"
    )
    parser.add_argument(
        "--json",
        action="store_true",
        help="Output results as JSON"
    )
    args = parser.parse_args()
    
    try:
        config = None
        if args.config:
            import yaml
            with open(args.config, 'r') as f:
                config = yaml.safe_load(f)
        
        results = analyze_changelog_state(config)
        
        if args.json:
            import json
            # Convert entries to serializable format
            serializable_results = results.copy()
            serializable_results['entries'] = [
                {
                    'version_str': e.version_str,
                    'date_str': e.date_str,
                    'start_line': e.start_line,
                    'end_line': e.end_line
                }
                for e in serializable_results['entries']
            ]
            print(json.dumps(serializable_results, indent=2))
        else:
            print(f"📊 Changelog Analysis Results")
            print(f"  Line count: {results['line_count']}")
            print(f"  Entry count: {results['entry_count']}")
            print(f"  Format: {results['format_compliance']['format_type']}")
            print(f"  Ordering valid: {results['ordering_status']['valid']}")
            print(f"  Has duplicates: {results['duplicate_detection']['has_duplicates']}")
            if results['duplicate_detection']['has_duplicates']:
                print(f"  Duplicate versions: {', '.join(results['duplicate_detection']['duplicate_versions'])}")
        
        return 0
    
    except Exception as e:
        print(f"❌ Error: {e}", file=sys.stderr)
        return 1


if __name__ == "__main__":
    sys.exit(main())


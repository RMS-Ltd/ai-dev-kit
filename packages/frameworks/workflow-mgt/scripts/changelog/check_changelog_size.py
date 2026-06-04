#!/usr/bin/env python3
"""
Check Changelog Size

Checks if changelog exceeds size threshold and returns status for RW Step 9.5 integration.

Usage:
    python check_changelog_size.py [--config <config_file>]
    
Returns:
    Exit code 0: Changelog size OK (below threshold)
    Exit code 1: Changelog size exceeds threshold (CMW should be triggered)
"""

import argparse
import sys
from pathlib import Path

# Add scripts directory to path
scripts_path = Path(__file__).parent.parent
if str(scripts_path) not in sys.path:
    sys.path.insert(0, str(scripts_path))

from changelog.changelog_utils import (
    load_rw_config,
    get_main_changelog_path,
    get_archival_policy
)


def check_changelog_size(config: dict = None) -> tuple[bool, dict]:
    """
    Check if changelog size exceeds threshold.
    
    Returns:
        (exceeds_threshold, metrics)
        - exceeds_threshold: True if changelog exceeds size threshold
        - metrics: Dictionary with line_count, entry_count, threshold, etc.
    """
    project_root = Path.cwd()
    rw_config = config or load_rw_config(project_root)
    changelog_path = get_main_changelog_path(rw_config)
    
    if not changelog_path.exists():
        return False, {'error': 'Changelog file not found', 'path': str(changelog_path)}
    
    content = changelog_path.read_text(encoding='utf-8')
    lines = content.split('\n')
    line_count = len(lines)
    
    # Get archival policy
    policy = get_archival_policy(rw_config)
    size_threshold = policy.get('size_threshold_lines', 1000)
    
    # Count entries (approximate - count version headers)
    import re
    version_header_pattern = re.compile(r"^## \[")
    entry_count = len([line for line in lines if version_header_pattern.match(line)])
    
    exceeds_threshold = line_count > size_threshold
    
    metrics = {
        'line_count': line_count,
        'entry_count': entry_count,
        'size_threshold': size_threshold,
        'exceeds_threshold': exceeds_threshold,
        'changelog_path': str(changelog_path)
    }
    
    return exceeds_threshold, metrics


def main():
    """Main function."""
    parser = argparse.ArgumentParser(description="Check changelog size for CMW trigger")
    parser.add_argument(
        "--config",
        type=Path,
        help="Path to rw-config.yaml (optional)"
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
        
        exceeds_threshold, metrics = check_changelog_size(config)
        
        if args.json:
            import json
            print(json.dumps(metrics, indent=2))
        else:
            print(f"📊 Changelog Size Check")
            print(f"  Line count: {metrics['line_count']}")
            print(f"  Entry count: {metrics['entry_count']}")
            print(f"  Size threshold: {metrics['size_threshold']}")
            print(f"  Status: {'⚠️  EXCEEDS THRESHOLD' if exceeds_threshold else '✅ OK'}")
        
        # Return exit code: 0 = OK, 1 = exceeds threshold
        return 1 if exceeds_threshold else 0
    
    except Exception as e:
        print(f"❌ Error: {e}", file=sys.stderr)
        import traceback
        traceback.print_exc()
        return 1


if __name__ == "__main__":
    sys.exit(main())


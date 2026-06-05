#!/usr/bin/env python3
"""
Update Documentation Metadata

Automatically updates metadata fields (last_updated, version, etc.) in documentation files.

Part of: Epic 5, Story 3 - Documentation Automation
Task: E5:S03:T01 - Create automated documentation update scripts

Usage:
    python update_metadata.py [--field FIELD --value VALUE] [--dry-run] [--files PATH ...]
"""

import argparse
import re
import sys
from datetime import datetime
from pathlib import Path
from typing import Dict, List, Optional, Tuple

try:
    import yaml
except ImportError:
    yaml = None


def parse_frontmatter(content: str) -> Tuple[Dict, int, int]:
    """
    Parse YAML frontmatter from markdown file.
    
    Returns:
        (frontmatter_dict, frontmatter_start_line, frontmatter_end_line)
    """
    if not content.startswith('---'):
        return {}, 0, 0
    
    lines = content.split('\n')
    if lines[0] != '---':
        return {}, 0, 0
    
    end_line = 1
    for i in range(1, len(lines)):
        if lines[i] == '---':
            end_line = i
            break
    
    frontmatter_text = '\n'.join(lines[1:end_line])
    
    if yaml:
        try:
            frontmatter = yaml.safe_load(frontmatter_text) or {}
            return frontmatter, 0, end_line
        except Exception:
            return {}, 0, 0
    
    return {}, 0, 0


def update_frontmatter_field(
    content: str,
    field: str,
    value: str,
    dry_run: bool = False
) -> Tuple[str, bool]:
    """
    Update a field in YAML frontmatter.
    
    Returns:
        (updated_content, was_updated)
    """
    frontmatter, start_line, end_line = parse_frontmatter(content)
    
    if end_line == 0:
        # No frontmatter, add it
        if not dry_run:
            if yaml:
                frontmatter[field] = value
                new_frontmatter = yaml.dump(frontmatter, default_flow_style=False)
                content = f"---\n{new_frontmatter}---\n\n{content}"
                return content, True
        return content, False
    
    # Update existing frontmatter
    frontmatter[field] = value
    
    if not dry_run and yaml:
        lines = content.split('\n')
        new_frontmatter = yaml.dump(frontmatter, default_flow_style=False)
        updated_lines = ['---'] + new_frontmatter.split('\n') + ['---']
        content = '\n'.join(updated_lines + lines[end_line + 1:])
        return content, True
    
    return content, False


def update_markdown_field(
    content: str,
    field: str,
    value: str,
    dry_run: bool = False
) -> Tuple[str, bool]:
    """
    Update a markdown field (e.g., **Last updated:**).
    
    Returns:
        (updated_content, was_updated)
    """
    # Pattern for markdown fields: **Field Name:** value
    pattern = rf'(\*\*{re.escape(field)}:\*\*)\s*(.+?)(?:\n|$)'
    
    def replacer(match):
        return f"{match.group(1)} {value}\n"
    
    if re.search(pattern, content, re.IGNORECASE):
        updated_content = re.sub(pattern, replacer, content, flags=re.IGNORECASE)
        return updated_content, updated_content != content
    
    return content, False


def update_metadata(
    file_path: Path,
    field: str,
    value: str,
    dry_run: bool = False
) -> Tuple[bool, List[str]]:
    """
    Update metadata field in a file.
    
    Returns:
        (success, list_of_changes)
    """
    if not file_path.exists():
        return False, [f"File not found: {file_path}"]
    
    content = file_path.read_text(encoding='utf-8')
    changes = []
    
    # Try frontmatter first
    updated_content, was_updated = update_frontmatter_field(content, field, value, dry_run)
    if was_updated:
        changes.append(f"Updated frontmatter field: {field} = {value}")
        content = updated_content
    else:
        # Try markdown field
        updated_content, was_updated = update_markdown_field(content, field, value, dry_run)
        if was_updated:
            changes.append(f"Updated markdown field: {field} = {value}")
            content = updated_content
    
    if changes and not dry_run:
        file_path.write_text(content, encoding='utf-8')
    
    return True, changes


def main():
    parser = argparse.ArgumentParser(description="Update documentation metadata fields")
    parser.add_argument(
        "--field",
        required=True,
        help="Field name to update (e.g., 'last_updated', 'version')",
    )
    parser.add_argument(
        "--value",
        required=True,
        help="New value for the field",
    )
    parser.add_argument(
        "--files",
        nargs="+",
        type=Path,
        help="Specific files to update (default: all documentation files)",
    )
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="Show what would be updated without making changes",
    )
    parser.add_argument(
        "--project-root",
        type=Path,
        default=Path.cwd(),
        help="Project root directory (default: current directory)",
    )
    args = parser.parse_args()
    
    # Auto-generate value for common fields
    if args.field == 'last_updated' and args.value == 'auto':
        args.value = datetime.now().strftime('%Y-%m-%d')
    
    print(f"🔍 Updating {args.field} = {args.value}")
    
    # Get files to update
    if args.files:
        files_to_update = [args.project_root / f for f in args.files]
    else:
        # Default: update all markdown files in docs/
        docs_dir = args.project_root / "docs"
        if docs_dir.exists():
            files_to_update = list(docs_dir.rglob("*.md"))
        else:
            files_to_update = []
    
    updated_count = 0
    total_changes = 0
    
    for file_path in files_to_update:
        if not file_path.exists():
            continue
        
        try:
            success, changes = update_metadata(
                file_path,
                args.field,
                args.value,
                args.dry_run
            )
            
            if success and changes:
                updated_count += 1
                total_changes += len(changes)
                print(f"  ✅ {file_path.relative_to(args.project_root)}: {', '.join(changes)}")
        except Exception as e:
            print(f"  ⚠️  {file_path}: Error - {e}", file=sys.stderr)
    
    if args.dry_run:
        print(f"\n🔍 DRY RUN: Would update {updated_count} file(s) with {total_changes} change(s)")
    else:
        print(f"\n✅ Updated {updated_count} file(s) with {total_changes} change(s)")
    
    return 0


if __name__ == "__main__":
    sys.exit(main())


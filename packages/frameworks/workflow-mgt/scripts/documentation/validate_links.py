#!/usr/bin/env python3
"""
Validate and Fix Documentation Links

Validates internal and external links in documentation, and optionally fixes broken links.

Part of: Epic 5, Story 3 - Documentation Automation
Task: E5:S03:T01 - Create automated documentation update scripts

Usage:
    python validate_links.py [--fix] [--dry-run] [--files PATH ...]
"""

import argparse
import re
import sys
from pathlib import Path
from typing import Dict, List, Optional, Tuple
from urllib.parse import urlparse


def find_links(content: str, file_path: Path, project_root: Path) -> List[Dict]:
    """
    Find all links in content.
    
    Returns:
        List of link dictionaries with: line_num, link_text, link_path, link_type
    """
    links = []
    lines = content.split('\n')
    
    # Markdown link pattern: [text](path)
    link_pattern = r'\[([^\]]+)\]\(([^\)]+)\)'
    
    for line_num, line in enumerate(lines, 1):
        for match in re.finditer(link_pattern, line):
            link_text = match.group(1)
            link_path = match.group(2)
            
            # Determine link type
            parsed = urlparse(link_path)
            if parsed.scheme:
                link_type = 'external'
            elif link_path.startswith('#'):
                link_type = 'anchor'
            else:
                link_type = 'internal'
            
            links.append({
                'line_num': line_num,
                'link_text': link_text,
                'link_path': link_path,
                'link_type': link_type,
                'match_text': match.group(0)
            })
    
    return links


def validate_internal_link(link_path: str, file_path: Path, project_root: Path) -> Tuple[bool, Optional[Path]]:
    """
    Validate an internal link.
    
    Returns:
        (is_valid, resolved_path)
    """
    # Handle relative paths
    if link_path.startswith('/'):
        target_path = project_root / link_path.lstrip('/')
    else:
        # Relative to current file's directory
        target_path = file_path.parent / link_path
    
    # Handle anchor links
    if '#' in str(target_path):
        path_part, anchor = str(target_path).split('#', 1)
        target_path = Path(path_part)
    
    # Check if file exists
    if target_path.exists():
        return True, target_path
    
    # Try with .md extension
    if not target_path.suffix:
        target_path_md = target_path.with_suffix('.md')
        if target_path_md.exists():
            return True, target_path_md
    
    return False, None


def fix_broken_link(
    content: str,
    link_info: Dict,
    file_path: Path,
    project_root: Path
) -> Tuple[str, bool]:
    """
    Attempt to fix a broken link by searching for the target file.
    
    Returns:
        (updated_content, was_fixed)
    """
    link_path = link_info['link_path']
    
    # Try to find the file by name
    target_name = Path(link_path).name
    if not target_name:
        return content, False
    
    # Search in common locations
    search_dirs = [
        project_root / "docs",
        file_path.parent,
        project_root,
    ]
    
    for search_dir in search_dirs:
        if not search_dir.exists():
            continue
        
        # Search for files with matching name
        for found_file in search_dir.rglob(target_name):
            if found_file.is_file():
                # Calculate relative path
                try:
                    relative_path = found_file.relative_to(file_path.parent)
                    new_link = f"[{link_info['link_text']}]({relative_path})"
                    updated_content = content.replace(link_info['match_text'], new_link)
                    return updated_content, True
                except ValueError:
                    # Files not in same tree, use absolute path
                    try:
                        relative_path = found_file.relative_to(project_root)
                        new_link = f"[{link_info['link_text']}]({relative_path})"
                        updated_content = content.replace(link_info['match_text'], new_link)
                        return updated_content, True
                    except ValueError:
                        continue
    
    return content, False


def validate_links(
    file_path: Path,
    project_root: Path,
    fix: bool = False,
    dry_run: bool = False
) -> Tuple[bool, List[Dict], List[str]]:
    """
    Validate all links in a file.
    
    Returns:
        (all_valid, list_of_broken_links, list_of_fixes)
    """
    if not file_path.exists():
        return False, [], [f"File not found: {file_path}"]
    
    content = file_path.read_text(encoding='utf-8')
    links = find_links(content, file_path, project_root)
    
    broken_links = []
    fixes = []
    
    for link_info in links:
        if link_info['link_type'] == 'internal':
            is_valid, resolved_path = validate_internal_link(
                link_info['link_path'],
                file_path,
                project_root
            )
            
            if not is_valid:
                broken_links.append(link_info)
                
                if fix:
                    updated_content, was_fixed = fix_broken_link(
                        content,
                        link_info,
                        file_path,
                        project_root
                    )
                    
                    if was_fixed:
                        fixes.append(f"Fixed link: {link_info['link_path']}")
                        content = updated_content
        elif link_info['link_type'] == 'external':
            # External links - could validate with HTTP request, but skip for now
            pass
        elif link_info['link_type'] == 'anchor':
            # Anchor links - validate anchor exists in file
            anchor = link_info['link_path'].lstrip('#')
            # Simple check: look for heading with anchor text
            heading_pattern = rf'^#+\s+{re.escape(anchor)}'
            if not re.search(heading_pattern, content, re.MULTILINE | re.IGNORECASE):
                broken_links.append(link_info)
    
    if fixes and not dry_run:
        file_path.write_text(content, encoding='utf-8')
    
    all_valid = len(broken_links) == 0
    return all_valid, broken_links, fixes


def main():
    parser = argparse.ArgumentParser(description="Validate and fix documentation links")
    parser.add_argument(
        "--fix",
        action="store_true",
        help="Attempt to fix broken links automatically",
    )
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="Show what would be fixed without making changes",
    )
    parser.add_argument(
        "--files",
        nargs="+",
        type=Path,
        help="Specific files to validate (default: all documentation files)",
    )
    parser.add_argument(
        "--project-root",
        type=Path,
        default=Path.cwd(),
        help="Project root directory (default: current directory)",
    )
    args = parser.parse_args()
    
    print("🔍 Validating documentation links...")
    
    # Get files to validate
    if args.files:
        files_to_validate = [args.project_root / f for f in args.files]
    else:
        # Default: validate all markdown files in docs/
        docs_dir = args.project_root / "docs"
        if docs_dir.exists():
            files_to_validate = list(docs_dir.rglob("*.md"))
        else:
            files_to_validate = []
    
    total_broken = 0
    total_fixed = 0
    files_with_issues = []
    
    for file_path in files_to_validate:
        if not file_path.exists():
            continue
        
        try:
            all_valid, broken_links, fixes = validate_links(
                file_path,
                args.project_root,
                args.fix,
                args.dry_run
            )
            
            if broken_links:
                files_with_issues.append(file_path)
                total_broken += len(broken_links)
                print(f"  ⚠️  {file_path.relative_to(args.project_root)}: {len(broken_links)} broken link(s)")
                for link in broken_links:
                    print(f"      Line {link['line_num']}: {link['link_path']}")
            
            if fixes:
                total_fixed += len(fixes)
                print(f"  ✅ {file_path.relative_to(args.project_root)}: {len(fixes)} link(s) fixed")
                for fix in fixes:
                    print(f"      {fix}")
        except Exception as e:
            print(f"  ❌ {file_path}: Error - {e}", file=sys.stderr)
    
    if args.dry_run:
        print(f"\n🔍 DRY RUN: Found {total_broken} broken link(s), would fix {total_fixed}")
    else:
        if total_broken == 0:
            print(f"\n✅ All links valid ({len(files_to_validate)} file(s) checked)")
        else:
            print(f"\n⚠️  Found {total_broken} broken link(s) in {len(files_with_issues)} file(s)")
            if args.fix:
                print(f"   Fixed {total_fixed} link(s)")
            else:
                print("   Use --fix to attempt automatic fixes")
    
    return 0 if total_broken == 0 else 1


if __name__ == "__main__":
    sys.exit(main())


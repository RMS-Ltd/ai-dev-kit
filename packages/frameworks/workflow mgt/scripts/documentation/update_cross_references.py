#!/usr/bin/env python3
"""
Update Cross-References in Documentation

Automatically updates cross-references when files are moved or renamed.

Part of: Epic 5, Story 3 - Documentation Automation
Task: E5:S03:T01 - Create automated documentation update scripts

Usage:
    python update_cross_references.py --old-path PATH --new-path PATH [--dry-run]
"""

import argparse
import re
import sys
from pathlib import Path
from typing import Dict, List, Tuple


def find_cross_references(content: str, target_path: Path, project_root: Path) -> List[Tuple[int, str, str]]:
    """
    Find all cross-references to a target path.
    
    Returns:
        List of (line_number, reference_text, reference_type) tuples
    """
    references = []
    target_relative = str(target_path.relative_to(project_root))
    target_name = target_path.name
    
    # Markdown link patterns
    patterns = [
        (rf'\[([^\]]+)\]\(([^\)]+)\)', 'markdown_link'),
        (rf'`([^`]+)`', 'code_reference'),
        (rf'`([^`]+)`', 'path_reference'),
    ]
    
    lines = content.split('\n')
    for line_num, line in enumerate(lines, 1):
        # Check markdown links
        link_pattern = r'\[([^\]]+)\]\(([^\)]+)\)'
        for match in re.finditer(link_pattern, line):
            link_text, link_path = match.groups()
            if target_relative in link_path or target_name in link_path:
                references.append((line_num, match.group(0), 'markdown_link'))
        
        # Check code/path references
        code_pattern = r'`([^`]+)`'
        for match in re.finditer(code_pattern, line):
            ref_text = match.group(1)
            if target_relative in ref_text or target_name in ref_text:
                references.append((line_num, match.group(0), 'code_reference'))
    
    return references


def update_cross_references(
    file_path: Path,
    old_path: Path,
    new_path: Path,
    project_root: Path,
    dry_run: bool = False
) -> Tuple[bool, List[str]]:
    """
    Update cross-references from old_path to new_path.
    
    Returns:
        (success, list_of_changes)
    """
    if not file_path.exists():
        return False, [f"File not found: {file_path}"]
    
    content = file_path.read_text(encoding='utf-8')
    changes = []
    
    old_relative = str(old_path.relative_to(project_root))
    new_relative = str(new_path.relative_to(project_root))
    old_name = old_path.name
    new_name = new_path.name
    
    original_content = content
    
    # Update markdown links
    def update_link(match):
        link_text, link_path = match.groups()
        if old_relative in link_path:
            new_link_path = link_path.replace(old_relative, new_relative)
            changes.append(f"Updated link: {link_path} → {new_link_path}")
            return f"[{link_text}]({new_link_path})"
        elif old_name in link_path and new_name != old_name:
            new_link_path = link_path.replace(old_name, new_name)
            changes.append(f"Updated link: {link_path} → {new_link_path}")
            return f"[{link_text}]({new_link_path})"
        return match.group(0)
    
    content = re.sub(r'\[([^\]]+)\]\(([^\)]+)\)', update_link, content)
    
    # Update code/path references
    def update_code_ref(match):
        ref_text = match.group(1)
        if old_relative in ref_text:
            new_ref_text = ref_text.replace(old_relative, new_relative)
            changes.append(f"Updated reference: {ref_text} → {new_ref_text}")
            return f"`{new_ref_text}`"
        elif old_name in ref_text and new_name != old_name:
            new_ref_text = ref_text.replace(old_name, new_name)
            changes.append(f"Updated reference: {ref_text} → {new_ref_text}")
            return f"`{new_ref_text}`"
        return match.group(0)
    
    content = re.sub(r'`([^`]+)`', update_code_ref, content)
    
    if content != original_content and not dry_run:
        file_path.write_text(content, encoding='utf-8')
    
    return True, changes


def get_documentation_files(project_root: Path) -> List[Path]:
    """Get list of documentation files to check."""
    doc_files = []
    doc_dirs = [
        project_root / "docs",
        project_root / "README.md",
    ]
    
    for doc_dir in doc_dirs:
        if doc_dir.is_file():
            doc_files.append(doc_dir)
        elif doc_dir.is_dir():
            doc_files.extend(doc_dir.rglob("*.md"))
    
    return doc_files


def main():
    parser = argparse.ArgumentParser(description="Update cross-references when files are moved")
    parser.add_argument(
        "--old-path",
        type=Path,
        required=True,
        help="Old file path (relative to project root)",
    )
    parser.add_argument(
        "--new-path",
        type=Path,
        required=True,
        help="New file path (relative to project root)",
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
    
    old_path = args.project_root / args.old_path
    new_path = args.project_root / args.new_path
    
    if not old_path.exists():
        print(f"⚠️  Old path does not exist: {old_path}", file=sys.stderr)
        print("   Continuing to update references anyway...")
    
    if not new_path.exists():
        print(f"⚠️  New path does not exist: {new_path}", file=sys.stderr)
        print("   References will be updated, but target file may be missing")
    
    print(f"🔍 Updating cross-references: {args.old_path} → {args.new_path}")
    
    # Get all documentation files
    doc_files = get_documentation_files(args.project_root)
    
    updated_count = 0
    total_changes = 0
    
    for file_path in doc_files:
        if file_path == old_path or file_path == new_path:
            continue  # Skip the file being moved itself
        
        try:
            references = find_cross_references(
                file_path.read_text(encoding='utf-8'),
                old_path,
                args.project_root
            )
            
            if references:
                success, changes = update_cross_references(
                    file_path,
                    old_path,
                    new_path,
                    args.project_root,
                    args.dry_run
                )
                
                if success and changes:
                    updated_count += 1
                    total_changes += len(changes)
                    print(f"  ✅ {file_path.relative_to(args.project_root)}: {len(changes)} reference(s) updated")
        except Exception as e:
            print(f"  ⚠️  {file_path}: Error - {e}", file=sys.stderr)
    
    if args.dry_run:
        print(f"\n🔍 DRY RUN: Would update {updated_count} file(s) with {total_changes} reference(s)")
    else:
        print(f"\n✅ Updated {updated_count} file(s) with {total_changes} reference(s)")
    
    return 0


if __name__ == "__main__":
    sys.exit(main())


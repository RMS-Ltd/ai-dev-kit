#!/usr/bin/env python3
"""
Kanban Document Checklist Sorting Utility

This script sorts checklists in kanban documents numerically:
- Task checklists in story documents: T01, T02, T03, ... (within each story)
- Story checklists in epic documents: S01, S02, S03, ... (within each epic)

This utility is used by UKW to ensure consistent numerical ordering of tasks
and stories in their respective document checklists.

Usage:
    python packages/frameworks/workflow mgt/scripts/kanban/sort_kanban_document_checklists.py [--document-path PATH] [--dry-run]

    --document-path: Path to kanban document file (story or epic)
    --dry-run: Show what would be sorted without making changes
"""

import argparse
import re
import sys
from pathlib import Path
from typing import Dict, List, Optional, Tuple

try:
    import yaml
except ImportError:
    yaml = None


def extract_task_number(task_line: str) -> Optional[int]:
    """Extract task number from line like '- [x] **E6:S01:T33 – ...'."""
    match = re.search(r'\*\*E\d+:S\d+:T(\d+)', task_line)
    if match:
        return int(match.group(1))
    return None


def extract_story_number(story_line: str) -> Optional[int]:
    """Extract story number from line like '- [x] **E6:S01 – ...'."""
    match = re.search(r'\*\*E\d+:S(\d+)', story_line)
    if match:
        return int(match.group(1))
    return None


def find_checklist_section(lines: List[str], checklist_type: str) -> Optional[Tuple[int, int]]:
    """
    Find the checklist section in a document.
    Returns (start_idx, end_idx) or None if not found.
    checklist_type: 'task' or 'story'
    """
    start_idx = None
    end_idx = len(lines)
    
    # Look for checklist section headers
    checklist_headers = {
        'task': ['## Task Checklist', '## Tasks', '### Tasks', '### Task Checklist'],
        'story': ['## Story Checklist', '## Stories', '### Stories', '### Story Checklist']
    }
    
    for i, line in enumerate(lines):
        # Check if this is a checklist header
        for header in checklist_headers.get(checklist_type, []):
            if line.strip() == header or line.strip().startswith(header + ':'):
                start_idx = i
                break
        
        if start_idx is not None:
            break
    
    if start_idx is None:
        return None
    
    # Find the end of the checklist section
    # Checklist ends when we hit another ## or ### header (not indented)
    for i in range(start_idx + 1, len(lines)):
        line = lines[i]
        # Stop at next major section (## or ### that's not indented)
        if line.startswith('##') and not line.startswith('  '):
            end_idx = i
            break
        # Also stop at --- separator if it's a clear section boundary
        if line.strip() == '---' and i > start_idx + 5:
            end_idx = i
            break
    
    return (start_idx, end_idx)


def parse_checklist_entry(lines: List[str], start_idx: int, checklist_type: str) -> Tuple[Optional[Dict], int]:
    """
    Parse a checklist entry (task or story) from the document.
    Returns (entry_dict, next_idx) where entry_dict contains:
    - 'number': task/story number
    - 'content': full entry content (including indented lines)
    """
    if start_idx >= len(lines):
        return None, start_idx
    
    # Find the checklist entry line (starts with - [ ] or - [x])
    entry_start = None
    for i in range(start_idx, len(lines)):
        line = lines[i]
        if line.strip().startswith('- [') and ('**E' in line):
            entry_start = i
            break
    
    if entry_start is None:
        return None, start_idx
    
    # Extract number
    entry_line = lines[entry_start]
    if checklist_type == 'task':
        entry_num = extract_task_number(entry_line)
    else:
        entry_num = extract_story_number(entry_line)
    
    if entry_num is None:
        return None, entry_start + 1
    
    # Collect entry content (entry line + any following indented lines)
    entry_lines = [entry_line]
    next_idx = entry_start + 1
    
    while next_idx < len(lines):
        next_line = lines[next_idx]
        # Stop if we hit another checklist entry
        if next_line.strip().startswith('- [') and ('**E' in next_line):
            break
        # Stop if we hit a section boundary
        if next_line.startswith('##') or next_line.strip() == '---':
            break
        # Include indented lines and blank lines
        if next_line.startswith((' ', '\t')) or next_line.strip() == '':
            entry_lines.append(next_line)
            next_idx += 1
        else:
            break
    
    return {
        'number': entry_num,
        'content': '\n'.join(entry_lines),
        'start_idx': entry_start,
        'end_idx': next_idx
    }, next_idx


def sort_document_checklists(document_path: Path, dry_run: bool = False) -> bool:
    """
    Sort checklists in a kanban document (story or epic).
    Returns True if sorting was successful, False otherwise.
    """
    if not document_path.exists():
        print(f"❌ Error: Document not found at {document_path}", file=sys.stderr)
        return False
    
    # Read document content
    try:
        with open(document_path, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        print(f"❌ Error reading document: {e}", file=sys.stderr)
        return False
    
    lines = content.split('\n')
    
    # Determine document type and checklist type
    # Check if it's a story document (has task checklist) or epic document (has story checklist)
    is_story_doc = any('Task Checklist' in line or '## Tasks' in line for line in lines)
    is_epic_doc = any('Story Checklist' in line or '## Stories' in line for line in lines)
    
    if not is_story_doc and not is_epic_doc:
        print(f"⚠️  Warning: No checklist section found in {document_path}", file=sys.stderr)
        return False
    
    checklist_type = 'task' if is_story_doc else 'story'
    
    # Find checklist section
    checklist_section = find_checklist_section(lines, checklist_type)
    if checklist_section is None:
        print(f"⚠️  Warning: Could not locate {checklist_type} checklist section", file=sys.stderr)
        return False
    
    checklist_start, checklist_end = checklist_section
    
    # Parse all checklist entries
    entries = []
    idx = checklist_start + 1  # Start after the header
    while idx < checklist_end:
        entry, next_idx = parse_checklist_entry(lines, idx, checklist_type)
        if entry is None:
            idx += 1
            if idx >= checklist_end:
                break
            continue
        entries.append(entry)
        idx = next_idx
    
    if not entries:
        print(f"⚠️  Warning: No {checklist_type} entries found in checklist", file=sys.stderr)
        return False
    
    # Sort entries numerically
    entries.sort(key=lambda x: x['number'])
    
    if dry_run:
        print(f"🔍 DRY RUN: Would sort {checklist_type} checklist in the following order:")
        for entry in entries:
            print(f"  - {checklist_type.capitalize()} {entry['number']}")
        return True
    
    # Reconstruct document with sorted checklist
    before_checklist = '\n'.join(lines[:checklist_start + 1])
    after_checklist = '\n'.join(lines[checklist_end:])
    
    # Build sorted checklist
    sorted_checklist_lines = []
    for entry in entries:
        for entry_line in entry['content'].split('\n'):
            sorted_checklist_lines.append(entry_line)
        sorted_checklist_lines.append('')  # Blank line between entries
    
    # Combine
    new_content = before_checklist + '\n' + '\n'.join(sorted_checklist_lines).rstrip() + '\n\n' + after_checklist
    
    # Write back
    try:
        with open(document_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"✅ Successfully sorted {checklist_type} checklist: {document_path}")
        print(f"   Sorted {len(entries)} {checklist_type} entries numerically")
        return True
    except Exception as e:
        print(f"❌ Error writing sorted document: {e}", file=sys.stderr)
        return False


def main():
    parser = argparse.ArgumentParser(
        description='Sort checklists in kanban documents (task checklists in stories, story checklists in epics)'
    )
    parser.add_argument(
        '--document-path',
        type=Path,
        required=True,
        help='Path to kanban document file (story or epic)'
    )
    parser.add_argument(
        '--dry-run',
        action='store_true',
        help='Show what would be sorted without making changes'
    )
    
    args = parser.parse_args()
    
    # Resolve path
    document_path = args.document_path
    if not document_path.is_absolute():
        document_path = Path.cwd() / document_path
    
    # Sort document
    success = sort_document_checklists(document_path, dry_run=args.dry_run)
    sys.exit(0 if success else 1)


if __name__ == '__main__':
    main()

#!/usr/bin/env python3
"""
UKW-related helpers: task/story/epic ID parsing (used by validators and UKW -a targeting)
plus legacy deterministic \"mode\" stubs (moscow / task_analysis / deep_analysis).

Agentic UKW flags in .cursorrules (-u, -p, -a) differ from the historical mode names below;
see .cursorrules \"UPDATE KANBAN WORKFLOW (UKW)\" for the supported command surface.

Historical doc (legacy modes):

Parses flexible task targeting syntax for UKW priority assignment operations.
Supports 3 operational modes:

1. MoSCOW Prioritization Update (`UKW` or `UKW -m`):
   - Ensure completed tasks moved to kanban-completed.md
   - Add newly created tasks to MoSCOW prioritized section
   - Apply agentic intelligence for prioritization

2. Task Inconsistency Analysis (`UKW -t`):
   - Ensure all tasks reflect current state
   - Verify inter-document cross-wiring is in place
   - Repair broken cross-references

3. Deep Analysis for Missing Kanban Docs (`UKW -d`):
   - Analyze kanban, FR/BR/UXR, and CHANGELOG docs for evidence
   - Identify potentially missing/lost kanban documentation
   - Create missing task documents with proper metadata

Usage:
    from ukw_enhanced import run_ukw_mode
    
    # MoSCOW prioritization update
    run_ukw_mode('moscow')  # or 'UKW -m'
    
    # Task inconsistency analysis  
    run_ukw_mode('task_analysis')  # or 'UKW -t'
    
    # Deep analysis for missing docs
    run_ukw_mode('deep_analysis')  # or 'UKW -d'
"""

import re
from typing import List, Tuple, Optional, Set
from pathlib import Path
import subprocess
import json
from datetime import datetime, timezone


def run_ukw_mode(mode: str, kanban_root: Optional[Path] = None) -> dict:
    """
    Run UKW in one of 3 operational modes.
    
    Args:
        mode: 'moscow', 'task_analysis', or 'deep_analysis'
        kanban_root: Path to kanban directory
        
    Returns:
        Dict with results and status
    """
    if kanban_root is None:
        kanban_root = Path("docs/project-management/kanban")
    
    if mode in ['moscow', 'm', 'prioritization']:
        return run_moscow_prioritization_mode(kanban_root)
    elif mode in ['task_analysis', 't', 'consistency']:
        return run_task_inconsistency_analysis(kanban_root)
    elif mode in ['deep_analysis', 'd', 'missing_docs']:
        return run_deep_missing_docs_analysis(kanban_root)
    else:
        return {'error': f'Unknown UKW mode: {mode}'}


def run_moscow_prioritization_mode(kanban_root: Path) -> dict:
    """
    Mode 1: Update MoSCOW Prioritization Section
    
    - Ensure completed tasks moved to kanban-completed.md
    - Add newly created tasks to MoSCOW prioritized section
    - Apply agentic intelligence for prioritization
    """
    results = {
        'mode': 'moscow_prioritization',
        'completed_tasks_moved': [],
        'new_tasks_added': [],
        'prioritization_updates': [],
        'errors': []
    }
    
    try:
        # Step 1: Move completed tasks to kanban-completed.md
        board_path = kanban_root / "kboard.md"
        if not board_path.exists():
            board_path = kanban_root / "kanban-board.md"
        completed_path = kanban_root / "kanban-completed.md"
        
        # Read current board
        if board_path.exists():
            with open(board_path, 'r') as f:
                board_content = f.read()
            
            # Find completed tasks in active sections and move them
            # This is a simplified implementation - in practice would need
            # more sophisticated parsing
            
            # Step 2: Find newly created tasks not on board
            new_tasks = find_untracked_tasks(kanban_root)
            
            # Step 3: Apply agentic prioritization
            prioritized_tasks = apply_agentic_prioritization(new_tasks)
            
            results['new_tasks_added'] = prioritized_tasks
            results['status'] = 'success'
            
        else:
            results['errors'].append('kboard.md not found (legacy fallback kanban-board.md also missing)')
            results['status'] = 'error'
            
    except Exception as e:
        results['errors'].append(str(e))
        results['status'] = 'error'
    
    return results


def run_task_inconsistency_analysis(kanban_root: Path) -> dict:
    """
    Mode 2: Task Inconsistency Analysis
    
    - Ensure all tasks reflect current state
    - Verify inter-document cross-wiring is in place
    - Repair broken cross-references
    """
    results = {
        'mode': 'task_inconsistency_analysis',
        'status_mismatches': [],
        'broken_cross_references': [],
        'repairs_made': [],
        'errors': []
    }
    
    try:
        # Analyze all task documents for consistency
        inconsistencies = analyze_task_consistency(kanban_root)
        results['status_mismatches'] = inconsistencies
        
        # Check cross-references between docs
        broken_refs = check_cross_references(kanban_root)
        results['broken_cross_references'] = broken_refs
        
        # Attempt repairs
        repairs = repair_broken_references(broken_refs)
        results['repairs_made'] = repairs
        
        results['status'] = 'success'
        
    except Exception as e:
        results['errors'].append(str(e))
        results['status'] = 'error'
    
    return results


def run_deep_missing_docs_analysis(kanban_root: Path) -> dict:
    """
    Mode 3: Deep Analysis for Missing Kanban Docs
    
    - Analyze kanban, FR/BR/UXR, and CHANGELOG docs for evidence
    - Identify potentially missing/lost kanban documentation
    - Create missing task documents with proper metadata
    """
    results = {
        'mode': 'deep_missing_docs_analysis',
        'missing_tasks_identified': [],
        'changelog_evidence_found': [],
        'fr_br_uxr_gaps': [],
        'documents_created': [],
        'errors': []
    }
    
    try:
        # Analyze CHANGELOGs for task completion evidence
        changelog_evidence = analyze_changelog_evidence(kanban_root)
        results['changelog_evidence_found'] = changelog_evidence
        
        # Find FR/BR/UXR items without corresponding tasks
        fr_br_gaps = find_fr_br_uxr_gaps(kanban_root)
        results['fr_br_uxr_gaps'] = fr_br_gaps
        
        # Identify missing task docs
        missing_tasks = identify_missing_tasks(changelog_evidence, fr_br_gaps)
        results['missing_tasks_identified'] = missing_tasks
        
        # Create missing documents
        created_docs = create_missing_task_docs(missing_tasks, kanban_root)
        results['documents_created'] = created_docs
        
        results['status'] = 'success'
        
    except Exception as e:
        results['errors'].append(str(e))
        results['status'] = 'error'
    
    return results


# Supporting functions for the analysis modes

def find_untracked_tasks(kanban_root: Path) -> List[dict]:
    """Find tasks that exist but aren't on the kanban board"""
    # Implementation would scan task docs and compare with board
    return []


def apply_agentic_prioritization(tasks: List[dict]) -> List[dict]:
    """Apply agentic intelligence to prioritize tasks"""
    # Implementation would analyze dependencies, impact, urgency
    return tasks


def analyze_task_consistency(kanban_root: Path) -> List[dict]:
    """Analyze all task documents for status consistency"""
    # Implementation would check task doc status vs board status
    return []


def check_cross_references(kanban_root: Path) -> List[dict]:
    """Check cross-references between kanban documents"""
    # Implementation would validate links between docs
    return []


def repair_broken_references(broken_refs: List[dict]) -> List[dict]:
    """Attempt to repair broken cross-references"""
    # Implementation would fix broken links
    return []


def analyze_changelog_evidence(kanban_root: Path) -> List[dict]:
    """Analyze CHANGELOG files for task completion evidence"""
    # Implementation would scan changelogs for task references
    return []


def find_fr_br_uxr_gaps(kanban_root: Path) -> List[dict]:
    """Find FR/BR/UXR items without corresponding tasks"""
    # Implementation would compare FR/BR/UXR board with kanban tasks
    return []


def identify_missing_tasks(changelog_evidence: List[dict], fr_br_gaps: List[dict]) -> List[dict]:
    """Identify tasks that should exist but are missing"""
    # Implementation would correlate evidence to identify gaps
    return []


def create_missing_task_docs(missing_tasks: List[dict], kanban_root: Path) -> List[str]:
    """Create missing task documents with proper metadata"""
    # Implementation would scaffold missing task docs
    return []


def normalize_task_id(epic: int, story: int, task: int) -> str:
    """
    Normalize task ID to canonical format: E{epic:02d}:S{story:03d}:T{task:02d}
    
    Examples:
        (9, 1, 1) -> "E09:S01:T01"
        (4, 16, 5) -> "E04:S16:T05"
    """
    return f"E{epic:02d}:S{story:03d}:T{task:02d}"


def parse_single_task_id(task_str: str) -> Optional[Tuple[int, int, int]]:
    """
    Parse a single task ID in various formats.
    
    Supported formats:
    - Canonical: E09S01T01, E09:S01:T01, E09-S01-T01
    - Compact: E9S1T1, e9s1t1
    - Case-insensitive
    
    Returns:
        Tuple of (epic, story, task) or None if invalid
    """
    # Normalize input (uppercase, remove separators for parsing)
    normalized = task_str.upper().replace(':', '').replace('-', '').strip()
    
    # Pattern: E followed by digits, S followed by digits, T followed by digits
    pattern = r'^E(\d+)S(\d+)T(\d+)$'
    match = re.match(pattern, normalized)
    
    if not match:
        return None
    
    try:
        epic = int(match.group(1))
        story = int(match.group(2))
        task = int(match.group(3))
        return (epic, story, task)
    except (ValueError, IndexError):
        return None


def parse_story_id(story_str: str) -> Optional[Tuple[int, int]]:
    """
    Parse a story ID in various formats.
    
    Supported formats:
    - E09S01, E09:S01, E09-S01
    - E9S1, e9s1
    - Case-insensitive
    
    Returns:
        Tuple of (epic, story) or None if invalid
    """
    normalized = story_str.upper().replace(':', '').replace('-', '').strip()
    
    pattern = r'^E(\d+)S(\d+)$'
    match = re.match(pattern, normalized)
    
    if not match:
        return None
    
    try:
        epic = int(match.group(1))
        story = int(match.group(2))
        return (epic, story)
    except (ValueError, IndexError):
        return None


def parse_epic_id(epic_str: str) -> Optional[int]:
    """
    Parse an epic ID in various formats.
    
    Supported formats:
    - E09, E9, e9
    - Case-insensitive
    
    Returns:
        Epic number or None if invalid
    """
    normalized = epic_str.upper().strip()
    
    # Remove E prefix if present
    if normalized.startswith('E'):
        normalized = normalized[1:]
    
    try:
        epic = int(normalized)
        return epic
    except ValueError:
        return None


def expand_task_range(start_str: str, end_str: str) -> List[Tuple[int, int, int]]:
    """
    Expand a linear task range.
    
    Example: E09S01T01-E09S01T06
    Returns: [(9, 1, 1), (9, 1, 2), (9, 1, 3), (9, 1, 4), (9, 1, 5), (9, 1, 6)]
    
    Requirements:
    - Both start and end must be in the same epic and story
    - Start task number must be <= end task number
    """
    start_task = parse_single_task_id(start_str)
    end_task = parse_single_task_id(end_str)
    
    if not start_task or not end_task:
        return []
    
    start_epic, start_story, start_task_num = start_task
    end_epic, end_story, end_task_num = end_task
    
    # Must be in same epic and story
    if start_epic != end_epic or start_story != end_story:
        return []
    
    # Start must be <= end
    if start_task_num > end_task_num:
        return []
    
    # Generate range
    tasks = []
    for task_num in range(start_task_num, end_task_num + 1):
        tasks.append((start_epic, start_story, task_num))
    
    return tasks


def find_tasks_in_story(epic: int, story: int, kanban_root: Path) -> List[Tuple[int, int, int]]:
    """
    Find all tasks in a story by scanning task documents.
    
    Returns:
        List of (epic, story, task) tuples
    """
    tasks = []
    story_dir = kanban_root / f"epics/Epic-{epic}/Story-{story:03d}-*"
    
    # Find story directory
    story_dirs = list(kanban_root.glob(f"epics/Epic-{epic}/Story-{story:03d}-*"))
    if not story_dirs:
        # Try without zero-padding
        story_dirs = list(kanban_root.glob(f"epics/Epic-{epic}/Story-{story}-*"))
    
    if not story_dirs:
        return tasks
    
    story_path = story_dirs[0]
    
    # Find all task documents in story directory
    task_pattern = story_path / "T*-*.md"
    task_files = list(story_path.glob("T*-*.md"))
    
    for task_file in task_files:
        # Extract task number from filename: T{task}-*.md
        match = re.match(r'T(\d+)-', task_file.name)
        if match:
            task_num = int(match.group(1))
            tasks.append((epic, story, task_num))
    
    return sorted(tasks)


def find_tasks_in_epic(epic: int, kanban_root: Path) -> List[Tuple[int, int, int]]:
    """
    Find all tasks in an epic by scanning story and task documents.
    
    Returns:
        List of (epic, story, task) tuples
    """
    tasks = []
    epic_dir = kanban_root / f"epics/Epic-{epic}"
    
    if not epic_dir.exists():
        return tasks
    
    # Find all story directories
    story_dirs = [d for d in epic_dir.iterdir() if d.is_dir() and d.name.startswith("Story-")]
    
    for story_dir in story_dirs:
        # Extract story number from directory name
        match = re.match(r'Story-(\d+)', story_dir.name)
        if match:
            story = int(match.group(1))
            story_tasks = find_tasks_in_story(epic, story, kanban_root)
            tasks.extend(story_tasks)
    
    return sorted(tasks)


def find_all_unprioritized_tasks(kanban_root: Path) -> List[Tuple[int, int, int]]:
    """
    Find all unprioritized tasks by scanning all task documents.
    
    Returns:
        List of (epic, story, task) tuples for tasks without priorities
    """
    tasks = []
    epics_dir = kanban_root / "epics"
    
    if not epics_dir.exists():
        return tasks
    
    # Scan all epic directories
    for epic_dir in epics_dir.iterdir():
        if not epic_dir.is_dir() or not epic_dir.name.startswith("Epic-"):
            continue
        
        # Extract epic number
        match = re.match(r'Epic-(\d+)', epic_dir.name)
        if not match:
            continue
        
        epic = int(match.group(1))
        epic_tasks = find_tasks_in_epic(epic, kanban_root)
        
        # Filter for unprioritized tasks (would need to read task docs to check priority)
        # For now, return all tasks - filtering can be done later
        tasks.extend(epic_tasks)
    
    return sorted(tasks)


def parse_task_target(target_str: str, kanban_root: Optional[Path] = None) -> List[Tuple[int, int, int]]:
    """
    Parse flexible task targeting syntax.
    
    Supported formats:
    - Single task: E09S01T01, e9s1t1, E09:S01:T01
    - Multiple tasks: E09S01T01,E08S02T11
    - Linear range: E09S01T01-E09S01T06
    - Story: E09S01, e9s1
    - Epic: E09, e9
    - All unprioritized: all, *
    
    Returns:
        List of (epic, story, task) tuples in canonical order
    """
    if kanban_root is None:
        kanban_root = Path("docs/project-management/kanban")
    
    target_str = target_str.strip()
    
    # Handle "all" or "*"
    if target_str.lower() in ['all', '*']:
        return find_all_unprioritized_tasks(kanban_root)
    
    # Check for range syntax: E09S01T01-E09S01T06
    if '-' in target_str and 'E' in target_str:
        parts = target_str.split('-', 1)
        if len(parts) == 2:
            start_str, end_str = parts
            range_tasks = expand_task_range(start_str.strip(), end_str.strip())
            if range_tasks:
                return range_tasks
    
    # Check for multiple tasks: E09S01T01,E08S02T11
    if ',' in target_str:
        all_tasks = []
        parts = target_str.split(',')
        for part in parts:
            part_tasks = parse_task_target(part.strip(), kanban_root)
            all_tasks.extend(part_tasks)
        # Remove duplicates and sort
        return sorted(list(set(all_tasks)))
    
    # Try parsing as single task
    task = parse_single_task_id(target_str)
    if task:
        return [task]
    
    # Try parsing as story
    story = parse_story_id(target_str)
    if story:
        epic, story_num = story
        return find_tasks_in_story(epic, story_num, kanban_root)
    
    # Try parsing as epic
    epic = parse_epic_id(target_str)
    if epic is not None:
        return find_tasks_in_epic(epic, kanban_root)
    
    # Invalid syntax
    return []


def validate_task_target(target_str: str, kanban_root: Optional[Path] = None) -> Tuple[bool, Optional[str]]:
    """
    Validate task targeting syntax.
    
    Returns:
        (is_valid, error_message)
    """
    if kanban_root is None:
        kanban_root = Path("docs/project-management/kanban")
    
    target_str = target_str.strip()
    
    if not target_str:
        return False, "Empty target string"
    
    # Try parsing
    tasks = parse_task_target(target_str, kanban_root)
    
    if not tasks:
        return False, f"Invalid task target syntax: {target_str}"
    
    return True, None


if __name__ == '__main__':
    import sys
    
    if len(sys.argv) < 2:
        print("UKW Enhanced - Update Kanban Workflow with 3 Operational Modes")
        print()
        print("Usage:")
        print("  python ukw_enhanced.py [mode] [options]")
        print()
        print("Modes:")
        print("  moscow, m, -m    Update MoSCOW Prioritization Section")
        print("  task_analysis, t, -t    Task Inconsistency Analysis") 
        print("  deep_analysis, d, -d    Deep Analysis for Missing Kanban Docs")
        print()
        print("Examples:")
        print("  python ukw_enhanced.py moscow")
        print("  python ukw_enhanced.py -t")
        print("  python ukw_enhanced.py deep_analysis")
        sys.exit(1)
    
    mode_arg = sys.argv[1].lstrip('-')
    
    # Map command line args to mode names
    mode_map = {
        'moscow': 'moscow',
        'm': 'moscow', 
        'prioritization': 'moscow',
        'task_analysis': 'task_analysis',
        't': 'task_analysis',
        'consistency': 'task_analysis',
        'deep_analysis': 'deep_analysis', 
        'd': 'deep_analysis',
        'missing_docs': 'deep_analysis'
    }
    
    mode = mode_map.get(mode_arg.lower())
    if not mode:
        print(f"Unknown mode: {mode_arg}")
        sys.exit(1)
    
    print(f"Running UKW in {mode} mode...")
    result = run_ukw_mode(mode)
    
    if result.get('status') == 'success':
        print("✓ UKW execution completed successfully")
        print(f"Mode: {result['mode']}")
        
        # Print mode-specific results
        if mode == 'moscow':
            print(f"Completed tasks moved: {len(result.get('completed_tasks_moved', []))}")
            print(f"New tasks added: {len(result.get('new_tasks_added', []))}")
            print(f"Prioritization updates: {len(result.get('prioritization_updates', []))}")
            
        elif mode == 'task_analysis':
            print(f"Status mismatches found: {len(result.get('status_mismatches', []))}")
            print(f"Broken cross-references: {len(result.get('broken_cross_references', []))}")
            print(f"Repairs made: {len(result.get('repairs_made', []))}")
            
        elif mode == 'deep_analysis':
            print(f"Missing tasks identified: {len(result.get('missing_tasks_identified', []))}")
            print(f"CHANGELOG evidence found: {len(result.get('changelog_evidence_found', []))}")
            print(f"FR/BR/UXR gaps: {len(result.get('fr_br_uxr_gaps', []))}")
            print(f"Documents created: {len(result.get('documents_created', []))}")
            
    else:
        print("✗ UKW execution failed")
        for error in result.get('errors', []):
            print(f"  Error: {error}")
        sys.exit(1)

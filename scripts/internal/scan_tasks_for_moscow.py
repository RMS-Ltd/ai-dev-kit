#!/usr/bin/env python3
"""
Scan all task documents and extract metadata for MoSCOW prioritization.
Part of E6:S01:T34 - UKW MoSCOW Prioritization Missing implementation.
"""

import re
import yaml
from pathlib import Path
from typing import Dict, List, Optional, Tuple
from datetime import datetime

def load_rw_config() -> Optional[Dict]:
    """Load rw-config.yaml if it exists."""
    config_path = Path("rw-config.yaml")
    if not config_path.exists():
        return None
    
    try:
        with open(config_path, 'r', encoding='utf-8') as f:
            return yaml.safe_load(f)
    except Exception:
        return None

def extract_task_metadata(task_file: Path) -> Optional[Dict]:
    """Extract metadata from a task document."""
    if not task_file.exists():
        return None
    
    content = task_file.read_text()
    
    # Extract Task ID from filename or content
    task_id_match = re.search(r'E(\d+):S(\d+):T(\d+)', task_file.name)
    if not task_id_match:
        # Try to find in content
        task_id_match = re.search(r'E(\d+):S(\d+):T(\d+)', content)
    
    if not task_id_match:
        return None
    
    epic, story, task = map(int, task_id_match.groups())
    
    # Extract Status
    status_match = re.search(r'\*\*Status:\*\*\s*(.+?)(?:\n|$)', content)
    status = status_match.group(1).strip() if status_match else "UNKNOWN"
    
    # Filter for IN PROGRESS or TODO only
    if "IN PROGRESS" not in status and "TODO" not in status:
        return None
    
    # Extract Priority
    priority_match = re.search(r'\*\*Priority:\*\*\s*(.+?)(?:\n|$)', content)
    priority = priority_match.group(1).strip() if priority_match else "UNKNOWN"
    
    # Extract Last Updated
    last_updated_match = re.search(r'\*\*Last updated:\*\*\s*(.+?)(?:\n|$)', content)
    last_updated = last_updated_match.group(1).strip() if last_updated_match else ""
    
    # Extract Version
    version_match = re.search(r'\*\*Version:\*\*\s*(.+?)(?:\n|$)', content)
    version = version_match.group(1).strip() if version_match else ""
    
    # Extract Task Title (from first # heading)
    title_match = re.search(r'^#\s+(.+?)(?:\n|$)', content, re.MULTILINE)
    title = title_match.group(1).strip() if title_match else task_file.stem
    
    # Check for perpetual task
    is_perpetual = (
        "perpetual_task: true" in content or
        "Task Type: Perpetual Maintenance" in content or
        "Perpetual" in status
    )
    
    # Extract story/epic priority by reading parent documents
    story_priority = "UNKNOWN"
    epic_priority = "UNKNOWN"
    
    story_file = task_file.parent.parent / f"Story-{story:03d}-*.md"
    story_files = list(task_file.parent.parent.glob(f"Story-{story:03d}-*.md"))
    if not story_files:
        story_files = list(task_file.parent.parent.glob(f"Story-{story}-*.md"))
    
    if story_files:
        story_content = story_files[0].read_text()
        story_priority_match = re.search(r'\*\*Priority:\*\*\s*(.+?)(?:\n|$)', story_content)
        if story_priority_match:
            story_priority = story_priority_match.group(1).strip()
    
    epic_file = task_file.parent.parent.parent / f"Epic-{epic}.md"
    if epic_file.exists():
        epic_content = epic_file.read_text()
        epic_priority_match = re.search(r'\*\*Priority:\*\*\s*(.+?)(?:\n|$)', epic_content)
        if epic_priority_match:
            epic_priority = epic_priority_match.group(1).strip()
    
    return {
        'epic': epic,
        'story': story,
        'task': task,
        'task_id': f"E{epic}:S{story}:T{task}",
        'title': title,
        'status': status,
        'priority': priority,
        'story_priority': story_priority,
        'epic_priority': epic_priority,
        'last_updated': last_updated,
        'version': version,
        'is_perpetual': is_perpetual,
        'file_path': str(task_file),
    }

def classify_moscow(task: Dict) -> str:
    """Agentically classify task into MoSCOW category."""
    # Perpetual tasks always go to O
    if task['is_perpetual']:
        return 'O'
    
    # Extract priority levels
    task_priority = task['priority'].upper()
    story_priority = task['story_priority'].upper()
    epic_priority = task['epic_priority'].upper()
    
    # Must Have (M): Critical, blocking, HIGH priority with strategic importance
    if (
        task_priority in ['HIGH', 'CRITICAL'] or
        story_priority in ['HIGH', 'CRITICAL'] or
        epic_priority in ['HIGH', 'CRITICAL']
    ):
        # Check if it's blocking or critical
        title_lower = task['title'].lower()
        if any(keyword in title_lower for keyword in ['blocking', 'critical', 'must', 'required', 'fix', 'bug']):
            return 'M'
        # High priority tasks that are important but not necessarily blocking
        if task_priority == 'HIGH' or story_priority == 'HIGH' or epic_priority == 'HIGH':
            return 'S'
    
    # Should Have (S): Important but not critical
    if task_priority in ['HIGH', 'MEDIUM'] or story_priority in ['HIGH', 'MEDIUM']:
        return 'S'
    
    # Could Have (C): Nice to have, lower priority
    if task_priority in ['MEDIUM', 'LOW'] or story_priority in ['MEDIUM', 'LOW']:
        return 'C'
    
    # Default to C if unknown
    return 'C'

def scan_all_tasks(config: Optional[Dict] = None) -> List[Dict]:
    """Scan all task documents and extract metadata."""
    if config and config.get('use_kanban'):
        kanban_root = Path(config.get('kanban_root', 'docs/project-management/kanban'))
        task_pattern = config.get('task_doc_pattern', 'epics/Epic-{epic}/Story-{story}/T{task}-*.md')
    else:
        kanban_root = Path('docs/project-management/kanban')
        task_pattern = 'epics/Epic-{epic}/Story-{story}/T{task}-*.md'
    
    tasks = []
    
    # Find all task documents
    epic_dirs = kanban_root.glob('epics/Epic-*')
    for epic_dir in epic_dirs:
        story_dirs = epic_dir.glob('Story-*')
        for story_dir in story_dirs:
            if story_dir.is_dir():
                task_files = list(story_dir.glob('T*.md'))
                for task_file in task_files:
                    metadata = extract_task_metadata(task_file)
                    if metadata:
                        tasks.append(metadata)
    
    return tasks

def main():
    """Main function to scan tasks and output MoSCOW classification."""
    config = load_rw_config()
    tasks = scan_all_tasks(config)
    
    # Classify each task
    for task in tasks:
        task['moscow'] = classify_moscow(task)
    
    # Sort by last updated (most recent first) within each category
    def get_sort_key(task):
        # Extract date from last_updated if available
        last_updated = task.get('last_updated', '')
        date_match = re.search(r'(\d{4}-\d{2}-\d{2})', last_updated)
        if date_match:
            try:
                return datetime.strptime(date_match.group(1), '%Y-%m-%d')
            except:
                pass
        return datetime.min
    
    # Group by MoSCOW category
    moscow_groups = {'M': [], 'S': [], 'C': [], 'O': [], 'W': []}
    for task in tasks:
        moscow_groups[task['moscow']].append(task)
    
    # Sort each group
    for category in moscow_groups:
        moscow_groups[category].sort(key=get_sort_key, reverse=True)
    
    # Print results
    print("MoSCOW Classification Results:")
    print("=" * 80)
    for category in ['M', 'S', 'C', 'O', 'W']:
        print(f"\n{category} ({len(moscow_groups[category])} tasks):")
        for task in moscow_groups[category]:
            print(f"  {task['task_id']} - {task['title'][:60]}")
            print(f"    Priority: {task['priority']} | Status: {task['status']} | Last Updated: {task['last_updated']}")
    
    return moscow_groups

if __name__ == '__main__':
    main()

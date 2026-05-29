#!/usr/bin/env python3
"""
Documentation Review Workflow

Implements documentation review workflow processes based on review cadences.

Usage:
    python3 documentation-review-workflow.py [--cadence <cadence>] [--assign] [--track]
    python3 documentation-review-workflow.py --cadence weekly --assign
"""

import os
import sys
import json
import argparse
from pathlib import Path
from datetime import datetime, timedelta
from typing import Dict, List, Optional

# Review cadences
CADENCES = {
    'weekly': {
        'frequency': 'weekly',
        'days': 7,
        'documentation_types': ['critical'],
    },
    'monthly': {
        'frequency': 'monthly',
        'days': 30,
        'documentation_types': ['high_priority'],
    },
    'quarterly': {
        'frequency': 'quarterly',
        'days': 90,
        'documentation_types': ['standard'],
    },
    'annual': {
        'frequency': 'annual',
        'days': 365,
        'documentation_types': ['low_priority'],
    },
}

# Documentation type mapping
DOC_TYPE_MAPPING = {
    'critical': [
        'release-workflow',
        'versioning-policy',
        'framework-readme',
    ],
    'high_priority': [
        'framework-guide',
        'adr',
        'policy',
        'integration-guide',
    ],
    'standard': [
        'guide',
        'example',
        'tutorial',
    ],
    'low_priority': [
        'legacy',
        'deprecated',
        'archive',
    ],
}


def classify_documentation(file_path: Path) -> str:
    """Classify documentation by type."""
    rel_path = str(file_path)
    
    # Critical documentation
    if any(keyword in rel_path.lower() for keyword in ['release-workflow', 'rw', 'versioning-policy', 'framework-readme']):
        return 'critical'
    
    # High-priority documentation
    if any(keyword in rel_path.lower() for keyword in ['framework-guide', 'adr', 'policy', 'integration']):
        return 'high_priority'
    
    # Standard documentation
    if any(keyword in rel_path.lower() for keyword in ['guide', 'example', 'tutorial']):
        return 'standard'
    
    # Low-priority documentation
    if any(keyword in rel_path.lower() for keyword in ['legacy', 'deprecated', 'archive']):
        return 'low_priority'
    
    # Default to standard
    return 'standard'


def get_last_review_date(file_path: Path) -> Optional[datetime]:
    """Get last review date from file metadata or Git history."""
    # Check front-matter
    try:
        content = file_path.read_text(encoding='utf-8', errors='ignore')
        if 'last_reviewed' in content:
            # Try to extract from front-matter or content
            import re
            match = re.search(r'last_reviewed[:\s]+(\d{4}-\d{2}-\d{2})', content)
            if match:
                return datetime.strptime(match.group(1), '%Y-%m-%d')
    except Exception:
        pass
    
    # Check Git history (last commit date)
    try:
        import subprocess
        result = subprocess.run(
            ['git', 'log', '-1', '--format=%ai', '--', str(file_path)],
            capture_output=True,
            text=True,
            timeout=5
        )
        if result.returncode == 0 and result.stdout.strip():
            date_str = result.stdout.strip().split()[0]
            return datetime.strptime(date_str, '%Y-%m-%d')
    except Exception:
        pass
    
    return None


def needs_review(file_path: Path, cadence: str) -> bool:
    """Check if documentation needs review based on cadence."""
    doc_type = classify_documentation(file_path)
    cadence_config = CADENCES.get(cadence, {})
    
    # Check if this documentation type is in cadence scope
    if doc_type not in cadence_config.get('documentation_types', []):
        return False
    
    # Check last review date
    last_review = get_last_review_date(file_path)
    if not last_review:
        return True  # Never reviewed
    
    days_since_review = (datetime.now() - last_review).days
    days_threshold = cadence_config.get('days', 30)
    
    return days_since_review >= days_threshold


def assign_review(file_path: Path, owner: Optional[str] = None) -> Dict:
    """Assign review to owner."""
    doc_type = classify_documentation(file_path)
    
    # Determine owner based on documentation type
    if not owner:
        if 'epic' in str(file_path).lower():
            owner = 'epic_owner'
        elif 'framework' in str(file_path).lower():
            owner = 'framework_owner'
        else:
            owner = 'documentation_owner'
    
    return {
        'file': str(file_path),
        'type': doc_type,
        'owner': owner,
        'assigned_at': datetime.now().isoformat(),
        'due_date': (datetime.now() + timedelta(days=7)).isoformat(),
    }


def create_review_task(review_assignment: Dict) -> Dict:
    """Create Kanban task for review."""
    return {
        'type': 'task',
        'title': f"Review documentation: {Path(review_assignment['file']).name}",
        'description': f"Review documentation file: {review_assignment['file']}\nType: {review_assignment['type']}\nAssigned to: {review_assignment['owner']}",
        'status': 'todo',
        'priority': 'high' if review_assignment['type'] in ['critical', 'high_priority'] else 'medium',
        'assigned_to': review_assignment['owner'],
        'due_date': review_assignment['due_date'],
        'metadata': {
            'review_assignment': review_assignment,
            'created_at': datetime.now().isoformat(),
        },
    }


def track_review_status(file_path: Path) -> Dict:
    """Track review status for a file."""
    doc_type = classify_documentation(file_path)
    last_review = get_last_review_date(file_path)
    
    # Determine review cadence
    cadence_map = {
        'critical': 'weekly',
        'high_priority': 'monthly',
        'standard': 'quarterly',
        'low_priority': 'annual',
    }
    cadence = cadence_map.get(doc_type, 'quarterly')
    
    needs_review_flag = needs_review(file_path, cadence)
    
    return {
        'file': str(file_path),
        'type': doc_type,
        'cadence': cadence,
        'last_review': last_review.isoformat() if last_review else None,
        'needs_review': needs_review_flag,
        'status': 'needs_review' if needs_review_flag else 'current',
    }


def generate_review_schedule(doc_path: Path, cadence: str) -> Dict:
    """Generate review schedule for documentation."""
    # Find all markdown files
    if doc_path.is_file():
        files = [doc_path]
    elif doc_path.is_dir():
        files = list(doc_path.rglob('*.md'))
    else:
        return {'error': f'Path does not exist: {doc_path}'}
    
    schedule = {
        'cadence': cadence,
        'generated_at': datetime.now().isoformat(),
        'files_needing_review': [],
        'files_current': [],
        'assignments': [],
    }
    
    for file_path in files:
        if needs_review(file_path, cadence):
            review_status = track_review_status(file_path)
            schedule['files_needing_review'].append(review_status)
            
            # Assign review
            assignment = assign_review(file_path)
            schedule['assignments'].append(assignment)
        else:
            review_status = track_review_status(file_path)
            schedule['files_current'].append(review_status)
    
    return schedule


def main():
    """Main entry point."""
    parser = argparse.ArgumentParser(description='Documentation review workflow')
    parser.add_argument(
        '--cadence',
        type=str,
        choices=['weekly', 'monthly', 'quarterly', 'annual'],
        default='monthly',
        help='Review cadence (default: monthly)'
    )
    parser.add_argument(
        '--path',
        type=str,
        default='docs/',
        help='Path to documentation directory (default: docs/)'
    )
    parser.add_argument(
        '--assign',
        action='store_true',
        help='Assign reviews to owners'
    )
    parser.add_argument(
        '--track',
        action='store_true',
        help='Track review status'
    )
    parser.add_argument(
        '--output',
        type=str,
        help='Output JSON file path'
    )
    parser.add_argument(
        '--repo-root',
        type=str,
        default='.',
        help='Repository root directory (default: current directory)'
    )
    
    args = parser.parse_args()
    
    repo_root = Path(args.repo_root).resolve()
    doc_path = Path(args.path)
    
    if not doc_path.is_absolute():
        doc_path = repo_root / doc_path
    
    # Generate review schedule
    schedule = generate_review_schedule(doc_path, args.cadence)
    
    # Create review tasks if assigning
    if args.assign:
        schedule['tasks'] = []
        for assignment in schedule['assignments']:
            task = create_review_task(assignment)
            schedule['tasks'].append(task)
    
    # Output results
    if args.output:
        with open(args.output, 'w') as f:
            json.dump(schedule, f, indent=2)
        print(f"Review schedule written to {args.output}")
    else:
        print(json.dumps(schedule, indent=2))
    
    # Exit with error code if reviews needed
    if len(schedule.get('files_needing_review', [])) > 0:
        print(f"\n⚠️  {len(schedule['files_needing_review'])} files need review", file=sys.stderr)
        if not args.assign:
            sys.exit(1)


if __name__ == '__main__':
    main()


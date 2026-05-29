#!/usr/bin/env python3
"""
Documentation Consistency Validator

Validates consistency across related documentation files.

Usage:
    python3 validate-documentation-consistency.py [--path <path>] [--check <check_type>]
    python3 validate-documentation-consistency.py --path docs/ --check version
"""

import os
import sys
import re
import json
import argparse
from pathlib import Path
from typing import Dict, List, Set, Optional
from collections import defaultdict

# TODO(E7:S01:T09): add multi-line MoSCOW spacing detection for Kanban docs once rule is automated.
# Version pattern
VERSION_PATTERN = re.compile(r'v?(\d+\.\d+\.\d+(?:\+\d+)?)')

# Front-matter pattern
FRONT_MATTER_PATTERN = re.compile(r'^---\s*\n(.*?)\n---\s*\n', re.DOTALL | re.MULTILINE)


def extract_front_matter(content: str) -> Dict:
    """Extract front-matter from markdown content."""
    match = FRONT_MATTER_PATTERN.match(content)
    if not match:
        return {}
    
    front_matter = {}
    for line in match.group(1).split('\n'):
        if ':' in line:
            key, value = line.split(':', 1)
            key = key.strip()
            value = value.strip().strip('"').strip("'")
            front_matter[key] = value
    
    return front_matter


def extract_version(content: str) -> Optional[str]:
    """Extract version from content."""
    # Check front-matter
    front_matter = extract_front_matter(content)
    if 'version' in front_matter:
        return front_matter['version']
    
    # Check for version in text
    match = VERSION_PATTERN.search(content)
    if match:
        return match.group(1)
    
    return None


def extract_references(content: str) -> List[str]:
    """Extract file references from content."""
    references = []
    
    # Markdown links
    link_pattern = re.compile(r'\[([^\]]+)\]\(([^\)]+)\)')
    for match in link_pattern.finditer(content):
        link_url = match.group(2)
        # Internal links only
        if not link_url.startswith(('http://', 'https://', 'ftp://', 'mailto:')):
            references.append(link_url)
    
    return references


def check_version_consistency(files: List[Path], repo_root: Path) -> Dict:
    """Check version consistency across related files."""
    results = {
        'check': 'version_consistency',
        'files': {},
        'inconsistencies': [],
    }
    
    # Group files by epic/story
    epic_files = defaultdict(list)
    story_files = defaultdict(list)
    
    for file_path in files:
        if not file_path.exists():
            continue
        
        content = file_path.read_text(encoding='utf-8', errors='ignore')
        version = extract_version(content)
        
        rel_path = str(file_path.relative_to(repo_root))
        results['files'][rel_path] = {'version': version}
        
        # Group by epic/story
        if 'Epic-' in rel_path:
            epic_match = re.search(r'Epic-(\d+)', rel_path)
            if epic_match:
                epic_num = epic_match.group(1)
                epic_files[epic_num].append((rel_path, version))
        
        if 'Story-' in rel_path:
            story_match = re.search(r'Story-(\d+)', rel_path)
            if story_match:
                story_num = story_match.group(1)
                story_files[story_num].append((rel_path, version))
    
    # Check epic consistency
    for epic_num, files in epic_files.items():
        versions = [v for _, v in files if v]
        if len(set(versions)) > 1:
            results['inconsistencies'].append({
                'type': 'epic_version_mismatch',
                'epic': epic_num,
                'files': [f for f, _ in files],
                'versions': list(set(versions)),
            })
    
    # Check story consistency
    for story_num, files in story_files.items():
        versions = [v for _, v in files if v]
        if len(set(versions)) > 1:
            results['inconsistencies'].append({
                'type': 'story_version_mismatch',
                'story': story_num,
                'files': [f for f, _ in files],
                'versions': list(set(versions)),
            })
    
    return results


def check_cross_reference_consistency(files: List[Path], repo_root: Path) -> Dict:
    """Check cross-reference consistency."""
    results = {
        'check': 'cross_reference_consistency',
        'files': {},
        'inconsistencies': [],
    }
    
    # Build reference map
    file_references = {}
    for file_path in files:
        if not file_path.exists():
            continue
        
        content = file_path.read_text(encoding='utf-8', errors='ignore')
        references = extract_references(content)
        
        rel_path = str(file_path.relative_to(repo_root))
        file_references[rel_path] = references
        results['files'][rel_path] = {'references': references}
    
    # Check for broken references
    for file_path, references in file_references.items():
        for ref in references:
            # Resolve reference
            ref_path = resolve_reference(ref, Path(file_path), repo_root)

            if not ref_path:
                continue

            # Only flag as broken if the resolved target does NOT exist on disk
            if not ref_path.exists():
                results['inconsistencies'].append({
                    'type': 'broken_reference',
                    'file': file_path,
                    'reference': ref,
                    'resolved_path': str(ref_path),
                })
    
    return results


def resolve_reference(ref: str, source_file: Path, repo_root: Path) -> Optional[Path]:
    """Resolve a reference to a file path."""
    # Remove anchor
    ref_path = ref.split('#')[0]
    
    if not ref_path:
        return None
    
    # Relative path
    if ref_path.startswith('./') or ref_path.startswith('../'):
        return (source_file.parent / ref_path).resolve()
    
    # Absolute from repo root
    if ref_path.startswith('/'):
        return repo_root / ref_path.lstrip('/')
    
    # Try relative to source file
    return (source_file.parent / ref_path).resolve()


def check_terminology_consistency(files: List[Path], repo_root: Path) -> Dict:
    """Check terminology consistency."""
    results = {
        'check': 'terminology_consistency',
        'files': {},
        'inconsistencies': [],
    }
    
    # Common terminology patterns
    terminology_patterns = {
        'Release Workflow': [r'Release Workflow', r'RW'],
        'Epic': [r'Epic'],
        'Story': [r'Story'],
        'Task': [r'Task'],
    }
    
    # Check each file
    for file_path in files:
        if not file_path.exists():
            continue
        
        content = file_path.read_text(encoding='utf-8', errors='ignore')
        rel_path = str(file_path.relative_to(repo_root))
        
        # Check terminology usage
        for term, patterns in terminology_patterns.items():
            found_patterns = []
            for pattern in patterns:
                if re.search(pattern, content, re.IGNORECASE):
                    found_patterns.append(pattern)
            
            if len(found_patterns) > 1:
                # Allow Release Workflow + RW to co-exist (canonical + abbreviation)
                if not (term == 'Release Workflow' and set(found_patterns) == set(terminology_patterns[term])):
                    results['inconsistencies'].append({
                        'type': 'terminology_inconsistency',
                        'file': rel_path,
                        'term': term,
                        'patterns_found': found_patterns,
                    })
    
    return results


def validate_consistency(doc_path: Path, repo_root: Path, check_types: List[str]) -> Dict:
    """Validate documentation consistency."""
    # Find all markdown files
    if doc_path.is_file():
        files = [doc_path]
    elif doc_path.is_dir():
        files = list(doc_path.rglob('*.md'))
    else:
        return {'error': f'Path does not exist: {doc_path}'}
    
    results = {
        'path': str(doc_path.relative_to(repo_root)),
        'checks': [],
        'summary': {
            'total_files': len(files),
            'total_inconsistencies': 0,
        }
    }
    
    # Run checks
    if 'version' in check_types or 'all' in check_types:
        version_results = check_version_consistency(files, repo_root)
        results['checks'].append(version_results)
        results['summary']['total_inconsistencies'] += len(version_results['inconsistencies'])
    
    if 'cross_reference' in check_types or 'all' in check_types:
        ref_results = check_cross_reference_consistency(files, repo_root)
        results['checks'].append(ref_results)
        results['summary']['total_inconsistencies'] += len(ref_results['inconsistencies'])
    
    if 'terminology' in check_types or 'all' in check_types:
        term_results = check_terminology_consistency(files, repo_root)
        results['checks'].append(term_results)
        results['summary']['total_inconsistencies'] += len(term_results['inconsistencies'])
    
    return results


def main():
    """Main entry point."""
    parser = argparse.ArgumentParser(description='Validate documentation consistency')
    parser.add_argument(
        '--path',
        type=str,
        default='docs/',
        help='Path to documentation directory or file (default: docs/)'
    )
    parser.add_argument(
        '--check',
        type=str,
        nargs='+',
        default=['all'],
        choices=['version', 'cross_reference', 'terminology', 'all'],
        help='Type of consistency check to perform (default: all)'
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
    
    # Validate consistency
    results = validate_consistency(doc_path, repo_root, args.check)
    
    # Output results
    if args.output:
        with open(args.output, 'w') as f:
            json.dump(results, f, indent=2)
        print(f"Results written to {args.output}")
    else:
        print(json.dumps(results, indent=2))
    
    # Exit with error code if inconsistencies found
    if results.get('summary', {}).get('total_inconsistencies', 0) > 0:
        print(f"\n⚠️  Found {results['summary']['total_inconsistencies']} inconsistencies", file=sys.stderr)
        sys.exit(1)


if __name__ == '__main__':
    main()


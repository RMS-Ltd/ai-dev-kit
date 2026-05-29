#!/usr/bin/env python3
"""
Documentation Link Validator

Validates all internal and external links in documentation files.

Usage:
    python3 validate-documentation-links.py [--path <path>] [--external] [--fix]
    python3 validate-documentation-links.py --path docs/
    python3 validate-documentation-links.py --external
"""

import os
import sys
import re
import json
import argparse
from pathlib import Path
from typing import Dict, List, Tuple, Optional
from urllib.parse import urlparse
import subprocess

# Link patterns
MARKDOWN_LINK_PATTERN = re.compile(r'\[([^\]]+)\]\(([^\)]+)\)')
REFERENCE_LINK_PATTERN = re.compile(r'\[([^\]]+)\]:\s*(.+)')

# Internal link patterns
INTERNAL_LINK_PATTERNS = [
    r'\.\.?/[^\)]+',  # Relative paths
    r'[^/]+\.md',     # Markdown files
    r'[^/]+\.md#[^\)]+',  # Markdown files with anchors
]

# External link patterns
EXTERNAL_LINK_PATTERNS = [
    r'https?://[^\)]+',  # HTTP/HTTPS URLs
    r'ftp://[^\)]+',     # FTP URLs
    r'mailto:[^\)]+',    # Email links
]


def is_internal_link(link: str, doc_path: Path, repo_root: Path) -> bool:
    """Check if link is internal (relative path or markdown file)."""
    # External URLs
    if link.startswith(('http://', 'https://', 'ftp://', 'mailto:')):
        return False
    
    # Absolute paths (internal)
    if link.startswith('/'):
        return True
    
    # Relative paths (internal)
    if link.startswith('./') or link.startswith('../'):
        return True
    
    # Markdown files (internal)
    if link.endswith('.md') or link.endswith('.md#'):
        return True
    
    # Anchor-only links (internal)
    if link.startswith('#'):
        return True
    
    return False


def resolve_internal_link(link: str, doc_path: Path, repo_root: Path) -> Optional[Path]:
    """Resolve internal link to file path."""
    # Remove anchor
    link_path = link.split('#')[0]
    
    # Skip empty links
    if not link_path:
        return None
    
    # Absolute path from repo root
    if link_path.startswith('/'):
        return repo_root / link_path.lstrip('/')
    
    # Relative path
    if link_path.startswith('./') or link_path.startswith('../'):
        return (doc_path.parent / link_path).resolve()
    
    # Markdown file in same directory
    if link_path.endswith('.md'):
        return (doc_path.parent / link_path).resolve()
    
    # Try as relative path
    return (doc_path.parent / link_path).resolve()


def check_link_exists(link_path: Path) -> bool:
    """Check if link target exists."""
    if link_path.exists():
        return True
    
    # Check if it's a directory (for links without .md extension)
    if link_path.is_dir():
        return True
    
    return False


def check_external_link(url: str) -> Tuple[bool, Optional[str]]:
    """Check if external link is accessible."""
    try:
        import urllib.request
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, timeout=5) as response:
            return (response.status == 200, None)
    except Exception as e:
        return (False, str(e))


def find_links_in_file(file_path: Path) -> List[Dict]:
    """Find all links in a markdown file."""
    links = []
    
    if not file_path.exists():
        return links
    
    content = file_path.read_text(encoding='utf-8', errors='ignore')
    
    # Find markdown links [text](url)
    for match in MARKDOWN_LINK_PATTERN.finditer(content):
        link_text = match.group(1)
        link_url = match.group(2)
        line_num = content[:match.start()].count('\n') + 1
        
        links.append({
            'type': 'markdown',
            'text': link_text,
            'url': link_url,
            'line': line_num,
        })
    
    # Find reference links [text]: url
    for match in REFERENCE_LINK_PATTERN.finditer(content):
        link_text = match.group(1)
        link_url = match.group(2).strip()
        line_num = content[:match.start()].count('\n') + 1
        
        links.append({
            'type': 'reference',
            'text': link_text,
            'url': link_url,
            'line': line_num,
        })
    
    return links


def validate_documentation_links(doc_path: Path, repo_root: Path, check_external: bool = False) -> Dict:
    """Validate links in a documentation file."""
    results = {
        'file': str(doc_path.relative_to(repo_root)),
        'links': [],
        'broken_internal': [],
        'broken_external': [],
        'total_links': 0,
        'valid_links': 0,
        'broken_links': 0,
    }
    
    links = find_links_in_file(doc_path)
    results['total_links'] = len(links)
    
    for link in links:
        link_url = link['url']
        is_internal = is_internal_link(link_url, doc_path, repo_root)
        
        if is_internal:
            # Resolve internal link
            target_path = resolve_internal_link(link_url, doc_path, repo_root)
            
            if target_path and check_link_exists(target_path):
                results['valid_links'] += 1
                results['links'].append({
                    'type': 'internal',
                    'url': link_url,
                    'line': link['line'],
                    'status': 'valid',
                    'target': str(target_path.relative_to(repo_root)),
                })
            else:
                results['broken_links'] += 1
                results['broken_internal'].append({
                    'url': link_url,
                    'line': link['line'],
                    'text': link['text'],
                    'target': str(target_path) if target_path else 'unresolved',
                })
                results['links'].append({
                    'type': 'internal',
                    'url': link_url,
                    'line': link['line'],
                    'status': 'broken',
                    'target': str(target_path) if target_path else 'unresolved',
                })
        else:
            # External link
            if check_external:
                is_valid, error = check_external_link(link_url)
                if is_valid:
                    results['valid_links'] += 1
                    results['links'].append({
                        'type': 'external',
                        'url': link_url,
                        'line': link['line'],
                        'status': 'valid',
                    })
                else:
                    results['broken_links'] += 1
                    results['broken_external'].append({
                        'url': link_url,
                        'line': link['line'],
                        'text': link['text'],
                        'error': error,
                    })
                    results['links'].append({
                        'type': 'external',
                        'url': link_url,
                        'line': link['line'],
                        'status': 'broken',
                        'error': error,
                    })
            else:
                # Skip external link validation
                results['links'].append({
                    'type': 'external',
                    'url': link_url,
                    'line': link['line'],
                    'status': 'skipped',
                })
    
    return results


def validate_all_documentation(repo_root: Path, doc_paths: List[Path], check_external: bool = False) -> Dict:
    """Validate links in all documentation files."""
    all_results = {
        'files': [],
        'summary': {
            'total_files': 0,
            'total_links': 0,
            'valid_links': 0,
            'broken_links': 0,
            'broken_internal': 0,
            'broken_external': 0,
        }
    }
    
    for doc_path in doc_paths:
        if not doc_path.exists():
            continue
        
        if doc_path.is_file() and doc_path.suffix == '.md':
            result = validate_documentation_links(doc_path, repo_root, check_external)
            all_results['files'].append(result)
            all_results['summary']['total_files'] += 1
            all_results['summary']['total_links'] += result['total_links']
            all_results['summary']['valid_links'] += result['valid_links']
            all_results['summary']['broken_links'] += result['broken_links']
            all_results['summary']['broken_internal'] += len(result['broken_internal'])
            all_results['summary']['broken_external'] += len(result['broken_external'])
        elif doc_path.is_dir():
            # Recursively process directory
            for md_file in doc_path.rglob('*.md'):
                result = validate_documentation_links(md_file, repo_root, check_external)
                all_results['files'].append(result)
                all_results['summary']['total_files'] += 1
                all_results['summary']['total_links'] += result['total_links']
                all_results['summary']['valid_links'] += result['valid_links']
                all_results['summary']['broken_links'] += result['broken_links']
                all_results['summary']['broken_internal'] += len(result['broken_internal'])
                all_results['summary']['broken_external'] += len(result['broken_external'])
    
    return all_results


def main():
    """Main entry point."""
    parser = argparse.ArgumentParser(description='Validate documentation links')
    parser.add_argument(
        '--path',
        type=str,
        default='docs/',
        help='Path to documentation directory or file (default: docs/)'
    )
    parser.add_argument(
        '--external',
        action='store_true',
        help='Check external links (slower)'
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
    
    # Find all markdown files
    if doc_path.is_file():
        doc_paths = [doc_path]
    elif doc_path.is_dir():
        doc_paths = list(doc_path.rglob('*.md'))
    else:
        print(f"Error: Path does not exist: {doc_path}", file=sys.stderr)
        sys.exit(1)
    
    # Validate links
    results = validate_all_documentation(repo_root, doc_paths, check_external=args.external)
    
    # Output results
    if args.output:
        with open(args.output, 'w') as f:
            json.dump(results, f, indent=2)
        print(f"Results written to {args.output}")
    else:
        print(json.dumps(results, indent=2))
    
    # Exit with error code if broken links found
    if results['summary']['broken_links'] > 0:
        print(f"\n⚠️  Found {results['summary']['broken_links']} broken links", file=sys.stderr)
        sys.exit(1)


if __name__ == '__main__':
    main()


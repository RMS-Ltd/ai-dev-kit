#!/usr/bin/env python3
"""
Update Version References in Documentation

Automatically updates version references across documentation files when version changes.

Part of: Epic 5, Story 3 - Documentation Automation
Task: E5:S03:T01 - Create automated documentation update scripts

Usage:
    python update_version_references.py [--version-file PATH] [--dry-run] [--config PATH]
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


def load_rw_config(config_path: Optional[Path] = None) -> Optional[Dict]:
    """Load rw-config.yaml if it exists."""
    if config_path is None:
        config_path = Path.cwd() / "rw-config.yaml"
    
    if not config_path.exists() or yaml is None:
        return None
    
    try:
        with open(config_path, 'r', encoding='utf-8') as f:
            return yaml.safe_load(f)
    except Exception:
        return None


def get_version_file_path(config: Optional[Dict] = None) -> Path:
    """Get version file path from config or use default."""
    if config and 'version_file' in config:
        return Path(config['version_file'])
    return Path("src/fynd_deals/version.py")


def get_version_components(version_file: Path) -> Optional[Tuple[int, int, int, int, int]]:
    """Extract version components from version file."""
    if not version_file.exists():
        return None
    
    content = version_file.read_text()
    
    rc_match = re.search(r'VERSION_RC\s*=\s*(\d+)', content)
    epic_match = re.search(r'VERSION_EPIC\s*=\s*(\d+)', content)
    story_match = re.search(r'VERSION_STORY\s*=\s*(\d+)', content)
    task_match = re.search(r'VERSION_TASK\s*=\s*(\d+)', content)
    build_match = re.search(r'VERSION_BUILD\s*=\s*(\d+)', content)
    
    if all([rc_match, epic_match, story_match, task_match, build_match]):
        return (
            int(rc_match.group(1)),
            int(epic_match.group(1)),
            int(story_match.group(1)),
            int(task_match.group(1)),
            int(build_match.group(1))
        )
    return None


def find_version_references(content: str, current_version: str) -> List[Tuple[int, str, str]]:
    """
    Find all version references in content.
    
    Returns:
        List of (line_number, old_version_string, match_text) tuples
    """
    references = []
    version_patterns = [
        (r'\*\*Version:\*\*\s*`?v?([\d\.]+\+?\d*)`?', 'Version field'),
        (r'version[:\s]+`?v?([\d\.]+\+?\d*)`?', 'Version text'),
        (r'v([\d\.]+\+?\d*)', 'Version string'),
    ]
    
    lines = content.split('\n')
    for line_num, line in enumerate(lines, 1):
        for pattern, description in version_patterns:
            matches = re.finditer(pattern, line, re.IGNORECASE)
            for match in matches:
                found_version = match.group(1)
                if found_version != current_version:
                    references.append((line_num, found_version, match.group(0)))
    
    return references


def update_version_references(
    file_path: Path,
    old_version: str,
    new_version: str,
    dry_run: bool = False
) -> Tuple[bool, List[str]]:
    """
    Update version references in a file.
    
    Returns:
        (success, list_of_changes)
    """
    if not file_path.exists():
        return False, [f"File not found: {file_path}"]
    
    content = file_path.read_text(encoding='utf-8')
    changes = []
    
    # Update version patterns
    patterns = [
        (r'(\*\*Version:\*\*\s*`?)v?([\d\.]+\+?\d*)(`?)', r'\1' + new_version + r'\3'),
        (r'(version[:\s]+`?)v?([\d\.]+\+?\d*)(`?)', r'\1' + new_version + r'\3'),
        (r'\bv([\d\.]+\+?\d*)\b', 'v' + new_version),
    ]
    
    original_content = content
    for pattern, replacement in patterns:
        if isinstance(replacement, str) and 'v' + new_version in replacement:
            # Direct replacement
            content = re.sub(pattern, replacement, content, flags=re.IGNORECASE)
        else:
            # Pattern-based replacement
            def replacer(match):
                return match.group(1) + new_version + (match.group(3) if len(match.groups()) > 2 else '')
            content = re.sub(pattern, replacer, content, flags=re.IGNORECASE)
    
    if content != original_content:
        changes.append(f"Updated version references: {old_version} → {new_version}")
        if not dry_run:
            file_path.write_text(content, encoding='utf-8')
    
    return True, changes


def get_documentation_files(project_root: Path, config: Optional[Dict] = None) -> List[Path]:
    """Get list of documentation files to check."""
    doc_files = []
    
    # Common documentation directories
    doc_dirs = [
        project_root / "docs",
        project_root / "README.md",
    ]
    
    if config and 'readme_file' in config:
        doc_dirs.append(project_root / config['readme_file'])
    
    for doc_dir in doc_dirs:
        if doc_dir.is_file():
            doc_files.append(doc_dir)
        elif doc_dir.is_dir():
            doc_files.extend(doc_dir.rglob("*.md"))
    
    return doc_files


def main():
    parser = argparse.ArgumentParser(description="Update version references in documentation")
    parser.add_argument(
        "--version-file",
        type=Path,
        help="Path to version file (auto-detected if not provided)",
    )
    parser.add_argument(
        "--config",
        type=Path,
        help="Path to rw-config.yaml (auto-detected if not provided)",
    )
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="Show what would be updated without making changes",
    )
    parser.add_argument(
        "--files",
        nargs="+",
        type=Path,
        help="Specific files to update (default: all documentation files)",
    )
    args = parser.parse_args()
    
    # Load config
    config = load_rw_config(args.config)
    
    # Get version
    version_file = args.version_file or get_version_file_path(config)
    if not version_file.exists():
        print(f"❌ Version file not found: {version_file}", file=sys.stderr)
        return 1
    
    version_components = get_version_components(version_file)
    if not version_components:
        print(f"❌ Could not extract version components from {version_file}", file=sys.stderr)
        return 1
    
    rc, epic, story, task, build = version_components
    new_version = f"{rc}.{epic}.{story}.{task}+{build}"
    new_version_string = f"v{new_version}"
    
    print(f"🔍 Updating version references to {new_version_string}")
    
    # Get files to update
    if args.files:
        files_to_update = args.files
    else:
        project_root = Path.cwd()
        files_to_update = get_documentation_files(project_root, config)
    
    updated_count = 0
    total_changes = 0
    
    for file_path in files_to_update:
        if not file_path.exists():
            continue
        
        try:
            content = file_path.read_text(encoding='utf-8')
            references = find_version_references(content, new_version)
            
            if references:
                # Find old version (most common one)
                old_versions = {}
                for _, old_ver, _ in references:
                    old_versions[old_ver] = old_versions.get(old_ver, 0) + 1
                
                if old_versions:
                    old_version = max(old_versions.items(), key=lambda x: x[1])[0]
                    success, changes = update_version_references(
                        file_path,
                        old_version,
                        new_version,
                        args.dry_run
                    )
                    
                    if success and changes:
                        updated_count += 1
                        total_changes += len(changes)
                        print(f"  ✅ {file_path}: {', '.join(changes)}")
        except Exception as e:
            print(f"  ⚠️  {file_path}: Error - {e}", file=sys.stderr)
    
    if args.dry_run:
        print(f"\n🔍 DRY RUN: Would update {updated_count} file(s) with {total_changes} change(s)")
    else:
        print(f"\n✅ Updated {updated_count} file(s) with {total_changes} change(s)")
    
    return 0


if __name__ == "__main__":
    sys.exit(main())


#!/usr/bin/env python3
"""
Migration utility for Task-Touch SemVer Mapping (ADR-002)

This utility helps existing projects migrate from registry-based SemVer mapping
to task-touch derived mapping by analyzing git history and initializing counters.
"""

import subprocess
import re
import yaml
from pathlib import Path
from typing import List, Tuple, Dict, Any
import sys

# Add the script directory to the path so we can import the converter
script_dir = Path(__file__).parent
sys.path.insert(0, str(script_dir))

from semver_converter import (
    load_semver_registry,
    save_semver_registry,
    set_epic_count,
    get_task_touch_counter
)


def get_git_tags() -> List[Tuple[str, str]]:
    """
    Get all internal version tags from git history.
    
    Returns:
        List of (tag_name, commit_hash) tuples sorted by commit date
    """
    try:
        # Get all internal version tags with commit dates
        result = subprocess.run(
            ['git', 'tag', '--sort=creatordate', '-l', 'v*.*.*.*+*'],
            capture_output=True,
            text=True,
            check=True
        )
        
        tags = result.stdout.strip().split('\n')
        tags = [tag for tag in tags if tag]  # Remove empty strings
        
        # Filter for internal version tags (format: vRC.EPIC.STORY.TASK+BUILD)
        internal_tags = []
        for tag in tags:
            # Remove 'v' prefix and check if it matches internal version pattern
            version = tag[1:]  # Remove 'v'
            if re.match(r'^\d+\.\d+\.\d+\.\d+\+\d+$', version):
                # Get commit hash for this tag
                commit_result = subprocess.run(
                    ['git', 'rev-list', '-n', '1', tag],
                    capture_output=True,
                    text=True,
                    check=True
                )
                commit_hash = commit_result.stdout.strip()
                internal_tags.append((tag, commit_hash))
        
        return internal_tags
    
    except subprocess.CalledProcessError as e:
        print(f"❌ Error getting git tags: {e}")
        return []


def parse_internal_version(tag: str) -> Tuple[int, int, int, int, int]:
    """
    Parse internal version tag into components.
    
    Args:
        tag: Tag like "v0.6.7.101+5"
    
    Returns:
        (rc, epic, story, task, build) tuple
    """
    # Remove 'v' prefix
    version = tag[1:]
    
    # Split on '+'
    version_part, build_part = version.split('+')
    build = int(build_part)
    
    # Split version part
    rc, epic, story, task = map(int, version_part.split('.'))
    
    return (rc, epic, story, task, build)


def analyze_epic_history(tags: List[Tuple[str, str]]) -> Dict[int, int]:
    """
    Analyze tag history to determine epic count per RC.
    
    Args:
        tags: List of (tag_name, commit_hash) tuples
    
    Returns:
        Dictionary mapping RC to epic count
    """
    epics_per_rc = {}
    
    for tag, _ in tags:
        rc, epic, story, task, build = parse_internal_version(tag)
        
        if rc not in epics_per_rc:
            epics_per_rc[rc] = set()
        
        epics_per_rc[rc].add(epic)
    
    # Convert sets to counts
    return {rc: len(epics) for rc, epics in epics_per_rc.items()}


def initialize_task_touch_counters(tags: List[Tuple[str, str]]) -> Dict[int, int]:
    """
    Initialize task-touch counters based on existing tag history.
    
    Args:
        tags: List of (tag_name, commit_hash) tuples
    
    Returns:
        Dictionary mapping RC to task-touch counter value
    """
    counters_per_rc = {}
    
    for tag, _ in tags:
        rc, epic, story, task, build = parse_internal_version(tag)
        
        if rc not in counters_per_rc:
            counters_per_rc[rc] = 0
        
        counters_per_rc[rc] += 1
    
    return counters_per_rc


def backup_registry():
    """Create a backup of the current semver registry."""
    registry_file = Path(__file__).parent.parent.parent.parent.parent / "semver-registry.yaml"
    backup_file = registry_file.with_suffix('.yaml.backup')
    
    if registry_file.exists():
        import shutil
        shutil.copy2(registry_file, backup_file)
        print(f"✅ Backed up registry to {backup_file}")
    else:
        print("⚠️  No existing registry file to backup")


def migrate_to_task_touch(dry_run: bool = True):
    """
    Migrate from registry-based to task-touch SemVer mapping.
    
    Args:
        dry_run: If True, only show what would be done without making changes
    """
    print("🔄 Starting migration to Task-Touch SemVer Mapping...")
    print()
    
    # Get git tag history
    print("📊 Analyzing git tag history...")
    tags = get_git_tags()
    
    if not tags:
        print("❌ No internal version tags found. Cannot migrate automatically.")
        return False
    
    print(f"Found {len(tags)} internal version tags")
    
    # Analyze epic history
    epic_counts = analyze_epic_history(tags)
    print(f"Epics per RC: {epic_counts}")
    
    # Calculate task-touch counters
    task_counters = initialize_task_touch_counters(tags)
    print(f"Task touches per RC: {task_counters}")
    
    print()
    
    if dry_run:
        print("🔍 DRY RUN - No changes will be made")
        print()
        print("To apply migration, run with --apply")
        return True
    
    # Backup existing registry
    backup_registry()
    
    # Load current registry
    registry = load_semver_registry()
    
    # Update registry with task-touch mode data
    for rc, epic_count in epic_counts.items():
        rc_key = f"rc_{rc}"
        
        if rc_key not in registry:
            registry[rc_key] = {"epic_to_minor": {}, "story_to_patch": {}}
        
        if "task_touch_mode" not in registry[rc_key]:
            registry[rc_key]["task_touch_mode"] = {}
        
        registry[rc_key]["task_touch_mode"]["epic_count"] = epic_count
        registry[rc_key]["task_touch_mode"]["task_touch_counter"] = task_counters.get(rc, 0)
        registry[rc_key]["task_touch_mode"]["mapping_history"] = []
    
    # Save updated registry
    save_semver_registry(registry)
    
    print("✅ Migration completed successfully!")
    print()
    print("Next steps:")
    print("1. Update rw-config.yaml: semver_mapping_strategy: task_touch")
    print("2. Test the migration with a few sample conversions")
    print("3. Verify no collisions in your test environment")
    
    return True


def validate_migration():
    """
    Validate that task-touch mapping produces no collisions for existing tags.
    """
    print("🔍 Validating migration (checking for collisions)...")
    
    # Get git tag history
    tags = get_git_tags()
    
    if not tags:
        print("❌ No internal version tags found to validate")
        return False
    
    # Test conversions with task-touch mode
    semver_results = {}
    collisions = []
    
    for tag, _ in tags:
        rc, epic, story, task, build = parse_internal_version(tag)
        
        # Convert using task-touch mode
        from semver_converter import convert_internal_to_semver_task_touch
        major, minor, patch, build_semver = convert_internal_to_semver_task_touch(rc, epic, story, task, build)
        semver = f"{major}.{minor}.{patch}+{build_semver}"
        
        if semver in semver_results:
            collisions.append({
                'semver': semver,
                'tag1': semver_results[semver],
                'tag2': tag
            })
        else:
            semver_results[semver] = tag
    
    if collisions:
        print("❌ Collisions detected:")
        for collision in collisions:
            print(f"  {collision['semver']}: {collision['tag1']} vs {collision['tag2']}")
        return False
    else:
        print(f"✅ No collisions found in {len(tags)} tags")
        return True


def main():
    """Main entry point."""
    import argparse
    
    parser = argparse.ArgumentParser(description="Migrate to Task-Touch SemVer Mapping")
    parser.add_argument("--apply", action="store_true", help="Apply migration (default: dry run)")
    parser.add_argument("--validate", action="store_true", help="Validate migration for collisions")
    
    args = parser.parse_args()
    
    if args.validate:
        success = validate_migration()
        sys.exit(0 if success else 1)
    else:
        success = migrate_to_task_touch(dry_run=not args.apply)
        sys.exit(0 if success else 1)


if __name__ == "__main__":
    main()

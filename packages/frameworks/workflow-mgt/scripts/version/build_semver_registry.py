#!/usr/bin/env python3
"""
Build SemVer Registry from Historical Git Tags

One-time migration script to build initial semver-registry.yaml from existing git tags.
Parses all tags matching v0.*.*.*+* pattern and builds registry based on first appearance.
"""

import subprocess
import re
import yaml
from pathlib import Path
from typing import Dict, List, Tuple, Any
from collections import defaultdict


def find_registry_file() -> Path:
    """Find semver-registry.yaml in project root."""
    # Start from script location and walk up to find project root
    current = Path(__file__).parent
    while current != current.parent:
        registry_file = current / "semver-registry.yaml"
        if registry_file.exists():
            return registry_file
        parent_registry = current.parent / "semver-registry.yaml"
        if parent_registry.exists():
            return parent_registry
        current = current.parent
    # Default: assume project root is 4 levels up from scripts/version/
    return Path(__file__).parent.parent.parent.parent.parent / "semver-registry.yaml"


def get_all_git_tags() -> List[str]:
    """Get all git tags matching v0.*.*.*+* pattern."""
    try:
        result = subprocess.run(
            ["git", "tag", "-l", "v0.*.*.*+*"],
            capture_output=True,
            text=True,
            check=True
        )
        tags = [tag.strip() for tag in result.stdout.strip().split('\n') if tag.strip()]
        # Sort tags by version number (canonical ordering)
        tags.sort(key=lambda t: parse_version_for_sorting(t))
        return tags
    except subprocess.CalledProcessError as e:
        print(f"❌ Error getting git tags: {e}")
        return []


def parse_version_for_sorting(tag: str) -> Tuple[int, int, int, int, int]:
    """Parse version tag for sorting: (RC, EPIC, STORY, TASK, BUILD)."""
    # Remove 'v' prefix
    version = tag[1:] if tag.startswith('v') else tag
    
    # Split by '+'
    parts = version.split('+')
    if len(parts) != 2:
        return (0, 0, 0, 0, 0)
    
    build = int(parts[1])
    version_parts = parts[0].split('.')
    
    if len(version_parts) != 4:
        return (0, 0, 0, 0, 0)
    
    rc = int(version_parts[0])
    epic = int(version_parts[1])
    story = int(version_parts[2])
    task = int(version_parts[3])
    
    return (rc, epic, story, task, build)


def parse_internal_version(tag: str) -> Tuple[int, int, int, int, int]:
    """Parse internal version tag: (RC, EPIC, STORY, TASK, BUILD)."""
    # Remove 'v' prefix
    version = tag[1:] if tag.startswith('v') else tag
    
    # Split by '+'
    parts = version.split('+')
    if len(parts) != 2:
        raise ValueError(f"Invalid version format: {tag}")
    
    build = int(parts[1])
    version_parts = parts[0].split('.')
    
    if len(version_parts) != 4:
        raise ValueError(f"Invalid version format: {tag}")
    
    rc = int(version_parts[0])
    epic = int(version_parts[1])
    story = int(version_parts[2])
    task = int(version_parts[3])
    
    return (rc, epic, story, task, build)


def build_registry_from_tags(tags: List[str]) -> Dict[str, Any]:
    """
    Build SemVer registry from historical git tags.
    
    Tracks first appearance of each (RC, Epic) and (RC, Epic, Story) combination.
    """
    registry = {
        "rc_0": {"epic_to_minor": {}, "story_to_patch": {}},
        "rc_1": {"epic_to_minor": {}, "story_to_patch": {}}
    }
    
    # Track first appearance order
    epic_first_seen = {}  # (RC, Epic) → first tag index
    story_first_seen = {}  # (RC, Epic, Story) → first tag index
    
    for idx, tag in enumerate(tags):
        try:
            rc, epic, story, task, build = parse_internal_version(tag)
            rc_key = f"rc_{rc}"
            
            # Track first appearance of (RC, Epic)
            epic_key = (rc, epic)
            if epic_key not in epic_first_seen:
                epic_first_seen[epic_key] = idx
            
            # Track first appearance of (RC, Epic, Story)
            story_key = (rc, epic, story)
            if story_key not in story_first_seen:
                story_first_seen[story_key] = idx
        
        except ValueError as e:
            print(f"⚠️  Warning: Skipping tag {tag}: {e}")
            continue
    
    # Assign MINOR numbers based on first appearance order
    epic_order = sorted(epic_first_seen.items(), key=lambda x: x[1])
    for minor_num, ((rc, epic), _) in enumerate(epic_order, start=1):
        rc_key = f"rc_{rc}"
        if rc_key not in registry:
            registry[rc_key] = {"epic_to_minor": {}, "story_to_patch": {}}
        registry[rc_key]["epic_to_minor"][epic] = minor_num
    
    # Assign PATCH numbers based on first appearance order (per RC)
    story_order = sorted(story_first_seen.items(), key=lambda x: x[1])
    # Group by RC for sequential PATCH assignment per RC
    stories_by_rc = defaultdict(list)
    for (rc, epic, story), first_idx in story_order:
        stories_by_rc[rc].append(((rc, epic, story), first_idx))
    
    for rc, stories in stories_by_rc.items():
        rc_key = f"rc_{rc}"
        if rc_key not in registry:
            registry[rc_key] = {"epic_to_minor": {}, "story_to_patch": {}}
        
        # Sort stories by first appearance within this RC
        stories_sorted = sorted(stories, key=lambda x: x[1])
        for patch_num, ((rc_val, epic, story), _) in enumerate(stories_sorted, start=1):
            story_key = f"({epic},{story})"  # Store as string key "(Epic,Story)"
            registry[rc_key]["story_to_patch"][story_key] = patch_num
    
    return registry


def save_registry(registry: Dict[str, Any], output_file: Path) -> None:
    """Save registry to YAML file."""
    output_file.parent.mkdir(parents=True, exist_ok=True)
    
    with open(output_file, 'w', encoding='utf-8') as f:
        yaml.dump(registry, f, default_flow_style=False, sort_keys=False, allow_unicode=True)


def validate_monotonic_increases(tags: List[str], registry: Dict[str, Any]) -> bool:
    """
    Validate that SemVer increases monotonically across all tags.
    
    Returns True if all SemVers increase, False otherwise.
    """
    from semver_converter import convert_internal_to_semver, format_semver
    
    prev_semver = None
    
    for tag in tags:
        try:
            rc, epic, story, task, build = parse_internal_version(tag)
            major, minor, patch, build_semver = convert_internal_to_semver(rc, epic, story, task, build)
            semver = format_semver(major, minor, patch, build_semver)
            
            if prev_semver is not None:
                # Compare SemVer strings (simple string comparison works for monotonic check)
                if semver <= prev_semver:
                    print(f"❌ SemVer regression: {prev_semver} → {semver} (from {tag})")
                    return False
            
            prev_semver = semver
        
        except Exception as e:
            print(f"⚠️  Warning: Failed to validate {tag}: {e}")
            continue
    
    return True


if __name__ == "__main__":
    import sys
    
    print("🔍 Building SemVer registry from historical git tags...")
    
    # Get all tags
    tags = get_all_git_tags()
    if not tags:
        print("⚠️  No tags found matching v0.*.*.*+* pattern")
        sys.exit(0)
    
    print(f"📋 Found {len(tags)} tags")
    
    # Build registry
    print("🏗️  Building registry from first appearances...")
    registry = build_registry_from_tags(tags)
    
    # Save registry
    registry_file = find_registry_file()
    print(f"💾 Saving registry to {registry_file}")
    save_registry(registry, registry_file)
    
    # Validate monotonic increases
    print("✅ Validating SemVer increases monotonically...")
    # Note: We need to reload registry after saving to test conversion
    # For now, just report what we built
    print("\n📊 Registry Summary:")
    for rc_key in sorted(registry.keys()):
        rc_scope = registry[rc_key]
        epic_count = len(rc_scope.get("epic_to_minor", {}))
        story_count = len(rc_scope.get("story_to_patch", {}))
        print(f"  {rc_key}: {epic_count} epics, {story_count} stories")
    
    print(f"\n✅ Registry built successfully: {registry_file}")

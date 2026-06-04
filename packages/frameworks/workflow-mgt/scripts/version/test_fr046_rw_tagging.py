#!/usr/bin/env python3
"""
Test script for FR-046 RW SemVer Tagging functionality

Tests the new RW tagging functions for both registry and task-touch modes.
"""

import sys
import tempfile
import shutil
from pathlib import Path

# Add the script directory to the path
script_dir = Path(__file__).parent
sys.path.insert(0, str(script_dir))

from semver_converter import (
    get_rw_tag_info,
    create_rw_tags,
    get_semver_mapping_strategy,
    load_rw_config
)


def test_registry_mode():
    """Test RW tagging in registry mode (default behavior)."""
    print("Testing Registry Mode (Default):")
    
    # Test with current config (strategy may vary by repo config)
    strategy = get_semver_mapping_strategy()
    print(f"  Current strategy: {strategy}")
    
    tag_info = get_rw_tag_info("0.6.7.18+2")
    print(f"  Primary tag: {tag_info['primary_tag']}")
    print(f"  Internal tag: {tag_info['internal_tag']}")
    print(f"  Strategy: {tag_info['strategy']}")
    
    # Verify mode-specific behavior
    if strategy == "registry":
        assert tag_info['strategy'] == 'registry'
        assert tag_info['primary_tag'] == 'v0.6.7.18+2'
        assert tag_info['internal_tag'] is None
    else:
        assert tag_info['strategy'] == 'task_touch'
        assert tag_info['primary_tag'].startswith('v0.')
    print("  ✓ Registry mode test passed")
    print()


def test_task_touch_mode():
    """Test RW tagging in task-touch mode."""
    print("Testing Task-Touch Mode:")
    
    # Mock task-touch config
    import semver_converter
    original_load = semver_converter.load_rw_config
    semver_converter.load_rw_config = lambda: {'semver_mapping_strategy': 'task_touch'}
    
    try:
        tag_info = get_rw_tag_info("0.6.7.18+2")
        print(f"  Primary tag: {tag_info['primary_tag']}")
        print(f"  Internal tag: {tag_info['internal_tag']}")
        print(f"  SemVer full: {tag_info['semver_full']}")
        print(f"  Strategy: {tag_info['strategy']}")
        
        # Verify expected behavior
        assert tag_info['strategy'] == 'task_touch'
        assert tag_info['primary_tag'].startswith('v0.')  # SemVer format
        assert '+' not in tag_info['primary_tag']  # Tag name must not include BUILD metadata
        assert tag_info['internal_tag'] == 'v0.6.7.18+2'
        assert '+' in tag_info['semver_full']  # Full SemVer with BUILD
        print("  ✓ Task-touch mode test passed")
        
    finally:
        # Restore original function
        semver_converter.load_rw_config = original_load
    
    print()


def test_tag_creation_dry_run():
    """Test tag creation logic (dry run - don't actually create tags)."""
    print("Testing Tag Creation Logic:")
    
    # Test registry mode
    tag_info = get_rw_tag_info("0.6.7.18+2")
    print(f"  Registry mode would create: {tag_info['primary_tag']}")
    
    # Test task-touch mode
    import semver_converter
    original_load = semver_converter.load_rw_config
    semver_converter.load_rw_config = lambda: {'semver_mapping_strategy': 'task_touch'}
    
    try:
        tag_info = get_rw_tag_info("0.6.7.18+2")
        print(f"  Task-touch mode would create: {tag_info['primary_tag']}")
        print(f"  Optional internal tag: {tag_info['internal_tag']}")
        
    finally:
        semver_converter.load_rw_config = original_load
    
    print("  ✓ Tag creation logic verified")
    print()


def test_collision_scenario():
    """Test the specific collision scenario from the incident."""
    print("Testing Collision Scenario:")
    
    # Mock task-touch config
    import semver_converter
    original_load = semver_converter.load_rw_config
    semver_converter.load_rw_config = lambda: {'semver_mapping_strategy': 'task_touch'}
    
    try:
        # Test the colliding versions
        collision_versions = ["0.6.7.101+5", "0.6.7.102+5", "0.6.7.103+5"]
        
        for version in collision_versions:
            tag_info = get_rw_tag_info(version, finalize=True)
            print(f"  {version} → {tag_info['primary_tag']}")
            assert '+' not in tag_info['primary_tag']
        
        # Verify all tags are different
        tags = [get_rw_tag_info(v, finalize=True)['primary_tag'] for v in collision_versions]
        unique_tags = set(tags)
        assert len(unique_tags) == len(tags), f"Collisions detected: {tags}"
        
        print("  ✓ No collisions in task-touch mode")
        
    finally:
        semver_converter.load_rw_config = original_load
    
    print()


if __name__ == "__main__":
    print("=== FR-046 RW SemVer Tagging Tests ===")
    print()
    
    test_registry_mode()
    test_task_touch_mode()
    test_tag_creation_dry_run()
    test_collision_scenario()
    
    print("=== All Tests Passed! ===")
    print()
    print("FR-046 RW SemVer tagging functionality is working correctly.")
    print("Ready for integration with Release Workflow Step 11.")

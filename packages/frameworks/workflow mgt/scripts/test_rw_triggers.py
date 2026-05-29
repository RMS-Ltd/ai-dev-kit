#!/usr/bin/env python3
"""
Integration test for RW trigger extensions.

Tests the new trigger parsing, execution paths, and mode-specific behavior.
"""

import sys
import os
from pathlib import Path

# Add the scripts directory to the path
sys.path.insert(0, str(Path(__file__).parent))

from workflow_orchestrator import parse_rw_trigger, get_execution_path, should_execute_step, get_step_modifications


def test_trigger_parsing():
    """Test trigger parsing for all supported triggers."""
    print("🧪 Testing trigger parsing...")
    
    test_cases = [
        ("RW", "RW"),
        ("rw", "RW"),
        ("RW E2:S01:T13", "RW"),
        ("RW -k", "RW -k"),
        ("rw -k", "RW -k"),
        ("RW -k E2:S01:T13 --art", "RW -k"),
        ("RW -d", "RW -d"),
        ("rw -d", "RW -d"),
        ("RW -d E2:S16:T03", "RW -d"),
    ]
    
    for input_trigger, expected_type in test_cases:
        try:
            trigger_type = parse_rw_trigger(input_trigger)
            assert trigger_type.value == expected_type, f"Expected {expected_type}, got {trigger_type.value}"
            print(f"  ✅ '{input_trigger}' -> {trigger_type.value}")
        except Exception as e:
            print(f"  ❌ '{input_trigger}' -> ERROR: {e}")
            return False
    
    # Test invalid triggers
    invalid_triggers = ["RW-k", "invalid", ""]
    for invalid_trigger in invalid_triggers:
        try:
            parse_rw_trigger(invalid_trigger)
            print(f"  ❌ '{invalid_trigger}' should have failed but didn't")
            return False
        except ValueError:
            print(f"  ✅ '{invalid_trigger}' correctly rejected")
    
    return True


def test_execution_paths():
    """Test execution paths for all trigger types."""
    print("\n🧪 Testing execution paths...")
    
    # Must match packages/frameworks/workflow mgt/canonical-rw-steps.yaml execution_paths
    expected_paths = {
        "RW": [1, 2, 3, 4, 5, 6, 7, 8, 9, 9.5, 10, 11, 12, 13, 14, 15, 16, 17],
        "RW -k": [1, 2, 3, 4, 7, 11, 12],
        "RW -d": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14],
    }

    for trigger, expected_path in expected_paths.items():
        try:
            trigger_type = parse_rw_trigger(trigger)
            # canonical_steps API expects trigger string, not TriggerType enum
            path_obj = get_execution_path(trigger_type.value)
            actual_path = path_obj.steps if path_obj else None
            assert actual_path == expected_path, f"Expected {expected_path}, got {actual_path}"
            print(f"  ✅ {trigger} -> {actual_path}")
        except Exception as e:
            print(f"  ❌ {trigger} -> ERROR: {e}")
            return False
    
    return True


def test_step_filtering():
    """Test step filtering for different trigger types."""
    print("\n🧪 Testing step filtering...")
    
    test_cases = [
        # (trigger, step, expected_result)
        ("RW", 1, True),      # All steps in full release
        ("RW", 17, True),
        ("RW -k", 1, True),   # Only specific steps in kanban init
        ("RW -k", 5, False),  # Step 5 not in kanban init
        ("RW -k", 7, True),
        ("RW -d", 1, True),   # Most steps in documentation only
        ("RW -d", 12, False), # Step 12 not in documentation only
        ("RW -d", 13, True),
    ]
    
    for trigger, step, expected in test_cases:
        try:
            trigger_type = parse_rw_trigger(trigger)
            actual = should_execute_step(step, trigger_type.value)
            assert actual == expected, f"Expected {expected}, got {actual} for {trigger} step {step}"
            print(f"  ✅ {trigger} step {step} -> {actual}")
        except Exception as e:
            print(f"  ❌ {trigger} step {step} -> ERROR: {e}")
            return False
    
    return True


def test_step_modifications():
    """Test step modifications for different trigger types."""
    print("\n🧪 Testing step modifications...")
    
    # Test kanban_init mode modifications for step 7
    try:
        trigger_type = parse_rw_trigger("RW -k")
        modifications = get_step_modifications(7, trigger_type.value)
        
        expected_mods = {
            "mode": "kanban_init",
            "updates": ["changelog", "version_number", "kanban_docs"]
        }
        
        assert modifications == expected_mods, f"Expected {expected_mods}, got {modifications}"
        print(f"  ✅ RW -k step 7 -> {modifications}")
    except Exception as e:
        print(f"  ❌ RW -k step 7 -> ERROR: {e}")
        return False
    
    # Test that other steps have no modifications
    try:
        trigger_type = parse_rw_trigger("RW -k")
        modifications = get_step_modifications(1, trigger_type.value)
        assert modifications == {}, f"Expected empty modifications, got {modifications}"
        print(f"  ✅ RW -k step 1 -> {modifications}")
    except Exception as e:
        print(f"  ❌ RW -k step 1 -> ERROR: {e}")
        return False
    
    return True


def test_kanban_docs_mode():
    """Test update_kanban_docs.py mode parameter."""
    print("\n🧪 Testing kanban_docs mode parameter...")
    
    # Test that the script accepts the mode parameter
    try:
        import subprocess
        result = subprocess.run([
            sys.executable, "update_kanban_docs.py", "--help"
        ], capture_output=True, text=True, cwd=Path(__file__).parent)
        
        assert result.returncode == 0, f"Help command failed: {result.stderr}"
        assert "--mode {full,kanban_init}" in result.stdout, "Mode parameter not found in help"
        print(f"  ✅ update_kanban_docs.py --mode parameter available")
        return True
    except Exception as e:
        print(f"  ❌ update_kanban_docs.py mode test -> ERROR: {e}")
        return False


def main():
    """Run all integration tests."""
    print("🚀 RW Trigger Extensions Integration Test")
    print("=" * 50)
    
    tests = [
        test_trigger_parsing,
        test_execution_paths,
        test_step_filtering,
        test_step_modifications,
        test_kanban_docs_mode,
    ]
    
    passed = 0
    failed = 0
    
    for test in tests:
        if test():
            passed += 1
        else:
            failed += 1
    
    print("\n" + "=" * 50)
    print(f"📊 Test Results: {passed} passed, {failed} failed")
    
    if failed == 0:
        print("🎉 All tests passed! RW trigger extensions are working correctly.")
        return 0
    else:
        print("❌ Some tests failed. Please check the implementation.")
        return 1


if __name__ == "__main__":
    sys.exit(main())

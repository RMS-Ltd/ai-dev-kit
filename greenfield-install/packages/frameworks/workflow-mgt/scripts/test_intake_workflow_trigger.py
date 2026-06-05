#!/usr/bin/env python3
"""
Test Suite for Intake Workflow Trigger Handler

Tests the trigger handler for intake workflow execution.

Usage:
    python test_intake_workflow_trigger.py
"""

import sys
import tempfile
from pathlib import Path

# Add scripts to path
scripts_path = Path(__file__).parent
if str(scripts_path) not in sys.path:
    sys.path.insert(0, str(scripts_path))

from intake_workflow_trigger_handler import execute_intake_workflow, _extract_fr_br_files


def test_extract_fr_br_files():
    """Test FR/BR file extraction from changed files."""
    print("🧪 Test: Extract FR/BR Files")
    
    project_root = Path(".")
    changed_files = [
        "docs/project-management/kanban/fr-br/FR-019-intake-workflow-automation.md",
        "src/fynd_deals/version.py",
        "docs/project-management/kanban/fr-br/BR-005-example.md",
        "README.md"
    ]
    
    fr_br_files = _extract_fr_br_files(changed_files, project_root)
    
    # Should extract FR-019 and BR-005
    assert len(fr_br_files) >= 1, \
        "Should extract at least one FR/BR file"
    
    fr_br_names = [f.name.upper() for f in fr_br_files]
    assert any('FR-019' in name for name in fr_br_names), \
        "Should extract FR-019"
    
    print(f"✅ Extracted {len(fr_br_files)} FR/BR file(s)")
    return True


def test_trigger_handler_structure():
    """Test trigger handler function structure."""
    print("\n🧪 Test: Trigger Handler Structure")
    
    # Test with empty changed files
    result = execute_intake_workflow(
        changed_files=[],
        project_root=str(Path("."))
    )
    
    # Validate result structure
    assert isinstance(result, dict), \
        "Result should be dict"
    assert 'success' in result, \
        "Result should have 'success' key"
    assert 'processed_files' in result, \
        "Result should have 'processed_files' key"
    assert 'created_tasks' in result, \
        "Result should have 'created_tasks' key"
    assert 'errors' in result, \
        "Result should have 'errors' key"
    assert 'warnings' in result, \
        "Result should have 'warnings' key"
    assert 'explanation' in result, \
        "Result should have 'explanation' key"
    
    print("✅ Trigger handler structure correct")
    return True


def test_trigger_handler_no_files():
    """Test trigger handler with no FR/BR files."""
    print("\n🧪 Test: Trigger Handler - No FR/BR Files")
    
    changed_files = [
        "src/fynd_deals/version.py",
        "README.md"
    ]
    
    result = execute_intake_workflow(
        changed_files=changed_files,
        project_root=str(Path("."))
    )
    
    # Should succeed but process no files
    assert result['success'], \
        "Should succeed even with no FR/BR files"
    assert len(result['processed_files']) == 0, \
        "Should process no files"
    assert len(result['warnings']) > 0, \
        "Should have warning about no FR/BR files"
    
    print("✅ Handles no FR/BR files correctly")
    return True


def main():
    """Run all tests."""
    print("🧪 Running Intake Workflow Trigger Handler Test Suite")
    print("=" * 80)
    
    tests = [
        test_extract_fr_br_files,
        test_trigger_handler_structure,
        test_trigger_handler_no_files,
    ]
    
    passed = 0
    failed = 0
    
    for test in tests:
        try:
            if test():
                passed += 1
            else:
                failed += 1
        except Exception as e:
            print(f"❌ Test {test.__name__} raised exception: {e}")
            failed += 1
    
    print("\n" + "=" * 80)
    print("📊 Test Summary")
    print("=" * 80)
    print(f"✅ Passed: {passed}")
    print(f"❌ Failed: {failed}")
    
    if failed > 0:
        sys.exit(1)
    else:
        print("\n✅ All tests passed!")
        sys.exit(0)


if __name__ == "__main__":
    main()

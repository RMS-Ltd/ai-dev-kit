#!/usr/bin/env python3
"""
Test Suite for Intake Version Assignment

Tests the version assignment component for intake workflow.

Usage:
    python test_intake_version_assignment.py
"""

import sys
import tempfile
from pathlib import Path

# Add scripts to path
scripts_path = Path(__file__).parent
if str(scripts_path) not in sys.path:
    sys.path.insert(0, str(scripts_path))

from intake_version_assignment import IntakeVersionAssignment, IntakeVersionAssignmentResult
from intake_decision_flow import IntakeDecision


def test_version_assignment_new_task():
    """Test version assignment for new task (doc-init build +0)."""
    print("🧪 Test: Version Assignment - New Task (Doc-Init Build)")
    
    config = {
        'version_schema': 'RC.EPIC.STORY.TASK+BUILD',
        'intake_build': 0  # Doc-init build
    }
    
    version_file = Path('src/fynd_deals/version.py')
    
    intake_decision = IntakeDecision(
        epic_number=2,
        story_number=11,
        task_number=6,
        new_story_recommended=False,
        new_task_recommended=True,
        epic_confidence=0.9,
        epic_match_type='exact',
        story_match_confidence=0.8,
        explanation="Test decision",
        reasoning=["Test reasoning"],
        intake_status='ACCEPTED',
        version_marker=None,
        requires_manual_review=False,
        epic_story_mapping=None
    )
    
    version_assignment = IntakeVersionAssignment(config, version_file)
    
    try:
        result = version_assignment.assign_version(
            intake_decision,
            [],
            is_new_story=False,
            is_new_task=True
        )
        
        # Validate result structure
        assert isinstance(result, IntakeVersionAssignmentResult), \
            "Result should be IntakeVersionAssignmentResult instance"
        assert result.success, \
            "Should succeed for valid intake decision"
        assert result.version_marker is not None, \
            "Version marker should be assigned"
        assert result.version_marker.startswith('v'), \
            "Version marker should start with 'v'"
        assert '+0' in result.version_marker, \
            "New task should use doc-init build (+0)"
        
        # Check version components
        assert result.version_components['epic'] == 2, \
            "Epic number should be 2"
        assert result.version_components['story'] == 11, \
            "Story number should be 11"
        assert result.version_components['task'] == 6, \
            "Task number should be 6"
        assert result.version_components['build'] == 0, \
            "Build number should be 0 for new task"
        
        print(f"✅ Version assignment successful")
        print(f"   Version Marker: {result.version_marker}")
        print(f"   Version Components: {result.version_components}")
        
        return True
    except Exception as e:
        print(f"❌ Test failed: {e}")
        import traceback
        traceback.print_exc()
        return False


def test_version_assignment_existing_task():
    """Test version assignment for existing task (next build number)."""
    print("\n🧪 Test: Version Assignment - Existing Task (Next Build)")
    
    config = {
        'version_schema': 'RC.EPIC.STORY.TASK+BUILD',
        'intake_build': 0
    }
    
    version_file = Path('src/fynd_deals/version.py')
    
    intake_decision = IntakeDecision(
        epic_number=2,
        story_number=11,
        task_number=5,  # Existing task
        new_story_recommended=False,
        new_task_recommended=False,
        epic_confidence=0.9,
        epic_match_type='exact',
        story_match_confidence=0.8,
        explanation="Test decision",
        reasoning=["Test reasoning"],
        intake_status='ACCEPTED',
        version_marker=None,
        requires_manual_review=False,
        epic_story_mapping=None
    )
    
    version_assignment = IntakeVersionAssignment(config, version_file)
    
    try:
        result = version_assignment.assign_version(
            intake_decision,
            [],
            is_new_story=False,
            is_new_task=False
        )
        
        # Validate result structure
        assert isinstance(result, IntakeVersionAssignmentResult), \
            "Result should be IntakeVersionAssignmentResult instance"
        assert result.success, \
            "Should succeed for valid intake decision"
        assert result.version_marker is not None, \
            "Version marker should be assigned"
        
        # For existing task, build should be >= 1
        assert result.version_components['build'] >= 1, \
            "Existing task should use build >= 1"
        
        print(f"✅ Version assignment successful")
        print(f"   Version Marker: {result.version_marker}")
        print(f"   Build Number: {result.version_components['build']}")
        
        return True
    except Exception as e:
        print(f"❌ Test failed: {e}")
        import traceback
        traceback.print_exc()
        return False


def test_version_assignment_invalid_decision():
    """Test version assignment with invalid intake decision."""
    print("\n🧪 Test: Version Assignment - Invalid Decision")
    
    config = {'version_schema': 'RC.EPIC.STORY.TASK+BUILD'}
    
    intake_decision = IntakeDecision(
        epic_number=0,  # Invalid: no epic
        story_number=None,
        task_number=None,
        new_story_recommended=False,
        new_task_recommended=False,
        epic_confidence=0.0,
        epic_match_type='no_match',
        story_match_confidence=None,
        explanation="No epic match",
        reasoning=["No epic match"],
        intake_status='PENDING',
        version_marker=None,
        requires_manual_review=True,
        epic_story_mapping=None
    )
    
    version_assignment = IntakeVersionAssignment(config)
    
    try:
        result = version_assignment.assign_version(intake_decision, [])
        
        # Should fail for invalid decision
        assert not result.success, \
            "Should fail for invalid intake decision"
        assert len(result.errors) > 0, \
            "Should have errors"
        assert result.version_marker is None, \
            "Version marker should not be assigned"
        
        print("✅ Error handling works correctly")
        return True
    except Exception as e:
        print(f"❌ Test failed: {e}")
        import traceback
        traceback.print_exc()
        return False


def main():
    """Run all tests."""
    print("🧪 Running Intake Version Assignment Test Suite")
    print("=" * 80)
    
    tests = [
        test_version_assignment_new_task,
        test_version_assignment_existing_task,
        test_version_assignment_invalid_decision,
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

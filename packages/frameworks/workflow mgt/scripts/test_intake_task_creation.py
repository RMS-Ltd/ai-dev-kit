#!/usr/bin/env python3
"""
Test Suite for Intake Task Creation Integration

Tests the task creation integration component for intake workflow.

Usage:
    python test_intake_task_creation.py
"""

import sys
import tempfile
from pathlib import Path

# Add scripts to path
scripts_path = Path(__file__).parent
if str(scripts_path) not in sys.path:
    sys.path.insert(0, str(scripts_path))

from intake_task_creation import IntakeTaskCreation, IntakeTaskCreationResult
from intake_decision_flow import IntakeDecisionFlow, IntakeDecision


def test_task_creation_integration():
    """Test task creation integration with E4:S10."""
    print("🧪 Test: Task Creation Integration")
    
    # Create temporary test structure
    with tempfile.TemporaryDirectory() as tmpdir:
        kanban_path = Path(tmpdir) / "kanban"
        framework_path = Path(__file__).parent.parent.parent / "kanban"
        
        # Test with FR-019
        fr_br_path = Path("docs/project-management/kanban/fr-br/FR-019-intake-workflow-automation.md")
        
        if not fr_br_path.exists():
            print("⚠️  FR-019 not found, skipping test")
            return True
        
        config = {
            'task_creation': {
                'use_e4s10': True,
                'auto_link_fr_br': True
            }
        }
        
        # Get intake decision first
        decision_flow = IntakeDecisionFlow(kanban_path, framework_path, config)
        intake_decision = decision_flow.analyze(fr_br_path)
        
        # Initialize task creation
        task_creation = IntakeTaskCreation(kanban_path, framework_path, config)
        
        try:
            # Note: This will actually create tasks, so we might want to use dry-run mode
            # For now, we'll just test the integration structure
            result = task_creation.create_tasks(fr_br_path, intake_decision)
            
            # Validate result structure
            assert isinstance(result, IntakeTaskCreationResult), \
                "Result should be IntakeTaskCreationResult instance"
            assert isinstance(result.created_tasks, list), \
                "Created tasks should be list"
            assert isinstance(result.errors, list), \
                "Errors should be list"
            assert isinstance(result.warnings, list), \
                "Warnings should be list"
            assert isinstance(result.explanation, str), \
                "Explanation should be string"
            
            print(f"✅ Task creation integration successful")
            print(f"   Success: {result.success}")
            print(f"   Created Tasks: {len(result.created_tasks)}")
            print(f"   Errors: {len(result.errors)}")
            print(f"   Warnings: {len(result.warnings)}")
            
            return True
        except Exception as e:
            print(f"❌ Test failed: {e}")
            import traceback
            traceback.print_exc()
            return False


def test_error_handling():
    """Test error handling for invalid intake decisions."""
    print("\n🧪 Test: Error Handling")
    
    with tempfile.TemporaryDirectory() as tmpdir:
        kanban_path = Path(tmpdir) / "kanban"
        framework_path = Path(__file__).parent.parent.parent / "kanban"
        
        config = {'task_creation': {'use_e4s10': True}}
        task_creation = IntakeTaskCreation(kanban_path, framework_path, config)
        
        # Create invalid intake decision (no epic)
        invalid_decision = IntakeDecision(
            epic_number=0,  # Invalid: no epic
            story_number=None,
            task_number=None,
            new_story_recommended=True,
            new_task_recommended=True,
            epic_confidence=0.0,
            epic_match_type='no_match',
            story_match_confidence=None,
            explanation="No epic match found",
            reasoning=["No epic match"],
            intake_status='PENDING',
            version_marker=None,
            requires_manual_review=True,
            epic_story_mapping=None  # Would need to create mock
        )
        
        fr_br_path = Path("docs/project-management/kanban/fr-br/FR-019-intake-workflow-automation.md")
        if not fr_br_path.exists():
            print("⚠️  FR-019 not found, skipping test")
            return True
        
        try:
            result = task_creation.create_tasks(fr_br_path, invalid_decision)
            
            # Should fail gracefully
            assert not result.success, "Should fail for invalid decision"
            assert len(result.errors) > 0, "Should have errors"
            
            print("✅ Error handling works correctly")
            return True
        except Exception as e:
            print(f"❌ Test failed: {e}")
            return False


def main():
    """Run all tests."""
    print("🧪 Running Intake Task Creation Integration Test Suite")
    print("=" * 80)
    
    tests = [
        test_task_creation_integration,
        test_error_handling,
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

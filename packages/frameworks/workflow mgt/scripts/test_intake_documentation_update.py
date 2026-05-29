#!/usr/bin/env python3
"""
Test Suite for Intake Documentation Update

Tests the documentation update component for intake workflow.

Usage:
    python test_intake_documentation_update.py
"""

import sys
import tempfile
from pathlib import Path

# Add scripts to path
scripts_path = Path(__file__).parent
if str(scripts_path) not in sys.path:
    sys.path.insert(0, str(scripts_path))

from intake_documentation_update import IntakeDocumentationUpdate, IntakeDocumentationUpdateResult
from intake_decision_flow import IntakeDecisionFlow, IntakeDecision


def test_documentation_update():
    """Test documentation update with FR-019."""
    print("🧪 Test: Documentation Update")
    
    # Test with FR-019
    fr_br_path = Path("docs/project-management/kanban/fr-br/FR-019-intake-workflow-automation.md")
    
    if not fr_br_path.exists():
        print("⚠️  FR-019 not found, skipping test")
        return True
    
    config = {
        'intake_status': {
            'default': 'ACCEPTED',
            'allowed_values': ['ACCEPTED', 'PENDING', 'REJECTED', 'DEFERRED']
        },
        'version_marker': {
            'format': 'v{rc}.{epic}.{story}.{task}+{build}',
            'build_zero_for_intake': True
        }
    }
    
    # Get intake decision
    kanban_path = Path("docs/project-management/kanban")
    framework_path = Path("packages/frameworks/kanban")
    
    decision_flow = IntakeDecisionFlow(kanban_path, framework_path, config)
    intake_decision = decision_flow.analyze(fr_br_path)
    
    # Mock created tasks
    class MockTask:
        def __init__(self, task_id, task_path):
            self.task_id = task_id
            self.task_path = task_path
    
    created_tasks = [
        MockTask("E2:S11:T04", "docs/project-management/kanban/epics/Epic-2/Story-011-intake-workflow-automation.md")
    ]
    
    # Initialize documentation update
    doc_update = IntakeDocumentationUpdate(config)
    
    try:
        # Create a copy for testing
        import shutil
        test_path = Path(tempfile.mktemp(suffix='.md'))
        shutil.copy(fr_br_path, test_path)
        
        result = doc_update.update_document(
            test_path,
            intake_decision,
            created_tasks,
            "v0.2.11.4+1"
        )
        
        # Validate result structure
        assert isinstance(result, IntakeDocumentationUpdateResult), \
            "Result should be IntakeDocumentationUpdateResult instance"
        assert isinstance(result.updated_fields, list), \
            "Updated fields should be list"
        assert isinstance(result.errors, list), \
            "Errors should be list"
        assert isinstance(result.warnings, list), \
            "Warnings should be list"
        assert isinstance(result.explanation, str), \
            "Explanation should be string"
        
        # Check that document was updated
        updated_content = test_path.read_text(encoding='utf-8')
        assert "## Intake Decision" in updated_content, \
            "Intake Decision section should exist"
        assert intake_decision.intake_status in updated_content, \
            "Intake status should be in document"
        
        print(f"✅ Documentation update successful")
        print(f"   Success: {result.success}")
        print(f"   Updated Fields: {', '.join(result.updated_fields)}")
        print(f"   Errors: {len(result.errors)}")
        print(f"   Warnings: {len(result.warnings)}")
        
        # Cleanup
        test_path.unlink()
        
        return True
    except Exception as e:
        print(f"❌ Test failed: {e}")
        import traceback
        traceback.print_exc()
        return False


def test_status_field_update():
    """Test status field update."""
    print("\n🧪 Test: Status Field Update")
    
    # Create test document
    test_content = """---
lifecycle: evergreen
---

# Test FR

**Type:** Feature Request (FR)  
**Status:** PENDING  
"""
    
    with tempfile.NamedTemporaryFile(mode='w', suffix='.md', delete=False) as f:
        f.write(test_content)
        test_path = Path(f.name)
    
    try:
        config = {
            'intake_status': {
                'default': 'ACCEPTED',
                'allowed_values': ['ACCEPTED', 'PENDING', 'REJECTED', 'DEFERRED']
            }
        }
        
        doc_update = IntakeDocumentationUpdate(config)
        
        # Create mock intake decision
        from intake_decision_flow import IntakeDecision
        
        intake_decision = IntakeDecision(
            epic_number=2,
            story_number=11,
            task_number=4,
            new_story_recommended=False,
            new_task_recommended=False,
            epic_confidence=0.9,
            epic_match_type='exact',
            story_match_confidence=0.8,
            explanation="Test decision",
            reasoning=["Test reasoning"],
            intake_status='ACCEPTED',
            version_marker='v0.2.11.4+1',
            requires_manual_review=False,
            epic_story_mapping=None
        )
        
        result = doc_update.update_document(test_path, intake_decision, [], "v0.2.11.4+1")
        
        # Check status was updated
        updated_content = test_path.read_text(encoding='utf-8')
        assert "**Status:** ACCEPTED" in updated_content, \
            "Status should be updated to ACCEPTED"
        
        print("✅ Status field update works correctly")
        return True
    except Exception as e:
        print(f"❌ Test failed: {e}")
        import traceback
        traceback.print_exc()
        return False
    finally:
        test_path.unlink()


def main():
    """Run all tests."""
    print("🧪 Running Intake Documentation Update Test Suite")
    print("=" * 80)
    
    tests = [
        test_documentation_update,
        test_status_field_update,
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

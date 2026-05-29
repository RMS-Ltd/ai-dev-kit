#!/usr/bin/env python3
"""
Test Suite for Agentic Task Creation Workflow

Tests the agentic task creation workflow components and integration.

Epic: Epic 4 (Kanban Framework)
Story: Story 10 (Agentic Kanban Task Creation from FR/BR)
Task: Task 7 (Documentation and testing)
"""

import sys
from pathlib import Path

# Add scripts directory to path
scripts_dir = Path(__file__).parent
sys.path.insert(0, str(scripts_dir))

from fr_br_analyzer import FRBRAnalyzer, FRBRAnalysis
from epic_story_mapper import EpicStoryMapper, EpicStoryMapping
from task_creator import TaskCreator, TaskStructure
from agentic_task_workflow import AgenticTaskWorkflow, WorkflowResult


def test_fr_br_analyzer():
    """Test FR/BR content analyzer."""
    print("=" * 60)
    print("Test 1: FR/BR Content Analyzer")
    print("=" * 60)
    
    analyzer = FRBRAnalyzer()
    
    # Create a test FR document
    test_fr_content = """---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-11T00:20:00Z
expires_at: null
housekeeping_policy: keep
---

# Feature Request: Test Feature

## Summary

Add user authentication feature to the application.

## Description

This feature will allow users to authenticate using email and password. It should include login, logout, and password reset functionality.

## Requirements

1. User registration with email and password
2. User login with email and password
3. Password reset functionality
4. Session management

## Acceptance Criteria

1. Users can register with valid email and password
2. Users can login with registered credentials
3. Users can reset forgotten passwords
4. Sessions are properly managed

## Affected Areas

- [x] Backend/API
- [x] Frontend/UI
- [x] Database/Schema

**Priority:** HIGH
"""
    
    # Write test file
    test_fr_path = Path("/tmp/test_fr.md")
    test_fr_path.write_text(test_fr_content)
    
    try:
        # Analyze
        analysis = analyzer.analyze_fr_br(test_fr_path)
        
        assert analysis.document_type == "FR", f"Expected FR, got {analysis.document_type}"
        assert analysis.title == "Feature Request: Test Feature", f"Title mismatch"
        assert len(analysis.requirements) == 4, f"Expected 4 requirements, got {len(analysis.requirements)}"
        assert len(analysis.acceptance_criteria) == 4, f"Expected 4 criteria, got {len(analysis.acceptance_criteria)}"
        assert analysis.priority == "HIGH", f"Expected HIGH priority, got {analysis.priority}"
        
        print("✅ FR/BR analyzer working correctly")
        print(f"   - Document type: {analysis.document_type}")
        print(f"   - Requirements: {len(analysis.requirements)}")
        print(f"   - Acceptance criteria: {len(analysis.acceptance_criteria)}")
        print(f"   - Key concepts: {len(analysis.key_concepts)}")
        
    finally:
        # Cleanup
        if test_fr_path.exists():
            test_fr_path.unlink()
    
    print("\n✅ All FR/BR analyzer tests passed!\n")


def test_epic_story_mapper():
    """Test epic/story mapper."""
    print("=" * 60)
    print("Test 2: Epic/Story Mapper")
    print("=" * 60)
    
    # Create test paths
    kanban_path = Path("/tmp/test_kanban")
    framework_path = Path(scripts_dir.parent)
    
    mapper = EpicStoryMapper(kanban_path, framework_path)
    
    # Create test analysis
    analysis = FRBRAnalysis(
        document_type="FR",
        document_id="FR-999",
        title="User Authentication",
        summary="Add user authentication",
        description="User authentication feature",
        requirements=["Login", "Logout", "Password reset"],
        acceptance_criteria=["Users can login", "Users can logout"],
        affected_areas=["Backend/API"],
        dependencies=[],
        priority="HIGH",
        severity=None,
        use_cases=[],
        technical_requirements=[],
        scope="User authentication",
        key_concepts={"user", "authentication", "login"},
        complexity_indicators=[]
    )
    
    # Map to epic/story
    mapping = mapper.map_fr_br_to_epic_story(analysis)
    
    assert mapping.primary_epic > 0, "Should have a primary epic"
    assert mapping.primary_epic_confidence > 0, "Should have confidence score"
    assert mapping.explanation, "Should have explanation"
    assert mapping.reasoning, "Should have reasoning"
    
    print("✅ Epic/story mapper working correctly")
    print(f"   - Primary epic: {mapping.primary_epic}")
    print(f"   - Confidence: {mapping.primary_epic_confidence:.1f}%")
    print(f"   - Match type: {mapping.primary_epic_match_type}")
    print(f"   - Explanation: {mapping.explanation[:100]}...")
    
    print("\n✅ All epic/story mapper tests passed!\n")


def test_task_creator():
    """Test task creator."""
    print("=" * 60)
    print("Test 3: Task Creator")
    print("=" * 60)
    
    # Create test paths
    kanban_path = Path("/tmp/test_kanban")
    framework_path = Path(scripts_dir.parent)
    
    creator = TaskCreator(kanban_path, framework_path)
    
    # Create test analysis and mapping
    analysis = FRBRAnalysis(
        document_type="FR",
        document_id="FR-999",
        title="Test Feature",
        summary="Test feature summary",
        description="Test feature description",
        requirements=["Requirement 1", "Requirement 2"],
        acceptance_criteria=["Criterion 1"],
        affected_areas=[],
        dependencies=[],
        priority="MEDIUM",
        severity=None,
        use_cases=[],
        technical_requirements=[],
        scope="Test scope",
        key_concepts=set(),
        complexity_indicators=[]
    )
    
    mapping = EpicStoryMapping(
        primary_epic=4,
        primary_epic_confidence=75.0,
        primary_epic_match_type="semantic",
        secondary_epics=[],
        story_match=None,
        new_story_recommended=True,
        new_story_characteristics={"story_type": "Feature Implementation"},
        explanation="Test explanation",
        reasoning=["Test reasoning"]
    )
    
    task_structure = TaskStructure(
        num_tasks=1,
        task_types=["implementation"],
        task_dependencies={},
        task_order=[1],
        task_complexity={1: "medium"}
    )
    
    # Test template selection
    template = creator._select_template("implementation", 4)
    assert template, "Should return template"
    print("✅ Template selection working")
    
    # Test task title generation
    title = creator._generate_task_title(analysis, "implementation", 1, 1)
    assert title, "Should generate title"
    print(f"✅ Task title generation: {title}")
    
    print("\n✅ All task creator tests passed!\n")


def test_workflow_integration():
    """Test workflow integration."""
    print("=" * 60)
    print("Test 4: Workflow Integration")
    print("=" * 60)
    
    # Create test paths
    kanban_path = Path("/tmp/test_kanban")
    framework_path = Path(scripts_dir.parent)
    
    workflow = AgenticTaskWorkflow(kanban_path, framework_path)
    
    # Create test FR document
    test_fr_content = """---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-11T00:20:00Z
expires_at: null
housekeeping_policy: keep
---

# Feature Request: Test Feature

## Summary

Add a simple test feature.

## Description

This is a test feature for workflow testing.

## Requirements

1. Implement feature
2. Test feature

## Acceptance Criteria

1. Feature works
2. Tests pass

## Priority

MEDIUM
"""
    
    test_fr_path = Path("/tmp/test_workflow_fr.md")
    test_fr_path.write_text(test_fr_content)
    
    try:
        # Test workflow (planning mode - no auto-create)
        result = workflow.process_fr_br(test_fr_path, auto_create=False)
        
        assert result.fr_br_analysis is not None, "Should have analysis"
        assert result.epic_story_mapping is not None, "Should have mapping"
        assert result.task_structure is not None, "Should have task structure"
        assert result.reasoning, "Should have reasoning"
        assert result.confidence_scores, "Should have confidence scores"
        
        print("✅ Workflow integration working correctly")
        print(f"   - Analysis: ✅")
        print(f"   - Mapping: ✅ (Epic {result.epic_story_mapping.primary_epic})")
        print(f"   - Task structure: ✅ ({result.task_structure.num_tasks} task(s))")
        print(f"   - Reasoning: ✅ ({len(result.reasoning)} step(s))")
        print(f"   - Confidence scores: ✅ ({len(result.confidence_scores)} score(s))")
        
    finally:
        # Cleanup
        if test_fr_path.exists():
            test_fr_path.unlink()
    
    print("\n✅ All workflow integration tests passed!\n")


def run_all_tests():
    """Run all tests."""
    print("\n" + "=" * 60)
    print("Agentic Task Creation Workflow Test Suite")
    print("=" * 60 + "\n")
    
    try:
        test_fr_br_analyzer()
        test_epic_story_mapper()
        test_task_creator()
        test_workflow_integration()
        
        print("=" * 60)
        print("✅ ALL TESTS PASSED!")
        print("=" * 60 + "\n")
        return 0
        
    except AssertionError as e:
        print(f"\n❌ TEST FAILED: {e}\n")
        return 1
    except Exception as e:
        print(f"\n❌ ERROR: {e}\n")
        import traceback
        traceback.print_exc()
        return 1


if __name__ == '__main__':
    sys.exit(run_all_tests())


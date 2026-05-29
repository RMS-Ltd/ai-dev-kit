#!/usr/bin/env python3
"""
Tests for KanbanValidator

Part of: Epic 8, Story 2 - Additional Validators
Task: E8:S02:T02 - Build framework-specific validators
"""

import sys
import tempfile
from pathlib import Path

# Add validators directory to path for imports
validators_path = Path(__file__).parent.parent
if str(validators_path) not in sys.path:
    sys.path.insert(0, str(validators_path))

# Import from modules (validators_path is in sys.path)
try:
    from framework.kanban_validator import KanbanValidator
    from base import ValidatorConfig, ValidationStatus
except ImportError:
    # Fallback: try package import
    from validators.framework.kanban_validator import KanbanValidator
    from validators.base import ValidatorConfig, ValidationStatus


def test_kanban_validator_valid_structure():
    """Test KanbanValidator with valid structure."""
    with tempfile.TemporaryDirectory() as tmpdir:
        # Create valid kanban structure
        kanban_root = Path(tmpdir) / "kanban"
        epics_dir = kanban_root / "epics" / "Epic-1"
        epics_dir.mkdir(parents=True)
        
        # Create valid Epic document
        epic_doc = epics_dir / "Epic-1.md"
        epic_doc.write_text("""# Epic 1

**Status:** IN PROGRESS
**Last updated:** 2026-01-06
**Version:** v0.1.0.0+0

## Story Checklist

- [ ] **E1:S01** - Story 1
""")
        
        # Create valid Story document
        story_doc = epics_dir / "Story-001-story-one.md"
        story_doc.write_text("""# Story 1

**Status:** TODO
**Last updated:** 2026-01-06
**Version:** v0.1.1.0+0

## Task Checklist

- [ ] **E1:S01:T01** - Task 1
""")
        
        config = ValidatorConfig(project_root=Path(tmpdir))
        validator = KanbanValidator(config)
        result = validator.run(kanban_root=str(kanban_root))
        
        assert result.is_pass(), f"Validation should pass, but got: {[i.message for i in result.issues]}"


def test_kanban_validator_invalid_epic_name():
    """Test KanbanValidator with invalid Epic directory name."""
    with tempfile.TemporaryDirectory() as tmpdir:
        kanban_root = Path(tmpdir) / "kanban"
        epics_dir = kanban_root / "epics" / "InvalidEpic"
        epics_dir.mkdir(parents=True)
        
        config = ValidatorConfig(project_root=Path(tmpdir))
        validator = KanbanValidator(config)
        result = validator.run(kanban_root=str(kanban_root))
        
        assert result.is_fail(), "Validation should fail for invalid Epic name"
        assert any("Invalid Epic directory name" in issue.message for issue in result.issues)


def test_kanban_validator_missing_epic_doc():
    """Test KanbanValidator with missing Epic document."""
    with tempfile.TemporaryDirectory() as tmpdir:
        kanban_root = Path(tmpdir) / "kanban"
        epics_dir = kanban_root / "epics" / "Epic-1"
        epics_dir.mkdir(parents=True)
        
        config = ValidatorConfig(project_root=Path(tmpdir))
        validator = KanbanValidator(config)
        result = validator.run(kanban_root=str(kanban_root))
        
        assert result.is_fail(), "Validation should fail for missing Epic document"
        assert any("Epic document not found" in issue.message for issue in result.issues)


if __name__ == "__main__":
    test_kanban_validator_valid_structure()
    test_kanban_validator_invalid_epic_name()
    test_kanban_validator_missing_epic_doc()
    print("✅ All tests passed!")


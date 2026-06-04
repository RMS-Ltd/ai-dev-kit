#!/usr/bin/env python3
"""
Tests for WorkflowValidator

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
    from framework.workflow_validator import WorkflowValidator
    from base import ValidatorConfig, ValidationStatus
except ImportError:
    # Fallback: try package import
    from validators.framework.workflow_validator import WorkflowValidator
    from validators.base import ValidatorConfig, ValidationStatus


def test_workflow_validator_valid_workflow():
    """Test WorkflowValidator with valid workflow."""
    with tempfile.TemporaryDirectory() as tmpdir:
        workflows_dir = Path(tmpdir) / "workflows"
        workflows_dir.mkdir(parents=True)
        
        # Create valid workflow YAML
        workflow_file = workflows_dir / "test-workflow.yaml"
        workflow_file.write_text("""name: Test Workflow
version: 1.0.0
type: test

steps:
  - id: step-1
    name: Step 1
    type: test
    handler: test.handler1
    dependencies: []
  
  - id: step-2
    name: Step 2
    type: test
    handler: test.handler2
    dependencies:
      - step-1
""")
        
        config = ValidatorConfig(project_root=Path(tmpdir))
        validator = WorkflowValidator(config)
        result = validator.run(workflow_root=str(workflows_dir))
        
        assert result.is_pass(), f"Validation should pass, but got: {[i.message for i in result.issues]}"


def test_workflow_validator_missing_required_field():
    """Test WorkflowValidator with missing required field."""
    with tempfile.TemporaryDirectory() as tmpdir:
        workflows_dir = Path(tmpdir) / "workflows"
        workflows_dir.mkdir(parents=True)
        
        # Create workflow YAML missing 'name'
        workflow_file = workflows_dir / "test-workflow.yaml"
        workflow_file.write_text("""version: 1.0.0
type: test

steps: []
""")
        
        config = ValidatorConfig(project_root=Path(tmpdir))
        validator = WorkflowValidator(config)
        result = validator.run(workflow_root=str(workflows_dir))
        
        assert result.is_fail(), "Validation should fail for missing required field"
        assert any("missing required field: name" in issue.message for issue in result.issues)


def test_workflow_validator_invalid_dependency():
    """Test WorkflowValidator with invalid dependency."""
    with tempfile.TemporaryDirectory() as tmpdir:
        workflows_dir = Path(tmpdir) / "workflows"
        workflows_dir.mkdir(parents=True)
        
        # Create workflow with invalid dependency
        workflow_file = workflows_dir / "test-workflow.yaml"
        workflow_file.write_text("""name: Test Workflow
version: 1.0.0
type: test

steps:
  - id: step-1
    name: Step 1
    type: test
    handler: test.handler1
    dependencies:
      - non-existent-step
""")
        
        config = ValidatorConfig(project_root=Path(tmpdir))
        validator = WorkflowValidator(config)
        result = validator.run(workflow_root=str(workflows_dir))
        
        assert result.is_fail(), "Validation should fail for invalid dependency"
        assert any("non-existent dependency" in issue.message for issue in result.issues)


if __name__ == "__main__":
    test_workflow_validator_valid_workflow()
    test_workflow_validator_missing_required_field()
    test_workflow_validator_invalid_dependency()
    print("✅ All tests passed!")


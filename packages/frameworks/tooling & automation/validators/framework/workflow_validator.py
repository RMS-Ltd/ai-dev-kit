#!/usr/bin/env python3
"""
Workflow Management Framework Validator

Validates workflow YAML files for structure, dependencies, and handler references.

Part of: Epic 8, Story 2 - Additional Validators
Task: E8:S02:T02 - Build framework-specific validators
"""

import re
import sys
from pathlib import Path
from typing import Dict, List, Optional, Set, Tuple

# Add validators directory to path for imports
validators_path = Path(__file__).parent.parent
if str(validators_path) not in sys.path:
    sys.path.insert(0, str(validators_path))

# Import from base module (validators_path is in sys.path, so base is directly importable)
try:
    from base import (
        BaseValidator,
        ValidatorConfig,
        ValidationResult,
        ValidationStatus,
        ValidationIssue,
        ValidationSeverity
    )
except ImportError:
    # Fallback: try package import
    from validators.base import (
        BaseValidator,
        ValidatorConfig,
        ValidationResult,
        ValidationStatus,
        ValidationIssue,
        ValidationSeverity
    )

try:
    import yaml
except ImportError:
    yaml = None


class WorkflowValidator(BaseValidator):
    """Validator for Workflow Management framework YAML files."""
    
    def __init__(self, config: ValidatorConfig):
        super().__init__(config)
        self.workflow_root: Optional[Path] = None
        self.config_dict: Optional[Dict] = None
    
    def get_name(self) -> str:
        return "WorkflowValidator"
    
    def get_description(self) -> str:
        return "Validates workflow YAML files for structure, dependencies, and handler references"
    
    def get_supported_targets(self) -> List[str]:
        return ['workflow', 'yaml']
    
    def validate_input(self, **kwargs) -> Tuple[bool, List[str]]:
        """Validate input parameters."""
        errors = []
        
        workflow_root = kwargs.get('workflow_root')
        if workflow_root and not Path(workflow_root).exists():
            errors.append(f"Workflow root directory does not exist: {workflow_root}")
        
        return len(errors) == 0, errors
    
    def pre_validate(self, **kwargs) -> bool:
        """Load configuration and determine workflow root."""
        # Load config file
        self.config_dict = self.load_config_file()
        
        # Determine workflow root
        workflow_root = kwargs.get('workflow_root')
        if workflow_root:
            self.workflow_root = Path(workflow_root)
        elif self.config_dict and 'workflow_root' in self.config_dict:
            self.workflow_root = self.config.project_root / self.config_dict['workflow_root']
        else:
            # Default fallback
            self.workflow_root = self.config.project_root / "packages/frameworks/workflow mgt/workflows"
        
        if not self.workflow_root.exists():
            self.result.issues.append(ValidationIssue(
                message=f"Workflow root directory not found: {self.workflow_root}",
                severity=ValidationSeverity.ERROR
            ))
            return False
        
        return True
    
    def validate(self, **kwargs) -> ValidationResult:
        """Validate workflow YAML files."""
        result = ValidationResult(status=ValidationStatus.PASS)
        
        if not self.workflow_root:
            result.status = ValidationStatus.FAIL
            result.issues.append(ValidationIssue(
                message="Workflow root not determined",
                severity=ValidationSeverity.ERROR
            ))
            return result
        
        # Find all workflow YAML files
        workflow_files = list(self.workflow_root.glob("*.yaml")) + list(self.workflow_root.glob("*.yml"))
        
        for workflow_file in workflow_files:
            workflow_issues = self._validate_workflow_file(workflow_file)
            result.issues.extend(workflow_issues)
        
        return result
    
    def _validate_workflow_file(self, workflow_path: Path) -> List[ValidationIssue]:
        """Validate a single workflow YAML file."""
        issues = []
        
        if not yaml:
            issues.append(ValidationIssue(
                message="YAML library not available (PyYAML required)",
                severity=ValidationSeverity.ERROR,
                file_path=workflow_path
            ))
            return issues
        
        try:
            content = workflow_path.read_text(encoding='utf-8')
            workflow_data = yaml.safe_load(content)
        except Exception as e:
            issues.append(ValidationIssue(
                message=f"Failed to parse YAML: {e}",
                severity=ValidationSeverity.ERROR,
                file_path=workflow_path
            ))
            return issues
        
        if not workflow_data:
            issues.append(ValidationIssue(
                message="Workflow YAML is empty",
                severity=ValidationSeverity.ERROR,
                file_path=workflow_path
            ))
            return issues
        
        # Validate required top-level fields
        required_fields = ['name', 'version', 'type']
        for field in required_fields:
            if field not in workflow_data:
                issues.append(ValidationIssue(
                    message=f"Workflow missing required field: {field}",
                    severity=ValidationSeverity.ERROR,
                    file_path=workflow_path
                ))
        
        # Validate steps
        if 'steps' in workflow_data:
            step_issues = self._validate_steps(workflow_data['steps'], workflow_path)
            issues.extend(step_issues)
        
        # Validate dependencies
        if 'steps' in workflow_data:
            dependency_issues = self._validate_dependencies(workflow_data['steps'], workflow_path)
            issues.extend(dependency_issues)
        
        return issues
    
    def _validate_steps(self, steps: List[Dict], workflow_path: Path) -> List[ValidationIssue]:
        """Validate workflow steps."""
        issues = []
        step_ids: Set[str] = set()
        
        for i, step in enumerate(steps):
            # Check step has required fields
            if 'id' not in step:
                issues.append(ValidationIssue(
                    message=f"Step {i+1} missing required field: id",
                    severity=ValidationSeverity.ERROR,
                    file_path=workflow_path
                ))
                continue
            
            step_id = step['id']
            
            # Check for duplicate step IDs
            if step_id in step_ids:
                issues.append(ValidationIssue(
                    message=f"Duplicate step ID: {step_id}",
                    severity=ValidationSeverity.ERROR,
                    file_path=workflow_path
                ))
            step_ids.add(step_id)
            
            # Check step has name
            if 'name' not in step:
                issues.append(ValidationIssue(
                    message=f"Step {step_id} missing required field: name",
                    severity=ValidationSeverity.ERROR,
                    file_path=workflow_path
                ))
            
            # Check step has type
            if 'type' not in step:
                issues.append(ValidationIssue(
                    message=f"Step {step_id} missing required field: type",
                    severity=ValidationSeverity.ERROR,
                    file_path=workflow_path
                ))
            
            # Check step has handler
            if 'handler' not in step:
                issues.append(ValidationIssue(
                    message=f"Step {step_id} missing required field: handler",
                    severity=ValidationSeverity.WARNING,
                    file_path=workflow_path
                ))
        
        return issues
    
    def _validate_dependencies(self, steps: List[Dict], workflow_path: Path) -> List[ValidationIssue]:
        """Validate step dependencies."""
        issues = []
        step_ids = {step['id'] for step in steps if 'id' in step}
        
        for step in steps:
            if 'dependencies' not in step:
                continue
            
            dependencies = step['dependencies']
            if not isinstance(dependencies, list):
                issues.append(ValidationIssue(
                    message=f"Step {step.get('id', 'unknown')} dependencies must be a list",
                    severity=ValidationSeverity.ERROR,
                    file_path=workflow_path
                ))
                continue
            
            for dep in dependencies:
                if dep not in step_ids:
                    issues.append(ValidationIssue(
                        message=f"Step {step.get('id', 'unknown')} references non-existent dependency: {dep}",
                        severity=ValidationSeverity.ERROR,
                        file_path=workflow_path
                    ))
        
        return issues


#!/usr/bin/env python3
"""
Numbering & Versioning Framework Validator

Validates version file format and version schema compliance.

Part of: Epic 8, Story 2 - Additional Validators
Task: E8:S02:T02 - Build framework-specific validators
"""

import re
import sys
from pathlib import Path
from typing import Dict, List, Optional, Tuple

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


class VersionValidator(BaseValidator):
    """Validator for Numbering & Versioning framework version files."""
    
    def __init__(self, config: ValidatorConfig):
        super().__init__(config)
        self.version_file: Optional[Path] = None
        self.config_dict: Optional[Dict] = None
    
    def get_name(self) -> str:
        return "VersionValidator"
    
    def get_description(self) -> str:
        return "Validates version file format and version schema compliance"
    
    def get_supported_targets(self) -> List[str]:
        return ['version', 'version_file']
    
    def validate_input(self, **kwargs) -> Tuple[bool, List[str]]:
        """Validate input parameters."""
        errors = []
        
        version_file = kwargs.get('version_file')
        if version_file and not Path(version_file).exists():
            errors.append(f"Version file does not exist: {version_file}")
        
        return len(errors) == 0, errors
    
    def pre_validate(self, **kwargs) -> bool:
        """Load configuration and determine version file path."""
        # Load config file
        self.config_dict = self.load_config_file()
        
        # Determine version file path
        version_file = kwargs.get('version_file')
        if version_file:
            self.version_file = Path(version_file)
        elif self.config_dict and 'version_file' in self.config_dict:
            self.version_file = self.config.project_root / self.config_dict['version_file']
        else:
            # Default fallback
            self.version_file = self.config.project_root / "src/fynd_deals/version.py"
        
        if not self.version_file.exists():
            self.result.issues.append(ValidationIssue(
                message=f"Version file not found: {self.version_file}",
                severity=ValidationSeverity.ERROR
            ))
            return False
        
        return True
    
    def validate(self, **kwargs) -> ValidationResult:
        """Validate version file."""
        result = ValidationResult(status=ValidationStatus.PASS)
        
        if not self.version_file:
            result.status = ValidationStatus.FAIL
            result.issues.append(ValidationIssue(
                message="Version file not determined",
                severity=ValidationSeverity.ERROR
            ))
            return result
        
        # Read version file
        try:
            content = self.version_file.read_text(encoding='utf-8')
        except Exception as e:
            result.status = ValidationStatus.FAIL
            result.issues.append(ValidationIssue(
                message=f"Failed to read version file: {e}",
                severity=ValidationSeverity.ERROR,
                file_path=self.version_file
            ))
            return result
        
        # Validate version file structure
        structure_issues = self._validate_structure(content)
        result.issues.extend(structure_issues)
        
        # Validate version components
        component_issues = self._validate_components(content)
        result.issues.extend(component_issues)
        
        # Validate version string format
        format_issues = self._validate_version_string(content)
        result.issues.extend(format_issues)
        
        return result
    
    def _validate_structure(self, content: str) -> List[ValidationIssue]:
        """Validate version file structure."""
        issues = []
        
        # Check for required version components
        required_components = ['VERSION_RC', 'VERSION_EPIC', 'VERSION_STORY', 'VERSION_TASK', 'VERSION_BUILD', 'VERSION_STRING']
        for component in required_components:
            pattern = rf'{component}\s*='
            if not re.search(pattern, content):
                issues.append(ValidationIssue(
                    message=f"Version file missing required component: {component}",
                    severity=ValidationSeverity.ERROR,
                    file_path=self.version_file
                ))
        
        return issues
    
    def _validate_components(self, content: str) -> List[ValidationIssue]:
        """Validate version component values."""
        issues = []
        
        # Extract version components
        rc_match = re.search(r'VERSION_RC\s*=\s*(\d+)', content)
        epic_match = re.search(r'VERSION_EPIC\s*=\s*(\d+)', content)
        story_match = re.search(r'VERSION_STORY\s*=\s*(\d+)', content)
        task_match = re.search(r'VERSION_TASK\s*=\s*(\d+)', content)
        build_match = re.search(r'VERSION_BUILD\s*=\s*(\d+)', content)
        
        if not all([rc_match, epic_match, story_match, task_match, build_match]):
            issues.append(ValidationIssue(
                message="Version file missing one or more version components",
                severity=ValidationSeverity.ERROR,
                file_path=self.version_file
            ))
            return issues
        
        rc = int(rc_match.group(1))
        epic = int(epic_match.group(1))
        story = int(story_match.group(1))
        task = int(task_match.group(1))
        build = int(build_match.group(1))
        
        # Validate component ranges
        if rc < 0:
            issues.append(ValidationIssue(
                message=f"VERSION_RC must be >= 0, found: {rc}",
                severity=ValidationSeverity.ERROR,
                file_path=self.version_file
            ))
        
        if epic < 1:
            issues.append(ValidationIssue(
                message=f"VERSION_EPIC must be >= 1, found: {epic}",
                severity=ValidationSeverity.ERROR,
                file_path=self.version_file
            ))
        
        if story < 1:
            issues.append(ValidationIssue(
                message=f"VERSION_STORY must be >= 1, found: {story}",
                severity=ValidationSeverity.ERROR,
                file_path=self.version_file
            ))
        
        if task < 1:
            issues.append(ValidationIssue(
                message=f"VERSION_TASK must be >= 1, found: {task}",
                severity=ValidationSeverity.ERROR,
                file_path=self.version_file
            ))
        
        if build < 0:
            issues.append(ValidationIssue(
                message=f"VERSION_BUILD must be >= 0, found: {build}",
                severity=ValidationSeverity.ERROR,
                file_path=self.version_file
            ))
        
        return issues
    
    def _validate_version_string(self, content: str) -> List[ValidationIssue]:
        """Validate VERSION_STRING format."""
        issues = []
        
        # Extract version string
        version_string_match = re.search(r'VERSION_STRING\s*=\s*["\']?([^"\']+)["\']?', content)
        if not version_string_match:
            issues.append(ValidationIssue(
                message="VERSION_STRING not found or invalid format",
                severity=ValidationSeverity.ERROR,
                file_path=self.version_file
            ))
            return issues
        
        version_string = version_string_match.group(1).strip()
        
        # Validate version string format: RC.EPIC.STORY.TASK+BUILD
        version_pattern = r'^(\d+)\.(\d+)\.(\d+)\.(\d+)\+(\d+)$'
        match = re.match(version_pattern, version_string)
        if not match:
            issues.append(ValidationIssue(
                message=f"VERSION_STRING format invalid: {version_string} (expected RC.EPIC.STORY.TASK+BUILD)",
                severity=ValidationSeverity.ERROR,
                file_path=self.version_file
            ))
            return issues
        
        # Extract components from version string
        v_rc, v_epic, v_story, v_task, v_build = map(int, match.groups())
        
        # Extract components from file
        rc_match = re.search(r'VERSION_RC\s*=\s*(\d+)', content)
        epic_match = re.search(r'VERSION_EPIC\s*=\s*(\d+)', content)
        story_match = re.search(r'VERSION_STORY\s*=\s*(\d+)', content)
        task_match = re.search(r'VERSION_TASK\s*=\s*(\d+)', content)
        build_match = re.search(r'VERSION_BUILD\s*=\s*(\d+)', content)
        
        if all([rc_match, epic_match, story_match, task_match, build_match]):
            rc = int(rc_match.group(1))
            epic = int(epic_match.group(1))
            story = int(story_match.group(1))
            task = int(task_match.group(1))
            build = int(build_match.group(1))
            
            # Check consistency
            if (rc, epic, story, task, build) != (v_rc, v_epic, v_story, v_task, v_build):
                issues.append(ValidationIssue(
                    message=f"VERSION_STRING components don't match individual components: {version_string} vs RC={rc}, EPIC={epic}, STORY={story}, TASK={task}, BUILD={build}",
                    severity=ValidationSeverity.ERROR,
                    file_path=self.version_file
                ))
        
        return issues


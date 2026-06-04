#!/usr/bin/env python3
"""
Kanban Framework Validator

Validates Kanban document structure, naming conventions, and consistency.

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


class KanbanValidator(BaseValidator):
    """Validator for Kanban framework documents."""
    
    def __init__(self, config: ValidatorConfig):
        super().__init__(config)
        self.kanban_root: Optional[Path] = None
        self.config_dict: Optional[Dict] = None
    
    def get_name(self) -> str:
        return "KanbanValidator"
    
    def get_description(self) -> str:
        return "Validates Kanban document structure, naming conventions, and consistency"
    
    def get_supported_targets(self) -> List[str]:
        return ['kanban', 'epic', 'story', 'task']
    
    def validate_input(self, **kwargs) -> Tuple[bool, List[str]]:
        """Validate input parameters."""
        errors = []
        
        # Kanban root is optional - will be auto-detected
        kanban_root = kwargs.get('kanban_root')
        if kanban_root and not Path(kanban_root).exists():
            errors.append(f"Kanban root directory does not exist: {kanban_root}")
        
        return len(errors) == 0, errors
    
    def pre_validate(self, **kwargs) -> bool:
        """Load configuration and determine kanban root."""
        # Load config file
        self.config_dict = self.load_config_file()
        
        # Determine kanban root
        kanban_root = kwargs.get('kanban_root')
        if kanban_root:
            self.kanban_root = Path(kanban_root)
        elif self.config_dict and self.config_dict.get('use_kanban') and 'kanban_root' in self.config_dict:
            self.kanban_root = self.config.project_root / self.config_dict['kanban_root']
        else:
            # Default fallback
            self.kanban_root = self.config.project_root / "docs/project-management/kanban"
        
        if not self.kanban_root.exists():
            self.result.issues.append(ValidationIssue(
                message=f"Kanban root directory not found: {self.kanban_root}",
                severity=ValidationSeverity.ERROR
            ))
            return False
        
        return True
    
    def validate(self, **kwargs) -> ValidationResult:
        """Validate Kanban documents."""
        result = ValidationResult(status=ValidationStatus.PASS)
        
        if not self.kanban_root:
            result.status = ValidationStatus.FAIL
            result.issues.append(ValidationIssue(
                message="Kanban root not determined",
                severity=ValidationSeverity.ERROR
            ))
            return result
        
        # Validate epic documents
        epic_issues = self._validate_epics()
        result.issues.extend(epic_issues)
        
        # Validate story documents
        story_issues = self._validate_stories()
        result.issues.extend(story_issues)
        
        # Validate task documents
        task_issues = self._validate_tasks()
        result.issues.extend(task_issues)
        
        # Validate consistency
        consistency_issues = self._validate_consistency()
        result.issues.extend(consistency_issues)
        
        return result
    
    def _validate_epics(self) -> List[ValidationIssue]:
        """Validate Epic documents."""
        issues = []
        epics_dir = self.kanban_root / "epics"
        
        if not epics_dir.exists():
            return issues
        
        # Find all epic directories
        for epic_dir in epics_dir.iterdir():
            if not epic_dir.is_dir():
                continue
            
            # Check epic naming: Epic-{N}
            epic_match = re.match(r'^Epic-(\d+)$', epic_dir.name)
            if not epic_match:
                issues.append(ValidationIssue(
                    message=f"Invalid Epic directory name: {epic_dir.name} (expected Epic-{{N}})",
                    severity=ValidationSeverity.ERROR,
                    file_path=epic_dir
                ))
                continue
            
            epic_num = int(epic_match.group(1))
            
            # Check Epic document exists
            epic_doc = epic_dir / f"Epic-{epic_num}.md"
            if not epic_doc.exists():
                issues.append(ValidationIssue(
                    message=f"Epic document not found: {epic_doc.name}",
                    severity=ValidationSeverity.ERROR,
                    file_path=epic_dir
                ))
                continue
            
            # Validate Epic document structure
            epic_content = epic_doc.read_text(encoding='utf-8')
            epic_doc_issues = self._validate_epic_document(epic_doc, epic_content, epic_num)
            issues.extend(epic_doc_issues)
        
        return issues
    
    def _validate_epic_document(self, epic_path: Path, content: str, epic_num: int) -> List[ValidationIssue]:
        """Validate a single Epic document."""
        issues = []
        
        # Check for required fields
        required_fields = ['Status', 'Last updated', 'Version']
        for field in required_fields:
            pattern = rf'\*\*{re.escape(field)}:\*\*'
            if not re.search(pattern, content, re.IGNORECASE):
                issues.append(ValidationIssue(
                    message=f"Epic document missing required field: {field}",
                    severity=ValidationSeverity.ERROR,
                    file_path=epic_path
                ))
        
        # Check for Story Checklist
        if '## Story Checklist' not in content and 'Story Checklist' not in content:
            issues.append(ValidationIssue(
                message="Epic document missing Story Checklist",
                severity=ValidationSeverity.WARNING,
                file_path=epic_path
            ))
        
        return issues
    
    def _validate_stories(self) -> List[ValidationIssue]:
        """Validate Story documents."""
        issues = []
        epics_dir = self.kanban_root / "epics"
        
        if not epics_dir.exists():
            return issues
        
        for epic_dir in epics_dir.iterdir():
            if not epic_dir.is_dir():
                continue
            
            epic_match = re.match(r'^Epic-(\d+)$', epic_dir.name)
            if not epic_match:
                continue
            
            epic_num = int(epic_match.group(1))
            
            # Find story files
            story_files = list(epic_dir.glob("Story-*.md"))
            for story_file in story_files:
                # Check story naming: Story-{NNN}-{description}
                story_match = re.match(r'^Story-(\d{3})-(.+)\.md$', story_file.name)
                if not story_match:
                    issues.append(ValidationIssue(
                        message=f"Invalid Story file name: {story_file.name} (expected Story-{{NNN}}-{{description}}.md)",
                        severity=ValidationSeverity.ERROR,
                        file_path=story_file
                    ))
                    continue
                
                story_num = int(story_match.group(1))
                
                # Validate Story document structure
                story_content = story_file.read_text(encoding='utf-8')
                story_issues = self._validate_story_document(story_file, story_content, epic_num, story_num)
                issues.extend(story_issues)
        
        return issues
    
    def _validate_story_document(self, story_path: Path, content: str, epic_num: int, story_num: int) -> List[ValidationIssue]:
        """Validate a single Story document."""
        issues = []
        
        # Check for required fields
        required_fields = ['Status', 'Last updated', 'Version']
        for field in required_fields:
            pattern = rf'\*\*{re.escape(field)}:\*\*'
            if not re.search(pattern, content, re.IGNORECASE):
                issues.append(ValidationIssue(
                    message=f"Story document missing required field: {field}",
                    severity=ValidationSeverity.ERROR,
                    file_path=story_path
                ))
        
        # Check for Task Checklist
        if '## Task Checklist' not in content and 'Task Checklist' not in content:
            issues.append(ValidationIssue(
                message="Story document missing Task Checklist",
                severity=ValidationSeverity.WARNING,
                file_path=story_path
            ))
        
        # Validate task references in checklist
        task_pattern = rf'E{epic_num}:S{story_num}:T(\d+)'
        task_matches = re.findall(task_pattern, content)
        for task_num in task_matches:
            # Check if task document exists
            task_file_patterns = [
                story_path.parent / f"T{int(task_num):02d}-*.md",
                story_path.parent / f"Task-{int(task_num):03d}-*.md",
            ]
            
            task_found = False
            for pattern in task_file_patterns:
                if list(story_path.parent.glob(pattern.name)):
                    task_found = True
                    break
            
            # Also check for delimited section in story file
            if not task_found:
                delimited_pattern = rf'###\s+E{epic_num}:S{story_num}:T{int(task_num):02d}'
                if re.search(delimited_pattern, content, re.IGNORECASE):
                    task_found = True
            
            if not task_found:
                issues.append(ValidationIssue(
                    message=f"Task E{epic_num}:S{story_num}:T{task_num} referenced in checklist but no task document found",
                    severity=ValidationSeverity.ERROR,
                    file_path=story_path
                ))
        
        return issues
    
    def _validate_tasks(self) -> List[ValidationIssue]:
        """Validate Task documents."""
        issues = []
        epics_dir = self.kanban_root / "epics"
        
        if not epics_dir.exists():
            return issues
        
        for epic_dir in epics_dir.iterdir():
            if not epic_dir.is_dir():
                continue
            
            # Find task files
            task_files = list(epic_dir.rglob("T*.md")) + list(epic_dir.rglob("Task-*.md"))
            for task_file in task_files:
                # Skip if it's a story file
                if task_file.name.startswith("Story-"):
                    continue
                
                # Validate task document structure
                task_content = task_file.read_text(encoding='utf-8')
                task_issues = self._validate_task_document(task_file, task_content)
                issues.extend(task_issues)
        
        return issues
    
    def _validate_task_document(self, task_path: Path, content: str) -> List[ValidationIssue]:
        """Validate a single Task document."""
        issues = []
        
        # Check for Task ID
        task_id_pattern = r'E(\d+):S(\d+):T(\d+)'
        task_id_match = re.search(task_id_pattern, content)
        if not task_id_match:
            issues.append(ValidationIssue(
                message="Task document missing Task ID (E{epic}:S{story}:T{task})",
                severity=ValidationSeverity.ERROR,
                file_path=task_path
            ))
        
        # Check for required fields
        required_fields = ['Status']
        for field in required_fields:
            pattern = rf'\*\*{re.escape(field)}:\*\*'
            if not re.search(pattern, content, re.IGNORECASE):
                issues.append(ValidationIssue(
                    message=f"Task document missing required field: {field}",
                    severity=ValidationSeverity.ERROR,
                    file_path=task_path
                ))
        
        return issues
    
    def _validate_consistency(self) -> List[ValidationIssue]:
        """Validate consistency across Kanban documents."""
        issues = []
        
        # This would check:
        # - Version markers consistency
        # - Status consistency
        # - Cross-references validity
        
        # For now, return empty list (can be expanded)
        return issues


#!/usr/bin/env python3
"""
Base Validator Framework

Abstract base class and interfaces for all validators.

Part of: Epic 8, Story 2 - Additional Validators
Task: E8:S02:T01 - Create validator framework
"""

from abc import ABC, abstractmethod
from dataclasses import dataclass, field
from datetime import datetime
from enum import Enum
from pathlib import Path
from typing import Any, Dict, List, Optional, Tuple


class ValidationStatus(Enum):
    """Status of a validation execution."""
    PASS = "PASS"
    FAIL = "FAIL"
    WARN = "WARN"
    SKIP = "SKIP"


class ValidationSeverity(Enum):
    """Severity level of a validation issue."""
    ERROR = "ERROR"
    WARNING = "WARNING"
    INFO = "INFO"


@dataclass
class ValidationIssue:
    """A single validation issue."""
    message: str
    severity: ValidationSeverity
    file_path: Optional[Path] = None
    line_number: Optional[int] = None
    column_number: Optional[int] = None
    context: Dict[str, Any] = field(default_factory=dict)


@dataclass
class ValidationResult:
    """Result of a validator execution."""
    status: ValidationStatus
    issues: List[ValidationIssue] = field(default_factory=list)
    metadata: Dict[str, Any] = field(default_factory=dict)
    execution_time: Optional[float] = None  # in seconds
    
    def is_pass(self) -> bool:
        """Check if validation passed."""
        return self.status == ValidationStatus.PASS
    
    def is_fail(self) -> bool:
        """Check if validation failed."""
        return self.status == ValidationStatus.FAIL
    
    def has_errors(self) -> bool:
        """Check if there are any errors."""
        return any(issue.severity == ValidationSeverity.ERROR for issue in self.issues)
    
    def has_warnings(self) -> bool:
        """Check if there are any warnings."""
        return any(issue.severity == ValidationSeverity.WARNING for issue in self.issues)
    
    def get_errors(self) -> List[ValidationIssue]:
        """Get all error issues."""
        return [issue for issue in self.issues if issue.severity == ValidationSeverity.ERROR]
    
    def get_warnings(self) -> List[ValidationIssue]:
        """Get all warning issues."""
        return [issue for issue in self.issues if issue.severity == ValidationSeverity.WARNING]
    
    def get_info(self) -> List[ValidationIssue]:
        """Get all info issues."""
        return [issue for issue in self.issues if issue.severity == ValidationSeverity.INFO]


@dataclass
class ValidatorConfig:
    """Configuration for a validator."""
    project_root: Path = Path.cwd()
    strict_mode: bool = False
    verbose: bool = False
    fail_on_warnings: bool = False
    config_file: Optional[Path] = None  # e.g., rw-config.yaml
    custom_params: Dict[str, Any] = field(default_factory=dict)
    
    def __post_init__(self):
        """Normalize paths."""
        if isinstance(self.project_root, str):
            self.project_root = Path(self.project_root)
        if isinstance(self.config_file, str):
            self.config_file = Path(self.config_file)


class BaseValidator(ABC):
    """
    Abstract base class for all validators.
    
    Defines the core interface and a common execution workflow.
    """
    
    def __init__(self, config: ValidatorConfig):
        self.config = config
        self.result = ValidationResult(status=ValidationStatus.SKIP)
        self._start_time: Optional[datetime] = None
    
    @abstractmethod
    def get_name(self) -> str:
        """Return the name of the validator."""
        pass
    
    @abstractmethod
    def get_description(self) -> str:
        """Return a brief description of the validator."""
        pass
    
    def validate_input(self, **kwargs) -> Tuple[bool, List[str]]:
        """
        Validate input parameters before validation.
        
        Args:
            **kwargs: Input parameters for the validator.
        
        Returns:
            A tuple: (is_valid, list_of_errors)
        """
        return True, []
    
    def pre_validate(self, **kwargs) -> bool:
        """
        Hook for pre-validation logic.
        
        Can be used to perform setup, check conditions, or decide to skip validation.
        
        Args:
            **kwargs: Input parameters for the validator.
        
        Returns:
            True to proceed with validation, False to skip.
        """
        return True
    
    @abstractmethod
    def validate(self, **kwargs) -> ValidationResult:
        """
        Core validation logic.
        
        This method should perform the actual validation and return a ValidationResult.
        
        Args:
            **kwargs: Input parameters for the validator.
        
        Returns:
            ValidationResult with details of the validation.
        """
        pass
    
    def post_validate(self, result: ValidationResult, **kwargs) -> ValidationResult:
        """
        Hook for post-validation logic.
        
        Can be used to perform cleanup, logging, or additional processing.
        
        Args:
            result: The result object from the validate method.
            **kwargs: Original input parameters for the validator.
        
        Returns:
            The potentially modified ValidationResult.
        """
        return result
    
    def run(self, **kwargs) -> ValidationResult:
        """
        Execute the full validator workflow.
        
        Args:
            **kwargs: Validator-specific input parameters
        
        Returns:
            ValidationResult with complete execution details
        """
        self._start_time = datetime.now()
        self.result = ValidationResult(status=ValidationStatus.SKIP)
        
        # Step 1: Validate input
        is_valid, errors = self.validate_input(**kwargs)
        if not is_valid:
            self.result.status = ValidationStatus.FAIL
            for error in errors:
                self.result.issues.append(ValidationIssue(
                    message=error,
                    severity=ValidationSeverity.ERROR
                ))
            return self.result
        
        # Step 2: Pre-validate hook
        if not self.pre_validate(**kwargs):
            self.result.status = ValidationStatus.SKIP
            self.result.issues.append(ValidationIssue(
                message="Validation skipped by pre_validate hook",
                severity=ValidationSeverity.INFO
            ))
            return self.result
        
        # Step 3: Validate
        try:
            self.result = self.validate(**kwargs)
        except Exception as e:
            self.result.status = ValidationStatus.FAIL
            self.result.issues.append(ValidationIssue(
                message=f"Validation failed with exception: {str(e)}",
                severity=ValidationSeverity.ERROR,
                context={'exception_type': type(e).__name__}
            ))
            import traceback
            self.result.metadata['traceback'] = traceback.format_exc()
        
        # Step 4: Post-validate hook
        self.result = self.post_validate(self.result, **kwargs)
        
        # Step 5: Determine final status
        if self.result.status == ValidationStatus.SKIP:
            pass  # Keep SKIP status
        elif self.result.has_errors():
            self.result.status = ValidationStatus.FAIL
        elif self.result.has_warnings() and self.config.fail_on_warnings:
            self.result.status = ValidationStatus.FAIL
        elif self.result.has_warnings():
            self.result.status = ValidationStatus.WARN
        else:
            self.result.status = ValidationStatus.PASS
        
        # Calculate execution time
        if self._start_time:
            end_time = datetime.now()
            self.result.execution_time = (end_time - self._start_time).total_seconds()
        
        return self.result
    
    def load_config_file(self) -> Optional[Dict[str, Any]]:
        """
        Load configuration from config file (e.g., rw-config.yaml).
        
        Returns:
            Config dictionary or None if not available
        """
        if self.config.config_file:
            config_path = self.config.config_file
        else:
            config_path = self.config.project_root / "rw-config.yaml"
        
        if not config_path.exists():
            return None
        
        try:
            import yaml
            with open(config_path, 'r', encoding='utf-8') as f:
                return yaml.safe_load(f)
        except Exception:
            return None
    
    def get_supported_targets(self) -> List[str]:
        """
        Return a list of supported validation targets (e.g., 'changelog', 'version', 'branch').
        Default to an empty list if not applicable.
        """
        return []


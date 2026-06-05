"""
Validator Framework

A comprehensive framework for building validators for code, configuration, and documentation.

Part of: Epic 8, Story 2 - Additional Validators
Task: E8:S02:T01 - Create validator framework
"""

from .base import (
    BaseValidator,
    ValidationResult,
    ValidationSeverity,
    ValidationStatus,
    ValidatorConfig,
)

# Framework-specific validators
from .framework import (
    DocumentLifecycleValidator,
    KanbanValidator,
    VersionValidator,
    WorkflowValidator,
)
from .registry import ValidatorRegistry

__all__ = [
    'BaseValidator',
    'ValidatorConfig',
    'ValidationResult',
    'ValidationStatus',
    'ValidationSeverity',
    'ValidatorRegistry',
    # Framework validators
    'KanbanValidator',
    'WorkflowValidator',
    'VersionValidator',
    'DocumentLifecycleValidator',
]


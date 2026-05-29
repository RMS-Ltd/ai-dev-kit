"""
Code Generator Framework

A comprehensive framework for building code generators for common framework patterns and templates.

This package provides:
- Base generator classes and interfaces
- Template-based generation utilities
- Common generation patterns
- Generator registry and discovery

Part of: Epic 8 - Tooling & Automation
Story: E8:S01 - Code Generators
"""

from .base import BaseGenerator, GeneratorResult, GeneratorConfig, TemplateBasedGenerator
from .registry import GeneratorRegistry
from .template_engine import TemplateEngine
from .workflow_generator import WorkflowGenerator
from .kanban_template_generator import KanbanTemplateGenerator

__all__ = [
    'BaseGenerator',
    'TemplateBasedGenerator',
    'GeneratorResult',
    'GeneratorConfig',
    'GeneratorRegistry',
    'TemplateEngine',
    'WorkflowGenerator',
    'KanbanTemplateGenerator',
]


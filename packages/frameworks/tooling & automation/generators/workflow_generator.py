#!/usr/bin/env python3
"""
Workflow Generator

Template-based generator for creating workflow YAML files.

Part of: Epic 8, Story 1 - Code Generators
Task: E8:S01:T02 - Build template-based generators
"""

import sys
from pathlib import Path
from typing import Tuple, List, Dict, Any

# Add generators directory to path
generators_path = Path(__file__).parent
if str(generators_path) not in sys.path:
    sys.path.insert(0, str(generators_path))

from generators.base import (
    TemplateBasedGenerator,
    GeneratorConfig,
    GeneratorResult,
    GeneratorStatus
)


class WorkflowGenerator(TemplateBasedGenerator):
    """Generator for workflow YAML files."""
    
    def get_name(self) -> str:
        return "WorkflowGenerator"
    
    def get_description(self) -> str:
        return "Generates workflow YAML files from templates"
    
    def validate_input(self, **kwargs) -> Tuple[bool, List[str]]:
        """Validate input parameters."""
        errors: List[str] = []
        
        if 'workflow_name' not in kwargs:
            errors.append("Missing required parameter: workflow_name")
        
        if 'workflow_type' not in kwargs:
            errors.append("Missing required parameter: workflow_type")
        
        return len(errors) == 0, errors
    
    def generate(self, **kwargs) -> GeneratorResult:
        """Generate workflow YAML file."""
        result = GeneratorResult(status=GeneratorStatus.SUCCESS)
        
        workflow_name = kwargs['workflow_name']
        workflow_type = kwargs.get('workflow_type', 'custom')
        version = kwargs.get('version', '1.0.0')
        description = kwargs.get('description', f'{workflow_name} workflow')
        
        # Build context for template
        context = {
            'workflow_name': workflow_name,
            'workflow_type': workflow_type,
            'version': version,
            'description': description,
            'created_date': kwargs.get('created_date', '2026-01-05'),
        }
        
        # Determine output path
        workflow_name_slug = workflow_name.lower().replace(' ', '-')
        output_path = self.config.output_dir / f"{workflow_name_slug}-workflow.yaml"
        
        # Load and render template
        template_name = kwargs.get('template', 'workflow-template.yaml')
        rendered = self.render_template(template_name, context, output_path)
        
        if rendered is None:
            result.status = GeneratorStatus.FAILED
            result.errors.append(f"Failed to render template: {template_name}")
        elif not self.config.dry_run and output_path not in result.output_paths:
            # render_template already added to output_paths if successful
            pass
        
        return result
    
    def get_required_params(self) -> List[str]:
        """Get required parameters."""
        return ['workflow_name', 'workflow_type']
    
    def get_optional_params(self) -> Dict[str, Any]:
        """Get optional parameters with defaults."""
        return {
            'version': '1.0.0',
            'description': None,
            'template': 'workflow-template.yaml',
            'created_date': None,
        }


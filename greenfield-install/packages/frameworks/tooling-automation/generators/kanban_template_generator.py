#!/usr/bin/env python3
"""
Kanban Template Generator

Template-based generator for creating Epic, Story, and Task documents.

Part of: Epic 8, Story 1 - Code Generators
Task: E8:S01:T02 - Build template-based generators
"""

import sys
from pathlib import Path
from typing import Tuple, List, Dict, Any
from datetime import datetime

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


class KanbanTemplateGenerator(TemplateBasedGenerator):
    """Generator for Kanban Epic, Story, and Task documents."""
    
    def get_name(self) -> str:
        return "KanbanTemplateGenerator"
    
    def get_description(self) -> str:
        return "Generates Kanban Epic, Story, and Task documents from templates"
    
    def validate_input(self, **kwargs) -> Tuple[bool, List[str]]:
        """Validate input parameters."""
        errors: List[str] = []
        
        if 'doc_type' not in kwargs:
            errors.append("Missing required parameter: doc_type (epic, story, or task)")
        else:
            doc_type = kwargs['doc_type'].lower()
            if doc_type not in ['epic', 'story', 'task']:
                errors.append(f"Invalid doc_type: {doc_type}. Must be 'epic', 'story', or 'task'")
        
        if 'epic' not in kwargs:
            errors.append("Missing required parameter: epic")
        
        if kwargs.get('doc_type', '').lower() in ['story', 'task']:
            if 'story' not in kwargs:
                errors.append("Missing required parameter: story (required for story/task)")
        
        if kwargs.get('doc_type', '').lower() == 'task':
            if 'task' not in kwargs:
                errors.append("Missing required parameter: task (required for task)")
        
        return len(errors) == 0, errors
    
    def generate(self, **kwargs) -> GeneratorResult:
        """Generate Kanban document."""
        result = GeneratorResult(status=GeneratorStatus.SUCCESS)
        
        doc_type = kwargs['doc_type'].lower()
        epic = kwargs['epic']
        story = kwargs.get('story')
        task = kwargs.get('task')
        
        # Build context for template
        context = {
            'epic': epic,
            'epic_padded': f"{epic:02d}",
            'story': story if story else None,
            'story_padded': f"{story:02d}" if story else None,
            'task': task if task else None,
            'task_padded': f"{task:02d}" if task else None,
            'title': kwargs.get('title', ''),
            'description': kwargs.get('description', ''),
            'priority': kwargs.get('priority', 'MEDIUM'),
            'status': kwargs.get('status', 'TODO'),
            'created_date': kwargs.get('created_date', datetime.now().strftime('%Y-%m-%d')),
            'version': kwargs.get('version', f'0.{epic}.{story if story else 0}.{task if task else 0}+0'),
        }
        
        # Determine output path and template
        if doc_type == 'epic':
            template_name = 'epic-template.md'
            output_path = self.config.output_dir / f"Epic-{epic}" / f"Epic-{epic}.md"
        elif doc_type == 'story':
            template_name = 'story-template.md'
            story_slug = kwargs.get('story_slug', f'Story-{story:03d}')
            output_path = self.config.output_dir / f"Epic-{epic}" / f"{story_slug}.md"
        else:  # task
            template_name = 'task-template.md'
            story_slug = kwargs.get('story_slug', f'Story-{story:03d}')
            task_slug = kwargs.get('task_slug', f'T{task:02d}')
            output_path = self.config.output_dir / f"Epic-{epic}" / story_slug / f"{task_slug}.md"
        
        # Load and render template
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
        return ['doc_type', 'epic']
    
    def get_optional_params(self) -> Dict[str, Any]:
        """Get optional parameters with defaults."""
        return {
            'story': None,
            'task': None,
            'title': '',
            'description': '',
            'priority': 'MEDIUM',
            'status': 'TODO',
            'created_date': None,
            'version': None,
            'story_slug': None,
            'task_slug': None,
        }


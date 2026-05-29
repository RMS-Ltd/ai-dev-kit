#!/usr/bin/env python3
"""
Template Engine

Template rendering engine for code generators.

Part of: Epic 8, Story 1 - Code Generators
Task: E8:S01:T01 - Create generator framework
"""

from pathlib import Path
from typing import Dict, Any, Optional
import re


class TemplateEngine:
    """
    Simple template engine for variable substitution.
    
    Supports:
    - Simple variable substitution: {variable_name}
    - Conditional blocks: {if condition}...{/if}
    - Loops: {for item in items}...{/for}
    
    Can be extended to support more complex templating (Jinja2, etc.)
    """
    
    def __init__(self, template_dir: Optional[Path] = None):
        """
        Initialize template engine.
        
        Args:
            template_dir: Optional directory for template files
        """
        self.template_dir = template_dir
        self._template_cache: Dict[str, str] = {}
    
    def load_template(self, template_name: str) -> Optional[str]:
        """
        Load a template file.
        
        Args:
            template_name: Name of template file (relative to template_dir or absolute path)
        
        Returns:
            Template content or None if not found
        """
        if template_name in self._template_cache:
            return self._template_cache[template_name]
        
        template_path = Path(template_name)
        if not template_path.is_absolute() and self.template_dir:
            template_path = self.template_dir / template_name
        
        if not template_path.exists():
            return None
        
        try:
            content = template_path.read_text(encoding='utf-8')
            self._template_cache[template_name] = content
            return content
        except Exception as e:
            return None
    
    def render(self, template: str, context: Dict[str, Any]) -> str:
        """
        Render a template with context variables.
        
        Args:
            template: Template content (string)
            context: Dictionary of variables to substitute
        
        Returns:
            Rendered content
        """
        result = template
        
        # Handle conditional blocks: {if condition}...{/if}
        result = self._render_conditionals(result, context)
        
        # Handle loops: {for item in items}...{/for}
        result = self._render_loops(result, context)
        
        # Simple variable substitution: {variable_name}
        for key, value in context.items():
            placeholder = f"{{{key}}}"
            result = result.replace(placeholder, str(value))
        
        return result
    
    def _render_conditionals(self, template: str, context: Dict[str, Any]) -> str:
        """
        Render conditional blocks: {if condition}...{/if}
        
        Args:
            template: Template content
            context: Context variables
        
        Returns:
            Template with conditionals rendered
        """
        pattern = r'\{if\s+(\w+)\}(.*?)\{/if\}'
        
        def replace_conditional(match):
            condition = match.group(1)
            content = match.group(2)
            
            # Check if condition is truthy in context
            condition_value = context.get(condition, False)
            if condition_value:
                return content
            return ''
        
        return re.sub(pattern, replace_conditional, template, flags=re.DOTALL)
    
    def _render_loops(self, template: str, context: Dict[str, Any]) -> str:
        """
        Render loop blocks: {for item in items}...{/for}
        
        Args:
            template: Template content
            context: Context variables
        
        Returns:
            Template with loops rendered
        """
        pattern = r'\{for\s+(\w+)\s+in\s+(\w+)\}(.*?)\{/for\}'
        
        def replace_loop(match):
            item_var = match.group(1)
            items_var = match.group(2)
            content = match.group(3)
            
            items = context.get(items_var, [])
            if not isinstance(items, list):
                return ''
            
            result_parts = []
            for item in items:
                # Create nested context for loop iteration
                loop_context = context.copy()
                loop_context[item_var] = item
                # Render content with loop context
                rendered = self.render(content, loop_context)
                result_parts.append(rendered)
            
            return '\n'.join(result_parts)
        
        return re.sub(pattern, replace_loop, template, flags=re.DOTALL)
    
    def render_file(
        self,
        template_name: str,
        context: Dict[str, Any],
        output_path: Optional[Path] = None
    ) -> Optional[str]:
        """
        Load and render a template file.
        
        Args:
            template_name: Name of template file
            context: Context variables
            output_path: Optional output path (if None, returns rendered content)
        
        Returns:
            Rendered content or None if rendering failed
        """
        template_content = self.load_template(template_name)
        if not template_content:
            return None
        
        rendered = self.render(template_content, context)
        
        if output_path:
            try:
                output_path.parent.mkdir(parents=True, exist_ok=True)
                output_path.write_text(rendered, encoding='utf-8')
            except Exception:
                return None
        
        return rendered
    
    def clear_cache(self) -> None:
        """Clear the template cache."""
        self._template_cache.clear()


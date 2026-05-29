#!/usr/bin/env python3
"""
Base Generator Framework

Abstract base class and interfaces for all code generators.

Part of: Epic 8, Story 1 - Code Generators
Task: E8:S01:T01 - Create generator framework
"""

from abc import ABC, abstractmethod
from dataclasses import dataclass, field
from pathlib import Path
from typing import Dict, List, Optional, Any
from enum import Enum
from datetime import datetime


class GeneratorStatus(Enum):
    """Status of generator execution."""
    SUCCESS = "success"
    PARTIAL = "partial"
    FAILED = "failed"
    SKIPPED = "skipped"


@dataclass
class GeneratorResult:
    """Result of generator execution."""
    status: GeneratorStatus
    output_paths: List[Path] = field(default_factory=list)
    errors: List[str] = field(default_factory=list)
    warnings: List[str] = field(default_factory=list)
    metadata: Dict[str, Any] = field(default_factory=dict)
    execution_time: Optional[float] = None
    
    def is_success(self) -> bool:
        """Check if generation was successful."""
        return self.status == GeneratorStatus.SUCCESS
    
    def has_errors(self) -> bool:
        """Check if generation had errors."""
        return len(self.errors) > 0
    
    def has_warnings(self) -> bool:
        """Check if generation had warnings."""
        return len(self.warnings) > 0


@dataclass
class GeneratorConfig:
    """Configuration for generator execution."""
    output_dir: Path
    template_dir: Optional[Path] = None
    overwrite: bool = False
    dry_run: bool = False
    verbose: bool = False
    validate_output: bool = True
    custom_params: Dict[str, Any] = field(default_factory=dict)
    
    def __post_init__(self):
        """Ensure output_dir is a Path object."""
        if isinstance(self.output_dir, str):
            self.output_dir = Path(self.output_dir)
        if self.template_dir and isinstance(self.template_dir, str):
            self.template_dir = Path(self.template_dir)


class BaseGenerator(ABC):
    """
    Abstract base class for all code generators.
    
    All generators must inherit from this class and implement:
    - `generate()` - Main generation method
    - `validate_input()` - Input validation
    - `get_name()` - Generator name
    - `get_description()` - Generator description
    
    Optional methods:
    - `validate_output()` - Output validation
    - `pre_generate()` - Pre-generation hooks
    - `post_generate()` - Post-generation hooks
    """
    
    def __init__(self, config: GeneratorConfig):
        """
        Initialize the generator.
        
        Args:
            config: Generator configuration
        """
        self.config = config
        self.result = GeneratorResult(status=GeneratorStatus.FAILED)
        self._start_time: Optional[datetime] = None
    
    @abstractmethod
    def get_name(self) -> str:
        """
        Get the generator name.
        
        Returns:
            Generator name (e.g., "WorkflowGenerator", "TaskTemplateGenerator")
        """
        pass
    
    @abstractmethod
    def get_description(self) -> str:
        """
        Get the generator description.
        
        Returns:
            Human-readable description of what the generator does
        """
        pass
    
    @abstractmethod
    def validate_input(self, **kwargs) -> Tuple[bool, List[str]]:
        """
        Validate generator input parameters.
        
        Args:
            **kwargs: Generator-specific input parameters
        
        Returns:
            (is_valid, error_messages)
        """
        pass
    
    @abstractmethod
    def generate(self, **kwargs) -> GeneratorResult:
        """
        Execute the generator.
        
        Args:
            **kwargs: Generator-specific input parameters
        
        Returns:
            GeneratorResult with status, output paths, errors, warnings
        """
        pass
    
    def validate_output(self, result: GeneratorResult) -> Tuple[bool, List[str]]:
        """
        Validate generator output (optional).
        
        Args:
            result: Generator result to validate
        
        Returns:
            (is_valid, error_messages)
        """
        # Default implementation: check if files exist
        errors = []
        for output_path in result.output_paths:
            if not output_path.exists():
                errors.append(f"Output file does not exist: {output_path}")
        return len(errors) == 0, errors
    
    def pre_generate(self, **kwargs) -> bool:
        """
        Pre-generation hook (optional).
        
        Called before generate(). Can be used for setup, validation, etc.
        
        Args:
            **kwargs: Generator-specific input parameters
        
        Returns:
            True to proceed with generation, False to abort
        """
        return True
    
    def post_generate(self, result: GeneratorResult, **kwargs) -> GeneratorResult:
        """
        Post-generation hook (optional).
        
        Called after generate(). Can be used for cleanup, additional processing, etc.
        
        Args:
            result: Generator result
            **kwargs: Generator-specific input parameters
        
        Returns:
            Modified or original GeneratorResult
        """
        return result
    
    def run(self, **kwargs) -> GeneratorResult:
        """
        Run the complete generator workflow.
        
        This method orchestrates the full generation process:
        1. Validate input
        2. Pre-generate hook
        3. Generate
        4. Validate output (if enabled)
        5. Post-generate hook
        
        Args:
            **kwargs: Generator-specific input parameters
        
        Returns:
            GeneratorResult with complete execution details
        """
        import time
        
        self._start_time = datetime.now()
        
        # Step 1: Validate input
        is_valid, errors = self.validate_input(**kwargs)
        if not is_valid:
            self.result.status = GeneratorStatus.FAILED
            self.result.errors.extend(errors)
            return self.result
        
        # Step 2: Pre-generate hook
        if not self.pre_generate(**kwargs):
            self.result.status = GeneratorStatus.SKIPPED
            self.result.warnings.append("Generation skipped by pre_generate hook")
            return self.result
        
        # Step 3: Generate
        try:
            self.result = self.generate(**kwargs)
        except Exception as e:
            self.result.status = GeneratorStatus.FAILED
            self.result.errors.append(f"Generation failed with exception: {str(e)}")
            import traceback
            self.result.errors.append(traceback.format_exc())
        
        # Step 4: Validate output (if enabled)
        if self.config.validate_output and self.result.is_success():
            is_valid, validation_errors = self.validate_output(self.result)
            if not is_valid:
                self.result.status = GeneratorStatus.PARTIAL
                self.result.warnings.extend(validation_errors)
        
        # Step 5: Post-generate hook
        self.result = self.post_generate(self.result, **kwargs)
        
        # Calculate execution time
        if self._start_time:
            end_time = datetime.now()
            self.result.execution_time = (end_time - self._start_time).total_seconds()
        
        return self.result
    
    def get_supported_formats(self) -> List[str]:
        """
        Get list of supported output formats (optional).
        
        Returns:
            List of format identifiers (e.g., ["yaml", "json", "markdown"])
        """
        return []
    
    def get_required_params(self) -> List[str]:
        """
        Get list of required input parameters (optional).
        
        Returns:
            List of parameter names
        """
        return []
    
    def get_optional_params(self) -> Dict[str, Any]:
        """
        Get dictionary of optional input parameters with defaults (optional).
        
        Returns:
            Dictionary mapping parameter names to default values
        """
        return {}


class TemplateBasedGenerator(BaseGenerator):
    """
    Base class for template-based generators.
    
    Provides common functionality for generators that use templates:
    - Template loading and caching
    - Template rendering
    - Template variable substitution
    """
    
    def __init__(self, config: GeneratorConfig):
        """Initialize template-based generator."""
        super().__init__(config)
        self._template_cache: Dict[str, str] = {}
    
    def load_template(self, template_name: str) -> Optional[str]:
        """
        Load a template file.
        
        Args:
            template_name: Name of template file (relative to template_dir)
        
        Returns:
            Template content or None if not found
        """
        if template_name in self._template_cache:
            return self._template_cache[template_name]
        
        if not self.config.template_dir:
            return None
        
        template_path = self.config.template_dir / template_name
        if not template_path.exists():
            return None
        
        try:
            content = template_path.read_text(encoding='utf-8')
            self._template_cache[template_name] = content
            return content
        except Exception as e:
            self.result.warnings.append(f"Failed to load template {template_name}: {e}")
            return None
    
    def render_template(
        self,
        template_name: str,
        context: Dict[str, Any],
        output_path: Optional[Path] = None
    ) -> Optional[str]:
        """
        Render a template with context variables.
        
        Args:
            template_name: Name of template file
            context: Dictionary of variables to substitute
            output_path: Optional output path (if None, returns rendered content)
        
        Returns:
            Rendered content or None if rendering failed
        """
        template_content = self.load_template(template_name)
        if not template_content:
            return None
        
        # Simple template variable substitution: {variable_name}
        # Can be extended to support more complex templating (Jinja2, etc.)
        rendered = template_content
        for key, value in context.items():
            placeholder = f"{{{key}}}"
            rendered = rendered.replace(placeholder, str(value))
        
        # Write to file if output_path provided
        if output_path:
            if self.config.dry_run:
                if self.config.verbose:
                    print(f"[DRY RUN] Would write to: {output_path}")
            else:
                try:
                    output_path.parent.mkdir(parents=True, exist_ok=True)
                    if output_path.exists() and not self.config.overwrite:
                        self.result.warnings.append(f"File exists, skipping: {output_path}")
                        return None
                    output_path.write_text(rendered, encoding='utf-8')
                    self.result.output_paths.append(output_path)
                except Exception as e:
                    self.result.errors.append(f"Failed to write {output_path}: {e}")
                    return None
        
        return rendered


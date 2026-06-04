#!/usr/bin/env python3
"""
Generator Pattern Examples

Demonstrates various generator patterns from the patterns library.

Part of: Epic 8, Story 1 - Code Generators
Task: E8:S01:T03 - Establish generator patterns
"""

import sys
from pathlib import Path
from typing import Tuple, List, Dict, Any
from datetime import datetime

# Add generators directory to path
generators_path = Path(__file__).parent.parent
if str(generators_path) not in sys.path:
    sys.path.insert(0, str(generators_path))

from generators.base import (
    BaseGenerator,
    TemplateBasedGenerator,
    GeneratorConfig,
    GeneratorResult,
    GeneratorStatus
)


# Pattern Example 1: Simple Generator (Pattern 1.1)
class SimpleCodeGenerator(BaseGenerator):
    """Example of Pattern 1.1: Simple Generator."""
    
    def get_name(self) -> str:
        return "SimpleCodeGenerator"
    
    def get_description(self) -> str:
        return "Generates simple Python code (Pattern 1.1 example)"
    
    def validate_input(self, **kwargs) -> Tuple[bool, List[str]]:
        """Pattern 3.1: Required Parameter Validation"""
        errors: List[str] = []
        if 'class_name' not in kwargs:
            errors.append("Missing required parameter: class_name")
        return len(errors) == 0, errors
    
    def generate(self, **kwargs) -> GeneratorResult:
        """Pattern 5.1: Simple Path Generation"""
        result = GeneratorResult(status=GeneratorStatus.SUCCESS)
        
        class_name = kwargs['class_name']
        code = f"class {class_name}:\n    pass\n"
        
        # Simple path generation
        output_path = self.config.output_dir / f"{class_name.lower()}.py"
        
        if not self.config.dry_run:
            output_path.write_text(code, encoding='utf-8')
            result.output_paths.append(output_path)
        
        return result


# Pattern Example 2: Template-Based Generator (Pattern 1.2)
class TemplateCodeGenerator(TemplateBasedGenerator):
    """Example of Pattern 1.2: Template-Based Generator."""
    
    def get_name(self) -> str:
        return "TemplateCodeGenerator"
    
    def get_description(self) -> str:
        return "Generates code from templates (Pattern 1.2 example)"
    
    def validate_input(self, **kwargs) -> Tuple[bool, List[str]]:
        """Pattern 3.1: Required Parameter Validation"""
        errors: List[str] = []
        if 'class_name' not in kwargs:
            errors.append("Missing required parameter: class_name")
        return len(errors) == 0, errors
    
    def generate(self, **kwargs) -> GeneratorResult:
        """Pattern 4.1 + 4.3: Context Building with Defaults"""
        result = GeneratorResult(status=GeneratorStatus.SUCCESS)
        
        # Build context (Pattern 4.1: Simple Context Building)
        context = {
            'class_name': kwargs['class_name'],
            'methods': kwargs.get('methods', []),
            'has_docs': kwargs.get('has_docs', False),
        }
        
        # Path generation (Pattern 5.1: Simple Path Generation)
        output_path = self.config.output_dir / f"{kwargs['class_name'].lower()}.py"
        
        # Template rendering (Pattern 2.1: Simple Variable Substitution)
        self.render_template("class-template.py", context, output_path)
        
        return result


# Pattern Example 3: Generator with Type Validation (Pattern 3.2)
class ValidatedGenerator(BaseGenerator):
    """Example of Pattern 3.2: Type/Value Validation."""
    
    def get_name(self) -> str:
        return "ValidatedGenerator"
    
    def get_description(self) -> str:
        return "Generator with type and value validation (Pattern 3.2 example)"
    
    def validate_input(self, **kwargs) -> Tuple[bool, List[str]]:
        """Pattern 3.2: Type/Value Validation"""
        errors: List[str] = []
        
        # Type validation
        if 'count' in kwargs and not isinstance(kwargs['count'], int):
            errors.append("Parameter 'count' must be an integer")
        
        # Value validation
        if 'status' in kwargs:
            status = kwargs['status'].upper()
            if status not in ['ACTIVE', 'INACTIVE', 'PENDING']:
                errors.append(f"Invalid status: {status}. Must be 'ACTIVE', 'INACTIVE', or 'PENDING'")
        
        return len(errors) == 0, errors
    
    def generate(self, **kwargs) -> GeneratorResult:
        result = GeneratorResult(status=GeneratorStatus.SUCCESS)
        # Generation logic...
        return result


# Pattern Example 4: Generator with Computed Context (Pattern 4.2)
class ComputedContextGenerator(TemplateBasedGenerator):
    """Example of Pattern 4.2: Computed Context Values."""
    
    def get_name(self) -> str:
        return "ComputedContextGenerator"
    
    def get_description(self) -> str:
        return "Generator with computed context values (Pattern 4.2 example)"
    
    def validate_input(self, **kwargs) -> Tuple[bool, List[str]]:
        errors: List[str] = []
        if 'epic' not in kwargs:
            errors.append("Missing required parameter: epic")
        return len(errors) == 0, errors
    
    def generate(self, **kwargs) -> GeneratorResult:
        """Pattern 4.2: Computed Context Values"""
        result = GeneratorResult(status=GeneratorStatus.SUCCESS)
        
        epic = kwargs['epic']
        story = kwargs.get('story')
        
        # Computed context values
        context = {
            'epic': epic,
            'epic_padded': f"{epic:02d}",  # Computed
            'story': story,
            'story_padded': f"{story:02d}" if story else None,  # Conditional computed
            'version': kwargs.get('version', f'0.{epic}.{story if story else 0}.0+0'),  # Computed default
        }
        
        output_path = self.config.output_dir / "output.md"
        self.render_template("template.md", context, output_path)
        
        return result


# Pattern Example 5: Generator with Hierarchical Paths (Pattern 5.2)
class HierarchicalPathGenerator(TemplateBasedGenerator):
    """Example of Pattern 5.2: Hierarchical Path Generation."""
    
    def get_name(self) -> str:
        return "HierarchicalPathGenerator"
    
    def get_description(self) -> str:
        return "Generator with hierarchical path generation (Pattern 5.2 example)"
    
    def validate_input(self, **kwargs) -> Tuple[bool, List[str]]:
        errors: List[str] = []
        if 'epic' not in kwargs:
            errors.append("Missing required parameter: epic")
        return len(errors) == 0, errors
    
    def generate(self, **kwargs) -> GeneratorResult:
        """Pattern 5.2: Hierarchical Path Generation"""
        result = GeneratorResult(status=GeneratorStatus.SUCCESS)
        
        epic = kwargs['epic']
        story = kwargs.get('story')
        task = kwargs.get('task')
        
        # Hierarchical path generation
        if task:
            output_path = self.config.output_dir / f"Epic-{epic}" / f"Story-{story:03d}" / f"T{task:02d}.md"
        elif story:
            output_path = self.config.output_dir / f"Epic-{epic}" / f"Story-{story:03d}.md"
        else:
            output_path = self.config.output_dir / f"Epic-{epic}" / f"Epic-{epic}.md"
        
        context = {'epic': epic, 'story': story, 'task': task}
        self.render_template("template.md", context, output_path)
        
        return result


# Pattern Example 6: Generator with Parameter Documentation (Pattern 6.1 + 6.2)
class DocumentedGenerator(TemplateBasedGenerator):
    """Example of Pattern 6.1 + 6.2: Parameter Documentation."""
    
    def get_name(self) -> str:
        return "DocumentedGenerator"
    
    def get_description(self) -> str:
        return "Generator with parameter documentation (Pattern 6.1 + 6.2 example)"
    
    def validate_input(self, **kwargs) -> Tuple[bool, List[str]]:
        errors: List[str] = []
        if 'name' not in kwargs:
            errors.append("Missing required parameter: name")
        return len(errors) == 0, errors
    
    def generate(self, **kwargs) -> GeneratorResult:
        result = GeneratorResult(status=GeneratorStatus.SUCCESS)
        # Generation logic...
        return result
    
    def get_required_params(self) -> List[str]:
        """Pattern 6.1: Required Parameters Declaration"""
        return ['name']
    
    def get_optional_params(self) -> Dict[str, Any]:
        """Pattern 6.2: Optional Parameters with Defaults"""
        return {
            'version': '1.0.0',
            'description': None,
            'template': 'default-template.md',
        }


def main():
    """Run pattern examples."""
    from pathlib import Path
    
    config = GeneratorConfig(
        output_dir=Path("output"),
        overwrite=True,
        verbose=True,
        dry_run=True  # Show what would be generated
    )
    
    print("Generator Pattern Examples")
    print("=" * 60)
    
    # Example 1: Simple Generator
    print("\n1. Simple Generator (Pattern 1.1)")
    generator1 = SimpleCodeGenerator(config)
    result1 = generator1.run(class_name="ExampleClass")
    print(f"   Status: {result1.status.value}")
    if result1.has_errors():
        print(f"   Errors: {result1.errors}")
    
    # Example 2: Template-Based Generator
    print("\n2. Template-Based Generator (Pattern 1.2)")
    generator2 = TemplateCodeGenerator(config)
    result2 = generator2.run(class_name="TemplateClass", methods=["method1", "method2"])
    print(f"   Status: {result2.status.value}")
    
    # Example 3: Validated Generator
    print("\n3. Validated Generator (Pattern 3.2)")
    generator3 = ValidatedGenerator(config)
    result3 = generator3.run(count="invalid", status="UNKNOWN")
    print(f"   Status: {result3.status.value}")
    if result3.has_errors():
        print(f"   Errors: {result3.errors}")
    
    # Example 4: Computed Context Generator
    print("\n4. Computed Context Generator (Pattern 4.2)")
    generator4 = ComputedContextGenerator(config)
    result4 = generator4.run(epic=8, story=1)
    print(f"   Status: {result4.status.value}")
    
    # Example 5: Hierarchical Path Generator
    print("\n5. Hierarchical Path Generator (Pattern 5.2)")
    generator5 = HierarchicalPathGenerator(config)
    result5 = generator5.run(epic=8, story=1, task=1)
    print(f"   Status: {result5.status.value}")
    if result5.output_paths:
        print(f"   Output: {result5.output_paths[0]}")
    
    # Example 6: Documented Generator
    print("\n6. Documented Generator (Pattern 6.1 + 6.2)")
    generator6 = DocumentedGenerator(config)
    print(f"   Required: {generator6.get_required_params()}")
    print(f"   Optional: {generator6.get_optional_params()}")
    
    print("\n" + "=" * 60)
    print("Pattern examples complete!")


if __name__ == "__main__":
    main()


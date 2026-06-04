#!/usr/bin/env python3
"""
Simple Generator Example

Example implementation of a simple generator using the BaseGenerator framework.

Part of: Epic 8, Story 1 - Code Generators
Task: E8:S01:T01 - Create generator framework
"""

import sys
from pathlib import Path
from typing import Tuple, List

# Add generators directory to path
generators_path = Path(__file__).parent.parent
if str(generators_path) not in sys.path:
    sys.path.insert(0, str(generators_path))

from generators.base import (
    BaseGenerator,
    GeneratorConfig,
    GeneratorResult,
    GeneratorStatus
)


class SimpleCodeGenerator(BaseGenerator):
    """Example generator that creates a simple Python class file."""
    
    def get_name(self) -> str:
        return "SimpleCodeGenerator"
    
    def get_description(self) -> str:
        return "Generates a simple Python class file"
    
    def validate_input(self, **kwargs) -> Tuple[bool, List[str]]:
        """Validate input parameters."""
        errors: List[str] = []
        
        if 'class_name' not in kwargs:
            errors.append("Missing required parameter: class_name")
        
        return len(errors) == 0, errors
    
    def generate(self, **kwargs) -> GeneratorResult:
        """Generate a simple Python class file."""
        result = GeneratorResult(status=GeneratorStatus.SUCCESS)
        
        class_name = kwargs['class_name']
        methods = kwargs.get('methods', [])
        docstring = kwargs.get('docstring', f'Generated {class_name} class')
        
        # Generate class code
        code_lines = [
            f'class {class_name}:',
            f'    """{docstring}"""',
            '',
        ]
        
        if not methods:
            code_lines.append('    pass')
        else:
            for method in methods:
                code_lines.append(f'    def {method}(self):')
                code_lines.append('        """TODO: Implement method."""')
                code_lines.append('        pass')
                code_lines.append('')
        
        code_content = '\n'.join(code_lines)
        
        # Write to file
        output_path = self.config.output_dir / f"{class_name.lower()}.py"
        
        if self.config.dry_run:
            result.metadata['would_create'] = str(output_path)
            result.metadata['content'] = code_content
            if self.config.verbose:
                print(f"[DRY RUN] Would create: {output_path}")
                print(code_content)
        else:
            try:
                output_path.parent.mkdir(parents=True, exist_ok=True)
                if output_path.exists() and not self.config.overwrite:
                    result.status = GeneratorStatus.SKIPPED
                    result.warnings.append(f"File exists, skipping: {output_path}")
                    return result
                
                output_path.write_text(code_content, encoding='utf-8')
                result.output_paths.append(output_path)
            except Exception as e:
                result.status = GeneratorStatus.FAILED
                result.errors.append(f"Failed to write {output_path}: {e}")
        
        return result


def main():
    """Example usage of SimpleCodeGenerator."""
    from pathlib import Path
    
    config = GeneratorConfig(
        output_dir=Path("output"),
        overwrite=True,
        verbose=True
    )
    
    generator = SimpleCodeGenerator(config)
    
    result = generator.run(
        class_name="MyClass",
        methods=["method1", "method2", "method3"],
        docstring="A simple generated class"
    )
    
    if result.is_success():
        print(f"✅ Generated {len(result.output_paths)} file(s)")
        for path in result.output_paths:
            print(f"   - {path}")
    else:
        print(f"❌ Generation failed")
        for error in result.errors:
            print(f"   - {error}")


if __name__ == "__main__":
    main()


# Code Generator Framework

**Epic:** 8 - Tooling & Automation  
**Story:** E8:S01 - Code Generators  
**Task:** E8:S01:T01 - Create generator framework

---

## Overview

The Code Generator Framework provides a comprehensive foundation for building code generators for common framework patterns and templates. It offers:

- **Base Generator Classes:** Abstract interfaces for all generators
- **Template Engine:** Simple template rendering with variable substitution, conditionals, and loops
- **Generator Registry:** Discovery and management of generators
- **Common Patterns:** Reusable generation patterns

---

## Architecture

### Core Components

1. **BaseGenerator** (`base.py`)
   - Abstract base class for all generators
   - Provides workflow orchestration (validate → pre-generate → generate → validate → post-generate)
   - Handles error tracking and result reporting

2. **TemplateBasedGenerator** (`base.py`)
   - Base class for template-based generators
   - Provides template loading, caching, and rendering
   - Supports simple variable substitution

3. **TemplateEngine** (`template_engine.py`)
   - Advanced template rendering engine
   - Supports conditionals (`{if condition}...{/if}`)
   - Supports loops (`{for item in items}...{/for}`)
   - Simple variable substitution (`{variable_name}`)

4. **GeneratorRegistry** (`registry.py`)
   - Registry for discovering and managing generators
   - Supports aliases for generators
   - Enables dynamic generator discovery

---

## Usage

### Creating a Generator

```python
from generators.base import BaseGenerator, GeneratorConfig, GeneratorResult, GeneratorStatus
from pathlib import Path

class MyGenerator(BaseGenerator):
    def get_name(self) -> str:
        return "MyGenerator"
    
    def get_description(self) -> str:
        return "Generates my custom code"
    
    def validate_input(self, **kwargs) -> tuple[bool, List[str]]:
        # Validate input parameters
        if 'name' not in kwargs:
            return False, ["Missing required parameter: name"]
        return True, []
    
    def generate(self, **kwargs) -> GeneratorResult:
        result = GeneratorResult(status=GeneratorStatus.SUCCESS)
        
        # Generate code
        output_path = self.config.output_dir / "generated.py"
        output_path.write_text("# Generated code\n")
        result.output_paths.append(output_path)
        
        return result

# Use the generator
config = GeneratorConfig(
    output_dir=Path("output"),
    overwrite=True
)
generator = MyGenerator(config)
result = generator.run(name="example")
```

### Using Template-Based Generator

```python
from generators.base import TemplateBasedGenerator, GeneratorConfig, GeneratorResult, GeneratorStatus

class WorkflowGenerator(TemplateBasedGenerator):
    def get_name(self) -> str:
        return "WorkflowGenerator"
    
    def get_description(self) -> str:
        return "Generates workflow YAML files"
    
    def validate_input(self, **kwargs) -> tuple[bool, List[str]]:
        if 'workflow_name' not in kwargs:
            return False, ["Missing required parameter: workflow_name"]
        return True, []
    
    def generate(self, **kwargs) -> GeneratorResult:
        result = GeneratorResult(status=GeneratorStatus.SUCCESS)
        
        workflow_name = kwargs['workflow_name']
        context = {
            'workflow_name': workflow_name,
            'version': kwargs.get('version', '1.0.0'),
        }
        
        output_path = self.config.output_dir / f"{workflow_name}-workflow.yaml"
        self.render_template("workflow-template.yaml", context, output_path)
        
        return result
```

### Using Template Engine

```python
from generators.template_engine import TemplateEngine
from pathlib import Path

engine = TemplateEngine(template_dir=Path("templates"))

context = {
    'name': 'MyClass',
    'methods': ['method1', 'method2'],
    'has_docs': True,
}

# Template: class-template.py
# class {name}:
#     {if has_docs}
#     """Documentation"""
#     {/if}
#     {for method in methods}
#     def {method}(self):
#         pass
#     {/for}

rendered = engine.render_file("class-template.py", context)
```

### Registering Generators

```python
from generators.registry import register_generator

register_generator(
    MyGenerator,
    name="my-generator",
    aliases=["mygen", "mg"]
)

# Later, discover generators
from generators.registry import get_registry

registry = get_registry()
generator_class = registry.get("my-generator")
```

---

## Generator Workflow

The `BaseGenerator.run()` method orchestrates the complete generation workflow:

1. **Validate Input** - Check required parameters
2. **Pre-Generate Hook** - Setup, validation, etc.
3. **Generate** - Execute generation logic
4. **Validate Output** - Verify generated files (if enabled)
5. **Post-Generate Hook** - Cleanup, additional processing

---

## Generator Result

All generators return a `GeneratorResult` object containing:

- **status**: `SUCCESS`, `PARTIAL`, `FAILED`, or `SKIPPED`
- **output_paths**: List of generated file paths
- **errors**: List of error messages
- **warnings**: List of warning messages
- **metadata**: Additional generator-specific data
- **execution_time**: Time taken to execute (seconds)

---

## Template Syntax

### Variable Substitution

```
{variable_name}
```

### Conditionals

```
{if condition}
Content shown if condition is truthy
{/if}
```

### Loops

```
{for item in items}
Content repeated for each item
{item}
{/for}
```

---

## Examples

See:
- `packages/frameworks/workflow mgt/scripts/generate_workflow.py` - Workflow generator
- `packages/frameworks/kanban/scripts/generate_task_templates.py` - Task template generator
- `packages/frameworks/kanban/scripts/agentic_template_generator.py` - Agentic template generator

---

## Pattern Library

See [`PATTERNS.md`](PATTERNS.md) for a comprehensive catalog of reusable generator patterns:

- **Base Patterns:** Simple and template-based generator patterns
- **Template Patterns:** Variable substitution, conditionals, loops
- **Validation Patterns:** Input/output validation approaches
- **Context Patterns:** Template context building strategies
- **Path Patterns:** Output path generation patterns
- **Parameter Patterns:** Parameter management patterns
- **Registry Patterns:** Generator registration patterns

Pattern examples are available in [`examples/pattern_examples.py`](examples/pattern_examples.py).

---

## Future Enhancements

- Support for Jinja2 templates (optional)
- Template inheritance and includes
- Generator plugins system
- Generator composition (chaining generators)
- Validation rules framework

---

**Last Updated:** 2026-01-05  
**Version:** 1.0.0


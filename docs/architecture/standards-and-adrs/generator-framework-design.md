---
lifecycle: evergreen
ttl_days: null
created_at: 2026-01-05T22:20:00Z
expires_at: null
housekeeping_policy: keep
---

# Generator Framework Design

**Status:** IMPLEMENTED  
**Epic:** 8 - Tooling & Automation  
**Story:** E8:S01 - Code Generators  
**Task:** E8:S01:T01 - Create generator framework  
**Version:** 1.0.0

---

## Overview

The Generator Framework provides a comprehensive foundation for building code generators for common framework patterns and templates. It offers abstract base classes, template rendering, generator registry, and common patterns that can be extended for specific generation needs.

---

## Design Goals

1. **Extensibility:** Easy to create new generators by extending base classes
2. **Consistency:** Common workflow and result structure across all generators
3. **Template Support:** Built-in template engine for variable substitution, conditionals, and loops
4. **Discoverability:** Registry system for finding and managing generators
5. **Validation:** Built-in input and output validation
6. **Error Handling:** Comprehensive error tracking and reporting

---

## Architecture

### Core Components

#### 1. BaseGenerator (Abstract Base Class)

**Location:** `packages/frameworks/tooling & automation/generators/base.py`

**Purpose:** Abstract base class for all generators

**Key Methods:**
- `get_name()` - Generator name
- `get_description()` - Generator description
- `validate_input()` - Input validation
- `generate()` - Main generation logic
- `run()` - Orchestrates complete workflow

**Workflow:**
```
validate_input() → pre_generate() → generate() → validate_output() → post_generate()
```

#### 2. TemplateBasedGenerator (Base Class)

**Location:** `packages/frameworks/tooling & automation/generators/base.py`

**Purpose:** Base class for template-based generators

**Features:**
- Template loading and caching
- Template rendering with variable substitution
- File writing with overwrite control

#### 3. TemplateEngine

**Location:** `packages/frameworks/tooling & automation/generators/template_engine.py`

**Purpose:** Template rendering engine

**Features:**
- Variable substitution: `{variable_name}`
- Conditionals: `{if condition}...{/if}`
- Loops: `{for item in items}...{/for}`
- Template caching

#### 4. GeneratorRegistry

**Location:** `packages/frameworks/tooling & automation/generators/registry.py`

**Purpose:** Registry for discovering and managing generators

**Features:**
- Register generators by name
- Support aliases
- List all registered generators
- Dynamic generator discovery

---

## Data Structures

### GeneratorResult

```python
@dataclass
class GeneratorResult:
    status: GeneratorStatus  # SUCCESS, PARTIAL, FAILED, SKIPPED
    output_paths: List[Path]
    errors: List[str]
    warnings: List[str]
    metadata: Dict[str, Any]
    execution_time: Optional[float]
```

### GeneratorConfig

```python
@dataclass
class GeneratorConfig:
    output_dir: Path
    template_dir: Optional[Path] = None
    overwrite: bool = False
    dry_run: bool = False
    verbose: bool = False
    validate_output: bool = True
    custom_params: Dict[str, Any] = field(default_factory=dict)
```

---

## Usage Patterns

### Pattern 1: Simple Generator

```python
class SimpleGenerator(BaseGenerator):
    def get_name(self) -> str:
        return "SimpleGenerator"
    
    def get_description(self) -> str:
        return "Generates simple code"
    
    def validate_input(self, **kwargs) -> tuple[bool, List[str]]:
        if 'name' not in kwargs:
            return False, ["Missing: name"]
        return True, []
    
    def generate(self, **kwargs) -> GeneratorResult:
        result = GeneratorResult(status=GeneratorStatus.SUCCESS)
        # Generate code
        return result
```

### Pattern 2: Template-Based Generator

```python
class TemplateGenerator(TemplateBasedGenerator):
    def generate(self, **kwargs) -> GeneratorResult:
        result = GeneratorResult(status=GeneratorStatus.SUCCESS)
        context = {'name': kwargs['name']}
        output_path = self.config.output_dir / "output.py"
        self.render_template("template.py", context, output_path)
        return result
```

### Pattern 3: Registered Generator

```python
from generators.registry import register_generator

register_generator(
    MyGenerator,
    name="my-generator",
    aliases=["mygen", "mg"]
)
```

---

## Integration with Existing Generators

The framework is designed to integrate with existing generators:

- **Workflow Generator** (`generate_workflow.py`) - Can be refactored to extend BaseGenerator
- **Task Template Generator** (`generate_task_templates.py`) - Can use TemplateBasedGenerator
- **Agentic Template Generator** (`agentic_template_generator.py`) - Can extend BaseGenerator

---

## Extension Points

### Custom Template Engines

The framework can be extended to support:
- Jinja2 templates (optional dependency)
- Custom template syntax
- Template inheritance

### Generator Composition

Future enhancement: Chain multiple generators together:
```python
pipeline = GeneratorPipeline([
    StructureGenerator(),
    TemplateGenerator(),
    ValidatorGenerator()
])
result = pipeline.run(...)
```

---

## Testing

Generators should be tested with:
- Unit tests for generation logic
- Integration tests for full workflow
- Template rendering tests
- Error handling tests

---

## Documentation

- **README.md** - Framework overview and usage
- **Design Document** (this file) - Architecture and design decisions
- **Examples** - Example generators demonstrating patterns

---

## Future Enhancements

1. **Jinja2 Support** - Optional Jinja2 template engine
2. **Generator Plugins** - Plugin system for extending generators
3. **Generator Composition** - Chain generators together
4. **Validation Rules** - Framework for validation rules
5. **Generator CLI** - Command-line interface for running generators

---

**Last Updated:** 2026-01-05  
**Version:** 1.0.0


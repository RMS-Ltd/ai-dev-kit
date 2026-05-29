# Generator Patterns Library

**Epic:** 8 - Tooling & Automation  
**Story:** E8:S01 - Code Generators  
**Task:** E8:S01:T03 - Establish generator patterns  
**Version:** 1.0.0

---

## Overview

This document catalogs reusable patterns extracted from the Generator Framework implementations. These patterns provide guidance for creating new generators and ensure consistency across the codebase.

---

## Pattern Categories

1. **Base Patterns** - Core generator patterns
2. **Template Patterns** - Template-based generation patterns
3. **Validation Patterns** - Input/output validation patterns
4. **Context Patterns** - Template context building patterns
5. **Path Patterns** - Output path generation patterns
6. **Parameter Patterns** - Parameter management patterns
7. **Registry Patterns** - Generator registration patterns

---

## 1. Base Patterns

### Pattern 1.1: Simple Generator

**When to Use:** Creating a generator that doesn't use templates

**Structure:**
```python
class SimpleGenerator(BaseGenerator):
    def get_name(self) -> str:
        return "SimpleGenerator"
    
    def get_description(self) -> str:
        return "Generates simple code"
    
    def validate_input(self, **kwargs) -> Tuple[bool, List[str]]:
        errors: List[str] = []
        if 'name' not in kwargs:
            errors.append("Missing required parameter: name")
        return len(errors) == 0, errors
    
    def generate(self, **kwargs) -> GeneratorResult:
        result = GeneratorResult(status=GeneratorStatus.SUCCESS)
        # Generate code directly
        output_path = self.config.output_dir / "output.py"
        output_path.write_text("# Generated code\n")
        result.output_paths.append(output_path)
        return result
```

**Key Characteristics:**
- Extends `BaseGenerator`
- Implements required abstract methods
- Direct code generation (no templates)
- Manual file writing

**Examples:**
- `SimpleCodeGenerator` (example generator)

---

### Pattern 1.2: Template-Based Generator

**When to Use:** Creating a generator that uses templates

**Structure:**
```python
class TemplateGenerator(TemplateBasedGenerator):
    def get_name(self) -> str:
        return "TemplateGenerator"
    
    def get_description(self) -> str:
        return "Generates code from templates"
    
    def validate_input(self, **kwargs) -> Tuple[bool, List[str]]:
        errors: List[str] = []
        if 'name' not in kwargs:
            errors.append("Missing required parameter: name")
        return len(errors) == 0, errors
    
    def generate(self, **kwargs) -> GeneratorResult:
        result = GeneratorResult(status=GeneratorStatus.SUCCESS)
        
        # Build context
        context = {
            'name': kwargs['name'],
            'version': kwargs.get('version', '1.0.0'),
        }
        
        # Render template
        output_path = self.config.output_dir / "output.py"
        self.render_template("template.py", context, output_path)
        
        return result
```

**Key Characteristics:**
- Extends `TemplateBasedGenerator`
- Uses `render_template()` method
- Builds context dictionary
- Template-based file generation

**Examples:**
- `WorkflowGenerator`
- `KanbanTemplateGenerator`

---

## 2. Template Patterns

### Pattern 2.1: Simple Variable Substitution

**When to Use:** Basic template rendering with variable replacement

**Template:**
```
class {class_name}:
    def __init__(self):
        self.name = "{name}"
```

**Context:**
```python
context = {
    'class_name': 'MyClass',
    'name': 'example',
}
```

**Usage:**
```python
self.render_template("class-template.py", context, output_path)
```

---

### Pattern 2.2: Conditional Blocks

**When to Use:** Conditional content based on context variables

**Template:**
```
class {class_name}:
    {if has_docs}
    """Documentation"""
    {/if}
    def method(self):
        pass
```

**Context:**
```python
context = {
    'class_name': 'MyClass',
    'has_docs': True,
}
```

---

### Pattern 2.3: Loop Blocks

**When to Use:** Repeating content for lists

**Template:**
```
class {class_name}:
    {for method in methods}
    def {method}(self):
        pass
    {/for}
```

**Context:**
```python
context = {
    'class_name': 'MyClass',
    'methods': ['method1', 'method2', 'method3'],
}
```

---

## 3. Validation Patterns

### Pattern 3.1: Required Parameter Validation

**When to Use:** Validating required input parameters

**Structure:**
```python
def validate_input(self, **kwargs) -> Tuple[bool, List[str]]:
    errors: List[str] = []
    
    # Check required parameters
    if 'param1' not in kwargs:
        errors.append("Missing required parameter: param1")
    
    if 'param2' not in kwargs:
        errors.append("Missing required parameter: param2")
    
    return len(errors) == 0, errors
```

**Best Practices:**
- Collect all errors before returning
- Use clear, descriptive error messages
- Return tuple: `(is_valid, error_messages)`

---

### Pattern 3.2: Type/Value Validation

**When to Use:** Validating parameter types and values

**Structure:**
```python
def validate_input(self, **kwargs) -> Tuple[bool, List[str]]:
    errors: List[str] = []
    
    # Type validation
    if 'count' in kwargs and not isinstance(kwargs['count'], int):
        errors.append("Parameter 'count' must be an integer")
    
    # Value validation
    if 'doc_type' in kwargs:
        doc_type = kwargs['doc_type'].lower()
        if doc_type not in ['epic', 'story', 'task']:
            errors.append(f"Invalid doc_type: {doc_type}. Must be 'epic', 'story', or 'task'")
    
    return len(errors) == 0, errors
```

---

### Pattern 3.3: Conditional Required Parameters

**When to Use:** Parameters required based on other parameters

**Structure:**
```python
def validate_input(self, **kwargs) -> Tuple[bool, List[str]]:
    errors: List[str] = []
    
    doc_type = kwargs.get('doc_type', '').lower()
    
    if doc_type in ['story', 'task']:
        if 'story' not in kwargs:
            errors.append("Missing required parameter: story (required for story/task)")
    
    if doc_type == 'task':
        if 'task' not in kwargs:
            errors.append("Missing required parameter: task (required for task)")
    
    return len(errors) == 0, errors
```

**Example:**
- `KanbanTemplateGenerator.validate_input()` - story/task required based on doc_type

---

## 4. Context Patterns

### Pattern 4.1: Simple Context Building

**When to Use:** Building template context from input parameters

**Structure:**
```python
def generate(self, **kwargs) -> GeneratorResult:
    context = {
        'name': kwargs['name'],
        'version': kwargs.get('version', '1.0.0'),
        'description': kwargs.get('description', ''),
    }
    # Use context...
```

---

### Pattern 4.2: Computed Context Values

**When to Use:** Computing context values from input parameters

**Structure:**
```python
def generate(self, **kwargs) -> GeneratorResult:
    epic = kwargs['epic']
    story = kwargs.get('story')
    
    context = {
        'epic': epic,
        'epic_padded': f"{epic:02d}",  # Computed
        'story': story,
        'story_padded': f"{story:02d}" if story else None,  # Conditional computed
        'version': kwargs.get('version', f'0.{epic}.{story if story else 0}.0+0'),  # Computed default
    }
    # Use context...
```

**Example:**
- `KanbanTemplateGenerator.generate()` - computes padded numbers and version

---

### Pattern 4.3: Context with Defaults

**When to Use:** Providing default values for optional context variables

**Structure:**
```python
def generate(self, **kwargs) -> GeneratorResult:
    context = {
        'name': kwargs['name'],
        'version': kwargs.get('version', '1.0.0'),  # Default
        'description': kwargs.get('description', f'{kwargs["name"]} description'),  # Computed default
        'created_date': kwargs.get('created_date', datetime.now().strftime('%Y-%m-%d')),  # Default with computation
    }
    # Use context...
```

---

## 5. Path Patterns

### Pattern 5.1: Simple Path Generation

**When to Use:** Single output file with simple naming

**Structure:**
```python
def generate(self, **kwargs) -> GeneratorResult:
    name = kwargs['name']
    name_slug = name.lower().replace(' ', '-')
    output_path = self.config.output_dir / f"{name_slug}.py"
    # Use output_path...
```

---

### Pattern 5.2: Hierarchical Path Generation

**When to Use:** Multiple levels of directory structure

**Structure:**
```python
def generate(self, **kwargs) -> GeneratorResult:
    epic = kwargs['epic']
    story = kwargs.get('story')
    task = kwargs.get('task')
    
    if task:
        # Task: Epic-{epic}/Story-{story}/T{task}.md
        output_path = self.config.output_dir / f"Epic-{epic}" / f"Story-{story:03d}" / f"T{task:02d}.md"
    elif story:
        # Story: Epic-{epic}/Story-{story}.md
        output_path = self.config.output_dir / f"Epic-{epic}" / f"Story-{story:03d}.md"
    else:
        # Epic: Epic-{epic}/Epic-{epic}.md
        output_path = self.config.output_dir / f"Epic-{epic}" / f"Epic-{epic}.md"
    # Use output_path...
```

**Example:**
- `KanbanTemplateGenerator.generate()` - hierarchical paths based on doc_type

---

### Pattern 5.3: Path with Custom Slugs

**When to Use:** Allowing custom file naming while maintaining structure

**Structure:**
```python
def generate(self, **kwargs) -> GeneratorResult:
    epic = kwargs['epic']
    story_slug = kwargs.get('story_slug', f'Story-{story:03d}')  # Custom or default
    task_slug = kwargs.get('task_slug', f'T{task:02d}')  # Custom or default
    
    output_path = self.config.output_dir / f"Epic-{epic}" / story_slug / f"{task_slug}.md"
    # Use output_path...
```

---

## 6. Parameter Patterns

### Pattern 6.1: Required Parameters Declaration

**When to Use:** Documenting required parameters

**Structure:**
```python
def get_required_params(self) -> List[str]:
    """Get required parameters."""
    return ['param1', 'param2']
```

**Usage:**
- Helps users understand what's required
- Can be used for CLI argument generation
- Enables validation helpers

---

### Pattern 6.2: Optional Parameters with Defaults

**When to Use:** Documenting optional parameters and their defaults

**Structure:**
```python
def get_optional_params(self) -> Dict[str, Any]:
    """Get optional parameters with defaults."""
    return {
        'version': '1.0.0',
        'description': None,
        'template': 'default-template.yaml',
        'created_date': None,
    }
```

**Usage:**
- Documents available options
- Provides default values
- Enables CLI argument generation with defaults

---

## 7. Registry Patterns

### Pattern 7.1: Basic Registration

**When to Use:** Registering a generator for discovery

**Structure:**
```python
from generators.registry import register_generator

register_generator(
    MyGenerator,
    name="my-generator"
)
```

---

### Pattern 7.2: Registration with Aliases

**When to Use:** Registering with multiple names/aliases

**Structure:**
```python
from generators.registry import register_generator

register_generator(
    WorkflowGenerator,
    name="workflow",
    aliases=["wf", "workflow-gen", "workflow-generator"]
)
```

**Usage:**
- Enables flexible discovery
- Supports shorthand names
- Improves discoverability

---

## Pattern Combinations

### Combination 1: Template-Based Generator with Validation

**Example:** `WorkflowGenerator`

```python
class WorkflowGenerator(TemplateBasedGenerator):
    # Validation Pattern 3.1
    def validate_input(self, **kwargs) -> Tuple[bool, List[str]]:
        errors: List[str] = []
        if 'workflow_name' not in kwargs:
            errors.append("Missing required parameter: workflow_name")
        if 'workflow_type' not in kwargs:
            errors.append("Missing required parameter: workflow_type")
        return len(errors) == 0, errors
    
    # Context Pattern 4.1 + 4.3
    def generate(self, **kwargs) -> GeneratorResult:
        context = {
            'workflow_name': kwargs['workflow_name'],
            'workflow_type': kwargs.get('workflow_type', 'custom'),
            'version': kwargs.get('version', '1.0.0'),
            'description': kwargs.get('description', f'{kwargs["workflow_name"]} workflow'),
        }
        
        # Path Pattern 5.1
        workflow_name_slug = kwargs['workflow_name'].lower().replace(' ', '-')
        output_path = self.config.output_dir / f"{workflow_name_slug}-workflow.yaml"
        
        # Template Pattern 2.1
        self.render_template("workflow-template.yaml", context, output_path)
        
        return result
```

---

### Combination 2: Hierarchical Generator with Conditional Validation

**Example:** `KanbanTemplateGenerator`

```python
class KanbanTemplateGenerator(TemplateBasedGenerator):
    # Validation Pattern 3.3
    def validate_input(self, **kwargs) -> Tuple[bool, List[str]]:
        errors: List[str] = []
        doc_type = kwargs.get('doc_type', '').lower()
        if doc_type not in ['epic', 'story', 'task']:
            errors.append(f"Invalid doc_type: {doc_type}")
        if doc_type in ['story', 'task'] and 'story' not in kwargs:
            errors.append("Missing required parameter: story")
        if doc_type == 'task' and 'task' not in kwargs:
            errors.append("Missing required parameter: task")
        return len(errors) == 0, errors
    
    # Context Pattern 4.2
    def generate(self, **kwargs) -> GeneratorResult:
        epic = kwargs['epic']
        story = kwargs.get('story')
        context = {
            'epic': epic,
            'epic_padded': f"{epic:02d}",
            'story_padded': f"{story:02d}" if story else None,
            'version': kwargs.get('version', f'0.{epic}.{story if story else 0}.0+0'),
        }
        
        # Path Pattern 5.2
        if kwargs['doc_type'] == 'epic':
            output_path = self.config.output_dir / f"Epic-{epic}" / f"Epic-{epic}.md"
        # ... more path logic
        
        self.render_template(template_name, context, output_path)
        return result
```

---

## Best Practices

### 1. Always Validate Input

- Validate all required parameters
- Validate parameter types and values
- Return clear error messages
- Collect all errors before returning

### 2. Use Appropriate Base Class

- Use `BaseGenerator` for non-template generators
- Use `TemplateBasedGenerator` for template-based generators
- Don't duplicate base class functionality

### 3. Build Rich Context

- Include all template variables in context
- Compute derived values (padded numbers, versions, etc.)
- Provide sensible defaults for optional values

### 4. Generate Appropriate Paths

- Follow project directory conventions
- Use consistent naming patterns
- Support custom slugs when needed

### 5. Document Parameters

- Implement `get_required_params()`
- Implement `get_optional_params()`
- Use clear parameter names

### 6. Register Generators

- Register all generators in the registry
- Use descriptive names
- Provide helpful aliases

### 7. Handle Errors Gracefully

- Use `GeneratorResult` for status reporting
- Include detailed error messages
- Track warnings separately from errors

---

## Pattern Examples

### Example 1: Simple Code Generator

See: `packages/frameworks/tooling & automation/generators/examples/simple_generator_example.py`

**Patterns Used:**
- Pattern 1.1: Simple Generator
- Pattern 3.1: Required Parameter Validation
- Pattern 5.1: Simple Path Generation

### Example 2: Workflow Generator

See: `packages/frameworks/tooling & automation/generators/workflow_generator.py`

**Patterns Used:**
- Pattern 1.2: Template-Based Generator
- Pattern 3.1: Required Parameter Validation
- Pattern 4.1: Simple Context Building
- Pattern 4.3: Context with Defaults
- Pattern 5.1: Simple Path Generation
- Pattern 6.1: Required Parameters Declaration
- Pattern 6.2: Optional Parameters with Defaults

### Example 3: Kanban Template Generator

See: `packages/frameworks/tooling & automation/generators/kanban_template_generator.py`

**Patterns Used:**
- Pattern 1.2: Template-Based Generator
- Pattern 3.3: Conditional Required Parameters
- Pattern 4.2: Computed Context Values
- Pattern 5.2: Hierarchical Path Generation
- Pattern 5.3: Path with Custom Slugs
- Pattern 6.1: Required Parameters Declaration
- Pattern 6.2: Optional Parameters with Defaults

---

## Future Patterns

Potential patterns to extract as more generators are created:

1. **Multi-File Generation Pattern** - Generating multiple related files
2. **Incremental Generation Pattern** - Updating existing files
3. **Validation Rule Pattern** - Custom validation rules
4. **Template Inheritance Pattern** - Template composition
5. **Generator Composition Pattern** - Chaining generators

---

**Last Updated:** 2026-01-05  
**Version:** 1.0.0


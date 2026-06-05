# Template-Based Generators

**Epic:** 8 - Tooling & Automation  
**Story:** E8:S01 - Code Generators  
**Task:** E8:S01:T02 - Build template-based generators

---

## Overview

Template-based generators built on the Generator Framework for common code generation patterns. These generators use templates to generate code, configuration files, and documentation.

---

## Available Generators

### 1. WorkflowGenerator

Generates workflow YAML files for the workflow management framework.

**Usage:**
```python
from generators.workflow_generator import WorkflowGenerator
from generators.base import GeneratorConfig
from pathlib import Path

config = GeneratorConfig(
    output_dir=Path("workflows"),
    template_dir=Path("generators/templates"),
    overwrite=True
)

generator = WorkflowGenerator(config)
result = generator.run(
    workflow_name="Custom Refactor",
    workflow_type="refactor",
    version="1.0.0",
    description="Custom refactoring workflow"
)
```

**Required Parameters:**
- `workflow_name`: Name of the workflow
- `workflow_type`: Type of workflow (refactor, migration, testing, custom)

**Optional Parameters:**
- `version`: Workflow version (default: "1.0.0")
- `description`: Workflow description
- `template`: Template file name (default: "workflow-template.yaml")
- `created_date`: Creation date (default: current date)

### 2. KanbanTemplateGenerator

Generates Kanban Epic, Story, and Task documents.

**Usage:**
```python
from generators.kanban_template_generator import KanbanTemplateGenerator
from generators.base import GeneratorConfig
from pathlib import Path

config = GeneratorConfig(
    output_dir=Path("docs/project-management/kanban/epics"),
    template_dir=Path("generators/templates"),
    overwrite=True
)

# Generate Epic
generator = KanbanTemplateGenerator(config)
result = generator.run(
    doc_type="epic",
    epic=8,
    title="Tooling & Automation",
    description="Epic for tooling and automation framework",
    priority="HIGH"
)

# Generate Story
result = generator.run(
    doc_type="story",
    epic=8,
    story=1,
    title="Code Generators",
    description="Story for code generator framework",
    priority="HIGH"
)

# Generate Task
result = generator.run(
    doc_type="task",
    epic=8,
    story=1,
    task=1,
    title="Create generator framework",
    description="Create the base generator framework",
    priority="HIGH"
)
```

**Required Parameters:**
- `doc_type`: Document type ("epic", "story", or "task")
- `epic`: Epic number
- `story`: Story number (required for story/task)
- `task`: Task number (required for task)

**Optional Parameters:**
- `title`: Document title
- `description`: Document description
- `priority`: Priority level (default: "MEDIUM")
- `status`: Status (default: "TODO")
- `created_date`: Creation date (default: current date)
- `version`: Version string (auto-generated if not provided)
- `story_slug`: Story slug for file naming
- `task_slug`: Task slug for file naming

---

## Templates

Templates are located in `generators/templates/`:

- `workflow-template.yaml` - Workflow YAML template
- `epic-template.md` - Epic document template
- `story-template.md` - Story document template
- `task-template.md` - Task document template

### Template Syntax

Templates use simple variable substitution:
- `{variable_name}` - Replaced with variable value
- `{if condition}...{/if}` - Conditional blocks (via TemplateEngine)
- `{for item in items}...{/for}` - Loop blocks (via TemplateEngine)

---

## Examples

See `examples/` directory for complete examples:
- `simple_generator_example.py` - Basic generator example
- `workflow_generator_example.py` - Workflow generator example (TODO)
- `kanban_generator_example.py` - Kanban generator example (TODO)

---

## Integration with Generator Registry

Register generators for discovery:

```python
from generators.registry import register_generator
from generators.workflow_generator import WorkflowGenerator
from generators.kanban_template_generator import KanbanTemplateGenerator

register_generator(WorkflowGenerator, name="workflow", aliases=["wf", "workflow-gen"])
register_generator(KanbanTemplateGenerator, name="kanban", aliases=["kb", "kanban-gen"])
```

---

## Future Enhancements

- Additional template generators (CLI commands, API endpoints, etc.)
- Template inheritance and includes
- Custom template syntax support (Jinja2, etc.)
- Template validation
- Template library management

---

**Last Updated:** 2026-01-05  
**Version:** 1.0.0


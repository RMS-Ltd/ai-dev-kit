# Framework-Specific Validators

Validators for specific frameworks (Kanban, Workflow Management, Numbering & Versioning, Document Lifecycle).

**Part of:** Epic 8, Story 2 - Additional Validators  
**Task:** E8:S02:T02 - Build framework-specific validators

---

## Overview

This package provides validators for each framework in the AI Dev Kit ecosystem. Each validator checks framework-specific requirements, structure, and compliance.

---

## Validators

### 1. KanbanValidator

**Purpose:** Validates Kanban document structure, naming conventions, and consistency.

**Validates:**
- Epic document structure and naming (`Epic-{N}`)
- Story document structure and naming (`Story-{NNN}-{description}`)
- Task document structure and Task ID format (`E{epic}:S{story}:T{task}`)
- Required fields in Epic/Story/Task documents
- Task checklist consistency
- Cross-references between documents

**Usage:**
```python
from validators.framework.kanban_validator import KanbanValidator
from validators.base import ValidatorConfig

config = ValidatorConfig(project_root=Path("."))
validator = KanbanValidator(config)
result = validator.run()

if result.is_pass():
    print("✅ Kanban validation passed")
else:
    for issue in result.get_errors():
        print(f"❌ {issue.message}")
```

**Configuration:**
- `kanban_root`: Path to kanban root directory (auto-detected from `rw-config.yaml` if available)
- Default: `docs/project-management/kanban`

---

### 2. WorkflowValidator

**Purpose:** Validates workflow YAML files for structure, dependencies, and handler references.

**Validates:**
- Required top-level fields (`name`, `version`, `type`)
- Step structure and required fields (`id`, `name`, `type`, `handler`)
- Step dependencies (references must exist)
- Duplicate step IDs
- YAML syntax validity

**Usage:**
```python
from validators.framework.workflow_validator import WorkflowValidator
from validators.base import ValidatorConfig

config = ValidatorConfig(project_root=Path("."))
validator = WorkflowValidator(config)
result = validator.run()

if result.is_pass():
    print("✅ Workflow validation passed")
else:
    for issue in result.get_errors():
        print(f"❌ {issue.message}")
```

**Configuration:**
- `workflow_root`: Path to workflows directory (auto-detected from `rw-config.yaml` if available)
- Default: `packages/frameworks/workflow mgt/workflows`

---

### 3. VersionValidator

**Purpose:** Validates version file format and version schema compliance.

**Validates:**
- Required version components (`VERSION_RC`, `VERSION_EPIC`, `VERSION_STORY`, `VERSION_TASK`, `VERSION_BUILD`, `VERSION_STRING`)
- Version component value ranges (RC >= 0, EPIC/STORY/TASK >= 1, BUILD >= 0)
- Version string format (`RC.EPIC.STORY.TASK+BUILD`)
- Consistency between `VERSION_STRING` and individual components

**Usage:**
```python
from validators.framework.version_validator import VersionValidator
from validators.base import ValidatorConfig

config = ValidatorConfig(project_root=Path("."))
validator = VersionValidator(config)
result = validator.run()

if result.is_pass():
    print("✅ Version validation passed")
else:
    for issue in result.get_errors():
        print(f"❌ {issue.message}")
```

**Configuration:**
- `version_file`: Path to version file (auto-detected from `rw-config.yaml` if available)
- Default: `src/fynd_deals/version.py`

---

### 4. DocumentLifecycleValidator

**Purpose:** Validates document lifecycle metadata and policy compliance.

**Validates:**
- Required lifecycle fields (`lifecycle`, `created_at`)
- Valid lifecycle values (`evergreen`, `timeboxed`, `transient`)
- Valid `created_at` format (ISO 8601 datetime)
- Valid `ttl_days` value (positive integer or null)
- Valid `expires_at` format (ISO 8601 datetime or null)
- Valid `housekeeping_policy` values (`keep`, `archive`, `delete`)

**Usage:**
```python
from validators.framework.document_lifecycle_validator import DocumentLifecycleValidator
from validators.base import ValidatorConfig

config = ValidatorConfig(project_root=Path("."))
validator = DocumentLifecycleValidator(config)
result = validator.run()

if result.is_pass():
    print("✅ Document lifecycle validation passed")
else:
    for issue in result.get_errors():
        print(f"❌ {issue.message}")
```

**Configuration:**
- `docs_root`: Path to docs directory
- Default: `docs`

---

## Integration

### Validator Registry

All validators can be registered with the `ValidatorRegistry`:

```python
from validators.registry import ValidatorRegistry
from validators.framework.kanban_validator import KanbanValidator
from validators.framework.workflow_validator import WorkflowValidator

# Register validators
ValidatorRegistry.register('kanban', KanbanValidator)
ValidatorRegistry.register('workflow', WorkflowValidator)

# Create and run validators
config = ValidatorConfig(project_root=Path("."))
kanban_validator = ValidatorRegistry.create_validator('kanban', config)
result = kanban_validator.run()
```

### CLI Usage

Each validator can be run from the command line:

```bash
# Run Kanban validator
python -m validators.framework.kanban_validator

# Run Workflow validator
python -m validators.framework.workflow_validator

# Run Version validator
python -m validators.framework.version_validator

# Run Document Lifecycle validator
python -m validators.framework.document_lifecycle_validator
```

---

## Test Suites

Test suites for each validator are located in:
- `tests/test_kanban_validator.py`
- `tests/test_workflow_validator.py`
- `tests/test_version_validator.py`
- `tests/test_document_lifecycle_validator.py`

---

## Related Documentation

- **Validator Framework:** `packages/frameworks/tooling & automation/validators/README.md`
- **Kanban Framework:** `packages/frameworks/kanban/README.md`
- **Workflow Management Framework:** `packages/frameworks/workflow mgt/README.md`
- **Numbering & Versioning Framework:** `packages/frameworks/numbering & versioning/README.md`
- **Document Lifecycle Framework:** `packages/frameworks/doc-lifecycle/README.md`

---

**Status:** Active  
**Version:** 1.0.0  
**Last Updated:** 2026-01-06


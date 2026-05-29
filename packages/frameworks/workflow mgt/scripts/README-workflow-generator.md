---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T12:02:13Z
expires_at: null
housekeeping_policy: keep
---

# Workflow Template Generator

**Tool:** `generate_workflow.py`  
**Purpose:** Generate workflow YAML files from templates following the agent-driven execution pattern  
**Version:** 1.0.0

---

## Overview

The workflow template generator creates workflow YAML files based on common patterns from existing workflows (Release, Refactor, Migration, Testing). It follows the agent-driven execution pattern and generates project-agnostic, portable workflows.

---

## Installation

### Prerequisites

- Python 3.7+
- PyYAML library

### Install Dependencies

```bash
pip install pyyaml
```

---

## Usage

### Basic Usage

Generate a workflow using a predefined type:

```bash
python generate_workflow.py --type refactor --name "Custom Refactor Workflow"
```

### Available Workflow Types

- `refactor` - Code refactoring workflows
- `migration` - Migration workflows (code, data, infrastructure)
- `testing` - Testing workflows
- `implementation-cycle` - Implementation Cycle Workflows (ICW) following agent-driven execution pattern
- `custom` - Custom workflow with basic structure

### Command-Line Options

```bash
python generate_workflow.py [OPTIONS]

Required:
  --type {refactor,migration,testing,implementation-cycle,custom}
                        Workflow type
  --name NAME           Workflow name

Optional:
  --description TEXT    Workflow description
  --output FILE         Output file path (default: <name>-workflow.yaml)
  --steps STEP [STEP ...]
                        Custom step list
  --config FILE         Custom config JSON file
  --parameters FILE     Parameters JSON file
  --version VERSION     Workflow version (default: 1.0.0)
```

---

## Examples

### Example 1: Generate Refactor Workflow

```bash
python generate_workflow.py \
  --type refactor \
  --name "Code Refactoring Workflow" \
  --output refactor-workflow.yaml
```

**Output:** `refactor-workflow.yaml` with default refactor workflow structure.

### Example 2: Generate Custom Testing Workflow

```bash
python generate_workflow.py \
  --type testing \
  --name "Integration Test Workflow" \
  --description "Workflow for running integration tests" \
  --output integration-test-workflow.yaml
```

### Example 3: Generate Custom Workflow with Custom Steps

```bash
python generate_workflow.py \
  --type custom \
  --name "Deployment Workflow" \
  --steps analysis planning execution validation documentation git_stage git_commit git_push \
  --output deployment-workflow.yaml
```

### Example 4: Generate Workflow with Custom Config

Create `config.json`:
```json
{
  "deployment_branch_prefix": "deploy/",
  "deployment_target": "production",
  "rollback_enabled": true
}
```

```bash
python generate_workflow.py \
  --type custom \
  --name "Deployment Workflow" \
  --config config.json \
  --output deployment-workflow.yaml
```

### Example 5: Generate Workflow with Parameters

Create `parameters.json`:
```json
[
  {
    "name": "target_environment",
    "type": "enum",
    "required": true,
    "label": "Target Environment",
    "description": "Environment to deploy to",
    "options": [
      {"value": "staging", "label": "Staging"},
      {"value": "production", "label": "Production"}
    ]
  },
  {
    "name": "summary",
    "type": "string",
    "required": true,
    "label": "Deployment Summary",
    "description": "Brief description of the deployment"
  }
]
```

```bash
python generate_workflow.py \
  --type custom \
  --name "Deployment Workflow" \
  --parameters parameters.json \
  --output deployment-workflow.yaml
```

---

## Step Templates

The generator includes common step templates:

- `analysis` - Analyze current state
- `planning` - Plan approach
- `execution` - Execute changes
- `validation` - Validate results
- `documentation` - Update documentation
- `git_stage` - Stage files
- `git_commit` - Commit changes
- `git_push` - Push to remote

### Custom Steps

You can specify custom step names. The generator will create basic step structures:

```bash
python generate_workflow.py \
  --type custom \
  --name "Custom Workflow" \
  --steps analyze plan execute validate document
```

---

## Workflow Structure

Generated workflows follow this structure:

```yaml
name: [Workflow Name]
version: 1.0.0
type: [workflow_type]
description: [Description]

config:
  # Workflow-level configuration

steps:
  - id: step-1
    name: [Step Name]
    type: [step_type]
    handler: [handler_function]
    required: true
    dependencies: []
    config:
      # Step-specific configuration

parameters:
  # Optional workflow parameters
```

---

## Customization

### Custom Config

Create a JSON file with custom configuration:

```json
{
  "custom_setting": "value",
  "another_setting": 123
}
```

Use with `--config` option.

### Custom Parameters

Create a JSON file with workflow parameters:

```json
[
  {
    "name": "param_name",
    "type": "string",
    "required": true,
    "label": "Parameter Label",
    "description": "Parameter description"
  }
]
```

Use with `--parameters` option.

---

## Integration with Agent Execution

Generated workflows are compatible with the agent-driven execution pattern:

1. **ANALYZE** - Agent analyzes each step
2. **DETERMINE** - Agent determines actions
3. **EXECUTE** - Agent executes actions
4. **VALIDATE** - Agent validates results
5. **PROCEED** - Agent documents and proceeds

---

## Next Steps

After generating a workflow:

1. **Review the generated YAML** - Ensure it matches your requirements
2. **Customize as needed** - Edit the YAML file directly
3. **Create execution guide** - Follow the pattern from existing execution guides
4. **Test the workflow** - Use in a test project first
5. **Document usage** - Add examples and use cases

---

## References

- **Agent-Driven Execution:** `docs/documentation/Developer_Docs/vwmp/agent-driven-workflow-execution.md`
- **Release Workflow:** `docs/documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md`
- **Workflow Taxonomy:** `docs/project-management/kanban/epics/Epic-2/Story-003-additional-workflows-and-examples/T01-workflow-taxonomy.md`
- **Existing Workflows:** `workflows/`

---

## Troubleshooting

### Error: PyYAML is required

Install PyYAML:
```bash
pip install pyyaml
```

### Error: Invalid workflow type

Use one of the supported types: `refactor`, `migration`, `testing`, `custom`

### Error: Invalid JSON in config/parameters

Validate your JSON files using a JSON validator before using them.

---

_This generator helps create workflows following the agent-driven execution pattern used throughout the workflow management framework._


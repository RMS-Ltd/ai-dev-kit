---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T12:01:57Z
expires_at: null
housekeeping_policy: keep
---

# Workflow Generator Usage Examples

This document provides practical examples of using the workflow template generator.

---

## Example 1: Generate Basic Refactor Workflow

**Command:**
```bash
cd packages/frameworks/workflow\ mgt/scripts
python generate_workflow.py --type refactor --name "Code Refactoring"
```

**Output:** `code-refactoring-workflow.yaml`

**Result:**
- Creates a refactor workflow with default steps
- Includes analysis, planning, execution, validation, documentation, and git operations
- Uses default refactor configuration

---

## Example 2: Generate Custom Testing Workflow

**Command:**
```bash
python generate_workflow.py \
  --type testing \
  --name "Integration Test Workflow" \
  --description "Workflow for running integration tests before deployment" \
  --output integration-test-workflow.yaml
```

**Result:**
- Creates a testing workflow with testing-specific steps
- Includes test analysis, planning, execution, coverage checking
- Uses default testing configuration (pytest, coverage thresholds)

---

## Example 3: Generate Deployment Workflow with Custom Steps

**Command:**
```bash
python generate_workflow.py \
  --type custom \
  --name "Deployment Workflow" \
  --steps analysis planning execution validation documentation git_stage git_commit git_push \
  --output deployment-workflow.yaml
```

**Result:**
- Creates a custom workflow with specified steps
- Follows agent-driven execution pattern
- Ready for customization

---

## Example 4: Generate Workflow with Custom Config

**Step 1:** Create `deployment-config.json`:
```json
{
  "deployment_branch_prefix": "deploy/",
  "deployment_target": "production",
  "rollback_enabled": true,
  "health_check_url": "https://api.example.com/health",
  "deployment_timeout": 300
}
```

**Step 2:** Generate workflow:
```bash
python generate_workflow.py \
  --type custom \
  --name "Production Deployment" \
  --config deployment-config.json \
  --output production-deployment-workflow.yaml
```

**Result:**
- Workflow includes custom configuration
- Config values available in workflow steps via `${config.*}`

---

## Example 5: Generate Workflow with Parameters

**Step 1:** Create `deployment-parameters.json`:
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
    "name": "deployment_strategy",
    "type": "enum",
    "required": false,
    "default": "rolling",
    "label": "Deployment Strategy",
    "description": "Deployment strategy to use",
    "options": [
      {"value": "rolling", "label": "Rolling Update"},
      {"value": "blue_green", "label": "Blue-Green"},
      {"value": "canary", "label": "Canary"}
    ]
  },
  {
    "name": "summary",
    "type": "string",
    "required": true,
    "label": "Deployment Summary",
    "description": "Brief description of the deployment"
  },
  {
    "name": "detailed_changes",
    "type": "textarea",
    "required": false,
    "label": "Detailed Changes",
    "description": "Optional detailed list of deployment changes"
  }
]
```

**Step 2:** Generate workflow:
```bash
python generate_workflow.py \
  --type custom \
  --name "Deployment Workflow" \
  --parameters deployment-parameters.json \
  --output deployment-workflow.yaml
```

**Result:**
- Workflow includes parameter definitions
- Parameters can be used in workflow steps
- Supports enum, string, textarea, boolean, number types

---

## Example 6: Generate Workflow with Both Config and Parameters

**Command:**
```bash
python generate_workflow.py \
  --type custom \
  --name "Full Deployment Workflow" \
  --config deployment-config.json \
  --parameters deployment-parameters.json \
  --version 1.0.0 \
  --output full-deployment-workflow.yaml
```

**Result:**
- Complete workflow with both configuration and parameters
- Ready for use in projects

---

## Example 7: Generate Minimal Workflow

**Command:**
```bash
python generate_workflow.py \
  --type custom \
  --name "Simple Workflow" \
  --steps analysis execution validation \
  --output simple-workflow.yaml
```

**Result:**
- Minimal workflow with only essential steps
- Good for simple use cases

---

## Example 8: Generate Workflow from Existing Pattern

**Command:**
```bash
# Generate a migration workflow similar to existing one
python generate_workflow.py \
  --type migration \
  --name "Database Migration Workflow" \
  --description "Workflow for database schema migrations" \
  --output db-migration-workflow.yaml
```

**Result:**
- Migration workflow with backup and rollback support
- Includes validation and testing steps
- Ready for database-specific customization

---

## Post-Generation Steps

After generating a workflow:

1. **Review the YAML:**
   ```bash
   cat generated-workflow.yaml
   ```

2. **Customize as needed:**
   - Edit step configurations
   - Add custom steps
   - Modify dependencies
   - Update handlers

3. **Create execution guide:**
   - Follow pattern from existing execution guides
   - Document each step
   - Add examples

4. **Test the workflow:**
   - Use in a test project
   - Verify all steps work
   - Check dependencies are correct

---

## Tips

- **Start with a type:** Use `refactor`, `migration`, or `testing` for common patterns
- **Customize incrementally:** Generate basic workflow, then customize
- **Use config files:** Keep configuration in JSON files for reuse
- **Document parameters:** Clear parameter definitions help users
- **Test early:** Test generated workflows before using in production

---

## Troubleshooting

### Generated workflow has wrong dependencies

Edit the YAML file directly to fix dependencies. The generator creates a starting point that may need adjustment.

### Config values not working

Ensure config values are referenced correctly in steps using `${config.variable_name}` syntax.

### Parameters not appearing

Check that the parameters JSON file is valid JSON and follows the correct structure.

---

_These examples demonstrate common use cases for the workflow generator. Adapt them to your specific needs._


---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-10T23:10:00Z
expires_at: null
housekeeping_policy: keep
---

# Trigger-Aware Release Workflow Documentation

**Epic:** Epic 2 (Workflow Management Framework)  
**Story:** Story 7 (Trigger-Aware Release Workflow)  
**Version:** v0.2.7.8+0

---

## Overview

The Trigger-Aware Release Workflow extends the standard Release Workflow (RW) with intelligent trigger detection, dynamic sub-workflow execution, and intelligent deliverable processing. This enables RW to automatically react to specific conditions (like FR/BR/UXR commits) and execute appropriate workflows.

---

## Architecture

### Components

1. **Trigger Registry** (`trigger_registry.py`)
   - Pattern-based trigger detection
   - Support for commit message and file path patterns
   - Flexible patterns (FR\d+, BR\d+, UXR\d+ - works with and without dash)

2. **Workflow Executor** (`workflow_executor.py`)
   - Executes sub-workflows (Python scripts, functions, commands)
   - Error handling with failure type classification
   - Retry logic for transient failures
   - Checkpoint and rollback foundation

3. **Deliverable Processor** (`deliverable_processor.py`)
   - Intelligent deliverable type detection
   - Action determination (registry + agentic validation)
   - Integration with RW (versioning, changelog, Kanban board)

4. **Trigger Integration** (`trigger_integration.py`)
   - Git integration for commit message and changed files
   - Workflow execution integration
   - Deliverable processing integration

5. **Workflow Orchestrator** (`workflow_orchestrator.py`)
   - Workflow chaining and orchestration
   - Dependency graph for known workflows
   - Agentic planning for complex scenarios

---

## Usage

### Basic Usage

### Automatic Trigger Detection

The trigger system automatically detects triggers when RW is executed:

```python
from trigger_integration import check_and_execute_triggers

# Check for triggers and execute workflows
result = check_and_execute_triggers(rw_context={'version': '0.1.0+1'})

if result['triggers_detected']:
    print(f"Detected {len(result['triggers'])} trigger(s)")
    for trigger in result['triggers']:
        print(f"  - {trigger['id']}: {trigger['name']}")
```

### Manual Trigger Detection

You can also manually check for triggers:

```python
from trigger_integration import TriggerIntegration

integration = TriggerIntegration()

# Check triggers with custom commit message
triggers = integration.check_triggers(
    commit_message='v0.1.0+1 - FR012: New feature',
    changed_files=['docs/project-management/kanban/fr-br/FR-012-new-feature.md']
)

for trigger in triggers:
    print(f"Trigger: {trigger.id} - {trigger.name}")
```

### Intake Workflow Integration

The **Intake Workflow** (E2:S11) is a complete workflow that automatically executes when FR/BR/UXR commits are detected:

**Automatic Execution:**
- When RW detects FR/BR/UXR commits (via commit messages or file paths), the intake workflow automatically executes
- The intake workflow runs as a sub-workflow of RW, integrating with versioning and documentation updates

**Example:**
```python
# Commit message: "Add FR-019: Intake Workflow Automation"
# Changed files: ["docs/project-management/kanban/fr-br/FR-019.md"]
# → RW detects trigger → Intake workflow executes automatically
```

**Intake Workflow Steps:**
1. Load & Parse FR/BR/UXR Document
2. Decision Flow Analysis (determines Epic/Story/Task assignment)
3. Create/Update Kanban Tasks (using E4:S10 agentic task creation)
4. Update FR/BR/UXR Documentation (with intake decision and version markers)
5. Wire Dependencies (extract and wire Blocked By, Blocks, Related Work)
6. Assign Version Marker (using canonical RC.EPIC.STORY.TASK+BUILD schema)
7. Validate & Report Results

**Documentation:**
- See `docs/documentation/Developer_Docs/vwmp/intake-workflow-agent-execution.md` for complete agent execution guide
- See `workflows/intake-workflow/intake-workflow.yaml` for workflow definition

### Workflow Chaining

Chain multiple workflows together:

```python
from workflow_orchestrator import chain_workflows

# Chain workflows with dependencies
plan = chain_workflows(
    workflow_ids=['agentic_task_creation', 'documentation_generation'],
    user_request='Create tasks and generate documentation',
    rw_context={'version': '0.1.0+1'}
)

print(f"Execution status: {plan.status.value}")
for workflow_id, result in plan.results.items():
    print(f"  {workflow_id}: {result.status.value}")
```

---

## Trigger Patterns

### FR/BR/UXR Commit Triggers

The system detects Feature Requests, Bug Reports, and User Experience Research commits using flexible patterns:

- **FR Pattern:** `FR\d+` matches both `FR012` and `FR-012`
- **BR Pattern:** `BR\d+` matches both `BR007` and `BR-007`
- **UXR Pattern:** `UXR\d+` matches both `UXR001` and `UXR-001`

### File Path Patterns

The system also detects triggers from file paths:

- `fr-br/FR-*.md` - Matches FR files
- `fr-br/BR-*.md` - Matches BR files
- `fr-br/UXR-*.md` - Matches UXR files

---

## Workflow Execution

### Registering Workflows

Register workflows that can be triggered:

```python
from workflow_executor import WorkflowExecutor, WorkflowDefinition

executor = WorkflowExecutor()

# Register a workflow
workflow = WorkflowDefinition(
    id='my_workflow',
    name='My Workflow',
    description='Does something useful',
    entry_point='scripts/my_workflow.py',
    parameters={'param1': 'value1'},
    timeout=300
)

executor.register_workflow(workflow)
```

### Executing Workflows

Execute workflows with context:

```python
result = executor.execute_workflow(
    'my_workflow',
    context={'additional': 'data'}
)

if result.status == WorkflowStatus.COMPLETED:
    print(f"Workflow completed with {len(result.deliverables)} deliverables")
```

---

## Deliverable Processing

### Processing Deliverables

Process deliverables from workflows:

```python
from deliverable_processor import DeliverableProcessor, Deliverable, DeliverableType

processor = DeliverableProcessor()

# Process a deliverable
deliverable = Deliverable(
    type=DeliverableType.KANBAN_TASKS,
    data={'tasks': [...]},
    source_workflow='agentic_task_creation'
)

result = processor.process_deliverable(deliverable, rw_context)

print(f"Actions taken: {result.actions_taken}")
print(f"Integration status: {result.integration_status}")
```

### Registering Action Handlers

Register custom action handlers:

```python
def my_custom_action(deliverable, rw_context):
    # Custom action logic
    pass

processor.register_action_handler('my_custom_action', my_custom_action)
```

---

## Workflow Orchestration

### Dependency Graph

The orchestrator uses a dependency graph for known workflows:

```python
from workflow_orchestrator import WorkflowOrchestrator

orchestrator = WorkflowOrchestrator()

# Register workflow dependencies
orchestrator.register_workflow_dependency(
    workflow_id='my_workflow',
    depends_on=['other_workflow'],
    produces=['deliverable_type'],
    estimated_duration='5min'
)
```

### Planning Execution

Plan workflow execution:

```python
plan = orchestrator.plan_workflow_execution(
    workflow_ids=['workflow1', 'workflow2', 'workflow3'],
    user_request='Execute all workflows',
    rw_context={'version': '0.1.0+1'}
)

print(f"Execution order: {plan.workflows}")
print(f"Dependencies: {plan.dependencies}")
```

---

## Integration with Release Workflow

### RW Integration Point

The trigger system integrates with RW at Step 0 (pre-Step 1):

1. **Before Step 1 (Branch Safety Check):**
   - Check for triggers in commit message and changed files
   - If triggers detected, plan sub-workflow execution
   - Continue with normal RW flow

2. **Sub-Workflow Execution:**
   - Execute workflows based on detected triggers
   - Process deliverables from sub-workflows
   - Integrate deliverables into RW

3. **Deliverable Processing:**
   - Process deliverables (e.g., Kanban tasks)
   - Update versioning, changelog, Kanban board
   - Continue with normal RW steps

### Example RW Integration

```python
# In Release Workflow Step 0
from trigger_integration import check_and_execute_triggers

rw_context = {
    'version': current_version,
    'branch': current_branch,
    'epic': current_epic
}

# Check and execute triggers
trigger_result = check_and_execute_triggers(rw_context)

if trigger_result['triggers_detected']:
    # Triggers detected and workflows executed
    # Deliverables processed and integrated
    # Continue with normal RW steps
    pass
```

---

## Error Handling

### Failure Types

The system classifies failures into three types:

1. **Transient:** Network, timeout - can retry
2. **Critical:** Data corruption, state inconsistency - rollback
3. **Ambiguous:** Requires human judgment

### Retry Logic

Automatic retry for transient failures:

```python
from workflow_executor import WorkflowExecutor

executor = WorkflowExecutor()

# Retry failed workflow
result = executor.retry_workflow(
    'my_workflow',
    max_retries=3,
    backoff='exponential'
)
```

### Rollback

Rollback to checkpoint for critical failures:

```python
# Rollback to checkpoint
success = executor.rollback_to_checkpoint('checkpoint_id')
```

---

## Examples

### Example 1: FR Commit Trigger

When a commit includes `FR012` in the message:

1. Trigger detected: `fr_commit`
2. Workflow executed: `agentic_task_creation`
3. Deliverables processed: Kanban tasks created
4. RW continues: Tasks integrated into release

### Example 2: Multiple Triggers

When a commit includes both `FR012` and `BR007`:

1. Triggers detected: `fr_commit`, `br_commit`
2. Workflows executed: `agentic_task_creation` (for both)
3. Deliverables processed: Tasks from both FR and BR
4. RW continues: All tasks integrated

### Example 3: Workflow Chaining

When user requests "Create tasks and generate documentation":

1. Plan created: `agentic_task_creation` → `documentation_generation`
2. Workflows executed in order
3. Deliverables passed between workflows
4. All deliverables processed and integrated

---

## Testing

### Unit Tests

Test individual components:

```python
# Test trigger detection
from trigger_registry import detect_triggers

triggers = detect_triggers('FR012: New feature', [])
assert len(triggers) == 1
assert triggers[0].id == 'fr_commit'
```

### Integration Tests

Test full workflow:

```python
# Test trigger integration
from trigger_integration import TriggerIntegration

integration = TriggerIntegration()
result = integration.integrate_with_rw({'version': '0.1.0+1'})
assert result['triggers_detected'] == True
```

---

## Configuration

### Trigger Registry Configuration

Customize trigger patterns:

```python
from trigger_registry import register_trigger

register_trigger('custom_trigger', {
    'name': 'Custom Trigger',
    'patterns': [r'CUSTOM\d+'],
    'file_patterns': ['custom/*.md'],
    'workflow': 'custom_workflow',
    'confidence': 'high',
    'priority': 1
})
```

### Workflow Dependency Configuration

Customize workflow dependencies:

```python
from workflow_orchestrator import WorkflowOrchestrator

orchestrator = WorkflowOrchestrator()

orchestrator.register_workflow_dependency(
    workflow_id='custom_workflow',
    depends_on=['other_workflow'],
    produces=['custom_deliverable']
)
```

---

## Troubleshooting

### Triggers Not Detected

1. Check commit message format (should match patterns)
2. Check file paths (should match file patterns)
3. Verify trigger registry configuration

### Workflow Execution Fails

1. Check workflow definition (entry point, parameters)
2. Check error type (transient vs critical)
3. Review execution logs

### Deliverable Processing Issues

1. Check deliverable type detection
2. Verify action handlers are registered
3. Review processing logs

---

## References

- **Design Document:** `packages/frameworks/workflow mgt/design/trigger-detection-system-design.md`
- **Epic 2 Story 7:** Trigger-Aware Release Workflow
- **FR-013:** Trigger-Aware Release Workflow
- **FR-014:** New RW Trigger for FR/BR/UXR Commits

---

## Future Enhancements

1. **Agentic Intelligence:** Full LLM integration for complex scenarios
2. **Custom Triggers:** User-defined trigger patterns
3. **Trigger History:** Learning from past triggers
4. **Advanced Orchestration:** More sophisticated workflow planning


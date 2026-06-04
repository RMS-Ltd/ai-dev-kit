---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T12:02:13Z
expires_at: null
housekeeping_policy: keep
---

# Agent-Driven Workflow Execution Methodology

**Version:** 1.0.0
**Last Updated:** 2025-12-01
**Related:** Epic 21 - Visual Workflow Management Platform, Release Workflow

---

## 📖 Overview

This document defines the **intelligent agent-driven workflow execution pattern** for VWMP workflows. Unlike deterministic script execution, agent-driven execution involves AI agents analyzing each workflow step, determining appropriate actions, and executing with intelligent decision-making.

**Key Principle:** Workflows are executed by intelligent agents that analyze context, make decisions, and take actions—not by deterministic scripts that blindly follow predefined steps.

---

## 🎯 Core Concept

### Agent-Driven vs. Deterministic Execution

**Deterministic Script Execution:**
- Scripts execute predefined commands in sequence
- No analysis or decision-making required
- Same inputs always produce same outputs
- Example: `python scripts/automation/release_workflow.py --auto-go`

**Agent-Driven Execution:**
- AI agent analyzes each step's requirements
- Agent determines appropriate actions based on context
- Agent makes intelligent decisions at each step
- Agent validates and adapts as needed
- Example: Agent reads workflow definition, analyzes Step 1 requirements, determines next version, updates version file, then proceeds to Step 2

### Why Agent-Driven?

**Benefits:**
- ✅ **Contextual Intelligence:** Agent understands project state, branch context, and requirements
- ✅ **Adaptive Execution:** Agent can handle edge cases and make decisions
- ✅ **Error Recovery:** Agent can analyze failures and determine recovery strategies
- ✅ **Validation:** Agent validates each step before proceeding
- ✅ **Documentation:** Agent can explain decisions and document reasoning

**Use Cases:**
- Complex workflows requiring analysis (e.g., Release Workflow)
- Workflows with conditional logic based on project state
- Workflows requiring intelligent error handling
- Workflows where context matters (branch, version, dependencies)

---

## 📋 Execution Pattern

### The Agent Execution Cycle

For each workflow step, the agent follows this pattern:

```
1. ANALYZE
   ├─ Read step definition and requirements
   ├─ Understand step purpose and dependencies
   ├─ Gather context (project state, previous step outputs)
   └─ Identify what needs to be done

2. DETERMINE
   ├─ Determine specific actions required
   ├─ Calculate values (e.g., next version number)
   ├─ Validate prerequisites are met
   └─ Plan execution approach

3. EXECUTE
   ├─ Perform the required actions
   ├─ Update files, run commands, create resources
   └─ Capture results and outputs

4. VALIDATE
   ├─ Verify execution succeeded
   ├─ Check outputs match expectations
   ├─ Validate against requirements
   └─ Handle errors if validation fails

5. PROCEED
   ├─ Document what was done
   ├─ Pass outputs to next steps
   └─ Move to next step in workflow
```

### Example: Step 1 Analysis

**Step Definition:**
```yaml
- id: step-1
  name: Bump Version
  handler: release.version_bump
  config:
    version_file: src/confidentia/version.py
    increment_type: patch
```

**Agent Analysis:**
1. **ANALYZE:** Read current version from `src/confidentia/version.py`, understand version schema (RC.EPIC.STORY.TASK+BUILD), check branch context
2. **DETERMINE:** Calculate next version (increment BUILD), validate version matches branch schema
3. **EXECUTE:** Update version file with new version
4. **VALIDATE:** Verify version file updated correctly, check version format is valid
5. **PROCEED:** Pass new version to Step 2, document version change

---

## 🔄 Workflow Execution Flow

### Phase 1: Preparation

**Agent Actions:**
1. Load workflow definition (YAML)
2. Parse workflow structure and steps
3. Validate workflow definition
4. Extract workflow parameters
5. Understand step dependencies
6. Resolve execution order

### Phase 2: Step-by-Step Execution

For each step in execution order:

1. **Step Analysis:**
   - Read step definition
   - Understand step purpose
   - Check dependencies are satisfied
   - Gather required context

2. **Action Determination:**
   - Determine what needs to be done
   - Calculate required values
   - Plan execution approach
   - Validate prerequisites

3. **Execution:**
   - Perform step actions
   - Update files/systems
   - Run commands/scripts
   - Create resources

4. **Validation:**
   - Verify step succeeded
   - Check outputs
   - Validate against requirements
   - Handle errors

5. **Documentation:**
   - Record what was done
   - Capture outputs
   - Document decisions
   - Update status

### Phase 3: Completion

**Agent Actions:**
1. Verify all steps completed
2. Collect final results
3. Generate execution summary
4. Report completion status

---

## Progress Tracking with Workflow Step Tracker

**MANDATORY:** Use a **Workflow Step Tracker** for all agent-managed workflow progress. See the canonical [Workflow Step Tracker Contract](workflow-step-tracker-contract.md) (ADR-011).

Agents **MUST NOT** require Cursor `todo_write` specifically. They **MUST** implement tracker semantics via a supported **tool adapter** (Cursor `todo_write`, Windsurf/Cascade `todo_list`, or agent run log file fallback).

**Why step tracking is required:**

- User visibility into real-time progress
- Agent organization across sequential steps
- Interruption recovery — clear stop point if workflow aborts
- Accountability and audit trail of execution

**Required lifecycle (contract summary):**

1. At workflow start — create full step list (`pending`); initialize [agent run log](../../../../../../docs/architecture/standards-and-adrs/schemas/workflow-agent-run-log-v1.schema.json) when cross-session resume is likely.
2. Before each step — mark current step `in_progress` (exactly one).
3. After each step — mark completed; advance next to `in_progress`.
4. On completion — all steps `completed`; finalize agent run log.
5. On abort — cancel remaining steps; record `blocking_reason` in agent run log.

**Cursor adapter example** (reference only):

```python
todo_write(merge=False, todos=[
    {'id': 'step-1', 'status': 'pending', 'content': 'Step 1: Description'},
])
todo_write(merge=True, todos=[{'id': 'step-1', 'status': 'in_progress'}])
```

**Enforcement:**

- MUST initialize tracker before first step execution
- MUST update tracker status at step boundaries
- MUST finalize agent run log on workflow end (see RW Step 17)

**Canonical examples:** [Release Workflow](release-workflow-agent-execution.md), [Intake Workflow](intake-workflow-agent-execution.md)

---

## 🎓 Canonical Examples

### Release Workflow

The **Release Workflow** serves as the canonical example of agent-driven execution. See [Release Workflow Agent Execution Guide](release-workflow-agent-execution.md) for detailed step-by-step agent execution patterns.

**Why Release Workflow is Canonical:**
- ✅ **Complex Decision-Making:** Requires analysis of version schema, branch context, changelog format
- ✅ **Context-Dependent:** Actions depend on current project state
- ✅ **Validation-Heavy:** Multiple validation steps requiring intelligent analysis
- ✅ **Error Recovery:** Requires intelligent handling of validation failures
- ✅ **Documentation Integration:** Updates multiple documentation systems intelligently

---

## 📝 Agent Execution Checklist

When executing a workflow as an agent, ensure:

- [ ] **MANDATORY: Workflow Step Tracker initialized** per [contract](workflow-step-tracker-contract.md)
- [ ] **Workflow Definition Loaded:** Agent has read and parsed workflow YAML
- [ ] **Context Gathered:** Agent understands project state, branch, version, dependencies
- [ ] **Step Analysis:** For each step, agent analyzes requirements before executing
- [ ] **Intelligent Decisions:** Agent makes decisions based on context, not just following scripts
- [ ] **Validation:** Agent validates each step before proceeding
- [ ] **Error Handling:** Agent handles errors intelligently (retry, skip, abort as appropriate)
- [ ] **Documentation:** Agent documents decisions and actions taken
- [ ] **Output Passing:** Agent correctly passes step outputs to dependent steps
- [ ] **MANDATORY: Tracker status updated** at each step boundary
- [ ] **MANDATORY: All steps completed** in tracker on successful completion

---

## 🔧 Implementation Guidelines

### For Workflow Designers

**Design workflows for agent execution:**
- ✅ **Clear Step Definitions:** Each step should have clear purpose and requirements
- ✅ **Documentation:** Document what each step does and why
- ✅ **Context Requirements:** Specify what context each step needs
- ✅ **Output Specifications:** Define what each step should produce
- ✅ **Error Scenarios:** Document how errors should be handled

### For Agents

**When executing workflows:**
- ✅ **MANDATORY: Initialize Workflow Step Tracker:** Per [contract](workflow-step-tracker-contract.md) before starting execution
- ✅ **Read First:** Always read and understand step definition before executing
- ✅ **Gather Context:** Collect all required context (files, state, previous outputs)
- ✅ **Analyze Requirements:** Understand what the step needs to accomplish
- ✅ **Make Decisions:** Use intelligence to determine specific actions
- ✅ **Validate Results:** Verify execution succeeded before proceeding
- ✅ **Document Actions:** Record what was done and why
- ✅ **MANDATORY: Update tracker:** Update step status at each step boundary

---

## 🚫 Anti-Patterns

### ❌ Don't: Blind Script Execution

**Bad:**
```python
# Agent just runs script without analysis
run_terminal_cmd("python scripts/automation/release_workflow.py --auto-go")
```

**Good:**
```python
# Agent analyzes workflow, executes each step intelligently
# Step 1: Analyze version requirements, determine next version, update file
# Step 2: Analyze changelog requirements, create detailed changelog
# etc.
```

### ❌ Don't: Skip Analysis

**Bad:**
- Agent executes step without understanding requirements
- Agent doesn't validate prerequisites
- Agent doesn't check context

**Good:**
- Agent analyzes step requirements first
- Agent validates prerequisites
- Agent checks context before executing

### ❌ Don't: Ignore Errors

**Bad:**
- Agent continues after step failure
- Agent doesn't analyze error causes
- Agent doesn't determine recovery strategy

**Good:**
- Agent analyzes errors intelligently
- Agent determines if step is required or optional
- Agent decides on recovery strategy (retry, skip, abort)

---

## 📚 Related Documentation

**Workflow Documentation:**
- **[Release Workflow Agent Execution Guide](release-workflow-agent-execution.md)** - Detailed agent execution patterns for Release Workflow
- **[Release Workflow Reference](release-workflow-reference.md)** - Complete workflow reference
- **[Intake Workflow Agent Execution Guide](intake-workflow-agent-execution.md)** - Step-by-step guide for Intake Workflow (FR/BR/UXR automation)
- **[VWMP Best Practices](best-practices.md)** - Workflow design best practices

**Cursor Rules Integration:**
- **[Cursor Rules](../../../../.cursorrules)** – Defines how AI assistants must behave when working in this repo
- **RW Trigger:** When user types "RW" or "rw" (case-insensitive), `.cursorrules` mandates intelligent agent-driven execution
- **Binding Rules:** All agent decisions must follow `.cursorrules` (branch isolation, mandatory commit checklist, versioning policy)
- **Guardrails:** Before executing workflows, agents must consult `.cursorrules` for branch checks, validation scripts, and versioning requirements
- **Execution Pattern:** `.cursorrules` explicitly requires agent-driven execution (ANALYZE → DETERMINE → EXECUTE → VALIDATE → PROCEED) rather than blind script execution

**Platform Documentation:**
- **[VWMP Platform Architecture](../../Architecture/standards-and-adrs/E21-vwmp-platform-architecture.md)** - Platform architecture
- **[VWMP Plugin Architecture](../../Architecture/standards-and-adrs/E21-vwmp-plugin-architecture.md)** - Plugin system

---

**Last Updated:** 2025-12-01
**Document Version:** 1.0.0

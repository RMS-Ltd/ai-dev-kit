---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T12:02:07Z
expires_at: null
housekeeping_policy: keep
---

# Kanban Integration with Agent-Driven Workflow Management

**Package:** Kanban System Implementation Package v1.0.0
**Integrates With:** Workflow Management Package v2.0.0
**Integration Type:** Dependent (Workflow automates Kanban updates)
**Last Updated:** 2025-12-02

---

## Overview

This guide explains how to integrate the Kanban System with the Workflow Management package (specifically the Release Workflow) to automatically maintain Kanban documentation with forensic markers.

---

## Prerequisites

```yaml
required:
  - Kanban System package installed
  - Workflow Management package installed
  - .cursorrules configured with RW trigger
  - Epic and Story documents following templates
  - Numbering & Versioning package (for forensic markers)
```

---

## Integration Architecture

```yaml
relationship:
  workflow_automates: "Kanban documentation updates"
  kanban_provides: "Work item structure and traceability"

automation_flow:
  1: "Developer completes work (code changes)"
  2: "Developer types 'RW' in AI assistant"
  3: "Release Workflow executes 10 steps"
  4: "Step 4: Update KB Epic Docs (automatic Kanban update)"
  5: "Epic header updated with version"
  6: "Story Checklist updated with forensic marker"
  7: "Detailed story sections updated (ALL sections)"
  8: "Documentation consistency validated"
  9: "Changes committed and tagged"
  10: "Pushed to remote"
```

---

## Release Workflow Step 4: Update KB Epic Docs

### Overview

```yaml
step_4:
  name: "Update KB Epic Docs"
  purpose: "Automatically update Kanban documentation with forensic markers"
  type: "Intelligent agent-driven execution"
  pattern: "ANALYZE → DETERMINE → EXECUTE → VALIDATE → PROCEED"
```

### What Gets Updated

```yaml
updates:
  epic_header:
    location: "Epic-{epic}/Epic-{epic}.md, header metadata"
    field: "Last updated"
    format: "**Last updated:** 2025-12-02 (v0.4.33.3+1 – Story 33 complete)"

  story_checklist:
    location: "Epic-{epic}/Epic-{epic}.md, Story Checklist section"
    field: "Story status and version marker"
    format: "- [x] **Story 33 – Parent Inclusivity** ✅ COMPLETE (v0.4.33.3+1)"
    requirement: "SINGLE SOURCE OF TRUTH"

  detailed_story_sections:
    location: "Epic-{epic}/Epic-{epic}.md, detailed story sections"
    fields:
      - "Status"
      - "Last updated"
      - "Task checkboxes with forensic markers"
    requirement: "ALL sections must be updated (not just checklist)"
```

### "ALL Sections" Requirement

```yaml
all_sections:
  introduced_in: "VWMP v2.0.0"
  purpose: "Prevent documentation inconsistencies"

  requirement: |
    Step 4 MUST update:
    - Header metadata (Last updated field)
    - Story Checklist (status and version marker)
    - Detailed story sections (Status, Last updated, task checkboxes)
    - Any other references to the story/task being released

  systematic_process:
    1: "Read the FULL Epic-{epic}/Epic-{epic}.md file"
    2: "Read the authoritative Story-{N}-{Name}.md file to get correct state"
    3: "Find ALL sections referencing the story/task (grep/search the file)"
    4: "Update ALL of them to match the Story file's state"
    5: "Validate consistency: header, checklist, and detailed sections must all match"

  enforcement:
    - ".cursorrules explicitly requires 'ALL sections'"
    - "Release Workflow documentation emphasizes systematic process"
    - "Agents must follow ANALYZE → DETERMINE → EXECUTE → VALIDATE → PROCEED pattern"
```

---

## Step-by-Step Integration

### Step 1: Install Workflow Management Package

```yaml
action: "Install and configure Workflow Management package"
source: "temp/workflow-mgt/"
steps:
  1: "Copy workflow management files to project"
  2: "Update .cursorrules with RW trigger section"
  3: "Configure file paths in RW documentation"
  4: "Test RW execution"
```

### Step 2: Configure RW Step 4 Paths

```yaml
action: "Configure Kanban document paths"

paths_to_configure:
  epic_docs:
    pattern: "docs/project-management/epics/overview/Epic {epic}/Epic-{epic}.md"
    example: "docs/project-management/epics/overview/Epic 4/Epic-4.md"

  story_docs:
    pattern: "docs/project-management/kanban/epics/Epic-{epic}/Story-{N}-{Name}.md"
    example: "docs/project-management/kanban/epics/Epic-4/Story-33-Parent-Inclusivity-and-Accessibility.md"

files_to_update:
  - ".cursorrules (RW trigger section, Step 4 description)"
  - "docs/documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md"
  - "docs/documentation/Developer_Docs/vwmp/release-workflow-reference.md"
```

### Step 3: Test RW Kanban Updates

```yaml
action: "Verify RW updates Kanban docs correctly"

test_procedure:
  1:
    action: "Make code changes for a task"
    example: "Implement Task 1 of Story 1"

  2:
    action: "Type 'RW' in AI assistant"
    expected: "Release Workflow executes all 10 steps"

  3:
    action: "Verify Step 4 updates"
    checks:
      - "Epic header 'Last updated' field updated"
      - "Story Checklist has new version marker (if story complete)"
      - "Task Checklist has new version marker"
      - "Detailed story section updated (Status, Last updated)"
      - "ALL sections consistent"

  4:
    action: "Verify forensic markers"
    format: "✅ COMPLETE (v0.1.1.1+1)"
    location: "Story Checklist and Task Checklist"
```

### Step 4: Establish Workflow Rituals

```yaml
action: "Define when to use RW"

rituals:
  after_task_completion:
    trigger: "Task code complete and tested"
    action: "Type 'RW'"
    result: "Task marked complete with version marker"

  after_story_completion:
    trigger: "All tasks complete"
    action: "Type 'RW'"
    result: "Story marked complete in Story Checklist"

  regular_updates:
    frequency: "After every significant change"
    action: "Type 'RW'"
    result: "Documentation stays current"
```

---

## Agent Execution Pattern

### ANALYZE → DETERMINE → EXECUTE → VALIDATE → PROCEED

```yaml
step_4_execution:
  analyze:
    actions:
      - "Read current Epic document"
      - "Read authoritative Story document"
      - "Identify which story/task is being released"
      - "Understand current state vs. desired state"
      - "Identify ALL sections that need updates"

  determine:
    decisions:
      - "Which sections reference this story/task?"
      - "What should each section say?"
      - "Are there any inconsistencies to fix?"
      - "Is Story Checklist the only place for markers?"

  execute:
    actions:
      - "**FIRST: Update Story file task checklist with forensic markers**"
      - "**THEN: Update Epic header 'Last updated' field**"
      - "**THEN: Update Story Checklist with version marker**"
      - "**THEN: Update detailed story section (Status, Last updated)**"
      - "**THEN: Update task checkboxes with forensic markers**"
      - "Remove any duplicate progress sections"
      - "**CRITICAL: Story file must be updated FIRST, then Epic file matches it**"

  validate:
    checks:
      - "Epic header updated correctly"
      - "Story Checklist updated correctly"
      - "Detailed sections match Story file"
      - "ALL sections consistent"
      - "No duplicate progress sections"
      - "Forensic markers present"

  proceed:
    actions:
      - "Document changes made"
      - "Move to Step 5 (Update README)"
      - "Mark Step 4 as complete in TODO list"
```

---

## Atomicity & Blocked Protocol

### Overview

```yaml
atomicity:
  introduced_in: "VWMP v2.0.0"
  purpose: "Ensure clear workflow status (accessibility-critical)"

  requirement: |
    When user types 'RW', agent MUST either:
    - Complete all 10 steps to completion, OR
    - Stop at specific step with clear 'RW BLOCKED' message
```

### Blocked Protocol

```yaml
if_blocked:
  agent_must_state:
    - step: "Step number and name (e.g., 'Step 7: Run Validators')"
    - reason: "Why blocked (e.g., wrong branch, missing tool, sandbox limitation)"
    - actions: "Exact commands user must run to unblock"
    - status: "That RW is NOT complete until actions taken"

  agent_must_not:
    - "Silently stop mid-workflow after modifying files"
    - "Start new RW while previous RW TODOs are pending/in_progress"

  if_abandoned:
    - "Mark remaining rw-step-* TODOs as cancelled"
    - "Output short 'RW ABORTED' summary"
    - "State current state and next steps"

rationale:
  accessibility: "Critical for users with cognitive constraints"
  clarity: "User always knows workflow status"
  safety: "Prevents ambiguous states"
```

---

## Mandatory TODO Tracking

### Overview

```yaml
todo_tracking:
  introduced_in: "VWMP v2.0.0"
  requirement: "MANDATORY (not optional)"
  purpose: "Real-time progress visibility"
```

### Implementation

```yaml
at_workflow_start:
  action: "Create TODO list with all 10 steps"
  status: "pending"
  example: |
    todo_write(merge=False, todos=[
        {'id': 'rw-step-1', 'status': 'pending', 'content': 'Step 1: Bump Version'},
        {'id': 'rw-step-2', 'status': 'pending', 'content': 'Step 2: Update CHANGELOG'},
        ...
        {'id': 'rw-step-10', 'status': 'pending', 'content': 'Step 10: Push to Remote'},
    ])

before_each_step:
  action: "Mark step as in_progress"
  example: |
    todo_write(merge=True, todos=[{'id': 'rw-step-4', 'status': 'in_progress'}])

after_each_step:
  action: "Mark step as completed, next as in_progress"
  example: |
    todo_write(merge=True, todos=[
        {'id': 'rw-step-4', 'status': 'completed'},
        {'id': 'rw-step-5', 'status': 'in_progress'}
    ])

on_completion:
  action: "All steps marked as completed"
  result: "User sees all 10 steps complete"
```

### Benefits

```yaml
benefits:
  user_visibility: "User sees real-time progress through all 10 steps"
  agent_organization: "Helps agent stay organized across sequential steps"
  error_recovery: "Clear visibility into where execution stopped if interrupted"
  transparency: "User can verify all steps completed successfully"
  accessibility: "Critical for users with cognitive constraints"
```

---

## 📞 Support

```yaml
documentation:
  kanban_policy: "policies/kanban-governance-policy.md"
  epic_template: "templates/EPIC_TEMPLATE.md"
  story_template: "templates/STORY_TEMPLATE.md"
  epic_example: "examples/Epic-4-Example.md"
  story_example: "examples/Story-33-Example.md"

integration_guides:
  versioning: "integration/numbering-versioning-integration.md"
  workflow: "integration/workflow-management-integration.md"

reference_documentation:
  workflow_flaws: "../../docs/architecture/standards-and-adrs/workflow-flaws-reference-guide.md"
  versioning_errors: "../../docs/architecture/standards-and-adrs/versioning-error-reference-guide.md"

related_packages:
  numbering_versioning: "temp/numbering & versioning/"
  workflow_management: "temp/workflow-mgt/"
```

---

**Integration Complete!** Kanban system fully integrated with agent-driven workflow management for automatic documentation updates! 🤖

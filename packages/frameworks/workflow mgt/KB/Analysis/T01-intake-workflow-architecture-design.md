---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-15T00:00:00Z
expires_at: null
housekeeping_policy: keep
related_story: E2:S11
related_fr: FR-019
---

# E2:S11:T01 – Intake Workflow Architecture Design

**Epic:** Epic 2 (Workflow Management Framework)  
**Story:** Story 11 (Intake Workflow Automation)  
**Task:** Task 1 (Design Intake Workflow Architecture)  
**Version:** v0.2.11.1+0

---

## Overview

This document designs the architecture for the Intake Workflow, an automated workflow that formalizes and automates the process of "intaking" FR/BR/UXR reports into the Kanban system. The design follows established patterns from Release Workflow (RW) and Trigger-Aware Release Workflow, ensuring consistency and integration with existing workflow systems.

---

## Design Principles

1. **Consistency with RW:** Follow the same workflow structure, step patterns, and agent execution model as RW
2. **Deterministic Where Possible:** Use deterministic logic for pattern matching, file operations, and validation
3. **Agentic for Complex Decisions:** Use agentic intelligence for semantic matching, epic assignment, and decision flow analysis
4. **Integration First:** Seamlessly integrate with RW, Kanban system, and trigger-aware execution
5. **Error Handling:** Comprehensive error handling with recovery guidance, following RW Step 7 hardening patterns
6. **Framework-Agnostic:** Config-driven approach allowing reuse across projects

---

## Architecture Overview

### Workflow Invocation

The Intake Workflow can be invoked in two ways:

1. **Manual Invocation:**
   ```bash
   python intake_workflow.py --fr FR-019.md
   python intake_workflow.py --br BR-001.md
   python intake_workflow.py --uxr UXR-001.md
   ```

2. **Trigger-Aware Execution (via RW):**
   - RW detects FR/BR commit trigger
   - RW triggers Intake Workflow as sub-workflow
   - Intake Workflow processes FR/BR automatically
   - RW continues with normal release process

### High-Level Flow

```
┌─────────────────────────────────────────────────────────────┐
│                    Intake Workflow Entry                     │
│         (FR/BR/UXR document path or trigger)                 │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
         ┌───────────────────────┐
         │  Step 1: Load & Parse │
         │  FR/BR/UXR Document   │
         └───────────┬───────────┘
                     │
                     ▼
         ┌───────────────────────┐
         │  Step 2: Decision Flow │
         │  Analysis              │
         │  (Epic/Story/Task)     │
         └───────────┬───────────┘
                     │
                     ▼
         ┌───────────────────────┐
         │  Step 3: Create/Update│
         │  Kanban Tasks         │
         └───────────┬───────────┘
                     │
                     ▼
         ┌───────────────────────┐
         │  Step 4: Update FR/BR │
         │  /UXR Documentation  │
         └───────────┬───────────┘
                     │
                     ▼
         ┌───────────────────────┐
         │  Step 5: Wire          │
         │  Dependencies         │
         └───────────┬───────────┘
                     │
                     ▼
         ┌───────────────────────┐
         │  Step 6: Assign        │
         │  Version Marker       │
         └───────────┬───────────┘
                     │
                     ▼
         ┌───────────────────────┐
         │  Step 7: Validate &   │
         │  Report Results       │
         └───────────────────────┘
```

---

## Workflow Steps

### Step 0: Pre-Flight Checks (Optional but Recommended)

**Type:** `preflight_check`  
**Handler:** `intake.preflight_check`  
**Required:** `false`  
**Mandatory:** `false`  
**Blocking:** `true`  
**Dependencies:** `[]`

**Purpose:**
- Validate FR/BR/UXR document exists and is readable
- Check if document already intaken (prevent duplicate intake)
- Validate project structure (epics directory exists, templates available)
- Check prerequisites (E4:S08, E4:S10 available if configured)

**Deterministic Operations:**
- File existence checks
- Duplicate intake detection (check for existing intake status in document)
- Project structure validation
- Dependency availability checks

**Agentic Operations:**
- None (fully deterministic)

**Error Handling:**
- Document not found → RW BLOCKED
- Already intaken → RW BLOCKED with message
- Missing prerequisites → RW BLOCKED with recovery guidance

**Config:**
```yaml
preflight:
  enabled: true
  check_duplicates: true
  validate_structure: true
  check_dependencies: true
```

---

### Step 1: Load & Parse FR/BR/UXR Document

**Type:** `document_load`  
**Handler:** `intake.document_load`  
**Required:** `true`  
**Mandatory:** `true`  
**Blocking:** `true`  
**Dependencies:** `[]`

**Purpose:**
- Load FR/BR/UXR document from file path
- Parse document structure (frontmatter, content)
- Extract key information (type, title, description, requirements)
- Validate document format

**Deterministic Operations:**
- File reading and parsing
- Frontmatter extraction
- Content structure validation

**Agentic Operations:**
- Content analysis for semantic matching (if needed)
- Ambiguity resolution

**Error Handling:**
- File not found → RW BLOCKED
- Invalid format → RW BLOCKED with recovery guidance
- Parse errors → RW BLOCKED with recovery guidance

**Config:**
```yaml
fr_br_dir: docs/project-management/kanban/fr-br
document_patterns:
  fr: FR-*.md
  br: BR-*.md
  uxr: UXR-*.md
```

---

### Step 2: Decision Flow Analysis

**Type:** `decision_flow`  
**Handler:** `intake.decision_flow`  
**Required:** `true`  
**Mandatory:** `true`  
**Blocking:** `true`  
**Dependencies:** `[step-1]`

**Purpose:**
- Analyze FR/BR/UXR content to determine Epic/Story/Task placement
- Check for existing matching stories/tasks (semantic matching)
- Recommend new story vs. task addition
- Determine epic assignment

**Deterministic Operations:**
- Pattern matching for known epic patterns
- File system checks for existing stories/tasks
- Version number extraction

**Agentic Operations:**
- Semantic matching against existing Kanban structure (E4:S08)
- Epic assignment decision
- New story vs. task recommendation
- Decision rationale generation

**Error Handling:**
- Ambiguous placement → Agentic decision required
- No matching epic → RW BLOCKED (epic must exist or be created first, unless `auto_create_epic: true`)
- Multiple matches → Agentic disambiguation

**Epic Creation Policy:**
- By default, epics must exist before intake (prevents accidental epic creation)
- If `auto_create_epic: true` in config, workflow can create new epic (requires agentic decision)
- New epic creation follows canonical epic template structure

**Config:**
```yaml
semantic_matching:
  enabled: true
  threshold: 0.7
  use_e4s08: true
epic_assignment:
  auto_detect: true
  fallback_epic: null
```

**Integration Points:**
- E4:S08: Intelligent Epic Matching (semantic matching)
- Kanban system: Existing story/task lookup

---

### Step 3: Create/Update Kanban Tasks

**Type:** `kanban_task_creation`  
**Handler:** `intake.kanban_task_creation`  
**Required:** `true`  
**Mandatory:** `true`  
**Blocking:** `true`  
**Dependencies:** `[step-2]`

**Purpose:**
- Create or update Kanban tasks based on decision flow results
- Link tasks to FR/BR/UXR documents
- Update Epic/Story task checklists

**Deterministic Operations:**
- Task document creation (template-based)
- File system operations
- Checklist updates

**Agentic Operations:**
- Task content generation (E4:S10 integration)
- Task description and acceptance criteria

**Error Handling:**
- Task creation failure → RW BLOCKED with recovery guidance
- Permission errors → RW BLOCKED
- Template errors → RW BLOCKED with recovery guidance

**Config:**
```yaml
task_creation:
  use_e4s10: true
  template_path: packages/frameworks/kanban/templates
  auto_link_fr_br: true
```

**Integration Points:**
- **E4:S10 (Agentic Task Creation):** Primary integration point
  - Step 3 delegates task creation to E4:S10's `AgenticTaskWorkflow`
  - E4:S10 handles: FR/BR analysis, epic/story mapping, task content generation
  - Intake workflow adds: Intake status, version marker assignment, documentation updates
  - Avoids duplication: Reuses existing E4:S10 components rather than reimplementing
- Kanban templates: Task document structure (via E4:S10)
- RW Step 7: Kanban update script (for checklist updates after task creation)

---

### Step 4: Update FR/BR/UXR Documentation

**Type:** `intake_documentation_update`  
**Handler:** `intake.documentation_update`  
**Required:** `true`  
**Mandatory:** `true`  
**Blocking:** `true`  
**Dependencies:** `[step-2, step-3]`

**Purpose:**
- Update FR/BR/UXR document with intake decision
- Set intake status (ACCEPTED/PENDING/REJECTED/DEFERRED)
- Record intake date, assigned epic/story/task
- Record version marker for assigned task (from Step 6)
- Create Kanban links to assigned epic/story/task

**Deterministic Operations:**
- Document frontmatter updates
- Status field updates
- Date and assignment recording
- Link creation

**Agentic Operations:**
- None (fully deterministic)

**Error Handling:**
- Document update failure → RW BLOCKED with recovery guidance
- Invalid status → RW BLOCKED with recovery guidance

**Config:**
```yaml
intake_status:
  default: ACCEPTED
  allowed_values: [ACCEPTED, PENDING, REJECTED, DEFERRED]
version_marker:
  format: v{rc}.{epic}.{story}.{task}+{build}
  build_zero_for_intake: true
```

---

### Step 5: Wire Dependencies

**Type:** `dependency_wiring`  
**Handler:** `intake.dependency_wiring`  
**Required:** `true`  
**Mandatory:** `false`  
**Blocking:** `false`  
**Dependencies:** `[step-2, step-3]`

**Purpose:**
- Extract dependencies from FR/BR/UXR content
- Wire dependencies automatically (Blocked By, Blocks, Related Work)
- Cross-reference related work
- Validate dependency relationships

**Deterministic Operations:**
- Pattern matching for dependency references (FR-XXX, BR-XXX, E2:S11, etc.)
- Link creation
- Cross-reference updates

**Agentic Operations:**
- Dependency extraction from natural language
- Ambiguous reference resolution

**Error Handling:**
- Missing dependencies → Warning (non-blocking, unless `strict_mode: true`)
- Invalid references → Warning (non-blocking, unless `strict_mode: true`)
- Circular dependencies → Warning (non-blocking, always warning)
- In strict mode: Missing/invalid dependencies → RW BLOCKED

**Config:**
```yaml
dependency_patterns:
  fr: FR-\d+
  br: BR-\d+
  uxr: UXR-\d+
  epic_story: E\d+:S\d+
  task: E\d+:S\d+:T\d+
validation:
  check_existence: true
  check_circular: true
  strict_mode: false
```

---

### Step 6: Assign Version Marker

**Type:** `version_assignment`  
**Handler:** `intake.version_assignment`  
**Required:** `true`  
**Mandatory:** `true`  
**Blocking:** `true`  
**Dependencies:** `[step-2, step-3]`

**Purpose:**
- Assign version marker for created/assigned task
- Follow versioning policy (RC.EPIC.STORY.TASK+BUILD)
- Use doc-init build (+0) for new Story/Task creation (FR-020)
- For existing tasks, use next build number (+1, +2, etc.)

**Version Marker Logic:**
- **New Story/Task:** Assigns `vRC.E.S.T+0` (doc-init build)
- **Existing Task:** Uses next build number from task document
- **Version stored:** In Step 4, version marker is recorded in FR/BR document
- **Step 6 assigns:** Version marker is determined here, then recorded in Step 4

**Deterministic Operations:**
- Version component extraction from decision flow
- Version string generation
- Version marker assignment

**Agentic Operations:**
- None (fully deterministic)

**Error Handling:**
- Invalid version components → RW BLOCKED
- Version conflict → RW BLOCKED with recovery guidance

**Config:**
```yaml
version_schema: RC.EPIC.STORY.TASK+BUILD
intake_build: 0  # Doc-init build for intake actions
version_file: src/fynd_deals/version.py
```

**Integration Points:**
- Versioning policy: RC.EPIC.STORY.TASK+BUILD schema
- FR-020: Doc-init build (+0) support

---

### Step 7: Validate & Report Results

**Type:** `intake_validation`  
**Handler:** `intake.validation`  
**Required:** `true`  
**Mandatory:** `true`  
**Blocking:** `true`  
**Dependencies:** `[step-1, step-2, step-3, step-4, step-5, step-6]`

**Purpose:**
- Validate all intake operations completed successfully
- Verify document updates
- Verify task creation
- Verify dependency wiring
- Generate intake report

**Deterministic Operations:**
- File existence checks
- Content validation
- Link validation
- Report generation

**Agentic Operations:**
- None (fully deterministic)

**Error Handling:**
- Validation failures → RW BLOCKED with recovery guidance
- Missing updates → RW BLOCKED with recovery guidance

**Config:**
```yaml
validation:
  check_document_updates: true
  check_task_creation: true
  check_dependency_wiring: true
  generate_report: true
report_format: markdown
```

---

## Workflow YAML Structure

```yaml
name: Intake Workflow
version: 1.0.0
type: intake
description: Automated intake workflow for FR/BR/UXR reports

config:
  fr_br_dir: docs/project-management/kanban/fr-br
  kanban_dir: docs/project-management/kanban/epics
  version_file: src/fynd_deals/version.py
  semantic_matching:
    enabled: true
    threshold: 0.7
    use_e4s08: true
  task_creation:
    use_e4s10: true
    template_path: packages/frameworks/kanban/templates
  intake_status:
    default: ACCEPTED
    allowed_values: [ACCEPTED, PENDING, REJECTED, DEFERRED]
  version_schema: RC.EPIC.STORY.TASK+BUILD
  intake_build: 0

steps:
  - id: step-1
    name: Load & Parse FR/BR/UXR Document
    type: document_load
    handler: intake.document_load
    required: true
    mandatory: true
    blocking: true
    dependencies: []
    config:
      document_patterns:
        fr: FR-*.md
        br: BR-*.md
        uxr: UXR-*.md

  - id: step-2
    name: Decision Flow Analysis
    type: decision_flow
    handler: intake.decision_flow
    required: true
    mandatory: true
    blocking: true
    dependencies:
      - step-1
    config:
      semantic_matching:
        enabled: true
        threshold: 0.7
        use_e4s08: true
      epic_assignment:
        auto_detect: true

  - id: step-3
    name: Create/Update Kanban Tasks
    type: kanban_task_creation
    handler: intake.kanban_task_creation
    required: true
    mandatory: true
    blocking: true
    dependencies:
      - step-2
    config:
      use_e4s10: true
      template_path: packages/frameworks/kanban/templates
      auto_link_fr_br: true

  - id: step-4
    name: Update FR/BR/UXR Documentation
    type: intake_documentation_update
    handler: intake.documentation_update
    required: true
    mandatory: true
    blocking: true
    dependencies:
      - step-2
      - step-3
    config:
      intake_status:
        default: ACCEPTED
        allowed_values: [ACCEPTED, PENDING, REJECTED, DEFERRED]
      version_marker:
        format: v{rc}.{epic}.{story}.{task}+{build}
        build_zero_for_intake: true

  - id: step-5
    name: Wire Dependencies
    type: dependency_wiring
    handler: intake.dependency_wiring
    required: true
    mandatory: false
    blocking: false
    dependencies:
      - step-2
      - step-3
    config:
      dependency_patterns:
        fr: FR-\d+
        br: BR-\d+
        uxr: UXR-\d+
        epic_story: E\d+:S\d+
        task: E\d+:S\d+:T\d+
      validation:
        check_existence: true
        check_circular: true
        strict_mode: false

  - id: step-6
    name: Assign Version Marker
    type: version_assignment
    handler: intake.version_assignment
    required: true
    mandatory: true
    blocking: true
    dependencies:
      - step-2
      - step-3
    config:
      version_schema: RC.EPIC.STORY.TASK+BUILD
      intake_build: 0
      version_file: src/fynd_deals/version.py

  - id: step-7
    name: Validate & Report Results
    type: intake_validation
    handler: intake.validation
    required: true
    mandatory: true
    blocking: true
    dependencies:
      - step-1
      - step-2
      - step-3
      - step-4
      - step-5
      - step-6
    config:
      validation:
        check_document_updates: true
        check_task_creation: true
        check_dependency_wiring: true
        generate_report: true
      report_format: markdown
```

---

## Agent Execution Pattern

The Intake Workflow follows the same agent execution pattern as RW:

### ANALYZE → DETERMINE → EXECUTE → VALIDATE → PROCEED

**For each step:**

1. **ANALYZE:**
   - Understand step requirements
   - Review step dependencies
   - Check configuration
   - Identify inputs

2. **DETERMINE:**
   - Decide what actions to take
   - Determine deterministic vs agentic operations
   - Plan error handling

3. **EXECUTE:**
   - Perform deterministic operations
   - Invoke agentic intelligence where needed
   - Handle errors gracefully

4. **VALIDATE:**
   - Verify execution succeeded
   - Check outputs
   - Validate against requirements

5. **PROCEED:**
   - Document results
   - Move to next step
   - Handle blocking conditions

---

## Integration Points

### With Release Workflow (RW)

- **Version Assignment:** Intake workflow assigns version markers compatible with RW versioning
- **Kanban Updates:** Intake workflow uses RW Step 7 Kanban update script for checklist updates
- **Trigger Integration:** Intake workflow can be triggered by RW via trigger-aware execution

### With Kanban System

- **Task Creation:** Uses E4:S10 (Agentic Task Creation) for task content generation
- **Epic/Story Updates:** Updates Epic and Story task checklists
- **Template Integration:** Uses Kanban templates for task document structure

### With Trigger-Aware Execution

- **FR/BR Commit Triggers:** Intake workflow can be triggered automatically when FR/BR documents are committed
- **Trigger Registry:** Uses trigger registry for pattern matching
- **Workflow Executor:** Uses workflow executor for sub-workflow execution

### With Semantic Matching (E4:S08)

- **Epic Matching:** Uses E4:S08 for intelligent epic assignment
- **Story Matching:** Uses semantic matching to find existing stories
- **Task Matching:** Uses semantic matching to find existing tasks

---

## Error Handling Strategy

Following RW Step 7 hardening patterns:

1. **Mandatory Blocking Steps:** Steps 1-4, 6-7 are mandatory and blocking
2. **Recovery Guidance:** Comprehensive recovery playbooks for each error type
3. **Error Detection:** Deterministic error type detection
4. **Override Mechanism:** Optional override for non-critical errors (Step 5)

**Error Types:**
- `DOCUMENT_NOT_FOUND`
- `DOCUMENT_PARSE_ERROR`
- `INVALID_DOCUMENT_FORMAT`
- `EPIC_NOT_FOUND`
- `AMBIGUOUS_PLACEMENT`
- `TASK_CREATION_FAILED`
- `DEPENDENCY_NOT_FOUND`
- `VERSION_CONFLICT`
- `VALIDATION_FAILED`

---

## Framework-Agnostic Design

The Intake Workflow uses a config-driven approach:

- **Config File:** `intake-config.yaml` (similar to `rw-config.yaml`)
- **Path Resolution:** Config-driven with canonical fallbacks
- **Template Paths:** Configurable template locations
- **Handler Paths:** Configurable script locations

**Example Config:**
```yaml
fr_br_dir: docs/project-management/kanban/fr-br
kanban_dir: docs/project-management/kanban/epics
version_file: src/fynd_deals/version.py
templates:
  task: packages/frameworks/kanban/templates/tasks/Task-TEMPLATE.md
scripts:
  decision_flow: packages/frameworks/workflow mgt/scripts/intake_decision_flow.py
  task_creation: packages/frameworks/workflow mgt/scripts/intake_task_creation.py
```

---

## Implementation Notes

### E4:S10 Integration Strategy

**Avoid Duplication:** Step 2-3 leverage E4:S10 rather than reimplementing:
- **Step 2 (Decision Flow):** Uses E4:S10's `EpicStoryMapper` for semantic matching
- **Step 3 (Task Creation):** Delegates to E4:S10's `AgenticTaskWorkflow` for task creation
- **Intake-Specific Additions:** Intake workflow adds:
  - Intake status management (ACCEPTED/PENDING/REJECTED/DEFERRED)
  - Version marker assignment (doc-init +0 for new tasks)
  - FR/BR document updates with intake decision
  - Dependency wiring and cross-referencing

### Version Marker Assignment Flow

1. **Step 2:** Determines Epic/Story/Task placement
2. **Step 3:** Creates/updates task (via E4:S10)
3. **Step 6:** Assigns version marker:
   - New Story/Task → `vRC.E.S.T+0` (doc-init)
   - Existing Task → Next build number
4. **Step 4:** Records version marker in FR/BR document (runs after Step 6 via dependency)

**Note:** Step 4 depends on Step 6, so version marker is assigned before being recorded.

### Status Management

**Status Values:**
- `ACCEPTED`: FR/BR accepted and assigned to Kanban
- `PENDING`: Intake pending review/approval
- `REJECTED`: FR/BR rejected (not assigned)
- `DEFERRED`: FR/BR deferred to later (not assigned yet)

**Status Transitions:**
- Initial intake: `ACCEPTED` (default) or `PENDING` (if requires approval)
- After intake: Status can be updated manually (not automated)
- Re-intake: Check for existing status, prevent duplicate intake

## Next Steps

1. **T02:** Implement Decision Flow Analysis component
2. **T03:** Implement Kanban Task Creation Integration (leverage E4:S10)
3. **T04:** Implement Intake Documentation Updates
4. **T05:** Implement Dependency and Reference Wiring
5. **T06:** Integrate with Release Workflow
6. **T07:** Add Trigger-Aware Execution Support
7. **T08:** Create Agent Execution Guide
8. **T09:** Documentation and Testing

---

## Related Work

- **FR-019:** Intake Workflow Automation (this story)
- **E2:S07:** Trigger-Aware Release Workflow (trigger integration)
- **E4:S08:** Intelligent Epic Matching (semantic matching)
- **E4:S10:** Agentic Task Creation (task content generation)
- **E2:S08:** Harden Release Workflow Reliability (error handling patterns)
- **FR-020:** Doc-Init Build (+0) Support (version marker format)

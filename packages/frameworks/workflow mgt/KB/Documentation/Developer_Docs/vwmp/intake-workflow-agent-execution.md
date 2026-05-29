---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-15T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Intake Workflow: Agent Execution Guide

**Version:** 1.0.0
**Last Updated:** 2025-12-15
**Related:** Release Workflow (canonical example) | Trigger-Aware Release Workflow | Agent-Driven Workflow Execution

---

## 📖 Overview

This document provides a **step-by-step agent execution guide** for the Intake Workflow. The Intake Workflow automates the process of "intaking" FR/BR/UXR reports into the Kanban system, including decision flow analysis, task creation, documentation updates, dependency wiring, and version assignment.

**This guide shows exactly how an AI agent should analyze, determine, execute, validate, and proceed through each of the 7 Intake Workflow steps.**

> **Note on Examples:** This document includes project-agnostic examples. When adopting this workflow in your own project, replace all examples with your project-specific paths, commands, and structures.

---

## 🎯 Execution Context

### Workflow Definition

**Workflow:** Intake Workflow
**Type:** `intake`
**Steps:** 8 steps organized into 4 phases:
- **Phase 1: Repository Assignment (Steps 1-2)**
- **Phase 2: Analysis & Decision (Step 3)**
- **Phase 3: Task Creation & Documentation (Steps 4-5)**
- **Phase 4: Integration & Validation (Steps 6-8)**
**Canonical Example:** Yes - this workflow demonstrates agent-driven intake automation

### Agent Execution Pattern

For each step, the agent follows this pattern:
1. **ANALYZE** - Understand step requirements and context
2. **DETERMINE** - Decide what actions to take
3. **EXECUTE** - Perform the actions
4. **VALIDATE** - Verify execution succeeded
5. **PROCEED** - Document and move to next step

### 🚨 MANDATORY: Progress Tracking with Cursor TODOs

**REQUIRED:** Agents **MUST** use `todo_write` to create and maintain a TODO list tracking all 7 Intake Workflow steps. This is **NOT OPTIONAL** - it is a mandatory requirement for Intake Workflow execution.

**Why TODOs are Required:**
- ✅ **User Visibility:** User can see real-time progress through all 7 steps
- ✅ **Agent Organization:** Helps agent stay organized across sequential steps
- ✅ **Error Recovery:** Clear visibility into where execution stopped if interrupted
- ✅ **User Transparency:** User can verify all steps completed successfully

**Required Implementation Pattern:**

1. **At Workflow Start (MANDATORY):** Create TODO list with all 7 steps as `pending`
   ```python
   todo_write(merge=False, todos=[
       {'id': 'intake-step-1', 'status': 'pending', 'content': 'Step 1: Load & Parse FR/BR/UXR Document'},
       {'id': 'intake-step-2', 'status': 'pending', 'content': 'Step 2: Assign to Repository Story (S00:Txx)'},
       {'id': 'intake-step-3', 'status': 'pending', 'content': 'Step 3: Decision Flow Analysis'},
       {'id': 'intake-step-4', 'status': 'pending', 'content': 'Step 4: Create/Update Kanban Tasks'},
       {'id': 'intake-step-5', 'status': 'pending', 'content': 'Step 5: Update FR/BR/UXR Documentation'},
       {'id': 'intake-step-6', 'status': 'pending', 'content': 'Step 6: Wire Dependencies'},
       {'id': 'intake-step-7', 'status': 'pending', 'content': 'Step 7: Assign Version Marker'},
       {'id': 'intake-step-8', 'status': 'pending', 'content': 'Step 8: Validate & Report Results'},
   ])
   ```

2. **Before Each Step (MANDATORY):** Mark step as `in_progress`
   ```python
   todo_write(merge=True, todos=[{'id': 'intake-step-1', 'status': 'in_progress'}])
   ```

3. **After Each Step (MANDATORY):** Mark step as `completed` and mark next step as `in_progress`
   ```python
   todo_write(merge=True, todos=[
       {'id': 'intake-step-1', 'status': 'completed'},
       {'id': 'intake-step-2', 'status': 'in_progress'}
   ])
   ```

4. **On Completion (MANDATORY):** All steps marked as `completed`
   ```python
   todo_write(merge=True, todos=[{'id': 'intake-step-7', 'status': 'completed'}])
   ```

**Enforcement:**
- ❌ **DO NOT** execute Intake Workflow without creating TODO list first
- ❌ **DO NOT** skip TODO updates between steps
- ✅ **MUST** create TODO list before Step 1 execution
- ✅ **MUST** update TODO status before and after each step
- ✅ **MUST** mark all steps as completed on successful completion

---

## 🔄 Workflow Execution Flow

### Phase 1: Repository Assignment

**Steps:** 1-2
**Purpose:** Load FR/BR/UXR document and assign to repository story (S00:Txx)

### Phase 2: Analysis & Decision

**Steps:** 3
**Purpose:** Determine Epic/Story/Task placement for implementation work

### Phase 3: Task Creation & Documentation

**Steps:** 4-5
**Purpose:** Create Kanban tasks (with traceability bridge) and update FR/BR/UXR documentation

### Phase 4: Integration & Validation

**Steps:** 6-8
**Purpose:** Wire dependencies, assign version markers, and validate results

---

## 📋 Step-by-Step Execution Guide

### Step 1: Load & Parse FR/BR/UXR Document

**Step Definition:**
```yaml
- id: step-1
  name: Load & Parse FR/BR/UXR Document
  type: document_load
  handler: intake.document_load
  required: true
  mandatory: true
  blocking: true
```

**Agent Execution:**

**A. ANALYZE:**
1. **Identify FR/BR/UXR file:**
   - If manual invocation: Use provided file path (e.g., `--fr FR-019.md`)
   - If trigger-aware: Extract FR/BR/UXR files from changed files list
   - Validate file exists and matches pattern (`FR-*.md`, `BR-*.md`, `UXR-*.md`)

2. **Read document:**
   - Read FR/BR/UXR markdown file
   - Parse frontmatter (if present)
   - Extract document structure (Summary, Description, Requirements, etc.)

**B. DETERMINE:**
- Document type (FR, BR, or UXR)
- Document structure and required fields
- Whether document is valid for intake

**C. EXECUTE:**
```python
from pathlib import Path

# Load FR/BR/UXR document
fr_br_path = Path("docs/project-management/kanban/fr-br/FR-019.md")
content = fr_br_path.read_text(encoding='utf-8')

# Parse document structure
# Extract Summary, Description, Requirements, etc.
```

**D. VALIDATE:**
- ✅ Document file exists
- ✅ Document is valid markdown
- ✅ Required fields present (Summary, Description, etc.)

**E. PROCEED:**
- Document loaded and parsed successfully
- Pass document content to Step 2

---

### Step 2: Assign to Repository Story (S00:Txx)

**Step Definition:**
```yaml
- id: step-2
  name: Assign to Repository Story (S00:Txx)
  type: repository_assignment
  handler: intake.repository_assignment
  required: true
  mandatory: true
  blocking: true
  dependencies:
    - step-1
```

**Agent Execution:**

**A. ANALYZE:**
1. **Identify repository story:**
   - FR → E5:S00 (FR Repo)
   - BR → E6:S00 (BR Repo)
   - UXR → E7:S00 (UXR Repo)

2. **Determine next task number:**
   - Read repository story document (E5:S00, E6:S00, or E7:S00)
   - Find highest existing task number (T01, T02, T03, etc.)
   - Next task number = highest + 1

3. **Check traceability pattern:**
   - FR-001 = E5:S00:T01
   - BR-001 = E6:S00:T01
   - UXR-001 = E7:S00:T01
   - Verify FR/BR/UXR number matches task number

**B. DETERMINE:**
- Repository story to use (E5:S00, E6:S00, or E7:S00)
- Next available task number in repository story
- Abstract space version (v0.5.0.1+0, v0.6.0.1+0, or v0.7.0.1+0)

**C. EXECUTE:**
1. **Create repository task:**
   - Create task document in repository story directory
   - Task ID: E5:S00:T{next_number}, E6:S00:T{next_number}, or E7:S00:T{next_number}
   - Link to FR/BR/UXR document
   - Status: TODO (repository anchor)

2. **Update repository story:**
   - Add task to repository story Task Checklist
   - Document traceability: FR-001 = E5:S00:T01

3. **Store repository task ID:**
   - Save repository task ID for traceability bridge creation
   - Pass to subsequent steps via workflow context

**D. VALIDATE:**
- Repository task document created
- Repository story updated with new task
- Traceability pattern verified (FR-001 = E5:S00:T01)
- Repository task ID stored in workflow context

**E. PROCEED:**
- Repository anchor established
- Move to Step 3: Decision Flow Analysis

---

### Step 3: Decision Flow Analysis

**Step Definition:**
```yaml
- id: step-3
  name: Decision Flow Analysis
  type: decision_flow
  handler: intake.decision_flow
  required: true
  mandatory: true
  blocking: true
  dependencies:
    - step-1
    - step-2
```

**Agent Execution:**

**A. ANALYZE:**
1. **Initialize decision flow:**
   - Load Kanban structure paths
   - Initialize E4:S10's `EpicStoryMapper` for semantic matching
   - Load existing epics and stories

2. **Analyze FR/BR/UXR content:**
   - Use E4:S10's `FRBRAnalyzer` to extract structured content
   - Identify requirements, acceptance criteria, dependencies

**B. DETERMINE:**
- Epic assignment (existing epic or new epic needed)
- Story assignment (existing story or new story needed)
- Task assignment (new task or existing task)
- Intake status (ACCEPTED/PENDING/REJECTED/DEFERRED)
- Manual review requirements

**C. EXECUTE:**
```python
from intake_decision_flow import IntakeDecisionFlow

# Initialize decision flow
decision_flow = IntakeDecisionFlow(kanban_path, framework_path, config)

# Analyze FR/BR/UXR
intake_decision = decision_flow.analyze(fr_br_path)

# Check results
if intake_decision.epic_number == 0:
    # No epic match - requires manual review
    print("⚠️  Manual review required: No epic match found")
```

**D. VALIDATE:**
- ✅ Decision flow analysis completed
- ✅ Epic/Story/Task assignment determined
- ✅ Intake status set
- ✅ Decision explanation and reasoning generated

**E. PROCEED:**
- Decision flow results available
- Pass intake decision to Step 4

---

### Step 4: Create/Update Kanban Tasks

**Step Definition:**
```yaml
- id: step-4
  name: Create/Update Kanban Tasks
  type: kanban_task_creation
  handler: intake.kanban_task_creation
  required: true
  mandatory: true
  blocking: true
  dependencies:
    - step-2
    - step-3
  config:
    create_traceability_bridge: true
    repository_task_id: ${step-2.repository_task_id}
```

**Agent Execution:**

**A. ANALYZE:**
1. **Check intake decision:**
   - Verify epic/story/task assignment from Step 3
   - Check if manual review required

2. **Check repository assignment:**
   - Retrieve repository task ID from Step 2
   - Verify repository anchor established

3. **Prepare task creation:**
   - Initialize E4:S10's `AgenticTaskWorkflow`
   - Load task templates if needed

**B. DETERMINE:**
- Whether to create new tasks or update existing tasks
- Task structure and dependencies
- Task templates to use
- Traceability bridge creation (S00:Txx → implementation tasks)

**C. EXECUTE:**
```python
from intake_task_creation import IntakeTaskCreation

# Initialize task creation
task_creation = IntakeTaskCreation(kanban_path, framework_path, config)

# Create tasks (with traceability bridge)
result = task_creation.create_tasks(
    fr_br_path, 
    intake_decision,
    repository_task_id=repository_task_id  # From Step 2
)

# Create traceability bridge
# Link repository task (E5:S00:T01) to implementation tasks (E12:S03:T05)
traceability_bridge = create_traceability_bridge(
    repository_task_id=repository_task_id,
    implementation_tasks=result.created_tasks
)

# Check results
if not result.success:
    print(f"❌ Task creation failed: {result.errors}")
```

**D. VALIDATE:**
- ✅ Tasks created successfully
- ✅ Tasks linked to FR/BR/UXR document
- ✅ Task files created in correct location
- ✅ Traceability bridge created (S00:Txx → implementation tasks)

**E. PROCEED:**
- Tasks created and linked
- Traceability bridge established
- Pass created tasks to Step 5

---

### Step 5: Update FR/BR/UXR Documentation

**Step Definition:**
```yaml
- id: step-5
  name: Update FR/BR/UXR Documentation
  type: intake_documentation_update
  handler: intake.documentation_update
  required: true
  mandatory: true
  blocking: true
  dependencies:
    - step-2
    - step-3
    - step-4
  config:
    repository_task_id: ${step-2.repository_task_id}
```

**Agent Execution:**

**A. ANALYZE:**
1. **Gather information:**
   - Intake decision from Step 3
   - Created tasks from Step 4
   - Repository task ID from Step 2
   - Version marker from Step 7 (if available)

2. **Check document structure:**
   - Identify Status field location
   - Check for existing Intake Decision section
   - Check for Repository Assignment section

**B. DETERMINE:**
- Status field update (ACCEPTED/PENDING/REJECTED/DEFERRED)
- Intake Decision section content
- Repository Assignment section content (S00:Txx)
- Kanban links to add (repository task + implementation tasks)

**C. EXECUTE:**
```python
from intake_documentation_update import IntakeDocumentationUpdate

# Initialize documentation update
doc_update = IntakeDocumentationUpdate(config)

# Update document
result = doc_update.update_document(
    fr_br_path,
    intake_decision,
    created_tasks,
    repository_task_id=repository_task_id,  # From Step 2
    version_marker=version_marker  # From Step 7
)

# Add repository assignment section
# Example: "Repository: E5:S00:T01 (FR-001 = E5:S00:T01)"
```

**D. VALIDATE:**
- ✅ Status field updated
- ✅ Intake Decision section updated/created
- ✅ Kanban links added
- ✅ Document format valid

**E. PROCEED:**
- Documentation updated successfully
- Pass to Step 5

---

### Step 5: Wire Dependencies

**Step Definition:**
```yaml
- id: step-6
  name: Wire Dependencies
  type: dependency_wiring
  handler: intake.dependency_wiring
  required: true
  mandatory: false
  blocking: false
  dependencies:
    - step-2
    - step-3
    - step-4
  config:
    repository_task_id: ${step-2.repository_task_id}
```

**Agent Execution:**

**A. ANALYZE:**
1. **Extract dependencies:**
   - Read FR/BR/UXR document content
   - Find Dependencies section
   - Extract Blocked By, Blocks, Related Work references

2. **Identify dependency patterns:**
   - FR-XXX, BR-XXX, UXR-XXX
   - E2:S11, E2:S11:T05 (Epic/Story/Task references)

**B. DETERMINE:**
- Dependency references to extract
- Dependency categorization (Blocked By, Blocks, Related Work)
- Cross-references to create

**C. EXECUTE:**
```python
from intake_dependency_wiring import IntakeDependencyWiring

# Initialize dependency wiring
wiring = IntakeDependencyWiring(config, kanban_path)

# Wire dependencies
result = wiring.wire_dependencies(fr_br_path, created_tasks)

# Check results
if result.warnings:
    print(f"⚠️  Dependency warnings: {result.warnings}")
```

**D. VALIDATE:**
- ✅ Dependencies extracted
- ✅ Dependencies wired correctly
- ✅ Cross-references created
- ✅ Circular dependencies detected (if any)

**E. PROCEED:**
- Dependencies wired successfully
- Pass to Step 6

---

### Step 6: Assign Version Marker

**Step Definition:**
```yaml
- id: step-7
  name: Assign Version Marker
  type: version_assignment
  handler: intake.version_assignment
  required: true
  mandatory: true
  blocking: true
  dependencies:
    - step-2
    - step-3
    - step-4
  config:
    repository_task_id: ${step-2.repository_task_id}
```

**Agent Execution:**

**A. ANALYZE:**
1. **Extract version components:**
   - Epic number from intake decision
   - Story number from intake decision
   - Task number from intake decision or created tasks
   - RC from version.py file

2. **Determine build number:**
   - Check if new Story/Task (use doc-init build +0)
   - Check if existing Task (determine next build number)

**B. DETERMINE:**
- Version marker format: `vRC.EPIC.STORY.TASK+BUILD`
- Build number (0 for new Story/Task, next build for existing Task)

**C. EXECUTE:**
```python
from intake_version_assignment import IntakeVersionAssignment

# Initialize version assignment
version_assignment = IntakeVersionAssignment(config, version_file_path)

# Assign version
result = version_assignment.assign_version(
    intake_decision,
    created_tasks,
    is_new_story=intake_decision.new_story_recommended,
    is_new_task=intake_decision.new_task_recommended
)

# Get version marker
version_marker = result.version_marker  # e.g., "v0.2.11.6+0"
```

**D. VALIDATE:**
- ✅ Version marker assigned
- ✅ Version format valid (RC.EPIC.STORY.TASK+BUILD)
- ✅ Build number correct (0 for new, next build for existing)

**E. PROCEED:**
- Version marker assigned (for both repository task and implementation tasks)
- Pass version marker to Step 5 (for documentation update)

---

### Step 8: Validate & Report Results

**Step Definition:**
```yaml
- id: step-8
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
    - step-7
  config:
    repository_task_id: ${step-2.repository_task_id}
```

**Agent Execution:**

**A. ANALYZE:**
1. **Gather validation data:**
   - Check repository assignment (Step 2)
   - Check document updates (Step 5)
   - Check task creation (Step 4)
   - Check dependency wiring (Step 6)
   - Check version assignment (Step 7)
   - Check traceability bridge (Step 4)

2. **Validate each component:**
   - File existence checks
   - Content validation
   - Link validation

**B. DETERMINE:**
- Validation checks to perform
- Report format and content

**C. EXECUTE:**
```python
# Validate all steps completed successfully
validation_checks = [
    ("Repository Assignment", check_repository_assignment(repository_task_id)),
    ("Document Updates", check_document_updates(fr_br_path)),
    ("Task Creation", check_task_creation(created_tasks)),
    ("Traceability Bridge", check_traceability_bridge(repository_task_id, created_tasks)),
    ("Dependency Wiring", check_dependency_wiring(fr_br_path)),
    ("Version Assignment", check_version_assignment(version_marker)),
]

# Generate report
report = generate_intake_report(
    fr_br_path,
    intake_decision,
    created_tasks,
    version_marker
)
```

**D. VALIDATE:**
- ✅ All validation checks passed
- ✅ Report generated successfully
- ✅ All steps completed

**E. PROCEED:**
- Intake workflow completed successfully
- Report available for review

---

## 🔧 Usage Examples

### Manual Invocation

**Single FR/BR/UXR:**
```bash
# Process a single FR
python intake_workflow.py --fr docs/project-management/kanban/fr-br/FR-019.md

# Process a single BR
python intake_workflow.py --br docs/project-management/kanban/fr-br/BR-001.md

# Process a single UXR
python intake_workflow.py --uxr docs/project-management/kanban/fr-br/UXR-001.md
```

**Batch Processing:**
```bash
# Process multiple FRs
python intake_workflow.py --fr FR-019.md FR-020.md FR-021.md
```

### Trigger-Aware Execution

**Automatic Execution:**
- When RW detects FR/BR/UXR commit, intake workflow automatically executes
- No manual invocation needed
- Intake workflow runs as sub-workflow of RW

**Example Trigger:**
```bash
# Commit message: "Add FR-019: Intake Workflow Automation"
# Changed files: ["docs/project-management/kanban/fr-br/FR-019.md"]
# → RW detects trigger → Intake workflow executes automatically
```

---

## 🔗 Integration Points

### Release Workflow Integration

- **Version Assignment:** Intake workflow uses RW versioning logic
- **Version Markers:** Assigned via RW version assignment (Step 6)
- **Trigger Integration:** Intake workflow registered as trigger handler

### Kanban Integration

- **Task Creation:** Uses E4:S10's AgenticTaskWorkflow
- **Epic/Story Mapping:** Uses E4:S10's EpicStoryMapper
- **Documentation:** Updates Kanban documents with intake results

### Trigger-Aware RW Integration

- **Trigger Detection:** FR/BR/UXR commits trigger intake workflow
- **Workflow Registration:** Intake workflow registered with workflow executor
- **Automatic Execution:** Intake workflow executes automatically on trigger

---

## 🐛 Troubleshooting

### Issue: No Epic Match Found

**Symptoms:**
- Decision flow returns `epic_number = 0`
- Intake status set to `PENDING`
- Manual review required

**Solution:**
1. Review existing epics more broadly
2. Consider if FR/BR scope is too narrow or too broad
3. Check if epic status allows new work (not COMPLETE/DEFERRED)
4. Create new epic if truly no match

### Issue: Task Creation Failed

**Symptoms:**
- Task creation returns errors
- No tasks created

**Solution:**
1. Check intake decision is valid (epic/story/task assigned)
2. Verify Kanban structure exists
3. Check E4:S10 components are available
4. Review error messages for specific issues

### Issue: Version Marker Assignment Failed

**Symptoms:**
- Version assignment returns errors
- No version marker assigned

**Solution:**
1. Verify epic/story/task numbers are valid
2. Check version.py file exists and is readable
3. Verify version schema matches expected format
4. Check if new Story/Task detection is correct

### Issue: Dependency Validation Warnings

**Symptoms:**
- Dependency wiring reports warnings
- Missing dependencies detected

**Solution:**
1. Check if referenced FRs/BRs/tasks exist
2. Verify dependency patterns match expected format
3. Review warnings for specific missing dependencies
4. In strict mode, fix missing dependencies before proceeding

---

## 📚 Related Documentation

- **Architecture Design:** `docs/Analysis/T01-intake-workflow-architecture-design.md`
- **Workflow YAML:** `workflows/intake-workflow.yaml`
- **Release Workflow Guide:** `release-workflow-agent-execution.md`
- **Trigger-Aware RW:** `trigger-aware-rw-documentation.md`
- **E4:S10 Documentation:** Kanban framework agentic task creation

---

## ✅ Checklist

Use this checklist to verify all steps completed:

- [ ] Step 1: FR/BR/UXR document loaded and parsed
- [ ] Step 2: Decision flow analysis completed
- [ ] Step 3: Kanban tasks created
- [ ] Step 4: FR/BR/UXR documentation updated
- [ ] Step 5: Dependencies wired
- [ ] Step 6: Version marker assigned
- [ ] Step 7: Validation and reporting completed

---

## 🎯 Success Criteria

**Intake Workflow is successful when:**
- ✅ FR/BR/UXR document processed successfully
- ✅ Epic/Story/Task assigned correctly
- ✅ Kanban tasks created and linked
- ✅ Documentation updated with intake decision
- ✅ Dependencies wired correctly
- ✅ Version marker assigned
- ✅ All validation checks passed

---

**End of Agent Execution Guide**

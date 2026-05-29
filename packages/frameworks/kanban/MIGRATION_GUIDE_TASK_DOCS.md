# Migration Guide: Adding Task Documents to Existing Projects

**Purpose:** Guide for existing projects to add Task documents to their Kanban structure  
**Target Audience:** Project maintainers migrating to 3-tier structure with discrete Task documents  
**Related:** FR-016: Kanban Granularity & Discrete Task Docs

---

## Overview

This guide helps existing projects migrate to the **3-tier structure** (Epic → Story → Task) with **discrete Task documents**. If your project currently has tasks embedded in Story documents or lacks explicit Task documentation, this guide will help you add Task documents systematically.

---

## Prerequisites

- Your project uses Kanban framework (Epic/Story structure)
- You have Story documents with tasks
- You want to adopt the 3-tier structure with discrete Task documents

---

## Migration Process

### Step 1: Identify Existing Tasks

**Action:** Review all Story documents to identify tasks that need Task documents.

**What to Look For:**
- Tasks in Story Task Checklists without Task documents
- Tasks described inline in Story documents
- Tasks that are implicit or bundled

**Example:**
```markdown
## Task Checklist

- [ ] **E4:S11:T01 – Update Kanban Governance Policy** - TODO
- [ ] **E4:S11:T02 – Create Task Document Template** - TODO
```

**Output:** List of all tasks that need Task documents created.

---

### Step 2: Choose Task Document Format

**Decision:** Choose between two formats for each task:

**Format 1: Separate Task File (Recommended)**
- **When to Use:**
  - Tasks with significant complexity
  - Tasks with multiple phases
  - Tasks that may have associated files
  - Projects requiring maximum traceability

- **Location:** `{kanban_root}/epics/Epic-{epic}/Story-{story}/Task-{task}-*.md`
- **Example:** `docs/project-management/kanban/epics/Epic-4/Story-11/Task-001-update-kanban-policy.md`

**Format 2: Delimited Section Within Story (Alternative)**
- **When to Use:**
  - Simple, straightforward tasks
  - Tasks with minimal documentation needs
  - Projects with tight documentation requirements

- **Location:** Within Story file, using Task ID header
- **Format:** `### E{epic}:S{story}:T{task} – Task Name`

**Recommendation:** Start with Format 2 (delimited sections) for quick migration, then convert complex tasks to Format 1 (separate files) as needed.

---

### Step 3: Create Task Documents

**For Each Task:**

1. **Extract Task Information:**
   - Task ID: `E{epic}:S{story}:T{task}`
   - Task title/name
   - Task description (from Story document)
   - Acceptance criteria (if documented)
   - Dependencies (if documented)

2. **Create Task Document:**
   - **If Format 1:** Create new file using `TASK_TEMPLATE.md`
   - **If Format 2:** Add delimited section to Story file with Task ID header

3. **Fill Required Fields:**
   - ✅ Task ID: `E{epic}:S{story}:T{task}`
   - ✅ Scope: Clear description of what task accomplishes
   - ✅ Acceptance Criteria: Measurable criteria (extract from Story or define)
   - ✅ Status: Current status (TODO, IN PROGRESS, COMPLETE)
   - ✅ Input: What is required to start this task
   - ✅ Deliverable: What is produced by this task
   - ✅ Dependencies: Other tasks or work items this task depends on

4. **Add Optional Fields:**
   - Related BR/FR Links (if applicable)
   - Version Anchor (will be added when task completes)

**Template:** Use `packages/frameworks/kanban/templates/TASK_TEMPLATE.md`

---

### Step 4: Update Story Documents

**Action:** Update Story documents to reference Task documents.

**For Format 1 (Separate Files):**
```markdown
## Task Checklist

- [ ] **E4:S11:T01 – Update Kanban Governance Policy** - TODO
  - Task Doc: [`Task-001-update-kanban-policy.md`](Task-001-update-kanban-policy.md)
```

**For Format 2 (Delimited Sections):**
- Task document already in Story file
- Ensure Task Checklist references are clear
- Task section should be clearly delimited with Task ID header

**Remove:**
- Inline task descriptions (move to Task document)
- Duplicate task information (delegate to Task document)

---

### Step 5: Verify Task Documents

**Checklist:**
- [ ] All tasks have Task documents (separate file OR delimited section)
- [ ] Task IDs match format: `E{epic}:S{story}:T{task}`
- [ ] All required fields are present
- [ ] Task documents are linked/referenced in Story Task Checklist
- [ ] No implicit or inline tasks remain

**Validation:**
- Run validators (if available): `validate_version_bump.py` and `validate_branch_context.py`
- Check that Task documents can be located by Release Workflow

---

### Step 6: Update Release Workflow Configuration

**Action:** Ensure Release Workflow can locate Task documents.

**Configuration:**
- Verify `rw-config.yaml` has correct `kanban_root` path
- Verify `story_doc_pattern` matches your Story file naming
- Test Release Workflow Step 2 (B.1) can locate Task documents

**Testing:**
- Run Release Workflow on a test task
- Verify Task document is located and validated
- Verify error handling works if Task document is missing

---

## Examples

### Example 1: Migrating Simple Task (Format 2)

**Before (Inline in Story):**
```markdown
## Tasks

- [ ] **E4:S11:T01** - Update Kanban Governance Policy
  - Review current policy
  - Add 3-tier structure requirement
  - Update all policy documents
```

**After (Delimited Section):**
```markdown
## Task Checklist

- [ ] **E4:S11:T01 – Update Kanban Governance Policy** - TODO
  - Task Doc: See section below

---

### E4:S11:T01 – Update Kanban Governance Policy

**Input:** Current Kanban governance policy documents  
**Deliverable:** Updated Kanban governance policy mandating 3-tier structure  
**Dependencies:** None  
**Blocker:** None

**Scope:** Update Kanban governance policy to explicitly require 3-tier structure (Epic → Story → Task) and discrete Task documents.

**Acceptance Criteria:**
- [ ] Policy explicitly mandates 3-tier structure
- [ ] Policy requires discrete Task docs
- [ ] Required Task doc fields are documented
- [ ] All three policy documents updated consistently

**Approach:**
1. Review current Kanban governance policy documents
2. Add explicit requirement for 3-tier structure
3. Mandate discrete Task documents
4. Define required Task doc fields
5. Update all policy documents consistently

**Status:** TODO
```

### Example 2: Migrating Complex Task (Format 1)

**Before:** Task described in Story document with multiple phases

**After:** Separate Task file created:
- `docs/project-management/kanban/epics/Epic-4/Story-11/Task-002-create-task-template.md`
- Story Task Checklist references the file:
  ```markdown
  - [ ] **E4:S11:T02 – Create Task Document Template** - TODO
    - Task Doc: [`Task-002-create-task-template.md`](Task-002-create-task-template.md)
  ```

---

## Common Scenarios

### Scenario 1: Story Has Inline Tasks

**Problem:** Story document has tasks described inline without Task documents.

**Solution:**
1. Extract each task description
2. Create Task document (Format 1 or Format 2)
3. Move task details to Task document
4. Update Story to reference Task document
5. Remove inline task descriptions from Story

### Scenario 2: Tasks Are Bundled

**Problem:** Multiple tasks are described together without clear separation.

**Solution:**
1. Identify distinct tasks
2. Assign Task IDs (`E{epic}:S{story}:T{task}`)
3. Create separate Task document for each
4. Update Story Task Checklist to list all tasks
5. Link each task to its Task document

### Scenario 3: Tasks Are Implicit

**Problem:** Tasks are implied but not explicitly documented.

**Solution:**
1. Identify implicit tasks from Story description
2. Create explicit Task documents
3. Assign Task IDs
4. Document scope, acceptance criteria, and approach
5. Update Story Task Checklist

---

## Validation

### Pre-Migration Checklist

- [ ] All Story documents reviewed
- [ ] All tasks identified
- [ ] Task document format chosen for each task
- [ ] Migration plan created

### Post-Migration Checklist

- [ ] All tasks have Task documents
- [ ] Task IDs are correct (`E{epic}:S{story}:T{task}`)
- [ ] Required fields are present in all Task documents
- [ ] Story documents reference Task documents
- [ ] No inline/implicit tasks remain
- [ ] Release Workflow can locate Task documents
- [ ] Validators pass

---

## Troubleshooting

### Issue: Task Document Not Found by Release Workflow

**Problem:** Release Workflow cannot locate Task document.

**Solutions:**
1. **Check File Location:**
   - Verify Task file is in correct directory: `{kanban_root}/epics/Epic-{epic}/Story-{story}/`
   - Verify file naming matches pattern: `Task-{task}-*.md` or `T{task}-*.md`

2. **Check Delimited Section Format:**
   - Verify section header matches: `### E{epic}:S{story}:T{task} –`
   - Ensure Task ID format is correct (zero-padded: `E4:S11:T01`)

3. **Check Configuration:**
   - Verify `rw-config.yaml` has correct `kanban_root` path
   - Verify `story_doc_pattern` matches your Story file naming

### Issue: Task Document Missing Required Fields

**Problem:** Validator reports missing required fields.

**Solutions:**
1. **Add Missing Fields:**
   - Task ID (must match `E{epic}:S{story}:T{task}`)
   - Scope (clear description)
   - Acceptance Criteria (measurable criteria)
   - Status (TODO, IN PROGRESS, COMPLETE)
   - Input (what is required)
   - Deliverable (what is produced)

2. **Use Template:**
   - Copy from `TASK_TEMPLATE.md`
   - Fill in all required fields
   - Verify format matches template

### Issue: Task ID Mismatch

**Problem:** Task ID in document doesn't match version components.

**Solutions:**
1. **Verify Task ID Format:**
   - Must be: `E{epic}:S{story}:T{task}`
   - Example: `E4:S11:T01` (not `E4:S11:T1` or `E4:S11:1`)

2. **Check Version Alignment:**
   - Epic number must match `VERSION_EPIC`
   - Story number must match `VERSION_STORY`
   - Task number must match `VERSION_TASK`

---

## Next Steps

After migration:
1. **Test Release Workflow:** Run RW on a migrated task to verify Task document location
2. **Update Documentation:** Update project-specific guides with Task doc creation process
3. **Train Team:** Ensure team understands Task document requirements
4. **Establish Process:** Create SOP for creating new Task documents going forward

---

## References

- **Task Template:** `packages/frameworks/kanban/templates/TASK_TEMPLATE.md`
- **Story Template:** `packages/frameworks/kanban/templates/STORY_TEMPLATE.md`
- **Kanban Governance Policy:** `packages/frameworks/kanban/policies/kanban-governance-policy.md` - Section 3.3: Tasks
- **RW Agent Execution Guide:** `packages/frameworks/workflow mgt/docs/documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md` - Task Document Requirements section

---

**Last Updated:** 2025-12-11  
**Version:** 1.0.0  
**Related:** FR-016, E4:S11, E2:S09

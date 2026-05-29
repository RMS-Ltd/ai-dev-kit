---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-18T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Discovered Use Case: Story + Task Docs Batch Creation

**Use Case ID:** UC-D-004  
**Type:** Discovered Use Case  
**Category:** Workflow Pattern  
**Status:** DOCUMENTED  
**Version:** 1.0.0  
**Anchored To:** [BR-010 – RW Doc-Init Detection Bug](../../../project-management/kanban/fr-br/BR-010-rw-doc-init-detection-bug-story-task-docs-batch-creation.md)  
**Related:** E4:S13:T04 – Assess system impacts

---

## Summary

**Use Case:** Creating Story document and all Task documents together in a single commit (story's abstract space, v0.E.S.0+0), then beginning implementation work on individual tasks.

**Discovery:** This valid workflow exposed a design flaw in RW doc-init detection logic, which incorrectly set BUILD=0 instead of BUILD=1 for first implementation work.

**Status:** Use case is **valid and supported**. Bug is **fixed** (see [BR-010](../../../project-management/kanban/fr-br/BR-010-rw-doc-init-detection-bug-story-task-docs-batch-creation.md)). Use case remains **relevant as knowledge** (abstract anti-pattern).

**Canonical Reference:** This use case is documented as part of [BR-010 – RW Doc-Init Detection Bug](../../../project-management/kanban/fr-br/BR-010-rw-doc-init-detection-bug-story-task-docs-batch-creation.md), which serves as the authoritative source for the bug details and fix.

---

## Use Case Description

### Scenario

A developer wants to set up a new Story with all its tasks efficiently:

1. **Create Story Document:**
   - Developer creates new Story document (e.g., `Story-013-kanban-board-moscow-prioritized-task-view.md`)
   - Story document includes task checklist and overview

2. **Create All Task Documents:**
   - Developer creates all Task documents for the Story in the same commit
   - Task documents created as separate files (e.g., `T01-*.md`, `T02-*.md`, etc.)
   - All documents logically grouped together

3. **Commit Together:**
   - All documents committed together in story's abstract space
   - Version: `v0.E.S.0+0` (story creation, doc-init)
   - Single commit for related documentation

4. **Begin Implementation:**
   - Developer starts implementation work on Task 1
   - Makes functional changes (code, not just docs)
   - Runs Release Workflow (RW) to version the work

### Why It's Valid

- **Efficiency:** Batch creation saves time (single commit for related docs)
- **Logical Grouping:** Story and its tasks belong together
- **Common Practice:** Many developers create related documents in batches
- **Workflow Clarity:** Clear separation between documentation setup and implementation

### Expected Behavior

When RW runs for first implementation work:
- RW should detect that Task document already exists (from story's abstract space commit)
- RW should recognize this is NOT doc-init (task doc exists, code changes present)
- RW should set BUILD=1 (first functional build), not BUILD=0

### Actual Behavior (Before Fix)

- RW incorrectly detected this as doc-init
- RW set BUILD=0 instead of BUILD=1
- Version was incorrect: `v0.E.S.T+0` instead of `v0.E.S.T+1`

---

## Design Flaw Exposed

### The Bug

**Location:** `packages/frameworks/workflow mgt/scripts/validation/validate_version_bump.py`  
**Function:** `detect_first_time_est_doc`

**Flawed Logic:**
- Function checked if task doc was created in THIS commit
- Function checked if prior version exists
- **Missing Check:** Function didn't verify if task doc already exists (even if not created in this commit)
- **Flawed Assumption:** "No prior version = doc-init"

**Result:**
- When task doc exists from previous commit (story's abstract space) but no task-level version exists
- Function incorrectly returned `is_first_time = True`
- RW set BUILD=0 instead of BUILD=1

### Root Cause

**Design Assumption:** Doc-init can only happen when doc is created in current commit

**Reality:** Task doc can exist from previous commit (story's abstract space), but no task-level version exists yet

**Missing Check:** Function didn't verify task doc existence independently of creation event

---

## The Fix

**Solution:** Added task document existence check before determining doc-init

**Implementation:**
- Added check: If task document already exists (using `locate_task_doc` function) → NOT doc-init
- If task doc exists but wasn't created in this commit → `is_first_time = False` → BUILD=1
- Only returns `is_first_time = True` if task doc is created in THIS commit AND docs-only AND no prior version

**Files Updated:**
- `packages/frameworks/workflow mgt/scripts/validation/validate_version_bump.py`
- `packages/frameworks/workflow mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md`

---

## Knowledge Value

### Why This Use Case Remains Relevant

**Even though the bug is fixed, this use case is valuable because:**

1. **Pattern Recognition:**
   - Demonstrates how valid workflows can expose design assumptions
   - Shows importance of checking for existing state, not just creation state
   - Illustrates edge case: documents created in parent context (story) vs. child context (task)

2. **Design Warning:**
   - Warns against assuming "no prior version = first time"
   - Highlights need to check for existing artifacts, not just creation events
   - Demonstrates importance of state verification vs. event detection

3. **Learning Value:**
   - Teaches about batch creation workflows
   - Shows how parent-child relationships can create versioning edge cases
   - Illustrates difference between "created in this commit" vs. "already exists"

4. **Prevention:**
   - Helps identify similar flaws in other systems
   - Provides pattern for testing edge cases
   - Guides design review to consider batch operations

---

## Abstract Anti-Pattern

This use case represents an **abstract anti-pattern**: **Use Case Exposed Design Flaw**

**Pattern Definition:**
- A valid use case (legitimate workflow) exists
- The use case exposes a design flaw (bug or weakness in system logic)
- The flaw is fixed, but the use case remains relevant as knowledge
- The use case serves as a warning pattern about flawed design assumptions

**See:** `docs/knowledge/analysis/abstract-anti-patterns-use-case-exposed-design-flaw.md`

---

## Related Documentation

- **Canonical Source:** [BR-010 – RW Doc-Init Detection Bug](../../../project-management/kanban/fr-br/BR-010-rw-doc-init-detection-bug-story-task-docs-batch-creation.md) - **PRIMARY ANCHOR** - Authoritative bug report
- **Abstract Anti-Pattern:** [Use Case Exposed Design Flaw](../../analysis/abstract-anti-patterns-use-case-exposed-design-flaw.md) - General pattern derived from this bug (anchored to BR-010)
- **Task Document:** [E4:S13:T04 – Assess system impacts](../../../project-management/kanban/epics/Epic-4/Story-013-kanban-board-moscow-prioritized-task-view/T04-assess-system-impacts.md) - Where the bug was fixed
- **RW Documentation:** `packages/frameworks/workflow mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md`
- **Bug Fix:** `packages/frameworks/workflow mgt/scripts/validation/validate_version_bump.py`

---

## Recommendations

### For Developers

1. **Use This Workflow:**
   - Batch creation of Story + Task docs is valid and supported
   - Workflow is efficient and logical
   - Bug is fixed, workflow works correctly now

2. **Learn from the Pattern:**
   - Understand how valid use cases can expose design flaws
   - Consider batch operations when designing state detection
   - Verify state independently of creation events

### For Designers

1. **Consider Batch Operations:**
   - Design systems to handle batch creation workflows
   - Don't assume single-operation workflows only
   - Test with parent-child relationship scenarios

2. **Verify State, Don't Assume:**
   - Always check for object existence
   - Verify state independently of operation context
   - Don't rely on single condition for state determination

---

**Last Updated:** 2025-12-18T00:00:00Z  
**Version:** 1.0.0  
**Status:** DOCUMENTED  
**Canonical Anchor:** [BR-010 – RW Doc-Init Detection Bug](../../../project-management/kanban/fr-br/BR-010-rw-doc-init-detection-bug-story-task-docs-batch-creation.md)  
**Related Work:** E4:S13:T04 – Assess system impacts


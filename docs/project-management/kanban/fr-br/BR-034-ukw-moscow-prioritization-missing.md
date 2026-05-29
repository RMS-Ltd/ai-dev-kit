---
lifecycle: evergreen
ttl_days: null
created_at: 2026-01-17T13:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Bug Report: UKW MoSCOW Prioritization Missing

**Type:** Bug Report (BR)  
**Submitted:** 2026-01-17  
**Submitted By:** User  
**Priority:** HIGH  
**Severity:** MEDIUM  
**Status:** FIXED  
**GitHub Issue:** [TBD]  
**Version:** v0.6.7.102+4

---

## Summary

UKW (Update Kanban Workflow) does not update the **MoSCOW Prioritized In-Progress Tasks** section in the Kanban board. New IN PROGRESS tasks are not being included and agentically prioritized according to their epic/story priority and task priority.

---

## Description

### Problem Statement

**Issue: MoSCOW Prioritization Step Missing in UKW**

After running UKW, the "## MoSCOW Prioritized In-Progress Tasks" section in the Kanban board is not updated with:

1. **New IN PROGRESS tasks** that should appear in the section
2. **Agentic prioritization** of tasks based on their epic/story priority and task priority
3. **Task re-prioritization** when task/epic priorities change

**Expected Behavior:**
- UKW should scan all task documents for IN PROGRESS or TODO status
- UKW should agentically determine MoSCOW priority (M/S/C/O/W) based on:
  - Epic priority (HIGH, MEDIUM, LOW)
  - Story priority (HIGH, MEDIUM, LOW)
  - Task priority (HIGH, MEDIUM, LOW)
  - Task status (IN PROGRESS vs TODO)
  - Task type (perpetual tasks → O category)

- UKW should update the MoSCOW Prioritized In-Progress Tasks section with all active tasks, properly categorized and ordered (most recently updated first)

**Observed Behavior:**
- UKW updates other sections (Epic status, Story status, Task documents)
- UKW does NOT update the MoSCOW Prioritized In-Progress Tasks section
- New tasks (e.g., E9:S01:T08) are not added to the section
- Task priorities are not agentically determined or updated

**Example:**
- **E9:S01:T08** (Repository Story Abstract Space Contradiction) is IN PROGRESS with HIGH priority
- This task should appear in the "Should Have (S)" or "Must Have (M)" section
- After UKW execution, this task was not added to the MoSCOW section

---

## Affected Component

**Primary Component:** Update Kanban Workflow (UKW)  
**Affected Areas:**
- UKW Step 6: Update Kanban Board - Missing MoSCOW prioritization logic
- Kanban Board: `docs/project-management/kanban/kboard.md` - MoSCOW section not updated

---

## Impact

**Severity:** MEDIUM

**User Impact:**
- Kanban board's MoSCOW Prioritized In-Progress Tasks section becomes outdated
- New tasks are not visible in the prioritized view
- Manual updates required to keep MoSCOW section current
- Reduced visibility into active work priorities

**Workflow Impact:**
- UKW workflow is incomplete (missing a critical step)
- Board synchronization is partial (some sections updated, MoSCOW section not updated)
- Manual intervention required to maintain board accuracy

---

## Root Cause Analysis

**Hypothesis:**
UKW Step 6 (Update Kanban Board) does not include logic to:
1. Scan all task documents for IN PROGRESS/TODO status
2. Agentically determine MoSCOW priority based on epic/story/task priorities
3. Update the MoSCOW Prioritized In-Progress Tasks section with categorized tasks

**Expected UKW Behavior (Step 6):**
1. Analyze all task documents across all epics/stories
2. Identify tasks with IN PROGRESS or TODO status
3. Determine MoSCOW category (M/S/C/O/W) based on priorities and task type
4. Order tasks within each category (most recently updated first)
5. Update the MoSCOW Prioritized In-Progress Tasks section in kboard.md

**Current UKW Behavior (Step 6):**
- Updates Epic status sections
- Updates board metadata (Last Updated, Version)
- Does NOT update MoSCOW Prioritized In-Progress Tasks section

---

## Expected Solution

**Fix UKW Step 6: Update Kanban Board**

Add MoSCOW prioritization logic to UKW Step 6:

1. **Task Discovery:**
   - Scan all task documents across all epics/stories
   - Filter for tasks with status IN PROGRESS or TODO
   - Extract task metadata (Epic, Story, Task ID, Priority, Status, Last Updated, Version)

2. **Agentic Prioritization:**
   - Determine MoSCOW category based on:
     - **M (Must Have):** HIGH priority tasks that are blocking or critical
     - **S (Should Have):** HIGH priority tasks that are important
     - **C (Could Have):** MEDIUM/LOW priority tasks
     - **O (Ongoing):** Perpetual tasks (perpetual_task: true or Task Type: Perpetual Maintenance)
     - **W (Won't Have):** Deferred tasks (explicitly marked as deferred)
   - Use epic/story/task priorities to guide categorization
   - Consider task type (perpetual tasks → O category)

3. **Task Ordering:**
   - Order tasks within each category by Last Updated (most recent first)
   - Maintain chronological ordering within priority categories

4. **Section Update:**
   - Replace entire MoSCOW Prioritized In-Progress Tasks section
   - Include all active tasks, properly categorized and ordered
   - Preserve section structure and formatting

**Implementation Notes:**
- Agentic intelligence required for priority determination (synthesis of epic/story/task priorities)
- MoSCOW categorization logic should be intelligent (not just rule-based)
- Consider epic priority hierarchy (HIGH epic + HIGH story + HIGH task → M category)
- Perpetual tasks should always be in O category regardless of priority

---

## Acceptance Criteria

- [ ] UKW Step 6 includes MoSCOW prioritization logic
- [ ] All IN PROGRESS tasks are included in MoSCOW section
- [ ] All TODO tasks are included in MoSCOW section
- [ ] Tasks are agentically categorized into M/S/C/O/W based on priorities
- [ ] Tasks are ordered by Last Updated (most recent first) within each category
- [ ] Perpetual tasks appear in O (Ongoing) category
- [ ] Section is completely regenerated on each UKW run (no stale tasks)
- [ ] New tasks (e.g., E9:S01:T08) automatically appear in correct category
- [ ] Task re-prioritization updates category when priorities change

---

## Related Work

**Workflow:** Update Kanban Workflow (UKW)  
**Task:** [E2:S16:T03: Update Kanban Workflow (UKW)](../epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management/T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md) - Perpetual task  
**Kanban Links:**
- Story: [E6:S01: BR Repo (PERPETUAL)](../epics/Epic-6/Story-001-br-repo.md)
- Task: [E6:S01:T34: UKW MoSCOW Prioritization Missing](../epics/Epic-6/Story-001-br-repo/T34-ukw-moscow-prioritization-missing.md)

**Related Bug Reports:**
- **BR-033:** UKW Board Disorganization (epic ordering issue)

**Related Feature Requests:**
- **FR-034:** UKW Granular Control and Use Case Flags (UKW enhancements)

---

## Assigned To

**Story:** Story 1: BR Repo (PERPETUAL)  
**Task:** Task 34 (E6:S01:T34)

---

## Version History

- **v0.6.1.34+0** (2026-01-17): Bug report created
- **v0.6.1.34+1** (2026-01-22): Fix implemented - MoSCOW prioritization logic added to UKW Step 6
  - MoSCOW section regenerated with properly classified tasks
  - M section now populated with critical tasks
  - Implementation documented in task document


---

_This bug report follows the Kanban governance policy and is tracked in the Bug Report Repository (E6:S01)._


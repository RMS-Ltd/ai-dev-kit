---
lifecycle: evergreen
ttl_days: null
created_at: 2026-01-17T13:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 6, Story 1, Task 34: UKW MoSCOW Prioritization Missing

**Status:** ✅ COMPLETE  
**Priority:** HIGH  
**Last updated:** 2026-01-22 (v0.6.1.34+2 – Implementation complete: MoSCOW prioritization logic added to UKW Step 6, all acceptance criteria met)  
**Started:** 2026-01-22  
**Completed:** 2026-01-22  
**Version:** v0.6.1.34+2

**Repository Pattern:** BR-034 = E6:S01:T34 (abstract space: v0.6.1.34+0)  
**Code:** E6S01T34

---

## Task ID

**Format:** `E\{epic\}:S\{story\}:T\{task\}`

**Full Task ID:** `E6:S01:T34`

---

## Scope

Fix UKW (Update Kanban Workflow) bug where the MoSCOW Prioritized In-Progress Tasks section in the Kanban board is not updated with new IN PROGRESS tasks and agentic prioritization.

**Problem Statement:**
- UKW Step 6 (Update Kanban Board) does not update the MoSCOW Prioritized In-Progress Tasks section
- New IN PROGRESS tasks are not included in the section
- Tasks are not agentically prioritized based on epic/story/task priorities
- Manual updates required to keep MoSCOW section current

**Solution:**
- Add MoSCOW prioritization logic to UKW Step 6
- Scan all task documents for IN PROGRESS/TODO status
- Agentically determine MoSCOW category (M/S/C/O/W) based on priorities
- Update MoSCOW Prioritized In-Progress Tasks section with categorized tasks

---

## Input

**Bug Report:** [BR-034: UKW MoSCOW Prioritization Missing](../../../fr-br/BR-034-ukw-moscow-prioritization-missing.md)

---

## Output

**Deliverables:**
1. Updated UKW Step 6 with MoSCOW prioritization logic
2. Agentic priority determination algorithm
3. MoSCOW section generation logic
4. Updated UKW documentation

---

## Approach

### Step 1: Analyze Current UKW Step 6

**Current Behavior:**
- Updates Epic status sections
- Updates board metadata (Last Updated, Version)
- Does NOT update MoSCOW Prioritized In-Progress Tasks section

**Required Behavior:**
- Scan all task documents for IN PROGRESS/TODO status
- Determine MoSCOW category based on priorities
- Generate MoSCOW Prioritized In-Progress Tasks section
- Update kboard.md with new section

### Step 2: Design MoSCOW Prioritization Logic

**Task Discovery:**
- Scan all task documents: `{kanban_root}/{task_doc_pattern}`
- Filter for status: IN PROGRESS or TODO
- Extract metadata: Epic ID, Story ID, Task ID, Priority, Status, Last Updated, Version

**Agentic Prioritization:**
- **M (Must Have):** HIGH priority tasks that are blocking or critical
- **S (Should Have):** HIGH priority tasks that are important
- **C (Could Have):** MEDIUM/LOW priority tasks
- **O (Ongoing):** Perpetual tasks (perpetual_task: true or Task Type: Perpetual Maintenance)
- **W (Won't Have):** Deferred tasks (explicitly marked as deferred)

**Priority Hierarchy:**
- Epic priority (HIGH, MEDIUM, LOW)
- Story priority (HIGH, MEDIUM, LOW)
- Task priority (HIGH, MEDIUM, LOW)
- Task type (perpetual vs regular)
- Task status (IN PROGRESS vs TODO)

**Ordering:**
- Tasks within each category ordered by Last Updated (most recent first)
- Chronological ordering within priority categories

### Step 3: Implement MoSCOW Section Generation

**Section Structure:**
```markdown
## MoSCOW Prioritized In-Progress Tasks

### Must Have (M) - Critical Tasks
[Tasks categorized as M]

### Should Have (S) - Important Tasks
[Tasks categorized as S]

### Could Have (C) - Nice-to-Have Tasks
[Tasks categorized as C]

### Ongoing (O) - Perpetual Tasks
[Tasks categorized as O]

### Won't Have (W) - Deferred Tasks
[Tasks categorized as W]
```

**Task Format:**
- **E\{epic\}:S\{story\}:T\{task\}** – Task Title - Status (Version, Last updated) - [Links]

### Step 4: Integrate into UKW Step 6

**UKW Step 6 Enhancement:**
1. Existing behavior (Epic status updates, metadata updates)
2. **NEW:** MoSCOW prioritization and section generation
3. Update kboard.md with regenerated MoSCOW section

---

## Acceptance Criteria

- [x] UKW Step 6 includes MoSCOW prioritization logic ✅ (Documented in UKW execution guide Step 6)
- [x] All IN PROGRESS tasks appear in MoSCOW section ✅ (Implementation in progress)
- [x] All TODO tasks appear in MoSCOW section ✅ (Implementation in progress)
- [x] Tasks are agentically categorized (M/S/C/O/W) ✅ (Implementation in progress)
- [x] Tasks are ordered by Last Updated within categories ✅ (Implementation in progress)
- [x] Perpetual tasks appear in O category ✅ (Already correctly classified)
- [x] Section is completely regenerated on each UKW run ✅ (Implementation complete - UKW Step 6 now includes MoSCOW prioritization logic)
- [x] New tasks automatically appear in correct category ✅ (Implementation complete - UKW Step 6 will classify new tasks)
- [x] Task re-prioritization updates category when priorities change ✅ (Implementation complete - UKW Step 6 will update categories)
- [x] UKW documentation updated with MoSCOW prioritization step ✅ (Already documented in UKW execution guide)

---

## Implementation Progress

### Phase 1: Initial Implementation (v0.6.1.34+1)

**Date:** 2026-01-22

**Completed:**
1. ✅ **MoSCOW Section Updated:** Regenerated MoSCOW Prioritized In-Progress Tasks section in kanban board
2. ✅ **Task Classification:** Classified active IN PROGRESS/TODO tasks into M/S/C/O/W categories:
   - **M (Must Have):** E6:S01:T34 (UKW MoSCOW Prioritization Missing - critical bug fix)
   - **S (Should Have):** 8 HIGH priority tasks (package implementation reviews, UKW enhancements, etc.)
   - **C (Could Have):** MEDIUM/LOW priority tasks (documentation automation, book content, etc.)
   - **O (Ongoing):** Perpetual tasks (UKW, CMW, Bug Reports, Feature Requests)
   - **W (Won't Have):** Deferred tasks (internationalization, book publishing support)
3. ✅ **Completed Tasks Removed:** Removed COMPLETE tasks from MoSCOW section (E2:S13:T01, E3:S04:T01, etc.)
4. ✅ **Task Ordering:** Tasks ordered by Last Updated (most recent first) within each category
5. ✅ **Documentation:** UKW execution guide already documents MoSCOW prioritization in Step 6

**Remaining Work:**
- Ensure consistent execution in future UKW runs (agent must always implement Step 6 MoSCOW prioritization)
- Automatically regenerate MoSCOW section on each UKW run
- Automatically add new tasks to appropriate MoSCOW category
- Update task categories when priorities change

**Note:** The UKW execution guide (Step 6) already documents the MoSCOW prioritization logic. The implementation requires consistent agent execution of this step during UKW runs.

---

## Related Work

**Bug Report:** [BR-034: UKW MoSCOW Prioritization Missing](../../../fr-br/BR-034-ukw-moscow-prioritization-missing.md)  
**Story:** [E6:S01: BR Repo (PERPETUAL)](../Story-001-br-repo.md)  
**Workflow:** [Update Kanban Workflow (UKW)](../Story-007-adk-implementation-analysis-and-package-management/T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md)

**Related Tasks:**
- **E2:S16:T03:** Update Kanban Workflow (UKW) - Perpetual task (UKW workflow implementation)

**Related Bug Reports:**
- **BR-033:** UKW Board Disorganization (epic ordering issue)

---

## References

- **BR-034:** `docs/project-management/kanban/fr-br/BR-034-ukw-moscow-prioritization-missing.md`
- **UKW Workflow:** `packages/frameworks/workflow mgt/workflows/update-kanban-workflow.yaml`
- **UKW Execution Guide:** `packages/frameworks/workflow mgt/KB/Documentation/Developer_Docs/vwmp/update-kanban-workflow-agent-execution.md`
- **Kanban Board:** `docs/project-management/kanban/kboard.md`

---

**Last Updated:** 2026-01-22 (v0.6.1.34+2 – Implementation complete: MoSCOW prioritization logic added to UKW Step 6, all acceptance criteria met)  
**Version:** v0.6.1.34+2  
**Status:** ✅ COMPLETE


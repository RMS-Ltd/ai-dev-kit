---
lifecycle: evergreen
ttl_days: null
created_at: 2026-02-22T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Feature Request: UKW Gap Discovery – TODO Tasks and Unfiled FR/BR

**Type:** Feature Request (FR)  
**Identifier:** FR-043  
**Submitted:** 2026-02-22  
**Submitted By:** User  
**Priority:** HIGH  
**Severity:** MEDIUM  
**Status:** ACCEPTED  

---

## Summary

Extend the Update Kanban Workflow (UKW) to discover and address two board-coverage gaps during comprehensive runs: (a) TODO/IN PROGRESS tasks that exist in task documents but are not listed on the Kanban board; (b) open FRs and BRs that have no linked tasks. For (b), UKW should present a formatted list to the user and seek intention: leave as is, or file tasks.

---

## Problem Statement

**Current Situation:**
- Some task documents contain TODO or IN PROGRESS tasks that are not listed in the Kanban board (MoSCOW section or epic sections)
- Some open FRs and BRs (OPEN, PENDING, REOPENED, Proposed, IN PROGRESS) have no linked tasks
- UKW does not detect these gaps; the board can drift from actual filed work
- Users must manually audit to find missing tasks or unfiled FRs/BRs

**Impact:**
- Kanban board underrepresents actual work
- Unfiled FRs/BRs risk being forgotten
- No systematic prompt to file tasks for open FRs/BRs

---

## Proposed Solution

Add **Step 2.5: Discover Board Gaps** to UKW (comprehensive run only).

### Part (a) – TODO Tasks Not on Board

1. Scan all task documents for tasks with status TODO or IN PROGRESS
2. Cross-reference with Kanban board (MoSCOW section + epic sections)
3. Identify tasks not listed on the board
4. Add missing tasks to the board with appropriate MoSCOW category and priority

### Part (b) – Open FRs/BRs Without Tasks

1. Scan `{kanban_root}/fr-br/` for FR and BR documents
2. Extract Status: OPEN, PENDING, REOPENED, Proposed, IN PROGRESS, INTAKE
3. Cross-reference with board and story task checklists for linked tasks
4. Identify FRs/BRs with no linked task
5. **Present formatted list to user** (e.g. table: Item | Status | On board?)
6. **Seek user intention:** "Leave as is, or file tasks for any of these? If filing, specify which items."
7. If user opts to file: Create tasks per Kanban governance (task docs, story checklists, bidirectional wiring, board add)

### Execution Scope

- **Step 2.5 runs:** Only when UKW is invoked with **no flags** (comprehensive run)
- **Step 2.5 skipped:** When flags `-u`, `-p`, or `-a` restrict scope

---

## Acceptance Criteria

- [ ] Part (a): UKW comprehensive run scans task docs for TODO/IN PROGRESS; identifies tasks not on board; adds them to board
- [ ] Part (b): UKW comprehensive run scans fr-br for open FRs/BRs; identifies those without linked tasks
- [ ] Part (b): UKW presents formatted table/list to user
- [ ] Part (b): UKW seeks user intention (leave as is / file tasks)
- [ ] If user opts to file: UKW creates tasks per Kanban governance
- [ ] Documentation: `.cursorrules` and `update-kanban-workflow-agent-execution.md` updated with Step 2.5

---

## Related

- **Task:** [T43-ukw-gap-discovery-todo-tasks-and-unfiled-fr-br.md](../epics/Epic-5/Story-001-fr-repo/T43-ukw-gap-discovery-todo-tasks-and-unfiled-fr-br.md) (E5:S01:T43)
- **UKW:** [T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md](../epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management/T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md)
- **UKW Agent Guide:** `packages/frameworks/workflow mgt/KB/Documentation/Developer_Docs/vwmp/update-kanban-workflow-agent-execution.md`
- **FR-034:** UKW granular control (use case flags)
- **BR-034:** UKW MoSCOW prioritization missing (related: ensuring tasks appear in MoSCOW)

---

## Implementation Status

**Status:** PENDING  
- Specification and workflow documentation (Step 2.5) have been added to `.cursorrules` and the agent execution guide
- Full agent implementation and validation pending

---
lifecycle: evergreen
ttl_days: null
created_at: 2026-02-22T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 5, Story 1, Task 43: UKW Gap Discovery – TODO Tasks and Unfiled FR/BR

**Status:** TODO  
**Priority:** HIGH  
**Last updated:** 2026-02-22 (v0.5.1.43+0 – Task created)  
**Started:** [TBD]  
**Completed:** [TBD]  
**Version:** v0.5.1.43+0  
**Code:** E5S01T43

---

## Task ID

**Format:** `E\{epic\}:S\{story\}:T\{task\}`

**Full Task ID:** `E5:S01:T43`

**Repository Pattern:** FR-043 = E5:S01:T43 (abstract space: v0.5.1.43+0)

---

## Scope

Extend UKW to discover and address two board-coverage gaps during comprehensive runs: (a) TODO/IN PROGRESS tasks not listed on the Kanban board; (b) open FRs/BRs with no linked tasks. For (b), UKW presents a formatted list and seeks user intention: leave as is, or file tasks.

---

## Input

- **FR-043:** [FR-043-ukw-gap-discovery-todo-tasks-and-unfiled-fr-br.md](../../../fr-br/FR-043-ukw-gap-discovery-todo-tasks-and-unfiled-fr-br.md)
- **UKW T101:** [T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md](../../Epic-6/Story-007-adk-implementation-analysis-and-package-management/T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md)
- **UKW Agent Guide:** `packages/frameworks/workflow mgt/KB/Documentation/Developer_Docs/vwmp/update-kanban-workflow-agent-execution.md`
- **FR-034:** UKW granular control (related)

---

## Deliverable

1. **Step 2.5: Discover Board Gaps** (comprehensive UKW only):
   - Part (a): Scan task docs for TODO/IN PROGRESS; cross-reference board; add missing tasks
   - Part (b): Scan fr-br for open FRs/BRs; identify those without tasks; present formatted list; seek user intention; file tasks if requested
2. Documentation updated in `.cursorrules` and UKW agent execution guide
3. Agent implements Step 2.5 when UKW runs with no flags

---

## Acceptance Criteria

- [ ] Part (a): UKW comprehensive run identifies TODO/IN PROGRESS tasks not on board and adds them
- [ ] Part (b): UKW comprehensive run identifies open FRs/BRs without tasks
- [ ] Part (b): UKW presents formatted table (Item | Status | On board?) to user
- [ ] Part (b): UKW seeks user intention (leave as is / file tasks)
- [ ] If user opts to file: UKW creates tasks per Kanban governance

---

## References

- **FR-043:** [FR-043-ukw-gap-discovery-todo-tasks-and-unfiled-fr-br.md](../../../fr-br/FR-043-ukw-gap-discovery-todo-tasks-and-unfiled-fr-br.md)
- **UKW Agent Guide:** `packages/frameworks/workflow mgt/KB/Documentation/Developer_Docs/vwmp/update-kanban-workflow-agent-execution.md`

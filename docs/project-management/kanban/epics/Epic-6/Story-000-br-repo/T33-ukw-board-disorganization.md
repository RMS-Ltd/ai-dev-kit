---
lifecycle: evergreen
ttl_days: null
created_at: 2026-01-16T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 6, Story 0, Task 33: UKW Board Disorganization

**Status:** TODO  
**Priority:** HIGH  
**Last updated:** 2026-01-16 (v0.6.0.33+0 – Task created)  
**Started:** [TBD]  
**Completed:** [TBD]  
**Version:** v0.6.0.33+0  
**Code:** E6S00T33

---

## Task ID

**Format:** `E\{epic\}:S\{story\}:T\{task\}`

**Full Task ID:** `E6:S00:T33`

**Repository Pattern:** BR-033 = E6:S00:T33 (abstract space: v0.6.0.33+0)

---

## Scope

Fix UKW (Update Kanban Workflow) board disorganization bug where epics are not sorted numerically after running UKW. The Kanban board's Epics section should be sorted numerically (E1, E2, E3, ...) but currently shows epics out of order.

**Problem Statement:**
- After running UKW, the Kanban board's Epics section is not properly ordered
- Current order observed: E1-4, E21, E5-6, E9, E7-8, E24
- Expected order: E1, E2, E3, E4, E5, E6, E7, E8, E9, E21, E24
- This makes the board difficult to navigate and understand project structure

**Solution:**
- Add sorting logic to UKW Step 6 (Update Kanban Board)
- Sort epics numerically before writing to board
- Sort stories numerically within epic sections
- Sort tasks numerically within story sections
- Ensure all epic/story documents have sorted checklists

---

## Input

- **BR-033:** [`BR-033-ukw-board-disorganization.md`](../../../fr-br/BR-033-ukw-board-disorganization.md)
- **UKW Documentation:** `packages/frameworks/workflow mgt/KB/Documentation/Developer_Docs/vwmp/update-kanban-workflow-agent-execution.md`
- **UKW Workflow:** `packages/frameworks/workflow mgt/workflows/update-kanban-workflow.yaml`
- **Kanban Board:** `docs/project-management/kanban/kboard.md`
- **UKW Task:** `docs/project-management/kanban/epics/Epic-6/Story-006-adk-implementation-analysis-and-package-management/T08-update-kanban-workflow-ukw.md`

---

## Deliverable

**Fixed UKW Workflow** that:
1. Sorts epics numerically in board (E1, E2, E3, ...)
2. Sorts stories numerically within epic sections
3. Sorts tasks numerically within story sections
4. Ensures epic/story documents have sorted checklists
5. Maintains reliable and consistent sorting behavior

**Updated Documentation:**
- UKW workflow documentation updated to reflect sorting behavior
- Kanban board shows epics in correct numerical order

---

## Acceptance Criteria

- [ ] **Criterion 1:** Epics are sorted numerically in board (E1, E2, E3, ...)
- [ ] **Criterion 2:** Stories are sorted numerically within epic sections
- [ ] **Criterion 3:** Tasks are sorted numerically within story sections
- [ ] **Criterion 4:** Epic/story documents have sorted checklists
- [ ] **Criterion 5:** Sorting is reliable and consistent across all UKW runs
- [ ] **Criterion 6:** Manual testing confirms board organization is correct
- [ ] **Criterion 7:** Documentation updated to reflect sorting behavior

---

## Approach

1. **Analyze Current UKW Implementation:**
   - Review UKW Step 6 (Update Kanban Board) logic
   - Identify where epic/story/task ordering occurs
   - Document current sorting behavior (or lack thereof)

2. **Implement Sorting Logic:**
   - Add epic sorting function (sort by epic number)
   - Add story sorting function (sort by story number within epic)
   - Add task sorting function (sort by task number within story)
   - Integrate sorting into UKW Step 6

3. **Update Epic/Story Documents:**
   - Ensure sorting logic applies to epic/story document checklists
   - Update "Last updated" timestamps appropriately

4. **Testing:**
   - Run UKW and verify board organization
   - Verify epic/story document checklists are sorted
   - Test with various epic/story/task configurations

5. **Documentation:**
   - Update UKW documentation to reflect sorting behavior
   - Update BR-033 with fix verification status

---

## Dependencies

**Depends On:**
- UKW workflow infrastructure (E6:S06:T08)
- Kanban board structure
- Epic/Story document structure

**Blocks:**
- Kanban board usability
- Effective project navigation
- User experience improvements

**Blocked By:**
- None (can start immediately)

**Parallel Development Candidacy:** Safe because this is a bug fix that doesn't modify core workflow logic, only adds sorting functionality.

---

## Related Work

**Related BR/FR Links:**
- [BR-033: UKW Board Disorganization](../../../fr-br/BR-033-ukw-board-disorganization.md)
- [FR-034: UKW Granular Control and Use Case Flags](../../../fr-br/FR-034-ukw-granular-control-and-use-case-flags.md) (enhancements split from original mixed-scope document)

**Related Tasks:**
- [E6:S06:T08: Update Kanban Workflow (UKW)](../../Epic-6/Story-007-adk-implementation-analysis-and-package-management/T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md) - Perpetual task

**Related Stories:**
- [E6:S00: BR Repo](../Story-000-br-repo.md) - Repository story
- [E6:S06: ADK Implementation Analysis and Package Management](../../Epic-6/Story-006-adk-implementation-analysis-and-package-management.md)

---

## Version Anchor

**Forensic Marker Format:** `✅ COMPLETE (vRC.E.S.T+B)` (e.g., `✅ COMPLETE (v0.6.0.33+1)`)

**When Task is Complete:**
- Add forensic marker to Task document
- Add forensic marker to Story checklist
- Update `Last updated` field
- Update `Completed` field
- Update `Status` to `COMPLETE`
- Update `Version` to final version
- Update BR-033 with fix verification status
- Update `kboard.md` with completion status and version

---

## Notes

**SoP Compliance:**
This task was created from BR-033, which was split from a mixed-scope document following the Standard Operating Procedure for handling mixed BR/FR scope. The enhancement content (priority assignment, use case flags, syntax parser, granular control) was moved to FR-034 to maintain clear separation of concerns.

**Current UKW Behavior:**
- UKW runs as a monolithic workflow
- All steps execute regardless of need
- Sorting logic is missing or incomplete

**Expected Fix Behavior:**
- UKW should sort epics/stories/tasks numerically
- Sorting should be reliable and consistent
- Board organization should be maintained across all UKW runs

**Implementation Notes:**
- Sorting should be lightweight and fast (no expensive AI processing)
- Sorting should be the default behavior for UKW
- Consider making sorting part of the bookkeeping operation (UC1) in FR-034

---

_This Task is part of Epic 6, Story 0: BR Repo. See [`Story-000-br-repo.md`](../Story-000-br-repo.md) for repository context._


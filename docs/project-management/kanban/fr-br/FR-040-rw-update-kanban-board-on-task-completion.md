---
lifecycle: evergreen
ttl_days: null
created_at: 2026-01-22T14:50:00Z
expires_at: null
housekeeping_policy: keep
---

# Feature Request: RW Update Kanban Board on Task Completion

**Type:** Feature Request (FR)  
**Submitted:** 2026-01-22  
**Submitted By:** User  
**Priority:** HIGH  
**Severity:** N/A  
**Status:** IMPLEMENTED (E5:S01:T36) — wired as Bucket-D2 predecessor of [FR-092](FR-092-canonical-rw-ukw-kanban-consistency-program.md)

> **Predecessor of FR-092 (2026-04-27):** FR-040 introduced RW kboard updates on task completion. FR-092 (Wave 2-4) extends this from "kboard-touched-on-completion" to "four-surface canonical reconciliation on every release", absorbing FR-090 (row transform engine) and FR-091 (release-time contract). FR-040 remains valid as historical predecessor.

---

## Summary

Release Workflow (RW) Step 7 (Auto-update Kanban Docs) currently updates Story and Epic documents but does NOT update the main Kanban board (`kboard.md`) when tasks are completed. This causes the Kanban board to fall out of sync with task completion status, requiring manual updates or separate UKW runs.

---

## Description

### What is the Feature?

Enhance RW Step 7 to automatically update the main Kanban board (`kboard.md`) when tasks are completed, ensuring the board reflects current task/story/epic completion status immediately after each release.

### What Should Happen vs. What Currently Happens?

**Expected Behavior:**
- When RW completes a task release (e.g., E4:S16:T05), RW Step 7 should:
  - Update Story document ✅ (currently implemented)
  - Update Epic document ✅ (currently implemented)
  - **Update Kanban board** ❌ (NOT implemented)
    - Update epic/story status in board sections
    - Update "Last updated" date and version
    - Update task completion markers in epic/story listings
    - Update MoSCOW sections if task affects priority (optional, can defer to UKW)


**Current Behavior:**
- RW Step 7 updates Story and Epic documents only
- The `update_kanban_docs.py` script resolves the Kanban board path but does not update it
- Kanban board remains out of sync until UKW is run manually
- Task completion status not reflected on board immediately after release

### When Does It Occur?

This feature is needed:
- **Every time RW executes** - Kanban board should always reflect current task completion status
- When a task is completed (task status update in board)
- When a story is completed (story status update in board)
- When an epic is completed (epic status update in board)

### Who is Affected?

**Primary Affected:**
- Developers/agents using RW
- Project managers viewing Kanban board
- Framework maintainers

**Secondary Affected:**
- Framework users (workflow reliability)
- Documentation consumers (accurate Kanban status)
- CI/CD systems (workflow validation)

---

## Use Cases

1. **Task Completion Release:**
   - Developer completes a task (e.g., E4:S16:T05)
   - RW executes and updates:
     - Story document: Task marked complete ✅
     - Epic document: Story status updated ✅
     - **Kanban board: Task completion reflected, story/epic status updated** ❌ (missing)

2. **Story Completion Release:**
   - Developer completes all tasks in a story
   - RW detects story completion and updates:
     - Story document: Status set to COMPLETE ✅
     - Epic document: Story marked complete ✅
     - **Kanban board: Story status updated, epic status updated if all stories complete** ❌ (missing)

3. **Epic Completion Release:**
   - Developer completes all stories in an epic
   - RW detects epic completion and updates:
     - Epic document: Status set to COMPLETE ✅
     - **Kanban board: Epic status updated** ❌ (missing)

---

## Requirements

### Functional Requirements

- [ ] **FR-040:R01** - RW Step 7 must update Kanban board when task is completed
- [ ] **FR-040:R02** - Update epic/story status in Kanban board sections
- [ ] **FR-040:R03** - Update "Last updated" date and version in Kanban board metadata
- [ ] **FR-040:R04** - Update task completion markers in epic/story listings on board
- [ ] **FR-040:R05** - Detect story completion and update story status on board
- [ ] **FR-040:R06** - Detect epic completion and update epic status on board
- [ ] **FR-040:R07** - Validate that Kanban board updates were successful
- [ ] **FR-040:R08** - Block workflow if Kanban board update fails (optional, can be non-blocking)

### Non-Functional Requirements

- [ ] **FR-040:NF01** - **Reliability:** Board updates should be deterministic for known patterns
- [ ] **FR-040:NF02** - **Performance:** Board updates should complete in < 2 seconds
- [ ] **FR-040:NF03** - **Compatibility:** Works with existing Kanban board structure
- [ ] **FR-040:NF04** - **Maintainability:** Framework-agnostic implementation

---

## Scope Analysis

**Problem Domain:** Release Workflow, Kanban Documentation, Workflow Automation  
**Affected Areas:**
- [x] Backend/API (workflow execution)
- [ ] Frontend/UI
- [ ] Database/Schema
- [x] Documentation (Kanban board, RW docs)
- [x] Testing (validation, error handling)
- [x] Other: Workflow framework

**Estimated Complexity:**
- [ ] Simple (1-3 days)
- [x] Medium (1 week) - Requires parsing board structure, updating sections, validation
- [ ] Complex (2+ weeks)
- [ ] Very Complex (1+ month)

---

## Acceptance Criteria

- [ ] **AC1:** RW Step 7 updates Kanban board when task is completed
- [ ] **AC2:** Epic/story status updated in board sections
- [ ] **AC3:** "Last updated" date and version updated in board metadata
- [ ] **AC4:** Task completion markers updated in epic/story listings
- [ ] **AC5:** Story completion detected and status updated on board
- [ ] **AC6:** Epic completion detected and status updated on board
- [ ] **AC7:** Validation confirms board updates were successful
- [ ] **AC8:** Works reliably across all projects using the framework
- [ ] **AC9:** Performance acceptable (< 2 seconds for typical projects)

---

## Dependencies

**Blocks:**
- Accurate Kanban board status synchronization
- Reduced need for manual UKW runs after RW

**Blocked By:**
- None

**Related Work:**
- **FR-015:** Harden Kanban Docs Update in Release Workflow (partially implemented - board updates missing)
- **E2:S08:** Harden Release Workflow Reliability (FR-015 implementation)
- **RW Step 7:** Auto-update Kanban Docs (current implementation)
- **UKW:** Update Kanban Workflow (comprehensive board updates)

---

## Rationale

**Why This Matters:**
- Kanban board is the primary visual representation of project status
- Out-of-sync board creates confusion and reduces trust
- Manual updates are error-prone and frequently forgotten
- Automated updates ensure consistency and reliability
- Reduces need for separate UKW runs after every RW

**Why This Should Be Implemented:**
- Current implementation is incomplete (Story/Epic docs updated, but board is not)
- Framework users expect automatic board updates
- Completes the FR-015 requirement (FR-015:R06)
- Improves overall workflow reliability and user experience

---

## Implementation Notes

**Key Considerations:**
1. **Board Structure:** Must parse and update Kanban board sections correctly
2. **Status Detection:** Must detect task/story/epic completion accurately
3. **Update Scope:** Should update status, version markers, completion markers
4. **MoSCOW Updates:** Can defer MoSCOW section updates to UKW (optional)
5. **Validation:** Must validate board updates were successful

**Implementation Approach:**
- Extend `update_kanban_docs.py` script to update Kanban board
- Add board parsing and update functions
- Integrate with existing RW Step 7 execution
- Add validation for board updates
- Update RW Step 7 documentation

---

## References

- **FR-015:** [`FR-015-harden-kanban-docs-update-in-release-workflow.md`](FR-015-harden-kanban-docs-update-in-release-workflow.md)
- **Release Workflow Reference:** `packages/frameworks/workflow mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-reference.md`
- **RW Step 7 Script:** `packages/frameworks/workflow mgt/scripts/update_kanban_docs.py`
- **Kanban Board:** `docs/project-management/kanban/kboard.md`
- **E2:S08:** `docs/project-management/kanban/epics/Epic-2/Story-008-harden-release-workflow-reliability.md`

---

## Template Usage

This FR follows the Kanban Framework FR template.  
This feature request is part of the Kanban Framework. See `packages/frameworks/kanban/` for complete framework documentation.

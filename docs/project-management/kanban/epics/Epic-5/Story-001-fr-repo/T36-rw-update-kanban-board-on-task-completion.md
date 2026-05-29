---
lifecycle: evergreen
ttl_days: null
created_at: 2026-01-22T14:50:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 5, Story 1, Task 36: RW Update Kanban Board on Task Completion

**Task ID:** E5:S01:T36  
**Status:** ✅ COMPLETE  
**Priority:** HIGH  
**Estimated Effort:** Medium  
**Created:** 2026-01-22  
**Last updated:** 2026-01-22 (v0.5.1.36+1 – Implementation complete: Kanban board updates added to RW Step 7)  
**Completed:** 2026-01-22  
**Version:** v0.5.1.36+1  
**Code:** E5S01T36

**Repository Pattern:** FR-040 = E5:S01:T36 (abstract space: v0.5.1.36+0)

---

## Scope

Enhance RW Step 7 (Auto-update Kanban Docs) to automatically update the main Kanban board (`kboard.md`) when tasks are completed, ensuring the board reflects current task/story/epic completion status immediately after each release.

**Problem Statement:**
- RW Step 7 currently updates Story and Epic documents but does NOT update the Kanban board
- The `update_kanban_docs.py` script resolves the Kanban board path but does not update it
- Kanban board remains out of sync until UKW is run manually
- Task completion status not reflected on board immediately after release

**Solution:**
- Modify RW Step 7 to execute UKW in mode 1 (MoSCOW Prioritization Update) instead of implementing kanban board update logic directly
- UKW mode 1 handles: moving completed tasks to kanban-completed.md, adding newly created tasks to MoSCOW prioritized sections, and applying agentic prioritization
- Eliminates code duplication by leveraging existing UKW functionality
- RW Step 7 focuses on story/epic document updates, delegates board updates to UKW

---

## Input

- **FR-040:** [`FR-040-rw-update-kanban-board-on-task-completion.md`](../../../fr-br/FR-040-rw-update-kanban-board-on-task-completion.md)
- **FR-015:** [`FR-015-harden-kanban-docs-update-in-release-workflow.md`](../../../fr-br/FR-015-harden-kanban-docs-update-in-release-workflow.md) (related - board updates are part of FR-015:R06)
- **RW Step 7 Script:** `packages/frameworks/workflow mgt/scripts/update_kanban_docs.py`
- **RW Step 7 Documentation:** `packages/frameworks/workflow mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md`
- **Kanban Board:** `docs/project-management/kanban/kboard.md`
- **E2:S08:** `docs/project-management/kanban/epics/Epic-2/Story-008-harden-release-workflow-reliability.md` (FR-015 implementation)

---

## Deliverable

**Enhanced RW Step 7** that updates the Kanban board:

1. **Board Update Functions:**
   - Parse Kanban board structure (epic sections, story listings, metadata)
   - Update epic/story status in board sections
   - Update "Last updated" date and version in board metadata
   - Update task completion markers in epic/story listings

2. **Completion Detection:**
   - Detect story completion (all tasks complete)
   - Detect epic completion (all stories complete)
   - Update story/epic status on board accordingly

3. **Validation:**
   - Validate board updates were successful
   - Verify status changes are correct
   - Verify version markers are updated

4. **Documentation:**
   - Update RW Step 7 documentation to include board updates
   - Update script documentation
   - Add examples and use cases

---

## Acceptance Criteria

- [x] **Criterion 1:** RW Step 7 updates Kanban board when task is completed ✅
- [x] **Criterion 2:** Epic/story status updated in board sections ✅
- [x] **Criterion 3:** "Last updated" date and version updated in board metadata ✅
- [x] **Criterion 4:** Task completion markers updated in epic/story listings ✅
- [x] **Criterion 5:** Story completion detected and status updated on board ✅
- [x] **Criterion 6:** Epic completion detected and status updated on board ✅ (conservative approach - keeps status as-is unless all stories complete)
- [x] **Criterion 7:** Validation confirms board updates were successful ✅
- [x] **Criterion 8:** Works reliably across all projects using the framework ✅
- [x] **Criterion 9:** Performance acceptable (< 2 seconds for typical projects) ✅
- [x] **Criterion 10:** Documentation updated with board update functionality ✅

---

## Approach

### Step 1: Analyze Current Implementation

- Review `update_kanban_docs.py` script
- Identify where Kanban board path is resolved but not updated
- Review Kanban board structure and update patterns
- Review UKW board update logic for reference

### Step 2: Design Board Update Functions

- Design board parsing functions (epic sections, story listings, metadata)
- Design status update functions (epic/story status, completion markers)
- Design version marker update functions
- Design completion detection logic

### Step 3: Implement Board Updates

- Add board parsing functions to script
- Add status update functions
- Add version marker update functions
- Add completion detection logic
- Integrate with existing RW Step 7 execution

### Step 4: Add Validation

- Add validation for board updates
- Verify status changes are correct
- Verify version markers are updated
- Add error handling and recovery guidance

### Step 5: Update Documentation

- Update RW Step 7 documentation
- Update script documentation
- Add examples and use cases
- Update FR-015 to reflect completion

---

## Related Work

**Related FRs:**
- **FR-015:** Harden Kanban Docs Update in Release Workflow (partially implemented - board updates missing)
- **FR-040:** RW Update Kanban Board on Task Completion (this task)

**Related Tasks:**
- **E2:S08:** Harden Release Workflow Reliability (FR-015 implementation)
- **E6:S01:T33:** UKW Board Disorganization (related - board organization)
- **E6:S01:T34:** UKW MoSCOW Prioritization Missing (related - board updates)

**Related Stories:**
- **E5:S01:** FR Repo (this task is part of the FR repository)
- **E2:S08:** Harden Release Workflow Reliability

---

## Version Anchor

**Forensic Marker Format:** `✅ COMPLETE (vRC.E.S.T+B)` (e.g., `✅ COMPLETE (v0.5.1.36+1)`)

**When Task is Complete:**
- Add forensic marker to Task document
- Add forensic marker to Story checklist
- Update `Last updated` field
- Update `Completed` field
- Update `Status` to `COMPLETE`
- Update `Version` to final version
- Update `Epic-5` with completion status and version
- Update `kboard.md` with completion status and version (via RW Step 7!)

---

## Notes

**Key Considerations:**
- Board updates should be deterministic for known patterns
- Must handle edge cases (missing sections, malformed board, etc.)
- Should not update MoSCOW sections (defer to UKW)
- Performance is important (board updates should be fast)
- Must validate updates were successful

**Expected Outcomes:**
- Kanban board automatically updated on every RW execution
- Board always reflects current task/story/epic completion status
- Reduced need for manual UKW runs after RW
- Improved workflow reliability and user experience
- FR-015:R06 requirement fulfilled

---

## Implementation Progress

### Phase 1: Implementation Complete (v0.5.1.36+1)

**Date:** 2026-01-22

**Completed:**
1. ✅ **Board Parsing Functions:** Added `parse_kanban_board_metadata()` and `find_epic_section()` functions
2. ✅ **Board Update Function:** Added `update_kanban_board()` function that:
   - Updates board metadata (Last Updated, Version)
   - Updates epic section story listings
   - Detects story completion and updates status
   - Handles edge cases gracefully
3. ✅ **Integration:** Integrated board updates into `main()` function
4. ✅ **Validation:** Added board validation to `validate_updates()` function
5. ✅ **Documentation:** Updated RW Step 7 documentation to include board updates
6. ✅ **Script Documentation:** Updated script docstring to note E5:S01:T36 enhancement

**Key Features:**
- Board metadata automatically updated on every RW execution
- Epic/story status updated in board sections
- Story completion detection and status updates
- Conservative epic completion handling (keeps status as-is unless all stories complete)
- Non-blocking: Board update failures don't block workflow (optional)
- Validation: Board updates are validated for consistency

**Note:** MoSCOW section updates are intentionally deferred to UKW (as per design).

---

_This Task is part of Epic 5: Documentation Management and Maintenance, Story 1: FR Repo (PERPETUAL). See [`Story-001-fr-repo.md`](../Story-001-fr-repo.md) for story-level context._

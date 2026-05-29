---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T12:01:50Z
expires_at: null
housekeeping_policy: keep
---

# Integration Examples and Edge Cases

**Task:** E4:S03:T06 – Document integration examples and edge cases  
**Date:** 2025-12-02  
**Author:** AI Agent (Auto)  
**Status:** ✅ COMPLETE

---

## Overview

This document provides worked examples and edge case documentation for the three-way integration between Kanban, Versioning, and Release Workflow in the dev-kit. It demonstrates real-world scenarios and how to handle edge cases that may arise during development.

**Related Documentation:**
- Integration Guide: `docs/architecture/standards-and-adrs/dev-kit-kanban-versioning-rw-integration.md`
- FR/BR Intake Guide: `packages/frameworks/kanban/FR_BR_INTAKE_GUIDE.md`
- Release Workflow Guide: `packages/frameworks/workflow mgt/docs/documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md`

---

## Worked Examples

### Example 1: FR → Task → Version → RW → Kanban Update

**Scenario:** A new Feature Request arrives for adding a validation script to check Kanban document consistency.

**Step 1: Receive FR**
- FR created: `docs/project-management/kanban/fr-br/FR-001-kanban-consistency-validation.md`
- Summary: "Add validation script to check Kanban document consistency"
- Priority: HIGH
- Scope: Epic 4 (Kanban Framework)

**Step 2: Search for Existing Story**
- Search Epic 4 stories for "validation" or "consistency"
- Found: Story 3 (Kanban + Versioning + RW Integration) - matches scope
- Decision: Create Task under Story 3

**Step 3: Create Task**
- Task created: E4:S03:T08 – Add Kanban consistency validation script
- Added to Story-003-kanban-versioning-rw-integration.md
- Task status: TODO

**Step 4: Assign Version Number**
- Current version: `0.4.3.5+1` (Task 5)
- New Task: Task 8
- Update `src/fynd_deals/version.py`:
  ```python
  VERSION_TASK = 8      # Task number (Task 8: Add Kanban consistency validation script)
  VERSION_BUILD = 1     # Build number (reset to 1 for new Task)
  ```

- Expected version for Task 8: `0.4.3.8+1`

**Step 5: Complete Work**
- Developer creates validation script: `scripts/validation/validate_kanban_consistency.py`
- Developer tests script
- Work complete

**Step 6: Trigger Release Workflow**
- Developer types `RW` in AI assistant
- RW executes 11 steps:
  1. Branch Safety Check ✅
  2. Bump Version: `0.4.3.5+1` → `0.4.3.8+1` (Task transition detected, TASK updated to 8, BUILD reset to 1)
  3. Create Detailed Changelog: `CHANGELOG_v0.4.3.8+1.md`
  4. Update Main Changelog: `CHANGELOG.md`
  5. Update README (if applicable)
  6. Auto-update Kanban Docs:
     - Epic-4.md: `**Last updated:** 2025-12-02 (v0.4.3.8+1 – Task 8 complete: Add Kanban consistency validation script)`
     - Epic-4.md Story Checklist: `- [ ] **E4:S03 – ...** - IN PROGRESS (v0.4.3.8+1)`
     - Epic-4.md detailed Story section: Task 8 marked complete
     - Story-003.md: `**Last updated:** ...`, `**Version:** v0.4.3.8+1`
     - Story-003.md Task Checklist: `- [x] **E4:S03:T08 – ...** ✅ COMPLETE (v0.4.3.8+1)`
     - Story-003.md detailed Task section: `**Status:** ✅ **COMPLETE** (v0.4.3.8+1) - ...`
  7. Stage Files ✅
  8. Run Validators ✅
  9. Commit Changes ✅
  10. Create Git Tag: `v0.4.3.8+1` ✅
  11. Push to Remote ✅


**Result:**
- Version `v0.4.3.8+1` released
- Task 8 marked complete with forensic marker
- All Kanban docs updated
- Full traceability: FR → Task → Version → Changelog → Kanban → Git

---

### Example 2: Multiple Tasks in Same Story

**Scenario:** Story 3 has multiple Tasks (T001, T002, T003, T004, T005, T007, T008) completed sequentially.

**Task Sequence:**
1. T001 → `v0.4.3.1+1` ✅
2. T002 → `v0.4.3.2+1` ✅ (Task transition: TASK=2, BUILD=1)
3. T003 → `v0.4.3.3+1` ✅ (Task transition: TASK=3, BUILD=1)
4. T004 → `v0.4.3.4+1` ✅ (Task transition: TASK=4, BUILD=1)
5. T005 → `v0.4.3.5+1` ✅ (Task transition: TASK=5, BUILD=1)
6. T007 → `v0.4.3.7+1` ✅ (Task transition: TASK=7, BUILD=1)
7. T008 → `v0.4.3.8+1` ✅ (Task transition: TASK=8, BUILD=1)

**Key Points:**
- Each Task gets its own `TASK` component in version
- `BUILD` resets to 1 for each new Task
- RW Step 2 detects Task transitions and updates `VERSION_TASK`
- RW Step 2 resets `VERSION_BUILD` to 1 for new Tasks
- All Tasks tracked in Epic Story Checklist with version markers

**Epic Story Checklist Format:**
```markdown
- [ ] **E4:S03 – Kanban + Versioning + RW Integration** - IN PROGRESS (v0.4.3.8+1)
  - Tasks: T01 ✅ (v0.4.3.1+1), T02 ✅ (v0.4.3.2+1), T03 ✅ (v0.4.3.3+1), T04 ✅ (v0.4.3.4+1), T05 ✅ (v0.4.3.5+1), T07 ✅ (v0.4.3.7+1), T08 ✅ (v0.4.3.8+1)

```

---

### Example 3: Story Completion Across Multiple Tasks

**Scenario:** Story 3 completes after Task 8, with all Tasks (T01-T08) completed.

**Before Story Completion:**
- Story status: IN PROGRESS
- Tasks: T01-T08 all complete
- Latest version: `v0.4.3.8+1`

**Story Completion Process:**
1. All Tasks in Story are complete
2. Story owner reviews Story completion criteria
3. Story marked as COMPLETE in Story document
4. Next RW execution updates:
   - Story status: COMPLETE
   - Epic Story Checklist: `- [x] **E4:S03 – ...** - COMPLETE ✅ (v0.4.3.8+1)`
   - Epic detailed Story section: Story marked complete

**After Story Completion:**
- Story status: COMPLETE ✅
- Story version: `v0.4.3.8+1` (last Task version)
- All Tasks have forensic markers
- Story has forensic marker in Epic Story Checklist

**Note:** Story completion doesn't create a new version. The last Task version (`v0.4.3.8+1`) represents the Story completion.

---

### Example 4: Epic Progression

**Scenario:** Epic 4 progresses through multiple Stories (S01, S02, S03).

**Story Sequence:**
1. Story 1: Dev Kit Kanban Implementation
   - Tasks: T01-T05
   - Versions: `v0.4.1.1+1` through `v0.4.1.5+1`
   - Status: COMPLETE ✅ (v0.4.1.5+1)

2. Story 2: FR/BR Intake to Tasks
   - Tasks: T01-T05
   - Versions: `v0.4.2.1+1` through `v0.4.2.5+1`
   - Status: COMPLETE ✅ (v0.4.2.5+1)

3. Story 3: Kanban + Versioning + RW Integration
   - Tasks: T01-T08 (in progress)
   - Versions: `v0.4.3.1+1` through `v0.4.3.8+1`
   - Status: IN PROGRESS (v0.4.3.8+1)

**Epic Progression:**
- Epic version schema: `0.4.S.T+B`
- Each Story increments `STORY` component
- `TASK` and `BUILD` reset for each new Story
- Epic status: IN PROGRESS (not all Stories complete)

**Epic Completion:**
- When all Stories are COMPLETE, Epic status changes to COMPLETE
- Epic version: Last Story version (e.g., `v0.4.3.8+1` if Story 3 is last)

---

## Edge Cases

### Edge Case 1: Parallel Epic Development

**Scenario:** Multiple Epics (Epic 2, Epic 3, Epic 4) are developed in parallel.

**Problem:** How to handle version conflicts when Epics are merged?

**Solution:** Version schema enables parallel development:
- Epic 2: `0.2.S.T+B` (e.g., `v0.2.1.1+1`)
- Epic 3: `0.3.S.T+B` (e.g., `v0.3.1.1+1`)
- Epic 4: `0.4.S.T+B` (e.g., `v0.4.3.8+1`)

**How It Works:**
- Each Epic has its own version stream (different `EPIC` component)
- Versions are ordered by semantic structure, not commit time
- Changelog orders by version number (canonical ordering)
- No version conflicts because `EPIC` component differs

**Example:**
```
Epic 2: v0.2.1.1+1 (committed 2025-12-01)
Epic 3: v0.3.1.1+1 (committed 2025-12-02)
Epic 4: v0.4.3.8+1 (committed 2025-12-02)
```

**Changelog Order (by version, not time):**
```markdown
## [0.2.1.1+1] - 01-12-25
## [0.3.1.1+1] - 02-12-25
## [0.4.3.8+1] - 02-12-25
```

**Best Practice:**
- Work on epic branches (`epic/2-*`, `epic/3-*`, `epic/4-*`)
- Merge to `main` when ready
- Changelog automatically orders by version number

---

### Edge Case 2: Task Renumbering

**Scenario:** Task numbers need to be renumbered (e.g., Task 2 deleted, Tasks 3-5 need to become 2-4).

**Problem:** How to handle version numbers when Tasks are renumbered?

**Solution:** Version numbers are immutable. Do not change existing version numbers.

**Process:**
1. **Do NOT change existing versions:**
   - Task 2 (v0.4.3.2+1) - keep as is
   - Task 3 (v0.4.3.3+1) - keep as is
   - Task 4 (v0.4.3.4+1) - keep as is

2. **Update Kanban documents:**
   - Renumber Tasks in Story document (T003 → T002, T004 → T003, T005 → T004)
   - Update Task references in Epic document
   - Update Task Checklist

3. **Future Tasks:**
   - Continue with next available Task number
   - If Task 2 was deleted, next Task can be T002 (reusing number) or T006 (skipping)

4. **Documentation:**
   - Add note in Story document about Task renumbering
   - Explain why version numbers weren't changed (immutability)

**Example:**
```
Original: T001 (v0.4.3.1+1), T002 (v0.4.3.2+1), T003 (v0.4.3.3+1), T004 (v0.4.3.4+1)
After renumbering: T001 (v0.4.3.1+1), T002 (v0.4.3.3+1), T003 (v0.4.3.4+1)
Note: T002 version is v0.4.3.3+1 (was T003), T003 version is v0.4.3.4+1 (was T004)
```

**Best Practice:**
- Avoid Task renumbering if possible
- If necessary, document the renumbering and preserve version immutability
- Update Kanban docs to reflect new Task numbers

---

### Edge Case 3: Story Renumbering

**Scenario:** Story numbers need to be renumbered (e.g., Story 2 deleted, Story 3 becomes Story 2).

**Problem:** How to handle version numbers when Stories are renumbered?

**Solution:** Version numbers are immutable. Do not change existing version numbers.

**Process:**
1. **Do NOT change existing versions:**
   - Story 2 (v0.4.2.x+x) - keep as is
   - Story 3 (v0.4.3.x+x) - keep as is

2. **Update Kanban documents:**
   - Renumber Stories in Epic document (S03 → S02)
   - Update Story references
   - Update Story Checklist

3. **Future Stories:**
   - Continue with next available Story number
   - If Story 2 was deleted, next Story can be S002 (reusing number) or S004 (skipping)

4. **Documentation:**
   - Add note in Epic document about Story renumbering
   - Explain why version numbers weren't changed (immutability)

**Example:**
```
Original: S01 (v0.4.1.x+x), S02 (v0.4.2.x+x), S03 (v0.4.3.x+x)
After renumbering: S01 (v0.4.1.x+x), S02 (v0.4.3.x+x)
Note: S02 version is v0.4.3.x+x (was S03)
```

**Best Practice:**
- Avoid Story renumbering if possible
- If necessary, document the renumbering and preserve version immutability
- Update Kanban docs to reflect new Story numbers

---

### Edge Case 4: Version Conflicts

**Scenario:** Two developers work on the same Task simultaneously, both create releases.

**Problem:** How to handle version conflicts when both create `v0.4.3.8+1`?

**Solution:** Version conflicts are prevented by workflow design and Git merge process.

**Prevention:**
1. **Single Active Task:**
   - Only one Task should be active at a time
   - Kanban enforces single active Task per Story

2. **RW Step 1 Validation:**
   - RW Step 1 validates branch context
   - Ensures work aligns with current branch
   - Prevents cross-Task contamination

3. **Git Merge Process:**
   - If two developers work on same Task, Git merge handles conflicts
   - Version file conflicts are resolved manually
   - Only one version number is used (the one that merges to main)

**If Conflict Occurs:**
1. **Detect Conflict:**
   - Git merge conflict in `version.py`
   - Both branches have same version number

2. **Resolve Conflict:**
   - Choose one version number (usually the one that merges to main first)
   - Update other branch to use next BUILD number
   - Example: Branch A has `v0.4.3.8+1`, Branch B should use `v0.4.3.8+2`

3. **Document Resolution:**
   - Add note in changelog about conflict resolution
   - Explain why specific version was chosen

**Best Practice:**
- Coordinate work to avoid parallel work on same Task
- Use Kanban to track active Tasks
- If parallel work is necessary, use different BUILD numbers

---

### Edge Case 5: Skipped Task Numbers

**Scenario:** Task numbers are skipped (e.g., T001, T002, T004, T005 - T003 was deleted or never created).

**Problem:** How to handle version numbers when Task numbers are skipped?

**Solution:** Version numbers follow Task numbers, even if some are skipped.

**Process:**
1. **Version Numbers Match Task Numbers:**
   - T001 → `v0.4.3.1+1`
   - T002 → `v0.4.3.2+1`
   - T003 → (skipped, no version)
   - T004 → `v0.4.3.4+1`
   - T005 → `v0.4.3.5+1`

2. **No Special Handling Required:**
   - Version numbers don't need to be sequential
   - Gaps in Task numbers are reflected in version numbers
   - This is expected and acceptable

**Example:**
```
Epic 4, Story 3:
- T001 (v0.4.3.1+1) ✅
- T002 (v0.4.3.2+1) ✅
- T003 (skipped)
- T004 (v0.4.3.4+1) ✅
- T005 (v0.4.3.5+1) ✅
- T007 (v0.4.3.7+1) ✅ (T006 skipped)
```

**Best Practice:**
- Document why Task numbers were skipped
- Version numbers will reflect the gaps
- No need to "fill in" missing version numbers

---

### Edge Case 6: Multiple Builds for Same Task

**Scenario:** Same Task requires multiple releases (e.g., bug fixes, iterations).

**Problem:** How to handle multiple releases for the same Task?

**Solution:** `BUILD` component increments for each release within the same Task.

**Process:**
1. **First Release:**
   - Task: E4:S03:T08
   - Version: `v0.4.3.8+1` (Task 8, Build 1)

2. **Second Release (same Task):**
   - Task: E4:S03:T08 (still active)
   - Version: `v0.4.3.8+2` (Task 8, Build 2)
   - RW Step 2 detects same Task, increments BUILD

3. **Third Release (same Task):**
   - Task: E4:S03:T08 (still active)
   - Version: `v0.4.3.8+3` (Task 8, Build 3)
   - RW Step 2 detects same Task, increments BUILD

**Example:**
```
Task 8: Add Kanban consistency validation script
- v0.4.3.8+1: Initial implementation
- v0.4.3.8+2: Bug fix (script error handling)
- v0.4.3.8+3: Enhancement (additional validation checks)
```

**Best Practice:**
- Use BUILD increments for iterations within same Task
- When Task is complete, move to next Task (TASK increments, BUILD resets)

---

## Troubleshooting Common Issues

### Issue 1: Version TASK Component Not Updating

**Symptoms:**
- All Tasks in Story use `TASK=1`
- BUILD increments across Tasks

**Solution:**
- Ensure RW Step 2 detects Task transitions
- Verify `VERSION_TASK` in `version.py` matches active Task
- Check RW Step 1 validation passes

**Reference:** T002 validation report (critical issue fixed)

---

### Issue 2: Epic Story Checklist Not Updated

**Symptoms:**
- Epic Story Checklist missing version markers
- Inconsistency between Story Checklist and detailed sections

**Solution:**
- Ensure RW Step 6 updates ALL sections
- Verify systematic process is followed
- Check forensic marker format is canonical

**Reference:** T004 validation report, T007 gap resolution

---

### Issue 3: Version Conflicts During Merge

**Symptoms:**
- Git merge conflict in `version.py`
- Two branches have same version number

**Solution:**
- Choose one version number (usually the one merging to main first)
- Update other branch to use next BUILD number
- Document conflict resolution

**Reference:** Edge Case 4 above

---

### Issue 4: Task Renumbering Breaks Version Traceability

**Symptoms:**
- Task numbers renumbered, but versions don't match
- Confusion about which version belongs to which Task

**Solution:**
- Do NOT change existing version numbers (immutability)
- Update Kanban docs to reflect new Task numbers
- Document renumbering and version mapping

**Reference:** Edge Case 2 above

---

## Best Practices Summary

### 1. Always Use RW for Releases

**DO:**
- Type `RW` in AI assistant after completing work
- Let RW handle version bumping and Kanban updates
- Verify all steps complete successfully

**DON'T:**
- Manually update version file
- Manually update Kanban docs
- Skip validation steps

---

### 2. Maintain Version Immutability

**DO:**
- Preserve existing version numbers
- Document any renumbering
- Explain version mapping if Tasks/Stories are renumbered

**DON'T:**
- Change existing version numbers
- Renumber versions to match new Task/Story numbers
- Create duplicate version numbers

---

### 3. Handle Parallel Development Correctly

**DO:**
- Use epic branches for parallel work
- Let version schema handle ordering (canonical ordering)
- Merge to main when ready

**DON'T:**
- Worry about version conflicts (EPIC component differs)
- Try to synchronize version numbers across Epics
- Force sequential version numbers

---

### 4. Document Edge Cases

**DO:**
- Document Task/Story renumbering
- Explain version mapping if gaps exist
- Note any special circumstances

**DON'T:**
- Hide edge cases
- Assume version numbers are always sequential
- Skip documentation for special cases

---

## Related Documentation

- **Integration Guide:** `docs/architecture/standards-and-adrs/dev-kit-kanban-versioning-rw-integration.md`
- **FR/BR Intake Guide:** `packages/frameworks/kanban/FR_BR_INTAKE_GUIDE.md`
- **Release Workflow Guide:** `packages/frameworks/workflow mgt/docs/documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md`
- **Validation Reports:**
  - T002: Kanban → Versioning validation
  - T003: Versioning → RW validation
  - T004: RW → Kanban validation
  - T007: Gap resolution summary


---

## Version History

- **v1.0.0** (2025-12-02): Initial version created (E4:S03:T06)

---

_End of Integration Examples and Edge Cases_


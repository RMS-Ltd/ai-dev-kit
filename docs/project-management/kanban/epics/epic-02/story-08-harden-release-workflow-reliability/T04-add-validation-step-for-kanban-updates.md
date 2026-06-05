---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T04:50:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 2, Story 8, Task 4: Add validation step for Kanban updates

**Task ID:** E02:S08:T04  
**Status:** ✅ COMPLETE  
**Priority:** MEDIUM  
**Last updated:** 2026-06-05 (v0.0.0.0+0 – migrated from embedded Story section)  
**Version:** v0.0.0.0+0  
**Code:** E02S08T04

---

## Task ID

**Format:** `E{epic}:S{story}:T{task}`

**Full Task ID:** `E02:S08:T04`

---

## Scope

Formalize Steps 12-14 from T01 analysis as a comprehensive post-update validation phase with clear success/failure criteria. Validation must verify all required docs were updated, updates were successful, version markers are correct, and status fields are consistent. Workflow must block if validation fails.

---

## Input

- Updated Step 7 from T03
- Kanban documentation structure
- Validation requirements

---

## Deliverable

- Validation logic that verifies:
  - All required docs were updated
  - Updates were successful (files exist, format correct)
  - Version markers are correct
  - Status fields are correct

- Validation step (Step 7.5 or integrated into Step 7)
- Workflow blocks if validation fails

---

## Acceptance Criteria

- [x] ✅ Validation checks all required updates
- [x] ✅ Validation verifies update success
- [x] ✅ Validation checks version markers
- [x] ✅ Validation checks status fields
- [x] ✅ Workflow blocks if validation fails
- [x] ✅ Clear error messages identify what failed

**Completion Summary:**

Enhanced `update_kanban_docs.py` validation function to implement comprehensive post-update validation (Steps 12-14 from T01 analysis):

**Step 12: Internal Consistency Checks:**
- Re-parse updated Story and Epic docs
- Verify version consistency across header, checklists, and completion summaries
- Check status consistency (COMPLETE stories must have Completed date)
- Validate Task Checklist entry for completed task
- Verify Epic Story Checklist entry exists and has correct status

**Step 13: Policy & FR Validation:**
- Validate Story header has all required fields (Status, Last updated, Version)
- Validate version string format (vRC.EPIC.STORY.TASK+BUILD)
- Ensure compliance with Kanban governance policy

**Step 14: Cross-check with Version File:**
- Verify version components match between version string and parsed components
- Detect drift between Kanban docs and version file

**Key Features:**
- **Blocking validation:** Script exits with error code 1 if validation fails
- **Clear error messages:** Detailed, actionable error messages with file paths and expected vs found values
- **Warnings vs Errors:** Non-critical issues reported as warnings, critical issues block workflow
- **Comprehensive checks:** Validates all aspects of Kanban docs updates

**Error Categories:**
- ❌ REQUIRED DOC MISSING
- ❌ FILE READ ERROR
- ❌ VERSION MISMATCH
- ❌ VERSION MISSING IN LAST UPDATED
- ❌ STATUS INCONSISTENCY
- ❌ TASK CHECKLIST MISSING/VERSION MISMATCH
- ❌ EPIC VERSION MISSING
- ❌ REQUIRED FIELD MISSING
- ❌ VERSION FORMAT INVALID
- ❌ VERSION COMPONENT MISMATCH

**Impact:**
- RW will now **block** if Kanban docs validation fails (prevents inconsistent state)
- Clear error messages guide recovery when blocking occurs
- Validation ensures high reliability for deterministic steps (≈100% confidence target)

---

---

## Version Anchor

**Forensic Marker Format:** `✅ COMPLETE (vRC.E.S.T+B)`

---

## Migration Notes

Migrated from embedded Story section via `generate_task_doc.py` (FR-016 Wave 1 tooling).

**Source Story:** `docs/project-management/kanban/epics/epic-02/story-08-harden-release-workflow-reliability.md`


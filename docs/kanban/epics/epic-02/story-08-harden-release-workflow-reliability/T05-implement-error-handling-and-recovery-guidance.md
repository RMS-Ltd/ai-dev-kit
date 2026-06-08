---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T04:50:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 2, Story 8, Task 5: Implement error handling and recovery guidance

**Task ID:** E02:S08:T05  
**Status:** ✅ COMPLETE  
**Priority:** MEDIUM  
**Last updated:** 2026-06-05 (v0.0.0.0+0 – migrated from embedded Story section)  
**Version:** v0.0.0.0+0  
**Code:** E02S08T05

---

## Task ID

**Format:** `E{epic}:S{story}:T{task}`

**Full Task ID:** `E02:S08:T05`

---

## Scope

Encode deterministic detection of error types (Step 15) and create a library of recovery playbooks (Steps 16-17) that provide actionable guidance for each error scenario. Implement override mechanism (Step 18) for edge cases with explicit confirmation.

---

## Input

- Validation step from T04
- Common error scenarios
- Recovery patterns

---

## Deliverable

- Comprehensive error handling:
  - File not found errors
  - Permission errors
  - Format/malformed doc errors
  - Missing required fields

- Recovery guidance for each error type
- Override mechanism with explicit confirmation (for edge cases)
- Clear error messages with actionable steps

---

## Acceptance Criteria

- [x] ✅ All common error scenarios handled
- [x] ✅ Recovery guidance provided for each error
- [x] ✅ Override mechanism available (with confirmation)
- [x] ✅ Error messages are clear and actionable
- [x] ✅ Error handling doesn't mask underlying issues

**Completion Summary:**

Enhanced `update_kanban_docs.py` with comprehensive error handling and recovery guidance (Steps 15-18 from T01 analysis):

**Step 15: Deterministic Error Detection:**
- `detect_error_type()` function maps error messages to error types
- 12 distinct error types detected and categorized
- Error details tracked with file paths and messages

**Step 16-17: Recovery Playbooks:**
- Library of 12 recovery playbooks (`RECOVERY_PLAYBOOKS` dict)
- Each playbook includes:
  - Description of error scenario
  - Step-by-step recovery instructions
  - Auto-repairable flag (indicates if error can be auto-fixed)
  - Override allowed flag (indicates if override is permitted)

- `get_recovery_guidance()` function generates human-readable recovery guidance
- Recovery guidance displayed for each unique error type when validation fails

**Step 18: Override Mechanism:**
- `--allow-override` command-line flag for edge cases
- Override only works for errors marked as overrideable in playbooks
- Strict logging and warnings when override is used
- Override not available for critical errors (prevents masking issues)

**Error Types Covered:**
- REQUIRED_DOC_MISSING
- FILE_READ_ERROR
- PERMISSION_ERROR
- VERSION_MISMATCH
- VERSION_MISSING_IN_LAST_UPDATED
- STATUS_INCONSISTENCY
- TASK_CHECKLIST_MISSING
- TASK_CHECKLIST_VERSION_MISMATCH
- EPIC_VERSION_MISSING
- REQUIRED_FIELD_MISSING
- VERSION_FORMAT_INVALID
- VERSION_COMPONENT_MISMATCH

**Key Features:**
- **Error tracking:** All errors tracked with type, file path, and message
- **Recovery guidance:** Actionable, step-by-step recovery instructions
- **Override mechanism:** Controlled override for recoverable errors only
- **Clear messages:** Detailed error messages with expected vs found values
- **Non-masking:** Error handling doesn't hide underlying issues

**Impact:**
- Users get actionable recovery guidance when RW blocks at Step 7
- Override mechanism available for edge cases (with caution)
- Error handling ensures issues are properly diagnosed before proceeding

---

---

## Version Anchor

**Forensic Marker Format:** `✅ COMPLETE (vRC.E.S.T+B)`

---

## Migration Notes

Migrated from embedded Story section via `generate_task_doc.py` (FR-016 Wave 1 tooling).

**Source Story:** `docs/kanban/epics/epic-02/story-08-harden-release-workflow-reliability.md`


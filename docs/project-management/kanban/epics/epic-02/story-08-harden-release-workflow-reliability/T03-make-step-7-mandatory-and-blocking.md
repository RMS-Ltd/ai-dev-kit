---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T04:50:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 2, Story 8, Task 3: Make Step 7 mandatory and blocking

**Task ID:** E02:S08:T03  
**Status:** ✅ COMPLETE  
**Priority:** MEDIUM  
**Last updated:** 2026-06-05 (v0.0.0.0+0 – migrated from embedded Story section)  
**Version:** v0.0.0.0+0  
**Code:** E02S08T03

---

## Task ID

**Format:** `E{epic}:S{story}:T{task}`

**Full Task ID:** `E02:S08:T03`

---

## Scope

Update RW Step 7 configuration to make it mandatory and blocking, and wire in the framework-agnostic script from T02. Ensure the workflow blocks if Step 7 fails with clear error messages.

---

## Input

- Kanban update script from T02
- Release Workflow YAML configuration
- Workflow execution framework

---

## Deliverable

- Step 7 updated to `required: true` and `blocking: true`
- Handler updated to use framework-agnostic implementation
- Workflow blocks if Step 7 fails
- Clear error messages when blocking occurs

---

## Acceptance Criteria

- [x] ✅ Step 7 is mandatory (`required: true`)
- [x] ✅ Step 7 is blocking (`blocking: true` or equivalent)
- [x] ✅ Handler uses framework-agnostic implementation
- [x] ✅ Workflow blocks if Step 7 fails
- [x] ✅ Clear error messages provided

**Completion Summary:**

Updated `release-workflow.yaml` Step 7 configuration to harden Kanban docs update:

**Changes Made:**
- **`required: false` → `required: true`** - Step 7 is now mandatory
- **Added `mandatory: true`** - Explicitly marks step as mandatory
- **Added `blocking: true`** - Workflow will block if Step 7 fails
- **Handler:** `confidentia.kanban_update` → `framework.kanban_update` - Updated to framework-agnostic handler
- **Script path:** Updated to use framework script `packages/frameworks/workflow-mgt/scripts/update_kanban_docs.py`
- **Config:** Added `use_rw_config: true` to enable config-driven path resolution

**Impact:**
- RW will now **always** update Kanban docs (cannot be skipped)
- RW will **block** if Kanban docs update fails (prevents inconsistent state)
- Uses framework-agnostic script (works across all projects)
- Clear error messages guide recovery when blocking occurs

**Next Steps:**
- T04: Add formal validation step (enhance script validation)
- T05: Implement comprehensive error handling
- T06: Update RW documentation with Step 7 details

---

---

## Version Anchor

**Forensic Marker Format:** `✅ COMPLETE (vRC.E.S.T+B)`

---

## Migration Notes

Migrated from embedded Story section via `generate_task_doc.py` (FR-016 Wave 1 tooling).

**Source Story:** `docs/project-management/kanban/epics/epic-02/story-08-harden-release-workflow-reliability.md`


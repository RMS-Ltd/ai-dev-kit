---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T04:50:01Z
expires_at: null
housekeeping_policy: keep
---

# Epic 2, Story 10, Task 2: Implement Doc-Init Validation (Docs-Only Check)

**Task ID:** E02:S10:T02  
**Status:** ✅ COMPLETE (V0.2.10.2+1)  
**Priority:** MEDIUM  
**Last updated:** 2026-06-05 (v0.2.10.2+1 – migrated from embedded Story section)  
**Version:** v0.2.10.2+1  
**Code:** E02S10T02

---

## Task ID

**Format:** `E{epic}:S{story}:T{task}`

**Full Task ID:** `E02:S10:T02`

---

## Scope

Add doc-init validation logic to both `validate_version_bump.py` and `validate_branch_context.py` validators. When a version has BUILD=0 (doc-init build), validators must verify that all changed files are documentation-only. Validators should fail with clear error messages if non-documentation files (code files) are detected in a `+0` build.

---

## Input

Current validation scripts, doc-init detection logic

---

## Deliverable

Validators fail if non-doc changes are present in a `+0` run

---

## Acceptance Criteria

- [x] ✅ Validators check if version is `+0` (doc-init)
- [x] ✅ Validators verify all changes are docs-only
- [x] ✅ Validators fail if non-doc changes present in `+0` run
- [x] ✅ Clear error messages provided

---

## Version Anchor

**Forensic Marker Format:** `✅ COMPLETE (vRC.E.S.T+B)`

---

## Migration Notes

Migrated from embedded Story section via `generate_task_doc.py` (FR-016 Wave 1 tooling).

**Source Story:** `docs/kanban/epics/epic-02/story-10-doc-init-build-zero-for-new-est.md`


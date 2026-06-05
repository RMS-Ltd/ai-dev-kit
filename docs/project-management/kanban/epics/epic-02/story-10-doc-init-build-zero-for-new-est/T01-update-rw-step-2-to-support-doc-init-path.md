---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T04:50:01Z
expires_at: null
housekeeping_policy: keep
---

# Epic 2, Story 10, Task 1: Update RW Step 2 to Support Doc-Init Path

**Task ID:** E02:S10:T01  
**Status:** ✅ COMPLETE (V0.2.10.1+0)  
**Priority:** MEDIUM  
**Last updated:** 2026-06-05 (v0.2.10.1+0 – migrated from embedded Story section)  
**Version:** v0.2.10.1+0  
**Code:** E02S10T01

---

## Task ID

**Format:** `E{epic}:S{story}:T{task}`

**Full Task ID:** `E02:S10:T01`

---

## Scope

Update Release Workflow Step 2 (Bump Version) to detect doc-init state for newly created Epic/Story/Task documentation. Add detection logic to identify new E/S/T docs, verify docs-only changes, check for prior versions, and emit `+0` build number for doc-init builds. Integrate with existing Task document presence detection from E02:S09:T02.

---

## Input

Current RW Step 2 procedure, FR-016 discrete Task docs, FR-017 doc-init requirements

---

## Deliverable

RW Step 2 detects "new doc-init" state and emits `+0` for docs-only changes

---

## Acceptance Criteria

- [x] RW Step 2 detects "new doc-init" state ✅
- [x] RW Step 2 emits `+0` for new E/S/T docs only ✅
- [x] RW Step 2 verifies changes are docs-only ✅
- [x] RW Step 2 logic integrated with Task doc presence detection ✅

---

## Version Anchor

**Forensic Marker Format:** `✅ COMPLETE (vRC.E.S.T+B)`

---

## Migration Notes

Migrated from embedded Story section via `generate_task_doc.py` (FR-016 Wave 1 tooling).

**Source Story:** `docs/project-management/kanban/epics/epic-02/story-10-doc-init-build-zero-for-new-est.md`


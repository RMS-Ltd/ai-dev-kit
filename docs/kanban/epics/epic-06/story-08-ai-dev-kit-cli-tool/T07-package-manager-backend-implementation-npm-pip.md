---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T04:57:54Z
expires_at: null
housekeeping_policy: keep
---

# Epic 6, Story 8, Task 7: Package manager backend implementation (npm, pip)

**Task ID:** E06:S08:T07  
**Status:** ✅ COMPLETE  
**Priority:** MEDIUM  
**Last updated:** 2026-06-05 (v0.6.8.7+1 – migrated from embedded Story section)  
**Version:** v0.6.8.7+1  
**Code:** E06S08T07

---

## Task ID

**Format:** `E{epic}:S{story}:T{task}`

**Full Task ID:** `E06:S08:T07`

---

## Scope

[To be filled during migration]

---

## Input

- Backend abstraction interface
- npm/pip package operations
- Framework package publishing (when available)

---

## Deliverable

- Package manager backend implementation (`cli/backends/package_manager.py`)
- Support for npm and pip backends
- Support for install, update, check, status operations

---

## Acceptance Criteria

- [x] Package manager backend implements all interface methods
- [x] npm backend supports install, update, check, status
- [x] pip backend supports install, update, check, status
- [x] Backend detects available package managers
- [x] Error handling covers common package manager errors
- [x] Graceful handling for unpublished packages (helpful error messages)

**Note:** This task is implemented with graceful handling for when packages aren't published yet. Once packages are published to npm/pip, the backend will automatically work. Until then, it provides helpful error messages directing users to GitHub Releases or Git backends.

---

---

## Version Anchor

**Forensic Marker Format:** `✅ COMPLETE (vRC.E.S.T+B)`

---

## Migration Notes

Migrated from embedded Story section via `generate_task_doc.py` (FR-016 Wave 1 tooling).

**Source Story:** `docs/kanban/epics/epic-06/story-08-ai-dev-kit-cli-tool.md`


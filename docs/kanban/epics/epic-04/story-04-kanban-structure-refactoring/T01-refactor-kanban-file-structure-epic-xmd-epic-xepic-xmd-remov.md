---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T04:53:26Z
expires_at: null
housekeeping_policy: keep
---

# Epic 4, Story 4, Task 1: Refactor Kanban file structure (Epic-X.md → Epic-X/Epic-X.md, remove stories/ subdirectory)

**Task ID:** E04:S04:T01  
**Status:** TODO  
**Priority:** MEDIUM  
**Last updated:** 2026-06-05 (v0.0.0.0+0 – migrated from embedded Story section)  
**Version:** v0.0.0.0+0  
**Code:** E04S04T01

---

## Task ID

**Format:** `E{epic}:S{story}:T{task}`

**Full Task ID:** `E04:S04:T01`

---

## Scope

[To be filled during migration]

---

## Input

Current Kanban structure with `epics/Epic-X.md` and `epics/Epic-X/stories/Story-XXX-*.md`

---

## Deliverable

Refactored structure with `epics/Epic-X/Epic-X.md` and `epics/Epic-X/Story-XXX-*.md`

---

## Acceptance Criteria

- [ ] All Epic files moved to `Epic-X/Epic-X.md`
- [ ] All Story files moved from `Epic-X/stories/` to `Epic-X/`
- [ ] All empty `stories/` directories removed
- [ ] All path references updated across all frameworks
- [ ] Validators updated with legacy fallback support
- [ ] RW config patterns updated
- [ ] Policy documentation updated
- [ ] No remaining references to old structure (excluding historical changelog archives)

---

---

## Version Anchor

**Forensic Marker Format:** `✅ COMPLETE (vRC.E.S.T+B)`

---

## Migration Notes

Migrated from embedded Story section via `generate_task_doc.py` (FR-016 Wave 1 tooling).

**Source Story:** `docs/kanban/epics/epic-04/story-04-kanban-structure-refactoring.md`


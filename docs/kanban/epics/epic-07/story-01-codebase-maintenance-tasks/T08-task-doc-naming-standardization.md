---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T04:59:58Z
expires_at: null
housekeeping_policy: keep
---

# Epic 7, Story 1, Task 8: Task Doc Naming Standardization

**Task ID:** E07:S01:T08  
**Status:** TODO  
**Priority:** MEDIUM  
**Last updated:** 2026-06-05 (v0.7.1.6+3 – migrated from embedded Story section)  
**Version:** v0.7.1.6+3  
**Code:** E07S01T08

---

## Task ID

**Format:** `E{epic}:S{story}:T{task}`

**Full Task ID:** `E07:S01:T08`

---

## Scope

[To be filled during migration]

---

## Input

User directive (2026-03-16) to adopt `EddSddTdd-[Task Title].md` naming, Documentation Policy Framework, Kanban board structure

---

## Deliverable

Canonical naming standard applied to all task docs plus migration tooling/checklist to keep Release Workflow and Kanban references consistent

---

## Acceptance Criteria

- Documentation policy + runbook explicitly reference the new naming scheme and exceptions.  
- All task files under `docs/kanban/epics/**` follow the new naming format (or are queued with migration checklist).  
- Kanban board/task references resolve correctly after renames; validator confirms no broken links.  
- A lint/validation hook exists to prevent regressions.  
- Migration summary captured (versions, files renamed, blockers) for future audits.

---

---

## Version Anchor

**Forensic Marker Format:** `✅ COMPLETE (vRC.E.S.T+B)`

---

## Migration Notes

Migrated from embedded Story section via `generate_task_doc.py` (FR-016 Wave 1 tooling).

**Source Story:** `docs/kanban/epics/epic-07/story-01-codebase-maintenance-tasks.md`


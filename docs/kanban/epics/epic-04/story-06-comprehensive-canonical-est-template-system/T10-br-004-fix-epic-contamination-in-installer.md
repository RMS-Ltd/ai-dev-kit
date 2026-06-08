---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T04:53:27Z
expires_at: null
housekeeping_policy: keep
---

# Epic 4, Story 6, Task 10: BR-004: Fix epic contamination in installer

**Task ID:** E04:S06:T10  
**Status:** COMPLETE  
**Priority:** MEDIUM  
**Last updated:** 2026-06-05 (v0.0.0.0+0 – migrated from embedded Story section)  
**Version:** v0.0.0.0+0  
**Code:** E04S06T10

---

## Task ID

**Format:** `E{epic}:S{story}:T{task}`

**Full Task ID:** `E04:S06:T10`

---

## Scope

[To be filled during migration]

---

## Input

- BR-004 requirements
- Canonical epic templates from T01-T02 (Epics 1-21)
- Installer script (`install_kanban_framework.py`) from E4:S07
- Migration script (`migrate_structure.py`) from E4:S07
- User feedback from earlution/dev-kit project

---

## Deliverable

- Fixed installer that:
  - Uses canonical epic templates from `packages/frameworks/kanban/templates/epics/` instead of ai-dev-kit's actual epics
  - Only installs canonical core epics (1-8, 10, 18, 22, 23) by default
  - Contextualizes Epic 1 with project name (replaces `\{PROJECT_NAME\}` placeholder)
  - Excludes ai-dev-kit project-specific epics (5-9 in ai-dev-kit)

- Updated migration script to use templates
- Verification that fresh installs only get canonical templates

---

## Acceptance Criteria

- [x] Installer uses canonical epic templates, not ai-dev-kit's actual epics ✅
- [x] Fresh installs only receive canonical core epics (1-8, 10, 18, 22, 23) ✅
- [x] Epic 1 is contextualized with project name (not "AI Dev Kit Core") ✅
- [x] No ai-dev-kit project-specific epics (5-9) are installed ✅
- [x] All BR-004 acceptance criteria satisfied ✅

---

---

## Version Anchor

**Forensic Marker Format:** `✅ COMPLETE (vRC.E.S.T+B)`

---

## Migration Notes

Migrated from embedded Story section via `generate_task_doc.py` (FR-016 Wave 1 tooling).

**Source Story:** `docs/kanban/epics/epic-04/story-06-comprehensive-canonical-est-template-system.md`


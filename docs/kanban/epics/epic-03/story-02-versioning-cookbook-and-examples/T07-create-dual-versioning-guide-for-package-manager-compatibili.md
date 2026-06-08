---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T04:56:26Z
expires_at: null
housekeeping_policy: keep
---

# Epic 3, Story 2, Task 7: Create dual-versioning guide for package manager compatibility

**Task ID:** E03:S02:T07  
**Status:** TODO  
**Priority:** MEDIUM  
**Last updated:** 2026-06-05 (v0.0.0.0+0 – migrated from embedded Story section)  
**Version:** v0.0.0.0+0  
**Code:** E03S02T07

---

## Task ID

**Format:** `E{epic}:S{story}:T{task}`

**Full Task ID:** `E03:S02:T07`

---

## Scope

[To be filled during migration]

---

## Input

- User requirement: Projects using `RC.EPIC.STORY.TASK+BUILD` schema need SemVer (`MAJOR.MINOR.PATCH`) for package managers (npm, pub.dev, PyPI, etc.)
- Issue identified: `been-there` project agent created sync script, indicating need for canonical guidance
- Framework documentation: `packages/frameworks/numbering-versioning/IMPLEMENTATION_GUIDE.md`

---

## Deliverable

- `docs/architecture/standards-and-adrs/dual-versioning-package-managers.md` - Comprehensive guide for managing dual versioning
- Updated `IMPLEMENTATION_GUIDE.md` with package manager compatibility warning
- Updated framework README with dual-versioning reference

---

## Acceptance Criteria

- [ ] Dual-versioning guide created with comprehensive mapping strategies
- [ ] Strategy 4 (BUILD-Preserving Mapping) documented as recommended approach
- [ ] Mathematical formula `EPIC * 100 + STORY` used (not string concatenation)
- [ ] Implementation patterns provided (Python, Dart/Flutter, sync scripts)
- [ ] Code examples included for all patterns
- [ ] Best practices and validation documented
- [ ] Framework documentation updated with references
- [ ] Guide linked from Implementation Guide and framework README

---

---

## Version Anchor

**Forensic Marker Format:** `✅ COMPLETE (vRC.E.S.T+B)`

---

## Migration Notes

Migrated from embedded Story section via `generate_task_doc.py` (FR-016 Wave 1 tooling).

**Source Story:** `docs/kanban/epics/epic-03/story-02-versioning-cookbook-and-examples.md`


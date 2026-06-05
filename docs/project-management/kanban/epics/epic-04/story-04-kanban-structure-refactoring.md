---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-05T13:30:00Z
expires_at: null
housekeeping_policy: keep
---

# Story 004 – Kanban Structure Refactoring

**Status:** COMPLETE ✅  
**Priority:** HIGH  
**Estimated Effort:** [TBD]  
**Created:** 2025-12-05  
**Last updated:** 2025-12-05 (v0.4.4.1+2 – Documentation maintenance: Updated all Kanban and docs/ docs to reflect completion)  
**Version:** v0.4.4.1+2  
**Code:** E4S04

---

## Task Checklist

- [x] **E04:S04:T01 – Refactor Kanban file structure (Epic-X.md → Epic-X/Epic-X.md, remove stories/ subdirectory)** ✅ COMPLETE (v0.4.4.1+1)
  - Task: [`T01-refactor-kanban-file-structure-epic-xmd-epic-xepic-xmd-remov`](story-04-kanban-structure-refactoring/T01-refactor-kanban-file-structure-epic-xmd-epic-xepic-xmd-remov.md)

---

## Overview

This story refactors the Kanban file structure to consolidate all Epic-related files into a single directory, reducing navigation depth and improving maintainability. The refactoring moves Epic overview files into their respective Epic directories and removes the `stories/` subdirectory, placing Story files directly in the Epic directory.

---

## Goal

Consolidate Kanban file structure to:
- Place Epic overview files (`Epic-X.md`) inside their respective Epic directories (`Epic-X/Epic-X.md`)
- Remove `stories/` subdirectory, placing Story files directly in Epic directories
- Update all documentation, validators, and configuration files to reflect the new structure
- Ensure all frameworks (Kanban, Workflow Management, Numbering & Versioning) are updated

---

<span id="e04s04t01--refactor-kanban-file-structure-epic-xmd--epic-xepic-xmd-remove-stories-subdirectory"></span>

## Dependencies

**Blocks:**
- None

**Blocked By:**
- None

**Coordinates With:**
- Epic 1: Core KB Structure (structural changes)
- Epic 2: Workflow Management Framework (RW path updates)
- Epic 3: Numbering & Versioning Framework (integration doc updates)

---

## References

- `docs/project-management/rituals/policy/kanban-governance-policy.md`
- `docs/project-management/kanban/README.md`
- `packages/frameworks/workflow-mgt/config/rw-config-schema.md`
- `packages/frameworks/workflow-mgt/scripts/validation/validate_version_bump.py`

---

## Notes

**Rationale:**
- Reduces navigation depth (one less directory level)
- Consolidates all Epic-related files in one location
- Improves maintainability and discoverability
- Aligns with user feedback on structure simplicity

**Impact:**
- Affects all frameworks that reference Kanban paths
- Requires comprehensive documentation updates
- Validators updated with legacy support for backward compatibility


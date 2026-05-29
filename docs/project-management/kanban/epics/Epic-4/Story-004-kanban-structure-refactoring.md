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

- [x] **E4:S04:T01 – Refactor Kanban file structure (Epic-X.md → Epic-X/Epic-X.md, remove stories/ subdirectory)** ✅ COMPLETE (v0.4.4.1+1)

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

## Tasks

### E4:S04:T01 – Refactor Kanban file structure (Epic-X.md → Epic-X/Epic-X.md, remove stories/ subdirectory) {#e4s04t01--refactor-kanban-file-structure-epic-xmd--epic-xepic-xmd-remove-stories-subdirectory}

**Input:** Current Kanban structure with `epics/Epic-X.md` and `epics/Epic-X/stories/Story-XXX-*.md`  
**Deliverable:** Refactored structure with `epics/Epic-X/Epic-X.md` and `epics/Epic-X/Story-XXX-*.md`  
**Dependencies:** None  
**Blocker:** None

**Approach:**
1. Move `Epic-X.md` files into their respective `Epic-X/` directories as `Epic-X/Epic-X.md`
2. Move Story files from `Epic-X/stories/` directly into `Epic-X/`
3. Remove empty `stories/` subdirectories
4. Update all path references across all documentation:
   - Kanban board files (`_index.md`, `kboard.md`)
   - Epic and Story documents
   - Workflow Management Framework documentation
   - Numbering & Versioning Framework integration docs
   - Debug Path Framework integration docs
   - All templates (BR, FR, Epic)
   - All validators and scripts
   - All RW configuration examples
5. Update `validate_version_bump.py` to support new structure (with legacy fallback)
6. Update RW config patterns in schema and examples
7. Update policy documentation (`kanban-governance-policy.md`, `kanban/README.md`)

**Acceptance Criteria:**
- [ ] All Epic files moved to `Epic-X/Epic-X.md`
- [ ] All Story files moved from `Epic-X/stories/` to `Epic-X/`
- [ ] All empty `stories/` directories removed
- [ ] All path references updated across all frameworks
- [ ] Validators updated with legacy fallback support
- [ ] RW config patterns updated
- [ ] Policy documentation updated
- [ ] No remaining references to old structure (excluding historical changelog archives)

---

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
- `packages/frameworks/workflow mgt/config/rw-config-schema.md`
- `packages/frameworks/workflow mgt/scripts/validation/validate_version_bump.py`

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


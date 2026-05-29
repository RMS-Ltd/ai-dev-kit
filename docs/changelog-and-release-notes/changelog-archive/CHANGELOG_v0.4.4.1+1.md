---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-05T13:35:00Z
expires_at: null
housekeeping_policy: keep
---

# Changelog: v0.4.4.1+1

**Release Date:** 2025-12-05 13:35:00 UTC  
**Epic:** Epic 4 - Kanban Framework  
**Story:** Story 4 - Kanban Structure Refactoring  
**Task:** Task 1 - Refactor Kanban file structure  
**Type:** 🔧 Refactoring

---

## PLAN Phase

### Objectives
- Consolidate Kanban file structure by moving Epic files into their directories
- Remove `stories/` subdirectory to reduce navigation depth
- Update all documentation, validators, and configuration files to reflect new structure
- Ensure all frameworks are updated with new path references

### Expected Outcomes
- All Epic files at `Epic-X/Epic-X.md` (instead of `Epic-X.md`)
- All Story files at `Epic-X/Story-XXX-*.md` (instead of `Epic-X/stories/Story-XXX-*.md`)
- All path references updated across all frameworks
- Validators support new structure with legacy fallback
- Policy documentation reflects new structure

### Verification Plan
- Verify all Epic files moved to correct locations
- Verify all Story files moved to correct locations
- Verify no remaining references to old structure (excluding historical changelogs)
- Verify validators work with new structure
- Verify RW config patterns updated

---

## DO Phase

### Changed

- **Kanban File Structure Refactoring** - Consolidated all Epic-related files into single directories
  - **Epic Files:** Moved `epics/Epic-X.md` → `epics/Epic-X/Epic-X.md`
    - All Epic overview files now live inside their respective Epic directories
    - Reduces navigation depth and consolidates related files
  - **Story Files:** Moved `epics/Epic-X/stories/Story-XXX-*.md` → `epics/Epic-X/Story-XXX-*.md`
    - Removed `stories/` subdirectory entirely
    - Story files now directly in Epic directories
  - **Empty Directories:** Removed all empty `stories/` subdirectories

- **Comprehensive Documentation Updates** - Updated all path references across all frameworks
  - **Kanban Framework:**
    - Updated `kanban-governance-policy.md` with new structure
    - Updated `kanban/README.md` with new structure examples
    - Updated `FR_BR_INTAKE_GUIDE.md` with new path references
    - Updated all templates (BR, FR, Epic) with new paths
  - **Workflow Management Framework:**
    - Updated `release-workflow-agent-execution.md` with new path patterns
    - Updated `cursorrules-rw-trigger-section.md` with new fallback patterns
    - Updated `rw-installer-quickstart-guide.md` with new prompt defaults
    - Updated `rw-config-schema.md` with new default patterns
    - Updated all RW config examples (`rw-config-ai-dev-kit.yaml`, `rw-config-mode-c-full-stack.yaml`)
  - **Numbering & Versioning Framework:**
    - Updated `integration-examples-external-projects.md` with new config patterns
    - Updated `integration-troubleshooting-guide.md` with new diagnostic commands
    - Updated `kanban-workflow-integration.md` with new pattern documentation
  - **Debug Path Framework:**
    - Updated `kanban-integration.md` with new link examples
  - **KB Architecture:**
    - Updated `kb-structure-overview.md` with new task file references
    - Updated `task-naming-migration-guide.md` with new paths
    - Updated `dev-kit-versioning-cookbook.md` with new path references
    - Updated `dev-kit-versioning-policy.md` with new examples
    - Updated `dev-kit-kanban-versioning-rw-integration.md` with new references

- **Validator Updates** - Updated `validate_version_bump.py` to support new structure
  - Added new flatter structure pattern: `Epic-*/Story-*.md`
  - Maintained legacy fallback: `Epic-*/stories/Story-*.md` (for backward compatibility)
  - Updated detection priority: path extraction → Code field → content-based regex

- **Kanban Board Updates** - Updated all board views with new paths
  - Updated `_index.md` with new Story and Epic paths
  - Updated `kanban-board.md` with new path references
  - Updated Epic-4.md with new Story 4 entry

### Summary

This refactoring consolidates all Kanban files for each Epic into a single directory, reducing navigation depth and improving maintainability. All Epic overview files (`Epic-X.md`) are now inside their respective Epic directories (`Epic-X/Epic-X.md`), and Story files are directly in Epic directories without the `stories/` subdirectory.

**Impact:**
- **100+ path references updated** across all frameworks
- **All validators updated** with legacy fallback support
- **All RW config patterns updated** to reflect new structure
- **All policy documentation updated** to reflect new structure
- **Zero breaking changes** (validators support legacy paths)

---

## Technical Details

### Files Modified
- **Kanban Structure:**
  - Moved all `Epic-X.md` files to `Epic-X/Epic-X.md`
  - Moved all Story files from `Epic-X/stories/` to `Epic-X/`
  - Removed empty `stories/` directories
- **Documentation (100+ files):**
  - All Kanban framework documentation
  - All Workflow Management framework documentation
  - All Numbering & Versioning framework integration docs
  - All Debug Path framework integration docs
  - All KB Architecture documentation
  - All templates and examples
- **Validators:**
  - `validate_version_bump.py` - Updated with new structure support
- **Configuration:**
  - All RW config examples updated
  - RW config schema updated

### Version Information
- **Previous Version:** v0.3.3.6+2
- **New Version:** v0.4.4.1+1
- **Version Bump Type:** New Epic/Story/Task (EPIC: 3→4, STORY: 3→4, TASK: 6→1, BUILD: 2→1)
- **Epic Transition:** Epic 3 (complete) → Epic 4 (Story 4)

---

## Related Work

- **Epic:** Epic 4 - Kanban Framework
- **Story:** Story 4 - Kanban Structure Refactoring
- **Task:** E4:S04:T01 - Refactor Kanban file structure

---

## Notes

**Rationale:**
- Reduces navigation depth (one less directory level to browse)
- Consolidates all Epic-related files in one location
- Improves maintainability and discoverability
- Aligns with user feedback on structure simplicity

**Backward Compatibility:**
- Validators include legacy fallback support for old paths
- Historical changelog archives intentionally preserve old paths
- No breaking changes for existing workflows

**Verification:**
- ✅ All Epic files consolidated
- ✅ All Story files moved
- ✅ All path references updated (0 remaining, excluding historical archives)
- ✅ Validators updated with legacy support
- ✅ RW config patterns updated
- ✅ Policy documentation updated

---

_This changelog is part of the Release Workflow. See `packages/frameworks/workflow mgt/` for complete workflow documentation._


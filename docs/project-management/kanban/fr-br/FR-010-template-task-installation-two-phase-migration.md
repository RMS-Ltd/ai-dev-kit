---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-10T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Feature Request: Template Task Installation - Two-Phase Migration

**Type:** Feature Request (FR)  
**Submitted:** 2025-12-10  
**Submitted By:** AI Agent (Cursor) acting as user/client for dev-toolkit  
**Priority:** MEDIUM  
**Status:** PENDING  
**GitHub Issue:** [#7](https://github.com/earlution/ai-dev-kit/issues/7) (Additional Context Comment)

---

## Summary

Implement two-phase migration approach: migrate user tasks first (preserve IDs), then install template tasks after (bump IDs). This ensures reference integrity while providing template utility.

---

## Description

### What functionality is desired?

**Two-Phase Migration Approach:**

1. **Phase 1: Migrate User Tasks (Preserve IDs)**
   - Migrate all existing user tasks FIRST
   - Preserve original task IDs
   - Maintain all references (changelogs, docs, story files)
   - User tasks get priority for ID preservation

2. **Phase 2: Install Template Tasks (Bump IDs)**
   - After user tasks migrated, install template tasks
   - Template tasks get IDs AFTER user tasks
   - Example: User has E1:S01:T01-T03 → Templates start at E1:S01:T04+
   - Template tasks become actionable (not just examples)

### What problem does this solve?

**Current Problem:**
- Migration only migrates existing user tasks
- Framework template tasks are NOT installed (treated as examples only)
- Users miss utility of template tasks
- Template tasks remain as documentation/examples, not actionable items

**This Feature Solves:**
- **Reference Integrity:** Preserved (user task IDs unchanged)
- **User Experience:** Improved (users get template utility)
- **Framework Utility:** Enhanced (template tasks become actionable)
- **Migration Order:** Logical (preserve → enhance)

### What is the use case?

**Primary Use Case:** Alice migrates her Kanban structure. She has Epic 1, Story 1 with tasks T01-T03. After migration:
- Phase 1: Her tasks T01-T03 are migrated and preserved
- Phase 2: Template tasks T04-T08 are installed from canonical structure
- Result: She has both her work (T01-T03) and template tasks (T04-T08) as actionable items

### Who would benefit from this feature?

- **Users migrating to canonical structure** - Get both their work and template tasks
- **New projects** - Can leverage template tasks as starting points
- **Framework adoption** - Template tasks become actionable, not just examples

---

## Requirements

### Functional Requirements

- [ ] **FR-1:** Migration SHALL migrate user tasks first (Phase 1)
- [ ] **FR-2:** User task IDs SHALL be preserved during Phase 1
- [ ] **FR-3:** Template tasks SHALL be installed after user tasks (Phase 2)
- [ ] **FR-4:** Template task IDs SHALL start after last user task ID in each story
- [ ] **FR-5:** Template tasks SHALL be marked as actionable (not examples)
- [ ] **FR-6:** Migration report SHALL show Phase 1 and Phase 2 results separately

### Non-Functional Requirements

- [ ] **Reliability:** Phase 1 must complete successfully before Phase 2 starts
- [ ] **Usability:** Clear distinction between user tasks and template tasks
- [ ] **Transparency:** Migration report shows which tasks are user vs template

---

## Scope Analysis

**Problem Domain:** Kanban Framework Migration - Template Task Installation  
**Affected Areas:**
- [x] Migration Process
- [x] Task Installation
- [x] ID Management
- [ ] Backend/API
- [ ] Frontend/UI
- [ ] Database/Schema
- [ ] Integration/External Service

**Estimated Complexity:** Medium (Requires two-phase logic and ID bumping)

---

## Acceptance Criteria

- [ ] **AC-1:** User tasks migrated first with IDs preserved
- [ ] **AC-2:** Template tasks installed after user tasks with bumped IDs
- [ ] **AC-3:** Template task IDs start after last user task ID in each story
- [ ] **AC-4:** Migration report distinguishes user tasks from template tasks
- [ ] **AC-5:** Reference integrity maintained (user task IDs unchanged)
- [ ] **AC-6:** Template tasks marked as actionable (not examples)

---

## Dependencies

**Blocks:**
- Template task utility for users
- Enhanced framework adoption

**Blocked By:**
- FR-009: Intelligent Epic Matching (provides foundation for two-phase migration)

**Related Work:**
- **FR-009:** Intelligent Epic Matching and AI-Assisted Canonical Structure Adoption (Issue #7)
- **GitHub Issue #7:** Additional Context Comment - Template Task Installation Analysis

---

## Intake Decision

**Intake Status:** PENDING  
**Intake Date:** [TBD]  
**Intake By:** [TBD]

**Decision Flow Results:**
- [ ] Story Match: [TBD]
- [ ] New Story Created: [TBD]
- [ ] New Epic Created: [TBD]

**Assigned To:**
- Epic: [TBD]
- Story: [TBD]
- Task: [TBD]
- Version: `[TBD]`

---

## Notes

This feature request was identified from additional context provided in GitHub Issue #7 comments. The two-phase approach ensures reference integrity while providing template utility.

**Key Principle:** User tasks get priority for ID preservation, template tasks get bumped IDs.

**Impact Assessment:**
- ✅ Reference Integrity: Preserved (user task IDs unchanged)
- ✅ User Experience: Improved (users get template utility)
- ⚠️ Migration Complexity: Increased (ID bumping logic needed)
- ✅ Framework Utility: Enhanced (template tasks become actionable)

---

## References

- **FR-009:** Intelligent Epic Matching and AI-Assisted Canonical Structure Adoption (Issue #7)
- **GitHub Issue #7:** Additional Context Comment - Template Task Installation Analysis
- **Migration Script:** `packages/frameworks/kanban/scripts/migrate_structure.py`

---

_This feature request is part of the Kanban Framework. See `packages/frameworks/kanban/` for complete framework documentation._


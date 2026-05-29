---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-10T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Feature Request: Intelligent Epic Matching and AI-Assisted Canonical Structure Adoption

**Type:** Feature Request (FR)  
**Submitted:** 2025-12-10  
**Submitted By:** AI Agent (Cursor) acting as user/client for dev-toolkit  
**Priority:** HIGH  
**Status:** ACCEPTED  
**GitHub Issue:** [#7](https://github.com/earlution/ai-dev-kit/issues/7)

---

## Summary

Implement intelligent epic matching with semantic analysis and AI-assisted task migration to enable users to adopt the canonical Kanban structure while intelligently mapping their existing tasks, preserving organizational quality and leveraging proven best practices.

---

## Description

### What functionality is desired?

The Kanban framework migration process needs intelligent capabilities to:

1. **Semantic Epic Matching:** Analyze epic content (title, description, stories, tasks) to detect semantic matches, partial matches, and duplicates between user epics and canonical epics, not just number conflicts.

2. **AI-Assisted Task Migration:** Intelligently map user tasks to appropriate canonical epics/stories based on content analysis, rather than simply renumbering or preserving original locations.

3. **Intelligent Reference Updating:** Automatically update task ID references in changelogs, documentation, and story files based on intelligent task mapping.

4. **Canonical Structure Adoption (Recommended Default):** Make "Adopt Canonical Structure" the recommended migration mode, leveraging AI intelligence to minimize manual effort while achieving optimal organization.

5. **Dynamic Epic Numbering:** Install canonical epics at the next available epic number after user's last epic (not hardcoded to Epic 24).

### What problem does this solve?

**Current Problem:**
- Migration process only detects number conflicts, not semantic matches
- Users must choose between preserving task IDs (sub-optimal organization) or using canonical structure (manual migration)
- No intelligent task mapping - tasks stay in original epics even if they don't match canonical structure
- Preserving IDs + adding canonical epics creates cognitive drag (two sets of epics, unclear boundaries)

**This Feature Solves:**
- **Organizational Quality:** Users get optimal organization by adopting canonical structure
- **Intelligent Migration:** AI agents handle task mapping, reducing manual effort
- **Best Practices:** Leverages proven canonical structure evolved through real-world use
- **Reference Integrity:** Automatic reference updating where possible
- **User Experience:** Clear migration plan with recommendations and rationale

### What is the use case?

**Primary Use Case:** Alice has an existing Kanban structure with Epic 1: "Tool Management" and wants to adopt ai-dev-kit's canonical structure. The system should:
1. Analyze her Epic 1 and detect it matches Canonical Epic 8: "Codebase Maintenance" (75% semantic match)
2. Intelligently map her tasks to appropriate canonical epics/stories
3. Generate migration plan showing all mappings and rationale
4. Execute migration with automatic reference updating
5. Provide migration report for review

**Additional Use Cases:**
- User has Epic 2: "Workflow Automation" that semantically matches Canonical Epic 2: "Workflow Management Framework" → Merge intelligently
- User has Epic 3: "Versioning & Release" that partially matches multiple canonical epics → Split and map intelligently
- User has epics with same purpose but different names → Detect semantic matches and recommend merging

### Who would benefit from this feature?

- **New projects** adopting ai-dev-kit with existing Kanban structures
- **Existing projects** wanting to standardize on canonical structure
- **AI agents** automating project setup and framework integration
- **The ai-dev-kit project itself** by increasing framework adoption and organizational quality

---

## Requirements

### Functional Requirements

- [ ] **FR-1:** The framework SHALL analyze epic content (title, description, stories, tasks) for semantic matching
- [ ] **FR-2:** The framework SHALL calculate semantic similarity scores (0-100%) between user epics and canonical epics
- [ ] **FR-3:** The framework SHALL detect semantic matches (same purpose, different names), partial matches (overlapping responsibilities), and multiple matches
- [ ] **FR-4:** The framework SHALL intelligently map user tasks to appropriate canonical epics/stories based on content analysis
- [ ] **FR-5:** The framework SHALL generate migration plans with recommendations and rationale
- [ ] **FR-6:** The framework SHALL support "Adopt Canonical Structure" as the recommended default migration mode
- [ ] **FR-7:** The framework SHALL install canonical epics at the next available epic number (not hardcoded)
- [ ] **FR-8:** The framework SHALL automatically update task ID references in changelogs, docs, and story files
- [ ] **FR-9:** The framework SHALL generate migration reports showing all changes and un-updatable references
- [ ] **FR-10:** The framework SHALL present migration plans to users with clear recommendations and trade-offs

### Non-Functional Requirements

- [ ] **Performance:** Semantic analysis should be efficient for large Kanban structures
- [ ] **Reliability:** Migration process must be robust and prevent data loss
- [ ] **Usability:** Migration plan presentation should be clear and actionable
- [ ] **Intelligence:** Task mapping should be contextually aware and accurate
- [ ] **Transparency:** All recommendations must include rationale

---

## Scope Analysis

**Problem Domain:** Kanban Framework Migration - Intelligent Epic Matching and Task Migration  
**Affected Areas:**
- [x] Migration Process
- [x] Epic Analysis
- [x] Task Mapping
- [x] Reference Updating
- [x] User Interface
- [ ] Backend/API
- [ ] Frontend/UI
- [ ] Database/Schema
- [ ] Integration/External Service

**Estimated Complexity:** Very Complex (Requires semantic analysis, intelligent task mapping, reference updating, and comprehensive user interaction)

---

## Acceptance Criteria

- [ ] **AC-1:** Semantic analysis can detect epic matches based on content (title, description, stories, tasks)
- [ ] **AC-2:** Match scores (0-100%) accurately reflect semantic similarity
- [ ] **AC-3:** System can detect exact matches (90-100%), semantic matches (70-89%), partial matches (40-69%), and no matches (&lt;40%)
- [ ] **AC-4:** Task mapping intelligently places user tasks in appropriate canonical epics/stories
- [ ] **AC-5:** Migration plans include recommendations with clear rationale
- [ ] **AC-6:** "Adopt Canonical Structure" is the recommended default mode
- [ ] **AC-7:** Canonical epics install at next available epic number (dynamic, not hardcoded)
- [ ] **AC-8:** Task ID references automatically updated in changelogs, docs, and story files
- [ ] **AC-9:** Migration reports show all changes and identify un-updatable references
- [ ] **AC-10:** User interface clearly presents migration plans with recommendations and trade-offs

---

## Dependencies

**Blocks:**
- Optimal organizational structure adoption
- Intelligent task migration
- Reduced manual migration effort

**Blocked By:**
- None

**Related Work:**
- **BR-006:** Missing Migration Support for Pre-Existing Kanban Structures (Issue #2)
- **FR-007:** Migration Utilities and Installation Modes (Issue #3)
- **UXR-001:** Migration User Experience Research (Issue #4)
- **UXR-002:** Comprehensive UAT of Migration Utilities (Issue #6)
- **UXR-003:** Intelligent Epic Matching and Canonical Adoption UAT (Issue #8)
- **Design Decision:** `DESIGN_DECISION-task-id-preservation-vs-canonical-epic-structure-REFINED.md`

---

## Intake Decision

**Intake Status:** ACCEPTED  
**Intake Date:** 2025-12-10  
**Intake By:** AI Agent (Cursor)

**Decision Flow Results:**
- [ ] Story Match: [TBD - New Story needed]
- [x] New Story Created: Epic 4, Story 8 → Task 1
- [ ] New Epic Created: [N/A]

**Assigned To:**
- Epic: Epic 4 (Kanban Framework)
- Story: Story 8 (Intelligent Epic Matching and Canonical Adoption) - TO BE CREATED
- Task: Task 1 (FR-009: Semantic epic matching implementation)
- Version: `[TBD]`

**Kanban Links:**
- Epic: [`Epic-4.md`](../epics/Epic-4/Epic-4.md)
- Story: [`Story-008-intelligent-epic-matching-canonical-adoption.md`](../epics/Epic-4/Story-008-intelligent-epic-matching-canonical-adoption.md) - TO BE CREATED
- Task: [TBD]

---

## Notes

This feature request is based on comprehensive design decision analysis and UAT findings. The key insight is that preserving task IDs while adding canonical epics creates sub-optimal organization and cognitive drag. The recommended approach is to adopt canonical structure with AI-assisted intelligent migration.

**Key Design Principles:**
1. Canonical structure has evolved through real-world use and incorporates best practices
2. AI agents can intelligently migrate tasks, minimizing manual effort
3. Optimal organization is more valuable than preserving sub-optimal structure
4. Some renumbering is almost inevitable - better to do it intelligently

### Additional Context from GitHub Comments

**From Issue #7 Comments:**

1. **Match Decision Matrix:**
   - Different scenarios require different actions based on match type + number conflict
   - Exact match (90-100%) + number conflict → MERGE (preserve task IDs)
   - Semantic match (70-89%) + number conflict → MERGE or RENUMBER (depends on choice)
   - Partial match (40-69%) → USER DECIDES (split, merge, or keep both)
   - No match (&lt;40%) + number conflict → RENUMBER (task IDs change)

2. **Template Task Installation (Two-Phase Migration):**
   - **Phase 1:** Migrate user tasks FIRST (preserve IDs)
   - **Phase 2:** Install template tasks AFTER (bump IDs - templates start after user tasks)
   - Example: User has E1:S01:T01-T03 → Templates start at E1:S01:T04+
   - **Status:** NOT YET IMPLEMENTED - Requires follow-up task

3. **Task Splitting Scenarios:**
   - **Scenario 2:** User epic partially matches multiple canonical epics → Split tasks across epics
   - Example: "Versioning & Release Workflow" → Split between Epic 2 (Workflow) and Epic 3 (Versioning)
   - **Status:** PARTIALLY IMPLEMENTED - Currently only maps to "best" match, doesn't split

4. **Edge Cases:**
   - Multiple canonical matches for one user epic → Present all matches, user chooses
   - User epic matches multiple canonical (same number) → Recommend split or merge
   - Canonical epic matches multiple user epics → Present both matches, user chooses

**Implementation Status:**
- ✅ Core semantic matching implemented
- ✅ Intelligent task mapping to single canonical epic implemented
- ⚠️ Task splitting across multiple canonical epics (partial - needs enhancement)
- ❌ Template task installation (two-phase migration) - NOT YET IMPLEMENTED
- ⚠️ Match decision matrix logic (basic - needs enhancement for edge cases)

---

## References

- **Design Decision:** `docs/project-management/kanban/fr-br/DESIGN_DECISION-task-id-preservation-vs-canonical-epic-structure-REFINED.md`
- **BR-006:** Missing Migration Support for Pre-Existing Kanban Structures (Issue #2)
- **FR-007:** Migration Utilities and Installation Modes (Issue #3)
- **UXR-001:** Migration User Experience Research (Issue #4)
- **UXR-002:** Comprehensive UAT of Migration Utilities (Issue #6)
- **UXR-003:** Intelligent Epic Matching and Canonical Adoption UAT (Issue #8)
- **Migration Script:** `packages/frameworks/kanban/scripts/migrate_structure.py`
- **Analysis Script:** `packages/frameworks/kanban/scripts/analyze_structure.py`

---

_This feature request is part of the Kanban Framework. See `packages/frameworks/kanban/` for complete framework documentation._


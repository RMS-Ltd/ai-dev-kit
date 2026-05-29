---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-10T16:40:00Z
expires_at: null
housekeeping_policy: keep
---

# Story 8: Intelligent Epic Matching and Canonical Structure Adoption

**Status:** IN PROGRESS
**Priority:** HIGH  
**Estimated Effort:** [TBD]  
**Last updated:** 2026-04-09 (v0.4.8.7+2 – Kanban documentation setup)
**Version:** v0.4.8.7+2
**Code:** E4S08

---

## Goal

Implement intelligent epic matching with semantic analysis and AI-assisted task migration to enable users to adopt the canonical Kanban structure while intelligently mapping their existing tasks, preserving organizational quality and leveraging proven best practices.

---

## Tasks

- [x] **E4:S08:T00 – Story creation and FR-009, UXR-002, UXR-003 intake** ✅ COMPLETE (v0.4.8.0+1)
  - Created Story 8: Intelligent Epic Matching and Canonical Structure Adoption
  - Intake FR-009: Intelligent Epic Matching and AI-Assisted Canonical Structure Adoption (GitHub issue #7)
  - Intake UXR-002: Comprehensive UAT of Migration Utilities (GitHub issue #6)
  - Intake UXR-003: Intelligent Epic Matching and Canonical Adoption UAT (GitHub issue #8)
  - Created local Kanban documents for all three submissions
  - Assigned FR-009 to Epic 4 Story 8
  - Assigned UXR-002 and UXR-003 to Epic 7 Story 5 for synthesis
  - Commented on all GitHub issues with internal Kanban links
  - **Acceptance:** ✅ All intake complete, Story 8 created with 6 implementation tasks


- [x] **E4:S08:T01 – FR-009: Semantic epic matching implementation** ✅ COMPLETE (v0.4.8.1+1)
  - Created `semantic_matcher.py` with semantic analysis capabilities
  - Implemented similarity score calculation (0-100%) using Jaccard similarity on word tokens
  - Added match classification (exact, semantic, partial, no match)
  - Updated `analyze_structure.py` to perform semantic matching against canonical epics
  - Loads canonical epic definitions from COMPREHENSIVE_CANONICAL_EST_STRUCTURE.md
  - **Linked FR:** `FR-009-intelligent-epic-matching-ai-assisted-canonical-adoption.md` (GitHub issue #7)  
  - **Acceptance:** ✅ AC-1, AC-2, AC-3 of FR-009 satisfied.


- [x] **E4:S08:T02 – FR-009: Intelligent task mapping implementation** ✅ COMPLETE (v0.4.8.2+1)
  - Implemented intelligent task mapping in `_adopt_canonical_structure()` method
  - Maps user tasks to canonical epics/stories based on semantic matches (≥80% similarity)
  - Generates migration plans with recommendations and rationale
  - Updated `migrate_structure.py` with intelligent task mapping for canonical_adoption mode
  - **Linked FR:** FR-009  
  - **Acceptance:** ✅ AC-4, AC-5 of FR-009 satisfied.


- [x] **E4:S08:T03 – FR-009: Canonical adoption as default mode** ✅ COMPLETE (v0.4.8.3+1)
  - Made "canonical_adoption" the recommended default when semantic matches found (≥50% of epics with ≥80% similarity)
  - Implemented dynamic epic numbering (`_find_next_available_epic_number()` with start_from parameter)
  - Updated installation script to include canonical_adoption mode and recommend it
  - Added recommendation rationale generation
  - **Linked FR:** FR-009  
  - **Acceptance:** ✅ AC-6, AC-7 of FR-009 satisfied.


- [x] **E4:S08:T04 – FR-009: Automatic reference updating** ✅ COMPLETE (v0.4.8.4+1)
  - Created `reference_updater.py` for automatic task ID reference updating
  - Updates references in changelogs, docs, and story files (E\{epic\}:S\{story\}:T\{task\} pattern)
  - Generates migration reports showing all changes and un-updatable references
  - Integrated into `migrate_structure.py` migration workflow
  - **Linked FR:** FR-009  
  - **Acceptance:** ✅ AC-8, AC-9 of FR-009 satisfied.


- [x] **E4:S08:T05 – FR-009: Migration plan presentation** ✅ COMPLETE (v0.4.8.5+1)
  - Implemented `present_migration_plan()` function in install script
  - Shows semantic matches (high and medium similarity)
  - Displays conflicts, recommendations, and rationale
  - Presents mode comparison with trade-offs
  - Integrated into installation workflow before mode selection
  - **Linked FR:** FR-009  
  - **Acceptance:** ✅ AC-10 of FR-009 satisfied.


- [x] **E4:S08:T06 – Documentation and guides update** ✅ COMPLETE (v0.4.8.6+1)
  - Updated `scripts/README.md` with semantic matching documentation
  - Documented canonical_adoption mode and when to use it
  - Added semantic matching examples and match classification guide
  - Documented reference updating capabilities
  - Added examples of semantic matching and intelligent migration workflow
  - **Linked FR:** FR-009  
  - **Acceptance:** ✅ Documentation updated with semantic matching and intelligent migration guidance.


- [ ] **E4:S08:T07 – FR-011: Task splitting across multiple canonical epics** - TODO
  - Implement multi-epic split logic when one source epic maps across several canonical epics.
  - Generate explainable split plans and deterministic reference updates per split task.
  - **Linked FR:** FR-011
  - **Acceptance:** FR-011 requirements and ACs mapped to executable split workflow.


---

## Implementation Notes

### Additional Requirements from GitHub Comments

**From Issue #7 Additional Context:**

1. **Template Task Installation (Two-Phase Migration):**
   - Phase 1: Migrate user tasks first (preserve IDs)
   - Phase 2: Install template tasks after (bump IDs - templates start after user tasks)
   - **Status:** IN PROGRESS

2. **Task Splitting Across Multiple Canonical Epics:**
   - When user epic partially matches multiple canonical epics, split tasks intelligently
   - Example: "Versioning & Release Workflow" → Split between Epic 2 and Epic 3
   - **Status:** IN PROGRESS

3. **Enhanced Match Decision Logic:**
   - Match decision matrix with different actions based on match type + number conflict
   - Edge case handling: multiple matches, same-number conflicts, etc.
   - **Status:** IN PROGRESS

**Recommended Follow-Up:**
- Create new task or story for template task installation (two-phase migration)
- Enhance task splitting logic for partial matches across multiple canonical epics
- Implement full match decision matrix with all edge cases

## References

- FR-009: `docs/project-management/kanban/fr-br/FR-009-intelligent-epic-matching-ai-assisted-canonical-adoption.md`
- UXR-002: `docs/project-management/kanban/fr-br/UXR-002-comprehensive-uat-migration-utilities.md`
- UXR-003: `docs/project-management/kanban/fr-br/UXR-003-intelligent-epic-matching-canonical-adoption-uat.md`
- Design Decision: `docs/project-management/kanban/fr-br/DESIGN_DECISION-task-id-preservation-vs-canonical-epic-structure-REFINED.md`
- GitHub Issue #7: Additional context comments (Match Decision Matrix, Template Task Installation, Detailed Scenarios)

## Related Work

- **FR-009:** Intelligent Epic Matching and AI-Assisted Canonical Structure Adoption (this story)
- **FR-019:** Intake Workflow Automation (uses semantic matching from this story for decision flow analysis)
- **E2:S11:** Intake Workflow Automation (leverages semantic matching for Epic/Story/Task placement)

---

**Template Usage:** Story follows Kanban framework story template; Tasks trace to FR for forensic linkage.


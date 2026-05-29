---
lifecycle: evergreen
ttl_days: null
created_at: 2025-01-27T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Feature Request: Migration Utilities and Installation Modes for Pre-Existing Kanban Structures

**Type:** Feature Request (FR)  
**Submitted:** 2025-01-27  
**Submitted By:** AI Agent (Cursor) acting as user/client for dev-toolkit  
**Priority:** HIGH  
**Status:** ACCEPTED  

**Implementing Task:** [E4:S07:T02](../epics/Epic-4/Story-007-migration-support-and-installation-modes.md)
**GitHub Issue:** [#3](https://github.com/earlution/ai-dev-kit/issues/3)

---

## Summary

Add migration utilities and installation modes to the Kanban framework to support projects with pre-existing Kanban (or Sprint/Agile) structures, enabling safe adoption without data loss.

---

## Description

### What Functionality is Desired?

**Migration Utilities:**
1. **Detection Utility:** Scan and detect existing Kanban structures
2. **Analysis Utility:** Analyze existing structure and map to E/S/T format
3. **Migration Utility:** Migrate existing work items to canonical structure
4. **Preservation Utility:** Backup and preserve existing work during migration

**Installation Modes:**
1. **Fresh Install:** Current behavior (assumes clean slate)
2. **Migration Install:** Detect existing structure and migrate it
3. **Update Install:** Update existing framework installation
4. **Hybrid Install:** Preserve project epics, install framework epics

### What Problem Does This Solve?

**Current Problems:**
- Projects with existing Kanban cannot safely adopt framework
- Risk of overwriting existing work during installation
- No migration path from existing systems (Kanban, Sprints, Issues)
- Manual migration required (error-prone, time-consuming)
- Framework adoption barriers for real-world projects

**Solution:**
- Detection utilities identify existing structures
- Analysis utilities map existing work to E/S/T format
- Migration utilities convert existing items safely
- Installation modes support different scenarios
- Framework becomes adoptable by projects with existing Kanban

### What is the Use Case?

**Primary Use Case:**
A project (dev-toolkit) has an existing Kanban structure with completed work. The project wants to adopt the ai-dev-kit Kanban framework but needs to preserve existing work and migrate it to the canonical E/S/T structure.

**Additional Use Cases:**
1. **Sprint Migration:** Project with Sprint-based system wants to migrate to E/S/T Kanban
2. **Issue Tracker Migration:** Project using GitHub Issues/Jira wants to migrate to E/S/T Kanban
3. **Framework Update:** Project updating from older framework version needs structure migration
4. **Mixed Structure:** Project with mix of Kanban/Sprints/Issues wants unified E/S/T structure

### Who Would Benefit from This Feature?

**Primary Beneficiaries:**
- Projects with existing Kanban systems
- Projects migrating from Sprint-based systems
- Projects with issue tracker integration
- Projects updating framework versions
- AI agents automating Kanban setup

**Secondary Beneficiaries:**
- Framework adoption (removes barriers)
- Framework credibility (handles real-world scenarios)
- User experience (smooth migration process)

---

## Requirements

### Functional Requirements

- [ ] **FR-1:** Detection utility can scan for existing Kanban structures
  - Scan epic directories
  - Detect epic documents
  - Identify story documents
  - Report findings


- [ ] **FR-2:** Analysis utility can map existing work to E/S/T structure
  - Map existing epics to canonical format
  - Map existing stories to canonical format
  - Map existing tasks to canonical format
  - Identify conflicts and gaps


- [ ] **FR-3:** Migration utility can convert existing items to canonical structure
  - Preserve existing content
  - Convert to canonical format
  - Preserve forensic markers
  - Preserve work history


- [ ] **FR-4:** Installation modes support different scenarios
  - Fresh Install mode (current behavior)
  - Migration Install mode (detect and migrate)
  - Update Install mode (update existing framework)
  - Hybrid Install mode (preserve project epics, install framework epics)


- [ ] **FR-5:** Preservation utility backs up existing work
  - Create backup before migration
  - Preserve complete structure
  - Enable rollback if needed


### Non-Functional Requirements

- [ ] **NFR-1:** Performance: Detection completes in < 5 seconds for typical structures
- [ ] **NFR-2:** Security: Backups preserve file permissions and metadata
- [ ] **NFR-3:** Usability: Interactive mode selection with clear prompts
- [ ] **NFR-4:** Compatibility: Supports migration from common Kanban/Sprint systems
- [ ] **NFR-5:** Reliability: Migration preserves all work items and forensic markers

---

## Scope Analysis

**Problem Domain:** Kanban Framework Installation and Migration  
**Affected Areas:**
- [x] Installation Process
- [x] Migration Utilities
- [x] Detection Mechanisms
- [x] Documentation
- [ ] Backend/API
- [ ] Frontend/UI
- [ ] Database/Schema
- [ ] Testing

**Estimated Complexity:**
- [ ] Simple (1-3 days)
- [ ] Medium (1 week)
- [x] Complex (2+ weeks)
- [ ] Very Complex (1+ month)

**Rationale:** Multiple utilities needed, multiple installation modes, comprehensive testing required, documentation updates needed.

---

## Use Cases

### Primary Use Case: Pre-Existing Kanban Migration

**Actor:** Project with existing Kanban structure  
**Goal:** Adopt ai-dev-kit Kanban framework while preserving existing work  
**Steps:**
1. Run detection utility to identify existing structure
2. Run analysis utility to map existing work to E/S/T
3. Review migration plan
4. Run migration utility to convert existing items
5. Verify migration success
6. Continue using framework

**Success Criteria:**
- All existing work preserved
- All work items migrated to canonical format
- No data loss
- Framework ready for use

### Additional Use Cases

**Use Case 2: Sprint-Based Migration**
- Project with Sprint system wants to migrate to E/S/T Kanban
- Detection utility identifies Sprint structure
- Analysis utility maps Sprints to Epics, Sprint items to Stories
- Migration utility converts to E/S/T format

**Use Case 3: Issue Tracker Migration**
- Project using GitHub Issues wants to migrate to E/S/T Kanban
- Detection utility identifies Issues structure
- Analysis utility maps Issues to Tasks, Issue labels to Epics/Stories
- Migration utility converts to E/S/T format

**Use Case 4: Framework Update**
- Project updating from older framework version
- Detection utility identifies existing framework structure
- Analysis utility maps to new structure
- Migration utility updates to new format

---

## Acceptance Criteria

- [ ] **AC-1:** Detection utility (`detect_existing_structure.py`) can scan and detect existing Kanban structures
- [ ] **AC-2:** Analysis utility (`analyze_structure.py`) can map existing work to E/S/T format
- [ ] **AC-3:** Migration utility (`migrate_structure.py`) can convert existing items to canonical structure
- [ ] **AC-4:** Installation process supports mode selection (Fresh, Migration, Update, Hybrid)
- [ ] **AC-5:** Migration preserves all existing work items and forensic markers
- [ ] **AC-6:** Migration utilities documented with examples
- [ ] **AC-7:** Installation guide updated with migration scenarios
- [ ] **AC-8:** Migration utilities tested with multiple scenarios (Kanban, Sprint, Issues)

---

## Dependencies

**Blocks:**
- Safe framework adoption for projects with existing Kanban
- Migration from Sprint-based systems
- Migration from issue trackers
- Framework updates without data loss

**Blocked By:**
- BR-006: Missing Migration Support (identifies the problem this FR solves)

**Related Work:**
- **BR-006:** Missing Migration Support for Pre-Existing Kanban Structures (problem statement) - See `BR-006-missing-migration-support-pre-existing-kanban.md`
- **UXR-001:** Migration User Experience Research (validates approach) - See `UXR-001-migration-user-experience-research.md`
- Framework: `packages/frameworks/kanban/README.md`
- Gap Analysis: `docs/project-management/kanban/_backup-pre-migration/INSTALLATION_GAP_ANALYSIS.md`

---

## Intake Decision

**Intake Status:** ACCEPTED  
**Intake Date:** 2025-12-10  
**Intake By:** AI Agent (Cursor)

**Decision Flow Results:**
- [x] Story Match Found: Epic 4, Story 7 → Task 2
- [ ] New Story Created: [Epic X, Story Y] → Task 1
- [ ] New Epic Created: [Epic X, Story 1, Task 1]

**Assigned To:**
- Epic: Epic 4 (Kanban Framework)
- Story: Story 7 (Migration Support and Installation Modes) - TO BE CREATED
- Task: Task 2 (FR-007: Migration utilities implementation)
- Version: `[TBD]`

**Kanban Links:**
- Epic: [`Epic-4.md`](../epics/Epic-4/Epic-4.md)
- Story: [`Story-007-migration-support-and-installation-modes.md`](../epics/Epic-4/Story-007-migration-support-and-installation-modes.md) - TO BE CREATED
- Task: [TBD]

---

## Notes

### Implementation Approach

**Phase 1: Detection (Critical)**
- Create `detect_existing_structure.py`
- Scan for epic directories and documents
- Generate detection report

**Phase 2: Analysis (Critical)**
- Create `analyze_structure.py`
- Map existing items to E/S/T
- Generate migration plan

**Phase 3: Migration (High Priority)**
- Create `migrate_structure.py`
- Convert existing items to canonical format
- Preserve forensic markers

**Phase 4: Installation Modes (High Priority)**
- Update installation process
- Add mode selection
- Implement mode-specific paths

**Phase 5: Documentation (Medium Priority)**
- Update installation guide
- Document migration utilities
- Provide migration examples

### Migration Scenarios Supported

1. **Simple Kanban:** Basic Kanban board → E/S/T structure
2. **Sprint-Based:** Sprint system → E/S/T structure
3. **Issue Tracker:** GitHub Issues/Jira → E/S/T structure
4. **Mixed Structure:** Mix of systems → E/S/T structure
5. **Framework Update:** Older version → New structure

---

## References

- **Related BR:** Missing Migration Support for Pre-Existing Kanban Structures (BR-006)
- **Related UXR:** Migration User Experience Research (UXR-001)
- **Framework README:** `packages/frameworks/kanban/README.md`
- **Gap Analysis:** `docs/project-management/kanban/_backup-pre-migration/INSTALLATION_GAP_ANALYSIS.md`
- **Migration Plan:** `docs/project-management/kanban/_backup-pre-migration/MIGRATION_PLAN.md`
- **GitHub Issue:** [#3](https://github.com/earlution/ai-dev-kit/issues/3)

---

**Template Usage:**
- This FR follows the Kanban Framework FR template
- Comprehensive feature description included
- Clear acceptance criteria provided
- Implementation approach outlined

---

_This feature request is part of the Kanban Framework. See `packages/frameworks/kanban/` for complete framework documentation._


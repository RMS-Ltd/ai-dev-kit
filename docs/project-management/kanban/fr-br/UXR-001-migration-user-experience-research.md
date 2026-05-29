---
lifecycle: evergreen
ttl_days: null
created_at: 2025-01-27T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# User Experience Research: Migration from Pre-Existing Kanban Structures

**Type:** User Experience Research (UXR)  
**Submitted:** 2025-01-27  
**Submitted By:** AI Agent (Cursor) acting as user/client for dev-toolkit  
**Priority:** MEDIUM  
**Status:** ACCEPTED  
**GitHub Issue:** [#4](https://github.com/earlution/ai-dev-kit/issues/4)  
**Repository Task:** [E7:S00:T01](../epics/Epic-7/Story-000-uxr-repo/T01-uxr-001-repository-anchor.md)  
**Implementation (synthesis):** [E7:S05:T01](../epics/Epic-7/Story-005-migration-uxr-research.md) — see Story 5 **T01**

---

## Summary

Research findings from migrating dev-toolkit's pre-existing Kanban structure to ai-dev-kit Kanban framework reveal critical user experience gaps in framework installation process, migration workflows, and handling of existing work items.

---

## Research Objective

**Primary Question:** What are the user experience challenges when migrating from pre-existing Kanban (or Sprint/Agile) structures to the ai-dev-kit Kanban framework?

**Secondary Questions:**
1. What existing Kanban structures are common?
2. What are the pain points in migration?
3. What user workflows are needed for migration?
4. How should migration utilities be designed?
5. What installation modes are needed?

---

## Methodology

**Research Method:** User Acceptance Testing (UAT) - Real-world migration scenario  
**Participants:** AI Agent (Cursor) acting as user/client for dev-toolkit project  
**Duration:** Single session (2025-01-27)  
**Tools/Platforms:** Cursor IDE, Git, GitHub CLI

**Research Details:**
- **Scenario:** Migrating dev-toolkit's pre-existing Kanban structure
- **Existing Structure:** Epic 1 with 2 complete stories (Tool Management)
- **User Action:** Requested Kanban structure setup using updated framework
- **Observation:** Framework cannot handle pre-existing structures
- **Documentation:** Comprehensive gap analysis and migration documentation created

**Research Context:**
- Real project with real work items
- Actual migration attempt (not simulated)
- Complete documentation of process and gaps
- UAT findings documented as bug reports and feature requests

---

## Key Findings

### Finding 1: Framework Assumes Fresh Install Only

**Finding:** Framework installation process assumes no existing Kanban structure exists.  
**Evidence:**
- Installation steps in README assume clean slate
- No detection utilities for existing structures
- No migration utilities available
- No installation mode selection

**Impact:** Projects with existing Kanban cannot safely adopt framework.

### Finding 2: No Detection of Existing Structures

**Finding:** Framework cannot detect existing Kanban structures before installation.  
**Evidence:**
- No utilities to scan for existing epics/stories
- No analysis of existing work items
- No identification of conflicts
- Installation proceeds blindly

**Impact:** Risk of overwriting existing work if installed naively.

### Finding 3: No Migration Path Available

**Finding:** Framework provides no utilities to migrate existing work items.  
**Evidence:**
- No epic migration utilities
- No story migration utilities
- No task migration utilities
- No preservation of forensic markers

**Impact:** Manual migration required (error-prone, time-consuming).

### Finding 4: Framework Examples Confused with Project Epics

**Finding:** Framework examples (Epic 2-9) mixed with project epics (Epic 1).  
**Evidence:**
- Epic 2-9 are ai-dev-kit framework epics
- Epic 1 is dev-toolkit project epic
- No clear separation between project and framework epics
- Confusion about what belongs to project vs framework

**Impact:** Users cannot distinguish project work from framework examples.

### Finding 5: Installation Process Doesn't Match Real-World Scenarios

**Finding:** Framework installation designed for ideal scenario (fresh install) only.  
**Evidence:**
- Real projects have existing structures
- Multiple migration scenarios needed (Kanban, Sprint, Issues)
- Framework doesn't address common use cases
- Adoption barriers for real-world projects

**Impact:** Framework appears incomplete for real-world use.

---

## User Pain Points

### Pain Point 1: Risk of Data Loss

**Pain:** Installing framework over existing structure risks overwriting work.  
**Impact:** Users hesitate to adopt framework, fear losing work.  
**Frequency:** High (affects all projects with existing Kanban)

### Pain Point 2: Manual Migration Required

**Pain:** No automated migration utilities, must migrate manually.  
**Impact:** Time-consuming, error-prone, requires deep framework knowledge.  
**Frequency:** High (affects all migration scenarios)

### Pain Point 3: No Clear Migration Path

**Pain:** Framework doesn't provide guidance on how to migrate existing work.  
**Impact:** Users don't know where to start, migration feels risky.  
**Frequency:** High (affects all projects with existing structures)

### Pain Point 4: Confusion About Project vs Framework Epics

**Pain:** Framework examples mixed with project epics, unclear what's what.  
**Impact:** Users confused about project structure, don't know what to preserve.  
**Frequency:** Medium (affects projects with framework examples)

### Pain Point 5: Installation Process Doesn't Match Expectations

**Pain:** Framework installation assumes fresh install, but real projects have existing structures.  
**Impact:** Framework feels incomplete, adoption barriers.  
**Frequency:** High (affects most real-world projects)

---

## Recommendations

### Recommendation 1: Add Detection Utilities (HIGH PRIORITY)

**Action:** Create `detect_existing_structure.py` utility  
**Rationale:** Framework must detect existing structures before installation  
**Impact:** Prevents data loss, enables safe installation

**Implementation:**
- Scan for epic directories
- Detect epic documents
- Identify story documents
- Generate detection report

### Recommendation 2: Add Analysis Utilities (HIGH PRIORITY)

**Action:** Create `analyze_structure.py` utility  
**Rationale:** Framework must understand existing structure before migration  
**Impact:** Enables informed migration decisions

**Implementation:**
- Map existing epics to canonical format
- Map existing stories to canonical format
- Map existing tasks to canonical format
- Identify conflicts and gaps

### Recommendation 3: Add Migration Utilities (HIGH PRIORITY)

**Action:** Create `migrate_structure.py` utility  
**Rationale:** Framework must migrate existing work to canonical structure  
**Impact:** Enables safe migration without data loss

**Implementation:**
- Backup existing structure
- Migrate epics to canonical format
- Migrate stories to canonical format
- Migrate tasks to canonical format
- Preserve forensic markers

### Recommendation 4: Add Installation Modes (HIGH PRIORITY)

**Action:** Support multiple installation modes  
**Rationale:** Different scenarios need different installation approaches  
**Impact:** Framework becomes adoptable by projects with existing structures

**Implementation:**
- Fresh Install mode (current behavior)
- Migration Install mode (detect and migrate)
- Update Install mode (update existing framework)
- Hybrid Install mode (preserve project epics, install framework epics)

### Recommendation 5: Separate Project Epics from Framework Examples (MEDIUM PRIORITY)

**Action:** Clear separation and identification  
**Rationale:** Users confused about what belongs to project vs framework  
**Impact:** Clearer project structure, easier maintenance

**Implementation:**
- Mark framework examples clearly
- Separate project epics from framework examples
- Provide guidance on what to preserve

### Recommendation 6: Update Documentation (MEDIUM PRIORITY)

**Action:** Update installation guide with migration scenarios  
**Rationale:** Users need guidance on migration process  
**Impact:** Easier adoption, clearer expectations

**Implementation:**
- Document migration scenarios
- Provide migration examples
- Update installation guide

**Priority Order:**
1. Detection Utilities (enables all other recommendations)
2. Analysis Utilities (enables informed migration)
3. Migration Utilities (enables safe migration)
4. Installation Modes (enables different scenarios)
5. Separation of Project vs Framework (improves clarity)
6. Documentation Updates (improves usability)

---

## Affected Areas

**Affected Components:**
- [x] Installation Process
- [x] Migration Utilities
- [x] Detection Mechanisms
- [x] Documentation
- [ ] UI Components
- [ ] User Flows
- [ ] Features

**Specific Areas:**
- Framework installation process
- Kanban structure setup
- Epic/Story/Task creation workflows
- Migration workflows
- Framework adoption process

---

## Supporting Evidence

**Research Artifacts:**
- Gap Analysis: `docs/project-management/kanban/_backup-pre-migration/INSTALLATION_GAP_ANALYSIS.md`
- Migration Plan: `docs/project-management/kanban/_backup-pre-migration/MIGRATION_PLAN.md`
- Migration Approach: `docs/project-management/kanban/_backup-pre-migration/MIGRATION_APPROACH.md`
- Task Migration Map: `docs/project-management/kanban/_backup-pre-migration/TASK_MIGRATION_MAP.md`
- BR-006: Missing Migration Support
- FR-007: Migration Utilities and Installation Modes

**Quotes or Examples:**
- "I want you to setup our Kanban structure, using the [updated] Kanban pack from ai-dev-kit" - User request
- "this STILL isnt working. But that is good, as it means the structure isnt perfect." - User feedback
- "I wonder if the issue is that we have an extant Kanban struct, that does not align with the kanban struct from ai-dev-kit." - User insight

---

## Migration Scenarios Identified

### Scenario 1: Simple Kanban Migration

**Existing:** Basic Kanban board with epics/stories  
**Challenge:** Map to E/S/T structure  
**Required:** Epic/Story mapping utilities

### Scenario 2: Sprint-Based Migration

**Existing:** Sprint-based agile system  
**Challenge:** Convert sprints to epics/stories  
**Required:** Sprint-to-Epic conversion utilities

### Scenario 3: Issue Tracker Migration

**Existing:** GitHub Issues, Jira, etc.  
**Challenge:** Convert issues to E/S/T structure  
**Required:** Issue-to-Task conversion utilities

### Scenario 4: Mixed Structure Migration

**Existing:** Mix of Kanban, Sprints, Issues  
**Challenge:** Unified migration to E/S/T  
**Required:** Multi-source migration utilities

### Scenario 5: Framework Update Migration

**Existing:** Older framework version  
**Challenge:** Update to new structure  
**Required:** Version-to-version migration utilities

---

## Next Steps

**Immediate Actions:**
1. File BR-006: Missing Migration Support (problem statement)
2. File FR-007: Migration Utilities and Installation Modes (solution)
3. File UXR-001: This document (research findings)

**Future Research:**
- Validate migration utilities with multiple projects
- Test migration scenarios (Kanban, Sprint, Issues)
- Gather user feedback on migration process
- Refine migration utilities based on feedback

---

## Intake Decision

**Intake Status:** ACCEPTED  
**Intake Date:** 2025-12-10  
**Intake By:** AI Agent (Cursor)

**Decision Flow Results:**
- [x] Story Match Found: Epic 7, Story 1 → Task 1
- [ ] New Story Created: [Epic X, Story Y] → Task 1
- [ ] New Epic Created: [Epic X, Story 1, Task 1]

**Assigned To:**
- Epic: Epic 7 (UXR repo + maintenance epic)
- Story: **E7:S00** (UXR repository story)
- Task: **E7:S00:T01** (UXR-001 registry task)
- Version: `v0.7.0.1+1` (task filed 2026-03-31)

**Kanban Links:**
- Epic: [`Epic-7.md`](../epics/Epic-7/Epic-7.md)
- Story: [`Story-000-uxr-repo.md`](../epics/Epic-7/Story-000-uxr-repo.md)
- Task: [`T01-uxr-001-repository-anchor.md`](../epics/Epic-7/Story-000-uxr-repo/T01-uxr-001-repository-anchor.md)
- Synthesis (historical): [`Story-005-migration-uxr-research.md`](../epics/Epic-7/Story-005-migration-uxr-research.md) (**E7:S05:T01**)

---

## References

- **BR-006:** Missing Migration Support for Pre-Existing Kanban Structures - See `BR-006-missing-migration-support-pre-existing-kanban.md`
- **FR-007:** Migration Utilities and Installation Modes - See `FR-007-migration-utilities-and-installation-modes.md`
- **Framework README:** `packages/frameworks/kanban/README.md`
- **Gap Analysis:** `docs/project-management/kanban/_backup-pre-migration/INSTALLATION_GAP_ANALYSIS.md`
- **Migration Documentation:** `docs/project-management/kanban/_backup-pre-migration/`
- **GitHub Issue:** [#4](https://github.com/earlution/ai-dev-kit/issues/4)

---

**Template Usage:**
- This UXR follows the Kanban Framework UXR template
- Real-world migration scenario documented
- Comprehensive findings and recommendations
- Clear priority order for recommendations

---

_This user experience research is part of the Kanban Framework. See `packages/frameworks/kanban/` for complete framework documentation._


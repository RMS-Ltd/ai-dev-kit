---
lifecycle: evergreen
ttl_days: null
created_at: 2025-01-27T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Bug Report: Missing Migration Support for Pre-Existing Kanban Structures

**Type:** Bug Report (BR)  
**Submitted:** 2025-01-27  
**Submitted By:** AI Agent (Cursor) acting as user/client for dev-toolkit  
**Priority:** HIGH  
**Severity:** HIGH  
**Status:** ACCEPTED  

**Implementing Task:** [E4:S07:T01](../epics/Epic-4/Story-007-migration-support-and-installation-modes.md)
**GitHub Issue:** [#2](https://github.com/earlution/ai-dev-kit/issues/2)

---

## Summary

The Kanban framework installation process assumes a fresh install with no existing Kanban structure. When projects have pre-existing Kanban (or Sprint/Agile) systems, the framework cannot detect, analyze, preserve, or migrate existing work items, creating risk of data loss and adoption barriers.

---

## Description

### What is the Bug?

The Kanban framework installation process (`packages/frameworks/kanban/README.md`) assumes:
- ✅ Fresh project with no existing Kanban structure
- ✅ Clean slate for Epic/Story/Task setup
- ✅ No migration needed from existing systems

**Reality:** Many projects have pre-existing Kanban, Sprint, or Agile structures that need to be preserved and migrated.

### What Should Happen vs. What Actually Happens?

**Expected Behavior:**
1. User requests Kanban structure setup: "I want you to setup our Kanban structure, using the [updated] Kanban pack from ai-dev-kit"
2. Framework detects existing Kanban structure (if present)
3. Framework analyzes existing work items
4. Framework preserves existing work
5. Framework migrates existing items to canonical E/S/T structure
6. Framework installs/updates structure safely without data loss

**Actual Behavior:**
1. User requests Kanban structure setup
2. Framework assumes fresh install (no detection)
3. Framework provides templates (assumes clean slate)
4. Risk of overwriting existing work if installed naively
5. No migration utilities available
6. Manual migration required (error-prone)

### When Does It Occur?

This bug occurs whenever:
- A project has pre-existing Kanban structure
- A project has Sprint-based agile system
- A project has issue tracker integration (GitHub Issues, Jira)
- A project is updating from older framework version
- An agent/user tries to install framework over existing structure

### Who is Affected?

**Primary Affected:**
- Projects with existing Kanban systems
- Projects migrating from Sprint-based systems
- Projects with issue tracker integration
- Projects updating framework versions
- AI agents automating Kanban setup

**Secondary Affected:**
- Framework adoption (barriers to entry)
- Framework credibility (appears incomplete)
- User experience (frustration with manual migration)

---

## Affected Component

**Primary Component:** Kanban Framework - Installation Process  
**Affected Areas:**
- [x] Installation Process
- [x] Migration Utilities
- [x] Detection Mechanisms
- [x] Documentation
- [ ] Backend/API
- [ ] Frontend/UI
- [ ] Database/Schema
- [ ] Integration/External Service

**Root Cause:**
The framework installation process was designed for fresh installs only. No consideration was given to projects with pre-existing Kanban structures. The framework lacks:
- Detection utilities for existing structures
- Analysis tools for mapping existing work
- Migration utilities for converting existing items
- Installation modes for different scenarios

---

## Steps to Reproduce

### UAT Scenario: Installing Framework with Pre-Existing Kanban

**Context:** dev-toolkit project has pre-existing Kanban structure

1. **Existing State:** Project has Epic 1 with 2 complete stories
   - Epic 1: Tool Management and Registry System
   - Story 1: Tool Management System (COMPLETE)
   - Story 2: Tool Distribution Strategy (COMPLETE)

2. **User Request:** "I want you to setup our Kanban structure, using the [updated] Kanban pack from ai-dev-kit"

3. **Agent Action:** Agent reads framework documentation
   - Reads `packages/frameworks/kanban/README.md`
   - Finds installation steps assume fresh install
   - No detection utilities found
   - No migration utilities found

4. **Agent Assumption:** Agent assumes fresh install
   - No way to detect existing structure
   - No way to preserve existing work
   - Risk of overwriting Epic 1

5. **User Discovery:** User identifies gap
   - Framework doesn't handle pre-existing structures
   - No migration path available
   - Manual migration required

**Expected Result:**
- Framework detects existing Epic 1
- Framework preserves existing work
- Framework migrates existing items to canonical structure
- Framework installs/updates safely

**Actual Result:**
- Framework cannot detect existing structure
- Framework cannot preserve existing work
- Framework cannot migrate existing items
- Risk of data loss if installed naively

---

## Environment

**Environment:** Development (Framework Installation)  
**Version:** Kanban Framework v2.0.0 (as of 2025-12-10)  
**Repository:** earlution/dev-toolkit (consuming ai-dev-kit framework)  
**Framework Source:** earlution/ai-dev-kit  
**Framework Path:** `packages/frameworks/kanban/`  
**Affected Files:**
- `packages/frameworks/kanban/README.md` (installation process)
- Missing: Detection utilities
- Missing: Migration utilities
- Missing: Installation mode selection

---

## Impact

### User Impact

**Severity:** HIGH

**Impact Description:**
- **Critical:** Risk of overwriting existing work during installation
- **High:** No migration path from existing Kanban systems
- **High:** Manual migration required (error-prone, time-consuming)
- **Medium:** Framework adoption barriers for projects with existing structures
- **Medium:** Confusion about installation process

**User Experience:**
- Users with existing Kanban cannot safely adopt framework
- Users must manually migrate (risky, time-consuming)
- Framework appears incomplete compared to user needs
- Installation process doesn't match real-world scenarios

### Business Impact

**Framework Adoption:**
- Projects with existing Kanban may abandon framework
- Framework appears incomplete for real-world use
- Framework credibility affected by missing migration support

**Framework Evolution:**
- Missing critical use case (pre-existing structures)
- Framework doesn't address common scenario
- Adoption barriers reduce framework value

### Workaround

**Current Workaround:**
1. Manually backup existing structure
2. Manually analyze existing work items
3. Manually migrate existing items to canonical structure
4. Manually preserve forensic markers and work history
5. Manually install framework around existing structure

**Workaround Limitations:**
- Time-consuming and error-prone
- Requires deep framework knowledge
- Risk of data loss
- Doesn't solve root cause
- Not scalable across projects

---

## Acceptance Criteria (Fix Requirements)

### Fix 1: Detection Utilities

- [ ] **Criterion 1:** Framework can detect existing Kanban structures
  - Scan for epic directories
  - Detect epic documents
  - Identify story documents
  - Report findings


- [ ] **Criterion 2:** Detection utility created: `detect_existing_structure.py`
  - Scans `docs/project-management/kanban/epics/` (or configured path)
  - Detects epic documents
  - Detects story documents
  - Generates detection report


### Fix 2: Analysis Utilities

- [ ] **Criterion 3:** Framework can analyze existing structure
  - Map existing items to E/S/T structure
  - Identify conflicts
  - Generate migration plan


- [ ] **Criterion 4:** Analysis utility created: `analyze_structure.py`
  - Maps existing epics to canonical format
  - Maps existing stories to canonical format
  - Maps existing tasks to canonical format
  - Identifies conflicts and gaps


### Fix 3: Migration Utilities

- [ ] **Criterion 5:** Framework can migrate existing work
  - Preserve existing content
  - Convert to canonical format
  - Preserve forensic markers
  - Preserve work history


- [ ] **Criterion 6:** Migration utility created: `migrate_structure.py`
  - Backs up existing structure
  - Migrates epics to canonical format
  - Migrates stories to canonical format
  - Migrates tasks to canonical format
  - Preserves forensic markers


### Fix 4: Installation Modes

- [ ] **Criterion 7:** Framework supports multiple installation modes
  - Fresh Install (current behavior)
  - Migration Install (detect and migrate)
  - Update Install (update existing framework)
  - Hybrid Install (preserve project epics, install framework epics)


- [ ] **Criterion 8:** Installation mode selection implemented
  - Interactive mode selection
  - Automatic mode detection
  - Mode-specific installation paths


### Fix 5: Documentation

- [ ] **Criterion 9:** Installation guide updated with migration scenarios
- [ ] **Criterion 10:** Migration utilities documented
- [ ] **Criterion 11:** Installation modes documented
- [ ] **Criterion 12:** Migration examples provided

**Verification Method:**
- [x] Test suite execution (if applicable)
- [x] Manual testing (UAT scenario reproduction)
- [x] Documentation review
- [x] Framework installation test with pre-existing structure

**Fix Verification Status:**
- [ ] Verified (test suite passed / manual test passed)
- [ ] Attempted Fix (pending verification)

---

## Fix Attempt History

**Purpose:** This section documents all fix attempts for this bug, ensuring that if a bug isn't squashed, the next build can be informed by previous attempts.

### Fix Attempts

_No fix attempts yet. This is the initial bug report._

---

## Dependencies

**Blocks:**
- Safe framework adoption for projects with existing Kanban
- Migration from Sprint-based systems
- Migration from issue trackers
- Framework updates without data loss

**Blocked By:**
- None

**Related Work:**
- **FR-007:** Migration Utilities and Installation Modes (proposed solution) - See `FR-007-migration-utilities-and-installation-modes.md`
- **UXR-001:** Migration User Experience Research (validates approach) - See `UXR-001-migration-user-experience-research.md`
- Framework: `packages/frameworks/kanban/README.md`
- Gap Analysis: `docs/project-management/kanban/_backup-pre-migration/INSTALLATION_GAP_ANALYSIS.md`

---

## Intake Decision

**Intake Status:** ACCEPTED  
**Intake Date:** 2025-12-10  
**Intake By:** AI Agent (Cursor)

**Decision Flow Results:**
- [x] Story Match Found: Epic 4, Story 7 → Task 1
- [ ] New Story Created: [Epic X, Story Y] → Task 1
- [ ] New Epic Created: [Epic X, Story 1, Task 1]

**Assigned To:**
- Epic: Epic 4 (Kanban Framework)
- Story: Story 7 (Migration Support and Installation Modes) - TO BE CREATED
- Task: Task 1 (BR-006: Detection utilities for existing Kanban structures)
- Version: `[TBD]`

**Kanban Links:**
- Epic: [`Epic-4.md`](../epics/Epic-4/Epic-4.md)
- Story: [`Story-007-migration-support-and-installation-modes.md`](../epics/Epic-4/Story-007-migration-support-and-installation-modes.md) - TO BE CREATED
- Task: [TBD]

---

## Notes

### UAT Context

This bug report is the result of **User Acceptance Testing (UAT)** performed during migration of dev-toolkit's pre-existing Kanban structure to the updated ai-dev-kit framework.

**Migration Scenario:**
- **Project:** dev-toolkit
- **Existing Structure:** Epic 1 with 2 complete stories
- **User Action:** Requested Kanban structure setup
- **Expected:** Framework detects and migrates existing structure
- **Actual:** Framework cannot detect or migrate existing structure

### Related Documents

- **Gap Analysis:** `docs/project-management/kanban/_backup-pre-migration/INSTALLATION_GAP_ANALYSIS.md`
- **Migration Plan:** `docs/project-management/kanban/_backup-pre-migration/MIGRATION_PLAN.md`
- **Task Migration:** `docs/project-management/kanban/_backup-pre-migration/TASK_MIGRATION_MAP.md`

### Migration Scenarios to Support

1. **Simple Kanban Migration:** Basic Kanban board → E/S/T structure
2. **Sprint-Based Migration:** Sprint system → E/S/T structure
3. **Issue Tracker Migration:** GitHub Issues/Jira → E/S/T structure
4. **Mixed Structure Migration:** Mix of systems → E/S/T structure
5. **Framework Update Migration:** Older framework version → New structure

---

## References

- **Framework README:** `packages/frameworks/kanban/README.md`
- **Epic Template:** `packages/frameworks/kanban/templates/EPIC_TEMPLATE.md`
- **Story Template:** `packages/frameworks/kanban/templates/STORY_TEMPLATE.md`
- **Gap Analysis:** `docs/project-management/kanban/_backup-pre-migration/INSTALLATION_GAP_ANALYSIS.md`
- **Related FR:** Migration Utilities and Installation Modes (FR-007)
- **Related UXR:** Migration User Experience Research (UXR-001)
- **GitHub Issue:** [#2](https://github.com/earlution/ai-dev-kit/issues/2)

---

**Template Usage:**
- This BR follows the Kanban Framework BR template
- UAT findings documented as bug report
- Comprehensive gap analysis included
- Clear acceptance criteria provided
- Fix requirements specified

---

_This bug report is part of the Kanban Framework. See `packages/frameworks/kanban/` for complete framework documentation._


---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-09T16:20:00Z
expires_at: null
housekeeping_policy: keep
---

# Bug Report: Kanban Installation Includes Project-Specific Epics from Template

**Type:** Bug Report (BR)  
**Submitted:** 2025-12-09  
**Submitted By:** User (triggered by BR from earlution/dev-kit)  
**Priority:** HIGH  
**Severity:** MEDIUM  
**Status:** RESOLVED ✅ (v0.4.6.10+1 via E4:S06:T10)

---

## Summary

When using ai-dev-kit as a template for a new project, the Kanban installation includes all epics (1-9) from the template repository, including project-specific epics (5-9) that are specific to ai-dev-kit. New projects should only receive canonical framework epics (1-7) with generic names, not project-specific epics.

---

## Description

**What is the bug?**
When a new project uses ai-dev-kit as a template and installs the Kanban framework, the installation process copies all epics from the template repository (`docs/project-management/kanban/epics/Epic-*`), including:

- **Framework epics (1-4):** Should be included, but Epic 1 is named "AI Dev Kit Core" which is too specific
- **Project-specific epics (5-9):** Should NOT be included (these are ai-dev-kit specific):
  - Epic 5: Documentation Management (ai-dev-kit specific)
  - Epic 6: Framework Management (ai-dev-kit specific)
  - Epic 7: Examples and Adoption (ai-dev-kit specific)
  - Epic 8: Tooling and Automation (ai-dev-kit specific)
  - Epic 9: Book Content Development (ai-dev-kit specific)


**What should happen vs. what actually happens?**
- **Expected:** New projects should receive only canonical framework epics (1-7) with generic, customizable names:
  1. Project Core (generic name, not "AI Dev Kit Core")
  2. Workflow Management Framework
  3. Numbering & Versioning Framework
  4. Kanban Framework
  5. FR Implementation
  6. BR Implementation
  7. Codebase Maintenance and Review

- **Actual:** New projects receive all epics (1-9) including ai-dev-kit project-specific epics (5-9), and Epic 1 has a project-specific name.

**When does it occur?**
- When using ai-dev-kit as a template for a new project
- When installing/copying the Kanban framework structure
- The template repository structure is copied wholesale, including project-specific epics

**Who is affected?**
- New projects adopting ai-dev-kit as a template
- Projects trying to use the Kanban framework with a clean slate
- Users expecting only canonical framework epics

---

## Affected Component

**Primary Component:** Kanban Framework Installation/Initialization  
**Affected Areas:**
- [ ] Backend/API
- [ ] Frontend/UI
- [ ] Database/Schema
- [ ] Integration/External Service
- [x] Documentation
- [x] Other: Framework installation/initialization process

**Root Cause (if known):**
The Kanban framework installation process does not have a mechanism to filter out project-specific epics. When projects copy the template repository structure, they receive all epics (1-9) including ai-dev-kit project-specific epics (5-9). Additionally, Epic 1 is named "AI Dev Kit Core" which is too specific for a canonical epic.

---

## Steps to Reproduce

1. Use ai-dev-kit as a template for a new project (e.g., `git clone` or copy repository structure)
2. Install/copy the Kanban framework structure from `packages/frameworks/kanban/`
3. Copy the Kanban board structure from `docs/project-management/kanban/`
4. Observe that all epics (1-9) are present in the new project
5. **Expected result:** Only canonical epics (1-7) with generic names should be present
6. **Actual result:** All epics (1-9) including ai-dev-kit project-specific epics (5-9) are present, and Epic 1 is named "AI Dev Kit Core"

---

## Environment

**Environment:** Development  
**Version:** Current (v0.4.2.6+2)  
**Browser/Platform:** N/A  
**OS:** Any

---

## Impact

**User Impact:**
- [ ] Critical - System unusable
- [ ] High - Major functionality broken
- [x] Medium - Some functionality affected
- [ ] Low - Minor issue, workaround available

**Business Impact:**
- New projects start with incorrect epic structure
- Users must manually clean up project-specific epics
- Confusion about which epics are canonical vs. project-specific
- Epic 1 name is too specific and not customizable

**Workaround:**
Manually delete project-specific epics (5-9) and rename Epic 1 from "AI Dev Kit Core" to a generic name like "Project Core". However, this is error-prone and not documented.

---

## Acceptance Criteria (Fix Requirements)

- [ ] **Criterion 1:** New projects receive only canonical epics (1-7), not project-specific epics (5-9)
- [ ] **Criterion 2:** Epic 1 is named generically (e.g., "Project Core") with clear instructions for customization
- [ ] **Criterion 3:** Project-specific epics (5-9 from ai-dev-kit) are NOT included when copying template structure
- [ ] **Criterion 4:** Clear mechanism to distinguish canonical epics from project-specific epics
- [ ] **Criterion 5:** Canonical epic ordering is optimal and documented (see Optimal Ordering section below)
- [ ] **Criterion 6:** Solution provides clear guidance on which epics are canonical vs. project-specific

**Verification Method:**
- [ ] Test suite execution
- [x] Manual testing
- [ ] Both

**Fix Verification Status:**
- [ ] Verified (test suite passed / manual test passed)
- [ ] Attempted Fix (pending verification)

---

## Optimal Canonical Epic Ordering

Based on `CANONICAL_EPICS.md` and framework design principles, the optimal ordering for canonical epics is:

### Proposed Canonical Epic Structure

1. **Epic 1: Project Core** (generic name, customizable)
   - **Purpose:** Core foundational work for the project
   - **Scope:** Fundamental infrastructure, core functionality, foundational frameworks
   - **Rationale:** Foundational epic that establishes the base

2. **Epic 2: Workflow Management Framework**
   - **Purpose:** Workflow management and automation framework
   - **Scope:** Workflow definitions, execution patterns, automation, workflow-related tooling
   - **Rationale:** Operational framework for workflows

3. **Epic 3: Numbering & Versioning Framework**
   - **Purpose:** Versioning and numbering schema framework
   - **Scope:** Versioning policies, numbering schemas, version management, version-related tooling
   - **Rationale:** Operational framework for versioning

4. **Epic 4: Kanban Framework**
   - **Purpose:** Kanban system implementation and governance
   - **Scope:** Kanban policies, templates, intake processes, Kanban-related tooling
   - **Rationale:** Operational framework for Kanban

5. **Epic 5: FR Implementation**
   - **Purpose:** Feature Request implementation and management
   - **Scope:** FR intake, processing, implementation workflows, FR-related tooling
   - **Rationale:** Implementation epic that supports Kanban (FRs come first)

6. **Epic 6: BR Implementation**
   - **Purpose:** Bug Report implementation and management
   - **Scope:** BR intake, processing, bug fix workflows, BR-related tooling
   - **Rationale:** Implementation epic that supports Kanban (BRs follow FRs)

7. **Epic 7: Codebase Maintenance and Review**
   - **Purpose:** Codebase maintenance, quality assurance, and continuous improvement
   - **Scope:** Code review processes, maintenance tasks, quality standards, IDE-flagged issues, codebase health monitoring
   - **Rationale:** Maintenance epic for ongoing codebase health

### Ordering Principles

- **Foundational epics come first (Epic 1):** Establishes the base for all other work
- **Operational frameworks follow (Epics 2-4):** Core operational frameworks that support the project
- **Implementation epics that support frameworks come next (Epics 5-6):** Implementation epics that use the frameworks
- **Maintenance epics come last (Epic 7):** Ongoing operational maintenance work
- **FR Implementation (Epic 5) comes before BR Implementation (Epic 6):** Feature Requests typically precede Bug Reports in the intake flow

### Epic 1 Naming Convention

Epic 1 should be named generically to allow customization:
- **Canonical name:** "Project Core" (or "Core Foundation")
- **Customization guidance:** Projects should rename to match their context (e.g., "Product Core", "Application Core", "Framework Foundation")
- **Documentation:** Clear instructions on how to customize Epic 1 name while maintaining its foundational purpose

---

## Fix Attempt History

**Purpose:** This section documents all fix attempts for this bug, ensuring that if a bug isn't squashed, the next build can be informed by previous attempts.

**How to Use:**
- Each release that attempts to fix this bug should add a new entry to this section
- Document what was attempted, what worked, what didn't, and verification status
- This creates a knowledge base for future fix attempts

### Fix Attempts

_No fix attempts yet. This is the initial bug report._

---

## Dependencies

**Blocks:**
- Clean Kanban framework adoption for new projects
- Proper separation of canonical vs. project-specific epics

**Blocked By:**
- None

**Related Work:**
- `packages/frameworks/kanban/templates/CANONICAL_EPICS.md` - Defines canonical epics
- `packages/frameworks/kanban/README.md` - Installation documentation
- `docs/documentation/user-docs/framework-dependency-post-template-setup-guide.md` - Template setup guide

---

## Proposed Solution

### Solution Overview

Ensure that when projects copy the Kanban framework structure, they receive only canonical epics (1-7) with generic names, not project-specific epics (5-9). This can be achieved through:

1. **Template Separation:** Create canonical epic templates separate from project-specific epics
2. **Documentation:** Clearly mark which epics are canonical vs. project-specific
3. **Installation Guidance:** Provide clear instructions on which epics to copy/include

### Implementation Approach

1. **Create Canonical Epic Templates:**
   - Store canonical epic templates in `packages/frameworks/kanban/templates/epics/`
   - Generic epic templates for epics 1-7
   - Epic 1 template with placeholder for project name (e.g., `&lbrace;PROJECT_NAME&rbrace; Core`)

2. **Update Documentation:**
   - Update `CANONICAL_EPICS.md` to clarify Epic 1 naming
   - Update template setup guide to reference canonical epic templates
   - Document which epics are canonical (1-7) vs. project-specific (5-9 in ai-dev-kit)

3. **Provide Clear Guidance:**
   - Update `framework-dependency-post-template-setup-guide.md` with instructions to use canonical templates
   - Document which epics to copy vs. which to exclude

### Files to Create/Update

**New Files:**
- `packages/frameworks/kanban/templates/epics/Epic-1-Project-Core.md` - Generic Epic 1 template (with &lbrace;PROJECT_NAME&rbrace; placeholder)
- `packages/frameworks/kanban/templates/epics/Epic-2-Workflow-Management.md` - Epic 2 template
- `packages/frameworks/kanban/templates/epics/Epic-3-Versioning.md` - Epic 3 template
- `packages/frameworks/kanban/templates/epics/Epic-4-Kanban-Framework.md` - Epic 4 template
- `packages/frameworks/kanban/templates/epics/Epic-5-FR-Implementation.md` - Epic 5 template
- `packages/frameworks/kanban/templates/epics/Epic-6-BR-Implementation.md` - Epic 6 template
- `packages/frameworks/kanban/templates/epics/Epic-7-Codebase-Maintenance.md` - Epic 7 template

**Files to Update:**
- `packages/frameworks/kanban/templates/CANONICAL_EPICS.md` - Update Epic 1 name to "Project Core", add template location reference
- `docs/documentation/user-docs/framework-dependency-post-template-setup-guide.md` - Update Step 4 to reference canonical epic templates, exclude project-specific epics

---

## Intake Decision

**Intake Status:** ACCEPTED  
**Intake Date:** 2025-12-11  
**Intake By:** AI Agent (ai-dev-kit)

**Decision Flow Results:**
- Story Match Found: Epic 4, Story 6, Task 10

**Assigned To:**
- Epic: Epic 4 (Kanban Framework)
- Story: Story 6 (Comprehensive Canonical E/S/T Template System)
- Task: Task 10 (BR-004: Fix epic contamination in installer)
- Version: `v0.4.6.10+1` (T10 COMPLETE)

**Kanban Links:**
- Epic: [`epics/Epic-4/Epic-4.md`](../epics/Epic-4/Epic-4.md)
- Story: [`epics/Epic-4/Story-006-comprehensive-canonical-est-template-system.md`](../epics/Epic-4/Story-006-comprehensive-canonical-est-template-system.md)
- Task: E4:S06:T10

---

## Notes

- **Resolution:** Fixed in `v0.4.6.10+1` by installing canonical epic templates from `packages/frameworks/kanban/templates/epics/`, contextualizing Epic 1 with project name, and excluding ai-dev-kit project-specific epics. Implemented in `migrate_structure.py` `_install_canonical_epics()` (E4:S06:T10).
- **Triggered by:** BR from earlution/dev-kit project reporting this issue when using ai-dev-kit as a template
- This bug affects the initial setup experience for new projects using ai-dev-kit as a template
- The canonical epic ordering is already well-defined in `CANONICAL_EPICS.md`, but Epic 1 needs a generic name
- **Scope Limitation:** This BR focuses specifically on epic contamination. Broader installation automation, template separation infrastructure, and installer development should be handled as separate tasks or FRs if needed
- **Related Work:** E4:S05 created canonical epics documentation but didn't address the installation contamination issue

---

## References

- `packages/frameworks/kanban/templates/CANONICAL_EPICS.md` - Canonical epic definitions
- `packages/frameworks/kanban/README.md` - Kanban framework documentation
- `docs/documentation/user-docs/framework-dependency-post-template-setup-guide.md` - Template setup guide
- `packages/frameworks/workflow mgt/scripts/install_release_workflow.py` - RW installer (reference implementation)

---

_This bug report is part of the Kanban Framework. See `packages/frameworks/kanban/` for complete framework documentation._


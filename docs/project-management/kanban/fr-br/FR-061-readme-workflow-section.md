---
lifecycle: evergreen
ttl_days: null
created_at: 2026-03-17T12:01:00Z
expires_at: null
housekeeping_policy: keep
---

# Feature Request: Add Workflow Section to Project README

**Type:** Feature Request (FR)  
**Submitted:** 2026-03-17  
**Submitted By:** User  
**Priority:** MEDIUM  
**Severity:** N/A  
**Status:** IMPLEMENTED (v0.5.1.64+1)  
**Assigned Task:** E5:S01:T64 — [Task document](../epics/Epic-5/Story-001-fr-repo/T64-readme-workflow-section.md)

---

## Summary

Project README.md lacks a dedicated Workflow section that summarizes all available workflows, their principle operations, and argument forms for easy user reference.

---

## Description

### What is the Feature?

Add a comprehensive "Workflows" section to the project README.md that documents all available workflows with their principle operations and command-line argument forms.

### What Should Happen vs. What Currently Happens?

**Expected Behavior:**
- New "Workflows" section in README.md with:
  - Summary of each workflow's purpose and functionality
  - Principle operations and use cases
  - All supported command-line argument forms
  - Examples for common usage patterns
  - Links to detailed documentation

**Current Behavior:**
- README mentions workflows in passing but has no dedicated section
- Users must navigate to separate documentation to understand workflow usage
- No centralized reference for workflow commands and arguments
- Missing visibility into the 12 comprehensive workflows available

### When Does It Occur?

This feature is needed:
- **When users are exploring the project** - Clear workflow documentation in README
- **When developers need workflow reference** - Centralized command documentation
- **When onboarding new contributors** - Easy access to workflow capabilities
- **When deciding which workflows to use** - Comprehensive feature overview

---

## Requirements

### Functional Requirements

- [ ] **FR-061:R01** - Add "Workflows" section to project README.md
- [ ] **FR-061:R02** - Document all 12 comprehensive workflows with summaries
- [ ] **FR-061:R03** - Include principle operations for each workflow
- [ ] **FR-061:R04** - Document all supported command-line argument forms
- [ ] **FR-061:R05** - Provide usage examples for common scenarios
- [ ] **FR-061:R06** - Include links to detailed workflow documentation
- [ ] **FR-061:R07** - Ensure section is well-integrated with existing README structure

### Non-Functional Requirements

- [ ] **FR-061:NF01** - **Clarity:** Easy to scan and understand workflow capabilities
- [ ] **FR-061:NF02** - **Completeness:** Cover all workflows and argument forms
- [ ] **FR-061:NF03** - **Maintainability:** Easy to update as workflows evolve
- [ ] **FR-061:NF04** - **Navigation:** Good integration with README table of contents

---

## Acceptance Criteria

- [x] **AC1:** "Workflows" section exists in README.md
- [x] **AC2:** All **11** registry workflows are documented with clear summaries
- [x] **AC3:** Principle operations for each workflow are explained
- [x] **AC4:** Agent triggers and reference forms documented
- [x] **AC5:** Usage examples provided for common scenarios
- [x] **AC6:** Links to detailed documentation included
- [x] **AC7:** Section integrates well with existing README structure
- [x] **AC8:** Documentation is accurate and up-to-date

---

## Rationale

**Why This Matters:**
- README is the first point of contact for users and contributors
- Workflows are a core capability but currently under-documented at the project level
- Clear workflow documentation improves discoverability and adoption
- Centralized reference reduces navigation friction

**Why This Should Be Implemented:**
- Completes the project documentation story
- Makes workflows more accessible to users
- Provides comprehensive reference for all workflow operations
- Improves overall project usability and developer experience

---

## Implementation Notes

**Key Workflows to Document:**
1. **Release Workflow (RW)** - Version management and releases
2. **Update Kanban Workflow (UKW)** - Kanban board management
3. **Changelog Management Workflow (CMW)** - Changelog maintenance
4. **Implementation Cycle Workflow (ICW)** - Feature implementation
5. **Intake Workflow (IW)** - FR/BR/UXR processing
6. **Plus 7 additional workflows** - Document all 12

**Section Structure:**
- Brief introduction to workflow system
- Individual workflow summaries with:
  - Purpose and functionality
  - Command syntax and arguments
  - Common use cases
  - Links to detailed docs

**Integration Points:**
- Add to README table of contents
- Place appropriately within existing structure
- Maintain consistency with existing documentation style

---

## Release History

- **v0.5.1.64+1 (E5:S01:T64):** README **Workflows** section (Cursor triggers + registry table + vwmp links); README body restored (removed erroneous placeholder); Quick Start / framework bullets aligned to **11** registered workflows.

---

## References

- **Current README:** `README.md`
- **Workflow Documentation:** `packages/frameworks/workflow mgt/KB/Documentation/`
- **Workflow Scripts:** `packages/frameworks/workflow mgt/scripts/`

---

## Template Usage

This FR follows the Kanban Framework FR template.  
This feature request is part of the Kanban Framework. See `packages/frameworks/kanban/` for complete framework documentation.

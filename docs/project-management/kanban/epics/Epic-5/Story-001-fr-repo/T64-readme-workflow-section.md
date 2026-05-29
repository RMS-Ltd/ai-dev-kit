---
lifecycle: evergreen
ttl_days: null
created_at: 2026-03-17T12:05:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 5, Story 1, Task 64: Add Workflow Section to Project README

**Task ID:** E5:S01:T64
**Status:** COMPLETE
**Priority:** MEDIUM
**Estimated Effort:** Medium
**Created:** 2026-03-17
**Last updated:** 2026-03-25 (v0.5.1.64+1 — FR-061 README Workflows section + restored README body)
**Version:** v0.5.1.64+1
**Code:** E5S01T64

**Repository Pattern:** FR-061 = E5:S01:T64 (abstract space: v0.5.1.64+0)

---

## Scope

Add a comprehensive "Workflows" section to the project README.md that documents all available workflows with their principle operations and command-line argument forms for easy user reference.

**Problem Statement:**
- README lacks a dedicated section documenting the 12 comprehensive workflows
- Users must navigate to separate documentation to understand workflow usage
- No centralized reference for workflow commands and arguments
- Missing visibility into available workflow capabilities

**Solution:**
- Add "Workflows" section to README.md with workflow summaries
- Document principle operations for each workflow
- Include all supported command-line argument forms
- Provide usage examples for common scenarios
- Add links to detailed workflow documentation

---

## Input

- **FR-061:** [`FR-061-readme-workflow-section.md`](../../../fr-br/FR-061-readme-workflow-section.md)
- **Current README:** `README.md`
- **Workflow Documentation:** `packages/frameworks/workflow mgt/KB/Documentation/`
- **Workflow Scripts:** `packages/frameworks/workflow mgt/scripts/`

---

## Deliverable

**Enhanced README.md with Comprehensive Workflow Section:**

1. **Workflow Section Structure:**
   - Brief introduction to workflow system and benefits
   - Individual workflow summaries with:
     - Purpose and key functionality
     - Command-line syntax and arguments
     - Common use cases and examples
     - Links to detailed documentation

2. **Workflow Documentation:**
   - **Release Workflow (RW)** - Version management and releases
   - **Update Kanban Workflow (UKW)** - Kanban board management
   - **Changelog Management Workflow (CMW)** - Changelog maintenance
   - **Implementation Cycle Workflow (ICW)** - Feature implementation
   - **Intake Workflow (IW)** - FR/BR/UXR processing
   - Plus 7 additional workflows with full coverage

3. **Command Reference:**
   - All argument forms (e.g., `RW E7:S01:T10`, `UKW -u`, `ICW plan E5:S01:T64`)
   - Usage examples for common scenarios
   - Clear syntax documentation

4. **Integration:**
   - Add to README table of contents
   - Position appropriately within existing structure
   - Maintain consistency with documentation style

---

## Acceptance Criteria

- [x] **Criterion 1:** "Workflows" section exists in README.md
- [x] **Criterion 2:** All **11 registry** workflows documented with summaries (aligned to [`workflow-registry.yaml` (source)](https://github.com/earlution/ai-dev-kit/blob/main/packages/frameworks/workflow%20mgt/workflows/workflow-registry.yaml))
- [x] **Criterion 3:** Principle operations explained for each workflow
- [x] **Criterion 4:** Command / agent trigger forms documented (RW task token, UKW flags, PVW, ICW)
- [x] **Criterion 5:** Usage examples provided for common scenarios
- [x] **Criterion 6:** Links to detailed documentation included
- [x] **Criterion 7:** Section integrates well with existing README structure (ToC + hero link)
- [x] **Criterion 8:** Documentation is accurate and up-to-date; placeholder tail of README removed

---

## Approach

### Step 1: Analyze Current README and Workflow Documentation

- Review README.md structure and existing sections
- Survey all 12 workflows and their documentation
- Identify key workflows and their argument forms
- Review existing workflow examples and usage patterns

### Step 2: Design Workflow Section Structure

- Design section placement and navigation
- Plan workflow summary format (purpose, commands, examples, links)
- Ensure comprehensive coverage of all workflows
- Maintain readability and scannability

### Step 3: Research Workflow Details

- Document each workflow's purpose and operations
- Collect command syntax and argument forms
- Gather usage examples from documentation
- Validate links to detailed documentation

### Step 4: Implement Workflow Section

- Add section to README.md with proper markdown formatting
- Include all required workflow documentation
- Add table of contents integration
- Ensure consistent styling with existing README

### Step 5: Review and Validation

- Validate all workflow information is accurate
- Check links and references are correct
- Review for completeness and clarity
- Test README rendering and navigation

---

## Related Work

**Related FRs:**
- **FR-061:** Add Workflow Section to Project README (this task)

**Related Tasks:**
- **E5:S01:T63:** RW Task Argument Requirement / FR-060 (related workflow enhancement)
- **E7:S01:T10:** Enhanced Workflow Logging System (UKW implementation)

**Related Stories:**
- **E5:S01:** FR Repo (this task is part of the FR repository)

---

## Version Anchor

**Forensic Marker Format:** `✅ COMPLETE (vRC.E.S.T+B)` (e.g., `✅ COMPLETE (v0.5.1.64+1)`)

**When Task is Complete:**
- Add forensic marker to Task document
- Add forensic marker to Story checklist
- Update `Last updated` field
- Update `Completed` field
- Update `Status` to `COMPLETE`
- Update `Version` to final version
- Update `Epic-5` with completion status and version

---

## Notes

**Key Considerations:**
- Focus on user-facing workflow capabilities
- Include principle operations rather than implementation details
- Ensure examples are practical and commonly used
- Maintain README as primary discovery mechanism
- Keep section concise while being comprehensive

**Expected Outcomes:**
- Improved workflow discoverability for users
- Centralized reference for workflow operations
- Better onboarding experience for contributors
- Reduced navigation friction to workflow documentation
- Enhanced project usability and developer experience

---

_This Task is part of Epic 5: Documentation Management and Maintenance, Story 1: FR Repo (PERPETUAL). See [`Story-001-fr-repo.md`](../Story-001-fr-repo.md) for story-level context._

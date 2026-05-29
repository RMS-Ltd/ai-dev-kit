---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-05T17:40:00Z
expires_at: null
housekeeping_policy: keep
---

# Story 005 – Framework Documentation Management & Maintenance

**Status:** IN PROGRESS  
**Priority:** HIGH  
**Estimated Effort:** [TBD]  
**Created:** 2025-12-05  
**Last updated:** 2026-01-16 (v0.5.5.8+1, migrated from v0.5.5.8+1 – Story renumbered from S04 to S05 as part of repository story migration)  
**Version:** v0.5.5.8+1  
**Code:** E5S05

**Note:** This story was renumbered from S04 to S05 as part of the repository story abstract space resolution (E9:S01:T08).

---

## Task Checklist

- [ ] **E5:S05:T01 – Conduct framework documentation hygiene analysis** - TODO
- [ ] **E5:S05:T02 – Define framework documentation maintenance policies** - TODO
- [ ] **E5:S05:T03 – Create framework documentation review cadences** - TODO
- [ ] **E5:S05:T04 – Establish framework documentation update triggers** - TODO
- [x] **E5:S05:T05 – Create comprehensive user documentation for Epic 6 framework dependency architecture** - COMPLETE ✅
- [ ] **E5:S05:T06 – Create quick-start guide for framework dependency installation** - TODO
- [x] **E5:S05:T07 – Set up ai-dev-kit repository as GitHub template** ✅ COMPLETE (v0.5.5.7+1) - Documentation complete, manual template enablement pending
- [x] **E5:S05:T08 – Document `.cursorrules` setup for RW trigger** ✅ COMPLETE (v0.5.5.8+1) - Added `.cursorrules` setup instructions to installation guide, troubleshooting guide, and FAQ

---

## Overview

This story establishes a framework for maintaining documentation accuracy and consistency for the **frameworks this project provides** (`packages/frameworks/`). It defines policies, processes, and cadences for keeping framework documentation current. **Scope:** Framework documentation (packages/frameworks/*/docs/, framework READMEs, framework guides), not the project's own documentation (see E05:S01 for project documentation scope).

This story mirrors E05:S01 but is specifically scoped to framework documentation, ensuring that the frameworks provided by this project maintain high-quality, up-to-date documentation for adopters.

---

## Goal

Establish a comprehensive framework for framework documentation maintenance that ensures all framework documentation remains accurate, up-to-date, and consistent, enabling successful adoption and use of the frameworks.

---

## Tasks

### E5:S05:T01 – Conduct framework documentation hygiene analysis

**Input:** Entire framework documentation corpus (`packages/frameworks/*/docs/`, framework READMEs, framework guides)  
**Deliverable:** Framework documentation hygiene analysis report with categorized issues and recommendations  
**Dependencies:** None  
**Blocker:** None

**Problem Statement:**
Before establishing framework documentation maintenance policies, we need a comprehensive understanding of the current framework documentation state. This analysis will identify all documentation issues, inconsistencies, and maintenance needs across all frameworks provided by this project.

**Approach:**

1. **Inventory Framework Documentation Corpus:**
   - Map all documentation files across `packages/frameworks/*/docs/`
   - Identify framework READMEs, guides, templates, and examples
   - Categorize by framework type (workflow, kanban, versioning, etc.)
   - Identify documentation owners and lifecycle metadata
   - Create framework documentation structure map

2. **Analyze Framework Documentation Issues:**
   - **Broken Links:** Check all internal and external links for validity
   - **Outdated Information:** Identify references to deprecated features, old versions, outdated examples
   - **Inconsistencies:** Cross-reference related framework docs for conflicting information
   - **Orphaned Files:** Find documentation with no references or unclear purpose
   - **Version Mismatches:** Check version numbers, dates, and metadata consistency across frameworks
   - **Missing Documentation:** Identify gaps where framework documentation should exist
   - **Format Inconsistencies:** Check adherence to templates and style guides
   - **Documentation Drift:** Compare actual framework implementation with documented behavior
   - **Adoption Barriers:** Identify documentation issues that prevent or hinder framework adoption

3. **Categorize Issues by Severity:**
   - **Critical:** Issues that cause confusion, errors, or block framework adoption
   - **High:** Issues that significantly impact usability or accuracy
   - **Medium:** Issues that cause minor confusion or inconsistency
   - **Low:** Issues that are cosmetic or minor improvements

4. **Analyze Framework Documentation Patterns:**
   - Identify common anti-patterns across frameworks
   - Document recurring issues and their root causes
   - Analyze documentation update frequency and patterns
   - Identify documentation hotspots (files that change frequently)
   - Compare documentation quality across different frameworks

5. **Create Hygiene Report:**
   - Executive summary with key findings
   - Detailed issue inventory with file locations
   - Categorized issues by type and severity
   - Root cause analysis for recurring issues
   - Recommendations prioritized by impact
   - Framework documentation health score/metrics per framework

6. **Provide Actionable Recommendations:**
   - Immediate fixes (critical issues)
   - Short-term improvements (high priority)
   - Long-term enhancements (medium/low priority)
   - Process improvements to prevent future issues
   - Framework-specific recommendations

**Deliverables:**
- `docs/Analysis/framework-documentation-hygiene-analysis-report.md` - Comprehensive analysis report
- `docs/Analysis/framework-documentation-issues-inventory.md` - Detailed issue inventory
- `docs/Analysis/framework-documentation-health-metrics.md` - Health metrics and scoring per framework
- Recommendations document with prioritized action items

**Success Criteria:**
- All framework documentation files inventoried and categorized
- All broken links identified and documented
- All inconsistencies identified with root cause analysis
- All orphaned files identified with recommendations
- Health metrics calculated and baseline established per framework
- Actionable recommendations provided with prioritization

**Related Work:**
- E05:S01 (Project Documentation Maintenance Framework) - Similar analysis for project documentation
- Epic 6: Framework Management (framework versioning and lifecycle)
- Epic 7: Examples & Adoption (user-facing framework documentation)

---

### E5:S05:T02 – Define framework documentation maintenance policies

**Input:** Framework documentation hygiene analysis report (E5:S05:T01)  
**Deliverable:** Framework documentation maintenance policy document  
**Dependencies:** E5:S05:T01  
**Blocker:** None

**Approach:**
1. Review hygiene analysis findings and recommendations
2. Define framework documentation maintenance policies based on identified issues
3. Establish framework documentation ownership and responsibilities
4. Create framework documentation update procedures
5. Define framework documentation quality standards
6. Establish framework documentation review requirements

---

### E5:S05:T03 – Create framework documentation review cadences

**Input:** Framework documentation maintenance policies (E5:S05:T02)  
**Deliverable:** Framework documentation review schedule and cadences  
**Dependencies:** E5:S05:T02  
**Blocker:** None

**Approach:**
1. Define review cadences for different framework documentation types
2. Create review checklists and procedures
3. Establish review assignment and tracking processes
4. Document review outcomes and follow-up actions

---

### E5:S05:T04 – Establish framework documentation update triggers

**Input:** Framework documentation maintenance policies (E5:S05:T02), Framework documentation review cadences (E5:S05:T03)  
**Deliverable:** Framework documentation update trigger definitions and procedures  
**Dependencies:** E5:S05:T02, E5:S05:T03  
**Blocker:** None

**Problem Statement:**
Framework documentation often becomes outdated because there isn't a clear, systematic process for triggering updates when framework code or behavior changes. This task aims to define explicit events and conditions that should trigger a framework documentation update, ensuring proactive maintenance.

**Approach:**

1. **Identify Framework Documentation Update Events:**
   - **Framework Code Changes:** New features, bug fixes, API changes, breaking changes, refactoring
   - **Framework Version Updates:** Major/minor/patch version bumps
   - **Framework Policy Changes:** Updates to framework policies, standards, or governance
   - **Framework Structure Changes:** New frameworks, framework reorganization, file restructuring
   - **Framework-Specific Events:** Discovery of gaps, errors, inconsistencies, adopter feedback on framework docs

2. **Define Update Trigger Conditions:**
   - **Automatic Triggers:** Events that can be detected and trigger automated updates (e.g., framework version bumps, code linting/type checking results)
   - **Manual Triggers:** Events that require human initiation (e.g., developer identifies a doc gap, adopter reports an error, new framework feature requires manual doc update)
   - **Scheduled Triggers:** Time-based reviews or audits (e.g., quarterly framework policy review, annual framework documentation audit)

3. **Create Update Procedures for Each Trigger Type:**
   - For **Automatic Triggers:** Document how the RW or other automation handles the update
   - For **Manual Triggers:** Define a clear process for developers to initiate updates
   - For **Scheduled Triggers:** Outline the review process, responsibilities, and update mechanisms

4. **Document Integration with Existing Workflows:**
   - How do these triggers integrate with the Release Workflow?
   - How do they integrate with the Kanban FR/BR intake process?
   - How are updates tracked and verified?

**Deliverables:**
- `docs/architecture/standards-and-adrs/framework-documentation-update-triggers-guide.md` - Comprehensive guide to update triggers
- `docs/project-management/rituals/framework-documentation-review-schedule.md` - Documenting scheduled triggers
- Updates to `release-workflow-agent-execution.md` for automatic triggers (if applicable)
- Updates to `FR_BR_INTAKE_AGENT_GUIDE.md` for manual triggers
- Documentation of tracking system for updates

**Success Criteria:**
- All major framework documentation update events identified
- Clear trigger conditions defined for each event
- Step-by-step procedures for handling each trigger type
- Integration with RW and Kanban processes documented
- A system for tracking framework documentation updates is established

**Related Work:**
- E5:S05:T01 (Hygiene Analysis) - Provides baseline of current issues
- E5:S05:T02 (Maintenance Policies) - Policies will inform trigger definitions
- E05:S02 (Quality Assurance) - Validators can act as automatic triggers
- E05:S03 (Automation) - Automation scripts will implement automatic triggers
- E05:S01:T04 (Project Documentation Update Triggers) - Similar triggers for project documentation

---

### E5:S05:T06 – Create quick-start guide for framework dependency installation

**Input:** Framework dependency installation guide (E5:S05:T05)  
**Deliverable:** Quick-start guide for users who already have Git set up  
**Dependencies:** E5:S05:T05  
**Blocker:** None

**Problem Statement:**
The comprehensive installation guide (E5:S05:T05) covers the full setup process from scratch, including Git repository initialization. However, many users may already have a Git repository set up and want a faster path to get started. A quick-start guide would provide a streamlined installation path for experienced users while still maintaining technical accuracy.

**Approach:**

1. **Identify Quick-Start Scenarios:**
   - Users with existing Git repository (local or remote)
   - Users familiar with Git submodules
   - Users who want to install frameworks quickly
   - Users who have already reviewed the comprehensive guide

2. **Create Streamlined Installation Path:**
   - **Prerequisites Check:** Quick verification that Git is set up (skip detailed setup)
   - **Method Selection:** Help users choose the right installation method quickly
   - **Minimal Steps:** Focus on essential commands only
   - **Quick Verification:** Simplified verification steps
   - **Next Steps:** Link to comprehensive guide for detailed configuration

3. **Structure Quick-Start Guide:**
   - **Prerequisites:** Quick checklist (Git installed, repository initialized, Python/Node if needed)
   - **Choose Your Method:** Brief comparison table to help selection
   - **Quick Install:** Step-by-step commands for each method (minimal explanation)
   - **Verify Installation:** Quick verification commands
   - **Next Steps:** Links to comprehensive guide, usage guide, and configuration

4. **Content Requirements:**
   - **Concise:** Focus on commands and essential information only
   - **Copy-paste ready:** All commands should be ready to use
   - **Clear assumptions:** Explicitly state what is assumed (Git knowledge, existing repo, etc.)
   - **Error handling:** Brief troubleshooting for common quick-start issues
   - **Cross-references:** Link to comprehensive guide for details

5. **Integration with Existing Documentation:**
   - Link from comprehensive installation guide to quick-start
   - Link from quick-start back to comprehensive guide for details
   - Ensure consistency between both guides
   - Update main README to reference both guides

**Deliverables:**
- `docs/documentation/user-docs/framework-dependency-quick-start-guide.md` - Quick-start installation guide
- Updates to `docs/documentation/user-docs/framework-dependency-installation-guide.md` - Add link to quick-start guide
- Updates to `README.md` - Add reference to quick-start guide

**Success Criteria:**
- Quick-start guide provides streamlined installation path
- All three installation methods covered (Git submodules, CLI tool, package managers)
- Guide assumes Git knowledge and existing repository
- Commands are copy-paste ready and tested
- Guide links to comprehensive guide for details
- Verification steps are simplified but effective
- Guide is accessible to users who want faster installation

**Related Work:**
- E5:S05:T05 (Comprehensive Installation Guide) - Source material and prerequisite
- Epic 6 (Framework Management) - Framework dependency architecture
- E5:S05:T01-T04 (Framework Documentation Management) - Part of framework documentation suite

---

### E5:S05:T07 – Set up ai-dev-kit repository as GitHub template

**Input:** Current repository structure, GitHub repository settings  
**Deliverable:** Repository configured as GitHub template with documentation  
**Dependencies:** None  
**Blocker:** None

**Problem Statement:**
Users should be able to create new projects using `ai-dev-kit` as a template, providing them with a complete starting structure including KB organization, framework directories, configuration files, and example workflows. This makes onboarding significantly easier, especially for book readers who may be less technical.

**Approach:**

1. **Enable Template Repository:**
   - Navigate to GitHub repository settings: `https://github.com/earlution/ai-dev-kit/settings`
   - Scroll to "Template repository" section
   - Check "Template repository" checkbox
   - Add template description: "A comprehensive toolkit for AI-assisted development workflows. Includes Workflow Management, Kanban, Versioning, Document Lifecycle, and Debug Path frameworks."
   - Add topics: `ai-assisted-development`, `workflow-management`, `kanban`, `versioning`, `documentation`, `template`
   - Save changes

2. **Create Template Documentation:**
   - ✅ Template usage instructions added to installation guide (completed in T05 update)
   - ✅ Post-template setup guide created (this task)
   - Document what's included in template
   - Create template README section (optional)

3. **Template Structure Verification:**
   - ✅ Verify all essential files are included:
     - All 5 frameworks in `packages/frameworks/`
     - Complete KB structure
     - Configuration files
     - Example workflows
   - ✅ Ensure no sensitive information in template (review .gitignore)
   - ✅ Check that template structure is complete
   - Validate that template works correctly

4. **Template Metadata:**
   - Add template description to repository (via GitHub settings)
   - Add relevant topics/tags (via GitHub settings)
   - Update README with template badge/indicator (optional)
   - Create template-specific documentation

5. **Testing:**
   - Test creating repository from template
   - Verify all files are included correctly
   - Test post-template setup instructions
   - Validate that frameworks work after template creation
   - Document any issues found

6. **Create Template Enablement Instructions:**
   - Document step-by-step process for enabling template
   - Create checklist for template readiness
   - Document template verification steps

**Deliverables:**
- ✅ Post-template setup guide (`framework-dependency-post-template-setup-guide.md`)
- ✅ GitHub template enablement instructions (`framework-dependency-template-enablement-instructions.md`)
- ✅ Template usage documented in installation guide (completed)
- ⏳ Repository configured as GitHub template (manual step required)
- ⏳ Template description and metadata (manual step required)
- ⏳ Template verification checklist (to be created after enablement)

**Success Criteria:**
- ✅ Post-template setup guide created and comprehensive
- ✅ Template enablement instructions created
- ✅ Template usage is documented in installation guide
- ⏳ Repository is enabled as template on GitHub (manual step)
- ⏳ Users can create new repositories from template (after enablement)
- ✅ Template includes all essential structure (verified)
- ⏳ Template works correctly for new projects (to be tested after enablement)

**Related Work:**
- E5:S05:T05 - Installation guide (template usage instructions added)
- Epic 1: Story 4 - Repository Branding and Renaming (repository setup)
- Epic 7 - Examples and Adoption (template adoption examples)

---

### E5:S05:T08 – Document `.cursorrules` setup for RW trigger

**Input:** User feedback from `been-there` project indicating `.cursorrules` file missing  
**Deliverable:** Updated documentation with `.cursorrules` setup instructions  
**Dependencies:** E5:S05:T05 (Installation guide must exist)  
**Blocker:** None

**Problem Statement:**
Users installing the Workflow Management framework need clear instructions on how to enable the "RW" trigger in Cursor by adding the RW trigger section to their `.cursorrules` file. Without this setup, the "RW" command won't work, which is a critical adoption barrier. The initial installation guide didn't explicitly cover this requirement.

**Approach:**

1. **Update Installation Guide:**
   - Add dedicated section in "Post-Installation Setup" (Step 4) for `.cursorrules` setup
   - Provide two options: RW installer (recommended) and manual setup
   - Explain what the RW trigger does and why it's needed
   - Include location of template file: `frameworks/workflow-mgmt/cursorrules-rw-trigger-section.md`
   - Add to "Next Steps" section for visibility

2. **Update Troubleshooting Guide:**
   - Add "Issue: RW Trigger Not Working" section
   - Document symptoms, causes, and step-by-step solutions
   - Include verification steps and prevention tips
   - Cover common issues: missing file, incorrect paths, Cursor not reloaded

3. **Update FAQ:**
   - Add "How do I enable the 'RW' trigger in Cursor?" entry
   - Provide quick setup instructions
   - Link to detailed installation guide

4. **Ensure Consistency:**
   - Verify all three documents reference the same template file location
   - Ensure instructions are consistent across all documents
   - Cross-reference between documents appropriately

**Deliverables:**
- ✅ Updated `docs/documentation/user-docs/framework-dependency-installation-guide.md` - Added `.cursorrules` setup section
- ✅ Updated `docs/documentation/user-docs/framework-dependency-troubleshooting-guide.md` - Added RW trigger troubleshooting
- ✅ Updated `docs/documentation/user-docs/framework-dependency-faq.md` - Added RW trigger FAQ entry

**Success Criteria:**
- ✅ Installation guide includes clear `.cursorrules` setup instructions
- ✅ Troubleshooting guide covers RW trigger issues
- ✅ FAQ provides quick reference for RW trigger setup
- ✅ All documents reference correct template file location
- ✅ Instructions are consistent and actionable
- ✅ Users can successfully enable RW trigger after following documentation

**Related Work:**
- E5:S05:T05 (Comprehensive Installation Guide) - Base document updated
- `packages/frameworks/workflow mgt/cursorrules-rw-trigger-section.md` - Template file referenced
- `packages/frameworks/workflow mgt/scripts/install_release_workflow.py` - RW installer that generates `.cursorrules`

---

## Dependencies

**Blocks:**
- E05:S02 (Documentation Quality Assurance) - Framework documentation quality
- E05:S03 (Documentation Automation) - Framework documentation automation

**Blocked By:**
- E5:S05:T01 (Conduct framework documentation hygiene analysis)
- E5:S05:T02 (Define framework documentation maintenance policies)
- E5:S05:T03 (Create framework documentation review cadences)

**Coordinates With:**
- E05:S01 (Project Documentation Maintenance Framework) - Similar scope but for project docs
- Epic 6 (Framework Management) - Framework versioning and lifecycle
- Epic 7 (Examples & Adoption) - User-facing framework documentation

---

## References

- `docs/project-management/kanban/epics/Epic-5/Epic-5.md`
- `docs/project-management/kanban/epics/Epic-5/Story-001-documentation-maintenance-framework.md` (project documentation scope)
- `docs/project-management/rituals/policy/kanban-governance-policy.md`
- `packages/frameworks/workflow mgt/docs/documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md`


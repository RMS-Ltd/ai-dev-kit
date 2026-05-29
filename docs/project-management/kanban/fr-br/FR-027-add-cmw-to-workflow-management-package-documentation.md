---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-21T23:45:00Z
expires_at: null
housekeeping_policy: keep
---

# Feature Request: Add CMW to Workflow Management Package Documentation

**Type:** Feature Request (FR)  
**Submitted:** 2025-12-21  
**Submitted By:** User  
**Priority:** MEDIUM  
**Status:** COMPLETE ✅  
**Completed:** 2026-01-03 (v0.6.6.14+1 – CMW documentation added to package README)

---

## Summary

Add Changelog Management Workflow (CMW) to the workflow management package documentation (`packages/frameworks/workflow mgt/README.md`) to ensure CMW is properly documented and discoverable for projects adopting the workflow management framework.

---

## Problem Statement

**Current Situation:**
- CMW (Changelog Management Workflow) is fully implemented and operational (T11 COMPLETE)
- CMW workflow definition exists: `packages/frameworks/workflow mgt/workflows/changelog-management-workflow.yaml`
- CMW scripts exist: `packages/frameworks/workflow mgt/scripts/changelog/`
- CMW documentation exists: `packages/frameworks/workflow mgt/scripts/changelog/README.md`
- CMW is integrated into RW Step 9.5 (automatic trigger when changelog exceeds threshold)

**Issue:**
- CMW is **not documented** in the workflow management package README
- Package README lists RW, UKW, and Intake Workflow, but **omits CMW**
- Projects adopting the framework may not discover CMW exists
- CMW scripts and workflow definition are not mentioned in package documentation
- Package distribution may not clearly include CMW as a feature

**Impact:**
- Reduced discoverability of CMW functionality
- Incomplete package documentation
- Projects may not realize CMW is available in the framework
- Package users may miss important changelog management capabilities

---

## Proposed Solution

### 1. Update Package README

Update `packages/frameworks/workflow mgt/README.md` to include CMW documentation:

**Add to "What's Included" section:**
- List CMW alongside other workflows (RW, UKW, Intake Workflow)
- Add CMW workflow definition to "Workflow Definitions" section
- Add CMW scripts to appropriate section (e.g., "Maintenance Scripts" or new "Changelog Management Scripts" section)
- Reference CMW documentation: `scripts/changelog/README.md`

**Add to "Core Methodology Documents" section (if applicable):**
- Note that CMW is deterministic (script-based, no agent execution guide needed)
- Reference CMW script documentation for usage instructions

### 2. Document CMW Features

Include CMW capabilities in package documentation:
- Automated changelog validation, duplicate detection, ordering fixes
- Archival policy support (size-based, time-based, hybrid)
- Integration with RW Step 9.5 (automatic trigger)
- Manual trigger support ("CMW" command)
- Cron automation support (weekly execution recommended)

### 3. Ensure Package Distribution Includes CMW

Verify that CMW files are included in package builds:
- Workflow definition: `workflows/changelog-management-workflow.yaml`
- Scripts: `scripts/changelog/*.py`
- Documentation: `scripts/changelog/README.md`
- Cron example: `scripts/changelog/cron-cmw-example.sh`

---

## Use Cases

1. **Project Adopting Framework:**
   - User reads workflow management package README
   - Discovers CMW is available for changelog management
   - Follows documentation to set up CMW (manual or cron)
   - Benefits from automated changelog maintenance

2. **Package Distribution:**
   - Package build includes CMW files
   - Package users have access to CMW scripts and workflow
   - Documentation clearly lists CMW as an included feature

3. **Framework Completeness:**
   - Package documentation accurately reflects all available workflows
   - RW, UKW, Intake Workflow, and CMW are all documented consistently
   - Users understand full scope of workflow management framework

---

## Acceptance Criteria

- [ ] Package README updated to include CMW in "What's Included" section
- [ ] CMW workflow definition listed in "Workflow Definitions" section
- [ ] CMW scripts documented in appropriate section
- [ ] CMW features and capabilities described
- [ ] CMW integration with RW Step 9.5 documented
- [ ] CMW manual trigger documented
- [ ] CMW cron automation documented
- [ ] Package distribution verified to include CMW files
- [ ] CMW documentation consistent with other workflow documentation

---

## Related Work

- **Task:** E6:S06:T11 - Changelog Management and Archival Workflow (CMW implementation, COMPLETE)
- **Feature Request:** FR-025 - Changelog Management and Archival Workflow (source FR for CMW)
- **Feature Request:** FR-026 - Canonical Perpetual Task for Changelog Maintenance (CMW perpetual task pattern)
- **Task:** E6:S06:T13 - Canonical CMW Perpetual Task (canonicalization, COMPLETE)
- **Epic:** 6 - Framework Management and Maintenance
- **Story:** 6 - ADK Implementation Analysis and Package Management

---

## Priority Justification

**MEDIUM Priority** because:
- CMW is already implemented and functional
- Documentation gap is non-blocking (CMW works without README update)
- However, documentation improves discoverability and user experience
- Completes the package documentation to accurately reflect all available workflows
- Ensures package distribution is properly documented

---

## Implementation Considerations

- Follow existing README structure and format
- Maintain consistency with other workflow documentation style
- Reference existing CMW documentation in `scripts/changelog/README.md`
- Verify package build scripts include CMW files
- Update package version if needed to reflect documentation update

---

## References

- **CMW Workflow:** `packages/frameworks/workflow mgt/workflows/changelog-management-workflow.yaml`
- **CMW Scripts:** `packages/frameworks/workflow mgt/scripts/changelog/`
- **CMW Documentation:** `packages/frameworks/workflow mgt/scripts/changelog/README.md`
- **Package README:** `packages/frameworks/workflow mgt/README.md`
- **RW Integration:** RW Step 9.5 triggers CMW automatically
- **CMW Task:** `docs/project-management/kanban/epics/Epic-6/Story-006-adk-implementation-analysis-and-package-management/T11-changelog-management-and-archival-workflow.md`

---

**Feature Request ID:** FR-027  
**Created:** 2025-12-21  
**Last Updated:** 2025-12-21


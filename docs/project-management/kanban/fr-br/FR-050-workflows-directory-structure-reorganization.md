---
lifecycle: evergreen
ttl_days: null
created_at: 2026-03-09T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# FR-050: Workflows Directory Structure Reorganization

**Status:** 🟡 **PENDING INTAKE**  

**Implementing Task:** [E6:S07:T107](../epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management/T107-ide-command-whitelist-optimization.md)
**Priority:** MEDIUM - Improve organization and maintainability of workflow definitions  
**Estimated Effort:** Medium  
**Created:** 2026-03-09  
**Last updated:** 2026-03-09  
**Version:** v0.4.18.1+2  
**Code:** E2:S?? (TBD)

---

## Problem Statement

The workflows directory `/Users/rms/Documents/projects/ai-dev-kit/packages/frameworks/workflow mgt/workflows` is currently unmanaged and lacks proper organization. Workflow files are not organized into workflow-named subdirectories, making it difficult to:

1. **Locate specific workflows** - Files are scattered without clear grouping
2. **Maintain workflow organization** - No consistent structure for workflow definitions
3. **Scale workflow management** - Adding new workflows lacks clear placement guidelines
4. **Prevent file conflicts** - Risk of filename collisions and confusion

## Current State Analysis

### Current Directory Structure

```
workflows/
├── rw/                    # Mixed workflow files
│   ├── release-workflow.yaml
│   ├── other-files...
└── [unorganized files]
```

### Issues Identified

1. **Flat Structure** - All workflow files in single directory
2. **Mixed Content** - Different workflow types intermingled
3. **No Clear Boundaries** - Difficult to identify workflow scope
4. **Maintenance Burden** - Hard to find and update specific workflows
5. **Scalability Issues** - Adding new workflows creates confusion

## Proposed Solution

### 1. Create Workflow-Named Subdirectories

Reorganize workflows into individual subdirectories by workflow name:

```
workflows/
├── release-workflow/      # RW - Release Workflow
│   ├── release-workflow.yaml
│   ├── release-steps.yaml
│   ├── release-config.yaml
│   └── release-docs.md
├── changelog-management-workflow/  # CMW
│   ├── cmw-workflow.yaml
│   ├── cmw-config.yaml
│   └── cmw-steps.yaml
├── update-kanban-workflow/  # UKW
│   ├── ukw-workflow.yaml
│   ├── ukw-config.yaml
│   └── ukw-steps.yaml
├── post-implementation-review/  # PIR
│   ├── pir-workflow.yaml
│   ├── pir-config.yaml
│   └── pir-checklist.yaml
└── common/               # Shared workflow components
    ├── templates/
    ├── schemas/
    └── utilities/
```

### 2. Standardize Workflow Directory Structure

Each workflow subdirectory should follow this pattern:

```
{workflow-name}/
├── {workflow-name}-workflow.yaml    # Main workflow definition
├── {workflow-name}-config.yaml      # Configuration parameters
├── {workflow-name}-steps.yaml       # Step definitions (if custom)
├── {workflow-name}-docs.md          # Workflow documentation
└── tests/                          # Workflow-specific tests
    ├── test_{workflow-name}.py
    └── fixtures/
```

### 3. Create Workflow Registry

Add a `workflow-registry.yaml` file to track all workflows:

```yaml
workflow_registry:
  version: "1.0.0"
  last_updated: "2026-03-09"
  
  workflows:
    release-workflow:
      name: "Release Workflow"
      abbreviation: "RW"
      description: "Complete release process with version management"
      directory: "release-workflow/"
      main_file: "release-workflow.yaml"
      triggers: ["RW", "RW -k", "RW -d"]
      steps: 17
      
    changelog-management-workflow:
      name: "Changelog Management Workflow"
      abbreviation: "CMW"
      description: "Manage changelog size and organization"
      directory: "changelog-management-workflow/"
      main_file: "cmw-workflow.yaml"
      triggers: ["CMW"]
      steps: 5
      
    update-kanban-workflow:
      name: "Update Kanban Workflow"
      abbreviation: "UKW"
      description: "Update Kanban board documentation"
      directory: "update-kanban-workflow/"
      main_file: "ukw-workflow.yaml"
      triggers: ["UKW"]
      steps: 8
      
    post-implementation-review:
      name: "Post-Implementation Review"
      abbreviation: "PIR"
      description: "Review implementation after release"
      directory: "post-implementation-review/"
      main_file: "pir-workflow.yaml"
      triggers: ["PIR"]
      steps: 6
      
  common_components:
    templates: "common/templates/"
    schemas: "common/schemas/"
    utilities: "common/utilities/"
```

### 4. Update Workflow Discovery

Modify workflow loading mechanisms to use the new structure:

1. **Update workflow orchestrator** to read from workflow registry
2. **Modify discovery scripts** to search subdirectories
3. **Update documentation** to reflect new organization
4. **Create migration scripts** for existing workflows

## Acceptance Criteria

### Functional Requirements

1. ✅ **Directory Structure Created**
   - All workflows moved to named subdirectories
   - Consistent structure across all workflow directories
   - Common directory for shared components

2. ✅ **Workflow Registry Implemented**
   - Complete registry of all workflows
   - Metadata for each workflow
   - Easy discovery and loading

3. ✅ **Migration Completed**
   - Existing workflows moved to new structure
   - No broken references or imports
   - All functionality preserved

4. ✅ **Documentation Updated**
   - README reflects new structure
   - Workflow documentation updated
   - Migration guide provided

### Non-Functional Requirements

1. ✅ **Backward Compatibility**
   - Existing workflow functionality unchanged
   - No breaking changes to workflow execution
   - Graceful migration path

2. ✅ **Maintainability**
   - Clear organization makes workflows easy to find
   - Consistent structure simplifies maintenance
   - Easy to add new workflows

3. ✅ **Scalability**
   - Structure supports many workflows
   - No naming conflicts
   - Clear boundaries between workflows

## Implementation Plan

### Phase 1: Analysis and Planning (Day 1)

1. Inventory all existing workflow files
2. Map current files to new structure
3. Identify dependencies and references
4. Create migration plan

### Phase 2: Create New Structure (Day 1)

1. Create workflow subdirectories
2. Set up common directory structure
3. Create workflow registry template
4. Establish naming conventions

### Phase 3: Migrate Existing Workflows (Day 1-2)

1. Move Release Workflow files to `release-workflow/`
2. Organize CMW files to `changelog-management-workflow/`
3. Structure UKW files to `update-kanban-workflow/`
4. Arrange PIR files to `post-implementation-review/`
5. Set up common shared components

### Phase 4: Update References (Day 2)

1. Update workflow orchestrator paths
2. Modify import statements
3. Update documentation references
4. Fix configuration file paths

### Phase 5: Testing and Validation (Day 2)

1. Test all workflow discovery mechanisms
2. Validate workflow execution still works
3. Test new workflow registry functionality
4. Verify documentation accuracy

### Phase 6: Cleanup (Day 2)

1. Remove old empty directories
2. Update README and guides
3. Create maintenance documentation
4. Final validation

## Risks and Mitigations

### Risk: Broken References
- **Mitigation:** Comprehensive search for all file references
- **Fallback:** Keep backup of original structure during migration

### Risk: Workflow Execution Failure
- **Mitigation:** Test each workflow after migration
- **Rollback:** Maintain original structure in parallel during testing

### Risk: Discovery Mechanism Issues
- **Mitigation:** Update all loading code before migration
- **Testing:** Comprehensive testing of workflow discovery

## Timeline

- **Day 1:** Analysis, create structure, begin migration
- **Day 2:** Complete migration, update references, testing
- **Total:** 2 days

## Dependencies

- FR-049 (Canonical RW Steps) - Must reference canonical definitions
- Existing workflow infrastructure - Required for integration
- Workflow orchestrator - Must be updated for new paths

## Success Metrics

1. **Organization** - All workflows in named subdirectories
2. **Discoverability** - Easy to find any workflow
3. **Maintainability** - Clear structure for adding new workflows
4. **Functionality** - All workflows work as before
5. **Documentation** - Clear guides for new structure

---

## Stakeholder Review

**Review Status:** TODO  
**Reviewers:** TBD  
**Review Date:** TBD  
**Approval Status:** TODO

---

*This FR establishes a proper directory structure for workflow management, improving organization, maintainability, and scalability of the workflow system.*

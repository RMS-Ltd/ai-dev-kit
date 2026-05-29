# Workflows Directory Structure Migration Guide

## Overview

This document describes the migration from a flat workflow directory structure to organized workflow-named subdirectories, implemented as part of T107.

## Migration Summary

### Before (Flat Structure)
```
workflows/
├── release-workflow.yaml
├── changelog-management-workflow.yaml
├── update-kanban-workflow.yaml
├── pir-workflow.yaml
├── intake-workflow.yaml
├── migration-workflow.yaml
├── refactor-workflow.yaml
├── testing-workflow.yaml
├── package-version-workflow.yaml
└── framework-health-monitoring-workflow.yaml
```

### After (Organized Structure)
```
workflows/
├── release-workflow/
│   ├── release-workflow.yaml
│   └── release-workflow-config.yaml
├── changelog-management-workflow/
│   ├── changelog-management-workflow.yaml
│   └── cmw-config.yaml
├── update-kanban-workflow/
│   ├── update-kanban-workflow.yaml
│   └── ukw-config.yaml
├── post-implementation-review/
│   ├── pir-workflow.yaml
│   └── pir-config.yaml
├── intake-workflow/
│   ├── intake-workflow.yaml
│   └── intake-config.yaml
├── migration-workflow/
│   ├── migration-workflow.yaml
│   └── migration-config.yaml
├── refactor-workflow/
│   ├── refactor-workflow.yaml
│   └── refactor-config.yaml
├── testing-workflow/
│   ├── testing-workflow.yaml
│   └── testing-config.yaml
├── package-version-workflow/
│   ├── package-version-workflow.yaml
│   └── package-version-config.yaml
├── framework-health-monitoring-workflow/
│   ├── framework-health-monitoring-workflow.yaml
│   └── fhm-config.yaml
├── common/
│   ├── templates/
│   ├── schemas/
│   └── utilities/
└── workflow-registry.yaml
```

## Changes Made

### 1. Directory Structure
- Created workflow-named subdirectories for each workflow
- Added `common/` directory for shared components
- Each workflow now has its own configuration file

### 2. Updated Scripts
- **validate_canonical_steps.py**: Updated path from `workflows/release-workflow.yaml` to `workflows/release-workflow/release-workflow.yaml`
- **install_release_workflow.py**: Updated path from `workflows/release-workflow.yaml` to `workflows/release-workflow/release-workflow.yaml`

### 3. Updated Workflow Files
- **release-workflow.yaml**: Updated internal PIR workflow path from `workflows/pir-workflow.yaml` to `workflows/post-implementation-review/pir-workflow.yaml`

### 4. Updated Documentation
- **README.md**: Updated all workflow file path references
- **cursorrules-ukw-trigger-section.md**: Updated UKW workflow path
- **docs/trigger-aware-rw-documentation.md**: Updated intake workflow path
- **scripts/README-rw-installer.md**: Updated installer documentation paths

### 5. New Components
- **workflow-registry.yaml**: Central registry with metadata for all workflows
- **Config files**: Individual configuration files for major workflows

## Impact on Existing Functionality

### ✅ Preserved Functionality
- All existing workflow functionality remains intact
- No breaking changes to workflow execution
- Backward compatibility maintained where possible

### ✅ Updated Components
- Validation scripts now use new paths
- Installer script updated for new structure
- Documentation reflects current organization

### ✅ New Capabilities
- Workflow registry enables easy discovery
- Individual config files for better customization
- Organized structure supports scalability

## Migration Validation

All changes have been validated through comprehensive testing:

1. **File Location Tests**: All 10 workflow files verified in new locations
2. **Registry Tests**: Workflow registry structure and content validated
3. **Config File Tests**: Essential config files created and verified
4. **Script Tests**: Critical scripts tested with new paths

## Rollback Information

If rollback is needed, the following steps would be required:

1. Move all workflow files back to the root `workflows/` directory
2. Revert script path changes in `validate_canonical_steps.py` and `install_release_workflow.py`
3. Revert internal workflow path references
4. Update documentation back to original paths
5. Remove new directories and config files

## Benefits Achieved

1. **Better Organization**: Workflows are now logically grouped
2. **Improved Maintainability**: Easier to locate and manage specific workflows
3. **Enhanced Scalability**: Simple to add new workflows
4. **Clear Structure**: Consistent naming and organization patterns
5. **Centralized Metadata**: Workflow registry provides easy discovery

## Future Considerations

1. **New Workflows**: Follow the established pattern of creating a subdirectory with main YAML and config file
2. **Config Management**: Consider expanding config files for more workflow customization
3. **Common Components**: Utilize the `common/` directory for shared workflow components
4. **Registry Updates**: Keep workflow-registry.yaml synchronized with any workflow changes

---

**Migration Completed:** 2026-03-09  
**Task:** T107 - Workflows Directory Structure Reorganization  
**Status:** ✅ Complete and Validated

---
lifecycle: evergreen
ttl_days: null
created_at: 2026-03-09T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# FR-049: Canonical RW Step List - Single Source of Truth

**Status:** ✅ **COMPLETE**  
**Priority:** HIGH - Prevents duplication and drift in RW step definitions  
**Estimated Effort:** Completed  
**Created:** 2026-03-09  
**Last updated:** 2026-04-09  
**Implementation Date:** 2026-03-09  
**Version:** v0.2.1.15+2  
**Code:** E2:S01:T15  
**Implementing Task:** [E2:S01:T15](../epics/Epic-2/Story-001-rw-agent-execution-and-docs/T15-canonical-rw-step-list-single-source-of-truth-fr049.md)

---

## Problem Statement

The Release Workflow (RW) canonical step list is currently defined in multiple places across the codebase, creating risks of:

1. **Duplication** - Same steps defined in multiple files

2. **Drift** - Step definitions become inconsistent over time

3. **Maintenance burden** - Changes require updates in multiple locations

4. **Confusion** - Different documents may show different step counts or descriptions

Additionally, Step 13 needs clarification to explicitly include "Housekeeping" in its definition.

## Current State Analysis

### Locations with RW Step Definitions

1. **`release-workflow.yaml`** - YAML workflow definition (17 steps)

2. **`cursorrules-rw-trigger-section.md`** - TODO lists for different triggers

3. **`README.md`** - Documentation and verification checklist

4. **`workflow_orchestrator.py`** - Execution path definitions

5. **Various documentation files** - Scattered references

### Step 13 Definition Issues

Current inconsistent definitions:
- Some locations: "Post-Commit Verification & Reflection"
- Other locations: "Post-Commit Verification, Housekeeping & Reflection"
- Missing explicit "Housekeeping" requirement in some references

## Proposed Solution

### 1. Create Canonical Step List Definition

Create a single authoritative source file:

**File:** `packages/frameworks/workflow mgt/canonical-rw-steps.yaml`

```yaml
canonical_rw_steps:
  step_1:
    number: 1
    name: "Branch Safety Check"
    description: "Verify work aligns with branch context"
    mandatory: true
    blocking: true
  
  step_2:
    number: 2
    name: "Bump Version"
    description: "Increment version number based on schema (BUILD for same task, or TASK+BUILD=1 for new task)"
    mandatory: true
  
  step_3:
    number: 3
    name: "Create Detailed Changelog"
    description: "Create detailed changelog archive with full timestamp and PLAN section"
    mandatory: true
  
  step_4:
    number: 4
    name: "Update Main Changelog"
    description: "Add summary entry with short date (DD-MM-YY)"
    mandatory: true
  
  step_5:
    number: 5
    name: "Update README"
    description: "Update version references if present (optional)"
    mandatory: false
  
  step_6:
    number: 6
    name: "Auto-update Kanban Docs"
    description: "Update ALL sections (header, checklist, detailed story sections) to match authoritative Story file"
    mandatory: true
  
  step_7:
    number: 7
    name: "Stage Files"
    description: "Stage all modified files for commit"
    mandatory: true
  
  step_8:
    number: 8
    name: "Check for and Address IDE-Flagged Problems"
    description: "Check errors, warnings, infos in order"
    mandatory: true
  
  step_9:
    number: 9
    name: "Run Validators"
    description: "Execute branch context and changelog format validators"
    mandatory: true
  
  step_9_5:
    number: 9.5
    name: "Changelog Management Workflow (CMW)"
    description: "Trigger CMW if changelog size exceeds threshold (optional, non-blocking)"
    mandatory: false
  
  step_10:
    number: 10
    name: "Commit Changes"
    description: "Create git commit with versioned message"
    mandatory: true
  
  step_11:
    number: 11
    name: "Create Git Tag"
    description: "Create annotated tag"
    mandatory: true
  
  step_12:
    number: 12
    name: "Push to Remote"
    description: "Push branch and tags (with network permissions)"
    mandatory: true
  
  step_13:
    number: 13
    name: "Post-Commit Verification, Housekeeping & Reflection"
    description: "Verify release, perform housekeeping tasks, and reflect on process (optional but recommended)"
    mandatory: false
    recommended: true
  
  step_14:
    number: 14
    name: "Act on Verification Results"
    description: "Address any issues found during verification (optional, agent-determined)"
    mandatory: false
  
  step_15:
    number: 15
    name: "Check for PIR Trigger"
    description: "Determine if Post-Implementation Review is needed"
    mandatory: false
  
  step_16:
    number: 16
    name: "Housekeeping"
    description: "Clean up temporary files and IDE todos"
    mandatory: false
  
  step_17:
    number: 17
    name: "Complete"
    description: "Final verification and cleanup"
    mandatory: false

execution_paths:
  full_release:
    trigger: "RW"
    steps: [1, 2, 3, 4, 5, 6, 7, 8, 9, 9.5, 10, 11, 12, 13, 14, 15, 16, 17]
    description: "Complete release with all operations"
  
  kanban_init:
    trigger: "RW -k"
    steps: [1, 2, 3, 4, 7, 11, 12]
    description: "Initial Kanban documentation commit"
    step_modifications:
      7:
        mode: "kanban_init"
        updates: ["changelog", "version_number", "kanban_docs"]
  
  documentation_only:
    trigger: "RW -d"
    steps: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14]
    description: "Documentation updates without full release cycle"
    skips: ["git_tag", "push", "pir_trigger", "housekeeping"]
```

### 2. Update All References to Use Canonical Definition

Modify all files to reference the canonical step list:

1. **`release-workflow.yaml`** - Load from canonical definition

2. **`workflow_orchestrator.py`** - Use canonical execution paths

3. **`cursorrules-rw-trigger-section.md`** - Generate TODO lists from canonical steps

4. **`README.md`** - Reference canonical definition

5. **Documentation files** - Point to canonical source

### 3. Create Validation Script

Create `scripts/validate_canonical_steps.py` to ensure:
- All references match canonical definition
- No drift between different sources
- Step numbers and names are consistent

## Acceptance Criteria

### Functional Requirements

1. ✅ **Canonical Definition Created**
   - Single YAML file with complete step definitions
   - All 17 steps properly defined with metadata
   - Step 13 explicitly includes "Housekeeping"

2. ✅ **Execution Paths Defined**
   - All three trigger paths defined in canonical file
   - Step modifications clearly specified
   - Optional/recommended steps properly marked

3. ✅ **All References Updated**
   - `workflow_orchestrator.py` loads from canonical definition
   - `cursorrules-rw-trigger-section.md` uses canonical steps
   - `README.md` references canonical source
   - No hardcoded step lists remain

4. ✅ **Validation Implemented**
   - Script to detect drift between sources
   - Automated validation in CI/CD pipeline
   - Clear error reporting for inconsistencies

### Non-Functional Requirements

1. ✅ **Single Source of Truth**
   - Only one place to update step definitions
   - All consumers load from canonical file
   - No duplication of step metadata

2. ✅ **Backward Compatibility**
   - Existing functionality unchanged
   - All triggers work as before
   - No breaking changes to APIs

3. ✅ **Maintainability**
   - Easy to add new steps
   - Clear modification process
   - Version-controlled changes

## Implementation Plan

### Phase 1: Create Canonical Definition (Day 1)

1. Create `canonical-rw-steps.yaml` with complete step definitions
2. Define execution paths for all trigger types
3. Include Step 13 with explicit "Housekeeping"

### Phase 2: Update Core Components (Day 1-2)

1. Modify `workflow_orchestrator.py` to load canonical steps
2. Update `release-workflow.yaml` to reference canonical definition
3. Create helper functions for step loading

### Phase 3: Update Documentation (Day 2)

1. Update `cursorrules-rw-trigger-section.md`
2. Modify `README.md` to reference canonical source
3. Update other documentation files

### Phase 4: Validation & Testing (Day 2)

1. Create validation script

2. Update integration tests

3. Verify all functionality works

### Phase 5: Cleanup (Day 2)

1. Remove duplicated step definitions

2. Update CI/CD pipeline

3. Final testing and validation

## Risks and Mitigations

### Risk: Breaking Changes

- **Mitigation:** Maintain backward compatibility during transition

- **Fallback:** Keep old definitions as backup during migration

### Risk: Loading Performance

- **Mitigation:** Cache canonical definition after first load

- **Monitoring:** Add performance metrics for step loading

### Risk: Complex Dependencies
- **Mitigation:** Phase-by-phase rollout with testing at each stage
- **Rollback:** Keep previous implementation available

## Timeline

- **Day 1:** Create canonical definition and update core components
- **Day 2:** Update documentation, add validation, complete migration
- **Total:** 2 days

## Dependencies

- FR-048 (RW Trigger Extensions) - Must be completed first
- Existing workflow infrastructure - Required for integration

## Success Metrics

1. **Zero duplication** - Only one place defines RW steps
2. **Consistent references** - All documents show same step definitions
3. **Easy maintenance** - Adding/modifying steps requires single file change
4. **Automated validation** - Drift detected automatically

---

## Stakeholder Review

**Review Status:** ✅ **IMPLEMENTATION COMPLETE**  
**Reviewers:** Implementation Team  
**Review Date:** 2026-03-09  
**Approval Status:** ✅ **IMPLEMENTED**

---

## Implementation Summary

### ✅ COMPLETED - 2026-03-09

### What Was Implemented

1. **Canonical Step Definition** - Created `canonical-rw-steps.yaml`:
   - All 17 RW steps with full metadata
   - Step 13 explicitly includes "Housekeeping"
   - Execution paths for all trigger types
   - Complete step descriptions and categories

2. **Canonical Steps Loader** - Created `canonical_steps.py`:
   - Python module to load and access canonical definitions
   - Functions for step lookup, execution paths, and trigger handling
   - Type-safe step definitions with dataclasses
   - Easy integration for existing code

3. **Updated Workflow Orchestrator** - Modified `workflow_orchestrator.py`:
   - Removed hardcoded step lists and execution paths
   - Integrated with canonical steps loader
   - Maintains backward compatibility
   - Uses single source of truth for all step operations

4. **Validation Script** - Created `validate_canonical_steps.py`:
   - Detects drift between canonical definition and other files
   - Validates Step 13 includes "Housekeeping"
   - Reports inconsistencies across codebase
   - Automated fixing capabilities

5. **Fixed Step 13 Definition** - Updated documentation:
   - Cursor rules now include "Housekeeping" in Step 13
   - README already had correct definition
   - All references now match canonical definition

### Key Benefits Achieved

- ✅ **Single Source of Truth** - Only canonical-rw-steps.yaml defines steps
- ✅ **No Duplication** - Hardcoded step lists eliminated
- ✅ **Drift Prevention** - Validation script detects inconsistencies
- ✅ **Step 13 Clarity** - "Housekeeping" explicitly included
- ✅ **Backward Compatibility** - All existing functionality preserved
- ✅ **Easy Maintenance** - Adding steps requires single file update

### Testing

- Canonical steps loader tested ✅
- Validation script created and tested ✅
- Step 13 definition verified across all files ✅
- No breaking changes to existing functionality ✅

---

*This FR establishes a single source of truth for RW step definitions, preventing duplication and drift while clarifying Step 13's housekeeping requirement.*

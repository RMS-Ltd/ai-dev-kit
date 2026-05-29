---
lifecycle: evergreen
ttl_days: null
created_at: 2026-03-09T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# FR-048: RW Trigger Extensions for Multiple Use Cases

**Status:** ✅ **COMPLETE**  
**Priority:** HIGH - Addresses workflow flexibility needs for different release scenarios  
**Estimated Effort:** Completed  
**Created:** 2026-03-09  
**Last updated:** 2026-04-09  
**Implementation Date:** 2026-03-09  
**Version:** v0.2.1.14+2  
**Code:** E2:S01:T14  
**Implementing Task:** [E2:S01:T14](../epics/Epic-2/Story-001-rw-agent-execution-and-docs/T14-rw-trigger-extensions-multiple-use-cases-fr048.md)

---

## Problem Statement

The current Release Workflow (RW) trigger only supports a single use case (`RW`) that executes all 17 canonical steps. However, there are three distinct use cases needed for different release scenarios:

1. **Full Release Workflow** - Complete release with all operations
2. **Initial Kanban Documentation Commit** - Documentation setup without Git operations
3. **Documentation-Only Release** - Documentation updates without full release cycle

## Proposed Solution

Extend the RW trigger system to support multiple use cases with distinct execution paths:
### Use Case 1: Full Release Workflow

- **Trigger:** `RW`

- **Steps:** All 17 canonical steps (1-17)

- **Purpose:** Complete production releases
### Use Case 2: Initial Kanban Documentation Commit

- **Trigger:** `RW -k`

- **Steps:** [1, 2, 3, 4, 7, 11, 12] from canonical list

- **Purpose:** Set up Kanban docs with version info and changelog

- **Constraints:** 
  - Step 7 modified to only update changelog, version number, and Kanban docs
  - No Git operations (skip push, verification, PIR, housekeeping)

### Use Case 3: Documentation-Only Release

- **Trigger:** `RW -d`

- **Steps:** [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14] from canonical list

- **Purpose:** Documentation updates without full release cycle

- **Constraints:**
  - Skip Git tag, push, PIR trigger, housekeeping
  - Step 14 optional - agent determines if verification actions needed


## Acceptance Criteria
### Functional Requirements

- [ ] **FR-048-01:** Extend cursor rules to recognize `RW -k` and `RW -d` triggers

- [ ] **FR-048-02:** Implement path filtering logic in workflow orchestrator

- [ ] **FR-048-03:** Modify Step 7 behavior for `RW -k` (documentation-only updates)

- [ ] **FR-048-04:** Implement step skipping logic for `RW -d`

- [ ] **FR-048-05:** Add conditional logic for optional Step 14 in `RW -d`
### Integration Requirements

- [ ] **FR-048-06:** Maintain backward compatibility with existing `RW` trigger

- [ ] **FR-048-07:** Ensure configuration loading works for all trigger types

- [ ] **FR-048-08:** Update documentation and examples
### Quality Requirements

- [ ] **FR-048-09:** Add validation tests for each trigger type

- [ ] **FR-048-10:** Update cursor rules documentation with new patterns

- [ ] **FR-048-11:** Add error handling for invalid trigger combinations

## Implementation Approach
### Phase 1: Trigger Recognition
1. **Update cursor rules** to recognize new trigger patterns
2. **Add trigger parsing logic** to workflow orchestrator
3. **Implement path selection** based on trigger type
### Phase 2: Step Modification
1. **Modify Step 7** for documentation-only mode
2. **Implement step skipping logic** for selective execution
3. **Add conditional step execution** for optional steps
### Phase 3: Integration & Testing
1. **Update configuration handling** for all trigger types
2. **Add comprehensive tests** for each use case
3. **Update documentation** and examples

## Technical Details
### Trigger Pattern Extensions

```python
# Current: "RW" or "rw"
# Extended: "RW", "RW -k", "RW -d" (case-insensitive)

def parse_trigger(trigger_input):
    trigger_input = trigger_input.lower().strip()
    if trigger_input == "rw":
        return "full_release"
    elif trigger_input == "rw -k":
        return "kanban_init"
    elif trigger_input == "rw -d":
        return "documentation_only"
    else:
        raise ValueError(f"Invalid trigger: {trigger_input}")

```
### Path Mapping Logic

```python
EXECUTION_PATHS = {
    "full_release": list(range(1, 18)),  # Steps 1-17
    "kanban_init": [1, 2, 3, 4, 7, 11, 12],  # Documentation setup
    "documentation_only": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14]  # Docs only
}

```
### Step Modifications Required

#### Step 7 (Kanban Update) - Documentation Mode

```python
def step_7_kanban_update(mode="full"):
    if mode == "kanban_init":
        # Only update changelog, version number, and Kanban docs
        update_changelog()
        update_version_number()
        update_kanban_docs()
    else:
        # Full Kanban update
        full_kanban_update()

```

#### Step Skipping Logic

```python
def should_execute_step(step_number, trigger_type):
    execution_path = EXECUTION_PATHS[trigger_type]
    return step_number in execution_path

```

## Dependencies
### Required Components

- **Workflow Orchestrator:** Path filtering logic

- **Cursor Rules:** Trigger pattern recognition

- **Step Implementations:** Conditional execution support

- **Configuration System:** Multi-trigger support
### External Dependencies

- **Git Operations:** Selective execution based on trigger

- **Documentation System:** Mode-specific updates

- **Validation System:** Trigger-specific validation

## Risk Assessment
### Technical Risks

- **Low:** Backward compatibility issues (mitigated by keeping `RW` unchanged)

- **Medium:** Step dependency conflicts (mitigated by careful path design)

- **Low:** Configuration complexity (mitigated by clear trigger patterns)
### Operational Risks

- **Low:** User confusion with new triggers (mitigated by documentation)

- **Medium:** Accidental wrong trigger usage (mitigated by validation)

## Success Metrics
### Functional Metrics

- **100%** backward compatibility with existing `RW` trigger

- **100%** correct step execution for each trigger type

- **< 5 seconds** additional overhead for trigger parsing
### Quality Metrics

- **0** regression bugs in existing functionality

- **100%** test coverage for new trigger patterns

- **Complete documentation** for all use cases

## Timeline
### Phase 1: Trigger Recognition (2-3 days)

- Day 1: Update cursor rules and trigger parsing

- Day 2: Implement path selection logic

- Day 3: Basic testing and validation
### Phase 2: Step Modifications (3-4 days)

- Day 1: Modify Step 7 for documentation mode

- Day 2: Implement step skipping logic

- Day 3: Add conditional step execution

- Day 4: Integration testing
### Phase 3: Integration & Documentation (2 days)

- Day 1: Update configuration and documentation

- Day 2: Final testing and validation

**Total Estimated Effort:** 7-9 days

## Related Artifacts
### Related FRs

- **FR-013:** Trigger-Aware Release Workflow (foundation)

- **FR-015:** Harden Kanban Docs Update in Release Workflow

- **FR-046:** RW SemVer Tag Task Touch Mode
### Related Documents

- `packages/frameworks/workflow mgt/workflows/release-workflow.yaml`

- `packages/frameworks/workflow mgt/cursorrules-rw-trigger-section.md`

- `packages/frameworks/workflow mgt/scripts/workflow_orchestrator.py`
### Related Epics/Stories

- **Epic 2:** Workflow Management Framework

- **Epic 6:** Framework Management and Maintenance

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

1. **Trigger Pattern Recognition** - Extended cursor rules to recognize three trigger patterns:
   - `RW` - Full Release Workflow (17 steps)
   - `RW -k` - Initial Kanban Documentation Commit (7 steps)
   - `RW -d` - Documentation-Only Release (13 steps)

2. **Path Filtering Logic** - Implemented in `workflow_orchestrator.py`:
   - `parse_rw_trigger()` - Parses trigger input to TriggerType enum
   - `get_execution_path()` - Returns step list for each trigger type
   - `should_execute_step()` - Determines if step should execute for trigger
   - `get_step_modifications()` - Provides trigger-specific step modifications

3. **Mode-Specific Behavior** - Enhanced `update_kanban_docs.py`:
   - Added `--mode` parameter (`full` or `kanban_init`)
   - Mode-specific target state derivation
   - Limited updates in kanban_init mode (version, changelog, basic docs)

4. **TODO List Management** - Updated cursor rules with trigger-specific step lists:
   - 17 steps for full release
   - 7 steps for kanban init
   - 13 steps for documentation-only

5. **Documentation Updates** - Updated README.md with:
   - New trigger explanations
   - Execution path details
   - Updated verification checklist

### Testing

- Created comprehensive integration test (`test_rw_triggers.py`)
- All trigger parsing, execution paths, and step filtering verified
- Mode parameter functionality confirmed
- All tests passing ✅

### Backward Compatibility

- ✅ Existing `RW` trigger unchanged (17 steps)
- ✅ All existing functionality preserved
- ✅ New triggers are additive only

---

*This FR enables flexible release workflow execution while maintaining backward compatibility and providing clear use case separation.*

# Changelog: v0.2.8.3+1

**Release Date:** 2025-12-15  
**Epic:** Epic 2 (Workflow Management Framework)  
**Story:** Story 8 (Harden Release Workflow Reliability)  
**Task:** Task 3 (Make Step 7 mandatory and blocking)  
**Version:** v0.2.8.3+1

---

## Summary

Hardened RW Step 7 (Auto-update Kanban Docs) by making it mandatory and blocking, and wiring in the framework-agnostic script from T02. The workflow will now always update Kanban docs and block if updates fail, preventing inconsistent documentation state.

---

## PLAN

**Objective:**  
Update RW Step 7 configuration to enforce mandatory, blocking behavior and integrate the framework-agnostic script from T02.

**Scope:**  
- Update `release-workflow.yaml` Step 7 configuration
- Change `required: false` to `required: true`
- Add `mandatory: true` and `blocking: true` flags
- Update handler to use framework-agnostic implementation
- Update script path to use framework script

**Approach:**  
1. Update workflow YAML Step 7 configuration
2. Change handler from project-specific to framework-agnostic
3. Update script path to framework script location
4. Add config flag for rw-config.yaml usage

---

## Changes

### Modified Files

- **`packages/frameworks/workflow mgt/workflows/release-workflow.yaml`**
  - **Step 7 configuration updated:**
    - `required: false` → `required: true` (mandatory)
    - Added `mandatory: true` (explicit mandatory flag)
    - Added `blocking: true` (workflow blocks on failure)
    - Handler: `confidentia.kanban_update` → `framework.kanban_update` (framework-agnostic)
    - Script path: `scripts/automation/update_kanban_docs.py` → `packages/frameworks/workflow mgt/scripts/update_kanban_docs.py`
    - Added `use_rw_config: true` (enable config-driven path resolution)
    - Updated `kanban_board` path to canonical default

**Key Changes:**
- Step 7 is now **mandatory** - cannot be skipped
- Step 7 is now **blocking** - workflow stops if update fails
- Uses framework-agnostic script from T02
- Config-driven path resolution enabled

---

## Related Work

- **FR-015:** Harden Kanban Docs Update in Release Workflow
- **E2:S08:** Harden Release Workflow Reliability
- **E2:S08:T02:** Create framework-agnostic Kanban update script (provides script for this task)
- **E2:S08:T04:** Add validation step (next task, will enhance validation)
- **E2:S08:T05:** Implement error handling (will add comprehensive error handling)
- **E2:S08:T06:** Update RW documentation (will document Step 7 hardening)
- **E2:S08:T07:** Testing and validation (will test mandatory/blocking behavior)

---

## Impact

**For Framework Users:**
- Kanban docs are **always** updated during RW (no more skipped updates)
- RW **blocks** if Kanban docs update fails (prevents inconsistent state)
- Clear error messages guide recovery when blocking occurs
- Framework-agnostic implementation works across all projects

**For Workflow Reliability:**
- Enforces consistency between code releases and Kanban documentation
- Prevents documentation drift
- Provides clear failure signals (RW BLOCKED at Step 7)
- Enables deterministic, reliable Kanban updates

---

## Next Steps

1. **E2:S08:T04:** Add formal validation step (enhance script validation logic)
2. **E2:S08:T05:** Implement comprehensive error handling and recovery guidance
3. **E2:S08:T06:** Update RW documentation with Step 7 hardening details
4. **E2:S08:T07:** Test mandatory/blocking behavior with comprehensive test matrix

---

**Version:** v0.2.8.3+1  
**Completed:** 2025-12-15

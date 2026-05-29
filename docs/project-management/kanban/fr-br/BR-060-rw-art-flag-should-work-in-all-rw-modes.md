---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-08T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Bug Report BR-060: RW `--art` Flag Not Fully Applied Through Step 9

**Bug ID:** BR-060  
**Task ID:** E6:S06:T58  
**Priority:** HIGH  
**Severity:** HIGH (blocks intended release attribution flow)  
**Status:** ✅ COMPLETE (v0.6.6.58+2)  
**Created:** 2026-04-08  
**Classification:** Workflow bug + policy/docs mismatch

---

## Bug Summary

`RW ... --art` can still fail at Step 9 even after Step 1d adoption succeeds, because branch/version validators were not receiving the same adoption context. This causes an avoidable abort when the user intentionally requests canonical adoption for a standard RW run.

---

## Problem Description

### Observed Behavior

- User runs a regular RW command with `--art` for intentional anchor adoption.
- Step 1d (`validate_rw_task_intent.py`) can pass with `--art`.
- Step 9 then aborts on branch/version mismatch because validator context is not propagated.

### Expected Behavior

- `--art` should be valid for **all RW trigger modes** (`RW`, `RW -d`, `RW -k`) with consistent semantics across **Step 1d and Step 9**:
  - explicit adoption of the requested task as canonical release anchor.
  - continued enforcement of mandatory task token and task-doc checks.

### Root Cause

- Validator chain and docs were out of sync:
  - Step 1d accepted `--art`, but Step 9 validators did not consistently consume requested/adoption context.
  - rule/docs did not require propagation of `--requested ... --art` into Step 9.

---

## Proposed Solution

1. Keep all-mode `--art` support in `validate_rw_task_intent.py` (Step 1d).
2. Extend Step 9 validators to accept `--requested` and `--art` (`validate_branch_context.py`, `validate_version_bump.py`).
3. Update root `.cursorrules` and packaged RW trigger excerpt to require `--art` propagation in Step 9.
4. Update RW execution docs and parity checklist so Step 9 behavior matches Step 1d adoption intent.

---

## Acceptance Criteria

- [ ] Regular `RW E:S:T --art` does not fail due to Step 1d/Step 9 adoption-context mismatch.
- [ ] `RW -d ... --art` and `RW -k ... --art` use the same documented adoption semantics through Step 9.
- [ ] `.cursorrules` and `packages/frameworks/workflow mgt/cursorrules-rw-trigger-section.md` are aligned.
- [ ] RW execution docs and parity checklist explicitly reflect all-mode `--art` support.
- [ ] Step 9 validator invocation docs include `--requested "<token>" --art` propagation.

---

## Resolution

- Implemented all-mode `--art` support in `validate_rw_task_intent.py` (Step 1d).
- Implemented `--requested` + `--art` support in Step 9 validators (`validate_branch_context.py`, `validate_version_bump.py`).
- Updated RW rules/policy/docs and parity docs to require Step 9 adoption-context propagation.
- Release and follow-up cleanup are tracked under `E6:S06:T58` (`v0.6.6.58+1`, `v0.6.6.58+2`).

---

## References

- BR-056 (RW task intent mismatch guard)
- FR-060 (mandatory RW task token and task-doc guardrails)

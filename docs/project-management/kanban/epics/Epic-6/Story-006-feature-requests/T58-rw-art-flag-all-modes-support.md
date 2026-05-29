---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-08T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Task T58 - RW `--art` Support for All RW Modes (BR-060)

**Task ID:** E6:S06:T58  
**Status:** ✅ COMPLETE (v0.6.6.58+2)  
**Priority:** HIGH  
**Estimated Effort:** Small (0.5-1 day)  
**Created:** 2026-04-08

**Associated BR:** [BR-060](../../../fr-br/BR-060-rw-art-flag-should-work-in-all-rw-modes.md)

---

## Task ID

**Format:** `E{epic}:S{story}:T{task}`  
**Full Task ID:** `E6:S06:T58`

---

## Scope

Make `--art` usable across all Release Workflow modes (`RW`, `RW -d`, `RW -k`) by aligning validator behavior and RW documentation/policy so explicit canonical adoption does not fail in regular RW runs, including Step 9 validator execution.

---

## Input

- [BR-060](../../../fr-br/BR-060-rw-art-flag-should-work-in-all-rw-modes.md)
- `packages/frameworks/workflow mgt/scripts/validation/validate_rw_task_intent.py`
- `packages/frameworks/workflow mgt/scripts/validation/validate_branch_context.py`
- `packages/frameworks/workflow mgt/scripts/validation/validate_version_bump.py`
- `.cursorrules`
- `packages/frameworks/workflow mgt/cursorrules-rw-trigger-section.md`

---

## Deliverable

- Validator supports `--art` in all modes.
- Step 9 validators support `--requested` + `--art` propagation.
- RW rules/docs explicitly document all-mode `--art`.
- Parity checklist updated to enforce dual-source alignment.
- Regression scenario includes regular RW + `--art`.

---

## Acceptance Criteria

- [ ] `validate_rw_task_intent.py --requested E5:S01:T72 --art` returns pass semantics for explicit adoption.
- [ ] `validate_branch_context.py --strict --requested E6:S06:T58 --art` applies requested anchor context.
- [ ] `validate_version_bump.py --strict --requested E6:S06:T58 --art` validates against requested anchor context.
- [ ] `.cursorrules` Step 1d text documents `--art` for regular RW and `RW -d`, not only `RW -k`.
- [ ] Packaged RW trigger section mirrors root `.cursorrules` behavior.
- [ ] `release-workflow-agent-execution.md` Step 1.5 documents all-mode `--art`.
- [ ] `run_validate_rw_task_intent_scenarios.sh` includes regular-mode `--art` scenario.

---

## References

- BR-056, FR-060

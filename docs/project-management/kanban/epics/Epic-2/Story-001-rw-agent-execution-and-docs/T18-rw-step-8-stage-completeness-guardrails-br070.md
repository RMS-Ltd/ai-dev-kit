---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-22T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Task E2:S01:T18 - RW Step 8 stage-completeness guardrails (BR-070)

**Task ID:** E2:S01:T18
**Status:** COMPLETE
**Priority:** HIGH
**Created:** 2026-04-22
**Last updated:** 2026-05-15
**Version Anchor:** v0.2.1.18+1
**Code:** E2S01T18

**Upstream:** [BR-070](../../../fr-br/BR-070-rw-k-stage-files-completeness-gap-allows-partial-kanban-commit.md)

---

## Summary

Harden RW Step 8 so release commits cannot omit Step-7 outputs. Add deterministic staging completeness checks for `RW -k` and explicit fail-fast diagnostics when task-scoped Kanban artifacts are modified but not staged. Post-commit verification (BR-070 AC4) implemented as belt-and-suspenders check after commit.

---

## Deliverable

- Step-8 staging completeness guardrail (modified-vs-staged parity for Step-7 outputs)
- `RW -k` task-slice must-include checks for touched Kanban docs
- Regression tests for partial-stage omission scenarios
- Updated RW agent execution documentation with explicit blocking behavior
- Post-commit completeness validator (`validate_rw_step7_post_commit.py`)

---

## Input

- [BR-070](../../../fr-br/BR-070-rw-k-stage-files-completeness-gap-allows-partial-kanban-commit.md)
- [IPW Plan — E2:S01:T18](../../../../../../.claude/plans/e2-s01-t18-polished-cerf.md)

---

## Acceptance Criteria

- [x] **AC1:** Release run fails if any Step-7 output file remains unstaged before commit. *(Wave 5: `validate_rw_step7_completeness.py` pre-commit gate)*
- [x] **AC2:** `RW -k` enforces must-include staging for touched task-slice Kanban docs. *(Wave 5: four-surface report drives must-include set)*
- [x] **AC3:** Error output names missing files and remediation action (`stage all` / rerun Step 8). *(Wave 5: per-path diagnostics + recovery guidance)*
- [x] **AC4:** Regression tests cover partial-stage omission and pass on hardened path. *(Implemented: `test_validate_rw_step7_post_commit.py` — 8 tests all green)*
- [x] **AC5:** BR-070 and Story E2:S01 wiring is bidirectionally consistent. *(T18 task doc linked to BR-070; BR-070 references T18; both updated)*

---

## Completion Evidence

- Pre-commit validator: `packages/frameworks/workflow mgt/scripts/validate_rw_step7_completeness.py` (9 tests, all green)
- Post-commit validator: `packages/frameworks/workflow mgt/scripts/validate_rw_step7_post_commit.py` (8 tests, all green)
- Test suites: `test_validate_rw_step7_completeness.py`, `test_validate_rw_step7_post_commit.py`
- RW execution guide: Step 11.5 documented in `release-workflow-agent-execution.md`
- Workflow YAML: `step-10.5` added to `release-workflow.yaml`

---

## Links

- [BR-070](../../../fr-br/BR-070-rw-k-stage-files-completeness-gap-allows-partial-kanban-commit.md)
- [Story E2:S01](../Story-001-rw-agent-execution-and-docs.md)
- [Release Workflow Agent Execution Guide](../../../../../packages/frameworks/workflow%20mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md)

---

## References

- [IPW Plan — E2:S01:T18](../../../../../../.claude/plans/e2-s01-t18-polished-cerf.md)
- `packages/frameworks/workflow mgt/scripts/validate_rw_step7_completeness.py`
- `packages/frameworks/workflow mgt/scripts/test_validate_rw_step7_completeness.py`
- `packages/frameworks/workflow mgt/scripts/validate_rw_step7_post_commit.py`
- `packages/frameworks/workflow mgt/scripts/test_validate_rw_step7_post_commit.py`
- `packages/frameworks/workflow mgt/scripts/validate_release_readiness.py` (Gate 5)

---

✅ COMPLETE (v0.2.1.18+1)

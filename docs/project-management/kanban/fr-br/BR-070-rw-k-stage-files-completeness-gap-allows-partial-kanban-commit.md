---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-22T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Bug Report BR-070: RW-k Stage Files completeness gap allows partial Kanban commit

**Status:** CLOSED (all ACs complete as of 2026-05-15)  
**Priority:** HIGH  
**Severity:** HIGH  
**Created:** 2026-04-22  
**Last updated:** 2026-05-15 (AC4 closed by E2:S01:T18)  
**Version:** N/A  
**Code:** BR-070  

**Implementing Task:** [E2:S01:T18](../epics/Epic-2/Story-001-rw-agent-execution-and-docs/T18-rw-step-8-stage-completeness-guardrails-br070.md)  
**Closure gated on:** [FR-092 — Canonical RW/UKW kanban consistency program (meta)](FR-092-canonical-rw-ukw-kanban-consistency-program.md) / [E2:S15:T07](../epics/Epic-2/Story-015-ipw-governance-and-publication-contract/T07-canonical-rw-ukw-kanban-consistency-program-fr092.md) Wave 5 + Wave 8

> **Gating note (2026-04-27):** Stage completeness invariant (Step-8 stage-set parity) is owned end-to-end by FR-092 Bucket C2 + Wave 5. The `validate_rw_step7_completeness.py` validator and Step-8 enforcement are deliverables of FR-092 Wave 5; final BR-070 closure is gated on those artifacts shipping under FR-092 sign-off.
>
> **Wave 5 progress (2026-04-27):** Validator implemented at [`validate_rw_step7_completeness.py`](../../../../packages/frameworks/workflow%20mgt/scripts/validate_rw_step7_completeness.py) with 9 unit tests (all green) at [`test_validate_rw_step7_completeness.py`](../../../../packages/frameworks/workflow%20mgt/scripts/test_validate_rw_step7_completeness.py); Step 8 in [`release-workflow-agent-execution.md`](../../../../packages/frameworks/workflow%20mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md) extended with `stage_set_completeness` enforcement block. AC1–AC5 drafted satisfied below; final closure still gated on Wave 8 RW dry-run.
>
> **Wave 7 + Wave 8 sign-off (2026-04-27):** Stage-set completeness is composed into the FR-092 Wave 7 release-readiness gate as Gate 5 in [`validate_release_readiness.py`](../../../../packages/frameworks/workflow%20mgt/scripts/validate_release_readiness.py); wired into RW Step 10 (Run Validators) via `release_readiness_gate.blocking: true`. Wave 8 live demonstration: against the in-progress repo state with 12 unstaged FR-092 Wave 0-7 artefacts, Gate 5 returned exit 1 with per-path diagnostics naming every modified-unstaged and untracked Step-7 output, blocking RW commit — exactly the contracted behavior. **AC1, AC2, AC3, AC5 closed; AC4 (post-commit verification) deferred to live RW E2:S15:T07 --art (Wave 8 terminal).**
>
> **AC4 closure (2026-05-15):** Post-commit verification validator [`validate_rw_step7_post_commit.py`](../../../../packages/frameworks/workflow%20mgt/scripts/validate_rw_step7_post_commit.py) implemented under [E2:S01:T18](../epics/Epic-2/Story-001-rw-agent-execution-and-docs/T18-rw-step-8-stage-completeness-guardrails-br070.md) with 8 unit tests (all green). Validator runs after `git commit` (RW Step 11) and before `git tag` (Step 12), proving the release commit contains every Step-7 output. RW execution guide updated with Step 11.5 documentation; `release-workflow.yaml` updated with `step-10.5`. **All BR-070 ACs now closed.**

---

## Problem Statement

`RW -k` intends scoped Kanban release behavior for the requested task slice, and Step 8 policy requires staging all modified files (`git add -A` / `git.stage_all`). In practice, a partial manual staging path can still pass validators and create a release commit that omits Step 7 outputs.

Observed failure mode: Step 7 (`update_kanban_docs.py --mode kanban_init`) modified task-adjacent Kanban files (including `kboard.md` and `Epic-2.md`), but those files were not staged into the release commit while other release files were committed and pushed.

---

## Expected Behavior

- If Step 7 modifies files, Step 8 must stage **all Step-7 outputs** before commit.
- `RW -k` must fail fast if task-scoped Kanban artifacts touched by Step 7 remain unstaged.
- Post-commit verification must prove no Step-7 output file was omitted.

---

## Observed Behavior

- Release commit succeeded with a subset of modified files.
- Two Step-7 output files remained as local unstaged drift after push.
- Existing validators did not block this partial commit scenario.

---

## Scope / Affected Areas

- `packages/frameworks/workflow mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md` (Step 8 enforcement clarity + Step 11.5 post-commit verification)
- `packages/frameworks/workflow mgt/workflows/release-workflow/release-workflow.yaml` (step contract / handlers)
- Step-8 staging behavior and validator gates around staged-vs-modified set parity
- `RW -k` scoped Kanban release reliability for task-associated docs (`Story`, `Epic`, `kboard`, `fbuboard`)
- Post-commit verification validator (`validate_rw_step7_post_commit.py`)

---

## Acceptance Criteria

- [x] Step 8 enforces stage completeness invariant: no modified Step-7 output remains unstaged at commit boundary. *(Wave 5: validator + Step 8 doc enforcement)*
- [x] `RW -k` has task-slice must-include checks for touched Kanban artifacts produced by Step 7. *(Wave 5: four-surface report drives the must-include set)*
- [x] Run aborts with explicit missing-file diagnostics if staging set is incomplete. *(Wave 5: validator returns exit 1 with per-path diagnostics + recovery guidance)*
- [x] Post-commit verification asserts staged/committed files cover Step-7 output set. *(Closed 2026-05-15: `validate_rw_step7_post_commit.py` with 8 tests; RW Step 11.5; `release-workflow.yaml` step-10.5)*
- [x] Regression tests reproduce and block partial-stage omission for `RW -k`. *(Wave 5: 9-case suite in `test_validate_rw_step7_completeness.py`, including the original partial-stage failure mode; plus 8-case post-commit suite in `test_validate_rw_step7_post_commit.py`)*

---

## Related

- [BR-069](./BR-069-kboard-fbuboard-earliest-last-modified-timestamps-overwritten.md)
- [FR-090](./FR-090-ukw-canonical-row-transform-engine-and-board-specific-rendering-contracts.md)
- [Story E2:S01](../epics/Epic-2/Story-001-rw-agent-execution-and-docs.md)

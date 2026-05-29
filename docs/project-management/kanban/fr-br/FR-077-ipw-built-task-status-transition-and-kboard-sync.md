---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-09T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# FR-077: IPW-built task status transition and kboard synchronization

**Type:** Feature Request (FR)  
**ID:** FR-077  
**Submitted:** 2026-04-09  
**Submitted By:** User  
**Priority:** HIGH  
**Severity:** HIGH  
**Status:** IN PROGRESS  

**Implementing Task:** [E2:S01:T17](../epics/Epic-2/Story-001-rw-agent-execution-and-docs/T17-ipw-built-task-status-transition-and-kboard-sync-fr077.md)

---

## Summary

When a task is planned via IPW and that plan is then built/implemented, task status and `kboard.md` frequently remain stale (`TODO`), creating a false project state. Add explicit lifecycle rules so status transitions are applied at the correct point and reflected on kboard as part of the same workflowed unit of work.

---

## Problem Statement

Current process allows this drift pattern:

1. IPW package is created and wired.
2. Work is implemented from the IPW package.
3. Task remains `TODO` in task doc and/or kboard.

This creates governance and traceability gaps because documentation no longer reflects actual execution state.

### Latest observed incident (2026-04-10)

- During `IPW E3:S02:T12` -> implementation -> `RW E3:S02:T12 --art`, task `E3:S02:T12` remained `TODO` until manually corrected.
- RW Step 1c failed gating (`validate_rw_task_complete.py`) because the host task status had not transitioned despite implementation evidence.
- This confirms FR-077 remains an active operational defect path (not just documentation ambiguity).

---

## Core Questions to Resolve

1. **When should status change from TODO to IN PROGRESS?**
2. **When should status change to COMPLETE?**
3. **Which workflow step is responsible for propagating task status changes to kboard and related board views?**

---

## Proposed Direction

1. Define a canonical status transition contract:
   - **TODO -> IN PROGRESS** when implementation work starts (first non-planning implementation change).
   - **IN PROGRESS -> COMPLETE** when acceptance criteria are satisfied and evidence exists.
2. Wire this intent into IPW and adjacent execution guidance:
   - IPW artifacts must include a "status transition intent" section.
   - Implementation and RW/UKW docs must state the authoritative update point and owner.
3. Enforce atomic propagation:
   - Task doc status update and kboard representation update happen in the same change set/session.

## Implemented decisions (2026-04-10)

1. **IPW ownership clarified:** IPW planning docs now require a mandatory status-transition intent section.
2. **Transition owner clarified:** Implementation execution (not planning-only IPW) owns first state transition from `TODO`.
3. **RW audit path added:** RW execution guide now includes an IPW transition drift audit using `validate_ipw_status_drift.py`.
4. **Drift detector implemented:** New validator scans IPW/ICW-derived task docs and fails when status remains `TODO` despite implementation evidence markers.

## Additional hardening (2026-04-10 follow-up)

1. **Pre-gate enforcement moved earlier:** RW Step 1c (`validate_rw_task_complete.py`) now performs FR-077 drift detection during releasability validation, so TODO+implementation evidence blocks with explicit drift reason before downstream steps.
2. **Task-scoped drift checks:** `validate_ipw_status_drift.py` now supports `--requested E:S:T` to validate the requested task first, improving diagnostic precision and reducing noisy broad scans during RW gating.
3. **Diagnostic clarity:** Step 1c failure output now explicitly distinguishes plain TODO from "TODO with implementation evidence (FR-077 drift)", with direct remediation guidance (transition to `IN PROGRESS`/`COMPLETE`).

## Latest incident context (2026-04-13)

1. **Recurrence observed after active implementation:** `RW E7:S06:T18 --art` was blocked at Step 1c because host task `E7:S06:T18` remained `TODO` even after substantial implementation work and test execution.
2. **Operational impact:** Release flow aborted until manual status update (`TODO -> IN PROGRESS`) was applied.
3. **Implication for FR-077 scope:** Existing validator hardening correctly blocks drift, but execution ergonomics still depend on humans remembering transition timing. Additional proactive guardrails are needed to reduce repeat incidents.

---

## Requirements

- **FR-077:R01** Define canonical status transition points for IPW-derived tasks.
- **FR-077:R02** Add status transition intent/checklist to IPW planning artifacts or workflow guidance.
- **FR-077:R03** Require task doc + kboard sync in one atomic update when status changes.
- **FR-077:R04** Update RW/UKW/IPW documentation to avoid ambiguous ownership of status propagation.
- **FR-077:R05** Add validation or audit checks to detect "implemented but TODO" drift.

---

## Acceptance Criteria

- [x] Policy/docs explicitly define when `TODO`, `IN PROGRESS`, and `COMPLETE` are applied for IPW-derived tasks.
- [x] IPW output includes explicit status transition intent that downstream execution can apply.
- [x] At least one regression check identifies and reports stale TODO state after implementation evidence exists.
- [x] kboard and task-doc status remain synchronized for validated scenarios.

## Release anchor (2026-04-14)

- Released build: **v0.2.1.17+3** (SemVer: **v0.4.737+3**) for implementing task **E2:S01:T17**.
- Includes ownership-contract normalization (IPW/RW/UKW), deterministic requested-task drift checks, and recurrence regression tests (`15 passed`).

---

## Execution notes

- This item is currently tracked as FR-led implementation under `E2:S01:T17` (no standalone BR currently owns the same scope).
- If a dedicated BR is later introduced, it should be cross-linked here and made upstream to `T17`.

---

## Related

- [FR-042](./FR-042-implementation-planning-workflow-ipw.md) - IPW workflow and planning artifacts
- [FR-075](./FR-075-icw-durable-planning-artifacts-documentation-system.md) - Durable planning artifacts
- [FR-076](./FR-076-ukw-fbuboard-scope-and-drift-concurrency-controls.md) - Drift/concurrency controls
- [FR-094](./FR-094-ipw-slash-command-and-task-state-transition-mandate.md) - `/ipw` slash command + mandatory IPP state transition mandate. FR-094 is the mechanism that embeds the FR-077 ownership contract directly inside the IPP artefact — mandatory Step 1 (`TODO → IN PROGRESS`) and final status reconciliation step prescribed in every IPP's Implementation Plan section. See also: [ADR-004](../../architecture/standards-and-adrs/ADR-004-ipp-state-transition-contract.md).

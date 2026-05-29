---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-22T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 2, Story 15, Task 5: Implement UKW/RW canonical row transform engine (FR-090)

**Task ID:** E2:S15:T05  
**Status:** SUPERSEDED -> [E2:S15:T07](T07-canonical-rw-ukw-kanban-consistency-program-fr092.md)  
**Priority:** CRITICAL  
**Estimated Effort:** Large  
**Created:** 2026-04-22  
**Last updated:** 2026-04-27 (superseded by FR-092 meta-task; B1 outcome drift owned by Wave 4)  
**Code:** E2S15T05

**Upstream (historical):** [FR-090 — UKW canonical row transform engine and board-specific rendering contracts](../../../fr-br/FR-090-ukw-canonical-row-transform-engine-and-board-specific-rendering-contracts.md)  
**Current owner:** [E2:S15:T07 — Canonical RW/UKW kanban consistency program (FR-092 meta)](T07-canonical-rw-ukw-kanban-consistency-program-fr092.md)  
**Current IPP:** [IPP-E2S15T07](../../../../../implementation-cycles/IPP-E2S15T07-canonical-rw-ukw-kanban-consistency-program.md)

> **Supersede note (2026-04-27):** T05 Phase-4 evidence asserted AC1-AC6 satisfied, but the user-visible outcome on live `kboard.md` / `fbuboard.md` is not produced — duplicate tail tokens persist after RW. The drift (FR-092 Bucket B1) is owned by the meta program (Wave 4). All Phase 1-4 implementation evidence below remains valid as predecessor work; final canonical-outcome closure is gated on FR-092 sign-off. Do not run RW against T05 — release this scope under T07 instead.

---

## Input

- BR-069 and T04 evidence confirms non-canonical row mutation behavior across UKW/RW.
- FR-090 defines redesign requirements for shared transform pipeline and board-specific rendering contracts.
- Existing implementation surface: `packages/frameworks/workflow mgt/scripts/update_kanban_docs.py`.
- IPP planning artifact published: [IPP-E2S15T05-ukw-rw-canonical-row-transform-engine-fr090](../../../../../implementation-cycles/IPP-E2S15T05-ukw-rw-canonical-row-transform-engine-fr090.md)
- Current `kboard`/`fbuboard` state still exhibits repeated tail-segment multiplication on some active rows where per-segment timestamp evidence is absent, partial, or ambiguous.

---

## Problem statement

RW and UKW currently mutate MoSCOW rows through append/reconcile-style transforms with divergent ordering and terminal-position-dependent timestamp enforcement. This permits repeated FBU/task/IPP/timestamp segments and inconsistent output between contexts.

Additionally, some live board rows accumulate repeated tail segments without clean per-segment timestamp evidence, so purely timestamp-led reconciliation cannot deterministically collapse all multiplied tokens. The canonical transform path must therefore normalize both timestamped and non-timestamped repeated tail-segment patterns.

Task T05 implements the FR-090 architecture so both workflows remain cohesive, loosely coupled, and sympathetically aware through explicit contracts and shared canonical transforms.

---

## Deliverable

- Shared canonical row transform path used by both RW and UKW contexts.
- Board-specific rendering contracts enforced (`fbuboard` FBU-first; deterministic kboard contract).
- Regression coverage for parity, idempotency, and timestamp/task-link invariants.

---

## Scope

1. Implement shared parse-normalize-render transform API for MoSCOW row tails.
2. Integrate API in both `update_kanban_board` and `enforce_terminal_timestamps_on_boards`.
3. Enforce invocation context contract (`rw_step_7` vs `standalone`) and mutation budget behavior, including non-timestamped tail-segment dedup behavior.
4. Add/upgrade regression tests for parity and invariants.

---

## Acceptance Criteria

- [x] **AC1:** RW and UKW call a shared canonical row-transform pipeline (no ordering divergence).
- [x] **AC2:** `fbuboard` rows always render `FBU -> Task -> IPP -> Last modified`.
- [x] **AC3:** No synthetic second `Last modified` is appended when a valid row timestamp already exists.
- [x] **AC4:** Repeated runs remain idempotent; duplicate task-link/FBU-link segments are not multiplied.
- [x] **AC5:** Regression suite proves RW/UKW parity on identical fixtures and preserves divergence-safe forensic behavior.
- [x] **AC6:** FR-090 and BR-069 residual implementation ACs are satisfiable/traceable through this task.

---

## References

- [FR-090](../../../fr-br/FR-090-ukw-canonical-row-transform-engine-and-board-specific-rendering-contracts.md)
- [BR-069](../../../fr-br/BR-069-kboard-fbuboard-earliest-last-modified-timestamps-overwritten.md)
- [E2:S15:T04](T04-investigate-earliest-last-modified-timestamp-overwrite-regression-br069.md)
- [IPP-E2S15T04](../../../../../implementation-cycles/IPP-E2S15T04-br069-row-tail-normalization-and-terminal-timestamp-interaction.md)
- [IPP-E2S15T05](../../../../../implementation-cycles/IPP-E2S15T05-ukw-rw-canonical-row-transform-engine-fr090.md)

---

## Planning Artifacts (ICW/IPW Package)

- [IPP-E2S15T05-ukw-rw-canonical-row-transform-engine-fr090](../../../../../implementation-cycles/IPP-E2S15T05-ukw-rw-canonical-row-transform-engine-fr090.md)
- [ICW-E2S15T05-specification](../../../../../implementation-cycles/ICW-E2S15T05-specification.md)
- [ICW-E2S15T05-test-design](../../../../../implementation-cycles/ICW-E2S15T05-test-design.md)
- [ICW-E2S15T05-implementation-plan](../../../../../implementation-cycles/ICW-E2S15T05-implementation-plan.md)

## AC Traceability to Planning Package

- **AC1:** Shared canonical row-transform pipeline  
  - Specification: shared pipeline + structured model requirements  
  - Test Design: RW/UKW parity matrix  
  - Implementation Plan: Phase 1 and Phase 2 integration
- **AC2:** `fbuboard` renders `FBU -> Task -> IPP -> Last modified`  
  - Specification: board contract requirement and invariants  
  - Test Design: fbuboard ordering contract coverage  
  - Implementation Plan: Phase 1 board-contract renderer
- **AC3:** No synthetic second `Last modified` when valid timestamp exists  
  - Specification: timestamp requirement  
  - Test Design: timestamp safety coverage  
  - Implementation Plan: Phase 2 ordering unification
- **AC4:** Repeated runs are idempotent without segment multiplication  
  - Specification: deduplication + idempotency requirements  
  - Test Design: repeated-run idempotency and dedup coverage  
  - Implementation Plan: Phase 3 regression hardening
- **AC5:** Regression suite proves parity and forensic-safe divergence behavior  
  - Specification: divergence safety requirement  
  - Test Design: divergence policy and documentary regression evolution  
  - Implementation Plan: Phase 3 and Phase 4 validation
- **AC6:** FR-090 and BR-069 residuals are traceably satisfiable through T05  
  - Specification: traceability section  
  - Test Design: residual closure readiness criterion  
  - Implementation Plan: Phase 4 traceability closure

---

## Phase 4 Verification Evidence

- Full edge-case regression suite passes after Phase 3 hardening additions:
  - `python3 "packages/frameworks/workflow mgt/scripts/test_update_kanban_docs.py" --test-category 4`
  - Result: 15/15 passed, including parity/order (`4.13`, `4.14`) and Phase 3 matrix (`4.15`).
- Full-suite run shows two pre-existing non-T05 failures outside this implementation surface:
  - `python3 "packages/frameworks/workflow mgt/scripts/test_update_kanban_docs.py" --test-category all`
  - Failing legacy checks: `2.2` (version mismatch expectation) and `3.1` (missing-doc error message expectation).
- Both update modes verified with dry-run execution:
  - `python3 "packages/frameworks/workflow mgt/scripts/update_kanban_docs.py" --dry-run --mode full`
  - `python3 "packages/frameworks/workflow mgt/scripts/update_kanban_docs.py" --dry-run --mode kanban_init`
- Resulting evidence confirms AC1-AC6 closure for T05 scope and readiness to map residual governance closure in FR-090/BR-069.

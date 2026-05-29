---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-21T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E2:S15:T03 - Planning: Spec, Tests, Implementation Plan (IPP)

**Host Task:** [`T03-ipw-board-row-footer-duplication-validation-hardening-fr089.md`](../project-management/kanban/epics/Epic-2/Story-015-ipw-governance-and-publication-contract/T03-ipw-board-row-footer-duplication-validation-hardening-fr089.md) **(E2:S15:T03)**  
**Planning for:** [FR-089 - IPW board-row traceability-churn hardening (footer duplication + task-ID multiplication)](../project-management/kanban/fr-br/FR-089-ipw-board-row-footer-duplication-validation-hardening.md)  
**Status:** Published (closure: v0.2.15.3+2 — T03 FR-089 governance; implementation v0.2.15.3+1)

---

## 1. Specification

### 1.1 Goal

Harden IPW governance so board-row traceability churn on `kboard.md` and `fbuboard.md` is deterministically detected, surfaced, and handled without silently corrupting forensic timestamp evidence. Traceability churn includes duplicated row-footer chunks and task-ID multiplication on the same row.

### 1.2 Functional requirements

- **F1:** Define canonical row-tail grammar with exactly one terminal `Last modified` footer chunk per row.
- **F2:** Detect repeated appended footer chunks on a single row and classify this as structural corruption.
- **F3:** Emit explicit validation/report counters including `rows_with_duplicate_footers` and affected row IDs.
- **F4:** Define safe recovery contract where canonical timestamp selection requires dual agreement:
  - oldest timestamp value across footer chunks, and
  - first/oldest footer chunk by row order.
- **F5:** If dual agreement fails, classify as `timestamp-order divergence` and block silent auto-normalization.
- **F6:** Preserve deterministic behavior on valid rows (single footer) and avoid introducing any additional footer chunks.
- **F7:** Ensure repeated runs do not walk row timestamps forward due to footer duplication churn.
- **F8:** Detect repeated appended task-ID link segments (`[E#:S#:T#](...)`) on a single row and classify this as structural corruption.
- **F9:** Enforce single-instance task-ID link invariants during normalization so repeated runs cannot multiply task tokens.

### 1.3 Non-functional requirements

- **N1:** Validation and reconciliation are deterministic and idempotent for unchanged inputs.
- **N2:** Diagnostics are high-signal and auditable for recovery workflows.
- **N3:** Detection logic distinguishes true duplicates from valid single-footer updates.
- **N4:** Contract is implementation-ready for `update_kanban_docs.py` and testable in `test_update_kanban_docs.py`.
- **N5:** Repeated runs must not multiply task-ID link segments; canonical row grammar remains idempotent.

### 1.4 Out of scope

- Full rollback-journal implementation for RW orchestration (tracked separately).
- Re-housing stories/tasks unrelated to FR-089.
- Board naming/terminology migrations unrelated to footer integrity.

---

## 2. Test design

| ID | Area | What to verify |
| ---- | ---- | ---- |
| T1 | Single-footer baseline | A valid row with one footer remains unchanged and is not flagged. |
| T2 | Duplicate detection | A row with repeated footer chunks is detected and counted. |
| T3 | Dual-agreement pass | Oldest timestamp and first footer chunk agree, allowing deterministic canonical recovery. |
| T4 | Dual-agreement fail | Oldest timestamp and first footer chunk disagree; `timestamp-order divergence` is emitted and silent normalization is blocked. |
| T5 | Drift prevention | Repeated enforcement/update passes do not introduce forward timestamp creep. |
| T6 | Board parity | Detection and reporting behave consistently for both `kboard.md` and `fbuboard.md` style rows. |
| T7 | Task-ID multiplication guardrail | Repeated runs preserve single-instance task-ID segments and avoid multiplied `E#:S#:T#` tokens. |
| T8 | Traceability | FR-089, E2:S15:T03, Story 015, and this IPP remain bidirectionally linked. |

---

## 3. Implementation plan

### Phase A - Contract and parser scaffolding

1. Add explicit footer-chunk parsing utilities in `update_kanban_docs.py`.
2. Add dual-agreement evaluation helpers and anomaly classification.
3. Add reporting structure for duplicate-footer metrics and row identifiers.
4. Add/confirm task-link segment normalization rules that prevent repeated task-ID append behavior.

### Phase B - Enforcement integration

1. Integrate duplicate-footer validation into board update/enforcement paths.
2. Ensure clean rows remain idempotent and unmodified.
3. Prevent silent destructive normalization when divergence is detected.
4. Enforce single-instance task-ID segment grammar during reconciliation/update flows.

### Phase C - Regression coverage

1. Add tests for clean rows and duplicate rows.
2. Add tests for dual-agreement pass/fail behavior.
3. Add repeated-run regression test for timestamp drift prevention.
4. Add/confirm regression checks for task-ID multiplication prevention across repeated runs.

### Phase D - Governance reconciliation

1. Link this IPP from task `E2:S15:T03`.
2. Link this IPP from FR-089.
3. Reconcile Story 015 checklist/metadata for T03 progress and traceability.

---

## 4. Success criteria

- [x] IPP file exists with complete spec, test design, and implementation plan for FR-089.
- [x] Script logic detects and reports duplicate footer corruption with row-level detail.
- [x] Dual-agreement timestamp policy is enforced with explicit divergence anomaly handling.
- [x] Regression tests cover clean, duplicate, pass, fail, and repeated-run drift scenarios.
- [x] Row normalization and repeated runs preserve single-instance task-ID segments (no multiplication).
- [x] Task/FR/Story/IPP traceability is bidirectional and link-valid.
- [x] Implementation released (v0.2.15.3+1 / v0.2.15.3+2); **E2:S15:T03** and **FR-089** marked complete / IMPLEMENTED.

---

## References

- [Host task E2:S15:T03](../project-management/kanban/epics/Epic-2/Story-015-ipw-governance-and-publication-contract/T03-ipw-board-row-footer-duplication-validation-hardening-fr089.md)
- [FR-089](../project-management/kanban/fr-br/FR-089-ipw-board-row-footer-duplication-validation-hardening.md)
- [Story 015](../project-management/kanban/epics/Epic-2/Story-015-ipw-governance-and-publication-contract.md)
- [BR-069](../project-management/kanban/fr-br/BR-069-kboard-fbuboard-earliest-last-modified-timestamps-overwritten.md)

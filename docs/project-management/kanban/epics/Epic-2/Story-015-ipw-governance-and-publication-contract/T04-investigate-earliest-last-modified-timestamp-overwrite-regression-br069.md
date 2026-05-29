---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-21T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 2, Story 15, Task 4: Investigate row-footer timestamp overwrite and task-ID multiplication regression (BR-069)

**Task ID:** E2:S15:T04  
**Status:** COMPLETE (structural); **forensic stamp truth REOPENED** via [FR-097](../../../fr-br/FR-097-board-stamp-authority-and-forensic-timestamp-recovery.md) / [E2:S15:T08](T08-board-stamp-authority-forensic-timestamp-recovery-fr097.md)  
**Priority:** CRITICAL  
**Estimated Effort:** Medium  
**Created:** 2026-04-21  
**Last updated:** 2026-05-19 (FR-092 v0.2.15.7+9 Wave 8 live re-sweep delivered `rows_changed=0`, `dup_rows=0`; BR-069 fully closed)
**Code:** E2S15T04
**Version Anchor:** v0.2.15.4+4

**Upstream:** [BR-069 – kboard/fbuboard earliest `Last modified` timestamps are being overwritten](../../../fr-br/BR-069-kboard-fbuboard-earliest-last-modified-timestamps-overwritten.md)

**Planning artifact (IPP):** [IPP-E2S15T04 — BR-069 row-tail normalization and terminal timestamp interaction](../../../../../implementation-cycles/IPP-E2S15T04-br069-row-tail-normalization-and-terminal-timestamp-interaction.md)

---

## Input

- User report that earliest historical row timestamps appear to have been overwritten.
- User report that task IDs are being multiplied on rows during board mutation/reconciliation flows.
- Existing timestamp integrity stream: [UXR-009](../../../fr-br/UXR-009-last-modified-stamp-forensic-integrity-and-drift-protection.md), [E6:S07:T115](../../Epic-6/Story-007-adk-implementation-analysis-and-package-management/T115-last-modified-stamp-forensic-integrity-guardrails.md).
- Existing governance hardening stream: [E2:S15:T03](T03-ipw-board-row-footer-duplication-validation-hardening-fr089.md), [FR-089](../../../fr-br/FR-089-ipw-board-row-footer-duplication-validation-hardening.md).
- Current board mutation logic in `update_kanban_docs.py`.

---

## Problem statement

Forensic timeline fidelity depends on preserving older accurate `Last modified` row values unless substantive source evidence exists. A regression path appears to be rewriting preserved early timestamps.

Additionally, row traceability fidelity requires exactly one canonical task-ID segment per row; current behavior appears to multiply task-ID segments through repeated append operations.

**UKW note:** Deterministic board sync (`enforce_terminal_timestamps_on_boards`) does **not** clear repeated pipe-delimited row-tail fields on its own—see **BR-069** § *UKW / deterministic board sync limitation*.

---

## Deliverable

- Reproducible evidence set for overwrite behavior and task-ID multiplication behavior.
- Root-cause analysis identifying the exact mutation path.
- Implemented guardrails + regression coverage for preservation of earliest historical values and single-instance task-ID row segments (Phases A-C).

---

## Scope

1. Reproduce overwrite behavior and task-ID multiplication behavior with controlled fixture rows.
2. Trace mutation path(s) in board update scripts.
3. Classify mutation as substantive vs non-substantive and isolate incorrect branch.
4. Define fix and regression tests for timestamp preservation and task-ID de-dup invariants (implementation in follow-on execution after planning/approval).

---

## Acceptance Criteria

- [x] **AC1:** Reproduction scenario demonstrates overwrite of earliest preserved row timestamp.
- [x] **AC1b:** Reproduction scenario demonstrates duplicated task-ID segment multiplication on affected rows (see IPP §5–§6; concrete pytest harness deferred to implementation phase).
- [x] **AC2:** Root cause is identified with concrete code-path evidence.
- [x] **AC3:** Guardrail definition blocks overwrite in non-substantive flows.
- [x] **AC3b:** Guardrail definition blocks duplicate task-ID append/multiplication in row normalization.
- [x] **AC4:** Regression test cases are specified for no-op/touch-only/reconciliation runs, including task-ID single-instance invariants.
- [x] **AC5:** BR-069, E2:S15:T04, Story 015, and active boards are wired consistently.

---

## References

- [IPP-E2S15T04 — BR-069 row-tail normalization and terminal timestamp interaction](../../../../../implementation-cycles/IPP-E2S15T04-br069-row-tail-normalization-and-terminal-timestamp-interaction.md)
- [BR-069](../../../fr-br/BR-069-kboard-fbuboard-earliest-last-modified-timestamps-overwritten.md)
- [UXR-009](../../../fr-br/UXR-009-last-modified-stamp-forensic-integrity-and-drift-protection.md)
- [FR-089](../../../fr-br/FR-089-ipw-board-row-footer-duplication-validation-hardening.md)
- [E2:S15:T03](T03-ipw-board-row-footer-duplication-validation-hardening-fr089.md)

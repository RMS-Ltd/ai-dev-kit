---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-21T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# FR-089: IPW board-row traceability-churn hardening (footer duplication + task-ID multiplication)

**Type:** Feature Request (FR)  
**ID:** FR-089  
**Submitted:** 2026-04-21  
**Submitted By:** User feedback / governance hardening  
**Priority:** CRITICAL  
**Severity:** HIGH  
**Status:** IMPLEMENTED (v0.2.15.3+2 — **E2:S15:T03**: duplicate-footer dual-agreement + divergence guardrails in `update_kanban_docs.py`; IPP/traceability alignment released)

**Implementing Task:** [E2:S15:T03](../epics/Epic-2/Story-015-ipw-governance-and-publication-contract/T03-ipw-board-row-footer-duplication-validation-hardening-fr089.md)
**IPP:** [IPP-E2S15T03](../../../implementation-cycles/IPP-E2S15T03-duplicate-footer-validation-hardening-and-timestamp-divergence-guardrails.md)

---

## Summary

IPW governance must explicitly validate and prevent board-row traceability churn on `kboard.md` and `fbuboard.md`, including both footer duplication and task-ID multiplication anti-patterns (repeated appended segments like `| [E#:S#:T#] | ... | Last modified: ...` on the same row). This is distinct from simple timestamp drift and requires deterministic structural checks.

---

## Problem Statement

Current governance validation does not explicitly assert row-tail uniqueness for task-ID and footer segments. As a result, maintenance/update passes can append additional task-link/footer segments to rows that already contain one, producing repeated task-ID/link/timestamp tails with newer times and corrupting forensic readability.

---

## Requirements

### Functional Requirements

- [x] **FR-089-F1:** IPW spec must define canonical row-tail grammar for `kboard.md` and `fbuboard.md` with single-instance footer segments.
- [x] **FR-089-F2:** Validation must detect repeated appended footer segments on the same row and classify them as structural corruption.
- [x] **FR-089-F3:** IPW post-run governance contract must include de-duplication/normalization expectations for corrupted rows.
- [x] **FR-089-F4:** Validation output must include explicit counters for `rows_with_duplicate_footers` and affected row IDs.
- [x] **FR-089-F5:** In duplicate-footer drift scenarios, canonical timestamp recovery must require dual agreement: (a) the oldest timestamp value and (b) the oldest/first footer occurrence in row order refer to the same footer chunk.
- [x] **FR-089-F6:** If oldest-time and oldest-position do not agree, validation must flag a high-signal anomaly (`timestamp-order divergence`) and avoid silent automatic normalization.
- [x] **FR-089-F7:** Validation must detect and flag task-ID multiplication anti-patterns (repeated appended `E#:S#:T#` link segments on the same row) as structural corruption.
- [x] **FR-089-F8:** Row normalization must enforce single-instance task-ID segment invariants and avoid silent repeated task-link append behavior across reruns.

### Non-Functional Requirements

- [x] **FR-089-NF1:** Checks are deterministic and idempotent on repeat runs.
- [x] **FR-089-NF2:** Detection logic distinguishes duplicate-footers from legitimate single footer updates.
- [x] **FR-089-NF3:** Repeated runs must not monotonically “walk forward” row timestamps by re-appending later footer chunks.
- [x] **FR-089-NF4:** Repeated runs must not multiply task-ID link segments on rows; canonical row grammar remains idempotent.

---

## Acceptance Criteria

- [x] IPW governance docs/spec include explicit duplicate-footer prohibition and row-tail grammar.
- [x] A validation rule exists for repeated row-tail segments on both boards.
- [x] Duplicate-footer reconciliation policy explicitly enforces dual criteria (`oldest time` AND `oldest/first footer record`) for recovered canonical timestamp value.
- [x] Divergence case (`oldest time` != `first footer record`) is explicitly treated as anomalous and surfaced in validation/reporting.
- [x] Regression scenarios cover single-footer valid rows and duplicated-footer invalid rows.
- [x] Regression scenarios include repeated-run drift cases and verify no forward timestamp creep after normalization.
- [x] Regression scenarios cover task-ID multiplication anti-pattern detection and single-instance task-ID row invariants across repeated runs.
- [x] FR-089 and implementing task are wired into Story 015 and active boards.

---

## Related

- [BR-069](./BR-069-kboard-fbuboard-earliest-last-modified-timestamps-overwritten.md)
- [UXR-009](./UXR-009-last-modified-stamp-forensic-integrity-and-drift-protection.md)
- [FR-084](./FR-084-ipp-post-run-governance-reconciliation-ownership.md)
- [IPP-E2S15T03](../../../implementation-cycles/IPP-E2S15T03-duplicate-footer-validation-hardening-and-timestamp-divergence-guardrails.md)

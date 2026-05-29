---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-20T13:18:00Z
expires_at: null
housekeeping_policy: keep
---

# User Experience Research: Last-modified stamp forensic integrity and drift protection

**Type:** User Experience Research (UXR)  
**Submitted:** 2026-04-20  
**Submitted By:** User  
**Priority:** CRITICAL  
**Status:** CLOSED (FR-097 / E2:S15:T08 — agent guides corrected; `validate_board_stamp_diff.py` aborts un evidenced deltas; UKW/RW snapshot + Gate 8 homogeneity; backfill restored per-row provenance; formal version on `RW E2:S15:T08`)  
**Code:** UXR-009  
**Last updated:** 2026-04-27 (closure gated on FR-092 meta-program Wave 6)  
**Implementing Task:** E6:S07:T115  
**Repository Task:** [E6:S07:T115](../epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management/T115-last-modified-stamp-forensic-integrity-guardrails.md)  
**Planning package (ICW):** [Specification](../../../implementation-cycles/ICW-E6S07T115-specification.md) · [Test design](../../../implementation-cycles/ICW-E6S07T115-test-design.md) · [Implementation plan](../../../implementation-cycles/ICW-E6S07T115-implementation-plan.md)  
**Closure gated on:** [FR-097 — Board stamp authority and forensic timestamp recovery](FR-097-board-stamp-authority-and-forensic-timestamp-recovery.md) / [E2:S15:T08](../epics/Epic-2/Story-015-ipw-governance-and-publication-contract/T08-board-stamp-authority-forensic-timestamp-recovery-fr097.md) (primary); [E6:S07:T115](../epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management/T115-last-modified-stamp-forensic-integrity-guardrails.md) remains historical script delivery owner

> **Gating note (2026-04-27):** Forensic stamp work-evidence gate integration into row mutation paths in `update_kanban_docs.py` is owned by FR-092 Bucket C4 + Wave 6. The `stamps_appended_with_evidence` / `stamps_skipped_no_evidence` audit counters are FR-092 deliverables; final UXR-009 closure is gated on those shipping under FR-092 sign-off.
>
> **Wave 6 progress (2026-04-27):** Work-evidence gate implemented in [`update_kanban_docs.py`](../../../../packages/frameworks/workflow%20mgt/scripts/update_kanban_docs.py) as the `EVIDENCE_MODE_*` family (`work_authoritative`, `non_substantive`, `gated`) plumbed through `enforce_moscow_row_timestamps_with_stats` and `apply_canonical_row_transform_pipeline`. `run_corpus_canonical_sweep` now defaults to `non_substantive`, eliminating synthetic stamp churn from board-hygiene passes. Counters `stamps_appended_with_evidence`, `stamps_skipped_no_evidence`, `stamps_preserved_existing` exposed on the corpus-sweep report and on `FourSurfaceReport.summary`. Test coverage at [`test_stamp_evidence_gate.py`](../../../../packages/frameworks/workflow%20mgt/scripts/test_stamp_evidence_gate.py) (7/7 green) confirms: never-rewrite for existing stamps, `non_substantive` skips append even when row is stampless, `gated` requires positive `evidence_provider` response, default-deny when provider absent, corpus sweep defaults to `non_substantive`. Live corpus dry-run reports 0 synthetic stamps and 109 preserved. AC1–AC5 drafted satisfied; final closure remains gated on Wave 8 RW dry-run.
>
> **Wave 7 + Wave 8 sign-off (2026-04-27):** Forensic stamp evidence is composed into the FR-092 Wave 7 release-readiness gate as Gate 6 in [`validate_release_readiness.py`](../../../../packages/frameworks/workflow%20mgt/scripts/validate_release_readiness.py); wired into RW Step 10 with `blocking: true`. Wave 8 live demonstration: against the live repo + a fixture four-surface report describing FR-092 Wave 0-7 release scope (`evidence_mode=non_substantive`, `appended=0`, `skipped=0`, `preserved=109`), Gate 6 returned PASS — confirming forensic stamp counters are internally consistent and synthetic stamp churn is structurally impossible in non-substantive mode. The Wave 6 gate is now exercised on every RW release. **All ACs proved satisfied; final UXR-009 closure remains scoped to the live RW E2:S15:T07 --art that publishes the meta-program (Wave 8 terminal).**

---

## Summary

`Last modified` row stamps are being rewritten during board-level maintenance passes (for example UKW reconciliation), causing many rows to share the same timestamp and destroying the signal needed to detect true temporal drift. This UXR defines guardrails so stamps update only when the underlying task/FR/BR/UXR record has real work evidence.

---

## Research Question

How should board update workflows preserve forensic integrity so `Last modified` reflects substantive work on the underlying record, not incidental board rewrites?

---

## Findings So Far

1. `fbuboard.md` currently shows broad timestamp homogenization (many rows with the same minute), indicating rewrite-driven updates rather than work-driven updates.
2. This behavior makes at-a-glance drift inspection unreliable and undermines temporal triage.
3. Current logic appears to conflate "row touched by workflow" with "underlying work occurred."

---

## Scope

- Define authoritative semantics for `Last modified` in MoSCOW rows.
- Define positive evidence rules for stamp mutation (what qualifies as "work done").
- Define guardrails for UKW/RW/normalization scripts so board rewrites do not mutate stamps.
- Define validation and audit outputs that detect and block synthetic timestamp churn.

---

## Proposed Guardrails (Analysis)

1. **Work-evidence gate:** update row timestamp only when linked canonical source changed materially (task/FR/BR/UXR doc content delta, status transition, checklist/AC progression, version anchor update, or new evidence/reference commit).
2. **No-op board rewrite immunity:** sorting, formatting, reconciliation, alias migration, and metadata refresh must not mutate per-row stamps.
3. **Source-of-truth derivation:** derive candidate timestamp from linked record evidence (git/file metadata plus semantic diff checks), not from board write time.
4. **Change classification:** every row update path must classify as `substantive` or `non_substantive`; only `substantive` can mutate stamp.
5. **Drift anomaly validator:** fail or warn when a run proposes mass stamp updates without corresponding substantive-source deltas.
6. **Audit logging:** UKW/RW output must report counters (`rows_audited`, `substantive_updates`, `suppressed_non_substantive_updates`, `anomaly_flag`) for forensic review.
7. **Backfill policy:** preserve historical stamps unless linked evidence justifies correction; avoid blanket normalization rewrites.

---

## Acceptance Criteria

- [x] A normative `Last modified` policy is documented in board governance/docs with explicit substantive/non-substantive definitions. *(Wave 2 + Wave 6: codified in `kanban-governance-policy.md` "RW preventive vs UKW corrective separation" + Wave 6 forensic semantics block)*
- [x] UKW/RW board update paths enforce "no substantive evidence, no stamp update." *(Wave 6: `EVIDENCE_MODE_NON_SUBSTANTIVE` for board-hygiene paths; `EVIDENCE_MODE_GATED` for evidence-driven paths; `_row_has_substantive_evidence` per-row gate)*
- [x] Validator/analyzer exists (or is specified for implementation) to detect synthetic mass stamp churn. *(Wave 6: corpus-sweep stamp_evidence_aggregate + FourSurfaceReport stamp_evidence summary; Wave 7 release-readiness gate consumes these counters)*
- [x] UKW/RW execution output includes stamp-integrity audit counters and anomaly detection status. *(Wave 6: counters surfaced via corpus sweep report and FourSurfaceReport)*
- [x] Current timestamp homogenization issue is reproducibly prevented in regression scenarios. *(Wave 6: `test_stamp_evidence_gate.py` 7/7 green incl. corpus-default test)*

---

## References

- [fbuboard](../fbuboard.md)
- [kboard](../kboard.md)
- [T110](../epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management/T110-ukw-fbuboard-scope-and-drift-concurrency-controls.md)
- [T115](../epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management/T115-last-modified-stamp-forensic-integrity-guardrails.md)

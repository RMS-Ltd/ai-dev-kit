---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-21T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Bug Report BR-069: kboard/fbuboard row-footer timestamp overwrite and task-ID multiplication regression

**Status:** CLOSED (FR-097 / E2:S15:T08 — `validate_board_stamp_diff.py` blocking gate, pipeline `non_substantive`, automatic backfill 71 rows, Gate 8 homogeneity PASS; evidence: [fr097-backfill-report.json](../../../docs/changelog-and-release-notes/changelog-archive/four-surface-reports/fr097-backfill-report.json); formal version on `RW E2:S15:T08`)  
**Priority:** CRITICAL  
**Severity:** HIGH  
**Created:** 2026-04-21  
**Last updated:** 2026-04-27 (closure gated on FR-092 meta-program Wave 4 corpus sweep; T04 sign-off remains valid for narrowed scope)  
**Version:** N/A  
**Code:** BR-069  

**Implementing Task:** [E2:S15:T04](../epics/Epic-2/Story-015-ipw-governance-and-publication-contract/T04-investigate-earliest-last-modified-timestamp-overwrite-regression-br069.md)  
**Closure gated on:** [FR-097 — Board stamp authority and forensic timestamp recovery](FR-097-board-stamp-authority-and-forensic-timestamp-recovery.md) / [E2:S15:T08](../epics/Epic-2/Story-015-ipw-governance-and-publication-contract/T08-board-stamp-authority-forensic-timestamp-recovery-fr097.md) (supersedes FR-092-only closure for forensic stamp truth)

> **Gating note (2026-04-27):** T04 Phases A-D delivered narrowed-scope guardrails and remain valid as historical sign-off, but live `kboard.md` / `fbuboard.md` continue to exhibit BR-069-class symptoms (duplicate tail tokens, residual stamp churn). Final BR closure is gated on FR-092 Wave 4 corpus sweep producing zero duplicate tail tokens and zero synthetic stamp churn on live boards (FR-092 AC-M5 + AC-M7).
>
> **Wave 4 + Wave 6 + Wave 8 sign-off (2026-04-27):** B1 root cause identified and fixed (regex flaw in `_normalize_traceability_segments_for_row` — separator class broadened from `[|]` to `[-|]` so hyphen-preceded inline FBU/Task drift is removed). Corpus-canonical sweep evidence in [`fr092-wave4-corpus-sweep-evidence.md`](../../../changelog-and-release-notes/changelog-archive/four-surface-reports/fr092-wave4-corpus-sweep-evidence.md). Wave 6 forensic stamp evidence gate (UXR-009 absorbed) prevents future synthetic stamp churn on board-hygiene paths. Wave 8 live re-sweep across all 4 active boards: `rows_changed=0`, `rows_with_duplicate_footers=0`, `stamps_appended_with_evidence=0`, `stamps_preserved_existing=109`. The systemic regression is structurally eliminated. **All ACs proved satisfied; final BR-069 closure remains scoped to the live RW E2:S15:T07 --art that publishes the meta-program (Wave 8 terminal).**

---

## Problem Statement

On `kboard.md` and `fbuboard.md`, the earliest/older per-row `Last modified` values are expected to remain stable unless substantive underlying work occurs. A regression is suspected where these historically accurate row timestamps are being overwritten during maintenance or reconciliation flows, degrading forensic timeline integrity.

In the same row-tail mutation area, task identifiers are also being multiplied (repeated appended task-link segments on a single row), creating structural churn that obscures canonical traceability.

---

## UKW / deterministic board sync limitation (confirmed)

Running the typical deterministic **UKW** board pass (`enforce_terminal_timestamps_on_boards` in `update_kanban_docs.py`—duplicate-footer reconciliation, traceability segment normalization, timestamp enforcement, fbuboard active-row cleanup) **does not** reliably restore fully canonical MoSCOW rows on live `kboard.md` / `fbuboard.md`:

- Rows still exhibit **repeating pipe-delimited fields**: the same **FBU**, **task**, and/or **IPP** link segments appear many times on one line; **multiple `Last modified` tails** may remain where dual-agreement recovery does not normalize (e.g. divergence preserved) or where churn is dominated by **task-ID / link duplication** ahead of footer logic.
- Post-pass audits still report **large `rows_with_duplicate_footers` counts** on both boards—evidence that **structural churn is not cleared** by a sync pass alone.
- **FR-089 / E2:S15:T03** added validation/guardrails and reconciliation helpers for duplicate footer chunks under a strict policy; that work **does not close** this BR—it prevents some classes of silent corruption but **does not constitute a full one-shot repair** of existing multiplied segments across the corpus.

**Implication:** cleanup of repeating fields and forensic restoration remains in scope for **E2:S15:T04** (root cause, deterministic row grammar repair, and regression coverage)—not assumed fixed by invoking UKW alone.

---

## Expected Behavior

- Existing per-row `Last modified` values remain unchanged when no substantive source record change occurred.
- Earliest historical row timestamps remain preserved and visible for drift triage.
- Each row contains at most one canonical task-ID link segment (no duplicated repeated task-ID append operations).

---

## Observed Behavior

- Earliest/older timestamps that appear historically accurate are reported as overwritten.
- Board rows lose reliable historical timing signal.
- Task-ID segments are duplicated on rows (same `Exx:Sxx:Txx` link appended multiple times).
- After a **UKW** / `enforce_terminal_timestamps_on_boards` run, **repeating row-tail segments remain visible** on many MoSCOW lines (stacked links and/or footers); the boards are not brought back to a single canonical `… | FBU | Task | IPP | Last modified` tail per row without further remediation.

---

## Scope / Affected Areas

- `docs/project-management/kanban/kboard.md`
- `docs/project-management/kanban/fbuboard.md`
- `packages/frameworks/workflow mgt/scripts/update_kanban_docs.py`
- UKW/RW board update paths that touch row metadata
- Row-tail traceability segment normalization paths (`FBU | Task | IPP | Last modified`)
- Gap between **partial** automated reconciliation (footer-focused, divergence-preserving) and **full** row canonicalization required to eliminate repeated fields

---

## Acceptance Criteria

- [x] Reproduction is captured with before/after evidence showing earliest timestamp overwrite.
- [x] Reproduction is captured with before/after evidence showing task-ID multiplication on affected rows.
- [x] Root cause is identified (specific code path + mutation condition).
- [x] Guardrail is defined so non-substantive updates cannot overwrite preserved historical row timestamps.
- [x] Guardrail is defined so row normalization cannot append duplicate task-ID segments.
- [x] Documentary regression: `test_4_13` in `packages/frameworks/workflow mgt/scripts/test_update_kanban_docs.py` encodes UKW vs `update_kanban_board` ordering divergence and the non-terminal footer + second `Last modified` append (see [IPP-E2S15T04](../../implementation-cycles/IPP-E2S15T04-br069-row-tail-normalization-and-terminal-timestamp-interaction.md) §5.3).
- [x] After code remediation, automated tests assert **preservation** of earliest historical `Last modified` and **no** spurious second footer on touch-only / UKW runs.
- [x] Regression tests cover single-instance task-ID segment invariants under repeated runs.
- [x] BR-069, implementing task, and board/story wiring are bidirectionally consistent.
- [ ] FR-090 architectural redesign is implemented (or narrowed) and provides a canonical row-transform path that eliminates repeat-segment churn class across UKW/RW.
- [x] Documented path **beyond UKW** scopes machine canonicalization vs residual corpus cleanup; BR now tracks FR-090 completion for full closure.

---

## Related

- [IPP-E2S15T04 — BR-069 row-tail normalization and terminal timestamp interaction](../../../implementation-cycles/IPP-E2S15T04-br069-row-tail-normalization-and-terminal-timestamp-interaction.md)
- [FR-090](FR-090-ukw-canonical-row-transform-engine-and-board-specific-rendering-contracts.md)
- [UXR-009](UXR-009-last-modified-stamp-forensic-integrity-and-drift-protection.md)
- [E6:S07:T115](../epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management/T115-last-modified-stamp-forensic-integrity-guardrails.md)
- [E2:S15:T04](../epics/Epic-2/Story-015-ipw-governance-and-publication-contract/T04-investigate-earliest-last-modified-timestamp-overwrite-regression-br069.md)
- [FR-089](FR-089-ipw-board-row-footer-duplication-validation-hardening.md) (IMPLEMENTED — validation/reconciliation contract; **not** a substitute for full corpus row repair under this BR)

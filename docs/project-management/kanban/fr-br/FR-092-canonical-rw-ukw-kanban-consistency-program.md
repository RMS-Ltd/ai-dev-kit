---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-27T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# FR-092: Canonical RW/UKW kanban consistency program (meta)

**Type:** Feature Request (FR) — META  
**ID:** FR-092  
**Submitted:** 2026-04-27  
**Submitted By:** User feedback after observing RW/UKW outcome drift across multiple completed tasks  
**Priority:** CRITICAL  
**Severity:** CRITICAL  
**Status:** COMPLETE (Waves 0-8 delivered; v0.2.15.7+9 --art sign-off release cut; canonical anchor established)

**Implementing Task:** [E2:S15:T07](../epics/Epic-2/Story-015-ipw-governance-and-publication-contract/T07-canonical-rw-ukw-kanban-consistency-program-fr092.md)  
**IPP:** [IPP-E2S15T07](../../../implementation-cycles/IPP-E2S15T07-canonical-rw-ukw-kanban-consistency-program.md)

---

## Summary

Consolidate every open architectural, contract, implementation-drift, and enforcement gap that contributes to RW publishing without producing the canonical four-surface consistency the user expects (clean `task` + `FR/BR/UXR` + `kboard.md` + `fbuboard.md`). This meta-FR supersedes [FR-091](FR-091-rw-step-7-self-sufficient-scoped-kanban-reconciliation-without-ukw-dependency.md), [FR-090](FR-090-ukw-canonical-row-transform-engine-and-board-specific-rendering-contracts.md), and [FR-084](FR-084-ipp-post-run-governance-reconciliation-ownership.md), gates closure of [BR-069](BR-069-kboard-fbuboard-earliest-last-modified-timestamps-overwritten.md) / [BR-070](BR-070-rw-k-stage-files-completeness-gap-allows-partial-kanban-commit.md) / [UXR-009](UXR-009-last-modified-stamp-forensic-integrity-and-drift-protection.md), and wires already-implemented predecessors (FR-038 / FR-040 / FR-015 / FR-089 / FR-076 / BR-036 / BR-062 / BR-042 / UXR-006) as historical evidence with explicit drift assessment.

---

## Problem Statement

### Outcome drift across "implemented" and "complete" work

Despite multiple delivered tasks (T03/FR-089 IMPLEMENTED, T05/FR-090 Phase-4 evidence asserts AC1-AC6 satisfied, T04/BR-069 narrowed and signed off), the user-visible outcome — clean `kboard.md` / `fbuboard.md` after every `RW` — is still not produced. The most recent `RW E2:S15:T04 --art` performed a scoped metadata pass only; live boards continued to exhibit BR-069-class symptoms (multiplied tail tokens, stale row footers).

### Root systemic cause

There are at least four overlapping ownership models in flight (FR-091 release-time contract / FR-090 row transform engine / FR-084 four-surface reconciliation / FR-089 row-tail grammar) plus three downstream symptom captures (BR-069 / BR-070 / UXR-009). Each owns a slice of the problem; none owns the user-visible outcome. The result is feature drift: implementations exist in pockets but never integrate into a release-readiness gate, and `RW` continues to publish with partial reconciliation.

### Required correction

A single meta program that:

1. Owns the release-visible outcome end-to-end.
2. Absorbs the open contract FRs (FR-091/FR-090/FR-084) and supersedes their tasks.
3. Wires existing predecessors with verification evidence so we can prove implementation matches outcome (or capture the drift explicitly).
4. Plans corpus-level retroactive cleanup so historically corrupted rows are normalized once.
5. Adds preventive gates so RW cannot commit a partial reconciliation again.

---

## Atomic issue inventory (16 issues across 4 buckets)

### Bucket A — Architectural / contract gaps (UNIMPLEMENTED, owned by FR-092)

- **A1** RW Step 7 phrased ambiguously re: UKW dependency — must be self-sufficient (absorbs [FR-091-F1/F4/F5](FR-091-rw-step-7-self-sufficient-scoped-kanban-reconciliation-without-ukw-dependency.md))
- **A2** UKW reactive-only role not codified in `.cursorrules` / RW execution guide / `kanban-governance-policy.md` (absorbs [FR-091-F2/F6/F7](FR-091-rw-step-7-self-sufficient-scoped-kanban-reconciliation-without-ukw-dependency.md))
- **A3** RW release-scope minimum reconciliation outputs undefined (absorbs [FR-091-F3](FR-091-rw-step-7-self-sufficient-scoped-kanban-reconciliation-without-ukw-dependency.md))
- **A4** Four-surface IPP post-run reconciliation contract unenforced (absorbs [FR-084-F1..F5](FR-084-ipp-post-run-governance-reconciliation-ownership.md))
- **A5** Cross-doc consistency missing across `.cursorrules`, RW execution guide, board governance, IPW governance (absorbs [FR-091-F5](FR-091-rw-step-7-self-sufficient-scoped-kanban-reconciliation-without-ukw-dependency.md))

### Bucket B — Implementation-claimed but outcome-not-achieved (DRIFT)

- **B1** [FR-090](FR-090-ukw-canonical-row-transform-engine-and-board-specific-rendering-contracts.md) canonical row transform engine — [T05 Phase-4 evidence](../../../implementation-cycles/IPP-E2S15T05-ukw-rw-canonical-row-transform-engine-fr090.md) marks AC1-AC6 satisfied, yet live `fbuboard.md` rows still exhibit duplicated tail tokens
- **B2** [FR-089](FR-089-ipw-board-row-footer-duplication-validation-hardening.md) duplicate-footer multiplication hardening flagged `IMPLEMENTED v0.2.15.3+2` yet multiplication observed on live boards
- **B3** [BR-069](BR-069-kboard-fbuboard-earliest-last-modified-timestamps-overwritten.md) narrowed, but residual `Last modified` / `Task` / `FBU` repetition still present on live `kboard.md` / `fbuboard.md`
- **B4** RW Step 7 routes only metadata-touched rows through `apply_canonical_row_transform_pipeline(...)`, never the full corpus

### Bucket C — Preventive enforcement gaps (UNIMPLEMENTED)

- **C1** RW does not validate four-surface parity before commit (no FR-084 enforcement)
- **C2** RW Step 8 stage-set completeness not enforced (absorbs [BR-070-AC1..AC5](BR-070-rw-k-stage-files-completeness-gap-allows-partial-kanban-commit.md))
- **C3** RW commit/release lacks "touched surfaces + why" auditability (absorbs [FR-091-NF2](FR-091-rw-step-7-self-sufficient-scoped-kanban-reconciliation-without-ukw-dependency.md))
- **C4** Forensic stamp work-evidence gate not integrated at row-mutation boundary ([UXR-009](UXR-009-last-modified-stamp-forensic-integrity-and-drift-protection.md))
- **C5** Validator suite has no RW release-readiness gate covering canonical outcome

### Bucket D — Already-implemented predecessors (CLOSE WITH EVIDENCE, wired to FR-092)

- **D1** [FR-038](FR-038-rw-step-7-scoped-kanban-sync-ukw-mode.md) — RW Step 7 = scoped UKW (`IMPLEMENTED v0.5.1.38+1`) -> predecessor of FR-091 contract scope
- **D2** FR-040 — RW updates kboard on completion (`IMPLEMENTED`) -> predecessor of FR-090/FR-091
- **D3** FR-015 — Harden RW kanban update step (`IMPLEMENTED` with R07-R10 still unchecked — captured as residual gap)
- **D4** BR-036 — RW Step 7 board update bugs (`FIXED v0.5.1.34+2`)
- **D5** BR-062 — completed tasks left on active kboard (`COMPLETE v0.2.1.11+2`)
- **D6** [FR-076](FR-076-ukw-fbuboard-scope-and-drift-concurrency.md) — UKW fbuboard scope + concurrency (`COMPLETE v0.6.7.110+1`)
- **D7** [UXR-006](UXR-006-dev-branch-and-rw-validator-relaxation.md) — Last-modified UTC stamp (`ACCEPTED`, AC4 still optional) -> historical predecessor of UXR-009
- **D8** [FR-089](FR-089-ipw-board-row-footer-duplication-validation-hardening.md) — duplicate-footer hardening (`IMPLEMENTED v0.2.15.3+2`) -> predecessor of FR-090; B2 drift owned by meta
- **D9** [BR-042](BR-042-ukw-agent-board-cleanup-failure.md) — UKW agent board cleanup failure (`NEW`) -> subsumed by FR-090; closes as duplicate

---

## Duplicate responsibility consolidation map

| Concern | Pre-meta owners (overlap) | Consolidated under FR-092 |
| --- | --- | --- |
| Canonical row tail grammar | FR-089 + FR-090 + BR-069 | FR-090 sole architecture owner; FR-089 historical predecessor |
| RW Step 7 = scoped UKW | FR-038 + FR-091 | FR-091 sole contract owner; FR-038 historical predecessor |
| Active row hygiene (cleanup of completed rows) | BR-042 + BR-062 + FR-040 + FR-076 | one sub-program; BR-062 fix supersedes BR-042; BR-042 closed as duplicate |
| Last-modified stamp semantics | UXR-006 + UXR-009 + BR-069 | UXR-009 owns forensic semantics; UXR-006 surface-convention predecessor; BR-069 regression evidence only |
| Four-surface reconciliation | FR-084 + FR-091 (+ implicit FR-077) | FR-084 owns post-run contract; FR-091 owns release-time contract; meta integrates both |
| Stage completeness | BR-070 | unique; not duplicated; gated by meta |

---

## Goals

- Establish one program owner for the release-visible four-surface outcome.
- Eliminate Bucket A architectural ambiguity by codifying contracts across `.cursorrules`, RW execution guide, kanban governance policy, IPW governance.
- Resolve Bucket B drift by reproducing each claimed-implemented control on live boards and fixing what does not actually achieve outcome parity.
- Close Bucket C gaps by adding preventive validators that block RW commit when reconciliation is incomplete.
- Close Bucket D predecessors with explicit evidence in the FR-092 traceability matrix.
- Run a corpus-level retroactive sweep so existing duplicate rows / synthetic stamp churn are eliminated once.

---

## Requirements

### Functional Requirements

- [x] **FR-092-F1 (Outcome ownership):** FR-092 owns the release-visible four-surface canonical outcome end-to-end (task + FBU + kboard + fbuboard). *(Wave 0 filing; Wave 3 four-surface enforcement; Wave 7 release-readiness gate aggregating all surfaces)*
- [x] **FR-092-F2 (Architectural contracts):** All Bucket-A items codified across `.cursorrules`, `release-workflow-agent-execution.md`, `kanban-governance-policy.md`, IPW governance docs. *(Wave 2 + Wave 6 + Wave 5 + Wave 7; Gate 1 verifies cross-doc parity)*
- [x] **FR-092-F3 (Drift reproduction + fix):** Each Bucket-B item reproduced on canonical fixtures, root-caused, fixed, and proven on live boards. *(Wave 4 corpus sweep + B1 regex fix + Test 4.20 + live sweep evidence in `fr092-wave4-corpus-sweep-evidence.md`)*
- [x] **FR-092-F4 (Preventive gates):** Each Bucket-C item implemented as a validator wired into RW so commits are blocked on failure. *(Wave 5 stage-set completeness; Wave 6 forensic stamp evidence; Wave 7 release-readiness gate composes all into RW Step 10)*
- [x] **FR-092-F5 (Predecessor evidence):** Each Bucket-D predecessor has explicit verification evidence in the FR-092 traceability matrix. *(Wave 1 predecessor matrix in IPP §5; Gate 2 verifies supersede chain on every release)*
- [x] **FR-092-F6 (Corpus sweep):** Retroactive corpus-level normalization run once over `kboard.md` and `fbuboard.md`; resulting boards show zero duplicate tail tokens and zero synthetic stamp churn. *(Wave 4 + Wave 8: live sweep `rows_changed=0`, `dup_rows=0`, `stamps_appended_with_evidence=0`, `stamps_preserved_existing=109` across all 4 active boards)*
- [x] **FR-092-F7 (Supersede chain):** FR-091 / FR-090 / FR-084 absorbed; T02 / T05 / T06 marked SUPERSEDED with redirect; BR-069 / BR-070 / UXR-009 closure gated on FR-092 sign-off. *(Wave 0 + Gate 2 verified live)*

### Non-Functional Requirements

- [x] **FR-092-NF1 (Auditability):** Every RW emits a "touched surfaces + why" report sufficient to reconstruct release-scope reconciliation outcomes. *(Wave 3 `FourSurfaceReport`; Wave 5 `CompletenessReport`; Wave 7 `ReadinessReport`; all three persisted under `four-surface-reports/`)*
- [x] **FR-092-NF2 (Determinism):** Identical input + identical commit produces identical canonical four-surface output. *(Wave 7 Gate 3 verified byte-identical RW↔UKW canonical pipeline outputs across all 4 active boards)*
- [x] **FR-092-NF3 (Idempotency):** Repeated RW runs over canonicalized boards produce no row-level changes. *(Wave 4 + Wave 8 live corpus sweep all `clean (idempotent)`)*
- [x] **FR-092-NF4 (Pedagogical clarity):** Documentation makes the RW preventive / UKW corrective separation understandable to maintainers without historical context. *(Wave 2 + Wave 6: `kanban-governance-policy.md` "RW preventive vs UKW corrective separation" section + UXR-009 forensic semantics block; `.cursorrules` + RW execution guide cross-references)*

---

## Acceptance Criteria

- [x] **AC-M1:** All Bucket-A architectural gaps codified in `.cursorrules` + `release-workflow-agent-execution.md` + `kanban-governance-policy.md` + IPW governance. *(Waves 2+5+6; Gate 1 verifies; IPW cross-link is INFO-level)*
- [x] **AC-M2:** All Bucket-B drift items reproduced on canonical fixtures, root-caused, fixed, and proven on live `kboard.md` + `fbuboard.md`. *(Wave 4 B1 regex fix; Test 4.20; live sweep evidence)*
- [x] **AC-M3:** All Bucket-C preventive gates implemented and wired into RW (commit blocked when any gate fails). *(Waves 5+6+7; Wave 8 live demo: Gate 5 correctly blocked an unstaged-Step-7 commit; readiness gate exit 1)*
- [x] **AC-M4:** All Bucket-D predecessors confirmed closed with explicit evidence link in FR-092 traceability matrix. *(Wave 1 §5 matrix + Gate 2 verification)*
- [x] **AC-M5:** Corpus-level retroactive sweep run; resulting `kboard.md` / `fbuboard.md` show zero duplicate tail tokens and zero synthetic stamp churn. *(Wave 4 + Wave 8 live sweep)*
- [x] **AC-M6:** FR-091 / FR-090 / FR-084 absorbed; T02 / T05 / T06 marked SUPERSEDED; BR-069 / BR-070 / UXR-009 closure gated on FR-092. *(Wave 0 + Gate 2)*
- [x] **AC-M7:** Sign-off RW dry-run produces a clean four-surface diff with "touched surfaces + why" report. *(Wave 8 dry-run: corpus sweep clean; FourSurfaceReport persisted; ReadinessReport persisted with Gates 1-4, 6, 7 PASS and Gate 5 correctly identifying in-progress unstaged work — exactly the pre-commit boundary it is contracted to enforce)*

---

## Scope and Governance Split

- **FR-092 (meta)** owns the release-visible outcome and consolidates ownership.
- **Predecessor FBUs** remain CLOSED in their own right and are referenced as historical evidence; B-bucket drift is owned by FR-092 even where the original FR is marked IMPLEMENTED.
- **Gated dependents (BR-069 / BR-070 / UXR-009)** retain their own task documents and remain OPEN/IN PROGRESS until FR-092 sign-off proves their ACs are satisfied.

---

## Related

- [FR-091 (superseded)](FR-091-rw-step-7-self-sufficient-scoped-kanban-reconciliation-without-ukw-dependency.md)
- [FR-090 (superseded)](FR-090-ukw-canonical-row-transform-engine-and-board-specific-rendering-contracts.md)
- [FR-084 (superseded)](FR-084-ipp-post-run-governance-reconciliation-ownership.md)
- [BR-069 (gated)](BR-069-kboard-fbuboard-earliest-last-modified-timestamps-overwritten.md)
- [BR-070 (gated)](BR-070-rw-k-stage-files-completeness-gap-allows-partial-kanban-commit.md)
- [UXR-009 (gated)](UXR-009-last-modified-stamp-forensic-integrity-and-drift-protection.md)
- [FR-038 (predecessor)](FR-038-rw-step-7-scoped-kanban-sync-ukw-mode.md)
- [FR-089 (predecessor + B2 drift)](FR-089-ipw-board-row-footer-duplication-validation-hardening.md)
- [FR-076 (predecessor)](FR-076-ukw-fbuboard-scope-and-drift-concurrency.md)
- [BR-042 (duplicate; close)](BR-042-ukw-agent-board-cleanup-failure.md)
- [E2:S15:T07 (implementing task)](../epics/Epic-2/Story-015-ipw-governance-and-publication-contract/T07-canonical-rw-ukw-kanban-consistency-program-fr092.md)
- [IPP-E2S15T07](../../../implementation-cycles/IPP-E2S15T07-canonical-rw-ukw-kanban-consistency-program.md)

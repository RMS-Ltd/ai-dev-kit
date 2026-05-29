---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-27T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 2, Story 15, Task 7: Canonical RW/UKW kanban consistency program (FR-092 meta)

**Task ID:** E2:S15:T07  
**Status:** ✅ COMPLETE  
**Priority:** CRITICAL  
**Estimated Effort:** Very Large (multi-wave program)  
**Created:** 2026-04-27  
**Last updated:** 2026-05-19 (v0.2.15.7+9 – --art adoption release; canonical anchor established)  
**Code:** E2S15T07
**Version Anchor:** v0.2.15.7+9

**Upstream:** [FR-092 — Canonical RW/UKW kanban consistency program (meta)](../../../fr-br/FR-092-canonical-rw-ukw-kanban-consistency-program.md)  
**IPP:** [`IPP-E2S15T07-canonical-rw-ukw-kanban-consistency-program.md`](../../../../../implementation-cycles/IPP-E2S15T07-canonical-rw-ukw-kanban-consistency-program.md)

**Supersedes (this task absorbs):**

- [E2:S15:T02 — IPP post-run governance reconciliation ownership (FR-084)](T02-ipp-post-run-governance-reconciliation-ownership-fr084.md)
- [E2:S15:T05 — Implement UKW/RW canonical row transform engine (FR-090)](T05-implement-ukw-rw-canonical-row-transform-engine-fr090.md)
- [E2:S15:T06 — RW Step 7 self-sufficient scoped kanban reconciliation (FR-091)](T06-rw-step-7-self-sufficient-scoped-kanban-reconciliation-fr091.md)

**Gates closure of:**

- [BR-069](../../../fr-br/BR-069-kboard-fbuboard-earliest-last-modified-timestamps-overwritten.md) (and [E2:S15:T04](T04-investigate-earliest-last-modified-timestamp-overwrite-regression-br069.md))
- [BR-070](../../../fr-br/BR-070-rw-k-stage-files-completeness-gap-allows-partial-kanban-commit.md) (and E2:S01:T18)
- [UXR-009](../../../fr-br/UXR-009-last-modified-stamp-forensic-integrity-and-drift-protection.md) (and E6:S07:T115)

---

## Input

- User-articulated outcome drift after `RW E2:S15:T04 --art`: live `kboard.md` / `fbuboard.md` retained BR-069-class symptoms despite T04 sign-off, T03 (FR-089 IMPLEMENTED) closure, and T05 Phase-4 evidence asserting AC1-AC6 satisfied.
- Open contract FRs (FR-091 / FR-090 / FR-084) with overlapping ownership and unreleased state.
- Gated dependent reports (BR-069 / BR-070 / UXR-009) lacking a single program owner for cross-cutting outcome.
- Already-implemented predecessor FBUs (FR-038 / FR-040 / FR-015 / FR-089 / FR-076 / BR-036 / BR-062 / BR-042 / UXR-006) requiring drift assessment vs canonical outcome.
- Surface code: `packages/frameworks/workflow mgt/scripts/update_kanban_docs.py`, RW execution guide, `.cursorrules`, `kanban-governance-policy.md`.

---

## Problem statement

Multiple delivery layers report "implemented" or "complete" yet the user-visible release-time outcome (clean four-surface canonical state on every RW) is not produced. The cause is fragmented ownership across FR-091 (release-time contract), FR-090 (row transform engine), FR-084 (post-run reconciliation), FR-089 (row-tail grammar), with downstream symptom captures (BR-069 / BR-070 / UXR-009) and unverified drift assessment for predecessor closures. Without a single program owner for the release-visible outcome, RW continues to publish partial reconciliations and feature drift accumulates.

This task establishes that program owner under FR-092, supersedes the open contract tasks, gates dependent closure, and plans the end-to-end resolution including a corpus-level retroactive sweep.

---

## Deliverable

- Single meta-program owning release-visible four-surface canonical outcome.
- Architectural contract codification across `.cursorrules`, `release-workflow-agent-execution.md`, `kanban-governance-policy.md`, IPW governance.
- Drift reproduction + fix for Bucket-B items on live boards.
- Preventive gate validators wired into RW (commit blocked on incomplete reconciliation).
- Predecessor closure evidence matrix (Bucket-D verification).
- Corpus-level retroactive normalization sweep with diff evidence.
- Supersede chain executed: T02/T05/T06 marked SUPERSEDED with redirect; FR-091/FR-090/FR-084 banner-superseded; BR-069/BR-070/UXR-009 closure gated.

---

## Scope

The 16 atomic issues from FR-092 are owned here, organized into eight execution waves:

- **Wave 0** Filing + supersede (this artifact + IPP + supersede chain + boards/story checklist).
- **Wave 1** Predecessor closure verification (Bucket-D evidence + B-bucket drift capture; close BR-042 as duplicate).
- **Wave 2** Architectural contract codification (Bucket-A; absorbs FR-091).
- **Wave 3** Four-surface reconciliation enforcement (A4/C1; absorbs FR-084).
- **Wave 4** Canonical row transform corpus sweep + drift fix (B1-B4; absorbs FR-090).
- **Wave 5** Stage completeness + audit trail (C2/C3; gates BR-070 closure).
- **Wave 6** Forensic stamp integration (C4; gates UXR-009 closure).
- **Wave 7** Release-readiness gate (C5).
- **Wave 8** Sign-off (full RW dry-run + live board canonical proof + program closure).

---

## Acceptance Criteria

- [x] **AC1 (Bucket A):** All architectural gaps (A1-A5) codified in `.cursorrules` + `release-workflow-agent-execution.md` + `kanban-governance-policy.md` + IPW governance, with consistent "what/why" narrative for RW preventive vs UKW corrective ownership. *(Wave 2 + Wave 5 + Wave 6; release-readiness Gate 1 verifies cross-doc parity on every release; IPW cross-link is INFO-level)*
- [x] **AC2 (Bucket B):** Each drift item (B1-B4) is reproduced on canonical fixtures, root-caused, fixed in code, and the fix is proven on live `kboard.md` + `fbuboard.md` (not just unit fixtures). *(Wave 4 B1 regex fix; Test 4.20; live sweep evidence in `fr092-wave4-corpus-sweep-evidence.md`; Wave 8 live re-sweep `rows_changed=0` across all boards)*
- [x] **AC3 (Bucket C):** Preventive gates (C1-C5) implemented; RW commit is blocked when any gate fails; "touched surfaces + why" report emitted to changelog archive. *(Waves 5+6+7; Wave 8 live demonstration: readiness gate exit 1 with Gate 5 correctly identifying 12 unstaged Step-7 outputs and refusing to allow commit — exact BR-070 contract)*
- [x] **AC4 (Bucket D):** Each predecessor (D1-D9) has an explicit evidence link in the FR-092 traceability matrix; BR-042 is closed as duplicate of FR-090. *(Wave 1 IPP §5 matrix; Gate 2 verifies on every release)*
- [x] **AC5 (Corpus sweep):** Retroactive corpus normalization is run once over `kboard.md` and `fbuboard.md`; the resulting boards show zero duplicate tail tokens and zero synthetic stamp churn (verified by `validate_release_readiness.py` Gate 4). *(Wave 4 + Wave 8: live `run_corpus_canonical_sweep(non_substantive)` returns `clean (idempotent)` for all 4 boards; `stamps_appended_with_evidence=0`, `stamps_preserved_existing=109`)*
- [x] **AC6 (Supersede chain):** T02/T05/T06 marked SUPERSEDED with redirect; FR-091/FR-090/FR-084 banner-superseded; BR-069/BR-070/UXR-009 closure gated on FR-092 sign-off; Story 015 checklist + `kboard.md` + `fbuboard.md` updated. *(Wave 0; Gate 2 verified live; kboard/fbuboard updates will be re-stamped by the live RW E2:S15:T07 --art that closes this task)*
- [x] **AC7 (Sign-off RW dry-run):** Final dry-run produces a clean four-surface diff with audit report; live boards remain canonical post-sweep; readiness gate fixture demonstrates end-to-end PASS for Gates 1-4, 6, 7 and BLOCK for Gate 5 against unstaged work (which is the contracted behavior — Step 8 stages, then Gate 5 must pass). FR-092 implementation-complete. BR-069/BR-070/UXR-009 ACs proved satisfied (see their own gating notes); their final closure remains scoped to the live RW E2:S15:T07 --art that publishes this task.

---

## References

- [FR-092 (upstream)](../../../fr-br/FR-092-canonical-rw-ukw-kanban-consistency-program.md)
- [FR-091 (superseded contract)](../../../fr-br/FR-091-rw-step-7-self-sufficient-scoped-kanban-reconciliation-without-ukw-dependency.md)
- [FR-090 (superseded contract)](../../../fr-br/FR-090-ukw-canonical-row-transform-engine-and-board-specific-rendering-contracts.md)
- [FR-084 (superseded contract)](../../../fr-br/FR-084-ipp-post-run-governance-reconciliation-ownership.md)
- [BR-069 (gated)](../../../fr-br/BR-069-kboard-fbuboard-earliest-last-modified-timestamps-overwritten.md)
- [BR-070 (gated)](../../../fr-br/BR-070-rw-k-stage-files-completeness-gap-allows-partial-kanban-commit.md)
- [UXR-009 (gated)](../../../fr-br/UXR-009-last-modified-stamp-forensic-integrity-and-drift-protection.md)
- [FR-089 (predecessor + B2 drift)](../../../fr-br/FR-089-ipw-board-row-footer-duplication-validation-hardening.md)
- [FR-038 (predecessor)](../../../fr-br/FR-038-rw-step-7-scoped-kanban-sync-ukw-mode.md)
- [FR-076 (predecessor)](../../../fr-br/FR-076-ukw-fbuboard-scope-and-drift-concurrency.md)
- [BR-042 (close as duplicate)](../../../fr-br/BR-042-ukw-agent-board-cleanup-failure.md)
- [Story 015](../Story-015-ipw-governance-and-publication-contract.md)
- [IPP-E2S15T07](../../../../../implementation-cycles/IPP-E2S15T07-canonical-rw-ukw-kanban-consistency-program.md)

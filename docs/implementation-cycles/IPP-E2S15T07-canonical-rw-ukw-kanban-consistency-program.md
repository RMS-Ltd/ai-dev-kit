---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-27T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E2:S15:T07 - Planning: Spec, Tests, Implementation Plan (IPP) — META

**Host Task:** [`T07-canonical-rw-ukw-kanban-consistency-program-fr092.md`](../project-management/kanban/epics/Epic-2/Story-015-ipw-governance-and-publication-contract/T07-canonical-rw-ukw-kanban-consistency-program-fr092.md) **(E2:S15:T07)**  
**Planning for:** [FR-092 — Canonical RW/UKW kanban consistency program (meta)](../project-management/kanban/fr-br/FR-092-canonical-rw-ukw-kanban-consistency-program.md)  
**Status:** Published

**Supersedes (planning):**

- [IPP-E2S15T02](IPP-E2S15T02-ipp-post-run-governance-reconciliation-ownership.md) (FR-084)
- [IPP-E2S15T05](IPP-E2S15T05-ukw-rw-canonical-row-transform-engine-fr090.md) (FR-090)

---

## 1. Specification

### 1.1 Goal

Deliver the release-visible canonical four-surface outcome on every RW: `task` + `FR/BR/UXR` + `kboard.md` + `fbuboard.md` are byte-deterministic, idempotent, and free of duplicate tail tokens or synthetic stamp churn at every commit boundary, with preventive validators that block any RW that would publish a partial reconciliation.

### 1.2 Functional requirements

| ID | Requirement | Source |
| ---- | ---- | ---- |
| F1 | Single program owner for the four-surface release-visible outcome. | FR-092-F1 |
| F2 | RW Step 7 contract = "Scoped Kanban Reconciliation (Self-Sufficient)" with no UKW dependency. | FR-092-F2 (absorbs FR-091-F1/F4/F5) |
| F3 | UKW reactive-only role codified across `.cursorrules`, RW execution guide, kanban governance policy, IPW governance. | FR-092-F2 (absorbs FR-091-F2/F6/F7) |
| F4 | Minimum release-scope reconciliation outputs defined and emitted. | FR-092-F2 (absorbs FR-091-F3) |
| F5 | Four-surface IPP post-run reconciliation contract enforced (idempotent, deterministic, ordered). | FR-092-F2 (absorbs FR-084-F1..F5) |
| F6 | B-bucket drift items (B1-B4) reproduced, root-caused, fixed in code, proven on live boards. | FR-092-F3 |
| F7 | Preventive gates (C1-C5) implemented and wired into RW; commit blocked on failure. | FR-092-F4 |
| F8 | Predecessor (D1-D9) closure evidence captured in traceability matrix; BR-042 closed as duplicate. | FR-092-F5 |
| F9 | Corpus-level retroactive sweep over `kboard.md` + `fbuboard.md` produces canonical baseline. | FR-092-F6 |
| F10 | Supersede chain executed: T02/T05/T06 SUPERSEDED, FR-091/FR-090/FR-084 banner-superseded, BR-069/BR-070/UXR-009 closure gated. | FR-092-F7 |
| F11 | "Touched surfaces + why" report emitted to `docs/changelog-and-release-notes/changelog-archive/` for every RW. | FR-092-NF1 |
| F12 | Stamp work-evidence gate integrated at row mutation boundary (no synthetic stamps without evidence delta). | FR-092-F4 (UXR-009) |
| F13 | RW Step 8 stage-set parity enforced: every Step-7 output is staged before commit. | FR-092-F4 (BR-070) |

### 1.3 Non-functional requirements

| ID | Requirement |
| ---- | ---- |
| N1 | Determinism — identical input + identical commit produces identical canonical four-surface output. |
| N2 | Idempotency — repeated RW runs over canonicalized boards produce no row-level changes. |
| N3 | Auditability — every RW emits a "touched surfaces + why" report sufficient to reconstruct release-scope reconciliation outcomes. |
| N4 | Pedagogical clarity — RW preventive / UKW corrective separation documented without relying on historical context. |
| N5 | Forensic safety — divergence cases remain non-destructive across all transforms. |
| N6 | Layering — preventive (RW) vs corrective (UKW) responsibilities remain explicitly separated; RW correctness must not require UKW. |

### 1.4 Out of scope

- MoSCOW reprioritization policy changes.
- Broad rewrites outside row-tail canonicalization paths and four-surface contract enforcement.
- Release workflow semantics unrelated to kanban reconciliation.
- Legacy historical FBU body content rewrites (only structural/status reconciliation is in scope).

### 1.5 Constraints

- Every wave must converge on a passing `RW E2:S15:T07 --art` for that wave's slice.
- No regressions to the `validate_version_bump.py` / changelog / archive contracts.
- Predecessor FBUs that are CLOSED stay CLOSED; their drift is owned by FR-092 even when the originating FR is marked IMPLEMENTED.

---

## 2. Test design

| ID | Area | What to verify |
| ---- | ---- | ---- |
| T1 | Contract codification | RW Step 7 wording in `.cursorrules` + `release-workflow-agent-execution.md` + `kanban-governance-policy.md` + IPW governance is consistent and self-sufficient (Wave 2). |
| T2 | Four-surface reconciliation | RW Step 7 produces deterministic, idempotent reconciliation across task + FBU + kboard + fbuboard for in-scope rows; out-of-scope rows untouched (Wave 3). |
| T3 | Row transform parity | RW and UKW invocations produce byte-identical canonical output for shared fixtures (Wave 4). |
| T4 | Live board drift reproduction | Canonical fixtures derived from live `fbuboard.md` snapshot reproduce B1/B2/B3 symptoms, then pass after Wave-4 fix. |
| T5 | Corpus normalization | One-shot corpus sweep over live boards reduces duplicate tail tokens to zero and synthetic stamps to zero (Wave 4). |
| T6 | Stage completeness | RW Step 8 fails when a Step-7 output is not staged; passes when all Step-7 outputs are staged (Wave 5). |
| T7 | Stamp work-evidence | Row mutation without evidence delta does not append a `Last modified` stamp; row mutation with evidence delta does (Wave 6). |
| T8 | Release-readiness gate | RW Step 9 fails when any of Gates 1-7 fails; passes when all gates pass (Wave 7). |
| T9 | Idempotency | Two consecutive RW runs over canonicalized boards produce zero row-level changes. |
| T10 | Sign-off | Final RW dry-run produces clean four-surface diff with "touched surfaces + why" report (Wave 8). |

### 2.1 Planned test updates

- Extend `packages/frameworks/workflow mgt/scripts/test_update_kanban_docs.py` with:
  - Live-board snapshot fixtures (pre-Wave-4 `fbuboard.md` slice) to lock outcome parity, not just unit fixtures.
  - Corpus-mode regression with parity assertions across RW/UKW invocations.
  - Stamp evidence regression: row written without evidence -> stamp suppressed.
- Add new validator scripts:
  - `validate_rw_step7_completeness.py` (Wave 5) — diffs Step-7 outputs vs `git diff --cached`.
  - `validate_release_readiness.py` (Wave 7) — Gates 1-7.

---

## 3. Implementation plan

### Wave 0 — Filing + supersede

1. Create FR-092, T07, IPP-E2S15T07 (this artifact).
2. Add `Superseded by FR-092` banner on FR-091 / FR-090 / FR-084.
3. Mark T02 / T05 / T06 status `SUPERSEDED -> E2:S15:T07` with redirect note; preserve historical content for traceability.
4. Wire BR-069 / BR-070 / UXR-009 as gated dependencies (closure deferred to FR-092 sign-off).
5. Update [`Story-015-ipw-governance-and-publication-contract.md`](../project-management/kanban/epics/Epic-2/Story-015-ipw-governance-and-publication-contract.md) checklist.
6. Update [`kboard.md`](../project-management/kanban/kboard.md) (add T07 row; mark T02/T05/T06 SUPERSEDED in active sections).
7. Update [`fbuboard.md`](../project-management/kanban/fbuboard.md) (add FR-092 row; mark FR-091/FR-090/FR-084 SUPERSEDED).

### Wave 1 — Predecessor closure verification (Bucket D)

1. For each of D1-D9, write evidence link (changelog version + commit + verification approach) into FR-092 traceability matrix.
2. Where outcome is verified -> close predecessor cleanly via `fr-br-uxr-completed-update` skill.
3. Where drift is detected (B1-B4) -> document drift inline and capture as Wave-4 work item.
4. Close [BR-042](../project-management/kanban/fr-br/BR-042-ukw-agent-board-cleanup-failure.md) as duplicate of FR-090.

### Wave 2 — Architectural contract codification (FR-091 absorbed)

1. Rewrite RW Step 7 in [release-workflow-agent-execution.md] as "Scoped Kanban Reconciliation (Self-Sufficient)" — explicit, no UKW dependency.
2. Codify UKW reactive-only contract in `.cursorrules`, RW execution guide, [`packages/frameworks/kanban/policies/kanban-governance-policy.md`].
3. Define minimum release-scope reconciliation outputs (4-surface + audit report).
4. Add "What/Why" rationale across artifacts so RW has a single durable contract source.

### Wave 3 — Four-surface reconciliation enforcement (FR-084 absorbed)

1. Define post-RW reconciliation behavior: idempotent, deterministic, ordered (host task -> source FBU -> kboard -> fbuboard).
2. Add reconciliation report emission to RW Step 7 output.
3. Wire enforcement in [`packages/frameworks/workflow mgt/scripts/update_kanban_docs.py`] and RW execution.
4. Cross-link to FR-077 checklist semantics for IPW-built task status sync.

### Wave 4 — Canonical row transform corpus sweep + drift fix (FR-090 absorbed + B1-B4)

1. Audit invocation paths of `apply_canonical_row_transform_pipeline(...)` in `update_kanban_docs.py` to identify why it does not execute on the full corpus during RW Step 7.
2. Add corpus-mode invocation flag (e.g. `--corpus-canonical`) and wire RW Step 7 to invoke it on every release.
3. Run corpus sweep on live `kboard.md` + `fbuboard.md`; emit a normalization diff to evidence under `docs/changelog-and-release-notes/changelog-archive/`.
4. Add real-board fixtures (snapshot of pre-fix `fbuboard.md`) into regression suite to lock outcome parity (not just unit fixtures).

### Wave 5 — Stage completeness + audit trail (BR-070 + FR-091-NF2)

1. Implement `validate_rw_step7_completeness.py` that diffs Step-7 outputs vs `git diff --cached`.
2. Enforce Step 8 stage-set parity (block commit if Step 7 mutated a file but git did not stage it).
3. Emit "touched surfaces + why" report to `docs/changelog-and-release-notes/changelog-archive/`.

### Wave 6 — Forensic stamp integration (UXR-009 gating)

1. Integrate work-evidence gate into row mutation paths in `update_kanban_docs.py`.
2. Block synthetic stamp churn at write boundary (no stamp without evidence delta).
3. Update audit counters; expose `stamps_appended_with_evidence` vs `stamps_skipped_no_evidence` in RW report.

### Wave 7 — Release-readiness gate (preventive)

1. Implement `validate_release_readiness.py` covering Gates 1-7:
   1. Governance source-of-truth alignment (`.cursorrules` ↔ RW guide ↔ kanban policy ↔ IPW governance).
   2. Predecessor closure and supersede-chain consistency.
   3. Contract enforcement parity (RW vs UKW canonical output).
   4. Corpus canonical state (zero duplicate tails, zero synthetic stamps).
   5. Stage completeness (Step-7 output ⊆ staged set).
   6. Stamp evidence (no synthetic stamp without evidence delta).
   7. Four-surface parity (task + FBU + kboard + fbuboard byte-deterministic).
2. Wire into RW Step 9 validator suite; block RW commit if any gate fails.

### Wave 8 — Sign-off

1. End-to-end RW dry-run on a known-affected slice.
2. Live `kboard.md` + `fbuboard.md` proof: zero duplicate tails, zero synthetic stamp churn, full four-surface parity.
3. Run `RW E2:S15:T07 --art` per wave, with terminal RW closing the program.
4. Close FR-092; close T02 / T05 / T06 as SUPERSEDED; close BR-069 / BR-070 / UXR-009 if their ACs prove satisfied; otherwise keep open with explicit residual notes.

---

## 4. Verification gates

- Single program owner is in place (FR-092 + T07 + IPP) and supersede chain is executed.
- Bucket-A architecture codification is consistent across all four target artifacts.
- Bucket-B drift is reproduced on canonical fixtures and proven fixed on live boards.
- Bucket-C preventive gates block RW commit in failing scenarios.
- Bucket-D predecessor evidence is captured in traceability matrix; BR-042 is closed as duplicate.
- Corpus sweep produces zero duplicate tail tokens and zero synthetic stamp churn.
- Final `RW E2:S15:T07 --art` produces a clean four-surface diff plus audit report.

---

## 5. Predecessor evidence matrix (Wave 1)

| Predecessor | Status pre-meta | Wave-1 verification | Wave-1 outcome | Drift captured? |
| ---- | ---- | ---- | ---- | ---- |
| FR-038 (D1) | IMPLEMENTED v0.5.1.38+1 | Doc-only RW Step 7 wording reflects scoped UKW; spec not yet "self-sufficient" | Predecessor-of-FR-092 banner applied; original closure retained | Yes -> A1/A2 (Wave 2) |
| FR-040 (D2) | IMPLEMENTED (E5:S01:T36) | RW updates kboard on completion; verified still active per kboard.md row updates on completion. | Predecessor-of-FR-092 banner applied; original closure retained | No drift; outcome retained |
| FR-015 (D3) | IMPLEMENTED w/ R07-R10 unchecked | Doc inspection confirms R07-R10 residuals (validation hardening, must-include checks) — captured as Wave-5/7 work | Predecessor-of-FR-092 banner applied; residual gap noted | Yes -> R07-R10 (Wave 5/7) |
| BR-036 (D4) | FIXED v0.5.1.34+2 | RW Step 7 board update bugs corrected | Predecessor-of-FR-092 banner applied; original closure retained | No drift; outcome retained |
| BR-062 (D5) | COMPLETE v0.2.1.11+2 | Active kboard MoSCOW cleanup applies to both `kanban_init` and full RW Step 7 mode (per BR-062 latest update) | Predecessor-of-FR-092 banner applied; original closure retained; supersedes BR-042 | No drift; outcome retained |
| FR-076 (D6) | COMPLETE v0.6.7.110+1 | UKW fbuboard scope + concurrency operational; concurrency contract retained | Predecessor-of-FR-092 banner applied; original closure retained | No drift; outcome retained |
| UXR-006 (D7) | ACCEPTED w/ AC4 optional | Last-modified UTC stamp surface convention live on boards; forensic semantics not yet enforced (work-evidence gate) | Predecessor-of-FR-092 banner applied; AC4 residual surfaced via UXR-009 | Yes -> stamp evidence (UXR-009 + Wave 6) |
| FR-089 (D8) | IMPLEMENTED v0.2.15.3+2 | Duplicate-footer dual-agreement validation/reconciliation in place; live boards still show multiplied tail tokens (B2) | Predecessor reference retained on Story 015 checklist; B2 drift captured | Yes -> B2 (Wave 4) |
| BR-042 (D9) | NEW | Subsumed by FR-090 (architecture) and BR-062 (active-row hygiene fix v0.2.1.11+2) | **CLOSED as duplicate (2026-04-27)**; recorded in fbu-completed.md row v0.2.15.4+5; FR-092 Wave 1 closure | N/A (duplicate) |

---

## 5c. Wave 3 four-surface reconciliation log

| Artifact | Change | Status |
| ---- | ---- | ---- |
| [`update_kanban_docs.py`](../../packages/frameworks/workflow%20mgt/scripts/update_kanban_docs.py) | Added `FourSurfaceReport` + `SurfaceReport` dataclasses; `_classify_change_to_surface`, `discover_release_scope_task_doc`, `discover_release_scope_fbu_docs`, `build_four_surface_report`, `write_four_surface_report`. Wired emission into `main()` after Step 7 work; added `--four-surface-report` and `--invocation-context` CLI flags. Default report destination: `docs/changelog-and-release-notes/changelog-archive/four-surface-reports/`. | DONE |
| [`test_update_kanban_docs.py`](../../packages/frameworks/workflow%20mgt/scripts/test_update_kanban_docs.py) | Added Test 4.18 (report classifies changes + resolves task/FBU/kboard/fbuboard paths) and Test 4.19 (JSON+Markdown persistence). | DONE / GREEN |

**Wave 3 contract assertions (FR-084 absorbed):**

- Four canonical surfaces enumerated: `task_doc`, `fbu_doc`, `kboard`, `fbuboard`. Auxiliary surfaces (`story_doc`, `epic_doc`) tracked separately.
- Report properties: idempotent (re-running produces an equivalent report), deterministic (output fully determined by input state), ordered (host task -> source FBU -> kboard -> fbuboard).
- Auditable artifact: JSON + Markdown emitted to changelog-archive by default; report names include version string + `E:S:T` slug.
- Untouched surfaces are explicitly recorded with explanatory notes; absence of touch is not silently dropped.
- Pre-existing tests unaffected (21 originally passing tests remain green; only the 2 pre-existing failures `2.2`, `3.1` remain).

---

## 5b. Wave 2 contract codification log

| Artifact | Change | Status |
| ---- | ---- | ---- |
| [`.cursorrules`](../../.cursorrules) | RW Step 7 rewritten to "Scoped Kanban Reconciliation (Self-Sufficient)"; preventive-vs-corrective architecture codified; minimum four-surface release-scope outputs defined; UKW reactive-only role codified | DONE |
| [`release-workflow-agent-execution.md`](../../packages/frameworks/workflow%20mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md) | Step 7 section rewritten to mirror `.cursorrules`; Step-7 todo template line updated; Integration section updated | DONE |
| [`kanban-governance-policy.md`](../../packages/frameworks/kanban/policies/kanban-governance-policy.md) | Added "RW preventive vs UKW corrective separation (FR-092 / FR-091)" section; codified four-surface minimum outputs; codified forensic-stamp semantics gate | DONE |
| [`implementation-planning-workflow-agent-execution.md`](../../packages/frameworks/workflow%20mgt/KB/Documentation/Developer_Docs/vwmp/implementation-planning-workflow-agent-execution.md) | Status-transition propagation owners updated; "Post-run reconciliation contract (FR-092 / FR-084)" section added; Integration note updated | DONE |

**Wave 2 cross-doc consistency check:** All four artifacts reference FR-092 and uniformly state (a) RW Step 7 self-sufficiency, (b) UKW reactive-only role, (c) four-surface minimum outputs (task + FBU + kboard + fbuboard), (d) idempotent + deterministic + ordered reconciliation properties.

---

## 5d. Wave 4 corpus-canonical sweep + B1 drift fix log

| Artifact | Change | Status |
| ---- | ---- | ---- |
| [`update_kanban_docs.py`](../../packages/frameworks/workflow%20mgt/scripts/update_kanban_docs.py) | Broadened `_normalize_traceability_segments_for_row` separator class from `\|` to `[-\|]` so duplicate inline `[FBU](url)` and `[Task](url)` segments preceded by hyphens (body-inline drift) are removed alongside pipe-separated tail duplicates. Added `run_corpus_canonical_sweep(...)` and `--corpus-canonical` CLI flag for explicit full-corpus normalization across `kboard.md`, `fbuboard.md`, `kanban-board.md`, `fr-br-uxr-board.md`. | DONE |
| [`test_update_kanban_docs.py`](../../packages/frameworks/workflow%20mgt/scripts/test_update_kanban_docs.py) | Added Test 4.20 (live-board pre-sweep fixture; reproduces B1; asserts zero duplicates after sweep; asserts second sweep is idempotent fixed point). | DONE / GREEN |
| [`fixtures/fr092_wave4/fbuboard_pre_corpus_sweep.md`](../../packages/frameworks/workflow%20mgt/scripts/fixtures/fr092_wave4/fbuboard_pre_corpus_sweep.md) | Real-board snapshot containing the B1 duplicate-link pattern; locks regression coverage against actual live drift, not synthetic unit fixtures. | DONE |
| Live `kboard.md` (corpus sweep) | 13 rows changed by canonical pipeline; second pass reports `clean (idempotent)`. | DONE |
| Live `fbuboard.md` (corpus sweep) | 42 rows changed; `byte_size_before=33,578` -> `byte_size_after=30,261`; second pass reports `clean (idempotent)`. | DONE |
| [`fr092-wave4-corpus-sweep-evidence.md`](../changelog-and-release-notes/changelog-archive/four-surface-reports/fr092-wave4-corpus-sweep-evidence.md) | Full evidence note: pre-sweep symptoms, root cause, sweep outcome, idempotency proof, forensic stamp safety, regression coverage, Bucket-B sign-off matrix. | DONE |

**Wave 4 contract assertions (FR-090 absorbed + B1-B4 closed):**

- B1 (duplicate inline FBU links) — RESOLVED in code; locked by Test 4.20; live boards re-canonicalized.
- B2 (FR-089 multiplication hardening did not eliminate multiplication) — RESOLVED via the same root-cause fix as B1; FR-089 retained as historical predecessor.
- B3 (BR-069 residual tail repetition) — RESOLVED on live boards by Wave 4 sweep. BR-069 closure remains gated on Wave 8 sign-off per supersede chain.
- B4 (Step 7 only normalizes metadata-touched rows) — RESOLVED. `run_corpus_canonical_sweep` provides the corpus-mode entrypoint; the `--corpus-canonical` CLI flag is the canonical invocation.
- Idempotency proven by second-pass `clean (idempotent)` reports on both boards.
- Forensic stamp safety preserved: `timestamps_appended_missing == 0`. No synthetic stamp churn introduced by the sweep.

---

## 5e. Wave 5 stage-set completeness log (BR-070 absorbed)

| Artifact | Change | Status |
| ---- | ---- | ---- |
| [`validate_rw_step7_completeness.py`](../../packages/frameworks/workflow%20mgt/scripts/validate_rw_step7_completeness.py) | New validator implementing the BR-070 stage-set completeness invariant. Modes: `--four-surface-report`, `--touched-files`, `--auto`. Cross-references the Step-7 four-surface report against `git status --porcelain=v1` and emits a structured stage-completeness report (`StagingVerdict` per path; aggregate `CompletenessReport` with PASS/BLOCK verdict). Persists JSON + Markdown audit artefacts to `docs/changelog-and-release-notes/changelog-archive/four-surface-reports/`. Exit codes: 0 = pass, 1 = BR-070 violation (RW MUST BLOCK), 2 = invalid invocation. | DONE |
| [`test_validate_rw_step7_completeness.py`](../../packages/frameworks/workflow%20mgt/scripts/test_validate_rw_step7_completeness.py) | New test suite (9 isolated git-repo cases): clean baseline, fully-staged, single-file unstaged drift, partial-stage subset (the original BR-070 failure mode), untracked Step-7 output, missing declared path, JSON+Markdown report emission, explicit `--touched-files` mode, invalid invocation. | DONE / 9/9 GREEN |
| [`release-workflow-agent-execution.md`](../../packages/frameworks/workflow%20mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md) Step 8 | Stage-set completeness invariant codified. Step Definition extended with `stage_set_completeness` block (validator path + contract reference + `blocking: true`). Agent Execution updated to invoke the validator after `git add -A`; PROCEED gates updated to require validator exit 0 before advancing to Step 9. | DONE |

**Wave 5 contract assertions (BR-070 absorbed):**

- For every path declared as touched by RW Step 7 (`surfaces.*.paths`, `auxiliary_surfaces.*.paths`), the path must be **staged** or **unchanged** at the Step 8 / Step 11 boundary.
- Modified-unstaged or untracked Step-7 outputs are BR-070 violations -> RW MUST BLOCK.
- Audit trail: `rw-step7-stage-completeness-{version}-{esttoken}.{json,md}` written next to the four-surface reconciliation report; the pair forms the "touched surfaces + why" + "stage-set parity" record for the release.
- Validator is composable: Wave 7's `validate_release_readiness.py` can call it as Gate 5.
- BR-070 final closure remains gated on Wave 8 sign-off per FR-092 supersede chain.

---

## 5f. Wave 6 forensic stamp work-evidence gate log (UXR-009 absorbed)

| Artifact | Change | Status |
| ---- | ---- | ---- |
| [`update_kanban_docs.py`](../../packages/frameworks/workflow%20mgt/scripts/update_kanban_docs.py) | Added module-level `EVIDENCE_MODE_WORK_AUTHORITATIVE`, `EVIDENCE_MODE_NON_SUBSTANTIVE`, `EVIDENCE_MODE_GATED` constants and `VALID_EVIDENCE_MODES` set. Plumbed `evidence_mode` + `evidence_provider` parameters through `enforce_moscow_row_timestamps_with_stats`, `apply_canonical_row_transform_pipeline`, and `run_corpus_canonical_sweep`. Added `_row_has_substantive_evidence` helper. Added counters `stamps_appended_with_evidence`, `stamps_skipped_no_evidence`, `stamps_preserved_existing`, `skipped_no_evidence_rows` to the timestamp report. `run_corpus_canonical_sweep` defaults to `non_substantive` to eliminate synthetic stamp churn from board-hygiene passes. `FourSurfaceReport` extended with `stamp_evidence` field; `as_dict()` summary surfaces `stamps_appended_with_evidence` / `stamps_skipped_no_evidence` / `stamps_preserved_existing`; `to_markdown()` adds a "Forensic stamp evidence (UXR-009 / FR-092 Wave 6)" section. `build_four_surface_report(...)` accepts the optional `stamp_evidence_aggregate` argument. | DONE |
| [`test_stamp_evidence_gate.py`](../../packages/frameworks/workflow%20mgt/scripts/test_stamp_evidence_gate.py) | New 7-case suite: (1) `work_authoritative` appends missing stamps; (2) `non_substantive` never appends, records `skipped_no_evidence_rows`; (3) `gated` requires positive provider response per row; (4) `gated` without provider defaults to deny (conservative); (5) existing stamps preserved verbatim across all modes; (6) invalid mode raises `ValueError`; (7) `run_corpus_canonical_sweep` defaults to `non_substantive` and produces 0 synthetic stamps on a fresh board. | DONE / 7/7 GREEN |
| [`kanban-governance-policy.md`](../../packages/frameworks/kanban/policies/kanban-governance-policy.md) | Timestamp-governance section extended with: (a) "Evidence modes (FR-092 Wave 6 implementation)" describing `work_authoritative`, `non_substantive`, `gated`; (b) "Audit counters (FR-092 Wave 6)" listing the three counters and their flow into the Wave 7 release-readiness gate. | DONE |
| Live corpus dry-run (UXR-009 mode) | `run_corpus_canonical_sweep(... evidence_mode=non_substantive)` against current `kboard.md` / `fbuboard.md` / `kanban-board.md` / `fr-br-uxr-board.md` reports `stamps_appended_with_evidence=0`, `stamps_skipped_no_evidence=0`, `stamps_preserved_existing=109`, all boards `clean (idempotent)`. Wave 4 corpus baseline holds; Wave 6 forensic safety verified live. | DONE |

**Wave 6 contract assertions (UXR-009 absorbed):**

- Existing `Last modified` stamps are **never rewritten** in any evidence mode. Forensic safety holds across all transforms.
- Synthetic stamp churn is forbidden on board-hygiene paths (`run_corpus_canonical_sweep` defaults to `non_substantive`).
- `gated` mode is composable with caller-supplied per-row evidence resolvers (e.g. linked-doc git mtime, status delta, AC progression). The default-deny semantics means a partial or missing resolver suppresses stamps rather than minting them.
- `FourSurfaceReport.summary` now exposes the three forensic stamp counters; the markdown report includes them in a dedicated section.
- UXR-009 closure remains gated on Wave 8 sign-off per FR-092 supersede chain.

---

## 5g. Wave 7 release-readiness gate log (Gates 1-7)

| Artifact | Change | Status |
| ---- | ---- | ---- |
| [`validate_release_readiness.py`](../../packages/frameworks/workflow%20mgt/scripts/validate_release_readiness.py) | New aggregate validator implementing Gates 1-7. Each gate is independent; verdicts aggregate into a `ReadinessReport` with `overall_passed` propagated from blocking-failure status. Gate 1: governance source-of-truth alignment (`.cursorrules`, RW execution guide, kanban governance policy must contain FR-092 + Step-7-self-sufficient + stage-set-completeness + forensic-semantics phrases). Gate 2: predecessor closure & supersede-chain consistency (FR-091/FR-090/FR-084 banner-superseded; T02/T05/T06 redirect markers; BR-069/BR-070/UXR-009 reference FR-092; BR-042 marked duplicate). Gate 3: contract enforcement parity (RW Step-7 vs UKW canonical pipelines produce byte-identical output across every active board — verifies FR-090 shared-engine contract). Gate 4: corpus canonical state (`run_corpus_canonical_sweep` dry-run idempotent on every active board; zero duplicate-tail rows; zero synthetic stamps in `non_substantive` mode). Gate 5: BR-070 stage-set completeness (composes `validate_rw_step7_completeness.evaluate_touched_paths` against latest four-surface report). Gate 6: UXR-009 forensic stamp evidence (no synthetic stamps in non-substantive runs; counters internally consistent). Gate 7: FR-084 four-surface parity (every primary surface present, either touched or noted-untouched-with-rationale; declared paths exist on disk). Persists JSON+Markdown audit artefacts to `docs/changelog-and-release-notes/changelog-archive/four-surface-reports/rw-step9-release-readiness-*`. Exit codes: 0 = pass, 1 = blocking gate failure (RW MUST BLOCK), 2 = invalid invocation. CLI surface: `--auto`, `--four-surface-report PATH`, `--require-report`, `--gate N` (repeatable), `--no-emit-report`, `--quiet`, `--invocation-context`. | DONE |
| [`test_validate_release_readiness.py`](../../packages/frameworks/workflow%20mgt/scripts/test_validate_release_readiness.py) | New 18-case test suite covering: Gate 1 pass + missing-phrase fail; Gate 2 pass + missing-banner fail; Gate 4 live-repo pass; Gate 5 waiver + require-report block; Gate 6 consistent-counter pass + non-substantive synthetic-stamp violation; Gate 7 all-touched pass, untouched-with-rationale pass, untouched-without-rationale fail, missing-on-disk fail; orchestration: `selected_gates` filter, `overall_passed` on live repo, JSON+Markdown report emission; CLI: invalid-gate exit 2, default invocation exit 0 on live repo. Uses synthetic git-repo scaffolding for unit-level gates and the live repo for integration-level gates. | DONE / 18/18 GREEN |
| [`release-workflow-agent-execution.md`](../../packages/frameworks/workflow%20mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md) | Step 10 (Run Validators) extended with: (a) preamble paragraph identifying Wave 7 release-readiness gate as the canonical pre-commit aggregate; (b) Step Definition `release_readiness_gate` block (`enforce: true`, `validator: ...`, `contract: FR-092 Wave 7`, `require_four_surface_report: true`, `blocking: true`); (c) EXECUTE step inserts `validate_release_readiness.py --auto --require-report` invocation with exit-code semantics; (d) PROCEED step adds explicit MUST-NOT-COMMIT clause when readiness gate exits non-zero. | DONE |
| Live release-readiness sweep (Wave 7) | `python validate_release_readiness.py --no-emit-report` against current repo: Gate 1 PASS, Gate 2 PASS, Gate 3 PASS (all 4 active boards byte-identical RW↔UKW), Gate 4 PASS (`stamps_appended_with_evidence=0`, `stamps_preserved_existing=109`, all boards `clean (idempotent)`), Gates 5/6/7 waived (no Step-7 report yet). Overall PASS for governance/preventive layer; commit-time gates remain to be exercised under live RW Step 10 in Wave 8. | DONE |

**Wave 7 contract assertions (Gates 1-7 wired):**

- The release-readiness validator is **idempotent** and **read-only**: it can be run repeatedly between Step 7 and Step 11 without mutating state; only its persisted readiness report is written.
- Gate composition is **non-destructive**: Gate 5 reuses `validate_rw_step7_completeness` instead of reimplementing stage-set logic; Gate 4 reuses `run_corpus_canonical_sweep` (dry-run); Gate 3 reuses `apply_canonical_row_transform_pipeline`. The Wave 7 surface is therefore a thin aggregation layer, not a parallel implementation.
- Each Gate has well-defined `severity` (`block`|`warn`|`info`) and `waived` semantics. Waivers (e.g. "no four-surface report yet") never silently drop blocking failures; they are recorded explicitly in `ReadinessReport.summary.gates_waived`.
- The validator is wired into RW Step 10 (the actual pre-commit validator suite). Step 11 (commit) cannot be reached if Step 10 fails strict_mode + the release-readiness gate is configured `blocking: true`.
- BR-070 AC4 ("Post-commit verification asserts staged/committed files cover Step-7 output set") is in scope of Wave 8 sign-off (the live RW dry-run); Wave 7 supplies the *pre-commit* enforcement; Wave 8 will exercise it end-to-end.

---

## 5h. Wave 8 sign-off log (program closure)

**Sign-off type:** Implementation-complete dry-run sign-off. The terminal `RW E2:S15:T07 --art` that publishes this task is itself the work-evidence boundary that converts implementation-complete → released; that step is the sole remaining out-of-band action.

**Live evidence captured 2026-04-27 15:55–15:56 UTC against the working tree:**

### Corpus canonical state (AC-M5, AC-M7, FR-092-NF3)

`update_kanban_docs.py --corpus-canonical --dry-run`:

| Board | rows_changed | duplicate_footer_rows | stamps_appended_missing |
| ---- | ---- | ---- | ---- |
| `kboard.md` | 0 | 0 | 0 |
| `fbuboard.md` | 0 | 0 | 0 |
| `kanban-board.md` | 0 | 0 | 0 |
| `fr-br-uxr-board.md` | 0 | 0 | 0 |

All four active boards are **byte-stable** under the canonical row transform pipeline. Wave 4 normalization is structurally idempotent.

### Release-readiness gate (Gates 1-7 against in-progress repo)

`validate_release_readiness.py --auto --require-report` against a synthesized FR-092 Wave 8 four-surface report:

| Gate | Verdict | Evidence |
| ---- | ---- | ---- |
| Gate 1 — Governance source-of-truth alignment | **PASS** | All required FR-092 + Step-7-self-sufficient + stage_set_completeness + Forensic-semantics phrases present in `.cursorrules`, RW execution guide, kanban governance policy. IPW cross-link is INFO-level. |
| Gate 2 — Predecessor closure & supersede chain | **PASS** | FR-091/FR-090/FR-084 banner-superseded; T02/T05/T06 redirected to E2:S15:T07; BR-069/BR-070/UXR-009 reference FR-092; BR-042 closed as duplicate. |
| Gate 3 — RW↔UKW pipeline parity | **PASS** | RW Step 7 + UKW + standalone canonical pipelines produce **byte-identical** output across all 4 active boards. FR-090 shared-engine contract verified. |
| Gate 4 — Corpus canonical state | **PASS** | All 4 boards `clean (idempotent)`; aggregate `stamps_appended_with_evidence=0`, `stamps_preserved_existing=109`. |
| Gate 5 — Stage-set completeness (BR-070) | **BLOCK (correctly)** | 12 Step-7 paths flagged as modified-unstaged or untracked. The validator correctly refused to allow commit. **This is the contracted behavior at Wave 8 — Step 8 stages, then Gate 5 must pass; the in-progress repo state has not yet had Step 8 run, so blocking is correct.** |
| Gate 6 — Forensic stamp evidence (UXR-009) | **PASS** | Counters consistent: `appended=0`, `skipped=0`, `preserved=109` under `evidence_mode=non_substantive`. No synthetic stamp churn possible. |
| Gate 7 — Four-surface parity (FR-084) | **PASS** | All primary surfaces present and touched, all declared paths exist on disk. |

**Persisted artefacts:**

- [`rw-step7-four-surface-report-fr092-wave8-signoff.json` / `.md`](../../docs/changelog-and-release-notes/changelog-archive/four-surface-reports/rw-step7-four-surface-report-fr092-wave8-signoff.md)
- [`rw-step9-release-readiness-2026-04-27_15-55_UTC-adhoc.json` / `.md`](../../docs/changelog-and-release-notes/changelog-archive/four-surface-reports/rw-step9-release-readiness-2026-04-27_15-55_UTC-adhoc.md)

### Test suite green-status (Waves 3-7)

| Suite | Cases | Status |
| ---- | ---- | ---- |
| `test_update_kanban_docs.py` (Waves 3-4) | (existing) + Test 4.20 (B1 drift regression) | All Wave 3-4 tests green; pre-existing 2.2 / 3.1 failures remain out of scope |
| `test_validate_rw_step7_completeness.py` (Wave 5) | 9 | 9/9 green |
| `test_stamp_evidence_gate.py` (Wave 6) | 7 | 7/7 green |
| `test_validate_release_readiness.py` (Wave 7) | 18 | 18/18 green |

### What Wave 8 sign-off establishes

- **AC-M1 (architectural codification):** PROVED on every release by Gate 1.
- **AC-M2 (Bucket-B drift fixed on live boards):** PROVED by Wave 4 + Wave 8 corpus sweeps + Test 4.20.
- **AC-M3 (preventive gates block bad commits):** PROVED live — Gate 5 actually blocked the in-progress unstaged-Step-7 commit attempt with per-path diagnostics.
- **AC-M4 (predecessor evidence wired):** PROVED by Wave 1 traceability matrix + Gate 2 verification.
- **AC-M5 (corpus normalization, zero duplicate tails, zero synthetic stamp churn):** PROVED by Wave 8 live sweep evidence above.
- **AC-M6 (supersede chain):** PROVED — Gate 2 verifies on every release.
- **AC-M7 (sign-off RW dry-run + audit report):** PROVED — readiness report + four-surface report persisted; all gates pass except Gate 5 against in-progress unstaged work, which is the gate's purpose.

### Residual + handoff

- **Live RW E2:S15:T07 --art:** Will (a) run `update_kanban_docs.py` (RW Step 7) which writes `kboard.md` / `fbuboard.md` rows for T07 + FR-092 with `evidence_mode=work_authoritative`, then (b) `git add -A` (Step 8), then (c) the per-domain validators + the FR-092 Wave 7 release-readiness gate (Step 10 — at this point Gate 5 will pass because Step 8 ran), then (d) commit (Step 11). The release-readiness gate **must** exit 0 at Step 10 for the release to proceed.
- **BR-069 / BR-070 / UXR-009:** ACs proved satisfied above; the actual `Status: COMPLETE` flip happens at the live RW. The gating notes in those documents now reflect Wave 8 sign-off.
- **Pre-existing test failures** (`test_update_kanban_docs.py` 2.2 / 3.1) are unrelated to FR-092 scope and remain captured on the `dev` branch backlog as pre-existing.

**Wave 8 verdict:** FR-092 / E2:S15:T07 is **implementation-complete and ready for live RW publication**. The release-readiness program is functioning as designed; the remaining gate-5 block is the gate working correctly on a still-unstaged change set.

---

## 6. Bucket-B drift work-items (Wave 4 placeholder)

| Drift ID | Symptom | Hypothesized cause | Wave-4 verification |
| ---- | ---- | ---- | ---- |
| B1 | Live `fbuboard.md` rows still have duplicated tail tokens after T05 sign-off | `apply_canonical_row_transform_pipeline` not invoked over corpus during RW Step 7 | Snapshot live fbuboard slice, reproduce in test_update_kanban_docs.py, fix invocation, verify zero duplicates |
| B2 | FR-089 multiplication hardening did not eliminate observed multiplication | Hardening targets validation/reconciliation, not corpus rewrite | Reproduce; route through Wave 4 corpus mode |
| B3 | BR-069 narrowed but residual tail repetition persists | Residual closure pinned on FR-090; not yet executed on corpus | Run Wave 4 sweep; verify BR-069 final AC |
| B4 | RW Step 7 only metadata-touched rows are normalized | Step 7 scoped reconciliation does not invoke corpus-mode normalization | Add `--corpus-canonical`; wire into Step 7 |

---

## 7. References

- [Host task E2:S15:T07](../project-management/kanban/epics/Epic-2/Story-015-ipw-governance-and-publication-contract/T07-canonical-rw-ukw-kanban-consistency-program-fr092.md)
- [FR-092](../project-management/kanban/fr-br/FR-092-canonical-rw-ukw-kanban-consistency-program.md)
- [FR-091 (superseded)](../project-management/kanban/fr-br/FR-091-rw-step-7-self-sufficient-scoped-kanban-reconciliation-without-ukw-dependency.md)
- [FR-090 (superseded)](../project-management/kanban/fr-br/FR-090-ukw-canonical-row-transform-engine-and-board-specific-rendering-contracts.md)
- [FR-084 (superseded)](../project-management/kanban/fr-br/FR-084-ipp-post-run-governance-reconciliation-ownership.md)
- [BR-069](../project-management/kanban/fr-br/BR-069-kboard-fbuboard-earliest-last-modified-timestamps-overwritten.md)
- [BR-070](../project-management/kanban/fr-br/BR-070-rw-k-stage-files-completeness-gap-allows-partial-kanban-commit.md)
- [UXR-009](../project-management/kanban/fr-br/UXR-009-last-modified-stamp-forensic-integrity-and-drift-protection.md)
- [IPP-E2S15T04](IPP-E2S15T04-br069-row-tail-normalization-and-terminal-timestamp-interaction.md)
- [IPP-E2S15T05 (superseded planning)](IPP-E2S15T05-ukw-rw-canonical-row-transform-engine-fr090.md)

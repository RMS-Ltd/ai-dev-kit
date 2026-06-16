---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-16T13:17:00Z
expires_at: null
housekeeping_policy: keep
---

# E08:S03:T23 — Planning: Spec, Tests, Implementation Plan (IPW)

**Host Task:** [`T23-greenfield-sync-autofix-ci-hardening-br109.md`](../kanban/epics/epic-08/story-03-automation-scripts/T23-greenfield-sync-autofix-ci-hardening-br109.md) **(E08:S03:T23)**
**Planning for:** [BR-109 — Greenfield dual-tree sync drift on autofix PRs](../kanban/fr-br/BR-109-greenfield-autofix-dual-tree-sync-drift-recurring-ci-failures.md)
- [FR-110 — Lean adopter distribution footprint and vendor bundle](../kanban/fr-br/FR-110-lean-adopter-distribution-footprint-and-vendor-bundle.md)
**Status:** Draft

> **IPW (Implementation Planning Workflow):** This IPP wires the specification + test design + implementation plan needed for the executor (IDW) to close E08:S03:T23.

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements (ascertained)

| ID | Requirement | Source (FR/BR/Task) |
| -- | ----------- | ------------------- |
| RF1 | Autofix-class PRs must auto-reconcile dual-tree drift **or** fail with explicit dual-tree guidance (no ambiguous generic drift-only message). | Task acceptance criteria (AC1) + BR-109 Expected Behavior |
| RF2 | `packages/frameworks/**` remains authoritative; mirror-only edits must be corrected toward source (Mode B). | Task acceptance criteria (AC2) + BR-109 |
| RF3 | Local parity checks for any new/changed GitHub Actions workflow(s) pass under `validate_actions_ci_parity` when `actions_ci_parity` applies. | Task acceptance criteria (AC3) |
| RF4 | BR-109 AC1–AC5 are satisfied and task status is updated on closure (with evidence). | Task acceptance criteria (AC4) + BR-109 BR closure criteria |
| RF5 | Drift detection and reconciliation must use the dual-tree contract enforced by `sync_greenfield_install.py --check` and the manifest. | Task Scope + FR-110 + BR-109 |

### 1.2 Non-functional requirements (ascertained)

| ID | Requirement | Source (FR/BR/Task) |
| -- | ----------- | ------------------- |
| RNF1 | Avoid running remediation sync on every PR; trigger only for autofix-class PR patterns (branch/name heuristics and/or labels). | Task Implementation Notes + BR-109 “Minimum (structural)” |
| RNF2 | Reuse `scripts/sync_greenfield_install.py` and `scripts/greenfield-install-manifest.yaml`; do not duplicate mirror logic. | Task Implementation Notes + BR-109 |
| RNF3 | Reconciliation must be idempotent on repeated workflow runs (no infinite “bot edits bot” loop). | BR-109 impact + workflow safety |
| RNF4 | Failure messaging from `greenfield-install` CI must point maintainers to the correct dual-tree remediation path. | Task Deliverable + BR-109 “CI message hardening” |

### 1.3 Invariants and boundaries

- **Invariants:**
  - Dual-tree contract: after reconciliation, the state must satisfy `python scripts/sync_greenfield_install.py --check` with drift = 0.
  - Source-first: final canonical framework logic is in `packages/frameworks/**`; mirror (`greenfield-install/packages/frameworks/**`) is derived.
- **In scope:**
  - Reconcile autofix PR drift where only one tree is edited (Mode A and Mode B).
  - Provide actionable dual-tree guidance when reconciliation is not applied.
- **Out of scope:**
  - Global CodeQL/Copilot policy changes that would require broader governance/approval.
  - Reconciliation for non-framework or non-dual-tree drift classes.

---

## 2. Specification

### 2.1 Goal

Enable autofix-class PRs to self-heal `greenfield-install` dual-tree drift by detecting which tree was edited, reconciling toward `packages/frameworks/**` SoT (including Mode B mirror-to-source correction), and ensuring CI either succeeds with corrected dual-tree state or fails with explicit remediation guidance.

### 2.2 Specification mapping from ascertained requirements

The specification maps:
- **RF1/RNF4** to changes in `greenfield-install` CI messaging plus a remediation workflow/script that either repairs drift or yields explicit dual-tree guidance.
- **RF2** to a two-phase reconciliation: (1) if Mode B, copy changed framework files from `greenfield-install/packages/frameworks/**` back into `packages/frameworks/**`; (2) regenerate the mirror from the corrected source via the existing sync/manifest model.
- **RF3** to ensuring the new workflow file follows the existing “actions CI parity” conventions and remains local-validateable.
- **RF5/RNF2** to implementation grounded in `scripts/sync_greenfield_install.py` + `scripts/greenfield-install-manifest.yaml` (no duplicate copy logic).
- **RNF1/RNF3** to workflow gating (run only for autofix-class patterns) and idempotent commits (avoid infinite bot loops).

### 2.3 Constraints

- Mode classification must be based on PR diff between base and head commits (or equivalent stable signal), not on heuristics alone.
- Source tree must be corrected before regenerating the mirror (Mode B requires mirror-to-source before source-to-mirror sync).
- Reconciliation must end with drift-check pass: `python scripts/sync_greenfield_install.py --check`.
- Workflow remediation should be conditional: only commit back when reconciliation produces a non-empty diff.

### 2.4 Status transition intent (mandatory for IPW-derived implementation tasks)

- **Current task status:** TODO
- **Transition trigger to IN PROGRESS:** First non-planning implementation change lands (script + workflow additions).
- **Transition trigger to COMPLETE:** Acceptance evidence is recorded (Mode A/B reconciliation dry-run or workflow test notes linked) and `sync_greenfield_install.py --check` passes for reconciled state.
- **Atomic propagation requirement:** Task doc status and kboard row status must update in the same change set/session.
- **Owner:** Implementation execution step (not planning-only IPW creation).

### 2.5 ADR necessity decision (mandatory — IPW Phase 5.0)

Score each trigger **Y** or **N** with one-line evidence. Criteria: [`ipw-adr-necessity-checklist.md`](../architecture/standards-and-adrs/ipw-adr-necessity-checklist.md) (FR-100).

| ID | Trigger | Y/N | Evidence |
| -- | ------- | --- | -------- |
| T1 | Alternatives | N | BR-109 + task ACs prescribe the remediation shape (dual-tree reconciliation + actionable messaging) with reuse of `sync_greenfield_install.py` + manifest, leaving no viable “policy replacement” option. |
| T2 | Reversibility | N | Reconciliation workflow/script changes are revertible in one PR, without schema migrations or API contracts. |
| T3 | Blast radius | N | Confined to greenfield sync/reconcile script, greenfield-install workflow messaging, one additional remediation workflow, and localized tests/docs. |
| T4 | Precedent | N | Establishes a task-scoped bot remediation pattern; no global “how we do CI” contract changes are intended. |
| T5 | Constraint trade-off | N | No explicit trade among security/performance/versioning semantics; primarily correctness + operability. |
| T6 | Governance contract | N | Does not modify RW/IPW/UKW gates or validation logic. |
| T7 | Supersedes | N | No existing ADR/policy is contradicted; this is a direct BR-109 remediation. |

**Outcome:** `EXEMPT`

| ID | Exemption (only if all T = N) | Pass? | Evidence |
| -- | --------------------------- | ----- | -------- |
| E1 | Single locus | Pass | All changes are limited to §4.1 file list (one script/workflow set/tests/docs). |
| E2 | No new options | Pass | Implements existing FR-110/BR-109 contract and the task ACs. |
| E3 | Reversible in one task | Pass | Standard revert of a single changeset; no external migrations. |
| E4 | Spec elsewhere | Pass | The authoritative spec is FR-110 + BR-109 + this IPP mapping to task ACs. |
| E5 | Documented NONE | Pass | §5.3 cites BR-109 and FR-110 as the governing remediation documents; ADR creation is not required by checklist policy. |

---

## 3. Test design

| ID | Behavior / layer | Expected check |
| -- | ---------------- | -------------- |
| T1 | Mode A (source-first) classification + remediation | If PR diff touches `packages/frameworks/**` but not `greenfield-install/packages/frameworks/**`, reconciliation updates the mirror such that `python scripts/sync_greenfield_install.py --check` passes; source files remain unchanged beyond intentional mirror-only output (Covers RF1, RF2, RF5). |
| T2 | Mode B (mirror-only) correction | If PR diff touches `greenfield-install/packages/frameworks/**` but not `packages/frameworks/**`, reconciliation copies the relevant changed framework files back into `packages/frameworks/**`, then regenerates the mirror; `--check` passes and `packages/frameworks/**` reflects the intended change (Covers RF1, RF2, RF5). |
| T3 | Idempotency on repeat runs | Running reconciliation twice produces no further drift and results in no additional net changes beyond expected deterministic outputs (Covers RNF3, RF1, RF5). |
| T4 | CI message hardening for drift failures (non-autofix or failure path) | Simulated drift should yield an error output that includes explicit dual-tree guidance (FR-110 + BR-109 context and remediation workflow reference) rather than only “Run sync script” (Covers RF1, RNF4). |
| T5 | Workflow trigger gating | The remediation workflow must not run for clearly non-autofix PR patterns (branch/title/label heuristics); it must run for at least one “finding-autofix*”/Copilot autofix-like pattern (Covers RNF1, RF1). |

---

## 4. Implementation plan

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| **1** | **[MANDATORY] Transition task `E08:S03:T23` status `TODO → IN PROGRESS`** in task doc. Update `Last updated` date. | Task doc `Status` = `IN PROGRESS` |
| 2 | Extend `scripts/sync_greenfield_install.py` with an autofix reconciliation mode that can (a) classify Mode A vs Mode B using PR base/head diffs, (b) apply mirror-to-source correction for Mode B, and (c) end with the existing sync + drift-check invariant. | Updated sync/reconcile script with stable CLI |
| 3 | Add/extend pytest coverage for Mode A/Mode B reconciliation behaviors (and idempotency), including checks that the drift guard passes post-reconcile. | New/updated pytest module(s) |
| 4 | Add a dedicated remediation workflow for autofix-class PRs (or extend existing workflow with a guarded job) that runs reconciliation and commits back to the PR branch only when reconciliation produces a diff. | `.github/workflows/greenfield-autofix-reconcile.yml` (or equivalent job) |
| 5 | Harden `greenfield-install` CI failure messaging to always include dual-tree guidance (what maintainer should do, and where the remediation workflow is referenced). | Updated `.github/workflows/greenfield-install.yml` and/or improved drift output text |
| 6 | Update maintainer documentation note on “autofix-as-hint workflow”: where autofix PRs should land canonical fixes (and when reconciliation will auto-apply). | `AGENTS.md` and/or BR-109 documentation update |
| 7 | Verification pass: run local reconciliation/dry-run for both modes and record evidence for AC1–AC4 linkage. | Evidence captured (task doc update by executor) |
| **8** | **[MANDATORY] Reconcile task `E08:S03:T23` status** to actual implementation state: `COMPLETE` + `✅ COMPLETE (v{version})` if AC1–AC4 satisfied with evidence; `IN PROGRESS` if ongoing; `BLOCKED` + reason if blocked. Update `Last updated` date. | Task doc status reflects actual state |

### 4.1 Files to create or modify

- `scripts/sync_greenfield_install.py` (modify: add reconcile mode + improved guidance output)
- `scripts/test_sync_greenfield_install.py` (modify or extend)
- `scripts/test_autofix_greenfield_reconcile.py` (create, preferred) or additional tests inside existing module
- `.github/workflows/greenfield-install.yml` (modify: drift failure messaging hardening)
- `.github/workflows/greenfield-autofix-reconcile.yml` (create: gated autofix remediation workflow)
- `AGENTS.md` (modify: P-GREENFIELD-SYNC guidance note for autofix PRs)
- `docs/kanban/fr-br/BR-109-greenfield-autofix-dual-tree-sync-drift-recurring-ci-failures.md` (modify: “Proposed Remediation” section updated to reflect implemented behavior)

### 4.2 Dependency order

1. Implement/extend reconciliation logic in the sync script (so workflow can be thin).
2. Add tests for Mode A and Mode B behaviors.
3. Create remediation workflow that invokes the reconciliation mode and commits when needed.
4. Harden existing CI failure messaging and update maintainer docs after workflow/script are in place.
5. Run verification for both modes and record evidence.

### 4.3 Documentation implementation steps (optional)

1. Update CI failure messaging first, so early validation runs are actionable.
2. Update the maintainer guidance after reconciliation mode is proven in tests (so docs match behavior).

---

## 5. Documentation deliverables

*Populated in IPW Phase 5 — after implementation planning, before housing.*

### 5.1 Existing documents to update

| Doc ID | Path | Scope of change | Tied to (RF/T/impl step) |
| ------ | ---- | --------------- | ------------------------ |
| D-U1 | `.github/workflows/greenfield-install.yml` | Add dual-tree guidance to drift failure output messaging for non-remediated cases. | RF1/RNF4 · Step 5 |
| D-U2 | `AGENTS.md` | Extend `P-GREENFIELD-SYNC` note with “autofix-as-hint” guidance and reference to remediation workflow. | RNF4 · Step 6 |
| D-U3 | `docs/kanban/fr-br/BR-109-greenfield-autofix-dual-tree-sync-drift-recurring-ci-failures.md` | Update remediation section to reflect implemented auto-reconciliation behavior and evidence expectations. | RF4 · Step 6 |

### 5.2 New documents to create

| Doc ID | Proposed path (draft) | Purpose | Tied to (RF/T/impl step) |
| ------ | --------------------- | ------- | ------------------------ |
| D-C1 | `docs/kanban/fr-br/BR-109-greenfield-autofix-reconcile-runbook.md` | Optional runbook for maintainers to debug Mode A/Mode B reconciliation. | RF1/RF2 · Step 6 |

*If the runbook is not needed during implementation, D-C1 is deferred and documented as NONE in §5.3.*

### 5.3 Documentation gaps and explicit non-changes

| Gap / topic | Resolution (CREATE row above, or NONE + reason) |
| ----------- | ----------------------------------------------- |
| How to manually reconcile dual-tree drift locally | NONE — documented by `sync_greenfield_install.py` (`--check`/default sync) and FR-110; the task + BR-109 remain the guidance homes. |
| Workflow trigger heuristics for autofix patterns | NONE — task doc scope + workflow file itself are authoritative; no separate policy doc required. |

---

## 6. Documentation housing

*Populated in IPW Phase 6 — canonical paths and publication intent.*

| Doc ID | Canonical path | Publication status | Publication N/A reason (if N/A) | Lifecycle | Inbound links to add |
| ------ | -------------- | ------------------ | ------------------------------- | --------- | -------------------- |
| D-U1 | `.github/workflows/greenfield-install.yml` | NOT_APPLICABLE | Internal CI configuration (not published user docs) | evergreen | Task doc + IPP references already cover linkage |
| D-U2 | `AGENTS.md` | NOT_APPLICABLE | Internal maintainer guidance (no adopter-public publication required) | evergreen | Task doc + IPP references already cover linkage |
| D-U3 | `docs/kanban/fr-br/BR-109-greenfield-autofix-dual-tree-sync-drift-recurring-ci-failures.md` | PUBLISHED | Internal kanban/FR-closure doc (maintainer-facing) | evergreen | Task doc + IPP references already cover linkage |
| D-C1 | `docs/kanban/fr-br/BR-109-greenfield-autofix-reconcile-runbook.md` | NOT_APPLICABLE | Optional runbook; create only if maintainers need a separate debugging home | timeboxed | Task doc + IPP references to be linked if created |

---

## 7. Success / verification criteria

- [ ] **AC1 (Auto-reconcile or actionable failure):** Autofix-class PR simulation demonstrates Mode A and Mode B reconciliation outcomes with no ambiguous drift-only failure text.
- [ ] **AC2 (Source-first correction):** Mode B results show `packages/frameworks/**` updated (mirror-only edits corrected) and mirror regenerated to parity.
- [ ] **AC3 (Actions CI parity):** New/modified workflow(s) can be validated by `validate_actions_ci_parity` in RW when `actions_ci_parity` applies.
- [ ] **AC4 (BR-109 closure):** Evidence captured for BR-109 AC1–AC5 and task doc status updated on closure.
- [ ] **Greenfield parity:** `python scripts/sync_greenfield_install.py --check` passes after reconciliation for both modes.

---

## References

- Host task: `T23-greenfield-sync-autofix-ci-hardening-br109.md` (`E08:S03:T23`)
- BR-109: [Greenfield dual-tree sync drift on autofix PRs](../kanban/fr-br/BR-109-greenfield-autofix-dual-tree-sync-drift-recurring-ci-failures.md)
- FR-110: [Lean adopter distribution footprint and vendor bundle](../kanban/fr-br/FR-110-lean-adopter-distribution-footprint-and-vendor-bundle.md)
- Sync guard script: `scripts/sync_greenfield_install.py`
- Sync manifest: `scripts/greenfield-install-manifest.yaml`
- Drift CI workflow: `.github/workflows/greenfield-install.yml`


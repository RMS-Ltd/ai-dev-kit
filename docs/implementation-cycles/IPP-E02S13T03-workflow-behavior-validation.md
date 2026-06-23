---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T18:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E02:S13:T03 — Planning: Workflow Behavior Validation (IPW)

**Host Task:** [`T03-validate-workflow-behavior-against-documented-guidance.md`](../kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/T03-validate-workflow-behavior-against-documented-guidance.md) **(E02:S13:T03)**  
**Planning for:** [T01 expectations baseline](../kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/T01-expectations-baseline.md) · [T02 component inventory](../kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/component-inventory-map.md) · [E07:S07:T01 report](../kanban/epics/epic-07/story-07-code-reviews/T01-workflow-machinery-code-review-report.md)  
**Status:** Implemented (2026-06-05)

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements (ascertained)

| ID | Requirement | Source (FR/BR/Task) |
| -- | ----------- | ------------------- |
| RF1 | Validate **RW** behavior: 13-step model, gates 1b/1c/1d, Step 7 four-surface contract, Step 9 validator set, BR-097 build resolution, UKW/CMW context attribution, atomicity/TODO contract | T01 §RW + §Behavioral Expectations; T08; `.cursorrules` |
| RF2 | Validate **UKW** behavior: 9 steps + Step 2.5, flags (`-u/-p/-a/--rp/-c`), bottom-up order, perpetual-task wiring, FR-097 stamp rules | T01 (doc-lagged 8-step); live UKW spec |
| RF3 | Validate **CMW** behavior: deterministic scripts, non-blocking Step 9.5 trigger, correct `check_changelog_size` path | T01 §CMW; component-inventory Gap row |
| RF4 | Validate **Intake** behavior: documented 7-step chain vs `intake_*.py` + nested YAML | T01 §Intake |
| RF5 | Validate **config-driven execution**: `rw-config.yaml` loading consistency across scripts | T01 §Configuration; E07 M1 |
| RF6 | Validate **versioning validators**: schema rules, doc-init BUILD+0, semver conversion, task-touch tags | T01 §Versioning; `validate_version_bump.py`, `semver_converter.py` |
| RF7 | Validate **doc/live parity** post-T08: portable excerpts, `canonical-rw-steps.yaml`, registry vs root `.cursorrules` / `.claude/commands/` | T08 AC; `rw-trigger-dual-source-parity.md` |
| RF8 | Document discrepancies with **severity** (Critical/High/Medium/Low) and evidence paths — feeds T05 | Story AC; E07 §5 taxonomy |
| RF9 | Flesh out T03 task doc (scope, AC, inputs, references) and wire IPP bidirectionally | FR-042, FR-094 |

### 1.2 Non-functional requirements (ascertained)

| ID | Requirement | Source (FR/BR/Task) |
| -- | ----------- | ------------------- |
| RNF1 | **Validation-only** — no package fixes, no README/YAML remediation (deferred to T05/T06) | Task scope |
| RNF2 | Every FAIL/PARTIAL row cites evidence (file path, command output, E07 finding ID) | E07 report pattern |
| RNF3 | Reuse T02 inventory + E07 hypotheses; extend with **executable** checks where possible | T02 companion |
| RNF4 | Companion report is evergreen; task doc holds executive summary + verification table | T02 pattern |

### 1.3 Invariants and boundaries

- **Invariants:** No functional edits under `packages/frameworks/workflow-mgt/`; read-only validator invocations allowed.
- **In scope:** Package behavior vs T01 + live ai-dev-kit execution spec.
- **Out of scope:** Integration alignment (T04); consolidated gap log (T05); remediation implementation; T01 baseline rewrite.

---

## 2. Specification

### 2.1 Goal

Produce an authoritative behavioral validation report proving whether the Workflow Management package **behaves as documented** across RW, UKW, CMW, Intake, config loading, and versioning validators — distinguishing doc-aligned behavior (T08) from runtime/cohesion gaps (E07 H2/H3/M1) — so T05 can consolidate severity-ranked remediation without re-discovering findings.

### 2.2 Specification mapping from ascertained requirements

Seven validation domains in companion file: (1) RW, (2) UKW, (3) CMW, (4) Intake, (5) config/versioning, (6) doc/live parity, (7) E07 crosswalk. Each row: expected behavior (T01), observed behavior (evidence), status PASS/PARTIAL/FAIL, severity.

### 2.3 Constraints

- Housing: detailed matrix in `workflow-behavior-validation-report.md`; executive summary in T03 task doc.
- BR-097: post-ship verification prescribes `RW E02:S13:T03 --art` only.

### 2.4 Status transition intent (mandatory for IPW-derived implementation tasks)

- **Current task status:** TODO → IN PROGRESS on Step 1.
- **Transition trigger to COMPLETE:** All AC satisfied; V1–V10 PASS; companion report published; forensic marker via RW.
- **Atomic propagation requirement:** Task doc status and kboard row update in same RW Step 7 session.
- **Owner:** Implementation execution step (not planning-only IPW creation).

### 2.5 ADR necessity decision (mandatory — IPW Phase 5.0)

| ID | Trigger | Y/N | Evidence |
| -- | ------- | --- | -------- |
| T1 | Alternatives | N | Single approach: companion report + task summary |
| T2 | Reversibility | N | Doc-only; one-PR revert |
| T3 | Blast radius | N | Confined to kanban/docs |
| T4 | Precedent | N | Task-scoped validation; T01 + AC govern |
| T5 | Constraint trade-off | N | No architectural trade-off |
| T6 | Governance contract | N | Does not alter RW/IPW/UKW gates |
| T7 | Supersedes | N | Extends T01/T02; no ADR contradiction |

**Outcome:** `EXEMPT`

| ID | Exemption (only if all T = N) | Pass? | Evidence |
| -- | --------------------------- | ----- | -------- |
| E1 | Single locus | Y | Files in §4.1 only |
| E2 | No new options | Y | E04:S16:T03 + E03:S04:T03 pattern |
| E3 | Reversible in one task | Y | Doc revert |
| E4 | Spec elsewhere | Y | T01 §Behavioral Expectations + E07 §7 |
| E5 | Documented NONE | Y | §5.3 cites T01 + E07 |

---

## 3. Test design

| ID | Behavior / layer | Expected check |
| -- | ---------------- | -------------- |
| V1 | RW step canon | `validate_canonical_steps.py` — exit 0 |
| V2 | Dual-source parity | `rw-trigger-dual-source-parity.md` checklist scored Y/N |
| V3 | Validator smoke | `validate_branch_context.py --strict`, `validate_version_bump.py --art --requested E02:S13:T03`, `resolve_rw_build.py` |
| V4 | CMW path | `scripts/changelog/check_changelog_size.py` runs; contrast README `validation/` path |
| V5 | UKW step model | Registry + UKW guide step count vs T01 8-step claim |
| V6 | pytest subset | `run_isolated_pytest.sh` pass count; CI workflow presence |
| V7 | Config loader fragmentation | `load_rw_config` implementation count and independence |
| V8 | Flat YAML hazard | Non-deprecated flat workflow YAML count |
| V9 | Scope guard | No package functional code changes |
| V10 | Wiring | Task ↔ IPP ↔ companion links resolve |

---

## 4. Implementation plan

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| **1** | **[MANDATORY] Transition task `E02:S13:T03` status `TODO → IN PROGRESS`** in task doc. Update `Last updated` date. | Task doc `Status` = `IN PROGRESS` |
| 2 | Create `workflow-behavior-validation-report.md` with validation domains + evidence | Companion artefact |
| 3 | Run V1–V6 automated checks; capture command output | Report §Evidence |
| 4 | Score behavioral dimensions PASS/PARTIAL/FAIL with severity | Report §Validation Matrix |
| 5 | Cross-walk E07 H1–H3, M1–M6 | Report §E07 Crosswalk |
| 6 | Publish compliance summary + discrepancy table | Report §Summary |
| 7 | Flesh out T03: Scope, AC, Input, Deliverable, verification table | Task doc |
| 8 | Update Story 13 checklist + story AC | Story doc |
| 9 | Optional pointer in `component-inventory-map.md` | Cross-link |
| 10 | Run V7–V10 verification checklist | Task doc verification table |
| 11 | **`RW E02:S13:T03 --art`** | Release v0.2.13.3+1 |
| **N** | **[MANDATORY] Reconcile task `E02:S13:T03` status** to `COMPLETE` + `✅ COMPLETE (v{version})` if all ACs satisfied; update kboard | Task + story + board |

**RW verification / FBU wave rule (BR-097):** Post-ship verification prescribes **`RW E02:S13:T03 --art`** only.

### 4.1 Files to create or modify

- CREATE: `docs/implementation-cycles/IPP-E02S13T03-workflow-behavior-validation.md`
- CREATE: `story-13/.../workflow-behavior-validation-report.md`
- UPDATE: `T03-validate-workflow-behavior-against-documented-guidance.md`
- UPDATE: `story-13-workflow-management-package-implementation-review.md`
- UPDATE (optional): `component-inventory-map.md`
- UPDATE (RW Step 7): `kboard.md`

### 4.2 Dependency order

1. Run automated checks → populate report
2. Task doc + story → IPP wire → RW

---

## 5. Documentation deliverables

### 5.1 Existing documents to update

| Doc ID | Path | Scope of change | Tied to (RF/T/impl step) |
| ------ | ---- | --------------- | ------------------------ |
| D-U1 | `T03-validate-workflow-behavior-against-documented-guidance.md` | Scope, AC, summary, links | RF9, Step 7 |
| D-U2 | `story-13-workflow-management-package-implementation-review.md` | Checklist + story AC | RF8, Step 8 |
| D-U3 | `kboard.md` | T03 status/version on release | Step 11 |
| D-U4 | `component-inventory-map.md` | Behavior report pointer | Step 9 |

### 5.2 New documents to create

| Doc ID | Proposed path (draft) | Purpose | Tied to (RF/T/impl step) |
| ------ | --------------------- | ------- | ------------------------ |
| D-C1 | `docs/implementation-cycles/IPP-E02S13T03-workflow-behavior-validation.md` | IPP | RF9 |
| D-C2 | `story-13/.../workflow-behavior-validation-report.md` | Detailed validation matrix | RF1–RF8 |

### 5.3 Documentation gaps and explicit non-changes

| Gap / topic | Resolution (CREATE row above, or NONE + reason) |
| ----------- | ----------------------------------------------- |
| T01 UKW 8-step doc lag | NONE — noted in report; full T01 refresh deferred T05 |
| README `check_changelog_size` path | NONE — documented as M2 discrepancy; fix deferred T05 |
| Flat YAML deprecation | NONE — FR-050 / T05 remediation |
| ADR for validation housing | NONE — EXEMPT per §2.5; governed by T01 §Behavioral Expectations |

---

## 6. Documentation housing

| Doc ID | Canonical path | Publication status | Publication N/A reason (if N/A) | Lifecycle | Inbound links to add |
| ------ | -------------- | ------------------ | ------------------------------- | --------- | -------------------- |
| D-C1 | `docs/implementation-cycles/IPP-E02S13T03-workflow-behavior-validation.md` | NOT_APPLICABLE | Planning artefact | evergreen | T03 Input/References |
| D-C2 | `story-13/.../workflow-behavior-validation-report.md` | NOT_APPLICABLE | Kanban companion | evergreen | T03 Deliverable; T05 Input |
| D-U1 | T03 task doc | NOT_APPLICABLE | Kanban task | evergreen | IPP host link |
| D-U2 | Story 13 doc | NOT_APPLICABLE | Kanban story | evergreen | T03 checklist |

---

## 7. Success / verification criteria

- [x] Companion report with validation matrix + evidence for all domains
- [x] Task doc AC checkboxes + V1–V10 verification table
- [x] E07 crosswalk incorporated
- [x] No package functional code changed
- [x] Bidirectional T03 ↔ IPP ↔ companion links
- [x] Story AC “Behavioral validation notes captured” on RW completion
- [x] Forensic marker via `RW E02:S13:T03 --art`

---

## References

- [T03 task doc](../kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/T03-validate-workflow-behavior-against-documented-guidance.md)
- [T01 expectations baseline](../kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/T01-expectations-baseline.md)
- [T02 component inventory](../kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/component-inventory-map.md)
- [T08 sync task](../kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/T08-sync-packaged-workflows-with-live-repo-implementation.md)
- [E07:S07:T01 report](../kanban/epics/epic-07/story-07-code-reviews/T01-workflow-machinery-code-review-report.md)
- [E04:S16:T03 pattern](../kanban/epics/epic-04/story-16-kanban-package-implementation-review/T03-validate-kanban-behavior.md)
- [FR-042](../kanban/fbu/FR-042-implementation-planning-workflow-ipw.md)
- [rw-trigger-dual-source-parity.md](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/docs/rw-trigger-dual-source-parity.md)

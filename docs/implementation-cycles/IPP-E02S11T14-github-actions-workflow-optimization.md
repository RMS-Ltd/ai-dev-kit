---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T20:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E02:S11:T14 — Planning: Spec, Tests, Implementation Plan (IPW)

**Host Task:** [`T14-github-actions-workflow-optimization-br052.md`](../project-management/kanban/epics/epic-02/story-11-intake-workflow-automation/T14-github-actions-workflow-optimization-br052.md) **(E02:S11:T14)**  
**Planning for:** [BR-052](../project-management/kanban/fr-br/BR-052-github-actions-workflow-optimization.md)  
**Status:** Approved

> **IPW (Implementation Planning Workflow):** Consolidated IPP per FR-042 / FR-083. Bidirectional wiring to host task **Input** and **References** is mandatory before implementation.

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements (ascertained)

| ID | Requirement | Source (FR/BR/Task) |
| -- | ----------- | ------------------- |
| RF1 | Deliver measurable GHA improvement **or** documented deferral with rationale | T14 AC1 |
| RF2 | Wire **BR-052** to task E02:S11:T14 with bidirectional links | T14 AC2 |
| RF3 | Apply BR-052 trigger-scope optimizations to intake workflow YAML (canonical disabled source) | BR-052 Solution |
| RF4 | Reduce unnecessary CI runs on active workflows via path filters where absent | BR-052; RNF1 |
| RF5 | Add dependency caching (pip) on Python workflows lacking cache | BR-052 metrics; RNF2 |
| RF6 | **Defer** re-enabling `fr-br-intake.yml` while BR-053 push-trigger bug persists | BR-053; T12 workaround |

### 1.2 Non-functional requirements (ascertained)

| ID | Requirement | Source (FR/BR/Task) |
| -- | ----------- | ------------------- |
| RNF1 | Preserve existing workflow display names and branch-protection references | FR-069 pattern |
| RNF2 | Pip cache via `actions/setup-python` `cache: pip` + `cache-dependency-path` | GHA best practice |
| RNF3 | Executable pytest contract for workflow YAML structure — not manual-only | Project IC pattern |
| RNF4 | No PAT in source; permissions unchanged on existing workflows | FR-070 NF01 |

### 1.3 Invariants and boundaries

- **Invariants:** Disabled intake workflows stay non-`.yml` extensions until BR-053 evidence-based re-enable; docusaurus-build.yml topology unchanged (E05:S09:T14).
- **In scope:** `.github/workflows/tests.yml`, `workflow-scripts-pytest.yml`, `framework-release.yml`; canonical `fr-br-intake.yml.DISABLED` sync; BR-052 / task doc / pytest.
- **Out of scope:** Re-enabling intake automation on GitHub; fixing BR-053 platform bug; docusaurus topology changes; framework package logic changes.

---

## 2. Specification

### 2.1 Goal

Reduce GitHub Actions waste (runtime, spurious triggers, cold dependency installs) across **active** workflows while preserving BR-052 intake optimizations in the canonical disabled YAML for future re-enable. Document deferral of intake re-activation with BR-053 rationale so AC1 is satisfied by measurable active-workflow improvements plus explicit deferral evidence.

### 2.2 Specification mapping from ascertained requirements

| Requirement | Delivery |
| ----------- | -------- |
| RF1 | Path filters on `tests.yml`; pip cache on three Python workflows; deferral note in BR-052 + task doc |
| RF2 | Task doc ↔ BR-052 ↔ IPP bidirectional links; RW Step 7 kboard row |
| RF3 | Merge BR-052 optimized triggers into `fr-br-intake.yml.DISABLED` (single canonical source) |
| RF4 | `tests.yml` `paths` filters on push/PR |
| RF5 | `cache: pip` on `tests.yml`, `workflow-scripts-pytest.yml`, `framework-release.yml` |
| RF6 | No `.yml` intake file restored; reference BR-053 in deferral |

### 2.3 Constraints

- Intake workflow file extension must remain `.DISABLED` (not `.yml`) per T12/BR-053 workaround.
- `tests.yml` path filters must include `tests/**`, `src/**`, `packages/**`, `pyproject.toml`, workflow self-path.
- Pytest validates parsed YAML only — no live Actions invocation required.

### 2.4 Status transition intent (mandatory for IPW-derived implementation tasks)

- **Current task status:** TODO
- **Transition trigger to IN PROGRESS:** First non-planning implementation change lands (Step 1 of §4).
- **Transition trigger to COMPLETE:** All T14 ACs satisfied; forensic marker `✅ COMPLETE (v{version})` on RW release.
- **Atomic propagation requirement:** Task doc status and `kboard.md` row update in same RW Step 7 change set.
- **Owner:** Implementation execution.

### 2.5 ADR necessity decision (mandatory — IPW Phase 5.0)

Criteria: [`ipw-adr-necessity-checklist.md`](../architecture/standards-and-adrs/ipw-adr-necessity-checklist.md) (FR-100).

| ID | Trigger | Y/N | Evidence |
| -- | ------- | --- | -------- |
| T1 | Alternatives | N | Single standard approach: path filters + pip cache per GHA docs |
| T2 | Reversibility | N | Revert YAML in one PR |
| T3 | Blast radius | N | Confined to `.github/workflows/` and tests |
| T4 | Precedent | N | Routine CI hygiene; no new canonical pattern |
| T5 | Constraint trade-off | N | No security/performance trade-off beyond standard caching |
| T6 | Governance contract | N | Does not alter RW, IPW, UKW, or validator gates |
| T7 | Supersedes | N | Complements BR-052/BR-053; does not contradict ADRs |

**Outcome:** `EXEMPT`

| ID | Exemption (only if all T = N) | Pass? | Evidence |
| -- | --------------------------- | ----- | -------- |
| E1 | Single locus | **Y** | `.github/workflows/*`, `tests/test_gha_workflow_br052.py`, kanban docs |
| E2 | No new options | **Y** | Implements BR-052 + GHA caching/path-filter conventions |
| E3 | Reversible in one task | **Y** | YAML revert without migration |
| E4 | Spec elsewhere | **Y** | BR-052 + this IPP §2 |
| E5 | Documented NONE | **Y** | §5.3 cites BR-052 and BR-053 |

---

## 3. Test design

| ID | Behavior / layer | Expected check | Covers |
| -- | ---------------- | -------------- | ------ |
| T1 | `tests.yml` path filters | Parsed YAML: `on.push.paths` and `on.pull_request.paths` include test-relevant paths | RF4 |
| T2 | Pip cache — tests | `setup-python` step has `cache: pip` | RF5 |
| T3 | Pip cache — workflow-scripts | `setup-python` step has `cache: pip` | RF5 |
| T4 | Pip cache — framework-release | `setup-python` step has `cache: pip` | RF5 |
| T5 | Intake deferral | No active `fr-br-intake.yml`; `.DISABLED` has BR-052 trigger set | RF3; RF6 |
| T6 | Intake trigger scope | Disabled canonical: `opened, labeled, unlabeled`; excludes `edited`; `workflow_dispatch` | RF3 |
| T7 | Docusaurus unchanged | `docusaurus-build.yml` retains npm cache + path filters | Invariant |

---

## 4. Implementation plan

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| **1** | **[MANDATORY] Transition task `E02:S11:T14` status `TODO → IN PROGRESS`** in task doc. Update `Last updated` date. | Task doc `Status` = `IN PROGRESS` |
| 2 | Sync BR-052 optimized intake YAML into `fr-br-intake.yml.DISABLED`; remove redundant `DISABLED-AGAIN` duplicate | Single canonical disabled intake source |
| 3 | Add path filters + pip cache to `tests.yml` | Fewer doc-only CI runs; faster Python setup |
| 4 | Add pip cache to `workflow-scripts-pytest.yml` and `framework-release.yml` | Faster dependency install |
| 5 | Add `tests/test_gha_workflow_br052.py` pytest contract | Executable verification |
| 6 | Update BR-052 implementing-task link and deferral note; wire IPP on task doc | RF2 |
| 7 | Run pytest locally; fix any failures | Green test gate |
| 8 | **`RW E02:S11:T14 --art`** — version, changelog, kanban Step 7, commit, tag, push | Release `v0.2.11.14+1` |
| **N** | **[MANDATORY] Reconcile task `E02:S11:T14` status** to `COMPLETE` + `✅ COMPLETE (v{version})` if all ACs satisfied. Update `Last updated`. | Task doc status reflects actual state |

### 4.1 Files to create or modify

- `.github/workflows/tests.yml` — UPDATE
- `.github/workflows/workflow-scripts-pytest.yml` — UPDATE
- `.github/workflows/framework-release.yml` — UPDATE
- `.github/workflows/fr-br-intake.yml.DISABLED` — UPDATE (BR-052 canonical)
- `.github/workflows/fr-br-intake.yml.DISABLED-AGAIN` — DELETE (dedupe)
- `tests/test_gha_workflow_br052.py` — CREATE
- `docs/project-management/kanban/epics/epic-02/story-11-intake-workflow-automation/T14-github-actions-workflow-optimization-br052.md` — UPDATE
- `docs/project-management/kanban/fr-br/BR-052-github-actions-workflow-optimization.md` — UPDATE
- Kanban surfaces via RW Step 7

### 4.2 Dependency order

1. IPP + task wiring
2. Workflow YAML changes
3. Pytest
4. RW

---

## 5. Documentation deliverables

### 5.1 Existing documents to update

| Doc ID | Path | Scope of change | Tied to (RF/T/impl step) |
| ------ | ---- | --------------- | ------------------------ |
| D-U1 | Task doc T14 | Status, IPP link, deferral summary, AC evidence | RF1; RF2; Step 1/N |
| D-U2 | BR-052 | Implementing task link; deferral + active-workflow improvements | RF2; RF6 |
| D-U3 | Story 11 checklist | T14 status marker | Step N |
| D-U4 | `kboard.md` | T14 row status + version stamp | RW Step 7 |

### 5.2 New documents to create

| Doc ID | Proposed path | Purpose | Tied to (RF/T/impl step) |
| ------ | ------------- | ------- | ------------------------ |
| D-C1 | `docs/implementation-cycles/IPP-E02S11T14-github-actions-workflow-optimization.md` | This IPP | IPW Phase 7 |
| D-C2 | `tests/test_gha_workflow_br052.py` | Executable workflow contract | T1–T7 |

### 5.3 Documentation gaps and explicit non-changes

| Gap / topic | Resolution (CREATE row above, or NONE + reason) |
| ----------- | ----------------------------------------------- |
| Intake re-enable runbook | NONE — covered by BR-053 + T12 task doc |
| Docusaurus CI topology | NONE — E05:S09:T14 / ADR-017 already governs |
| New ADR for pip cache | NONE — EXEMPT per §2.5; GHA standard practice |

---

## 6. Documentation housing

| Doc ID | Canonical path | Publication status | Publication N/A reason (if N/A) | Lifecycle | Inbound links to add |
| ------ | -------------- | ------------------ | ------------------------------- | --------- | -------------------- |
| D-C1 | `docs/implementation-cycles/IPP-E02S11T14-github-actions-workflow-optimization.md` | NOT_APPLICABLE | Internal planning artifact | evergreen | Task doc Input + References |
| D-C2 | `tests/test_gha_workflow_br052.py` | NOT_APPLICABLE | Test source, not user doc | evergreen | — |
| D-U1 | Task doc T14 | NOT_APPLICABLE | Kanban task doc | evergreen | IPP link |
| D-U2 | BR-052 | NOT_APPLICABLE | Kanban FBU doc | evergreen | Task link |

---

## 7. Success / verification criteria

- [ ] AC1: Path filters + pip cache on active workflows; intake deferral documented with BR-053 rationale
- [ ] AC2: BR-052 ↔ E02:S11:T14 bidirectional links on task doc and BR doc
- [ ] `pytest tests/test_gha_workflow_br052.py` passes
- [ ] RW `E02:S11:T14 --art` completes with tag push
- [ ] All §5 UPDATE items implemented
- [ ] Task status `COMPLETE` with forensic marker after RW

---

## References

- [BR-052](../project-management/kanban/fr-br/BR-052-github-actions-workflow-optimization.md)
- [BR-053](../project-management/kanban/fr-br/BR-053-github-actions-workflow-push-trigger-bug.md)
- [T14 task doc](../project-management/kanban/epics/epic-02/story-11-intake-workflow-automation/T14-github-actions-workflow-optimization-br052.md)
- [E02:S11:T12 task doc](../project-management/kanban/epics/epic-02/story-11-intake-workflow-automation/T12-github-actions-workflow-bug-resolution.md)
- [ipw-adr-necessity-checklist.md](../architecture/standards-and-adrs/ipw-adr-necessity-checklist.md)

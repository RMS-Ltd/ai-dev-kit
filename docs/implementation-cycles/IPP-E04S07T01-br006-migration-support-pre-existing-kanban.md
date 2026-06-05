---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E04:S07:T01 — Planning: BR-006 detection/analysis verification closure (IPW)

**Host Task:** [`T01-br006-detection-analysis-verification-closure.md`](../project-management/kanban/epics/epic-04/story-07-migration-support-and-installation-modes/T01-br006-detection-analysis-verification-closure.md) **(E04:S07:T01)**  
**Planning for:** [BR-006](../project-management/kanban/fr-br/BR-006-missing-migration-support-pre-existing-kanban.md)  
**Status:** Approved (planning complete — implementation authorized via parent IPW+RW request)

> **IPW closure wave:** Story-007 marks T01 COMPLETE (`v0.4.7.1+1`) but `kboard` still lists **E04:S07:T01** as TODO. This IPP plans verification of BR-006 criteria 1–4, minimal defect remediation, four-surface kanban reconciliation, and **`RW E04:S07:T01 --art`**.

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements (ascertained)

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RF1 | Discrete task doc with `**Task ID:** E04:S07:T01` bidirectionally wired to this IPP | FR-042, validate_rw_task_complete |
| RF2 | Verify BR-006 criteria 1–4: `detect_existing_structure.py` and `analyze_structure.py` exist and run on ai-dev-kit kanban tree | BR-006, story-007 T01 |
| RF3 | Reconcile four surfaces: task doc, BR-006, `kboard`, `kanban-completed` — story COMPLETE vs board TODO drift | FR-077, FR-092 |
| RF4 | BR-006 criteria 1–4 marked verified; note criteria 5–12 satisfied by T02/T03 (`v0.4.7.2+1`, `v0.4.7.3+1`) | BR-006, story-007 |
| RF5 | IPP filed; publication wiring on task doc per FR-042 | FR-042 |

### 1.2 Non-functional requirements (ascertained)

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RNF1 | Changelog language: "Change implemented" / verification until user confirms | RW policy |
| RNF2 | Minimal code change scope — fix only blocking verification defect | Implementation gate |

### 1.3 Invariants and boundaries

- **Invariants:** Original T01 delivery at `v0.4.7.1+1` remains forensic record; closure RW adds BUILD on same E:S:T via `--art`.
- **In scope:** Verification, `analyze_structure.py` NameError fix, kanban/BR reconciliation, discrete task doc.
- **Out of scope:** Re-implementing T02/T03 migration/installer; changing installation-mode semantics; new ADR.

---

## 2. Specification

### 2.1 Goal

Close forensic drift for **E04:S07:T01** by proving BR-006 detection/analysis criteria (1–4) are satisfied, fixing the `analyze_structure.py` runtime defect found during IPW verification, reconciling kanban surfaces, and releasing via **`RW E04:S07:T01 --art`**.

### 2.2 Specification mapping

| Requirement | Specification |
| ----------- | ------------- |
| RF1 | Host task at `story-07-.../T01-br006-detection-analysis-verification-closure.md` |
| RF2 | §7 audit matrix T1–T4 with command output evidence |
| RF3 | Remove E04:S07:T01 from `kboard` C-band; confirm `kanban-completed` entry; update BR-006 |
| RF4 | BR-006 criteria 1–4 checked; Fix Verification Status → verified for criteria 1–4 |
| RF5 | This IPP + task doc Input/References wiring |

### 2.3 Constraints

- Closure RW: **`RW E04:S07:T01 --art`** only (BUILD +1 on adopted anchor).
- Do not prescribe `--doc-policy-zero`.

### 2.4 Status transition intent

- **Current task status:** COMPLETE in story checklist; TODO on `kboard` (drift).
- **Step 1 (implementation):** Confirm discrete task doc **IN PROGRESS** on first non-planning edit.
- **COMPLETE:** After verification PASS + four-surface sync + **`RW E04:S07:T01 --art`** with `✅ COMPLETE (v{version})`.
- **Atomic propagation:** Task doc, BR-006, `kboard`, `kanban-completed` in RW Step 7.
- **Owner:** Closure wave implementation.

### 2.5 ADR necessity decision (IPW Phase 5.0)

Criteria: [`ipw-adr-necessity-checklist.md`](../architecture/standards-and-adrs/ipw-adr-necessity-checklist.md) (FR-100).

| ID | Trigger | Y/N | Evidence |
| -- | ------- | --- | -------- |
| T1 | Alternatives | N | Verification of shipped utilities only |
| T2 | Reversibility | N | Doc + one-line script fix revertible |
| T3 | Blast radius | N | Kanban package script; no adopter contract change |
| T4 | Precedent | N | Hygiene closure, not new architecture |
| T5 | Constraint trade-off | N | — |
| T6 | Governance contract | N | No RW/IPW gate changes |
| T7 | Supersedes | N | — |

**Outcome:** **EXEMPT** — all T = N.

| ID | Exemption | Pass? | Evidence |
| -- | --------- | ----- | -------- |
| E1 | Single locus | Y | IPP §4.1 file list |
| E2 | No new options | Y | Implements BR-006 closure only |
| E3 | Reversible in one task | Y | — |
| E4 | Spec elsewhere | Y | BR-006 + story-007 |
| E5 | Documented NONE | Y | §5.3 cites this IPP §2.5 |

---

## 3. Test design

| ID | Behavior / layer | Expected check | IPW run (2026-06-05) |
| -- | ---------------- | -------------- | -------------------- |
| T1 | Criterion 1 — detection | `detect_existing_structure.py` scans epics/stories/tasks; exit 0; report `status: detected` | **PASS** — 12 epics, 92 stories, 922 tasks |
| T2 | Criterion 2 — detection utility | Script exists at `packages/frameworks/kanban/scripts/detect_existing_structure.py`; README documents usage | **PASS** |
| T3 | Criterion 3 — analysis | `analyze_structure.py` consumes detection report; maps E/S/T; generates migration plan | **FAIL** → **FIX** — `NameError: high_similarity_matches` in `_generate_migration_plan` |
| T4 | Criterion 4 — analysis utility | Script exists; README documents workflow | **PASS** (post-fix re-run required) |
| T5 | Scripts README | detect → analyze workflow documented | **PASS** |

**`--skip-tests`:** Not used — verification is script execution, not pytest.

---

## 4. Implementation plan

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| **1** | **[MANDATORY]** Transition discrete task **TODO → IN PROGRESS**; update `Last updated` | Task doc |
| 2 | Fix `analyze_structure.py` `high_similarity_matches` NameError (define filter `similarity_score >= 70`) | Script fix |
| 3 | Re-run T1 + T3–T4; capture outputs in task doc §7 | Verification evidence |
| 4 | **Kanban reconciliation:** Remove E04:S07:T01 from `kboard` C-band; confirm/update `kanban-completed` line; story checklist links discrete T01 | Boards synced |
| 5 | **BR-006:** Check criteria 1–4; update Fix Verification Status; link discrete task + IPP | BR doc |
| 6 | **`RW E04:S07:T01 --art`** | Release |
| **N** | **[MANDATORY]** Reconcile task → **COMPLETE** + `✅ COMPLETE (v{version})`; kboard absent completed row | Forensic closure |

### 4.1 Files to create or modify

**CREATE (IPW):**

- `docs/implementation-cycles/IPP-E04S07T01-br006-migration-support-pre-existing-kanban.md`
- `docs/project-management/kanban/epics/epic-04/story-07-migration-support-and-installation-modes/T01-br006-detection-analysis-verification-closure.md`

**UPDATE (implementation):**

- `packages/frameworks/kanban/scripts/analyze_structure.py`
- `docs/project-management/kanban/fr-br/BR-006-missing-migration-support-pre-existing-kanban.md`
- `docs/project-management/kanban/epics/epic-04/story-07-migration-support-and-installation-modes.md`
- `docs/project-management/kanban/kboard.md`
- `docs/project-management/kanban/kanban-completed.md` (if entry needs discrete-task link)

### 4.2 Dependency order

1. IPP + task doc → Step 1 → fix + verify → kanban + BR → RW → status reconciliation.

---

## 5. Documentation deliverables

### 5.1 Existing documents to update

| Doc ID | Path | Scope | Tied to |
| ------ | ---- | ----- | ------- |
| D-U1 | `BR-006-...md` | Criteria 1–4 verified; implementing task link | RF4, Step 5 |
| D-U2 | `story-07-...md` | Checklist → discrete T01 link | RF1 |
| D-U3 | `kboard.md`, `kanban-completed.md` | Reconciliation | RF3 |
| D-U4 | `analyze_structure.py` | NameError fix | T3 |

### 5.2 New documents to create

| Doc ID | Path | Purpose |
| ------ | ---- | ------- |
| D-C1 | `IPP-E04S07T01-br006-migration-support-pre-existing-kanban.md` | This IPP |
| D-C2 | `T01-br006-detection-analysis-verification-closure.md` | Host task |

### 5.3 Documentation gaps and explicit non-changes

| Gap / topic | Resolution |
| ----------- | ---------- |
| BR-006 criteria 5–12 | **NONE** in T01 closure — satisfied by T02/T03 per story-007 |
| New ADR | **NONE** — EXEMPT per §2.5 |
| Docusaurus publication | **NONE** — IPP NOT_APPLICABLE per BR-066 |

---

## 6. Documentation housing

| Doc ID | Canonical path | Publication status | Lifecycle | Inbound links |
| ------ | -------------- | ------------------ | --------- | ------------- |
| D-C1 | `docs/implementation-cycles/IPP-E04S07T01-br006-migration-support-pre-existing-kanban.md` | NOT_APPLICABLE | evergreen | T01 Input, References |
| D-C2 | `.../T01-br006-detection-analysis-verification-closure.md` | NOT_APPLICABLE | evergreen | BR-006, story-007 |
| D-U1–D-U4 | (see §5.1) | NOT_APPLICABLE | evergreen | Closure RW |

---

## 7. Success / verification criteria

### 7.1 BR-006 criteria 1–4 audit matrix

| Ref | Requirement | Result | Evidence |
| --- | ----------- | ------ | -------- |
| Criterion 1 | Framework detects existing Kanban structures | **PASS** | T1: detection report `status: detected` |
| Criterion 2 | `detect_existing_structure.py` created | **PASS** | Script + README |
| Criterion 3 | Framework analyzes existing structure | **PASS** (post-fix) | T3 re-run after Step 2 |
| Criterion 4 | `analyze_structure.py` created | **PASS** | Script + README |

- [ ] All §5 UPDATE/CREATE items implemented
- [ ] `validate_ipw_publication_wiring.py --requested E04:S07:T01` PASS (if run)
- [ ] Four-surface RW Step 7 report emitted

---

## References

- [BR-006](../project-management/kanban/fr-br/BR-006-missing-migration-support-pre-existing-kanban.md)
- [story-07](../project-management/kanban/epics/epic-04/story-07-migration-support-and-installation-modes.md)
- [FR-042](../project-management/kanban/fr-br/FR-042-implementation-planning-workflow-ipw.md)
- [FR-077](../project-management/kanban/fr-br/FR-077-ipw-built-task-status-transition-and-kboard-sync.md)
- `packages/frameworks/kanban/scripts/detect_existing_structure.py`
- `packages/frameworks/kanban/scripts/analyze_structure.py`
- `packages/frameworks/kanban/scripts/README.md`

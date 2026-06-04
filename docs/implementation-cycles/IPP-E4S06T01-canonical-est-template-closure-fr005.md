---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-29T22:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E4:S06:T01 — Planning: FR-005 canonical EST template system closure (IPW)

**Host Task:** [`T01-canonical-est-template-closure-fr005.md`](../project-management/kanban/epics/epic-04/story-06-comprehensive-canonical-est-template-system/T01-canonical-est-template-closure-fr005.md) **(E4:S06:T01)**  
**Planning for:** [FR-005](../project-management/kanban/fr-br/FR-005-systematic-canonical-epics-stories-tasks-templates.md)  
**Status:** Approved (planning complete — implementation blocked until explicit authorize)

> **IPW:** Closure and hygiene for FR-005. story-006 (T00–T10) already delivered the template corpus; this IPP plans audit, kanban/FR reconciliation, and RW — not re-generation of templates.

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements (ascertained)

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RF1 | Discrete task doc exists and is bidirectionally wired to FR-005 and story-006 | IPW plan, FR-042 |
| RF2 | FR-005 closure audit: map FR-005-R1–R6 and FR acceptance criteria to evidence or explicit deferral | FR-005, story-006 |
| RF3 | Reconcile `kboard`, `fbuboard`, `kanban-completed`, story checklist — single truth for T01 + FR-005 | Kanban drift |
| RF4 | FR-005 status → **IMPLEMENTED** when audit satisfied or deferrals documented | FR-005 |
| RF5 | IPP filed; `validate_ipw_publication_wiring.py --requested E4:S06:T01` passes | FR-042 |
| RF6 | No re-generation of 378 task templates unless audit finds material defect | Story T04, IPW scope |

### 1.2 Non-functional requirements (ascertained)

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RNF1 | Run `generate_task_templates.py --validate` as regression guard | E4:S15 generator |
| RNF2 | Changelog: “Change implemented” / audit findings until user verifies | RW policy |

### 1.3 Invariants and boundaries

- **Invariants:** story-006 embedded tasks T01–T10 remain the forensic record of delivery; closure does not rewrite history.
- **In scope:** Audit matrix, kanban/FR sync, discrete task doc, optional follow-up note for FR-005-R5.
- **Out of scope:** New template authoring waves; installer rewrites; changing ai-dev-kit live epic numbering vs adopter template numbering (documented in story-006).

---

## 2. Specification

### 2.1 Goal

Close [FR-005](../project-management/kanban/fr-br/FR-005-systematic-canonical-epics-stories-tasks-templates.md) by proving story-006 delivery satisfies FR intent, eliminating board/FR drift (T01 TODO on `kboard` while story marks T01 COMPLETE), and leaving a discrete task + audit trail for maintainers.

### 2.2 Specification mapping

| Requirement | Specification |
|-------------|---------------|
| RF1 | Host task at `story-006/.../T01-canonical-est-template-closure-fr005.md` with `**Task ID:** E4:S06:T01` |
| RF2 | §7 audit matrix (PASS/DEFER) populated from T1–T6 runs at IPW time |
| RF3 | Implementation Step 4 updates boards; remove T01 from `kboard` Could; FR-005 off `fbuboard` active; fix `kanban-completed` version line |
| RF4 | FR-005 criteria checked; status IMPLEMENTED on closure RW |
| RF5 | This IPP + publication wiring on task doc |
| RF6 | Validator-only unless FAIL in matrix |

### 2.3 Constraints

- Original epic 1–7 work = `v0.4.6.7+1`; closure RW uses new build on E4:S06:T01 (`--art`).
- **FR-005-R5** (systematic canonical addition process): **DEFER** to follow-up FR/task — partial guidance exists in `CANONICAL_EPICS.md` § “Document Pattern” but no standalone process doc.

### 2.4 Status transition intent

- **Current task status:** `TODO` (discrete closure task).
- **Step 1 (implementation):** `TODO → IN PROGRESS` on first non-planning edit.
- **COMPLETE:** After audit + reconciliation + user verification + **RW E4:S06:T01** with `✅ COMPLETE (v{version})` and kboard sync per [FR-077](../project-management/kanban/fr-br/FR-077-ipw-built-task-status-transition-and-kboard-sync.md).

### 2.5 ADR necessity decision (IPW Phase 5.0)

Criteria: [`ipw-adr-necessity-checklist.md`](../architecture/standards-and-adrs/ipw-adr-necessity-checklist.md) (FR-100).

| ID | Trigger | Y/N | Evidence |
| -- | ------- | --- | -------- |
| T1 | Alternatives | N | Closure audit path prescribed |
| T2 | Reversibility | N | Doc/kanban edits revertible |
| T3 | Blast radius | N | Kanban + FR + optional one template doc only |
| T4 | Precedent | N | Hygiene closure, not new architecture |
| T5 | Constraint trade-off | N | — |
| T6 | Governance contract | N | No RW/IPW gate changes |
| T7 | Supersedes | N | — |

**Outcome:** **EXEMPT** — all T = N.

| ID | Exemption | Pass? | Evidence |
| -- | --------- | ----- | -------- |
| E1 | Single locus | Y | IPP §4.1 file list |
| E2 | No new options | Y | Implements FR-005 closure only |
| E3 | Reversible in one task | Y | — |
| E4 | Spec elsewhere | Y | IPP §2 + task AC |
| E5 | Documented NONE | Y | §5.3 cites this IPP; outcome EXEMPT in §2.5 |

**§5.3 governing doc:** This IPP §2.5; no new ADR.

---

## 3. Test design

| ID | Behavior / layer | Expected check | IPW run (2026-05-29) |
| -- | ---------------- | -------------- | -------------------- |
| T1 | Epic template corpus | 21 × `templates/epics/Epic-*.md` | **PASS** (21 files) |
| T2 | Task template validator | `python .../generate_task_templates.py --validate` exit 0; 378/378 coverage | **PASS** |
| T3 | Contextualization | `CONTEXTUALIZATION_GUIDE.md` + `examples/contextualized/{tiny,small,ambitious}-project/` | **PASS** |
| T4 | Placeholders | Epics 1–7 use contextualization placeholders (e.g. `{PROJECT_NAME}`) | **PASS** (spot-check epic-01) |
| T5 | CANONICAL_EPICS | References `COMPREHENSIVE_CANONICAL_EST_STRUCTURE.md` | **PASS** |
| T6 | Installer template source | `migrate_structure.py` uses `templates/epics/` not live `docs/.../epics/` | **PASS** (line ~255) |
| T7 | FR-005 matrix | §7 all PASS or documented DEFER | **PASS** (one DEFER: R5) |

---

## 4. Implementation plan

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| **1** | **[MANDATORY]** Transition `E4:S06:T01` **TODO → IN PROGRESS**; update `Last updated` | Task doc |
| **2** | Finalize §7 audit matrix in task doc (copy from IPP if needed) | Audit evidence |
| **3** | Re-run T2 if templates changed since IPW | Validator log |
| **4** | **Kanban reconciliation:** Remove T01 from `kboard` Could; remove FR-005 from `fbuboard` active (or terminal); add/update `fbu-completed`; fix `kanban-completed` T01 line → `v0.4.6.7+1` + link discrete task; story checklist links discrete T01 | Boards synced |
| **5** | **FR-005:** Check criteria; status **IMPLEMENTED**; link IPP + discrete task; note R5 defer | FR doc |
| **6** | **R5:** Record defer in FR-005 + IPP §5.3 (no `CANONICAL_ADDITION_PROCESS.md` in closure RW unless user expands scope) | Deferral documented |
| **7** | **RW E4:S06:T01 --art** after user verification | Release |
| **N** | **[MANDATORY]** Reconcile status **COMPLETE** + `✅ COMPLETE (v{version})`; kboard absent completed row | Forensic closure |

### 4.1 Files to create or modify

**CREATE (IPW — done):**

- `docs/implementation-cycles/IPP-E4S06T01-canonical-est-template-closure-fr005.md`
- `docs/project-management/kanban/epics/epic-04/story-06-comprehensive-canonical-est-template-system/T01-canonical-est-template-closure-fr005.md`

**UPDATE (implementation):**

- `docs/project-management/kanban/fr-br/FR-005-systematic-canonical-epics-stories-tasks-templates.md`
- `docs/project-management/kanban/epics/epic-04/story-06-comprehensive-canonical-est-template-system.md` (checklist link)
- `docs/project-management/kanban/kboard.md`, `fbuboard.md`, `kanban-completed.md`, `fbu-completed.md`

### 4.2 Dependency order

1. Steps 1–3 (audit evidence) → 4–5 (kanban + FR) → 6 (R5 defer note) → 7 (RW) → N.

---

## 5. Documentation deliverables

### 5.1 Existing documents to update

| Doc ID | Path | Scope | Tied to |
| ------ | ---- | ----- | ------- |
| D-U1 | `FR-005-...md` | Status, criteria, implementing task link | RF4, Step 5 |
| D-U2 | `story-06-...md` | Checklist → discrete T01 | RF1 |
| D-U3 | `kboard.md`, `fbuboard.md`, `kanban-completed.md`, `fbu-completed.md` | Reconciliation | RF3 |

### 5.2 New documents to create

| Doc ID | Path | Purpose |
| ------ | ---- | ------- |
| D-C1 | `IPP-E4S06T01-canonical-est-template-closure-fr005.md` | This IPP |
| D-C2 | `T01-canonical-est-template-closure-fr005.md` | Host task |

### 5.3 Documentation gaps and explicit non-changes

| Gap / topic | Resolution |
| ----------- | ---------- |
| **FR-005-R5** systematic canonical addition process | **DEFER** — follow-up task/FR; interim: `CANONICAL_EPICS.md` § addition pattern + story-006 T06. Not blocking IMPLEMENTED for corpus delivery. |
| `CANONICAL_ADDITION_PROCESS.md` | **NONE** in closure RW (deferred) |
| Changelog archives | **NONE** |
| Re-generate 378 tasks | **NONE** unless T2 fails on implementation |

---

## 6. Documentation housing

| Doc ID | Canonical path | Publication status | Lifecycle | Inbound links |
| ------ | ---------------- | ------------------ | --------- | ------------- |
| D-C1 | `docs/implementation-cycles/IPP-E4S06T01-canonical-est-template-closure-fr005.md` | NOT_APPLICABLE | evergreen | T01 Input, References |
| D-C2 | `.../T01-canonical-est-template-closure-fr005.md` | NOT_APPLICABLE | evergreen | FR-005, story-006 |
| D-U1–D-U3 | (see §5.1) | NOT_APPLICABLE | evergreen | Closure RW |

---

## 7. Success / verification criteria

### 7.1 FR-005 closure audit matrix (IPW baseline)

| Ref | Requirement | Result | Evidence |
| --- | ----------- | ------ | -------- |
| FR-005-R1 | Epic templates 1–7+ in `templates/epics/` | **PASS** | 21 epic files; T01+T02 story-006 |
| FR-005-R2 | Story templates per epic | **PASS** | story-006 T03; ~62 story files under `templates/stories/` |
| FR-005-R3 | Task templates per story | **PASS** | story-006 T04; 378 tasks; T2 validator |
| FR-005-R4 | Contextualization mechanism | **PASS** | `CONTEXTUALIZATION_GUIDE.md`, examples (T05) |
| FR-005-R5 | Systematic addition process | **DEFER** | No standalone doc; partial in `CANONICAL_EPICS.md` |
| FR-005-R6 | Usage guide | **PASS** | Contextualization guide + kanban `README.md` / setup guides (T07) |
| Criterion 1 | Epic templates 1–7 complete | **PASS** | T1 |
| Criterion 2 | 2–3 stories per epic template | **PASS** | Structure doc + story templates (T03) |
| Criterion 3 | 3–5 tasks per story template | **PASS** | 378 tasks (T04) |
| Criterion 4 | Placeholders | **PASS** | T4 |
| Criterion 5 | Contextualization guide | **PASS** | T3 |
| Criterion 6 | Systematic addition process | **DEFER** | Same as R5 |
| Criterion 7 | Usage guide | **PASS** | T3, T07 |
| Criterion 8 | Consistent structure | **PASS** | T2, templates use `EPIC_/STORY_/TASK_TEMPLATE.md` |
| Criterion 9 | Framework doc integration | **PASS** | T5, T07 |
| Criterion 10 | ≥2 contextualized examples | **PASS** | tiny / small / ambitious (T05) |

### 7.2 Task acceptance (implementation)

- [ ] AC1–AC6 on host task satisfied
- [ ] §5 UPDATE rows implemented or deferred with reason
- [ ] `validate_ipw_publication_wiring.py` PASS
- [ ] User verification before RW

---

## References

- [FR-005](../project-management/kanban/fr-br/FR-005-systematic-canonical-epics-stories-tasks-templates.md)
- [story-006](../project-management/kanban/epics/epic-04/story-06-comprehensive-canonical-est-template-system.md)
- [T01 host task](../project-management/kanban/epics/epic-04/story-06-comprehensive-canonical-est-template-system/T01-canonical-est-template-closure-fr005.md)
- [COMPREHENSIVE_CANONICAL_EST_STRUCTURE.md](../../packages/frameworks/kanban/templates/COMPREHENSIVE_CANONICAL_EST_STRUCTURE.md)
- [ipw-adr-necessity-checklist.md](../architecture/standards-and-adrs/ipw-adr-necessity-checklist.md)
- [FR-042](../project-management/kanban/fr-br/FR-042-implementation-planning-workflow-ipw.md)
- [FR-077](../project-management/kanban/fr-br/FR-077-ipw-built-task-status-transition-and-kboard-sync.md)

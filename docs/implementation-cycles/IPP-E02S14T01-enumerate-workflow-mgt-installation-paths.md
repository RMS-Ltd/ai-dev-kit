---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T18:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E02:S14:T01 — Planning: Enumerate Workflow-Mgt Installation Paths (IPW)

**Host Task:** [`T01-enumerate-supported-installation-paths-for-workflow-manageme.md`](../project-management/kanban/epics/epic-02/story-14-workflow-management-package-installation-evaluation/T01-enumerate-supported-installation-paths-for-workflow-manageme.md) **(E02:S14:T01)**  
**Planning for:** [Story 14 — Workflow Management Package Installation Evaluation](../project-management/kanban/epics/epic-02/story-14-workflow-management-package-installation-evaluation.md) · [S13 component inventory §5](../project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/component-inventory-map.md)  
**Status:** Implemented (2026-06-05)

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements (ascertained)

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RF1 | Canonical matrix of every supported **workflow-mgt** installation path with stable Path IDs | Story AC; task deliverable |
| RF2 | Per path: acquisition method, configuration step(s), installer modes (A/B/C), greenfield vs brownfield, documented-in links | `INSTALL_IN_YOUR_PROJECT.md`; package README |
| RF3 | Per path: scripts/entry points, post-install artefacts, and **tested status** (`Y` / `N` / `TBD`) | T02 input dependency |
| RF4 | Cross-check against S13 `component-inventory-map.md` §5 — extend install inventory, do not duplicate T02 component taxonomy | E02:S13:T02 |
| RF5 | Record doc inconsistencies as **flagged gaps** (reference IDs for T06); do not fix docs in T01 | Story T06 boundary |
| RF6 | Flesh out T01 task doc: Scope, AC, Input, References, IPP link | FR-042, FR-094 |
| RF7 | Satisfy story AC slice: "Installation paths enumerated" | Story 14 |

### 1.2 Non-functional requirements (ascertained)

| ID | Requirement |
| -- | ----------- |
| RNF1 | Enumeration-only — no installer execution, no doc fixes (T02/T06) |
| RNF2 | Every matrix row cites ≥1 evidence path (script, guide, or "undocumented") |
| RNF3 | Companion file is evergreen; task doc holds executive summary + link |
| RNF4 | Reuse S13:T02 housing pattern (companion under story folder) |

### 1.3 Invariants and boundaries

- **Invariants:** Acquisition (files on disk) and configuration (`rw-config.yaml`, `.cursorrules`, workflow patches) are separate phases; matrix must not collapse them.
- **In scope:** `packages/frameworks/workflow-mgt/` install surfaces; `INSTALL_IN_YOUR_PROJECT.md`; user-docs install guides; `cli/` install backend; uninstall/recovery; optional ECC harness.
- **Out of scope:** Fresh-install execution (T02); migration validation (T03); post-install validator runs (T04); failure-mode authoring (T05); doc remediation (T06).

---

## 2. Specification

### 2.1 Goal

Produce an authoritative **installation paths matrix** so T02–T06 can validate, configure, and remediate from evidence — closing the RC gap left by S13 §5 "Undocumented" install helpers.

### 2.2 Specification mapping from ascertained requirements

Companion `installation-paths-matrix.md` encodes RF1–RF3 as rows with canonical columns (`Path_ID`, `Phase`, `Entry_point`, `RW_modes`, `Documented_in`, `S13_status`, `Tested`, `Known_gaps`). S13 §5 config/install components appear in the cross-reference table. Known doc inconsistencies are indexed in companion §Known gaps (T06 handoff).

### 2.3 Constraints

- No modifications to `packages/frameworks/workflow-mgt/` functional artefacts.
- `INSTALL_IN_YOUR_PROJECT.md` remains adopter SoT; matrix indexes it.

### 2.4 Status transition intent (mandatory for IPW-derived implementation tasks)

- **Current task status:** TODO → **IN PROGRESS** on first implementation edit (Step 1).
- **Transition trigger to COMPLETE:** V1–V7 pass; companion + task doc published; forensic marker via `RW E02:S14:T01 --art`.
- **Atomic propagation requirement:** Task doc status and kboard row status update in same RW Step 7 session.
- **Owner:** Implementation execution (not planning-only IPW creation).

### 2.5 ADR necessity decision (mandatory — IPW Phase 5.0)

| ID | Trigger | Y/N | Evidence |
| -- | ------- | --- | -------- |
| T1 | Alternatives | N | Documents existing paths; does not select one |
| T2 | Reversibility | N | Doc-only companion; one-PR revert |
| T3 | Blast radius | N | Confined to kanban/docs |
| T4 | Precedent | N | Task-scoped matrix; INSTALL_IN_YOUR_PROJECT remains SoT |
| T5 | Constraint trade-off | N | No architectural trade-off |
| T6 | Governance contract | N | Does not alter RW/IPW/UKW gates |
| T7 | Supersedes | N | Extends S13 §5; no ADR contradiction |

**Outcome:** `EXEMPT`

| ID | Exemption (only if all T = N) | Pass? | Evidence |
| -- | --------------------------- | ----- | -------- |
| E1 | Single locus | Y | Files in §4.1 only |
| E2 | No new options | Y | S13:T02 companion pattern |
| E3 | Reversible in one task | Y | Doc revert |
| E4 | Spec elsewhere | Y | INSTALL_IN_YOUR_PROJECT + Story 14 |
| E5 | Documented NONE | Y | §5.3 cites [ipw-adr-necessity-checklist.md](../architecture/standards-and-adrs/ipw-adr-necessity-checklist.md) |

---

## 3. Test design

| ID | Behavior / layer | Expected check |
| -- | ---------------- | -------------- |
| V1 | Seed paths from §2 inventory | Every acquisition, configuration, uninstall, and optional seed has ≥1 matrix row |
| V2 | S13 §5 install rows | Every S13 §5 component appears in matrix or cross-ref table |
| V3 | Evidence column | Each row has `Documented_in` or explicit `Undocumented` |
| V4 | Two-phase model | Acquisition vs configuration phases never collapsed into one ambiguous row |
| V5 | Known gaps | Companion §Known gaps references CLI availability, Python version, slug drift, acquisition-without-installer, stale quickstart |
| V6 | Scope guard | No package functional code changes |
| V7 | Wiring | Task ↔ IPP ↔ companion links resolve |

---

## 4. Implementation plan

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| **1** | **[MANDATORY] Transition T01 `TODO → IN PROGRESS`**; update `Last updated` | Task doc |
| 2 | Create `installation-paths-matrix.md` with canonical columns + two-phase intro | Companion artefact |
| 3 | Structured repo pass: INSTALL_IN_YOUR_PROJECT, package README, installer scripts, user-docs, cli | Populated rows |
| 4 | Reconcile with S13 `component-inventory-map.md` §5; cross-ref table for config artefacts | Cross-ref |
| 5 | Executive summary + gap index in T01 task doc | Task doc |
| 6 | Define acceptance criteria checkboxes in T01 | Task doc |
| 7 | Add Input/References; wire IPP bidirectionally | Task doc |
| 8 | Run V1–V7 checklist; record verification notes in companion | Evidence |
| 9 | **`RW E02:S14:T01 --art`** | Release |
| **N** | **[MANDATORY] Reconcile status:** COMPLETE + `✅ COMPLETE (v{version})` if ACs met; update story checklist + kboard | Four-surface sync |

**RW rule (BR-097):** Post-ship verification prescribes `RW E02:S14:T01 --art` only.

### 4.1 Files to create or modify

- CREATE: `docs/implementation-cycles/IPP-E02S14T01-enumerate-workflow-mgt-installation-paths.md`
- CREATE: `story-14-workflow-management-package-installation-evaluation/installation-paths-matrix.md`
- UPDATE: `T01-enumerate-supported-installation-paths-for-workflow-manageme.md`
- UPDATE (Step N): `story-14-workflow-management-package-installation-evaluation.md`
- UPDATE (Step N): `docs/project-management/kanban/kboard.md`

### 4.2 Dependency order

1. Companion matrix → task doc summary → IPP wire
2. Verification → RW → status reconciliation

---

## 5. Documentation deliverables

### 5.1 Existing documents to update

| Doc ID | Path | Scope of change | Tied to |
| ------ | ---- | --------------- | ------- |
| D-U1 | `T01-enumerate-supported-installation-paths-for-workflow-manageme.md` | Scope, AC, Input, References, summary | RF5, RF6 |
| D-U2 | `story-14-workflow-management-package-installation-evaluation.md` | Checklist on COMPLETE | RF7 |

### 5.2 New documents to create

| Doc ID | Proposed path | Purpose | Tied to |
| ------ | ------------- | ------- | ------- |
| D-C1 | `story-14-.../installation-paths-matrix.md` | Installation paths matrix | RF1–RF3 |
| D-C2 | `docs/implementation-cycles/IPP-E02S14T01-*.md` | IPP | RF6 |

### 5.3 Documentation gaps and explicit non-changes

| Gap / topic | Resolution |
| ----------- | ---------- |
| Install path SoT for adopters | NONE — `INSTALL_IN_YOUR_PROJECT.md` remains authoritative; matrix indexes it |
| Undocumented S13 §5 helpers | CREATE rows in matrix; T06 may add README cross-links |
| CLI availability contradiction | Flag in `Known_gaps`; T06/T05 |
| ADR for matrix housing | NONE — EXEMPT per §2.5; governed by Story 14 + [ipw-adr-necessity-checklist.md](../architecture/standards-and-adrs/ipw-adr-necessity-checklist.md) |

---

## 6. Documentation housing

| Doc ID | Canonical path | Publication status | Lifecycle | Inbound links |
| ------ | -------------- | ------------------ | --------- | ------------- |
| D-C1 | `docs/project-management/kanban/epics/epic-02/story-14-workflow-management-package-installation-evaluation/installation-paths-matrix.md` | NOT_APPLICABLE | evergreen | T01 Deliverable; Story References; T02 Input |
| D-C2 | `docs/implementation-cycles/IPP-E02S14T01-enumerate-workflow-mgt-installation-paths.md` | NOT_APPLICABLE | evergreen | T01 Input + References |
| D-U1 | T01 task doc | NOT_APPLICABLE | evergreen | kboard row; Story checklist |

---

## 7. Success / verification criteria

- [x] Companion `installation-paths-matrix.md` with all canonical columns
- [x] ≥12 distinct path rows (acquisition, configuration, uninstall, optional)
- [x] Two-phase model documented in companion intro
- [x] S13 §5 install components cross-referenced
- [x] Known doc inconsistencies flagged (T06 handoff)
- [x] Task doc, IPP, companion bidirectionally linked
- [x] V1–V7 verification checklist passed
- [x] No installer execution or doc remediation in T01 diff

---

## References

- [T01 task doc](../project-management/kanban/epics/epic-02/story-14-workflow-management-package-installation-evaluation/T01-enumerate-supported-installation-paths-for-workflow-manageme.md)
- [Story 14](../project-management/kanban/epics/epic-02/story-14-workflow-management-package-installation-evaluation.md)
- [S13 component inventory §5](../project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/component-inventory-map.md)
- [INSTALL_IN_YOUR_PROJECT.md](../../INSTALL_IN_YOUR_PROJECT.md)
- [IPP-E02S13T02 pattern](IPP-E02S13T02-inventory-package-components-map.md)
- [FR-042](../project-management/kanban/fr-br/FR-042-implementation-planning-workflow-ipw.md)

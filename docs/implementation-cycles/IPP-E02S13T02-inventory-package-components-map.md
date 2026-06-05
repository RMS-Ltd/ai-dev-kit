---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E02:S13:T02 — Planning: Inventory Package Components and Map to Expectations (IPW)

**Host Task:** [`T02-inventory-package-components-and-map-to-expectations.md`](../project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/T02-inventory-package-components-and-map-to-expectations.md) **(E02:S13:T02)**  
**Planning for:** [T01 expectations baseline](../project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/T01-expectations-baseline.md) · [E07:S07:T01 report §1–2](../project-management/kanban/epics/epic-07/story-07-code-reviews/T01-workflow-machinery-code-review-report.md)  
**Status:** Implemented (2026-06-05 — v0.2.13.2+1)

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RF1 | Categorized component inventory of `packages/frameworks/workflow-mgt/` covering all T01 composition classes | T01 §Package Composition; Story AC |
| RF2 | Map each component to T01 with coverage status: Met / Partial / Gap / Undocumented / Superseded | Task deliverable; E07 §2 |
| RF3 | Expected vs actual gap table for T05 remediation input | E07 §2 |
| RF4 | Reconcile E07:T01 inventory — extend, do not duplicate discovery | E07 M3 |
| RF5 | Update T02 task doc scope, AC, Input/References, IPP wiring | FR-042, FR-094 |
| RF6 | Satisfy Story AC: component inventory mapped to expectations | Story 13 |

### 1.2 Non-functional requirements

| ID | Requirement |
| -- | ----------- |
| RNF1 | Inventory-only — document gaps; no README/YAML/validator fixes (T05/T06) |
| RNF2 | Every gap row cites evidence (path, T01 ref, E07 finding ID) |
| RNF3 | Companion file evergreen; task doc holds executive summary |
| RNF4 | Reuse E07 §1.1 taxonomy (scripts by area, workflow nested/flat matrix) |

### 1.3 Invariants and boundaries

- **In scope:** Package tree; T01 baseline sections; companion `component-inventory-map.md`.
- **Out of scope:** Behavioral validation (T03); integration review (T04); gap log severity (T05); RC sign-off (T06); package code fixes.

---

## 2. Specification

### 2.1 Goal

Produce an authoritative component map showing what the Workflow Management package actually contains versus T01 expectations, enabling T03–T06 RC review from evidence.

### 2.2 Specification mapping

Seven taxonomy sections in companion file: (1) core docs, (2) KB/methodology, (3) workflows, (4) scripts, (5) config/install, (6) adopter surfaces, (7) cross-cutting drift. Each row: path, purpose, T01 ref, status, notes.

### 2.3 Constraints

- Housing: summary + gap table in T02 task doc; detailed tables in companion file (user decision).
- No modifications to `packages/frameworks/workflow-mgt/` functional artefacts.

### 2.4 Status transition intent

- **Current:** TODO → **IN PROGRESS** on first implementation edit (Step 1).
- **COMPLETE:** When V1–V7 pass and companion + task doc published; forensic marker via `RW E02:S13:T02 --art`.
- **Owner:** Implementation execution (not IPW creation alone).

### 2.5 ADR necessity decision

| ID | Trigger | Y/N | Evidence |
| -- | ------- | --- | -------- |
| T1 | Alternatives | N | Single approach: companion + task summary |
| T2 | Reversibility | N | Doc-only; one-PR revert |
| T3 | Blast radius | N | Confined to kanban/docs |
| T4 | Precedent | N | Task-scoped inventory; T01 + AC govern |
| T5 | Constraint trade-off | N | No architectural trade-off |
| T6 | Governance contract | N | Does not alter RW/IPW/UKW gates |
| T7 | Supersedes | N | Extends T01; no ADR contradiction |

**Outcome:** `EXEMPT`

| ID | Exemption | Pass? | Evidence |
| -- | --------- | ----- | -------- |
| E1 | Single locus | Y | Files in §4.1 only |
| E2 | No new options | Y | E04:S16:T02 + T01 pattern |
| E3 | Reversible in one task | Y | Doc revert |
| E4 | Spec elsewhere | Y | T01 + E07 report |
| E5 | Documented NONE | Y | §5.3 cites T01 |

---

## 3. Test design

| ID | Behavior / layer | Expected check |
| -- | ---------------- | -------------- |
| V1 | T01 composition categories | Every T01 category has companion section with ≥1 row |
| V2 | Script areas | Counts per `scripts/` subdir match glob (±0 prod `.py`) |
| V3 | Workflow registry | 11 workflows documented; flat copies noted |
| V4 | Gap table | All E07 §2 rows + new gaps present |
| V5 | Path evidence | Gap/Superseded rows include path or "not found" |
| V6 | Scope guard | No package functional code changes |
| V7 | Wiring | Task ↔ IPP ↔ companion links resolve |

---

## 4. Implementation plan

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| **1** | **[MANDATORY] Transition T02 `TODO → IN PROGRESS`**; update `Last updated` | Task doc |
| 2 | Create `component-inventory-map.md` with 7 taxonomy sections | Companion artefact |
| 3 | Structured package pass; seed from E07 §1.1–1.3 | Inventory rows |
| 4 | Map rows to T01 + coverage status | Mapped tables |
| 5 | Gap summary in companion §Summary; condensed copy in task doc | Gap tables |
| 6 | Flesh out T02: Scope, AC, Input, References | Task doc |
| 7 | T01 footnote → companion inventory (optional) | T01 cross-ref |
| 8 | Run V1–V7 checklist | Verification notes |
| 9 | **`RW E02:S13:T02 --art`** | Release |
| **N** | **[MANDATORY] Reconcile status:** COMPLETE + `✅ COMPLETE (v{version})` if ACs met; update story + kboard | Task + story + board |

**RW rule (BR-097):** Post-ship verification prescribes `RW E02:S13:T02 --art` only.

### 4.1 Files to create or modify

- CREATE: `docs/implementation-cycles/IPP-E02S13T02-inventory-package-components-map.md`
- CREATE: `story-13/.../component-inventory-map.md`
- UPDATE: `T02-inventory-package-components-and-map-to-expectations.md`
- UPDATE: `story-13-workflow-management-package-implementation-review.md`
- UPDATE (optional): `T01-expectations-baseline.md` footnote
- UPDATE (RW Step 7): `kboard.md`

### 4.2 Dependency order

1. Companion inventory → task doc summary → T01 footnote
2. IPP wire → verification → RW

---

## 5. Documentation deliverables

### 5.1 Existing documents to update

| Doc ID | Path | Scope | Tied to |
| ------ | ---- | ----- | ------- |
| D-U1 | `T02-inventory-package-components-and-map-to-expectations.md` | Scope, AC, gap summary, links | RF5, RF6 |
| D-U2 | `story-13-workflow-management-package-implementation-review.md` | Checklist + story AC | RF6 |
| D-U3 | `T01-expectations-baseline.md` | Inventory pointer footnote | RF4 |

### 5.2 New documents to create

| Doc ID | Path | Purpose | Tied to |
| ------ | ---- | ------- | ------- |
| D-C1 | `docs/implementation-cycles/IPP-E02S13T02-inventory-package-components-map.md` | IPP | RF5 |
| D-C2 | `story-13/.../component-inventory-map.md` | Detailed inventory | RF1–RF3 |

### 5.3 Documentation gaps and explicit non-changes

| Gap / topic | Resolution |
| ----------- | ---------- |
| README validator paths | NONE — documented in gap table; fix deferred T05 |
| Flat YAML deprecation | NONE — FR-050 / T05 |
| ADR for inventory housing | NONE — EXEMPT per §2.5; governed by T01 + [ipw-adr-necessity-checklist.md](../architecture/standards-and-adrs/ipw-adr-necessity-checklist.md) |

---

## 6. Documentation housing

| Doc ID | Canonical path | Publication | Lifecycle | Inbound links |
| ------ | -------------- | ----------- | --------- | ------------- |
| D-C1 | `docs/implementation-cycles/IPP-E02S13T02-inventory-package-components-map.md` | NOT_APPLICABLE | evergreen | T02 Input/References |
| D-C2 | `story-13/.../component-inventory-map.md` | PUBLISHED | evergreen | T02 Deliverable, story References |
| D-U1 | T02 task doc | PUBLISHED | evergreen | IPP host link |
| D-U2 | Story 13 doc | PUBLISHED | evergreen | T02 checklist |
| D-U3 | T01 baseline | PUBLISHED | evergreen | Footnote → D-C2 |

---

## 7. Success / verification criteria

- [x] Companion file with 7 taxonomy sections and coverage status
- [x] Task doc gap summary + AC checkboxes
- [x] E07 §2 gaps incorporated
- [x] No package functional code changed
- [x] Bidirectional T02 ↔ IPP ↔ companion links
- [x] Story AC checked on RW completion
- [x] Forensic marker via `RW E02:S13:T02 --art`

---

## References

- [T02 task doc](../project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/T02-inventory-package-components-and-map-to-expectations.md)
- [T01 expectations baseline](../project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/T01-expectations-baseline.md)
- [E07:S07:T01 report](../project-management/kanban/epics/epic-07/story-07-code-reviews/T01-workflow-machinery-code-review-report.md)
- [E04:S16:T02 pattern](../project-management/kanban/epics/epic-04/story-16-kanban-package-implementation-review/T02-inventory-package-components-and-map-to-expectations.md)
- [FR-042](../project-management/kanban/fr-br/FR-042-implementation-planning-workflow-ipw.md)

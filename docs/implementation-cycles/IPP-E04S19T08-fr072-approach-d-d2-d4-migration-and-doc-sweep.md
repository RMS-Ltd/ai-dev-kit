---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-01T18:30:00Z
expires_at: null
housekeeping_policy: keep
---

# E04:S19:T08 — Planning: Spec, Tests, Implementation Plan (IPW)

**Host Task:** [`T08-fr072-approach-d-phase-d2-d4-migration-and-doc-sweep.md`](../kanban/epics/epic-04/story-19-fr-br-uxr-abstract-governance-and-intake/T08-fr072-approach-d-phase-d2-d4-migration-and-doc-sweep.md) **(E04:S19:T08)**  
**Planning for:** [FR-072](../kanban/fr-br/FR-072-uniform-repository-abstract-space-kanban-rules.md)  
**Merged delivery:** [T07 FR-021 supersession](../kanban/epics/epic-04/story-19-fr-br-uxr-abstract-governance-and-intake/T07-fr021-repository-pattern-supersession-fr072-reconciliation.md)  
**Status:** Approved

> **IPW:** Consolidated IPP for FR-072 Approach D phases **D2–D4** + FR-021 supersession. E7:S00 detasking is **out of scope** ([IPP-E4S19T10](IPP-E04S19T10-e7-s00-detasking-br076.md) COMPLETE).

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements (ascertained)

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RF1 | **D2:** New FR/BR/UXR intake uses semantic delivery-story primary tasks only | FR-072 D2, T08 |
| RF2 | **D2:** Active `fbuboard` rows use semantic `Implementing Task` links | T08 AC2 |
| RF3 | **D3:** E5/E6/E7 repository stories + registry tasks labeled historical-only | T08 AC3 |
| RF4 | **D4:** Redirect table maintained (repo coordinates → semantic host / historical) | FR-072 D4 |
| RF5 | **D4:** Sweep intake, workflow, `.cursorrules` / `AGENTS.md` for contradictory repo-default language | T08 deliverable |
| RF6 | **FR-021** superseded for new intake; points to FR-072 + ADR-014 | T07 AC2 (merged) |
| RF7 | story-019 checklists cross-link; no active “file under FR repo story” guidance | T07 AC3 (merged) |
| RF8 | Governance entry: ADR-014 + FR-072 decision memo | T08 AC1 |
| RF9 | FR-072 COMPLETE; E05:S01:T72 historical-only | T08 AC3 |

### 1.2 Non-functional requirements (ascertained)

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RNF1 | Historical `E5:S01:*`, `E6:S01:*`, `E7:S00:*` remain linkable | FR-072 D4 |
| RNF2 | Four-surface RW on closure | FR-092 |
| RNF3 | Structural grep verification (no new pytest) | IPW |
| RNF4 | Changelog: “change implemented” until user verifies | RW policy |

### 1.3 Invariants and boundaries

- **Invariants:** Semantic hosts own open work; repository stories are forensic registries.
- **In scope:** D2–D4, merged T07, ADR-014, FR-072 closure.
- **Out of scope:** E6:S00 detask; automated S00 validator (gap listed only); Epic 7 mass renumbering.

---

## 2. Specification

### 2.1 Goal

Complete FR-072 Approach D after D1/T10/v0.4.19.8+1 batch wiring: enforce semantic intake, mark repository stories historical-only, align workflow/validator documentation, supersede FR-021, and close FR-072.

### 2.2 Specification mapping

RF1–RF2 via intake guardrails + fbuboard audit. RF3 via story/task banners. RF4 via ADR-014 redirect table. RF5–RF7 via framework + dev-kit governance and templates. RF8–RF9 via ADR + FR-072/T08 closure RW.

### 2.3 Constraints

- T07 merged into T08 — single RW attribution on **E04:S19:T08**.
- Do not re-hollow E7:S00 (T10 done).

### 2.4 Status transition intent

- **Current task status:** IN PROGRESS (aligned with kboard at implementation start).
- **COMPLETE:** All ACs + V1–V8 evidence + RW release.
- **Atomic propagation:** T08 task doc + kboard + FR-072 in same closure session.

### 2.5 ADR necessity decision

| ID | Trigger | Y/N | Evidence |
| -- | ------- | --- | -------- |
| T1 | Alternatives | N | Approach D chosen in FR-072 |
| T2 | Reversibility | N | Doc/governance migration |
| T3 | Blast radius | Y | Cross-epic policy, intake, boards |
| T4 | Precedent | Y | Adopter S00/S01 model |
| T6 | Governance contract | Y | Intake + RW/UKW interpretation |
| T7 | Supersedes | Y | FR-021 supersession |

**Outcome:** **REQUIRED** — [ADR-014](../architecture/standards-and-adrs/ADR-014-repository-abstract-space-fr072-approach-d.md) CREATE

---

## 3. Test design

**`--skip-tests` justification:** Governance/doc migration only. Verification = structural audit (V1–V8).

| ID | Behavior / layer | Expected check |
| -- | ---------------- | -------------- |
| V1 | Active `fbuboard` OPEN/IN PROGRESS rows | Semantic implementing task (not repo-only primary) |
| V2 | Intake docs | No “default file under FR repo story” without FR-072 guardrail |
| V3 | E5/E6/E7 story-000 / story-001 | Historical registry banners |
| V4 | FR-021 | Superseded banner + ADR-014 / FR-072 links |
| V5 | IPW wiring | `validate_ipw_publication_wiring.py` PASS |
| V6 | Closure RW | `validate_release_readiness.py` PASS (four-surface report) |
| V7 | ADR-014 redirect table | Covers T72, T21, FR-072 anchor |
| V8 | T07 | COMPLETE (merged into T08) with pointer |

---

## 4. Implementation plan

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| **1** | Transition E04:S19:T08 → IN PROGRESS; align kboard | Task doc + board |
| 2 | Wave A: Audit open fbuboard + redirect table draft | ADR-014 § redirect |
| 3 | Wave B: Intake/framework governance updates | RF5 |
| 4 | Wave C: Historical labeling E5/E6/E7 + T72/T21 | RF3 |
| 5 | Wave D: ADR-014, FR-021, RW/UKW guides, templates | RF6–RF8 |
| 6 | Wave E: FR-072 COMPLETE, T07 COMPLETE (merged), verification | RF9 |
| 7 | RW E04:S19:T08 | Version, changelog, four-surface |
| **N** | Reconcile T08 COMPLETE; archive kboard row; T07 COMPLETE | Forensic markers |

### 4.1 Files to create or modify

- `docs/architecture/standards-and-adrs/ADR-014-repository-abstract-space-fr072-approach-d.md` (CREATE)
- `docs/implementation-cycles/IPP-E4S19T8-*.md` (this file)
- `docs/kanban/fr-br/FR-072-*.md`, `FR-021-*.md`
- `docs/governance/kanban/kanban-governance-policy.md`
- `packages/frameworks/kanban/policies/kanban-governance-policy.md`, `FR_BR_INTAKE_GUIDE.md`
- `packages/frameworks/kanban/templates/epics/Epic-{5,6,7}-*.md`
- `packages/frameworks/workflow-mgt/KB/.../release-workflow-agent-execution.md`, `update-kanban-workflow-agent-execution.md`
- T08, T07, T72, story-019, kboard, fbuboard, `docs/governance/README.md`

### 4.2 Dependency order

ADR-014 → FR-021/FR-072 → governance/templates → verification → RW

---

## 5. Documentation deliverables

### 5.1 Existing documents to update

| Doc ID | Path | Scope | Tied to |
| ------ | ---- | ----- | ------- |
| D-U1 | FR-072 | Redirect pointer, COMPLETE | RF9 |
| D-U2 | FR-021 | Superseded banner | RF6 |
| D-U3 | story-01-fr/br/uxr-repo (E5,E6,E7) | Historical banners | RF3 |
| D-U4 | T72, T21, T08, T07 | Status, IPP links | RF8, RF9 |
| D-U5 | Framework + dev-kit governance, intake skill | Approach D | RF5 |
| D-U6 | RW/UKW agent guides | S00 / historical coords | RF4 |
| D-U7 | Epic templates E5/E6/E7 | Semantic intake examples | RF7 |
| D-U8 | kboard, fbuboard, story-019 | IPP link, FR-072 closure | RF2 |

### 5.2 New documents to create

| Doc ID | Path | Purpose |
| ------ | ---- | ------- |
| D-C1 | ADR-014 | Canonical S00/S01 model |
| D-C2 | This IPP | IPW package |

### 5.3 Documentation gaps

| Topic | Resolution |
| ----- | ---------- |
| Automated S00 validator | NONE — optional follow-on |
| Re-wire all COMPLETE FRs off E05:S01 | NONE — historical anchors valid |

---

## 6. Documentation housing

| Doc ID | Canonical path | Publication | Lifecycle |
| ------ | -------------- | ----------- | --------- |
| D-C1 | `docs/architecture/standards-and-adrs/ADR-014-*.md` | NOT_APPLICABLE | evergreen |
| D-C2 | `docs/implementation-cycles/IPP-E4S19T8-*.md` | NOT_APPLICABLE | evergreen |
| D-U* | kanban / governance / framework | PUBLISHED via RW | evergreen |

---

## 7. Success / verification criteria

- [x] V1–V8 pass (2026-06-01)
- [x] FR-072 AC1–AC3 satisfied
- [x] T07 AC1–AC3 satisfied via merged delivery
- [x] IPP linked from T08; `validate_ipw_publication_wiring.py` PASS

---

## References

- [FR-072](../kanban/fr-br/FR-072-uniform-repository-abstract-space-kanban-rules.md)
- [FR-021](../kanban/fr-br/FR-021-fr-br-uxr-repository-stories.md)
- [ADR-014](../architecture/standards-and-adrs/ADR-014-repository-abstract-space-fr072-approach-d.md)
- [IPP-E4S19T10](IPP-E04S19T10-e7-s00-detasking-br076.md)
- [dev-kit-versioning-policy § S00](../governance/standards/dev-kit-versioning-policy.md)

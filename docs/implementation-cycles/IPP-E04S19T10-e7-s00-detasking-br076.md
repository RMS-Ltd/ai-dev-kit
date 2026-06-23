---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-30T14:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E04:S19:T10 — Planning: Spec, Tests, Implementation Plan (IPW)

**Host Task:** [`T10-e7-s00-detasking-abstract-space-enforcement-br076.md`](../kanban/epics/epic-04/story-19-fr-br-uxr-abstract-governance-and-intake/T10-e7-s00-detasking-abstract-space-enforcement-br076.md) **(E04:S19:T10)**  
**Planning for:** [BR-076](../kanban/fbu/BR-076-e7-s00-must-not-host-concrete-tasks.md)  
**Status:** Approved

> **IPW (Implementation Planning Workflow):** Consolidated IPP for BR-076 — E7:S00 detasking to abstract-only (E5:S00 model).

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements (ascertained)

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RF1 | `story-00-uxr-repo.md` → ABSTRACT SPACE (`v0.7.0.0+0`); no active task checklist | BR-076 AC1, T10 AC1 |
| RF2 | T01–T06 anchor docs → historical-only + redirect to semantic host | BR-076 AC2, T10 AC2 |
| RF3 | UXR-005: single implementing path **E07:S01:T09**; no active S00 work rows | BR-076 AC3, T10 AC2 |
| RF4 | Migration table in T10 doc | BR-076, T10 AC4 |
| RF5 | Intake/governance: never create new tasks under any `S00` | BR-076 AC4, T10 AC3 |
| RF6 | T08 notes BR-076 / T10 E7 closure slice | BR-076 AC5, T10 AC5 |

### 1.2 Non-functional requirements (ascertained)

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RNF1 | Historical `0.7.0.\{n\}+*` coordinates remain linkable | FR-072 D4 |
| RNF2 | Four-surface RW reconciliation (task, BR, kboard, fbuboard) | FR-092 |
| RNF3 | No Epic 7 story renumbering (hollow S00 only) | FR-072, BR-076 scope |

### 1.3 Invariants and boundaries

- **Invariants:** Semantic hosts own open work; S00 is forensic anchor only.
- **In scope:** E7:S00 detask, T01–T06 historical, UXR-005 exemplar, intake policy updates.
- **Out of scope:** E6:S00 detask; automated S00 validator; T08 global D2–D4 sweep (cross-link only).

---

## 2. Specification

### 2.1 Goal

Complete the E7 slice of FR-072 Approach D: hollow **E07:S00** to match **E05:S00**, migrate registry anchors T01–T06 to historical redirects with semantic hosts only, and eliminate split registry+implementation intake (UXR-005 exemplar).

### 2.2 Specification mapping

RF1–RF3 delivered via story-000 rewrite and anchor banners. RF4 via T10 migration table. RF5 via intake skill, FR_BR_INTAKE_GUIDE, KG-R2. RF6 via T08 coordination note.

### 2.3 Constraints

- RW for UXR-005 uses **E07:S01:T09** (`0.7.1.9+*`), not `0.7.0.5+*`.
- Changelog: use "Attempted resolution" for BR-076 until user verifies.

### 2.4 Status transition intent

- **Current task status:** TODO (kanban init v0.4.19.10+1)
- **Transition to IN PROGRESS:** First implementation wave
- **Transition to COMPLETE:** V1–V6 pass + RW release
- **Atomic propagation:** Task doc + kboard row in same session

### 2.5 ADR necessity decision

| ID | Trigger | Y/N | Evidence |
| -- | ------- | --- | -------- |
| T1 | Alternatives | N | Approach D decided in FR-072 |
| T2 | Reversibility | N | Doc migration; redirects preserve links |
| T3 | Blast radius | N | Bounded to E7 S00 + governance docs |
| T4 | Precedent | N | Executes existing E5:S00 precedent |
| T5 | Constraint trade-off | N | No new trade-off |
| T6 | Governance contract | N | Policy text only; no new RW gate |
| T7 | Supersedes | N | Aligns with FR-072 |

**Outcome:** `ALREADY_COVERED` — [FR-072](../kanban/fbu/FR-072-uniform-repository-abstract-space-kanban-rules.md), [dev-kit-versioning-policy.md](../governance/standards/dev-kit-versioning-policy.md) § S00

---

## 3. Test design

**`--skip-tests` justification:** Doc/governance migration only; verification is structural inspection and grep, not pytest.

| ID | Behavior / layer | Expected check |
| -- | ---------------- | -------------- |
| V1 | Active boards | No MoSCOW row uses E07:S00:T0x as implementing task |
| V2 | story-000 | Status ABSTRACT SPACE; no TODO/IN PROGRESS checklist rows |
| V3 | Anchor T01–T06 | Historical banner + primary implementing task link |
| V4 | UXR-005 | Implementing Task = E07:S01:T09 only |
| V5 | Intake docs | Explicit S00 prohibition for new tasks |
| V6 | T10 + BR-076 | Migration table; AC evidence |
| V7 | IPW wiring | `validate_ipw_publication_wiring.py` PASS |

---

## 4. Implementation plan

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| **1** | Transition E04:S19:T10 TODO → IN PROGRESS | Task doc updated |
| 2 | Wave 1: Hollow story-000; epic-07 S00 row | RF1 |
| 3 | Wave 2: Historical banners T01–T06 | RF2 |
| 4 | Wave 3: UXR-005 + kboard | RF3 |
| 5 | Wave 4: Intake skill, FR_BR_INTAKE_GUIDE, KG-R2 | RF5 |
| 6 | Wave 5: Migration table, BR-076, T08 note, story checklist | RF4, RF6 |
| **N** | Reconcile T10 COMPLETE + RW | Version marker, boards |

### 4.1 Files to create or modify

- `docs/kanban/epics/epic-07/story-00-uxr-repo.md`
- `docs/kanban/epics/epic-07/story-00-uxr-repo/T0*.md` (6 files)
- `docs/kanban/fbu/UXR-005-*.md`, `BR-076-*.md`
- `docs/kanban/kboard.md`
- `.cursor/skills/intake-process/SKILL.md`
- `packages/frameworks/kanban/FR_BR_INTAKE_GUIDE.md`, `kanban-governance-policy.md`
- T10, T08, story-019, epic-04, epic-07

### 4.2 Dependency order

1. story-000 hollow → anchors → UXR/boards → governance → closure → RW

### 4.3 Documentation implementation steps

1. Framework kanban paths (adopter SoT) before dev-kit overlays where both exist.

---

## 5. Documentation deliverables

### 5.1 Existing documents to update

| Doc ID | Path | Scope | Tied to |
| ------ | ---- | ----- | ------- |
| D-U1 | story-00-uxr-repo.md | Abstract-only | RF1 |
| D-U2 | T01–T06 anchors | Historical banners | RF2 |
| D-U3 | UXR-005, E07S01T09, kboard, fbuboard | Single implementing path | RF3 |
| D-U4 | intake-process SKILL, FR_BR_INTAKE_GUIDE, KG-R2 | S00 prohibition | RF5 |
| D-U5 | BR-076, T08, T10, story-019 | Closure | RF4, RF6 |

### 5.2 New documents to create

| Doc ID | Path | Purpose |
| ------ | ---- | ------- |
| D-C1 | (this IPP) | IPW package |

### 5.3 Documentation gaps

| Topic | Resolution |
| ----- | ---------- |
| S00 validator | NONE — optional follow-on FR |
| E6:S00 detask | NONE — separate pass |

---

## 6. Documentation housing

| Doc ID | Canonical path | Publication | Lifecycle |
| ------ | -------------- | ----------- | --------- |
| D-C1 | `docs/implementation-cycles/IPP-E4S19T10-*.md` | NOT_APPLICABLE (planning) | evergreen |
| D-U1–D-U5 | kanban tree | PUBLISHED via RW | evergreen |

---

## 7. Success / verification criteria

- [ ] V1–V7 pass
- [ ] All §5 items implemented
- [ ] IPP linked from T10; validator PASS

---

## References

- [BR-076](../kanban/fbu/BR-076-e7-s00-must-not-host-concrete-tasks.md)
- [FR-072](../kanban/fbu/FR-072-uniform-repository-abstract-space-kanban-rules.md)
- [E5:S00](../kanban/epics/epic-05/story-00-fr-repo.md)

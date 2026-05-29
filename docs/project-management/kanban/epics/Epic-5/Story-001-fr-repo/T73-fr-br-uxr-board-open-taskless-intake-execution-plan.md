---
lifecycle: evergreen
ttl_days: null
created_at: 2026-03-31T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Task E5:S01:T73 – FR/BR/UXR Board: Open ∧ Taskless Intake Execution Plan

**Task ID:** E5:S01:T73  
**Status:** COMPLETE  
**Priority:** MEDIUM  
**Version Anchor:** v0.5.1.73+0 (doc-init) · **Phase B/C closed** v0.5.1.74+2 *(internal `VERSION_TASK` stays **T74** for monotonicity; see detailed changelog)*  
**Feature Request:** [FR-073 – FR/BR/UXR board intake execution plan](../../../fr-br/FR-073-fr-br-uxr-board-open-taskless-intake-execution-plan.md)
**Successor governance anchor:** [E4:S19:T06](../../Epic-4/Story-019-fr-br-uxr-abstract-governance-and-intake/T06-fbu-meta-normalization-and-intake-governance-uxr008-fr086-fr073.md) (meta ownership for cross-FBU naming and FR-073 AC3 closure)

---

## Summary

Own the **Intake plan** block on [`fbuboard.md`](../../../fbuboard.md): definition of open ∧ taskless, **epic branch + `RW -k`** loop, MoSCOW queue table, hygiene rules, and execution order. Deliver **concrete, repeatable steps** so agents and humans can drain the queue without orphan documentation.

---

## Scope

Documentation-only ownership of the FR/BR/UXR **intake execution plan** on the prioritization board: definitions, **pre-identified** FR/BR/UXR→task mapping, **housing policy** for story choice, phased execution (A/B/C), and hygiene notes. **Out of scope:** implementing ICW code (**FR-040**), fixing **BR-039** product behavior, or automating UKW (other tasks).

---

## Input

- [`fbuboard.md`](../../../fbuboard.md) — MoSCOW **Must / Should** rows and Intake plan block.  
- [`FR-073`](../../../fr-br/FR-073-fr-br-uxr-board-open-taskless-intake-execution-plan.md) — feature request and acceptance criteria.  
- [`Story-000-uxr-repo.md`](../../Epic-7/Story-000-uxr-repo.md) — **UXR-n → E7:S00:Tnn** repository convention.  
- [`TASK_TEMPLATE.md` (source)](https://github.com/earlution/ai-dev-kit/blob/main/packages/frameworks/kanban/templates/TASK_TEMPLATE.md) — required headings for `validate_version_bump.py`.  

---

## Pre-identified task mapping (Must / Should queue)

**Rule:** IDs below are **proposed reservations** for `RW -k` doc-init or board-refresh work. If you renumber, update **`fbuboard.md`**, this task, and **FR-073** together.

| FR/BR/UXR | Type | Primary task ID | Status | Primary epic branch | Housing rationale |
|-----------|------|-----------------|--------|---------------------|-------------------|
| **BR-038** | BR | **E6:S06:T02** | **Linked** (MoSCOW **`| T02`** 2026-03-31) | `epic/6-framework-management` | [T02](../../Epic-6/Story-006-feature-requests/T02-fix-release-workflow-micromanagement-issues.md). |
| **BR-039** | BR | **E6:S06:T57** | **Released** **`v0.6.6.57+1`** on `epic/6` (supersedes planning alias **T43** on older board drafts) | `epic/6-framework-management` | Canonical task doc: [T57](../../Epic-6/Story-006-feature-requests/T57-br039-cascade-whitelist-security-prompt-blocker.md). |
| **BR-059** | BR | **E6:S07:T109** | **Released** **`v0.6.7.109+1`** on `epic/6` (**RW -k**) | `epic/6-framework-management` | [T109-br059](../../Epic-6/Story-007-adk-implementation-analysis-and-package-management/T109-br059-ukw-moscow-full-story-task-coverage.md). |
| **FR-040** (ICW) | FR | **E5:S01:T40** | **Linked** | `epic/5-documentation-management` | [T40](T40-implementation-cycle-workflow-icw.md); board MoSCOW pipe added 2026-03-31. |
| **UXR-001** | UXR | **E7:S00:T01** · **E7:S05:T01** | **Filed** | `epic/7-documentation-maintenance` | [T01 repo](../../Epic-7/Story-000-uxr-repo/T01-uxr-001-repository-anchor.md); **S05:T01** synthesis complete. |
| **UXR-002** | UXR | **E7:S00:T02** · **E7:S05:T02** | **Filed** | `epic/7-documentation-maintenance` | [T02 repo](../../Epic-7/Story-000-uxr-repo/T02-uxr-002-repository-anchor.md); **S05:T02** synthesis complete. |
| **UXR-005** | UXR | **E7:S00:T05** · **E7:S01:T09** | **Filed** | `epic/7-documentation-maintenance` | [T05 repo](../../Epic-7/Story-000-uxr-repo/T05-uxr-005-repository-anchor.md); [E07S01T09](../../Epic-7/Story-001-codebase-maintenance-tasks/E07S01T09-kanban-template-governance.md). |
| **FR-073** | FR | **E5:S01:T73** | This task | `epic/5-documentation-management` | Meta intake-plan FR; FR Repo. |

### Story-choice policy (shortcut)

**Governance:** **KG-R6** — prefer **semantic** story placement; **FR-nnn ↔ Tnn** in **E5:S01** is **optional**, not mandatory.

- **E5:S01** — Often used for FR **repository** rows and **RW -k** doc-init; primary **delivery** task may still live under another epic/story with links.  
- **E6:S06** — Typical **framework / RW–adjacent** BR and FR **implementation**.  
- **E6:S07** — **UKW / CMW / RW maintenance** defects and perpetual workflow tasks.  
- **E7:S00** / **E7:S01** / **E7:S05** — UXR **repository** slot vs **implementation** per project `Story-000` / charter; **link both** when both exist.

---

## Concrete plan (phased)

### Phase A — Filing and traceability (this intake)

| Step | Action | Done |
|------|--------|------|
| A1 | **FR-073** + **T73** + **Story-001** checklist row | [x] |
| A2 | Board **Intake plan** header: **Kanban anchor** → FR-073 / T73 | [x] |
| A3 | MoSCOW **Should** row for **FR-073** with `| E5:S01:T73` | [x] |
| A4 | **`RW -k E5:S01:T73`** on `epic/5-documentation-management` | [x] |

### Phase B — Queue execution (ongoing)

| Step | Action | Done |
|------|--------|------|
| B1 | For each **Must** item: implementation epic branch → task doc → **`RW -k`** → update board line with **`| E…`** | [x] **Epic/6:** **BR-039**→**E6:S06:T57** (**`v0.6.6.57+1`**), **BR-059**→**E6:S07:T109** (**`v0.6.7.109+1`**); **BR-038**→**T02** linked. |
| B2 | **Should:** **FR-040** (ICW), **UXR** reconciliation per board table | [x] **FR-040** MoSCOW **T40** link; **E7:S00:T01/T02/T05** repo task docs + UXR headers + **Story-000** checklist. |
| B3 | After each intake: refresh **taskless** table if the item moved to linked | [x] Board **MoSCOW queue** subsection + MoSCOW bullets updated. |

### Phase C — Hygiene passes (scheduled / UKW)

| Step | Action | Done |
|------|--------|------|
| C1 | Reconcile **UXR-001 / 002 / 005** board lines vs [`epics/Epic-7/`](../../Epic-7) (no duplicate **E7:S00:Txx** without decision) | [x] Repo anchors created under [`Story-000-uxr-repo/`](../../Epic-7/Story-000-uxr-repo); impl pointers **E7:S05** / **E7:S01:T09** documented. |
| C2 | Update **Board Statistics** (counts, priority buckets) when MoSCOW changes | [x] **Note** added under statistics (full recount deferred to UKW). |
| C3 | Batch-add **`Implementing Task:`** to high-traffic FRs when touching them (optional stretch) | [x] **2026-03-31:** **`RW -k`** **E5:S01:T21**/**T32**; **`RW -k`** **E7:S00:T03/T04** on `epic/7`; residual **Could** rows backlog |

---

## Deliverable

1. Intake plan section remains the **single narrative SoT** for the open∧taskless + **`RW -k`** loop; **FR-073** cites scope only.  
2. MoSCOW **FR-073** row tracks visibility until Phase B/C yields a “maintenance only” state (then FR may move toward COMPLETE in a later build).  
3. Version markers on board **`Last Updated`** line updated when this task ships substantive doc changes (via RW).

---

## Acceptance Criteria

- [x] **AC1:** **FR-073** ↔ **T73** bidirectional; **Story-001** checklist includes **T73**.  
- [x] **AC2:** [`fbuboard.md`](../../../fbuboard.md) Intake plan references **FR-073** / **E5:S01:T73**.  
- [x] **AC3:** At least one **`RW -k`:** **`0.5.1.73+0`** (or subsequent **+n**) attributes filing to **T73**.  
- [x] **AC4:** **MoSCOW** lists **FR-073** with task link.  
- [x] **AC5:** Phase B/C checklists in this doc updated when major queue milestones complete (honor clause — update table dates in board footer).  
- [x] **AC6:** **Pre-identified mapping** in this doc matches [`fbuboard.md`](../../../fbuboard.md) **Intake plan** table whenever either changes. *(Aligned 2026-03-31 Phase B/C pass.)*

---

## References

- [`fbuboard.md`](../../../fbuboard.md)  
- [`intake-process` skill (source)](https://github.com/earlution/ai-dev-kit/blob/main/.cursor/skills/intake-process/SKILL.md)  
- [FR-072](../../../fr-br/FR-072-uniform-repository-abstract-space-kanban-rules.md) (precedent: governance intake on same story)

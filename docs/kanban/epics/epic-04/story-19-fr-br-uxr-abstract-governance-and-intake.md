---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-02T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Story 019 – FR/BR/UXR abstract governance and intake

**Status:** IN PROGRESS
**Priority:** HIGH  
**Estimated Effort:** [TBD]  
**Created:** 2026-04-02  
**Last updated:** 2026-06-11 (v0.4.19.13+1 – T13 kboard template v2.2.0 UXR-028)
**Version:** v0.4.19.13+1
**Code:** E4S19  

**Story type:** Ongoing governance (not a perpetual “repo ledger”; not a dumping ground for individual **FR-### / BR-### / UXR-###** implementation work).

---

## Task Checklist
- [ ] **E04:S19:T01 – Charter: abstract vs concrete FR/BR/UXR ownership** - TODO (baseline scope; no charter task doc yet) — *Note: **[BR-060](../../fr-br/BR-060-rw-in-progress-task-gate-blocks-build-releases.md)** implementing task is **[E02:S01:T09](../epic-02/story-01-rw-agent-execution-and-docs/T09-rw-allow-in-progress-task-releases-br060.md)**; [this story’s `T01-…br060` filename](story-19-fr-br-uxr-abstract-governance-and-intake/T01-rw-allow-in-progress-task-releases-br060.md) is a redirect stub only.*


- [x] **E04:S19:T02 – Canonical supporting Kanban/FBU doc naming + `FBU` collective terminology (FR-086)** - SUPERSEDED (scope absorbed by **E04:S19:T06** meta-task; historical traceability preserved) — [Task doc](story-19-fr-br-uxr-abstract-governance-and-intake/T02-canonical-supporting-kanban-fbu-doc-naming-and-fbu-collective-terminology-fr086.md) | [FR-086](../../fr-br/FR-086-canonical-supporting-kanban-fbu-doc-naming-and-fbu-collective-terminology.md) | [E04:S19:T06](story-19-fr-br-uxr-abstract-governance-and-intake/T06-fbu-meta-normalization-and-intake-governance-uxr008-fr086-fr073.md)


- [x] **E04:S19:T03 – `E6:S07` default-housing drift investigation + closure decision (FR-087)** - ✅ COMPLETE (HIGH, v0.4.19.3+2 + v0.4.19.3+0 — Wave 2–4: report, **`split/re-house`**, active re-housings; guardrail filing open) — [Task doc](story-19-fr-br-uxr-abstract-governance-and-intake/T03-e6s07-default-housing-drift-investigation-and-closure-decision-fr087.md) | [FR-087](../../fr-br/FR-087-e6s07-default-housing-root-cause-and-closure-decision.md) | IPP: [`IPP-E4S19T3`](../../../implementation-cycles/IPP-E4S19T03-e6s07-default-housing-drift-investigation.md) | Report: [`E4S19T03-e6s07-default-housing-investigation-report.md`](../../../implementation-cycles/E4S19T03-e6s07-default-housing-investigation-report.md)


- [x] **E04:S19:T04 – kboard `IPP` segment after FBU/task links (UXR-010)** - ✅ COMPLETE (HIGH, formalize row-link ordering and deterministic `—No IPP—` fallback token when planning artifact is absent) (v0.4.19.4+5) — [Task doc](story-19-fr-br-uxr-abstract-governance-and-intake/T04-kboard-fbuboard-add-ipp-column-after-fbu-and-task-links-uxr010.md) | [UXR-010](../../fr-br/UXR-010-kboard-fbuboard-add-ipp-column-after-fbu-and-task-links.md) | [IPP](../../../implementation-cycles/IPP-E4S19T04-kboard-fbuboard-ipp-segment-after-fbu-task-links.md)


- [x] **E04:S19:T05 – Kanban and FR/BR/UXR filename normalization (UXR-008)** - SUPERSEDED (execution ownership consolidated into **E04:S19:T06**; retain T05 history and artifacts) — [Task doc](story-19-fr-br-uxr-abstract-governance-and-intake/T05-kanban-and-fr-br-uxr-filename-normalization-uxr008.md) | [UXR-008](../../fr-br/UXR-008-kboard-fbuboard-default-naming-adoption.md) | [FR-086](../../fr-br/FR-086-canonical-supporting-kanban-fbu-doc-naming-and-fbu-collective-terminology.md) | [E04:S19:T06](story-19-fr-br-uxr-abstract-governance-and-intake/T06-fbu-meta-normalization-and-intake-governance-uxr008-fr086-fr073.md)


- [x] **E04:S19:T06 – FBU meta normalization and intake governance (UXR-008 / FR-086 / FR-073)** - COMPLETE (HIGH, canonical meta-task owning filename/terminology normalization + FR-073 AC3 board-statistics closure; supersedes T02/T05 and absorbs T73 follow-on governance) — [Task doc](story-19-fr-br-uxr-abstract-governance-and-intake/T06-fbu-meta-normalization-and-intake-governance-uxr008-fr086-fr073.md) | [UXR-008](../../fr-br/UXR-008-kboard-fbuboard-default-naming-adoption.md) | [FR-086](../../fr-br/FR-086-canonical-supporting-kanban-fbu-doc-naming-and-fbu-collective-terminology.md) | [FR-073](../../fr-br/FR-073-fr-br-uxr-board-open-taskless-intake-execution-plan.md) | [IPP](../../../implementation-cycles/IPP-E4S19T06-fbu-meta-normalization-and-intake-governance.md)


- [x] **E04:S19:T07 – FR-021 repository pattern supersession (FR-072 reconciliation)** - ✅ COMPLETE (merged into **T08**, 2026-06-01) — [Task doc](story-19-fr-br-uxr-abstract-governance-and-intake/T07-fr021-repository-pattern-supersession-fr072-reconciliation.md) | [FR-021](../../fr-br/FR-021-fr-br-uxr-repository-stories.md) | [IPP-E4S19T8](../../../implementation-cycles/IPP-E04S19T08-fr072-approach-d-d2-d4-migration-and-doc-sweep.md)


- [x] **E04:S19:T08 – FR-072 Approach D phases D2–D4 migration and doc sweep** - ✅ COMPLETE (HIGH, **v0.4.19.8+2** — ADR-014, D2–D4, merged T07) — [Task doc](story-19-fr-br-uxr-abstract-governance-and-intake/T08-fr072-approach-d-phase-d2-d4-migration-and-doc-sweep.md) | [FR-072](../../fr-br/FR-072-uniform-repository-abstract-space-kanban-rules.md) | [ADR-014](../../../architecture/standards-and-adrs/ADR-014-repository-abstract-space-fr072-approach-d.md) | [IPP-E4S19T8](../../../implementation-cycles/IPP-E04S19T08-fr072-approach-d-d2-d4-migration-and-doc-sweep.md)


- [x] **E04:S19:T09 – Two-digit E/S/T identifier default formatting (UXR-014)** - ✅ COMPLETE (MEDIUM, v0.4.19.9+2 — est_format.py, policy, full corpus sweep) — [Task doc](story-19-fr-br-uxr-abstract-governance-and-intake/T09-two-digit-est-identifier-default-formatting-uxr014.md) | [UXR-014](../../fr-br/UXR-014-two-digit-est-identifier-default-formatting.md) | [IPP-E4S19T9](../../../implementation-cycles/IPP-E4S19T09-two-digit-est-identifier-default-formatting.md)


- [x] **E04:S19:T10 – E7:S00 detasking — abstract space enforcement (BR-076)** - ✅ COMPLETE (HIGH, **v0.4.19.10+2** — hollow E7:S00, historical T01–T06, UXR-005 exemplar, intake S00 ban) — [Task doc](story-19-fr-br-uxr-abstract-governance-and-intake/T10-e7-s00-detasking-abstract-space-enforcement-br076.md) | [BR-076](../../fr-br/BR-076-e7-s00-must-not-host-concrete-tasks.md) | [IPP](../../../implementation-cycles/IPP-E04S19T10-e7-s00-detasking-br076.md) | Related: [FR-072](../../fr-br/FR-072-uniform-repository-abstract-space-kanban-rules.md), [E04:S19:T08](story-19-fr-br-uxr-abstract-governance-and-intake/T08-fr072-approach-d-phase-d2-d4-migration-and-doc-sweep.md)

- [x] **E04:S19:T11 – Kanban epic/story path lowercase naming (UXR-017)** - ✅ COMPLETE (v0.4.19.11+1 — GH #12–#20 closed; adopter replay verified) — [Task doc](story-19-fr-br-uxr-abstract-governance-and-intake/T11-kanban-epic-story-path-lowercase-naming-uxr017.md) | [UXR-017](../../fr-br/UXR-017-kanban-epic-story-path-lowercase-naming.md) | [IPP-E4S19T11](../../../implementation-cycles/IPP-E04S19T11-kanban-epic-story-path-lowercase-naming.md)

- [x] **E04:S19:T12 – Single-board consolidation — retire `fbuboard` (UXR-020 R3)** - ✅ COMPLETE (**v0.4.19.12+5** — intake rename: `fbu-*` → `intake-*`; `fbuboard`/`kanban-board` deleted) — [Task doc](story-19-fr-br-uxr-abstract-governance-and-intake/T12-fbuboard-necessity-investigation-uxr020.md) | [UXR-020](../../fr-br/UXR-020-fbuboard-necessity-after-task-fbu-wiring.md) | [ADR-018](../../../architecture/standards-and-adrs/ADR-018-single-kanban-board-consolidation.md) | [IPP-E4S19T12](../../../implementation-cycles/IPP-E04S19T12-single-board-consolidation-uxr020.md)

- [x] **E04:S19:T13 – kboard v3.2 packaged template (UXR-028)** - ✅ COMPLETE (HIGH, **v0.4.19.13+1** — template v2.2.0 + greenfield sync; AC3/AC4 deferred) — [Task doc](story-19-fr-br-uxr-abstract-governance-and-intake/T13-kboard-v3dot2-packaged-template-uxr028.md) | [UXR-028](../../fr-br/UXR-028-kboard-v3dot2-packaged-template-alignment.md) | [kboard-template evidence](../../../../adk-install-into-sbl/attempt-06/feedback-package/kboard-template-v3dot2.md) | —No IPP—


- [ ] **E04:S19:T14 – Rename intake directory `fr-br/` → `fbu/` (UXR-032)** - TODO (MEDIUM, cross-cutting path + `fbu_root` config migration; FR-086 directory gap) — [Task doc](story-19-fr-br-uxr-abstract-governance-and-intake/T14-fr-br-directory-rename-to-fbu-uxr032.md) | [UXR-032](../../fr-br/UXR-032-fr-br-directory-rename-to-fbu.md) | —No IPP—

---

## Overview

This story holds **Epic 4 (Kanban framework) responsibility for FR / BR / UXR in the abstract**: the **rules, intake mechanics, governance, and cross-cutting documentation** that apply to *all* reports of those types — without owning the **substance** of any single report.

**“Abstract” here means:** not concerning **concrete** `fr-br/FR-*.md`, `BR-*.md`, or `UXR-*.md` work items as primary deliverables. **New intake** uses **semantic delivery stories** (KG-R6); **E5:S01**, **E6:S01**, and **E7:S00** registry paths are **historical** only ([FR-072](../../fr-br/FR-072-uniform-repository-abstract-space-kanban-rules.md), [ADR-014](../../../architecture/standards-and-adrs/ADR-014-repository-abstract-space-fr072-approach-d.md)). This story owns the **shape of the system** (how intake, boards, and policies fit together).

---

## In scope (examples)

- Intake workflow and **atomic filing** expectations (**KG-R2**) and **semantic placement** (**KG-R6**) as reflected in framework policy, guides, and agent skills.
- **Structure and hygiene** of **fr-br-uxr** surfaces (e.g. board layout, open-queue discipline) when the change is **policy or template**-level, not “fix this one BR”.
- Alignment narratives between **repository stories** (E5:S01, E6:S01, E7:S00) and **framework** docs under `packages/frameworks/kanban/`.
- Evolution of **workflow** definitions (e.g. packaged intake YAML, UKW gap-discovery expectations) where the benefit is **class-level** (all FR/BR/UXR), not one ticket.

## Out of scope

- **Implementing or closing a specific** FR / BR / UXR report (use the report’s **implementing task** under the correct epic/story — e.g. **E5:S01** / **E6:S01** / **E7:S00**, **E2:S01** for workflow/RW validators, or delivery epics).
- **RW validator / Step 1c mechanics** — belong under **Epic 2** (e.g. **E02:S01:T09** for **BR-060**), not this abstract governance story.
- **Versioning** a release attributed primarily to a single concrete report belongs on that report’s task unless the change is genuinely **framework/governance** for the whole class (then **E4:S19:Txx**).

---

## Relationship to other stories

| Item | Role |
| ------ | ------ |
| **E4:S02** (complete) | Original **FR/BR → task** intake design and automation; historical baseline. |
| **E4:S12** (complete) | **Repository story pattern** (S00→S01 migration, meta grouping). |
| **FR-074 / E05:S01:T74** etc. | Concrete policy edits filed as **FR repo** tasks; **this story** is where Epic 4 **tracks ongoing abstract ownership** so it does not disappear inside one FR. |
| **E5:S01 / E6:S01 / E7:S00** | **Ledgers** for **concrete** reports (traceability). **S19** does not replace them. |

---

## Tactical overview (2026-06-01)

**Shipped this story:** **T12** complete — **UXR-020 R3** single-board consolidation (**ADR-018**, **v0.4.19.12+5**); `kboard` sole active MoSCOW; `intake-*` naming; legacy dual-board files removed. Prior: **T07–T11** (FR-072, UXR-014/017, etc.). **Open:** **T01** charter (baseline; BR-060 implementing work lives **E02:S01:T09**).

## Goals

- [x] Single obvious Epic 4 home for **“how FR/BR/UXR work in this framework”** (meta) — **T08 / FR-072 / ADR-014**
- [x] Explicit boundaries so **concrete** report work does not default into **E6:S06** or **S19** by habit — intake guide + templates updated
- [ ] Task checklist under S19 lists **only** abstract/governance tasks (**E4:S19:Txx**) — **T01** charter remains

---

## Dependencies

**Coordinates with:** Epic 5 (docs), Epic 6 / 7 (BR/UXR repos), Epic 2 (workflows), `packages/frameworks/kanban/`.

**References:** `kanban-governance-policy.md`, `FR_BR_INTAKE_GUIDE.md`, `.cursor/skills/intake-process/SKILL.md`, `kboard.md`.

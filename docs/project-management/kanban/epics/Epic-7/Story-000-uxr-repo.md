---
lifecycle: evergreen
ttl_days: null
created_at: 2026-01-05T18:10:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 7, Story 0: UXR Repo (HISTORICAL REGISTRY - DEPRECATED FOR NEW INTAKE)

**Status:** IN PROGRESS (HISTORICAL REGISTRY)  
**Priority:** HIGH  
**Last updated:** 2026-03-31 (**`RW -k`** **E7:S00:T04** **`v0.7.0.4+0`**; prior **T03** **`v0.7.0.3+0`**; **T02** **v0.7.0.2+2**; `epic/5` merge **main** preserves anchor docs **T01/T02/T05**)  
**Estimated Effort:** N/A (Perpetual repository)  
**Started:** 2026-01-05  
**Completed:** N/A (Perpetual - never completes)  
**Version:** v0.7.0.0+0  
**Code:** E7S00

**Story Type:** Repository (HISTORICAL REGISTRY)  
**Build Warning Suppression:** true  
**Explanation:** This story now serves as a historical UXR anchor registry. Under FR-072 Approach D, new intake should not create net-new primary tasks here; use semantic host-story placement and keep this story for legacy traceability.

---

## Task Checklist
> **Migration state:** Historical registry only. Do not add new primary intake tasks here.

- [x] **E7:S00:T01 – UXR-001 Migration User Experience Research** - ✅ COMPLETE (v0.7.0.1+1 – Registry task filed; synthesis **E7:S05:T01**) - [Task Document](Story-000-uxr-repo/T01-uxr-001-repository-anchor.md) | [UXR-001](../../fr-br/UXR-001-migration-user-experience-research.md)

- [x] **E7:S00:T02 – UXR-002 Comprehensive UAT Migration Utilities** - ✅ COMPLETE (v0.7.0.2+1 – Registry task filed; synthesis **E7:S05:T02**) - [Task Document](Story-000-uxr-repo/T02-uxr-002-repository-anchor.md) | [UXR-002](../../fr-br/UXR-002-comprehensive-uat-migration-utilities.md)

- [ ] **E7:S00:T03 – UXR-003 repository anchor** — [Task doc](Story-000-uxr-repo/T03-uxr-003-repository-anchor.md) | [UXR-003](../../fr-br/UXR-003-intelligent-epic-matching-canonical-adoption-uat.md) | Impl: [E7:S05:T03](Story-005-migration-uxr-research.md)

- [ ] **E7:S00:T04 – UXR-004 repository anchor** — [Task doc](Story-000-uxr-repo/T04-uxr-004-repository-anchor.md) | [UXR-004](../../fr-br/UXR-004-kanban-package-installation-uat.md) | Impl: [E7:S05:T04](Story-005-migration-uxr-research.md)

- [ ] **E7:S00:T05 – UXR-005 Kanban Board Formatting & Governance** - TODO (v0.7.0.5+1 – Registry task filed; implementation **E7:S01:T09**) - [Task Document](Story-000-uxr-repo/T05-uxr-005-repository-anchor.md) | [UXR-005](../../fr-br/UXR-005-kanban-board-formatting-and-governance.md)

- [ ] **E7:S00:T06 – UXR-006 MoSCOW row last-modified UTC stamps** - 🔄 IN PROGRESS (impl **E6:S06:T61**) - [Task Document](Story-000-uxr-repo/T06-uxr-006-repository-anchor.md) | [UXR-006](../../fr-br/UXR-006-kanban-moscow-row-last-modified-utc-stamp.md) | Impl: [E6:S06:T61](../Epic-6/Story-006-feature-requests/T61-uxr-006-kanban-moscow-last-modified-stamps.md)

- [ ] **E7:S00:T01 – UXR-001 repository anchor** — [Task doc](Story-000-uxr-repo/T01-uxr-001-repository-anchor.md) | [UXR-001](../../fr-br/UXR-001-migration-user-experience-research.md) | Impl: [E7:S05:T01](Story-005-migration-uxr-research.md)
- [ ] **E7:S00:T02 – UXR-002 repository anchor** — [Task doc](Story-000-uxr-repo/T02-uxr-002-repository-anchor.md) | [UXR-002](../../fr-br/UXR-002-comprehensive-uat-migration-utilities.md) | Impl: [E7:S05:T02](Story-005-migration-uxr-research.md)
- [ ] **E7:S00:T05 – UXR-005 repository anchor** — [Task doc](Story-000-uxr-repo/T05-uxr-005-repository-anchor.md) | [UXR-005](../../fr-br/UXR-005-kanban-board-formatting-and-governance.md) | Impl: [E7:S01:T09](Story-001-codebase-maintenance-tasks/E07S01T09-kanban-template-governance.md)
- [ ] **E7:S00:T06 – UXR-006 repository anchor** — [Task doc](Story-000-uxr-repo/T06-uxr-006-repository-anchor.md) | [UXR-006](../../fr-br/UXR-006-kanban-moscow-row-last-modified-utc-stamp.md) | Impl: [E6:S06:T61](../Epic-6/Story-006-feature-requests/T61-uxr-006-kanban-moscow-last-modified-stamps.md)

---

## Overview

This is the **User Experience Research Repository** (UXR Repo) for Epic 7. All User Experience Research reports (UXRs) are tracked as tasks in this repository story, establishing perfect 1:1 traceability between UXR numbers and task numbers.

**Repository Pattern:**
- UXR-001 → E7:S00:T01 (abstract space: v0.7.0.1+0)
- UXR-002 → E7:S00:T02 (abstract space: v0.7.0.2+0)
- UXR-003 → E7:S00:T03 (abstract space: v0.7.0.3+0)
- And so on...

**Bidirectional Traceability:**
- UXR-001 → E7:S00:T01 → v0.7.0.1+0
- E7:S00:T01 → UXR-001
- v0.7.0.1+0 → E7:S00:T01 → UXR-001

---

## Goals

- [x] Repository story created (PERPETUAL)
- [x] Abstract space established (v0.7.0.0+0)
- [x] Traceability pattern documented (UXR-001 = E7:S00:T01)
- [ ] Intake workflow assigns UXRs to S00:Txx (E4:S12:T06)
- [ ] Board display logic omits S00 from epic checklists (E4:S12:T05)

---

## Repository Pattern

### Traceability Mapping

**User Experience Research → Task Mapping:**
- Each UXR gets assigned to the next available task number in this repository story
- UXR-001 = E7:S00:T01
- UXR-002 = E7:S00:T02
- UXR-003 = E7:S00:T03
- Pattern continues indefinitely

**Version Mapping:**
- Repository story: v0.7.0.0+0 (abstract space)
- First UXR: v0.7.0.1+0 (E7:S00:T01)
- Second UXR: v0.7.0.2+0 (E7:S00:T02)
- Third UXR: v0.7.0.3+0 (E7:S00:T03)

**Intake Workflow Integration:**
- When UXR-001 is filed, intake workflow assigns it to E7:S00:T01
- Intake workflow then analyzes UXR-001 content and assigns implementation work to appropriate epic/story
- Traceability bridge: E7:S00:T01 → Implementation work (e.g., E12:S03:T05)

---

## PERPETUAL State

**Status:** IN PROGRESS (PERPETUAL)

**Characteristics:**
- Repository stories never complete
- Excluded from completion analytics
- Omitted from epic checklist displays in board views (UX optimization)
- Still tracked internally in Epic 7 document

**Rationale:**
- Repository stories are containers, not work units
- They grow indefinitely (UXR-001 through UXR-999+)
- Completion is not meaningful for repositories
- Board display omission reduces clutter (100+ tasks in S00)

---

## Board Display

**Note:** This story (E7:S00) is **omitted from epic checklist displays** in board views to reduce clutter. It is still tracked internally in the Epic 7 document.

**Display Rules:**
- Epic 7 Story Checklist: S00 omitted from board views
- Epic 7 document: S00 included in internal Story Checklist
- Kanban board: S00 not shown in Epic 7 section
- Quick view board: S00 not shown in Epic 7 section

---

## Meta-Grouping Support

**Meta-Grouping Pattern:**
- Implementation stories can reference repository tasks for grouping
- Example: E7:S02 "UX Research Findings" → References: E7:S00:T05, T12, T23
- Task numbers only (no UXR numbers in meta-grouping)
- UXR traceability via task if needed

---

## Dependencies

**Related Work:**
- **E4:S12:** FR/BR/UXR Repository Stories (S00 Pattern) - Story that created this repository
- **FR-021:** FR/BR/UXR Repository Stories (S00 Pattern) - Feature request
- **FR-018:** Abstract Space for Zero-Numbered E/S/T Docs - Abstract space concept
- **E2:S11:** Intake Workflow Automation - Intake workflow integration
- **E4:S02:** FR/BR Intake to Tasks - Intake foundation

---

## References

- **Epic 7:** `docs/project-management/kanban/epics/Epic-7/Epic-7.md`
- **E4:S12:** `docs/project-management/kanban/epics/Epic-4/Story-012-fr-br-uxr-repository-stories.md`
- **FR-021:** `docs/project-management/kanban/fr-br/FR-021-fr-br-uxr-repository-stories.md`
- **FR-018:** `docs/project-management/kanban/fr-br/FR-018-abstract-space-zero-numbered-est-docs.md`

---

## Notes

- This repository story is PERPETUAL and will never be marked as COMPLETE
- Tasks in this repository are created automatically by the intake workflow
- Each UXR gets a unique task number (T01, T02, T03, etc.)
- Version numbers follow abstract space pattern (v0.7.0.1+0, v0.7.0.2+0, etc.)
- Board display omission is intentional (UX optimization)


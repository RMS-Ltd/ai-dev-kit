---
lifecycle: evergreen
ttl_days: null
created_at: 2026-01-16T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 6, Story 1: BR Repo (HISTORICAL REGISTRY - DEPRECATED FOR NEW INTAKE)

**Status:** ✅ COMPLETE (HISTORICAL REGISTRY)
**Priority:** HIGH  
**Last updated:** 2026-05-13 (v0.6.1.38+2 — E6:S01:T38 COMPLETE; BR-072 UKW completed-task removal fix resolved)
**Estimated Effort:** N/A (Perpetual repository)  
**Started:** 2026-01-16  
**Completed:** 2026-03-09
**Version:** v0.6.1.38+2
**Code:** E6S01

**Story Type:** Repository (HISTORICAL REGISTRY)  
**Build Warning Suppression:** true  
**Explanation:** This story now serves as a historical BR anchor registry. Under FR-072 Approach D, new intake should not create net-new primary tasks here; use semantic host-story placement and keep this story for legacy traceability.

**Note:** This story was migrated from S00 to S01 as part of the repository story abstract space resolution (E9:S01:T08). S00 is now Epic-level abstract space only.

---

## Task Checklist

> **Migration state:** Historical registry only. Do not add new primary intake tasks here.
> **Traceability:** BR-001 = E6:S01:T01, BR-002 = E6:S01:T02, etc.
> **Abstract Space:** v0.6.1.0+0 (repository story), v0.6.1.1+0 (first BR), v0.6.1.2+0 (second BR), etc.

- [x] **E6:S01:T33 – UKW Board Disorganization** - ✅ COMPLETE (v0.6.1.33+5 – All acceptance criteria met, document checklist sorting utility created) - [Task Document](Story-001-br-repo/T33-ukw-board-disorganization.md) | [BR-033](../../fr-br/BR-033-ukw-board-disorganization.md)
- [x] **E6:S01:T34 – UKW MoSCOW Prioritization Missing** - ✅ COMPLETE (v0.6.1.34+2 – Implementation complete: MoSCOW prioritization logic added to UKW Step 6, all acceptance criteria met) - [Task Document](Story-001-br-repo/T34-ukw-moscow-prioritization-missing.md) | [BR-034](../../fr-br/BR-034-ukw-moscow-prioritization-missing.md)
- [x] **E6:S01:T35 – RW Housekeeping Step Not Working** - COMPLETE (v0.6.1.35+1) - [Task Document](Story-001-br-repo/T35-rw-housekeeping-step-not-working.md) | [BR-035](../../fr-br/BR-035-rw-housekeeping-step-not-working.md)
- [x] **E6:S01:T36 – RW Step 7 Board Update Bugs** - ✅ COMPLETE (v0.5.1.34+2 – Bug fix: Fixed RW Step 7 board update path resolution and MoSCOW section updates) - [Task Document](Story-001-br-repo/T36-rw-step-7-board-update-bugs.md) | [BR-036](../../fr-br/BR-036-rw-step-7-board-update-bugs.md)
- [x] **E6:S01:T37 – Kanban Install Consumer Board Contamination** - ✅ COMPLETE (v0.6.1.37+1 – Contamination detector + remediation tooling implemented; CHANGE IMPLEMENTED, awaiting consumer verification) - [Task Document](Story-001-br-repo/T37-kanban-install-consumer-board-contamination.md) | [BR-037](../../fr-br/BR-037-kanban-install-consumer-board-contamination.md)
- [x] **E6:S01:T38 – UKW completed tasks not removed from kboard (BR-072)** - ✅ COMPLETE (v0.6.1.38+2 — BR-072 RESOLVED; UKW definition restructured: Part A/B separation, explicit archive write step, dedup guard; all ACs satisfied; first live execution confirmed 2026-05-12) - [Task Document](Story-001-br-repo/T38-ukw-completed-tasks-not-removed-from-kboard-br072.md) | [BR-072](../../fr-br/BR-072-ukw-completed-tasks-not-removed-from-kboard.md)

---

## Overview

This is the **Bug Report Repository** (BR Repo) for Epic 6. All Bug Reports (BRs) are tracked as tasks in this repository story, establishing perfect 1:1 traceability between BR numbers and task numbers.

**Repository Pattern:**
- BR-001 → E6:S01:T01 (story-level abstract space: v0.6.1.1+0)
- BR-002 → E6:S01:T02 (story-level abstract space: v0.6.1.2+0)
- BR-003 → E6:S01:T03 (story-level abstract space: v0.6.1.3+0)
- And so on...

**Bidirectional Traceability:**
- BR-001 → E6:S01:T01 → v0.6.1.1+0
- E6:S01:T01 → BR-001
- v0.6.1.1+0 → E6:S01:T01 → BR-001

**Migration Note:**
- This story was migrated from S00 to S01 as part of the repository story abstract space resolution (E9:S01:T08).
- Previous versions used S00 (e.g., BR-033 = E6:S00:T33 = v0.6.0.33+0).
- New versions use S01 (e.g., BR-033 = E6:S01:T33 = v0.6.1.33+0).

---

## Goals

- [x] Repository story created (PERPETUAL)
- [x] Abstract space established (v0.6.1.0+0)
- [x] Traceability pattern documented (BR-001 = E6:S01:T01)
- [x] Migrated from S00 to S01 (E9:S01:T08)
- [ ] Intake workflow assigns BRs to S01:Txx
- [ ] Board display logic omits S01 from epic checklists (UX optimization)

---

## Repository Pattern

### Traceability Mapping

**Bug Report → Task Mapping:**
- Each BR gets assigned to the next available task number in this repository story
- BR-001 = E6:S01:T01
- BR-002 = E6:S01:T02
- BR-003 = E6:S01:T03
- Pattern continues indefinitely

**Version Mapping:**
- Repository story: v0.6.1.0+0 (story-level abstract space)
- First BR: v0.6.1.1+0 (E6:S01:T01)
- Second BR: v0.6.1.2+0 (E6:S01:T02)
- Third BR: v0.6.1.3+0 (E6:S01:T03)

**Intake Workflow Integration:**
- When BR-001 is filed, intake workflow assigns it to E6:S01:T01
- Intake workflow then analyzes BR-001 content and assigns implementation work to appropriate epic/story
- Traceability bridge: E6:S01:T01 → Implementation work (e.g., E12:S03:T05)

---

## PERPETUAL State

**Status:** ✅ COMPLETE

**Characteristics:**
- Repository stories never complete
- Excluded from completion analytics
- Omitted from epic checklist displays in board views (UX optimization)
- Still tracked internally in Epic 6 document

**Rationale:**
- Repository stories are containers, not work units
- They grow indefinitely (BR-001 through BR-999+)
- Completion is not meaningful for repositories
- Board display omission reduces clutter (100+ tasks in S01)

---

## Board Display

**Note:** This story (E6:S01) is **omitted from epic checklist displays** in board views to reduce clutter. It is still tracked internally in the Epic 6 document.

**Display Rules:**
- Epic 6 Story Checklist: S01 omitted from board views
- Epic 6 document: S01 included in internal Story Checklist
- Kanban board: S01 not shown in Epic 6 section
- Quick view board: S01 not shown in Epic 6 section

---

## Meta-Grouping Support

**Meta-Grouping Pattern:**
- Implementation stories can reference repository tasks for grouping
- Example: E6:S02 "Authentication Features" → References: E6:S01:T05, T12, T23
- Task numbers only (no BR numbers in meta-grouping)
- BR traceability via task if needed

---

## Dependencies

**Related Work:**
- **E4:S12:** FR/BR/UXR Repository Stories (S00 Pattern) - Story that created this repository pattern
- **FR-021:** FR/BR/UXR Repository Stories (S00 Pattern) - Feature request
- **FR-018:** Abstract Space for Zero-Numbered E/S/T Docs - Abstract space concept
- **E2:S11:** Intake Workflow Automation - Intake workflow integration
- **E4:S02:** FR/BR Intake to Tasks - Intake foundation
- **E9:S01:T08:** Repository Story Abstract Space Contradiction - Migration that moved this from S00 to S01

---

## References

- **Epic 6:** `docs/project-management/kanban/epics/Epic-6/Epic-6.md`
- **E4:S12:** `docs/project-management/kanban/epics/Epic-4/Story-012-fr-br-uxr-repository-stories.md`
- **FR-021:** `docs/project-management/kanban/fr-br/FR-021-fr-br-uxr-repository-stories.md`
- **FR-018:** `docs/project-management/kanban/fr-br/FR-018-abstract-space-zero-numbered-est-docs.md`
- **E9:S01:T08:** `docs/project-management/kanban/epics/Epic-9/Story-001-rc-readiness-gap-analysis/T08-repository-story-abstract-space-contradiction.md`

---

## Notes

- This repository story is PERPETUAL and will never be marked as COMPLETE
- Tasks in this repository are created automatically by the intake workflow
- Each BR gets a unique task number (T01, T02, T03, etc.)
- Version numbers follow story-level abstract space pattern (v0.6.1.1+0, v0.6.1.2+0, etc.)
- Board display omission is intentional (UX optimization)
- **Migration:** This story was migrated from S00 to S01 as part of repository story abstract space resolution (E9:S01:T08). S00 is now Epic-level abstract space only.

---


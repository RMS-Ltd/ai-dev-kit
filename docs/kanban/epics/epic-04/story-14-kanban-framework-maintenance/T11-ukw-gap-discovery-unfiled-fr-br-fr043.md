---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-29T17:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 4, Story 14, Task 11: UKW gap discovery — TODO tasks and unfiled FR/BR (FR-043)

**Task ID:** E04:S14:T11
**Historical Anchor:** E02:S16:T14  
**Status:** COMPLETE  
**Priority:** HIGH  
**Created:** 2026-05-29  
**Last updated:** 2026-06-24 (**v0.4.14.11+1** — gap scanner shipped; AC1–AC3 satisfied)  
**Version Anchor:** v0.4.14.11+1  
**Code:** E04S14T11

**Upstream:** [FR-043 — UKW gap discovery](../../../fbu/FR-043-ukw-gap-discovery-todo-tasks-and-unfiled-fr-br.md)  
**Historical registry:** [E05:S01:T43](../../epic-05/story-01-fr-repo/T43-ukw-gap-discovery-todo-tasks-and-unfiled-fr-br.md)  
**Coordinates:** [E02:S16:T02 — UKW/kanban perpetual](../../../epic-02/story-16-perpetual-ongoing-workflow-operations/T02-ad-hoc-kanban-synchronization-and-hygiene-perpetual.md)

Publication Status: NOT_APPLICABLE

---

## Input

- [FR-043](../../../fbu/FR-043-ukw-gap-discovery-todo-tasks-and-unfiled-fr-br.md); [E02:S16:T04](T04-ad-hoc-kanban-synchronization-and-hygiene-perpetual.md).
- [IPP-E04S14T11-ukw-gap-discovery-fr043.md](../../../../implementation-cycles/IPP-E04S14T11-ukw-gap-discovery-fr043.md)

---

## Deliverable

Implement and document **UKW Step 2.5** gap discovery: surface TODO/IN PROGRESS tasks missing from **kboard**; present unfiled open FR/BR/UXR for user intention; optional task filing per kanban governance.

## Acceptance criteria

- [x] **AC1:** UKW agent execution guide + YAML describe gap-discovery behaviour.
- [x] **AC2:** At least one UKW run documents gap stats (tasks added, FBUs presented, user decisions).
- [x] **AC3:** **FR-043** linked to this task; **fbuboard** / **intake-open-taskless-queue** maintained.

## References

- [FR-043](../../../fbu/FR-043-ukw-gap-discovery-todo-tasks-and-unfiled-fr-br.md)
- [IPP-E04S14T11-ukw-gap-discovery-fr043.md](../../../../implementation-cycles/IPP-E04S14T11-ukw-gap-discovery-fr043.md)

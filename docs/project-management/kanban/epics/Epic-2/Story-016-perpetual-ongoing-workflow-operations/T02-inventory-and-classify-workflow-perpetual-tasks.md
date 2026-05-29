---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-20T18:20:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 2, Story 16, Task 2: Inventory and classify workflow-related perpetual tasks

**Task ID:** E2:S16:T02  
**Status:** IN PROGRESS  
**Priority:** HIGH  
**Estimated Effort:** Medium  
**Created:** 2026-04-20  
**Last updated:** 2026-04-20 (status moved to IN PROGRESS for RW -d E2:S16:T02 --art)  
**Code:** E2S16T02

**Upstream:** [FR-088 - Dedicated story for perpetual ongoing tasks](../../../fr-br/FR-088-dedicated-story-for-perpetual-ongoing-tasks.md)

---

## Input

- [FR-088](../../../fr-br/FR-088-dedicated-story-for-perpetual-ongoing-tasks.md) requirements.
- Planning baseline from [E2:S16:T01](./T01-establish-canonical-perpetual-ongoing-tasks-story-fr088.md).

---

## Problem statement

Migration cannot be executed safely until all workflow-related perpetual tasks and references are comprehensively inventoried and classified with clear disposition.

---

## Deliverable

- Exhaustive inventory of workflow-related perpetual task anchors.
- Disposition classification for each candidate:
  - `migrate_to_S16`
  - `retain_with_rationale`
  - `deprecate_or_redirect`
- Renumber mapping for each migrated candidate from legacy IDs (including any `T101+`) to Story 016 standard task IDs.
- Reference inventory across story docs, FR/BR/UXR docs, boards, changelog docs, policy, and validator/docs surfaces.

---

## Acceptance criteria

- [ ] **AC1:** Inventory includes all known workflow perpetual anchors and discovered candidates.
- [ ] **AC2:** Each candidate has explicit disposition and rationale.
- [ ] **AC3:** Each migration candidate has explicit old->new task ID mapping, including `T101+` legacy IDs.
- [ ] **AC4:** Reference map identifies all docs/policies/validator surfaces requiring migration edits.
- [ ] **AC5:** Inventory output is linked from T01 and ready for T03 execution.

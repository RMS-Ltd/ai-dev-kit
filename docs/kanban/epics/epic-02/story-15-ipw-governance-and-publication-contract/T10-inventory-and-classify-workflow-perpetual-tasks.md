---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-20T18:20:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 2, Story 16, Task 2: Inventory and classify workflow-related perpetual tasks

**Task ID:** E02:S15:T10
**Historical Anchor:** E02:S16:T02  
**Status:** COMPLETE  
**Priority:** HIGH  
**Estimated Effort:** Medium  
**Created:** 2026-04-20  
**Last updated:** 2026-06-03 (RW **v0.2.16.2+2** — inventory IPP published; T03 3B gate open)  
**Version anchor:** v0.2.16.2+2  
**Code:** E02S15T10

Publication Status: NOT_APPLICABLE
Publication N/A Reason: Consolidated inventory IPP per FR-042; governance artifact only.

**Upstream:** [FR-088 - Dedicated story for perpetual ongoing tasks](../../../fr-br/FR-088-dedicated-story-for-perpetual-ongoing-tasks.md)

---

## Input

- [FR-088](../../../fr-br/FR-088-dedicated-story-for-perpetual-ongoing-tasks.md) requirements.
- Planning baseline from [E02:S16:T01](T01-establish-canonical-perpetual-ongoing-tasks-story-fr088.md).
- **Canonical IPP:** [`IPP-E2S16T2-perpetual-task-inventory.md`](../../../../implementation-cycles/IPP-E2S16T02-perpetual-task-inventory.md)
- **T03 Tranche 3B:** Entry gate satisfied per [IPP-E2S16T3 §7](../../../../implementation-cycles/IPP-E2S16T03-rehouse-workflow-perpetual-tasks.md) (execution remains separate authorization).

**Implementation package:** [IPP-E2S16T2-perpetual-task-inventory.md](../../../../implementation-cycles/IPP-E2S16T02-perpetual-task-inventory.md)

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

- [x] **AC1:** Inventory includes all known workflow perpetual anchors and discovered candidates. *(IPP §2.4: 24 curated rows + discovery script `unique_candidates=65`.)*
- [x] **AC2:** Each candidate has explicit disposition and rationale. *(IPP §2.4 table.)*
- [x] **AC3:** Each migration candidate has explicit old->new task ID mapping, including `T101+` legacy IDs. *(IPP §2.5.)*
- [x] **AC4:** Reference map identifies all docs/policies/validator surfaces requiring migration edits. *(IPP §2.6: ACTIVE_FIX / ARCHIVE_STUB / DEFER + `epic-06/story-007` counts.)*
- [x] **AC5:** Inventory output is linked from T01 and ready for T03 execution. *(T01 AC3; T03 §7 3B gate; this doc ↔ IPP.)*

---

## Verification

| Evidence | Result |
| -------- | ------ |
| `discover_perpetual_task_candidates.py --json` | `marker_count=6`, `unique_candidates=65` |
| `epic-06/story-007` under `docs/` | 167 occurrences, 101 files |
| IPP sections 1–7 | [`IPP-E2S16T2-perpetual-task-inventory.md`](../../../../implementation-cycles/IPP-E2S16T02-perpetual-task-inventory.md) |
| pytest `test_discover_perpetual_task_candidates.py` | 2 passed |

---

## References

- [IPP-E2S16T2-perpetual-task-inventory.md](../../../../implementation-cycles/IPP-E2S16T02-perpetual-task-inventory.md)
- [IPP-E2S16T1-canonical-perpetual-ongoing-tasks-story.md](../../../../implementation-cycles/IPP-E2S16T01-canonical-perpetual-ongoing-tasks-story.md)
- [IPP-E2S16T3-rehouse-workflow-perpetual-tasks.md](../../../../implementation-cycles/IPP-E2S16T03-rehouse-workflow-perpetual-tasks.md)
- [E4S19T03 investigation report](../../../../implementation-cycles/E4S19T03-e6s07-default-housing-investigation-report.md)

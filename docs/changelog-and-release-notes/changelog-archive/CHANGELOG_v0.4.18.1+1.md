---
lifecycle: evergreen
ttl_days: null
created_at: 2026-01-20T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Changelog: v0.4.18.1+1

**Release Date:** 2026-01-20 00:00:00 UTC  
**Epic:** E4 – Kanban Framework  
**Story:** E4:S18 – Kanban Board Info-Only Split  
**Task:** E4:S18:T01 – Implement Kanban Board Info-Only Split

---

## Summary

Split the Kanban board into two documents: structured information only (`kanban-board.md`) and rules/explanations (`kanban-board-guide.md`). This reduces cognitive load when skimming the board by removing all non-informational content.

---

## Changes

### Kanban Framework

- **Created `kanban-board-guide.md`** - New sister document containing all rules, explanations, and how-to content:
  - Overview and structure explanations
  - MoSCOW category definitions
  - Parent-child relationship documentation
  - "How to Add Work" section
  - Quick Reference section
  - All rules and explanatory content

- **Updated `kanban-board.md`** - Stripped to structured information only:
  - Removed Overview section (moved to guide)
  - Removed MoSCOW category definitions (moved to guide)
  - Removed parent-child relationship explanations (moved to guide)
  - Removed italicized explanatory text under section headers (moved to guide)
  - Removed "How to Add Work" section (moved to guide)
  - Removed Quick Reference section (moved to guide)
  - Kept only: MoSCOW task lists, Epic sections with status/priority/stories/links
  - Added brief header with link to guide doc

- **Updated `_index.md`** - Updated to reference both board documents (structured info and guide)

- **Updated Epic 4** - Added Story 18 to Epic checklist

### Feature Request

- **FR-036** - Kanban Board Info-Only Split (ACCEPTED, implemented)

---

## Related Work

- **FR-036:** [`docs/project-management/kanban/fr-br/FR-036-kanban-board-info-only-split.md`](../../project-management/kanban/fr-br/FR-036-kanban-board-info-only-split.md)
- **E4:S18:** [`docs/project-management/kanban/epics/Epic-4/Story-018-kanban-board-info-only-split.md`](../../project-management/kanban/epics/Epic-4/Story-018-kanban-board-info-only-split.md)
- **E4:S18:T01:** [`docs/project-management/kanban/epics/Epic-4/Story-018-kanban-board-info-only-split/T1-implement-kanban-board-info-only-split.md`](../../project-management/kanban/epics/Epic-4/Story-018-kanban-board-info-only-split/T1-implement-kanban-board-info-only-split.md)

---

## Impact

- **Usability:** Board is optimized for quick scanning (information only)
- **Maintainability:** Rules/explanations centralized in guide doc
- **Consistency:** Split pattern can be applied to other board views if beneficial

---

## Notes

- Board split improves usability by reducing cognitive load
- Users can quickly scan structured information without filtering out explanatory text
- Rules/explanations remain accessible in the guide document when needed

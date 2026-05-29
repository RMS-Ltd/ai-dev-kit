---
lifecycle: evergreen
ttl_days: null
created_at: 2026-01-20T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Story 018 – Kanban Board Info-Only Split

**Status:** COMPLETE ✅  
**Priority:** HIGH  
**Estimated Effort:** [TBD]  
**Created:** 2026-01-20  
**Last updated:** 2026-03-09 (RW: E4:S18:T01+2 – Four-way split complete: added kanban-completed.md for historical task tracking, updated all cross-references, system ready for production)  
**Version:** v0.4.18.1+2  
**Code:** E4S18

---

## Task Checklist

- [x] **E4:S18:T01 – Implement Kanban Board Info-Only Split** - ✅ COMPLETE (v0.4.18.1+1)
  - Task Doc: [`T1-implement-kanban-board-info-only-split.md`](Story-018-kanban-board-info-only-split/T1-implement-kanban-board-info-only-split.md)

- [x] **E4:S18:T02 – Upgrade Packaged Kanban Framework Board Split** - ✅ COMPLETE (v0.4.18.2+1)
  - Task Doc: [`T2-upgrade-packaged-kanban-framework-board-split.md`](Story-018-kanban-board-info-only-split/T2-upgrade-packaged-kanban-framework-board-split.md)


---

## Overview

Split the Kanban board into two documents: structured information only (`kboard.md`) and rules/explanations (`kanban-board-guide.md`). This reduces cognitive load when skimming the board by removing all non-informational content.

---

## Goals

- [x] Create `kanban-board-guide.md` with all rules, explanations, and how-to content
- [x] Strip `kboard.md` to structured information only (tasks, epics, status, links)
- [x] Add cross-references between documents
- [x] Update templates and governance policy to reflect the split (T02)

---

## Implementation Notes

- The three-way split reduces cognitive load while maintaining comprehensive project management
- Each document serves a specific purpose: tasks (MoSCOW), structure (hierarchy), rules (guidance)
- Cross-references between documents ensure navigation and context preservation
- Framework templates updated to generate three-way split for new installations

---

## Tasks

### E4:S18:T01 – Implement Kanban Board Info-Only Split

**Input:** Current `kboard.md`, FR-036 requirements  
**Deliverable:** Split board documents, updated templates, updated policy  
**Approach:** Create guide doc, migrate explanatory content, strip board to info-only, update references

---

## Acceptance Criteria

- [ ] `kboard.md` contains ONLY structured information (no explanatory text)
- [ ] `kanban-board-guide.md` contains all rules, explanations, and how-to content
- [ ] Cross-references between documents are clear
- [ ] Templates and policy updated to reflect split

---

## Dependencies

**Related Work:**
- **FR-036:** Kanban Board Info-Only Split
- **E4:S13:** Kanban Board Enhancement - MoSCOW Prioritized Task View (board structure foundation)

---

## References

- **FR-036:** [`docs/project-management/kanban/fr-br/FR-036-kanban-board-info-only-split.md`](../../fr-br/FR-036-kanban-board-info-only-split.md)
- **Current Board:** `docs/project-management/kanban/kboard.md`
- **Board Template:** `packages/frameworks/kanban/templates/KANBAN_BOARD_TEMPLATE.md`

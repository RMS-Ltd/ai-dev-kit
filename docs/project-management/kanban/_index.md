---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T12:02:50Z
expires_at: null
housekeeping_policy: keep
---

# AI Dev Kit – Kanban Board (Quick View)

**Last Updated:** 2025-12-18  
**Version:** v0.6.6.7+6

**Note:** Epics 1, 3 are COMPLETE ✅. Epics 2, 4, 5, 6, 7, 8, 21 are IN PROGRESS or TODO. *(Epic 24 book work: private `RMS-Ltd/hf-ai-dev-kit` — see ADR-006.)*

---

## Overview

Quick reference board for all Kanban work. For detailed views, see:

- [`kboard.md`](kboard.md) (MoSCOW prioritized tasks)
- [`kanban-structure.md`](kanban-structure.md) (Epic/Story/Task structure)
- [`kanban-board-guide.md`](kanban-board-guide.md) (rules and explanations)

**Structure:** All Kanban docs live under `docs/project-management/kanban/`:

- Epic overviews: `epics/Epic-X/Epic-X.md`
- Story documents: `epics/Epic-X/Story-XXX-*.md`
- Board views: This file (quick), kboard.md (tasks), kanban-structure.md (epics), and kanban-board-guide.md (guide)

---

## Epics Summary

| Epic | Title                              | Status         | Stories | Progress |
|------|------------------------------------|----------------|---------|----------|
| 1    | AI Dev Kit Core                    | COMPLETE ✅     | 3       | 3/3      |
| 2    | Workflow Management Framework      | IN PROGRESS    | 11      | 7/11     |
| 3    | Numbering & Versioning Framework   | COMPLETE ✅     | 3       | 3/3      |
| 4    | Kanban Framework                   | IN PROGRESS    | 13      | 10/13    |
| 5    | Documentation Management          | IN PROGRESS    | 3       | 1/3      |
| 6    | Framework Management               | COMPLETE ✅     | 3       | 3/3      |
| 7    | Codebase Maintenance and Review    | IN PROGRESS    | 5       | 0/5      |
| 8    | Tooling & Automation               | TODO           | 3       | 0/3      |
| 21   | Internationalization and Localization | TODO        | 4       | 0/4      |

**Epic Docs:**

- [`epics/Epic-1/Epic-1.md`](epics/Epic-1/Epic-1.md)
- [`epics/Epic-2/Epic-2.md`](epics/Epic-2/Epic-2.md)
- [`epics/Epic-3/Epic-3.md`](epics/Epic-3/Epic-3.md)
- [`epics/Epic-4/Epic-4.md`](epics/Epic-4/Epic-4.md)
- [`epics/Epic-5/Epic-5.md`](epics/Epic-5/Epic-5.md)
- [`epics/Epic-6/Epic-6.md`](epics/Epic-6/Epic-6.md)
- [`epics/Epic-7/Epic-7.md`](epics/Epic-7/Epic-7.md)
- [`epics/Epic-8/Epic-8.md`](epics/Epic-8/Epic-8.md)
- [`epics/Epic-21/Epic-21.md`](epics/Epic-21/Epic-21.md)

---

## How to Add Work

1. **Create Epic** (if needed):
   - Create `epics/Epic-X/` directory
   - Add `epics/Epic-X/Epic-X.md` (Epic overview)
   - Update this board (`_index.md`), `kboard.md`, and `kanban-structure.md`

2. **Create Story**:
   - Add `epics/Epic-X/Story-XXX-short-slug.md`
   - Update Epic doc (`epics/Epic-X/Epic-X.md`) with Story reference
   - Update this board (`_index.md`), `kboard.md`, and `kanban-structure.md`

3. **Track Progress**:
   - Update Story status in Story doc
   - Update Epic doc with version markers as work completes
   - Update board views as needed

See [`README.md`](README.md) for full structure details and `docs/project-management/rituals/policy/kanban-governance-policy.md` for governance.

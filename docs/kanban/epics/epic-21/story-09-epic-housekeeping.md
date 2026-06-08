---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-08T10:30:00Z
expires_at: null
housekeeping_policy: keep
---

# Story 09 – Epic Housekeeping (admin / kanban / intake)

**Status:** IN PROGRESS  
**Priority:** MEDIUM  
**Estimated Effort:** Small  
**Created:** 2026-06-08  
**Last updated:** 2026-06-08 (v0.21.9.2+2 — T02 bootstrap open-work refresh)  
**Version:** v0.21.9.2+2  
**Code:** E21S09

---

## Overview

Administrative reconciliation for Epic 21 after S01–S02 and S08 Layer 0–1 shipped: intake doc headers, kanban board visibility for deferred work, and legacy story-folder cleanup from S00→S01 renumber waves.

---

## Task Checklist

- [x] **E21:S09:T01 – FR-006 Phase 2 header and status reconciliation** - COMPLETE (2026-06-08 — UKW housekeeping)
  - Task: [`T01-fr006-phase2-header-and-status-reconciliation`](story-09-epic-housekeeping/T01-fr006-phase2-header-and-status-reconciliation.md)
- [x] **E21:S09:T02 – Legacy epic-21 story folder rationalization** - COMPLETE (v0.21.9.2+2)
  - Task: [`T02-legacy-story-folder-rationalization`](story-09-epic-housekeeping/T02-legacy-story-folder-rationalization.md)

---

## Acceptance Criteria

- [x] FR-006 reflects S01 + S02 shipped tasks; status IN PROGRESS (translation phase open)
- [x] Remaining Epic 21 work visible on `kboard.md` (S03+, S08 deferred, S09 admin)
- [x] Legacy story directories archived or redirected without breaking canonical links (T02 @ v0.21.9.2+1)

---

## References

- [FR-006](../../fr-br/FR-006-localization-language-selection-uk-us-english.md)
- [Epic 21](Epic-21.md)
- [kboard.md](../../kboard.md)

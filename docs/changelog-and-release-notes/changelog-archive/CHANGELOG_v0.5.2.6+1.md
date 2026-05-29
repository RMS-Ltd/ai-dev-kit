---
lifecycle: evergreen
ttl_days: null
created_at: 2026-03-25T13:19:05Z
expires_at: null
housekeeping_policy: keep
---

# Release v0.5.2.6+1

**Release Date:** 2026-03-25 13:19:05 UTC  
**Epic:** Epic 5 - Documentation Management and Maintenance  
**Story:** Story 2 - Documentation Maintenance Framework  
**Task:** Task 6 - CMW Epic 5 execution context (FR-063 intake)  
**Build:** 1

---

## Summary

**E5:S02:T06 / FR-063 (intake phase):** Filed [FR-063](../../project-management/kanban/fr-br/FR-063-cmw-epic-5-execution-context.md) to require **Epic 5 branch/version context** for standalone CMW; created discrete task **[E5:S02:T06](../../project-management/kanban/epics/Epic-5/Story-002/T006-cmw-epic-5-execution-context-fr-063.md)** under `Story-002/`; updated prioritization board and Epic 5 story checklist. **CMW** (`latest_only`) run on `epic/5-documentation-management`: main `CHANGELOG.md` reduced to latest entry; bulk history appended to `CHANGELOG_ARCHIVE.md`. **FR-063 implementation** (script enforcement, full doc updates) remains open per FR requirements.

---

## Changes

### Added

- `docs/project-management/kanban/fr-br/FR-063-cmw-epic-5-execution-context.md`
- `docs/project-management/kanban/epics/Epic-5/Story-002/T006-cmw-epic-5-execution-context-fr-063.md`

### Changed

- `CHANGELOG.md`, `docs/changelog-and-release-notes/changelog-archive/CHANGELOG_ARCHIVE.md` (CMW)
- `docs/project-management/kanban/epics/Epic-5/Epic-5.md`, `Story-002-documentation-maintenance-framework.md`, `fr-br-uxr-board.md`
- `src/fynd_deals/version.py` — `0.5.2.6+1`

### References

- FR-063, `cmw.py`, `validate_branch_context.py`

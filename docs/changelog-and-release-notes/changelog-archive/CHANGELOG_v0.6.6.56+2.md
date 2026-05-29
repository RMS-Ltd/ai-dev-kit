---
lifecycle: evergreen
ttl_days: null
created_at: 2026-03-20T16:45:00Z
expires_at: null
housekeeping_policy: keep
---

# Release v0.6.6.56+2

**Release Date:** 2026-03-20 16:45:00 UTC  
**Epic:** Epic 6 - Framework Management and Maintenance  
**Story:** Story 6 - Feature Requests  
**Task:** Task 56 - RW Ambiguous Task Identifier Typo Risk (BR-056)  
**Build:** 2

---

## Summary

RW **-k** (kanban init) for **E6:S06:T56**: version markers and main changelog alignment; MoSCOW line corrected to TODO; `validate_version_bump.py` accepts in-progress tasks when the Story checklist has no `[x] ✅ COMPLETE` rows (tasks below T100).

---

## Changes

### Changed
- **Kanban:** Story 6, Epic 6, board metadata for v0.6.6.56+2; MoSCOW entry for T56 set to TODO (init script had marked COMPLETE); Epic 6 Story 6 task summary lists T56
- **CHANGELOG.md:** Restored v0.6.6.56+1 archive text (immutable +1 release); added v0.6.6.56+2 main entry
- **validate_version_bump.py:** `get_completed_task` returns `version_task` when Story has no completed checklist rows (RW -k / in-progress validation)

---

**Task:** E6:S06:T56 | **BR:** [BR-056](docs/project-management/kanban/fr-br/BR-056-rw-ambiguous-task-identifier-typo-risk.md)

---

_Keep a Changelog style._

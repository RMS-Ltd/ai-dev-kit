# Changelog v0.8.3.22+2

**Release Date:** 2026-06-15 20:43:55 UTC  
**Epic:** 8 | **Story:** 3 | **Task:** 22  
**SemVer:** v0.4.1180+2

---

## Summary

E08:S03:T22 follow-on — eliminate the last `datetime.utcnow()` DeprecationWarning from `update_kanban_docs.py` four-surface board/report stamps (UXR-030 Wave 2).

---

## Change implemented

### Workflow scripts

- Added `_board_stamp_utc()` in [`update_kanban_docs.py`](../../../packages/frameworks/workflow-mgt/scripts/update_kanban_docs.py); replaced both `utcnow()` call sites with `datetime.now(timezone.utc)` (BR-081 pattern).
- Greenfield install mirror synced per FR-110.

### Intake / Kanban

- Extended E08:S03:T22 scope (AC5); UXR-030 Wave 2 Finding 6; MWF delivery follow-on BUILD.

---

## Related

- [UXR-030 Wave 2](../../../kanban/fr-br/UXR-030-default-pytest-cli-coverage-misleading-zero-percent.md)
- [E08:S03:T22](../../../kanban/epics/epic-08/story-03-automation-scripts/T22-pytest-warning-cleanup-uxr030-wave2.md)
- [BR-081](../../../kanban/fr-br/BR-081-kanban-install-datetime-utcnow-deprecated.md)

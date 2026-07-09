# Changelog v0.4.14.13+1

**Release Date:** 2026-07-09 13:09:00 UTC  
**Epic:** 4 | **Story:** 14 | **Task:** 13  
**SemVer:** v0.4.1247 (task-touch; finalized at tag)

---

## Summary

RW Step 7 scoped terminal archival (BR-113 / GitHub #89): terminal released tasks upsert the completed ledger and prune from active `kboard.md` in the same RW run — without follow-on `UKW -c`.

---

## Change implemented

### Framework

- Added `scoped_archive_rw_release.py` — scoped ledger upsert + kboard prune for released E:S:T
- Added `validate_rw_scoped_terminal_archival.py` — Step 9 blocking gate (BR-113)
- Integrated scoped archival into `update_kanban_docs.py` RW Step 7 path (replaces FR-102 advisory-only for release task)
- `kanban_completed.ledger.get_completed_task()` for validator lookups

### Documentation

- RW Step 7 five-surface contract: scoped terminal archival (release-workflow-agent-execution.md)
- UKW guide: distinguish batch `UKW -c` vs `rw_step_7` scoped archival
- `.cursorrules` Step 9: `validate_rw_scoped_terminal_archival.py --strict`

### Tests

- `test_scoped_archive_rw_release.py` — terminal archive+prune, perpetual/WAITING skip rules

---

## References

- [BR-113](../../kanban/fbu/BR-113-rw-step7-scoped-terminal-archival-missing.md)
- [GitHub #89](https://github.com/RMS-Ltd/ai-dev-kit/issues/89)
- [IPP-E04S14T13](../../implementation-cycles/IPP-E04S14T13-rw-step7-scoped-terminal-archival-br113.md)

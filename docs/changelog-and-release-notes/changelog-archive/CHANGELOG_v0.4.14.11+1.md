# Release v0.4.14.11+1 — UKW Step 2.5 gap discovery (FR-043)

**Release Date:** 2026-06-24 14:30:00 UTC  
**Internal Version:** v0.4.14.11+1  
**SemVer:** v0.4.1222+1  
**Epic:** 4 | **Story:** 14 | **Task:** 11

---

## Summary

E04:S14:T11 — **Change implemented:** deterministic UKW Step 2.5 gap-discovery scanner (`discover_board_gaps.py`), workflow YAML/config wiring, tests, and maintainer gap-stats report for FR-043.

---

## Changed

### UKW gap discovery (FR-043 / E04:S14:T11)

- Added `discover_board_gaps.py` — Part (a) active task docs missing from `kboard.md`; Part (b) open FBU without resolvable implementing task.
- Inserted `step-2-5` in `update-kanban-workflow.yaml`; extended `ukw-config.yaml` gap_discovery block.
- Updated `.claude/commands/ukw.md` Step 2.5 script invocation.
- Gap stats snapshot: `docs/knowledge/analysis/ukw-gap-discovery-stats-e04s14t11.md` (185 missing tasks, 56 taskless FBU at scan time).
- IPP: `docs/implementation-cycles/IPP-E04S14T11-ukw-gap-discovery-fr043.md`.
- Greenfield mirror synced.

---

## References

- [FR-043](../../kanban/fbu/FR-043-ukw-gap-discovery-todo-tasks-and-unfiled-fr-br.md)
- [IPP-E04S14T11](../../implementation-cycles/IPP-E04S14T11-ukw-gap-discovery-fr043.md)

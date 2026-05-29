# Detailed Changelog — v0.2.1.11+2

**Release Date:** 2026-04-10 08:52:09 UTC  
**Version:** `v0.2.1.11+2`  
**SemVer:** `v0.4.724+2`  
**Task Anchor:** `E2:S01:T11` (`--art` adoption)

---

## Summary

Change implemented: expanded BR-062 coverage from `RW -k` only to all RW Step 7 modes, so active kboard MoSCOW sections deterministically prune completed task rows.

---

## Changed

- Updated BR-062 and `E2:S01:T11` docs to capture full RW Step 7 scope.
- Updated `update_kanban_docs.py` to prune COMPLETE rows from active kboard MoSCOW sections in full mode and `kanban_init`.
- Added regression test coverage: full-mode pruning test in `test_update_kanban_docs.py`.
- Synced kanban board and FR/BR board traces to the release anchor.

---

## Verification

- `python packages/frameworks/workflow mgt/scripts/test_update_kanban_docs.py --test-category 4` (all edge tests passed)
- Manual updater run reported `Pruned COMPLETE rows from active kboard MoSCOW sections`

---

## Traceability

- Epic: `2`
- Story: `1`
- Task: `11`
- BR: [BR-062](../../project-management/kanban/fr-br/BR-062-rw-k-kanban-init-does-not-prune-completed-tasks-from-kboard.md)

# Changelog – v0.6.1.38+2

**Release date:** 2026-05-13 00:00:00 UTC  
**Version:** `0.6.1.38+2`  
**SemVer:** `v0.4.773+2`  
**Task anchor:** E6:S01:T38 (adopted via `--art`)  
**Variant:** `RW -k` (kanban-init / kanban reconciliation)  
**Branch:** `dev`

---

## Summary

Kanban reconciliation release for E6:S01:T38 (BR-072). All four kanban surfaces updated to reflect the completed investigation and fix for the UKW completed-task removal defect. BR-072 RESOLVED; E6:S01:T38 archived to `kanban-completed.md`.

---

## Changes

### Kanban Reconciliation (Step 7)

- **`kboard.md`** — Removed E6:S01:T38 from "Should Have" active section; header updated to `v0.6.1.38+2`.
- **`kanban-completed.md`** — E6:S01:T38 archived with full BR-072 resolution summary.
- **`fbuboard.md`** — BR-072 updated from `OPEN` to `RESOLVED (v0.6.1.38+2)`.
- **`T38 task doc`** — Version anchor updated from `v0.6.1.38+1` to `v0.6.1.38+2`.
- **`BR-072 doc`** — Status updated to `RESOLVED`; all 6 ACs marked complete.

### Version Bump (Step 2)

- `version.py`: `0.2.1.19+1` → `0.6.1.38+2` (via `--art` adoption of E6:S01:T38)

---

## Task: E6:S01:T38

**Title:** UKW completed tasks not removed from kboard (BR-072)  
**Status:** COMPLETE (all ACs satisfied; first live execution confirmed 2026-05-12)  
**Fix summary:** UKW definition restructured — Part A/B separation of completed-task removal from MoSCOW classification; explicit `kanban-completed.md` archive write step added; cross-section deduplication guard added. Root cause: removal clause was a subordinate clause within MoSCOW step and was not being acted on.

---

## Related

- [BR-072](../../../docs/project-management/kanban/fr-br/BR-072-ukw-completed-tasks-not-removed-from-kboard.md)
- [T38 task doc](../../../docs/project-management/kanban/epics/Epic-6/Story-001-br-repo/T38-ukw-completed-tasks-not-removed-from-kboard-br072.md)
- [IPP-E6S01T38](../../../docs/implementation-cycles/IPP-E6S01T38-ukw-completed-task-removal-defect.md)

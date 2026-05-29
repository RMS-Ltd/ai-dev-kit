# Detailed Changelog: v0.7.1.9+1

**Release Date:** 2026-03-31 13:17:03 UTC  
**Internal version:** 0.7.1.9+1  
**SemVer (task_touch):** 0.4.631+1  
**Epic / Story / Task:** E7:S01:T09 (`RW -k` kanban init anchor)

## Summary

`RW -k` kanban documentation setup for **E7:S01:T09** (Kanban Template Governance & **UXR-005**), plus intake hygiene: **UXR-001 / UXR-002 / UXR-005** registry tasks **E7:S00:T01**, **T02**, **T05** under [`Story-000-uxr-repo`](../../project-management/kanban/epics/Epic-7/Story-000-uxr-repo.md); **`fr-br-uxr-board`** and UXR markdown intake sections updated; **E7:S01:T09** ↔ **E7:S00:T05** cross-links. Restored **`validate_rw_task_complete.py`** on this branch (from **`epic/6-framework-management`**) so FR-060 RW guards can run here.

## Changed

- `docs/project-management/kanban/epics/Epic-7/Story-000-uxr-repo/` — new T01, T02, T05 task docs; story checklist
- `docs/project-management/kanban/epics/Epic-7/Story-001-codebase-maintenance-tasks/E07S01T09-kanban-template-governance.md` — **Task ID**, registry link, version marker
- `docs/project-management/kanban/fr-br-uxr-board.md` — UXR links + metadata (merge with **epic/7**)
- `docs/project-management/kanban/fr-br/UXR-001*.md`, `UXR-002*.md`, `UXR-005*.md` — intake / kanban links
- `packages/frameworks/workflow mgt/scripts/validation/validate_rw_task_complete.py` — restored (branch parity)

## Notes

- Prior `version.py` on **epic/7-documentation-maintenance** was **E7:S06:T09+1**; this release intentionally anchors **E7:S01:T09** per **`RW -k`** trigger (`validate_rw_task_intent.py --mode rw-k`).

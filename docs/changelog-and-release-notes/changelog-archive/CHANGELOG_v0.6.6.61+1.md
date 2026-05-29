# Changelog v0.6.6.61+1

**Release Date:** 2026-04-02 15:05:37 UTC  
**Epic:** 6 | **Story:** 6 | **Task:** 61  
**Task doc:** [T61-uxr-006-kanban-moscow-last-modified-stamps.md](../../../project-management/kanban/epics/Epic-6/Story-006-feature-requests/T61-uxr-006-kanban-moscow-last-modified-stamps.md)  
**Associated UXR:** [UXR-006](../../../project-management/kanban/fr-br/UXR-006-kanban-moscow-row-last-modified-utc-stamp.md)

## Summary

**RW E6:S06:T61:** Change implemented — **UXR-006** formal intake (**KG-R2**): registry **E7:S00:T06**, implementation **E6:S06:T61**; MoSCOW rows on **`kanban-board.md`** and **`fr-br-uxr-board.md`** carry trailing `| Last modified: YYYY-MM-DD HH:MM UTC`; **`kanban-board-guide.md`** documents the convention; board **Notes** updated. **Intent guard** used **`--confirmed-override`** because `version.py` still pointed at **T57** before this bump (explicit `RW E6:S06:T61`).

## Changes

- **New:** `UXR-006-kanban-moscow-row-last-modified-utc-stamp.md`; **E7:S00:T06** repository anchor; **T61** implementation task.
- **Kanban:** Story **E6:S06** / **E7:S00** checklists; **Epic-6** / boards / **T61** / **UXR-006** version and `Last modified` rows aligned with **`v0.6.6.61+1`**.

## Verification

- `validate_branch_context.py --strict`; `validate_rw_task_complete.py` / `validate_rw_task_intent.py --confirmed-override` for **E6:S06:T61** before version bump.
- Post-edit: `validate_changelog_format.py`, `validate_version_bump.py`, `check_changelog_size.py`.

## SemVer note

Outward SemVer (task_touch): **`v0.4.702+1`** for internal **`v0.6.6.61+1`**.

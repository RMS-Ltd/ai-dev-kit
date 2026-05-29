# Detailed Changelog: v0.6.7.101+38

**Release Date:** 2026-03-31 12:53:22 UTC  
**Internal version:** 0.6.7.101+38  
**SemVer (task_touch):** 0.4.625+38  
**Epic / Story / Task:** E2:S16:T03 (perpetual UKW)

## Summary

Release after **Update Kanban Workflow (UKW)** work: **`kanban-board.md`** MoSCOW reconciled with **`Story-001-fr-repo`** (BR-059 coverage), **FR-060/FR-061** ID hygiene notes, checklist fixes (**T47** narrative), **`sort_kanban_document_checklists`** on the FR repo story. Added canonical **Task ID:** `E2:S16:T03` line on **T101** so **`validate_rw_task_complete.py`** (FR-060) can locate the perpetual UKW task document.

## Changed

- `docs/project-management/kanban/kanban-board.md` — E5:S01 Should/Could rows; **T38** aligned to **FR-038**; **FR-060** / **FR-061** hygiene rows; perpetual **T101** last-updated
- `docs/project-management/kanban/epics/Epic-5/Story-001-fr-repo.md` — UKW metadata; **T47** = COMPLETE text; sorted checklist
- `docs/project-management/kanban/epics/Epic-5/Story-001-fr-repo/T40-implementation-cycle-workflow-icw.md` — FR-040 ICW traceability (staged with kanban tree)
- `docs/project-management/kanban/fr-br-uxr-board.md` — FR-040 link row (staged)
- `docs/project-management/kanban/fr-br/FR-040-implementation-cycle-workflow-icw.md` — task cross-link (staged)
- `docs/project-management/kanban/epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management/T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md` — **Task ID:** header; progress/version markers for this release

## Notes

- **`validate_rw_task_intent.py`** required **`--confirmed-override`** because prior **`version.py`** was **T109** while this release attributes **T101** (explicit user **`RW E2:S16:T03`**).

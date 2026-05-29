# Changelog v0.4.13.7+1

**Release Date:** 2026-05-20 22:15:00 UTC  
**Epic | Story | Task:** E4:S13:T07  
**SemVer (task_touch):** v0.4.796+1  

## Summary

MoSCOW state icons (**UXR-012**): Set A emoji on all active `kboard.md` / `fbuboard.md` rows; `state_icons.py`; stamp-neutral `backfill_board_state_icons.py`; **`validate_kanban_state_icons.py`** and Release Readiness **Gate 9**; canonical pipeline `state_icons` step + post-`update_kanban_board` reconcile; governance and UKW/RW docs updated.

## Change implemented

- **New:** `packages/frameworks/workflow mgt/scripts/kanban/state_icons.py` — mapping, alias normalization, inject/apply helpers (FR-097-safe: no stamp rewrite on icon-only pass).
- **New:** `backfill_board_state_icons.py` — corpus backfill; report `four-surface-reports/uxr012-icon-backfill-applied.json`.
- **New:** `validation/validate_kanban_state_icons.py`; **Gate 9** in `validate_release_readiness.py`.
- **New:** `test_state_icons.py`.
- **Updated:** `update_kanban_docs.py` — `state_icons` pipeline step; final icon pass after kboard MoSCOW updates.
- **Docs:** `kanban-board-guide.md`, `kanban-governance-policy.md`, `update-kanban-workflow-agent-execution.md`, `release-workflow-agent-execution.md`, `board-stamp-authority.md`, `state-icons.md`, **IPP-E4S13T07**, T07, UXR-012 AC closure.

## Verification

- `python3 packages/frameworks/workflow mgt/scripts/test_state_icons.py`
- `python3 .../validate_kanban_state_icons.py --project-root . --strict`
- Gate 9-only `run_release_readiness(..., selected_gates=[9])` PASS post-backfill.

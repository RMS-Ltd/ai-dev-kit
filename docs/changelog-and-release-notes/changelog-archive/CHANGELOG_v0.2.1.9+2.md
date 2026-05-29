# Changelog v0.2.1.9+2

**Release Date:** 2026-04-07 11:56:26 UTC  
**Epic:** 2 | **Story:** 1 | **Task:** 9  
**Task doc:** [T09-rw-allow-in-progress-task-releases-br060.md](../../../project-management/kanban/epics/Epic-2/Story-001-rw-agent-execution-and-docs/T09-rw-allow-in-progress-task-releases-br060.md)  
**Associated BR:** [BR-060](../../../project-management/kanban/fr-br/BR-060-rw-in-progress-task-gate-blocks-build-releases.md); [BR-061](../../../project-management/kanban/fr-br/BR-061-rw-explicit-task-id-requires-manual-version-alignment.md)

## Summary

**E2:S01:T09+2 (RW):** Re-implemented board terminal timestamp governance and enforcement. Policy/docs now require a human-readable terminal pipe-delimited timestamp on active board rows, validators enforce compliance, and RW/UKW board updates auto-normalize both active boards.

## Changes

### Policy and docs

- Updated framework Kanban governance policy to require terminal row field: `| Last modified: YYYY-MM-DD HH:MM UTC`.
- Updated project Kanban board guide with explicit required-row timestamp section.

### Workflow/process enforcement

- Extended `validate_kanban_governance_policy.py` with R06 policy check and board row compliance checks for `kanban-board.md` and `fr-br-uxr-board.md`.
- Updated `update_kanban_docs.py` to enforce terminal timestamps on both active boards during RW board updates.
- Added `normalize_board_row_timestamps.py` for deterministic normalization and backfill.
- Updated release/kanban workflow YAMLs to include timestamp normalization config awareness.

### Board normalization

- Normalized active MoSCOW rows in both `kanban-board.md` and `fr-br-uxr-board.md` to terminal UTC timestamp format.

## SemVer

- **Internal:** `v0.2.1.9+2`  
- **SemVer (task_touch):** `v0.4.623+2`

## Verification

- `validate_branch_context.py --strict` — pass.
- `validate_rw_task_intent.py --requested E2:S01:T09` — pass.
- `validate_kanban_governance_policy.py --strict` — pass.
- `update_kanban_docs.py --dry-run` — shows terminal timestamp enforcement on both boards.

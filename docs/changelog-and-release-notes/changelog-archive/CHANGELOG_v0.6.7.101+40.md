# Detailed Changelog — v0.6.7.101+40

**Release Date:** 2026-04-07 16:29:41 UTC  
**SemVer:** v0.4.638+40  
**Epic:** 6  
**Story:** 7  
**Task:** 101  
**Type:** UKW perpetual — FR/BR/UXR board sync + intent/branch guard hardening

## Summary

Perpetual **UKW** release: bring [`fr-br-uxr-board.md`](../../../project-management/kanban/fr-br-uxr-board.md) in line with open FR/BR/UXR documents (backfill missing rows). Adds **full-mode `RW … --art`** support for perpetual tasks and relaxes **`dev` strict-equal-epic** validation when `version.py` anchors a perpetual maintenance task, so UKW-style releases from `dev` remain valid.

## Changes Implemented

### Kanban / intake visibility

- Synced open FR/BR/UXR items that were missing from the prioritization board (backlog block + header metadata).

### Workflow validation

- `validate_rw_task_intent.py`: `--art` in **full** mode adopts **perpetual** tasks (explicit cross-epic anchor from `dev`).
- `validate_branch_context.py`: on branch **`dev`**, allow version epic ≠ `dev_branch_epic` when the version’s task document is perpetual maintenance; same rule for staged CHANGELOG epic check.
- Tests extended for full-mode `--art` perpetual vs non-perpetual.

## Validation Notes

- `validate_branch_context.py --strict` and `validate_rw_task_intent.py --requested E2:S16:T03 --art` exercised during release prep.

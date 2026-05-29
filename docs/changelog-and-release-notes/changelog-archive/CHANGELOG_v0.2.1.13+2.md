# Detailed Changelog — v0.2.1.13+2

**Release Date:** 2026-04-07 15:52:33 UTC  
**SemVer:** v0.4.637+2  
**Epic:** 2  
**Story:** 1  
**Task:** 13  
**Type:** BR-063 implementation ship (validators, tests, docs)

## Summary

Ships the runtime hardening for **BR-063**: `RW -k` task intent guard, `--art` reconciliation, aligned `validate_version_bump.py` checks, orchestration/trigger parsing updates, and regression tests.

## Changes Implemented

### Workflow validation and tooling

- `validate_rw_task_intent.py`: default `rw-k` forensic-strict match vs `version.py`; `--art` adopt-requested path.
- `validate_version_bump.py`: `--requested` / `--art` alignment with adopted task anchor.
- `workflow_orchestrator.py`: parse `RW` triggers with task id and `--art`.
- `test_rw_triggers.py`, `test_validate_rw_task_intent.py`, `test_validate_version_bump.py`: coverage for mismatch and `--art` paths.

### Documentation parity

- `.cursorrules`, `cursorrules-rw-trigger-section.md`, `release-workflow-agent-execution.md`: operator contract for `RW -k` and `--art` propagation.

### Kanban / BR hygiene (scoped)

- Prune completed **E2:S01:T13** from in-progress MoSCOW row; record completion in `kanban-completed.md`.
- move **BR-063** to completed FR/BR/UXR table; remove open-board duplication.

## Validation Notes

- `validate_branch_context.py --strict` passed on `dev` prior to file updates for this release.

# CHANGELOG_v0.2.15.3+1

## Release Summary

`RW E2:S15:T03 --art` publishes FR-089 implementation: deterministic duplicate-footer detection for MoSCOW rows, dual-agreement timestamp recovery safeguards, divergence anomaly reporting, and traceability reconciliation across task/FR/story/boards.

## Internal and SemVer

- Internal version: `0.2.15.3+1`
- SemVer (`task_touch`): `0.4.764+1`

## Included Changes

- Added `IPP-E2S15T03` planning artifact and cross-wired governance references.
- Implemented duplicate-footer parser/audit/reconciliation helpers in `update_kanban_docs.py`.
- Enforced dual-agreement rule for canonical timestamp recovery and surfaced `timestamp-order divergence`.
- Added regression tests `4.9` to `4.12` in `test_update_kanban_docs.py`.
- Updated Story 015 / FR-089 / T03 wiring and active board entries (`kboard`, `fbuboard`).

## Verification

- `python3 "packages/frameworks/workflow mgt/scripts/test_update_kanban_docs.py" --test-category 4`
- `python3 "packages/frameworks/workflow mgt/scripts/update_kanban_docs.py" --dry-run`
- `ReadLints` on touched code/docs returned no linter errors.

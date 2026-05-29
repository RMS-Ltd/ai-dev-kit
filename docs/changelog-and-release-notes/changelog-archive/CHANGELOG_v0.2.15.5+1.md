# CHANGELOG_v0.2.15.5+1

## Release Summary

`RW -k E2:S15:T05 --art` starts implementation scope for **FR-090** by filing and activating task `E2:S15:T05` as the canonical owner of UKW/RW row-transform redesign. This release formalizes the coupling contract so RW and UKW stay cohesive and loosely coupled through explicit shared interfaces.

## Internal and SemVer

- Internal version: `0.2.15.5+1`
- SemVer (`task_touch`): `0.4.764+1`

## Included Changes

- Added **FR-090**: UKW canonical row transform engine and board-specific rendering contracts.
- Added task **E2:S15:T05** under Story 015 and set state to **IN PROGRESS**.
- Wired FR-090, BR-069, and Story 015 scope split for architecture vs defect closure.

## Verification

- `validate_branch_context.py --strict --requested E2:S15:T05 --art`
- `validate_rw_task_complete.py --requested E2:S15:T05 --mode rw-k`
- `validate_rw_task_intent.py --requested E2:S15:T05 --mode rw-k --art`
- `validate_version_bump.py --strict --requested E2:S15:T05 --art`
- `validate_changelog_format.py --strict`
- `update_kanban_docs.py --mode kanban_init`

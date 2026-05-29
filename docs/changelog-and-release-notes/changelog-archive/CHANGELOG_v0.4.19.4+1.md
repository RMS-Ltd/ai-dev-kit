# Detailed Changelog - v0.4.19.4+1

Date: 20-04-26
Task: E4:S19:T04
Mode: RW --art
SemVer: v0.4.764+1

## Summary

- Published the planning package artifact for `E4:S19:T04` with normative row-token grammar, IPP detection policy, and verification gates.
- Implemented Phase A resolver primitives in board-update automation:
  - canonical `IPP-*` planning artifact resolution,
  - compatibility fallback for legacy `IPW-*`,
  - deterministic `—IPP—` vs `—No IPP—` segment rendering.
- Added focused regression tests validating canonical precedence and compatibility fallback behavior.

## Included Files

- `docs/implementation-cycles/IPP-E4S19T04-kboard-fbuboard-ipp-segment-after-fbu-task-links.md`
- `docs/project-management/kanban/epics/Epic-4/Story-019-fr-br-uxr-abstract-governance-and-intake/T04-kboard-fbuboard-add-ipp-column-after-fbu-and-task-links-uxr010.md`
- `docs/project-management/kanban/fr-br/UXR-010-kboard-fbuboard-add-ipp-column-after-fbu-and-task-links.md`
- `packages/frameworks/workflow mgt/scripts/update_kanban_docs.py`
- `packages/frameworks/workflow mgt/scripts/test_update_kanban_docs.py`
- `src/fynd_deals/version.py`

## Verification

- `python3 "packages/frameworks/workflow mgt/scripts/test_update_kanban_docs.py" --test-category 4` (pass)
- `python3 "packages/frameworks/workflow mgt/scripts/version/semver_converter.py" "0.4.19.4+1" --strategy task_touch` (v0.4.764+1)

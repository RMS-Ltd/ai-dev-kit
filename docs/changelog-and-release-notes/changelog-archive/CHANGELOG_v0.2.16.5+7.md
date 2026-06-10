# Changelog v0.2.16.5+7

**Release Date:** 2026-06-10 20:15:00 UTC  
**Epic | Story | Task:** E02:S16:T05 (`RW --art`)  

## Summary

**Change implemented:** Wave 4 — close CQG/CodeQL vs Actions CI ship gap ([BR-104](../../kanban/fr-br/BR-104-codeql-cqg-green-does-not-imply-actions-ci-green.md)): migration race fix, Step 9.7 hardening, remote no-red-ship validator, operator docs.

## Attempted Fixes

### Release-state migration (Tests CI failure @ `main` `1bce576`)

- **Root cause:** `migrate_to_v2` TOCTOU under parallel `open_db` — `duplicate column name: semver_core`.
- **Fix:** `BEGIN IMMEDIATE` in `run_migrations`; duplicate-column guard on `ALTER TABLE`; regression test `test_migrate.py`.

### Step 9.7 Actions CI parity

- `--strict` fails when zero checks match (no silent skip).
- `--allow-path-skip` for `RW -d` docs-only.
- Python-surface diff forces full check set.

### Pre-push remote gate

- **New:** `validate_github_actions_remote.py` — `gh run list` no-red-ship check before push/batch push.
- Wired in `rw-config.yaml`, cheatsheet §2, `rw-contract.yaml`, canonical RW steps.

### CQG boundary

- `validate_code_quality_gate.py` emits **CQG ≠ CI ship gate** banner.
- Operator guide + cheatsheet updated.

## Changed

- `packages/frameworks/workflow-mgt/scripts/release_state/migrate.py`
- `packages/frameworks/workflow-mgt/scripts/validation/validate_actions_ci_parity.py`
- `packages/frameworks/workflow-mgt/scripts/validation/validate_github_actions_remote.py` (new)
- `packages/frameworks/workflow-mgt/scripts/validation/validate_code_quality_gate.py`
- `tests/release_state/test_migrate.py` (new)
- `docs/implementation-cycles/IPP-E02S16T05-github-actions-ci-health-perpetual-fr112.md` (new)
- `docs/kanban/fr-br/BR-104-codeql-cqg-green-does-not-imply-actions-ci-green.md` (new)
- `greenfield-install/` mirror sync

## Verification

- `pytest tests/release_state/test_migrate.py tests/release_state/test_allocate.py::TestParallelAllocate` — pass (local)
- `pytest packages/frameworks/workflow-mgt/scripts/validation/test_actions_ci_parity.py packages/frameworks/workflow-mgt/scripts/validation/test_github_actions_remote.py` — pass (local)
- GitHub Actions re-verify — **pending** operator check on `dev`/`main` after push

## References

- [T05](../../kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T05-github-actions-ci-health-perpetual.md)
- [IPP-E02S16T05](../../implementation-cycles/IPP-E02S16T05-github-actions-ci-health-perpetual-fr112.md)
- [FR-112](../../kanban/fr-br/FR-112-perpetual-github-ci-and-security-health-lanes.md)
- [GitHub Actions](https://github.com/RMS-Ltd/ai-dev-kit/actions)

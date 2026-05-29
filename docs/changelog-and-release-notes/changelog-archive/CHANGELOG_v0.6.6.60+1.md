# Changelog v0.6.6.60+1

**Release Date:** 2026-04-02 13:42:21 UTC  
**Epic:** 6 | **Story:** 6 | **Task:** 60  
**Task doc:** [T60-rw-allow-in-progress-task-releases.md](../../../project-management/kanban/epics/Epic-6/Story-006-feature-requests/T60-rw-allow-in-progress-task-releases.md) (redirect stub; canonical kanban task **E2:S01:T09** — [T09](../../../project-management/kanban/epics/Epic-2/Story-001-rw-agent-execution-and-docs/T09-rw-allow-in-progress-task-releases-br060.md); prior stub chain **E4:S19:T01**)  
**Associated BR:** [BR-060](../../../project-management/kanban/fr-br/BR-060-rw-in-progress-task-gate-blocks-build-releases.md)

## Summary

**RW E6:S06:T60:** Change implemented for **BR-060** — full RW Step 1c treats **`IN PROGRESS`** (non-perpetual) task docs as releasable alongside **`COMPLETE`**, with **`TODO`** still blocked; regression tests updated. **`validate_version_bump.py`** gains a fallback that locates the task document by canonical **`Task ID`** across kanban epic markdown when the configured story pattern resolves the wrong Story-006. RW trigger docs (`.cursorrules`, `cursorrules-rw-trigger-section.md`) aligned on Step 1c releasable statuses.

## Changes

### Release Workflow / validation

- `packages/frameworks/workflow mgt/scripts/validation/validate_rw_task_complete.py` — full mode allowlist extended for **`IN PROGRESS`**.
- `packages/frameworks/workflow mgt/scripts/validation/test_validate_rw_task_complete.py` — expectations for IN PROGRESS / TODO / perpetual cases.
- `packages/frameworks/workflow mgt/scripts/validation/validate_version_bump.py` — task doc discovery by **`Task ID`** header when story pattern collides (e.g. multiple `Story-006-*`).

### Documentation

- `.cursorrules` — Step 1c releasable statuses (**`IN PROGRESS`**, **`COMPLETE`**, perpetual).
- `packages/frameworks/workflow mgt/cursorrules-rw-trigger-section.md` — same alignment for portable RW excerpt.
- Kanban: **T60** task doc, **BR-060** bug report (traceability).

## Verification

- `validate_branch_context.py --strict` on `epic/6-framework-management`.
- `validate_rw_task_complete.py --requested "E6:S06:T60"`.
- `validate_rw_task_intent.py --requested "E6:S06:T60"` (with `--confirmed-override` when version token lagged during stacked releases).
- `validate_version_bump.py` — locates T60 under `Story-006-feature-requests/`.

**Note:** BR-060 closure remains subject to user verification of RW behavior in production cadence; changelog uses “change implemented” per dev-kit changelog language rules.

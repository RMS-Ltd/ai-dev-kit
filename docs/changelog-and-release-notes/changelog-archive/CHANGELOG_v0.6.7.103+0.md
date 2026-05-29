# Changelog v0.6.7.103+0

**Release Date:** 2026-04-19 12:00:00 UTC  
**Epic:** 6 | **Story:** 7 | **Task:** 103  
**Task doc:** [T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md](../../project-management/kanban/epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management/T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md)  
**FR:** [FR-041](../../project-management/kanban/fr-br/FR-041-perpetual-task-for-release-workflow-maintenance.md) | **BR:** [BR-067](../../project-management/kanban/fr-br/BR-067-rw-first-doc-only-release-defaults-to-build-plus-one-not-plus-zero.md)

## Summary

**RW -d** with **`--art`**, **BUILD +0** (internal **0.6.7.103+0**; SemVer **v0.4.746+0**): implements **`validate_version_bump.py --doc-policy-zero`** so documentation-only releases can use **+0** for an **existing** E/S/T anchor when policy requires it (perpetual **T103**, **BR-067**). Intake: **BR-067** and **fr-br-uxr-board** refresh.

## Changes

### Validators / workflow

- **`validate_version_bump.py`** — New flag **`--doc-policy-zero`**: with **`--strict --requested <E:S:T> --art`**, accept **BUILD 0** when **doc-init** heuristics would otherwise require **≥1** (existing task document), **if** the change set still passes **docs-only** rules. Backward-compatible alias **`parse_requested_task_id`** for unit tests.
- **`validate_branch_context.py`** (and version-bump doc-init file scan) — **`.cursorrules`** at repo root treated as **documentation** for **+0** / doc-only change lists (agent policy text, not product code).
- **`test_validate_version_bump.py`** — Coverage for **doc-policy-zero**; **--art** task ID alignment test updated; all tests green.

### Kanban / traceability

- **BR-067** — Filed and linked to **E2:S16:T03**; documents default **+1** vs policy **+0** gap.
- **`fr-br-uxr-board.md`** — **BR-067** and version context for this release.

## Verification

- `python .../validate_version_bump.py --strict --requested E2:S16:T03 --art --doc-policy-zero`
- `python .../validate_changelog_format.py` (root)
- `pytest` `packages/frameworks/workflow mgt/scripts/validation/test_validate_version_bump.py`

## Tags

- **Task-touch:** `v0.4.746` (primary), `v0.6.7.103+0` (internal)

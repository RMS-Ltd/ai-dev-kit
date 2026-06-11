# Changelog v0.2.3.12+1

**Release Date:** 2026-06-11 10:49:34 UTC  
**Epic:** 2 | **Story:** 3 | **Task:** 12  
**SemVer:** v0.4.1144+1  
**Task:** [E02:S03:T12 — Environment-aware workflow execution (FR-128)](../../kanban/epics/epic-02/story-03-additional-workflows-and-examples/T12-environment-aware-workflow-execution-fr128.md)

---

## Summary

Attempted implementation of **FR-128** — multi-runtime environment detection and environment-aware mode gates for IPW, IDW, and MWF (Cursor, Claude Code, OpenCode).

---

## Changes

### Added

- `packages/frameworks/workflow-mgt/scripts/icw/workflow_env.py` — shared `WorkflowEnvironment` probe (`detect`, `is_plan_session`, `can_spawn_subagent`, `WORKFLOW_ENV` override)
- `packages/frameworks/workflow-mgt/scripts/icw/test_workflow_env.py` — unit tests for environment detection (FR-128 AC7, AC8)
- [IPP-E02S03T12](../../implementation-cycles/IPP-E02S03T12-environment-aware-workflow-execution-fr128.md) — implementation plan (MWF Leg 1)

### Changed

- `icw_handler.py` — `_detect_execution_mode()` delegates to `workflow_env`
- `.claude/commands/ipw.md` — §Environment & Mode Check (replaces single-env plan gate; OpenCode sub-agent path)
- `.claude/commands/idw.md` — environment-aware inverted mode gate
- `.claude/commands/mwf.md` — FR-128 runtime detection note for orchestration
- `workflow-registry.yaml` — `mode_requirement` on ICW/IPW, IDW, MWF entries
- `CLAUDE.md` — IPW/IDW trigger routing references environment-aware gates
- Greenfield mirror synced (`greenfield-install/packages/frameworks/`)

### Kanban

- T12 → IN PROGRESS → COMPLETE @ v0.2.3.12+1
- kboard row updated with IPP link

---

## Verification

- `python packages/frameworks/workflow-mgt/scripts/icw/test_workflow_env.py` — pass
- `python packages/frameworks/workflow-mgt/scripts/icw/test_plan_mode_detection.py` — pass (no regression)

---

## References

- [FR-128](../../kanban/fr-br/FR-128-environment-aware-workflow-execution.md)
- [BR-102](../../kanban/fr-br/BR-102-mwf-chain-paused-instead-of-subagent-leg-delegation.md)

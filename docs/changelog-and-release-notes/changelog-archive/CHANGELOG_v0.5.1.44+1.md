# Changelog v0.5.1.44+1

**Release Date:** 2026-06-05 05:44:26 UTC  
**Epic:** 5 | **Story:** 1 | **Task:** 44  
**SemVer:** v0.4.939+1

---

## Summary

**E05:S01:T44** (`RW --art`): Change implemented for **FR-044** — RW temporary execution log with incremental dual-write logging (`agent_run_log.py` + `rw_execution_log.py` / `RWExecutionLogger`), schema v1.1, `rw-config` keys, ADR-011 update, and governance doc sweep.

---

## Added

- `packages/frameworks/workflow-mgt/scripts/journal/agent_run_log.py` — incremental agent run log writer (atomic flush)
- `packages/frameworks/workflow-mgt/scripts/journal/rw_execution_log.py` — human-readable `.rw-execution.log` + facade
- `docs/implementation-cycles/IPP-E05S01T44-rw-temporary-execution-log.md`
- `tests/journal/test_agent_run_log.py`, `test_rw_execution_log.py`
- `rw-config.yaml` keys: `rw_execution_log_path`, `agent_run_log_dir`, `rw_execution_log_truncate_on_start`

## Changed

- Agent run log schema v1.1 — optional `outputs`, `touched_paths`, `run_id`
- ADR-011 — reference writer + text mirror layer (FR-044)
- RW agent guide, step-tracker contract, forensic recovery guide, dual-source excerpts

## Documentation

- [IPP-E05S01T44](../../implementation-cycles/IPP-E05S01T44-rw-temporary-execution-log.md)
- [FR-044](../../project-management/kanban/fr-br/FR-044-rw-temporary-execution-log-for-recovery-and-forensics.md)
- [ADR-011](../../architecture/standards-and-adrs/ADR-011-workflow-step-tracker-and-agent-run-log.md)

---

**Task:** [E05:S01:T44](../../project-management/kanban/epics/epic-05/story-01-fr-repo/T44-rw-temporary-execution-log-for-recovery-and-forensics.md)

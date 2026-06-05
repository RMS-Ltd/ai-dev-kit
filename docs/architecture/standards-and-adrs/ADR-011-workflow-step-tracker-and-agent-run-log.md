---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-30T17:00:00Z
expires_at: null
housekeeping_policy: keep
---

# ADR-011: Workflow Step Tracker and Agent Run Log

**Status:** Accepted (updated 2026-06-05 — FR-044 reference writer v1.1)  
**Date:** 2026-05-30  
**Implementing tasks:** [E02:S01:T23](../../project-management/kanban/epics/epic-02/story-01-rw-agent-execution-and-docs/T23-tool-agnostic-workflow-step-tracking-and-runlogs.md); [E05:S01:T44](../../project-management/kanban/epics/epic-05/story-01-fr-repo/T44-rw-temporary-execution-log-for-recovery-and-forensics.md)  
**Planning:** [IPP-E2S1T23](../../implementation-cycles/IPP-E2S01T23-tool-agnostic-workflow-step-tracking-runlogs.md) · [IPP-E05S01T44](../../implementation-cycles/IPP-E05S01T44-rw-temporary-execution-log.md)

---

## Decision

1. **Workflow Step Tracker contract** — Mandatory for all agent-managed workflows.
2. **Tool adapters** — Cursor `todo_write`, Windsurf `todo_list`, or tool-less fallback.
3. **Agent run log v1.1** — Schema at [workflow-agent-run-log-v1.schema.json](schemas/workflow-agent-run-log-v1.schema.json); reference writer `agent_run_log.py` with incremental atomic flush.
4. **RW execution text mirror (FR-044)** — `.rw-execution.log` via `rw_execution_log.py`; facade `RWExecutionLogger`.
5. **Housekeeping** — Finalize agent run log on workflow end; ADR-008 forensic journal separate.
6. **Non-goals** — No RWJournal schema merge; no argv capture in agent run log.

---

## Relationship to ADR-008 (boundary)

Agent run log and forensic journal are **distinct** layers — do not merge schemas.

| Layer | Purpose | Path |
| ----- | ------- | ---- |
| Workflow Step Tracker | In-session progress | IDE adapter |
| Agent run log | Cross-session resume | `docs/journals/agent-runs/*.json` |
| RW execution text log | Post-crash `cat` | `.rw-execution.log` |
| Forensic journal | Command timeline | `docs/journals/rw-*.json` |

---

## Related

- [ADR-008](ADR-008-workflow-forensic-logging-and-checkpoints.md)
- [FR-044](../../project-management/kanban/fr-br/FR-044-rw-temporary-execution-log-for-recovery-and-forensics.md)

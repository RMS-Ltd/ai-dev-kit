---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-30T17:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Workflow Step Tracker Contract

**Authority:** [ADR-011](../../../../../../docs/architecture/standards-and-adrs/ADR-011-workflow-step-tracker-and-agent-run-log.md)  
**Implementing task:** [E02:S01:T23](../../../../../../docs/project-management/kanban/epics/Epic-2/Story-001-rw-agent-execution-and-docs/T23-tool-agnostic-workflow-step-tracking-and-runlogs.md)  
**Related:** [Agent run log schema v1](../../../../../../docs/architecture/standards-and-adrs/schemas/workflow-agent-run-log-v1.schema.json) · [ADR-008 forensic journals](../../../../../../docs/architecture/standards-and-adrs/ADR-008-workflow-forensic-logging-and-checkpoints.md)

---

## Purpose

The **Workflow Step Tracker** is the mandatory in-session progress mechanism for all **agent-managed workflows** (RW, UKW, IPW, PVW, and others). It gives operators real-time visibility into which step is running, where a workflow stopped, and whether all steps completed.

Governance docs **MUST NOT** require a specific IDE tool (e.g. Cursor `todo_write`). They **MUST** require conformance to this contract and a supported **tool adapter** where available.

---

## Step states

| State | Meaning |
| ----- | ------- |
| `pending` | Step not yet started |
| `in_progress` | Step currently executing (exactly one per workflow run) |
| `completed` | Step finished successfully |
| `cancelled` | Step skipped or workflow aborted before reaching this step |

---

## Lifecycle rules

1. **At workflow start:** Create the full step list with all steps `pending`.
2. **Before each step:** Mark the current step `in_progress` (only one at a time).
3. **After each step:** Mark the completed step `completed`; mark the next step `in_progress` if continuing.
4. **On abort:** Mark the current step and all remaining `pending` steps `cancelled`; record blocking reason in the [agent run log](../../../../../../docs/architecture/standards-and-adrs/schemas/workflow-agent-run-log-v1.schema.json).
5. **On success:** All steps `completed`.
6. **Housekeeping:** On workflow end (success or abort), cancel or clear tracker entries per adapter capabilities and **finalize** the agent run log (see ADR-011).

---

## Step ID convention

Use stable, workflow-prefixed IDs:

| Workflow | Pattern | Example |
| -------- | ------- | ------- |
| Release (RW) | `rw-step-{n}` | `rw-step-1`, `rw-step-7` |
| Update Kanban (UKW) | `ukw-step-{n}` | `ukw-step-6` |
| Package Version (PVW) | `pvw-step-{n}` | `pvw-step-1` |
| IPW | `ipw-phase-{n}` | `ipw-phase-0` |

Each step entry **MUST** include human-readable `content` / label text describing the step.

---

## Tool adapters

Agents **MUST** implement tracker semantics via one of these adapters:

| Environment | Mechanism | Notes |
| ----------- | --------- | ----- |
| **Cursor** | `todo_write` | Reference adapter; map `pending` / `in_progress` / `completed` / `cancelled` to tool statuses |
| **Windsurf / Cascade** | `todo_list` | Primary alternate; see [§Windsurf / Cascade appendix](#windsurf--cascade-appendix) |
| **Tool-less fallback** | Agent run log file only | When no IDE todo API exists; update `current_step` and `steps[]` in persisted JSON per schema |

Adapters are interchangeable at the **semantic** layer — the contract governs states and lifecycle, not the underlying API.

---

## Agent run log (cross-session)

For resumption across sessions, agents **SHOULD** maintain a persisted **agent run log** (spec-only v1):

- **Schema:** [`workflow-agent-run-log-v1.schema.json`](../../../../../../docs/architecture/standards-and-adrs/schemas/workflow-agent-run-log-v1.schema.json)
- **Example:** [`workflow-agent-run-log-v1.example.json`](../../../../../../docs/architecture/standards-and-adrs/examples/workflow-agent-run-log-v1.example.json)
- **Default path:** `docs/journals/agent-runs/{workflow}-{run_id}.json`

This is **distinct** from ADR-008 **forensic journals** (`docs/journals/rw-*.json`) which capture command records and recovery metadata for operators.

---

## Windsurf / Cascade appendix

When executing in Windsurf or Cascade, use **`todo_list`** as the Workflow Step Tracker adapter:

| Contract state | `todo_list` action |
| -------------- | ------------------ |
| Create full list at start | Create todos with all steps `pending` |
| `in_progress` | Update target step to in-progress / active |
| `completed` | Mark step complete |
| `cancelled` | Mark step cancelled or remove if API supports deletion |

**Pattern:**

1. At workflow start — create the full step list (all `pending`).
2. Before each step — set current step `in_progress`.
3. After each step — set completed; advance next to `in_progress`.
4. On abort — cancel remaining steps; write `blocking_reason` to agent run log.

If `todo_list` is unavailable, use the **tool-less fallback** (agent run log file only) and document the limitation in the run log `notes` field.

---

## Enforcement summary

- ❌ **DO NOT** mandate Cursor `todo_write` in governance docs without citing this contract.
- ✅ **MUST** use Workflow Step Tracker semantics for all multi-step agent workflows.
- ✅ **MUST** maintain exactly one `in_progress` step during execution.
- ✅ **SHOULD** persist agent run log for workflows that may span sessions (RW, UKW).

---

## References

- [Agent-Driven Workflow Execution](agent-driven-workflow-execution.md)
- [Release Workflow Agent Execution](release-workflow-agent-execution.md) — RW Step 17 housekeeping
- [Workflow Forensic Recovery Guide](workflow-forensic-recovery-guide.md) — ADR-008 boundary

---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-30T17:00:00Z
expires_at: null
housekeeping_policy: keep
---

# ADR-011: Workflow Step Tracker and Agent Run Log

**Status:** Accepted  
**Date:** 2026-05-30  
**Deciders:** User (Ruari Mears)  
**Implementing task:** [E02:S01:T23](../../project-management/kanban/epics/epic-02/story-01-rw-agent-execution-and-docs/T23-tool-agnostic-workflow-step-tracking-and-runlogs.md)  
**Planning package:** [IPP-E2S1T23](../../implementation-cycles/IPP-E2S01T23-tool-agnostic-workflow-step-tracking-runlogs.md)

---

## Context

Agent-managed workflows (RW, UKW, IPW, PVW, etc.) require **in-session step visibility** and **interruption recovery**. Governance docs historically mandated Cursor **`todo_write`**, binding adopters to one IDE and blocking Windsurf/Cascade (`todo_list`) portability.

[ADR-008](ADR-008-workflow-forensic-logging-and-checkpoints.md) already defines **forensic RW journals** (`docs/journals/rw-*.json`, command records, checkpoints). That layer serves **operator recovery after failure** — not agent-facing progress UI or lightweight cross-session resume.

---

## Decision

1. **Workflow Step Tracker contract** — All agent-managed workflows **MUST** conform to [workflow-step-tracker-contract.md](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/workflow-step-tracker-contract.md): states (`pending`, `in_progress`, `completed`, `cancelled`), lifecycle rules, step ID conventions.
2. **Tool adapters** — Cursor `todo_write`, Windsurf/Cascade `todo_list`, or tool-less agent run log fallback. Governance **MUST NOT** name a single IDE API as mandatory.
3. **Agent run log v1 (spec-only)** — JSON Schema at [workflow-agent-run-log-v1.schema.json](schemas/workflow-agent-run-log-v1.schema.json); default path `docs/journals/agent-runs/{workflow}-{run_id}.json`. Fields: workflow, route, task_id, current_step, blocking_reason, timestamps, steps[].
4. **Housekeeping** — On workflow end, finalize agent run log (`ended_at`, terminal `status`); cancel/clear tracker steps via adapter. Forensic journal finalization remains ADR-008.
5. **Non-goals (v1)** — No reference Python writer; no command argv capture in agent run log; no merge with RWJournal schema.

---

## Relationship to ADR-008

| Layer | Purpose | Path / artifact |
| ----- | ------- | ---------------- |
| **Workflow Step Tracker** (this ADR) | In-session progress; user visibility | IDE adapter or agent run log `steps[]` |
| **Agent run log** (this ADR) | Cross-session resume; lightweight state | `docs/journals/agent-runs/*.json` |
| **Forensic journal** (ADR-008) | Post-failure recovery; command timeline | `docs/journals/rw-*.json`, checkpoints |

Agents **MAY** use both agent run log and forensic journal during RW; they serve different audiences and MUST NOT be conflated in documentation.

---

## Consequences

### Positive

- Portable workflow governance across Cursor, Windsurf/Cascade, and tool-less environments.
- Clear precedent for future agent workflows.
- Automated doc governance tests can enforce contract language.

### Negative

- Large doc sweep across `.cursorrules`, KB guides, and portable excerpts.
- Adopters must map local IDE APIs to contract semantics.

---

## Related

- [ADR-008](ADR-008-workflow-forensic-logging-and-checkpoints.md) — forensic logging boundary
- [workflow-step-tracker-contract.md](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/workflow-step-tracker-contract.md)
- [workflow-hardening-guide.md](workflow-hardening-guide.md)

---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-11T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# FR-128: Environment-aware workflow execution (IPW / IDW / MWF mode gates)

**Type:** Feature Request (FR)  
**ID:** FR-128  
**Submitted:** 2026-06-11  
**Submitted By:** Operator (analysis & design intake)  
**Priority:** HIGH (Should Have — MoSCOW **S**)  
**Status:** OPEN (implementation shipped @ v0.2.3.12+1; AC1–AC7 runtime verification pending)

**Implementing Task:** [E02:S03:T12](../epics/epic-02/story-03-additional-workflows-and-examples/T12-environment-aware-workflow-execution-fr128.md)

**Cross-cutting:** IPW ([FR-094](FR-094-ipw-slash-command-and-task-state-transition-mandate.md)), IDW ([FR-119](FR-119-implementation-delivery-workflow-idw.md)), MWF ([FR-124](FR-124-meta-workflow-orchestration-composite-workflow-chains.md), [BR-102](BR-102-mwf-chain-paused-instead-of-subagent-leg-delegation.md))

**Precedent:** BR-102 sub-agent delegation pattern · [E02:S03:T10](../epics/epic-02/story-03-additional-workflows-and-examples/T10-workflow-encapsulation-integrity-mwf-fr126.md) encapsulation matrix (Wave 3)

---

## Summary

Harden IPW, IDW, and MWF mode prerequisites for **multi-runtime portability** (Cursor, Claude Code, OpenCode) via shared environment detection, registry-declared mode requirements, and OpenCode sub-agent delegation for plan-mode workflows.

---

## Problem Statement

IPW enforces a **plan-mode gate** as its first execution step. The current implementation (`.claude/commands/ipw.md` §Plan Mode Check) assumes a single environment — **Claude Code** with its `/plan` session model. When invoked outside Claude Code, the workflow either blocks unconditionally or produces a misleading error, because:

1. **Cursor** has a built-in plan/agent mode toggle — different from Claude Code's `/plan` session.
2. **OpenCode** has no plan-mode concept at all — the workflow is always in "implementation" context.
3. The Python `_detect_execution_mode()` in `icw_handler.py` relies solely on the `PLANNING_MODE` env var, which no environment sets automatically.

The result: IPW is **not portable**. Operators on Cursor or OpenCode cannot run the canonical planning workflow without manual workarounds, and those workarounds (setting `PLANNING_MODE=true` by hand) bypass the very intent of the gate.

**Broader impact:** This is not an IPW-only problem. Every workflow with a mode prerequisite (IPW, IDW, MWF) currently hardcodes environment-specific checks. As the ADK targets multiple agent runtimes, this creates a growing maintenance burden and a fragile detection layer spread across `.claude/commands/`, `.cursorrules`, and `CLAUDE.md`.

---

## Environment Landscape

### Target environments

| Environment | Plan mode mechanism | Sub-agent spawn | Config file | Detection signal |
|---|---|---|---|---|
| **Claude Code** | `/plan` session; system-reminder present in context | `Task` tool available | `CLAUDE.md` | `CLAUDE_CODE` env var, or system prompt inspection |
| **Cursor** | Built-in agent/plan toggle; `CURSOR_MODE` semantics | MCP tools; `Task` tool in agent mode | `.cursorrules` | `CURSOR_MODE` env var, or tool availability |
| **OpenCode** | None — CLI only; always implementation context | `Task` sub-agent available | `AGENTS.md` | `OPENCODE` env var, or absence of Cursor/Claude signals |

### Execution mode semantics

```
Workflow Trigger (IPW / IDW / MWF / etc.)
    → Environment Detect (cursor | claude-code | opencode | other)
    → Mode Gate per Env (native mode → plan/implement)
    → Execute inline OR delegate sub-agent on mismatch
```

---

## Design (summary)

### Environment detection layer

Shared probe usable from agent command files (`.md`) and Python handlers (`icw_handler.py`, `idw_handler.py`, etc.):

- **Python:** `packages/frameworks/workflow-mgt/scripts/icw/workflow_env.py` — `WorkflowEnvironment.detect()`, `is_plan_session()`, `can_spawn_subagent()`, `WORKFLOW_ENV` override.
- **Agent commands:** Standardised environment & mode check block replacing single-env gates in `ipw.md`, `idw.md`, `mwf.md`.

### Registry integration

`workflow-registry.yaml` declares `mode_requirement` and `environment_compatibility` per workflow (plan vs implementation; per-env semantics).

### OpenCode IPW path

**Preferred (Option A):** When plan mode unavailable and sub-agent spawn is available, delegate IPW to sub-agent with `PLANNING_MODE=true` (BR-102 pattern).

**Fallback (Option B):** Emit `IPW BLOCKED: use MWF E:S:T delivery` when sub-agent spawn unavailable.

### Repository integration points

| Artifact | Change | Priority |
|---|---|---|
| `packages/frameworks/workflow-mgt/scripts/icw/workflow_env.py` | **Create** — shared environment detection module | P0 |
| `packages/frameworks/workflow-mgt/scripts/icw/icw_handler.py` | **Update** — use `workflow_env.detect()` in `_detect_execution_mode()` | P0 |
| `.claude/commands/ipw.md` | **Update** — environment-aware decision tree | P0 |
| `.claude/commands/idw.md` | **Update** — inverted mode gate per env | P1 |
| `.claude/commands/mwf.md` | **Update** — align BR-102; reference `workflow_env` | P1 |
| `workflows/workflow-registry.yaml` | **Update** — `mode_requirement` fields | P1 |
| `packages/frameworks/workflow-mgt/scripts/icw/test_plan_mode_detection.py` | **Update** — environment detection tests | P1 |
| `CLAUDE.md` / `.cursorrules` | **Update** — route IPW through environment check | P1 |
| `docs/kanban/fbu/FR-094-*.md` | **Update** — reflect environment-aware gate | P2 |

---

## Requirements

### Functional

- [ ] **ENV-F1 / FR-128-F1:** Workflow environment detection MUST identify Cursor, Claude Code, and OpenCode using environment variables and process-level signals, with explicit override via `WORKFLOW_ENV` env var.
- [ ] **ENV-F2 / FR-128-F2:** Each workflow with a mode prerequisite MUST gate on plan/implementation mode according to the detected environment's semantics, not a hardcoded check.
- [ ] **ENV-F3 / FR-128-F3:** When IPW is triggered in an environment without plan mode (OpenCode) and sub-agent spawn is available, the workflow MUST delegate planning to a sub-agent with `PLANNING_MODE=true` rather than blocking.
- [ ] **ENV-F4 / FR-128-F4:** When sub-agent spawn is unavailable and plan mode is required, the workflow MUST emit a clear blocked message with remediation guidance specific to the detected environment.
- [ ] **ENV-F5 / FR-128-F5:** The environment detection module MUST be importable from all workflow Python handlers and usable from agent command files via standardised probe text.
- [ ] **ENV-F6 / FR-128-F6:** `workflow-registry.yaml` MUST declare `mode_requirement` and `environment_compatibility` for each workflow.
- [ ] **ENV-F7 / FR-128-F7:** IDW mode check MUST invert per environment — block plan mode in Cursor/Claude Code, always allow in OpenCode.

### Non-functional

- [ ] **ENV-NF1 / FR-128-NF1:** Environment detection MUST complete in &lt; 100ms (no external calls, no network probes).
- [ ] **ENV-NF2 / FR-128-NF2:** Sub-agent delegation for OpenCode IPW MUST preserve the full 10-phase IPW output and bidirectional wiring contract.
- [ ] **ENV-NF3 / FR-128-NF3:** Detection MUST honour explicit `WORKFLOW_ENV` override even when automatic detection would produce a different result.
- [ ] **ENV-NF4 / FR-128-NF4:** Adding a new environment MUST require only (a) probe in `workflow_env.py`, (b) mode semantics in registry — no per-workflow `.md` changes unless behaviour diverges.

---

## Acceptance Criteria

- [ ] **AC1:** `IPW E:S:T` in OpenCode spawns a sub-agent and returns `IPW COMPLETE` with a valid IPP linked to the host task.
- [ ] **AC2:** `IPW E:S:T` in Claude Code outside `/plan` session emits `IPW BLOCKED: plan mode required. Type /plan, then /ipw again.`
- [ ] **AC3:** `IPW E:S:T` in Cursor with `CURSOR_MODE=agent` emits `IPW BLOCKED: plan mode required. Switch to plan mode and retry.`
- [ ] **AC4:** `IPW E:S:T` in Cursor with `CURSOR_MODE=plan` runs inline (no sub-agent).
- [ ] **AC5:** `IDW E:S:T` in OpenCode runs inline (no plan mode to conflict).
- [ ] **AC6:** `IDW E:S:T` in Claude Code plan session emits `IDW BLOCKED: plan mode is active.`
- [ ] **AC7:** Setting `WORKFLOW_ENV=opencode` forces OpenCode detection regardless of actual environment.
- [ ] **AC8:** All existing workflow environment detection tests pass without regression.

---

## Scope Analysis

**Problem Domain:** Workflow Management Framework — multi-runtime execution portability  
**Affected Areas:**
- [x] Backend/API (Python handlers, `workflow_env.py`)
- [ ] Frontend/UI
- [ ] Database/Schema
- [x] Documentation (command guides, `CLAUDE.md`, `.cursorrules`, registry)
- [x] Testing (`test_plan_mode_detection.py`)

**Estimated Complexity:** Complex (2+ weeks) — cross-cutting; touches command guides, Python handlers, registry, and trigger routing.

---

## Dependencies

**Blocks:**
- Full OpenCode standalone IPW without operator workarounds
- Environment-aware MWF leg mode gates ([FR-124](FR-124-meta-workflow-orchestration-composite-workflow-chains.md) F4)

**Blocked By:**
- [E02:S03:T11](../epics/epic-02/story-03-additional-workflows-and-examples/T11-mwf-subagent-leg-delegation-br102.md) — BR-102 sub-agent pattern (shipped; precedent only)

**Related Work:**
- [FR-094](FR-094-ipw-slash-command-and-task-state-transition-mandate.md) — extends plan-mode enforcement
- [BR-102](BR-102-mwf-chain-paused-instead-of-subagent-leg-delegation.md) — sub-agent delegation precedent
- [FR-124](FR-124-meta-workflow-orchestration-composite-workflow-chains.md) — MWF orchestration
- [FR-119](FR-119-implementation-delivery-workflow-idw.md) — IDW inverted gate
- [E02:S03:T10](../epics/epic-02/story-03-additional-workflows-and-examples/T10-workflow-encapsulation-integrity-mwf-fr126.md) — Wave 3 gap "sub-agent delegation for IPW"
- [IPP-E02S03T10](../../implementation-cycles/IPP-E02S03T10-workflow-encapsulation-integrity-mwf-fr126.md)

---

## Open Questions

1. **Cursor plan-mode detection reliability** — Does Cursor expose `CURSOR_MODE` as a stable env var, or should detection rely on tool availability / system prompt inspection?
2. **Sub-agent IPP wire-up** — When IPW runs in a sub-agent, Phase 8 host task doc update must happen in parent session context; confirm filesystem write access.
3. **`WORKFLOW_ENV` propagation** — Should sub-agents inherit `WORKFLOW_ENV` from parent? Recommendation: inherit, with sub-agent override for testing.

---

## Intake Decision

**Intake Status:** ACCEPTED  
**Intake Date:** 2026-06-11  
**Intake By:** Intake Agent

**Decision Flow Results:**
- [x] Story Match Found: Epic 2, Story 3 (Additional Workflows & Examples) → Task 12

**Assigned To:**
- Epic: 2 — Workflow Management Framework
- Story: 3 — Additional Workflows & Examples
- Task: 12 — Environment-aware workflow execution (FR-128)
- Version: `0.2.3.12+1` (on first RW)

**Kanban Links:**
- Epic: [`docs/kanban/epics/epic-02/Epic-02.md`](../epics/epic-02/Epic-02.md)
- Story: [`docs/kanban/epics/epic-02/story-03-additional-workflows-and-examples.md`](../epics/epic-02/story-03-additional-workflows-and-examples.md)
- Task: [`T12-environment-aware-workflow-execution-fr128.md`](../epics/epic-02/story-03-additional-workflows-and-examples/T12-environment-aware-workflow-execution-fr128.md)

---

## References

- [IPP-E02S03T10 — Workflow encapsulation integrity](../../implementation-cycles/IPP-E02S03T10-workflow-encapsulation-integrity-mwf-fr126.md)
- [FR-094 — IPW slash command](FR-094-ipw-slash-command-and-task-state-transition-mandate.md)
- [BR-102 — MWF sub-agent delegation](BR-102-mwf-chain-paused-instead-of-subagent-leg-delegation.md)
- [FR-124 — Meta-workflow orchestration](FR-124-meta-workflow-orchestration-composite-workflow-chains.md)
- [implementation-planning-workflow-agent-execution.md](../../packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/implementation-planning-workflow-agent-execution.md)
- [workflow-encapsulation-contract.md](../../packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/workflow-encapsulation-contract.md)

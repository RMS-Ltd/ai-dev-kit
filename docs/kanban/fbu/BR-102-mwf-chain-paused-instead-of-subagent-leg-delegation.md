---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-10T16:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Bug Report BR-102: MWF emits `CHAIN PAUSED` instead of delegating legs to mode-appropriate sub-agents

**Type:** Bug Report (BR)  
**Bug ID:** BR-102  
**Submitted:** 2026-06-10  
**Submitted By:** User — MWF `delivery` invocation (`MWF E02:S03:T10 delivery`)  
**Priority:** HIGH  
**Severity:** HIGH  
**Status:** IMPLEMENTED (attempted fix @ T10 Wave 3 — pending operator verification)

**Implementing Task:** [E02:S03:T11](../epics/epic-02/story-03-additional-workflows-and-examples/T11-mwf-subagent-leg-delegation-br102.md)

**Related:** [FR-124](FR-124-meta-workflow-orchestration-composite-workflow-chains.md) (MWF v1 @ v0.2.3.9+3) · [FR-126](FR-126-workflow-encapsulation-integrity-mwf-leverage.md) (blocked on MWF ergonomics)

---

## Summary

The **MWF orchestrator** incorrectly treats **mode differences between legs** as an **operator handoff** (`MWF CHAIN PAUSED: enter plan mode…`) instead of **spawning sub-agents** to run constituent workflows (IPW in planning context, IDW in implementation context) on behalf of the operator.

---

## Problem Statement

MWF exists so operators can invoke **one trigger** (`MWF E:S:T delivery`) for the full **IPW → IDW → RW** pipeline. The orchestrator agent is responsible for **sequencing encapsulated legs**, not pushing mode-switching back to the human.

Current docs and agent behavior ([`mwf.md`](../../../.claude/commands/mwf.md), [meta-workflow-agent-execution.md](../../../packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/meta-workflow-agent-execution.md)) instruct:

- If IPP missing and parent session is **not** in plan mode → **`MWF CHAIN PAUSED`** — operator must `/plan` and re-invoke.
- After IPW → **`MWF CHAIN PAUSED`** — operator must exit plan mode and re-invoke.

That contradicts the **orchestration intent** established in project practice (e.g. [E10:S01 orchestration plan §7](../../../docs/implementation-cycles/E10S01-orchestration-plan.md) — IPW legs run via **parallel sub-agents** in plan mode) and the user's expectation that **the meta-workflow agent manages subagents** running constituent workflows.

---

## Expected Behavior

When `MWF E:S:T delivery` runs from a **single parent orchestrator session** (typically implementation/agent mode):

1. **Leg 1 (IPW)** — orchestrator **delegates** to a **sub-agent** instructed per `.claude/commands/ipw.md`, running in a **planning-capable context** (sub-agent session or equivalent). Parent **waits** for `IPW COMPLETE` and linked IPP on the host task.
2. **Leg 2 (IDW `--rw`)** — orchestrator **delegates** to a **sub-agent** per `.claude/commands/idw.md` in **implementation context** (parent session or implementation sub-agent). Parent propagates `--push` / `--art`.
3. **`MWF CHAIN PAUSED`** is reserved for **genuine blocking conditions** (sub-agent spawn unavailable, leg `ABORTED`, operator review gate explicitly documented) — **not** for routine plan↔implementation transitions between legs.
4. Terminal success: **`MWF COMPLETE`** without manual re-trigger between legs when sub-agent delegation succeeds.

---

## Observed Behavior

1. Operator invokes `MWF E02:S03:T10 delivery` from an implementation-mode Cursor session.
2. Orchestrator detects no linked IPP → Leg 1 (IPW) required.
3. Orchestrator checks parent session plan mode → not active.
4. Orchestrator emits **`MWF CHAIN PAUSED`** with instructions to enter plan mode and re-invoke — **does not** spawn an IPW sub-agent.
5. Full delivery pipeline **stalls** despite tool access and a valid host task.

**Observed:** 2026-06-10, task E02:S03:T10, agent session with Bash/tools available.

---

## Steps to Reproduce

1. Ensure host task has **no** linked `IPP-E…S…T…` (e.g. fresh **E02:S03:T10** after FR-126 intake).
2. From an **implementation-mode** agent session with tool access, send: `MWF E02:S03:T10 delivery`.
3. Observe orchestrator returns **`MWF CHAIN PAUSED`** referencing manual plan-mode switch.
4. Observe **no** IPP created and **no** sub-agent Task invocation for IPW.

---

## Root Cause (analysis)

| Factor | Detail |
| ------ | ------ |
| **Spec gap** | `mwf.md` Leg 1 gates on **parent session** plan mode instead of **delegation target** mode |
| **Doc drift** | `meta-workflow-agent-execution.md` states *"Cursor cannot auto-switch modes — operator must re-invoke"* — treats orchestration as impossible rather than delegating to sub-agents |
| **FR-124-F4 ambiguity** | Mode gates documented as operator pauses, not orchestrator-managed sub-agent boundaries |
| **Missing delegation contract** | No `subagent_leg` spec in `mwf-workflow.yaml` / MWF KB (contrast: E10 orchestration plan sub-agent prompts) |

---

## Impact

| Area | Effect |
| ---- | ------ |
| **Operator UX** | MWF `delivery` fails the primary value proposition (single entry point) |
| **FR-126** | Encapsulation audit blocked on unreliable full-pipeline invocation |
| **FR-124 acceptance** | AC2 (verified `MWF COMPLETE` path) not achievable without manual mode gymnastics |
| **Trust** | Users fall back to three separate triggers — the anti-pattern FR-124 was meant to replace |

**Workaround:** Run `IPW E:S:T` manually in plan mode, exit plan mode, then `IDW E:S:T --rw` — defeats MWF.

---

## Affected Component

**Primary:** Meta-Workflow (MWF) orchestration — `.claude/commands/mwf.md`, KB vwmp `meta-workflow-agent-execution.md`, `workflows/meta-workflow/*`, cheatsheet §4c

**Secondary:** Agent routing (`.cursorrules` MWF section, `CLAUDE.md`, `AGENTS.md`)

---

## Acceptance Criteria (Fix Requirements)

- [ ] **AC1:** `mwf.md` Leg 1 — when IPP missing, orchestrator **spawns sub-agent** (Task tool or documented equivalent) to execute IPW per `ipw.md`; **does not** require parent session plan mode.
- [ ] **AC2:** `mwf.md` Leg 2 — orchestrator delegates IDW `--rw` via sub-agent or parent implementation session; **does not** require operator re-invoke after IPW unless sub-agent leg `ABORTED`.
- [ ] **AC3:** `MWF CHAIN PAUSED` definition narrowed — only when sub-agent delegation **unavailable** or leg explicitly needs operator input; documented in KB + cheatsheet.
- [ ] **AC4:** `meta-workflow-agent-execution.md` removes *"operator must re-invoke after mode change"* as default path; adds **sub-agent delegation contract** (prompt shape, completion tokens, abort propagation).
- [ ] **AC5:** `mwf-workflow.yaml` / registry notes reference leg `delegate: subagent` + `guide:` path per leg.
- [ ] **AC6:** Verified path: `MWF E02:S03:T10 delivery` (or test task) yields IPP + `MWF COMPLETE` without manual mode switch when tools available.
- [ ] **AC7:** BR-102 ↔ T11 bidirectional links; FR-124 cross-reference note (mode gates = orchestrator-managed, not operator pauses).

---

## Intake Decision

**Intake Status:** ACCEPTED  
**Intake Date:** 2026-06-10  
**Assigned To:**

- Epic: Epic 2 — Workflow Management Framework
- Story: Story 003 — Additional Workflows & Examples (MWF follow-on)
- Task: T11 — MWF sub-agent leg delegation (BR-102)

---

## References

- [`.claude/commands/mwf.md`](../../../.claude/commands/mwf.md)
- [`.claude/commands/ipw.md`](../../../.claude/commands/ipw.md)
- [E10:S01 orchestration plan §7](../../../docs/implementation-cycles/E10S01-orchestration-plan.md)
- [FR-124](FR-124-meta-workflow-orchestration-composite-workflow-chains.md)

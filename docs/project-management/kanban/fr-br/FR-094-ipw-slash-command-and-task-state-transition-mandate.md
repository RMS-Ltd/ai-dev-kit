---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-13T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# FR-094: `/ipw` slash command for Claude Code + mandatory task state transition in IPP

**Type:** Feature Request (FR)  
**ID:** FR-094  
**Submitted:** 2026-05-13  
**Submitted By:** User — recurring TODO drift after IPW runs; parity request with `/rw` and `/ukw`  
**Priority:** HIGH  
**Severity:** HIGH  
**Status:** RESOLVED — v0.2.16.9+1

**Implementing Task:** [E2:S16:T09](../epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T09-ipw-slash-command-claude-code-fr094.md)

---

## Summary

Two tightly coupled requirements:

1. **`/ipw` slash command** — Add a dedicated `.claude/commands/ipw.md` slash command for Claude Code that invokes the Implementation Planning Workflow, on parity with `/rw` and `/ukw`. IPW **must run under `/plan` mode** and execute its four distinct phases sequentially.

2. **Mandatory task state transitions in the IPP** — The implementation plan document (IPP artifact) produced by every IPW run **must** include task state transition steps as the first and final items in its implementation plan section. This makes the state contract explicit and executor-enforced, eliminating the recurrent pattern where tasks are found in `TODO` after IPW completion.

Both requirements are in scope together because the `/ipw` command is the canonical enforcement point for the phase structure and the IPP template amendment.

---

## Problem Statement

### Recurring TODO drift after IPW

FR-077 (`E2:S01:T17`) codified ownership of `TODO → IN PROGRESS` as "implementation execution (first non-planning code/doc change)" and added drift validators. Despite this, the pattern recurs:

- Tasks are routinely found in `TODO` state after IPW packages are completed and implementation begins.
- The validator (`validate_ipw_status_drift.py`) correctly catches drift at RW gate, but only after the fact — causing RW blocks, manual intervention, and context-switching cost.
- The root cause is that transition timing is implicit guidance in documentation, not a prescribed first step of the execution artefact the implementer is actually following (the IPP).

**The fix:** Make the transition explicit inside the artefact. If the IPP's first prescribed step is "transition task to IN PROGRESS" and the final step is "reconcile task status to actual implementation state", no documentation reading is required — the implementer follows the plan they already have.

### No `/ipw` slash command

IPW is invokable via plain-text `IPW` (`.cursorrules` / Cursor only) or informal instruction. Claude Code sessions have no dedicated `/ipw` slash command, meaning:
- Invocation is inconsistent across session types.
- Plan mode is not formally enforced at the command entry point.
- There is no self-contained execution guide equivalent to `/rw` (`.claude/commands/rw.md`) or `/ukw` (`.claude/commands/ukw.md`).

### Phase structure is implicit

The four IPW phases (Ascertain Requirements → Define Specification → Design Tests → Plan Implementation) are documented in the agent execution guide but are not enforced at the command invocation level. Agents may skip or compress phases without a formal phase-gate structure.

---

## Proposed Solution

### Part 1 — `/ipw` slash command

Create `.claude/commands/ipw.md` as a self-contained IPW execution guide, following the established pattern of `.claude/commands/rw.md` and `.claude/commands/ukw.md`.

**Critical constraint:** The command **must enforce plan mode.** IPW is a planning-only workflow. If the session is not in plan mode, the command must either refuse to proceed or explicitly instruct the agent to enter plan mode before any IPW step is executed.

**Command syntax:**
- `/ipw` — infer host task from current context.
- `/ipw E{epic}:S{story}:T{task}` — explicit host task (formats: `E2:S16:T08`, `E2S16T08`).
- `/ipw E{epic}:S{story}:T{task} --skip-tests` — doc/config-only tasks where test design is not applicable (must be explicitly justified in the plan doc).

**The command must enforce the four sequential phases with phase gates:**

| Phase | Name | Gate to proceed |
|---|---|---|
| **0** | Identify host task | Task doc exists and E:S:T token confirmed |
| **1** | Ascertain requirements | Functional + non-functional requirements consolidated from task, FR/BR/UXR context, and ACs; gaps resolved with user before proceeding |
| **2** | Define specification | Goal, F-requirements, NF-requirements, out-of-scope section complete; user confirms scope |
| **3** | Design tests | Test cases mapped to spec coverage; `--skip-tests` explicitly justified if absent |
| **4** | Plan implementation | Ordered steps, files, dependencies — **must include state transition steps (see Part 2)** |
| **5** | Create plan doc | Written from `PLAN_DOC_TEMPLATE.md`; Host Task header set |
| **6** | Wire to host task | Atomic with Phase 5 — task doc Input + References updated |
| **7** | Validate | Bidirectional wiring confirmed; required sections present; state transition steps present in Phase 4 output |

**Phase gates are mandatory.** The command must not skip from Phase 1 directly to Phase 4, or produce a plan doc without completing all required phases. Each phase must be documented before the next begins.

**CLAUDE.md update:** Add `## IPW Trigger Routing` section routing plain-text `IPW` / `ipw` (case-insensitive) to `/ipw`, mirroring the `RW` and `UKW` routing sections.

### Part 2 — Mandatory task state transition steps in IPP

Every implementation plan section produced by IPW **must** include these two prescribed steps, regardless of task type:

**Step 1 (always first):**
> Transition task `E{epic}:S{story}:T{task}` status from `TODO` to `IN PROGRESS` in task document. Update `Last updated` date.

**Final step (always last):**
> Reconcile task `E{epic}:S{story}:T{task}` status with actual implementation state. If all acceptance criteria are satisfied with evidence → transition to `COMPLETE` and add forensic marker `✅ COMPLETE (v{version})`; if implementation is ongoing → confirm status remains `IN PROGRESS`; if blocked → transition to `BLOCKED` with documented reason. Update `Last updated` date.

These steps are executor-prescribed and therefore fall naturally inside implementation execution — consistent with FR-077's ownership contract. IPW does not execute them; the plan it produces mandates them.

**Rationale:** The state transition is not owned by IPW (planning) — it is owned by implementation execution (following the plan). By encoding the transitions as the first and last steps of the plan, the contract is embedded in the artefact the implementer is working from. This eliminates ambiguity without changing ownership.

### Part 3 — Documentation scope

The following documents must be updated to reflect this new mandate:

| Document | Required change |
|---|---|
| `packages/frameworks/workflow mgt/KB/Documentation/Developer_Docs/vwmp/implementation-planning-workflow-agent-execution.md` | Add explicit `/ipw` slash command invocation; add plan-mode enforcement requirement; update Phase 4 to mandate state transition steps; update Status transition ownership section to reference IPP-prescribed transitions |
| `packages/frameworks/kanban/templates/PLAN_DOC_TEMPLATE.md` | Add prescribed Step 1 (`TODO → IN PROGRESS`) and final step (status reconciliation to actual implementation state) as fixed placeholders in the Implementation Plan section |
| `.cursorrules` → IPW trigger section | Reference `/ipw` as canonical invocation; add plan-mode enforcement note; cross-reference IPP state transition mandate |
| `CLAUDE.md` | Add `## IPW Trigger Routing` section |
| `AGENTS.md` | Update IPW references to reflect `/ipw` slash command and state transition mandate |
| `docs/architecture/standards-and-adrs/` — any relevant ADR | Update or add ADR capturing the IPP state transition contract as a formal decision record |
| `FR-077` | Add cross-reference to FR-094 as the mechanism that embeds the transition contract inside the IPP artefact |

---

## Requirements

### Functional Requirements

- **FR-094-F1:** `.claude/commands/ipw.md` exists and is self-contained; `/ipw [E:S:T]` is a valid Claude Code slash command.
- **FR-094-F2:** `/ipw` enforces plan mode; execution is blocked or explicitly escalated if not in plan mode.
- **FR-094-F3:** `/ipw` executes the four IPW phases (Ascertain → Specify → Test Design → Plan Impl) with phase gates; phases cannot be skipped without explicit `--skip-tests` justification.
- **FR-094-F4:** Every IPP produced by `/ipw` includes Step 1 = `TODO → IN PROGRESS` transition and final step = status reconciliation to actual implementation state (`COMPLETE` if all ACs satisfied, `IN PROGRESS` if ongoing, `BLOCKED` if blocked) as mandatory prescribed items.
- **FR-094-F5:** `PLAN_DOC_TEMPLATE.md` is updated with the state transition placeholders in the Implementation Plan section.
- **FR-094-F6:** `implementation-planning-workflow-agent-execution.md` is updated to reflect the slash command, plan-mode requirement, phase gates, and IPP state transition mandate.
- **FR-094-F7:** CLAUDE.md `## IPW Trigger Routing` section routes plain-text `IPW` / `ipw` to `/ipw`.
- **FR-094-F8:** `.cursorrules` IPW trigger section updated to cross-reference `/ipw` and the IPP state transition mandate.
- **FR-094-F9:** AGENTS.md updated to reflect the above.
- **FR-094-F10:** Relevant ADR created or updated to record the IPP state transition contract as a formal architectural decision.

### Non-Functional Requirements

- **FR-094-NF1:** The `/ipw` command structure mirrors `.claude/commands/rw.md` and `.claude/commands/ukw.md` for consistency.
- **FR-094-NF2:** State transition mandate does not change FR-077 ownership contract — transitions remain owned by implementation execution; the IPP is the vehicle that prescribes them.
- **FR-094-NF3:** Plan-mode enforcement is explicit in the command file, not implied by documentation.

---

## Acceptance Criteria

- [x] **AC1:** `.claude/commands/ipw.md` exists, is self-contained, and invocable as `/ipw`.
- [x] **AC2:** `/ipw` enforces or requires plan mode before any phase begins.
- [x] **AC3:** `/ipw` enforces four sequential phases with gates; no phase may be silently skipped.
- [x] **AC4:** Every IPW run produces an IPP whose Implementation Plan section contains Step 1 = `TODO → IN PROGRESS` and a final status reconciliation step that updates the task to its actual state (`COMPLETE`, `IN PROGRESS`, or `BLOCKED`) — not a forced transition to `COMPLETE`.
- [x] **AC5:** `PLAN_DOC_TEMPLATE.md` updated with mandatory state transition placeholders.
- [x] **AC6:** `implementation-planning-workflow-agent-execution.md` updated (slash command, plan mode, phase gates, IPP state transitions).
- [x] **AC7:** `CLAUDE.md` `## IPW Trigger Routing` section present and routes correctly.
- [x] **AC8:** `.cursorrules` IPW section cross-references `/ipw` and IPP state transition mandate.
- [x] **AC9:** `AGENTS.md` updated.
- [x] **AC10:** ADR created or updated recording the IPP state transition contract.
- [x] **AC11:** FR-077 cross-references FR-094 as the mechanism embedding the state contract in IPP artefacts.
- [x] **AC12:** FR-094 and implementing task are bidirectionally linked.

---

## Scope

**In scope:**
- `.claude/commands/ipw.md` (new file)
- `CLAUDE.md` IPW routing section (new section)
- `PLAN_DOC_TEMPLATE.md` (amendment)
- `implementation-planning-workflow-agent-execution.md` (amendment)
- `.cursorrules` IPW trigger section (amendment)
- `AGENTS.md` (amendment)
- ADR for IPP state transition contract (new or updated)
- FR-077 cross-reference update (minor amendment)

**Out of scope:**
- Changes to `validate_ipw_status_drift.py` or other validators (existing drift detection remains as-is)
- Changes to RW Step 1c drift detection behaviour
- ICW deprecation (already governed by FR-042)
- Changes to FR-077's ownership contract — ownership stays with implementation execution

---

## Relationship to Existing FRs

| FR | Relationship |
|---|---|
| [FR-042](FR-042-implementation-planning-workflow-ipw.md) | Canonical IPW definition; FR-094 extends it with `/ipw` slash command and IPP state mandate |
| [FR-077](FR-077-ipw-built-task-status-transition-and-kboard-sync.md) | Established ownership contract; FR-094 embeds the contract inside the IPP artefact without changing ownership |
| [FR-083](FR-083-global-ipw-gated-implementation-contract.md) | Global IPW gate; FR-094 adds the command-level enforcement point |
| [FR-093](FR-093-ukw-slash-command-claude-code.md) | Pattern reference for `/ukw`; `/ipw` follows same structure |

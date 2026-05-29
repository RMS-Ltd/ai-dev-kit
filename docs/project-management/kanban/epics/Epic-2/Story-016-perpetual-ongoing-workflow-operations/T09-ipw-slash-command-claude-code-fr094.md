---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-14T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 2, Story 16, Task 9: `/ipw` slash command for Claude Code + mandatory IPP state transition (FR-094)

**Task ID:** E2:S16:T09  
**Status:** COMPLETE ✅ COMPLETE (v0.2.16.9+1)  
**Priority:** HIGH  
**Estimated Effort:** Medium  
**Created:** 2026-05-14  
**Last updated:** 2026-05-14  
**Version Anchor:** v0.2.16.9+0  
**Code:** E2S16T09

**Upstream:** [FR-094 — `/ipw` slash command for Claude Code + mandatory task state transition in IPP](../../../fr-br/FR-094-ipw-slash-command-and-task-state-transition-mandate.md)

Publication Status: NOT_APPLICABLE  
Publication N/A Reason: Tooling/config/doc task — no specification/test-design/implementation-plan publication set required.

---

## Input

- [IPP — E2:S16:T09 implementation plan](../../../../../../docs/implementation-cycles/IPP-E2S16T09-ipw-slash-command-and-ipp-state-transition.md)
- [FR-094](../../../fr-br/FR-094-ipw-slash-command-and-task-state-transition-mandate.md) requirements.
- Existing `/rw` command at `.claude/commands/rw.md` and `/ukw` at `.claude/commands/ukw.md` as pattern references.
- IPW canonical step guide: `packages/frameworks/workflow mgt/KB/Documentation/Developer_Docs/vwmp/implementation-planning-workflow-agent-execution.md`.
- IPW trigger spec: `.cursorrules` → IPW trigger section.
- Plan doc template: `packages/frameworks/kanban/templates/PLAN_DOC_TEMPLATE.md`.
- [FR-077](../../../fr-br/FR-077-ipw-built-task-status-transition-and-kboard-sync.md) — ownership contract that FR-094 embeds in the IPP artefact.

---

## Problem statement

IPW had no dedicated `/ipw` slash command in Claude Code. Invocation relied on plain-text `IPW` parsed by `.cursorrules` (Cursor-only), making IPW inconsistently available across session types and lacking plan-mode enforcement at the command entry point. Additionally, IPPs produced by IPW lacked mandatory task state transition steps, causing recurring TODO drift — tasks routinely found in `TODO` state after IPW completion when implementation begins.

---

## Deliverable

- `.claude/commands/ipw.md` — self-contained IPW slash command execution guide enforcing plan mode and four sequential phases with phase gates.
- `CLAUDE.md` update — `## IPW Trigger Routing` section for plain-text `IPW` / `ipw` alias routing.
- `PLAN_DOC_TEMPLATE.md` amendment — mandatory Step 1 (`TODO → IN PROGRESS`) and final status reconciliation step (COMPLETE / IN PROGRESS / BLOCKED) in the Implementation Plan section.
- `implementation-planning-workflow-agent-execution.md` amendment — slash command reference, plan-mode enforcement, phase gate structure, IPP state transition mandate.
- `.cursorrules` amendment — cross-reference `/ipw` and IPP state transition mandate in IPW trigger section.
- `AGENTS.md` amendment — updated IPW references.
- ADR — formal decision record for the IPP state transition contract.
- `FR-077` cross-reference — link to FR-094 as the mechanism embedding the state contract in IPP artefacts.

---

## Scope

See [FR-094](../../../fr-br/FR-094-ipw-slash-command-and-task-state-transition-mandate.md) scope section.

---

## Acceptance criteria

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
- [x] **AC12:** FR-094 and E2:S16:T09 are bidirectionally linked.

---

## References

- [FR-094](../../../fr-br/FR-094-ipw-slash-command-and-task-state-transition-mandate.md)
- [FR-077](../../../fr-br/FR-077-ipw-built-task-status-transition-and-kboard-sync.md)
- [Story 016](../Story-016-perpetual-ongoing-workflow-operations.md)
- `.claude/commands/ipw.md`
- `.claude/commands/rw.md`
- `.claude/commands/ukw.md`
- `CLAUDE.md`
- `packages/frameworks/kanban/templates/PLAN_DOC_TEMPLATE.md`
- `packages/frameworks/workflow mgt/KB/Documentation/Developer_Docs/vwmp/implementation-planning-workflow-agent-execution.md`
- [IPP artifact](../../../../../../docs/implementation-cycles/IPP-E2S16T09-ipw-slash-command-and-ipp-state-transition.md)

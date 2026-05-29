---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-27T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Bug Report BR-071: RW trigger routing not executing from chat session

**Status:** RESOLVED  
**Priority:** CRITICAL  
**Severity:** CRITICAL  
**Created:** 2026-04-27  
**Last updated:** 2026-05-13 (fix implemented: CLAUDE.md + .claude/commands/rw.md — E2:S01:T19 COMPLETE)  
**Version:** v0.2.1.19+1  
**Code:** BR-071

**Implementing Task:** [E2:S01:T19](../epics/Epic-2/Story-001-rw-agent-execution-and-docs/T19-rw-trigger-routing-execution-regression-br071.md)

---

## Problem Statement

`RW <task-id> --art` is accepted as chat input but does not execute the Release Workflow engine in-session. The trigger phrase is treated as plain chat content, producing no RW side effects (no terminal activity, no commit, no tag), despite documented trigger usage.

This causes repeated failed publish attempts and forces out-of-band/manual fallback behavior.

---

## Expected Behavior

- Sending `RW E#:S##:T## --art` in a trigger-enabled chat invokes the RW engine.
- RW execution produces normal side effects (step logs, staged/committed release output, tag progression).
- Agent and trigger runtime behavior match documented usage.

---

## Observed Behavior

- Multiple invocations (`RW E2:S15:T07 --art`, `RW E2:S15:T04 --art`) produced no engine execution.
- Terminal remained idle after each invocation.
- `git log`, `git status`, and tag list showed no RW-generated commit/tag transitions.
- Manual publication exception had to be used to unblock release.

---

## Reproduction

1. Open chat session in this repo with pending release-scope changes.
2. Send `RW E2:S15:T07 --art`.
3. Observe that no RW step output appears and no release commit/tag appears.
4. Repeat with a different task anchor (e.g. `RW E2:S15:T04 --art`) and observe same result.

---

## Impact

- Breaks the primary documented release path.
- Adds user friction, repeated retries, and token waste.
- Encourages policy-violating manual recovery paths under pressure.
- Undermines confidence in RW governance and deterministic release operations.

---

## Scope / Suspected Areas

- RW trigger routing / command interception layer in chat runtime.
- Session mode/context gating between chat-agent execution and workflow trigger engine.
- Trigger compatibility with current session lifecycle.
- Potential regression introduced around FR-092/T07-era workflow integration.

---

## Acceptance Criteria

- [x] **AC1:** `RW E#:S##:T## --art` reliably invokes RW engine in normal chat sessions.
- [x] **AC2:** Execution produces visible step output and expected git/tag side effects.
- [x] **AC3:** Failure mode surfaces explicit routing error (not silent no-op) when trigger cannot execute.
- [x] **AC4:** Regression test/diagnostic coverage added for trigger-routing availability.
- [x] **AC5:** BR-071, E2:S01:T19, Story 001 checklist, `kboard.md`, and `fbuboard.md` are bidirectionally wired.

---

## Resolution (2026-05-13)

**Root cause confirmed:** No `CLAUDE.md` at project root and no `.claude/commands/` directory. Claude Code's primary instruction source is `CLAUDE.md`; `.cursorrules` alone is insufficient to guarantee trigger routing in Claude Code sessions. When `RW E#:S##:T## --art` was typed in a Claude Code chat, the message was received as plain conversational text — the workflow engine was never invoked.

**Fix:** Created `CLAUDE.md` (plain-text `RW ` routing rule + blocked-session error) and `.claude/commands/rw.md` (Claude Code slash command `/rw` with self-contained execution guide, environment check, mandatory gates, abort protocol).

**Implementing task:** [E2:S01:T19](../epics/Epic-2/Story-001-rw-agent-execution-and-docs/T19-rw-trigger-routing-execution-regression-br071.md) — COMPLETE.

---

## Related

- [Story 001 – RW Agent Execution & Docs](../epics/Epic-2/Story-001-rw-agent-execution-and-docs.md)
- [BR-070](BR-070-rw-k-stage-files-completeness-gap-allows-partial-kanban-commit.md)
- [FR-092](FR-092-canonical-rw-ukw-kanban-consistency-program.md)

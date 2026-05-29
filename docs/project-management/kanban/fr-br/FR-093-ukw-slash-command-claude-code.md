---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-13T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# FR-093: `/ukw` slash command for Claude Code

**Type:** Feature Request (FR)  
**ID:** FR-093  
**Submitted:** 2026-05-13  
**Submitted By:** User — parity request with existing `/rw` slash command  
**Priority:** HIGH  
**Severity:** LOW  
**Status:** IMPLEMENTED (v0.2.16.8+1 — E2:S16:T08)

**Implementing Task:** [E2:S16:T08](../epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T08-ukw-slash-command-claude-code-fr093.md)

---

## Summary

Add a `/ukw` slash command for Claude Code (CLI / desktop / IDE extension) that invokes the Update Kanban Workflow, equivalent to the existing `/rw` slash command for the Release Workflow. Requires a self-contained command file at `.claude/commands/ukw.md` and a plain-text trigger routing entry in `CLAUDE.md`.

---

## Problem Statement

The UKW was only triggerable via plain-text `UKW` (handled by `.cursorrules` in Cursor). Claude Code sessions lacked a dedicated `/ukw` slash command, making UKW invocation less reliable and inconsistent with the `/rw` pattern the user already relies on.

---

## Deliverable

- `.claude/commands/ukw.md` — self-contained UKW slash command execution guide covering: AC3 environment check, flag parsing (`-u`, `-p`, `-a <target>`), step execution matrix, all 9 UKW steps with agent instructions, fbuboard reconciliation (Step 6.5), UKW → RW integration wiring, abort/completion protocol, file path fallbacks, and reference documentation links.
- `CLAUDE.md` update — dedicated `## UKW Trigger Routing` section that routes plain-text `UKW` / `ukw` messages to `/ukw`, mirroring the existing `## RW Trigger Routing` section.

---

## Requirements

### Functional Requirements

- **FR-093-F1:** `/ukw` slash command invocable with no flags (comprehensive run) or any combination of `-u`, `-p`, `-a <target>` flags.
- **FR-093-F2:** Plain-text `UKW [flags]` at the start of a user message routes to `/ukw`, treated identically to the slash command.
- **FR-093-F3:** Command file is self-contained — no external lookup required to execute UKW from it.
- **FR-093-F4:** AC3 environment check emits `UKW BLOCKED` if Bash/tool execution is unavailable.
- **FR-093-F5:** UKW → RW integration wiring (perpetual task, BUILD increment) is documented in the command file.

### Non-Functional Requirements

- **FR-093-NF1:** Pattern and structure mirrors `.claude/commands/rw.md` for consistency.
- **FR-093-NF2:** `CLAUDE.md` routing section mirrors existing `## RW Trigger Routing` format exactly.

---

## Acceptance Criteria

- [x] **AC1:** `.claude/commands/ukw.md` exists and is self-contained.
- [x] **AC2:** `/ukw` with no flags triggers comprehensive UKW; flags `-u`, `-p`, `-a` scope correctly.
- [x] **AC3:** Plain-text `UKW` and `ukw` (case-insensitive) route to the command in Claude Code sessions.
- [x] **AC4:** `CLAUDE.md` contains a `## UKW Trigger Routing` section with AC3 / blocked-session handling.
- [x] **AC5:** FR-093 and E2:S16:T08 are bidirectionally linked.

---

## Related

- [E2:S16:T08](../epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T08-ukw-slash-command-claude-code-fr093.md)
- [Story 016](../epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations.md)
- `.claude/commands/ukw.md`
- `.claude/commands/rw.md` (pattern reference)
- `CLAUDE.md` (routing entry)

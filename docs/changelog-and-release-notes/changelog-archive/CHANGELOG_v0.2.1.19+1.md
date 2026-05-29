# Changelog: v0.2.1.19+1

**Release Date:** 2026-05-13 13:52:05 UTC  
**Version:** 0.2.1.19+1  
**SemVer:** 0.4.773+1  
**Epic:** E2 — Workflow Management Framework  
**Story:** S01 — RW Agent Execution & Docs  
**Task:** T19 — RW trigger routing execution regression (BR-071)  
**Branch:** dev  
**Trigger:** RW E2:S01:T19 --art

---

## Summary

Implements the fix for BR-071: RW trigger routing not executing from chat session. Creates the Claude Code–native instruction mechanisms (`CLAUDE.md` and `.claude/commands/rw.md`) that restore reliable RW trigger routing in Claude Code sessions.

---

## Attempted Fixes

### BR-071 — RW trigger routing not executing from chat session

**Root cause identified:** The project used `.cursorrules` (Cursor IDE convention) as the sole source of RW trigger instructions. No `CLAUDE.md` existed at the project root and no `.claude/commands/` directory was present. Claude Code's primary project-instruction file is `CLAUDE.md`; without it, `RW E#:S##:T## --art` typed in a Claude Code chat session was received as plain conversational text — the workflow engine was not invoked.

**Fix applied:**

1. **Created `CLAUDE.md`** at project root — maps plain-text `RW ` prefix to RW execution (backward compatibility with existing documented usage), includes blocked-session error rule (AC3), references `.cursorrules` and `.claude/commands/rw.md` for full step detail.

2. **Created `.claude/commands/rw.md`** — proper Claude Code slash command (`/rw <task-id> [flags]`) with self-contained execution guide. Loaded fresh per invocation, immune to context-window degradation. Includes:
   - Environment check (AC3/AC4): explicit `RW BLOCKED` error if Bash tool unavailable
   - Mandatory gates: Steps 1 → 1b → 1c → 1d (branch safety, task token, releasability, intent guard)
   - Full step table for all three RW variants (full, `-d`, `-k`)
   - Abort/completion protocol (no silent no-ops)
   - `--art` flag semantics and Step 9 propagation rules

---

## Files Changed

| Action | File |
|--------|------|
| Created | `CLAUDE.md` |
| Created | `.claude/commands/rw.md` |
| Updated | `docs/project-management/kanban/fr-br/BR-071-rw-trigger-routing-not-executing-from-chat-session.md` |
| Updated | `docs/project-management/kanban/epics/Epic-2/Story-001-rw-agent-execution-and-docs/T19-rw-trigger-routing-execution-regression-br071.md` |
| Updated | `docs/project-management/kanban/epics/Epic-2/Story-001-rw-agent-execution-and-docs.md` |
| Updated | `docs/project-management/kanban/kboard.md` |
| Updated | `src/fynd_deals/version.py` |

---

## Acceptance Criteria

- [x] AC1: Root cause of trigger-routing failure reproduced and isolated
- [x] AC2: Fix applied — `RW E#:S##:T## --art` and `/rw E#:S##:T## --art` both route to RW engine in supported Claude Code sessions
- [x] AC3: Blocked-session explicit error (`RW BLOCKED: tool execution is unavailable`) replaces silent no-op
- [x] AC4: Environment check in `.claude/commands/rw.md` provides regression/health-check coverage for trigger availability
- [x] AC5: BR-071 RESOLVED, E2:S01:T19 COMPLETE, Story-001 checklist wired, kboard.md updated

---

## Related

- [BR-071](../../../docs/project-management/kanban/fr-br/BR-071-rw-trigger-routing-not-executing-from-chat-session.md)
- [E2:S01:T19](../../../docs/project-management/kanban/epics/Epic-2/Story-001-rw-agent-execution-and-docs/T19-rw-trigger-routing-execution-regression-br071.md)

---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-13T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 2, Story 16, Task 8: `/ukw` slash command for Claude Code (FR-093)

**Task ID:** E2:S16:T08  
**Status:** COMPLETE  
**Priority:** HIGH  
**Estimated Effort:** Small  
**Created:** 2026-05-13  
**Last updated:** 2026-05-13 ✅ COMPLETE (v0.2.16.8+1)  
**Code:** E2S16T08

**Upstream:** [FR-093 — `/ukw` slash command for Claude Code](../../../fr-br/FR-093-ukw-slash-command-claude-code.md)

Publication Status: NOT_APPLICABLE  
Publication N/A Reason: Tooling/config task — no specification/test-design/implementation-plan publication set required.

---

## Input

- [FR-093](../../../fr-br/FR-093-ukw-slash-command-claude-code.md) requirements.
- Existing `/rw` slash command at `.claude/commands/rw.md` as pattern reference.
- UKW canonical step guide: `packages/frameworks/workflow mgt/KB/Documentation/Developer_Docs/vwmp/update-kanban-workflow-agent-execution.md`.
- UKW trigger spec: `.cursorrules` → `### 🔄 UPDATE KANBAN WORKFLOW (UKW) TRIGGER`.

---

## Problem statement

UKW had no dedicated `/ukw` slash command in Claude Code. Invocation relied on plain-text `UKW` parsed by `.cursorrules` (Cursor-only), making UKW inconsistently available across Claude Code sessions and lacking the reliability parity of `/rw`.

---

## Deliverable

- `.claude/commands/ukw.md` — self-contained UKW slash command execution guide.
- `CLAUDE.md` update — `## UKW Trigger Routing` section for plain-text alias routing.

---

## Scope

1. Create `.claude/commands/ukw.md` covering all flags, step execution matrix, all 9 steps, fbuboard reconciliation, UKW → RW wiring, abort protocol, file paths, and reference docs.
2. Add `## UKW Trigger Routing` section to `CLAUDE.md` with plain-text routing and AC3 blocked-session handling.
3. Move `UKW` from "Other Workflow Triggers" to its own dedicated routing section in `CLAUDE.md`.

---

## Acceptance criteria

- [x] **AC1:** `.claude/commands/ukw.md` exists and is self-contained.
- [x] **AC2:** `/ukw` with no flags triggers comprehensive UKW; flags `-u`, `-p`, `-a` scope correctly per step execution matrix.
- [x] **AC3:** Plain-text `UKW` / `ukw` (case-insensitive) route to the command in Claude Code sessions via `CLAUDE.md`.
- [x] **AC4:** `CLAUDE.md` `## UKW Trigger Routing` section includes AC3 / blocked-session handling.
- [x] **AC5:** FR-093 and E2:S16:T08 are bidirectionally linked.

---

## References

- [FR-093](../../../fr-br/FR-093-ukw-slash-command-claude-code.md)
- [Story 016](../Story-016-perpetual-ongoing-workflow-operations.md)
- `.claude/commands/ukw.md`
- `.claude/commands/rw.md`
- `CLAUDE.md`

# Changelog — v0.2.16.8+1

**Release:** v0.2.16.8+1  
**SemVer:** 0.4.773+1  
**Date:** 2026-05-13 00:00:00 UTC  
**Epic:** E2 — Workflow Management Framework  
**Story:** S16 — Perpetual Ongoing Workflow Operations  
**Task:** T08 — `/ukw` slash command for Claude Code (FR-093)

---

## Summary

Implement `/ukw` slash command for Claude Code, providing a dedicated and reliable invocation path for the Update Kanban Workflow — equivalent to the existing `/rw` slash command for the Release Workflow.

---

## Changes

### Added

- **`.claude/commands/ukw.md`** — Self-contained UKW slash command execution guide covering: AC3 environment check (`UKW BLOCKED` response when Bash unavailable), flag parsing table (`-u`, `-p`, `-a <target>`, and combinations), step execution matrix (which of the 9 UKW steps run per flag), all 9 steps with agent instructions referencing canonical scripts, Step 6.5 fbuboard reconciliation, UKW → RW integration wiring (perpetual task discovery, BUILD increment, version pattern), abort/completion protocol (`UKW COMPLETE` / `UKW ABORTED`), file path fallbacks, and reference documentation links.

- **`CLAUDE.md` — `## UKW Trigger Routing` section** — Dedicated routing section mirroring `## RW Trigger Routing` in structure. Routes plain-text `UKW` / `ukw` (case-insensitive) to `/ukw` with the remainder of the message as arguments. Includes AC3 blocked-session handling (`UKW BLOCKED` message). Removes UKW from the generic "Other Workflow Triggers" list, which previously only pointed to `.cursorrules`.

- **`docs/project-management/kanban/fr-br/FR-093-ukw-slash-command-claude-code.md`** — Feature request document for this change.

- **`docs/project-management/kanban/epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T08-ukw-slash-command-claude-code-fr093.md`** — Task document for E2:S16:T08.

### Modified

- **`docs/project-management/kanban/epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations.md`** — Added T08 to task checklist (COMPLETE).

---

## Motivation

UKW invocation in Claude Code sessions relied on the plain-text `UKW` trigger being parsed via `.cursorrules` (Cursor-only behaviour). Claude Code's CLI/desktop/IDE sessions had no dedicated slash command, making UKW less reliable and inconsistent with the `/rw` pattern already in production use.

---

## Traceability

- **FR:** [FR-093](../../kanban/fr-br/FR-093-ukw-slash-command-claude-code.md)  
- **Task:** E2:S16:T08  
- **Story:** E2:S16 — Perpetual Ongoing Workflow Operations  
- **Previous version:** v0.2.16.7+0

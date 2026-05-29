# Changelog — v0.2.16.9+0

**Release Date:** 2026-05-14 09:38:39 UTC  
**Version:** 0.2.16.9+0  
**Type:** Doc-init (FR intake filing)  
**Epic:** E2 — Workflow Management Framework  
**Story:** S16 — Perpetual Ongoing Workflow Operations  
**Task:** E2:S16:T09 — `/ipw` slash command for Claude Code + mandatory IPP state transition (FR-094)

---

## Summary

FR-094 intake filing: `/ipw` slash command for Claude Code and mandatory task state transition steps in IPP artefacts. Implementing task E2:S16:T09 created in E2:S16.

---

## Changes

### New Files

- `docs/project-management/kanban/fr-br/FR-094-ipw-slash-command-and-task-state-transition-mandate.md` — Feature request document. Two coupled requirements: (1) `/ipw` slash command for Claude Code with plan-mode enforcement and four sequential phase gates; (2) mandatory task state reconciliation steps as first and final items in every IPP produced by IPW (Step 1: `TODO → IN PROGRESS`; final step: reconcile to actual state — `COMPLETE`, `IN PROGRESS`, or `BLOCKED`).
- `docs/project-management/kanban/epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T09-ipw-slash-command-claude-code-fr094.md` — Implementing task document for FR-094, housed in E2:S16. Status: TODO.

### Updated Files

- `docs/project-management/kanban/fbuboard.md` — FR-094 row added to Should Have (S) section, placed before FR-077 (the related IPW ownership contract FR it extends). Total FBU count updated to 75 (FR: 53).
- `docs/project-management/kanban/kboard.md` — E2:S16:T09 row added to Should Have (S) section with HIGH priority.
- `docs/project-management/kanban/epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations.md` — T09 entry appended to task checklist (TODO).

---

## Motivation

Recurring TODO drift after IPW runs prompted FR-094. The root cause: task state transitions are implicit in documentation, not prescribed steps in the IPP artefact the implementer is following. FR-094 addresses this at the command entry point (`/ipw`) and the artefact level (PLAN_DOC_TEMPLATE.md). The mandatory final step is a state reconciliation — not a forced `→ COMPLETE` — to correctly reflect tasks that remain IN PROGRESS across multiple IPW runs.

---

## Relationship to Prior Work

| Item | Relationship |
|---|---|
| FR-077 (E2:S01:T17) | Established TODO → IN PROGRESS ownership contract; FR-094 embeds it inside the IPP |
| FR-083 (global IPW gate) | FR-094 adds command-level enforcement point |
| FR-093 / E2:S16:T08 | Pattern reference — `/ukw` slash command; `/ipw` follows same structure |

---

## Next Steps

E2:S16:T09 implementation requires IPW planning phase (`/ipw E2:S16:T09`) before execution begins.

# Changelog — v0.2.16.9+1

**Release Date:** 2026-05-14 10:02:12 UTC  
**Version:** 0.2.16.9+1  
**Type:** Full release (implementation)  
**Epic:** E2 — Workflow Management Framework  
**Story:** S16 — Perpetual Ongoing Workflow Operations  
**Task:** E2:S16:T09 — `/ipw` slash command for Claude Code + mandatory IPP state transition (FR-094)

---

## Summary

Implement FR-094: `/ipw` slash command for Claude Code and mandatory task state reconciliation steps in every IPP artefact. Eliminates TODO drift by embedding the FR-077 ownership contract directly inside the IPP as prescribed executor steps, without changing transition ownership.

---

## Changes

### New Files

- `.claude/commands/ipw.md` — Self-contained IPW slash command for Claude Code. Enforces plan mode (must be invoked from within `/plan` session), environment check (AC3), argument parsing (E:S:T token + `--skip-tests` flag), eight sequential phases (0–7) with mandatory gates, and abort/completion protocol (`IPW COMPLETE` / `IPW ABORTED`). Phase 4 mandates Step 1 (`TODO → IN PROGRESS`) and final status reconciliation as prescribed items in every IPP.
- `docs/architecture/standards-and-adrs/ADR-004-ipp-state-transition-contract.md` — Formal architectural decision record for the IPP state transition mandate. Documents context (FR-077 ownership, recurring TODO drift), decision (mandatory Step 1 + final reconciliation in every IPP), consequences, and alternatives considered.
- `docs/implementation-cycles/IPP-E2S16T09-ipw-slash-command-and-ipp-state-transition.md` — Formal IPP artifact for E2:S16:T09 covering all phases of this plan.

### Updated Files

- `CLAUDE.md` — Added `## IPW Trigger Routing` section after `## UKW Trigger Routing`. Routes plain-text `IPW`/`ipw` (case-insensitive) to `/ipw`. Includes plan-mode enforcement requirement and AC3 blocked-session message.
- `packages/frameworks/kanban/templates/PLAN_DOC_TEMPLATE.md` — Section 4 (Implementation plan) now includes mandatory placeholder rows: Step 1 (`TODO → IN PROGRESS`) as first entry and final status reconciliation step as last entry. These are fixed items in every IPP.
- `packages/frameworks/workflow mgt/KB/Documentation/Developer_Docs/vwmp/implementation-planning-workflow-agent-execution.md` — (a) Trigger section: added `/ipw [E:S:T] [--skip-tests]` as canonical Claude Code slash command; (b) Mode section: explicit plan-mode enforcement requirement; (c) Phase table: updated from prose steps to explicit phase-gate table; (d) Status transition section: added "IPP state transition mandate" subsection (FR-094/ADR-004) specifying the mandatory prescribed steps.
- `.cursorrules` — Global Implementation Gate section: added canonical `/ipw` invocation note and IPP state transition mandate paragraph. ICW trigger section: added Claude Code `/ipw` note at the top.
- `AGENTS.md` — Global Implementation Gate section: added canonical `/ipw [E:S:T]` invocation line for Claude Code.
- `docs/project-management/kanban/fr-br/FR-077-ipw-built-task-status-transition-and-kboard-sync.md` — Related section: added FR-094 cross-reference with ADR-004 link, noting FR-094 as the mechanism embedding the FR-077 ownership contract inside the IPP artefact.
- `docs/project-management/kanban/epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T09-ipw-slash-command-claude-code-fr094.md` — Status updated `TODO → IN PROGRESS`; IPP artifact linked in Input and References.

---

## AC Sign-off

| AC | Status | Evidence |
|---|---|---|
| AC1 | ✅ | `.claude/commands/ipw.md` exists |
| AC2 | ✅ | Plan mode check is first section in `ipw.md` |
| AC3 | ✅ | All 8 phases (0–7) with explicit gate text in `ipw.md` |
| AC4 | ✅ | Phase 4 mandates Step 1 + final reconciliation; `PLAN_DOC_TEMPLATE.md` has both placeholders |
| AC5 | ✅ | `PLAN_DOC_TEMPLATE.md` Section 4 updated |
| AC6 | ✅ | `implementation-planning-workflow-agent-execution.md` fully updated |
| AC7 | ✅ | `CLAUDE.md` `## IPW Trigger Routing` section present |
| AC8 | ✅ | `.cursorrules` cross-references `/ipw` and IPP state transition mandate |
| AC9 | ✅ | `AGENTS.md` mentions `/ipw` |
| AC10 | ✅ | `ADR-004-ipp-state-transition-contract.md` exists |
| AC11 | ✅ | `FR-077` Related section has FR-094 cross-reference |
| AC12 | ✅ | FR-094 → E2:S16:T09 → IPP bidirectionally wired |

---

## Relationship to Prior Work

| Item | Relationship |
|---|---|
| FR-077 (E2:S01:T17) | Established TODO → IN PROGRESS ownership contract; this release embeds it in every IPP |
| FR-083 (global IPW gate) | FR-094 adds the command-level enforcement point |
| FR-093 / E2:S16:T08 | Pattern reference — `/ukw` slash command; `/ipw` follows same structure |
| ADR-002, ADR-003 | Predecessor formal decision records; ADR-004 continues the series |

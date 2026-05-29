---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-14T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E2:S16:T09 — Planning: Spec, Tests, Implementation Plan (IPW)

**Host Task:** [`T09-ipw-slash-command-claude-code-fr094.md`](../project-management/kanban/epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T09-ipw-slash-command-claude-code-fr094.md) **(E2:S16:T09)**  
**Planning for:** [FR-094](../project-management/kanban/fr-br/FR-094-ipw-slash-command-and-task-state-transition-mandate.md)  
**Status:** Approved

> **IPW (Implementation Planning Workflow):** This document was produced by `/ipw E2:S16:T09` under plan mode. It is the canonical IPP artefact for E2:S16:T09, bidirectionally wired to the host task doc.

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements (ascertained)

| ID | Requirement | Source |
|---|---|---|
| RF1 | `.claude/commands/ipw.md` exists and is self-contained; `/ipw [E:S:T]` is a valid slash command | FR-094-F1 / AC1 |
| RF2 | `/ipw` enforces plan mode; blocked if not in plan mode | FR-094-F2 / AC2 |
| RF3 | Eight sequential phases (0–7) with mandatory gates; no phase silently skippable; `--skip-tests` requires explicit justification | FR-094-F3 / AC3 |
| RF4 | Every IPP includes Step 1 (`TODO → IN PROGRESS`) and a final status reconciliation step (not a forced `→ COMPLETE`) | FR-094-F4 / AC4 |
| RF5 | `PLAN_DOC_TEMPLATE.md` Section 4 updated with mandatory state transition placeholders | FR-094-F5 / AC5 |
| RF6 | `implementation-planning-workflow-agent-execution.md` updated: slash command, plan-mode enforcement, phase gates, IPP state transition mandate | FR-094-F6 / AC6 |
| RF7 | `CLAUDE.md` `## IPW Trigger Routing` section routes plain-text `IPW`/`ipw` to `/ipw` | FR-094-F7 / AC7 |
| RF8 | `.cursorrules` IPW section cross-references `/ipw` and IPP state transition mandate | FR-094-F8 / AC8 |
| RF9 | `AGENTS.md` updated to reflect `/ipw` slash command | FR-094-F9 / AC9 |
| RF10 | ADR-004 created recording the IPP state transition contract | FR-094-F10 / AC10 |
| RF11 | `FR-077` cross-references FR-094 | AC11 |
| RF12 | FR-094 ↔ E2:S16:T09 bidirectionally linked | AC12 |

### 1.2 Non-functional requirements (ascertained)

| ID | Requirement | Source |
|---|---|---|
| RNF1 | `/ipw` structure mirrors `rw.md` and `ukw.md` | FR-094-NF1 |
| RNF2 | FR-077 ownership contract unchanged | FR-094-NF2 |
| RNF3 | Plan-mode enforcement explicit in command file, not implied | FR-094-NF3 |

### 1.3 Invariants and boundaries

- **In scope:** `.claude/commands/ipw.md`, `CLAUDE.md`, `PLAN_DOC_TEMPLATE.md`, `implementation-planning-workflow-agent-execution.md`, `.cursorrules` IPW section, `AGENTS.md`, ADR-004, `FR-077` cross-reference, formal IPP artifact
- **Out of scope:** `validate_ipw_status_drift.py`; RW Step 1c drift detection; ICW deprecation; FR-077 ownership contract changes

---

## 2. Specification

### 2.1 Goal

Create `.claude/commands/ipw.md` as the canonical Claude Code invocation point for IPW, enforcing plan mode and eight sequential phase gates. Update all dependent documents to mandate that every IPP artefact prescribes task state reconciliation steps as its first and final Implementation Plan items, eliminating the source of TODO drift without changing the FR-077 ownership model.

### 2.2 Specification mapping

All RF1–RF12 requirements map directly to the ten deliverable files listed in Section 4. The `/ipw` command (RF1–RF4) is the primary enforcement point; the document updates (RF5–RF11) propagate the mandate to all surfaces that define or describe IPW behaviour.

### 2.3 Constraints

- Plan-mode enforcement must be the first check in `ipw.md`
- The final IPP reconciliation step must be a conditional state reconciliation, not a forced `→ COMPLETE`
- `--skip-tests` requires explicit justification text in the plan doc

### 2.4 Status transition intent (mandatory for IPW-derived implementation tasks)

- **Current task status:** IN PROGRESS
- **Transition trigger to IN PROGRESS:** First implementation step (T09 task doc status update) — Step 1 of the implementation plan.
- **Transition trigger to COMPLETE:** All AC1–AC12 satisfied with evidence; RW committed.
- **Atomic propagation requirement:** Task doc status and kboard row status update in the same RW session.
- **Owner:** Implementation execution (this session).

---

## 3. Test Design

**`--skip-tests` justification:** All deliverables are markdown/config files with no executable code paths. Verification is structural inspection: file existence, required sections present, cross-link resolution, and AC checklist sign-off. Automated unit tests are not applicable for this task.

| ID | Verification | AC |
|---|---|---|
| V1 | `.claude/commands/ipw.md` exists; invoking `/ipw` in a plan session runs the command | AC1 |
| V2 | Running `/ipw` outside plan mode produces `IPW BLOCKED: plan mode required` | AC2 |
| V3 | `ipw.md` contains all 8 phases (0–7) with explicit gate text | AC3 |
| V4 | `ipw.md` Phase 4 mandates Step 1 (`TODO → IN PROGRESS`) and final reconciliation step; `PLAN_DOC_TEMPLATE.md` Section 4 has both placeholders | AC4, AC5 |
| V5 | `implementation-planning-workflow-agent-execution.md` updated: Trigger has `/ipw`; Mode has plan-mode enforcement; Phase table has gates; status transition section has IPP mandate | AC6 |
| V6 | `CLAUDE.md` contains `## IPW Trigger Routing` with plain-text routing and blocked-session text | AC7 |
| V7 | `.cursorrules` Global Gate section and ICW trigger section reference `/ipw` and IPP state transition mandate | AC8 |
| V8 | `AGENTS.md` Global Implementation Gate mentions `/ipw` | AC9 |
| V9 | `ADR-004-ipp-state-transition-contract.md` exists with accepted status | AC10 |
| V10 | `FR-077` Related section contains FR-094 cross-reference | AC11 |
| V11 | FR-094 has `Implementing Task: E2:S16:T09`; T09 doc links this IPP | AC12 |

---

## 4. Implementation plan

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| **1** | **[MANDATORY] Transition task `E2:S16:T09` status `TODO → IN PROGRESS`** in task doc. Update `Last updated` date. | Task doc `Status` = `IN PROGRESS` |
| 2 | Create `.claude/commands/ipw.md` — self-contained IPW slash command with plan-mode check, environment check, argument parsing, 8-phase structure with gates, abort/completion protocol | `.claude/commands/ipw.md` |
| 3 | Update `CLAUDE.md` — add `## IPW Trigger Routing` section after `## UKW Trigger Routing` | `CLAUDE.md` updated |
| 4 | Update `PLAN_DOC_TEMPLATE.md` Section 4 — add mandatory Step 1 and final-step placeholders to the implementation plan table | `PLAN_DOC_TEMPLATE.md` updated |
| 5 | Update `implementation-planning-workflow-agent-execution.md` — Trigger: add `/ipw`; Mode: plan-mode enforcement; Phase table: explicit gates; Status transition: add IPP state transition mandate section | `implementation-planning-workflow-agent-execution.md` updated |
| 6 | Update `.cursorrules` — Global Gate section: add `/ipw` canonical invocation and IPP mandate; ICW trigger section: add Claude Code `/ipw` note | `.cursorrules` updated |
| 7 | Update `AGENTS.md` — Global Implementation Gate: add `/ipw [E:S:T]` as canonical Claude Code invocation | `AGENTS.md` updated |
| 8 | Create `docs/architecture/standards-and-adrs/ADR-004-ipp-state-transition-contract.md` | `ADR-004` exists |
| 9 | Update `FR-077` — add FR-094 cross-reference in Related section | `FR-077` updated |
| 10 | Create this IPP artifact at `docs/implementation-cycles/IPP-E2S16T09-ipw-slash-command-and-ipp-state-transition.md` | IPP exists |
| 11 | Update T09 task doc `Input` and `References` to link this IPP | T09 wired to IPP |
| 12 | Run `/rw E2:S16:T09` to commit all changes | Release committed and pushed |
| **13** | **[MANDATORY] Reconcile E2:S16:T09 status** — if all ACs satisfied: `COMPLETE` + `✅ COMPLETE (v{version})`; otherwise `IN PROGRESS`. Handled by RW Step 7 kanban reconciliation. | Task doc status correct |

### 4.1 Files to create

- `.claude/commands/ipw.md`
- `docs/architecture/standards-and-adrs/ADR-004-ipp-state-transition-contract.md`
- `docs/implementation-cycles/IPP-E2S16T09-ipw-slash-command-and-ipp-state-transition.md` (this file)

### 4.2 Files to modify

- `CLAUDE.md`
- `packages/frameworks/kanban/templates/PLAN_DOC_TEMPLATE.md`
- `packages/frameworks/workflow mgt/KB/Documentation/Developer_Docs/vwmp/implementation-planning-workflow-agent-execution.md`
- `.cursorrules`
- `AGENTS.md`
- `docs/project-management/kanban/fr-br/FR-077-ipw-built-task-status-transition-and-kboard-sync.md`
- `docs/project-management/kanban/epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T09-ipw-slash-command-claude-code-fr094.md`

### 4.3 Dependency order

1. T09 task doc status update → 2. `.claude/commands/ipw.md` → 3–4 `CLAUDE.md`, `PLAN_DOC_TEMPLATE.md` (parallel) → 5–9 remaining docs (parallel, after `/ipw` content finalised) → 10–11 IPP + T09 wiring → 12 RW

---

## 5. Success / verification criteria

- [ ] AC1: `.claude/commands/ipw.md` exists, self-contained, invocable as `/ipw`
- [ ] AC2: Plan mode check is first in `ipw.md`; blocked outside plan mode
- [ ] AC3: All 8 phases with gates present in `ipw.md`
- [ ] AC4: Phase 4 mandates Step 1 (`TODO → IN PROGRESS`) and final reconciliation step
- [ ] AC5: `PLAN_DOC_TEMPLATE.md` Section 4 has mandatory placeholder rows
- [ ] AC6: `implementation-planning-workflow-agent-execution.md` fully updated
- [ ] AC7: `CLAUDE.md` `## IPW Trigger Routing` section present and correct
- [ ] AC8: `.cursorrules` cross-references `/ipw` and IPP state transition mandate
- [ ] AC9: `AGENTS.md` mentions `/ipw`
- [ ] AC10: `ADR-004-ipp-state-transition-contract.md` exists
- [ ] AC11: `FR-077` cross-references FR-094
- [ ] AC12: Bidirectional wiring FR-094 ↔ E2:S16:T09 ↔ this IPP

---

## References

- [Host Task E2:S16:T09](../project-management/kanban/epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T09-ipw-slash-command-claude-code-fr094.md)
- [FR-094](../project-management/kanban/fr-br/FR-094-ipw-slash-command-and-task-state-transition-mandate.md)
- [FR-077](../project-management/kanban/fr-br/FR-077-ipw-built-task-status-transition-and-kboard-sync.md)
- [ADR-004](../architecture/standards-and-adrs/ADR-004-ipp-state-transition-contract.md)
- `.claude/commands/ipw.md`
- `packages/frameworks/kanban/templates/PLAN_DOC_TEMPLATE.md`
- `packages/frameworks/workflow mgt/KB/Documentation/Developer_Docs/vwmp/implementation-planning-workflow-agent-execution.md`

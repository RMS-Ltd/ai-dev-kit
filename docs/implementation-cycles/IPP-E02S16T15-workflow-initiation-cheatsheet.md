---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-30T20:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E02:S16:T15 — Planning: Spec, Tests, Implementation Plan (IPW)

**Host Task:** [`T15-workflow-initiation-cheatsheet-uxr015.md`](../project-management/kanban/epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T15-workflow-initiation-cheatsheet-uxr015.md) **(E02:S16:T15)**  
**Planning for:** [UXR-015 — Workflow initiation cheatsheet](../project-management/kanban/fr-br/UXR-015-workflow-initiation-cheatsheet.md)  
**Status:** Published

> **IPW (Implementation Planning Workflow):** Produced by IPW for E02:S16:T15. Bidirectional wiring to the host task `Input` and `References` is confirmed.

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements (ascertained)

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RF1 | Create `docs/guides/workflow-initiation-cheatsheet.md` with decision tree + per-workflow matrices (RW, UKW, IPW/ICW, CMW, PVW) | UXR-015 R1/R2, T15 AC1 |
| RF2 | Each workflow section lists prerequisites and post-run handoff (`RW` where applicable) | UXR-015, T15 AC2 |
| RF3 | Flag disambiguation: `RW -d` vs `UKW -a` vs planned `UKW -ad` | UXR-015 Finding 3, T15 AC3 |
| RF4 | Link cheatsheet from `docs/guides/README.md` | UXR-015 R4, T15 AC4 |
| RF5 | Mark `UKW -ad` as planned; do not implement `-ad` behavior | UXR-015, T15 scope |
| RF6 | Two-digit padded E/S/T examples per UXR-014 | UXR-015 Notes |
| RF7 | “Last verified against” note; `.cursorrules` is agent SoT | UXR-015 Notes |
| RF8 | One-line pointer in `CLAUDE.md` and `AGENTS.md` | UXR-015 R5 |

### 1.2 Non-functional requirements (ascertained)

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RNF1 | Human-scannable; initiation-only (not full step guides) | UXR-015 |
| RNF2 | Links resolve to canonical deep docs | UXR-015 |
| RNF3 | Evergreen lifecycle frontmatter on new cheatsheet | Task scope |
| RNF4 | No packaged framework duplication in v1 | UXR R6 deferred |

### 1.3 Invariants and boundaries

- **In scope:** Cheatsheet, guides README, agent entry pointers, IPP + task wiring
- **Out of scope:** `UKW -ad` implementation; Docusaurus sidebar; validator scripts; VWMP guide rewrites

---

## 2. Specification

### 2.1 Goal

Provide a single scannable maintainer reference under `docs/guides/` for workflow invocation — triggers, flags, prerequisites, sequences, and blocked-session recovery — without replacing agent execution guides.

### 2.2 Specification mapping

RF1–RF4 map to cheatsheet sections A–E plus sequences, blocked-session, and deep links. RF5–RF7 constrain content accuracy. RF8 improves discoverability.

### 2.3 Constraints

- Agent behavior SoT remains `.cursorrules` and `.claude/commands/*.md`
- Cheatsheet is human-first quick reference

### 2.4 Status transition intent

- **Current task status:** IN PROGRESS (implementation Step 1)
- **Transition to COMPLETE:** All T15 AC1–AC5 satisfied; RW cut with version anchor
- **Owner:** Implementation execution

### 2.5 ADR necessity decision

| ID | Trigger | Y/N | Evidence |
| -- | ------- | --- | -------- |
| T1–T7 | All | N | Doc-only; UXR-015 prescribes structure |
| E1–E5 | All | Pass | Single doc locus; reversible |

**Outcome:** `EXEMPT` — governing doc: [UXR-015](../project-management/kanban/fr-br/UXR-015-workflow-initiation-cheatsheet.md)

---

## 3. Test design

**`--skip-tests` justification:** Documentation-only; verification is structural inspection of markdown and links.

| ID | Behavior / layer | Expected check | Covers |
| -- | ---------------- | -------------- | ------ |
| V1 | File existence | `docs/guides/workflow-initiation-cheatsheet.md` exists | AC1 |
| V2 | Section coverage | RW, UKW, IPW/ICW, CMW, PVW sections present | AC1 |
| V3 | Prerequisites/handoff | Each workflow has prerequisite + handoff rows | AC2 |
| V4 | Flag disambiguation | `RW -d`, `UKW -a`, planned `UKW -ad` explicit | AC3 |
| V5 | README link | `docs/guides/README.md` links cheatsheet | AC4 |
| V6 | Link resolution | Relative links in cheatsheet resolve | RNF2 |
| V7 | EST padding | Examples use `E02:S16:T15` style | RF6 |

---

## 4. Implementation plan

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| **1** | **[MANDATORY]** `TODO → IN PROGRESS`; update `Last updated` | Task doc |
| 2 | Write this IPP; wire task ↔ IPP | IPP + task links |
| 3 | Author `docs/guides/workflow-initiation-cheatsheet.md` | Cheatsheet |
| 4 | Update `docs/guides/README.md` | AC4 |
| 5 | Update `CLAUDE.md`, `AGENTS.md` | RF8 |
| 6 | Run V1–V7 verification | Evidence in §7 |
| 7 | `RW E02:S16:T15` | Release |
| **8** | **[MANDATORY]** Reconcile status to `COMPLETE` + forensic marker | Task doc + kboard |

### 4.1 Files to create or modify

- CREATE: `docs/guides/workflow-initiation-cheatsheet.md`
- CREATE: `docs/implementation-cycles/IPP-E02S16T15-workflow-initiation-cheatsheet.md`
- UPDATE: `docs/guides/README.md`, `CLAUDE.md`, `AGENTS.md`, task T15 doc

---

## 5. Documentation deliverables

| Doc ID | Path | Action | Scope |
| ------ | ---- | ------ | ----- |
| D-C1 | `docs/guides/workflow-initiation-cheatsheet.md` | CREATE | Full cheatsheet |
| D-C2 | `docs/implementation-cycles/IPP-E02S16T15-workflow-initiation-cheatsheet.md` | CREATE | This IPP |
| D-U1 | `docs/guides/README.md` | UPDATE | Key Documents link |
| D-U2 | `CLAUDE.md` | UPDATE | Cheatsheet pointer |
| D-U3 | `AGENTS.md` | UPDATE | Cheatsheet pointer |
| D-U4 | Task T15 | UPDATE | IPP links, status |
| D-N1 | `.cursorrules` | NONE | Agent SoT unchanged |

---

## 6. Documentation housing

| Doc ID | Canonical path | Publication | Lifecycle |
| ------ | -------------- | ----------- | --------- |
| D-C1 | `docs/guides/workflow-initiation-cheatsheet.md` | PUBLISHED | evergreen |
| D-C2 | `docs/implementation-cycles/IPP-E02S16T15-workflow-initiation-cheatsheet.md` | PUBLISHED | evergreen |

---

## 7. Success / verification criteria

- [x] IPP §1–§7 complete; bidirectional task ↔ IPP links
- [x] Cheatsheet AC1–AC4 (V1–V5) — verified at implementation
- [x] UXR-015 AC5 (intake wiring) satisfied
- [x] RW releases with version anchor on T15 (v0.2.16.15+1)

---

## References

- [UXR-015](../project-management/kanban/fr-br/UXR-015-workflow-initiation-cheatsheet.md)
- [T15 task doc](../project-management/kanban/epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T15-workflow-initiation-cheatsheet-uxr015.md)
- `.claude/commands/rw.md`, `ukw.md`, `ipw.md`
- [Release Workflow agent execution guide](../packages/frameworks/workflow%20mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md)
- [Update Kanban Workflow agent execution guide](../packages/frameworks/workflow%20mgt/KB/Documentation/Developer_Docs/vwmp/update-kanban-workflow-agent-execution.md)

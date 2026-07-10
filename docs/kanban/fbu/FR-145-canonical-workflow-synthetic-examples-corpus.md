---
lifecycle: evergreen
ttl_days: null
created_at: 2026-07-10T17:49:54Z
expires_at: null
housekeeping_policy: keep
---

# FR-145: Canonical workflow synthetic examples corpus

**Type:** Feature Request (FR)  
**ID:** FR-145  
**Submitted:** 2026-07-10  
**Submitted By:** Operator (agent cold-start / token-efficiency observation)  
**Priority:** HIGH  
**Severity:** MEDIUM (repeated token waste + inconsistent workflow grounding on every new agent session)  
**Status:** ACCEPTED  
**Version:** v0.2.3.14+0 (SemVer v0.4.1248+0) — kanban-init

**Implementing Task:** [E02:S03:T14](../epics/epic-02/story-03-additional-workflows-and-examples/T14-canonical-workflow-synthetic-examples-corpus-fr145.md)

**Related:** [FR-103](FR-103-agent-bootstrap-and-task-routing.md) / [ADR-012](../../architecture/standards-and-adrs/ADR-012-agent-bootstrap-and-task-routing.md) (bootstrap routing) · [UXR-015](UXR-015-workflow-initiation-cheatsheet.md) (human trigger cheatsheet) · [FR-056](FR-056-standardize-packaged-workflow-documentation-and-instructions.md) · [FR-126](FR-126-workflow-encapsulation-integrity-mwf-leverage.md)

---

## Summary

Create a **maintained corpus of optimally designed synthetic examples** — one (or one per major mode) per canonical repo workflow — that demonstrates **every supported option/flag** so cold-started agents ground on a single authoritative exemplar instead of randomly mining past runs, changelogs, or journals.

---

## Problem Statement

When an operator spins up a **new agent** and asks it to run a canonical workflow (`RW`, `UKW`, `IPW`, `IDW`, `MWF`, `CMW`, `PVW`, `KMA`, …), the agent must:

1. Interpret the trigger and flags.
2. Gather enough procedural context to execute correctly.

Today, step 2 often includes **ad hoc exploration of historical examples** — prior RW changelogs, agent transcripts, journals, or incidental worked examples — chosen seemingly at random. That pattern is:

- **Expensive** — extra file reads and long context for low-signal historical noise.
- **Slow** — discovery latency before the first real workflow step.
- **Inconsistent** — different sessions latch onto different (sometimes outdated or incomplete) exemplars.
- **Incomplete** — real past runs rarely exercise every flag combination (`--art`, `--dpz`, `--push`, `UKW -c`, `MWF delivery --art`, etc.).

[FR-103](FR-103-agent-bootstrap-and-task-routing.md) / [ADR-012](../../architecture/standards-and-adrs/ADR-012-agent-bootstrap-and-task-routing.md) already constrain *which tracks* to load. They do **not** yet provide a **canonical few-shot / golden-path exemplar** per workflow that is purpose-built for agent grounding.

The human [workflow-initiation cheatsheet](../../guides/workflow-initiation-cheatsheet.md) lists triggers; agent execution guides are long SoT prose. Neither substitutes for a **compact, option-complete synthetic run narrative** an agent can load once and trust.

---

## Proposed Solution

### Corpus design

For each canonical workflow (and each **major mode** where flags change control flow), author a **synthetic example** that:

| Property | Requirement |
| -------- | ----------- |
| **Optimal** | Minimal tokens for maximal procedural coverage; no forensic digressions |
| **Option-complete** | Demonstrates every supported flag / mode matrix row (or explicitly marks N/A) |
| **Synthetic** | Invented but realistic `E:S:T`, paths, and outcomes — not a dump of a real past run |
| **Authoritative** | Marked as the **preferred grounding exemplar**; agents must prefer it over random history |
| **Stable** | Versioned / reviewed when workflow flags change; drift is a maintenance defect |

### Minimum workflow coverage (v1)

| Workflow | Modes / options the exemplar must cover |
| -------- | ---------------------------------------- |
| **RW** | Full; `-d`; `-k`; `--art`; `--dpz` / `--doc-policy-zero`; `--push` vs local-default; abort paths for Steps 1 / 1b–1f |
| **UKW** | Comprehensive; `-u`; `-p`; `-a <target>`; `--rp`; `-c` (standalone constraints) |
| **IPW** | Plan-mode gate; `E:S:T`; `--skip-tests` |
| **IDW** | Linked IPP; `--rw`; `--push` requires `--rw`; `--art` forwarding |
| **MWF** | `delivery`; `ipw,idw,rw`; Phase 0 preflight; `--art` / `--push` |
| **CMW** | Standalone + RW Step 9.5 trigger |
| **PVW** | Standalone + RW Step 2.5 |
| **KMA** | Path arg; Step 3 blocking sign-off |

### Housing & wiring (implementation decides exact paths)

Preferred shape (to refine in IPW):

1. **Corpus root** under workflow-mgt or `docs/guides/workflow-examples/` (e.g. `RW-synthetic-example.md`, …).
2. **Index** listing workflow → exemplar path (machine-readable optional).
3. **Bootstrap wiring:** ADR-012 / `AGENTS.md` `workflows` track `loadFirst` (or command-file “Context gathering” step) points agents at the matching exemplar **before** searching historical runs.
4. **Anti-pattern rule:** Do not mine `docs/journals/`, changelog archives, or agent transcripts for “how to run X” when a synthetic exemplar exists.

### Non-goals (v1)

- Replacing agent execution guides or `.claude/commands/*.md` as SoT.
- Recording real forensic run logs (journals remain ADR-008 scope).
- Auto-generating exemplars from live RW runs without human curation.
- Training / fine-tuning datasets outside the repo.

---

## Requirements

### Functional Requirements

- [ ] **FR-145-F1:** One synthetic exemplar (or one per major mode) exists for each v1 workflow in the coverage table.
- [ ] **FR-145-F2:** Each exemplar documents the full option/flag matrix for that workflow (including abort / blocked-session outcomes where applicable).
- [ ] **FR-145-F3:** Bootstrap / command routing instructs agents to load the matching exemplar during context gathering and **prefer it over ad hoc historical search**.
- [ ] **FR-145-F4:** Corpus index (markdown and/or manifest entry) maps trigger keywords → exemplar path(s).
- [ ] **FR-145-F5:** Maintenance note: when a workflow gains/removes a flag, the exemplar is updated in the same change set (or a follow-on task is filed).

### Non-Functional Requirements

- [ ] **FR-145-NF1:** Exemplars are token-efficient (target: readable in one short load; avoid duplicating full `.cursorrules` prose).
- [ ] **FR-145-NF2:** Compatible with ADR-012 lazy-load model (exemplar is Layer-3 detail after track match, or an explicit `loadFirst` addition for `workflows`).
- [ ] **FR-145-NF3:** Adopter-safe: packaged under framework docs or clearly marked maintainer/agent corpus; no requirement that adopters copy real forensic history.

---

## Scope Analysis

**Problem Domain:** Agent bootstrap / workflow execution grounding / documentation corpus  
**Affected Areas:**
- [x] Documentation
- [x] Other: Agent bootstrap (`AGENTS.md`, ADR-012 routing), `.claude/commands/*`, workflow-mgt examples
- [ ] Backend/API
- [ ] Frontend/UI
- [ ] Database/Schema
- [ ] Testing (optional: lint that each workflow command links an exemplar)

**Estimated Complexity:**
- [ ] Simple (1-3 days)
- [x] Medium (1 week) — authoring + wiring; may split per-workflow waves
- [ ] Complex (2+ weeks)
- [ ] Very Complex (1+ month)

---

## Use Cases

**Primary Use Case:**  
Operator opens a new agent chat and types `RW E02:S03:T14 --art`. The agent matches the `workflows` track, loads the **RW synthetic exemplar**, and proceeds without grepping random past releases.

**Additional Use Cases:**
- Agent compares operator flags against the exemplar’s option matrix and asks only for missing required tokens.
- Maintainer updates UKW flags; updates `UKW-synthetic-example.md` in the same PR as command/docs changes.
- Adopter agents in greenfield installs receive the same corpus via framework package paths.

---

## Acceptance Criteria

- [ ] **AC1:** Corpus exists with exemplars for RW, UKW, IPW, IDW, MWF, CMW, PVW, and KMA (v1 table).
- [ ] **AC2:** Each exemplar’s option matrix matches the current cheatsheet / command file for that workflow (spot-check at ship).
- [ ] **AC3:** `AGENTS.md` and/or `.claude/commands/{rw,ukw,ipw,idw,mwf,…}.md` instruct agents to load the matching exemplar before historical example search.
- [ ] **AC4:** Anti-pattern documented: journals / changelog archives / transcripts are not default grounding sources when an exemplar exists.
- [ ] **AC5:** FR-145 ↔ E02:S03:T14 bidirectional wiring; board row present until ship.

---

## Dependencies

**Blocks:**
- More efficient cold-start workflow sessions (token + latency)

**Blocked By:**
- None for intake; implementation should sync with current command-file flag matrices

**Related Work:**
- FR-103 / ADR-012 — routing layers (complement; this FR adds golden exemplars)
- UXR-015 — cheatsheet (human; exemplars are agent-oriented narratives)
- FR-056 — packaged workflow documentation standardization

---

## Intake Decision

**Intake Status:** ACCEPTED  
**Intake Date:** 2026-07-10  
**Intake By:** Agent (intake-process)

**Decision Flow Results:**
- [x] Story Match Found: Epic 2, Story 03 (Additional Workflows & Examples) → Task T14

**Assigned To:**
- Epic: Epic 2 — Workflow Management Framework
- Story: Story 03 — Additional Workflows & Examples
- Task: E02:S03:T14 — Canonical workflow synthetic examples corpus (FR-145)
- Version: `0.2.3.14+0` (SemVer v0.4.1248+0)

**Kanban Links:**
- Epic: [`docs/kanban/epics/epic-02/epic-02.md`](../epics/epic-02/epic-02.md)
- Story: [`docs/kanban/epics/epic-02/story-03-additional-workflows-and-examples.md`](../epics/epic-02/story-03-additional-workflows-and-examples.md)
- Task: [`T14-canonical-workflow-synthetic-examples-corpus-fr145.md`](../epics/epic-02/story-03-additional-workflows-and-examples/T14-canonical-workflow-synthetic-examples-corpus-fr145.md)

---

## Notes

- “Every option in one example” may mean **one narrative with annotated branches** or **a short matrix + one happy-path walkthrough** — IPW should pick the denser-but-still-token-cheap format.
- Prefer **synthetic** identifiers (e.g. fictional `E99:S01:T01`) so agents do not treat exemplars as live release instructions for real tasks.

---

## References

- [ADR-012 — Agent bootstrap and task routing](../../architecture/standards-and-adrs/ADR-012-agent-bootstrap-and-task-routing.md)
- [Workflow initiation cheatsheet](../../guides/workflow-initiation-cheatsheet.md)
- [`.claude/commands/`](../../../.claude/commands/)
- [Agent-driven workflow execution](../../../packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/agent-driven-workflow-execution.md)

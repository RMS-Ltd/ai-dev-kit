---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-10T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# FR-123: IPW optional full delivery chain (`IPW … --rw` → IPW → IDW → RW)

**Type:** Feature Request (FR)  
**ID:** FR-123  
**Submitted:** 2026-06-10  
**Submitted By:** User — workflow chaining ergonomics  
**Priority:** HIGH  
**Severity:** MEDIUM  
**Status:** OPEN (intake banked @ v0.2.3.9+1)

**Implementing Task:** [E02:S03:T09](../epics/epic-02/story-03-additional-workflows-and-examples/T09-ipw-full-delivery-chain-idf-rw-fr123.md)

---

## Summary

Add an optional **`--rw`** flag to **IPW** that, after `IPW COMPLETE`, chains **IDW** then **local-complete RW** for the same host task — a single meta-workflow for plan → implement → release, mirroring the existing **`IDW … --rw`** pattern at the planning entry point.

---

## Problem Statement

The canonical delivery sequence is **`IPW` → `IDW` → `RW`** ([workflow-initiation-cheatsheet §7](../../guides/workflow-initiation-cheatsheet.md)). **IDW** already supports **`--rw`** to chain release after implementation. Operators who intend the full pipeline must invoke three separate triggers and manually hand off between **plan mode** (IPW) and **implementation mode** (IDW).

There is no symmetric opt-in chain from the planning entry point. This increases operator friction and session fragmentation for well-scoped tasks where the operator already intends plan → implement → ship in one continuous run.

---

## Requirements

### Functional

- [ ] **FR-123-F1:** `.claude/commands/ipw.md` — parse optional lowercase **`--rw`**; forward **`--push`** / **`--art`** to the RW leg (same convention as IDW `--rw` chain).
- [ ] **FR-123-F2:** After **`IPW COMPLETE`**, when `--rw` present, automatically invoke **IDW** for the same `E:S:T`, then **RW** after **`IDW COMPLETE`** (reuse IDW `--rw` semantics for the IDW→RW leg rather than duplicating RW orchestration).
- [ ] **FR-123-F3:** KB agent execution guide section under workflow-mgt vwmp documenting the full chain, abort semantics, and mode-transition rules.
- [ ] **FR-123-F4:** `CLAUDE.md`, `.cursorrules`, `AGENTS.md`, and `project-agent-manifest.json` routing — document `IPW … --rw` as a workflow command variant.
- [ ] **FR-123-F5:** Cheatsheet §4 + §7 + flag disambiguation — **`--rw` on IPW** = full pipeline; **`--rw` on IDW** = implement + release only.
- [ ] **FR-123-F6:** Workflow registry entry update for implementation-cycle / IPW package when applicable.
- [ ] **FR-123-F7:** `--skip-tests` on IPW remains valid; chain does not infer skip for IDW/CQG.

### Non-functional

- [ ] **FR-123-NF1:** **Default unchanged:** bare `IPW E:S:T` does **not** chain to IDW or RW (preserves FR-119-NF2 / review-before-implement default).
- [ ] **FR-123-NF2:** IPW does not commit, tag, or bump version; RW owns release surfaces.
- [ ] **FR-123-NF3:** Any phase abort (**IPW ABORTED**, **IDW ABORTED**, **RW ABORTED**) terminates the chain; terminal state names the failing leg.
- [ ] **FR-123-NF4:** **Mode transition:** chain documentation MUST require exit from plan mode before the IDW leg (IPW blocked in implementation mode; IDW blocked in plan mode).
- [ ] **FR-123-NF5:** Passing `--rw` at IPW invoke time is explicit operator authorization to skip manual IPP review handoff and proceed to IDW (analogous to `IDW E:S:T` satisfying FR-083 for the implementation leg).

---

## Acceptance Criteria

- [ ] **AC1:** `/ipw E:S:T --rw` documented in `ipw.md`; blocked in wrong mode / missing tools per existing IPW AC3 patterns.
- [ ] **AC2:** Chain order verified: `IPW COMPLETE` → `IDW` → `IDW COMPLETE` → `RW COMPLETE (local)`; `--push` / `--art` forwarded.
- [ ] **AC3:** Cheatsheet flag table distinguishes IPW `--rw` vs IDW `--rw`.
- [ ] **AC4:** FR ↔ task ↔ (future) IPP bidirectional links; RW version anchor on delivery task.
- [ ] **AC5:** Abort at any leg leaves repo without partial RW commit/tag from a failed chain.

---

## Dependencies

**Blocked By:** None (composes FR-042 IPW, FR-119 IDW, existing RW)

**Related Work:**

- [FR-042](FR-042-implementation-planning-workflow-ipw.md) — IPW baseline
- [FR-083](FR-083-global-ipw-gated-implementation-contract.md) — implementation gate
- [FR-094](FR-094-ipw-slash-command-and-task-state-transition-mandate.md) — IPW slash command
- [FR-119](FR-119-implementation-delivery-workflow-idw.md) — IDW + `--rw` chain
- [UXR-015](UXR-015-workflow-initiation-cheatsheet.md) — cheatsheet home

---

## Intake Decision

**Intake Status:** ACCEPTED  
**Intake Date:** 2026-06-10  
**Intake By:** Agent (atomic intake)

**Assigned To:**

- Epic: Epic 2 — Workflow Management Framework
- Story: Story 003 — Additional Workflows & Examples
- Task: T09 — IPW full delivery chain (`--rw`)
- Version: `0.2.3.9+1`

**Kanban Links:**

- Story: [`story-03-additional-workflows-and-examples.md`](../epics/epic-02/story-03-additional-workflows-and-examples.md)
- Task: [`T09-ipw-full-delivery-chain-idf-rw-fr123.md`](../epics/epic-02/story-03-additional-workflows-and-examples/T09-ipw-full-delivery-chain-idf-rw-fr123.md)

---

## Notes

**Flag semantics (context-dependent):**

| Trigger | `--rw` meaning |
| ------- | -------------- |
| `IPW E:S:T --rw` | Full pipeline: IPW → IDW → RW |
| `IDW E:S:T --rw` | Implement then RW only |

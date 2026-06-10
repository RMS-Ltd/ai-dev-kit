---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-10T14:00:00Z
expires_at: null
housekeeping_policy: keep
---

# FR-124: Meta-workflow orchestration (composite workflow chains)

**Type:** Feature Request (FR)  
**ID:** FR-124  
**Submitted:** 2026-06-10  
**Submitted By:** User — workflow composition / delivery pipeline ergonomics  
**Priority:** HIGH  
**Severity:** MEDIUM  
**Status:** IMPLEMENTED @ **v0.2.3.9+3** (2026-06-10)

**Implementing Task:** [E02:S03:T09](../epics/epic-02/story-03-additional-workflows-and-examples/T09-ipw-full-delivery-chain-idf-rw-fr123.md)

**Supersedes approach in:** [FR-123](FR-123-ipw-full-delivery-chain-idf-rw.md) (`IPW … --rw` per-workflow chain flag — withdrawn in favour of this FR)

---

## Summary

Introduce a **meta-workflow** layer — an orchestration workflow that **composes** existing encapsulated workflows (IPW, IDW, RW, UKW, CMW, …) into operator-defined **chains**, without embedding chain logic inside each atomic workflow. **v1 recipe:** full delivery `IPW → IDW → RW` for host task `E:S:T`.

---

## Problem Statement

Operators routinely run multi-step sequences (e.g. **IPW → IDW → RW** per [workflow-initiation-cheatsheet §7](../../guides/workflow-initiation-cheatsheet.md)). Today:

- **Cheatsheet** documents sequences only — three separate triggers and manual handoffs.
- **`IDW … --rw`** embeds a **two-leg** chain inside IDW (implement → release).
- A proposed **`IPW … --rw`** ([FR-123](FR-123-ipw-full-delivery-chain-idf-rw.md)) would embed a **three-leg** chain inside IPW — duplicating orchestration, overloading context-dependent `--rw` semantics, and violating encapsulation.

**Atomic workflows** (IPW, IDW, RW) each have distinct **modes**, **gates**, and **completion contracts**. Composition belongs in a **separate orchestrator**, not as growing flag surface on every workflow entry point.

---

## Requirements

### Functional

- [ ] **FR-124-F1:** Canonical trigger for meta-workflow orchestration — **`MWF`** (Meta-Workflow) plain-text + `.claude/commands/mwf.md` slash command (name open to IPP refinement; document alias policy if any).
- [ ] **FR-124-F2:** Parse host **`E:S:T`** and a **recipe** (ordered workflow abbreviations). **v1 built-in recipe:** `delivery` or explicit `ipw,idw,rw` → `IPW → IDW → RW`.
- [ ] **FR-124-F3:** Orchestrator **delegates** each leg to the existing command spec (`.claude/commands/ipw.md`, `idw.md`, `rw.md`) — **does not** reimplement IPW phases, IDW phases, or RW steps inline.
- [ ] **FR-124-F4:** **Mode gates** between legs documented and enforced: IPW requires plan mode; IDW/RW require implementation (non-plan) mode; orchestrator emits `MWF CHAIN PAUSED: exit plan mode…` when needed (not a planning failure).
- [ ] **FR-124-F5:** **v1 delivery recipe** composes release via **`IDW E:S:T --rw`** (reuse existing IDW→RW chain) after IPW completes — orchestrator forwards `--push` / `--art` to the IDW leg when present on the MWF trigger.
- [ ] **FR-124-F6:** KB agent execution guide under workflow-mgt vwmp (`meta-workflow-agent-execution.md` or section in workflow taxonomy doc).
- [ ] **FR-124-F7:** Routing updates: `CLAUDE.md`, `.cursorrules`, `AGENTS.md`, `project-agent-manifest.json`.
- [ ] **FR-124-F8:** Cheatsheet: new § for MWF; §7 sequences reference MWF for full delivery; flag table (MWF vs `IDW --rw`).
- [ ] **FR-124-F9:** `workflow-registry.yaml` — `composite_workflows` or meta-workflow entry with v1 recipes (extensible).
- [ ] **FR-124-F10:** **Abort propagation:** any leg `ABORTED` terminates the chain; terminal state names failing leg; no partial RW commit/tag from aborted chain.

### Non-functional

- [ ] **FR-124-NF1:** **IPW, IDW, RW remain encapsulated** — no requirement to add chain flags to IPW for v1 (FR-123 approach withdrawn).
- [ ] **FR-124-NF2:** **`IDW --rw` unchanged** — remains the two-leg implement+release chain inside IDW.
- [ ] **FR-124-NF3:** Invoking **`MWF … delivery`** (or equivalent) with recipe including IDW satisfies **FR-083** implementation authorization for the IDW leg (orchestrator invoke = operator intent).
- [ ] **FR-124-NF4:** Extensible recipe registry for future chains (`ukw,rw`, `cmw,rw`, …) without new per-workflow flags.

---

## v1 invocation examples (target)

| Invocation | Meaning |
| ---------- | ------- |
| `MWF E02:S03:T09 delivery` | Full delivery: IPW → (mode gate) → IDW --rw → RW |
| `MWF E02:S03:T09 ipw,idw,rw` | Same recipe, explicit leg list |
| `MWF E02:S03:T09 delivery --push` | Forward `--push` to IDW `--rw` chain |
| `MWF E02:S03:T09 delivery --art` | Forward `--art` to IDW `--rw` chain |

---

## Acceptance Criteria

- [ ] **AC1:** `mwf.md` + KB guide document orchestration contract; atomic workflow guides unchanged in responsibility.
- [ ] **AC2:** v1 delivery recipe verified: `MWF COMPLETE` path yields IPP + implementation + local-complete RW (or documented pause at mode gate).
- [ ] **AC3:** FR-123 superseded; no `IPW --rw` requirement shipped.
- [ ] **AC4:** Cheatsheet and agent routing list MWF; `IDW --rw` semantics unchanged.
- [ ] **AC5:** FR-124 ↔ T09 ↔ IPP bidirectional links; RW version anchor on delivery.

---

## Dependencies

**Blocked By:** None (composes FR-042 IPW, FR-119 IDW, existing RW)

**Related Work:**

- [FR-123](FR-123-ipw-full-delivery-chain-idf-rw.md) — superseded approach
- [FR-119](FR-119-implementation-delivery-workflow-idw.md) — IDW `--rw`
- [FR-042](FR-042-implementation-planning-workflow-ipw.md) — IPW
- [FR-083](FR-083-global-ipw-gated-implementation-contract.md) — implementation gate
- [UXR-015](UXR-015-workflow-initiation-cheatsheet.md) — cheatsheet
- [FR-050](FR-050-workflows-directory-structure-reorganization.md) — registry/orchestrator direction (aspirational `chain_workflows` in trigger-aware docs)

---

## Intake Decision

**Intake Status:** ACCEPTED (banked @ **v0.2.3.9+2**)  
**Intake Date:** 2026-06-10  
**Intake By:** Agent (scope pivot from FR-123, same task)

**Assigned To:**

- Epic: Epic 2 — Workflow Management Framework
- Story: Story 003 — Additional Workflows & Examples
- Task: T09 — Meta-workflow orchestration (FR-124)
- Prior intake: FR-123 banked @ `v0.2.3.9+1` (historical)

**Planning artifact:** [IPP-E02S03T09-meta-workflow-orchestration-mwf-fr124.md](../../implementation-cycles/IPP-E02S03T09-meta-workflow-orchestration-mwf-fr124.md)

**Kanban Links:**

- Story: [`story-03-additional-workflows-and-examples.md`](../epics/epic-02/story-03-additional-workflows-and-examples.md)
- Task: [`T09-ipw-full-delivery-chain-idf-rw-fr123.md`](../epics/epic-02/story-03-additional-workflows-and-examples/T09-ipw-full-delivery-chain-idf-rw-fr123.md)

---

## Architecture sketch

```text
Operator → MWF orchestrator → [IPW] → mode gate → [IDW --rw] → [RW via IDW chain]
                ↑
        recipes: delivery, (future: ukw+rw, …)
```

Atomic workflows: unchanged step lists and gates. Orchestrator: leg sequencing, mode gates, flag forwarding, abort aggregation.

---

## References

- [Workflow initiation cheatsheet §7](../../guides/workflow-initiation-cheatsheet.md)
- [implementation-delivery-workflow-agent-execution.md](../../packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/implementation-delivery-workflow-agent-execution.md)

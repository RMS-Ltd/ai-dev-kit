---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-10T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 2, Story 3, Task 9: Meta-workflow orchestration (MWF) — FR-124

**Task ID:** E02:S03:T09  
**Status:** ✅ COMPLETE  
**Priority:** HIGH  
**Created:** 2026-06-10  
**Last updated:** 2026-06-10 (v0.2.3.9+3 — FR-124 MWF delivery)  
**Version:** v0.2.3.9+3  
**Code:** E02S03T09  

> **Filename note:** Path retains `fr123` from intake banking release; canonical scope is **FR-124**.

**Upstream:** [FR-124 — Meta-workflow orchestration](../../../fr-br/FR-124-meta-workflow-orchestration-composite-workflow-chains.md)  
**Historical:** [FR-123 — superseded `IPW --rw` approach](../../../fr-br/FR-123-ipw-full-delivery-chain-idf-rw.md)

---

## Scope

Implement **meta-workflow orchestration (`MWF`)**: an agent-driven orchestrator that composes encapsulated atomic workflows into operator-defined chains. **v1:** full delivery recipe `IPW → IDW → RW` for host `E:S:T`, delegating release to existing **`IDW … --rw`** after IPW completes. **Do not** add `IPW --rw` chain flags.

---

## Input

- [IPP-E02S03T09 — Meta-workflow orchestration (MWF)](../../../../implementation-cycles/IPP-E02S03T09-meta-workflow-orchestration-mwf-fr124.md)
- [FR-124](../../../fr-br/FR-124-meta-workflow-orchestration-composite-workflow-chains.md)
- [FR-123](../../../fr-br/FR-123-ipw-full-delivery-chain-idf-rw.md) (superseded — historical)
- [FR-119](../../../fr-br/FR-119-implementation-delivery-workflow-idw.md) (IDW `--rw` two-leg chain)
- [FR-042](../../../fr-br/FR-042-implementation-planning-workflow-ipw.md) (IPW)
- Pattern: [T08 / IDW delivery](T08-implementation-delivery-workflow-idw-fr118.md)

---

## Deliverable

- `.claude/commands/mwf.md` + KB `meta-workflow-agent-execution.md`
- Workflow registry composite recipes; cheatsheet §MWF; agent routing
- v1 `delivery` recipe; abort/mode-gate contract

---

## Associated Feature Requests

- [FR-124 — Meta-workflow orchestration](../../../fr-br/FR-124-meta-workflow-orchestration-composite-workflow-chains.md) (primary)
- [FR-123](../../../fr-br/FR-123-ipw-full-delivery-chain-idf-rw.md) (superseded)

---

## Acceptance Criteria

- [x] **AC1:** `MWF` trigger + `mwf.md` documented; atomic workflows remain encapsulated.
- [x] **AC2:** v1 delivery recipe: IPW → mode gate → `IDW E:S:T --rw` with optional `--push`/`--art` forwarding.
- [x] **AC3:** FR-123 superseded; no shipped `IPW --rw` requirement.
- [x] **AC4:** Cheatsheet distinguishes MWF (multi-leg) vs `IDW --rw` (two-leg).
- [x] **AC5:** FR-124 ↔ T09 ↔ IPP wired; RW version anchor @ **v0.2.3.9+3**.

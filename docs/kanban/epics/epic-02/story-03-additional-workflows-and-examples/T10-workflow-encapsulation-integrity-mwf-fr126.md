---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-10T15:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 2, Story 3, Task 10: Workflow encapsulation integrity audit (MWF leverage) — FR-126

**Task ID:** E02:S03:T10  
**Status:** TODO  
**Priority:** HIGH  
**Created:** 2026-06-10  
**Last updated:** 2026-06-10 (intake — FR-126)  
**Code:** E02S03T10  

**Upstream:** [FR-126 — Workflow encapsulation integrity audit for MWF leverage](../../../fr-br/FR-126-workflow-encapsulation-integrity-mwf-leverage.md)  
**Related:** [FR-124 — MWF v1 `delivery`](../../../fr-br/FR-124-meta-workflow-orchestration-composite-workflow-chains.md) · [T09 — MWF implementation](T09-ipw-full-delivery-chain-idf-rw-fr123.md)

---

## Scope

Audit **all registered atomic workflows** for **encapsulation integrity** so they can be composed at full MWF compatibility. Deliver a canonical **encapsulation contract**, inventory matrix, gap classification, and phased remediation plan — enabling future composite recipes (`ukw,rw`, `cmw,rw`, …) without per-workflow chain flags.

---

## Input

- [FR-126](../../../fr-br/FR-126-workflow-encapsulation-integrity-mwf-leverage.md)
- [workflow-registry.yaml](../../../../../packages/frameworks/workflow-mgt/workflows/workflow-registry.yaml) — 13 atomic workflows + `composite_workflows`
- Existing command guides: `.claude/commands/{ipw,idw,rw,ukw,mwf}.md`
- [meta-workflow-agent-execution.md](../../../../../packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/meta-workflow-agent-execution.md)
- [rw-trigger-dual-source-parity.md](../../../../../packages/frameworks/workflow-mgt/docs/rw-trigger-dual-source-parity.md) — dual-source pattern

---

## Deliverable

1. **`workflow-encapsulation-contract.md`** (vwmp) — MWF-delegatable workflow definition
2. **Inventory matrix** (markdown table in contract doc or companion analysis doc under `KB/Analysis/`)
3. **Gap remediation plan** — P0–P3 waves with file paths
4. **MWF registry extension spec** — how future `composite_workflows` recipes reference audited legs
5. Updates to cheatsheet §MWF cross-links (when contract is published)

---

## Associated Feature Requests

- [FR-126 — Workflow encapsulation integrity audit for MWF leverage](../../../fr-br/FR-126-workflow-encapsulation-integrity-mwf-leverage.md) (primary)

---

## Acceptance Criteria

- [ ] **AC1:** Encapsulation contract published; all 13 registry workflows assessed against it.
- [ ] **AC2:** Each workflow classified: **delegatable** / **partial** / **not-ready** with evidence (guide path, terminal states, routing).
- [ ] **AC3:** P0 remediation wave scoped (RW, UKW, CMW, PVW + routing parity) with concrete deliverables list.
- [ ] **AC4:** MWF `delivery` verified compliant — delegates via `idw.md`, no inline RW steps in `mwf.md`.
- [ ] **AC5:** FR-126 ↔ T10 links bidirectional; story checklist and board row updated.

---

## Approach

1. Extract encapsulation properties from FR-124 delegation rules and IDW/RW/IPW command guides.
2. Build registry × contract matrix (automate column extraction from YAML where possible).
3. Classify gaps; draft P0–P3 remediation waves.
4. Document `IDW --rw` as allowed sub-orchestrator boundary.
5. Spec `composite_workflows` extension schema for v2 recipes (design).
6. Cross-link from MWF KB guide and cheatsheet.

---

## Dependencies

**Depends On:**

- [E02:S03:T09](T09-ipw-full-delivery-chain-idf-rw-fr123.md) — MWF v1 shipped (COMPLETE)

**Blocked By:**

- [E02:S03:T11](T11-mwf-subagent-leg-delegation-br102.md) / [BR-102](../../../fr-br/BR-102-mwf-chain-paused-instead-of-subagent-leg-delegation.md) — `MWF … delivery` must delegate legs via sub-agents before full-pipeline invoke is reliable

**Blocks:**

- Future MWF recipes beyond `delivery` (e.g. `ukw,rw`, `cmw,rw`)
- Optional `validate_workflow_encapsulation.py`

**Parallel Development Candidacy:** Safe — audit/planning task; remediation waves may be parallelized per workflow after IPP.

---

## References

- [FR-126](../../../fr-br/FR-126-workflow-encapsulation-integrity-mwf-leverage.md)
- [FR-124](../../../fr-br/FR-124-meta-workflow-orchestration-composite-workflow-chains.md)
- [workflow-registry.yaml](../../../../../packages/frameworks/workflow-mgt/workflows/workflow-registry.yaml)

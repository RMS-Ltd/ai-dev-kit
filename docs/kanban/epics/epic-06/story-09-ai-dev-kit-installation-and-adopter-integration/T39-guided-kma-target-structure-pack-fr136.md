---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-17T18:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E06:S09:T39 — Guided KMA Target Structure Pack (FR-136)

**Task ID:** E06:S09:T39  
**Status:** ✅ COMPLETE (v0.6.9.39+1)  
**Priority:** HIGH  
**Created:** 2026-06-17  
**Last updated:** 2026-06-17 (IDW + RW — guided KMA kit surfaces shipped)  
**Code:** E06S09T39

**North star:** KMA guided mode delivers a candidate SBL kanban structure as close as practicable to the operator-optimized TSP — scored, repeatable, zero ad-hoc scripts.

**Upstream:** [FR-136](../../../fr-br/FR-136-guided-kma-target-structure-pack.md)  
**Related:** [FR-127](../../../fr-br/FR-127-agentic-kanban-migration-agent-replace-tool-pipeline.md) · [FR-133](../../../fr-br/FR-133-kanban-migration-depth-rationalization-adopter-guide.md) · [FR-135](../../../fr-br/FR-135-guided-install-orchestrator-zero-manual-steps.md) · [E06:S09:T31](T31-agentic-kanban-migration-agent-fr127.md) · [E06:S09:T37](T37-kanban-migration-depth-rationalization-fr133.md) · [E06:S09:T38](T38-guided-install-orchestrator-fr135.md) (orchestrator — out of scope for kit mode) · [#85](https://github.com/RMS-Ltd/ai-dev-kit/issues/85) · [attempt-11 index](../../../../../../adk-install-into-sbl/attempt-11/README.md)

**Evidence:** [FB-ADK-GUIDED-KMA-TARGET-STRUCTURE-PACK.md](../../../../../../adk-install-into-sbl/attempt-11/feedback-package/FB-ADK-GUIDED-KMA-TARGET-STRUCTURE-PACK.md) · [KMA-METHODS](../../../../../../adk-install-into-sbl/kanban-reference/KMA-METHODS.md) · [TARGET-EST-TREE](../../../../../../adk-install-into-sbl/kanban-reference/TARGET-EST-TREE.md) · [TSP reference pack](../../../../../../packages/frameworks/kanban/reference/README.md)

---

## Summary

Implement **guided KMA** in the kit: consume Target Structure Pack (TSP), apply M01–M08 methods, ship structural scorer, and document `kma_mode: blind | guided | score`. Enables SBL attempt 11 Phase B and future mature adopters with reference trees.

---

## Input

- [FR-136](../../../fr-br/FR-136-guided-kma-target-structure-pack.md)
- **[IPP-E06S09T39](../../../../implementation-cycles/IPP-E06S09T39-guided-kma-target-structure-pack-fr136.md)** (IPW planning package — Sections 1–7)
- Attempt 11 artefacts: [kanban-reference/](../../../../../../adk-install-into-sbl/kanban-reference/)
- Blind KMA baseline: [E06:S09:T31](T31-agentic-kanban-migration-agent-fr127.md) · [IPP-E06S09T31](../../../../implementation-cycles/IPP-E06S09T31-agentic-kanban-migration-agent-fr127.md)

## References

- [IPP-E06S09T39](../../../../implementation-cycles/IPP-E06S09T39-guided-kma-target-structure-pack-fr136.md) — consolidated IPW plan (spec, tests, impl, docs)
- [FR-136](../../../fr-br/FR-136-guided-kma-target-structure-pack.md)
- [TSP reference README](../../../../../../packages/frameworks/kanban/reference/README.md)
- [KMA-METHODS](../../../../../../adk-install-into-sbl/kanban-reference/KMA-METHODS.md)
- [SCORING-RUBRIC.yaml](../../../../../../adk-install-into-sbl/kanban-reference/SCORING-RUBRIC.yaml)
- [kanban-migration-agent-execution.md](../../../../../../packages/frameworks/kanban/KB/Documentation/Developer_Docs/kanban-migration-agent-execution.md)
- [kma.md](../../../../../../.claude/commands/kma.md)

---

## Deliverable

| # | Artifact | Status |
| - | -------- | ------ |
| 1 | `kma_mode` + TSP inputs in guardrails, `kma.md`, execution guide | ✅ |
| 2 | Framework TSP reference pack + SBL exemplar paths documented | ✅ |
| 3 | `score_kma_structure.py` (+ `build_target_est_tree.py`) | ✅ |
| 4 | Collision + dedup helpers wired to proposal step | ✅ |
| 5 | Migration proposal template guided section | ✅ |
| 6 | pytest: scorer self-test + guided fixture replay | ✅ |

**IPW deliverable:** `IPP-E06S09T39-guided-kma-target-structure-pack-fr136.md` (Sections 1–7 per template).

---

## Scope

**In scope:**

- Kit guided/score modes and TSP contract
- Deterministic structural scoring (M08)
- Framework reference templates (generic TSP pack shape)
- Tests and documentation updates

**Out of scope (v1):**

- Orchestrator in-process KMA (T38 / FR-135)
- SBL Phase B install execution (adopter-run; kit enables)
- Mandatory full task-file fan-out for all TSP rows

---

## Acceptance criteria

- [x] **AC1:** Guided mode documented; fails fast if `target_est_tree` missing when `guided`.
- [x] **AC2:** Scorer implements rubric; JSON output stable for CI (self-test ≥0.98).
- [x] **AC3:** TSP companion YAML/MD templates in `packages/frameworks/kanban/reference/`.
- [x] **AC4:** Proposal reports deduped unique task count; collision detector (M02).
- [x] **AC5:** pytest passes for scorer + guided replay fixture (≥0.85 weighted).
- [x] **AC6:** Greenfield mirror sync when `packages/frameworks/` touched.

**Verification:** `pytest tests/kanban/test_score_kma_structure.py tests/kanban/test_kma_guided_modes.py tests/kanban/test_kma_collision_detect.py tests/kanban/test_kma_dedup_inventory.py` — 34 passed (2026-06-17).

---

## Task checklist

- [x] IPW → linked IPP ([IPP-E06S09T39](../../../../implementation-cycles/IPP-E06S09T39-guided-kma-target-structure-pack-fr136.md))
- [x] Implement guided/score KMA kit surfaces
- [x] Ship scorer + TSP reference pack
- [x] Tests + docs
- [x] IDW → RW `E06:S09:T39` — **v0.6.9.39+1**

---

## RW trigger

```
RW E06:S09:T39
```

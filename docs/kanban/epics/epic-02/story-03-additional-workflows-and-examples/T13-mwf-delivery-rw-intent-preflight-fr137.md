---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-17T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E02:S03:T13 — MWF `delivery` RW intent preflight (FR-137)

**Task ID:** E02:S03:T13  
**Status:** 📋 TODO (kanban-init @ **v0.2.3.13+0**)  
**Version Anchor:** v0.2.3.13+0  
**Priority:** HIGH  
**Created:** 2026-06-17  
**Last updated:** 2026-06-17 (v0.2.3.13+0 – Kanban documentation setup)  
**Code:** E02S03T13

**Upstream:** [FR-137 — MWF delivery RW intent preflight and explicit `--art` forwarding](../../../fr-br/FR-137-mwf-delivery-rw-intent-preflight-art-forwarding.md)

**Related:** [T09 — MWF v1 (FR-124)](T09-ipw-full-delivery-chain-idf-rw-fr123.md) · [T11 — MWF sub-agent delegation (BR-102)](T11-mwf-subagent-leg-delegation-br102.md) · [T12 — Environment-aware execution (FR-128)](T12-environment-aware-workflow-execution-fr128.md) · [BR-056](../../../fr-br/BR-056-rw-ambiguous-task-identifier-typo-risk.md) · [FR-124](../../../fr-br/FR-124-meta-workflow-orchestration-composite-workflow-chains.md)

---

## Scope

Implement **MWF Phase 0 RW intent preflight** for the v1 `delivery` recipe:

- **`MWF E:S:T delivery`** — run `validate_rw_task_intent.py` before Leg 1; on mismatch **without** `--art`, abort with hint to re-invoke `MWF E:S:T delivery --art`.
- **`MWF E:S:T delivery --art`** — preflight with `--art`; forward `--art` to `IDW … --rw` (existing FR-124-F5).

No implicit `--art` injection.

---

## Problem context

Observed: `MWF E03:S02:T15 delivery` completed IPW + IDW, then `MWF ABORTED (leg: RW)` at Step 1d because `version.py` was E06 context. Operator must re-run RW with `--art` after full pipeline cost.

---

## Input

- [FR-137](../../../fr-br/FR-137-mwf-delivery-rw-intent-preflight-art-forwarding.md)
- [`.claude/commands/mwf.md`](../../../../../.claude/commands/mwf.md)
- [meta-workflow-agent-execution.md](../../../../../packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/meta-workflow-agent-execution.md)
- [validate_rw_task_intent.py](../../../../../packages/frameworks/workflow-mgt/scripts/validation/validate_rw_task_intent.py)
- Operator incident: `MWF E03:S02:T15 delivery` → `MWF ABORTED (leg: RW)` at Step 1d

---

## Deliverable

1. **`.claude/commands/mwf.md`** — Phase 0 preflight step; terminal token `MWF ABORTED (preflight: RW intent)`; hint text.
2. **`meta-workflow-agent-execution.md`** — orchestration Phase 0 + invocation matrix.
3. **`mwf-workflow.yaml`** / **`mwf-config.yaml`** — `preflight: rw_task_intent` metadata on `delivery` recipe.
4. **`docs/guides/workflow-initiation-cheatsheet.md`** §4c + §7 — preflight / `--art` matrix.
5. **`.cursorrules`** + **`CLAUDE.md`** — one-paragraph MWF preflight reference.
6. **Optional:** `validate_mwf_delivery_preflight.py` + pytest scenarios (AC1–AC3).
7. **Greenfield mirror** per FR-110 if packaged paths touched.

---

## Acceptance Criteria

- [ ] **AC1:** Mismatch + no `--art` → abort before IPW; message includes `MWF … delivery --art` hint.
- [ ] **AC2:** Mismatch + `--art` on MWF → full chain including RW Step 1d pass.
- [ ] **AC3:** Aligned `version.py` → no preflight abort; behavior unchanged from pre-FR-137.
- [ ] **AC4:** FR-137 ↔ T13 wired; RW version anchor on ship.
- [ ] **AC5:** E03:S02:T15-style scenario recorded in task verification notes or automated test.

---

## Implementation notes

- Reuse: `python packages/frameworks/workflow-mgt/scripts/validation/validate_rw_task_intent.py --requested "<token>"` and `--art` when on trigger.
- Preflight runs **after** MWF argument parse, **before** Leg 1 IPW or resume-only Leg 2.
- Do not conflate with `validate_branch_context.py` (Step 1 of RW) — MWF preflight is intent-only, orchestrator-scoped.

---

## Kanban documentation setup

**Version anchor:** v0.2.3.13+0 (RW -k E02:S03:T13 `--art` `--dpz`, 2026-06-17). Intake artifacts versioned; implementation remains TODO.

---

## Associated reports

- [FR-137](../../../fr-br/FR-137-mwf-delivery-rw-intent-preflight-art-forwarding.md) (primary)

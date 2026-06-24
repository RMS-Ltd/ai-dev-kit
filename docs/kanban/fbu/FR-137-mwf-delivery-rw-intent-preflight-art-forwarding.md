---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-17T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# FR-137: MWF `delivery` RW intent preflight and explicit `--art` forwarding

**Type:** Feature Request (FR)  
**ID:** FR-137  
**Submitted:** 2026-06-17  
**Submitted By:** Operator — MWF `delivery` chain aborted at RW Step 1d (E03:S02:T15 incident)  
**Priority:** HIGH  
**Severity:** MEDIUM (wasted IPW+IDW legs; operator confusion)  
**Status:** ACCEPTED → **IMPLEMENTED** @ **v0.2.3.13+1** (kanban-init @ **v0.2.3.13+0**)

**Implementing Task:** [E02:S03:T13](../epics/epic-02/story-03-additional-workflows-and-examples/T13-mwf-delivery-rw-intent-preflight-fr137.md)

**Depends on:** [FR-124](FR-124-meta-workflow-orchestration-composite-workflow-chains.md) (MWF v1 `delivery`) · [BR-056](BR-056-rw-ambiguous-task-identifier-typo-risk.md) (RW Task Intent Guard / Step 1d) · [FR-126](FR-126-workflow-encapsulation-integrity-mwf-leverage.md) (encapsulation contract)

**Related incident:** `MWF E03:S02:T15 delivery` — Leg 1 (IPW) and Leg 2 (IDW) **COMPLETE**; RW leg **ABORTED** at Step 1d because `version.py` was on E06 context while requested release was E03:S02:T15 **without** `--art` forwarded from MWF.

---

## Summary

Add an **MWF Phase 0 preflight** that runs the same RW task-intent check **before** Leg 1 (IPW): when `version.py` does not align with the requested `E:S:T` and the trigger has **no** `--art`, **abort early** with a copy-paste hint to re-invoke `MWF E:S:T delivery --art`. When the operator **does** pass `--art`, forward it to the IDW `--rw` leg unchanged (explicit adoption; no implicit `--art`).

---

## Problem Statement

MWF v1 `delivery` composes **IPW → IDW `--rw` → RW** (via IDW chain). [FR-124-F5](FR-124-meta-workflow-orchestration-composite-workflow-chains.md) forwards `--art` / `--push` to IDW only when present on the MWF trigger.

On integration branches (e.g. `dev`) or cross-epic work, `version.py` often reflects a **different** E:S:T than the task being delivered. RW Step 1d (`validate_rw_task_intent.py`) blocks epic/story mismatches unless `--art` or `--confirmed-override` is supplied.

**Failure mode today:**

1. Operator runs `MWF E03:S02:T15 delivery` (no `--art`).
2. IPW and IDW complete successfully (expensive legs).
3. RW aborts at Step 1d with intent mismatch.
4. Terminal state: `MWF ABORTED (leg: RW)` — high frustration, low signal until late in the chain.

**Design decision (operator-approved 2026-06-17):**

| Trigger | Behavior |
| ------- | -------- |
| `MWF E:S:T delivery` | **Early abort + hint** if intent preflight would fail; do **not** auto-inject `--art` |
| `MWF E:S:T delivery --art` | Forward `--art` to `IDW … --rw`; explicit canonical adoption (no surprise) |

This preserves BR-056 explicit adoption for cross-context release while preventing wasted planning/implementation legs.

---

## Requirements

### Functional

- [ ] **FR-137-F1:** **Phase 0 preflight** (before Leg 1) — run `validate_rw_task_intent.py --requested "<token>"` (same parser as RW Step 1d; read `version.py` via `rw-config.yaml`).
- [ ] **FR-137-F2:** **Pass path** — when preflight exits **0**, proceed to Leg 1 (IPW) or Leg 2 (IDW `--rw` only) per existing resume semantics.
- [ ] **FR-137-F3:** **Early abort path** — when preflight exits **non-zero** and MWF trigger has **no** `--art`:
  - Terminal state: **`MWF ABORTED (preflight: RW intent)`** (or equivalent documented token).
  - Message MUST include: current `version.py` E:S:T, requested E:S:T, and exact re-invoke hint: `MWF E##:S##:T## delivery --art`.
  - **No** IPW, IDW, or RW file modifications in this path.
- [ ] **FR-137-F4:** **`--art` on MWF trigger** — forward to `IDW E:S:T --rw --art` (and RW via IDW chain) per FR-124-F5; preflight uses `--art` and exits 0 when adoption is explicit.
- [ ] **FR-137-F5:** Update **`.claude/commands/mwf.md`**, **`meta-workflow-agent-execution.md`**, **`mwf-workflow.yaml`** / **`mwf-config.yaml`** — Phase 0 documented in orchestration contract.
- [ ] **FR-137-F6:** Update **cheatsheet §4c** and **§7** — document preflight abort + `--art` matrix; note cross-epic / `dev` branch pattern.
- [ ] **FR-137-F7:** **Agent routing** — `.cursorrules` MWF section, `CLAUDE.md` MWF trigger blurb (one-line preflight reference).
- [ ] **FR-137-F8:** Optional **deterministic helper** `validate_mwf_delivery_preflight.py` wrapping intent check (non-blocking for v1 if agent runs validator inline; preferred for tests).

### Non-functional

- [ ] **FR-137-NF1:** **No implicit `--art`** on `MWF … delivery` without operator flag — preserves BR-056 audit trail.
- [ ] **FR-137-NF2:** **Standalone `RW` / `IDW --rw`** behavior unchanged — preflight is MWF-orchestrator scope only.
- [ ] **FR-137-NF3:** **Greenfield sync** — mirror `mwf.md` / KB guide per [FR-110](FR-110-lean-adopter-distribution-footprint-and-vendor-bundle.md) when packaged paths change.
- [ ] **FR-137-NF4:** **Abort propagation** — preflight abort is not `MWF ABORTED (leg: IPW|IDW|RW)`; use distinct preflight terminal token to distinguish from leg failures.

---

## Scope Analysis

**Problem Domain:** Workflow Management Framework — MWF orchestration / RW handoff  
**Affected Areas:**

- [x] Documentation (command guides, KB vwmp, cheatsheet)
- [x] Workflow YAML / registry metadata (Phase 0 step)
- [ ] Application code (optional preflight script + pytest)
- [ ] Validators (reuse `validate_rw_task_intent.py`; optional thin wrapper)

**Estimated Complexity:** Simple–Medium (1–3 days)

---

## Acceptance Criteria

- [ ] **AC1:** `MWF E:S:T delivery` with `version.py` mismatch and **no** `--art` → **`MWF ABORTED (preflight: RW intent)`** before IPW; hint includes `delivery --art`.
- [ ] **AC2:** `MWF E:S:T delivery --art` with mismatch → preflight passes; IDW `--rw` receives `--art`; RW Step 1d passes.
- [ ] **AC3:** `MWF E:S:T delivery` with matching `version.py` → no preflight abort; chain proceeds as today.
- [ ] **AC4:** FR-137 ↔ T13 bidirectional links; story checklist updated.
- [ ] **AC5:** Regression scenario documented (E03:S02:T15-style cross-epic on `dev`) in task verification notes or pytest.

---

## Out of scope

- Auto-injecting `--art` on MWF `delivery` without operator flag.
- Changing `validate_rw_task_intent.py` mismatch rules for standalone RW.
- Replacing `--confirmed-override` with MWF-specific override (operators use `--art` on MWF).

---

## Invocation matrix (normative)

| Invocation | Preflight | RW leg |
| ---------- | --------- | ------ |
| `MWF E02:S03:T13 delivery` | Fail fast + hint if mismatch | Not reached |
| `MWF E02:S03:T13 delivery --art` | Pass with `--art` | `IDW … --rw --art` → RW with `--art` |
| `MWF E02:S03:T13 delivery` (version matches) | Pass | Normal chain |

---

## References

- [validate_rw_task_intent.py](../../../packages/frameworks/workflow-mgt/scripts/validation/validate_rw_task_intent.py)
- [workflow-initiation-cheatsheet.md](../../guides/workflow-initiation-cheatsheet.md) §4c
- [BR-102](BR-102-mwf-chain-paused-instead-of-subagent-leg-delegation.md) — sub-agent delegation (orthogonal)

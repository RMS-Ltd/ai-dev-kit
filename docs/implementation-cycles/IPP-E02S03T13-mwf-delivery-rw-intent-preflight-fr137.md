---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-24T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E02:S03:T13 — Planning: MWF `delivery` RW intent preflight (FR-137)

**Host Task:** [`T13-mwf-delivery-rw-intent-preflight-fr137.md`](../kanban/epics/epic-02/story-03-additional-workflows-and-examples/T13-mwf-delivery-rw-intent-preflight-fr137.md) **(E02:S03:T13)**  
**Planning for:** [FR-137 — MWF delivery RW intent preflight and explicit `--art` forwarding](../kanban/fbu/FR-137-mwf-delivery-rw-intent-preflight-art-forwarding.md)  
**Status:** Published (MWF Leg 1 — IPW)

---

## 1. Requirements (Ascertained Baseline)

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RF1 | Phase 0 preflight before Leg 1 — `validate_rw_task_intent.py --requested "<token>"` | FR-137-F1 |
| RF2 | Pass path (exit 0) → proceed to IPW or IDW `--rw` resume | FR-137-F2 |
| RF3 | Mismatch without `--art` → `MWF ABORTED (preflight: RW intent)` + `delivery --art` hint; no leg file mods | FR-137-F3 |
| RF4 | `--art` on MWF → preflight with `--art`; forward to `IDW … --rw --art` | FR-137-F4 |
| RF5 | Update `mwf.md`, `meta-workflow-agent-execution.md`, YAML config | FR-137-F5 |
| RF6 | Cheatsheet §4c + §7 preflight matrix | FR-137-F6 |
| RF7 | `.cursorrules` + `CLAUDE.md` one-line preflight reference | FR-137-F7 |
| RF8 | Optional `validate_mwf_delivery_preflight.py` + pytest | FR-137-F8 |
| RF9 | No implicit `--art`; standalone RW/IDW unchanged | FR-137-NF1–NF2 |
| RF10 | Greenfield mirror when packaged paths change | FR-137-NF3 |

**Regression scenario:** `MWF E03:S02:T15 delivery` on `dev` with E06/E07 `version.py` — abort before IPW without `--art`.

---

## 2. Specification

### 2.1 Goal

Fail fast on RW task-intent mismatch **before** expensive IPW/IDW legs when operator omits `--art` on cross-epic `dev` delivery.

### 2.2 Phase 0 execution

1. Parse MWF args (`E:S:T`, recipe `delivery`, flags).
2. Run `validate_mwf_delivery_preflight.py --requested "<token>"` (or inline equivalent).
3. If `--art` on trigger, pass `--art` to preflight validator.
4. Non-zero without `--art` → terminal `MWF ABORTED (preflight: RW intent)`.
5. Zero → Leg selection (IPP resume) → Leg 1/2.

### 2.3 ADR necessity

**EXEMPT** — orchestration guard only; reuses BR-056 validator.

---

## 3. Test design

| ID | Check | Covers |
| -- | ----- | ------ |
| V1 | Preflight script exit 0 when `--art` + mismatch | AC2 |
| V2 | Preflight script exit 1 + hint when mismatch, no `--art` | AC1 |
| V3 | Preflight exit 0 when version aligns | AC3 |
| V4 | Hint includes `MWF E##:S##:T## delivery --art` | AC1 |
| V5 | `pytest tests/workflow_mgt/test_mwf_delivery_preflight.py` | AC5 |
| V6 | Greenfield sync for touched framework paths | FR-110 |

---

## 4. Implementation plan

| Step | Action |
| ---- | ------ |
| **1** | **[MANDATORY]** T13 `TODO → IN PROGRESS` |
| **2** | Create `validate_mwf_delivery_preflight.py` |
| **3** | Create `tests/workflow_mgt/test_mwf_delivery_preflight.py` |
| **4** | Update `.claude/commands/mwf.md` — Phase 0 preflight |
| **5** | Update `meta-workflow-agent-execution.md` |
| **6** | Update `mwf-workflow.yaml` + `mwf-config.yaml` |
| **7** | Update `workflow-registry.yaml` terminal states |
| **8** | Update cheatsheet §4c + §7 |
| **9** | Update `.cursorrules` + `CLAUDE.md` MWF sections |
| **10** | `python3 scripts/sync_greenfield_install.py` |
| **11** | Run V1–V6 |
| **12** | `RW E02:S03:T13 --art` |
| **13** | **[MANDATORY]** Reconcile T13 + FR-137 status |

---

## 5. Documentation deliverables

| Doc ID | Path | Action |
| ------ | ---- | ------ |
| D-C1 | `packages/frameworks/workflow-mgt/scripts/validation/validate_mwf_delivery_preflight.py` | CREATE |
| D-C2 | `tests/workflow_mgt/test_mwf_delivery_preflight.py` | CREATE |
| D-U1 | `.claude/commands/mwf.md` | UPDATE |
| D-U2 | `meta-workflow-agent-execution.md` | UPDATE |
| D-U3 | `mwf-workflow.yaml`, `mwf-config.yaml` | UPDATE |
| D-U4 | `workflow-initiation-cheatsheet.md` | UPDATE |
| D-U5 | `.cursorrules`, `CLAUDE.md` | UPDATE |

---

## 6. Risks and mitigations

| Risk | Mitigation |
| ---- | ---------- |
| Operators confuse preflight with RW Step 1d | Distinct terminal token + cheatsheet matrix |
| False abort on aligned version | Reuse same validator; AC3 regression test |

---

## 7. Verification checklist (SitRep)

- [ ] AC1–AC5 evidenced in task verification notes or pytest
- [ ] FR-137 ↔ T13 bidirectional links
- [ ] Greenfield mirror current

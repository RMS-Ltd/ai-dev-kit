---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-10T15:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E02:S03:T10 — Planning: Workflow encapsulation integrity audit (FR-126)

**Host Task:** [`T10-workflow-encapsulation-integrity-mwf-fr126.md`](../kanban/epics/epic-02/story-03-additional-workflows-and-examples/T10-workflow-encapsulation-integrity-mwf-fr126.md) **(E02:S03:T10)**  
**Planning for:** [FR-126 — Workflow encapsulation integrity audit for MWF leverage](../kanban/fbu/FR-126-workflow-encapsulation-integrity-mwf-leverage.md)  
**Status:** Published (MWF Leg 1 — IPW)

---

## 1. Requirements (Ascertained Baseline)

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RF1 | Publish `workflow-encapsulation-contract.md` (vwmp) — MWF-delegatable properties | FR-126-F1 |
| RF2 | Inventory matrix: all 13 registry workflows × contract fields | FR-126-F2 |
| RF3 | Gap remediation plan P0–P3 with file paths | FR-126-F3 |
| RF4 | P0 workflows: command guides or documented KB-only delegation exception | FR-126-F4 |
| RF5 | `composite_workflows` extension spec for v2 recipes | FR-126-F5 |
| RF6 | Dual-source parity checklist (RW/UKW/CMW/PVW pattern) | FR-126-F6 |
| RF7 | Aspirational `validate_workflow_encapsulation.py` (advisory) | FR-126-F7 |
| RF8 | Document `IDW --rw` as allowed sub-orchestrator boundary | FR-126-NF1 |
| RF9 | No `IPW --rw`; greenfield sync for framework paths | FR-126-NF2/NF3 |
| RF10 | Include BR-102 sub-agent delegation in MWF contract (T11 cross-cut) | BR-102 / user |

**Out of scope (this task):**

- Replacing `IDW --rw` with MWF-only RW delegation
- Implementing all P0–P3 remediation waves in one release (phased)
- Deterministic `workflow_orchestrator.py` runtime

**Dependency note:** T10 lists T11/BR-102 as blocker for *reliable* MWF invoke; this IPP includes BR-102 fix criteria inside P1 MWF row and Wave 2.

---

## 2. Specification

### 2.1 Goal

Define and publish a **workflow encapsulation contract** so every atomic workflow in `workflow-registry.yaml` can be assessed for **MWF-delegatable** status, with a remediation roadmap enabling future recipes (`ukw,rw`, `cmw,rw`, …) without per-workflow chain flags.

### 2.2 Encapsulation contract (summary — full text in deliverable D-C1)

| Property | Definition |
| -------- | ---------- |
| **Trigger** | Parseable abbreviation + host `E:S:T` when applicable |
| **Terminal states** | `{ABBR} COMPLETE`, `{ABBR} ABORTED`, optional `{ABBR} CHAIN PAUSED` (narrow semantics) |
| **Mode** | `plan` \| `implementation` \| `either` |
| **Delegation SoT** | `.claude/commands/{abbr}.md` preferred; else KB vwmp `*-agent-execution.md` |
| **Abort propagation** | Parent orchestrator stops; no release surfaces on child abort |
| **Sub-orchestrator** | Allowed one-level chain (e.g. `IDW --rw`); MWF delegates to IDW not RW |
| **Forbidden** | Parent inlines child steps; chain flags duplicating MWF recipes (`IPW --rw`) |
| **MWF leg delegation** | Orchestrator spawns sub-agents per leg when parent session mode differs (BR-102) |

### 2.3 Classification rubric

| Class | Meaning |
| ----- | ------- |
| **delegatable** | Command guide + terminal states + routing; MWF-safe |
| **partial** | KB/.cursorrules only, or missing terminal contract, or dual-source drift |
| **not-ready** | Registry only; no agent routing; example/template workflows |

### 2.4 Status transition intent

- Step 1: `TODO → IN PROGRESS` on T10
- Final: `COMPLETE` when AC1–AC5 satisfied with evidence

### 2.5 ADR necessity decision

**Outcome:** `EXEMPT` — documentation and orchestration contract extension; composes FR-124 patterns. Revisit ADR if validator becomes blocking CI gate.

---

## 3. Test design

**`--skip-tests` justification:** Primary deliverables are documentation, registry metadata, and optional advisory validator. Verification is structural (V1–V10).

| ID | Check | Covers |
| -- | ----- | ------ |
| V1 | `workflow-encapsulation-contract.md` exists in vwmp | AC1 |
| V2 | Matrix covers all 13 `workflows:` registry entries | AC2 |
| V3 | Each row has delegatable/partial/not-ready + evidence | AC2 |
| V4 | P0 wave lists RW, UKW, CMW, PVW with file paths | AC3 |
| V5 | `composite_workflows` extension spec in contract or appendix | FR-126-F5 |
| V6 | MWF `mwf.md` audited — no inline RW steps | AC4 |
| V7 | Cheatsheet §4c cross-links contract | AC5 |
| V8 | `sync_greenfield_install.py` when `packages/frameworks/**` touched | FR-110 |
| V9 | FR-126 ↔ T10 ↔ IPP bidirectional links | AC5 |
| V10 | BR-102 criteria reflected in MWF delegation section | BR-102 |

---

## 4. Implementation plan (phased waves)

| Step | Action |
| ---- | ------ |
| **1** | **[MANDATORY]** T10 `TODO → IN PROGRESS`; update `Last updated` |
| **2** | **Wave 1:** Author `workflow-encapsulation-contract.md` + `KB/Analysis/T10-workflow-encapsulation-inventory-matrix.md` |
| **3** | **Wave 2:** P0 remediation — `cmw.md`, `pvw.md` command guides (or documented exceptions); dual-source parity notes |
| **4** | **Wave 3:** Update `mwf.md` + `meta-workflow-agent-execution.md` for BR-102 sub-agent delegation (coordinates **E02:S03:T11**) |
| **5** | **Wave 4:** `workflow-registry.yaml` leg metadata; cheatsheet §4c; optional `validate_workflow_encapsulation.py` stub |
| **6** | `python scripts/sync_greenfield_install.py` + commit mirror |
| **7** | Run V1–V10 |
| **8** | `RW E02:S03:T10 --art` per wave or final wave |
| **9** | **[MANDATORY]** Reconcile T10 status with evidence |

**RW rule:** Post-ship waves use `RW E02:S03:T10 --art` only (BR-097).

---

## 5. Documentation deliverables

| Doc ID | Path | Action |
| ------ | ---- | ------ |
| D-C1 | `packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/workflow-encapsulation-contract.md` | CREATE |
| D-C2 | `packages/frameworks/workflow-mgt/KB/Analysis/T10-workflow-encapsulation-inventory-matrix.md` | CREATE |
| D-U1 | `packages/frameworks/workflow-mgt/workflows/workflow-registry.yaml` | UPDATE |
| D-U2 | `.claude/commands/mwf.md`, `meta-workflow-agent-execution.md` | UPDATE (BR-102; T11 overlap) |
| D-U3 | `.claude/commands/cmw.md`, `pvw.md` (P0) | CREATE |
| D-U4 | `docs/guides/workflow-initiation-cheatsheet.md` | UPDATE |
| D-U5 | `packages/frameworks/workflow-mgt/docs/rw-trigger-dual-source-parity.md` | UPDATE (pattern extend) |
| D-N1 | `validate_workflow_encapsulation.py` | CREATE (advisory, optional) |

---

## 6. Documentation housing

All CREATE paths under `packages/frameworks/workflow-mgt/` — **PUBLISHED**; greenfield mirror mandatory (FR-110). IPP linked from T10 **Input**.

---

## 7. Success / verification criteria

- [ ] V1–V10 pass
- [ ] FR-126 AC1–AC5 satisfied
- [ ] RW release anchor on E02:S03:T10

---

## References

- [FR-126](../kanban/fbu/FR-126-workflow-encapsulation-integrity-mwf-leverage.md)
- [FR-124](../kanban/fbu/FR-124-meta-workflow-orchestration-composite-workflow-chains.md)
- [BR-102](../kanban/fbu/BR-102-mwf-chain-paused-instead-of-subagent-leg-delegation.md)
- [workflow-registry.yaml](../packages/frameworks/workflow-mgt/workflows/workflow-registry.yaml)

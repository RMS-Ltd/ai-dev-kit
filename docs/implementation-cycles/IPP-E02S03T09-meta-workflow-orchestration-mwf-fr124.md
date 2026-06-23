---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-10T14:15:00Z
expires_at: null
housekeeping_policy: keep
---

# E02:S03:T09 — Planning: Meta-workflow orchestration / MWF (FR-124)

**Host Task:** [`T09-ipw-full-delivery-chain-idf-rw-fr123.md`](../kanban/epics/epic-02/story-03-additional-workflows-and-examples/T09-ipw-full-delivery-chain-idf-rw-fr123.md) **(E02:S03:T09)**  
**Planning for:** [FR-124 — Meta-workflow orchestration](../kanban/fbu/FR-124-meta-workflow-orchestration-composite-workflow-chains.md)  
**Supersedes planning direction for:** [FR-123](../kanban/fbu/FR-123-ipw-full-delivery-chain-idf-rw.md) (`IPW --rw` — withdrawn)  
**Status:** Published

---

## 1. Requirements (Ascertained Baseline)

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RF1 | `MWF` trigger + `.claude/commands/mwf.md` | FR-124-F1 |
| RF2 | Parse `E:S:T` + recipe; v1 `delivery` / `ipw,idw,rw` | FR-124-F2 |
| RF3 | Delegate legs to existing command specs (no inline RW/IPW/IDW reimplementation) | FR-124-F3 |
| RF4 | Mode gates between legs; `MWF CHAIN PAUSED` when plan→impl transition needed | FR-124-F4 |
| RF5 | v1 delivery uses `IDW E:S:T --rw` after IPW; forward `--push`/`--art` | FR-124-F5 |
| RF6 | KB agent execution guide | FR-124-F6 |
| RF7 | Routing: CLAUDE.md, .cursorrules, AGENTS.md, manifest | FR-124-F7 |
| RF8 | Cheatsheet MWF section + flag disambiguation vs `IDW --rw` | FR-124-F8 |
| RF9 | `workflow-registry.yaml` composite recipes | FR-124-F9 |
| RF10 | Abort propagation; no commit/tag on aborted chain | FR-124-F10 |

**Out of scope:**

- `IPW --rw` chain flag (FR-123 withdrawn)
- Changing IPW phase contract, IDW implementation phases, or RW step list
- Greenfield-install mirror in v1 (follow-on per FR-110 if needed)
- Auto mode-switch in Cursor (document pause + re-invoke)

---

## 2. Specification

### 2.1 Goal

Introduce **MWF** (Meta-Workflow) as the orchestration entry point that sequences encapsulated atomic workflows. **v1** delivers the operator-facing **`delivery`** recipe: **IPW → (mode gate) → IDW --rw** for host task `E:S:T`, satisfying full plan → implement → local-complete release without embedding chain logic in IPW.

### 2.2 Orchestration contract

| Leg | Delegate to | Completion token |
| --- | ----------- | ---------------- |
| 1 | `/ipw E:S:T` (or `IPW …`) | `IPW COMPLETE` |
| — | Mode gate if still in plan mode | `MWF CHAIN PAUSED` |
| 2 | `/idw E:S:T --rw` (+ forwarded flags) | `IDW COMPLETE` (+ embedded RW outcome) |

**Terminal states:** `MWF COMPLETE`, `MWF ABORTED (leg: IPW|IDW|RW)`, `MWF CHAIN PAUSED`.

**Flag forwarding (v1):**

| MWF trigger | Forward to IDW leg |
| ----------- | ------------------ |
| `--push` | `IDW … --rw --push` |
| `--art` | `IDW … --rw --art` |
| `--skip-tests` | **Not** forwarded to IDW (IPW-only) |

### 2.3 Recipe registry (v1)

```yaml
# workflow-registry.yaml (conceptual)
composite_workflows:
  mwf:
    delivery:
      legs: [ipw, idw_rw]  # idw_rw = IDW with --rw
      description: Full delivery pipeline
```

Explicit alias: `ipw,idw,rw` normalizes to `delivery`.

### 2.4 Status transition intent

- Step 1: host task remains `IN PROGRESS` (already set at FR-123 intake)
- Final: reconcile to `COMPLETE` when AC1–AC5 satisfied

### 2.5 ADR necessity decision

**Outcome:** `EXEMPT` — composes existing workflow triggers (same class as IDW `--rw` chain); no new versioning or git policy. Optional follow-on ADR if recipe registry grows beyond documentation.

---

## 3. Test design

**`--skip-tests` justification:** Documentation, routing, and orchestration contract only; no new Python validators in v1. Verification is structural.

| ID | Check | Covers |
| -- | ----- | ------ |
| V1 | `.claude/commands/mwf.md` exists | AC1 |
| V2 | `mwf.md` documents `delivery` recipe + mode gate | AC2 |
| V3 | KB `meta-workflow-agent-execution.md` (or vwmp equivalent) exists | AC1 |
| V4 | `CLAUDE.md` MWF trigger section | AC4 |
| V5 | `.cursorrules` MWF trigger section | AC4 |
| V6 | Cheatsheet MWF + disambiguation vs `IDW --rw` | AC4 |
| V7 | `workflow-registry.yaml` lists MWF / composite recipes | AC3 |
| V8 | FR-124 ↔ T09 ↔ IPP bidirectional links | AC5 |
| V9 | FR-123 marked SUPERSEDED; no `IPW --rw` in ipw.md | AC3 |

---

## 4. Implementation plan

| Step | Action |
| ---- | ------ |
| **1** | **[MANDATORY]** Confirm task `IN PROGRESS`; update `Last updated` |
| 2 | Author `mwf.md` + KB `meta-workflow-agent-execution.md` |
| 3 | Add workflow package YAML under `workflows/` if pattern requires |
| 4 | Update `workflow-registry.yaml` composite section |
| 5 | Update routing: `CLAUDE.md`, `.cursorrules`, `AGENTS.md`, `project-agent-manifest.json` |
| 6 | Update cheatsheet (new MWF §; §7 references MWF) |
| 7 | Confirm FR-123 SUPERSEDED banner; no IPW `--rw` edits |
| 8 | Run V1–V9 verification |
| 9 | `RW E02:S03:T09 --art` (local-complete) |
| **10** | **[MANDATORY]** Reconcile task status `COMPLETE` + forensic marker |

---

## 5. Documentation deliverables

| Doc ID | Path | Action |
| ------ | ---- | ------ |
| D-C1 | `.claude/commands/mwf.md` | CREATE |
| D-C2 | `packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/meta-workflow-agent-execution.md` | CREATE |
| D-C3 | `packages/frameworks/workflow-mgt/workflows/meta-workflow.yaml` (or extend registry only) | CREATE/MINIMAL |
| D-U1 | `CLAUDE.md`, `.cursorrules`, `AGENTS.md`, `docs/project-agent-manifest.json` | UPDATE |
| D-U2 | `docs/guides/workflow-initiation-cheatsheet.md` | UPDATE |
| D-U3 | `packages/frameworks/workflow-mgt/workflows/workflow-registry.yaml` | UPDATE |
| D-U4 | `docs/kanban/fbu/FR-124-*.md`, task doc, story, kboard | UPDATE (intake + release) |

---

## 6. Documentation housing

All paths per §5; PUBLISHED under repo canonical locations. IPP path linked from host task **Input** section.

---

## 7. Success / verification criteria

- [x] V1–V9 pass (2026-06-10)
- [x] FR-124 AC1–AC5 satisfied (v0.2.3.9+3)
- [x] RW release anchor on E02:S03:T09
- [x] Operator can run `MWF E:S:T delivery` (or pause at mode gate with clear resume instructions)

---

## References

- [FR-124](../kanban/fbu/FR-124-meta-workflow-orchestration-composite-workflow-chains.md)
- [FR-123](../kanban/fbu/FR-123-ipw-full-delivery-chain-idf-rw.md)
- [IPP-E02S16T22 — IDW pattern](IPP-E02S16T22-implementation-delivery-workflow-idw-fr118.md)
- [implementation-delivery-workflow-agent-execution.md](../packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/implementation-delivery-workflow-agent-execution.md)

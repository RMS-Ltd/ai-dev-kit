---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-10T16:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Workflow Encapsulation Contract (MWF-delegatable)

**Status:** Active (Wave 1 — E02:S03:T10 / FR-126)  
**Purpose:** Define properties every **atomic workflow** must satisfy to be composed by **MWF** (or future orchestrators) without inline reimplementation or growing per-workflow chain flags.  
**Inventory:** [T10-workflow-encapsulation-inventory-matrix.md](../../Analysis/T10-workflow-encapsulation-inventory-matrix.md)  
**Upstream:** [FR-126](../../../../../../../docs/kanban/fr-br/FR-126-workflow-encapsulation-integrity-mwf-leverage.md) · [FR-124](../../../../../../../docs/kanban/fr-br/FR-124-meta-workflow-orchestration-composite-workflow-chains.md) · [BR-102](../../../../../../../docs/kanban/fr-br/BR-102-mwf-chain-paused-instead-of-subagent-leg-delegation.md)

---

## 1. Scope

Applies to all entries under `workflows:` in [`workflow-registry.yaml`](../../../workflows/workflow-registry.yaml). **Meta-workflow (MWF)** and **composite recipes** are orchestrators — they delegate to atomic legs; they do not replace atomic contracts.

**Out of scope:** Replacing `IDW --rw` (allowed sub-orchestrator); deterministic runtime orchestrator scripts.

---

## 2. MWF-delegatable properties

| # | Property | Requirement |
| - | -------- | ----------- |
| P1 | **Trigger** | Documented parseable token(s) (`RW`, `IPW E:S:T`, `UKW -u`, …) in command guide or KB agent-execution guide |
| P2 | **Host context** | When task-scoped: `E:S:T` parsing rules documented |
| P3 | **Terminal states** | At minimum `{ABBR} COMPLETE` and `{ABBR} ABORTED`; optional `{ABBR} BLOCKED`, `{ABBR} CHAIN PAUSED` with narrow semantics |
| P4 | **Mode** | Declared: `plan` (IPW), `implementation` (IDW, RW, UKW, …), or `either` |
| P5 | **Delegation SoT** | **Preferred:** `.claude/commands/{lowercase}.md`. **Fallback:** `KB/.../vwmp/{name}-agent-execution.md` |
| P6 | **Routing** | `CLAUDE.md` and/or `.cursorrules` trigger section lists abbreviation (for Cursor/Claude) |
| P7 | **Abort propagation** | Child `ABORTED` → parent orchestrator stops; **no** commit/tag/changelog from parent |
| P8 | **Sub-orchestrator** | One-level embedded chain allowed (e.g. `IDW --rw` → RW); parent delegates to **immediate** child only |
| P9 | **Forbidden** | Parent inlines child's step list; chain flags duplicating MWF recipes (`IPW --rw` withdrawn) |
| P10 | **MWF leg delegation** | When parent session mode ≠ leg mode, orchestrator **delegates via sub-agent** (Task tool or equivalent) — not operator mode-switch handoff ([BR-102](../../../../../../../docs/kanban/fr-br/BR-102-mwf-chain-paused-instead-of-subagent-leg-delegation.md)) |

---

## 3. Classification rubric

| Class | Criteria |
| ----- | -------- |
| **delegatable** | P1–P7 satisfied; P5 command guide exists; routing present |
| **partial** | KB + `.cursorrules` only; dual-source drift; missing terminal tokens; no command guide |
| **not-ready** | Registry/YAML package only; example/template workflow; no agent routing |

---

## 4. Sub-orchestrator boundary (`IDW --rw`)

MWF v1 `delivery` recipe:

```text
MWF → IDW --rw → RW (embedded in IDW chain)
```

- MWF **must not** inline RW Steps 1–12 ([FR-124-F3](../../../../../../../docs/kanban/fr-br/FR-124-meta-workflow-orchestration-composite-workflow-chains.md)).
- MWF forwards `--push` / `--art` to `IDW … --rw` only.
- Abort: `RW ABORTED` inside IDW chain → `MWF ABORTED (leg: RW)`.

---

## 5. Dual-source parity

When logic exists in **both** `.cursorrules` and a command guide (RW, UKW, CMW, PVW), maintain parity per [`rw-trigger-dual-source-parity.md`](../../../docs/rw-trigger-dual-source-parity.md). MWF delegates to the **command guide** path; drift breaks orchestration.

---

## 6. `MWF CHAIN PAUSED` (narrow semantics)

| Allowed | Forbidden |
| ------- | --------- |
| Sub-agent spawn unavailable | Parent not in plan mode (use sub-agent for IPW instead) |
| Operator review gate explicitly documented post-IPW | Routine plan↔implementation transition |
| Leg returned `ABORTED` awaiting human decision | — |

---

## Appendix A — `composite_workflows` extension spec (v2 recipes)

**Location:** `workflow-registry.yaml` → `composite_workflows:`

```yaml
composite_workflows:
  mwf:
    <recipe_id>:
      legs:
        - workflow: <registry_key_or_alias>   # e.g. ipw, ukw, idw_rw
          delegate: subagent | parent           # BR-102: subagent when mode differs
          guide: ".claude/commands/<leg>.md"    # delegation SoT
          mode: plan | implementation
          flags_forward: []                     # e.g. --art from parent trigger
      aliases: ["leg1,leg2,..."]
      description: "..."
```

**v2 recipe examples (design — not shipped):**

| Recipe | Legs | Notes |
| ------ | ---- | ----- |
| `ukw,rw` | UKW comprehensive → RW | UKW perpetual attribution; post-UKW RW |
| `cmw,rw` | CMW → RW | CMW perpetual attribution |
| `ipw,idw,rw` | alias of `delivery` | v1 |

**Flag forwarding table (orchestrator responsibility):**

| Parent (MWF) flag | Forward to leg |
| ----------------- | -------------- |
| `--push` | `IDW --rw` only (v1) |
| `--art` | `IDW --rw` only (v1) |
| `--skip-tests` | IPW leg only |

---

## Appendix B — Remediation waves (summary)

Full matrix and file paths: [T10 inventory matrix](../../Analysis/T10-workflow-encapsulation-inventory-matrix.md).

| Wave | Focus |
| ---- | ----- |
| **P0** | RW, UKW, CMW, PVW — command guides + dual-source parity |
| **P1** | IPW, IDW, MWF — BR-102 sub-agent delegation in `mwf.md` |
| **P2** | PIR, INTAKE — command guides or documented KB-only exceptions |
| **P3** | MIGRATION, REFACTOR, TESTING, FHM — routing or explicit not-ready for MWF v2 |

---

## References

- [meta-workflow-agent-execution.md](meta-workflow-agent-execution.md)
- [workflow-registry.yaml](../../../workflows/workflow-registry.yaml)
- [workflow-initiation-cheatsheet.md](../../../../../../../docs/guides/workflow-initiation-cheatsheet.md)

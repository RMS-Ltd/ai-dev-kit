---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-10T13:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Meta-Workflow (MWF) — Agent Execution Guide

**Status:** Active  
**Purpose:** Orchestrate **composite workflow chains** by delegating to encapsulated atomic workflows (IPW, IDW, RW, …) without embedding chain logic inside each workflow entry point.  
**Command:** `.claude/commands/mwf.md` (`/mwf` or plain-text `MWF`)  
**Upstream:** [Implementation Planning Workflow (IPW)](implementation-planning-workflow-agent-execution.md)  
**Midstream:** [Implementation Delivery Workflow (IDW)](implementation-delivery-workflow-agent-execution.md)  
**Downstream:** [Release Workflow (RW)](release-workflow-agent-execution.md) — via IDW `--rw` in v1 `delivery` recipe

---

## Trigger

- **`/mwf E:S:T delivery [--push] [--art]`** — canonical Claude Code slash command.
- **`MWF E{epic}:S{story}:T{task} delivery`** — plain-text trigger (Cursor / Claude Code via `CLAUDE.md`).
- **`MWF E:S:T ipw,idw,rw`** — explicit alias normalized to `delivery`.

**Flag convention:** long flags are **lowercase** (`--push`, `--art`). Trigger prefix `MWF` / `mwf` is case-insensitive.

## v1 recipe: `delivery`

| Step | Workflow | Delegation | Completion token |
| ---- | -------- | ---------- | ---------------- |
| 1 (if no IPP) | IPW | Sub-agent or inline per `ipw.md` | `IPW COMPLETE` |
| 2 | IDW `--rw` | Parent or sub-agent per `idw.md` | `IDW COMPLETE` (+ RW outcome) |

**Resume:** When linked IPP/ICW already exists on the host task, skip Leg 1 and run Leg 2 only.

**Continuous orchestration (BR-102):** The orchestrator **does not** pause for operator plan↔implementation mode switches. Delegate each leg via sub-agent (Task tool) or inline execution of the command guide.

## `MWF CHAIN PAUSED` (narrow)

| Situation | Response |
| --------- | -------- |
| Sub-agent spawn unavailable | `MWF CHAIN PAUSED` — Task tool blocked |
| Leg `ABORTED` needs operator decision | `MWF ABORTED (leg: …)` preferred |
| ~~IPP missing; not in plan mode~~ | **Delegate IPW** — not a pause ([BR-102](../../../../../../docs/kanban/fbu/BR-102-mwf-chain-paused-instead-of-subagent-leg-delegation.md)) |
| ~~IPW complete; still in plan mode~~ | **Continue to Leg 2** — not a pause |

## MWF vs `IDW --rw`

| Trigger | Legs | When to use |
| ------- | ---- | ----------- |
| **`MWF E:S:T delivery`** | IPW → IDW → RW | Full pipeline from planning (or resume after IPW) |
| **`IDW E:S:T --rw`** | IDW → RW | IPP already exists; implement + release only |

MWF **does not** replace IPW or IDW — it sequences them.

## Delegation rules (FR-124-F3)

1. Load and follow the **command guide** for each leg (`ipw.md`, `idw.md`).
2. Do **not** inline RW Step 1–12 inside MWF.
3. Forward `--push` / `--art` from MWF to `IDW … --rw` only.
4. Abort any leg → **`MWF ABORTED (leg: …)`** — no release surfaces on abort.

## Recipe registry

See `workflows/workflow-registry.yaml` → `composite_workflows.mwf.delivery`.

```yaml
composite_workflows:
  mwf:
    delivery:
      legs: [ipw, idw_rw]
      description: Full delivery pipeline (plan → implement → local-complete release)
```

## Integration

- **FR-123 withdrawn:** Do not implement `IPW --rw`; use MWF for full pipeline.
- **FR-083:** IDW leg satisfies implementation authorization.
- **UXR-024:** RW in chain remains local-complete unless `--push` forwarded.

## Encapsulation contract

Atomic legs must satisfy the [workflow encapsulation contract](workflow-encapsulation-contract.md) (FR-126). Inventory matrix: [T10-workflow-encapsulation-inventory-matrix.md](../../Analysis/T10-workflow-encapsulation-inventory-matrix.md).

## References

- `.claude/commands/mwf.md`
- [workflow-encapsulation-contract.md](workflow-encapsulation-contract.md)
- [FR-124](../../../../../../docs/kanban/fbu/FR-124-meta-workflow-orchestration-composite-workflow-chains.md)
- [implementation-planning-workflow-agent-execution.md](implementation-planning-workflow-agent-execution.md)
- [implementation-delivery-workflow-agent-execution.md](implementation-delivery-workflow-agent-execution.md)
- [release-workflow-agent-execution.md](release-workflow-agent-execution.md)
- [workflow-initiation-cheatsheet.md](../../../../../../docs/guides/workflow-initiation-cheatsheet.md)

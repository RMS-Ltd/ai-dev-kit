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

| Step | Workflow | Mode | Completion token |
| ---- | -------- | ---- | ---------------- |
| 1 (if no IPP) | IPW | Plan | `IPW COMPLETE` |
| — | Mode gate | — | `MWF CHAIN PAUSED` |
| 2 | IDW `--rw` | Implementation | `IDW COMPLETE` (+ RW outcome) |

**Resume:** When linked IPP/ICW already exists on the host task, skip Leg 1 and run Leg 2 only.

## Mode gates

| Situation | Response |
| --------- | -------- |
| IPP missing; not in plan mode | `MWF CHAIN PAUSED` — enter plan mode for IPW leg |
| IPW complete; still in plan mode | `MWF CHAIN PAUSED` — exit plan mode for IDW leg |
| IDW invoked in plan mode | `IDW BLOCKED` (per IDW contract) |

Cursor cannot auto-switch modes — operator must re-invoke after mode change.

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

## References

- `.claude/commands/mwf.md`
- [FR-124](../../../../../../docs/kanban/fr-br/FR-124-meta-workflow-orchestration-composite-workflow-chains.md)
- [implementation-planning-workflow-agent-execution.md](implementation-planning-workflow-agent-execution.md)
- [implementation-delivery-workflow-agent-execution.md](implementation-delivery-workflow-agent-execution.md)
- [release-workflow-agent-execution.md](release-workflow-agent-execution.md)
- [workflow-initiation-cheatsheet.md](../../../../../../docs/guides/workflow-initiation-cheatsheet.md)

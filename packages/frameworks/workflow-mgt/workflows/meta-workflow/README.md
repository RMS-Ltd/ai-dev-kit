# Meta-Workflow (MWF)

Orchestrates **composite workflow chains** by delegating to encapsulated atomic workflows — without embedding chain logic in IPW, IDW, or RW entry points ([FR-124](../../../../../../docs/kanban/fbu/FR-124-meta-workflow-orchestration-composite-workflow-chains.md)).

## Triggers

```text
MWF E02:S03:T09 delivery
/mwf E02:S03:T09 delivery
MWF E02:S03:T09 ipw,idw,rw          # alias for delivery
MWF E02:S03:T09 delivery --art      # forward to IDW --rw leg
MWF E02:S03:T09 delivery --push     # forward to IDW --rw leg
```

## v1 recipe: `delivery`

| Leg | Workflow | Mode |
| --- | -------- | ---- |
| 1 (if no IPP) | IPW | Plan |
| — | Mode gate | `MWF CHAIN PAUSED` |
| 2 | IDW `--rw` | Implementation |

**Resume:** When IPP is already linked on the host task, skip Leg 1.

**Do not use:** `IPW --rw` — superseded by MWF ([FR-123](../../../../../../docs/kanban/fbu/FR-123-ipw-full-delivery-chain-idf-rw.md) withdrawn).

## Documentation

- Command: [`.claude/commands/mwf.md`](../../../../.claude/commands/mwf.md)
- Agent guide: [meta-workflow-agent-execution.md](../../KB/Documentation/Developer_Docs/vwmp/meta-workflow-agent-execution.md)
- Cheatsheet: [workflow-initiation-cheatsheet.md §4c](../../../../../../docs/guides/workflow-initiation-cheatsheet.md)

## Registry

- Abbreviation: **MWF**
- Triggers: `["MWF"]`
- Composite recipe: `composite_workflows.mwf.delivery` in `workflow-registry.yaml`
- Config: `mwf-config.yaml`

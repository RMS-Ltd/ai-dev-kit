# Implementation Delivery Workflow (IDW)

## Purpose

**IDW** executes implementation work prescribed by a linked **IPP** (from **IPW**) or legacy **ICW** trio. It owns tests, code, in-scope documentation, and task status transitions — **not** version bumps, changelog, commit, or tag (those are **RW**).

## Canonical triggers

```text
IDW E02:S16:T15
/idw E02:S16:T15
IDW E02:S16:T15 --rw
IDW E02:S16:T15 --rw --push
IDW E02:S16:T15 --rw --art
```

**Flags:** lowercase long form (`--rw`, `--push`, `--art`). `--push` and `--art` require `--rw`.

## Prerequisites

1. **IPW complete** — linked planning package under `docs/implementation-cycles/`
2. **Implementation mode** — not plan mode
3. **Branch safety** — `validate_branch_context.py --strict`

Invoking **IDW** is explicit FR-083 authorization to implement (no separate `implement` message required).

## Typical sequence

```text
IPW E:S:T     →  IPP (plan mode)
IDW E:S:T     →  IDW COMPLETE
RW E:S:T      →  RW COMPLETE (local)
```

One-shot implement + release:

```text
IDW E:S:T --rw
```

Full pipeline (plan → implement → release) via orchestrator:

```text
MWF E:S:T delivery
```

MWF delegates to IPW (when no IPP) then IDW `--rw` with mode-gate pauses. Do **not** use `IPW --rw` — use MWF ([FR-124](../../../../../../docs/kanban/fr-br/FR-124-meta-workflow-orchestration-composite-workflow-chains.md)).

## Documentation

- Command: `.claude/commands/idw.md`
- Orchestrator: `.claude/commands/mwf.md`
- Agent guide: `KB/Documentation/Developer_Docs/vwmp/implementation-delivery-workflow-agent-execution.md`
- MWF guide: `KB/Documentation/Developer_Docs/vwmp/meta-workflow-agent-execution.md`
- Planning upstream: `implementation-cycle-workflow/` (IPW / ICW alias)
- Release downstream: `release-workflow/` (RW)

## Registry

- Abbreviation: **IDW**
- Triggers: `["IDW"]`
- Config: `idw-config.yaml`

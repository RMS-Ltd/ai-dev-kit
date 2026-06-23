---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-08T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Implementation Delivery Workflow (IDW) — Agent Execution Guide

**Status:** Active  
**Purpose:** Canonical **implementation** workflow: execute a linked **IPP** (or ICW trio) for a host Kanban task — tests, code, documentation, and task status reconciliation — without owning release (version/changelog/commit/tag).  
**Command:** `.claude/commands/idw.md` (`/idw` or plain-text `IDW`)  
**Upstream:** [Implementation Planning Workflow (IPW)](implementation-planning-workflow-agent-execution.md)  
**Downstream:** [Release Workflow (RW)](release-workflow-agent-execution.md) — optional via `--rw`

---

## Trigger

- **`/idw [E:S:T] [--rw] [--push] [--art]`** — canonical Claude Code slash command.
- **`IDW E{epic}:S{story}:T{task}`** — plain-text trigger (Cursor / Claude Code via `CLAUDE.md`).
- **`IDW E:S:T --rw`** — implement, then local-complete RW for the same task.
- **`IDW E:S:T --rw --push`** — implement, then RW with Step 12 push + 12.5 GitHub Release.
- **`IDW E:S:T --rw --art`** — implement, then RW with `--art` version adoption.

**Flag convention:** long flags are **lowercase** (`--rw`, `--push`, `--art`). Trigger prefix `IDW` / `idw` is case-insensitive.

## Mode

- **Implementation mode required.** IDW must **not** run in plan mode.
- **Plan mode blocks IDW.** If plan mode is active: `IDW BLOCKED: plan mode is active. Exit plan mode, then invoke /idw again.`

## Relationship to IPW and RW

| Workflow | Mode | Delivers |
| -------- | ---- | -------- |
| **IPW** | Plan | IPP / ICW planning package |
| **IDW** | Implementation | Code, tests, docs per IPP; task status transitions |
| **RW** | Release | Version, changelog, kanban Step 7, commit, tag |

**Default chain:** none. Operator sequence: `IPW` → review IPP → `IDW` → `RW`.  
**Opt-in chain:** `IDW E:S:T --rw` runs RW immediately after `IDW COMPLETE`.  
**Full pipeline:** `MWF E:S:T delivery` orchestrates IPW → (mode gate) → IDW `--rw` — see [meta-workflow-agent-execution.md](meta-workflow-agent-execution.md). Do **not** use `IPW --rw` ([FR-124](../../../../../../docs/kanban/fbu/FR-124-meta-workflow-orchestration-composite-workflow-chains.md)).

Invoking **IDW** satisfies FR-083 **explicit user execution authorization** for implementation on the parsed task.

## Gates (before file modifications)

| Gate | Check |
| ---- | ----- |
| 1 | `validate_branch_context.py --strict` |
| 1b | Parseable `E:S:T` |
| 1c | Host task doc + linked IPP or ICW trio under `docs/implementation-cycles/` |

Optional: `validate_ipw_publication_wiring.py --requested "<id>"` when enabled.

## Phases

| Phase | Name | Summary |
| ----- | ---- | ------- |
| 0 | Load planning package | Read IPP §1–§7 (or ICW trio equivalent) |
| 1 | Status transition | IPP §4 Step 1: `TODO → IN PROGRESS` |
| 2 | Test-first (Red) | §3 tests failing before prod code (unless skip justified) |
| 3 | Implement | §4 middle steps; Red → Green → Refactor |
| 4 | Documentation delivery | §5–§6 deliverables and housing |
| 5 | Status reconciliation | IPP §4 final step per FR-077 / FR-094 |
| 6 | Verify | §7 success criteria + CQG when Python code in scope (Phase 6b) |

### Phase 6b — Code Quality Gate (CQG)

When the task changes Python under `code_quality_gate.source_roots` (or IPP §7 requires CQG):

```bash
python "packages/frameworks/workflow-mgt/scripts/validation/validate_code_quality_gate.py" \
  --strict --requested "<parsed_id>"
```

Docs-only / no Python code: `--skip`. **Blocking by default** (`idw_advisory: false`). Non-zero exit → **IDW ABORTED**. RW does **not** run CQG (ADR-022 v0.0.2). See [operator guide](../../../../tooling-automation/docs/code-quality-gate-operator-guide.md).

## `--rw` chain rules

1. Run only after **`IDW COMPLETE`**.
2. Same `E:S:T` as IDW.
3. Execute full RW per `rw.md` / release-workflow-agent-execution.md.
4. IDW never commits or tags — RW owns git release surfaces.
5. `--push` without `--rw` → **IDW ABORTED** at parse time.

## Status transition ownership (FR-077)

IDW **executes** the IPP-prescribed transitions:

- **Step 1:** `TODO → IN PROGRESS` at start of implementation.
- **Final step:** Reconcile to `COMPLETE` / `IN PROGRESS` / `BLOCKED` based on evidence — not a forced COMPLETE.

Board row propagation for a release is **RW Step 7** when shipping via `--rw` or a follow-on `RW`.

## Integration

- **IPW:** Must complete first; IDW does not plan.
- **MWF:** `MWF E:S:T delivery` sequences IPW (when no IPP) then IDW `--rw`; IDW `--rw` remains the two-leg implement+release chain inside MWF Leg 2.
- **Implementation Cycle SoP:** IDW operationalizes SoP Steps 3–4 (tests + implementation) against the IPP.
- **RW:** Separate unless `--rw`; UXR-024 local-default RW still applies (no push unless `--push` on the chain).

## References

- `.claude/commands/idw.md`
- `.claude/commands/mwf.md`
- [implementation-planning-workflow-agent-execution.md](implementation-planning-workflow-agent-execution.md)
- [meta-workflow-agent-execution.md](meta-workflow-agent-execution.md)
- [release-workflow-agent-execution.md](release-workflow-agent-execution.md)
- [implementation-cycle-sop.md](implementation-cycle-sop.md)
- [FR-083](../../../../../../docs/kanban/fbu/FR-083-global-ipw-gated-implementation-contract.md)
- [FR-077](../../../../../../docs/kanban/fbu/FR-077-ipw-built-task-status-transition-and-kboard-sync.md)

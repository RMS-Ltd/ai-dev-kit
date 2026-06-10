# Meta-Workflow (MWF) — Slash Command

**Invocation:** `/mwf [E{epic}:S{story}:T{task}] <recipe> [--push] [--art]`  
**Arguments:** `$ARGUMENTS`  
**Plain-text alias:** `MWF $ARGUMENTS` is treated identically to this command (case-insensitive trigger).

---

## Environment Check (AC3)

Confirm Bash/tool execution is available in this session.

- If Bash tool calls are **NOT** available: respond with **`MWF BLOCKED: tool execution is unavailable in this session. Switch to a session with tool access and retry.`** — do not proceed further.
- If Bash tool calls **ARE** available: proceed to Argument Parsing.

---

## Argument Parsing

Parse `$ARGUMENTS` to determine:

1. **Task token:** Extract `E…S…T…` identifier (e.g. `E2:S03:T09`, `E2S03T09`). Flexible parsing — colons and zero-padding optional.
2. **Recipe:** Positional token after task (required). **v1 built-in recipes:**
   - `delivery` — full pipeline: IPW → IDW `--rw` (continuous orchestration)
   - `ipw,idw,rw` — alias normalized to `delivery`
3. **`--push` flag:** Forward to IDW `--rw` leg when present.
4. **`--art` flag:** Forward to IDW `--rw` leg when present.

If no task token → **`MWF ABORTED: no host task identified. Re-invoke with an explicit E:S:T token, e.g. /mwf E2:S03:T09 delivery.`**

If no recipe → **`MWF ABORTED: no recipe specified. v1: use delivery or ipw,idw,rw.`**

**Load config (MANDATORY):** Check for `rw-config.yaml` in the project root. Use its paths when present.

---

## Orchestration Contract (FR-124 / BR-102)

MWF is a **meta-workflow orchestrator**. It **delegates** each leg to existing command specs — it does **not** reimplement IPW phases, IDW phases, or RW steps inline.

| Leg | Delegate | Command guide |
| --- | -------- | ------------- |
| 1 (when needed) | IPW | `.claude/commands/ipw.md` |
| 2 | IDW `--rw` | `.claude/commands/idw.md` |

**Terminal states:** `MWF COMPLETE`, `MWF ABORTED (leg: IPW|IDW|RW)`, `MWF CHAIN PAUSED` (narrow — see below).

**Abort propagation:** Any leg `ABORTED` terminates the chain; name the failing leg. No partial RW commit/tag from an aborted chain.

### Sub-agent leg delegation (BR-102)

The orchestrator **must not** require the operator to switch IDE plan/implementation mode between legs.

| Leg | Delegation rule |
| --- | ---------------- |
| **IPW** | Spawn **sub-agent** (Task tool `generalPurpose`) **or** execute `ipw.md` inline as delegate — parent session plan mode **not** required |
| **IDW `--rw`** | Continue in parent implementation session **or** spawn implementation sub-agent — parent plan mode **not** required after IPW |

**Sub-agent prompt template (Leg 1):**

```text
Execute IPW for {E:S:T} per .claude/commands/ipw.md. Produce IPP under docs/implementation-cycles/. Wire IPP to host task. End with IPW COMPLETE or IPW ABORTED.
```

**Sub-agent prompt template (Leg 2):**

```text
Execute IDW {E:S:T} --rw [--art] [--push] per .claude/commands/idw.md. End with IDW COMPLETE + RW outcome, or IDW ABORTED / MWF ABORTED (leg: RW).
```

### `MWF CHAIN PAUSED` (narrow semantics only)

| Allowed | Forbidden |
| ------- | --------- |
| Sub-agent / Task tool unavailable | Parent not in plan mode (delegate instead) |
| Leg `ABORTED` awaiting explicit operator decision | Routine IPW→IDW handoff |
| Documented operator review gate (rare) | After IPW: "exit plan mode and re-invoke" |

---

## Recipe: `delivery` (v1)

### Leg selection (resume semantics)

Before starting legs, resolve whether a linked planning package exists for the host task:

- Check host task doc **Input** / **References** for `IPP-E…S…T…-*.md` or ICW trio under `docs/implementation-cycles/`.
- **If linked IPP/ICW exists:** skip Leg 1 (IPW); proceed to Leg 2.
- **If no linked IPP/ICW:** Leg 1 (IPW) is required.

### Leg 1 — IPW (planning)

- **Delegate** per `ipw.md` (sub-agent or inline). **Do not** gate on parent session plan mode.
- **Gate:** `IPW COMPLETE` + linked IPP on host task before Leg 2.
- On `IPW ABORTED` → **`MWF ABORTED (leg: IPW)`** — stop.
- **Continue immediately to Leg 2** on success — no operator re-invoke.

### Leg 2 — IDW `--rw` (implement + release)

- **Delegate** per `idw.md` with `IDW <E:S:T> --rw` plus forwarded `--push` / `--art`.
- **Do not** pause for mode switch after Leg 1.
- On `IDW ABORTED` → **`MWF ABORTED (leg: IDW)`** — stop.
- On `RW ABORTED` within IDW chain → **`MWF ABORTED (leg: RW)`** — stop.

**Success:** `IDW COMPLETE` + RW outcome → declare **`MWF COMPLETE`**.

---

## Flag forwarding (v1)

| MWF trigger | Forward to IDW leg |
| ----------- | ------------------ |
| `--push` | `IDW … --rw --push` |
| `--art` | `IDW … --rw --art` |

`--skip-tests` is **IPW-only** — not forwarded to IDW.

---

## Authorization (FR-083)

- **Leg 1 (IPW):** planning only; does not authorize implementation.
- **Leg 2 (IDW):** MWF `delivery` satisfies FR-083 for the implementation leg when IDW runs.

---

## Phase Execution

Create a TODO list for orchestration phases. Execute continuously — **do not** stop between legs for operator guidance.

Execute `ANALYZE → DETERMINE → EXECUTE → VALIDATE → PROCEED` for each phase.

### Phase 0 — Parse and resolve recipe

### Phase 1 — Determine legs (IPP resume semantics)

### Phase 2 — Execute Leg 1 (IPW) when required

### Phase 3 — Execute Leg 2 (IDW `--rw`) immediately on Leg 1 success

### Phase 4 — Terminal state

Report `MWF COMPLETE` or abort reason.

---

## Abort / Completion Protocol

- Never leave MWF ambiguous — end in **`MWF COMPLETE`**, **`MWF CHAIN PAUSED`** (narrow), or **`MWF ABORTED (leg: …)`**.
- MWF does **not** commit, tag, or bump version — RW owns release surfaces (via IDW `--rw` chain).
- Do **not** add `IPW --rw` — use MWF ([FR-124](docs/kanban/fr-br/FR-124-meta-workflow-orchestration-composite-workflow-chains.md)).

---

## Reference Documentation

- [meta-workflow-agent-execution.md](packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/meta-workflow-agent-execution.md)
- [workflow-encapsulation-contract.md](packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/workflow-encapsulation-contract.md)
- [BR-102](docs/kanban/fr-br/BR-102-mwf-chain-paused-instead-of-subagent-leg-delegation.md)
- IPW: `.claude/commands/ipw.md` · IDW: `.claude/commands/idw.md` · RW: `.claude/commands/rw.md`

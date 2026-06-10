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
   - `delivery` — full pipeline: IPW → (mode gate) → IDW `--rw`
   - `ipw,idw,rw` — alias normalized to `delivery`
3. **`--push` flag:** Forward to IDW `--rw` leg when present.
4. **`--art` flag:** Forward to IDW `--rw` leg when present.

If no task token → **`MWF ABORTED: no host task identified. Re-invoke with an explicit E:S:T token, e.g. /mwf E2:S03:T09 delivery.`**

If no recipe → **`MWF ABORTED: no recipe specified. v1: use delivery or ipw,idw,rw.`**

**Load config (MANDATORY):** Check for `rw-config.yaml` in the project root. Use its paths when present.

---

## Orchestration Contract (FR-124)

MWF is a **meta-workflow orchestrator**. It **delegates** each leg to existing command specs — it does **not** reimplement IPW phases, IDW phases, or RW steps inline.

| Leg | Delegate | Command guide |
| --- | -------- | ------------- |
| 1 (when needed) | IPW | `.claude/commands/ipw.md` |
| 2 | IDW `--rw` | `.claude/commands/idw.md` |

**Terminal states:** `MWF COMPLETE`, `MWF ABORTED (leg: IPW|IDW|RW)`, `MWF CHAIN PAUSED`.

**Abort propagation:** Any leg `ABORTED` terminates the chain; name the failing leg. No partial RW commit/tag from an aborted chain.

---

## Recipe: `delivery` (v1)

### Leg selection (resume semantics)

Before starting legs, resolve whether a linked planning package exists for the host task:

- Check host task doc **Input** / **References** for `IPP-E…S…T…-*.md` or ICW trio under `docs/implementation-cycles/`.
- **If linked IPP/ICW exists:** skip Leg 1 (IPW); proceed to Leg 2 prerequisites.
- **If no linked IPP/ICW:** Leg 1 (IPW) is required.

### Leg 1 — IPW (planning)

**Requires plan mode.**

- If plan mode is **NOT** active → **`MWF CHAIN PAUSED: enter plan mode, then invoke MWF delivery again (or run IPW E:S:T first).`**
- Execute IPW per `ipw.md` for the parsed `E:S:T`.
- **Gate:** `IPW COMPLETE` before continuing.
- On `IPW ABORTED` → **`MWF ABORTED (leg: IPW)`** — stop.

After `IPW COMPLETE` → **`MWF CHAIN PAUSED: exit plan mode, then invoke MWF E:S:T delivery` again (or IDW E:S:T --rw) from an implementation session.`**

### Leg 2 — IDW `--rw` (implement + release)

**Requires implementation mode (not plan mode).**

- If plan mode **IS** active → **`MWF CHAIN PAUSED: exit plan mode, then invoke /mwf E:S:T delivery again from an implementation session.`**
- Build IDW trigger: `IDW <E:S:T> --rw` plus forwarded `--push` / `--art` when present on MWF trigger.
- Execute full IDW per `idw.md` (including embedded RW when `--rw` is set).
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

`--push` without `--rw` on IDW is invalid; MWF always invokes IDW with `--rw` for the `delivery` recipe.

---

## Authorization (FR-083)

- **Leg 1 (IPW):** planning only; does not authorize implementation.
- **Leg 2 (IDW):** invoking MWF `delivery` with IDP leg (or resume to IDW) satisfies FR-083 for the implementation leg when IDW runs.

---

## Phase Execution

Create a TODO list for orchestration phases before starting. Mark each phase complete before advancing.

Execute `ANALYZE → DETERMINE → EXECUTE → VALIDATE → PROCEED` for each phase.

### Phase 0 — Parse and resolve recipe

Confirm recipe maps to `delivery`. Resolve host task doc path via `rw-config.yaml` kanban patterns.

### Phase 1 — Determine legs

Apply resume semantics (IPP exists → skip IPW).

### Phase 2 — Execute Leg 1 (IPW) when required

Delegate to `ipw.md`. Stop on pause or abort per above.

### Phase 3 — Mode gate

Confirm not in plan mode before Leg 2.

### Phase 4 — Execute Leg 2 (IDW `--rw`)

Delegate to `idw.md` with constructed arguments.

### Phase 5 — Terminal state

Report `MWF COMPLETE` or abort reason.

---

## Abort / Completion Protocol

- Never leave MWF ambiguous — always end in **`MWF COMPLETE`**, **`MWF CHAIN PAUSED`**, or **`MWF ABORTED (leg: …)`**.
- MWF does **not** commit, tag, or bump version — RW owns release surfaces (via IDW `--rw` chain).
- Do **not** add `IPW --rw` — use MWF for full pipeline ([FR-124](docs/kanban/fr-br/FR-124-meta-workflow-orchestration-composite-workflow-chains.md)).

---

## Reference Documentation

- MWF agent execution guide: `packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/meta-workflow-agent-execution.md`
- IPW: `.claude/commands/ipw.md`
- IDW: `.claude/commands/idw.md`
- RW: `.claude/commands/rw.md`
- FR-124: `docs/kanban/fr-br/FR-124-meta-workflow-orchestration-composite-workflow-chains.md`

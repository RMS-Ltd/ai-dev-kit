# Implementation Delivery Workflow (IDW) — Slash Command

**Invocation:** `/idw [E{epic}:S{story}:T{task}] [--rw] [--push] [--art]`  
**Arguments:** `$ARGUMENTS`  
**Plain-text alias:** `IDW $ARGUMENTS` is treated identically to this command (case-insensitive trigger).

---

## Mode Check (MANDATORY FIRST)

IDW is an **implementation** workflow. It **MUST NOT** run in plan mode.

- If plan mode **IS** active: respond with **`IDW BLOCKED: plan mode is active. Exit plan mode, then invoke /idw again from an implementation session.`** — do not proceed.
- If plan mode is **NOT** active: proceed to Environment Check.

---

## Environment Check (AC3)

Confirm Bash/tool execution is available in this session.

- If Bash tool calls are **NOT** available: respond with **`IDW BLOCKED: tool execution is unavailable in this session. Switch to a session with tool access and retry.`** — do not proceed further.
- If Bash tool calls **ARE** available: proceed to Argument Parsing.

---

## Argument Parsing

Parse `$ARGUMENTS` to determine:

1. **Task token:** Extract `E…S…T…` identifier (e.g. `E2:S16:T09`, `E2S16T09`). Flexible parsing — colons and zero-padding optional. If not provided, infer from current context only when unambiguous.
2. **`--rw` flag:** Present or absent. When present, chain a full **local-complete RW** for the same task token after `IDW COMPLETE`. Passes through `--art` and `--push` when those flags are also present.
3. **`--push` flag:** Present or absent. Valid **only** with `--rw`; forwards to RW Step 12 + 12.5. Without `--rw`, **IDW ABORTED** — tell the user `--push` requires `--rw`.
4. **`--art` flag:** Present or absent. Valid only with `--rw`; forwards to RW for version-anchor adoption.

If no task token found and cannot be inferred → respond with **`IDW ABORTED: no host task identified. Re-invoke with an explicit E:S:T token, e.g. /idw E2:S16:T09.`** Do not proceed.

**Load config (MANDATORY before gates):** Check for `rw-config.yaml` in the project root. Use its paths when present.

---

## Authorization Contract (FR-083)

Invoking **`IDW E:S:T`** (or `/idw E:S:T`) **is** the explicit user execution authorization for implementation on that task. No separate `implement` message is required when IDW is the trigger.

IDW does **not** replace IPW. A linked planning package must exist before any file modifications.

---

## Mandatory Gates (before any file modifications)

Execute in order. Any non-zero exit or failed check → **IDW ABORTED** (print output; do not modify files).

### Gate 1 — Branch safety

```bash
python "packages/frameworks/workflow-mgt/scripts/validation/validate_branch_context.py" --strict
```

### Gate 1b — Task token

Parsed `E:S:T` must be present (see Argument Parsing).

### Gate 1c — Planning package exists and is wired

- Resolve host task document at canonical kanban path.
- Confirm **Input** or **References** links to a planning artifact under `docs/implementation-cycles/`:
  - **IPP (preferred):** `IPP-E{epic}S{story}T{task}-*.md`, or
  - **ICW trio:** `ICW-…-specification.md`, `-test-design.md`, `-implementation-plan.md`.
- Load the planning package. If missing or not linked → **IDW ABORTED (Gate 1c: no linked IPP/ICW for `<token>`)**.

Optional when enabled in project:

```bash
python "packages/frameworks/workflow-mgt/scripts/validation/validate_ipw_publication_wiring.py" --requested "<parsed_id>"
```

Non-zero exit → **IDW ABORTED** — print script output.

---

## Phase Execution

Create a TODO list for all phases before starting. Mark each phase complete before advancing. Use Workflow Step Tracker (`idw-phase-*` IDs in Cursor).

Execute `ANALYZE → DETERMINE → EXECUTE → VALIDATE → PROCEED` for each phase.

---

### Phase 0 — Load planning package

Read the linked IPP (or ICW trio) for the host task. Extract:

- §1 Requirements and §2 Specification (scope, constraints, out-of-scope)
- §3 Test design (or `--skip-tests` justification from IPP)
- §4 Implementation plan (ordered steps — **Step 1** and **final step** are mandatory IPP prescriptions)
- §5 Documentation deliverables and §6 Documentation housing
- §7 Success / verification criteria

**Gate to proceed:** Planning package loaded; §4 has at least Step 1 and final reconciliation step.

---

### Phase 1 — Status transition (IPP Step 1)

Execute the IPP’s **first** implementation-plan step: transition host task from `TODO` to `IN PROGRESS` (or confirm already `IN PROGRESS`). Update `Last updated` on the task doc.

**Gate to proceed:** Task doc status reflects `IN PROGRESS` with evidence of this transition.

---

### Phase 2 — Test-first (Red)

Unless IPP §3 documents an approved `--skip-tests` / structural-verification justification:

- Create or update tests per §3 before production code changes.
- Run tests; confirm **failing** (Red) for new behavior before implementing.

**Gate to proceed:** Tests exist and fail as expected for new behavior — OR skip justification honored per IPP.

---

### Phase 3 — Implement (Green + Refactor)

Execute IPP §4 steps **in order**, excluding Step 1 (done in Phase 1) and the **final** reconciliation step (Phase 5):

- Apply code, config, and in-scope documentation changes.
- Run tests after each meaningful change; aim for Green.
- Refactor while keeping tests green.
- Respect §2 out-of-scope and constraints.

**Gate to proceed:** All middle §4 steps attempted; tests green (or justified skip path); no known blocker without `BLOCKED` status path.

---

### Phase 4 — Documentation delivery

Execute §5 **UPDATE** / **CREATE** rows and §6 housing paths from the IPP. Do not leave deliverables at TBD paths.

**Gate to proceed:** Every non-NONE §5 row addressed; publication intent from §6 applied where implementation touched docs.

---

### Phase 5 — Status reconciliation (IPP final step)

Execute the IPP’s **final** implementation-plan step:

- If all acceptance criteria satisfied with evidence → `COMPLETE` + forensic marker `✅ COMPLETE (v{version})` when version is known; else `IN PROGRESS`.
- If blocked → `BLOCKED` with documented reason.
- Update `Last updated`.

**Note:** Kanban board propagation for release scope is owned by **RW Step 7** when `--rw` is used, not by standalone IDW.

**Gate to proceed:** Task doc status reconciled to actual state per evidence.

---

### Phase 6 — Verify

Confirm against IPP §7 success / verification criteria:

- [ ] §4 middle steps executed (or documented partial with `IN PROGRESS`)
- [ ] Tests pass (or §3 skip justification still valid)
- [ ] §5–§6 documentation deliverables addressed
- [ ] Task doc status reconciled (Phase 5)
- [ ] No scope creep beyond §2
- [ ] **Code Quality Gate (CQG)** when implementation touches Python code (see below)

**Gate (IDW completion):** All applicable checks pass → declare **`IDW COMPLETE`**.

If any blocking check fails → **`IDW ABORTED (Phase 6: <reason>)`**.

#### Phase 6b — Code Quality Gate (CQG) — FR-113 / ADR-022 v0.0.2

**When required:** Task scope changes Python under `code_quality_gate.source_roots` (or IPP §7 explicitly requires CQG). **Skip** when docs-only / kanban-only / no Python code changes (IPP `--skip-tests` structural path).

**When `code_quality_gate.enabled` in `rw-config.yaml`:**

```bash
python "packages/frameworks/workflow-mgt/scripts/validation/validate_code_quality_gate.py" \
  --strict --requested "<parsed_id>"
```

Docs-only / no code scope:

```bash
python "packages/frameworks/workflow-mgt/scripts/validation/validate_code_quality_gate.py" --skip
```

- **Blocking by default** (`idw_advisory: false` in `rw-config.yaml`); `--no-strict` for advisory only.
- **Non-zero exit → IDW ABORTED** at Phase 6. Fix findings or use `--sarif` for offline replay.
- Missing CodeQL CLI is a **failure** in IDW (not an advisory skip). Install per [operator guide](packages/frameworks/tooling-automation/docs/code-quality-gate-operator-guide.md).
- **CQG does not substitute** for RW Step 9.7 Actions CI parity — separate surfaces (FR-112).
- **RW does not run CQG** — implementation quality is proven here before release.

---

## Optional chain — `--rw`

When `--rw` was parsed:

1. Only after **`IDW COMPLETE`** (not on abort or partial IDW).
2. Invoke the Release Workflow for the **same** `E:S:T` per `.claude/commands/rw.md`.
3. Forward `--art` and `--push` to RW when present on the IDW trigger.
4. End state: **`IDW COMPLETE` + `RW COMPLETE (local)`** or **`RW COMPLETE (pushed)`** — or **`IDW COMPLETE` + `RW ABORTED`** with RW abort reason.

IDW must **not** commit, tag, or bump version itself — RW owns release surfaces.

**Default:** Without `--rw`, IDW ends at `IDW COMPLETE`; operator runs `RW E:S:T` separately when ready to ship.

---

## Full pipeline (MWF)

For plan → implement → release orchestration, use **`MWF E:S:T delivery`** (`.claude/commands/mwf.md`) — not `IPW --rw`. MWF Leg 2 invokes **`IDW E:S:T --rw`** (plus forwarded `--push` / `--art`). See [FR-124](docs/kanban/fr-br/FR-124-meta-workflow-orchestration-composite-workflow-chains.md).

---

## Abort / Completion Protocol

- Always end in **`IDW COMPLETE`**, **`IDW COMPLETE` + RW outcome**, or **`IDW ABORTED (Phase/Gate X: reason)`** — never ambiguous.
- On abort: mark remaining phase TODOs `cancelled`; stop before `--rw` chain.
- Never skip gates to save time.

---

## File Paths (ai-dev-kit)

Use `rw-config.yaml` when present. Fallbacks:

- Planning packages: `docs/implementation-cycles/`
- Kanban root: `docs/project-management/kanban/`
- Validators: `packages/frameworks/workflow-mgt/scripts/validation/`

---

## Reference Documentation

- IDW agent execution guide: `packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/implementation-delivery-workflow-agent-execution.md`
- MWF (full pipeline): `.claude/commands/mwf.md`
- IPW (planning): `.claude/commands/ipw.md`
- RW (release): `.claude/commands/rw.md`
- FR-083 (implementation gate): `docs/project-management/kanban/fr-br/FR-083-global-ipw-gated-implementation-contract.md`
- FR-077 (status transitions): `docs/project-management/kanban/fr-br/FR-077-ipw-built-task-status-transition-and-kboard-sync.md`
- Implementation Cycle SoP: `packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/implementation-cycle-sop.md`

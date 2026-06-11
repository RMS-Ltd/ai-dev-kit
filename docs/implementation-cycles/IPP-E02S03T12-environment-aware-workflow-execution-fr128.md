---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-11T12:30:00Z
expires_at: null
housekeeping_policy: keep
---

# E02:S03:T12 — Planning: Environment-aware workflow execution (FR-128)

**Host Task:** [`T12-environment-aware-workflow-execution-fr128.md`](../kanban/epics/epic-02/story-03-additional-workflows-and-examples/T12-environment-aware-workflow-execution-fr128.md) **(E02:S03:T12)**  
**Planning for:** [FR-128 — Environment-aware workflow execution](../kanban/fr-br/FR-128-environment-aware-workflow-execution.md)  
**Status:** Published (MWF Leg 1 — IPW)

---

## 1. Requirements (Ascertained Baseline)

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RF1 | Detect Cursor, Claude Code, OpenCode via env/process signals; `WORKFLOW_ENV` override | FR-128-F1 |
| RF2 | Mode gates per detected environment, not hardcoded single-env checks | FR-128-F2 |
| RF3 | OpenCode IPW delegates to sub-agent with `PLANNING_MODE=true` when spawn available | FR-128-F3 |
| RF4 | Clear blocked messages with env-specific remediation when delegation unavailable | FR-128-F4 |
| RF5 | `workflow_env.py` importable from Python handlers; probe text in command guides | FR-128-F5 |
| RF6 | `workflow-registry.yaml` declares `mode_requirement` + `environment_compatibility` | FR-128-F6 |
| RF7 | IDW blocks plan mode in Cursor/Claude Code; always allows OpenCode | FR-128-F7 |
| RF8 | Detection &lt; 100ms; no network probes | FR-128-NF1 |
| RF9 | Sub-agent IPW preserves full IPP output contract | FR-128-NF2 |
| RF10 | `WORKFLOW_ENV` override wins over auto-detect | FR-128-NF3 |

**Out of scope:** New agent runtime beyond the three targets; deterministic orchestrator runtime; changing IPW phase structure.

---

## 2. Specification

### 2.1 Goal

Make IPW, IDW, and MWF **portable across Cursor, Claude Code, and OpenCode** via shared `WorkflowEnvironment` detection and registry-declared mode semantics — closing T10 Wave 3 gap for standalone OpenCode IPW via BR-102 sub-agent delegation.

### 2.2 `WorkflowEnvironment` API

| Method | Behaviour |
| ------ | --------- |
| `detect()` | Returns `cursor` \| `claude-code` \| `opencode` \| `unknown`; honours `WORKFLOW_ENV` first |
| `has_plan_mode(env)` | True for cursor, claude-code |
| `is_plan_session(env)` | Per-env: `CURSOR_MODE=plan`, `PLANNING_MODE=true`, OpenCode always false |
| `is_implementation_session(env)` | Inverse of plan where applicable; OpenCode always true |
| `can_spawn_subagent(env)` | True for all three targets |

### 2.3 Command-guide gate matrix (IPW)

| Env | Plan active? | Action |
| --- | ------------ | ------ |
| cursor | `CURSOR_MODE=plan` | Proceed inline |
| cursor | agent/unset | **Block** — switch to plan mode |
| claude-code | `/plan` or `PLANNING_MODE=true` | Proceed inline |
| claude-code | else | **Block** — `/plan` then `/ipw` |
| opencode | N/A | **Delegate** sub-agent with `PLANNING_MODE=true`; fallback MWF hint |
| unknown | N/A | **Block** — set `WORKFLOW_ENV` or use supported runtime |

### 2.4 Status transition intent

- Step 1: `TODO → IN PROGRESS` on T12
- Final: `COMPLETE` when AC1–AC8 satisfied with evidence

### 2.5 ADR necessity decision

**Outcome:** `EXEMPT` — extends existing encapsulation contract (T10) and BR-102 patterns; no new architectural boundary. Revisit if detection becomes blocking CI infrastructure.

---

## 3. Test design

| ID | Check | Covers |
| -- | ----- | ------ |
| V1 | `workflow_env.detect()` returns expected env per env vars | AC7, F1 |
| V2 | `WORKFLOW_ENV` override forces detection | AC7 |
| V3 | `is_plan_session()` per cursor/claude/opencode | AC2–AC4, AC6 |
| V4 | `icw_handler._detect_execution_mode()` uses `workflow_env` | F5 |
| V5 | `test_plan_mode_detection.py` extended; all pass | AC8 |
| V6 | `ipw.md` / `idw.md` contain environment decision table | F2, F7 |
| V7 | Registry entries include `mode_requirement` for IPW/IDW/MWF/ICW | F6 |
| V8 | `pytest` on `packages/frameworks/workflow-mgt/scripts/icw/` | AC8 |
| V9 | `sync_greenfield_install.py` when frameworks touched | FR-110 |
| V10 | FR-128 ↔ T12 ↔ IPP bidirectional links | intake |

---

## 4. Implementation plan

| Step | Action |
| ---- | ------ |
| **1** | **[MANDATORY]** T12 `TODO → IN PROGRESS`; update `Last updated` |
| **2** | Create `packages/frameworks/workflow-mgt/scripts/icw/workflow_env.py` |
| **3** | Update `icw_handler.py` `_detect_execution_mode()` to use `workflow_env` |
| **4** | Replace `ipw.md` §Plan Mode with §Environment & Mode Check (incl. OpenCode sub-agent path) |
| **5** | Replace `idw.md` §Mode Check with environment-aware inverted gate |
| **6** | Update `mwf.md` — reference `workflow_env`; note Leg 1 inherits env delegation |
| **7** | Extend `workflow-registry.yaml` with `mode_requirement` on IPW/IDW/MWF/ICW |
| **8** | Extend `test_plan_mode_detection.py` + add `test_workflow_env.py` |
| **9** | Update `CLAUDE.md` IPW/IDW trigger sections (brief env-aware pointer) |
| **10** | `python scripts/sync_greenfield_install.py` + commit mirror |
| **11** | Run V1–V10 |
| **12** | `RW E02:S03:T12` (first functional release) |
| **13** | **[MANDATORY]** Reconcile T12 status with evidence |

---

## 5. Documentation deliverables

| Doc ID | Path | Action |
| ------ | ---- | ------ |
| D-C1 | `packages/frameworks/workflow-mgt/scripts/icw/workflow_env.py` | CREATE |
| D-C2 | `packages/frameworks/workflow-mgt/scripts/icw/test_workflow_env.py` | CREATE |
| D-U1 | `packages/frameworks/workflow-mgt/scripts/icw/icw_handler.py` | UPDATE |
| D-U2 | `packages/frameworks/workflow-mgt/scripts/icw/test_plan_mode_detection.py` | UPDATE |
| D-U3 | `.claude/commands/ipw.md` | UPDATE |
| D-U4 | `.claude/commands/idw.md` | UPDATE |
| D-U5 | `.claude/commands/mwf.md` | UPDATE |
| D-U6 | `packages/frameworks/workflow-mgt/workflows/workflow-registry.yaml` | UPDATE |
| D-U7 | `CLAUDE.md` | UPDATE |
| D-N1 | `.cursorrules` IPW/IDW sections | UPDATE (pointer only) |
| D-N2 | `docs/kanban/fr-br/FR-094-*.md` | NONE (P2 defer) |

---

## 6. Documentation housing

All framework paths under `packages/frameworks/workflow-mgt/` — **PUBLISHED**; greenfield mirror mandatory (FR-110). Command guides under `.claude/commands/` — repo SoT, not Docusaurus.

---

## 7. Success / verification criteria

- [ ] V1–V10 pass
- [ ] FR-128 AC1–AC8 satisfied (AC1 verified by sub-agent path documented + unit tests for delegation gate logic)
- [ ] `RW E02:S03:T12` release anchor

---

## References

- [FR-128](../kanban/fr-br/FR-128-environment-aware-workflow-execution.md)
- [IPP-E02S03T10](IPP-E02S03T10-workflow-encapsulation-integrity-mwf-fr126.md)
- [BR-102](../kanban/fr-br/BR-102-mwf-chain-paused-instead-of-subagent-leg-delegation.md)

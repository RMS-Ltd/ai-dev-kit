---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-24T17:15:00Z
expires_at: null
housekeeping_policy: keep
---

# E06:S09:T40 — Planning: Greenfield orchestrator Install RC gaps (IPW)

**Host Task:** [`T40-greenfield-orchestrator-install-rc-gaps-br112.md`](../kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T40-greenfield-orchestrator-install-rc-gaps-br112.md) **(E06:S09:T40)**  
**Planning for:** [BR-112](../kanban/fbu/BR-112-greenfield-orchestrator-install-rc-gaps.md) · [E06:S09:T38](../kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T38-guided-install-orchestrator-fr135.md)  
**Status:** Approved

---

## 1. Requirements

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RF1 | `validate_install_rc.py` resolves `workflow-mgt/config/install-rc-checklist.yaml` and `kanban/scripts` from script location | BR-112 R1 |
| RF2 | Install RC command rows use venv-aware interpreter (`sys.executable`) | BR-112 R4 |
| RF3 | `install-rc-checklist.yaml` kanban validator args match CLI (`--strict` only) | BR-112 R2 |
| RF4 | Legacy orchestrator auto-loads `config/greenfield-rw-install-input.yaml` when `--config` omitted | BR-112 R3 |
| RF5 | `--init-sqlite` ensures `release_state_backend: sqlite` in emitted `rw-config.yaml` before Install RC | BR-112 R3 |
| RF6 | Legacy arm-b path scaffolds `COMPREHENSION.md` before Install RC | BR-112 R5 |
| RF7 | Orchestrator + strict RC exit 0 on fixture replay without vendor patches | AC1 |
| RF8 | pytest regression for path resolution and orchestrator conventions | AC3 |

**ADR necessity:** **EXEMPT** — install-path bugfix; ADR-030/FR-080 cover scope.

---

## 2. Specification

Fix kit-side Install RC false failure: correct `WORKFLOW_ROOT`, checklist CLI alignment, interpreter resolution, and legacy orchestrator wiring for consumer RW input + sqlite + comprehension scaffold.

**Out of scope:** RW mode C workflow YAML PARTIAL (R6), pipeline sign-off ordering (item 4 root cause).

---

## 3. Test design

| ID | Behavior | Expected |
| -- | -------- | -------- |
| T1 | `WORKFLOW_ROOT` / `CONTRACT_PATH` / `KANBAN_SCRIPTS` | Point at `workflow-mgt` and `kanban/scripts` |
| T2 | Command check with `python` in checklist | Invokes `sys.executable` |
| T3 | `resolve_rw_input_config` | Finds conventional YAML |
| T4 | `ensure_rw_config_sqlite_backend` | Patches rw-config when missing |
| T5 | Legacy dry-run arm-b + init-sqlite + RC | Shows config path, comprehension, RC command |

---

## 4. Implementation plan

1. Transition **E06:S09:T40** `TODO` → `IN PROGRESS`.
2. Red: add failing tests (T1–T5).
3. Fix `validate_install_rc.py` (`WORKFLOW_ROOT`, `python` → `sys.executable`).
4. Fix `install-rc-checklist.yaml` (remove `--project-root` from v4 validator).
5. Extend `install_greenfield_path.py` (config convention, sqlite patch, comprehension on legacy arm-b).
6. Sync `greenfield-install/` mirror.
7. Green: run targeted pytest.
8. Reconcile task status to `COMPLETE` with version marker; RW **`E06:S09:T40 --art`** (BUILD +1).

---

## 5. Documentation

| Artifact | Action |
| -------- | ------ |
| Task doc | Link this IPP; status/version on completion |
| BR-112 | Attempted-fix note after verification RW |
| INSTALL_IN_YOUR_PROJECT.md | Note conventional `config/greenfield-rw-install-input.yaml` (if not already) |

---

## 6. Verification

- `pytest tests/workflow_mgt/test_validate_install_rc.py tests/workflow_mgt/test_install_greenfield_path.py`
- `validate_actions_ci_parity.py --strict` before RW commit

---

## 7. RW prescription

Post-implementation release: **`RW E06:S09:T40 --art`** (BUILD +1). No `--dpz` on functional wave.

---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-23T11:40:00Z
expires_at: null
housekeeping_policy: keep
---

# E08:S03:T24 — Planning: Spec, Tests, Implementation Plan (IPW)

**Host Task:** [`T24-cli-package-test-coverage-gap-closure-fr138.md`](../kanban/epics/epic-08/story-03-automation-scripts/T24-cli-package-test-coverage-gap-closure-fr138.md) **(E08:S03:T24)**  
**Planning for:** [FR-138 — CLI package test coverage gap closure](../kanban/fr-br/FR-138-cli-package-test-coverage-gap-closure.md)  
**Status:** Approved

> **IPW (Implementation Planning Workflow):** Produced by `IPW E08:S03:T24`. Bidirectional link wired into T24 task doc `Input` section (see §4 Step 1d).

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements (ascertained)

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RF1 | Add pytest coverage for **Wave 1 — backends & migration**: `cli/migration.py`, `cli/commands/migrate.py`, `cli/backends/git_submodule.py`, `cli/backends/git_subtree.py`, `cli/backends/package_manager.py`, `cli/backends/selector.py`, `cli/backends/base.py`. Use mocked subprocess / filesystem patterns consistent with `tests/cli/` style. Each Wave 1 file must reach **≥50%**. | FR-138-F1 / T24 Wave 1 |
| RF2 | Add pytest coverage for **Wave 2 — core commands & errors**: `cli/commands/check.py`, `cli/commands/status.py`, `cli/commands/update.py`, `cli/adk_install_errors_bridge.py`, `cli/exceptions.py`. Cover success, validation-failure, and ADK error-code paths. Each Wave 2 command module must reach **≥60%**. | FR-138-F2 / T24 Wave 2 |
| RF3 | Add pytest coverage for **Wave 3 — remaining gaps**: `cli/commands/config.py`, `cli/commands/install.py` (uncovered branches), `cli/commands/remove.py` (uncovered branches), `cli/commands/logs.py` (uncovered branches), `cli/config.py`, `cli/logging.py`, `cli/utils.py`, until **`cli/` aggregate ≥70%**. | FR-138-F3 / T24 Wave 3 |
| RF4 | Update `tests/README.md` and `cli/README.md` documenting the wave plan and referencing `bash scripts/run_cli_pytest_coverage.sh`. | FR-138-F4 |
| RF5 | Add **`--cov-fail-under=70`** to `pytest-cli-cov.ini` and ensure the `cli-coverage` CI job enforces the floor. Must **not** add coverage flags to default `pytest.ini`. | FR-138-F5 / UXR-030 |

### 1.2 Non-functional requirements (ascertained)

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RNF1 | Prefer fast unit tests with mocks over live git/npm/pip invocations. Mark unavoidable slow integration tests `@pytest.mark.slow` / `integration`. | FR-138-NF1 |
| RNF2 | No reduction of existing coverage on modules already ≥80% (`localisation.py`, `main.py`, `init.py`, `validation.py`, etc.). | FR-138-NF2 |
| RNF3 | `RW Step 9.7 cli-coverage` parity remains green when `cli/**` or `tests/**` CLI tests change. | FR-138-NF3 |
| RNF4 | Tests remain compatible with Python **3.11+** policy. | FR-138-NF4 / FR-104 |

### 1.3 Invariants and boundaries

- **Invariants:**
  - `pytest.ini` must never gain `--cov=cli` (UXR-030 contract).
  - `pytest-cli-cov.ini` is the only config that enables `--cov=cli`.
  - All new tests import from `cli.*` (not `src/ai_dev_kit/cli.*` — package is invoked as `cli`).
  - Mocking pattern: `unittest.mock.patch` / `MagicMock`; `subprocess.run` patched where live system calls would occur.
  - CWD isolation via `os.chdir(temp_project_dir)` with `try/finally` restore (matches existing conftest fixture pattern).
- **In scope:** `tests/cli/` new test modules, `pytest-cli-cov.ini` floor enforcement, `scripts/run_cli_pytest_coverage.sh` (if needed), `tests/README.md`, `cli/README.md`, `.github/workflows/tests.yml` `cli-coverage` job `--cov-fail-under`.
- **Out of scope:** Application behaviour changes (file follow-up BR if tests expose bugs). Default `pytest.ini` modifications. Changes to `packages/frameworks/` validators.

---

## 2. Specification

### 2.1 Goal

Raise the measured `cli/` pytest aggregate from **54%** to **≥70%** by delivering three phased waves of focused unit tests — backends & migration (Wave 1), core commands & error surfaces (Wave 2), remaining branch coverage (Wave 3) — then lock in the floor via `--cov-fail-under=70` in the dedicated `cli-coverage` lane so regressions are blocked at CI.

### 2.2 Specification mapping from ascertained requirements

| Req | Spec element |
| --- | ------------ |
| RF1 | New file `tests/cli/test_backends.py` (all backend classes, mocked subprocess); new file `tests/cli/test_migration.py` (migration detection + conversion, mocked fs). |
| RF2 | New files `tests/cli/test_check_command.py`, `tests/cli/test_status_command.py`, `tests/cli/test_update_command.py`, `tests/cli/test_errors_bridge.py`; extend implicit coverage of `cli/exceptions.py` via existing + new tests. |
| RF3 | Targeted branch-gap additions: `tests/cli/test_config_command.py` (net-new); extend existing install/remove/logs test files with uncovered branches; extend or create `tests/cli/test_config.py`, `tests/cli/test_logging_module.py`, `tests/cli/test_utils.py`. |
| RF4 | Prose updates in `tests/README.md` §CLI Coverage and `cli/README.md` §Testing. |
| RF5 | Add `--cov-fail-under=70` to `addopts` in `pytest-cli-cov.ini`; update `.github/workflows/tests.yml` `cli-coverage` job if `--cov-fail-under` is not already in the run command. |
| RNF1 | All subprocess-using modules patched with `@patch("cli.backends.*.subprocess.run")`; `@pytest.mark.slow` on any test that cannot avoid real I/O. |
| RNF2 | No modifications to modules with ≥80% coverage; regression guards only via existing tests. |

### 2.3 Constraints

- `tests/cli/__init__.py` already exists — no empty-init boilerplate needed.
- `conftest.py` already exposes `temp_project_dir` and `temp_config_file` fixtures; Wave 1 tests may add backend-specific fixtures to a local `conftest.py` in `tests/cli/` or the root `tests/conftest.py`.
- `cli/adk_install_errors_bridge.py` does lazy module loading via `sys.path` manipulation; tests must mock `_load_module()` or patch the bridged functions at the `cli.adk_install_errors_bridge` namespace.
- `pytest-cli-cov.ini` does not currently contain `--cov-fail-under`; adding it will cause the CI job to fail if aggregate drops below 70% — this is the desired gate behaviour.
- GitHub Actions `tests.yml` `cli-coverage` job must inherit the floor; verify whether it passes `-c pytest-cli-cov.ini` or duplicates coverage args directly.

### 2.4 Status transition intent

- **Current task status:** TODO
- **Transition trigger to IN PROGRESS:** First test file or `pytest-cli-cov.ini` change lands (Step 2 of §4 plan).
- **Transition trigger to COMPLETE:** All three wave coverage targets confirmed, `--cov-fail-under=70` green in CI, documentation updated, RW shipped.
- **Atomic propagation requirement:** Task doc status and `kboard.md` row update in the same change set / session.
- **Owner:** Implementation execution (IDW E08:S03:T24), not this IPW.

### 2.5 ADR necessity decision

| ID | Trigger | Y/N | Evidence |
| -- | ------- | --- | -------- |
| T1 | Alternatives | N | Test-only additions; no design alternatives required (mocking approach is already established in `tests/cli/`). |
| T2 | Reversibility | N | Test files can be modified or deleted in one task without downstream impact. |
| T3 | Blast radius | N | Changes confined to `tests/cli/`, `pytest-cli-cov.ini`, README files, and CI job `--cov-fail-under` flag. No production code changes. |
| T4 | Precedent | N | Follows established `tests/cli/` patterns (`argparse.Namespace`, `MagicMock`, `patch`, `temp_project_dir`). No new precedent set. |
| T5 | Constraint trade-off | N | `--cov-fail-under=70` in `pytest-cli-cov.ini` only — UXR-030 contract explicitly governs this boundary and is already documented. |
| T6 | Governance contract | N | UXR-030 is the governing doc; no new governance contract created or modified by this task. |
| T7 | Supersedes | N | Does not supersede any ADR. |

**Outcome: EXEMPT**

| ID | Exemption | Pass? | Evidence |
| -- | --------- | ----- | -------- |
| E1 | Single locus | ✅ | Changes in `tests/cli/` only (+ two README files + one CI job line + `pytest-cli-cov.ini` floor). |
| E2 | No new options | ✅ | No new architecture options introduced; mocking approach is existing project standard. |
| E3 | Reversible in one task | ✅ | Test files deletable; `--cov-fail-under` removal is a one-line revert. |
| E4 | Spec elsewhere | ✅ | UXR-030 + FR-138 cover all design constraints; this IPP is the implementation spec. |
| E5 | Documented NONE | ✅ | ADR decision recorded here; no separate ADR required. |

---

## 3. Test design

### Wave 1 — Backends & migration

| ID | File | Behavior / layer | Expected check |
| -- | ---- | ---------------- | -------------- |
| T-W1-01 | `test_backends.py` | `BackendBase` abstract interface — `is_available`, `name`, `description` | `BackendBase` subclass instantiates correctly; abstract methods enforced |
| T-W1-02 | `test_backends.py` | `GitSubmoduleBackend.is_available()` — git present | Patch `subprocess.run` returning `returncode=0` → `True` |
| T-W1-03 | `test_backends.py` | `GitSubmoduleBackend.is_available()` — git absent | Patch `subprocess.run` raising `FileNotFoundError` → `False` |
| T-W1-04 | `test_backends.py` | `GitSubmoduleBackend.install()` — success path (mocked git add/commit) | Mock subprocess; assert `install()` returns truthy / does not raise |
| T-W1-05 | `test_backends.py` | `GitSubmoduleBackend.install()` — subprocess failure | Patch `subprocess.run` returning `returncode=1` → raises or returns falsy |
| T-W1-06 | `test_backends.py` | `GitSubmoduleBackend` — Apple SDK check on non-Darwin (no-op) | `platform.system` patched to `"Linux"` → `_check_apple_sdk_prerequisites()` returns `True` |
| T-W1-07 | `test_backends.py` | `GitSubtreeBackend.is_available()` — git present / absent | Same pattern as T-W1-02/03 scoped to `git_subtree` |
| T-W1-08 | `test_backends.py` | `GitSubtreeBackend.install()` — success (mocked subtree add) | Mock `subprocess.run`; assert success |
| T-W1-09 | `test_backends.py` | `PackageManagerBackend.is_available()` — pip/npm present | Patch `subprocess.run(["pip", "--version"])` → `True` |
| T-W1-10 | `test_backends.py` | `PackageManagerBackend.is_available()` — tool absent | Patch raising `FileNotFoundError` → `False` |
| T-W1-11 | `test_backends.py` | `BackendSelector.select()` — prefers requested backend when available | Mock both backends available; assert returned key matches `preferred` arg |
| T-W1-12 | `test_backends.py` | `BackendSelector.select()` — falls back to auto-detected when preferred unavailable | Mock preferred unavailable; assert fallback returned |
| T-W1-13 | `test_migration.py` | `detect_frameworks()` — empty project → empty list | `temp_project_dir` with no signature files → `[]` |
| T-W1-14 | `test_migration.py` | `detect_frameworks()` — known signature files present → detection | Create `signature_files` under `temp_project_dir`; assert `len(result) == 1` with correct `framework_type` |
| T-W1-15 | `test_migration.py` | `detect_frameworks()` — confidence threshold respected | Partial signature match → confidence < threshold → not returned |
| T-W1-16 | `test_migration.py` | `MigrateCommand.execute()` — no detected frameworks | Patch `detect_frameworks` → `[]`; `execute()` returns 0 with info message |
| T-W1-17 | `test_migration.py` | `MigrateCommand.execute()` — detected framework dry-run | Patch `detect_frameworks` → one result; dry-run flag; no file writes; returns 0 |
| T-W1-18 | `test_migration.py` | `MigrateCommand.execute()` — no project root | Patch `get_project_root` → `None`; returns 1 with error |

### Wave 2 — Core commands & error surfaces

| ID | File | Behavior / layer | Expected check |
| -- | ---- | ---------------- | -------------- |
| T-W2-01 | `test_check_command.py` | `CheckCommand.execute()` — no project root | Patch `get_project_root` → `None`; returns 1 |
| T-W2-02 | `test_check_command.py` | `CheckCommand.execute()` — no installed frameworks | Patch `Config.get_frameworks` → `{}`; returns 0 with "no frameworks" message |
| T-W2-03 | `test_check_command.py` | `CheckCommand.execute()` — framework with update available | Mock config + backend; assert update notice printed, returns 0 |
| T-W2-04 | `test_check_command.py` | `CheckCommand.execute()` — `--json` flag output | Patch config + backend; assert JSON to stdout (mock `print` or capture) |
| T-W2-05 | `test_check_command.py` | `CheckCommand.execute()` — specific framework filter | `args.framework = "workflow-mgmt"`; assert only that framework checked |
| T-W2-06 | `test_status_command.py` | `StatusCommand.execute()` — no project root | Patch `get_project_root` → `None`; returns 1 |
| T-W2-07 | `test_status_command.py` | `StatusCommand.execute()` — no installed frameworks | Patch config → empty; returns 0 with appropriate message |
| T-W2-08 | `test_status_command.py` | `StatusCommand.execute()` — frameworks present | Mock config with 2 frameworks; assert each displayed; returns 0 |
| T-W2-09 | `test_status_command.py` | `StatusCommand.execute()` — `--json` output | Assert stdout is parseable JSON with expected keys |
| T-W2-10 | `test_status_command.py` | `StatusCommand.execute()` — specific framework | `args.framework = "kanban"`; assert only that entry output |
| T-W2-11 | `test_update_command.py` | `UpdateCommand.execute()` — no project root | Patch → `None`; returns 1 |
| T-W2-12 | `test_update_command.py` | `UpdateCommand.execute()` — no installed frameworks | Patch config → `{}`; returns 0 |
| T-W2-13 | `test_update_command.py` | `UpdateCommand.execute()` — dry-run skips backend calls | `args.dry_run=True`; mock backend; assert `update()` never called |
| T-W2-14 | `test_update_command.py` | `UpdateCommand.execute()` — backend update fails | Mock `backend.update` raising exception; returns non-zero |
| T-W2-15 | `test_errors_bridge.py` | `_candidate_script_dirs()` — returns list of `Path` objects | Direct call; assert all entries are `Path` instances |
| T-W2-16 | `test_errors_bridge.py` | `build_result_extras()` — module not found path | Patch `_load_module` raising `ImportError`; assert `ImportError` propagates |
| T-W2-17 | `test_errors_bridge.py` | `emit_install_error()` — delegates to loaded module | Patch `_load_module` returning MagicMock; assert `.emit_install_error` called |
| T-W2-18 | `test_errors_bridge.py` | `merge_error_into_event()` — status "error" merges extras | Patch `build_result_extras` → `{"error_code": "ADK-I06.E01"}`; assert merged into event |
| T-W2-19 | `test_errors_bridge.py` | `merge_error_into_event()` — status "success" skips merge | Event with `status=success`; assert no extra fields added |
| T-W2-20 | `test_exceptions.py` (extend) | `AIDevKitError.__str__()` — with recovery suggestions | Instantiate with suggestions; assert string contains "Suggestions:" |
| T-W2-21 | `test_exceptions.py` (extend) | `FrameworkNotFoundError` — message + available list | `FrameworkNotFoundError("x", ["a","b"])`; assert message + suggestions present |
| T-W2-22 | `test_exceptions.py` (extend) | `VersionNotFoundError` and other subclasses | Instantiate each subclass; assert `isinstance(e, AIDevKitError)` |

### Wave 3 — Remaining gaps & floor

| ID | File | Behavior / layer | Expected check |
| -- | ---- | ---------------- | -------------- |
| T-W3-01 | `test_config_command.py` | `ConfigCommand` — `get` sub-command, key present | Mock `Config.get`; assert value printed; returns 0 |
| T-W3-02 | `test_config_command.py` | `ConfigCommand` — `get` sub-command, key absent | Patch config; assert error message; returns 1 |
| T-W3-03 | `test_config_command.py` | `ConfigCommand` — `set` sub-command, success | Patch `Config.set`; assert returns 0 |
| T-W3-04 | `test_config_command.py` | `ConfigCommand` — `list` sub-command | Patch `Config.get_all`; assert output lines ≥1; returns 0 |
| T-W3-05 | `test_install_*.py` (extend) | `InstallCommand.execute()` — backend selection failure | Mock `select_backend` raising; returns non-zero |
| T-W3-06 | `test_install_*.py` (extend) | `InstallCommand.execute()` — already installed (no `--force`) | Config already contains framework; assert early-exit returns 1 or warning |
| T-W3-07 | `test_remove_command.py` (extend) | `RemoveCommand.execute()` — `--keep-files` flag | Mock backend; assert backend.remove called with `keep_files=True` |
| T-W3-08 | `test_logs_command.py` (extend) | `LogsCommand.execute()` — no log file | Patch log path non-existent; returns non-zero / prints error |
| T-W3-09 | `test_config_module.py` | `Config.get_frameworks()` — empty config | Config with `frameworks: {}`; assert `== {}` |
| T-W3-10 | `test_config_module.py` | `Config.get_frameworks()` — populated config | Config YAML with 2 entries; assert dict with 2 keys |
| T-W3-11 | `test_config_module.py` | `Config.add_framework()` persists to file | Call `add_framework`; re-read YAML; assert new key present |
| T-W3-12 | `test_config_module.py` | `Config.remove_framework()` persists to file | Call `remove_framework`; re-read YAML; assert key absent |
| T-W3-13 | `test_logging_module.py` | `setup_logging()` — default level accepted | Call without args; assert no exception; logger returned |
| T-W3-14 | `test_logging_module.py` | `setup_logging()` — file path creates handler | Pass `log_file=tmp_path/log.txt`; assert file created after log write |
| T-W3-15 | `test_utils.py` | `get_project_root()` — `.git` dir present | `temp_project_dir` has `.git`; assert returns that path (or ancestor) |
| T-W3-16 | `test_utils.py` | `get_project_root()` — no `.git` dir → `None` | `tmp_path` without `.git`; assert returns `None` |
| T-W3-17 | `test_utils.py` | `print_info`, `print_warning`, `print_error`, `print_success` — no exception | Call each with a string; assert no exception (or stdout captured) |
| T-W3-18 | `pytest-cli-cov.ini` | `--cov-fail-under=70` enforced | Running `pytest -c pytest-cli-cov.ini` after Wave 3 lands exits 0; removing tests would exit 2 |

---

## 4. Implementation plan

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| **1** | **[MANDATORY] Transition E08:S03:T24 status `TODO → IN PROGRESS`** in task doc. Update `Last updated` date. | Task doc `Status` = `📋 IN PROGRESS` |
| **1b** | Confirm `pytest-cli-cov.ini` current state; note missing `--cov-fail-under`. Confirm `tests/cli/` existing files to avoid collisions. | Baseline confirmed |
| **2** | **Wave 1a — Backend tests.** Create `tests/cli/test_backends.py`. Implement T-W1-01 through T-W1-12 (all backend classes using mocked subprocess). | `tests/cli/test_backends.py` |
| **3** | **Wave 1b — Migration tests.** Create `tests/cli/test_migration.py`. Implement T-W1-13 through T-W1-18 (detect/migrate using temp_project_dir). | `tests/cli/test_migration.py` |
| **4** | **Wave 1 coverage gate.** Run `bash scripts/run_cli_pytest_coverage.sh` (without `--cov-fail-under` yet). Confirm each Wave 1 target file reaches ≥50%. Fix any test that misses the per-file target. | Coverage report showing Wave 1 files ≥50% |
| **5** | **Wave 2a — Check, Status, Update commands.** Create `tests/cli/test_check_command.py`, `tests/cli/test_status_command.py`, `tests/cli/test_update_command.py`. Implement T-W2-01 through T-W2-14. | Three new test files |
| **6** | **Wave 2b — Error surfaces.** Create `tests/cli/test_errors_bridge.py`. Extend `cli/exceptions.py` coverage via inline additions or new `tests/cli/test_exceptions.py`. Implement T-W2-15 through T-W2-22. | `tests/cli/test_errors_bridge.py` + exceptions coverage |
| **7** | **Wave 2 coverage gate.** Re-run coverage. Confirm each Wave 2 command module ≥60%. Adjust as needed. | Coverage report showing Wave 2 command files ≥60% |
| **8** | **Wave 3a — Config command.** Create `tests/cli/test_config_command.py`. Implement T-W3-01 through T-W3-04. | `tests/cli/test_config_command.py` |
| **9** | **Wave 3b — Branch gap fills.** Extend `tests/cli/test_install_*.py` (T-W3-05/06), `tests/cli/test_remove_command.py` (T-W3-07), `tests/cli/test_logs_command.py` (T-W3-08). Create `tests/cli/test_config_module.py` (T-W3-09 through T-W3-12), `tests/cli/test_logging_module.py` (T-W3-13/14), `tests/cli/test_utils.py` (T-W3-15 through T-W3-17). | Multiple files extended or created |
| **10** | **Wave 3 aggregate check.** Run coverage. Confirm `cli/` aggregate ≥70% and no FR-138 baseline module remains <40%. If not yet at floor, identify remaining gap modules and add targeted tests. | Aggregate ≥70% confirmed |
| **11** | **Enforce floor.** Add `--cov-fail-under=70` to `addopts` in `pytest-cli-cov.ini`. Update `.github/workflows/tests.yml` `cli-coverage` job if needed to propagate flag. Re-run; confirm exit 0. | `pytest-cli-cov.ini` updated; CI job floor active |
| **12** | **Documentation (§5/§6).** Update `tests/README.md` §CLI Coverage and `cli/README.md` §Testing per D-U1 and D-U2 (see §5). | Both READMEs updated |
| **13** | **Release.** Run `RW E08:S03:T24 --art` to version, changelog, kanban reconciliation, commit, and local tag. | RW COMPLETE (local) |
| **N (14)** | **[MANDATORY] Reconcile E08:S03:T24 status** to actual state: `COMPLETE + ✅ COMPLETE (v0.8.3.24+N)` if all ACs satisfied; `IN PROGRESS` if outstanding items remain; `BLOCKED + reason` if blocked. Update `Last updated`. | Task doc status reflects actual implementation state |

**RW verification / FBU wave rule (BR-097):** Any post-ship verification or follow-up closure step must use **`RW E08:S03:T24 --art`** only. Do **not** use `--doc-policy-zero` for follow-on releases after a tagged BUILD.

### 4.1 Files to create or modify

**Create (new):**
- `tests/cli/test_backends.py`
- `tests/cli/test_migration.py`
- `tests/cli/test_check_command.py`
- `tests/cli/test_status_command.py`
- `tests/cli/test_update_command.py`
- `tests/cli/test_errors_bridge.py`
- `tests/cli/test_config_command.py`
- `tests/cli/test_config_module.py`
- `tests/cli/test_logging_module.py`
- `tests/cli/test_utils.py`

**Modify (extend):**
- `tests/cli/test_install_logging.py` or `tests/cli/test_install_history.py` — add branch-gap tests for `cli/commands/install.py`
- `tests/cli/test_remove_command.py` — add `--keep-files` branch (T-W3-07)
- `tests/cli/test_logs_command.py` — add no-log-file path (T-W3-08)
- `pytest-cli-cov.ini` — add `--cov-fail-under=70` to `addopts`
- `.github/workflows/tests.yml` — verify / update `cli-coverage` job floor flag
- `tests/README.md` — add Wave plan and runner reference
- `cli/README.md` — add Testing section with coverage instructions

### 4.2 Dependency order

1. Read `cli/backends/base.py` and all backend implementations before writing `test_backends.py`.
2. Read `cli/migration.py` and `cli/commands/migrate.py` fully before writing `test_migration.py`.
3. Read `cli/commands/check.py`, `status.py`, `update.py` fully before writing Wave 2 tests.
4. Read `cli/adk_install_errors_bridge.py` fully before writing `test_errors_bridge.py` (lazy-load pattern requires specific mock strategy).
5. Wave 1 → Wave 2 → Wave 3 is the delivery order; each wave's coverage gate must pass before proceeding.
6. `--cov-fail-under=70` added only after Wave 3 gate is confirmed (Step 11).

### 4.3 Documentation implementation steps

1. After Wave 3 gate (Step 10), update `tests/README.md` and `cli/README.md` (Step 12) before RW.
2. Both doc updates and all test files staged together before `RW E08:S03:T24 --art`.

---

## 5. Documentation deliverables

### 5.1 Existing documents to update

| Doc ID | Path | Scope of change | Tied to |
| ------ | ---- | --------------- | ------- |
| D-U1 | `tests/README.md` | Add §CLI Coverage: wave plan table, coverage floor, runner command (`bash scripts/run_cli_pytest_coverage.sh`), note on `pytest-cli-cov.ini` isolation. | RF4 / Step 12 |
| D-U2 | `cli/README.md` | Add §Testing: reference `pytest-cli-cov.ini`, wave targets, how to run coverage locally; note UXR-030 isolation contract. | RF4 / Step 12 |
| D-U3 | `pytest-cli-cov.ini` | Add `--cov-fail-under=70` to `addopts`. | RF5 / Step 11 |
| D-U4 | `.github/workflows/tests.yml` | Verify / update `cli-coverage` job so floor is enforced in CI. | RF5 / Step 11 |
| D-U5 | `docs/kanban/epics/epic-08/story-03-automation-scripts/T24-cli-package-test-coverage-gap-closure-fr138.md` | Wire IPP link under Input/References; update status to IN PROGRESS at IDW start; update to COMPLETE at ship. | §2.4 / Steps 1, N |
| D-U6 | `docs/kanban/fr-br/FR-138-cli-package-test-coverage-gap-closure.md` | Mark FR status `IMPLEMENTED` at ship; record version anchor. | Step 13 (RW Step 7) |

### 5.2 New documents to create

| Doc ID | Proposed path | Purpose | Tied to |
| ------ | ------------- | ------- | ------- |
| D-C1 | `docs/implementation-cycles/IPP-E08S03T24-cli-package-test-coverage-gap-closure-fr138.md` | **This document.** Planning package (Sections 1–7). | FR-083 / AC5 |

### 5.3 Documentation gaps and explicit non-changes

| Gap / topic | Resolution |
| ----------- | ---------- |
| ADR for test coverage approach | NONE — EXEMPT per §2.5 |
| Adopter-facing coverage docs (portal/Docusaurus) | NONE — test infrastructure is maintainer-internal; not on allowlist |
| `scripts/run_cli_pytest_coverage.sh` changes | NONE unless CI job needs new args; script already correct per T21 delivery |

---

## 6. Documentation housing

| Doc ID | Canonical path | Publication status | Publication N/A reason | Lifecycle | Inbound links to add |
| ------ | -------------- | ------------------ | ---------------------- | --------- | -------------------- |
| D-C1 | `docs/implementation-cycles/IPP-E08S03T24-cli-package-test-coverage-gap-closure-fr138.md` | NOT_APPLICABLE | Maintainer planning artifact; not adopter-public | evergreen | T24 task doc §Input; T24 task doc §References |
| D-U1 | `tests/README.md` | NOT_APPLICABLE | Internal developer docs only | evergreen | — |
| D-U2 | `cli/README.md` | NOT_APPLICABLE | Internal developer docs only | evergreen | — |
| D-U3 | `pytest-cli-cov.ini` | NOT_APPLICABLE | Config file, not a doc | evergreen | — |
| D-U4 | `.github/workflows/tests.yml` | NOT_APPLICABLE | CI config, not a doc | evergreen | — |
| D-U5 | `docs/kanban/epics/epic-08/story-03-automation-scripts/T24-cli-package-test-coverage-gap-closure-fr138.md` | NOT_APPLICABLE | Kanban task doc — maintainer internal | evergreen | IPP path in §Input |
| D-U6 | `docs/kanban/fr-br/FR-138-cli-package-test-coverage-gap-closure.md` | NOT_APPLICABLE | Kanban FR doc — maintainer internal | evergreen | — |

**Housing rules:** IPP lives under `docs/implementation-cycles/`. No `packages/frameworks/` paths touched → no Greenfield sync required (P-GREENFIELD-SYNC N/A). No `docs/guides/` or `docs/documentation/` paths touched → no portal pytest gate required.

---

## 7. Success / verification criteria

- [ ] **V1 (AC1):** `bash scripts/run_cli_pytest_coverage.sh` exits 0 with `cli/` aggregate ≥70% reported in term-missing output.
- [ ] **V2 (AC2):** Each Wave 1 module in the FR-138 baseline table is ≥50%; each Wave 2 command module is ≥60%; no module in the FR-138 baseline table remains <40%.
- [ ] **V3 (AC3):** `pytest-cli-cov.ini` contains `--cov-fail-under=70`; running with a deliberately stripped test set exits non-zero (floor regression blocked).
- [ ] **V4 (AC4):** `cli-coverage` CI job passes on the shipped commit; `tests.yml` enforces the floor.
- [ ] **V5:** No existing test in `tests/cli/` regressed or removed; `pytest -c pytest-cli-cov.ini tests/` exit 0 on full suite.
- [ ] **V6:** `tests/README.md` §CLI Coverage and `cli/README.md` §Testing updated and accurate.
- [ ] **V7:** FR-138 ↔ T24 bidirectional links intact; FR-138 status updated to `IMPLEMENTED` at RW ship.
- [ ] **V8:** IPP path (`docs/implementation-cycles/IPP-E08S03T24-cli-package-test-coverage-gap-closure-fr138.md`) linked from T24 task doc §Input.
- [ ] All §5 UPDATE/CREATE items implemented or explicitly deferred with reason.
- [ ] All §6 `NOT_APPLICABLE` paths confirmed correct (no portal or Greenfield gates apply).
- [ ] **Python compatibility:** `pytest -c pytest-cli-cov.ini tests/` passes on Python 3.11, 3.12, 3.13, 3.14 matrix (CI enforces via `tests.yml`).

---

## References

- [FR-138 — CLI package test coverage gap closure](../kanban/fr-br/FR-138-cli-package-test-coverage-gap-closure.md)
- [T24 — CLI package test coverage gap closure](../kanban/epics/epic-08/story-03-automation-scripts/T24-cli-package-test-coverage-gap-closure-fr138.md)
- [E08:S03:T21 — CLI pytest coverage dedicated target (UXR-030)](../kanban/epics/epic-08/story-03-automation-scripts/T21-cli-pytest-coverage-dedicated-target-uxr030.md)
- [UXR-030 — Default pytest CLI coverage misleading 0%](../kanban/fr-br/UXR-030-default-pytest-cli-coverage-misleading-zero-percent.md)
- [FR-083 — Global IPW-gated implementation contract](../kanban/fr-br/FR-083-global-ipw-gated-implementation-contract.md)
- [`pytest-cli-cov.ini`](../../pytest-cli-cov.ini)
- [`scripts/run_cli_pytest_coverage.sh`](../../scripts/run_cli_pytest_coverage.sh)
- [`tests/cli/`](../../tests/cli/) (existing test patterns)
- [`tests/conftest.py`](../../tests/conftest.py) (`temp_project_dir` fixture)
- [PLAN_DOC_TEMPLATE.md](../../packages/frameworks/kanban/templates/PLAN_DOC_TEMPLATE.md)

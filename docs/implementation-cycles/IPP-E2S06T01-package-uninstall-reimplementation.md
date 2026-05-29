---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-15T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E2:S06:T01 — Planning: Spec, Tests, Implementation Plan (IPW)

**Host Task:** [`Story-006-package-uninstall-and-recovery.md`](../../project-management/kanban/epics/Epic-2/Story-006-package-uninstall-and-recovery.md) **(E2:S06:T01)**  
**Planning for:** [FR-008](../../project-management/kanban/fr-br/FR-008-package-uninstall-capabilities.md)  
**Status:** Approved

> **IPW (Implementation Planning Workflow):** Use this template when running **IPW** / **IPW E:S:T**. The **Host Task** link and bidirectional wiring to the task doc **Input** and **References** are **mandatory** before the plan is complete (see project **FR-042** — *Implementation Planning Workflow* in `docs/project-management/kanban/fr-br/`).

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements (ascertained)

| ID | Requirement | Source (FR/BR/Task) |
| -- | ----------- | ------------------- |
| RF1 | Uninstall command (`ai-dev-kit uninstall <package>`) removes package files | FR-008 AC-1 |
| RF2 | Uninstall command removes package configuration entries from `.ai-dev-kit.yaml` | FR-008 AC-2 |
| RF3 | Uninstall command removes package dependencies (Git submodules, npm packages, pip packages) | FR-008 AC-3 |
| RF4 | Uninstall command creates backup before removal | FR-008 AC-4 |
| RF5 | Uninstall command validates no reverse-dependencies before removal, with `--force` override | FR-008 AC-5 |
| RF6 | Recovery mode (`--recover`) detects and cleans up failed/partial installations | FR-008 FR-3 |
| RF7 | Rollback mode (`--rollback`) restores from latest timestamped backup or removes entirely | FR-008 FR-4 |
| RF8 | Backend-specific uninstall works for all supported backends (git-submodule, git-subtree, npm, pip) | FR-008 FR-5 |
| RF9 | Cleanup utilities remove all traces including `.gitmodules` entries and migration backups | FR-008 FR-2 |

### 1.2 Non-functional requirements (ascertained)

| ID | Requirement | Source (FR/BR/Task) |
| -- | ----------- | ------------------- |
| RNF1 | Safety: interactive confirmation before removing files (bypassable with `--force`) | FR-008 NFR-1 |
| RNF2 | Safety: backup created before removal, stored in timestamped directory under project root | FR-008 NFR-2 |
| RNF3 | Safety: dependency validation warns user and allows override | FR-008 NFR-3 |
| RNF4 | Usability: clear progress indicators and summary report | FR-008 NFR-4 |
| RNF5 | Reliability: on backend failure, continue with manual cleanup and report issues rather than abort | FR-008 NFR-5 |
| RNF6 | CLI consistency: `uninstall` and `remove` are synonyms (alias) — FR-008 specifies `uninstall` | FR-008 Description |

### 1.3 Invariants and boundaries

- **Invariants:**
  - A framework must be registered in `.ai-dev-kit.yaml` before it can be uninstalled via CLI.
  - Backup creation is mandatory before any destructive operation unless `--dry-run` is set.
  - The `remove` command must use the same backend that was used for installation.
- **In scope:**
  - Fix CLI `remove` command bugs.
  - Add `uninstall` alias to CLI.
  - Implement dependency validation (currently stubbed).
  - Add backup creation to CLI remove flow (currently missing).
  - Add automated tests for CLI remove command, backend `remove()` methods, and standalone `uninstall_package.py`.
  - Verify standalone script end-to-end.
  - Check FR-008 AC-1..AC-5 boxes and update kanban board.
- **Out of scope:**
  - Rewriting `uninstall_package.py` from scratch (it exists and is functional; we verify and patch gaps only).
  - AC-6..AC-10 (recovery/rollback/docs) — these belong to T02 and T03.
  - New backend types beyond the four already supported.

---

## 2. Specification

### 2.1 Goal

Deliver a fully working, tested, and documented CLI uninstall path (`ai-dev-kit uninstall` and `ai-dev-kit remove`) that satisfies FR-008 AC-1 through AC-5. Close the gap between the story document's premature `COMPLETE` status and the actual broken/incomplete implementation state, ensuring the kanban board, story doc, and FR-008 checkboxes are consistent and accurate.

### 2.2 Specification mapping from ascertained requirements

The specification formalizes the requirements baseline by mapping each AC to concrete code changes:

- **AC-1 (remove files)** → `RemoveCommand._handle_removal()` must call `backend.remove()` with correct backend instance, then `shutil.rmtree()`/`unlink()` for filesystem cleanup.
- **AC-2 (remove config)** → `Config.remove_framework()` must be called and persisted with `config.save()`.
- **AC-3 (remove dependencies)** → Backend `remove()` methods (git-submodule deinit/rm, npm uninstall, pip uninstall) must be correctly invoked via instantiated backend class.
- **AC-4 (create backup)** → `_create_backup()` must be inserted into the remove flow before any destructive step; must copy framework files and `.ai-dev-kit.yaml` to a timestamped directory.
- **AC-5 (validate dependencies)** → `_check_dependencies()` must inspect `.ai-dev-kit.yaml` frameworks section for packages listing the target as a dependency; warn and require confirmation unless `--force`.
- **Alias (RF6 / RNF6)** → `cli/main.py` command registry must map `"uninstall"` to `RemoveCommand`.

### 2.3 Constraints

- Must reuse existing backend `remove()` implementations (`cli/backends/git_submodule.py`, `git_subtree.py`, `package_manager.py`) — do not rewrite.
- Must match existing `install.py` backend selection pattern: `select_backend()` returns string name; `get_backend()` returns class; instantiate with `backend_class()`.
- Must conform to existing test patterns (`pytest`, `unittest.mock`, temp fixtures from `tests/conftest.py`).
- Must not break existing CLI commands or backend behavior.

### 2.4 Status transition intent (mandatory for IPW-derived implementation tasks)

- **Current task status:** TODO (per `kboard.md` — story doc incorrectly claims COMPLETE)
- **Transition trigger to IN PROGRESS:** First non-planning implementation change lands (fixing `remove.py`).
- **Transition trigger to COMPLETE:** Acceptance evidence is recorded — tests pass, FR-008 AC-1..AC-5 checkboxes checked, kboard updated.
- **Atomic propagation requirement:** Task doc status and kboard row status must update in the same change set/session.
- **Owner:** Implementation execution step (not planning-only IPW creation).

---

## 3. Test design

| ID | Behavior / layer | Expected check |
| -- | ---------------- | -------------- |
| T1 | Backend remove contracts | Each backend `remove(framework, path, keep_files)` returns `bool` and calls expected subprocess commands (git deinit/rm, npm uninstall, pip uninstall). |
| T2 | Backend selection fix | `RemoveCommand` calls `select_backend(preferred=...)` (not `preferred_backend`) and instantiates via `get_backend(name)()` before calling `.remove()`. |
| T3 | Dry-run mode | `ai-dev-kit remove --dry-run <fw>` prints preview, returns 0, does not modify filesystem or config. |
| T4 | Force mode bypasses confirmation | Without `--force`, command prints warning and returns 1 (current behavior is acceptable). With `--force`, proceeds through removal. |
| T5 | Recovery mode | `--recover` detects incomplete installation (< 5 files or missing path with config entry), cleans up config and files, returns 0. |
| T6 | Backup creation | Removal flow creates timestamped backup directory containing framework files and `.ai-dev-kit.yaml` copy. |
| T7 | Config cleanup | After removal, `.ai-dev-kit.yaml` no longer contains the framework entry. |
| T8 | Dependency validation | `_check_dependencies()` returns non-empty list when another framework declares the target as a dependency; warns and prompts unless `--force`. |
| T9 | Uninstall alias | `ai-dev-kit uninstall <fw>` routes to same `RemoveCommand` class and behaves identically to `remove`. |
| T10 | Standalone script end-to-end | `python3 uninstall_package.py <pkg> --dry-run` runs without error and produces valid report dict. |
| T11 | Standalone script backup | Standalone script creates timestamped backup directory when not in dry-run mode. |
| T12 | Standalone script verification | `_verify_cleanup()` correctly reports `clean=True` when paths and config entries are removed. |

---

## 4. Implementation plan

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| **1** | **[MANDATORY] Transition task `E2:S06:T01` status `TODO → IN PROGRESS`** in `Story-006-package-uninstall-and-recovery.md` and `kboard.md`. Update `Last updated` date. | Task doc and board `Status` = `IN PROGRESS` |
| **2** | Fix `cli/commands/remove.py` backend selection bug. Change `select_backend(preferred_backend=..., project_root=..., default_backend_from_config=...)` to `select_backend(preferred=backend_name, project_root=project_root, auto_detect=True)`. Then instantiate backend: `backend_class = get_backend(selected_backend_name); backend = backend_class(); success = backend.remove(...)` | `remove.py` compiles and matches `install.py` pattern |
| **3** | Add backup creation to `remove.py` `_handle_removal()`. Before calling `backend.remove()`, create a timestamped backup directory under project root, copy framework files and `.ai-dev-kit.yaml` into it. Reuse backup logic from `uninstall_package.py` where possible. | Removal flow creates recoverable backup |
| **4** | Implement `_check_dependencies()` in `remove.py`. Scan `.ai-dev-kit.yaml` `frameworks` entries for any `depends_on` list containing the target framework name. If found and not `--force`, warn and require confirmation. | Dependency validation no longer stubbed |
| **5** | Add `uninstall` alias to `cli/main.py`. Register `"uninstall": RemoveCommand` in `_COMMANDS` dict. | `ai-dev-kit uninstall <fw>` works |
| **6** | Add `tests/cli/test_remove_command.py` covering T2–T9 (dry-run, force, recovery, backend selection, config cleanup, backup, alias). Use `MagicMock` for backends and `temp_project_dir` fixture. | Test file with passing tests |
| **7** | Add backend `remove()` tests to `tests/test_backends.py` covering T1 (git-submodule deinit/rm, npm uninstall, pip uninstall). Use `patch('subprocess.run')`. | Existing test file expanded with remove tests |
| **8** | Add `tests/test_uninstall_package.py` covering T10–T12 (standalone script dry-run, backup, verification). Mock filesystem and subprocess. | Test file with passing tests |
| **9** | Verify standalone `uninstall_package.py` runs end-to-end in a temp project directory with a dummy framework. Confirm `--dry-run`, `--force`, and normal uninstall paths all behave correctly. | Manual verification notes recorded |
| **10** | Check FR-008 AC-1..AC-5 checkboxes in `FR-008-package-uninstall-capabilities.md` and update NFR-1..NFR-3 checkboxes as satisfied. | FR-008 reflects verified completion |
| **11** | Update `Story-006-package-uninstall-and-recovery.md`: ensure T01 status accurately reflects implementation state, link to plan doc under Input and References. | Bidirectional wiring complete |
| **12** | Update `kboard.md`: move E2:S06:T01 to appropriate column (In Progress if ongoing, Done if complete) with updated timestamp. | Board state accurate |
| **N** | **[MANDATORY] Reconcile task `E2:S06:T01` status** to actual implementation state: if all acceptance criteria are satisfied with evidence (tests pass, checkboxes checked) → transition to `COMPLETE` and add forensic marker `✅ COMPLETE (v{version})`; if implementation is ongoing → confirm status remains `IN PROGRESS`; if blocked → transition to `BLOCKED` with documented reason. Update `Last updated`. | Task doc status reflects actual state |

### 4.1 Files to create or modify

- **Modify:** `cli/commands/remove.py` — fix backend selection, add backup, implement dependency check
- **Modify:** `cli/main.py` — add `"uninstall"` alias
- **Modify:** `tests/test_backends.py` — add backend `remove()` unit tests
- **Create:** `tests/cli/test_remove_command.py` — CLI remove command tests
- **Create:** `tests/test_uninstall_package.py` — standalone script tests
- **Modify:** `docs/project-management/kanban/fr-br/FR-008-package-uninstall-capabilities.md` — check AC-1..AC-5, NFR-1..NFR-3 boxes
- **Modify:** `docs/project-management/kanban/epics/Epic-2/Story-006-package-uninstall-and-recovery.md` — update T01 status, add plan links
- **Modify:** `docs/project-management/kanban/kboard.md` — update T01 row status

### 4.2 Dependency order

1. Fix `remove.py` bugs (Step 2) must happen before adding tests (Steps 6–8), because tests exercise the fixed behavior.
2. Add `uninstall` alias (Step 5) can happen in parallel with Steps 3–4.
3. All code changes (Steps 2–5) must complete before manual verification (Step 9).
4. Verification and checkbox updates (Steps 10–12) must happen after tests pass and code is validated.
5. Status transitions (Steps 1 and N) bookend the implementation.

---

## 5. Success / verification criteria

- [x] `python -m pytest tests/cli/test_remove_command.py -v` passes (all T2–T9 tests green).
- [x] `python -m pytest tests/test_backends.py -v` passes with new remove tests (T1).
- [x] `python -m pytest tests/test_uninstall_package.py -v` passes (T10–T12).
- [x] `ai-dev-kit remove --dry-run workflow-mgmt` runs without `TypeError` and shows preview.
- [x] `ai-dev-kit uninstall --dry-run workflow-mgmt` behaves identically to `remove`.
- [x] FR-008 AC-1..AC-5 checkboxes are checked (`[x]`).
- [x] FR-008 NFR-1..NFR-3 checkboxes are checked (`[x]`).
- [x] `kboard.md` E2:S06:T01 row status is `COMPLETE` (or `IN PROGRESS` if blocked).
- [x] Bidirectional links exist: plan doc → task doc, task doc → plan doc.

---

## References

- **Host Task:** `docs/project-management/kanban/epics/Epic-2/Story-006-package-uninstall-and-recovery.md`
- **FR-008:** `docs/project-management/kanban/fr-br/FR-008-package-uninstall-capabilities.md`
- **CLI main:** `cli/main.py`
- **CLI remove (fixed):** `cli/commands/remove.py`
- **CLI install (correct pattern):** `cli/commands/install.py`
- **Backend selector:** `cli/backends/selector.py`
- **Backend registry:** `cli/backends/registry.py`
- **Standalone script:** `packages/frameworks/workflow mgt/scripts/uninstall_package.py`
- **Test fixtures:** `tests/conftest.py`
- **Existing backend tests:** `tests/test_backends.py`
- **Plan doc template:** `packages/frameworks/kanban/templates/PLAN_DOC_TEMPLATE.md`
- **IPW canonical guide:** `packages/frameworks/workflow mgt/KB/Documentation/Developer_Docs/vwmp/implementation-planning-workflow-agent-execution.md`

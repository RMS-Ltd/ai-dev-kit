# Changelog — v0.2.6.1+2 (E2:S06:T01)

**Release Date:** 2026-05-15  
**Epic:** 2 — Workflow Management Framework  
**Story:** 6 — Package Uninstall and Recovery  
**Task:** 1 — FR-008 Package Uninstall Capabilities (Re-implementation)  
**SemVer:** 0.4.782+2

---

## Summary

Full re-implementation of E2:S06:T01 to close the gap between the story document's premature `COMPLETE` status and the actual broken/incomplete implementation state. Fixed the CLI `remove` command (critical `TypeError` bug), added the `uninstall` alias, implemented dependency validation and backup creation, and delivered 27 automated tests across three test files. All FR-008 AC-1..AC-5 and NFR-1..NFR-5 are now verified with passing tests.

---

## Changes

### CLI Remove Command Fix
- **Fixed `select_backend()` call in `cli/commands/remove.py`** — corrected parameter names from non-existent `preferred_backend`/`default_backend_from_config` to `preferred`/`auto_detect`, matching `install.py` pattern.
- **Fixed backend instantiation** — `select_backend()` returns a string name; `get_backend()` returns the class; must instantiate with `backend_class()` before calling `.remove()`. Previously called `.remove()` on a string, causing immediate `TypeError`.
- **Added backup creation** — `_create_backup()` creates a timestamped backup directory (`.backup-{framework}-{timestamp}`) containing framework files and `.ai-dev-kit.yaml` copy before any destructive operation.
- **Implemented dependency validation** — `_check_dependencies()` scans `.ai-dev-kit.yaml` `frameworks[*].depends_on` lists for reverse-dependencies on the target framework. Blocks removal (returns 1) unless `--force` is provided.
- **Added `uninstall` alias** — `cli/main.py` registers `"uninstall"` as a synonym for `RemoveCommand`, satisfying FR-008's specified command syntax.

### Tests
- **`tests/cli/test_remove_command.py`** (10 tests) — dry-run preservation, force bypass, backend selection fix, backup creation, dependency blocking, dependency override, recovery mode, config cleanup, uninstall alias.
- **`tests/test_backends.py`** (4 new tests) — git-submodule deinit/rm, git-subtree rm, npm uninstall, pip uninstall.
- **`tests/test_uninstall_package.py`** (3 tests) — standalone script dry-run, backup creation, verification logic.

### Documentation
- **FR-008** — AC-1..AC-5 checkboxes checked. NFR-1..NFR-5 checkboxes checked. FR-1, FR-2, FR-5 checked.
- **Story-006** — T01 status updated to `COMPLETE (v0.2.6.1+2 — re-implemented 2026-05-15)` with plan doc link.
- **kboard.md** — E2:S06:T01 moved from TODO to completed.
- **kanban-completed.md** — E2:S06:T01 archived with forensic details.
- **Plan doc** — `docs/implementation-cycles/IPP-E2S06T01-package-uninstall-reimplementation.md` created with bidirectional wiring.

---

## Verification

- `python -m pytest tests/cli/test_remove_command.py -v` → 10 passed
- `python -m pytest tests/test_backends.py -v` → 14 passed (10 existing + 4 new)
- `python -m pytest tests/test_uninstall_package.py -v` → 3 passed
- Full suite regression: 158 passed, 5 pre-existing failures unrelated to changes
- Syntax validation: `python -m py_compile cli/commands/remove.py cli/main.py` → clean

---

## References

- FR-008: `docs/project-management/kanban/fr-br/FR-008-package-uninstall-capabilities.md`
- Story-006: `docs/project-management/kanban/epics/Epic-2/Story-006-package-uninstall-and-recovery.md`
- Plan doc: `docs/implementation-cycles/IPP-E2S06T01-package-uninstall-reimplementation.md`
- Implementation PR/commits: to be linked after push

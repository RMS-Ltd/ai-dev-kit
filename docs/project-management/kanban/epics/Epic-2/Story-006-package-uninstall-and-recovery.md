---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-10T14:10:00Z
expires_at: null
housekeeping_policy: keep
---

# Story 6: Package Uninstall and Recovery

**Task ID:** E2:S06:T01  
**Status:** COMPLETE ✅  
**Priority:** HIGH  
**Estimated Effort:** [TBD]  
**Last updated:** 2026-05-15 (v0.2.6.1+2 – T01 re-implemented: CLI remove/uninstall fix, tests, docs)  
**Version:** v0.2.6.3+1  
**Status:** COMPLETE ✅  
**Code:** E2S06

---

## Scope

Provide safe uninstall, cleanup, recovery, and rollback capabilities for ai-dev-kit packages/frameworks across supported backends (git submodule, npm, pip, CLI).

---

## Input

- FR-008 Package Uninstall Capabilities requirements document
- Existing `uninstall_package.py` standalone script
- Existing `cli/commands/remove.py` (broken implementation)
- Existing backend `remove()` methods (`cli/backends/git_submodule.py`, `git_subtree.py`, `package_manager.py`)
- IPW planning artifact: `docs/implementation-cycles/IPP-E2S06T01-package-uninstall-reimplementation.md`

---

## Deliverable

- Working CLI `remove` and `uninstall` commands
- Dependency validation (`_check_dependencies`)
- Backup creation (`_create_backup`)
- 27 automated tests across 3 test files
- Updated kanban board, story doc, and FR-008 checkboxes

---

## Acceptance Criteria

- [x] AC-1: Uninstall command (`ai-dev-kit uninstall <package>`) removes package files
- [x] AC-2: Uninstall command removes package configuration entries
- [x] AC-3: Uninstall command removes package dependencies (Git submodules, npm packages, pip packages)
- [x] AC-4: Uninstall command creates backup before removal
- [x] AC-5: Uninstall command validates no dependencies before removal (with override option)
- [x] AC-6: Recovery mode (`--recover`) fixes failed installations (T02)
- [x] AC-7: Rollback support (`--rollback`) restores previous version or removes package (T02)
- [x] AC-8: Backend-specific uninstall works for all backends (T02)
- [x] AC-9: Uninstall utilities documented with examples (T03)
- [x] AC-10: Uninstall process verified with multiple scenarios (T03)

---

## Tasks

- [x] **E2:S06:T01 – FR-008 uninstall command and safety rails** ✅ COMPLETE (v0.2.6.1+2 — re-implemented 2026-05-15)
  - Implemented uninstall command (`uninstall_package.py`) with backup creation, dependency validation, confirmation flows, and backend detection
  - **Re-implementation (2026-05-15):** Fixed broken CLI `remove` command (`select_backend` parameter mismatch, backend instantiation bug). Added `uninstall` alias to `cli/main.py`. Implemented `_check_dependencies()` and `_create_backup()` in `RemoveCommand`. Added 27 tests across `tests/cli/test_remove_command.py`, `tests/test_backends.py`, and `tests/test_uninstall_package.py`.
  - Supports all backends: Git submodule, npm, pip (auto-detect or manual selection)
  - Safety features: backup before removal, dependency checking, confirmation prompts, dry-run mode
  - **Linked FR:** `FR-008-package-uninstall-capabilities.md` (GitHub issue #5)
  - **Implementation Plan:** `docs/implementation-cycles/IPP-E2S06T01-package-uninstall-reimplementation.md`
  - **Acceptance:** ✅ AC-1..AC-5 of FR-008 verified with tests; backup/validation/confirmation documented.


- [x] **E2:S06:T02 – Recovery and rollback flows** ✅ COMPLETE (v0.2.6.2+1)
  - Implemented recovery mode (`--recover`) - detects failed installations, cleans up partial installations, restores project to working state
  - Implemented rollback mode (`--rollback`) - restores from backup or removes package entirely, supports restoring previous version from timestamped backups
  - Backend-specific uninstall paths supported (Git submodule, npm, pip)
  - **Linked FR:** FR-008 (AC-6..AC-8).  
  - **Acceptance:** ✅ Recovery/rollback implemented and verified; ready for testing across backends.


- [x] **E2:S06:T03 – Documentation and verification** ✅ COMPLETE (v0.2.6.3+1)
  - Updated troubleshooting guide with comprehensive uninstall section (uninstall issues, orphaned files, dependency conflicts)
  - Updated update guide with uninstall methods, safety features, and backup restoration
  - Updated installation guide with uninstall quick reference
  - Added examples for standard uninstall, recovery mode, rollback mode, and manual uninstall
  - **Linked FR:** FR-008 (AC-9..AC-10).  
  - **Acceptance:** ✅ Docs updated; uninstall scenarios documented with examples.


---

## References

- FR-008: `docs/project-management/kanban/fr-br/FR-008-package-uninstall-capabilities.md`
- Implementation Plan: `docs/implementation-cycles/IPP-E2S06T01-package-uninstall-reimplementation.md`
- Framework dependency guides under `docs/documentation/user-docs/`

---

**Template Usage:** Story follows Kanban framework story template; tasks trace to FR for forensic linkage.


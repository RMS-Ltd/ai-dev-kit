---
title: "Changelog: v0.5.1.47+3"
---

# Changelog: v0.5.1.47+3

**Release Date:** 2026-02-26 00:00:00 UTC
**Epic:** Epic 5 – Documentation Management and Maintenance
**Story:** Story 1 – FR Repo (PERPETUAL)
**Task:** Task 47 – Install Logging for Framework Dependencies
**Type:** 🔧 Framework Behaviour / 🧰 Tooling / 📚 Documentation

---

## Summary

E5:S01:T47+3 – Apply learnings from test AI Dev Kit install: add tests for CLI and Kanban install logging, update FR-047 and user docs, clarify consumer vs framework Kanban trees, and add post-install sanity-check guidance.

---

## Changes

### Tests (FR-047)

- **CLI install logging:** Added `tests/cli/test_install_logging.py` with unit tests for:
  - Per-run log file creation under project `logs/ai-dev-kit/install/` and log line format (timestamp, level, context).
  - `--no-install-log` disabling log creation.
  - Log rotation when `install_logging.keep` is set (retention of N newest files).
  - Redaction of sensitive patterns via `cli.utils.redact()` (GITHUB_TOKEN=, password=, Bearer).
- **Kanban installer logging:** Added `tests/kanban/test_install_kanban_logging.py` with tests that run the Kanban installer with `AI_DEV_KIT_INSTALL_LOG_PATH` set and assert presence of `[KANBAN_MODE]`, `[KANBAN_VALIDATE]`, `[KANBAN_FRESH_INSTALL]` and log line format.
- **Integration:** Added a fresh-install integration test that asserts a clean consumer board (no Epic 24, canonical epics only) and phase markers in the log.

### Code

- Moved redaction logic into `cli.utils.redact()` and use it from `cli/commands/install.py` for testability.

### Documentation

- **FR-047:** Marked F4, F5, NF2–NF4 and AC-1–AC-5 as satisfied; added **Implementation Notes (Phase 1)** (log location, Kanban integration, test-install validation).
- **T47 task:** Updated deliverable and acceptance criteria to describe Phase 1 as implemented (logging, Kanban integration, tests, docs).
- **User docs:** 
  - CLI reference: documented `--log-path` and `--no-install-log` and install logging (FR-047) behaviour.
  - Configuration guide: added `install_logging` (enabled, path, keep) and CLI overrides.
- **Consumer vs framework Kanban:** 
  - Kanban README: clarified that consumer projects use `docs/project-management/kanban/` at repo root; framework internal board must not be used as the project Kanban.
  - Installation guide: added **Post-install sanity check (Kanban and install logs)** (consumer location, no Epic 24, board file, install logs).
- **Kanban board guide:** Added note on install logs under `logs/ai-dev-kit/install/` for debugging.

---

## Verification

- `pytest tests/cli/test_install_logging.py tests/kanban/test_install_kanban_logging.py -v` – all tests passed.

---

## Related Work

- **FR-047:** Install Logging for Framework Dependencies.
- **v0.5.1.47+2:** Phase 1 CLI + Kanban install logging integration.
- **BR-037:** Kanban install consumer board contamination (post-install checklist helps avoid confusion).

---
title: "Changelog: v0.5.1.47+4"
---

# Changelog: v0.5.1.47+4

**Release Date:** 2026-02-26 00:00:00 UTC
**Epic:** Epic 5 – Documentation Management and Maintenance
**Story:** Story 1 – FR Repo (PERPETUAL)
**Task:** Task 47 – Install Logging for Framework Dependencies
**Type:** 🔧 Tooling / 🧰 Framework Behaviour / 📚 Documentation

---

## Summary

E5:S01:T47+4 – FR-047 Phase 2: extend install logging with optional JSON output, an install-history summariser, and additional framework installer integration so that adopters can both inspect raw logs and quickly review recent install behaviour.

---

## Changes

### CLI Install Logging – JSON Format & Helper

- Refactored install logging into a dedicated helper module:
  - Added `cli/logging.py` with `create_install_logger` and `close_install_logger` helpers.
  - `InstallCommand` in `cli/commands/install.py` now delegates log setup/teardown to this helper instead of inlining file handling.
- Introduced `install_logging.format` configuration in `.ai-dev-kit.yaml`:
  - Supports `text` (default) and `json`.
  - Text mode preserves the existing format: `[ISO8601 UTC] [LEVEL] [context] message`.
  - JSON mode writes one JSON object per line with fields such as `timestamp_utc`, `level`, `context`, `message`, and `install_run_id` for correlation.
- Kept existing controls and safety semantics:
  - `--log-path` and `--no-install-log` still override config for individual runs.
  - Logging remains best-effort; failures in the logging path do not abort installs.

### Install History Summariser (`ai-dev-kit logs install-history`)

- Added a new `logs` command (`cli/commands/logs.py`) and registered it in `cli/main.py`:
  - `ai-dev-kit logs install-history [--limit N]` scans `logs/ai-dev-kit/install/` and summarises recent runs.
  - Supports both text and JSON logs (prefers JSON when present, falls back to parsing text prefixes).
- The summary shows, for each run:
  - Timestamp (first `install.main` entry),
  - Requested frameworks (from `install.framework` messages),
  - Backend (derived from "Using source … backend …" entries),
  - Status (`SUCCESS` / `FAIL` from `install.main` messages),
  - Relative log file path.
- Added tests in `tests/cli/test_install_history.py` to verify that the command can aggregate and summarise mixed text/JSON logs.

### Framework Installer Integration (Beyond Kanban)

- Extended the env-based logging pattern used by the Kanban installer:
  - `packages/frameworks/kanban/scripts/install_kanban_framework.py` already respects `AI_DEV_KIT_INSTALL_LOG_PATH` and emits `[KANBAN_*]` lines.
  - Workflow Management’s `install_release_workflow.py` now appends `[workflow_mgt.install]` lines to the same log file when `AI_DEV_KIT_INSTALL_LOG_PATH` is set, allowing RW installer activity to be correlated with CLI installs.

### Documentation Updates

- **FR-047 doc:**
  - Updated Implementation Notes to describe Phase 1–2 behaviour:
    - Text vs JSON format via `install_logging.format`.
    - Framework installer integration via `AI_DEV_KIT_INSTALL_LOG_PATH` (Kanban + workflow-mgt).
    - The `ai-dev-kit logs install-history` summariser.
- **Task T47 doc:**
  - Refined Deliverable and Acceptance Criteria to note Phase 1–2 scope (logging, JSON, history CLI, framework integration) and bumped version to `v0.5.1.47+4`.
- **CLI configuration & reference docs:**
  - Configuration guide already documents `install_logging` block; behaviour now includes optional JSON format and the history command.
  - CLI reference continues to surface install logging behaviour and pointers to the configuration guide.

---

## Verification

- `pytest tests/cli/test_install_logging.py -q` – confirms text logging behaviour, rotation, redaction, and JSON log line structure for `install_logging.format=json`.
- `pytest tests/cli/test_install_history.py -q` – verifies that the `logs install-history` command correctly summarises mixed text/JSON logs.

---

## Related Work

- **FR-047:** Install Logging for Framework Dependencies.
- **BR-037:** Kanban Install Consumer Board Contamination.
- **v0.5.1.47+2 / +3:** Phase 1 work (initial CLI logging, Kanban integration, tests, and docs) that this release extends.


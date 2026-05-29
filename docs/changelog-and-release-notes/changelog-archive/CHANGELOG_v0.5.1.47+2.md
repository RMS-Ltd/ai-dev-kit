---
title: "Changelog: v0.5.1.47+2"
---

# Changelog: v0.5.1.47+2

**Release Date:** 2026-03-04 00:00:00 UTC  
**Epic:** Epic 5 – Documentation Management and Maintenance  
**Story:** Story 1 – FR Repo (PERPETUAL)  
**Task:** Task 47 – Install Logging for Framework Dependencies  
**Type:** 🔧 Framework Behaviour / 🧰 Tooling

---

## Summary

🔧 Install Logging (Phase 1): E5:S01:T47 – Implement per-run install logging for `ai-dev-kit install` and integrate Kanban installer logging so that framework dependency installs produce durable, structured logs for debugging and forensic analysis.

---

## Changes

### CLI Install Logging (FR-047 – Phase 1)

- Implemented **per-run install logging** in the `ai-dev-kit` CLI:
  - Added `install_logging.*` configuration handling and logging setup in `cli/commands/install.py`.
  - Each `ai-dev-kit install ...` invocation now writes a timestamped log file under a configurable project-local directory (default: `logs/ai-dev-kit/install/`).
  - Logs use a simple structured format: `[ISO8601 UTC] [LEVEL] [context] message`.
- Added **CLI flags** to control logging behaviour:
  - `--log-path PATH` to override the configured log directory for a single run.
  - `--no-install-log` to disable logging for a single invocation (overriding config).
- Implemented **basic log rotation**:
  - When `install_logging.keep` is set in `.ai-dev-kit.yaml`, the installer keeps the most recent N log files and deletes older ones on each run.
- Added a small redaction helper to avoid logging obvious secrets:
  - Masks common credential patterns (e.g. `GITHUB_TOKEN=...`, `password=...`, `Bearer ...`) before writing messages to the log.

### Kanban Installer Integration

- Enhanced the Kanban installer to integrate with the CLI install logger:
  - `packages/frameworks/kanban/scripts/install_kanban_framework.py` now uses a lightweight `_log` helper that:
    - Delegates to an external logger callback when available; and
    - Falls back to appending to the file path exposed via `AI_DEV_KIT_INSTALL_LOG_PATH` (set by the CLI).
  - Emitted **phase-tagged log lines** for key Kanban install steps:
    - `[KANBAN_MODE]` – entry to the installer and selected mode.
    - `[KANBAN_DETECT]` – detection of existing Kanban structure.
    - `[KANBAN_ANALYZE]` – analysis and migration plan generation.
    - `[KANBAN_VALIDATE]` – pre/post-install validation, including warnings about contaminated boards.
    - `[KANBAN_MIGRATE]` – migration execution (non-fresh modes).
    - `[KANBAN_FRESH_INSTALL]` – fresh install path (canonical epics + consumer board skeleton).
- Ensured logging is **best-effort and non-fatal**:
  - Failures in the logging path do not abort the install; they are treated as soft failures while the installer continues to run.

---

## Verification

- Manual dry-run testing:
  - Ran `ai-dev-kit` CLI install flows in a development environment and confirmed:
    - A single per-run log file is created under the expected directory.
    - Log entries include install start/end markers, backend selection, and framework-level events.
  - Executed the Kanban installer in `--dry-run` mode with `AI_DEV_KIT_INSTALL_LOG_PATH` set and verified:
    - Phase-tagged `[KANBAN_*]` lines appear in the same log file.
    - Validation warnings about contaminated boards (e.g. Epic 24) are captured in the log stream.

---

## Related Work

- **FR-047:** Install Logging for Framework Dependencies (repository anchor and requirements).  
- **BR-037:** Kanban Install Delivers Mixed Dev Kit Backlog and Templates into Consumer Boards.  
- **E6:S07:** ai-dev-kit CLI Tool (framework dependency management and install flows).  
- **v0.5.1.47+1:** Initial FR-047 anchoring and Kanban fresh-install hardening. This release builds on that work by wiring in the CLI-level logging pipeline.

---


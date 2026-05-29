---
lifecycle: evergreen
ttl_days: null
created_at: 2026-02-27T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 5, Story 1, Task 47: Install Logging for Framework Dependencies

**Task ID:** E5:S01:T47  
**Status:** ARCHIVED  
**Priority:** HIGH  
**Estimated Effort:** Medium  
**Created:** 2026-02-27  
**Last updated:** 2026-03-31 (v0.5.1.47+6 – FR-047 **Implementing Task** header wiring; implementation complete per Phase 1–2)
**Version:** v0.5.1.47+6

**Implementation Status:** ✅ COMPLETE
**Progress:** All phases complete - CLI logging, JSON/text formats, framework installer integration, install-history command, comprehensive testing, and documentation fully implemented

**Repository Pattern:** FR-047 = E5:S01:T47 (abstract space v0.5.1.47+0)

**Archive note:** Historical FR-repo anchor retained for traceability. Active implementation ownership is carried by `E6:S07:T111` (event-contract quality) and `E6:S07:T112` (feedback submission path/governance).

---

## Scope

Repository anchor task for **FR-047 – Install Logging for Framework Dependencies**.

This task anchors the feature request that `ai-dev-kit install` (and framework-specific installers) should:

- Emit detailed, per-run **install logs** into a project-local directory.
- Capture both CLI-level operations (frameworks, versions, backends) and framework-specific installer output (e.g. Kanban installation steps, validation warnings).
- Provide a durable audit trail for debugging and forensic analysis of install behaviour in consumer projects.

Concrete implementation work (CLI changes, tests, docs) will be carried out under appropriate Epic 6 stories (CLI tool, framework dependency integration); this task ensures FR-047 is properly represented in the FR repository.

---

## Input

- **FR-047:** [`FR-047-install-logging-for-framework-dependencies.md`](../../../fr-br/FR-047-install-logging-for-framework-dependencies.md)
- CLI docs and designs:
  - `cli/commands/install.py`
  - `cli/backends/*`
  - `docs/documentation/user-docs/framework-dependency-*.md`

- Kanban / RW integration docs:
  - `docs/architecture/standards-and-adrs/framework-dependency-architecture.md`
  - `docs/architecture/standards-and-adrs/framework-update-cli-design.md`


---

## Deliverable

1. FR-047 documented and anchored as `E5:S01:T47` in the FR repository story.
2. Clear problem statement and requirements for install logging captured in FR-047.
3. **Phase 1–2 implemented:** CLI install logging (per-run log file under `logs/ai-dev-kit/install/`, config and CLI flags, redaction, rotation), optional JSON log format, `ai-dev-kit logs install-history` summariser, and framework installer integration via `AI_DEV_KIT_INSTALL_LOG_PATH` (Kanban phase-tagged log lines plus workflow-mgt installer markers). Automated tests added for CLI logging, history summarisation, and Kanban logging; docs updated (FR-047 Implementation Notes, CLI/config/install docs, Kanban docs).

---

## Acceptance Criteria

- [x] FR-047 exists with a complete description of the desired install logging behaviour.
- [x] This task is present in the **E5:S01 FR Repo** story checklist as **E5:S01:T47** and links correctly to FR-047.
- [x] Implementation tasks under the CLI/Framework Management epics can reference this task/FR as the canonical requirement for install logging.
- [x] Phase 1–2: Logging, JSON/CLI history, and framework integrations implemented; tests and docs added (see FR-047 Implementation Notes).

---

## Implementation Results

### ✅ Core CLI Implementation
**Files:** `cli/commands/install.py`, `cli/logging.py`
**Features Implemented:**
- **Per-run logging:** Timestamped log files under `logs/ai-dev-kit/install/`
- **Format support:** Text and JSON log formats via `install_logging.format` config
- **CLI flags:** `--log-path PATH` and `--no-install-log` overrides
- **Configuration:** Complete `install_logging.*` config block support
- **Log rotation:** Retention control via `install_logging.keep`
- **Secret redaction:** Automatic redaction of sensitive patterns

### ✅ Install History Command
**File:** `cli/commands/logs.py`
**Features Implemented:**
- **install-history subcommand:** `ai-dev-kit logs install-history [--limit N]`
- **Format support:** Handles both text and JSON log files
- **Summary output:** Timestamp, frameworks, backend, status, log file path
- **Recent runs filtering:** Configurable limit (default: 10)

### ✅ Framework Installer Integration
**Files:** `packages/frameworks/kanban/scripts/install_kanban_framework.py`, `packages/frameworks/workflow mgt/scripts/install_release_workflow.py`
**Features Implemented:**
- **Environment variable:** `AI_DEV_KIT_INSTALL_LOG_PATH` integration
- **Kanban markers:** `[KANBAN_MODE]`, `[KANBAN_DETECT]`, `[KANBAN_ANALYZE]`, `[KANBAN_VALIDATE]`, `[KANBAN_MIGRATE]`, `[KANBAN_FRESH_INSTALL]`
- **Workflow Management markers:** `[workflow_mgt.install]` lines
- **Shared logging:** Single per-run log contains both CLI and framework events

### ✅ Comprehensive Testing
**Files:** `tests/cli/test_install_logging.py`, `tests/cli/test_install_history.py`, `tests/kanban/test_install_kanban_logging.py`
**Test Coverage:**
- **CLI logging:** Log file creation, format validation, rotation, redaction
- **Install history:** Summary generation, mixed format handling
- **Framework integration:** Kanban and Workflow Management installer logging
- **Configuration:** Config file and CLI flag behavior
- **Error handling:** Robust failure scenarios

### ✅ Documentation Updates
**Files:** Configuration guide, installation guides, FR-047 documentation
**Documentation Added:**
- **Configuration guide:** Complete `install_logging` section with examples
- **Installation guides:** Post-install sanity checks and install log references
- **FR-047:** Complete specification and implementation notes
- **CLI reference:** Updated with logging flags and behavior

### ✅ Version Progression
- **v0.5.1.47+2:** Phase 1 implementation (basic logging, CLI flags, Kanban integration)
- **v0.5.1.47+3:** Phase 1 testing and validation
- **v0.5.1.47+4:** Phase 2 implementation (JSON format, install-history command, extended framework integration)

---

## Version Anchor

- **Abstract Space:** v0.5.1.47+0 – initial documentation-only anchor for FR-047
- **Implementation Complete:** v0.5.1.47+4 – All phases implemented and tested

---

## Related Work

- **FR-047:** Install Logging for Framework Dependencies.  
- **BR-037:** Kanban install consumer board contamination (motivating use case for better install logging).  
- **E6:S07:** ai-dev-kit CLI Tool (framework dependency management).


---
lifecycle: evergreen
ttl_days: null
created_at: 2026-02-27T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Feature Request: Install Logging for Framework Dependencies

**Type:** Feature Request (FR)  
**ID:** FR-047  
**Submitted:** 2026-02-27  
**Submitted By:** earlution  
**Priority:** HIGH  
**Status:** COMPLETE  
**Implementing Task:** [E5:S01:T47](../epics/Epic-5/Story-001-fr-repo/T47-install-logging-for-framework-dependencies.md)

---

## Summary

Add detailed, per-framework install logging for `ai-dev-kit install` (and framework-specific installers) so that every install run is captured in a durable log for post-install analysis, debugging, and forensic traceability.

---

## Description

When installing frameworks (e.g. Kanban, Workflow Management, Numbering & Versioning) into consumer projects, it is currently difficult to reconstruct **exactly what happened** during installation:

- Which frameworks and versions were requested.
- Which backend and source were used (e.g. git-submodule, git-subtree).
- What scripts ran after dependency installation (e.g. `install_kanban_framework.py`).
- What warnings and validation messages were produced (e.g. Epic mashup warnings, “copied ai-dev-kit’s actual Kanban”).

This lack of a **persistent install log** makes it hard to:

- Diagnose issues like **BR-037 – Kanban Install Consumer Board Contamination** after the fact.
- Correlate consumer project states with specific ai-dev-kit framework releases or behaviours.
- Provide clear guidance to adopters when something goes wrong during `ai-dev-kit install`.

This FR proposes adding **structured install logging** so that each invocation of `ai-dev-kit install` (and key post-install scripts) writes a detailed log file per run, suitable for:

- Developer troubleshooting.
- Workflow analysis (what steps ran, which validations fired).
- Forensic reconstruction when something goes badly wrong.

---

## Requirements

### Functional Requirements

- [x] **FR-047-F1:** Each invocation of `ai-dev-kit install <framework>[@version]` must produce an install log file under a deterministic, project-local path (e.g. `logs/ai-dev-kit/install/`).
- [x] **FR-047-F2:** The log must record, at minimum:
  - Framework names and requested versions.
  - Selected backend and install path.
  - Source URL or identifier (where safe to log).
  - High-level steps with timestamps (init, backend operations, framework-specific scripts, validation).
  - Exit codes and summary status for each step.

- [x] **FR-047-F3:** For frameworks with their own installers (e.g. `install_kanban_framework.py`), key steps and validation results must be captured in the same log (or a clearly linked sub-log).
- [x] **FR-047-F4:** Install logging must be **enabled by default** in new projects, with configuration in `.ai-dev-kit.yaml` to:
  - Enable/disable logging.
  - Control log directory.
  - Configure simple retention (e.g. keep last N logs).

- [x] **FR-047-F5:** CLI options must allow on-demand overrides:
  - `--log-path PATH` to override log directory.
  - `--no-install-log` to explicitly disable logging for a specific run (if needed).


### Non-Functional Requirements

- [x] **FR-047-NF1:** Logs must avoid recording secrets (tokens, passwords, environment values) and should redact obvious credentials in error output where feasible.
- [x] **FR-047-NF2:** Logging must add minimal overhead to install time and not significantly degrade performance for typical installs.
- [x] **FR-047-NF3:** Log format should be human-readable (plain text with timestamps and levels) and amenable to later extension with machine-readable (JSON) formats.
- [x] **FR-047-NF4:** Logging must be robust in failure scenarios: partial logs should still be written even if an install step fails.

---

## Scope Analysis

**Problem Domain:** Framework dependency installation and debugging  
**Affected Areas:**
- [x] CLI / Backend (ai-dev-kit install)
- [x] Framework-specific installers (e.g. Kanban)
- [x] Documentation
- [x] Testing

**Estimated Complexity:**
- [ ] Simple (1-3 days)  
- [x] Medium (1 week)  
- [ ] Complex (2+ weeks)  
- [ ] Very Complex (1+ month)

---

## Use Cases

**Primary Use Case:**

1. A user runs `ai-dev-kit install kanban workflow-mgmt numbering-versioning` in a consumer project.
2. Something goes wrong (e.g. unexpected Kanban structure, validation warnings).
3. User (or support) inspects the latest `logs/ai-dev-kit/install/install-YYYYMMDD-HHMMSS.log` to see:
   - Exactly which frameworks and versions were installed.
   - Backend configuration and target paths.
   - Output from `install_kanban_framework.py` and other scripts.
   - Validation warnings and errors (e.g. Epic mashup detected).

**Additional Use Cases:**

- Post-mortem analysis for bugs like BR-037, where we need to reconstruct how a board got into a contaminated state.
- Verifying that a CI job or automation ran the correct install commands with expected options.
- Providing reproducible reports when filing FRs/BRs against ai-dev-kit frameworks.

---

## Acceptance Criteria

- [x] **AC-1:** Running `ai-dev-kit install <framework>` in a project that has been `ai-dev-kit init`’d produces a log file under a configured `logs/ai-dev-kit/install/` directory, with a timestamped filename.
- [x] **AC-2:** The log file clearly shows:
  - Requested frameworks and versions.
  - Backend, source, and install path for each framework.
  - Entry/exit for each major step (backend install, framework-specific scripts, validation).

- [x] **AC-3:** For Kanban installs, the log includes the key phases of `install_kanban_framework.py` (detection, analysis, migration mode, validation) and any Epic mashup / contamination warnings.
- [x] **AC-4:** Logging behaviour is configurable via `.ai-dev-kit.yaml` and CLI flags as described, with sane defaults for new projects.
- [x] **AC-5:** Automated tests exist that:
  - Run `ai-dev-kit install` in a temp project.
  - Assert that a log file is created with at least the required fields present.


---

## Implementation Notes (Phase 1–2)

- **Log location:** Logs are per-run and per-project. When `ai-dev-kit install` is run from a **consumer repo root** (where `get_project_root()` resolves to that repo), the log file is created under `logs/ai-dev-kit/install/` in that repo, with a timestamped filename `install-YYYYMMDD-HHMMSS.log`. Running the CLI from inside a framework checkout (e.g. `.ai-dev-kit/`) will place logs under that checkout; for consumer-project logs, run the install from the consumer repo root.
- **Log format (text/JSON):** Per-run logs are plain-text by default (`install_logging.format: text`), using the prefix `[ISO8601 UTC] [LEVEL] [context] message`. Projects can opt into a machine-readable format via `install_logging.format: json`, which emits one JSON object per line with fields like `timestamp_utc`, `level`, `context`, `message`, and an `install_run_id` to correlate events.
- **Framework integration:** When the CLI has logging enabled, it sets the environment variable `AI_DEV_KIT_INSTALL_LOG_PATH` to the current log file path before invoking framework installers. The Kanban installer (`install_kanban_framework.py`) appends phase-tagged lines to that file when the variable is set: `[KANBAN_MODE]`, `[KANBAN_DETECT]`, `[KANBAN_ANALYZE]`, `[KANBAN_VALIDATE]`, `[KANBAN_MIGRATE]`, `[KANBAN_FRESH_INSTALL]`. Other framework installers (e.g. Workflow Management’s `install_release_workflow.py`) append `[workflow_mgt.install]` lines to the same log file when the env var is present. This allows a single per-run log to contain both CLI and framework-level events.
- **Install history:** The `ai-dev-kit logs install-history` command reads `logs/ai-dev-kit/install/` (text or JSON logs) and prints a compact summary of recent runs (timestamp, frameworks, backend, status, log file) to support quick forensic analysis.
- **Validation (test installs):** Disposable test-project installs confirm that the consumer Kanban board is clean (canonical epics only, no Epic 24) and that Phase 1–2 logging and framework integrations behave as intended.

---

## Dependencies

**Blocks:**
- Future debugging and analysis workflows that rely on install logs (e.g. automated triage tools for contaminated boards).

**Blocked By:**
- None identified; can be implemented independently within the CLI and framework packages.

**Related Work:**
- BR-037 – Kanban Install Delivers Mixed Dev Kit Backlog and Templates into Consumer Boards.
- E6:S07 – ai-dev-kit CLI Tool (framework dependency management and install flows).

## Archive note

`FR-047` remains the canonical requirement anchor, but implementation is complete and historical. Successor deepening work is delivered under:

- `E6:S07:T111` (comprehensive install event-contract logging quality)
- `E6:S07:T112` (install feedback submission path and governance)

---

## Intake Decision

**Intake Status:** PENDING  
**Intake Date:** 2026-02-27  
**Intake By:** [TBD]

**Decision Flow Results:**
- [ ] Story Match Found: [Epic 6, Story 7] → Task [T]  
- [ ] New Story Created: [Epic X, Story Y] → Task 1  
- [x] Repo Story Mapping: Epic 5, Story 1 (FR Repo) → Task 47 (FR-047 – Install logging for framework dependencies)

**Assigned To (Proposed):**
- Epic: Epic 5 – Documentation Management and Maintenance (FR Repo anchoring)  
- Story: Story 1 – FR Repo (PERPETUAL)  
- Task: E5:S01:T47 – Install Logging for Framework Dependencies  
- Version: `0.5.1.47+0` (abstract space, to be set when first implementation task runs RW)

**Kanban Links:**
- Epic: [`Epic-5.md`](../epics/Epic-5/Epic-5.md)  
- Story: [`Story-001-fr-repo.md`](../epics/Epic-5/Story-001-fr-repo.md)  
- Task: [`T47 – Install logging`](../epics/Epic-5/Story-001-fr-repo/T47-install-logging-for-framework-dependencies.md)


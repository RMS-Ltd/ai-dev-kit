---
lifecycle: proposed
ttl_days: null
created_at: 2026-06-04T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Feature Request: Install/Setup Interactive Feedback Shows External SemVer

**Type:** Feature Request (FR)  
**ID:** FR-108  
**Submitted:** 2026-06-04  
**Submitted By:** User  
**Priority:** MEDIUM (Could Have — MoSCOW **C**)  
**Status:** OPEN  
**Implementing Task:** [E06:S09:T15](../epics/Epic-6/Story-009-ai-dev-kit-installation-and-adopter-integration/T15-install-setup-interactive-feedback-external-semver-fr108.md)

---

## Summary

When installing and setting up AI Dev Kit, every piece of **interactive user-facing feedback** (banners, prompts, progress lines, warnings, success/failure messages) must state which **external SemVer** version of AI Dev Kit is in use.

---

## Problem Statement

Adopters running install and setup flows (`adk install`, framework installers, interactive configuration wizards) receive prompts and status output that describe *what* is happening but often omit *which release* of AI Dev Kit they are running.

Without a consistent external SemVer label:

- Support and feedback triage cannot quickly match console output to a shipped release.
- Adopters cannot tell whether they are on the latest GitHub release, a dev checkout, or a cached older CLI.
- Install telemetry and feedback submissions ([FR-078](./FR-078-comprehensive-install-event-contract-logging-and-feedback-quality.md), [FR-079](./FR-079-install-feedback-submission-path-and-governance.md)) lack a human-visible anchor that mirrors the version fields in machine-readable artifacts.

The **external SemVer** is the outward-facing version (e.g. `v0.4.863+1`) derived from the internal `RC.EPIC.STORY.TASK+BUILD` schema via `semver_converter.py`, as used in README and GitHub releases—not the raw internal tuple alone.

---

## Requirements

### Functional Requirements

- [ ] **FR-108-F1:** Define a single **install/setup version banner contract**: external SemVer (with optional internal traceability in verbose mode) displayed at session start for every install/setup entry point.
- [ ] **FR-108-F2:** Apply the contract to **CLI install path** (`adk install`, `adk feedback`, `adk status` when invoked during setup) and **framework installers** (`install_release_workflow.py`, `install_kanban_framework.py`, `install_greenfield_path.py`, `install_package_from_release.py`).
- [ ] **FR-108-F3:** Include external SemVer in **interactive prompts** (section headers, confirmation summaries, error/warning messages)—not only in final success lines.
- [ ] **FR-108-F4:** Resolve version from authoritative sources (installed package / release tag / monorepo `version.py` + `semver_converter`) with deterministic fallback and explicit “version unknown” messaging when resolution fails.
- [ ] **FR-108-F5:** Align human-visible SemVer with fields already emitted in install event logs and feedback payloads where applicable.

### Non-Functional Requirements

- [ ] **FR-108-NF1:** Version lookup must not materially slow interactive installs (cache per run; no network round-trip required for local installs).
- [ ] **FR-108-NF2:** Output remains readable in narrow terminals (concise format, e.g. `AI Dev Kit v0.4.863+1`).
- [ ] **FR-108-NF3:** No false precision—do not display SemVer when only an unmapped internal version is available without conversion.

---

## Scope Analysis

**Problem Domain:** Installation UX, version traceability, adopter support  
**Affected Areas:**

- [x] CLI (`cli/commands/install.py`, related commands)
- [x] Framework installers (workflow mgt, kanban)
- [x] Greenfield orchestration scripts
- [x] Install/setup documentation (brief mention of version display contract)
- [ ] RW/UKW runtime (out of scope—only install/setup flows)

**Estimated Complexity:** Simple–Medium (1–3 days)

---

## Use Cases

**Primary use case:** An adopter runs `adk install workflow kanban` on a clean repo. Every phase banner and interactive prompt prefix shows `AI Dev Kit v{semver}` so they can paste output into a GitHub issue with unambiguous release context.

**Additional use cases:**

- Maintainer replays ExpensesTracker-style dry runs and confirms SemVer matches the tagged release under test.
- Feedback CLI includes the same SemVer string the user saw during install.

---

## Acceptance Criteria

- [ ] **AC1:** Running any documented install entry point prints external SemVer at session start before first interactive prompt.
- [ ] **AC2:** At least one automated test (or snapshot test) per major entry point asserts SemVer presence in stdout/stderr for a pinned fixture version.
- [ ] **AC3:** Interactive RW Mode A/B/C setup (`install_release_workflow.py`) shows SemVer on section headers (`📋 RW Configuration Setup`, mode selection, completion summary).
- [ ] **AC4:** Kanban installer interactive path shows SemVer on equivalent banners.
- [ ] **AC5:** When SemVer cannot be resolved, user sees explicit `AI Dev Kit (version unknown)` (or documented fallback)—never silent omission.
- [ ] **AC6:** Install event / feedback payloads remain consistent with the displayed SemVer for the same run.

---

## Dependencies

**Blocks:**

- Clearer adopter support and feedback triage for install/setup issues.

**Blocked By:**

- None (can proceed independently; complements completed FR-078/FR-079).

**Related Work:**

- [FR-080](./FR-080-greenfield-installation-process.md) — greenfield install path
- [FR-078](./FR-078-comprehensive-install-event-contract-logging-and-feedback-quality.md) — install event contract
- [FR-079](./FR-079-install-feedback-submission-path-and-governance.md) — feedback submission
- [FR-030](./FR-030-ai-dev-kit-cli-tool.md) — CLI tool
- [FR-062](./FR-062-github-release-installation-experience.md) — GitHub release install UX
- [E06:S09:T15](../epics/Epic-6/Story-009-ai-dev-kit-installation-and-adopter-integration/T15-install-setup-interactive-feedback-external-semver-fr108.md)

---

## Intake Decision

**Intake Status:** ACCEPTED  
**Intake Date:** 2026-06-04  
**Intake By:** Agent (atomic intake)

**Decision Flow Results:**

- [x] Story Match Found: Epic 6, Story 9 (AI Dev Kit installation and adopter integration) → Task T15

**Assigned To:**

- Epic: Epic 6 — Framework Management
- Story: Story 009 — AI Dev Kit installation and adopter integration
- Task: T15 — Install/setup interactive feedback external SemVer (FR-108)
- Version: *(pending RW)*

**Kanban Links:**

- Epic: [`Epic-6.md`](../epics/Epic-6/Epic-6.md)
- Story: [`Story-009-ai-dev-kit-installation-and-adopter-integration.md`](../epics/Epic-6/Story-009-ai-dev-kit-installation-and-adopter-integration.md)
- Task: [`T15-install-setup-interactive-feedback-external-semver-fr108.md`](../epics/Epic-6/Story-009-ai-dev-kit-installation-and-adopter-integration/T15-install-setup-interactive-feedback-external-semver-fr108.md)

---

## Notes

- **SemVer definition:** External display version per dev-kit versioning policy and `semver_converter.py` (`task_touch` / registry mode as configured)—same string as README badge and GitHub release name.
- **Verbose mode:** May additionally show internal `RC.EPIC.STORY.TASK+BUILD` for maintainer forensics; default interactive output uses SemVer only.

---

## References

- [dev-kit-versioning-policy.md](../../../governance/standards/dev-kit-versioning-policy.md)
- [`semver_converter.py`](../../../../packages/frameworks/workflow%20mgt/scripts/version/semver_converter.py)
- [`INSTALL_IN_YOUR_PROJECT.md`](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/INSTALL_IN_YOUR_PROJECT.md)

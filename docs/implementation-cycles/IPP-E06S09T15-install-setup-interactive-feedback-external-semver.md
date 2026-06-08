---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-04T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E06:S09:T15 — Planning: Spec, Tests, Implementation Plan (IPW)

**Host Task:** [`T15-install-setup-interactive-feedback-external-semver-uxr016.md`](../kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T15-install-setup-interactive-feedback-external-semver-uxr016.md) **(E06:S09:T15)**  
**Planning for:** [UXR-016](../kanban/fr-br/UXR-016-install-setup-interactive-feedback-external-semver-version.md) *(reclassified from FR-108)*  
**Status:** Approved

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RF1 | Install/setup version banner contract — external SemVer at session start | UXR-016-R1 |
| RF2 | CLI + framework installer entry points | UXR-016-R2 |
| RF3 | SemVer on interactive headers/prompts/warnings | UXR-016-R3 |
| RF4 | Authoritative resolution + unknown fallback | UXR-016-R4 |
| RF5 | Align stdout with install events + feedback payload | UXR-016-R5 |

### 1.2 Non-functional requirements

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RNF1 | Per-run cache; no network | UXR-016-NF1 |
| RNF2 | Compact `AI Dev Kit v\{semver\}` label | UXR-016-NF2 |
| RNF3 | No unconverted internal as SemVer | UXR-016-NF3 |

### 1.3 Invariants and boundaries

- **In scope:** Install/setup UX, telemetry fields, `cli/main.py --version` fix
- **Out of scope:** RW/UKW runtime; registry mutation (`finalize=False` only)
- **Note:** Feedback is `cli/commands/logs.py`, not `feedback.py`

---

## 2. Specification

### 2.1 Goal

Adopters see the same external SemVer during install/setup as README/GitHub releases, in stdout and machine-readable artifacts.

### 2.2 Specification mapping

Shared module `install_ux_version.py` resolves internal version via `rw-config.yaml` → `semver_converter.convert_version_string(finalize=False)` → formatted banners. All entry points call `print_session_banner` at start; logger and feedback payload carry `adk_semver` / `adk_internal_version`.

### 2.3 Constraints

- Read-only SemVer conversion at install time
- Kanban text log may only get banner line (JSON events remain CLI-scoped)

### 2.4 Status transition intent

- **Current:** TODO → IN PROGRESS on first implementation change → COMPLETE when ACs evidenced via RW

### 2.5 ADR necessity decision

| ID | Y/N | Evidence |
| -- | --- | -------- |
| T1 | N | UXR-016 prescribes approach |
| T2 | N | Revertible in one PR |
| T3 | N | Install UX only |
| T4 | N | UXR-016 + IPP authoritative |
| T5 | N | No policy trade-off |
| T6 | N | No gate changes |
| T7 | N | Complements FR-078/079 |

**Outcome:** `EXEMPT` — [dev-kit-versioning-policy.md](../governance/standards/dev-kit-versioning-policy.md)

| E1–E5 | Pass |

---

## 3. Test design

| ID | Behavior | Expected check |
| -- | -------- | -------------- |
| T1 | Resolver unit | Fixture → SemVer; missing → unknown |
| T2 | Cache | Second call uses cache |
| T3 | CLI install dry-run | stdout contains `AI Dev Kit v` |
| T4 | RW installer dry-run | Banner before RW Configuration Setup |
| T5 | Kanban dry-run | Banner includes SemVer |
| T6 | JSON install log | `adk_semver` on entries |
| T7 | Feedback payload | `context.adk_semver` present |
| T8 | CLI `--version` | Not hardcoded `0.1.0` |

---

## 4. Implementation plan

| Step | Action |
| ---- | ------ |
| **1** | T15 **TODO → IN PROGRESS** |
| 2 | `install_ux_version.py` + `cli/adk_version_display.py` bridge |
| 3 | Wire CLI commands + framework installers |
| 4 | Extend `create_install_logger` + feedback payload |
| 5 | Tests T1–T8 |
| 6 | Docs (INSTALL, feedback guide, UXR-016) |
| **N** | Status reconcile + **RW E06:S09:T15** |

### 4.1 Files

- **Create:** `packages/frameworks/workflow-mgt/scripts/install_ux_version.py`, `cli/adk_version_display.py`, `tests/cli/test_install_ux_version.py`
- **Modify:** CLI commands, logging, installers, tests

---

## 5. Documentation deliverables

| Doc ID | Path | Action |
| ------ | ---- | ------ |
| D-U1 | INSTALL_IN_YOUR_PROJECT.md | UPDATE |
| D-U2 | docs/guides/framework-consumption/adk-feedback-guide.md | UPDATE |
| D-U3 | T15 task doc | UPDATE |
| D-U4 | UXR-016 | UPDATE |

---

## 6. Documentation housing

| Doc ID | Path | Publication |
| ------ | ---- | ----------- |
| D-C1 | docs/implementation-cycles/IPP-E6S9T15-... | NOT_APPLICABLE |
| D-U1 | INSTALL_IN_YOUR_PROJECT.md | PUBLISHED |
| D-U2 | adk-feedback-guide.md | PUBLISHED |

---

## 7. Success / verification criteria

- [ ] UXR-016 AC1–AC6 evidenced
- [ ] Tests pass
- [ ] RW E06:S09:T15 complete

---

## References

- [UXR-016](../kanban/fr-br/UXR-016-install-setup-interactive-feedback-external-semver-version.md)
- [semver_converter.py](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/scripts/version/semver_converter.py)

---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-04T19:00:00Z
expires_at: null
housekeeping_policy: keep
---

# ADR-016: Install/setup error code taxonomy (ADK-*)

**Status:** Accepted  
**Date:** 2026-06-04  
**Related:** [FR-108](../../project-management/kanban/fr-br/FR-108-install-setup-error-code-registry-and-emission.md), [FR-078](../../project-management/kanban/fr-br/FR-078-comprehensive-install-event-contract-logging-and-feedback-quality.md), [E06:S09:T20](../../project-management/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T20-install-setup-error-code-registry-fr108.md)

---

## Context

Install and setup failures in adopter repositories are logged (FR-078) and described in prose, but alpha testers and book readers need **stable symbols** that work without knowing repo layout. Multiple installers (greenfield orchestrator, RW, Kanban, sign-off, CLI) must share one vocabulary.

---

## Decision

### 1. Code shape

```
ADK-{DOMAIN}{PROCESS}[.{SUB}][:{QUALIFIER}]
```

| Part | v1 values | Meaning |
| ---- | --------- | ------- |
| DOMAIN | `I` install/setup, `V` validate (reserved), `R` runtime (reserved) | Lifecycle area |
| PROCESS | Two digits, e.g. `01`–`04` | Named installer or gate |
| SUB | Letter + two digits, e.g. `E04`, `S01` | Failure class within process |
| QUALIFIER | `:W01` warning, `:R01` recoverable | Optional non-fatal modifier |

Examples: `ADK-I03.E04`, `ADK-I01.S01`, `ADK-I03.E90:W01`.

Codes are **locale-neutral** and must not embed file paths or secrets.

### 2. Registry as single source of truth

- Canonical file: `packages/frameworks/workflow-mgt/config/install-error-codes.yaml`
- Fields per code: `summary`, `symptom`, `remediation[]`, `see_also[]` (BR/FR ids), `introduced_in_adk_semver`
- `registry_version` semver for feedback/JSON payloads (`error_registry_version`)

Human-facing stderr/stdout **first line** is derived from the registry via `adk_install_errors.emit_install_error`.

### 3. Stability and deprecation

- **Never reassign** a code to a different meaning in the same `registry_version` minor line.
- Semantic change → new sub-code (e.g. `E13`); mark old code `deprecated: true` in YAML with `superseded_by`.
- Bump `registry_version` minor when adding codes; bump major only if shape or required fields change.

### 4. Relationship to FR-078 install events

On failed install steps (`result.status` in `error`, `failed`):

- Optional `result.adk_error_code` — must exist in registry when emitted
- Optional `result.error_registry_version` — matches registry file

CLI JSONL and `prepare-feedback-payload` (FR-079 contract **1.1.0**) may aggregate `primary_adk_error_codes` from ERROR log lines.

Standalone Python installers (RW, greenfield) emit stderr codes in v1; JSONL is required on the **`adk install`** path.

### 5. Process allocation

| Process | Installer | Since |
| ------- | --------- | ----- |
| I01 | `install_greenfield_path.py` | v1.0.0 |
| I02 | `install_kanban_framework.py` | v1.0.0 |
| I03 | `install_release_workflow.py` | v1.0.0 |
| I04 | `install_github_issue_signoff.py` | v1.0.0 |
| I05 | `verify_vendor_tree.py` (lean acquisition preflight) | v1.1.0 / FR-111 |
| I06 | `cli/commands/install.py` | v1.1.0 / FR-111 |

Future processes require ADR update or FR intake.

---

## Consequences

- **Positive:** Paste-and-triage for alpha; book appendix can link `#adk-i03-e04` without repo state.
- **Negative:** Maintainers must update registry + generated docs when adding failure classes.
- **Testing:** Emitters must use registered codes only (CI guard).

---

## References

- [install-error-codes.yaml](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/config/install-error-codes.yaml)
- [adk_install_errors.py](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/scripts/adk_install_errors.py)

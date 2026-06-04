---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-04T18:30:00Z
expires_at: null
housekeeping_policy: keep
---

# E06:S09:T20 — Planning: Spec, Tests, Implementation Plan (IPW)

**Host Task:** [`T20-install-setup-error-code-registry-fr108.md`](../project-management/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T20-install-setup-error-code-registry-fr108.md) **(E06:S09:T20)**  
**Planning for:** [FR-108](../project-management/kanban/fr-br/FR-108-install-setup-error-code-registry-and-emission.md)  
**Status:** Implemented (**v0.6.9.20+1**)

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RF1 | Versioned machine-readable install error registry | FR-108-F1 |
| RF2 | Greenfield emitters emit `adk_error_code` on failure | FR-108-F2 |
| RF3 | Stderr banner: code + registry summary | FR-108-F3 |
| RF4 | FR-078 JSON: `adk_error_code`, `error_registry_version` on failed results | FR-108-F4 |
| RF5 | FR-079 feedback: primary codes + registry version | FR-108-F5 |
| RF6 | Troubleshooting doc with stable anchors | FR-108-F5/F6 |
| RF7 | GitHub templates request ADK code + SemVer | FR-108-F6 |
| RF8 | CI: emitters use registered codes only | FR-108-F7 |

### 1.2 Non-functional requirements

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RNF1 | Code semantics stable across patches | FR-108-NF1 |
| RNF2 | No PII/paths in code strings | FR-108-NF2 |
| RNF3 | v1 bounded I01–I04 seed catalog | FR-108-NF3 |
| RNF4 | `adk doctor --explain` deferred | FR-108-NF4 |

### 1.3 Invariants and boundaries

- **In scope:** Registry, emitter helper, RW/greenfield/kanban/sign-off stderr, CLI JSON/feedback, docs, tests.
- **Out of scope:** `ADK-R*`, auto-fix, i18n.

---

## 2. Specification

### 2.1 Goal

Stable `ADK-*` tokens for install/setup failures linking stderr, JSONL telemetry, feedback, and book troubleshooting without repo-specific paths.

### 2.2 Mapping

Registry YAML is SoT; `adk_install_errors.py` loads and emits; installers call `emit_install_error`; CLI merges `build_result_extras` into event `result`.

### 2.3 Constraints

- Mirror [install_ux_version.py](../../packages/frameworks/workflow-mgt/scripts/install_ux_version.py) import pattern for scripts.
- Preserve existing human remediation text (BR-082 class).

### 2.4 Status transition intent

- **Current:** IN PROGRESS (implementation started).
- **COMPLETE:** All ACs + pytest evidence + RW release.

### 2.5 ADR necessity decision

| ID | Trigger | Y/N | Evidence |
| -- | ------- | --- | -------- |
| T1 | Alternatives | Y | YAML registry vs inline constants |
| T2 | Reversibility | N | Revert removes emitters |
| T3 | Blast radius | Y | workflow-mgt, kanban, CLI, docs, GitHub |
| T4 | Precedent | Y | Book/adopter contract |
| T5 | Trade-off | N | — |
| T6 | Governance | N | Extends FR-078 only |
| T7 | Supersedes | N | — |

**Outcome:** **REQUIRED** — [ADR-016](../architecture/standards-and-adrs/ADR-016-install-setup-error-code-taxonomy.md)

---

## 3. Test design

| ID | Layer | Check |
| -- | ----- | ----- |
| T1 | `test_adk_install_errors.py` | Registry load, banner, unregistered raises |
| T2 | `test_install_error_codes_registry.py` | YAML keys, regex, see_also BR paths |
| T3 | `test_install_release_workflow_error_codes.py` | E04 on missing deps |
| T4 | `test_install_kanban_error_codes.py` | E01 on failure path |
| T5 | `test_install_logging.py` | Strict JSON accepts adk fields |
| T6 | `test_logs_feedback_error_codes.py` | Feedback 1.1.0 fields |
| T7 | `test_emitters_use_registered_codes.py` | Static allowlist |

---

## 4. Implementation plan

| Step | Action |
| ---- | ------ |
| **1** | Task **TODO → IN PROGRESS** |
| 2 | ADR-016 + registry YAML + `adk_install_errors.py` |
| 3 | Wire installers + CLI + feedback |
| 4 | Docs + GitHub templates + generator |
| 5 | Pytest |
| **N** | RW **E06:S09:T20**; reconcile **COMPLETE** |

### 4.1 Files

- `packages/frameworks/workflow-mgt/config/install-error-codes.yaml`
- `packages/frameworks/workflow-mgt/scripts/adk_install_errors.py`
- `install_release_workflow.py`, `install_greenfield_path.py`, `install_kanban_framework.py`, `install_github_issue_signoff.py`
- `cli/logging.py`, `cli/commands/install.py`, `cli/commands/logs.py`
- Tests under `tests/workflow_mgt/`, `tests/kanban/`, `tests/cli/`
- User docs + INSTALL + `.github/ISSUE_TEMPLATE/`

---

## 5. Documentation deliverables

| Doc ID | Path | Action |
| ------ | ---- | ------ |
| D-ADR | `docs/architecture/standards-and-adrs/ADR-016-*.md` | CREATE |
| D-REG | `packages/frameworks/workflow-mgt/config/install-error-codes.yaml` | CREATE |
| D-USER | `docs/documentation/user-docs/framework-dependency-troubleshooting-guide.md` | UPDATE |
| D-INSTALL | `INSTALL_IN_YOUR_PROJECT.md` | UPDATE |
| D-CLI | `docs/documentation/user-docs/cli-configuration-guide.md` | UPDATE |
| D-GH | `.github/ISSUE_TEMPLATE/*.yml` | UPDATE |

---

## 6. Documentation housing

| Doc ID | Path | Publication |
| ------ | ---- | ----------- |
| IPP | `docs/implementation-cycles/IPP-E06S09T20-*.md` | NOT_APPLICABLE |
| ADR-016 | `docs/architecture/standards-and-adrs/` | PUBLISHED |
| User troubleshooting | `docs/documentation/user-docs/` | PUBLISHED |

---

## 7. Success / verification criteria

- [ ] Registry I01–I04 + seed codes
- [ ] pytest green
- [ ] INSTALL + troubleshooting updated
- [ ] RW release with kanban Step 7

---

## References

- [FR-108](../project-management/kanban/fr-br/FR-108-install-setup-error-code-registry-and-emission.md)
- [ADR-016](../architecture/standards-and-adrs/ADR-016-install-setup-error-code-taxonomy.md)
- [FR-078](../project-management/kanban/fr-br/FR-078-comprehensive-install-event-contract-logging-and-feedback-quality.md)
- [FR-079](../project-management/kanban/fr-br/FR-079-install-feedback-submission-path-and-governance.md)

---
lifecycle: proposed
ttl_days: null
created_at: 2026-06-04T18:00:00Z
expires_at: null
housekeeping_policy: keep
---

# FR-108: Install/setup error code registry and emission contract

**Type:** Feature Request (FR)  
**ID:** FR-108  
**Submitted:** 2026-06-04  
**Submitted By:** User (design session — install alpha + book reader troubleshooting)  
**Priority:** HIGH (Should Have — MoSCOW **S**)  
**Status:** IMPLEMENTED (**v0.6.9.20+1** — E06:S09:T20; pending alpha/book verification in production use)

**Implementing Task:** [E06:S09:T20](../epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T20-install-setup-error-code-registry-fr108.md)

**Note:** FR-108 id was previously used for install SemVer display, reclassified to [UXR-016](UXR-016-install-setup-interactive-feedback-external-semver-version.md) (2026-06-04); this FR reuses the freed id for a distinct contract.

---

## Summary

Define a **stable, hierarchical error-code registry** (`ADK-{domain}.{process}.{sub}`) for AI Dev Kit **install and setup** flows, emit codes from installers and orchestrators on failure (and agreed warnings), and publish **book- and maintainer-linkable** troubleshooting entries so alpha testers and readers can report one token without exposing repo-specific paths.

---

## Problem Statement

Install failures during book dry-runs and adopter alpha testing are reconstructable from **event logs** ([FR-078](FR-078-comprehensive-install-event-contract-logging-and-feedback-quality.md)) but not from **stable symbols** suitable for:

1. **Paste-and-triage** in GitHub issues and maintainer feedback ([FR-079](FR-079-install-feedback-submission-path-and-governance.md)).
2. **Book appendix lookup** when the book cannot know the reader’s repository layout.
3. **Cross-release search** (grep `ADK-I03.E12` → playbook, linked BR/FR).

Today, installers emit human prose (e.g. PyYAML preflight — [BR-082](BR-082-rw-install-missing-pyyaml-preflight.md)) and coarse Unix exit codes. **Normalized error categories** exist in the FR-078 contract as implementation-defined strings, not a published registry.

---

## Goals

| Audience | Outcome |
| -------- | ------- |
| Alpha testers / agents | Copy `ADK-…` line + `adk_semver` ([UXR-016](UXR-016-install-setup-interactive-feedback-external-semver-version.md)) → instant failure class |
| Book readers | Code → symptom, cause, fix steps without repo introspection |
| Maintainers | Map codes to BRs, playbooks, and install event timelines |

---

## Proposed taxonomy (v1)

```
ADK-{DOMAIN}{PROCESS}[.{SUB}][:{QUALIFIER}]
```

Example: `ADK-I03.E04` (no dot between domain `I` and process `03`).

| Layer | Role | Examples |
| ----- | ---- | -------- |
| **DOMAIN** | Lifecycle area | `I` install/setup, `V` validate (post-install), `R` runtime/RW (phase 2+) |
| **PROCESS** | Named installer or gate | `I01` greenfield orchestrator, `I02` kanban install, `I03` RW install |
| **SUB** | Failure class within process | `.E04` missing dependency, `.E12` version file missing |
| **QUALIFIER** | Non-fatal modifier | `:W01` warning, `:R01` recoverable |

**Governance rules:**

- Codes are **API**: never reuse a code for different semantics; deprecate and add a new sub-code if meaning shifts.
- **Registry is SoT** for stderr/stdout templates (no drift between message and code).
- **Unix exit codes** remain coarse (0/1/2); **ADK code is the fine grain**.

### Illustrative v1 mappings (seed catalog)

| Situation | Code |
| --------- | ---- |
| RW install, missing PyYAML | `ADK-I03.E04` |
| RW mode C, `version_file` not scaffolded | `ADK-I03.E12` ([BR-088](BR-088-rw-install-mode-c-missing-version-file-scaffold.md)) |
| RW mode C, epic/story pattern mismatch | `ADK-I03.E21` |
| Kanban install path contamination | `ADK-I02.E08` |
| Greenfield orchestrator step failure | `ADK-I01.S{nn}` + child code from subprocess |

Full process list and sub-codes are defined in implementation (YAML registry); v1 targets **greenfield path** processes only.

---

## Requirements

### Functional Requirements

- [ ] **FR-108-F1:** Publish machine-readable **install error code registry** (YAML or equivalent) with `registry_version`, process definitions, and per-code entries (symptom, likely cause, remediation steps, `introduced_in_adk_semver`, related BR/FR links).
- [ ] **FR-108-F2:** All **install/setup entry points** in greenfield scope emit a primary `adk_error_code` on failure: `install_greenfield_path.py`, `install_release_workflow.py`, `install_kanban_framework.py`, `install_github_issue_signoff.py`, CLI `adk install` (where applicable).
- [ ] **FR-108-F3:** Stderr/stdout **banner** includes code + one-line human summary (preserve actionable detail from BR-082-style messages).
- [ ] **FR-108-F4:** Install **JSON event contract** ([FR-078](FR-078-comprehensive-install-event-contract-logging-and-feedback-quality.md)) and **feedback payloads** ([FR-079](FR-079-install-feedback-submission-path-and-governance.md)) include `adk_error_code` and `error_registry_version` on failed steps.
- [ ] **FR-108-F5:** Generate **adopter-facing troubleshooting doc** (user-docs + stable URL fragments for published site / book appendix).
- [ ] **FR-108-F6:** GitHub issue / feedback templates request **ADK code** alongside SemVer banner.
- [ ] **FR-108-F7:** Automated tests: emitters only use registered codes; every emitted code has a registry row; unknown code fails CI.

### Non-Functional Requirements

- [ ] **FR-108-NF1:** Codes stable across patch releases; breaking semantic change requires new sub-code, not reassignment.
- [ ] **FR-108-NF2:** No PII or repo paths in code strings; paths remain in separate log fields (redaction per FR-078/079).
- [ ] **FR-108-NF3:** v1 scope bounded (~8–12 processes, seed sub-codes for alpha-known failures); avoid code explosion per branch.
- [ ] **FR-108-NF4:** Optional later: `adk doctor --explain ADK-I03.E12` (offline registry lookup); not required for v1 acceptance.

### Out of scope (v1)

- Full **RW runtime** (`ADK-R*`) catalog (phase 2).
- Auto-remediation from codes.
- Localization (codes are locale-neutral; docs English-first).

---

## Acceptance Criteria

- [ ] **AC1:** Registry file checked in under `packages/frameworks/workflow-mgt/` (or documented canonical path) with `registry_version` and greenfield process IDs **I01–I03** minimum.
- [ ] **AC2:** At least one failure path per greenfield installer emits a registered code in tests (fixture-driven).
- [ ] **AC3:** Install JSON events on failure include `adk_error_code` per FR-108-F4.
- [ ] **AC4:** Troubleshooting guide section lists seed codes with book-linkable anchors.
- [ ] **AC5:** Bidirectional links FR-108 ↔ E06:S09:T20; story checklist row present.
- [ ] **AC6:** FR-108 status → IMPLEMENTED on verified delivery via RW attributing E06:S09:T20.

---

## Dependencies

**Builds on:**

- [FR-047](FR-047-install-logging-for-framework-dependencies.md) — baseline install logging
- [FR-078](FR-078-comprehensive-install-event-contract-logging-and-feedback-quality.md) — event schema (`error_category` → align with `adk_error_code`)
- [FR-079](FR-079-install-feedback-submission-path-and-governance.md) — feedback field extension
- [FR-080](FR-080-greenfield-installation-process.md) — process boundaries
- [UXR-016](UXR-016-install-setup-interactive-feedback-external-semver-version.md) — SemVer banner alongside codes

**Related alpha defects (seed catalog references):**

- [BR-082](BR-082-rw-install-missing-pyyaml-preflight.md), [BR-083](BR-083-rw-install-default-patterns-mismatch-fresh-kanban-layout.md), [BR-088](BR-088-rw-install-mode-c-missing-version-file-scaffold.md), [BR-086](BR-086-rw-install-lowercase-fresh-kanban-patterns-signoff.md)

**Blocked by (implementation):**

- [FR-083](FR-083-global-ipw-gated-implementation-contract.md) — IPP + explicit user authorization before code changes

---

## Intake Decision

**Intake Status:** ACCEPTED  
**Intake Date:** 2026-06-04  
**Intake By:** Agent (Cursor)

**Decision flow:**

- [x] Story match: Epic 6, Story 9 (installation & adopter integration) → Task **T20**

**Assigned To:**

- Epic: 6 — Framework Management  
- Story: 9 — AI Dev Kit installation and adopter integration  
- Task: **E06:S09:T20** — Install/setup error code registry (FR-108)  
- Version: *(pending RW — not yet released)*

**Kanban links:**

- Story: [`story-09-ai-dev-kit-installation-and-adopter-integration.md`](../epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration.md)
- Task: [`T20-install-setup-error-code-registry-fr108.md`](../epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T20-install-setup-error-code-registry-fr108.md)

---

## References

- [INSTALL_IN_YOUR_PROJECT.md](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/INSTALL_IN_YOUR_PROJECT.md)
- [framework-dependency-troubleshooting-guide.md](../../documentation/user-docs/framework-dependency-troubleshooting-guide.md)
- [E06:S07:T111](../epics/epic-06/story-07-adk-implementation-analysis-and-package-management/T111-comprehensive-install-event-contract-logging-and-feedback-quality.md) — install event contract (complete)

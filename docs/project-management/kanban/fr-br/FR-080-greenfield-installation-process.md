---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-19T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# FR-080: End-to-end greenfield installation process

**Type:** Feature Request (FR)  
**ID:** FR-080  
**Submitted:** 2026-04-19  
**Submitted By:** Maintainer (design session)  
**Priority:** HIGH  
**Severity:** MEDIUM  
**Status:** IMPLEMENTED (deliverables on **`dev`** via **E6:S09:T01**; see § Implementation evidence)

**Implementing Task:** [E6:S09:T01](../epics/Epic-6/Story-009-ai-dev-kit-installation-and-adopter-integration/T01-greenfield-installation-process-fr080.md)

---

## Summary

Design, implement, and document a **complete opinionated greenfield path** by which a new or template-based project can install AI Dev Kit frameworks with deterministic steps, validation, and a single “happy path” narrative—without assuming an existing repo layout to preserve.

---

## Problem Statement

Installation guidance today mixes methods (submodule copy, GitHub Releases, future CLI), and greenfield adopters lack a **single end-to-end** process that covers acquisition, framework installers, configuration (`rw-config.yaml`), and verification. Progress on install telemetry (FR-078 / FR-079) improves feedback after installs but does not replace a **defined first-run experience**.

---

## Requirements

### Functional Requirements

- [x] **FR-080-F1:** Produce a **greenfield installation specification** (inputs, outputs, ordering, failure modes) aligned with Epic 6 scope (framework distribution and adoption).
- [x] **FR-080-F2:** Implement or orchestrate the **greenfield path** so it can be executed reproducibly (scripts, CLI hooks, and/or documented automation—exact mechanism decided during implementation).
- [x] **FR-080-F3:** Integrate **mandatory installer steps** for chosen frameworks (e.g. Release Workflow installer, Kanban installer where in scope) so raw copy alone is never the only story.
- [x] **FR-080-F4:** Provide **verification gates** (validators, smoke checks, or checklist) that confirm the greenfield install before the adopter considers the process complete.
- [x] **FR-080-F5:** Publish **adopter-facing documentation** (`INSTALL_IN_YOUR_PROJECT.md`, user-docs) that describes **only the greenfield happy path** clearly, with pointers to brownfield/modular adoption (FR-081, ADR-003).

### Non-Functional Requirements

- [x] **FR-080-NF1:** Greenfield defaults must remain **maintainable** when framework packages version independently (framework README vs monorepo version policy).
- [x] **FR-080-NF2:** Process must align with existing install logging and feedback contracts where applicable ([FR-078](./FR-078-comprehensive-install-event-contract-logging-and-feedback-quality.md), [FR-079](./FR-079-install-feedback-submission-path-and-governance.md)).

### Implementation evidence (E6:S09:T01)

Primary artifacts (dev-kit repo):

- [`INSTALL_IN_YOUR_PROJECT.md`](https://github.com/earlution/ai-dev-kit/blob/main/INSTALL_IN_YOUR_PROJECT.md) — Wave 1–4 greenfield specification, orchestrator usage, manual gates, Wave 4 post-install validators and reference transcript.
- [`install_greenfield_path.py`](https://github.com/earlution/ai-dev-kit/blob/main/packages/frameworks/workflow%20mgt/scripts/install_greenfield_path.py) — hybrid orchestration (RW-first default, checkpoint override).
- [`IPW-E6S09T01`](../../../implementation-cycles/IPW-E6S09T01-greenfield-installation-fr080.md) — planning / decisions / wave traceability.
- User-docs under [`docs/documentation/user-docs/` (repo tree)](https://github.com/earlution/ai-dev-kit/tree/main/docs/documentation/user-docs) — scope sections (greenfield vs brownfield) per Wave 3.

**Explicit deferrals (owned elsewhere):** Full install **telemetry product** contracts remain under **FR-078** / **FR-079**; T01 documents boundaries and log capture (`AI_DEV_KIT_INSTALL_LOG_PATH`). **Canonical distribution coordinates** / copy-paste URL policy are **FR-082 / E6:S09:T03**, not blocking F1–F5 above.

---

## Acceptance Criteria

- A new project (or documented scratch scenario) can follow the greenfield path from **empty or template** to **verified** install without undocumented manual steps.
- Deliverables include **implementation artifacts** (not documentation alone) and **tests or validation** appropriate to the chosen orchestration.
- Install docs distinguish **greenfield** from **brownfield** and cross-link [ADR-003](../../../architecture/standards-and-adrs/ADR-003-greenfield-vs-brownfield-adoption.md) and [FR-081](./FR-081-brownfield-modular-adopter-integration.md).

---

## Scope Analysis

**Problem Domain:** Framework installation, Epic 6 product delivery  
**Affected Areas:**

- [x] Workflow management installers and validators  
- [x] Kanban / framework packages (as selected for greenfield bundle)  
- [x] `INSTALL_IN_YOUR_PROJECT.md` and `docs/documentation/user-docs/`  
- [ ] Brownfield customization (explicitly **out of scope** for this FR—see FR-081)

**Estimated Complexity:**

- [ ] Simple (1-3 days)
- [ ] Medium (1 week)
- [x] Complex (2+ weeks)
- [ ] Very Complex (1+ month)

---

## Related

- [ADR-003](../../../architecture/standards-and-adrs/ADR-003-greenfield-vs-brownfield-adoption.md) — Greenfield vs brownfield policy  
- [FR-081](./FR-081-brownfield-modular-adopter-integration.md) — Brownfield modular integration  
- [FR-082](./FR-082-installation-distribution-canonical-repo-alignment.md) — Canonical repo/org alignment for install assets  
- [FR-062](./FR-062-github-release-installation-experience.md) — Release-based install UX  
- [FR-003](./FR-003-dependency-tracking-in-adopting-projects.md) — Adoption dependency tracking  

---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-19T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E6:S09:T01 - Planning: Spec, Tests, Implementation Plan (IPW)

**Host Task:** [`T01-greenfield-installation-process-fr080.md`](../project-management/kanban/epics/Epic-6/Story-009-ai-dev-kit-installation-and-adopter-integration/T01-greenfield-installation-process-fr080.md) **(E6:S09:T01)**  
**Planning for:** [FR-080 – End-to-end greenfield installation process](../project-management/kanban/fr-br/FR-080-greenfield-installation-process.md)  
**Status:** Draft

---

## 1. Specification

### 1.1 Goal

Deliver an **opinionated, reproducible greenfield path**: from acquiring AI Dev Kit framework bits through **mandatory installer usage**, **configuration**, and **verification**—for **new or template** projects—without assuming a brownfield host layout. Aligns with [ADR-003](../architecture/standards-and-adrs/ADR-003-greenfield-vs-brownfield-adoption.md) (greenfield vs brownfield).

### 1.2 Functional requirements (traceability to FR-080)

| ID | Requirement | Planning note |
|----|-------------|----------------|
| **F1** | Greenfield installation **specification** (inputs, outputs, ordering, failure modes). | Standalone subsection or linked doc; ordering: acquire → install → configure → verify. |
| **F2** | **Reproducible** path (scripts, CLI, and/or deterministic checklist). | See **§1.5 Decisions**. |
| **F3** | **Mandatory installer steps** — not copy-only. | [`install_release_workflow.py`](https://github.com/earlution/ai-dev-kit/blob/main/packages/frameworks/workflow%20mgt/scripts/install_release_workflow.py), [`install_kanban_framework.py`](https://github.com/earlution/ai-dev-kit/blob/main/packages/frameworks/kanban/scripts/install_kanban_framework.py) (or documented successors). |
| **F4** | **Verification gates** (validators, smoke, checklist) vs `rw-config.yaml` / consumer layout. | Tie to [rw-validators-consumer-layout.md](https://github.com/earlution/ai-dev-kit/blob/main/packages/frameworks/workflow%20mgt/docs/rw-validators-consumer-layout.md). |
| **F5** | **Adopter docs** — greenfield-only narrative; pointers to brownfield. | [`INSTALL_IN_YOUR_PROJECT.md`](https://github.com/earlution/ai-dev-kit/blob/main/INSTALL_IN_YOUR_PROJECT.md) and user-docs; cross-link [FR-081](../project-management/kanban/fr-br/FR-081-brownfield-modular-adopter-integration.md). |

### 1.3 Non-functional requirements

| ID | Requirement | Planning note |
|----|-------------|----------------|
| **NF1** | Maintainable as framework packages version independently. | Doc and script boundaries; version pins called out in install spec. |
| **NF2** | Align with install **logging / feedback** contracts. | Coordinate with [FR-078](../project-management/kanban/fr-br/FR-078-comprehensive-install-event-contract-logging-and-feedback-quality.md) / [FR-079](../project-management/kanban/fr-br/FR-079-install-feedback-submission-path-and-governance.md); **T01** does not replace those FRs—extends greenfield narrative and **example-run** capture (§1.6). |

### 1.4 Out of scope

- **Brownfield** integration and modular host surfaces → [FR-081](../project-management/kanban/fr-br/FR-081-brownfield-modular-adopter-integration.md) / **E6:S09:T02**.
- **Canonical repo / distribution coordinates** as the lead problem → [FR-082](../project-management/kanban/fr-br/FR-082-installation-distribution-canonical-repo-alignment.md) / **E6:S09:T03** (coordinate; may reorder work).

### 1.5 Decisions / alternatives (to resolve during implementation)

Decision record (locked):

- **Decision date:** 2026-04-19
- **Approved by:** Maintainer review (chat decision)
- **Orchestration:** **Hybrid (C)** - minimal script + explicit checklist.
- **Verification depth:** **Manual gates** as the primary completion criteria.
- **Installer ordering policy:** **Approach 3** (order-agnostic documentation) with **Approach 1 (RW-first -> Kanban)** as the default recommended path.
- **User control checkpoint:** At a critical step, present both valid paths; include justification for continuing on the default path; allow explicit user override.
- **Identifier policy:** Use universally descriptive identifiers in paths/examples; avoid owner-specific identifiers unless explicitly required by FR-082/T03 decisions.

| Topic | Decision / options | Notes |
|-------|--------------------------|--------|
| **Orchestration** | **Chosen: (C) Hybrid** (minimal script + explicit checklist). | FR-080 allows any reproducible mechanism; this balances determinism and readability for adopters. |
| **Verification depth** | **Chosen: Manual gates** (validator-heavy checks remain optional evidence, not hard completion gate). | Reduces adopter friction while still supporting F4 through documented post-install checks. |
| **Installer ordering / flow control** | **Chosen policy: Approach 3 (order-agnostic docs) with Approach 1 (RW-first then Kanban) as default recommendation.** | At critical checkpoint, present options + default-path justification + explicit override. |
| **Scope vs T03** | **Chosen: keep identifiers universally descriptive; avoid owner-specific coordinates unless FR-082/T03 explicitly approves them.** | Dependencies: task doc already flags **FR-082 / E6:S09:T03**. |

### 1.6 Example installs: logging for analysis and debugging

**Requirement:** Representative **greenfield** install runs produce **detailed, reviewable output** suitable for **analysis** (process improvement) and **debugging** (failure diagnosis)—not only pass/fail.

**Boundary with FR-078 / FR-079:**

- **FR-078** / **FR-079** define **contracts** for install events and feedback paths; this IPW treats **T01** as ensuring the **greenfield path** emits or documents evidence **compatible** with those contracts where applicable, and adds **explicit “gold run” / example transcripts** where the FRs do not yet mandate them.
- **Privacy / safety:** Example logs and published artifacts should use **redaction** or **synthetic paths** where real host paths or tokens could appear; call this out in implementation (doc or script preamble).

**Deliverable shape (planning-level):**

- At least one **documented reference run** (commands + expected high-signal log lines or exit codes).
- Criteria for **verbosity** when debugging (env flag or doc section), without requiring secret material in logs.

---

## 2. Test design

| ID | Focus | Acceptance / method |
|----|--------|---------------------|
| **TD1** | End-to-end greenfield scenario | Matches task **AC2**: documented scratch/template path with **no undocumented** manual steps; capture steps in IPW-derived checklist or automation. |
| **TD2** | Doc boundaries | **AC3**: `INSTALL_IN_YOUR_PROJECT.md` (or successor) links **ADR-003** and **FR-081** in the greenfield narrative. |
| **TD3** | Installers invoked | Assert **F3**: process cannot be satisfied by copy-only; installers run (or CI/docs assert exact invocations). |
| **TD4** | Verification gates | Run or document validator layout per `rw-config.yaml` post-install (align [rw-validators-consumer-layout.md](https://github.com/earlution/ai-dev-kit/blob/main/packages/frameworks/workflow%20mgt/docs/rw-validators-consumer-layout.md)). |
| **TD5** | Example-run forensics | A reference run produces storable artifacts (log file path, transcript, or FR-078-shaped event sequence) suitable for **post-hoc analysis**; redaction rules verified. |
| **TD6** | Cross-story | Smoke that greenfield docs do not contradict **T02** brownfield doc set (no scope bleed). |

---

## 3. Implementation plan

Phased; dependency order matters within each wave for **technical prerequisites** (e.g. orchestration exists before you publish an example transcript of running it).

### Documentation cadence (policy)

**After §1.5 decisions are confirmed** through the normal decision-making process, **relevant adopter-facing documentation is updated in parallel with** code, scripts, installers, and verification—not parked for a single late “docs-only” sweep. Each wave below names a **theme** and its hard dependencies; **within** a wave, ship **behavior + docs** together when the change affects what adopters must do or believe.

Normative prose (ordering, checkpoints, identifiers) must not run ahead of locked decisions; once locked, doc updates are **same-wave** deliverables alongside implementation.

**Historical note:** An early execution used a sequential “Wave 3” documentation pass after orchestration for expedience. **Going forward**, treat INSTALL/user-doc updates as **parallel** to Waves 2 and 4 wherever §1.5 already applies; keep **Wave 3** in this plan as the **AC3 / F5 completeness checklist** (greenfield vs brownfield distinction and user-doc touchpoints—not an exclusive slot for all writing).

### Wave 1 — Specification and decisions

| Step | Action | Deliverable |
|------|--------|-------------|
| 1.1 | Lock **greenfield install spec** (ordering, inputs/outputs, failure modes). | Spec section in repo or linked from `INSTALL_IN_YOUR_PROJECT.md`. |
| 1.2 | Resolve **§1.5** table (or explicitly defer with owner). | Short “Decisions” addendum or ADR snippet. |

### Wave 2 — Orchestration and installers

| Step | Action | Deliverable |
|------|--------|-------------|
| 2.1 | Wire **mandatory** invocations of `install_release_workflow.py` / `install_kanban_framework.py` (paths, working directory, idempotency notes). | Scripts and/or doc blocks; CI optional. |
| 2.2 | **`rw-config.yaml`** and validator discovery | Copy or generate consumer layout per install story. |

**Parallel documentation (same wave, after §1.5):** Update `INSTALL_IN_YOUR_PROJECT.md` and installer-adjacent sections whenever orchestration or defaults change so adopters never rely on stale instructions.

### Wave 3 — Greenfield vs brownfield distinction (documentation completeness)

| Step | Action | Deliverable |
|------|--------|-------------|
| 3.1 | Update [`INSTALL_IN_YOUR_PROJECT.md`](https://github.com/earlution/ai-dev-kit/blob/main/INSTALL_IN_YOUR_PROJECT.md) greenfield chapter; cross-link **ADR-003**, **FR-081**. | Meets **AC3** / **F5**. |
| 3.2 | User-docs touchpoints under `docs/documentation/` as per FR-080 scope. | Consistent terminology “greenfield only” here. |

**Relationship to other waves:** Steps 3.1–3.2 are **verification of narrative completeness** across INSTALL + user-docs; **perform in parallel** with Waves 2–4 once §1.5 is locked—not only after Wave 4.

### Wave 4 — Verification and example runs

| Step | Action | Deliverable |
|------|--------|-------------|
| 4.1 | Define **verification** commands post-install (validators, smoke). | Documented gates; tie to **F4**. |
| 4.2 | Produce **reference example run** + logging guidance (and FR-078/079 alignment note). | Meets §1.6; supports debugging narrative. |

**Parallel documentation (same wave):** Publish verification commands, reference transcript, and logging/redaction guidance **with** the underlying behavior—no “implementation now, prose later” unless a genuine dependency blocks documentation.

**Delivered (Wave 4):** [`INSTALL_IN_YOUR_PROJECT.md`](https://github.com/earlution/ai-dev-kit/blob/main/INSTALL_IN_YOUR_PROJECT.md) adds **Wave 4** sections—post-install validator invocation (`F4`), synthetic reference transcript with redaction reminder, and **FR-078** / **FR-079** boundary bullets. Cross-linked from [`framework-dependency-installation-guide.md`](../documentation/user-docs/framework-dependency-installation-guide.md) greenfield scope.

### Wave 5 — Traceability

| Step | Action | Deliverable |
|------|--------|-------------|
| 5.1 | Update **FR-080** checkboxes / **T01** acceptance with evidence links. | **AC1** closure or explicit deferrals. |
| 5.2 | Align with **E6:S09:T03** if copy-paste examples depend on canonical coordinates. | Coordination note in task Progress. |

**Delivered (Wave 5):** [FR-080](../project-management/kanban/fr-br/FR-080-greenfield-installation-process.md) functional/NFR boxes checked with **Implementation evidence** section; [T01](../project-management/kanban/epics/Epic-6/Story-009-ai-dev-kit-installation-and-adopter-integration/T01-greenfield-installation-process-fr080.md) acceptance criteria checked with evidence links; **T03** coordination sentence under task Dependencies.

**Files likely touched (living list):**

- [`INSTALL_IN_YOUR_PROJECT.md`](https://github.com/earlution/ai-dev-kit/blob/main/INSTALL_IN_YOUR_PROJECT.md)
- [`packages/frameworks/workflow mgt/scripts/install_release_workflow.py`](https://github.com/earlution/ai-dev-kit/blob/main/packages/frameworks/workflow%20mgt/scripts/install_release_workflow.py)
- [`packages/frameworks/kanban/scripts/install_kanban_framework.py`](https://github.com/earlution/ai-dev-kit/blob/main/packages/frameworks/kanban/scripts/install_kanban_framework.py)
- [`packages/frameworks/workflow mgt/docs/rw-validators-consumer-layout.md`](https://github.com/earlution/ai-dev-kit/blob/main/packages/frameworks/workflow%20mgt/docs/rw-validators-consumer-layout.md)
- Consumer `rw-config.yaml` / template in recipient story (as defined by orchestration)

---

## 4. Success / verification criteria

- [x] Task **AC1:** FR-080 requirements satisfied or deferred with rationale in FR/task ([FR-080](../project-management/kanban/fr-br/FR-080-greenfield-installation-process.md)).
- [x] Task **AC2:** Documented scenario runs end-to-end without undocumented manual steps ([`INSTALL_IN_YOUR_PROJECT.md`](https://github.com/earlution/ai-dev-kit/blob/main/INSTALL_IN_YOUR_PROJECT.md) Wave 4 reference + Method 2 path).
- [x] Task **AC3:** Install docs link **ADR-003** and **FR-081**.
- [x] **F3** evidenced: installers are part of the canonical greenfield story.
- [x] **§1.6:** Example/reference run + logging posture documented; aligned with **FR-078** / **FR-079** boundaries ([`INSTALL_IN_YOUR_PROJECT.md`](https://github.com/earlution/ai-dev-kit/blob/main/INSTALL_IN_YOUR_PROJECT.md) Wave 4).
- [x] Bidirectional wiring: this IPW ↔ host task remain linked ([T01](../project-management/kanban/epics/Epic-6/Story-009-ai-dev-kit-installation-and-adopter-integration/T01-greenfield-installation-process-fr080.md)).

---

## References

- [Host task E6:S09:T01](../project-management/kanban/epics/Epic-6/Story-009-ai-dev-kit-installation-and-adopter-integration/T01-greenfield-installation-process-fr080.md)
- [FR-080](../project-management/kanban/fr-br/FR-080-greenfield-installation-process.md)
- [ADR-003](../architecture/standards-and-adrs/ADR-003-greenfield-vs-brownfield-adoption.md)
- [FR-081](../project-management/kanban/fr-br/FR-081-brownfield-modular-adopter-integration.md)
- [FR-078](../project-management/kanban/fr-br/FR-078-comprehensive-install-event-contract-logging-and-feedback-quality.md)
- [FR-079](../project-management/kanban/fr-br/FR-079-install-feedback-submission-path-and-governance.md)

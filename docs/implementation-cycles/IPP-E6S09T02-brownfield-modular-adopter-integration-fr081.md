---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-29T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E6:S09:T02 — Planning: Spec, Tests, Implementation Plan (IPW)

**Host Task:** [`T02-brownfield-modular-adopter-integration-fr081.md`](../project-management/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T02-brownfield-modular-adopter-integration-fr081.md) **(E6:S09:T02)**  
**Planning for:** [FR-081 – Brownfield modular adopter integration](../project-management/kanban/fr-br/FR-081-brownfield-modular-adopter-integration.md)  
**Status:** Approved

> **IPW:** Consolidated planning package for FR-081. Brownfield SoT: [`INSTALL_IN_YOUR_PROJECT.md`](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/INSTALL_IN_YOUR_PROJECT.md#brownfield-adoption-existing-repositories). Greenfield counterpart: [IPW-E6S9T1](IPW-E6S09T01-greenfield-installation-fr080.md).

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements (ascertained)

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RF1 | Brownfield chapter in INSTALL states non-goals and integration seams (`rw-config.yaml`, `scripts_path`, `use_kanban`, validators). | FR-081-F1, T02 AC3 |
| RF2 | Per-surface matrices (RW-only, RW+Kanban, full stack) with required/optional/recommended. | FR-081-F2, T02 AC2 |
| RF3 | Installer UX does not imply copying ai-dev-kit reference epics; contract-first patterns documented. | FR-081-F3, T02 §3 |
| RF4 | Tradeoff log for deferred work (IPP §8). | FR-081-F4 |
| RF5 | One anonymized partial-adoption worked example. | FR-081 AC, T02 §2 |
| RF6 | FR-081 and task AC1–AC3 satisfied or explicitly deferred. | T02 |

### 1.2 Non-functional requirements (ascertained)

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RNF1 | Tone respects host-project sovereignty. | ADR-003 §2, FR-081-NF1 |
| RNF2 | Greenfield INSTALL spec remains isolated; brownfield is a separate major section. | FR-081-NF2, FR-080 |

### 1.3 Invariants and boundaries

- **Invariants:** ADR-003 is policy anchor; canonical public repo `RMS-Ltd/ai-dev-kit` per FR-082.
- **In scope:** INSTALL brownfield chapter, satellite doc pointers, framework README alignment, light installer messaging.
- **Out of scope:** Greenfield orchestrator changes, FR-062 release tarballs, FR-011 automation, new ADR replacing ADR-003.

---

## 2. Specification

### 2.1 Goal

Brownfield adopters with existing repositories can determine **what must be wired**, **what can be skipped**, and **which validators apply** for their chosen surfaces—using **INSTALL_IN_YOUR_PROJECT.md** as the canonical brownfield entry, operationalizing **ADR-003**.

### 2.2 Specification mapping

- **RF1–RF2:** INSTALL §Brownfield adoption — non-goals, decision tree, matrices, contract table.
- **RF3:** README + installer epilog/warnings; link to [rw-validators-consumer-layout.md](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/docs/rw-validators-consumer-layout.md).
- **RF5:** Worked example subsection (anonymized SaaS API monorepo, RW-only).
- **RF4:** §8 deferrals table.

### 2.3 Constraints

- No merge of brownfield steps into greenfield Wave 1–4 spec.
- Matrices are normative for adoption depth, not for imposing dev-kit Epic 1–23 on hosts.

### 2.4 Status transition intent

- **Current task status:** IN PROGRESS
- **Transition to IN PROGRESS:** First implementation change (this IPP execution wave).
- **Transition to COMPLETE:** AC1–AC3 evidenced; FR-081 requirements checked; RW release records version.
- **Owner:** Implementation execution + RW Step 7.

### 2.5 ADR necessity decision

| ID | Trigger | Y/N | Evidence |
| -- | ------- | --- | -------- |
| T1 | Alternatives | Y | RW-only vs partial Kanban vs full stack |
| T2 | Reversibility | N | Doc + light installer strings |
| T3 | Blast radius | N | §4.1 file list only |
| T4 | Precedent | Y | INSTALL matrices become adoption reference |
| T5 | Constraint trade-off | N | Implements ADR-003 |
| T6 | Governance contract | N | No RW/IPW gate changes |
| T7 | Supersedes | N | Extends ADR-003 operationally |

**Outcome:** `EXEMPT` — governing doc: [ADR-003](../architecture/standards-and-adrs/ADR-003-greenfield-vs-brownfield-adoption.md). Matrices in INSTALL; no new ADR.

| ID | Exemption | Pass? | Evidence |
| -- | --------- | ----- | -------- |
| E1 | Single locus | Pass | Primary: INSTALL brownfield section |
| E2 | No new options | Pass | Operationalizes ADR-003 + FR-081 |
| E3 | Reversible in one task | Pass | Doc revert |
| E4 | Spec elsewhere | Pass | IPP §2 + INSTALL |
| E5 | Documented NONE | Pass | §5.3 |

---

## 3. Test design

| ID | Behavior / layer | Expected check |
| -- | ---------------- | -------------- |
| TD1 | INSTALL structure | Distinct `## Brownfield adoption` H2; greenfield scope boundary links to it |
| TD2 | Matrices | RW-only row + validator list present |
| TD3 | Worked example | Anonymized narrative present |
| TD4 | Repo URLs | No `ai-dev-kit/ai-dev-kit` in INSTALL brownfield; `RMS-Ltd/ai-dev-kit` where needed |
| TD5 | Cross-links | Installation guide + rollout checklist → INSTALL brownfield anchor |
| TD6 | RW-only path | Commands resolve without undefined paths (manual read-through) |
| TD7 | Regression | `tests/test_install_brownfield_docs.py` asserts INSTALL anchors |

---

## 4. Implementation plan

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| **1** | Confirm **E6:S09:T02** IN PROGRESS; update Last updated. | Task doc |
| 2 | Add INSTALL brownfield chapter (Wave A). | INSTALL §Brownfield |
| 3 | Update satellite user-docs (Wave B). | D2, D3, etc. |
| 4 | README audit + installer messaging (Waves C–D). | D4, D5, scripts |
| 5 | Add structural test TD7. | `tests/test_install_brownfield_docs.py` |
| 6 | Close FR-081 + T02 ACs; story-009 checklist. | Kanban traceability |
| **N** | Reconcile task → **COMPLETE** + `✅ COMPLETE (v{version})` after RW; update kboard/fbu as needed. | Forensic closure |

### 4.1 Files to create or modify

- `docs/implementation-cycles/IPP-E6S9T2-brownfield-modular-adopter-integration-fr081.md` (this file)
- `INSTALL_IN_YOUR_PROJECT.md`
- `docs/documentation/user-docs/framework-dependency-installation-guide.md`
- `docs/documentation/user-docs/EXISTING_PROJECT_ROLLOUT_CHECKLIST.md`
- `docs/documentation/user-docs/repo-structure-for-adopters.md`
- `docs/documentation/user-docs/framework-dependency-integration-guide.md`
- `packages/frameworks/workflow-mgt/README.md`, `packages/frameworks/kanban/README.md`
- `packages/frameworks/workflow-mgt/docs/rw-validators-consumer-layout.md`
- `packages/frameworks/workflow-mgt/scripts/install_release_workflow.py`
- `packages/frameworks/kanban/scripts/install_kanban_framework.py`
- `tests/test_install_brownfield_docs.py`
- Task T02, FR-081, story-009

### 4.2 Dependency order

1. INSTALL brownfield (SoT) → satellite links → README/installers → tests → FR/task closure.

---

## 5. Documentation deliverables

| Doc ID | Path | Action | Tied to |
| ------ | ---- | ------ | ------- |
| D0 | `docs/implementation-cycles/IPP-E6S9T2-*.md` | CREATE | IPW |
| D1 | `INSTALL_IN_YOUR_PROJECT.md` | UPDATE | RF1–RF2, RF5 |
| D2 | `docs/documentation/user-docs/framework-dependency-installation-guide.md` | UPDATE | RF1 |
| D3 | `docs/documentation/user-docs/EXISTING_PROJECT_ROLLOUT_CHECKLIST.md` | UPDATE | RF2–RF3 |
| D4 | `packages/frameworks/workflow-mgt/README.md` | UPDATE | RF3 |
| D5 | `packages/frameworks/kanban/README.md` | UPDATE | RF3 |
| D6 | `packages/frameworks/workflow-mgt/docs/rw-validators-consumer-layout.md` | UPDATE | RF1 |
| D7 | T02 task doc | UPDATE | Wiring |
| D8 | FR-081 | UPDATE | Closure |

### 5.3 Documentation gaps

| Gap | Resolution |
| --- | ---------- |
| Separate brownfield guide | NONE — depth in INSTALL per maintainer decision |
| Docusaurus nav | NONE — INSTALL already published at repo root |

---

## 6. Documentation housing

| Doc ID | Canonical path | Publication | Lifecycle |
| ------ | -------------- | ----------- | --------- |
| D0 | `docs/implementation-cycles/IPP-E6S9T2-*.md` | NOT_APPLICABLE | evergreen |
| D1 | `INSTALL_IN_YOUR_PROJECT.md#brownfield-adoption-existing-repositories` | PUBLISHED | evergreen |
| D2–D6 | user-docs / package docs | PUBLISHED | evergreen |

---

## 7. Success / verification criteria

- [x] IPP created and wired to T02
- [x] INSTALL brownfield section satisfies RF1–RF2, RF5, RNF1–RNF2
- [x] TD1–TD7 (structural test + manual checklist)
- [x] FR-081 requirements and ACs checked with evidence
- [x] Greenfield boundary unchanged except cross-link to brownfield section

---

## 8. Rolling backlog / deferrals (RF4)

| Topic | Owner | Rationale |
| ----- | ----- | --------- |
| FR-062 GitHub Release tarballs | E5:S01:T62 | Install-from-release 404 risk; out of FR-081 |
| FR-078 / FR-079 install telemetry product | E5 / E6 | Contracts beyond brownfield narrative |
| Automated brownfield path detector | Future intake | Not required for matrices + INSTALL SoT |
| FR-011 intelligent epic matching | E4 | Document `migration` / `canonical_adoption` only |

---

## References

- [T02](../project-management/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T02-brownfield-modular-adopter-integration-fr081.md)
- [FR-081](../project-management/kanban/fr-br/FR-081-brownfield-modular-adopter-integration.md)
- [ADR-003](../architecture/standards-and-adrs/ADR-003-greenfield-vs-brownfield-adoption.md)
- [IPW-E6S9T1](IPW-E6S09T01-greenfield-installation-fr080.md)
- [rw-validators-consumer-layout.md](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/docs/rw-validators-consumer-layout.md)

---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T05:04:11Z
expires_at: null
housekeeping_policy: keep
---

# Epic 10, Story 1, Task 6: Define RC sign-off criteria and remediation tasks

**Task ID:** E10:S01:T06  
**Status:** ✅ COMPLETE  
**Priority:** MEDIUM  
**Last updated:** 2026-06-06 (0.10.1.6+4 — post-RC CI/portal link hygiene release)  
**Version:** 0.10.1.6+4  
**Code:** E10S01T06

---

## Purpose

Define **Release Candidate (RC) sign-off criteria** and a **remediation backlog** for the Document Lifecycle framework package (`packages/frameworks/doc-lifecycle/`), synthesizing T01–T05 review artefacts per the E02:S13:T06 precedent.

**RC sign-off posture:** **APPROVE** — C1–C6 pass; all five HIGH gaps remediated and verified via [T08](T08-implement-doc-housekeeping-workflow-and-scripts.md) (v0.10.1.8+1), [T09](T09-sync-architecture-adr-dual-sot.md) (v0.10.1.9+1), [T10](T10-fix-document-lifecycle-validator.md) (v0.10.1.10+1). MEDIUM/LOW backlog remains for post-RC scheduling (per minimum bar §4).

---

## Scope

**In scope:**

- Six RC sign-off criteria (C1–C6) with pass/fail evidence
- RC sign-off checklist and **DEFER** decision
- Remediation backlog for all 16 `GAP-DOCLIFE-*` entries
- Remediation task pattern (E02:S13:T06 style)
- **File** kanban tasks for HIGH gaps (R1–R3 → T08, T09, T10)

**Out of scope:**

- Remediation code/doc implementation (separate IPP per filed task)
- MEDIUM/LOW gap task filing (proposed hosts only)
- E10:S02 installation evaluation

---

## Input

- [E10:S01:T01 expectations baseline](T01-establish-expectations-baseline-for-document-lifecycle-packa.md) · [expectations-baseline.md](expectations-baseline.md)
- [E10:S01:T02 component inventory](T02-inventory-package-components-and-map-to-expectations.md) · [component-inventory-map.md](component-inventory-map.md)
- [E10:S01:T03 behavioral validation](T03-validate-lifecycle-behavior-against-documented-guidance.md) · [lifecycle-behavior-validation-report.md](lifecycle-behavior-validation-report.md)
- [E10:S01:T04 integration alignment](T04-review-integrations-and-dependency-alignment.md) · [integration-alignment-report.md](integration-alignment-report.md)
- [E10:S01:T05 gap log and risk assessment](T05-create-gap-log-and-risk-assessment.md) — 16 gaps; 0 RC-blocking; `validate_gap_log.py --strict` PASS
- [E10S01 orchestration plan](../../../../../implementation-cycles/E10S01-orchestration-plan.md) §7.4 T06 · §8.7
- [IPP-E10S01T06-rc-sign-off-remediation.md](../../../../../implementation-cycles/IPP-E10S01T06-rc-sign-off-remediation.md)
- **Precedent:** [E02:S13:T06](../../epic-02/story-13-workflow-management-package-implementation-review/T06-define-rc-sign-off-criteria-and-remediation-tasks.md) · [IPP-E02S13T06](../../../../../implementation-cycles/IPP-E02S13T06-rc-sign-off-remediation.md)

---

## Deliverable

1. RC sign-off criteria and checklist (this document)
2. Remediation backlog (7 work packages, 16 gaps)
3. Filed HIGH-gap tasks: [E10:S01:T08](T08-implement-doc-housekeeping-workflow-and-scripts.md), [E10:S01:T09](T09-sync-architecture-adr-dual-sot.md), [E10:S01:T10](T10-fix-document-lifecycle-validator.md)

---

## Acceptance Criteria

- [x] RC sign-off criteria (C1–C6) defined with pass/fail + evidence
- [x] RC sign-off checklist with **APPROVE** decision documented (upgraded from DEFER @ v0.10.1.6+3)
- [x] Remediation backlog covers all 16 `GAP-DOCLIFE-*` IDs from T05
- [x] HIGH gaps have **filed** task docs with bidirectional links (T08, T09, T10)
- [x] Remediation task pattern documented
- [x] Minimum bar for RC approval stated explicitly
- [x] IPP bidirectionally linked

---

## RC Sign-Off Criteria

### Criterion 1: Component Inventory

**Requirement:** Major package components inventoried and mapped to T01 expectations.

| Status | Evidence |
| ------ | -------- |
| **PASS** | [T02 component inventory](component-inventory-map.md) — 13/13 on-disk files mapped; documented-future artefacts flagged |

---

### Criterion 2: Behavioral Compliance

**Requirement:** Documented lifecycle behavior vs observable repo state scored PASS/PARTIAL/FAIL.

| Status | Evidence |
| ------ | -------- |
| **PASS** | [T03 behavior validation](lifecycle-behavior-validation-report.md) — package policy/spec coherence PASS; enforcement gaps tracked in T05 (non-blocking) |

---

### Criterion 3: Integration Alignment

**Requirement:** Soft dependencies (Kanban, workflow-mgt), agent rules, ADR dual SoT, FR-110 mirror reviewed.

| Status | Evidence |
| ------ | -------- |
| **PASS** | [T04 integration alignment](integration-alignment-report.md) — hard/soft dependency contracts ALIGNED; cohesion gaps in T05 |

---

### Criterion 4: Review Artefact Completeness

**Requirement:** T01–T05 companions complete; T05 `validate_gap_log.py --strict` pass; no blocking stubs on review chain. *(Adapted from E02 C4 — no E07 machinery review for pure doc package per orchestration plan §4.)*

| Status | Evidence |
| ------ | -------- |
| **PASS** | [T01 baseline](expectations-baseline.md) · [T05 gap log](T05-create-gap-log-and-risk-assessment.md) — 16 gaps; validator exit 0; orchestration plan §8.6 gate satisfied |

---

### Criterion 5: Gap Log and Risk Posture

**Requirement:** Schema-conformant gap log; 0 RC-blocking (`BLOCKER`) gaps for the package.

| Status | Evidence |
| ------ | -------- |
| **PASS** | [T05 gap log](T05-create-gap-log-and-risk-assessment.md) — 0 Critical · 5 High · 8 Medium · 3 Low; 0 BLOCKER |

---

### Criterion 6: HIGH Gaps Filed in Kanban

**Requirement:** Each HIGH gap has a **filed** task with bidirectional links (not proposed-only).

| Gap ID | Filed host | Status |
| ------ | ---------- | ------ |
| GAP-DOCLIFE-STRUCT-001 | [E10:S01:T08](T08-implement-doc-housekeeping-workflow-and-scripts.md) | **PASS** (COMPLETE @ [v0.10.1.8+1](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v0.10.1.8+1.md)) |
| GAP-DOCLIFE-STRUCT-002 | [E10:S01:T08](T08-implement-doc-housekeeping-workflow-and-scripts.md) | **PASS** (COMPLETE @ [v0.10.1.8+1](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v0.10.1.8+1.md)) |
| GAP-DOCLIFE-STRUCT-003 | [E10:S01:T08](T08-implement-doc-housekeeping-workflow-and-scripts.md) | **PASS** (COMPLETE @ [v0.10.1.8+1](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v0.10.1.8+1.md)) |
| GAP-DOCLIFE-INTG-001 | [E10:S01:T09](T09-sync-architecture-adr-dual-sot.md) | **PASS** (COMPLETE @ [v0.10.1.9+1](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v0.10.1.9+1.md) — ADR-023; package SoT; salience schema packaged) |
| GAP-DOCLIFE-TEST-001 | [E10:S01:T10](T10-fix-document-lifecycle-validator.md) | **PASS** (COMPLETE @ [v0.10.1.10+1](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v0.10.1.10+1.md)) |

| Status | Evidence |
| ------ | -------- |
| **PASS** | All five HIGH gaps filed with bidirectional links |

---

## RC Sign-Off Checklist

### Pre-Sign-Off Validation

- [x] **C1 Component inventory:** PASS (T02)
- [x] **C2 Behavioral compliance:** PASS (T03)
- [x] **C3 Integration alignment:** PASS (T04)
- [x] **C4 Review artefact completeness:** PASS (T01–T05 chain)
- [x] **C5 Gap log posture:** PASS (T05; 0 blockers)
- [x] **C6 HIGH gaps filed:** PASS (T08, T09, T10)

### Sign-Off Decision

**Overall status:** C1–C6 criteria **met** for criteria definition and HIGH-gap filing.

**RC sign-off recommendation:** **APPROVE**

**Rationale:**

- C1–C5 remain **PASS** — no RC-blocking gaps (0 Critical, 0 BLOCKER).
- C6 **PASS** — all five HIGH gaps filed and remediated with verification evidence:
  - **R1 (T08):** [v0.10.1.8+1](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v0.10.1.8+1.md) — doc housekeeping workflow + scripts (GAP-DOCLIFE-STRUCT-001/002/003)
  - **R2 (T09):** [v0.10.1.9+1](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v0.10.1.9+1.md) — ADR-023 dual SoT sync (GAP-DOCLIFE-INTG-001)
  - **R3 (T10):** [v0.10.1.10+1](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v0.10.1.10+1.md) — DocumentLifecycleValidator fix (GAP-DOCLIFE-TEST-001)
- Minimum bar §1–§3 satisfied; §4 allows open MEDIUM/LOW backlog (R4–R7 proposed-only).
- Posture upgraded from **DEFER** (v0.10.1.6+1/+2) per follow-on RC review @ **v0.10.1.6+3**.

---

## Remediation Task Pattern

Non-blocking gaps must be **externalized** into Kanban (E02:S13:T06 / E04:S16:T06 pattern):

1. **Choose host:** Epic 10 for package issues; Epic 8 for cross-package tooling-automation enforcement.
2. **File task** with bidirectional links in the same session.
3. **Record metadata:** gap ID, severity, RC impact, priority band (`Must fix before GA` / `Should fix` / `Post-RC`).
4. **Wire to T05:** Update gap `Tracking` field to filed task ID.
5. **Implementation:** Separate IPP per code-change task (FR-083).

---

## Remediation Backlog

### R1 — Package Automation (Workflow + Scripts) (HIGH) — **COMPLETE** @ [v0.10.1.8+1](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v0.10.1.8+1.md)

| Field | Value |
| ----- | ----- |
| **Gaps** | GAP-DOCLIFE-STRUCT-001, GAP-DOCLIFE-STRUCT-002, GAP-DOCLIFE-STRUCT-003 |
| **Priority** | HIGH — Must fix before GA |
| **Host** | [E10:S01:T08](T08-implement-doc-housekeeping-workflow-and-scripts.md) |
| **RC impact** | REMEDIATED (T08 COMPLETE) |

---

### R2 — Architecture ADR Dual SoT Sync (HIGH) — **COMPLETE** @ [v0.10.1.9+1](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v0.10.1.9+1.md)

| Field | Value |
| ----- | ----- |
| **Gaps** | GAP-DOCLIFE-INTG-001 |
| **Priority** | HIGH — Must fix before GA |
| **Host** | [E10:S01:T09](T09-sync-architecture-adr-dual-sot.md) |
| **RC impact** | REMEDIATED (T09 COMPLETE) |

---

### R3 — DocumentLifecycleValidator Fix (HIGH) — **COMPLETE** @ [v0.10.1.10+1](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v0.10.1.10+1.md)

| Field | Value |
| ----- | ----- |
| **Gaps** | GAP-DOCLIFE-TEST-001 |
| **Priority** | HIGH — Must fix before GA |
| **Host** | [E10:S01:T10](T10-fix-document-lifecycle-validator.md) |
| **RC impact** | REMEDIATED (T10 COMPLETE) |

---

### R4 — Agent Rules and RW Integration Cohesion (MEDIUM) — Proposed

| Field | Value |
| ----- | ----- |
| **Gaps** | GAP-DOCLIFE-INTG-002, GAP-DOCLIFE-INTG-003 |
| **Priority** | MEDIUM — Should fix when feasible |
| **Proposed host** | E10 perpetual doc maintenance or E02 RW guide wave |
| **RC impact** | NON-BLOCKING |

---

### R5 — Behavioral Enforcement Gaps (MEDIUM) — Proposed

| Field | Value |
| ----- | ----- |
| **Gaps** | GAP-DOCLIFE-BEHV-001, GAP-DOCLIFE-BEHV-002 |
| **Priority** | MEDIUM — Should fix (BEHV-001 depends on T08) |
| **Proposed host** | E10:S01:T08 follow-on; optional mass frontmatter migration wave |
| **RC impact** | NON-BLOCKING |

---

### R6 — Documentation and Template Gaps (MEDIUM) — Proposed

| Field | Value |
| ----- | ----- |
| **Gaps** | GAP-DOCLIFE-DOC-001, GAP-DOCLIFE-DOC-002, GAP-DOCLIFE-DOC-003, GAP-DOCLIFE-DOC-004 |
| **Priority** | MEDIUM — Should fix when feasible |
| **Proposed host** | E10 doc maintenance wave; optional T01 baseline refresh |
| **RC impact** | NON-BLOCKING |

---

### R7 — Low / Informational Cleanup (LOW) — Proposed

| Field | Value |
| ----- | ----- |
| **Gaps** | GAP-DOCLIFE-OPS-001, GAP-DOCLIFE-DOC-005, GAP-DOCLIFE-INTG-004 |
| **Priority** | LOW — Post-RC |
| **Proposed host** | E10 doc maintenance; optional cross-package README updates |
| **RC impact** | INFORMATIONAL |

---

### Gap-to-Package Coverage Matrix

| Gap ID | R Package | Filed? |
| ------ | --------- | ------ |
| GAP-DOCLIFE-STRUCT-001 | R1 | Yes (T08) |
| GAP-DOCLIFE-STRUCT-002 | R1 | Yes (T08) |
| GAP-DOCLIFE-STRUCT-003 | R1 | Yes (T08) |
| GAP-DOCLIFE-INTG-001 | R2 | Yes (T09) |
| GAP-DOCLIFE-TEST-001 | R3 | Yes (T10) |
| GAP-DOCLIFE-INTG-002 | R4 | Proposed |
| GAP-DOCLIFE-INTG-003 | R4 | Proposed |
| GAP-DOCLIFE-BEHV-001 | R5 | Proposed |
| GAP-DOCLIFE-BEHV-002 | R5 | Proposed |
| GAP-DOCLIFE-DOC-001 | R6 | Proposed |
| GAP-DOCLIFE-DOC-002 | R6 | Proposed |
| GAP-DOCLIFE-DOC-003 | R6 | Proposed |
| GAP-DOCLIFE-DOC-004 | R6 | Proposed |
| GAP-DOCLIFE-OPS-001 | R7 | Proposed |
| GAP-DOCLIFE-DOC-005 | R7 | Proposed |
| GAP-DOCLIFE-INTG-004 | R7 | Proposed |

---

## Minimum Bar for RC Approval

RC sign-off may be **recommended** (upgrade from DEFER) when **all** of the following hold:

1. C1–C5 remain PASS (inventory, behavior, integration, artefact completeness, gap log).
2. C6 filed tasks (T08, T09, T10) reach **COMPLETE** with verification evidence.
3. No new RC-blocking gaps introduced during remediation.
4. MEDIUM backlog may remain open for post-RC scheduling.

---

## Verification Notes (V1–V8)

| ID | Result |
| -- | ------ |
| V1 | C1–C6 criteria present with requirement + evidence: **PASS** |
| V2 | APPROVE posture with rationale and T08–T10 release evidence: **PASS** |
| V3 | All 16 `GAP-DOCLIFE-*` in coverage matrix: **PASS** |
| V4 | HIGH gaps filed T08/T09/T10 with bidirectional links: **PASS** |
| V5 | T05 `validate_gap_log.py --strict` exit 0: **PASS** |
| V6 | T05 Tracking fields updated for filed hosts: **PASS** |
| V7 | T06 ↔ IPP ↔ Story ↔ T05 wiring: **PASS** |
| V8 | Story checklist T01–T06 COMPLETE after RW: **PASS** |

---

## References

- [IPP-E10S01T06-rc-sign-off-remediation.md](../../../../../implementation-cycles/IPP-E10S01T06-rc-sign-off-remediation.md)
- [T05 gap log](T05-create-gap-log-and-risk-assessment.md)
- [E10S01 orchestration plan](../../../../../implementation-cycles/E10S01-orchestration-plan.md)
- [E02:S13:T06 precedent](../../epic-02/story-13-workflow-management-package-implementation-review/T06-define-rc-sign-off-criteria-and-remediation-tasks.md)
- [E10:S01:T08](T08-implement-doc-housekeeping-workflow-and-scripts.md)
- [E10:S01:T09](T09-sync-architecture-adr-dual-sot.md)
- [E10:S01:T10](T10-fix-document-lifecycle-validator.md)
- [gap-log-schema.md](../../../../../architecture/standards-and-adrs/gap-log-schema.md)

---

## Version Anchor

✅ COMPLETE (0.10.1.6+3 — RC sign-off **APPROVE**)

---

## Migration Notes

Migrated from embedded Story section via `generate_task_doc.py` (FR-016 Wave 1 tooling).

**Source Story:** `docs/project-management/kanban/epics/epic-10/story-01-document-lifecycle-package-implementation-review.md`

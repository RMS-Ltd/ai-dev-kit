---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T22:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E02:S13:T05 — Planning: Gap Log and Risk Assessment (IPW)

**Host Task:** [`T05-create-gap-log-and-risk-assessment.md`](../kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/T05-create-gap-log-and-risk-assessment.md) **(E02:S13:T05)**  
**Planning for:** [T01 expectations](../kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/T01-expectations-baseline.md) · [T02 inventory](../kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/component-inventory-map.md) · [T03 behavior](../kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/workflow-behavior-validation-report.md) · [T04 integration](../kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/integration-alignment-report.md) · [E07:S07:T01 report](../kanban/epics/epic-07/story-07-code-reviews/T01-workflow-machinery-code-review-report.md)  
**Status:** Implemented (2026-06-05)

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements (ascertained)

| ID | Requirement | Source (FR/BR/Task) |
| -- | ----------- | ------------------- |
| RF1 | Consolidate T01–T04 + E07:S07:T01 §5–§6 into one schema-conformant gap log | Story AC; T05 deliverable |
| RF2 | Per-gap fields per [gap-log-schema.md](../architecture/standards-and-adrs/gap-log-schema.md): `GAP-WFMGT-{TYPE}-NNN` | E04:S16:T05 precedent |
| RF3 | Deduplicate E07 H/M/L ↔ T03 D* ↔ T04 I* ↔ inventory rows | IPW consolidation map |
| RF4 | **Summary of Direct Workflow Management Package Gaps** — package vs external separation | gap-log-schema §1 |
| RF5 | **Risk Assessment** + RC Impact Conclusion (conditional pass) | E07 §7; Story AC |
| RF6 | Flesh T05 stub: Scope, AC, Input, Approach, Next Steps | FR-042, FR-094 |
| RF7 | Wire IPP bidirectionally; update Story 13 checklist + AC | FR-077 |
| RF8 | Feed [T06](../kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/T06-define-rc-sign-off-criteria-and-remediation-tasks.md) RC sign-off input | Story pipeline |

### 1.2 Non-functional requirements (ascertained)

| ID | Requirement | Source (FR/BR/Task) |
| -- | ----------- | ------------------- |
| RNF1 | Doc-only — no package code fixes | T03/T04 precedent |
| RNF2 | Every gap cites evidence path or report ID | E07 pattern |
| RNF3 | Severity rollup: 0 Critical, 2 High, 10 Medium, 4 Low (16 gaps) | E07 taxonomy after dedup |
| RNF4 | `validate_gap_log.py --strict` exit 0 before RW | gap-log-schema §5 |

### 1.3 Invariants and boundaries

- **Invariants:** No functional edits under `packages/frameworks/workflow-mgt/`.
- **In scope:** Consolidation, classification, risk posture, kanban/story updates.
- **Out of scope:** Remediation implementation; RC sign-off checklist (T06); README/KB fixes.

---

## 2. Specification

### 2.1 Goal

Produce an authoritative **gap log and risk assessment** in the T05 task doc consolidating all E02:S13 review artefacts and E07 machinery findings into deduplicated, severity-ranked entries with **conditional RC posture** (no BLOCKER gaps; cohesion backlog scheduled in T06).

### 2.2 Specification mapping from ascertained requirements

Sixteen `### Gap N` entries in T05 task doc covering structural, behavioral, integration, documentation, test, and operational categories. Housing: gap log SoT = T05 task doc (E3/E4 T05 pattern).

### 2.3 Constraints

- BR-097: post-ship verification prescribes `RW E02:S13:T05 --art` only.
- H1 (CI pytest) recorded as **mitigated** per T03 D12.

### 2.4 Status transition intent (mandatory for IPW-derived implementation tasks)

- **Current task status:** TODO
- **Transition trigger to IN PROGRESS:** First non-planning implementation change (Step 1 of §4).
- **Transition trigger to COMPLETE:** All AC satisfied; V1–V7 PASS; `validate_gap_log.py --strict` pass; forensic marker via RW.
- **Atomic propagation requirement:** Task doc status and kboard row update in same RW Step 7 session.
- **Owner:** Implementation execution step.

### 2.5 ADR necessity decision (mandatory — IPW Phase 5.0)

| ID | Trigger | Y/N | Evidence |
| -- | ------- | --- | -------- |
| T1 | Alternatives | N | Single approach: consolidate into T05 task doc per gap-log-schema |
| T2 | Reversibility | N | Doc-only; one-PR revert |
| T3 | Blast radius | N | Confined to kanban/docs under story-13 |
| T4 | Precedent | N | E04:S16:T05 / E03:S04:T05 pattern |
| T5 | Constraint trade-off | N | Documents existing findings; no new choice |
| T6 | Governance contract | N | Does not alter RW/IPW/UKW gates |
| T7 | Supersedes | N | Extends T01–T04; no ADR contradiction |

**Outcome:** `EXEMPT`

| ID | Exemption (only if all T = N) | Pass? | Evidence |
| -- | --------------------------- | ----- | -------- |
| E1 | Single locus | Y | Files in §4.1 only |
| E2 | No new options | Y | gap-log-schema + E07 taxonomy |
| E3 | Reversible in one task | Y | Doc revert |
| E4 | Spec elsewhere | Y | gap-log-schema.md governs structure |
| E5 | Documented NONE | Y | §5.3 cites gap-log-schema |

---

## 3. Test design

| ID | Behavior / layer | Expected check |
| -- | ---------------- | -------------- |
| V1 | Gap log schema | `validate_gap_log.py --path T05 --strict` exit 0 |
| V2 | Severity rollup | 0 Critical; 2 High; 10 Medium; 4 Low documented in task doc |
| V3 | E07 traceability | H1–H3, M1–M6, L1–L4 mapped to gap IDs or mitigated note |
| V4 | T03/T04 crosswalk | D9/D10/D11, I4/I10/I11/I12 in gap Source fields |
| V5 | Package vs external | Summary: all gaps package-owned; no external blockers |
| V6 | Bidirectional links | T05 ↔ IPP ↔ Story ↔ T06 Input resolve |
| V7 | Pytest regression | `test_e2_s13_t05_passes` in `tests/test_validate_gap_log.py` |

---

## 4. Implementation plan

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| **1** | **[MANDATORY] Transition task `E02:S13:T05` status `TODO → IN PROGRESS`** | Task doc |
| 2 | Create IPP (this document) | IPP |
| 3 | Flesh T05 header: Scope, Input, Deliverable, Specification/Validation, Approach | Task doc |
| 4 | Write 16 `### Gap N` entries with `GAP-WFMGT-*` IDs | Task doc Gap Log |
| 5 | Write Summary of Direct Workflow Management Package Gaps | Task doc |
| 6 | Write Risk Assessment + RC Impact Conclusion | Task doc |
| 7 | Write Next Steps → T06 | Task doc |
| 8 | Run `validate_gap_log.py --strict` | PASS |
| 9 | Extend validator defaults + pytest for E02:S13 path | V7 |
| 10 | Wire IPP ↔ T05; cross-link T03/T04/E07/T06 | Bidirectional links |
| 11 | Update Story 13 checklist + story AC | Story doc |
| 12 | **`RW E02:S13:T05 --art`** | Release |
| **N** | **[MANDATORY] Reconcile task status** to `COMPLETE` + forensic marker if AC satisfied | Task + story + kboard |

**RW verification / FBU wave rule (BR-097):** Post-ship verification prescribes **`RW E02:S13:T05 --art`** only.

### 4.1 Files to create or modify

- CREATE: `docs/implementation-cycles/IPP-E02S13T05-gap-log-risk-assessment.md`
- UPDATE: `T05-create-gap-log-and-risk-assessment.md` (gap log SoT)
- UPDATE: `story-13-workflow-management-package-implementation-review.md`
- UPDATE: `tests/test_validate_gap_log.py`, `validate_gap_log.py`
- UPDATE (cross-link): `workflow-behavior-validation-report.md`, `integration-alignment-report.md`
- UPDATE (RW): `kboard.md`, changelog, version, README

### 4.2 Dependency order

1. T01–T04 + E07 inputs (read-only)
2. Gap synthesis → T05 task doc
3. Schema validation → story/IPP wiring → RW

---

## 5. Documentation deliverables

### 5.1 Existing documents to update

| Doc ID | Path | Scope of change | Tied to (RF/T/impl step) |
| ------ | ---- | --------------- | ------------------------ |
| D-U1 | `T05-create-gap-log-and-risk-assessment.md` | Full gap log + risk assessment | RF1–RF6 |
| D-U2 | `story-13-workflow-management-package-implementation-review.md` | Checklist + story AC | RF7 |
| D-U3 | `workflow-behavior-validation-report.md` | T05 output pointer | Step 10 |
| D-U4 | `integration-alignment-report.md` | T05 output pointer | Step 10 |
| D-U5 | `T06-define-rc-sign-off-criteria-and-remediation-tasks.md` | Input link to T05 | RF8 |

### 5.2 New documents to create

| Doc ID | Proposed path | Purpose | Tied to (RF/T/impl step) |
| ------ | ------------- | ------- | ------------------------ |
| D-C1 | `docs/implementation-cycles/IPP-E02S13T05-gap-log-risk-assessment.md` | IPP | RF6 |

### 5.3 Documentation gaps and explicit non-changes

| Gap / topic | Resolution |
| ----------- | ---------- |
| Remediation implementation | NONE — deferred T06 per FR-083 |
| README/KB fixes for doc gaps | NONE — tracked in gap log; fix in separate tasks |
| New ADR | NONE — EXEMPT per §2.5 |
| Separate companion gap-log file | NONE — SoT is T05 task doc per E3/E4 pattern |

---

## 6. Documentation housing

| Doc ID | Canonical path | Publication status | Lifecycle | Inbound links |
| ------ | -------------- | ------------------ | --------- | ------------- |
| D-C1 | `docs/implementation-cycles/IPP-E02S13T05-gap-log-risk-assessment.md` | NOT_APPLICABLE | evergreen | T05 Input/References |
| D-U1 | T05 task doc | NOT_APPLICABLE | evergreen | IPP host; T06 Input |
| D-U2 | Story 13 doc | NOT_APPLICABLE | evergreen | T05 checklist |

---

## 7. Success / verification criteria

- [x] 16 gap entries with full schema fields
- [x] Summary + Risk Assessment with conditional RC conclusion
- [x] `validate_gap_log.py --strict` passes
- [x] Bidirectional T05 ↔ IPP ↔ Story ↔ T06 links
- [x] Story AC "Gap log created with severity levels" ready for RW
- [x] No package functional code changed
- [x] Forensic release via `RW E02:S13:T05 --art`

---

## References

- [T05 task doc](../kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/T05-create-gap-log-and-risk-assessment.md)
- [gap-log-schema.md](../architecture/standards-and-adrs/gap-log-schema.md)
- [E07:S07:T01 report](../kanban/epics/epic-07/story-07-code-reviews/T01-workflow-machinery-code-review-report.md)
- [FR-050](../kanban/fbu/FR-050-workflows-directory-structure-reorganization.md)
- [FR-042](../kanban/fbu/FR-042-implementation-planning-workflow-ipw.md)

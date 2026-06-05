---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-04T22:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E09:S01:T03 — Planning: FR-032 Gap Comparison (Sequential) (IPW)

**Host Task:** [`T03-gap-analysis-fr032.md`](../project-management/kanban/epics/epic-09/story-01-rc-readiness-gap-analysis/T03-gap-analysis-fr032.md) **(E09:S01:T03)**  
**Planning for:** [FR-032](../project-management/kanban/fr-br/FR-032-release-candidate-readiness-gap-analysis.md)  
**Status:** Implemented (2026-06-04 — **v0.9.1.3+1** RW complete: T01/T02/T03 + follow-on index)

> **IPW (Implementation Planning Workflow):** Bidirectional wiring to the host task **Input** and **References** is mandatory (FR-042).

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements (ascertained)

| ID | Requirement | Source (FR/BR/Task) |
| -- | ----------- | ------------------- |
| RF1 | Produce **gap-comparison** artifact: T01 current state vs T02 RC=1 criteria; gaps, blockers, traceable recommendations | FR-032.3, FR-032.8 (slice), T03 AC1 |
| RF2 | Map gaps to **E:S:T / FR / epic** where possible | FR-032 traceability |
| RF3 | Cross-reference **framework-review dimensions** (E9:S02–S04 scope) | Story 1 overview |
| RF4 | **FR-032 implementing task** = E09:S01:T03; E05:S01:T32 historical | T03 AC2 |
| RF5 | **kboard** IPP link on completion; no MoSCOW edits in T03 | T03 AC3, RNF3 |

### 1.2 Non-functional requirements (ascertained)

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RNF1 | Evidence-based; cite T01/T02 + [dev-kit-versioning-policy.md](../governance/standards/dev-kit-versioning-policy.md) | FR-032 NF |
| RNF2 | Durable under repo `docs/` (E07:T01 report pattern) | FR-032 NF |
| RNF3 | **No MoSCOW board edits** in T03 — recommendations only (**T04** / UKW) | Sequential model |

### 1.3 Invariants and boundaries

- **Invariants:** Sequential delivery — T03 = FR-032.3 only; hard dependency on T01 + T02 artifacts.
- **In scope:** Gap matrix, blockers, recommendations tagged T04–T07 and E9:S02–S04.
- **Out of scope:** Full inventory (T01), RC=1 criteria authoring (T02), MoSCOW moves (T04), new task filing (T05), checklist template (T06), roadmap (T07), `VERSION_RC` → 1.

---

## 2. Specification

### 2.1 Goal

Deliver a **gap-comparison report** quantifying distance from RC=0 / current kanban reality to the RC=1 bar in T02, giving E9:S02–S04 and release planning a shared baseline.

### 2.2 Specification mapping

| RF | Deliverable element |
| -- | ------------------- |
| RF1 | Report §2–§7 per mandatory structure (inputs, criteria summary, matrix, dimensions, blockers, recommendations, traceability) |
| RF2 | Gap matrix **Linked work** column |
| RF3 | §4 Framework-dimension gaps |
| RF4 | FR header + E05:T32 historical note |
| RF5 | Boards updated on RW Step 7 only |

### 2.3 Constraints

- Do not re-catalog in T03 — boundary = T01 inventory.
- Primary report: `T03-gap-comparison-fr032-report.md` under Story 1 folder.

### 2.4 Status transition intent

- **Current:** TODO → IN PROGRESS on Step 1 → COMPLETE after report + RW.
- **BLOCKED** if T01/T02 missing (not applicable after prerequisite delivery).

### 2.5 ADR necessity decision

| ID | Trigger | Y/N | Evidence |
| -- | ------- | --- | -------- |
| T1–T7 | all | N | Doc-only analysis |
| E1–E5 | all | Y | Single report path; cites existing versioning policy |

**Outcome:** `EXEMPT` — §5.3 cites [dev-kit-versioning-policy.md](../governance/standards/dev-kit-versioning-policy.md).

---

## 3. Test design

**`--skip-tests` justification:** Doc-only; verification V1–V7 structural/manual.

| ID | Check |
| -- | ----- |
| V1 | Report at canonical path |
| V2 | Links to T01 + T02 |
| V3 | ≥1 matrix row per T02 category |
| V4 | MISSING/PARTIAL rows have E:S:T or “no task yet” |
| V5 | No MoSCOW edits in T03 diff |
| V6 | `validate_ipw_publication_wiring.py --requested E09S01T03` |
| V7 | FR-032 → E09:S01:T03 |

---

## 4. Implementation plan

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| **1** | **[MANDATORY]** E09:S01:T03 `TODO → IN PROGRESS` | Task doc |
| 2 | Publish T01 + T02 prerequisites | T01, T02 artifacts |
| 3 | Narrow T03 scope to FR-032.3; wire inputs | Task doc |
| 4 | Write gap-comparison report | D-C3 |
| 5 | Tag recommendations T04–T07 | Report §6 |
| 6 | Wire IPP ↔ T03 ↔ FR-032 | Links |
| 7 | `RW E09:S01:T03` (Step 7 four-surface) | Release |
| **N** | **[MANDATORY]** Reconcile → `COMPLETE` + forensic marker | Task doc |

### 4.1 Files to create or modify

| File | Action |
| ---- | ------ |
| `docs/implementation-cycles/IPP-E9S1T3-gap-comparison-fr032.md` | CREATE |
| `…/T01-current-state-inventory.md` | CREATE |
| `…/T02-rc1-criteria-definition.md` | CREATE |
| `…/T03-gap-comparison-fr032-report.md` | CREATE |
| `…/T03-gap-analysis-fr032.md` | UPDATE |
| `kboard.md`, `story-01-rc-readiness-gap-analysis.md` | UPDATE on RW |
| `FR-032-…md`, `E05:…/T32-…md` | UPDATE (optional) |

---

## 5. Documentation deliverables

| Doc ID | Path | Action |
| ------ | ---- | ------ |
| D-C1 | `docs/implementation-cycles/IPP-E9S1T3-gap-comparison-fr032.md` | CREATE |
| D-C2 | `…/T01-current-state-inventory.md` | CREATE |
| D-C3 | `…/T02-rc1-criteria-definition.md` | CREATE |
| D-C4 | `…/T03-gap-comparison-fr032-report.md` | CREATE |
| D-U1 | `…/T03-gap-analysis-fr032.md` | UPDATE |
| D-U2 | `kboard.md` | UPDATE (RW) |
| D-NONE | Versioning policy, new ADR | NONE — cite only |

---

## 6. Documentation housing

| Doc ID | Path | Publication | Lifecycle |
| ------ | ---- | ----------- | --------- |
| D-C1 | `docs/implementation-cycles/IPP-E9S1T3-gap-comparison-fr032.md` | NOT_APPLICABLE | evergreen |
| D-C2–D-C4 | Story 1 folder paths above | NOT_APPLICABLE | evergreen |
| D-U1 | T03 task doc | NOT_APPLICABLE | evergreen |

---

## 7. Success / verification criteria

- [x] T01 + T02 published and linked
- [x] T03 gap report with matrix + T04–T07 tags
- [x] FR-032.3 traceability in report
- [x] IPP ↔ task wiring
- [x] RW E09:S01:T03 (**v0.9.1.3+1** / SemVer **v0.4.885+1**)
- [x] T04–T07 not marked complete by T03

---

## References

- [T03 task doc](../project-management/kanban/epics/epic-09/story-01-rc-readiness-gap-analysis/T03-gap-analysis-fr032.md)
- [FR-032](../project-management/kanban/fr-br/FR-032-release-candidate-readiness-gap-analysis.md)
- [Story 1](../project-management/kanban/epics/epic-09/story-01-rc-readiness-gap-analysis.md)
- [Epic 9](../project-management/kanban/epics/epic-09/epic-09.md)
- [T01 workflow machinery review](../project-management/kanban/epics/epic-07/story-07-code-reviews/T01-workflow-machinery-code-review-report.md)
- [dev-kit-versioning-policy.md](../governance/standards/dev-kit-versioning-policy.md)

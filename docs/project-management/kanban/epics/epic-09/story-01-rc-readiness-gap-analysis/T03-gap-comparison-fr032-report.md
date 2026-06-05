---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-04T22:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E09:S01:T03 — FR-032.3 Gap Comparison Report (RC=0 → RC=1)

**Task:** [E09:S01:T03](T03-gap-analysis-fr032.md) · **FR:** [FR-032](../../../fr-br/FR-032-release-candidate-readiness-gap-analysis.md)  
**Snapshot:** 2026-06-04 UTC  
**IPP:** [IPP-E09S01T03](../../../../implementation-cycles/IPP-E09S01T03-gap-comparison-fr032.md)

---

## 1. Inputs and snapshot date

| Input | Path |
| ----- | ---- |
| T01 Current state | [T01-current-state-inventory.md](T01-current-state-inventory.md) |
| T02 RC=1 criteria | [T02-rc1-criteria-definition.md](T02-rc1-criteria-definition.md) |
| Active board | [kboard.md](../../../kboard.md) (2026-06-04, v0.1.2.14+1) |
| Active board | [kboard.md](../../../kboard.md) |
| Workflow RC signals | [E07:S07:T01 workflow machinery report](../../epic-07/story-07-code-reviews/T01-workflow-machinery-code-review-report.md) |

---

## 2. RC=1 criteria summary (from T02)

MVP RC=1 requires: governance/versioning gates (A2–A3), workflow-mgt framework review (B7), kanban install sign-off (D1), CI/release validators (C1–C2), FR-032 programme completion including MoSCOW alignment (E1–E4). Full multi-framework B1–B8 and book tie-in (F1) are post-MVP unless escalated.

---

## 3. Gap matrix

| Criterion | Status | Evidence (current) | Linked work |
| --------- | ------ | ------------------ | ----------- |
| **A1** RC=1 version declaration | MISSING | `VERSION_RC = 0` | E09:S01:T07 (roadmap milestone) |
| **A2** SemVer registry injective | PARTIAL | Registry exists; ongoing task-touch releases | E03:S02; RW validators |
| **A3** RW/UKW/IPW packaged parity + RC sign-off | PARTIAL | E02:S13 open; E07:T01 findings backlog | E02:S13, E9:S03 |
| **B1–B2** Kanban framework review | MISSING | E9:S02 TODO | E9:S02 |
| **B3–B6** Kanban package mgmt/install/update | PARTIAL | Install work in flight; migration FR-007 TODO | E06:S09:T16, E04:S07 |
| **B7** Workflow-mgt framework review | MISSING | E9:S03 TODO; machinery review done | E9:S03, E07:S07:T01 |
| **B8** Numbering-versioning review | MISSING | E9:S04 TODO | E9:S04 |
| **C1** CI pytest for workflow scripts | MISSING | BR-058 OPEN | E08:S03:T04 |
| **C2** Release readiness gates on RC cut | PARTIAL | Validators exist; not run as RC=1 bundle | RW on epic/9 branch |
| **C3** MoSCOW reflects RC blockers | MISSING | **M = 0**, RC work in C band | **E09:S01:T04** |
| **D1** Install lowercase kanban sign-off | PARTIAL | E06:S09:T16 WAITING #17 | E06:S09:T16 |
| **D2** Migration utilities | MISSING | FR-007 TODO (C) | E04:S07:T02 |
| **D3** Adopter dependency tracking | PARTIAL | FR-003 task filed (C) | E01:S02:T14 |
| **E1** FR-032 T01–T07 programme | PARTIAL | T01–T02 + T03 (this report); T04–T07 TODO | E09:S01:T04–T07 |
| **E2** RC readiness checklist | MISSING | T06 not started | E09:S01:T06 |
| **E3** Roadmap to RC=1 | MISSING | T07 not started | E09:S01:T07 |
| **E4** M/S populated for RC tranche | MISSING | Only S = BR-086; E09 in C | E09:S01:T04 |
| **F1** Book integration doc | MISSING | No artifact | Defer or E9 epic goal |

**Summary:** 0 MET, 7 PARTIAL, 10 MISSING (MVP-focused rows).

---

## 4. Framework-dimension gaps

| Dimension | Gap | Primary owner |
| --------- | --- | ------------- |
| Framework review (objective/docs/components) | No completed E9:S02–S04 reviews | E9:S02, S03, S04 |
| Package management | Versioning/install docs scattered; CLI FR-030 TODO | E06:S08, packages READMEs |
| Package maintenance | Perpetual E02:S16 tasks; no RC maintenance SOP | E9:S03 + E02:S13 |
| Package installation | BR-086 not signed off; BR-006/FR-007 open | E06:S09:T16, E04:S07 |
| Update management | Adopter update guides partial (FR-003 in progress) | E01:S02:T14, INSTALL docs |
| Book project | Not documented | Epic 9 goal §6 — low priority for MVP |

---

## 5. Blockers and dependencies

1. **Empty Must Have band** — RC-critical work (E9:S02–S04, E02:S13 gate, FR-032 T04–T07) not elevated; blocks credible RC=1 narrative (**→ T04**).
2. **E06:S09:T16 / BR-086** — Install path sign-off gates adoption confidence (**S band**, WAITING).
3. **E02:S13 RC sign-off** — Workflow package not closed; A3/C2 depend on it (**E02**, feeds E9:S03).
4. **E08:S03:T04 / BR-058** — CI pytest gap undermines C1.
5. **Sequential FR-032** — T04–T07 must follow this report before E1/E2/E3 criteria close.

**Dependency chain:** D1 + A3 → B7 → B1–B2 → `VERSION_RC` consideration (A1) per T07 roadmap.

---

## 6. Recommendations (tagged for follow-on tasks)

### For **E09:S01:T04** (Task prioritization review)

- Elevate **E09:S02**, **E09:S03**, **E02:S13** (or explicit RC umbrella task) to **Must Have**.
- Keep **E06:S09:T16** in **Should Have** until #17 sign-off; then reassess.
- Batch **E04** Could-Have items — do not promote wholesale; use FR-032 MVP filter.
- Document **why M=0** today: RC programme tasks filed as C/TODO, not absence of critical work.

### For **E09:S01:T05** (Missing work identification)

- File detached task docs for **T04–T07** if continuing sequential model.
- Consider **E9:S06** “RC cut checklist automation” only after T06 template exists.
- Link **E07:S07:T01** remediation backlog items into E02:S13 / E9:S03 scope.

### For **E09:S01:T06** (RC readiness checklist)

- Instantiate checklist from T02 CAT-A–F as copy-paste RC sign-off sheet.
- Include per-framework rows from E9:S02–S04 when those stories complete.

### For **E09:S01:T07** (Roadmap to RC=1)

- **Phase 1:** Close D1 (BR-086), C1 (BR-058), E02:S13 MVP gate.
- **Phase 2:** E9:S03 workflow RC review + E9:S02 kanban RC review (parallel where safe).
- **Phase 3:** T04 MoSCOW apply + T06 checklist + T07 timeline.
- **Phase 4:** `VERSION_RC → 1` only after E1–E4 MET and release branch RW green.

### For **E9:S02–S04** (framework RC reviews)

- Use this gap matrix as input charter; do not duplicate T01 inventory.
- Consume [workflow machinery report](../../epic-07/story-07-code-reviews/T01-workflow-machinery-code-review-report.md) for E9:S03.

---

## 7. FR-032.3 traceability

| Requirement | Section | Satisfied |
| ----------- | ------- | --------- |
| FR-032.3 Perform gap analysis | §3–§5 | **Y** |
| FR-032.8 Recommendations (slice) | §6 | **Y** (full FR-032.8 closes when T04–T07 complete) |

---

## 8. Why no M/S tasks today (executive note)

The active board’s **empty Must Have** band is a **prioritization artifact**, not proof of RC readiness. Epic 9 RC work and E02:S13 gate remain TODO or Could Have while `VERSION_RC=0`. **T04** should correct MoSCOW; **T03** does not apply board edits per sequential scope.

---

## References

- [T01](T01-current-state-inventory.md) · [T02](T02-rc1-criteria-definition.md) · [T03 task](T03-gap-analysis-fr032.md)
- [Story 1](../story-01-rc-readiness-gap-analysis.md) · [Epic 9](../epic-09.md)

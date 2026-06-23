---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-04T22:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E09:S01:T02 — RC=1 Criteria Definition (FR-032.2)

**Task ID:** E09:S01:T02  
**Status:** COMPLETE  
**Deliverable for:** [E09:S01:T03](T03-gap-analysis-fr032.md) (FR-032.3 prerequisite)  
**Code:** E09S01T02

---

## 1. RC semantics (authoritative)

From [dev-kit-versioning-policy.md](../../../../governance/standards/dev-kit-versioning-policy.md):

- **`VERSION_RC = 0`:** Development snapshot (current repo default).
- **`VERSION_RC ≥ 1`:** Release Candidate — externally visible SemVer MAJOR tracks RC; internal `RC.EPIC.STORY.TASK+BUILD` still applies for kanban attribution.

**RC=1 for ai-dev-kit** means: the project declares candidate readiness to tag and communicate a **1.x** SemVer line for framework consumers—not merely “no open TODOs on the board.”

---

## 2. RC=1 criteria categories (measurable)

Each category maps to gap-matrix rows in [T03 report](T03-gap-comparison-fr032-report.md).

### CAT-A — Governance and versioning

| ID | Criterion | Measurable check |
| -- | --------- | ---------------- |
| A1 | Version file may use `VERSION_RC = 1` with documented cut criteria | Policy + epic 9 sign-off |
| A2 | SemVer registry injective; no PATCH collisions | `validate_semver_registry_injective.py` green on release |
| A3 | RW/UKW/IPW gates documented and parity-tested (packaged vs live) | E02:S13 RC sign-off |

### CAT-B — Framework package readiness (E9:S02–S04)

Per [epic-09.md](../epic-09.md) and Story 1 framework scope:

| ID | Criterion | Framework |
| -- | --------- | --------- |
| B1 | Objective + documentation completeness reviewed | Kanban (E9:S02) |
| B2 | Component justification/definition/behavior validated | Kanban |
| B3 | Package management (versioning, deps, distribution) documented | Each framework |
| B4 | Package maintenance (fixes, lifecycle) documented | Each framework |
| B5 | Installation: clean install + active project (detect paths, backup, map data) | Each framework |
| B6 | Update management in adopting projects documented | Each framework |
| B7 | Same B1–B6 for workflow-mgt | E9:S03 |
| B8 | Same B1–B6 for numbering-versioning | E9:S04 |

### CAT-C — Quality and automation

| ID | Criterion | Measurable check |
| -- | --------- | ---------------- |
| C1 | CI runs workflow/kanban pytest gate | BR-058 / E08:S03:T04 closed |
| C2 | `validate_release_readiness.py` Gates 1–11 pass on release branch | RW Step 9 |
| C3 | Active boards lean; MoSCOW reflects true RC blockers | FR-109; M/S populated for RC path |

### CAT-D — Adoption and install

| ID | Criterion | Measurable check |
| -- | --------- | ---------------- |
| D1 | Fresh + lowercase kanban install path signed off | E06:S09:T16 / BR-086 |
| D2 | Migration utilities for pre-existing kanban (FR-007) or explicit deferral with risk | E04:S07 |
| D3 | Adopter dependency tracking documented (FR-003) | E01:S02:T14 |

### CAT-E — Strategic kanban programme

| ID | Criterion | Measurable check |
| -- | --------- | ---------------- |
| E1 | FR-032 programme complete (T01–T07) | Story 1 checklist |
| E2 | RC readiness checklist published (T06) | Artifact exists |
| E3 | Roadmap to RC=1 with milestones (T07) | Artifact exists |
| E4 | MoSCOW reflects M/S RC-critical work (T04) | kboard M/S non-empty for RC tranche |

### CAT-F — Book and narrative (optional RC=1 nice-to-have)

| ID | Criterion | Notes |
| -- | --------- | ----- |
| F1 | Book project integration opportunities documented | Epic 9 goals §6; not blocking technical RC=1 |

---

## 3. Minimum viable RC=1 scope (MVP)

**Must pass before `VERSION_RC → 1`:**

1. **CAT-A** A2, A3 (workflow RC gate)
2. **CAT-B** B7 at minimum (workflow-mgt — primary consumer surface) + B1–B2 kanban install path (D1)
3. **CAT-C** C1, C2
4. **CAT-D** D1
5. **CAT-E** E1–E4

**Deferrable to post–RC=1.0:** Full B3–B6 on all three frameworks, F1, E21 localization, broad E04 Could-Have backlog.

---

## 4. FR-032.2 satisfaction

| Requirement | Status |
| ----------- | ------ |
| FR-032.2 Define RC=1 criteria | **Satisfied** by categories CAT-A–F and MVP §3 |

---

## References

- [T01 inventory](T01-current-state-inventory.md)
- [Story 1](../story-01-rc-readiness-gap-analysis.md)
- [FR-032](../../../fbu/FR-032-release-candidate-readiness-gap-analysis.md)
- [E02:S13 workflow package review](../../epic-02/story-13-workflow-management-package-implementation-review.md)

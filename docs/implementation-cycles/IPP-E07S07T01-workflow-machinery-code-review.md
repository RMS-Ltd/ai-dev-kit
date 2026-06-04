---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-03T20:30:00Z
expires_at: null
housekeeping_policy: keep
---

# E07:S07:T01 — Planning: Comprehensive Workflow Machinery Code Review (IPW)

**Host Task:** [`T01-comprehensive-workflow-machinery-code-review.md`](../project-management/kanban/epics/epic-07/story-07-code-reviews/T01-comprehensive-workflow-machinery-code-review.md) **(E07:S07:T01)**  
**Planning for:** [FR-107](../project-management/kanban/fr-br/FR-107-comprehensive-workflow-machinery-code-review.md)  
**Status:** Implemented (2026-06-03 — review report published; release via `RW E07:S07:T01`)

> **IPW (Implementation Planning Workflow):** Bidirectional wiring to the host task **Input** and **References** is mandatory (FR-042).

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements (ascertained)

| ID | Requirement | Source (FR/BR/Task) |
| -- | ----------- | ------------------- |
| RF1 | Complete inventory of workflow-related code under `packages/frameworks/workflow-mgt/` (scripts, workflows, config, tests) with ownership tags (RW/UKW/CMW/shared) | FR-107:R01, T01 AC1 |
| RF2 | Map inventory to [E02:S13:T01](../project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/T01-expectations-baseline.md) expectations; flag undocumented or orphan components | FR-107:R02, T01 AC2 |
| RF3 | Duplication and fragmentation analysis (overlapping validators, parallel kanban update paths, duplicate YAML/rule sources) | FR-107:R03, T01 AC3 |
| RF4 | Efficiency review: consolidation candidates, shared utility extractions, obsolete code paths (with evidence) | FR-107:R04, T01 AC4 |
| RF5 | Severity-ranked code review report (Critical / High / Medium / Low) with recommended remediation tasks | FR-107:R05, T01 AC5 |
| RF6 | Cross-link findings to [E02:S13 T05/T06](../project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review.md) gap log and RC sign-off criteria | FR-107:R06, T01 AC6 |

### 1.2 Non-functional requirements (ascertained)

| ID | Requirement | Source (FR/BR/Task) |
| -- | ----------- | ------------------- |
| RNF1 | Review uses project code review standards ([E07:S02](../project-management/kanban/epics/epic-07/story-02-code-review-standards-and-processes.md), [code-review-standards-and-guidelines.md](../architecture/standards-and-adrs/code-review-standards-and-guidelines.md)) | FR-107:NF01 |
| RNF2 | Report is durable under repo `docs/` (not IDE-local only) | FR-107:NF02 |
| RNF3 | No implementation changes in the review phase except trivial doc fixes; code remediation is follow-on tasks with IPP per FR-083 | FR-107:NF03, T01 scope |

### 1.3 Invariants and boundaries

- **Invariants:** Analysis-only task; review output feeds E02:S13 RC gate; does not duplicate E02:S13:T08 doc/YAML parity work.
- **In scope:** Package scripts (~107 production `.py`), workflows (24 YAML), registry, `canonical-rw-steps.yaml`, portable rule excerpts, live integration (`.cursorrules`, `rw-config.yaml`, pre-commit stamp hook, CI `build_all_packages.sh`).
- **Out of scope:** Re-doing [E02:S13:T08](../project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/T08-sync-packaged-workflows-with-live-repo-implementation.md) parity sync; deep `packages/frameworks/kanban/` policy corpus; runtime code remediation without separate IPP.

---

## 2. Specification

### 2.1 Goal

Deliver an evidence-based engineering code review of the Workflow Management package and its supporting machinery—exposing fragmentation, duplication, dead paths, and efficiency opportunities—so [E02:S13](../project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review.md) RC sign-off can proceed with a severity-ranked remediation backlog, without changing runtime behavior in this task.

### 2.2 Specification mapping from ascertained requirements

| RF | Specification element |
| -- | --------------------- |
| RF1 | Component inventory table: path, owner tag (RW/UKW/CMW/PVW/ICW/IPW/Intake/PIR/shared), type (script/YAML/config/test) |
| RF2 | Expectations gap table: T01 baseline row ↔ inventory row ↔ documented Y/N ↔ orphan flag |
| RF3 | Fragmentation matrix: duplication class, locations, impact, post-T08 status |
| RF4 | Efficiency section: each item with file evidence, effort/impact, recommended action |
| RF5 | Findings by severity + remediation backlog (proposed E:S:T or FR/BR) |
| RF6 | E02:S13 RC gate summary mapping findings to T05 gap log and T06 sign-off themes |

**Review method (ordered):**

1. Inventory — tree walk + classify by workflow ownership and shared infrastructure
2. Expectations map — row-level match against E02:S13:T01
3. Execution trace — RW Step 7/9, UKW Step 6/8, CMW, pre-commit, `.cursorrules` validator lists vs packaged YAML
4. Duplication scan — parallel kanban paths, EST parsing copies, flat vs nested workflow YAML
5. Efficiency/dead code — grep unreferenced modules, legacy defaults, CI/pre-commit coverage gaps
6. Synthesize — severity matrix + remediation proposals

### 2.3 Constraints

- Use [E02:S13:T08](../project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/T08-sync-packaged-workflows-with-live-repo-implementation.md) sync report as input; do not re-audit parity already closed there.
- Primary report lives under Epic 7 Story 007 (see §6 D2); not in IDE plan folders.
- Remediation items that require code changes must be filed as separate tasks with IPW/IPP (FR-083).

### 2.4 Status transition intent (mandatory for IPW-derived implementation tasks)

- **Current task status:** TODO
- **Transition trigger to IN PROGRESS:** First non-planning implementation change (Step 1 of §4 — status transition when review execution begins).
- **Transition trigger to COMPLETE:** AC1–AC6 satisfied with evidence in published report; forensic marker via `RW E07:S07:T01`.
- **Atomic propagation requirement:** Task doc status and `kboard.md` row update in the same change set/session on status transitions.
- **Owner:** Implementation execution (§4); IPW creation does not transition task to IN PROGRESS.

### 2.5 ADR necessity decision (mandatory — IPW Phase 5.0)

Criteria: [`ipw-adr-necessity-checklist.md`](../architecture/standards-and-adrs/ipw-adr-necessity-checklist.md) (FR-100).

| ID | Trigger | Y/N | Evidence |
| -- | ------- | --- | -------- |
| T1 | Alternatives | N | Single review methodology per E07:S07 program; no architectural fork |
| T2 | Reversibility | N | Analysis-only; rollback = revert report docs |
| T3 | Blast radius | N | No runtime/package code changes in scope |
| T4 | Precedent | N | Story charter defines pattern; this task is first execution instance |
| T5 | Constraint trade-off | N | No security/performance/versioning policy choice |
| T6 | Governance contract | N | Does not alter RW/IPW/UKW gates |
| T7 | Supersedes | N | No ADR contradiction |

**Outcome:** `EXEMPT`

| ID | Exemption (only if all T = N) | Pass? | Evidence |
| -- | --------------------------- | ----- | -------- |
| E1 | Single locus | Y | Decision confined to docs listed in §4.1 |
| E2 | No new options | Y | Implements FR-107, E07:S07 ACs, existing E07:S02 standards only |
| E3 | Reversible in one task | Y | Rollback is revert of report/kanban doc updates |
| E4 | Spec elsewhere | Y | IPP §2 + task ACs are authoritative spec |
| E5 | Documented NONE | Y | §5.3 cites [code-review-standards-and-guidelines.md](../architecture/standards-and-adrs/code-review-standards-and-guidelines.md) |

---

## 3. Test design

**`--skip-tests` justification:** Deliverables are **analysis documents**, not executable code. Verification is structural and checklist-based (V1–V7 below), not new pytest modules.

| ID | Behavior / layer | Expected check |
| -- | ---------------- | -------------- |
| V1 | Component inventory completeness | Covers all top-level `scripts/` subdirs + all `workflows/*/` packages | RF1 / AC1 |
| V2 | Expectations mapping | Every E02:S13:T01 expected workflow/component has inventory row or explicit orphan flag | RF2 / AC2 |
| V3 | Fragmentation matrix | Lists ≥3 duplication classes (validators, kanban paths, YAML copies) with file evidence | RF3 / AC3 |
| V4 | Efficiency recommendations | Each item cites ≥1 file path | RF4 / AC4 |
| V5 | Severity findings | Every Critical/High finding has proposed remediation row | RF5 / AC5 |
| V6 | RC linkage | Report includes E02:S13 RC gate section cross-referencing T05/T06 themes | RF6 / AC6 |
| V7 | Test coverage note (informational) | Report notes isolated `validation/pytest.ini` vs co-located tests / CI gap | RNF1 |

---

## 4. Implementation plan

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| **1** | **[MANDATORY] Transition E07:S07:T01 `TODO → IN PROGRESS`** in task doc; update `Last updated` | Task doc `Status` = `IN PROGRESS` |
| 2 | Confirm IPP linked from task **Input** and **References** | Bidirectional wiring |
| 3 | Load inputs: E02:S13:T01, E02:S13:T08 sync report, E07:S02 standards, [IPP-E02S13T08](IPP-E02S13T08-sync-packaged-workflows-live-spec.md) | Input checklist |
| 4 | Run automated inventory (tree + script count by subdir); draft ownership tags | Inventory draft |
| 5 | Map inventory → T01 expectations; mark orphans | Expectations gap table |
| 6 | Trace RW/UKW/CMW execution paths; document validator/kanban script call graph | Execution trace notes |
| 7 | Build fragmentation/duplication matrix (include post-T08 flat vs nested YAML) | Matrix section |
| 8 | Efficiency/dead-code pass (grep imports, legacy paths, CI/pre-commit gaps) | Efficiency section |
| 9 | Write severity-ranked findings + remediation backlog | Findings + backlog |
| 10 | Publish report at [T01-workflow-machinery-code-review-report.md](../project-management/kanban/epics/epic-07/story-07-code-reviews/T01-workflow-machinery-code-review-report.md); link from task doc | D2 |
| 11 | Update E02:S13 story Dependencies / T05–T06 pointers with review status (doc-only) | D5 |
| 12 | Run verification checks V1–V6 against report | Verification notes in task doc |
| 13 | `RW E07:S07:T01` when ACs evidenced (kanban init on E7 branch if needed) | Version marker |
| **N** | **[MANDATORY] Reconcile E07:S07:T01 status** to actual state: `COMPLETE` + `✅ COMPLETE (v{version})` if AC1–AC6 satisfied; `IN PROGRESS` if ongoing; `BLOCKED` + reason if blocked. Update `Last updated`. | Task doc reflects actual state |

### 4.1 Files to create or modify

| File | Action |
| ---- | ------ |
| `docs/implementation-cycles/IPP-E07S07T01-workflow-machinery-code-review.md` | CREATE (this document) |
| `docs/project-management/kanban/epics/epic-07/story-07-code-reviews/T01-workflow-machinery-code-review-report.md` | CREATE |
| `docs/project-management/kanban/epics/epic-07/story-07-code-reviews/T01-comprehensive-workflow-machinery-code-review.md` | UPDATE |
| `docs/project-management/kanban/epics/epic-07/story-07-code-reviews.md` | UPDATE (on complete) |
| `docs/project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review.md` | UPDATE (RC gate pointer) |
| `docs/project-management/kanban/kboard.md` / `fbuboard.md` | UPDATE on RW Step 7 |

**No changes** to `packages/frameworks/workflow-mgt/` Python/YAML except trivial doc fixes if discovered (RNF3).

### 4.2 Dependency order

1. IPP + task wiring (planning gate)
2. Load T01 baseline + T08 sync report (avoid duplicate parity work)
3. Inventory → expectations map → execution trace → fragmentation → efficiency
4. Synthesize report (D2)
5. Wire E02:S13 RC pointers
6. Verify V1–V6 → RW → status reconciliation

### 4.3 Documentation implementation steps

1. Create D2 report skeleton with mandatory sections (§2.2)
2. Fill inventory and matrix during review passes
3. Add executive summary and remediation backlog last
4. Link D2 from task doc; update E02:S13 Dependencies

---

## 5. Documentation deliverables

### 5.1 Existing documents to update

| Doc ID | Path | Scope of change | Tied to (RF/T/impl step) |
| ------ | ---- | --------------- | ------------------------ |
| D-U1 | `docs/project-management/kanban/epics/epic-07/story-07-code-reviews/T01-comprehensive-workflow-machinery-code-review.md` | IPP link, report link, verification notes | Step 2, 10 |
| D-U2 | `docs/project-management/kanban/epics/epic-07/story-07-code-reviews.md` | Checklist forensic marker on complete | Step N |
| D-U3 | `docs/project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review.md` | RC gate / review consumption pointer | Step 11 |
| D-U4 | `docs/project-management/kanban/kboard.md` | E07:S07:T01 status/version on RW | Step 13 |
| D-U5 | `docs/project-management/kanban/fbuboard.md` | FR-107 row IPP link | Step 13 |

### 5.2 New documents to create

| Doc ID | Proposed path | Purpose | Tied to (RF/T/impl step) |
| ------ | ------------- | ------- | ------------------------ |
| D-C1 | `docs/implementation-cycles/IPP-E07S07T01-workflow-machinery-code-review.md` | IPW planning package | IPW |
| D-C2 | `docs/project-management/kanban/epics/epic-07/story-07-code-reviews/T01-workflow-machinery-code-review-report.md` | Primary code review report | RF5, Step 10 |

### 5.3 Documentation gaps and explicit non-changes

| Gap / topic | Resolution |
| ----------- | ---------- |
| No package-local machinery review report | **D-C2 CREATE** — authoritative report under Story 007 |
| Package README update | **NONE** — review does not change package API; remediation tasks may update later |
| New ADR | **NONE** — §2.5 EXEMPT; governed by [code-review-standards-and-guidelines.md](../architecture/standards-and-adrs/code-review-standards-and-guidelines.md) and FR-107 |
| Docusaurus publication | **NONE** — kanban/report docs are repo SoT per BR-066 |

---

## 6. Documentation housing

| Doc ID | Canonical path | Publication status | Publication N/A reason | Lifecycle | Inbound links to add |
| ------ | -------------- | ------------------ | ---------------------- | --------- | -------------------- |
| D-C1 | `docs/implementation-cycles/IPP-E07S07T01-workflow-machinery-code-review.md` | NOT_APPLICABLE | Repo SoT planning artifact | evergreen | T01 Input, References |
| D-C2 | `docs/project-management/kanban/epics/epic-07/story-07-code-reviews/T01-workflow-machinery-code-review-report.md` | NOT_APPLICABLE | Kanban task deliverable | evergreen | T01 References; E02:S13 Dependencies |
| D-U1 | `docs/project-management/kanban/epics/epic-07/story-07-code-reviews/T01-comprehensive-workflow-machinery-code-review.md` | NOT_APPLICABLE | Kanban task doc | evergreen | — |
| D-U2–D-U5 | Kanban board/story paths above | NOT_APPLICABLE | RW Step 7 surfaces | evergreen | RW Step 7 |

---

## 7. Success / verification criteria

- [x] AC1: Component inventory with ownership tags published in D2
- [x] AC2: Expectations mapping vs E02:S13:T01 complete; orphans flagged
- [x] AC3: Fragmentation/duplication matrix published with evidence
- [x] AC4: Efficiency recommendations with file citations
- [x] AC5: Severity-ranked report + remediation backlog
- [x] AC6: E02:S13 RC linkage section present
- [x] Verification V1–V6 pass against D2
- [x] Bidirectional links: IPP ↔ T01; T01 ↔ FR-107
- [x] All §5 CREATE/UPDATE items implemented or deferred with reason
- [x] §2.5 ADR outcome EXEMPT with E1–E5 evidence
- [x] §4 Step 1 executed at review start; Step N complete **v0.7.7.1+1**
- [x] FR-107 IMPLEMENTED on RW attributing E07:S07:T01 (**v0.7.7.1+1**)

---

## Appendix A — Known review surface (pre-execution)

| Area | Scale | Priority pass |
| ---- | ----- | --------------- |
| `scripts/validation/` | ~23 prod + 9 tests | Step 9 validators, release-readiness |
| `scripts/kanban/` | ~15 prod + 4 tests | RW Step 7 vs UKW Step 6 |
| `scripts/` root | ~35 prod + 17 tests | `update_kanban_docs.py`, installers, triggers |
| `workflows/` | 24 YAML + flat legacy | Registry vs nested SoT (post-T08) |
| `scripts/changelog/`, `journal/`, `version/` | CMW, forensics, semver | Shared config loading |
| Tests | 36 co-located; isolated `validation/pytest.ini` | CI pytest gate gap |

---

## References

- [T01 task doc](../project-management/kanban/epics/epic-07/story-07-code-reviews/T01-comprehensive-workflow-machinery-code-review.md)
- [FR-107](../project-management/kanban/fr-br/FR-107-comprehensive-workflow-machinery-code-review.md)
- [E07:S07 – Code Reviews](../project-management/kanban/epics/epic-07/story-07-code-reviews.md)
- [E02:S13:T01 expectations baseline](../project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/T01-expectations-baseline.md)
- [E02:S13:T08 sync report](../project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/T08-sync-packaged-workflows-with-live-repo-implementation.md)
- [code-review-standards-and-guidelines.md](../architecture/standards-and-adrs/code-review-standards-and-guidelines.md)
- [ipw-adr-necessity-checklist.md](../architecture/standards-and-adrs/ipw-adr-necessity-checklist.md)
- [IPP-E02S13T08](IPP-E02S13T08-sync-packaged-workflows-live-spec.md)

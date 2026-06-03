---
lifecycle: proposed
ttl_days: null
created_at: 2026-06-03T20:12:00Z
expires_at: null
housekeeping_policy: keep
---

# Feature Request: Comprehensive Workflow Machinery Code Review

**Type:** Feature Request (FR)  
**ID:** FR-107  
**Submitted:** 2026-06-03  
**Submitted By:** User (via agent — E02:S13 RC review; surfaced during E02:S13:T08 IPP planning)  
**Priority:** HIGH (Should Have — MoSCOW **S**)  
**Status:** IMPLEMENTED  
**Implemented:** v0.7.7.1+1 (2026-06-03, RW -k E07:S07:T01 --art)  
**Implementing Task:** [E07:S07:T01](../epics/Epic-7/Story-007-code-reviews/T01-comprehensive-workflow-machinery-code-review.md)

---

## Summary

Conduct a **full engineering code review** of the Workflow Management package and its supporting machinery — all workflows (RW, UKW, CMW, PVW, ICW/IPW, Intake, PIR), validators, kanban scripts, installers, and agent execution paths — to identify fragmentation, duplication, dead code, and **efficiency gains** before RC sign-off.

---

## Problem Statement

The workflow framework has **evolved incrementally** over many epics and FRs. Documentation parity work ([FR-106](FR-106-packaged-workflows-sync-with-live-repo-implementation.md) / [E02:S13:T08](../epics/Epic-2/Story-013-workflow-management-package-implementation-review/T08-sync-packaged-workflows-with-live-repo-implementation.md)) addresses spec drift, but the **underlying code and script surface** has never received a holistic review.

**Symptoms / risks:**

1. **Fragmentation** — Overlapping validators, kanban update paths (RW Step 7 vs UKW vs one-off scripts), and duplicate workflow YAML or rule excerpts.
2. **Unknown dead weight** — Legacy paths, deprecated scripts, or one-off helpers still referenced in docs or CI.
3. **Missed efficiency** — Repeated logic across `scripts/validation/`, `scripts/kanban/`, and workflow-specific modules; opportunities for shared utilities or clearer ownership boundaries.
4. **RC blind spots** — [E02:S13:T02–T06](../epics/Epic-2/Story-013-workflow-management-package-implementation-review.md) plan inventory and gap analysis but lack a dedicated **code-level** review pass with remediation backlog.

**Impact:** RC sign-off for `packages/frameworks/workflow mgt/` may approve a package that is **document-aligned** but still **operationally fragmented**, increasing maintainer cost and adopter confusion.

---

## Scope

### In scope

- **Workflow definitions and registry:** `workflows/`, `workflow-registry.yaml`, `canonical-rw-steps.yaml`, portable trigger excerpts, `.claude/commands/`.
- **Execution machinery:** Validation scripts (`scripts/validation/`), kanban scripts (`scripts/kanban/`), version/changelog/GitHub helpers, installers, deterministic vs agentic entry points.
- **Cross-cutting concerns:** Config loading (`rw-config.yaml`), path resolution, shared parsing (E:S:T tokens), logging/forensics (FR-059), pre-commit hooks touching workflow code.
- **Review outputs:** Component inventory mapped to expectations ([E02:S13:T01](../epics/Epic-2/Story-013-workflow-management-package-implementation-review/T01-expectations-baseline.md)), fragmentation/duplication matrix, severity-ranked findings, efficiency recommendations, and remediation task proposals (feeds [E02:S13:T05–T06](../epics/Epic-2/Story-013-workflow-management-package-implementation-review.md)).

### Out of scope

- **Doc/YAML sync implementation** — owned by [FR-106](FR-106-packaged-workflows-sync-with-live-repo-implementation.md) / **E02:S13:T08** (E07:S07:T01 may cite T08 as baseline input).
- **Large-scale rewrites without IPP** — findings that require code changes must spawn follow-on tasks with IPW/IPP per [FR-083](FR-083-global-ipw-gated-implementation-contract.md).
- **Non-workflow epics** — Kanban framework policy docs under `packages/frameworks/kanban/` except where workflow scripts integrate.

---

## Functional Requirements

- [ ] **FR-107:R01** — Complete inventory of workflow-related code under `packages/frameworks/workflow mgt/` (scripts, workflows, config, tests) with ownership tags (RW/UKW/CMW/shared).
- [ ] **FR-107:R02** — Map inventory to [E02:S13:T01](../epics/Epic-2/Story-013-workflow-management-package-implementation-review/T01-expectations-baseline.md) expectations; flag undocumented or orphan components.
- [ ] **FR-107:R03** — Duplication and fragmentation analysis (overlapping validators, parallel kanban update paths, duplicate YAML/rule sources).
- [ ] **FR-107:R04** — Efficiency review: identify consolidation candidates, shared utility extractions, and obsolete code paths (with evidence).
- [ ] **FR-107:R05** — Severity-ranked **code review report** (Critical / High / Medium / Low) with recommended remediation tasks.
- [ ] **FR-107:R06** — Cross-link findings to [E02:S13:T05–T06](../epics/Epic-2/Story-013-workflow-management-package-implementation-review.md) gap log and RC sign-off criteria.

---

## Non-Functional Requirements

- [ ] **FR-107:NF01** — Review uses project code review standards ([E07:S02](../epics/Epic-7/Story-002-code-review-standards-and-processes.md)) where applicable.
- [ ] **FR-107:NF02** — Report is durable under `docs/` or task doc (not IDE-local only).
- [ ] **FR-107:NF03** — No implementation changes in the review phase unless trivial doc fixes; code remediation is follow-on tasks.

---

## Acceptance Criteria

- [x] **AC1:** All FR-107:R01–R06 delivered (mirror [E07:S07:T01](../epics/Epic-7/Story-007-code-reviews/T01-comprehensive-workflow-machinery-code-review.md) AC1–AC6).
- [x] **AC2:** Bidirectional links: FR-107 ↔ E07:S07:T01.
- [x] **AC3:** Code review report published and linked from task doc; at least one remediation item proposed for RC-critical gaps (if any found).
- [x] **AC4:** FR-107 status updated to IMPLEMENTED on verified delivery via RW release attributing E07:S07:T01 (**v0.7.7.1+1**).

---

## Dependencies / Ordering

- **E02:S13:T01** — expectations baseline (complete).
- **E02:S13:T08** — packaged/live sync (in progress); E07:S07:T01 should consume T08 sync report as input, not duplicate parity work.
- **E02:S13:T02–T06** — may be **refined or partially superseded** by E07:S07:T01 findings; review feeds T05/T06 directly.
- **FR-083 / IPW gate** — remediation implementation requires linked IPP per finding.

---

## Related

- [E07:S07:T01](../epics/Epic-7/Story-007-code-reviews/T01-comprehensive-workflow-machinery-code-review.md)
- [E07:S07 – Code Reviews](../epics/Epic-7/Story-007-code-reviews.md)
- [Story-013](../epics/Epic-2/Story-013-workflow-management-package-implementation-review.md)
- [FR-106](FR-106-packaged-workflows-sync-with-live-repo-implementation.md)
- [FR-056](FR-056-standardize-packaged-workflow-documentation-and-instructions.md)
- [FR-049](FR-049-canonical-rw-step-list-single-source-of-truth.md)
- [FR-050](FR-050-workflows-directory-structure-reorganization.md)
- [E07:S02](../epics/Epic-7/Story-002-code-review-standards-and-processes.md) — code review standards

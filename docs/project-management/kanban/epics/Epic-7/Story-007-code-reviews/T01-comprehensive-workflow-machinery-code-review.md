---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-03T20:12:00Z
expires_at: null
housekeeping_policy: keep
---

# E07:S07:T01 – Comprehensive Workflow Machinery Code Review

**Task ID:** E07:S07:T01  
**Status:** ✅ COMPLETE  
**Priority:** HIGH  
**Estimated Effort:** Large  
**Created:** 2026-06-03  
**Last updated:** 2026-06-03 (v0.7.7.1+1 — RW -k **E07:S07:T01 --art**: machinery code review report + kanban init)  
**Version Anchor:** v0.7.7.1+1  
**Epic:** E07 – Codebase Maintenance and Review  
**Story:** E07:S07 – Code Reviews  
**Code:** E07S07T01  
**Source FR:** [FR-107](../../../fr-br/FR-107-comprehensive-workflow-machinery-code-review.md)

---

## Scope

Perform a **full engineering code review** of the Workflow Management package (`packages/frameworks/workflow mgt/`) and all **supporting machinery** that workflows depend on — not documentation parity alone ([E02:S13:T08](../../Epic-2/Story-013-workflow-management-package-implementation-review/T08-sync-packaged-workflows-with-live-repo-implementation.md)), but **code structure, duplication, dead paths, and efficiency opportunities** across the evolved codebase.

**In scope:**

1. **All packaged workflows** — RW, UKW, CMW, PVW, ICW/IPW, Intake, PIR; YAML, registry, canonical steps, portable rule excerpts, Claude commands.
2. **Script surface** — `scripts/validation/`, `scripts/kanban/`, version/changelog/GitHub/release helpers, installers, workflow doc validators.
3. **Integration touchpoints** — `rw-config.yaml` loading, pre-commit hooks, pytest coverage for workflow scripts, shared EST parsing utilities.
4. **Fragmentation analysis** — Parallel kanban update paths (RW Step 7 vs UKW vs ad-hoc scripts), overlapping validators, legacy/confidentia-era defaults, duplicate workflow YAML copies.
5. **Efficiency review** — Consolidation candidates, shared modules, obsolete code with evidence, maintainer-cost reduction proposals.
6. **RC feed-forward** — Severity-ranked findings and remediation backlog for [E02:S13:T05–T06](../../Epic-2/Story-013-workflow-management-package-implementation-review.md) (workflow package RC sign-off).

**Out of scope:**

- Implementing remediation (spawn follow-on tasks + IPP per [FR-083](../../../fr-br/FR-083-global-ipw-gated-implementation-contract.md)).
- Re-doing [E02:S13:T08](../../Epic-2/Story-013-workflow-management-package-implementation-review/T08-sync-packaged-workflows-with-live-repo-implementation.md) doc/YAML sync work (use T08 sync report as input).
- Deep review of `packages/frameworks/kanban/` policy corpus except workflow integration scripts.

---

## Problem statement

Workflow machinery has grown organically across many releases. [E02:S13:T02–T06](../../Epic-2/Story-013-workflow-management-package-implementation-review.md) outline an RC review sequence but **no task has executed a holistic code review** of scripts and execution paths. Without it, RC sign-off risks approving a spec-aligned but **operationally fragmented** package.

---

## Inputs

- **IPP:** [`IPP-E07S07T01-workflow-machinery-code-review.md`](../../../../../implementation-cycles/IPP-E07S07T01-workflow-machinery-code-review.md)
- Code review standards: [E07:S02](../Story-002-code-review-standards-and-processes.md)
- Expectations baseline: [E02:S13:T01](../../Epic-2/Story-013-workflow-management-package-implementation-review/T01-expectations-baseline.md)
- Packaged/live sync evidence: [E02:S13:T08](../../Epic-2/Story-013-workflow-management-package-implementation-review/T08-sync-packaged-workflows-with-live-repo-implementation.md) sync report
- Source FR: [FR-107](../../../fr-br/FR-107-comprehensive-workflow-machinery-code-review.md)
- Package root: `packages/frameworks/workflow mgt/`
- Live repo integration: root `.cursorrules`, `rw-config.yaml`, `.pre-commit-config.yaml` (workflow-related hooks)

---

## Deliverables

1. **Component inventory** — Scripts, workflows, config, tests with RW/UKW/CMW/shared ownership tags.
2. **Expectations mapping** — Inventory vs [E02:S13:T01](../../Epic-2/Story-013-workflow-management-package-implementation-review/T01-expectations-baseline.md) baseline; orphan/undocumented components flagged.
3. **Fragmentation & duplication matrix** — Overlapping responsibilities, duplicate sources of truth, stale entry points.
4. **Efficiency recommendations** — Consolidation, deletion, or refactor proposals with effort/impact notes.
5. **Code review report** — Severity-ranked findings (Critical / High / Medium / Low) with recommended follow-on tasks.
6. **RC linkage** — Summary section for [E02:S13:T05–T06](../../Epic-2/Story-013-workflow-management-package-implementation-review.md) gap log and sign-off criteria.

---

## Approach

1. **Inventory** — Tree walk of `packages/frameworks/workflow mgt/`; classify by workflow and shared infrastructure.
2. **Map to expectations** — Cross-reference E02:S13:T01; note gaps in docs vs code.
3. **Trace execution paths** — RW Step 7/9, UKW Step 6/8, CMW, validators invoked from `.cursorrules` / pre-commit / CI.
4. **Detect duplication** — Compare validator lists, kanban update scripts, path defaults, YAML copies (post-T08).
5. **Efficiency pass** — Identify shared extraction opportunities and dead code (grep + import graph where practical).
6. **Report & backlog** — Publish report; propose remediation tasks (may include new FRs); feed E02:S13 T05/T06.

**Suggested review order:** shared config/parsing → validation layer → kanban scripts → per-workflow YAML/commands → installers.

---

## Acceptance Criteria

- [x] **AC1:** Complete component inventory with ownership tags (FR-107:R01). → [Report §1](./T01-workflow-machinery-code-review-report.md#1-component-inventory)
- [x] **AC2:** Inventory mapped to E02:S13:T01 expectations; orphans documented (FR-107:R02). → [Report §2](./T01-workflow-machinery-code-review-report.md#2-expectations-gap-table-e02s13t01)
- [x] **AC3:** Fragmentation/duplication matrix published (FR-107:R03). → [Report §3](./T01-workflow-machinery-code-review-report.md#3-fragmentation-and-duplication-matrix)
- [x] **AC4:** Efficiency recommendations with evidence (FR-107:R04). → [Report §4](./T01-workflow-machinery-code-review-report.md#4-efficiency-recommendations)
- [x] **AC5:** Severity-ranked code review report with remediation proposals (FR-107:R05). → [Report §5–§6](./T01-workflow-machinery-code-review-report.md#5-findings-by-severity)
- [x] **AC6:** Findings cross-linked to E02:S13 T05/T06 scope (FR-107:R06). → [Report §7](./T01-workflow-machinery-code-review-report.md#7-e02s13-rc-gate-summary-feeds-t05t06)

---

## Verification (IPP §3 V1–V7)

| Check | Result |
| ----- | ------ |
| V1–V7 | PASS — see [Report §8](./T01-workflow-machinery-code-review-report.md#8-verification-checklist-ipp-3) |

**Release:** Task remains **IN PROGRESS** until **`RW E07:S07:T01`** attributes version and reconciles to **COMPLETE**.

---

## Dependencies

- **Standards:** [E07:S02](../Story-002-code-review-standards-and-processes.md).
- **Soft:** [E02:S13:T01](../../Epic-2/Story-013-workflow-management-package-implementation-review/T01-expectations-baseline.md) (baseline).
- **Input:** [E02:S13:T08](../../Epic-2/Story-013-workflow-management-package-implementation-review/T08-sync-packaged-workflows-with-live-repo-implementation.md) sync report (avoid duplicating parity audit).
- **Downstream:** [E02:S13:T05–T06](../../Epic-2/Story-013-workflow-management-package-implementation-review.md) consume this review output.
- **Blocked by IPW gate** for any remediation implementation (review phase is planning/analysis).

---

## Related Work

- **[FR-107](../../../fr-br/FR-107-comprehensive-workflow-machinery-code-review.md)** — source feature request
- [E02:S13](../../Epic-2/Story-013-workflow-management-package-implementation-review.md) — RC sign-off consumer
- [FR-106](../../../fr-br/FR-106-packaged-workflows-sync-with-live-repo-implementation.md) — packaged/live doc sync (E02:S13:T08)
- [FR-050](../../../fr-br/FR-050-workflows-directory-structure-reorganization.md) — possible remediation outcome
- [E02:S16:T03](../../Epic-2/Story-016-perpetual-ongoing-workflow-operations/T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md) — ongoing maintenance after RC

---

## References

- **IPP:** [`IPP-E07S07T01-workflow-machinery-code-review.md`](../../../../../implementation-cycles/IPP-E07S07T01-workflow-machinery-code-review.md)
- **Report (deliverable):** [`T01-workflow-machinery-code-review-report.md`](./T01-workflow-machinery-code-review-report.md)
- Story: [`Story-007-code-reviews.md`](../Story-007-code-reviews.md)
- Package: `packages/frameworks/workflow mgt/`

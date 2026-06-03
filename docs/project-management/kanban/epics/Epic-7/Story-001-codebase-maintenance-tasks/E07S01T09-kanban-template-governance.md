---
lifecycle: evergreen
ttl_days: null
created_at: 2026-03-16T14:20:00Z
expires_at: null
housekeeping_policy: keep
---

# Task E07:S01:T09 – Kanban Template Governance & UXR Ownership

**Task ID:** E07:S01:T09  
**Status:** ✅ COMPLETE (implementation; pending maintainer verification — **v0.7.1.9+5**)  
**Last updated:** 2026-06-01 (UXR-005 spacing validator, corpus pass, RW/UKW hooks)  
**Priority:** HIGH  
**Version Anchor:** v0.7.1.9+5  
**Related UXR:** [UXR-005 – Kanban Board Formatting & Governance](../../../fr-br/UXR-005-kanban-board-formatting-and-governance.md)  
**Historical registry (link only):** [E07:S00:T05](../Story-000-uxr-repo/T05-uxr-005-repository-anchor.md)  
**Governance:** [BR-076](../../../fr-br/BR-076-e7-s00-must-not-host-concrete-tasks.md) — RESOLVED via [E04:S19:T10](../../Epic-4/Story-019-fr-br-uxr-abstract-governance-and-intake/T10-e7-s00-detasking-abstract-space-enforcement-br076.md)  
**Story:** [E7:S01 – Codebase Maintenance Tasks](../Story-001-codebase-maintenance-tasks.md)

Publication Status: NOT_APPLICABLE  
Publication N/A Reason: Consolidated IPP — [`IPP-E07S01T09-kanban-template-governance-uxr005.md`](../../../../../implementation-cycles/IPP-E07S01T09-kanban-template-governance-uxr005.md)

---

## Objective

Operationalize UXR-005 by codifying and enforcing the “one blank line between multi-line MoSCOW entries” rule across all Kanban documents, and by making the UXR workflow the canonical owner of Kanban template/document maintenance.

---

## Input

- **[UXR-005](../../../fr-br/UXR-005-kanban-board-formatting-and-governance.md)** — Kanban board formatting & governance findings and acceptance criteria.
- **[IPP-E07S01T09](../../../../../implementation-cycles/IPP-E07S01T09-kanban-template-governance-uxr005.md)** — IPW package (spec, tests, implementation waves).
- **Registry:** [E07:S00:T05](../Story-000-uxr-repo/T05-uxr-005-repository-anchor.md); kanban boards, `kanban-board-guide.md`, validators.

---

## Deliverable

- Updated Kanban documentation and templates reflecting spacing rule + ownership statement.
- `validate_kanban_moscow_spacing.py` + pytest suite; delegated from `validate-documentation-consistency.py`.
- Evidence: [`uxr-005-spacing-20260601.md`](../../../../maintenance/logs/uxr-005-spacing-20260601.md).

---

## Acceptance Criteria

- [x] **AC1:** All in-scope boards pass `validate_kanban_moscow_spacing.py --strict` (kboard, fbuboard, guide, structure, index).
- [x] **AC2:** Kanban guide documents rule with before/after examples and UXR ownership ([kanban-board-guide.md](../../../kanban-board-guide.md) § Formatting Governance).
- [x] **AC3:** RW agent guide references **E07:S01:T09** + validator ([release-workflow-agent-execution.md](../../../../../packages/frameworks/workflow%20mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md)).
- [x] **AC4:** Validator prevents regression; Gate 10 (warn) on release readiness; UKW guide documents post-MoSCOW check.
- [x] **AC5:** Evidence bundle linked above; validator PASS log in maintenance log.

---

## RW runbook snippet

```bash
python "packages/frameworks/workflow mgt/scripts/validation/validate_kanban_moscow_spacing.py" --project-root . --strict
```

Attribute kanban spacing work to **E07:S01:T09** (`RW E07:S01:T09` or `RW E07:S01:T09 --art` when version file differs).

---

## Kanban documentation setup (historical)

**v0.7.1.9+1 / +2 (2026-03-31):** Registry wiring and validator path fixes (RW -k).  
**v0.7.1.9+5 (2026-06-01):** UXR-005 implementation — spacing validator, corpus fix, policy/RW/UKW integration.

---

## References

- [IPP-E07S01T09](../../../../../implementation-cycles/IPP-E07S01T09-kanban-template-governance-uxr005.md)
- [IPP-E04S19T10](../../../../../implementation-cycles/IPP-E04S19T10-e7-s00-detasking-br076.md) (E7:S00 detasking context)
- [kanban-governance-policy.md](../../../../../packages/frameworks/kanban/policies/kanban-governance-policy.md) — MoSCOW spacing subsection

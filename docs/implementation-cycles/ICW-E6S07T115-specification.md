---
lifecycle: draft
ttl_days: null
created_at: 2026-04-20T13:18:00Z
expires_at: null
housekeeping_policy: keep
---

# ICW Specification — E6:S07:T115 last-modified stamp forensic integrity guardrails

## Context

Board workflows currently rewrite `Last modified` timestamps broadly during synchronization passes, even when no substantive work occurred on the linked task/FR/BR/UXR record. This destroys temporal-drift signal and forensic usefulness.

## Goal

Define enforceable semantics and guardrails so row-level `Last modified` stamps change only when substantive underlying work evidence exists.

## In Scope

- Normative definition of `substantive` vs `non_substantive` updates.
- UKW/RW board-mutation guardrails for stamp preservation.
- Evidence-driven timestamp derivation from linked canonical records.
- Validator/audit requirements for detecting synthetic mass stamp churn.
- Regression scenarios for rewrite-only vs work-driven updates.

## Out of Scope

- Retroactive rewrite of historical timestamps without evidence.
- Broad board taxonomy or MoSCOW-priority policy redesign.
- Unrelated workflow refactors outside timestamp integrity paths.

## Acceptance Criteria

1. Policy explicitly states board rewrite alone must not mutate per-row `Last modified`.
2. Update paths mutate stamps only when linked source evidence is substantive.
3. Validation detects anomalous mass timestamp churn without source deltas.
4. UKW/RW outputs include stamp-integrity audit counters for forensic review.
5. Regression tests prove no-op rewrites keep timestamps stable.

## Dependencies

- [UXR-009](../project-management/kanban/fr-br/UXR-009-last-modified-stamp-forensic-integrity-and-drift-protection.md)
- [Task E6:S07:T115](../project-management/kanban/epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management/T115-last-modified-stamp-forensic-integrity-guardrails.md)
- [Task E6:S07:T110](../project-management/kanban/epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management/T110-ukw-fbuboard-scope-and-drift-concurrency-controls.md)

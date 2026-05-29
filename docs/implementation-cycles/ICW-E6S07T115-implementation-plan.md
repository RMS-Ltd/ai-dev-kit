---
lifecycle: draft
ttl_days: null
created_at: 2026-04-20T13:18:00Z
expires_at: null
housekeeping_policy: keep
---

# ICW Implementation Plan — E6:S07:T115 last-modified stamp forensic integrity guardrails

## Plan

### Phase 1 — Contract and policy locking

1. Publish normative timestamp semantics (`substantive` vs `non_substantive`) in governance docs.
2. Specify immutable behavior for rewrite-only board operations.
3. Define source-of-truth evidence hierarchy for timestamp derivation.

### Phase 2 — Workflow guardrail implementation design

1. Add classification layer in board update paths before stamp mutation.
2. Gate mutation behind substantive-evidence checks.
3. Add anomaly detection for mass stamp churn without source deltas.
4. Add integrity audit counters to UKW/RW output summaries.

### Phase 3 — Verification and regression

1. Add targeted tests for no-op rewrite stability.
2. Add tests for legitimate substantive updates.
3. Add tests for anomaly detection behavior.
4. Validate canonical + alias board paths behave identically.

## Risks and Mitigations

- **Risk:** Overly strict gating suppresses legitimate updates.
  - **Mitigation:** define explicit positive evidence categories and allow-list transitions.
- **Risk:** Existing workflows depend on rewrite-driven timestamps.
  - **Mitigation:** introduce clear migration note and validator diagnostics before enforcement hardening.
- **Risk:** Drift between policy text and script behavior.
  - **Mitigation:** require validator-backed checks plus regression tests as release gates.

## Completion Definition

Task is implementation-ready complete when policy is explicit, guardrail design is codified, and tests/validators demonstrate rewrite-only operations do not alter row timestamps.

## References

- [ICW Specification](./ICW-E6S07T115-specification.md)
- [ICW Test Design](./ICW-E6S07T115-test-design.md)
- [Task E6:S07:T115](../project-management/kanban/epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management/T115-last-modified-stamp-forensic-integrity-guardrails.md)

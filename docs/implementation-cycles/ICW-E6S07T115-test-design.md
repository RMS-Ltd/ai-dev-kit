---
lifecycle: draft
ttl_days: null
created_at: 2026-04-20T13:18:00Z
expires_at: null
housekeeping_policy: keep
---

# ICW Test Design — E6:S07:T115 last-modified stamp forensic integrity guardrails

## Test Objectives

Verify that timestamp updates are evidence-driven, rewrite-immune, and auditable.

## Test Matrix

1. **No-op rewrite stability**
   - Scenario: run board sort/format/reconciliation with no underlying record deltas.
   - Expected: zero row-level `Last modified` changes.

2. **Substantive change propagation**
   - Scenario: update linked task/FR/BR/UXR with substantive delta (status transition, AC progress, evidence/version anchor update).
   - Expected: only corresponding board row(s) timestamp changes.

3. **Mass-churn anomaly detection**
   - Scenario: attempted run proposes widespread stamp mutation without linked-source changes.
   - Expected: validator emits blocking failure or high-severity warning and reports anomaly counters.

4. **Audit observability**
   - Scenario: run UKW/RW board update with mixed substantive and non-substantive rows.
   - Expected: output includes `rows_audited`, `substantive_updates`, `suppressed_non_substantive_updates`, `anomaly_flag`.

5. **Backward compatibility**
   - Scenario: canonical + legacy board aliases present.
   - Expected: integrity guardrails apply consistently, independent of filename alias path.

## Evidence Capture

- Before/after row snapshots for targeted scenarios.
- Command outputs from validators and board update runs.
- Per-run integrity counters and anomaly status.

## References

- [ICW Specification](./ICW-E6S07T115-specification.md)
- [Task E6:S07:T115](../project-management/kanban/epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management/T115-last-modified-stamp-forensic-integrity-guardrails.md)

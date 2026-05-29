---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-20T21:10:00Z
expires_at: null
housekeeping_policy: keep
---

# Task T63 - RW Recovery Journal and Rollback Contract (BR-038)

**Status:** COMPLETE ✅ COMPLETE (v0.6.6.63+2)  
**Priority:** HIGH  
**Estimated Effort:** Medium  
**Created:** 2026-04-20  
**Last updated:** 2026-05-17  
**Version:** N/A  
**Task ID:** E6:S06:T63  
**Code:** E6:S06:T63  
**Associated BR:** [BR-038](../../../fr-br/BR-038-release-workflow-micromanagement-and-tool-discovery-issues.md)

---

## Input

- [BR-038](../../../fr-br/BR-038-release-workflow-micromanagement-and-tool-discovery-issues.md) active unresolved scope.
- Current RW execution and validation contract.
- Existing workflow executor placeholders for checkpoint/rollback semantics.
- [IPW Plan: E6:S06:T63 — Planning: Spec, Tests, Implementation Plan](../../../../../../implementation-cycles/IPP-E6S06T63-rw-recovery-journal.md)

## Problem Statement

RW is operationally stable, but failure recovery is not yet deterministic. When a run fails mid-sequence, operators need explicit run logs and a reproducible recovery contract to avoid state ambiguity and manual guesswork.

## Deliverable

- Deterministic **RW run journal** contract (per-step state, command/action, exit status, touched artifacts, timestamps).
- **Recovery report** contract produced on failure with actionable next steps.
- **Rollback/compensation contract** specifying what can be automatically reverted, what needs manual reconciliation, and safety guardrails.
- Documentation and acceptance tests for rerun/recovery behavior.

## Scope

1. Define RW run identity and journal schema.
2. Define required checkpoint events and failure snapshots.
3. Define rollback/compensation semantics and safety boundaries.
4. Define operator-facing recovery procedure and expected outputs.

## Acceptance Criteria

- [x] **AC1:** RW journals each step deterministically with run ID, timestamp, and step outcome. — `RWJournal` class in `packages/frameworks/workflow mgt/scripts/journal/rw_journal.py`.
- [x] **AC2:** Failure path emits a machine-readable and human-readable recovery report. — `RecoveryReport` class generates Markdown + JSON; sample artifacts in `docs/journals/`.
- [x] **AC3:** Rollback/compensation rules are explicitly documented (automatic vs manual surfaces). — `docs/journals/ROLLBACK_CONTRACT.md` and `RollbackContract` class.
- [x] **AC4:** Rerun behavior after failed runs is deterministic and test-covered. — Integration test `test_rw_integration.py` simulates failure and verifies deterministic rerun guidance; 28 journal tests pass.
- [x] **AC5:** BR-038, T63, and Story 006 references are wired and consistent. — BR-038 R4/R5/R6 marked resolved; bidirectional links wired.

## References

- [BR-038](../../../fr-br/BR-038-release-workflow-micromanagement-and-tool-discovery-issues.md)
- [T02 historical anchor](T02-fix-release-workflow-micromanagement-issues.md)
- [IPW Plan: E6:S06:T63 — Planning: Spec, Tests, Implementation Plan](../../../../../../implementation-cycles/IPP-E6S06T63-rw-recovery-journal.md)

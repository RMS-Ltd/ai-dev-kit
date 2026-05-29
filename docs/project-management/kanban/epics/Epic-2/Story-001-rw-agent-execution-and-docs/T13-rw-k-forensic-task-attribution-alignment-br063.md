---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-07T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Task E2:S01:T13 - RW -k forensic task attribution alignment (BR-063)

**Task ID:** E2:S01:T13  
**Status:** COMPLETE  
**Priority:** CRITICAL  
**Created:** 2026-04-07  
**Last updated:** 2026-04-07 (runtime hardening complete: `rw-k` mismatch guard + `--art` reconciliation path + tests/docs updates)  
**Version:** v0.2.1.13+2  
**Code:** E2S01T13

---

## Summary

Enforce forensic task attribution consistency for `RW -k` so requested task ids and release version anchors cannot diverge silently.

---

## Input

- [BR-063](../../../fr-br/BR-063-rw-k-task-attribution-drift-between-requested-task-and-version-anchor.md)
- `packages/frameworks/workflow mgt/scripts/validation/validate_rw_task_intent.py`
- `packages/frameworks/workflow mgt/scripts/validation/validate_version_bump.py`
- RW execution docs and runbook semantics for `RW -k`

---

## Deliverable

1. File and wire BR-063 + housed Story 1 task for attribution-drift remediation.
2. Clean existing forensic mismatch for `v0.2.1.10+6` so release artifacts use one canonical task anchor.
3. Implement `rw-k` mismatch hard-fail by default and explicit `--art` adoption path.
4. Enforce adopted-task alignment in version validation and add regression coverage.

---

## Acceptance Criteria

- [x] BR-063 filed with clear reproduction, impact, and proposed solution.
- [x] Task housed under E2:S01 and bidirectionally linked.
- [x] Existing `v0.2.1.10+6` release records corrected to canonical task anchor (`T10`).
- [x] Board/story references updated to reflect current forensic state.
- [x] `rw-k` mismatch now fails unless `--art` is provided intentionally.
- [x] Validator/test/docs contract updated for `--art` propagation and single-anchor traceability.

---

## Links

- [BR-063](../../../fr-br/BR-063-rw-k-task-attribution-drift-between-requested-task-and-version-anchor.md)
- [Story E2:S01](../Story-001-rw-agent-execution-and-docs.md)

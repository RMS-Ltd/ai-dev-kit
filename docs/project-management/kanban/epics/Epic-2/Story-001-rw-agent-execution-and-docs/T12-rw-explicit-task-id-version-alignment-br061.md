---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-07T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Task E2:S01:T12 - RW explicit task-id version alignment (BR-061)

**Task ID:** E2:S01:T12  
**Status:** COMPLETE  
**Priority:** CRITICAL  
**Created:** 2026-04-07  
**Last updated:** 2026-04-10 (RW release anchor refreshed via `RW E2:S01:T12 --art`)  
**Version Anchor:** v0.2.1.12+3  
**Version:** v0.2.1.12+3  
**Code:** E2S01T12

---

## Summary

Resolve BR-061 by reducing false Step 1 friction when RW is invoked with explicit `E:S:T`, while preserving branch safety and typo/intent guardrails.

---

## Input

- [BR-061](../../../fr-br/BR-061-rw-explicit-task-id-requires-manual-version-alignment.md)
- `packages/frameworks/workflow mgt/scripts/validation/validate_branch_context.py`
- `packages/frameworks/workflow mgt/scripts/validation/validate_rw_task_intent.py`
- RW execution docs and `.cursorrules` trigger semantics
- [ICW-E2S01T12-specification](../../../../../implementation-cycles/ICW-E2S01T12-specification.md)
- [ICW-E2S01T12-test-design](../../../../../implementation-cycles/ICW-E2S01T12-test-design.md)
- [ICW-E2S01T12-implementation-plan](../../../../../implementation-cycles/ICW-E2S01T12-implementation-plan.md)

---

## Deliverable

1. Explicit-task RW flow no longer hard-blocks solely due to pre-Step-2 version epic mismatch in valid branch context.
2. Safety controls remain: wrong-branch contamination and typo-risk checks still block as intended.
3. Regression coverage for epic-switch + explicit task-id workflows.

---

## Acceptance Criteria

- [x] `RW E:S:T` on valid target branch does not require manual `version.py` pre-alignment to proceed.
- [x] Step 1/1b guardrails still block invalid branch or ambiguous/incorrect task intent.
- [x] Documentation updated to describe explicit-task alignment behavior.
- [x] Regression tests added for BR-061 repro scenario.

---

## Links

- [BR-061](../../../fr-br/BR-061-rw-explicit-task-id-requires-manual-version-alignment.md)
- [Story E2:S01](../Story-001-rw-agent-execution-and-docs.md)
- [ICW-E2S01T12-specification](../../../../../implementation-cycles/ICW-E2S01T12-specification.md)
- [ICW-E2S01T12-test-design](../../../../../implementation-cycles/ICW-E2S01T12-test-design.md)
- [ICW-E2S01T12-implementation-plan](../../../../../implementation-cycles/ICW-E2S01T12-implementation-plan.md)

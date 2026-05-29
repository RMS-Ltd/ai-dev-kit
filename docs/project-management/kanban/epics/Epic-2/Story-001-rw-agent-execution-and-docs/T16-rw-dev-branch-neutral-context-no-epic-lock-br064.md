---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-09T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Task E2:S01:T16 - RW dev branch neutral context (no epic lock) (BR-064)

**Task ID:** E2:S01:T16  
**Status:** COMPLETE  
**Priority:** CRITICAL  
**Created:** 2026-04-09  
**Last updated:** 2026-04-09 (`v0.2.1.16+1`)  
**Version:** v0.2.1.16+1  
**Version Anchor:** ✅ COMPLETE (`v0.2.1.16+1`)  
**Code:** E2S01T16

---

## Summary

Fix RW branch validation so `dev` is treated as a neutral integration branch rather than epic-locked context.

---

## Scope

Adjust branch validation behavior for `dev` so it does not enforce epic/version equality while preserving all other guardrails.

---

## Input

- [BR-064](../../../fr-br/BR-064-rw-dev-branch-should-not-enforce-epic-lock.md)
- `packages/frameworks/workflow mgt/scripts/validation/validate_branch_context.py`
- `rw-config.yaml`

---

## Deliverable

1. Validator no longer enforces epic equality on `dev`.
2. Strict validator passes on `dev` when only epic mismatch was blocking.
3. BR/Task/Story cross-links are complete and correct.

---

## Acceptance Criteria

- [x] `validate_branch_context.py` treats `dev` as neutral branch context.
- [x] `dev_branch_epic` does not force Step 1 failure on `dev`.
- [x] `--strict` validation passes on `dev` for previously blocked mismatch case.
- [x] Story checklist links task to BR-064.

---

## Links

- [BR-064](../../../fr-br/BR-064-rw-dev-branch-should-not-enforce-epic-lock.md)
- [Story E2:S01](../Story-001-rw-agent-execution-and-docs.md)

---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-09T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Bug Report BR-064 - RW `dev` branch should not enforce epic lock

**Status:** COMPLETE  
**Priority:** CRITICAL  
**Severity:** HIGH - release workflow blocker for intended single-branch development usage.  
**Created:** 2026-04-09  
**Last updated:** 2026-04-09 (`v0.2.1.16+1`)  
**Version:** v0.2.1.16+1  
**Code:** BR-064  
**Implementing Task:** [E2:S01:T16](../epics/Epic-2/Story-001-rw-agent-execution-and-docs/T16-rw-dev-branch-neutral-context-no-epic-lock-br064.md)

---

## Problem Statement

RW Step 1 branch validation currently treats `dev` as epic-bound context (via `dev_branch_epic` mapping), which blocks valid `RW ... --art` flows when `version.py` epic differs from that configured value.

This conflicts with the operational intent of `dev` as a neutral integration branch used to reduce branch-friction for ongoing maintenance and cross-epic workflow work.

---

## Expected Behavior

When running on `dev`, branch validation should:

1. skip strict epic/version equality checks,
2. still run safety checks that are branch-agnostic (format, docs-only guardrails, etc.),
3. allow `RW`/`RW -k`/`RW -d` flows to proceed if all other guards pass.

---

## Observed Behavior

Validator failure:

- `Version mismatch: Branch 'dev' expects Epic 2 but version '0.6.7.110+1' has Epic 6`

This causes Step 1 hard-fail and aborts RW before execution can begin.

---

## Reproduction

1. Checkout `dev`.
2. Ensure `rw-config.yaml` sets `dev_branch_epic: 2`.
3. Use a version anchored to a different epic (e.g. `0.6.7.110+1`).
4. Run Step 1 validator in strict mode:
   - `python3 "packages/frameworks/workflow mgt/scripts/validation/validate_branch_context.py" --strict`
5. Observe failure on forced epic lock for `dev`.

---

## Proposed Resolution

- Treat `dev` like `main` for epic/version enforcement (neutral context).
- Remove `dev` strict-epic dependency path from validator logic.
- Keep all non-epic validation behavior unchanged.
- Document this as explicit policy to prevent reintroduction.

---

## Related

- [UXR-006](UXR-006-dev-branch-and-rw-validator-relaxation.md)
- [BR-061](BR-061-rw-explicit-task-id-requires-manual-version-alignment.md)
- [Story E2:S01](../epics/Epic-2/Story-001-rw-agent-execution-and-docs.md)

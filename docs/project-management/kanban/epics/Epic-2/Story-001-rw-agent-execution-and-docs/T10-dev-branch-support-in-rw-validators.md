---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-07T12:06:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 2, Story 1, Task 10: dev branch support in RW validators

**Status:** IN PROGRESS  
**Priority:** HIGH  
**Last updated:** 2026-04-07 (v0.2.1.10+2 - strict-equal-epic behavior released via RW)  
**Started:** 2026-04-07  
**Completed:** N/A  
**Version:** v0.2.1.10+2  
**Code:** E2S01T10

---

## Task ID

**Format:** `E{epic}:S{story}:T{task}`

**Full Task ID:** `E2:S01:T10`

---

## Summary

Implement support for a dedicated `dev` branch in RW branch-context validation using strict-equal-epic semantics.

---

## Input

- UXR requirement: `UXR-006` (`dev` branch acceptance for solo workflow).
- Existing branch validator behavior in `validate_branch_context.py`.
- Current RW Step 1 and Step 1b guardrail expectations.

---

## Deliverable

- Validator updates to recognize `dev` branch mode.
- Documentation/rules updates defining safeguards for `dev` mode.
- Traceable release artifacts and changelog references for `E2:S01:T10`.

---

## Scope

- Update `validate_branch_context.py` to recognize `dev` as an allowed branch mode.
- Define strict behavior on `dev`:
  - `dev` requires configured `dev_branch_epic` in `rw-config.yaml`.
  - Missing/invalid `dev_branch_epic` is a blocking validation failure.
  - Keep epic/version alignment blocking exactly as `epic/{n}` branch mode.
  - Keep task intent, version bump, and changelog validators strict.
- Update RW execution docs and rules to document `dev` behavior and guardrails.
- Ensure release traces clearly indicate `dev`-mode execution where applicable.

---

## Acceptance Criteria

- [x] `validate_branch_context.py` recognizes `dev` and requires `dev_branch_epic` mapping.
- [x] `dev` follows strict epic/version alignment checks (same blocking behavior as `epic/{n}`).
- [x] RW docs define required blocking behavior for `dev` strict-equal-epic mode.
- [x] `.cursorrules` branch mapping and validation guidance updated for strict `dev` mode.
- [x] UXR-006 remains cross-linked and traceable.

---

## Links

- [UXR-006](../../../fr-br/UXR-006-dev-branch-and-rw-validator-relaxation.md)
- [Story E2:S01](../Story-001-rw-agent-execution-and-docs.md)
- [BR-003](../../../fr-br/BR-003-rw-branch-validation-update-branches.md)

---

## Version Anchor

**Forensic Marker Format:** `✅ COMPLETE (vRC.E.S.T+B)`

**When Task is Complete:**

- Add forensic marker to this task document
- Add forensic marker to the story checklist entry
- Ensure version/changelog/readme traceability is complete

---

## Implementation Evidence

- `validate_branch_context.py`
  - `parse_branch_epic(branch, config)` now accepts `dev` only when `config['dev_branch_epic']` is a valid integer.
  - `validate_branch_context()` now treats `dev` without `dev_branch_epic` as a blocking error (not warning).
- `release-workflow-agent-execution.md`
  - Step 1 now documents `dev` strict-equal-epic requirements and pass/fail expectations.
- `.cursorrules`
  - Branch mapping now includes `dev` with explicit strict-equal-epic validation requirement.

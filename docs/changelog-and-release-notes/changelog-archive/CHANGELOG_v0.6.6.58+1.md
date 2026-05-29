# Changelog: v0.6.6.58+1

**Release Date:** 2026-04-08 12:45:39 UTC
**Epic:** Epic 6 - Framework Management
**Story:** Story 6 - Feature Requests
**Task:** Task 58 - RW `--art` support for all RW modes
**Type:** 🔧 Tooling

## Summary

Change implemented: make RW task-intent adoption via `--art` work in all RW modes (`RW`, `RW -d`, `RW -k`) and align policy/docs with the new behavior.

## Changes

### Validator behavior
- Added `--art` handling to `validate_rw_task_intent.py` for all modes.
- Updated validator usage docs and regression scenario script.

### Intake artifacts
- Added BR-060 and linked implementing task E6:S06:T58.
- Wired T58 into Story 006 task checklist.

### Policy and documentation alignment
- Updated root `.cursorrules` Step 1d wording for all-mode `--art`.
- Updated packaged RW trigger section and dual-source parity checklist.
- Updated RW execution/reference docs and dev-kit governance/policy docs to reflect all-mode support.

## Related Work

- **Bug Report:** BR-060
- **Task:** E6:S06:T58
- **Prior guardrail:** BR-056 (task-intent mismatch detection)

## Notes

`--art` adoption is explicit-intent behavior. Mandatory Step 1b/1c guardrails still apply (task token + releasable task document).

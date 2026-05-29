# Detailed Changelog — v0.2.16.3+4

**Release date:** 27-04-26  
**Task:** E2:S16:T03  
**Mode:** RW with `--art`  
**SemVer:** v0.4.764+5

## Summary

Published Wave 3 guardrail enforcement for Story 016 perpetual governance: validator-level placement and numbering controls are now active, test-backed, and reflected in policy documentation.

## Included

- Validator guardrail implementation:
  - `packages/frameworks/workflow mgt/scripts/validation/validate_version_bump.py`
    - perpetual placement guardrail (`E2:S16` required unless `Perpetual Override Rationale:`)
    - legacy numbering guardrail (`T1xx` blocked unless `Historical Anchor:`)
    - warn-on-missing marker for Story 016 lanes (`T03`/`T04`/`T05`)
- Regression tests:
  - `packages/frameworks/workflow mgt/scripts/validation/test_validate_version_bump.py`
- Policy parity update:
  - `docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md` (§6.1.1)
- IPP implementation status update:
  - `docs/implementation-cycles/IPP-E2S16T01-canonical-perpetual-ongoing-tasks-story.md`

## Verification

- `python3 -m pytest "packages/frameworks/workflow mgt/scripts/validation/test_validate_version_bump.py" -k "perpetual_guardrails"` ✅
- `python3 "packages/frameworks/workflow mgt/scripts/validation/validate_version_bump.py" --strict --requested "E2:S16:T03" --art` ✅
- `python3 "packages/frameworks/workflow mgt/scripts/validation/validate_branch_context.py" --strict --requested "E2:S16:T03" --art` ✅
- `python3 "packages/frameworks/workflow mgt/scripts/validation/validate_rw_task_complete.py" --requested "E2:S16:T03"` ✅
- `python3 "packages/frameworks/workflow mgt/scripts/validation/validate_rw_task_intent.py" --requested "E2:S16:T03" --art` ✅

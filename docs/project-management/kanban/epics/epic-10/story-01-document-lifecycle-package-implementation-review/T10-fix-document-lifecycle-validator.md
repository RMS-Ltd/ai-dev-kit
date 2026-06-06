---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-06T22:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 10, Story 1, Task 10: Fix DocumentLifecycleValidator

**Task ID:** E10:S01:T10  
**Status:** COMPLETE  
**Priority:** HIGH  
**Created:** 2026-06-06  
**Last updated:** 2026-06-06 (v0.10.1.10+1 — validator fix released)  
**Version:** v0.10.1.10+1  
**Code:** E10S01T10

---

## Associated Gaps

- **GAP-DOCLIFE-TEST-001** — Cross-package `DocumentLifecycleValidator` crashes (`NameError: yaml`) and enforces only 2 of 5 required fields

**Remediation package:** [E10:S01:T06](T06-define-rc-sign-off-criteria-and-remediation-tasks.md) R3

---

## Scope

Fix the cross-package `DocumentLifecycleValidator` in tooling-automation:

- **Path:** `packages/frameworks/tooling-automation/validators/framework/document_lifecycle_validator.py`
- **Runtime failure:** `NameError: name 'yaml' is not defined` — add missing import/fix
- **Scope gap:** Enforce all five required metadata fields per `doc-lifecycle-metadata-spec.md` (not just `lifecycle` + `created_at`)

**In scope:**

- Fix runtime crash
- Align validator field requirements with package spec
- Add/update tests for validator behavior
- Document relationship to package-local `validate_lifecycle_metadata.py` (T08)

**Out of scope:**

- Package workflow/script creation (see [E10:S01:T08](T08-implement-doc-housekeeping-workflow-and-scripts.md))
- Pre-commit wiring (optional follow-on)

---

## Input

- [**IPP-E10S01T10**](../../../../../implementation-cycles/IPP-E10S01T10-fix-document-lifecycle-validator.md) — implementation plan (Sections 1–7; FR-083 gate)
- [E10:S01:T05 gap log](T05-create-gap-log-and-risk-assessment.md) — Gap 5
- [E10:S01:T06 RC sign-off](T06-define-rc-sign-off-criteria-and-remediation-tasks.md) — remediation package R3
- [T03 behavior validation](lifecycle-behavior-validation-report.md) §6 DocumentLifecycleValidator Runtime Validation
- Cross-package validator: `packages/frameworks/tooling-automation/validators/framework/document_lifecycle_validator.py`

---

## Deliverable

- `DocumentLifecycleValidator` runs without runtime crash
- Validator enforces five required metadata fields
- Tests pass for validator behavior
- Ownership boundary documented (tooling-automation implements doc-lifecycle contract)

---

## Acceptance Criteria

- [x] Validator completes scans without `NameError` ✅ (v0.10.1.10+1)
- [x] All five required fields validated per package spec ✅
- [x] pytest coverage for validator pass/fail cases ✅ (13 tests, TC1–TC8)
- [x] Relationship to T08 package-local validator documented ✅ (framework README §boundary)
- [x] IPP linked before code implementation (FR-083) ✅

---

## Verification

| ID | Check | Result | Evidence |
| -- | ----- | ------ | -------- |
| V1 | PyYAML import — no `NameError` | PASS | `test_document_lifecycle_validator_run_without_nameerror` |
| V2 | Five-field enforcement | PASS | Parametric missing-field tests (5 fields) |
| V3 | Story-folder smoke | PASS | Validator completes scan on epic-10 story folder |
| V4 | greenfield mirror parity | PASS | `diff` primary vs greenfield-install validator — identical |
| V5 | T08 boundary documented | PASS | `validators/framework/README.md` §DocumentLifecycleValidator |

**Gap closure:** GAP-DOCLIFE-TEST-001 remediated — see [T05 gap log](T05-create-gap-log-and-risk-assessment.md) Gap 5 Tracking.

---

## References

- [**IPP-E10S01T10**](../../../../../implementation-cycles/IPP-E10S01T10-fix-document-lifecycle-validator.md) — fix validator implementation plan
- [T06 RC sign-off and remediation backlog](T06-define-rc-sign-off-criteria-and-remediation-tasks.md)
- [T05 gap log](T05-create-gap-log-and-risk-assessment.md)
- [T03 lifecycle-behavior-validation-report](lifecycle-behavior-validation-report.md) §6
- [T08 package-local validator](T08-implement-doc-housekeeping-workflow-and-scripts.md) — complementary scope boundary
- [IPP-E10S01T06](../../../../../implementation-cycles/IPP-E10S01T06-rc-sign-off-remediation.md)
- [E10S01 orchestration plan §9](../../../../../implementation-cycles/E10S01-orchestration-plan.md)
- [doc-lifecycle-metadata-spec.md](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/doc-lifecycle/policies/doc-lifecycle-metadata-spec.md)

---

## Version Anchor

✅ COMPLETE (v0.10.1.10+1)

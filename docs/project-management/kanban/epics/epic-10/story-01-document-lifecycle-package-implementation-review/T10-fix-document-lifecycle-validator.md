---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-06T22:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 10, Story 1, Task 10: Fix DocumentLifecycleValidator

**Task ID:** E10:S01:T10  
**Status:** TODO  
**Priority:** HIGH  
**Created:** 2026-06-06  
**Last updated:** 2026-06-06 (filed from T06 remediation backlog R3)  
**Version:** v0.0.0.0+0  
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

- [ ] Validator completes scans without `NameError`
- [ ] All five required fields validated per package spec
- [ ] pytest coverage for validator pass/fail cases
- [ ] Relationship to T08 package-local validator documented
- [ ] IPP linked before code implementation (FR-083)

---

## References

- [T06 RC sign-off and remediation backlog](T06-define-rc-sign-off-criteria-and-remediation-tasks.md)
- [T05 gap log](T05-create-gap-log-and-risk-assessment.md)
- [IPP-E10S01T06](../../../../implementation-cycles/IPP-E10S01T06-rc-sign-off-remediation.md)

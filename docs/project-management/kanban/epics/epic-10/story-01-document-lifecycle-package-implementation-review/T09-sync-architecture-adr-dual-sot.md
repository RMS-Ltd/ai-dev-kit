---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-06T22:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 10, Story 1, Task 9: Sync architecture ADR dual SoT

**Task ID:** E10:S01:T09  
**Status:** TODO  
**Priority:** HIGH  
**Created:** 2026-06-06  
**Last updated:** 2026-06-06 (filed from T06 remediation backlog R2)  
**Version:** v0.0.0.0+0  
**Code:** E10S01T09

---

## Associated Gaps

- **GAP-DOCLIFE-INTG-001** — Package `policies/` ↔ `docs/architecture/standards-and-adrs/` dual SoT drift

**Remediation package:** [E10:S01:T06](T06-define-rc-sign-off-criteria-and-remediation-tasks.md) R2

---

## Scope

Resolve dual SoT drift between Document Lifecycle package `policies/` and repo `docs/architecture/standards-and-adrs/`:

- Align metadata spec, lifecycle policy, and policy-salience content
- Resolve `policy-salience-schema.md` presence only in architecture ADRs (not package `policies/`)
- Establish canonical packaging policy for which surface is SoT vs mirror
- Fix relative-link path drift between package and architecture copies

**In scope:**

- Content reconciliation or explicit mirror/SoT declaration per ADR pattern
- Package `policies/` and architecture ADR cross-links updated
- greenfield-install mirror parity

**Out of scope:**

- Workflow/script implementation (see [E10:S01:T08](T08-implement-doc-housekeeping-workflow-and-scripts.md))
- Validator fix (see [E10:S01:T10](T10-fix-document-lifecycle-validator.md))

---

## Input

- [E10:S01:T05 gap log](T05-create-gap-log-and-risk-assessment.md) — Gap 4
- [E10:S01:T06 RC sign-off](T06-define-rc-sign-off-criteria-and-remediation-tasks.md) — remediation package R2
- [T04 integration alignment](integration-alignment-report.md) §5 Architecture ADR Dual SoT
- [T02 component inventory](component-inventory-map.md) §7

---

## Deliverable

- Dual SoT policy documented and implemented (single authoritative surface per topic)
- Package `policies/` and architecture ADRs synchronized or explicitly mirrored
- `policy-salience-schema.md` housed consistently
- No relative-link path drift between surfaces

---

## Acceptance Criteria

- [ ] Canonical SoT vs mirror policy documented for each policy topic
- [ ] Package `policies/` and architecture ADRs content-aligned or drift-guarded
- [ ] `policy-salience-schema.md` present in correct canonical location with cross-links
- [ ] T04 integration alignment re-validated for domain 6/7
- [ ] IPP linked before implementation (FR-083)

---

## References

- [T06 RC sign-off and remediation backlog](T06-define-rc-sign-off-criteria-and-remediation-tasks.md)
- [T05 gap log](T05-create-gap-log-and-risk-assessment.md)
- [IPP-E10S01T06](../../../../implementation-cycles/IPP-E10S01T06-rc-sign-off-remediation.md)

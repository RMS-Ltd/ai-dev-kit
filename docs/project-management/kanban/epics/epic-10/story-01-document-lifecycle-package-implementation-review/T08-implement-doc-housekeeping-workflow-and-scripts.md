---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-06T22:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 10, Story 1, Task 8: Implement doc housekeeping workflow and scripts

**Task ID:** E10:S01:T08  
**Status:** ✅ COMPLETE (v0.10.1.8+1)  
**Priority:** HIGH  
**Created:** 2026-06-06  
**Last updated:** 2026-06-06 (RW E10:S01:T08 --art)  
**Version:** v0.10.1.8+1  
**Code:** E10S01T08

---

## Associated Gaps

- **GAP-DOCLIFE-STRUCT-001** — `workflows/doc-housekeeping-workflow.yaml` absent
- **GAP-DOCLIFE-STRUCT-002** — `scripts/validate_lifecycle_metadata.py` absent
- **GAP-DOCLIFE-STRUCT-003** — `scripts/housekeeping_scanner.py` absent

**Remediation package:** [E10:S01:T06](T06-define-rc-sign-off-criteria-and-remediation-tasks.md) R1

---

## Scope

Implement the documented-future automation artefacts for the Document Lifecycle package (`packages/frameworks/doc-lifecycle/`):

1. `workflows/doc-housekeeping-workflow.yaml` — automated housekeeping workflow
2. `scripts/validate_lifecycle_metadata.py` — five-field lifecycle metadata validator
3. `scripts/housekeeping_scanner.py` — expired-document scanner with reference-aware cleanup

**In scope:**

- Create workflow YAML per package policy and PACKAGE_OVERVIEW
- Implement validator script enforcing five required metadata fields
- Implement scanner with reference-aware cleanup logic per policy prose
- Update README/PACKAGE_OVERVIEW package trees
- greenfield-install mirror parity (FR-110)

**Out of scope:**

- ADR dual SoT merge (see [E10:S01:T09](T09-sync-architecture-adr-dual-sot.md))
- Cross-package `DocumentLifecycleValidator` fix (see [E10:S01:T10](T10-fix-document-lifecycle-validator.md))
- Mass repo frontmatter migration

---

## Input

- [E10:S01:T05 gap log](T05-create-gap-log-and-risk-assessment.md) — Gaps 1–3
- [E10:S01:T06 RC sign-off](T06-define-rc-sign-off-criteria-and-remediation-tasks.md) — remediation package R1
- [T02 component inventory](component-inventory-map.md) §6
- [T03 behavior validation](lifecycle-behavior-validation-report.md) D8/D9
- Package: `packages/frameworks/doc-lifecycle/`
- **IPP:** [IPP-E10S01T08 — doc housekeeping workflow and scripts](../../../../../implementation-cycles/IPP-E10S01T08-doc-housekeeping-workflow-scripts.md)

---

## Deliverable

- `workflows/doc-housekeeping-workflow.yaml` on disk in canonical package + greenfield-install mirror
- `scripts/validate_lifecycle_metadata.py` and `scripts/housekeeping_scanner.py` implemented
- README/PACKAGE_OVERVIEW reflect actual on-disk tree
- Verification evidence for reference-aware cleanup observability (unblocks GAP-DOCLIFE-BEHV-001)

---

## Acceptance Criteria

- [x] `workflows/doc-housekeeping-workflow.yaml` exists and matches documented workflow steps
- [x] `scripts/validate_lifecycle_metadata.py` validates all five required metadata fields
- [x] `scripts/housekeeping_scanner.py` implements reference-aware cleanup per policy
- [x] greenfield-install mirror updated (FR-110 parity)
- [x] IPP linked before code implementation (FR-083)

---

## Verification

Reference-aware cleanup observability (GAP-DOCLIFE-BEHV-001):

```json
{
  "path": "expired_transient.md",
  "action": "archive",
  "reason": "protected by references (auto-upgrade from delete)",
  "references": ["evergreen:evergreen_linker.md"]
}
```

pytest: `python -m pytest packages/frameworks/doc-lifecycle/tests/` — 12 passed.
FR-110: `python scripts/sync_greenfield_install.py` + `diff -rq` canonical ↔ mirror exit 0.

## References

- [T06 RC sign-off and remediation backlog](T06-define-rc-sign-off-criteria-and-remediation-tasks.md)
- [T05 gap log](T05-create-gap-log-and-risk-assessment.md)
- [IPP-E10S01T08 — doc housekeeping workflow and scripts](../../../../../implementation-cycles/IPP-E10S01T08-doc-housekeeping-workflow-scripts.md)
- [IPP-E10S01T06](../../../../../implementation-cycles/IPP-E10S01T06-rc-sign-off-remediation.md)

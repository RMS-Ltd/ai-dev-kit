---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-06T22:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 10, Story 1, Task 9: Sync architecture ADR dual SoT

**Task ID:** E10:S01:T09  
**Status:** ✅ COMPLETE (v0.10.1.9+1)  
**Priority:** HIGH  
**Created:** 2026-06-06  
**Last updated:** 2026-06-06 (RW E10:S01:T09 --art)  
**Version:** v0.10.1.9+1  
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

- [IPP-E10S01T09 — sync architecture ADR dual SoT](../../../../../implementation-cycles/IPP-E10S01T09-sync-architecture-adr-dual-sot.md)
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

- [x] Canonical SoT vs mirror policy documented for each policy topic
- [x] Package `policies/` and architecture ADRs content-aligned or drift-guarded
- [x] `policy-salience-schema.md` present in correct canonical location with cross-links
- [x] T04 integration alignment re-validated for domain 5/6
- [x] IPP linked before implementation (FR-083)

---

## Verification (T04 domains 5–6 re-validation)

| Check | Command / evidence | Result |
| ----- | ------------------ | ------ |
| V5 — salience schema packaged | `ls packages/frameworks/doc-lifecycle/policies/` includes `policy-salience-schema.md` | **PASS** |
| V5 — metadata-spec mirror | Architecture mirror banner + body sync from package SoT | **PASS** |
| V5 — lifecycle-policy mirror | Architecture mirror banner + body sync from package SoT | **PASS** |
| V5 — kb-structure link | Broken `kb-structure-overview.md` removed; dev-kit pointer to `ultimate-canonical-kb-structure.md` | **PASS** |
| V6 — FR-110 greenfield parity | `diff -rq packages/frameworks/doc-lifecycle greenfield-install/packages/frameworks/doc-lifecycle` exit 0 | **PASS** |

**Domain 5 re-score:** **ALIGNED** (was PARTIAL — link drift resolved; salience schema packaged)  
**Domain 6 re-score:** **ALIGNED** (unchanged; re-synced post-policy edits)

**Deliverables:** ADR-023; `policies/policy-salience-schema.md`; `docs/adr-dual-sot-parity.md`; mirror banners on architecture copies; salience cross-link updates; README/PACKAGE_PROPOSAL; greenfield-install sync.

---

## References

- [IPP-E10S01T09 — sync architecture ADR dual SoT](../../../../../implementation-cycles/IPP-E10S01T09-sync-architecture-adr-dual-sot.md)
- [ADR-023 — doc-lifecycle package architecture dual SoT](../../../../../../docs/architecture/standards-and-adrs/ADR-023-doc-lifecycle-package-architecture-dual-sot.md)
- [adr-dual-sot-parity.md](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/doc-lifecycle/docs/adr-dual-sot-parity.md)
- [T06 RC sign-off and remediation backlog](T06-define-rc-sign-off-criteria-and-remediation-tasks.md)
- [T05 gap log](T05-create-gap-log-and-risk-assessment.md)
- [IPP-E10S01T06](../../../../../implementation-cycles/IPP-E10S01T06-rc-sign-off-remediation.md)

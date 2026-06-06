---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T05:04:11Z
expires_at: null
housekeeping_policy: keep
---

# Epic 10, Story 1, Task 3: Validate lifecycle behavior against documented guidance

**Task ID:** E10:S01:T03  
**Status:** TODO  
**Priority:** MEDIUM  
**Last updated:** 2026-06-05 (v0.0.0.0+0 – migrated from embedded Story section)  
**Version:** v0.0.0.0+0  
**Code:** E10S01T03

---

## Task ID

**Format:** `E{epic}:S{story}:T{task}`

**Full Task ID:** `E10:S01:T03`

---

## Scope

Validate that `packages/frameworks/doc-lifecycle/` **documented lifecycle behavior** matches observable repo state: metadata schema, classification/TTL rules, reference-aware cleanup, agent rules (`.cursorrules`), and `DocumentLifecycleValidator` runtime. Produce a companion validation report with PASS/PARTIAL/FAIL matrix and severity-tagged discrepancies for T05.

**Scope includes:**
- Metadata spec five-field compliance vs `.cursorrules` and validator
- Classification defaults and LIFECYCLE_EXAMPLES alignment
- TTL/`expires_at` arithmetic on repo samples
- Reference-aware cleanup and housekeeping automation (documented vs observable)
- Agent-driven management rules
- Stratified `docs/` frontmatter sample audit

**Out of scope:** Package fixes (T05/T06); integration alignment (T04); T01 baseline rewrite.

---

## Input

- [E10S01 orchestration plan §7.4 T03](../../../../../../implementation-cycles/E10S01-orchestration-plan.md)
- [IPP-E10S01T03](../../../../../../implementation-cycles/IPP-E10S01T03-lifecycle-behavior-validation.md)
- T01 expectations baseline (`expectations-baseline.md` — **required before implementation**; see [IPP-E10S01T01](../../../../../../implementation-cycles/IPP-E10S01T01-expectations-baseline-doc-lifecycle.md))
- T02 component inventory (`component-inventory-map.md` — when available)
- `packages/frameworks/doc-lifecycle/policies/doc-lifecycle-policy.md`
- `packages/frameworks/doc-lifecycle/policies/doc-lifecycle-metadata-spec.md`
- `packages/frameworks/doc-lifecycle/templates/LIFECYCLE_EXAMPLES.md`
- `.cursorrules` §Document Lifecycle Management
- `packages/frameworks/tooling-automation/validators/framework/document_lifecycle_validator.py`
- Precedent: [IPP-E02S13T03](../../../../../../implementation-cycles/IPP-E02S13T03-workflow-behavior-validation.md) · [workflow-behavior-validation-report.md](../../epic-02/story-13-workflow-management-package-implementation-review/workflow-behavior-validation-report.md)

---

## Deliverable

[Lifecycle behavior validation report](lifecycle-behavior-validation-report.md) — detailed validation matrix, evidence, discrepancy table, and compliance summary. *(Created during implementation per IPP §4.)*

---

## Acceptance Criteria

- [ ] Metadata schema behavioral expectations validated (five fields, enums, TTL rules)
- [ ] Classification and LIFECYCLE_EXAMPLES alignment assessed
- [ ] TTL/`expires_at` calculation validated on repo samples
- [ ] Reference-aware cleanup documented vs observable gap scored
- [ ] Agent rules (`.cursorrules` vs package policy) validated
- [ ] Housekeeping automation documented vs observable gap scored
- [ ] `DocumentLifecycleValidator` runtime behavior validated
- [ ] Repo frontmatter sample audit completed
- [ ] Discrepancies documented with severity levels
- [ ] Compliance assessment published in companion report

---

## Version Anchor

**Forensic Marker Format:** `✅ COMPLETE (vRC.E.S.T+B)`

---

## Migration Notes

Migrated from embedded Story section via `generate_task_doc.py` (FR-016 Wave 1 tooling).

**Source Story:** `docs/project-management/kanban/epics/epic-10/story-01-document-lifecycle-package-implementation-review.md`

---

## References

- [IPP-E10S01T03 — Lifecycle behavior validation](../../../../../../implementation-cycles/IPP-E10S01T03-lifecycle-behavior-validation.md)
- [E10S01 orchestration plan](../../../../../../implementation-cycles/E10S01-orchestration-plan.md)
- [IPP-E10S01T01 — Expectations baseline](../../../../../../implementation-cycles/IPP-E10S01T01-expectations-baseline-doc-lifecycle.md)


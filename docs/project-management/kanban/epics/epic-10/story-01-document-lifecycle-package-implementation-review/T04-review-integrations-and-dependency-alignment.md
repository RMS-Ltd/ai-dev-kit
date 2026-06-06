---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T05:04:11Z
expires_at: null
housekeeping_policy: keep
---

# Epic 10, Story 1, Task 4: Review integrations and dependency alignment

**Task ID:** E10:S01:T04  
**Status:** TODO  
**Priority:** MEDIUM  
**Last updated:** 2026-06-05 (v0.0.0.0+0 – migrated from embedded Story section)  
**Version:** v0.0.0.0+0  
**Code:** E10S01T04

---

## Task ID

**Format:** `E{epic}:S{story}:T{task}`

**Full Task ID:** `E10:S01:T04`

---

## Scope

Review whether the Document Lifecycle package (`packages/frameworks/doc-lifecycle/`) **integrates as documented** with optional Kanban and Workflow Management soft dependencies, repo-level agent rules (`.cursorrules`), architecture ADR dual SoT, and FR-110 adopter mirror.

**In scope:**

- Zero hard dependencies (10/10 independence claim)
- Kanban soft dependency (`integration/kanban-integration.md`, template frontmatter)
- Workflow Management soft dependency (`integration/workflow-mgt-integration.md`, RW doc-creation lifecycle)
- Repo agent rules vs package metadata spec
- Architecture ADR drift (`docs/architecture/standards-and-adrs/` vs package `policies/`)
- greenfield-install parity (FR-110)
- Template propagation and cross-package link integrity
- Documented-but-future integration artefacts (housekeeping workflow, validator scripts)

**Out of scope:** Package fixes; full behavioral re-validation (T03); consolidated gap log (T05); RC sign-off (T06).

---

## Input

- [E10S01 orchestration plan §7.4 T04](../../../../../../implementation-cycles/E10S01-orchestration-plan.md)
- [IPP-E10S01T04 — integration dependency alignment](../../../../../../implementation-cycles/IPP-E10S01T04-integration-dependency-alignment.md) *(this IPW plan)*
- [IPP-E10S01T01 — expectations baseline](../../../../../../implementation-cycles/IPP-E10S01T01-expectations-baseline-doc-lifecycle.md) · T01 companion baseline (when available)
- T02 `component-inventory-map.md` · T03 `lifecycle-behavior-validation-report.md` (when available)
- [E02:S13:T04 precedent — integration-alignment-report.md](../../epic-02/story-13-workflow-management-package-implementation-review/integration-alignment-report.md)
- Package: `packages/frameworks/doc-lifecycle/integration/kanban-integration.md`, `workflow-mgt-integration.md`
- Architecture ADRs: `docs/architecture/standards-and-adrs/doc-lifecycle-*.md`, `policy-salience-schema.md`
- Adopter mirror: `greenfield-install/packages/frameworks/doc-lifecycle/`

---

## Deliverable

- [integration-alignment-report.md](./integration-alignment-report.md) *(companion — created during implementation)*

---

## Acceptance Criteria

- [ ] Integration alignment report published with nine validation domains and evidence
- [ ] Hard dependencies (none) and soft dependencies (Kanban, Workflow Mgt) scored ALIGNED/PARTIAL/GAP
- [ ] Architecture ADR dual SoT drift documented with severity
- [ ] greenfield-install parity checked (FR-110)
- [ ] Discrepancy table with severity ready for T05 `GAP-DOCLIFE-*` consumption
- [ ] Task doc Scope, AC, verification table complete; IPP bidirectionally linked
- [ ] Story AC “Integration alignment reviewed and documented” satisfied on RW

---

## Version Anchor

**Forensic Marker Format:** `✅ COMPLETE (vRC.E.S.T+B)`

---

## Migration Notes

Migrated from embedded Story section via `generate_task_doc.py` (FR-016 Wave 1 tooling).

**Source Story:** `docs/project-management/kanban/epics/epic-10/story-01-document-lifecycle-package-implementation-review.md`

---

## References

- [IPP-E10S01T04 — integration dependency alignment](../../../../../../implementation-cycles/IPP-E10S01T04-integration-dependency-alignment.md)
- [E10S01 orchestration plan](../../../../../../implementation-cycles/E10S01-orchestration-plan.md)
- [E02:S13 integration-alignment-report precedent](../../epic-02/story-13-workflow-management-package-implementation-review/integration-alignment-report.md)


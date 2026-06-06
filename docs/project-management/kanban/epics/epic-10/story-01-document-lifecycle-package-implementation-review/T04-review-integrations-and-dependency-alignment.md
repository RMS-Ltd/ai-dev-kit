---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T05:04:11Z
expires_at: null
housekeeping_policy: keep
---

# Epic 10, Story 1, Task 4: Review integrations and dependency alignment

**Task ID:** E10:S01:T04  
**Status:** ✅ COMPLETE (v0.10.1.4+1)  
**Priority:** MEDIUM  
**Last updated:** 2026-06-06 (v0.10.1.4+1 – integration alignment report)  
**Version:** v0.10.1.4+1  
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
- [IPP-E10S01T04 — integration dependency alignment](../../../../../../implementation-cycles/IPP-E10S01T04-integration-dependency-alignment.md)
- [expectations-baseline.md](./expectations-baseline.md) — §Integration Expectations *(T01 companion)*
- T02 `component-inventory-map.md` · T03 `lifecycle-behavior-validation-report.md` *(not yet published — IPP-E10S01T01 + spot-check used)*
- [E02:S13:T04 precedent — integration-alignment-report.md](../../epic-02/story-13-workflow-management-package-implementation-review/integration-alignment-report.md)
- Package: `packages/frameworks/doc-lifecycle/integration/kanban-integration.md`, `workflow-mgt-integration.md`
- Architecture ADRs: `docs/architecture/standards-and-adrs/doc-lifecycle-*.md`, `policy-salience-schema.md`
- Adopter mirror: `greenfield-install/packages/frameworks/doc-lifecycle/`

---

## Deliverable

- [integration-alignment-report.md](./integration-alignment-report.md) *(companion — nine validation domains + discrepancy table)*

---

## Executive Summary

Integration alignment **conditional pass**: documented soft-dependency contracts for Kanban and Workflow Management are **ALIGNED**; zero hard dependencies and FR-110 greenfield mirror are **ALIGNED**. Cohesion gaps (Medium): RW agent execution guide lacks lifecycle mapping table; `.cursorrules` mandates only 2 of 5 metadata fields; RW-created changelog archives lack lifecycle frontmatter. Low-severity drift: ADR link paths, `policy-salience-schema` not in package `policies/`, cross-package README reciprocity, `DOCUMENT_TEMPLATE` frontmatter in fenced block.

**Discrepancy count:** 0 Critical · 0 High · 3 Medium · 4 Low — see companion §Summary for T05 `GAP-DOCLIFE-*` seeds.

---

## Acceptance Criteria

- [x] Integration alignment report published with nine validation domains and evidence
- [x] Hard dependencies (none) and soft dependencies (Kanban, Workflow Mgt) scored ALIGNED/PARTIAL/GAP
- [x] Architecture ADR dual SoT drift documented with severity
- [x] greenfield-install parity checked (FR-110) — **ALIGNED**
- [x] Discrepancy table with severity ready for T05 `GAP-DOCLIFE-*` consumption
- [x] Task doc Scope, AC, verification table complete; IPP bidirectionally linked
- [x] Story AC “Integration alignment reviewed and documented” satisfied on RW

---

## Verification Checklist (V1–V10)

| ID | Check | Result | Evidence |
| -- | ----- | ------ | -------- |
| V1 | Hard dependencies / 10/10 independence | **PASS** | Companion §1; README; no installer requirement |
| V2 | Kanban integration contract | **PASS** | Companion §2; live kanban template samples |
| V3 | Workflow-mgt integration contract | **PARTIAL** | Contract PASS; RW cohesion PARTIAL — companion §3 D4, D12 |
| V4 | `.cursorrules` vs package spec | **PARTIAL** | Companion §4 D5 — 2 vs 5 required fields |
| V5 | ADR dual SoT drift | **PARTIAL** | Companion §5 D6, D7 — link drift; salience not packaged |
| V6 | greenfield-install parity | **PASS** | Companion §6 — `diff -rq` clean |
| V7 | Template propagation | **PARTIAL** | Companion §7 D9 — DOCUMENT_TEMPLATE fenced block |
| V8 | Future artefacts classification | **PASS** | Companion §8 — documented-future consistent |
| V9 | Discrepancy table + severity | **PASS** | Companion §Summary — 12 rows |
| V10 | Task ↔ IPP ↔ companion wiring | **PASS** | This doc ↔ IPP ↔ integration-alignment-report.md |

---

## Version Anchor

**Forensic Marker Format:** `✅ COMPLETE (vRC.E.S.T+B)`

**Shipped:** `✅ COMPLETE (v0.10.1.4+1)`

---

## Migration Notes

Migrated from embedded Story section via `generate_task_doc.py` (FR-016 Wave 1 tooling).

**Source Story:** `docs/project-management/kanban/epics/epic-10/story-01-document-lifecycle-package-implementation-review.md`

---

## References

- [IPP-E10S01T04 — integration dependency alignment](../../../../../../implementation-cycles/IPP-E10S01T04-integration-dependency-alignment.md)
- [integration-alignment-report.md](./integration-alignment-report.md) *(companion deliverable)*
- [expectations-baseline.md](./expectations-baseline.md)
- [E10S01 orchestration plan](../../../../../../implementation-cycles/E10S01-orchestration-plan.md)
- [E02:S13 integration-alignment-report precedent](../../epic-02/story-13-workflow-management-package-implementation-review/integration-alignment-report.md)

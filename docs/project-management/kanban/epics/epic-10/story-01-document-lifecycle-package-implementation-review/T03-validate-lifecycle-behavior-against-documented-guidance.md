---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T05:04:11Z
expires_at: null
housekeeping_policy: keep
---

# Epic 10, Story 1, Task 3: Validate lifecycle behavior against documented guidance

**Task ID:** E10:S01:T03  
**Status:** ✅ COMPLETE (v0.10.1.3+1)  
**Priority:** MEDIUM  
**Last updated:** 2026-06-06 (v0.10.1.3+1 – lifecycle behavior validation complete)  
**Version:** v0.10.1.3+1  
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

**Out of scope:** Package fixes (T05/T06); integration alignment (T04); T01 baseline rewrite; mass frontmatter migration.

---

## Input

- [E10S01 orchestration plan §7.4 T03](../../../../../../implementation-cycles/E10S01-orchestration-plan.md)
- [IPP-E10S01T03](../../../../../../implementation-cycles/IPP-E10S01T03-lifecycle-behavior-validation.md)
- [T01 expectations baseline](expectations-baseline.md)
- T02 component inventory (`component-inventory-map.md` — when available)
- `packages/frameworks/doc-lifecycle/policies/doc-lifecycle-policy.md`
- `packages/frameworks/doc-lifecycle/policies/doc-lifecycle-metadata-spec.md`
- `packages/frameworks/doc-lifecycle/templates/LIFECYCLE_EXAMPLES.md`
- `.cursorrules` §Document Lifecycle Management
- `packages/frameworks/tooling-automation/validators/framework/document_lifecycle_validator.py`
- Precedent: [IPP-E02S13T03](../../../../../../implementation-cycles/IPP-E02S13T03-workflow-behavior-validation.md) · [workflow-behavior-validation-report.md](../../epic-02/story-13-workflow-management-package-implementation-review/workflow-behavior-validation-report.md)

---

## Deliverable

[Lifecycle behavior validation report](lifecycle-behavior-validation-report.md) — detailed validation matrix across seven domains, evidence, discrepancy table (14 items), and compliance assessment.

---

## Executive Summary

Validation confirms **package policies and examples are internally coherent** (conditional pass). Key findings for T05:

- **0 Critical** — no contradictory lifecycle rules
- **2 High** — `DocumentLifecycleValidator` crashes (`yaml` not imported); validator enforces 2-field subset vs spec 5-field
- **5 Medium** — `.cursorrules` 2+3 field model vs spec; 40% of `docs/` without frontmatter; housekeeping/reference automation absent (expected future)
- **2 Low** — broken spec link to `kb-structure-overview.md`; Example 7 promotion date illustrative only

Policy documentation **PASS**; runtime enforcement and automation **PARTIAL/FAIL**.

---

## Gap Summary (feeds T05)

| Severity | Count | Top items |
| -------- | ----- | --------- |
| Critical | 0 | — |
| High | 2 | D11 validator crash; D12 validator 2-field vs 5-field spec |
| Medium | 5 | D2/D10 `.cursorrules` drift; D6/D7 repo frontmatter; D8/D9 automation absent |
| Low | 2 | D13 broken spec link; D14 Example 7 date illustration |

Full matrix: [companion report §Summary](lifecycle-behavior-validation-report.md#summary--discrepancy-table-feeds-t05).

---

## Acceptance Criteria

- [x] Metadata schema behavioral expectations validated (five fields, enums, TTL rules)
- [x] Classification and LIFECYCLE_EXAMPLES alignment assessed
- [x] TTL/`expires_at` calculation validated on repo samples
- [x] Reference-aware cleanup documented vs observable gap scored
- [x] Agent rules (`.cursorrules` vs package policy) validated
- [x] Housekeeping automation documented vs observable gap scored
- [x] `DocumentLifecycleValidator` runtime behavior validated
- [x] Repo frontmatter sample audit completed
- [x] Discrepancies documented with severity levels
- [x] Compliance assessment published in companion report

---

## Verification Checklist (V1–V10)

| ID | Check | Result | Evidence |
| -- | ----- | ------ | -------- |
| V1 | Metadata spec five-field vs `.cursorrules` | **PARTIAL** | Companion §1.1 |
| V2 | LIFECYCLE_EXAMPLES alignment | **PASS** | 10/10 YAML blocks |
| V3 | Validator smoke | **FAIL** | `NameError: yaml` at line 144 |
| V4 | Validator vs spec gap | **PARTIAL** | 2 required vs 5 in spec |
| V5 | TTL arithmetic | **PASS** | 20/20 repo samples ±1 day |
| V6 | Repo frontmatter coverage | **PARTIAL** | 58.1% full five-field |
| V7 | Missing package scripts | **PASS** (expected) | All three future artefacts absent |
| V8 | Reference-aware cleanup observability | **PARTIAL** | Documented only |
| V9 | Scope guard | **PASS** | No package code edits |
| V10 | Wiring | **PASS** | Task ↔ IPP ↔ companion |

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
- [Lifecycle behavior validation report](lifecycle-behavior-validation-report.md)
- [E10S01 orchestration plan](../../../../../../implementation-cycles/E10S01-orchestration-plan.md)
- [IPP-E10S01T01 — Expectations baseline](../../../../../../implementation-cycles/IPP-E10S01T01-expectations-baseline-doc-lifecycle.md)
- [T01 expectations baseline](expectations-baseline.md)

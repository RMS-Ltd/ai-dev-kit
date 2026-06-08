---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T05:04:11Z
expires_at: null
housekeeping_policy: keep
---

# Epic 10, Story 1, Task 5: Create gap log and risk assessment

**Task ID:** E10:S01:T05  
**Status:** ✅ COMPLETE  
**Priority:** MEDIUM  
**Last updated:** 2026-06-06 (v0.10.1.5+1 — gap log and risk assessment complete)  
**Version:** v0.10.1.5+1  
**Code:** E10S01T05

---

## Task ID

**Format:** `E{epic}:S{story}:T{task}`

**Full Task ID:** `E10:S01:T05`

---

## Specification and Validation

This deliverable conforms to the **Gap Log and Risk Assessment Schema**:

- **Spec:** [docs/architecture/standards-and-adrs/gap-log-schema.md](../../../../architecture/standards-and-adrs/gap-log-schema.md)
- **Validator:** `python packages/frameworks/workflow-mgt/scripts/validation/validate_gap_log.py --path <this-file> --strict`
- **Gap ID prefix:** `GAP-DOCLIFE-{TYPE}-NNN` (e.g. `GAP-DOCLIFE-STRUCT-001`)
- **IPP:** [IPP-E10S01T05-gap-log-risk-assessment.md](../../../../implementation-cycles/IPP-E10S01T05-gap-log-risk-assessment.md)

---

## Scope

Consolidate all findings from **T01–T04** into a single **gap log and risk assessment** for the Document Lifecycle framework package (`packages/frameworks/doc-lifecycle/`).

This includes:

- Enumerating structural, behavioral, integration, documentation, test, and operational gaps discovered during the implementation review.
- Classifying each gap by **severity**, **likelihood**, and **RC impact** using IDs prefixed `GAP-DOCLIFE-*`.
- Distinguishing **Document Lifecycle package implementation gaps** from external/adopter-environment issues.
- Documenting overall **conditional RC posture** for T06 sign-off criteria.

**Out of scope:** Remediation implementation; RC sign-off checklist (T06); package code, validator, or workflow fixes.

---

## Input

- [T01 – Expectations baseline](T01-establish-expectations-baseline-for-document-lifecycle-packa.md) · companion [expectations-baseline.md](expectations-baseline.md)
- [T02 – Component inventory map](T02-inventory-package-components-and-map-to-expectations.md) · companion [component-inventory-map.md](component-inventory-map.md)
- [T03 – Lifecycle behavior validation report](T03-validate-lifecycle-behavior-against-documented-guidance.md) · companion [lifecycle-behavior-validation-report.md](lifecycle-behavior-validation-report.md)
- [T04 – Integration alignment report](T04-review-integrations-and-dependency-alignment.md) · companion [integration-alignment-report.md](integration-alignment-report.md)
- [E10S01 orchestration plan §7.4 T05](../../../../implementation-cycles/E10S01-orchestration-plan.md)
- [IPP-E10S01T05 — gap log and risk assessment planning](../../../../implementation-cycles/IPP-E10S01T05-gap-log-risk-assessment.md)

---

## Deliverable

A **gap log and risk assessment** (this document) listing all identified gaps with required schema fields and an overall RC risk posture summary. **Gap log SoT:** body of this task doc (E02:S13 T05 pattern).

---

## Acceptance Criteria

- [x] All relevant findings from **T01–T04** distilled into a single gap log
- [x] Each gap classified with **severity**, **likelihood**, and **RC impact**; IDs use `GAP-DOCLIFE-{TYPE}-NNN`
- [x] Package vs external gaps explicitly separated in Summary section
- [x] Overall RC risk posture documented (conditional pass / DEFER; no RC-blocking gaps)
- [x] `validate_gap_log.py --strict` passes
- [x] IPP bidirectionally linked
- [x] Forensic release via `RW E10:S01:T05 --art`

---

## Approach

1. **Synthesize inputs** from T01–T04 companion reports per [IPP-E10S01T05 §2.2](../../../../implementation-cycles/IPP-E10S01T05-gap-log-risk-assessment.md).
2. **Deduplicate** overlapping inventory, behavior, and integration rows into canonical `GAP-DOCLIFE-*` IDs.
3. **Classify** each gap with severity, likelihood, RC impact, ownership, and tracking.
4. **Summarize** direct package gaps and overall RC risk posture.
5. **Validate** against `validate_gap_log.py --strict`.
6. **Wire** T06 input and story checklist; release via `RW E10:S01:T05 --art`.

---

## Gap Log

### Gap 1 – Doc Housekeeping Workflow Absent

- **ID:** GAP-DOCLIFE-STRUCT-001
- **Category:** Structural
- **Description:** `workflows/doc-housekeeping-workflow.yaml` is documented in README and PACKAGE_OVERVIEW as the automated housekeeping workflow but the `workflows/` directory does not exist on disk in the canonical package or greenfield-install mirror.
- **Source:** T02 §6; T03 D9; T01 §Documented-Future Artefacts; [component-inventory-map.md](component-inventory-map.md)
- **Ownership:** Document Lifecycle package
- **Severity:** HIGH
- **Likelihood:** HIGH (adopters expect workflow from package tree)
- **RC Impact:** NON-BLOCKING (documented-future; manual housekeeping documented)
- **Tracking:** [E10:S01:T08](T08-implement-doc-housekeeping-workflow-and-scripts.md) — filed 2026-06-06

---

### Gap 2 – Lifecycle Metadata Validator Script Absent

- **ID:** GAP-DOCLIFE-STRUCT-002
- **Category:** Structural
- **Description:** `scripts/validate_lifecycle_metadata.py` is listed in PACKAGE_OVERVIEW §Scripts and T01 expectations but no `scripts/` directory exists under `packages/frameworks/doc-lifecycle/`.
- **Source:** T02 §6; T03 D9/V7; PACKAGE_OVERVIEW
- **Ownership:** Document Lifecycle package
- **Severity:** HIGH
- **Likelihood:** HIGH (PACKAGE_OVERVIEW cites script as package component)
- **RC Impact:** NON-BLOCKING (cross-package `DocumentLifecycleValidator` exists but is broken — see Gap 5)
- **Tracking:** [E10:S01:T08](T08-implement-doc-housekeeping-workflow-and-scripts.md) — filed 2026-06-06

---

### Gap 3 – Expired-Document Scanner Absent

- **ID:** GAP-DOCLIFE-STRUCT-003
- **Category:** Structural
- **Description:** `scripts/housekeeping_scanner.py` is documented as the expired-document scanner and reference-aware cleanup executor but is not present on disk; reference-scan logic exists only in policy prose.
- **Source:** T02 §6; T03 D8/D9; T01 §Housekeeping Process
- **Ownership:** Document Lifecycle package
- **Severity:** HIGH
- **Likelihood:** HIGH (policy mandates reference-aware cleanup)
- **RC Impact:** NON-BLOCKING (manual process documented)
- **Tracking:** [E10:S01:T08](T08-implement-doc-housekeeping-workflow-and-scripts.md) — filed 2026-06-06

---

### Gap 4 – Architecture ADR Dual SoT Drift

- **ID:** GAP-DOCLIFE-INTG-001
- **Category:** Integration
- **Description:** Package `policies/` and repo `docs/architecture/standards-and-adrs/` maintain duplicate SoT surfaces for metadata spec and lifecycle policy with relative-link path drift; `policy-salience-schema.md` exists only in architecture ADRs, not in the package `policies/` tree.
- **Source:** T02 §7; T04 D6/D7; T04 §5 Architecture ADR Dual SoT
- **Ownership:** Document Lifecycle package + repo architecture docs
- **Severity:** HIGH
- **Likelihood:** MEDIUM (content equivalent today; drift risk on partial edits)
- **RC Impact:** NON-BLOCKING (substantive policy content aligned)
- **Tracking:** [E10:S01:T09](T09-sync-architecture-adr-dual-sot.md) — **COMPLETE** @ v0.10.1.9+1 via [IPP-E10S01T09](../../../../implementation-cycles/IPP-E10S01T09-sync-architecture-adr-dual-sot.md) (ADR-023; package SoT; salience schema packaged; FR-110 re-synced)

---

### Gap 5 – DocumentLifecycleValidator Non-Functional and Under-Scoped

- **ID:** GAP-DOCLIFE-TEST-001
- **Category:** Operational
- **Description:** Cross-package `DocumentLifecycleValidator` (`packages/frameworks/tooling-automation/validators/framework/document_lifecycle_validator.py`) crashes with `NameError: name 'yaml' is not defined` before completing scans, and enforces only `lifecycle` + `created_at` as required fields versus the package spec's five required fields.
- **Source:** T03 D11/D12; T03 §6 DocumentLifecycleValidator Runtime Validation
- **Ownership:** Tooling-automation package (implements doc-lifecycle enforcement contract)
- **Severity:** HIGH
- **Likelihood:** HIGH (reproducible runtime failure)
- **RC Impact:** NON-BLOCKING (repo agents use `.cursorrules`; validator not wired to pre-commit)
- **Tracking:** [E10:S01:T10](T10-fix-document-lifecycle-validator.md) — remediated 2026-06-06 via [IPP-E10S01T10](../../../../implementation-cycles/IPP-E10S01T10-fix-document-lifecycle-validator.md) (yaml import fix, five-field enforcement, pytest TC1–TC8 green)

---

### Gap 6 – `.cursorrules` Two-Field vs Five-Field Schema

- **ID:** GAP-DOCLIFE-INTG-002
- **Category:** Integration
- **Description:** Repo `.cursorrules` §Document Lifecycle Management mandates only `lifecycle` and `created_at` as required fields with three optional fields, while package `doc-lifecycle-metadata-spec.md` requires all five fields (`ttl_days`, `expires_at`, `housekeeping_policy` mandatory).
- **Source:** T03 D2/D10; T04 D5; [lifecycle-behavior-validation-report.md](lifecycle-behavior-validation-report.md) §1.1
- **Ownership:** Document Lifecycle package (contract) + repo agent rules
- **Severity:** MEDIUM
- **Likelihood:** HIGH (agents follow `.cursorrules` on doc creation)
- **RC Impact:** NON-BLOCKING
- **Tracking:** T06 remediation R-doc — align `.cursorrules` to five-field schema

---

### Gap 7 – RW Agent Guide Missing Lifecycle Mapping

- **ID:** GAP-DOCLIFE-INTG-003
- **Category:** Integration
- **Description:** `workflow-mgt-integration.md` documents document-type → lifecycle mapping and RW agent obligations, but `release-workflow-agent-execution.md` embeds lifecycle frontmatter only — no mapping table, Step 3 lifecycle hook, or RW-created changelog archive frontmatter guidance.
- **Source:** T04 D4/D12; T02 inventory (RW auto-lifecycle); integration-alignment-report §3
- **Ownership:** Document Lifecycle package (integration guide) + Workflow Management package (RW guide)
- **Severity:** MEDIUM
- **Likelihood:** MEDIUM (RW agents omit lifecycle on some KB docs)
- **RC Impact:** NON-BLOCKING
- **Tracking:** T06 remediation backlog — RW guide + changelog archive frontmatter

---

### Gap 8 – Reference-Aware Cleanup Not Observable

- **ID:** GAP-DOCLIFE-BEHV-001
- **Category:** Behavioral
- **Description:** Reference-aware cleanup (protect evergreen-linked docs, auto-upgrade to `archive`) is documented coherently in policy, metadata spec, and LIFECYCLE_EXAMPLES but has no executable reference-scan or auto-upgrade logic in the package or repo tooling.
- **Source:** T03 D8; T03 §3 Reference-Aware Cleanup; T01 §Reference-Aware Cleanup
- **Ownership:** Document Lifecycle package
- **Severity:** MEDIUM
- **Likelihood:** MEDIUM (manual housekeeping may delete referenced docs)
- **RC Impact:** NON-BLOCKING
- **Tracking:** T06 — depends on Gap 3 (housekeeping_scanner)

---

### Gap 9 – Repo Frontmatter Partial Compliance

- **ID:** GAP-DOCLIFE-BEHV-002
- **Category:** Behavioral
- **Description:** Repo-wide audit of `docs/**/*.md` (2695 files): 40.0% lack frontmatter; 58.1% have full five fields; 51 docs use partial frontmatter matching `.cursorrules` 2+3 optional pattern rather than spec five-required model.
- **Source:** T03 D6/D7; T03 §7 Repo Frontmatter Sample Audit
- **Ownership:** Repo documentation (adopter instance of doc-lifecycle policies)
- **Severity:** MEDIUM
- **Likelihood:** HIGH (ongoing doc creation without full metadata)
- **RC Impact:** NON-BLOCKING (active kanban/IPP/architecture bands largely compliant)
- **Tracking:** T06 migration wave; optional mass frontmatter backfill

---

### Gap 10 – README Package Tree Omits On-Disk Components

- **ID:** GAP-DOCLIFE-DOC-001
- **Category:** Documentation
- **Description:** README §Package Structure omits the on-disk `docs/` directory (policy salience guides), `POLICY_SALIENCE_TEMPLATE.md`, and `PACKAGE_PROPOSAL.md` while listing future `workflows/` and `scripts/` directories that are not present.
- **Source:** T02 §1/§7; component-inventory-map §Summary
- **Ownership:** Document Lifecycle package
- **Severity:** MEDIUM
- **Likelihood:** HIGH (adopters use README as manifest)
- **RC Impact:** NON-BLOCKING
- **Tracking:** T06 README/PACKAGE_OVERVIEW tree fix backlog

---

### Gap 11 – PACKAGE_PROPOSAL Status Stale

- **ID:** GAP-DOCLIFE-DOC-002
- **Category:** Documentation
- **Description:** `PACKAGE_PROPOSAL.md` remains on disk with header status "Proposal" (2025-12-04) although the package is actively adopted; content links to repo ADRs rather than package `policies/` as primary SoT.
- **Source:** T02 §7; component-inventory-map §1
- **Ownership:** Document Lifecycle package
- **Severity:** MEDIUM
- **Likelihood:** LOW (content valid; label misleading)
- **RC Impact:** NON-BLOCKING
- **Tracking:** T06 doc refresh — status label + SoT links

---

### Gap 12 – Template Propagation Gaps

- **ID:** GAP-DOCLIFE-DOC-003
- **Category:** Documentation
- **Description:** `DOCUMENT_TEMPLATE.md` embeds lifecycle frontmatter inside a fenced code block rather than as live document frontmatter (unlike Kanban `PLAN_DOC_TEMPLATE.md`); spot-check shows Kanban task templates propagate five fields correctly but doc-lifecycle adoption template format is weaker for copy-paste workflows.
- **Source:** T04 D9; T04 §7 Template Propagation
- **Ownership:** Document Lifecycle package
- **Severity:** MEDIUM
- **Likelihood:** MEDIUM
- **RC Impact:** NON-BLOCKING
- **Tracking:** T06 template format fix

---

### Gap 13 – T01 Baseline May Lag T02–T04 Findings

- **ID:** GAP-DOCLIFE-DOC-004
- **Category:** Process
- **Description:** T01 expectations baseline was authored before T02–T04 inventory, behavior, and integration reports; it correctly lists documented-future artefacts but does not reflect T03 repo frontmatter metrics or T04 cohesion findings until optional refresh.
- **Source:** T03/T04 executive summaries; IPP-E10S01T05 §2.2
- **Ownership:** Document Lifecycle package (review artefacts)
- **Severity:** MEDIUM
- **Likelihood:** LOW (T02–T04 supersede for RC evidence)
- **RC Impact:** NON-BLOCKING
- **Tracking:** Optional T01 refresh in T06

---

### Gap 14 – Policy Salience Underdocumented in README

- **ID:** GAP-DOCLIFE-OPS-001
- **Category:** Operational
- **Description:** Policy salience extension docs (`docs/policy-salience-guide.md`, `docs/policy-salience-agent-parser.md`, `templates/POLICY_SALIENCE_TEMPLATE.md`) exist on disk but are omitted from README/PACKAGE_OVERVIEW package trees and adoption quick-start.
- **Source:** T02 §5; T01 §Policy Salience
- **Ownership:** Document Lifecycle package
- **Severity:** LOW
- **Likelihood:** MEDIUM
- **RC Impact:** INFORMATIONAL
- **Tracking:** T06 README tree update (related to Gap 10)

---

### Gap 15 – Metadata Spec Broken Cross-Reference

- **ID:** GAP-DOCLIFE-DOC-005
- **Category:** Documentation
- **Description:** `doc-lifecycle-metadata-spec.md` references `./kb-structure-overview.md` which is not present in the package tree.
- **Source:** T03 D13; metadata spec §Related Documents
- **Ownership:** Document Lifecycle package
- **Severity:** LOW
- **Likelihood:** LOW
- **RC Impact:** INFORMATIONAL
- **Tracking:** T06 doc fix — remove or add kb-structure-overview

---

### Gap 16 – Cross-Package README Reciprocity Missing

- **ID:** GAP-DOCLIFE-INTG-004
- **Category:** Integration
- **Description:** Doc-lifecycle integration guides link outbound to Kanban and Workflow Management READMEs, but neither sibling package README reciprocates with doc-lifecycle integration mention.
- **Source:** T04 D11; T04 §9 Cross-Package Documentation Crosswalk
- **Ownership:** Document Lifecycle package + sibling package docs
- **Severity:** LOW
- **Likelihood:** LOW
- **RC Impact:** INFORMATIONAL
- **Tracking:** T06 optional cross-package README updates

---

### Summary of Direct Document Lifecycle Package Gaps

From **T01–T04** companion reports:

| Severity | Count | RC-blocking |
| -------- | ----- | ----------- |
| Critical | 0 | — |
| High | 5 | 0 |
| Medium | 8 | 0 |
| Low | 3 | 0 |
| **Total** | **16** | **0** |

**T01 (Expectations):** Baseline is directionally correct and lists documented-future artefacts accurately; may lag T03 frontmatter metrics until optional refresh (Gap 13).

**T02 (Component inventory):** 13/13 on-disk files mapped; structural gaps include missing workflows/scripts (Gaps 1–3), README tree drift (Gap 10), ADR dual SoT (Gap 4).

**T03 (Behavior validation):** Package policy/spec coherence **PASS**; enforcement gaps include validator crash (Gap 5), `.cursorrules` drift (Gap 6), repo frontmatter partial compliance (Gap 9), reference cleanup observability (Gap 8).

**T04 (Integration alignment):** Hard/soft dependency contracts **ALIGNED**; cohesion gaps include RW guide wiring (Gap 7), ADR packaging (Gap 4), template propagation (Gap 12), README reciprocity (Gap 16).

**greenfield-install (FR-110):** 13/13 file parity **Met** — no gap row (informational closure per IPP §2.2).

**Package vs external:**

All 16 gaps are **Document Lifecycle package implementation, documentation, integration-cohesion, or repo-enforcement gaps** tied to the doc-lifecycle adoption contract. No gaps are attributed to adopter-only environment misconfiguration. Kanban/workflow-mgt framework defects outside doc-lifecycle scope are excluded.

**Conclusion:** No **direct Document Lifecycle package gaps block RC sign-off**. Five **High** gaps (missing automation artefacts, ADR dual SoT, broken validator) and an **Medium** documentation/cohesion backlog must be **scheduled in T06** remediation tasks. Aligns with orchestration plan §7.4 **conditional RC / DEFER until HIGH gaps filed**.

---

## Risk Assessment

### Overall RC Risk Posture (Document Lifecycle Package)

- **Structural Risk:** HIGH
  - Three documented-future scripts/workflow absent (Gaps 1–3); ADR dual SoT drift (Gap 4). Package policies and templates on disk are complete for current doc-only delivery model.

- **Behavioral Risk:** MEDIUM
  - Policy/spec/examples internally consistent (T03 PASS). Repo frontmatter adoption partial (Gap 9); reference-aware cleanup not executable (Gap 8).

- **Integration Risk:** MEDIUM
  - Zero hard dependencies and soft-dependency contracts align (T04). `.cursorrules` and RW guide cohesion lag package spec (Gaps 6–7).

- **Operational Risk:** MEDIUM
  - Cross-package validator non-functional (Gap 5); manual housekeeping only until Wave 3 automation.

**RC Impact Conclusion:**

- There are **no RC-blocking gaps** for the **Document Lifecycle framework package** implementation review.
- **Conditional pass / DEFER:** RC sign-off criteria definition (T06) may proceed, but **RC approval** should remain **DEFER** until HIGH gaps (Gaps 1–5) are **filed as remediation tasks** and accepted in the remediation backlog per orchestration §7.4 T06.
- All 16 gaps are **NON-BLOCKING** or **INFORMATIONAL**; none require package functional code changes before T06 sign-off criteria definition.

**Severity rollup:** 0 Critical · 5 High · 8 Medium · 3 Low

---

## Next Steps

- **For this task (E10:S01:T05):**
  - [x] Populate gap log from T01–T04 companions
  - [x] Run `validate_gap_log.py --strict` and fix schema violations
  - [x] Wire IPP and story checklist
  - [x] Release via `RW E10:S01:T05 --art` → `v0.10.1.5+1`

- **For follow-on (E10:S01:T06):**
  - [x] Define RC sign-off criteria (C1–C6) from this gap log → [T06](T06-define-rc-sign-off-criteria-and-remediation-tasks.md)
  - [x] File remediation tasks for HIGH gaps (Gaps 1–5) → [T08](T08-implement-doc-housekeeping-workflow-and-scripts.md), [T09](T09-sync-architecture-adr-dual-sot.md), [T10](T10-fix-document-lifecycle-validator.md)
  - [x] Schedule MEDIUM doc/cohesion backlog (Gaps 6–13) in T06 remediation list
  - [x] Optional LOW/informational items (Gaps 14–16) in T06 backlog

---

## References

- [T01 expectations baseline](expectations-baseline.md)
- [T02 component inventory](component-inventory-map.md)
- [T03 behavior validation report](lifecycle-behavior-validation-report.md)
- [T04 integration alignment report](integration-alignment-report.md)
- [T06 RC sign-off task](T06-define-rc-sign-off-criteria-and-remediation-tasks.md)
- [IPP-E10S01T05](../../../../implementation-cycles/IPP-E10S01T05-gap-log-risk-assessment.md)
- [E02:S13 T05 precedent](../../epic-02/story-13-workflow-management-package-implementation-review/T05-create-gap-log-and-risk-assessment.md)
- [gap-log-schema.md](../../../../architecture/standards-and-adrs/gap-log-schema.md)

---

## Version Anchor

**Forensic Marker Format:** `✅ COMPLETE (vRC.E.S.T+B)`

---

## Migration Notes

Migrated from embedded Story section via `generate_task_doc.py` (FR-016 Wave 1 tooling).

**Source Story:** `docs/kanban/epics/epic-10/story-01-document-lifecycle-package-implementation-review.md`

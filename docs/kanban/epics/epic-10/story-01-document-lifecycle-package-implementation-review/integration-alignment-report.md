---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-06T16:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Document Lifecycle Package — Integration and Dependency Alignment Report

**Task:** [E10:S01:T04](T04-review-integrations-and-dependency-alignment.md)  
**Expectations baseline:** [expectations-baseline.md](expectations-baseline.md) — §Integration Expectations  
**Component inventory:** T02 `component-inventory-map.md` *(not yet published — used IPP-E10S01T01 + expectations-baseline §Package Composition)*  
**Behavior validation input:** T03 `lifecycle-behavior-validation-report.md` *(not yet published — spot-check only)*  
**Planning SoT:** [IPP-E10S01T04](../../../../implementation-cycles/IPP-E10S01T04-integration-dependency-alignment.md)  
**Package root:** `packages/frameworks/doc-lifecycle/`  
**Adopter mirror:** `greenfield-install/packages/frameworks/doc-lifecycle/` (FR-110)  
**Review date:** 2026-06-06

**Status legend:** `ALIGNED` | `PARTIAL` | `GAP`

---

## Executive Summary

Integration alignment confirms the Document Lifecycle package **integrates as documented at the contract level** for zero hard dependencies, optional Kanban and Workflow Management soft dependencies, and FR-110 adopter mirror parity. **Cohesion gaps** remain where repo-level enforcement (`.cursorrules`), RW agent execution wiring, ADR dual SoT surface coverage, and cross-package README reciprocity lag the integration guides and package policies.

- **0 Critical** integration defects
- **0 High**
- **3 Medium** (RW agent guide missing lifecycle mapping; `.cursorrules` partial field mandate; RW-created changelog archives lack lifecycle frontmatter)
- **4 Low** (ADR relative-link drift; `policy-salience-schema` not packaged; `DOCUMENT_TEMPLATE` frontmatter in code block; Kanban/workflow-mgt README silent on doc-lifecycle)

Overall RC integration posture: **conditional pass** — contracts align; cohesion remediation deferred to T05/T06.

---

## Summary — Discrepancy Table (feeds T05)

**Gap ID prefix for T05:** `GAP-DOCLIFE-{TYPE}-NNN`

| ID | Domain | Status | Severity | T05 candidate | Evidence / notes |
| -- | ------ | ------ | -------- | ------------- | ---------------- |
| D1 | Hard dependencies | **ALIGNED** | — | — | README + PACKAGE_OVERVIEW: 10/10; no runtime imports; RW installer does not require doc-lifecycle |
| D2 | Kanban soft dependency (contract) | **ALIGNED** | — | — | `kanban-integration.md` modes; live Epic/Story/Task templates with 5-field frontmatter |
| D3 | Workflow-mgt soft dependency (contract) | **ALIGNED** | — | — | `workflow-mgt-integration.md` mapping table + RW MUST rule documented |
| D4 | Workflow-mgt RW cohesion | **PARTIAL** | Medium | GAP-DOCLIFE-INT-001 | `release-workflow-agent-execution.md` has lifecycle frontmatter only; no doc-type mapping table or Step 3 lifecycle hook |
| D5 | Repo agent rules (`.cursorrules`) | **PARTIAL** | Medium | GAP-DOCLIFE-INT-002 | Package spec: 5 required fields; `.cursorrules`: only `lifecycle` + `created_at` required |
| D6 | Architecture ADR dual SoT (policy pair) | **PARTIAL** | Low | GAP-DOCLIFE-INT-003 | `doc-lifecycle-metadata-spec.md` + `doc-lifecycle-policy.md`: content-equivalent; relative link path drift only (`./` vs bare) |
| D7 | Architecture ADR `policy-salience-schema` | **GAP** | Low | GAP-DOCLIFE-INT-004 | Present in `docs/architecture/standards-and-adrs/` only; absent from package `policies/` |
| D8 | greenfield-install parity (FR-110) | **ALIGNED** | — | — | `diff -rq` canonical ↔ mirror: no differences |
| D9 | Template propagation | **PARTIAL** | Low | GAP-DOCLIFE-INT-005 | Kanban `PLAN_DOC_TEMPLATE.md` + task templates: 5 fields; doc-lifecycle `DOCUMENT_TEMPLATE.md` embeds frontmatter in fenced block, not live YAML |
| D10 | Future integration artefacts | **ALIGNED** | — | — | README/PACKAGE_OVERVIEW mark workflows/scripts as `(future)`; not on disk by documented design |
| D11 | Cross-package doc crosswalk | **PARTIAL** | Low | GAP-DOCLIFE-INT-006 | Integration guide outbound links resolve; Kanban + workflow-mgt READMEs do not reciprocate doc-lifecycle |
| D12 | RW-created KB doc frontmatter | **PARTIAL** | Medium | GAP-DOCLIFE-INT-007 | Changelog archives (e.g. `CHANGELOG_v0.10.1.1+1.md`) lack lifecycle frontmatter; IPP/task docs include full 5 fields |

---

## 1. Independence / Hard Dependencies (Domain 1)

| Expectation (T01/README) | Observed | Status |
| ------------------------ | -------- | ------ |
| Zero hard dependencies | README §Hard dependencies: "None — pure documentation/policy package" | **ALIGNED** |
| Independence score 10/10 | README + PACKAGE_OVERVIEW + expectations-baseline | **ALIGNED** |
| No runtime imports from sibling packages | Package tree: policies, integration, templates, docs only — no Python/JS | **ALIGNED** |
| RW installer does not require doc-lifecycle | `install_release_workflow.py`: no `doc-lifecycle` references | **ALIGNED** |
| Package build/upload is optional sibling | workflow-mgt build scripts list doc-lifecycle as optional tarball target | **ALIGNED** |

**Evidence (V1):** `packages/frameworks/doc-lifecycle/README.md` lines 28–31; on-disk inventory (13 files, no `scripts/` or `workflows/`).

---

## 2. Kanban Soft Dependency (Domain 2)

| Expectation (T01 / kanban-integration.md) | Observed | Status |
| ----------------------------------------- | -------- | ------ |
| Standalone mode documented | Option 1: no lifecycle metadata required | **ALIGNED** |
| Metadata mode documented | Option 2: lifecycle on Epics/Stories; default `evergreen` | **ALIGNED** |
| Kanban docs default `evergreen` | Integration guide + agent rule in Step 4 | **ALIGNED** |
| Timeboxed exception for temp Stories | Documented with 90-day TTL example | **ALIGNED** |
| Kanban docs never `transient` | Best practice §3 in integration guide | **ALIGNED** |
| Reference-aware protection rules | Integration guide §Protection Rules | **ALIGNED** |
| Live kanban template frontmatter | Epic-10, Story-01, T01/T04 task docs: full 5-field YAML | **ALIGNED** |
| Kanban task template samples | e.g. `kanban/templates/epic-09/story-03/T02-*.md`: 5 fields | **ALIGNED** |

**Evidence (V2):** `integration/kanban-integration.md`; spot-check `Epic-10.md`, `expectations-baseline.md`, `T04-review-integrations-and-dependency-alignment.md`.

---

## 3. Workflow Management Soft Dependency (Domain 3)

| Expectation (T01 / workflow-mgt-integration.md) | Observed | Status |
| ----------------------------------------------- | -------- | ------ |
| Standalone mode documented | Option 1: manual cleanup | **ALIGNED** |
| Document-type → lifecycle mapping table | Renumbering → transient/14; analysis → timeboxed/90; sequences → transient/30 | **ALIGNED** (contract) |
| RW agents MUST set lifecycle on KB doc creation | Integration guide Step 2 agent rule | **ALIGNED** (contract) |
| RW agent execution guide embeds mapping | `release-workflow-agent-execution.md`: own frontmatter only; no mapping table or lifecycle Step | **PARTIAL** (D4) |
| Future Doc Housekeeping Workflow hook | Referenced as `(future)` in integration guide | **ALIGNED** (documented-future) |
| RW-created changelog archives carry lifecycle | `CHANGELOG_v0.10.1.1+1.md`: no YAML frontmatter | **PARTIAL** (D12) |
| IPP / task docs from RW carry lifecycle | IPP-E10S01T04, T04 task doc: full 5-field frontmatter | **ALIGNED** |

**Evidence (V3):** `integration/workflow-mgt-integration.md` §Document Type → Lifecycle Mapping; grep `release-workflow-agent-execution.md` for lifecycle (frontmatter only); changelog archive header inspection.

---

## 4. Repo Agent Rules — `.cursorrules` (Domain 4)

| Expectation (package metadata spec) | Observed (`.cursorrules`) | Status |
| ----------------------------------- | ------------------------- | ------ |
| Five required fields: lifecycle, ttl_days, created_at, expires_at, housekeeping_policy | Required: `lifecycle`, `created_at` only; others optional | **PARTIAL** (D5) |
| Enum values evergreen/timeboxed/transient | Matches package spec | **ALIGNED** |
| Housekeeping policy keep/archive/delete | Documented in cursorrules | **ALIGNED** |
| Automated expiration management | cursorrules §Automated Management (high-level) | **ALIGNED** (doc-level; no script) |

**Evidence (V4):** `.cursorrules` §Document Lifecycle Management (lines 738–763); `policies/doc-lifecycle-metadata-spec.md` §Required Fields.

---

## 5. Architecture ADR Dual SoT (Domain 5)

| Surface | Package `policies/` | `docs/architecture/standards-and-adrs/` | Status |
| ------- | ------------------- | --------------------------------------- | ------ |
| `doc-lifecycle-metadata-spec.md` | Present | Present | **PARTIAL** (D6) — link path drift only |
| `doc-lifecycle-policy.md` | Present | Present | **PARTIAL** (D6) — link path drift only |
| `policy-salience-schema.md` | **Absent** | Present (evergreen, 5-field frontmatter) | **GAP** (D7) |
| `kb-structure-overview.md` | Referenced in policies | Not cross-checked in T04 | — |

**Diff summary (metadata-spec + policy):** Content substantively identical; differences limited to relative markdown links (`./file.md` vs `file.md`) in Related Documents sections.

**Evidence (V5):**

```bash
$ diff -q packages/frameworks/doc-lifecycle/policies/doc-lifecycle-metadata-spec.md \
    docs/architecture/standards-and-adrs/doc-lifecycle-metadata-spec.md
Files differ  # link paths only (verified via diff -u)

$ ls packages/frameworks/doc-lifecycle/policies/
doc-lifecycle-metadata-spec.md  doc-lifecycle-policy.md
# policy-salience-schema.md not packaged
```

---

## 6. greenfield-install Parity — FR-110 (Domain 6)

| Expectation (T01 / FR-110) | Observed | Status |
| -------------------------- | -------- | ------ |
| Adopter mirror at `greenfield-install/packages/frameworks/doc-lifecycle/` | Directory present | **ALIGNED** |
| Byte-identical tree vs canonical | `diff -rq`: no output (exit 0) | **ALIGNED** |
| README cites FR-110 lean vendor path | README §Adopter distribution | **ALIGNED** |

**Evidence (V6):**

```bash
$ diff -rq packages/frameworks/doc-lifecycle \
    greenfield-install/packages/frameworks/doc-lifecycle
# (no differences)
```

---

## 7. Template Propagation and Link Integrity (Domain 7)

| Template / artefact | Lifecycle frontmatter | Status |
| ------------------- | --------------------- | ------ |
| `doc-lifecycle/templates/DOCUMENT_TEMPLATE.md` | Example in fenced YAML block, not document frontmatter | **PARTIAL** (D9) |
| `kanban/templates/PLAN_DOC_TEMPLATE.md` | Live 5-field frontmatter | **ALIGNED** |
| Kanban task templates (sample ≥3) | `lifecycle`, `ttl_days`, `created_at`, `expires_at`, `housekeeping_policy` | **ALIGNED** |
| `doc-lifecycle/templates/LIFECYCLE_EXAMPLES.md` | Multiple inline examples | **ALIGNED** (reference doc) |
| `doc-lifecycle/templates/POLICY_SALIENCE_TEMPLATE.md` | Present (salience, not lifecycle review scope) | **ALIGNED** |
| Integration guide outbound links | `../README.md`, `../../kanban/README.md`, `../../workflow-mgt/README.md` — resolve | **ALIGNED** |
| `PLAN_DOC_TEMPLATE.md` in doc-lifecycle package | **Not present** — lives under kanban templates (by design for IPW) | **ALIGNED** (cross-package) |

**Evidence (V7):** Template head inspection; expectations-baseline §Package Composition.

---

## 8. Documented-But-Future Integration Artefacts (Domain 8)

| Artefact | Documented location | On disk | Classification | Status |
| -------- | ------------------- | ------- | -------------- | ------ |
| Doc Housekeeping Workflow | `workflows/doc-housekeeping-workflow.yaml` (also cited under workflow-mgt in policies) | **Absent** | Documented-future per README `(future)` | **ALIGNED** |
| `validate_lifecycle_metadata.py` | `scripts/` | **Absent** | Documented-future | **ALIGNED** |
| `housekeeping_scanner.py` | `scripts/` | **Absent** | Documented-future | **ALIGNED** |
| RW auto-lifecycle in agent guide | workflow-mgt-integration.md Step 2 | Not in RW agent spec | Cohesion gap (D4), not false promise | **PARTIAL** (cohesion) |

T01 expectations baseline explicitly lists these as **documented-future, not T01 gaps**. T04 confirms classification holds; cohesion gap D4 is separate from false advertising.

**Evidence (V8):** README directory tree lines 148–152; `ls packages/frameworks/doc-lifecycle/workflows` → No such directory.

---

## 9. Cross-Package Documentation Crosswalk (Domain 9)

| Link direction | Expected | Observed | Status |
| -------------- | -------- | -------- | ------ |
| doc-lifecycle → kanban | `integration/kanban-integration.md` → kanban README | Resolves | **ALIGNED** |
| doc-lifecycle → workflow-mgt | `integration/workflow-mgt-integration.md` → workflow-mgt README + RW guide | Resolves | **ALIGNED** |
| kanban → doc-lifecycle | Reciprocal integration mention | Kanban README: no doc-lifecycle reference | **PARTIAL** (D11) |
| workflow-mgt → doc-lifecycle | Reciprocal integration mention | workflow-mgt README: no doc-lifecycle reference | **PARTIAL** (D11) |
| Architecture ADRs → package | Dual SoT by design (T01) | Policy pair synced except link paths; salience schema repo-only | **PARTIAL** (D6, D7) |

**Evidence (V9):** grep Kanban + workflow-mgt README for "doc-lifecycle" / "Document Lifecycle" → no matches.

---

## 10. Automated Verification Evidence (V1–V10)

| ID | Check | Result | Evidence |
| -- | ----- | ------ | -------- |
| V1 | Hard deps / 10/10 independence | **PASS** | README; no installer requirement |
| V2 | Kanban integration contract | **PASS** | Integration guide + live template samples |
| V3 | Workflow-mgt integration contract | **PARTIAL** | Contract PASS; RW cohesion PARTIAL (D4, D12) |
| V4 | `.cursorrules` vs package spec | **PARTIAL** | 2 vs 5 required fields (D5) |
| V5 | ADR dual SoT drift | **PARTIAL** | Link drift (D6); salience absent in package (D7) |
| V6 | greenfield-install parity | **PASS** | `diff -rq` clean |
| V7 | Template propagation | **PARTIAL** | Kanban/PLAN templates PASS; DOCUMENT_TEMPLATE fenced block (D9) |
| V8 | Future artefacts classification | **PASS** | Documented-future consistent with T01 |
| V9 | Discrepancy table + severity | **PASS** | §Summary — 12 rows, T05 IDs prefixed |
| V10 | Task ↔ IPP ↔ companion wiring | **PASS** | Bidirectional links in T04, IPP, this report |

---

## 11. Compliance Assessment

| Integration domain | Contract alignment | Cohesion | Remediation owner |
| ------------------ | ------------------ | -------- | ----------------- |
| Hard dependencies | **Fully aligned** | — | — |
| Kanban soft dep | **Fully aligned** | — | — |
| Workflow-mgt soft dep | **Contract aligned** | RW guide + changelog frontmatter | T05 |
| Repo agent rules | **Partially aligned** | 5-field vs 2-field mandate | T05 |
| ADR dual SoT | **Mostly aligned** | Link drift; salience not packaged | T05/T06 |
| greenfield-install | **Fully aligned** | — | — |
| Templates | **Mostly aligned** | DOCUMENT_TEMPLATE format | T05 |
| Future artefacts | **Fully aligned** (as documented-future) | RW wiring deferred | Wave 3 / T05 |
| Cross-package docs | **Inbound aligned** | README reciprocity | T05 |

---

## References

- [IPP-E10S01T04](../../../../implementation-cycles/IPP-E10S01T04-integration-dependency-alignment.md)
- [T04 task doc](T04-review-integrations-and-dependency-alignment.md)
- [T05 gap log and risk assessment](T05-create-gap-log-and-risk-assessment.md) — authoritative `GAP-DOCLIFE-*` SoT
- [expectations-baseline.md](expectations-baseline.md)
- [E02:S13 integration-alignment-report precedent](../../epic-02/story-13-workflow-management-package-implementation-review/integration-alignment-report.md)
- [E10S01 orchestration plan §7.4 T04](../../../../implementation-cycles/E10S01-orchestration-plan.md)
- [FR-110 — greenfield-install](../../../fr-br/FR-110-lean-adopter-distribution-footprint-and-vendor-bundle.md)
- [gap-log-schema.md](../../../../architecture/standards-and-adrs/gap-log-schema.md)
- Package integration: `packages/frameworks/doc-lifecycle/integration/kanban-integration.md`, `workflow-mgt-integration.md`

---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-06T15:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Document Lifecycle Package — Component Inventory Map

**Task:** [E10:S01:T02](T02-inventory-package-components-and-map-to-expectations.md)  
**Expectations baseline:** [expectations-baseline.md](expectations-baseline.md)  
**Package root:** `packages/frameworks/doc-lifecycle/`  
**Adopter mirror (FR-110):** `greenfield-install/packages/frameworks/doc-lifecycle/`  
**Inventory date:** 2026-06-06  
**On-disk file count:** 13 (canonical) / 13 (mirror) — `diff -rq` identical trees

**Coverage status legend:** `Met` | `Partial` | `Gap` | `Undocumented` | `Superseded`

---

## Summary — Expected vs Actual Gap Table

| T01 / expectation | Actual inventory | Status | Evidence / notes |
| ----------------- | ---------------- | ------ | ---------------- |
| Doc Housekeeping Workflow | `workflows/doc-housekeeping-workflow.yaml` | **Gap** | PACKAGE_OVERVIEW §Workflows; README §Package Structure; not on disk |
| Lifecycle metadata validator | `scripts/validate_lifecycle_metadata.py` | **Gap** | PACKAGE_OVERVIEW §Scripts; not on disk |
| Expired-doc scanner | `scripts/housekeeping_scanner.py` | **Gap** | PACKAGE_OVERVIEW §Scripts; not on disk |
| `docs/` policy salience extensions | `docs/policy-salience-guide.md`, `docs/policy-salience-agent-parser.md` | **Undocumented** | On disk; README §Package Structure omits `docs/` |
| `POLICY_SALIENCE_TEMPLATE.md` | `templates/POLICY_SALIENCE_TEMPLATE.md` | **Undocumented** | On disk; README/PACKAGE_OVERVIEW tree lists only DOCUMENT_TEMPLATE + LIFECYCLE_EXAMPLES |
| `PACKAGE_PROPOSAL.md` | On disk at package root | **Partial** | Status still "Proposal"; links to repo ADRs not package policies |
| README / PACKAGE_OVERVIEW tree accuracy | Documented tree includes future `workflows/` + `scripts/`; omits `docs/`, salience template, PACKAGE_PROPOSAL | **Partial** | T01 §Package Composition is accurate; package manifest trees lag on-disk reality |
| Greenfield-install mirror parity (FR-110) | 13/13 identical files | **Met** | `diff -rq` exit 0 (2026-06-06) |
| Repo ADRs vs package policies | `docs/architecture/standards-and-adrs/doc-lifecycle-*.md` duplicate package SoT | **Partial** | T04 cross-check deferred; PACKAGE_PROPOSAL links to repo ADRs |
| RW auto-lifecycle on doc creation | Documented future in integration guide | **Gap** | workflow-mgt-integration.md; not implemented in RW guides (T04/T05) |
| Core package docs (README, OVERVIEW, GUIDE) | 4 root docs on disk | **Met** | T01 §Core Documents |
| Policies (metadata spec + lifecycle policy) | 2 policy files on disk | **Met** | T01 §Policies |
| Integration guides (Kanban + Workflow Mgt) | 2 integration files on disk | **Met** | T01 §Integration Guides |
| Standard templates (document + examples) | 2 templates on disk | **Met** | T01 §Templates |

---

## 1. Core Package Docs

| Component path | Purpose | T01 ref | Status | Notes |
| -------------- | ------- | ------- | ------ | ----- |
| `README.md` | Package manifest, modularity, quick start, adoption | Core Documents §1 | **Partial** | §Package Structure omits `docs/`, salience template, PACKAGE_PROPOSAL; lists future workflows/scripts |
| `PACKAGE_OVERVIEW.md` | Structure, usage scenarios, adoption pattern | Core Documents §2 | **Partial** | §Package Structure omits `docs/` and POLICY_SALIENCE template; documents future workflows/scripts |
| `PACKAGE_PROPOSAL.md` | Original package proposal and rationale | Core Documents §3 | **Partial** | On disk; header status "Proposal"; links to repo ADRs not package `policies/` |
| `IMPLEMENTATION_GUIDE.md` | Step-by-step adoption guide | Core Documents §4 | **Met** | Matches T01 adoption steps |

---

## 2. Policies

| Component path | Purpose | T01 ref | Status | Notes |
| -------------- | ------- | ------- | ------ | ----- |
| `policies/doc-lifecycle-metadata-spec.md` | Five-field metadata schema | Policies §5 | **Met** | Package SoT for metadata schema |
| `policies/doc-lifecycle-policy.md` | Governance, classification, housekeeping | Policies §6 | **Met** | Package SoT for lifecycle policy |

---

## 3. Templates

| Component path | Purpose | T01 ref | Status | Notes |
| -------------- | ------- | ------- | ------ | ----- |
| `templates/DOCUMENT_TEMPLATE.md` | KB document template with lifecycle frontmatter | Templates §7 | **Met** | |
| `templates/LIFECYCLE_EXAMPLES.md` | Examples per lifecycle type | Templates §8 | **Met** | |
| `templates/POLICY_SALIENCE_TEMPLATE.md` | Policy salience frontmatter template | Policy Salience (T01 §Expected Lifecycle Behaviors) | **Undocumented** | On disk; omitted from README/PACKAGE_OVERVIEW package trees |

---

## 4. Integration Guides

| Component path | Purpose | T01 ref | Status | Notes |
| -------------- | ------- | ------- | ------ | ----- |
| `integration/kanban-integration.md` | Kanban lifecycle integration | Integration Guides §10 | **Met** | Soft dependency; optional standalone |
| `integration/workflow-mgt-integration.md` | RW / workflow lifecycle integration | Integration Guides §11 | **Partial** | Documents future Doc Housekeeping Workflow + RW auto-lifecycle; not implemented |

---

## 5. docs/ Extensions

| Component path | Purpose | T01 ref | Status | Notes |
| -------------- | ------- | ------- | ------ | ----- |
| `docs/policy-salience-guide.md` | Author guide for `policy_salience` YAML sections | Policy Salience (T01 §Expected Lifecycle Behaviors) | **Undocumented** | On disk; README §Package Structure omits `docs/` directory |
| `docs/policy-salience-agent-parser.md` | Agent parser expectations for policy salience | Policy Salience (T01 §Expected Lifecycle Behaviors) | **Undocumented** | Deep repo adoption validation deferred to T03 |

---

## 6. Workflows & Scripts (Documented Future)

| Component path | Purpose | T01 ref | Status | Notes |
| -------------- | ------- | ------- | ------ | ----- |
| `workflows/doc-housekeeping-workflow.yaml` | Automated housekeeping workflow | Documented-Future §Doc Housekeeping Workflow | **Gap** | Expected in README + PACKAGE_OVERVIEW; directory not on disk |
| `scripts/validate_lifecycle_metadata.py` | Validator for lifecycle metadata | Documented-Future §Lifecycle metadata validator | **Gap** | Expected in PACKAGE_OVERVIEW §Scripts; not on disk |
| `scripts/housekeeping_scanner.py` | Scanner for expired documents | Documented-Future §Expired-doc scanner | **Gap** | Expected in PACKAGE_OVERVIEW §Scripts; not on disk |

**On-disk status:** No `workflows/` or `scripts/` directories present under canonical or greenfield mirror (2026-06-06 `find`).

---

## 7. Adopter Mirror & Cross-Cutting Drift

| Topic | Expected (T01 / FR-110) | Actual | Status |
| ----- | ------------------------- | ------ | ------ |
| Greenfield-install parity | Mirror matches canonical package | 13/13 files; `diff -rq` identical | **Met** |
| README package tree | Reflects on-disk composition | Omits `docs/`, salience template, PACKAGE_PROPOSAL; includes future dirs | **Partial** |
| PACKAGE_OVERVIEW package tree | Reflects on-disk composition | Same omissions as README | **Partial** |
| Repo ADR duplication | Package policies are package SoT | `docs/architecture/standards-and-adrs/doc-lifecycle-metadata-spec.md` and `doc-lifecycle-policy.md` exist separately | **Partial** | T04 owns drift resolution |
| `.cursorrules` lifecycle section | Mirrors package metadata schema for agent enforcement | Present in repo root | **Met** | Cross-check with T03 repo frontmatter audit |
| PACKAGE_PROPOSAL status | Active package artefact | Header still "Proposal" (2025-12-04) | **Partial** | Content valid; status label stale |

### On-Disk File Manifest (canonical = mirror)

```
packages/frameworks/doc-lifecycle/
├── README.md
├── PACKAGE_OVERVIEW.md
├── PACKAGE_PROPOSAL.md
├── IMPLEMENTATION_GUIDE.md
├── policies/
│   ├── doc-lifecycle-metadata-spec.md
│   └── doc-lifecycle-policy.md
├── integration/
│   ├── kanban-integration.md
│   └── workflow-mgt-integration.md
├── templates/
│   ├── DOCUMENT_TEMPLATE.md
│   ├── LIFECYCLE_EXAMPLES.md
│   └── POLICY_SALIENCE_TEMPLATE.md
└── docs/
    ├── policy-salience-guide.md
    └── policy-salience-agent-parser.md
```

---

## References

- [T01 expectations baseline](expectations-baseline.md)
- [T05 gap log and risk assessment](T05-create-gap-log-and-risk-assessment.md) — authoritative `GAP-DOCLIFE-*` SoT
- [IPP-E10S01T02](../../../../../implementation-cycles/IPP-E10S01T02-component-inventory-map.md)
- [E02:S13 component inventory map precedent](../../epic-02/story-13-workflow-management-package-implementation-review/component-inventory-map.md)
- Package: `packages/frameworks/doc-lifecycle/`
- Adopter mirror: `greenfield-install/packages/frameworks/doc-lifecycle/`
- Orchestration: [E10S01-orchestration-plan.md](../../../../../implementation-cycles/E10S01-orchestration-plan.md) §3.2

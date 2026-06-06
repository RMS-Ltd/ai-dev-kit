---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-06T20:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Document Lifecycle Package — Behavior Validation Report

**Task:** [E10:S01:T03](T03-validate-lifecycle-behavior-against-documented-guidance.md)  
**Expectations baseline:** [expectations-baseline.md](expectations-baseline.md)  
**Package root:** `packages/frameworks/doc-lifecycle/`  
**Validation date:** 2026-06-06

**Status legend:** `PASS` | `PARTIAL` | `FAIL`

---

## Executive Summary

Behavioral validation confirms the **Document Lifecycle package policies and examples are internally consistent** and align with the T01 expectations baseline. Observable gaps are **cohesion and enforcement drift**, not contradictory lifecycle rules:

- **0 Critical** behavioral defects (policy contradictions)
- **2 High** (validator runtime broken — missing `yaml` import; validator enforces 2-field subset vs spec 5-field)
- **5 Medium** (`.cursorrules` 2-field vs spec 5-field; 40% of `docs/` lacks frontmatter; partial frontmatter on 51 docs; housekeeping automation absent; reference-aware cleanup not observable)
- **2 Low** (LIFECYCLE_EXAMPLES Example 7 promoted `expires_at` uses original `created_at` not recalc from promotion date — doc-only; metadata spec references absent `kb-structure-overview.md`)

Overall RC posture: **conditional pass** — package **documents** lifecycle behavior coherently; **runtime enforcement and automation** lag documented expectations. Remediation backlog (T05) should prioritize validator repair, `.cursorrules`/spec alignment, and frontmatter migration.

---

## Summary — Discrepancy Table (feeds T05)

| ID | Domain | Status | Severity | Evidence / notes |
| -- | ------ | ------ | -------- | ---------------- |
| D1 | Metadata spec five-field rule | **PASS** | — | `doc-lifecycle-metadata-spec.md` §Required Fields lists all five |
| D2 | `.cursorrules` vs spec | **PARTIAL** | Medium | `.cursorrules` §738–749: 2 required + 3 optional; spec requires all five |
| D3 | LIFECYCLE_EXAMPLES alignment | **PASS** | — | 10/10 YAML blocks include all five fields; enums/defaults match spec |
| D4 | Classification & TTL defaults | **PASS** | — | Policy §Classification + metadata spec §Document Type mapping match T01 baseline |
| D5 | TTL/`expires_at` arithmetic (repo) | **PASS** | — | 20 timeboxed/transient docs checked; 20/20 within ±1 day |
| D6 | Repo frontmatter coverage | **PARTIAL** | Medium | 1565/2695 (58.1%) full five fields; 1079 (40.0%) no frontmatter |
| D7 | Partial frontmatter pattern | **PARTIAL** | Medium | 51 docs with frontmatter missing `ttl_days`/`expires_at` (often `.cursorrules` 3-field pattern) |
| D8 | Reference-aware cleanup observability | **PARTIAL** | Medium | Documented in policy + LIFECYCLE_EXAMPLES §Protection Rules; no scanner/script on disk |
| D9 | Housekeeping automation | **PARTIAL** | Medium | `validate_lifecycle_metadata.py`, `housekeeping_scanner.py`, `doc-housekeeping-workflow.yaml` all **MISSING** (expected per T01) |
| D10 | Agent rules (`.cursorrules` vs policy) | **PARTIAL** | Medium | Policy mandates five-field creation; `.cursorrules` omits mandatory `ttl_days`/`expires_at`/`housekeeping_policy` |
| D11 | `DocumentLifecycleValidator` runtime | **FAIL** | High | `NameError: name 'yaml' is not defined` at line 144 — validator crashes before completing scan |
| D12 | Validator vs spec field coverage | **PARTIAL** | High | `required_fields = ['lifecycle', 'created_at']` only; spec requires five |
| D13 | Metadata spec broken link | **PARTIAL** | Low | Spec references `./kb-structure-overview.md` — file not in package |
| D14 | Example 7 promotion `expires_at` | **PARTIAL** | Low | Promoted block recalculates from original `created_at`, not promotion date — illustrative only |

---

## 1. Metadata Schema Behavioral Validation

### 1.1 Five-field spec vs enforcement surfaces

| Surface | Required fields | Optional fields | Status |
| ------- | --------------- | --------------- | ------ |
| `doc-lifecycle-metadata-spec.md` | `lifecycle`, `ttl_days`, `created_at`, `expires_at`, `housekeeping_policy` | — | **PASS** |
| T01 `expectations-baseline.md` | Same five | — | **PASS** |
| `.cursorrules` §Document Lifecycle Management | `lifecycle`, `created_at` | `ttl_days`, `expires_at`, `housekeeping_policy` | **PARTIAL** (D2) |
| `DocumentLifecycleValidator` | `lifecycle`, `created_at` | Validates others if present | **PARTIAL** (D12) |

**Evidence (V1):**

```
.cursorrules Required Fields: lifecycle, created_at (2)
.cursorrules Optional Fields: ttl_days, expires_at, housekeeping_policy (3)
Metadata spec Required Fields: lifecycle, ttl_days, created_at, expires_at, housekeeping_policy (5)
```

### 1.2 Enum and default alignment

| Check | Expected (spec) | Observed | Status |
| ----- | --------------- | -------- | ------ |
| `lifecycle` enum | evergreen \| timeboxed \| transient | Same in spec, policy, examples, validator | **PASS** |
| `housekeeping_policy` enum | keep \| archive \| delete | Same across surfaces | **PASS** |
| Evergreen defaults | `ttl_days: null`, `housekeeping_policy: keep` | LIFECYCLE_EXAMPLES Ex 1–2, policy §Evergreen | **PASS** |
| Timeboxed default TTL | 90 days, `archive` | LIFECYCLE_EXAMPLES Ex 3–4, policy §Timeboxed | **PASS** |
| Transient default TTL | 14 or 30 days, `delete` | LIFECYCLE_EXAMPLES Ex 5–6 | **PASS** |

---

## 2. Classification & TTL Behavioral Validation

| Expectation (T01) | Observed | Status |
| ----------------- | -------- | ------ |
| Default-to-evergreen rule | Policy §1 + metadata spec §lifecycle default | **PASS** |
| Document-type mapping table | Spec §Document Type → Lifecycle; LIFECYCLE_EXAMPLES §Agent Decision Tree table | **PASS** (identical rows) |
| Kanban docs → evergreen | `kanban-integration.md` + policy | **PASS** |
| RW doc-type mapping | `workflow-mgt-integration.md` renumbering→transient/14, analysis→timeboxed/90 | **PASS** |
| Promotion/demotion explicit + logged | Spec §Lifecycle Transitions; LIFECYCLE_EXAMPLES Ex 7–8 | **PASS** |

**Evidence (V2):**

```
$ python3 … LIFECYCLE_EXAMPLES scoring
YAML frontmatter blocks: 10
Summary: 10/10 PASS (all five fields present)
```

**Evidence (V5):**

```
TTL arithmetic on docs/ (timeboxed/transient with ttl_days + dates):
Checked: 20, PASS (±1 day): 20, FAIL: 0
```

---

## 3. Reference-Aware Cleanup Behavioral Validation

| Expectation (T01 + policy §3) | Observed | Status |
| ----------------------------- | -------- | ------ |
| Protect docs linked from evergreen | Documented in policy, metadata spec §Protection Rules, LIFECYCLE_EXAMPLES §Protection Rules | **PASS** (doc) |
| Protect changelog-referenced docs | Same surfaces | **PASS** (doc) |
| Git history always preserved | Policy + examples | **PASS** (doc) |
| Auto-upgrade to `archive` when referenced | Documented action | **PARTIAL** (D8) — no executable reference scan |
| Observable reference-scan logic in package | Expected in future `housekeeping_scanner.py` | **FAIL** (observability) — script absent |

**Evidence (V8):**

```
$ rg -l "reference.scan|auto.upgrade|housekeeping_scanner" packages/frameworks/doc-lifecycle/
→ Matches only in README, PACKAGE_OVERVIEW, PACKAGE_PROPOSAL, metadata-spec (documentation mentions only)
No Python/shell implementation on disk
```

---

## 4. Agent Rules Behavioral Validation

| Expectation (policy §5 Agent-Driven Management) | Observed | Status |
| ----------------------------------------------- | -------- | ------ |
| Agents MUST set lifecycle on KB doc creation | Policy + IMPLEMENTATION_GUIDE | **PASS** (doc) |
| Agents MUST validate front-matter before commit | Policy §2 Enforcement | **PARTIAL** — no pre-commit hook wired to doc-lifecycle validator |
| Agents MUST NOT silently promote/demote | Spec §Lifecycle Transitions | **PASS** (doc) |
| Agent decision tree (5 steps) | LIFECYCLE_EXAMPLES §Agent Decision Tree matches spec | **PASS** |
| `.cursorrules` mirrors package five-field schema | `.cursorrules` uses 2+3 field model | **PARTIAL** (D2, D10) |
| `.cursorrules` automated housekeeping | §Automated Management describes expiration checks | **PARTIAL** — aspirational; no workflow on disk |

---

## 5. Housekeeping Automation Behavioral Validation

| Expectation (T01 §Documented-Future Artefacts) | Observed | Status |
| ---------------------------------------------- | -------- | ------ |
| Doc Housekeeping Workflow YAML | `workflows/doc-housekeeping-workflow.yaml` | **MISSING** (expected) |
| Lifecycle metadata validator script | `scripts/validate_lifecycle_metadata.py` | **MISSING** (expected) |
| Expired-doc scanner | `scripts/housekeeping_scanner.py` | **MISSING** (expected) |
| Manual housekeeping process documented | Policy §Housekeeping Process (Scan→Filter→Analyze→Execute→Log) | **PASS** (doc-only) |
| RW auto-lifecycle on doc creation | `workflow-mgt-integration.md` — documented future | **PARTIAL** — not in RW agent guide |

**Evidence (V7):**

```
MISSING: packages/frameworks/doc-lifecycle/scripts/validate_lifecycle_metadata.py
MISSING: packages/frameworks/doc-lifecycle/scripts/housekeeping_scanner.py
MISSING: packages/frameworks/doc-lifecycle/workflows/doc-housekeeping-workflow.yaml
```

---

## 6. DocumentLifecycleValidator Runtime Validation

| Expectation (metadata spec + E8:S02:T02) | Observed | Status |
| ---------------------------------------- | -------- | ------ |
| Validator executes against `docs/` | Crashes with `NameError: name 'yaml' is not defined` | **FAIL** (D11) |
| Validates all five required fields | Only checks `lifecycle`, `created_at` | **PARTIAL** (D12) |
| Validates enum values | `lifecycle`, `housekeeping_policy` when present | **PASS** (code review) |
| Validates ISO 8601 dates | `created_at`, `expires_at` when string | **PARTIAL** — crashes on YAML-parsed integer dates |
| PyYAML dependency declared | `yaml` used but never imported | **FAIL** |

**Evidence (V3):**

```
$ python3 … DocumentLifecycleValidator on epic-10/story-01 folder
Traceback … document_lifecycle_validator.py line 144: if not yaml:
NameError: name 'yaml' is not defined
```

**Evidence (V4):**

```python
# document_lifecycle_validator.py line 162
required_fields = ['lifecycle', 'created_at']  # spec requires 5 fields
```

**Field coverage matrix:**

| Field | Spec required | Validator required | Validator validates if present |
| ----- | ------------- | ------------------ | -------------------------------- |
| `lifecycle` | Y | Y | Y (enum) |
| `ttl_days` | Y | N | Y (type) |
| `created_at` | Y | Y | Y (ISO format) |
| `expires_at` | Y | N | Y (ISO format) |
| `housekeeping_policy` | Y | N | Y (enum) |

---

## 7. Repo Frontmatter Sample Audit

**Scope:** All `docs/**/*.md` (2695 files) + stratified path review.

| Metric | Count | % of total |
| ------ | ----- | ---------- |
| Total markdown files | 2695 | 100% |
| With any frontmatter | 1616 | 60.0% |
| No frontmatter | 1079 | 40.0% |
| Full five fields | 1565 | 58.1% |
| Partial frontmatter (1–4 fields) | 51 | 1.9% |

**Stratified samples (all sampled paths with frontmatter show 5/5 fields in active kanban/IPP/architecture/changelog bands):**

| Band | Sample path | Fields |
| ---- | ----------- | ------ |
| Kanban task docs | `epic-10/story-01/.../T01-*.md` | 5/5 |
| Implementation cycles | `implementation-cycles/IPP-E10S01T03-*.md` | 5/5 |
| Architecture ADRs | `docs/architecture/standards-and-adrs/ADR-*.md` | 5/5 (when frontmatter present) |
| Changelog archive | `docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v*.md` | Mixed — many without frontmatter |

**Partial frontmatter pattern (51 docs):** Predominantly `lifecycle` + `created_at` + `housekeeping_policy` without `ttl_days`/`expires_at` — matches `.cursorrules` 2+3 optional model, not spec five-required model.

**Evidence (V6):** Automated scan 2026-06-06; partial list includes `docs/analysis/*.md`, legacy IPP files under `implementation-cycles/`.

---

## 8. Automated Verification Evidence (V1–V10)

| ID | Check | Result | Evidence |
| -- | ----- | ------ | -------- |
| V1 | Metadata spec five-field vs `.cursorrules` | **PARTIAL** | 5 vs 2 required fields |
| V2 | LIFECYCLE_EXAMPLES alignment | **PASS** | 10/10 blocks complete |
| V3 | Validator smoke | **FAIL** | `NameError: yaml` — cannot complete scan |
| V4 | Validator vs spec gap | **PARTIAL** | 2 required vs 5 in spec |
| V5 | TTL arithmetic | **PASS** | 20/20 repo samples |
| V6 | Repo frontmatter coverage | **PARTIAL** | 58.1% full five-field; 40% no FM |
| V7 | Missing package scripts | **PASS** (expected) | All three future artefacts absent as documented |
| V8 | Reference-aware cleanup observability | **PARTIAL** | Documented only; no scanner |
| V9 | Scope guard | **PASS** | No edits under `packages/frameworks/doc-lifecycle/` |
| V10 | Wiring | **PASS** | Task ↔ IPP ↔ companion links resolve |

---

## 9. Compliance Assessment

| Area | Compliance | Remediation owner |
| ---- | ---------- | ----------------- |
| Package policy/spec coherence | **Fully compliant** | — |
| LIFECYCLE_EXAMPLES | **Fully compliant** | — |
| T01 expectations baseline alignment | **Fully compliant** | — |
| `.cursorrules` agent enforcement | **Partially compliant** | T05 — align to five-field schema |
| Repo frontmatter adoption | **Partially compliant** | T05/T06 — migration wave |
| Reference-aware cleanup runtime | **Not implemented** (documented future) | T06 — housekeeping scanner |
| Housekeeping automation | **Not implemented** (documented future) | T06 — workflow + scripts |
| `DocumentLifecycleValidator` | **Non-functional** (import bug) | T05 — E8 validator fix |
| Validator field coverage | **Partially compliant** | T05 — extend to five required fields |

---

## References

- [IPP-E10S01T03](../../../../../../implementation-cycles/IPP-E10S01T03-lifecycle-behavior-validation.md)
- [T03 task doc](T03-validate-lifecycle-behavior-against-documented-guidance.md)
- [T05 gap log and risk assessment](T05-create-gap-log-and-risk-assessment.md) — authoritative `GAP-DOCLIFE-*` SoT
- [T01 expectations baseline](expectations-baseline.md)
- [doc-lifecycle-metadata-spec.md](../../../../../../packages/frameworks/doc-lifecycle/policies/doc-lifecycle-metadata-spec.md)
- [doc-lifecycle-policy.md](../../../../../../packages/frameworks/doc-lifecycle/policies/doc-lifecycle-policy.md)
- [LIFECYCLE_EXAMPLES.md](../../../../../../packages/frameworks/doc-lifecycle/templates/LIFECYCLE_EXAMPLES.md)
- [DocumentLifecycleValidator](../../../../../../packages/frameworks/tooling-automation/validators/framework/document_lifecycle_validator.py)
- [E02:S13:T03 precedent](../../epic-02/story-13-workflow-management-package-implementation-review/workflow-behavior-validation-report.md)

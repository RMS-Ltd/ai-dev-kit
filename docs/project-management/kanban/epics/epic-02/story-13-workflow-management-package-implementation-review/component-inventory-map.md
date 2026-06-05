---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Workflow Management Package — Component Inventory Map

**Task:** [E02:S13:T02](T02-inventory-package-components-and-map-to-expectations.md)  
**Expectations baseline:** [T01-expectations-baseline.md](T01-expectations-baseline.md)  
**Pre-inventory input:** [E07:S07:T01 report §1–2](../../epic-07/story-07-code-reviews/T01-workflow-machinery-code-review-report.md)  
**Package root:** `packages/frameworks/workflow-mgt/`  
**Inventory date:** 2026-06-05  
**Behavior validation (E02:S13:T03):** [workflow-behavior-validation-report.md](workflow-behavior-validation-report.md)  
**Integration alignment (E02:S13:T04):** [integration-alignment-report.md](integration-alignment-report.md)

**Coverage status legend:** `Met` | `Partial` | `Gap` | `Undocumented` | `Superseded`

---

## Summary — Expected vs Actual Gap Table

| T01 / expectation | Actual inventory | Status | Evidence / notes |
| ----------------- | ---------------- | ------ | ---------------- |
| RW 13-step process | Live spec + YAML + 25+ validators; Step 9.5/9.6/12.5 | **Met** | T08 sync; machinery exceeds original T01 Step 9 list |
| UKW 8-step (T01) | Live 9 steps + Step 2.5 + flags (`-u/-p/-a/--rp/-c`) | **Partial** | T01 doc lag; registry + UKW excerpt aligned post-T08 |
| CMW deterministic scripts | `scripts/changelog/` (8 prod modules) | **Met** | `cmw.py`, archive, dedupe, size check |
| Intake 7-step | 6 `intake_*.py` + nested YAML | **Met** | T01 listed; trigger chain present |
| Validation scripts (4 in T01) | 25 `validate_*.py` in `validation/` + 4 in `validation/package/` + root gates | **Partial** | Expansion since T01; README still lists subset |
| `scripts/validation/check_changelog_size.py` | Only `scripts/changelog/check_changelog_size.py` | **Gap** | README + T01 path mismatch (E07 M2) |
| PVW, PIR, migration, testing, refactor YAML | Nested dirs + flat legacy copies | **Partial** | Present; 7 flat YAML lack deprecation (FR-050 / E07 H2) |
| `version_registry.py` (T01) | `build_semver_registry.py`, `migrate_to_task_touch.py`, task-touch tooling | **Superseded** | Renamed/superseded (E07 M3) |
| GitHub release script | `scripts/create_github_release.py` | **Met** | T01 expectation |
| Installers | `install_release_workflow.py` + greenfield/package helpers | **Partial** | Met core; additional install scripts undocumented in T01 |
| Agent execution guides | 25 vwmp guides under `KB/Documentation/Developer_Docs/vwmp/` | **Met** | Some KB paths still use `confidentia` examples (E07 M4) |
| `workflow-registry.yaml` `common_components` | `common/templates/`, `common/schemas/`, `common/utilities/` — **not present** | **Gap** | Registry drift |
| README path `docs/documentation/Developer_Docs/vwmp/` | Actual `KB/Documentation/Developer_Docs/vwmp/` | **Gap** | Path alias drift in README |
| Journal (FR-059) | `scripts/journal/` (10 prod modules) | **Undocumented** | Not in T01 baseline |
| Task split (FR-011) | `scripts/task_split/` (3 modules) | **Undocumented** | Not in T01 baseline |
| IPW validators | `validate_ipw_*`, `validate_plan_wiring.py` | **Undocumented** | Post-T01 additions |
| Release readiness gate | `scripts/validate_release_readiness.py` (root) | **Undocumented** | Post-T01; layout differs from `validation/` peers |
| RW Step 7 validators | `validate_rw_step7_*` (root) | **Undocumented** | Post-T01 additions |
| Packaging scripts | `build_*`, `upload_*` (6+ root modules) | **Undocumented** | Maintainer-only; unclear adopter value (E07 L2) |
| Empty `scripts/install/` | 0 files | **Gap** | Placeholder dir (E07 L1) |

---

## 1. Core Package Docs

| Component path | Purpose | T01 ref | Status | Notes |
| -------------- | ------- | ------- | ------ | ----- |
| `README.md` | Package manifest, workflows, scripts, install modes | Package composition | **Partial** | Lists 4 validators; wrong `check_changelog_size` path; vwmp path alias |
| `CHANGELOG.md` | Package SemVer history (v2.3.0) | — | **Met** | Present |
| `AGENTS.md` | Workflow-framework agent roles | — | **Undocumented** | Not in T01; Validation/CMW roles |
| `canonical-rw-steps.yaml` | RW step list SoT | RW steps | **Met** | Refreshed E02:S13:T08 |
| `cursorrules-rw-trigger-section.md` | Portable RW excerpt | Cursor rules | **Met** | Dual-source parity maintained |
| `cursorrules-ukw-trigger-section.md` | Portable UKW excerpt | Cursor rules | **Met** | Dual-source parity maintained |
| `.markdownlint.json` | Lint config | — | **Undocumented** | Supporting artefact |

---

## 2. KB / Methodology

### 2.1 vwmp Agent Execution Guides (`KB/Documentation/Developer_Docs/vwmp/`)

**Count:** 25 `.md` files

| Component path | Purpose | T01 ref | Status | Notes |
| -------------- | ------- | ------- | ------ | ----- |
| `agent-driven-workflow-execution.md` | General methodology | Core methodology | **Met** | |
| `release-workflow-agent-execution.md` | RW step-by-step | RW guide | **Met** | Some `confidentia` examples remain |
| `release-workflow-reference.md` | Complete RW reference | RW reference | **Met** | |
| `update-kanban-workflow-agent-execution.md` | UKW guide | UKW guide | **Met** | Live 9+2.5 steps |
| `implementation-planning-workflow-agent-execution.md` | IPW guide | — | **Undocumented** | Post-T01 |
| `intake-workflow-agent-execution.md` | Intake guide | Intake | **Met** | |
| `package-version-workflow-agent-execution.md` | PVW guide | — | **Partial** | T01 listed PVW YAML only |
| `pir-workflow-agent-execution.md` (+ reference, usage, kanban/versioning guides) | PIR suite | — | **Partial** | T01 listed PIR YAML |
| `migration-workflow-agent-execution.md` | Migration guide | — | **Partial** | |
| `refactor-workflow-agent-execution.md` | Refactor guide | — | **Partial** | |
| `testing-workflow-agent-execution.md` | Testing guide | — | **Partial** | |
| `portable-workflow-implementation-guide.md` | Adopter implementation | Implementation guide | **Met** | |
| `workflow-step-tracker-contract.md` | Tracker contract | TODO tracking | **Undocumented** | ADR-011 |
| `board-stamp-authority.md`, `state-icons.md` | Kanban stamp/icon policy | — | **Undocumented** | FR-097 / UXR-012 |
| `rw-installer-quickstart-guide.md` | Installer quickstart | Install | **Partial** | Beyond T01 installer list |
| Other vwmp guides (PDCA, forensic recovery, ECC bridge, customization) | Supporting methodology | — | **Undocumented** | Organic growth |

### 2.2 Architecture / Standards (`KB/Architecture/Standards_and_ADRs/`)

| Component path | Purpose | T01 ref | Status | Notes |
| -------------- | ------- | ------- | ------ | ----- |
| `versioning-policy.md` | Version schema | Versioning policy | **Met** | |
| `versioning-strategy.md` | Versioning strategy | Versioning policy | **Met** | |
| `workflow-flaws-reference-guide.md` | RW flaws reference | Reference docs | **Met** | |
| `versioning-error-reference-guide.md` | Versioning errors | Reference docs | **Met** | |

### 2.3 Analysis & Templates

| Area | Count | T01 ref | Status | Notes |
| ---- | ----- | ------- | ------ | ----- |
| `KB/Analysis/*.md` | 5+ | — | **Undocumented** | Adoption friction, Step 7 hardening, etc. |
| `KB/Documentation/Templates/*.md` | 4+ | — | **Undocumented** | PDCA phases, commit-message language |

---

## 3. Workflows

### 3.1 Registry (`workflows/workflow-registry.yaml`)

**Registered workflows:** 11 (RW, CMW, UKW, PIR, Intake, Migration, Refactor, Testing, PVW, FHM, ICW/IPW)

| Workflow | Nested SoT | Flat legacy copy | Registry | Status |
| -------- | ---------- | ---------------- | -------- | ------ |
| RW | `release-workflow/` | Deprecated stub | Yes | **Met** |
| UKW | `update-kanban-workflow/` | `update-kanban-workflow.yaml` | Yes | **Partial** | Flat copy not deprecated |
| CMW | `changelog-management-workflow/` | `changelog-management-workflow.yaml` | Yes | **Partial** |
| Intake | `intake-workflow/` | `intake-workflow.yaml` | Yes | **Partial** |
| PVW | `package-version-workflow/` | `package-version-workflow.yaml` | Yes | **Partial** |
| PIR | `post-implementation-review/` | `pir-workflow.yaml` | Yes | **Partial** |
| ICW/IPW | `implementation-cycle-workflow/` | — | Yes | **Met** |
| Migration | `migration-workflow/` | `migration-workflow.yaml` | Yes | **Partial** |
| Testing | `testing-workflow/` | `testing-workflow.yaml` | Yes | **Partial** |
| Refactor | `refactor-workflow/` | `refactor-workflow.yaml` | Yes | **Partial** |
| FHM | `framework-health-monitoring-workflow/` | — | Yes | **Met** |

**Flat root YAML count:** 8 (7 non-RW copies without deprecation header + RW deprecated stub)

### 3.2 Cross-cutting workflow artefacts

| Component path | Purpose | T01 ref | Status | Notes |
| -------------- | ------- | ------- | ------ | ----- |
| `workflows/MIGRATION_GUIDE.md` | Flat → nested migration | — | **Undocumented** | FR-050 / T107 |
| `workflows/workflow-registry.yaml` → `common_components` | templates/schemas/utilities | Package composition | **Gap** | Dirs do not exist |

---

## 4. Scripts

### 4.1 By area (production `.py` counts)

| Area | Prod `.py` | Co-located tests | Owner | T01 ref | Status |
| ---- | ---------- | ---------------- | ----- | ------- | ------ |
| `scripts/validation/` | 25 | 9 | RW/shared | Validation (4 listed) | **Partial** | Expanded |
| `scripts/validation/package/` | 4 | 0 | PVW | — | **Undocumented** |
| `scripts/kanban/` | 20 | 4 | UKW/RW | UKW implied | **Partial** |
| `scripts/changelog/` | 8 | 0 | CMW | CMW scripts | **Met** |
| `scripts/version/` | 8 | 4 | RW/PVW | SemVer + registry | **Partial** | `version_registry.py` superseded |
| `scripts/journal/` | 10 | 0 | RW/shared | — | **Undocumented** |
| `scripts/documentation/` | 6 | 0 | shared | — | **Undocumented** |
| `scripts/icw/` | 2 | 3 | ICW/IPW | — | **Undocumented** |
| `scripts/task_split/` | 3 | 0 | Intake/shared | — | **Undocumented** |
| `scripts/install/` | 0 | 0 | RW | Installers | **Gap** | Empty dir |
| `scripts/` (root) | 57 | 17 | RW/Intake/shared/packaging | Mixed | **Partial** | See §4.2 |

### 4.2 Root orchestrators (selected)

| Script | Owner | T01 documented | Status |
| ------ | ----- | -------------- | ------ |
| `update_kanban_docs.py` | RW/UKW | Partial (Step 7) | **Partial** |
| `validate_release_readiness.py` | RW | No | **Undocumented** |
| `validate_rw_step7_completeness.py` | RW | No | **Undocumented** |
| `validate_rw_step7_post_commit.py` | RW | No | **Undocumented** |
| `validate_canonical_steps.py` | RW/shared | No | **Undocumented** |
| `validate-workflow-docs.py` | shared | No | **Undocumented** |
| `install_release_workflow.py` | RW | Yes | **Met** |
| `intake_*.py` (6 modules) | Intake | Partial | **Partial** |
| `trigger_registry.py`, `workflow_executor.py` | RW/E2:S07 | Partial | **Partial** |
| `create_github_release.py` | RW | Yes | **Met** |
| `build_*`, `upload_*` (6 modules) | packaging | No | **Undocumented** |

### 4.3 T01-listed validation scripts

| T01 path | Actual path | Status |
| -------- | ----------- | ------ |
| `scripts/validation/validate_branch_context.py` | Same | **Met** |
| `scripts/validation/validate_changelog_format.py` | Same | **Met** |
| `scripts/validation/validate_version_bump.py` | Same | **Met** |
| `scripts/validation/check_changelog_size.py` | `scripts/changelog/check_changelog_size.py` | **Gap** |

---

## 5. Config & Install

| Component path | Purpose | T01 ref | Status | Notes |
| -------------- | ------- | ------- | ------ | ----- |
| `config/rw-config-schema.md` | Config schema | Configuration | **Met** | |
| `config/examples/rw-config-*.yaml` | Install templates (4) | Configuration | **Met** | |
| `config/ecc-adk-bridge.yaml.template` | ECC bridge | — | **Undocumented** | |
| `config/github-issue-install-signoff-contract.yaml` | Install signoff | — | **Undocumented** | |
| `config/install-error-codes.yaml` | Install errors | — | **Undocumented** | |
| `scripts/install_release_workflow.py` | RW installer CLI | Installation | **Met** | |
| `scripts/README-rw-installer.md` | Installer docs | Installation | **Met** | |
| `docs/PACKAGE_INSTALLATION_GUIDE.md` | Tar.gz install | — | **Undocumented** | |
| `docs/rw-trigger-dual-source-parity.md` | RW parity checklist | — | **Undocumented** | T08 deliverable |
| `docs/ukw-dual-source-parity.md` | UKW parity checklist | — | **Undocumented** | |
| `docs/rw-validators-consumer-layout.md` | Adopter validator layout | — | **Undocumented** | |
| `docs/workflow-documentation-style-guide.md` | Workflow README standards | — | **Undocumented** | Referenced in registry |

---

## 6. Adopter Surfaces

| Area | Count | T01 ref | Status | Notes |
| ---- | ----- | ------- | ------ | ----- |
| `agents/*/AGENTS.md` | 12 | — | **Undocumented** | Per-workflow agent bootstrap |
| `skills/adk-*/SKILL.md` | 5 | — | **Undocumented** | ECC skill pack |
| `templates/github-actions/` | 2 | Optional GitHub Actions | **Met** | BYOB badge workflow |
| `templates/icw/` | 3+ | — | **Undocumented** | ICW templates |
| `templates/workflow-readme-template.md` | 1 | — | **Undocumented** | Registry standard |
| `design/trigger-detection.md` | 1 | — | **Undocumented** | Design note |

---

## 7. Cross-Cutting Drift

| Topic | Expected (T01 / registry) | Actual | Status |
| ----- | ------------------------- | ------ | ------ |
| vwmp doc path | `docs/documentation/Developer_Docs/vwmp/` (README) | `KB/Documentation/Developer_Docs/vwmp/` | **Gap** |
| Validator count | 4 scripts | 29+ in validation areas | **Partial** |
| UKW step model | 8 steps | 9 + 2.5 + flags | **Partial** |
| Version registry | `version_registry.py` | `build_semver_registry.py`, task-touch tooling | **Superseded** |
| Registry `common_components` | `common/templates/`, `schemas/`, `utilities/` | Not on disk | **Gap** |
| Flat workflow YAML | Single nested SoT | 7 undeprecated flat copies | **Gap** | FR-050 |
| Kanban update paths | Step 7 + UKW | `update_kanban_docs.py` + agents + validators | **Partial** | Fragmentation (E07 H3) |
| Config loading | Single helper | 3+ independent `load_rw_config` | **Partial** | E07 M1 |

---

## References

- [T01 expectations baseline](T01-expectations-baseline.md)
- [E07:S07:T01 code review report §1–2](../../epic-07/story-07-code-reviews/T01-workflow-machinery-code-review-report.md)
- [IPP-E02S13T02](../../../../../implementation-cycles/IPP-E02S13T02-inventory-package-components-map.md)
- Package: `packages/frameworks/workflow-mgt/`

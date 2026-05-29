---
lifecycle: evergreen
ttl_days: null
created_at: 2026-03-09T15:15:00Z
expires_at: null
housekeeping_policy: keep
---

# AI Dev Kit – FBU Prioritization Board

**Last Updated:** 2026-05-26 (RW v0.1.4.3+1 — E1:S04:T03)
**Version Context:** v0.1.4.3+1 (**SemVer** v0.4.796+1)
**Intake migration note (FR-072 / Approach D):** New FBU intake must use semantic host-story placement; dedicated repository stories remain historical traceability registries.

> **For MoSCOW prioritized tasks, see:** [`kboard.md`](kboard.md)  
> **For Epic/Story/Task structure, see:** [`kanban-structure.md`](kanban-structure.md)  
> **For FBU structure and full listings, see:** [`fbu-structure.md`](fbu-structure.md)  
> **For completed FBU items, see:** [`fbu-completed.md`](fbu-completed.md)  
> **For rules and explanations, see:** [`kanban-board-guide.md`](kanban-board-guide.md)

---

## Overview

This board provides **centralized visibility and prioritization** for all open FBU items (FRs, BRs, and UXRs) in the AI Dev Kit project. It uses the same responsibility structure as the Kanban board but focuses on intake and prioritization.

**Board Purpose:**

- **Visibility** - Clear view of all FBU priorities and status
- **Prioritization** - Systematic approach to deciding what to work on next
- **Tracking** - Complete lifecycle tracking from intake to completion
- **Integration** - Links to individual documents and implementing tasks

---

## MoSCOW Prioritized FBU Items

### Must Have (M) - Critical Items

- **UXR-012** – Kanban and FBU state icons for MoSCOW rows - 📥 ACCEPTED (HIGH, **Set A on boards** + Unicode fallback; e.g. ✅ 🔄 📋 🟢) | [UXR-012](fr-br/UXR-012-kanban-fbu-state-icons-for-moscow-rows.md) | [E4:S13:T07](epics/Epic-4/Story-013-kanban-board-moscow-prioritized-task-view/T07-kanban-fbu-state-icons-for-moscow-rows-uxr012.md) | [—IPP—](../../implementation-cycles/IPP-E4S13T07-kanban-fbu-state-icons-moscow-rows.md) | Last modified: 2026-05-20 20:00 UTC
- **BR-039** – Cascade Whitelist Security Prompt Usability Blocker - 📋 TODO (CRITICAL, Cascade whitelist feature non-functional, creates constant security prompt interruptions preventing productive workflow execution) - [BR-039](fr-br/BR-039-cascade-whitelist-security-prompt-usability-blocker.md) | Last modified: 2026-04-02 00:00 UTC
- **BR-072** – UKW not removing completed tasks from kboard - 🔁 REOPENED (HIGH, UKW Step 6 removes completed tasks from standalone task docs but does not scan story docs for inline/embedded task statuses; E2:S07:T01/T05 showed TODO on kboard despite COMPLETE inline status) | [BR-072](fr-br/BR-072-ukw-completed-tasks-not-removed-from-kboard.md) | [E6:S01:T38](epics/Epic-6/Story-001-br-repo/T38-ukw-completed-tasks-not-removed-from-kboard-br072.md) | [—IPP—](../../implementation-cycles/IPP-E6S01T38-ukw-completed-task-removal-defect.md) | Last modified: 2026-05-16 14:30 UTC

---

### Should Have (S) - Important Items

- **FR-090** – UKW canonical row transform engine and board-specific rendering contracts - ⏭️ SUPERSEDED -> **FR-092** (architectural target retained as predecessor; B1 outcome drift owned by FR-092 Wave 4) | [FR-090](fr-br/FR-090-ukw-canonical-row-transform-engine-and-board-specific-rendering-contracts.md) | [E2:S15:T07](epics/Epic-2/Story-015-ipw-governance-and-publication-contract/T07-canonical-rw-ukw-kanban-consistency-program-fr092.md) | [—IPP—](../../implementation-cycles/IPP-E2S15T07-canonical-rw-ukw-kanban-consistency-program.md) | Last modified: 2026-04-27 15:34 UTC
- **FR-091** – RW Step 7 self-sufficient scoped kanban reconciliation without UKW dependency - ⏭️ SUPERSEDED -> **FR-092** (FR-091 contract absorbed into FR-092 Bucket A1-A5 + Wave 2) | [FR-091](fr-br/FR-091-rw-step-7-self-sufficient-scoped-kanban-reconciliation-without-ukw-dependency.md) | [E2:S15:T07](epics/Epic-2/Story-015-ipw-governance-and-publication-contract/T07-canonical-rw-ukw-kanban-consistency-program-fr092.md) | [—IPP—](../../implementation-cycles/IPP-E2S15T07-canonical-rw-ukw-kanban-consistency-program.md) | Last modified: 2026-04-27 15:34 UTC

- **BR-067** – RW doc-only / intake releases default to BUILD+1 instead of doc-init +0 - 🟢 OPEN (HIGH, versioning policy vs validate_version_bump / RW Step 2 defaults; **E2:S16:T03**) | [BR-067](fr-br/BR-067-rw-first-doc-only-release-defaults-to-build-plus-one-not-plus-zero.md) | [E2:S16:T03](epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md) | [—IPP—](../../implementation-cycles/IPP-E2S16T03-rehouse-workflow-perpetual-tasks.md) | Last modified: 2026-04-19 00:00 UTC
- **FR-086** – Canonical supporting Kanban/FBU doc naming + `FBU` collective terminology - 🔄 IN PROGRESS (HIGH, scope consolidated under **E4:S19:T06** meta ownership with preserved T02 history) | [FR-086](fr-br/FR-086-canonical-supporting-kanban-fbu-doc-naming-and-fbu-collective-terminology.md) | [E4:S19:T06](epics/Epic-4/Story-019-fr-br-uxr-abstract-governance-and-intake/T06-fbu-meta-normalization-and-intake-governance-uxr008-fr086-fr073.md) | [—IPP—](../../implementation-cycles/IPP-E4S19T06-fbu-meta-normalization-and-intake-governance.md) | Last modified: 2026-04-26 13:50 UTC
- **FR-087** – Investigate why `E6:S07` became default task housing and decide closure/scope - 🔄 IN PROGRESS (HIGH, forensic analysis of origin/intent/codification + recommendation to close/split/narrow `S07`; **E4:S19:T03**; canonical IPP published) | [FR-087](fr-br/FR-087-e6s07-default-housing-root-cause-and-closure-decision.md) | [E4:S19:T03](epics/Epic-4/Story-019-fr-br-uxr-abstract-governance-and-intake/T03-e6s07-default-housing-drift-investigation-and-closure-decision-fr087.md) | [—IPP—](../../implementation-cycles/IPP-E4S19T03-e6s07-default-housing-drift-investigation.md) | Last modified: 2026-05-18 14:30 UTC
- **FR-085** – UKW optional reprioritization `--rp` with deep intent/dependency analysis - 🟢 OPEN (HIGH, optional reprioritize mode to infer intent, dependencies, blockers, and real import for task + FBU ordering; re-housed to **E2:S16:T06**) | [FR-085](fr-br/FR-085-ukw-optional-reprioritization-rp-flag.md) | [E2:S16:T06](epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T06-ukw-optional-reprioritization-rp-flag-fr085.md) | —No IPP— | Last modified: 2026-04-26 17:02 UTC
- **FR-084** – IPP post-run governance reconciliation ownership - ⏭️ SUPERSEDED -> **FR-092** (four-surface contract absorbed into FR-092 Bucket A4 + Wave 3) | [FR-084](fr-br/FR-084-ipp-post-run-governance-reconciliation-ownership.md) | [E2:S15:T07](epics/Epic-2/Story-015-ipw-governance-and-publication-contract/T07-canonical-rw-ukw-kanban-consistency-program-fr092.md) | [—IPP—](../../implementation-cycles/IPP-E2S15T07-canonical-rw-ukw-kanban-consistency-program.md) | Last modified: 2026-04-27 15:34 UTC
- **FR-081** – Brownfield modular adopter integration - 🔄 IN PROGRESS (MEDIUM, operationalize ADR-003 — matrices, contract-first wiring; **E6:S09:T02**) | [FR-081](fr-br/FR-081-brownfield-modular-adopter-integration.md) | [E6:S09:T02](epics/Epic-6/Story-009-ai-dev-kit-installation-and-adopter-integration/T02-brownfield-modular-adopter-integration-fr081.md) | —No IPP— | Last modified: 2026-05-18 14:30 UTC
- **FR-098** – Optional ECC harness layer integration for AI Dev Kit adopters - 🔄 IN PROGRESS (MEDIUM, Phase 0 **COMPLETE** E6:S09:T04 — GO Phase 1; T05 stub filed) | [FR-098](fr-br/FR-098-ecc-optional-harness-layer-integration.md) | [E6:S09:T04](epics/Epic-6/Story-009-ai-dev-kit-installation-and-adopter-integration/T04-ecc-harness-layer-phase0-compatibility-fr098.md) | [—IPP—](../../implementation-cycles/IPP-E6S09T04-ecc-harness-layer-phase0-fr098.md) | Last modified: 2026-05-26 12:00 UTC
- **FR-077** – IPW-built task status transition and kboard synchronization - 🔄 IN PROGRESS (HIGH, core ownership matrix + deterministic requested-task drift checks shipped in v0.2.1.17+3; monitor recurrence and adoption) | [FR-077](fr-br/FR-077-ipw-built-task-status-transition-and-kboard-sync.md) | [E2:S01:T17](epics/Epic-2/Story-001-rw-agent-execution-and-docs/T17-ipw-built-task-status-transition-and-kboard-sync-fr077.md) | —No IPP— | Last modified: 2026-04-14 00:00 UTC
- **BR-065** – RW Step 12.5 GitHub release parser fails on `v`-prefixed version - 🟢 OPEN (HIGH, GitHub release publish step fails with `invalid literal for int() with base 10: 'v0'`; RW remains non-blocking but release publication is skipped) | [BR-065](fr-br/BR-065-rw-step-12-5-github-release-parser-fails-on-v-prefixed-version.md) | [E6:S07:T113](epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management/T113-rw-step-12-5-github-release-parser-hardening-br065.md) | [—IPP—](../../implementation-cycles/IPW-E6S07T113-rw-step-12-5-github-release-parser-hardening.md) | Last modified: 2026-04-13 00:00 UTC
- **BR-066** – IPW missing Docusaurus filing for planning artifacts - 🟢 OPEN (HIGH, contract/validator/inventory **COMPLETE** under **E2:S15:T01** **v0.2.15.1+1**; BR remains **OPEN** for phased historical backfill) | [BR-066](fr-br/BR-066-ipw-missing-docusaurus-filing-for-planning-artifacts.md) | [E2:S15:T01](epics/Epic-2/Story-015-ipw-governance-and-publication-contract/T01-ipw-docusaurus-filing-contract-and-backfill-br066.md) | —No IPP— | Last modified: 2026-04-14 00:00 UTC
- **FR-040** – Implementation Cycle Workflow (ICW) - 📋 TODO (HIGH, Create structured three-phase workflow: 1) Specification Definition, 2) Test Design, 3) Implementation Planning. Provides disciplined approach to implementation work similar to RW/UKW patterns.) - [FR-040](fr-br/FR-040-implementation-cycle-workflow-icw.md) | Last modified: 2026-04-01 00:00 UTC
- **FR-046** – RW SemVer Tag When task_touch Enabled - 🔄 IN PROGRESS (HIGH, dual-mode ⇒ task_touch validator + installer/examples shipped **v0.5.1.46+6**; FR doc + task remain open until verification closes the loop) | [FR-046](fr-br/FR-046-rw-semver-tag-task-touch-mode.md) | [E5:S01:T46](epics/Epic-5/Story-001-fr-repo/T46-rw-semver-tag-task-touch-mode.md) | —No IPP— | Last modified: 2026-04-13 00:00 UTC
- **UXR-001** – Migration User Experience Research - 📋 TODO (HIGH, Research user experience during migration processes) - [UXR-001](fr-br/UXR-001-migration-user-experience-research.md) | Last modified: 2026-05-18 21:46 UTC
- **UXR-002** – Comprehensive UAT Migration Utilities - 📋 TODO (HIGH, User acceptance testing tools for migration) - [UXR-002](fr-br/UXR-002-comprehensive-uat-migration-utilities.md) | Last modified: 2026-05-18 21:46 UTC
- **UXR-005** – Kanban Board Formatting & Governance - 📋 TODO (HIGH, Enforce blank-line readability rule across Kanban docs and assign UXR ownership for template maintenance) - [UXR-005](fr-br/UXR-005-kanban-board-formatting-and-governance.md) | Last modified: 2026-05-18 21:46 UTC
- **UXR-006** – Single `dev` branch and RW validator relaxation (solo workflow) - 📋 TODO (HIGH, evaluate allowing `dev` as accepted RW branch context to reduce multi-branch hygiene friction while preserving safety controls) - [UXR-006](fr-br/UXR-006-dev-branch-and-rw-validator-relaxation.md) | Last modified: 2026-04-07 00:00 UTC
- **UXR-008** – Canonical kanban filename normalization (`kboard.md` / `fbuboard.md` pattern) - 🔄 IN PROGRESS (HIGH, execution ownership merged into **E4:S19:T06** meta-task while retaining T05 history) | [UXR-008](fr-br/UXR-008-kboard-fbuboard-default-naming-adoption.md) | [E4:S19:T06](epics/Epic-4/Story-019-fr-br-uxr-abstract-governance-and-intake/T06-fbu-meta-normalization-and-intake-governance-uxr008-fr086-fr073.md) | [—IPP—](../../implementation-cycles/IPP-E4S19T06-fbu-meta-normalization-and-intake-governance.md) | Last modified: 2026-04-26 13:50 UTC

---

### Could Have (C) - Nice-to-Have Items

- **FR-082** – Installation distribution canonical repository alignment - 🔄 IN PROGRESS (MEDIUM, scripts/docs default to canonical `earlution/ai-dev-kit`; **E6:S09:T03**) | [FR-082](fr-br/FR-082-installation-distribution-canonical-repo-alignment.md) | [E6:S09:T03](epics/Epic-6/Story-009-ai-dev-kit-installation-and-adopter-integration/T03-installation-canonical-repo-alignment-fr082.md) | —No IPP— | Last modified: 2026-05-18 14:30 UTC
- **FR-031** – Multi-Agent Coordination Feasibility Investigation - 📋 TODO (C priority, Investigate multi-agent coordination possibilities) | [FR-031](fr-br/FR-031-multi-agent-coordination-feasibility-investigation.md) | [E5:S01:T31](epics/Epic-5/Story-001-fr-repo/T31-multi-agent-coordination-feasibility-investigation.md) | —No IPP— | Last modified: 2026-01-14 00:00 UTC
- **FR-032** – Release Candidate Readiness Gap Analysis - 📋 TODO (MEDIUM, Analyze gaps in release candidate readiness) - [FR-032](fr-br/FR-032-release-candidate-readiness-gap-analysis.md) | Last modified: 2026-04-20 14:00 UTC
- **FR-030** – AI Dev Kit CLI Tool - 📋 TODO (MEDIUM, Command-line interface tool) - [FR-030](fr-br/FR-030-ai-dev-kit-cli-tool.md) | [E6:S08](epics/Epic-6/Story-008-ai-dev-kit-cli-tool.md) | Last modified: 2026-01-16 00:00 UTC
- **FR-021** – FR/BR/UXR Repository Stories - 📋 TODO (MEDIUM, Repository stories for FR/BR/UXR management) - [FR-021](fr-br/FR-021-fr-br-uxr-repository-stories.md) | Last modified: 2026-04-08 13:31 UTC
- **UXR-003** – Intelligent Epic Matching Canonical Adoption UAT - 📋 TODO (MEDIUM, User acceptance testing for intelligent epic matching) - [UXR-003](fr-br/UXR-003-intelligent-epic-matching-canonical-adoption-uat.md) | Last modified: 2026-03-31 18:26 UTC
- **FR-043** – UKW Gap Discovery TODO Tasks and Unfiled FR/BR - 📋 TODO (LOW, Discover gaps in UKW and unfiled items) - [FR-043](fr-br/FR-043-ukw-gap-discovery-todo-tasks-and-unfiled-fr-br.md) | Last modified: 2026-04-20 18:05 UTC
- **FR-044** – RW Temporary Execution Log for Recovery and Forensics - 📋 TODO (LOW, Temporary execution logs for Release Workflow) - [FR-044](fr-br/FR-044-rw-temporary-execution-log-for-recovery-and-forensics.md) | Last modified: 2026-02-22 16:54 UTC
- **FR-039** – AI Dev Kit Project Review and Legacy Clean-up - 📋 TODO (LOW, Review and clean up legacy project elements) - [FR-039](fr-br/FR-039-ai-dev-kit-project-review-and-legacy-clean-up.md) | Last modified: 2026-03-16 16:31 UTC
- **FR-037** – Kanban Policy Task Prioritisation Queue Stack - 📋 TODO (LOW, Queue stack for task prioritization) - [FR-037](fr-br/FR-037-kanban-policy-task-prioritisation-queue-stack.md) | Last modified: 2026-04-01 15:15 UTC
- **FR-029** – Procedural Task Template Generation Hybrid Strategy - 📋 TODO (LOW, Hybrid strategy for task template generation) - [FR-029](fr-br/FR-029-procedural-task-template-generation-hybrid-strategy.md) | Last modified: 2026-03-16 16:31 UTC
- **FR-024** – IDE Linter Check Before Commit in Release Workflow - 📋 TODO (LOW, Linter integration in Release Workflow) | [FR-024](fr-br/FR-024-ide-linter-check-before-commit-in-release-workflow.md) | [E2:S01:T08](epics/Epic-2/Story-001-rw-agent-execution-and-docs.md) | —No IPP— | Last modified: 2026-05-17 00:00 UTC
- **FR-023** – Update Kanban Workflow (UKW) - 📋 TODO (LOW, Updates to Update Kanban Workflow) - [FR-023](fr-br/FR-023-update-kanban-workflow-ukw.md) | Last modified: 2026-04-01 15:15 UTC
- **FR-022** – Policy Docs Machine-Readable Salience - 📋 TODO (LOW, Machine-readable policy documentation) - [FR-022](fr-br/FR-022-policy-docs-machine-readable-salience.md) | Last modified: 2025-12-17 17:11 UTC
- **FR-020** – Version Validator Abstract Space Awareness - 📋 TODO (LOW, Abstract space awareness in version validator) - [FR-020](fr-br/FR-020-version-validator-abstract-space-awareness.md) | Last modified: 2026-03-16 16:31 UTC
- **FR-019** – Intake Workflow Automation - 📋 TODO (LOW, Automation for intake workflow) - [FR-019](fr-br/FR-019-intake-workflow-automation.md) | Last modified: 2026-04-01 15:15 UTC
- **FR-018** – Abstract Space Zero Numbered Est Docs - 📋 TODO (LOW, Zero-numbered documents in abstract space) - [FR-018](fr-br/FR-018-abstract-space-zero-numbered-est-docs.md) | Last modified: 2026-03-30 15:35 UTC
- **FR-017** – Versioning Policy Hardening Doc-Init Build - 📋 TODO (LOW, Hardening versioning policy for doc-init builds) - [FR-017](fr-br/FR-017-versioning-policy-hardening-doc-init-build.md) | Last modified: 2025-12-17 17:11 UTC
- **FR-016** – Kanban Granularity Discrete Task Docs - 📋 TODO (LOW, Discrete task documents for kanban granularity) - [FR-016](fr-br/FR-016-kanban-granularity-discrete-task-docs.md) | Last modified: 2025-12-17 17:11 UTC
- **FR-014** – RW Trigger for FR/BR Commits - 📋 TODO (LOW, Release Workflow trigger for FR/BR commits) | [FR-014](fr-br/FR-014-rw-trigger-for-fr-br-commits.md) | [E2:S07:T05](epics/Epic-2/Story-007-trigger-aware-release-workflow.md) | —No IPP— | Last modified: 2026-05-16 00:00 UTC
- **FR-013** – Trigger-Aware Release Workflow - 📋 TODO (LOW, Trigger-aware enhancements to Release Workflow) | [FR-013](fr-br/FR-013-trigger-aware-release-workflow.md) | [E2:S07:T01](epics/Epic-2/Story-007-trigger-aware-release-workflow.md) | —No IPP— | Last modified: 2026-05-16 00:00 UTC
- **FR-012** – Agentic Kanban Task Creation from FR/BR - 📋 TODO (LOW, Agentic task creation from FR/BR documents) | [FR-012](fr-br/FR-012-agentic-kanban-task-creation-from-fr-br.md) | [E4:S10:T01](epics/Epic-4/Story-010-agentic-kanban-task-creation-from-fr-br.md) | —No IPP— | Last modified: 2026-01-05 00:00 UTC
- **FR-011** – Task Splitting Multiple Canonical Epics - 🔄 IN PROGRESS (LOW, Task splitting across multiple canonical epics) | [FR-011](fr-br/FR-011-task-splitting-multiple-canonical-epics.md) | [E4:S08:T07](epics/Epic-4/Story-008-intelligent-epic-matching-canonical-adoption/T07-task-splitting-across-multiple-canonical-epics-fr-011.md) | —No IPP— | Last modified: 2026-05-18 14:30 UTC
- **FR-010** – Implement Actual Agentic Intelligence Task Mapping - 📋 TODO (LOW, Actual implementation of agentic task mapping) | [FR-010](fr-br/FR-010-implement-actual-agentic-intelligence-task-mapping.md) | [E4:S09:T06](epics/Epic-4/Story-009-bug-fixes-and-agentic-intelligence.md) | —No IPP— | Last modified: 2025-12-10 00:00 UTC
- **FR-010** – Template Task Installation Two-Phase Migration - 📋 TODO (LOW, Two-phase migration for template task installation) | [FR-010](fr-br/FR-010-template-task-installation-two-phase-migration.md) | [E4:S09:T06](epics/Epic-4/Story-009-bug-fixes-and-agentic-intelligence.md) | —No IPP— | Last modified: 2025-12-10 00:00 UTC
- **FR-009** – Intelligent Epic Matching AI-Assisted Canonical Adoption - 📋 TODO (LOW, AI-assisted epic matching for canonical adoption) - [FR-009](fr-br/FR-009-intelligent-epic-matching-ai-assisted-canonical-adoption.md) | Last modified: 2026-03-30 15:35 UTC
- **FR-008** – Package Uninstall Capabilities - 📋 TODO (LOW, Uninstall capabilities for packages) | [FR-008](fr-br/FR-008-package-uninstall-capabilities.md) | [E2:S06:T01](epics/Epic-2/Story-006-package-uninstall-and-recovery.md) | [—IPP—](../../implementation-cycles/IPP-E2S06T01-package-uninstall-reimplementation.md) | Last modified: 2026-05-15 00:00 UTC
- **FR-007** – Migration Utilities and Installation Modes - 📋 TODO (LOW, Migration utilities and installation modes) | [FR-007](fr-br/FR-007-migration-utilities-and-installation-modes.md) | [E4:S07:T02](epics/Epic-4/Story-007-migration-support-and-installation-modes.md) | —No IPP— | Last modified: 2025-12-10 00:00 UTC
- **FR-006** – Localization Language Selection UK/US English - 📋 TODO (LOW, Language selection for UK/US English) | [FR-006](fr-br/FR-006-localization-language-selection-uk-us-english.md) | [E21:S00:T01](epics/Epic-21/Story-000-language-selection-at-setup.md) | —No IPP— | Last modified: 2025-12-09 00:00 UTC
- **FR-005** – Systematic Canonical Epics Stories Tasks Templates - 📋 TODO (LOW, Systematic templates for canonical structure) | [FR-005](fr-br/FR-005-systematic-canonical-epics-stories-tasks-templates.md) | [E4:S06:T01](epics/Epic-4/Story-006-comprehensive-canonical-est-template-system.md) | —No IPP— | Last modified: 2025-12-22 00:00 UTC
- **FR-003** – Dependency Tracking in Adopting Projects - 📋 TODO (LOW, Dependency tracking for project adoption) - [FR-003](fr-br/FR-003-dependency-tracking-in-adopting-projects.md) | Last modified: 2026-03-25 14:32 UTC
- **FR-002** – Update Been There README - 📋 TODO (LOW, Update README for been-there functionality) - [FR-002](fr-br/FR-002-update-been-there-readme.md) | Last modified: 2026-04-01 15:15 UTC
- **BR-008** – Arbitrary 80 Threshold Contradicts Agentic Intelligence - 📋 TODO (LOW, Arbitrary threshold contradicts agentic approach) | [BR-008](fr-br/BR-008-arbitrary-80-threshold-contradicts-agentic-intelligence.md) | [E4:S09:T05](epics/Epic-4/Story-009-bug-fixes-and-agentic-intelligence.md) | —No IPP— | Last modified: 2025-12-10 00:00 UTC
- **BR-007** – Multiple Bugs Kanban Package Installation - 📋 TODO (LOW, Multiple bugs in kanban package installation) | [BR-007](fr-br/BR-007-multiple-bugs-kanban-package-installation.md) | [E4:S09:T01](epics/Epic-4/Story-009-bug-fixes-and-agentic-intelligence.md) | —No IPP— | Last modified: 2025-12-10 00:00 UTC
- **BR-006** – Missing Migration Support Pre-existing Kanban - 📋 TODO (LOW, Missing migration support for pre-existing kanban) | [BR-006](fr-br/BR-006-missing-migration-support-pre-existing-kanban.md) | [E4:S07:T01](epics/Epic-4/Story-007-migration-support-and-installation-modes.md) | —No IPP— | Last modified: 2025-12-10 00:00 UTC
- **BR-005** – Kanban Framework Epic Structure Gap UAT Finding - 📋 TODO (LOW, Gap found in kanban framework epic structure) - [BR-005](fr-br/BR-005-kanban-framework-epic-structure-gap-uat-finding.md) | Last modified: 2026-03-30 15:35 UTC
- **BR-003** – RW Branch Validation Update Branches - 📋 TODO (LOW, RW branch validation for update branches) - [BR-003](fr-br/BR-003-rw-branch-validation-update-branches.md) | Last modified: 2026-03-30 15:35 UTC
- **BR-002** – Changelog Validator Ordering Bug - 📋 TODO (LOW, Ordering bug in changelog validator) - [BR-002](fr-br/BR-002-changelog-validator-ordering-bug.md) | Last modified: 2025-12-17 17:11 UTC
- **BR-001** – Validate Version Bump Epic Story Detection Bug - 📋 TODO (LOW, Bug in epic/story detection for version bump validation) - [BR-001](fr-br/BR-001-validate-version-bump-epic-story-detection-bug.md) | Last modified: 2026-04-01 15:15 UTC

---

- **BR-058** – Ci test workflow missing and pytest failures - 🟢 OPEN (backlog sync) - [BR-058](fr-br/BR-058-ci-test-workflow-missing-and-pytest-failures.md) | Last modified: 2026-04-01 15:15 UTC
- **BR-059** – Ukw moscow incomplete story task coverage - 🟢 OPEN (backlog sync) - [BR-059](fr-br/BR-059-ukw-moscow-incomplete-story-task-coverage.md) | Last modified: 2026-03-31 00:00 UTC
- **FR-048** – Icw task identifier argument - 🟢 PENDING (backlog sync) - [FR-048](fr-br/FR-048-icw-task-identifier-argument.md) | Last modified: 2026-04-01 17:27 UTC
- **FR-049** – Enhanced kanban completed with timestamps and recent tasks - 📋 TODO (backlog sync) - [FR-049](fr-br/FR-049-enhanced-kanban-completed-with-timestamps-and-recent-tasks.md) | Last modified: 2026-03-11 16:27 UTC
- **FR-050** – UKW extension for FR/BR/UXR temporal tracking and synchronization - 📋 TODO (LOW, re-housed to E2:S16:T07; Windsurf skill approach superseded) | Last modified: 2026-05-13 | [FR-050](fr-br/FR-050-ukw-extension-for-fr-br-uxr-temporal-tracking-and-synchronization.md) | [E2:S16:T07](epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T07-ukw-extension-for-fr-br-uxr-temporal-tracking-fr050.md) | —No IPP— | Last modified: 2026-05-14 11:06 UTC
- **FR-057** – Update changelog workflow - 💡 PROPOSED (backlog sync) | [FR-057](fr-br/FR-057-update-changelog-workflow.md) | [E7:S01:T06](epics/Epic-7/Story-001-codebase-maintenance-tasks.md) | —No IPP— | Last modified: 2026-03-31 00:00 UTC
- **FR-058** – Markdown maintenance workflow - 💡 PROPOSED (backlog sync) - [FR-058](fr-br/FR-058-markdown-maintenance-workflow.md) | Last modified: 2026-03-16 13:17 UTC
- **FR-059** – Enhanced workflow logging system - 💡 PROPOSED (backlog sync) | [FR-059](fr-br/FR-059-enhanced-workflow-logging-system.md) | [E2:S08:T08](epics/Epic-2/Story-008-harden-release-workflow-reliability/T08-enhanced-workflow-forensic-logging-and-rollback-hardening-fr-059.md) | —No IPP— | Last modified: 2026-03-17 00:00 UTC
- **FR-062** – Github release installation experience - 💡 PROPOSED (backlog sync) | [FR-062](fr-br/FR-062-github-release-installation-experience.md) | [E5:S01:T62](epics/Epic-5/Story-001-fr-repo/T62-github-release-installation-experience.md) | —No IPP— | Last modified: 2026-04-10 11:24 UTC
- **FR-063** – Cmw epic 5 execution context - 🔄 ACTIVE (intake released v0.5.2.6+1; implementation ACs open) (backlog sync) - [FR-063](fr-br/FR-063-cmw-epic-5-execution-context.md) | Last modified: 2026-05-18 21:46 UTC
- **FR-072** – Uniform repository abstract space kanban rules - 🟢 PENDING (backlog sync) - [FR-072](fr-br/FR-072-uniform-repository-abstract-space-kanban-rules.md) | Last modified: 2026-04-08 13:31 UTC
- **FR-074** – Kanban intake atomic kg r2 kg r6 governance - 🟢 PENDING (backlog sync) - [FR-074](fr-br/FR-074-kanban-intake-atomic-kg-r2-kg-r6-governance.md) | Last modified: 2026-04-20 14:00 UTC

### Ongoing (O) - Perpetual Items

No ongoing FBU items currently.

---

## Board Statistics

**Total Items:** 75 FBU documents

- **Feature Requests:** 53 | Last modified: 2026-05-14 | Last modified: 2026-05-14 11:06 UTC
- **Bug Reports:** 15   | Last modified: 2026-04-20 15:52 UTC
- **User Experience Research:** 7 | Last modified: 2026-04-20 15:52 UTC
- **Scoped pass note (Wave 4 / T06):** MoSCOW taskless queue and FR-073 governance row were reconciled; full inventory recount remains a separate UKW/full-sync concern. | Last modified: 2026-04-26 16:46 UTC

**By Priority:**

- Prioritization is represented directly by MoSCOW section placement above.
- Avoid treating static numeric summaries as canonical; row-level entries are the source of truth.

**By Status:**

- Mixed board statuses are in use (`TODO`, `OPEN`, `PENDING`, `PROPOSED`, `ACTIVE`, `IMPLEMENTED`, `COMPLETED`); treat per-row status as source of truth.
- Completed archival remains tracked in `fbu-completed.md`.

**Disambiguation Note:**

- `BR-061` currently exists as two legacy records (RW explicit task-id alignment, and SemVer task_touch counter behavior). Board rows include qualifiers and direct task links to prevent cross-wiring confusion.

---

## Usage Instructions

### For Stakeholders

1. **Review priorities** - Check the appropriate priority section for items needing attention
2. **Track progress** - Monitor status changes and task creation
3. **Provide input** - Add comments or requirements to relevant FBU documents

### For Developers

1. **Pick items** - Choose highest priority items appropriate to your skills
2. **Create tasks** - Convert FBU items to Kanban tasks following the intake process
3. **Update status** - Move items between sections as work progresses
4. **Track completion** - Move completed items to fbu-completed.md

### For Product Management

1. **Prioritize** - Adjust priority levels based on business needs
2. **Review** - Regular board reviews to ensure alignment
3. **Plan** - Use board information for release planning
4. **Report** - Provide status updates based on board content

---

*This board provides systematic FBU management with the same level of organization and visibility that the Kanban board provides to task execution.*

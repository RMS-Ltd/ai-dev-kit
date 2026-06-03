---

## lifecycle: evergreen

ttl_days: null
created_at: 2025-12-04T12:02:50Z
expires_at: null
housekeeping_policy: keep

# AI Dev Kit – Kanban Board

**Last Updated:** 2026-06-03 (RW **E02:S16:T04** — UKW kanban sync **v0.2.16.4+24**)
**Version:** v0.2.16.4+24 (**SemVer** v0.4.849+24)

**Note:** Epics 1, 3, 7, 8, 10, 11 are COMPLETE. Epics 2, 4, 5, 6 are IN PROGRESS. Epics 21 are TODO. **MoSCOW lists tasks only (not stories)**—story-level rows hide real progress. **Bidirectional wiring:** task rows with FBU links must have matching rows on [`fbuboard.md`](fbuboard.md) (and vice versa for M/S/active C/O). *(Epic 24 book work lives in private `RMS-Ltd/ai-dev-kit-book` — FR-099 / ADR-006.)*
**Intake migration note (FR-072 / Approach D):** Dedicated FR/BR/UXR repository stories are historical registries only; new intake tasks should be created in semantic delivery stories.

> **For Epic/Story/Task structure, see:** `[kanban-structure.md](kanban-structure.md)`  
> **For rules and explanations, see:** `[kanban-board-guide.md](kanban-board-guide.md)`  
> **For completed tasks, see:** `[kanban-completed.md](kanban-completed.md)`  
> **For FR/BR/UXR prioritization, see:** `[fbuboard.md](fbuboard.md)`

---

## MoSCOW Prioritized In-Progress Tasks

### Must Have (M) - Critical Tasks

*(No Must Have tasks — 2026-05-30 value audit deferral.)*

*(E01:S04:T03–T07 archived — [kanban-completed.md](kanban-completed.md). FR-099 Phases 0–4 complete; public [`RMS-Ltd/ai-dev-kit`](https://github.com/RMS-Ltd/ai-dev-kit) bootstrapped 2026-05-28. **E6:S09** installation story ✅ complete — FR-080/081/082/098; latest **E06:S09:T02** FR-081 brownfield INSTALL chapter **v0.6.9.2+2**.)*

### Should Have (S) - Important Tasks

*(No Should Have tasks — 2026-05-30 value audit deferral; **E02:S16:T13** archived UKW 2026-06-03.)*

### Could Have (C) - Nice-to-Have Tasks

- **E10:S01:T01** – Establish expectations baseline for Document Lifecycle package - 📋 TODO (HIGH, Epic 10 doc-lifecycle RC review) | [Task](epics/Epic-10/Story-001-document-lifecycle-package-implementation-review.md#E10S01T01--establish-expectations-baseline-for-document-lifecycle-package) | [Story](epics/Epic-10/Story-001-document-lifecycle-package-implementation-review.md) | Last modified: 2026-01-18 16:44:08 UTC

- **E10:S01:T02** – Inventory package components and map to expectations - 📋 TODO (HIGH, Epic 10 doc-lifecycle RC review) | [Task](epics/Epic-10/Story-001-document-lifecycle-package-implementation-review.md) | [Story](epics/Epic-10/Story-001-document-lifecycle-package-implementation-review.md) | Last modified: 2026-01-18 16:45:00 UTC

- **E10:S01:T03** – Validate lifecycle behavior against documented guidance - 📋 TODO (HIGH, Epic 10 doc-lifecycle RC review) | [Task](epics/Epic-10/Story-001-document-lifecycle-package-implementation-review.md) | [Story](epics/Epic-10/Story-001-document-lifecycle-package-implementation-review.md) | Last modified: 2026-01-18 16:46:00 UTC

- **E10:S01:T04** – Review integrations and dependency alignment - 📋 TODO (HIGH, Epic 10 doc-lifecycle RC review) | [Task](epics/Epic-10/Story-001-document-lifecycle-package-implementation-review.md) | [Story](epics/Epic-10/Story-001-document-lifecycle-package-implementation-review.md) | Last modified: 2026-01-18 16:47:00 UTC

- **E10:S01:T05** – Create gap log and risk assessment - 📋 TODO (HIGH, Epic 10 doc-lifecycle RC review) | [Task](epics/Epic-10/Story-001-document-lifecycle-package-implementation-review.md) | [Story](epics/Epic-10/Story-001-document-lifecycle-package-implementation-review.md) | Last modified: 2026-01-18 16:48:00 UTC

- **E10:S01:T06** – Define RC sign-off criteria and remediation tasks - 📋 TODO (HIGH, Epic 10 doc-lifecycle RC review) | [Task](epics/Epic-10/Story-001-document-lifecycle-package-implementation-review.md) | [Story](epics/Epic-10/Story-001-document-lifecycle-package-implementation-review.md) | Last modified: 2026-01-18 16:49:00 UTC

- **E02:S11:T13** – GitHub Actions workflow spam emails (BR-051) - 📋 TODO (LOW, post-story hardening) | [Task](epics/Epic-2/Story-011-intake-workflow-automation/T13-github-actions-workflow-spam-emails-br051.md) | [BR-051](fr-br/BR-051-github-actions-workflow-spam-emails.md) | Last modified: 2026-05-29 17:15:00 UTC

- **E02:S11:T14** – GitHub Actions workflow optimization (BR-052) - 📋 TODO (LOW, post-story hardening) | [Task](epics/Epic-2/Story-011-intake-workflow-automation/T14-github-actions-workflow-optimization-br052.md) | [BR-052](fr-br/BR-052-github-actions-workflow-optimization.md) | Last modified: 2026-05-29 17:16:00 UTC

- **E09:S01:T03** – FR-032: Release Candidate Readiness Gap Analysis - 📋 TODO (MEDIUM, Analyze gaps in release candidate readiness) | [Task](epics/Epic-9/Story-001-rc-readiness-gap-analysis/T03-gap-analysis-fr032.md) | [FR-032](fr-br/FR-032-release-candidate-readiness-gap-analysis.md) | Last modified: 2026-05-30 10:26 UTC

- **E06:S08:T01** – FR-030: AI Dev Kit CLI Tool - 📋 TODO (MEDIUM, Command-line interface tool) | [Task](epics/Epic-6/Story-008-ai-dev-kit-cli-tool.md) | [FR-030](fr-br/FR-030-ai-dev-kit-cli-tool.md) | Last modified: 2026-01-16 00:00 UTC

- **E07:S05:T03** – UXR-003: Intelligent Epic Matching Canonical Adoption UAT - 📋 TODO (MEDIUM, User acceptance testing for intelligent epic matching) | [Task](epics/Epic-7/Story-005-migration-uxr-research.md) | [UXR-003](fr-br/UXR-003-intelligent-epic-matching-canonical-adoption-uat.md) | Last modified: 2026-05-30 10:26 UTC

- **E05:S01:T44** – FR-044: RW Temporary Execution Log for Recovery and Forensics - 📋 TODO (LOW, Temporary execution logs for Release Workflow) | [Task](epics/Epic-5/Story-001-fr-repo/T44-rw-temporary-execution-log-for-recovery-and-forensics.md) | [FR-044](fr-br/FR-044-rw-temporary-execution-log-for-recovery-and-forensics.md) | Last modified: 2026-02-22 00:00 UTC

- **E07:S01:T10** – FR-039: AI Dev Kit Project Review and Legacy Clean-up - 📋 TODO (LOW, Review and clean up legacy project elements) | [Task](epics/Epic-7/Story-001-codebase-maintenance-tasks/T10-project-root-hygiene-and-legacy-docs-rationalization.md) | [FR-039](fr-br/FR-039-ai-dev-kit-project-review-and-legacy-clean-up.md) | Last modified: 2026-05-30 10:26 UTC

- **E04:S14:T04** – FR-037: Kanban Policy Task Prioritisation Queue Stack - 📋 TODO (LOW, Queue stack for task prioritization) | [Task](epics/Epic-4/Story-014-kanban-framework-maintenance/T04-kanban-policy-task-prioritisation-queue-stack-fr037.md) | [FR-037](fr-br/FR-037-kanban-policy-task-prioritisation-queue-stack.md) | Last modified: 2026-05-30 10:26 UTC

- **E04:S15:T05** – FR-029: Procedural Task Template Generation Hybrid Strategy - 📋 TODO (LOW, Hybrid strategy for task template generation) | [Task](epics/Epic-4/Story-015-procedural-task-template-generation-and-hybrid-strategy.md) | [FR-029](fr-br/FR-029-procedural-task-template-generation-hybrid-strategy.md) | Last modified: 2025-12-22 00:00 UTC

- **E05:S07:T01** – FR-022: Policy Docs Machine-Readable Salience - 📋 TODO (LOW, Machine-readable policy documentation) | [Task](epics/Epic-5/Story-007-policy-documentation-structure.md) | [FR-022](fr-br/FR-022-policy-docs-machine-readable-salience.md) | Last modified: 2026-01-16 00:00 UTC

- **E02:S10:T06** – FR-020: Version Validator Abstract Space Awareness - 📋 TODO (LOW, Abstract space awareness in version validator) | [Task](epics/Epic-2/Story-010-doc-init-build-zero-for-new-est.md) | [FR-020](fr-br/FR-020-version-validator-abstract-space-awareness.md) | Last modified: 2025-12-12 00:00 UTC

- **E02:S11:T00** – FR-019: Intake Workflow Automation - 📋 TODO (LOW, Automation for intake workflow) | [Task](epics/Epic-2/Story-011-intake-workflow-automation.md) | [FR-019](fr-br/FR-019-intake-workflow-automation.md) | Last modified: 2026-03-30 00:00 UTC

- **E04:S11:T04** – FR-018: Abstract Space Zero Numbered Est Docs - 📋 TODO (LOW, Zero-numbered documents in abstract space) | [Task](epics/Epic-4/Story-011-kanban-granularity-discrete-task-docs.md) | [FR-018](fr-br/FR-018-abstract-space-zero-numbered-est-docs.md) | Last modified: 2025-12-18 00:00 UTC

- **E02:S10:T00** – FR-017: Versioning Policy Hardening Doc-Init Build - 📋 TODO (LOW, Hardening versioning policy for doc-init builds) | [Task](epics/Epic-2/Story-010-doc-init-build-zero-for-new-est.md) | [FR-017](fr-br/FR-017-versioning-policy-hardening-doc-init-build.md) | Last modified: 2025-12-12 00:00 UTC

- **E04:S11:T07** – FR-016: Kanban Granularity Discrete Task Docs - 📋 TODO (LOW, Discrete task documents for kanban granularity) | [Task](epics/Epic-4/Story-011-kanban-granularity-discrete-task-docs/T07-planning-spec-tests-impl.md) | [FR-016](fr-br/FR-016-kanban-granularity-discrete-task-docs.md) | Last modified: 2026-05-30 10:26 UTC

- **E02:S07:T05** – FR-014: RW Trigger for FR/BR Commits - 📋 TODO (LOW, Release Workflow trigger for FR/BR commits) | [Task](epics/Epic-2/Story-007-trigger-aware-release-workflow.md) | [FR-014](fr-br/FR-014-rw-trigger-for-fr-br-commits.md) | Last modified: 2026-05-16 00:00 UTC

- **E02:S07:T01** – FR-013: Trigger-Aware Release Workflow - 📋 TODO (LOW, Trigger-aware enhancements to Release Workflow) | [Task](epics/Epic-2/Story-007-trigger-aware-release-workflow.md) | [FR-013](fr-br/FR-013-trigger-aware-release-workflow.md) | Last modified: 2026-05-16 00:00 UTC

- **E04:S10:T01** – FR-012: Agentic Kanban Task Creation from FR/BR - 📋 TODO (LOW, Agentic task creation from FR/BR documents) | [Task](epics/Epic-4/Story-010-agentic-kanban-task-creation-from-fr-br.md) | [FR-012](fr-br/FR-012-agentic-kanban-task-creation-from-fr-br.md) | Last modified: 2026-05-30 10:26 UTC

- **E04:S09:T06** – FR-010: Agentic task mapping / template two-phase migration - 📋 TODO (LOW, duplicate FR-010 ids — disambiguate on intake) | [Task](epics/Epic-4/Story-009-bug-fixes-and-agentic-intelligence.md) | [FR-010 mapping](fr-br/FR-010-implement-actual-agentic-intelligence-task-mapping.md) · [FR-010 templates](fr-br/FR-010-template-task-installation-two-phase-migration.md) | Last modified: 2026-05-30 10:26 UTC

- **E04:S08:T05** – FR-009: Intelligent Epic Matching AI-Assisted Canonical Adoption - 📋 TODO (LOW, AI-assisted epic matching for canonical adoption) | [Task](epics/Epic-4/Story-008-intelligent-epic-matching-canonical-adoption.md) | [FR-009](fr-br/FR-009-intelligent-epic-matching-ai-assisted-canonical-adoption.md) | Last modified: 2026-04-09 00:00 UTC

- **E02:S06:T01** – FR-008: Package Uninstall Capabilities - 📋 TODO (LOW, Uninstall capabilities for packages) | [Task](epics/Epic-2/Story-006-package-uninstall-and-recovery.md) | [FR-008](fr-br/FR-008-package-uninstall-capabilities.md) | [—IPP—](../../implementation-cycles/IPP-E2S06T01-package-uninstall-reimplementation.md) | Last modified: 2026-05-15 00:00 UTC

- **E04:S07:T02** – FR-007: Migration Utilities and Installation Modes - 📋 TODO (LOW, Migration utilities and installation modes) | [Task](epics/Epic-4/Story-007-migration-support-and-installation-modes.md) | [FR-007](fr-br/FR-007-migration-utilities-and-installation-modes.md) | Last modified: 2026-05-30 10:26 UTC

- **E21:S00:T01** – FR-006: Localization Language Selection UK/US English - 📋 TODO (LOW, Language selection for UK/US English) | [Task](epics/Epic-21/Story-000-language-selection-at-setup.md) | [FR-006](fr-br/FR-006-localization-language-selection-uk-us-english.md) | Last modified: 2025-12-09 00:00 UTC

- **E01:S02:T14** – FR-003: Dependency Tracking in Adopting Projects - 📋 TODO (LOW, Dependency tracking for project adoption) | [Task](epics/Epic-1/Story-002-package-and-repo-architecture/T14-dependency-tracking-adopters-fr003.md) | [FR-003](fr-br/FR-003-dependency-tracking-in-adopting-projects.md) | Last modified: 2026-05-30 10:26 UTC

- **E01:S02:T13** – FR-002: Update Been There README - 📋 TODO (LOW, Update README for been-there functionality) | [Task](epics/Epic-1/Story-002-package-and-repo-architecture/T13-readme-template-best-readme-fr002.md) | [FR-002](fr-br/FR-002-update-been-there-readme.md) | Last modified: 2026-05-30 10:26 UTC

- **E04:S09:T05** – BR-008: Arbitrary 80 Threshold Contradicts Agentic Intelligence - 📋 TODO (LOW, Arbitrary threshold contradicts agentic approach) | [Task](epics/Epic-4/Story-009-bug-fixes-and-agentic-intelligence.md) | [BR-008](fr-br/BR-008-arbitrary-80-threshold-contradicts-agentic-intelligence.md) | Last modified: 2026-05-30 10:26 UTC

- **E04:S09:T01** – BR-007: Multiple Bugs Kanban Package Installation - 📋 TODO (LOW, Multiple bugs in kanban package installation) | [Task](epics/Epic-4/Story-009-bug-fixes-and-agentic-intelligence.md) | [BR-007](fr-br/BR-007-multiple-bugs-kanban-package-installation.md) | Last modified: 2026-05-30 10:26 UTC

- **E04:S07:T01** – BR-006: Missing Migration Support Pre-existing Kanban - 📋 TODO (LOW, Missing migration support for pre-existing kanban) | [Task](epics/Epic-4/Story-007-migration-support-and-installation-modes.md) | [BR-006](fr-br/BR-006-missing-migration-support-pre-existing-kanban.md) | Last modified: 2026-05-30 10:26 UTC

- **E04:S06:T06** – BR-005: Kanban Framework Epic Structure Gap UAT Finding - 📋 TODO (LOW, Gap found in kanban framework epic structure) | [Task](epics/Epic-4/Story-006-comprehensive-canonical-est-template-system.md) | [BR-005](fr-br/BR-005-kanban-framework-epic-structure-gap-uat-finding.md) | Last modified: 2025-12-22 00:00 UTC

- **E02:S11:T11** – BR-002: Changelog Validator Ordering Bug - 📋 TODO (LOW, Ordering bug in changelog validator) | [Task](epics/Epic-2/Story-011-intake-workflow-automation/Task-011-Fix-CHANGELOG-Ordering-Violations.md) | [BR-002](fr-br/BR-002-changelog-validator-ordering-bug.md) | Last modified: 2025-12-16 00:00 UTC

- **E02:S01:T06** – BR-001: Validate Version Bump Epic Story Detection Bug - 📋 TODO (LOW, Bug in epic/story detection for version bump validation) | [Task](epics/Epic-2/Story-001-rw-agent-execution-and-docs.md) | [BR-001](fr-br/BR-001-validate-version-bump-epic-story-detection-bug.md) | Last modified: 2026-05-26 00:00 UTC

- **E08:S03:T04** – BR-058: CI test workflow missing and pytest failures - 🟢 OPEN (LOW) | [Task](epics/Epic-8/Story-003-automation-scripts/T04-ci-test-workflow-pytest-remediation-br058.md) | [BR-058](fr-br/BR-058-ci-test-workflow-missing-and-pytest-failures.md) | Last modified: 2026-05-30 13:35 UTC


*(E04:S06:T01 archived — FR-005 closure **v0.4.6.1+1**; [kanban-completed.md](kanban-completed.md). **E06:S07:T107** archived **v0.6.7.107+3** — RW 2026-05-30; [kanban-completed.md](kanban-completed.md). **E02:S16:T17**, **E02:S01:T23** archived **v0.2.16.17+2** / **v0.2.1.23+1** — UKW -c 2026-05-30. **E02:S16:T16** / **FR-102** archived **v0.2.16.16+3**. **E02:S15:T01** archived **v0.2.15.1+2** — UKW -c 2026-06-02 ([kanban-completed.md](kanban-completed.md); **BR-066** remains on [fbuboard.md](fbuboard.md)). **E02:S16:T13** archived **v0.2.16.13+1** — UKW 2026-06-03 ([kanban-completed.md](kanban-completed.md); **BR-059** **RESOLVED**). FR-031 / FR-024 / FR-057 retired — [fbu-completed.md](fbu-completed.md).)*



### Ongoing (O) - Perpetual Tasks

- **E02:S16:T02** – Inventory and classify workflow-related perpetual tasks - ✅ COMPLETE (IPP perpetual inventory + 3B gate for T03) - [Task Document](epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T02-inventory-and-classify-workflow-perpetual-tasks.md) | [Story](epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations.md) | [E02:S16:T02](epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T02-inventory-and-classify-workflow-perpetual-tasks.md) | [IPP-E2S16T02](../../../implementation-cycles/IPP-E2S16T02-perpetual-task-inventory.md) | Last modified: 2026-04-20 18:20 UTC

- **E02:S16:T03** – Workflow maintenance (Perpetual) - 🔄 PERPETUAL (BR-059 **RESOLVED** **v0.2.16.3+6**; corpus scan) - [Task Document](epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md) | [Story](epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations.md) | [BR-059](fr-br/BR-059-ukw-moscow-incomplete-story-task-coverage.md) | [IPP-E2S16T03](../../implementation-cycles/IPP-E2S16T03-rehouse-workflow-perpetual-tasks.md) | Last modified: 2026-06-03 12:29 UTC

- **E02:S16:T04** – Ad-hoc Kanban synchronization and hygiene (Perpetual) - 🔄 PERPETUAL (UKW **v0.2.16.4+24** — T13 archive; BR-059/067 prune) - [Task Document](epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T04-ad-hoc-kanban-synchronization-and-hygiene-perpetual.md) | [Story](epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations.md) | [FR-023](fr-br/FR-023-update-kanban-workflow-ukw.md) | [E02:S16:T04](epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T04-ad-hoc-kanban-synchronization-and-hygiene-perpetual.md) | —No IPP— | Last modified: 2026-05-30 17:22 UTC

- **E02:S16:T10** – Ad-hoc Repository Infrastructure Maintenance (Perpetual) - 🔄 PERPETUAL (last RW **v0.2.16.10+4** — project root hygiene: remove junk media/logs/snapshots; relocate low-value root files; `.gitignore`) - [Task Document](epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T10-ad-hoc-repository-infrastructure-maintenance-perpetual.md) | [Story](epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations.md) | [E02:S16:T10](epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T10-ad-hoc-repository-infrastructure-maintenance-perpetual.md) | —No IPP— | Last modified: 2026-05-29 10:59 UTC

- **E02:S16:T14** – UKW gap discovery: TODO tasks and unfiled FR/BR (**FR-043**) - 📋 TODO (HIGH, perpetual UKW intake hygiene) - [Task Document](epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T14-ukw-gap-discovery-unfiled-fr-br-fr043.md) | [FR-043](fr-br/FR-043-ukw-gap-discovery-todo-tasks-and-unfiled-fr-br.md) | [E02:S16:T14](epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T14-ukw-gap-discovery-unfiled-fr-br-fr043.md) | —No IPP— | Last modified: 2026-05-30 13:36 UTC

- **E07:S01:T05** – Markdown Maintenance (Perpetual Task) - 🔄 PERPETUAL (v0.7.1.5+2; **FR-058** proposed workflow) - [Task Document](epics/Epic-7/Story-001-codebase-maintenance-tasks/T05-markdown-maintenance-perpetual-task.md) | [Story](epics/Epic-7/Story-001-codebase-maintenance-tasks.md) | [FR-058](fr-br/FR-058-markdown-maintenance-workflow.md) | [E07:S01:T05](epics/Epic-7/Story-001-codebase-maintenance-tasks/T05-markdown-maintenance-perpetual-task.md) | —No IPP— | Last modified: 2026-03-07 00:00 UTC

### Won't Have (W) - Deferred Tasks


**2026-05-30 value audit (no-value):** Shipped, vendor-only, or registry anchors — deferred from M/S/C; see linked FBUs on [`fbuboard.md`](fbuboard.md) Won't Have.



- **E06:S06:T57** – BR-039: Cascade whitelist security prompt (vendor/product; repo **COMPLETE**) - ⏸️ **WON'T HAVE** | [Task](epics/Epic-6/Story-006-feature-requests/T57-br039-cascade-whitelist-security-prompt-blocker.md) | [BR-039](fr-br/BR-039-cascade-whitelist-security-prompt-usability-blocker.md) | Last modified: 2026-04-02 00:00 UTC

- **E02:S01:T17** – FR-077: IPW task status transition + kboard sync (validators/docs **shipped**) - ⏸️ **WON'T HAVE** | [Task](epics/Epic-2/Story-001-rw-agent-execution-and-docs/T17-ipw-built-task-status-transition-and-kboard-sync-fr077.md) | [FR-077](fr-br/FR-077-ipw-built-task-status-transition-and-kboard-sync.md) | Last modified: 2026-04-14 00:00 UTC

- **E04:S19:T03** – FR-087: `E6:S07` default-housing investigation (investigation **COMPLETE**) - ⏸️ **WON'T HAVE** | [Task](epics/Epic-4/Story-019-fr-br-uxr-abstract-governance-and-intake/T03-e6s07-default-housing-drift-investigation-and-closure-decision-fr087.md) | [FR-087](fr-br/FR-087-e6s07-default-housing-root-cause-and-closure-decision.md) | Last modified: 2026-05-30 13:37 UTC

- **E02:S01:T10** – UXR-006: Single `dev` branch + RW validators (**shipped**; UXR closure only) - ⏸️ **WON'T HAVE** | [Task](epics/Epic-2/Story-001-rw-agent-execution-and-docs/T10-dev-branch-support-in-rw-validators.md) | [UXR-006](fr-br/UXR-006-dev-branch-and-rw-validator-relaxation.md) | Last modified: 2026-04-07 00:00 UTC

- **E07:S05:T01** – UXR-001 migration UX (synthesis **COMPLETE**; historical anchor [S00:T01](epics/Epic-7/Story-000-uxr-repo/T01-uxr-001-repository-anchor.md)) - ⏸️ **WON'T HAVE** | [UXR-001](fr-br/UXR-001-migration-user-experience-research.md) | [E07:S05:T01](epics/Epic-7/Story-005-migration-uxr-research.md) | —No IPP— | Last modified: 2026-05-30 13:30 UTC

- **E07:S05:T02** – UXR-002 migration UAT utilities (synthesis **COMPLETE**; historical anchor [S00:T02](epics/Epic-7/Story-000-uxr-repo/T02-uxr-002-repository-anchor.md)) - ⏸️ **WON'T HAVE** | [UXR-002](fr-br/UXR-002-comprehensive-uat-migration-utilities.md) | [E07:S05:T02](epics/Epic-7/Story-005-migration-uxr-research.md) | —No IPP— | Last modified: 2026-05-30 13:31 UTC

- **E04:S19:T09** – UXR-014: Two-digit E/S/T formatting - ✅ COMPLETE (**v0.4.19.9+2**) - ⏸️ **WON'T HAVE** | [Task](epics/Epic-4/Story-019-fr-br-uxr-abstract-governance-and-intake/T09-two-digit-est-identifier-default-formatting-uxr014.md) | [UXR-014](fr-br/UXR-014-two-digit-est-identifier-default-formatting.md) | Last modified: 2026-05-30 10:30 UTC

- **E05:S01:T48** – FR-048: ICW task identifier (**COMPLETE**; superseded by **FR-042** IPW) - ⏸️ **WON'T HAVE** | [Task](epics/Epic-5/Story-001-fr-repo/T48-icw-task-identifier-argument.md) | [FR-048](fr-br/FR-048-icw-task-identifier-argument.md) | Last modified: 2026-03-11 00:00 UTC

- **E05:S02:T06** – FR-063: CMW Epic 5 execution context (**COMPLETE**) - ⏸️ **WON'T HAVE** | [Task](epics/Epic-5/Story-002/T06-cmw-epic-5-execution-context-fr-063.md) | [FR-063](fr-br/FR-063-cmw-epic-5-execution-context.md) | Last modified: 2026-03-25 00:00 UTC

- **E21:S00:T01-T07** – Language Selection at Setup (UK/US English) - 📋 TODO (MEDIUM priority epic) - [Story](epics/Epic-21/Story-000-language-selection-at-setup.md) | Last modified: 2025-12-09 00:00 UTC

- **E21:S01:T01-T07** – Internationalization Infrastructure - 📋 TODO (MEDIUM priority epic) - [Story](epics/Epic-21/Story-001-internationalization-infrastructure.md) | Last modified: 2025-12-09 00:00 UTC

- **E21:S02:T01-T07** – Translation and Localization - 📋 TODO (MEDIUM priority epic) - [Story](epics/Epic-21/Story-002-translation-and-localization.md) | Last modified: 2025-12-09 00:00 UTC

- **E21:S03:T01-T07** – Cultural Adaptation - 📋 TODO (MEDIUM priority epic) - [Story](epics/Epic-21/Story-003-cultural-adaptation.md) | Last modified: 2025-12-09 00:00 UTC


---


















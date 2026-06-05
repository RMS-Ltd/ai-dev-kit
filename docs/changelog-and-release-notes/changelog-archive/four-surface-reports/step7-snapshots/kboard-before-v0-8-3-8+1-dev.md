---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T12:02:50Z
expires_at: null
housekeeping_policy: keep
---

# AI Dev Kit – Kanban Board

**Last Updated:** 2026-06-05 (RW **E08:S03:T08** — BR-094 closure v0.8.3.8+1)
**Version:** v0.8.3.8+1

**Active board contract:** MoSCOW rows are **live work** (TODO / IN PROGRESS / OPEN / PERPETUAL) — including a filed **Could Have** backlog. Remove **terminal** rows, date-stamped journal lines, and archive footnotes (use [`kanban-completed.md`](kanban-completed.md)), not open `TODO` queue items.

**Note:** Epics 1, 3, 7, 8, 10, 11 are COMPLETE. Epics 2, 4, 5, 6 are IN PROGRESS. Epic 21 is TODO. MoSCOW lists **tasks only** (not stories).

**Wiring:** In-flight tasks on this board match [`fbuboard.md`](fbuboard.md) for the same work. **FBU OPEN + task COMPLETE** (adopter verification) may appear on fbuboard only — see story checklists and [`fbu-completed.md`](fbu-completed.md) when closed.

> **Structure:** [`kanban-structure.md`](kanban-structure.md) · **Guide:** [`kanban-board-guide.md`](kanban-board-guide.md) · **Completed:** [`kanban-completed.md`](kanban-completed.md) · **FBU board:** [`fbuboard.md`](fbuboard.md)

---

## MoSCOW Prioritized In-Progress Tasks

### Must Have (M) - Critical Tasks

*(None.)*

### Should Have (S) - Important Tasks

- **E05:S09:T14** – BR-093: Docusaurus CI build/deploy deduplication - 📋 TODO (MEDIUM, duplicate npm build on main) | [Task](epics/epic-05/story-09-docusaurus-documentation-portal/T14-docusaurus-ci-workflow-deduplication-br093.md) | [BR-093](fr-br/BR-093-docusaurus-ci-duplicate-build-deploy-job-waste.md) | Last modified: 2026-06-05 18:56 UTC

- **E05:S09:T13** – BR-090: Docusaurus `@docusaurus/faster` + package.json 3.10.1 alignment - 📋 TODO (HIGH, CI build gate red on main) | [Task](epics/epic-05/story-09-docusaurus-documentation-portal/T13-docusaurus-faster-package-alignment-br090.md) | [BR-090](fr-br/BR-090-docusaurus-faster-missing-dependabot-310-lockfile-drift.md) | Last modified: 2026-06-05 18:30 UTC

- **E07:S07:T03** – BR-091: Workflow validator slug path resolution - 📋 TODO (HIGH, Workflow scripts pytest 4 failures) | [Task](epics/epic-07/story-07-code-reviews/T03-workflow-validator-slug-path-resolution-br091.md) | [BR-091](fr-br/BR-091-workflow-validator-legacy-workflow-mgt-path-hardcoded.md) | Last modified: 2026-06-05 18:45 UTC

### Could Have (C) - Nice-to-Have Tasks

- **E04:S09:T01** – BR-007: Multiple Bugs Kanban Package Installation - 📋 TODO (LOW, Multiple bugs in kanban package installation) | [Task](epics/epic-04/story-09-bug-fixes-and-agentic-intelligence.md) | [BR-007](fr-br/BR-007-multiple-bugs-kanban-package-installation.md) | Last modified: 2026-06-04 12:05 UTC

- **E04:S07:T01** – BR-006: Missing Migration Support Pre-existing Kanban - 📋 TODO (LOW, Missing migration support for pre-existing kanban) | [Task](epics/epic-04/story-07-migration-support-and-installation-modes.md) | [BR-006](fr-br/BR-006-missing-migration-support-pre-existing-kanban.md) | Last modified: 2026-06-04 12:06 UTC

- **E04:S07:T02** – FR-007: Migration Utilities and Installation Modes - 📋 TODO (LOW, Migration utilities and installation modes) | [Task](epics/epic-04/story-07-migration-support-and-installation-modes.md) | [FR-007](fr-br/FR-007-migration-utilities-and-installation-modes.md) | Last modified: 2026-06-04 12:07 UTC

- **E04:S06:T06** – BR-005: Kanban Framework Epic Structure Gap UAT Finding - 📋 TODO (LOW, Gap found in kanban framework epic structure) | [Task](epics/epic-04/story-06-comprehensive-canonical-est-template-system.md) | [BR-005](fr-br/BR-005-kanban-framework-epic-structure-gap-uat-finding.md) | Last modified: 2025-12-22 00:00 UTC

- **E04:S11:T07** – FR-016: Kanban Granularity Discrete Task Docs - 📋 TODO (LOW, Discrete task documents for kanban granularity) | [Task](epics/epic-04/story-11-kanban-granularity-discrete-task-docs/T07-planning-spec-tests-impl.md) | [FR-016](fr-br/FR-016-kanban-granularity-discrete-task-docs.md) | Last modified: 2026-06-04 12:08 UTC

- **E04:S11:T04** – FR-018: Abstract Space Zero Numbered Est Docs - 📋 TODO (LOW, Zero-numbered documents in abstract space) | [Task](epics/epic-04/story-11-kanban-granularity-discrete-task-docs.md) | [FR-018](fr-br/FR-018-abstract-space-zero-numbered-est-docs.md) | Last modified: 2025-12-18 00:00 UTC

- **E04:S10:T01** – FR-012: Agentic Kanban Task Creation from FR/BR - 📋 TODO (LOW, Agentic task creation from FR/BR documents) | [Task](epics/epic-04/story-10-agentic-kanban-task-creation-from-fr-br.md) | [FR-012](fr-br/FR-012-agentic-kanban-task-creation-from-fr-br.md) | Last modified: 2026-06-04 12:09 UTC

- **E04:S09:T06** – FR-010: Agentic task mapping / template two-phase migration - 📋 TODO (LOW, duplicate FR-010 ids — disambiguate on intake) | [Task](epics/epic-04/story-09-bug-fixes-and-agentic-intelligence.md) | [FR-010 mapping](fr-br/FR-010-implement-actual-agentic-intelligence-task-mapping.md) · [FR-010 templates](fr-br/FR-010-template-task-installation-two-phase-migration.md) | Last modified: 2026-06-04 12:10 UTC

- **E04:S09:T05** – BR-008: Arbitrary 80 Threshold Contradicts Agentic Intelligence - 📋 TODO (LOW, Arbitrary threshold contradicts agentic approach) | [Task](epics/epic-04/story-09-bug-fixes-and-agentic-intelligence.md) | [BR-008](fr-br/BR-008-arbitrary-80-threshold-contradicts-agentic-intelligence.md) | Last modified: 2026-06-04 12:11 UTC

- **E04:S08:T05** – FR-009: Intelligent Epic Matching AI-Assisted Canonical Adoption - 📋 TODO (LOW, AI-assisted epic matching for canonical adoption) | [Task](epics/epic-04/story-08-intelligent-epic-matching-canonical-adoption.md) | [FR-009](fr-br/FR-009-intelligent-epic-matching-ai-assisted-canonical-adoption.md) | Last modified: 2026-04-09 00:00 UTC

- **E07:S05:T03** – UXR-003: Intelligent Epic Matching Canonical Adoption UAT - 📋 TODO (MEDIUM, User acceptance testing for intelligent epic matching) | [Task](epics/epic-07/story-05-migration-uxr-research.md) | [UXR-003](fr-br/UXR-003-intelligent-epic-matching-canonical-adoption-uat.md) | Last modified: 2026-06-04 12:12 UTC

- **E04:S15:T05** – FR-029: Procedural Task Template Generation Hybrid Strategy - 📋 TODO (LOW, Hybrid strategy for task template generation) | [Task](epics/epic-04/story-15-procedural-task-template-generation-and-hybrid-strategy.md) | [FR-029](fr-br/FR-029-procedural-task-template-generation-hybrid-strategy.md) | Last modified: 2025-12-22 00:00 UTC

- **E04:S14:T04** – FR-037: Kanban Policy Task Prioritisation Queue Stack - 📋 TODO (LOW, Queue stack for task prioritization) | [Task](epics/epic-04/story-14-kanban-framework-maintenance/T04-kanban-policy-task-prioritisation-queue-stack-fr037.md) | [FR-037](fr-br/FR-037-kanban-policy-task-prioritisation-queue-stack.md) | Last modified: 2026-06-04 12:13 UTC

- **E02:S01:T06** – BR-001: Validate Version Bump Epic Story Detection Bug - 📋 TODO (LOW, Bug in epic/story detection for version bump validation) | [Task](epics/epic-02/story-01-rw-agent-execution-and-docs.md) | [BR-001](fr-br/BR-001-validate-version-bump-epic-story-detection-bug.md) | Last modified: 2026-05-26 00:00 UTC

- **E02:S11:T11** – BR-002: Changelog Validator Ordering Bug - 📋 TODO (LOW, Ordering bug in changelog validator) | [Task](epics/epic-02/story-11-intake-workflow-automation/Task-011-Fix-CHANGELOG-Ordering-Violations.md) | [BR-002](fr-br/BR-002-changelog-validator-ordering-bug.md) | Last modified: 2025-12-16 00:00 UTC

- **E02:S10:T00** – FR-017: Versioning Policy Hardening Doc-Init Build - 📋 TODO (LOW, Hardening versioning policy for doc-init builds) | [Task](epics/epic-02/story-10-doc-init-build-zero-for-new-est.md) | [FR-017](fr-br/FR-017-versioning-policy-hardening-doc-init-build.md) | Last modified: 2025-12-12 00:00 UTC

- **E02:S10:T06** – FR-020: Version Validator Abstract Space Awareness - 📋 TODO (LOW, Abstract space awareness in version validator) | [Task](epics/epic-02/story-10-doc-init-build-zero-for-new-est.md) | [FR-020](fr-br/FR-020-version-validator-abstract-space-awareness.md) | Last modified: 2025-12-12 00:00 UTC

- **E02:S11:T13** – GitHub Actions workflow spam emails (BR-051) - 📋 TODO (LOW, post-story hardening) | [Task](epics/epic-02/story-11-intake-workflow-automation/T13-github-actions-workflow-spam-emails-br051.md) | [BR-051](fr-br/BR-051-github-actions-workflow-spam-emails.md) | Last modified: 2026-05-29 17:15 UTC

- **E02:S11:T14** – GitHub Actions workflow optimization (BR-052) - 📋 TODO (LOW, post-story hardening) | [Task](epics/epic-02/story-11-intake-workflow-automation/T14-github-actions-workflow-optimization-br052.md) | [BR-052](fr-br/BR-052-github-actions-workflow-optimization.md) | Last modified: 2026-05-29 17:16 UTC

- **E02:S11:T00** – FR-019: Intake Workflow Automation - 📋 TODO (LOW, Automation for intake workflow) | [Task](epics/epic-02/story-11-intake-workflow-automation.md) | [FR-019](fr-br/FR-019-intake-workflow-automation.md) | Last modified: 2026-03-30 00:00 UTC

- **E05:S01:T44** – FR-044: RW Temporary Execution Log for Recovery and Forensics - 📋 TODO (LOW, Temporary execution logs for Release Workflow) | [Task](epics/epic-05/story-01-fr-repo/T44-rw-temporary-execution-log-for-recovery-and-forensics.md) | [FR-044](fr-br/FR-044-rw-temporary-execution-log-for-recovery-and-forensics.md) | Last modified: 2026-02-22 00:00 UTC

- **E02:S06:T01** – FR-008: Package Uninstall Capabilities - 📋 TODO (LOW, Uninstall capabilities for packages) | [Task](epics/epic-02/story-06-package-uninstall-and-recovery.md) | [FR-008](fr-br/FR-008-package-uninstall-capabilities.md) | [—IPP—](../../implementation-cycles/IPP-E2S06T01-package-uninstall-reimplementation.md) | Last modified: 2026-05-15 00:00 UTC

- **E05:S07:T01** – FR-022: Policy Docs Machine-Readable Salience - 📋 TODO (LOW, Machine-readable policy documentation) | [Task](epics/epic-05/story-07-policy-documentation-structure.md) | [FR-022](fr-br/FR-022-policy-docs-machine-readable-salience.md) | Last modified: 2026-01-16 00:00 UTC

- **E10:S01:T01** – Establish expectations baseline for Document Lifecycle package - 📋 TODO (HIGH, Epic 10 doc-lifecycle RC review) | [Task](epics/epic-10/story-01-document-lifecycle-package-implementation-review.md#E10S01T01--establish-expectations-baseline-for-document-lifecycle-package) | [Story](epics/epic-10/story-01-document-lifecycle-package-implementation-review.md) | Last modified: 2026-01-18 16:44 UTC

- **E10:S01:T02** – Inventory package components and map to expectations - 📋 TODO (HIGH, Epic 10 doc-lifecycle RC review) | [Task](epics/epic-10/story-01-document-lifecycle-package-implementation-review.md) | [Story](epics/epic-10/story-01-document-lifecycle-package-implementation-review.md) | Last modified: 2026-01-18 16:45 UTC

- **E10:S01:T03** – Validate lifecycle behavior against documented guidance - 📋 TODO (HIGH, Epic 10 doc-lifecycle RC review) | [Task](epics/epic-10/story-01-document-lifecycle-package-implementation-review.md) | [Story](epics/epic-10/story-01-document-lifecycle-package-implementation-review.md) | Last modified: 2026-01-18 16:46 UTC

- **E10:S01:T04** – Review integrations and dependency alignment - 📋 TODO (HIGH, Epic 10 doc-lifecycle RC review) | [Task](epics/epic-10/story-01-document-lifecycle-package-implementation-review.md) | [Story](epics/epic-10/story-01-document-lifecycle-package-implementation-review.md) | Last modified: 2026-01-18 16:47 UTC

- **E10:S01:T05** – Create gap log and risk assessment - 📋 TODO (HIGH, Epic 10 doc-lifecycle RC review) | [Task](epics/epic-10/story-01-document-lifecycle-package-implementation-review.md) | [Story](epics/epic-10/story-01-document-lifecycle-package-implementation-review.md) | Last modified: 2026-01-18 16:48 UTC

- **E10:S01:T06** – Define RC sign-off criteria and remediation tasks - 📋 TODO (HIGH, Epic 10 doc-lifecycle RC review) | [Task](epics/epic-10/story-01-document-lifecycle-package-implementation-review.md) | [Story](epics/epic-10/story-01-document-lifecycle-package-implementation-review.md) | Last modified: 2026-01-18 16:49 UTC

- **E01:S02:T14** – FR-003: Dependency Tracking in Adopting Projects - 📋 TODO (LOW, Dependency tracking for project adoption) | [Task](epics/epic-01/story-02-package-and-repo-architecture/T14-dependency-tracking-adopters-fr003.md) | [FR-003](fr-br/FR-003-dependency-tracking-in-adopting-projects.md) | Last modified: 2026-06-04 21:01 UTC

- **E01:S02:T13** – FR-002: Update Been There README - 📋 TODO (LOW, Update README for been-there functionality) | [Task](epics/epic-01/story-02-package-and-repo-architecture/T13-readme-template-best-readme-fr002.md) | [FR-002](fr-br/FR-002-update-been-there-readme.md) | Last modified: 2026-06-04 12:14 UTC

- **E07:S01:T10** – FR-039: AI Dev Kit Project Review and Legacy Clean-up - 📋 TODO (LOW, Review and clean up legacy project elements) | [Task](epics/epic-07/story-01-codebase-maintenance-tasks/T10-project-root-hygiene-and-legacy-docs-rationalization.md) | [FR-039](fr-br/FR-039-ai-dev-kit-project-review-and-legacy-clean-up.md) | Last modified: 2026-06-04 12:15 UTC

- **E21:S00:T01** – FR-006: Localization Language Selection UK/US English - 📋 TODO (LOW, Language selection for UK/US English) | [Task](epics/epic-21/story-00-language-selection-at-setup.md) | [FR-006](fr-br/FR-006-localization-language-selection-uk-us-english.md) | Last modified: 2025-12-09 00:00 UTC

- **E02:S07:T05** – FR-014: RW Trigger for FR/BR Commits - 📋 TODO (LOW, Release Workflow trigger for FR/BR commits) | [Task](epics/epic-02/story-07-trigger-aware-release-workflow.md) | [FR-014](fr-br/FR-014-rw-trigger-for-fr-br-commits.md) | Last modified: 2026-05-16 00:00 UTC

- **E02:S07:T01** – FR-013: Trigger-Aware Release Workflow - 📋 TODO (LOW, Trigger-aware enhancements to Release Workflow) | [Task](epics/epic-02/story-07-trigger-aware-release-workflow.md) | [FR-013](fr-br/FR-013-trigger-aware-release-workflow.md) | Last modified: 2026-05-16 00:00 UTC

- **E06:S08:T01** – FR-030: AI Dev Kit CLI Tool - 📋 TODO (MEDIUM, Command-line interface tool) | [Task](epics/epic-06/story-08-ai-dev-kit-cli-tool.md) | [FR-030](fr-br/FR-030-ai-dev-kit-cli-tool.md) | Last modified: 2026-01-16 00:00 UTC

### Ongoing (O) - Perpetual Tasks

- **E02:S16:T03** – Workflow maintenance (Perpetual) - 🔄 PERPETUAL (BR-059 **RESOLVED** **v0.2.16.3+6**) - [Task](epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md) | [Story](epics/epic-02/story-16-perpetual-ongoing-workflow-operations.md) | [BR-059](fr-br/BR-059-ukw-moscow-incomplete-story-task-coverage.md) | Last modified: 2026-06-03 12:29 UTC

- **E02:S16:T04** – Ad-hoc Kanban synchronization and hygiene (Perpetual) - 🔄 PERPETUAL (**v0.2.16.4+28**) - [Task](epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T04-ad-hoc-kanban-synchronization-and-hygiene-perpetual.md) | [Story](epics/epic-02/story-16-perpetual-ongoing-workflow-operations.md) | [FR-023](fr-br/FR-023-update-kanban-workflow-ukw.md) | Last modified: 2026-06-04 17:34 UTC

- **E02:S16:T10** – Ad-hoc Repository Infrastructure Maintenance (Perpetual) - 🔄 PERPETUAL (last RW **v0.2.16.10+5**) - [Task](epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T10-ad-hoc-repository-infrastructure-maintenance-perpetual.md) | [Story](epics/epic-02/story-16-perpetual-ongoing-workflow-operations.md) | Last modified: 2026-06-04 22:55 UTC

- **E02:S16:T14** – UKW gap discovery: TODO tasks and unfiled FR/BR (**FR-043**) - 📋 TODO (HIGH, perpetual UKW intake hygiene) - [Task](epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T14-ukw-gap-discovery-unfiled-fr-br-fr043.md) | [FR-043](fr-br/FR-043-ukw-gap-discovery-todo-tasks-and-unfiled-fr-br.md) | Last modified: 2026-05-30 13:36 UTC

- **E07:S01:T05** – Markdown Maintenance (Perpetual Task) - 🔄 PERPETUAL (v0.7.1.5+2; **FR-058** proposed workflow) - [Task](epics/epic-07/story-01-codebase-maintenance-tasks/T05-markdown-maintenance-perpetual-task.md) | [Story](epics/epic-07/story-01-codebase-maintenance-tasks.md) | [FR-058](fr-br/FR-058-markdown-maintenance-workflow.md) | Last modified: 2026-03-07 00:00 UTC

### Won't Have (W) - Deferred Tasks

*(Deferred and shipped items: see [`kanban-completed.md`](kanban-completed.md) and story checklists — not listed on the active board.)*

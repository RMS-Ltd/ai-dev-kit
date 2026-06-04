---
lifecycle: evergreen
ttl_days: null
created_at: 2026-03-09T15:15:00Z
expires_at: null
housekeeping_policy: keep
---

# AI Dev Kit – FBU Prioritization Board

**Last Updated:** 2026-06-05 (RW **E08:S03:T07** — BR-092 closure v0.8.3.7+1)
**Version Context:** v0.8.3.7+1

**Active board contract:** Rows are **open FBU work** (OPEN / TODO / PROPOSED with active task), including **Could Have** backlog. Remove **terminal** FBUs and archive/journal prose (use [`fbu-completed.md`](fbu-completed.md)), not filed low-priority queue items.

> **Tasks:** [`kboard.md`](kboard.md) · **Completed:** [`fbu-completed.md`](fbu-completed.md)

**Bidirectional wiring:** Every row includes **`E#:S#:T#`** from the FBU doc **`Implementing Task:`** field and must match a live row on `kboard.md` for M/S/C/O.

---

## MoSCOW Prioritized FBU Items

### Must Have (M) - Critical Items

- **FR-045** – ADR-002 task-touch mapping — 1:1 internal↔SemVer - 🟢 OPEN (HIGH, fix attempted **v0.3.2.12+4**) | [FR-045](fr-br/FR-045-adr-002-task-touch-derived-mapping.md) | [E03:S02:T12](epics/epic-03/story-02-versioning-cookbook-and-examples/T12-implement-task-touch-semver-mapping-mode.md) | [—IPP—](../../implementation-cycles/IPW-E3S02T12-task-touch-semver-collision-hardening.md) | Last modified: 2026-06-04 12:15 UTC

- **FR-046** – RW SemVer tag when `task_touch` enabled - 🟢 OPEN (HIGH, fix attempted **v0.3.2.12+4**) | [FR-046](fr-br/FR-046-rw-semver-tag-task-touch-mode.md) | [E03:S02:T12](epics/epic-03/story-02-versioning-cookbook-and-examples/T12-implement-task-touch-semver-mapping-mode.md) | [—IPP—](../../implementation-cycles/IPW-E3S02T12-task-touch-semver-collision-hardening.md) | Last modified: 2026-06-04 14:20 UTC

- **BR-061** – Task-touch SemVer PATCH / registry counter - 🟢 OPEN (HIGH, fix attempted **v0.3.2.12+4**) | [BR-061](fr-br/BR-061-semver-task-touch-counter-increments-too-often.md) | [E03:S02:T12](epics/epic-03/story-02-versioning-cookbook-and-examples/T12-implement-task-touch-semver-mapping-mode.md) | [—IPP—](../../implementation-cycles/IPW-E3S02T12-task-touch-semver-collision-hardening.md) | Last modified: 2026-06-04 18:45 UTC

### Should Have (S) - Important Items

- **BR-093** – Docusaurus CI duplicate build + deploy jobs waste minutes - 📋 TODO (MEDIUM) | [BR-093](fr-br/BR-093-docusaurus-ci-duplicate-build-deploy-job-waste.md) | [E05:S09:T14](epics/epic-05/story-09-docusaurus-documentation-portal/T14-docusaurus-ci-workflow-deduplication-br093.md) | —No IPP— | Last modified: 2026-06-05 18:56 UTC

- **BR-090** – Docusaurus 3.10 build fails: missing `@docusaurus/faster` + lockfile drift - 📋 TODO (HIGH) | [BR-090](fr-br/BR-090-docusaurus-faster-missing-dependabot-310-lockfile-drift.md) | [E05:S09:T13](epics/epic-05/story-09-docusaurus-documentation-portal/T13-docusaurus-faster-package-alignment-br090.md) | —No IPP— | Last modified: 2026-06-05 18:30 UTC

- **BR-091** – Workflow validators hardcode legacy `workflow mgt` path - 📋 TODO (HIGH, Workflow scripts pytest gate red) | [BR-091](fr-br/BR-091-workflow-validator-legacy-workflow-mgt-path-hardcoded.md) | [E07:S07:T03](epics/epic-07/story-07-code-reviews/T03-workflow-validator-slug-path-resolution-br091.md) | —No IPP— | Last modified: 2026-06-05 18:45 UTC

- **FR-106** – Packaged workflows sync with live repo implementation - 🟢 OPEN (HIGH, fix attempted **v0.2.13.8+2** — pending verification) | [IPP](../../implementation-cycles/IPP-E02S13T08-sync-packaged-workflows-live-spec.md) | [FR-106](fr-br/FR-106-packaged-workflows-sync-with-live-repo-implementation.md) | [E02:S13:T08](epics/epic-02/story-13-workflow-management-package-implementation-review/T08-sync-packaged-workflows-with-live-repo-implementation.md) | —No IPP— | Last modified: 2026-06-03 20:06 UTC

- **BR-087** – Framework packages install with legacy directory names (spaces, `&`) (see [UXR-016](fr-br/UXR-016-install-setup-interactive-feedback-external-semver-version.md)) - 🟢 OPEN (HIGH, fix attempted **v0.6.9.18+2** — adopter verification pending) | [BR-087](fr-br/BR-087-framework-install-directory-slug-mismatch.md) | [UXR-016](fr-br/UXR-016-install-setup-interactive-feedback-external-semver-version.md) | [E06:S09:T18](epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T18-br087-framework-slug-install-closure.md) | —No IPP— | Last modified: 2026-06-05 14:40 UTC

- **BR-088** – RW Mode C does not create version_file path (no src/) - 🟢 OPEN (MEDIUM, fix attempted **v0.6.9.19+1**, GitHub **#18**) | [IPP-E06S09T19](../../implementation-cycles/IPP-E06S09T19-br088-version-file-scaffold.md) | [BR-088](fr-br/BR-088-rw-install-mode-c-missing-version-file-scaffold.md) | [E06:S09:T19](epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T19-rw-install-version-file-scaffold-br088.md) | —No IPP— | Last modified: 2026-06-05 17:11 UTC

- **BR-080** – Kanban fresh mode validation fails without `--force` on empty repo - 🟢 OPEN (HIGH, fix attempted **v0.6.9.9+2** — pending verification **#12**) | [IPP-E06S09T09](../../implementation-cycles/IPP-E06S09T09-br080-fresh-mode-empty-repo-validation.md) | [BR-080](fr-br/BR-080-kanban-fresh-mode-validation-requires-force-on-empty-repo.md) | [E06:S09:T09](epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T09-kanban-fresh-mode-validation-br080.md) | —No IPP— | Last modified: 2026-06-03 17:42 UTC

- **BR-082** – RW install fails without venv PyYAML; no preflight hint - 🟢 OPEN (HIGH, fix attempted **v0.6.9.11+2** — pending verification **#14**) | [IPP-E06S09T11](../../implementation-cycles/IPP-E06S09T11-br082-rw-install-pyyaml-preflight.md) | [BR-082](fr-br/BR-082-rw-install-missing-pyyaml-preflight.md) | [E06:S09:T11](epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T11-rw-install-pyyaml-preflight-br082.md) | —No IPP— | Last modified: 2026-06-03 17:44 UTC

- **BR-078** – Kanban fresh install: structure template not found - 🟢 OPEN (MEDIUM, fix attempted **v0.6.9.7+2** — pending verification **#10**) | [IPP-E06S09T07](../../implementation-cycles/IPP-E06S09T07-br078-kanban-structure-template-missing.md) | [BR-078](fr-br/BR-078-kanban-fresh-install-structure-template-missing.md) | [E06:S09:T07](epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T07-kanban-fresh-install-structure-template-missing-br078.md) | —No IPP— | Last modified: 2026-06-03 17:40 UTC

- **BR-079** – Kanban fresh install: Epic 22/23 placeholders only - 🟢 OPEN (MEDIUM, fix attempted **v0.6.9.8+2** — pending verification **#11**) | [IPP-E06S09T08](../../implementation-cycles/IPP-E06S09T08-br079-epic-22-23-install-templates.md) | [BR-079](fr-br/BR-079-kanban-fresh-install-epic-22-23-placeholder-only.md) | [E06:S09:T08](epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T08-kanban-fresh-install-epic-22-23-templates-br079.md) | —No IPP— | Last modified: 2026-06-03 17:41 UTC

### Could Have (C) - Nice-to-Have Items

- **FR-032** – Release Candidate Readiness Gap Analysis - 🔄 IN PROGRESS (FR-032.3 complete; T04–T07 open) | [IPP](../../implementation-cycles/IPP-E09S01T03-gap-comparison-fr032.md) | [FR-032](fr-br/FR-032-release-candidate-readiness-gap-analysis.md) | [E09:S01:T03](epics/epic-09/story-01-rc-readiness-gap-analysis/T03-gap-analysis-fr032.md) | —No IPP— | Last modified: 2026-06-04 12:05 UTC

- **BR-007** – Multiple Bugs Kanban Package Installation - 📋 TODO (LOW, Multiple bugs in kanban package installation) | [BR-007](fr-br/BR-007-multiple-bugs-kanban-package-installation.md) | Last modified: 2026-06-04 12:06 UTC

- **BR-006** – Missing Migration Support Pre-existing Kanban - 📋 TODO (LOW, Missing migration support for pre-existing kanban) | [BR-006](fr-br/BR-006-missing-migration-support-pre-existing-kanban.md) | [E04:S07:T01](epics/epic-04/story-07-migration-support-and-installation-modes.md) | —No IPP— | Last modified: 2026-06-04 12:07 UTC

- **FR-007** – Migration Utilities and Installation Modes - 📋 TODO (LOW, Migration utilities and installation modes) | [FR-007](fr-br/FR-007-migration-utilities-and-installation-modes.md) | [E04:S07:T02](epics/epic-04/story-07-migration-support-and-installation-modes.md) | —No IPP— | Last modified: 2026-06-04 12:08 UTC

- **BR-005** – Kanban Framework Epic Structure Gap UAT Finding - 📋 TODO (LOW, Gap found in kanban framework epic structure) | [BR-005](fr-br/BR-005-kanban-framework-epic-structure-gap-uat-finding.md) | [E04:S06:T06](epics/epic-04/story-06-comprehensive-canonical-est-template-system.md) | —No IPP— | Last modified: 2025-12-22 00:00 UTC

- **FR-016** – Kanban Granularity Discrete Task Docs - 📋 TODO (LOW, Discrete task documents for kanban granularity) | [FR-016](fr-br/FR-016-kanban-granularity-discrete-task-docs.md) | [E04:S11:T07](epics/epic-04/story-11-kanban-granularity-discrete-task-docs/T07-planning-spec-tests-impl.md) | —No IPP— | Last modified: 2026-06-04 12:09 UTC

- **FR-018** – Abstract Space Zero Numbered Est Docs - 📋 TODO (LOW, Zero-numbered documents in abstract space) | [FR-018](fr-br/FR-018-abstract-space-zero-numbered-est-docs.md) | [E04:S11:T04](epics/epic-04/story-11-kanban-granularity-discrete-task-docs.md) | —No IPP— | Last modified: 2025-12-18 00:00 UTC

- **FR-012** – Agentic Kanban Task Creation from FR/BR - 📋 TODO (LOW, Agentic task creation from FR/BR documents) | [FR-012](fr-br/FR-012-agentic-kanban-task-creation-from-fr-br.md) | [E04:S10:T01](epics/epic-04/story-10-agentic-kanban-task-creation-from-fr-br.md) | —No IPP— | Last modified: 2026-06-04 12:10 UTC

- **FR-010** – Agentic task mapping / template two-phase migration (duplicate FR-010 ids — disambiguate on intake) - 📋 TODO (LOW) | [FR-010 mapping](fr-br/FR-010-implement-actual-agentic-intelligence-task-mapping.md) · [FR-010 templates](fr-br/FR-010-template-task-installation-two-phase-migration.md) | [E04:S09:T06](epics/epic-04/story-09-bug-fixes-and-agentic-intelligence.md) | —No IPP— | Last modified: 2026-06-04 12:11 UTC

- **BR-008** – Arbitrary 80 Threshold Contradicts Agentic Intelligence - 📋 TODO (LOW, Arbitrary threshold contradicts agentic approach) | [BR-008](fr-br/BR-008-arbitrary-80-threshold-contradicts-agentic-intelligence.md) | [E04:S09:T05](epics/epic-04/story-09-bug-fixes-and-agentic-intelligence.md) | —No IPP— | Last modified: 2026-06-04 12:12 UTC

- **FR-009** – Intelligent Epic Matching AI-Assisted Canonical Adoption - 📋 TODO (LOW, AI-assisted epic matching for canonical adoption) | [FR-009](fr-br/FR-009-intelligent-epic-matching-ai-assisted-canonical-adoption.md) | [E04:S08:T05](epics/epic-04/story-08-intelligent-epic-matching-canonical-adoption.md) | —No IPP— | Last modified: 2026-04-09 00:00 UTC

- **UXR-003** – Intelligent Epic Matching Canonical Adoption UAT - 📋 TODO (MEDIUM, User acceptance testing for intelligent epic matching) | [UXR-003](fr-br/UXR-003-intelligent-epic-matching-canonical-adoption-uat.md) | [E07:S05:T03](epics/epic-07/story-05-migration-uxr-research.md) | —No IPP— | Last modified: 2026-06-04 12:13 UTC

- **FR-029** – Procedural Task Template Generation Hybrid Strategy - 📋 TODO (LOW, Hybrid strategy for task template generation) | [FR-029](fr-br/FR-029-procedural-task-template-generation-hybrid-strategy.md) | [E04:S15:T05](epics/epic-04/story-15-procedural-task-template-generation-and-hybrid-strategy.md) | —No IPP— | Last modified: 2025-12-22 00:00 UTC

- **FR-037** – Kanban Policy Task Prioritisation Queue Stack - 📋 TODO (LOW, Queue stack for task prioritization) | [FR-037](fr-br/FR-037-kanban-policy-task-prioritisation-queue-stack.md) | [E04:S14:T04](epics/epic-04/story-14-kanban-framework-maintenance/T04-kanban-policy-task-prioritisation-queue-stack-fr037.md) | —No IPP— | Last modified: 2026-06-04 12:14 UTC

- **BR-001** – Validate Version Bump Epic Story Detection Bug - 📋 TODO (LOW, Bug in epic/story detection for version bump validation) | [BR-001](fr-br/BR-001-validate-version-bump-epic-story-detection-bug.md) | [E02:S01:T06](epics/epic-02/story-01-rw-agent-execution-and-docs.md) | —No IPP— | Last modified: 2026-05-26 00:00 UTC

- **BR-002** – Changelog Validator Ordering Bug - 📋 TODO (LOW, Ordering bug in changelog validator) | [BR-002](fr-br/BR-002-changelog-validator-ordering-bug.md) | [E02:S11:T11](epics/epic-02/story-11-intake-workflow-automation/Task-011-Fix-CHANGELOG-Ordering-Violations.md) | —No IPP— | Last modified: 2025-12-16 00:00 UTC

- **FR-017** – Versioning Policy Hardening Doc-Init Build - 📋 TODO (LOW, Hardening versioning policy for doc-init builds) | [FR-017](fr-br/FR-017-versioning-policy-hardening-doc-init-build.md) | [E02:S10:T00](epics/epic-02/story-10-doc-init-build-zero-for-new-est.md) | —No IPP— | Last modified: 2025-12-12 00:00 UTC

- **FR-020** – Version Validator Abstract Space Awareness - 📋 TODO (LOW, Abstract space awareness in version validator) | [FR-020](fr-br/FR-020-version-validator-abstract-space-awareness.md) | [E02:S10:T06](epics/epic-02/story-10-doc-init-build-zero-for-new-est.md) | —No IPP— | Last modified: 2025-12-12 00:00 UTC

- **BR-051** – GitHub Actions workflow spam emails - 📋 TODO (LOW, post-story hardening) | Last modified: 2026-05-29 17:15:00 UTC | [BR-051](fr-br/BR-051-github-actions-workflow-spam-emails.md) | [E02:S11:T13](epics/epic-02/story-11-intake-workflow-automation/T13-github-actions-workflow-spam-emails-br051.md) | —No IPP—

- **BR-052** – GitHub Actions workflow optimization - 📋 TODO (LOW, post-story hardening) | Last modified: 2026-05-29 17:16:00 UTC | [BR-052](fr-br/BR-052-github-actions-workflow-optimization.md) | [E02:S11:T14](epics/epic-02/story-11-intake-workflow-automation/T14-github-actions-workflow-optimization-br052.md) | —No IPP—

- **FR-019** – Intake Workflow Automation - 📋 TODO (LOW, Automation for intake workflow) | [FR-019](fr-br/FR-019-intake-workflow-automation.md) | [E02:S11:T00](epics/epic-02/story-11-intake-workflow-automation.md) | —No IPP— | Last modified: 2026-03-30 00:00 UTC

- **FR-044** – RW Temporary Execution Log for Recovery and Forensics - 📋 TODO (LOW, Temporary execution logs for Release Workflow) | [FR-044](fr-br/FR-044-rw-temporary-execution-log-for-recovery-and-forensics.md) | [E05:S01:T44](epics/epic-05/story-01-fr-repo/T44-rw-temporary-execution-log-for-recovery-and-forensics.md) | —No IPP— | Last modified: 2026-02-22 00:00 UTC

- **FR-008** – Package Uninstall Capabilities - 📋 TODO (LOW, Uninstall capabilities for packages) | [FR-008](fr-br/FR-008-package-uninstall-capabilities.md) | [E02:S06:T01](epics/epic-02/story-06-package-uninstall-and-recovery.md) | [—IPP—](../../implementation-cycles/IPP-E2S06T01-package-uninstall-reimplementation.md) | Last modified: 2026-05-15 00:00 UTC

- **FR-022** – Policy Docs Machine-Readable Salience - 📋 TODO (LOW, Machine-readable policy documentation) | [FR-022](fr-br/FR-022-policy-docs-machine-readable-salience.md) | [E05:S07:T01](epics/epic-05/story-07-policy-documentation-structure.md) | —No IPP— | Last modified: 2026-01-16 00:00 UTC

- **FR-002** – Update Been There README - 📋 TODO (LOW, Update README for been-there functionality) | [FR-002](fr-br/FR-002-update-been-there-readme.md) | [E01:S02:T13](epics/epic-01/story-02-package-and-repo-architecture/T13-readme-template-best-readme-fr002.md) | —No IPP— | Last modified: 2026-06-04 12:15 UTC

- **FR-039** – AI Dev Kit Project Review and Legacy Clean-up - 📋 TODO (LOW, Review and clean up legacy project elements) | [FR-039](fr-br/FR-039-ai-dev-kit-project-review-and-legacy-clean-up.md) | [E07:S01:T10](epics/epic-07/story-01-codebase-maintenance-tasks/T10-project-root-hygiene-and-legacy-docs-rationalization.md) | —No IPP— | Last modified: 2026-06-04 12:16 UTC

- **FR-006** – Localization Language Selection UK/US English - 📋 TODO (LOW, Language selection for UK/US English) | [FR-006](fr-br/FR-006-localization-language-selection-uk-us-english.md) | [E21:S00:T01](epics/epic-21/story-00-language-selection-at-setup.md) | —No IPP— | Last modified: 2025-12-09 00:00 UTC

- **FR-014** – RW Trigger for FR/BR Commits - 📋 TODO (LOW, Release Workflow trigger for FR/BR commits) | [FR-014](fr-br/FR-014-rw-trigger-for-fr-br-commits.md) | [E02:S07:T05](epics/epic-02/story-07-trigger-aware-release-workflow.md) | —No IPP— | Last modified: 2026-05-16 00:00 UTC

- **FR-013** – Trigger-Aware Release Workflow - 📋 TODO (LOW, Trigger-aware enhancements to Release Workflow) | [FR-013](fr-br/FR-013-trigger-aware-release-workflow.md) | [E02:S07:T01](epics/epic-02/story-07-trigger-aware-release-workflow.md) | —No IPP— | Last modified: 2026-05-16 00:00 UTC

- **FR-030** – AI Dev Kit CLI Tool - 📋 TODO (MEDIUM, Command-line interface tool) | [FR-030](fr-br/FR-030-ai-dev-kit-cli-tool.md) | [E06:S08:T01](epics/epic-06/story-08-ai-dev-kit-cli-tool.md) | —No IPP— | Last modified: 2026-01-16 00:00 UTC

### Won't Have (W) - Deferred Items

*(Deferred and terminal FBUs: see [`fbu-completed.md`](fbu-completed.md) — not listed on the active board.)*

### Ongoing (O) - Perpetual Items

- **FR-023** – Update Kanban Workflow (UKW) - 📋 TODO (LOW, **E02:S16:T04** on kboard) | [FR-023](fr-br/FR-023-update-kanban-workflow-ukw.md) | [E02:S16:T04](epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T04-ad-hoc-kanban-synchronization-and-hygiene-perpetual.md) | —No IPP— | Last modified: 2026-05-30 00:00 UTC

- **FR-043** – UKW gap discovery (TODO tasks + unfiled FR/BR) - 📋 TODO (HIGH, **E02:S16:T14** on kboard) | [FR-043](fr-br/FR-043-ukw-gap-discovery-todo-tasks-and-unfiled-fr-br.md) | [E02:S16:T14](epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T14-ukw-gap-discovery-unfiled-fr-br-fr043.md) | —No IPP— | Last modified: 2026-05-29 17:18 UTC

- **FR-058** – Markdown maintenance workflow - 💡 PROPOSED (LOW, **E07:S01:T05** on kboard) | [FR-058](fr-br/FR-058-markdown-maintenance-workflow.md) | [E07:S01:T05](epics/epic-07/story-01-codebase-maintenance-tasks/T05-markdown-maintenance-perpetual-task.md) | —No IPP— | Last modified: 2026-03-07 00:00 UTC

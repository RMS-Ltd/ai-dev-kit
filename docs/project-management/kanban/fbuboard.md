---
lifecycle: evergreen
ttl_days: null
created_at: 2026-03-09T15:15:00Z
expires_at: null
housekeeping_policy: keep
---

# AI Dev Kit – FBU Prioritization Board

**Last Updated:** 2026-06-03 (intake **BR-078–BR-083** — GitHub #10–#15 → Should/Could MoSCOW)
**Version Context:** v0.2.16.4+25 (**SemVer** v0.4.854+25)
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

**Bidirectional wiring (2026-05-29):** Every active row includes an **`E#:S#:T#`** task link sourced from the FBU doc **`Implementing Task:`** field. Rows on [`kboard.md`](kboard.md) with FBU links must appear here (and vice versa for M/S and active C/O bands). See [`bidirectional-wiring-principle.md`](../../governance/principles/bidirectional-wiring-principle.md).

**Consolidation (2026-05-30):** Pruned terminal FBUs **FR-103**, **FR-102**, **FR-046**, **FR-011**, **FR-049**, **FR-074** (tasks COMPLETE/IMPLEMENTED). See [`fbu-completed.md`](fbu-completed.md).

**Consolidation (2026-06-01, UKW -u):** Pruned **FR-072** (COMPLETE **v0.4.19.8+2**), **FR-021** (SUPERSEDED by FR-072 / **E04:S19:T08**). See [`fbu-completed.md`](fbu-completed.md).

### Must Have (M) - Critical Items

*(No Must Have FBU items — 2026-06-03 UKW archived **FR-104**, **FR-105**, **BR-077** → [fbu-completed.md](fbu-completed.md).)*

---

### Should Have (S) - Important Items

**2026-06-03:** Intake from GitHub issues **#10–#15** (book dry-run / ExpensesTracker T03) → **E06:S09:T07–T12**.

- **BR-080** – Kanban fresh mode validation fails without `--force` on empty repo - 🟢 OPEN (HIGH, fix attempted **v0.6.9.9+2** — pending verification **#12**) | [BR-080](fr-br/BR-080-kanban-fresh-mode-validation-requires-force-on-empty-repo.md) | [E06:S09:T09](epics/Epic-6/Story-009-ai-dev-kit-installation-and-adopter-integration/T09-kanban-fresh-mode-validation-br080.md) | [IPP-E06S09T09](../../implementation-cycles/IPP-E06S09T09-br080-fresh-mode-empty-repo-validation.md) | Last modified: 2026-06-03 17:42 UTC

- **BR-082** – RW install fails without venv PyYAML; no preflight hint - 🟢 OPEN (HIGH, fix attempted **v0.6.9.11+2** — pending verification **#14**) | [BR-082](fr-br/BR-082-rw-install-missing-pyyaml-preflight.md) | [E06:S09:T11](epics/Epic-6/Story-009-ai-dev-kit-installation-and-adopter-integration/T11-rw-install-pyyaml-preflight-br082.md) | [IPP-E06S09T11](../../implementation-cycles/IPP-E06S09T11-br082-rw-install-pyyaml-preflight.md) | Last modified: 2026-06-03 17:44 UTC

- **BR-078** – Kanban fresh install: structure template not found - 🟢 OPEN (MEDIUM, fix attempted **v0.6.9.7+2** — pending verification **#10**) | [BR-078](fr-br/BR-078-kanban-fresh-install-structure-template-missing.md) | [E06:S09:T07](epics/Epic-6/Story-009-ai-dev-kit-installation-and-adopter-integration/T07-kanban-fresh-install-structure-template-missing-br078.md) | [IPP-E06S09T07](../../implementation-cycles/IPP-E06S09T07-br078-kanban-structure-template-missing.md) | Last modified: 2026-06-03 17:40 UTC

- **BR-079** – Kanban fresh install: Epic 22/23 placeholders only - 🟢 OPEN (MEDIUM, fix attempted **v0.6.9.8+2** — pending verification **#11**) | [IPP-E06S09T08](../../implementation-cycles/IPP-E06S09T08-br079-epic-22-23-install-templates.md) | [BR-079](fr-br/BR-079-kanban-fresh-install-epic-22-23-placeholder-only.md) | [E06:S09:T08](epics/Epic-6/Story-009-ai-dev-kit-installation-and-adopter-integration/T08-kanban-fresh-install-epic-22-23-templates-br079.md) | Last modified: 2026-06-03 17:41 UTC

- **BR-083** – RW install default epic/story patterns mismatch fresh kanban layout - 🟢 OPEN (MEDIUM, fix attempted **v0.6.9.12+2** — pending verification **#15**) | [BR-083](fr-br/BR-083-rw-install-default-patterns-mismatch-fresh-kanban-layout.md) | [E06:S09:T12](epics/Epic-6/Story-009-ai-dev-kit-installation-and-adopter-integration/T12-rw-install-pattern-defaults-br083.md) | [IPP-E06S09T12](../../implementation-cycles/IPP-E06S09T12-br083-rw-install-pattern-defaults.md) | Last modified: 2026-06-03 17:45 UTC

- **BR-084** – RW Mode C: missing task_doc_pattern; wrong patterns persisted - 🟢 OPEN (MEDIUM, fix attempted **v0.6.9.13+2** — pending verification **#16**) | [BR-084](fr-br/BR-084-rw-install-mode-c-missing-task-doc-pattern.md) | [E06:S09:T13](epics/Epic-6/Story-009-ai-dev-kit-installation-and-adopter-integration/T13-rw-install-mode-c-rw-config-generation-br084.md) | [IPP-E06S09T13](../../implementation-cycles/IPP-E06S09T13-br084-rw-config-generation.md) | Last modified: 2026-06-03 19:18 UTC

---

**2026-06-03:** UKW comprehensive archived **BR-066** (**RESOLVED** **v0.2.15.1+3**), **FR-104**, **FR-105**, **BR-077**; pruned **BR-059**, **BR-067** (prior wave). See [`fbu-completed.md`](fbu-completed.md).

**2026-06-02:** UKW **-c** archived **E02:S15:T01** from [`kboard.md`](kboard.md) Should Have (**v0.2.15.1+2**).

**2026-06-01:** Pruned **UXR-005** (COMPLETE **E07:S01:T09**). See [`fbu-completed.md`](fbu-completed.md).

---

### Could Have (C) - Nice-to-Have Items

- **BR-081** – Kanban install uses deprecated `datetime.utcnow()` - 🟢 OPEN (LOW, **#13**) | [BR-081](fr-br/BR-081-kanban-install-datetime-utcnow-deprecated.md) | [E06:S09:T10](epics/Epic-6/Story-009-ai-dev-kit-installation-and-adopter-integration/T10-kanban-install-datetime-utcnow-br081.md) | —No IPP— | Last modified: 2026-06-03 17:43 UTC

- **FR-032** – Release Candidate Readiness Gap Analysis - 📋 TODO (MEDIUM, Analyze gaps in release candidate readiness) | [FR-032](fr-br/FR-032-release-candidate-readiness-gap-analysis.md) | [E09:S01:T03](epics/Epic-9/Story-001-rc-readiness-gap-analysis/T03-gap-analysis-fr032.md) | —No IPP— | Last modified: 2026-05-30 10:26 UTC

- **FR-030** – AI Dev Kit CLI Tool - 📋 TODO (MEDIUM, Command-line interface tool) | [FR-030](fr-br/FR-030-ai-dev-kit-cli-tool.md) | [E06:S08:T01](epics/Epic-6/Story-008-ai-dev-kit-cli-tool.md) | —No IPP— | Last modified: 2026-01-16 00:00 UTC

- **UXR-003** – Intelligent Epic Matching Canonical Adoption UAT - 📋 TODO (MEDIUM, User acceptance testing for intelligent epic matching) | [UXR-003](fr-br/UXR-003-intelligent-epic-matching-canonical-adoption-uat.md) | [E07:S05:T03](epics/Epic-7/Story-005-migration-uxr-research.md) | —No IPP— | Last modified: 2026-05-30 10:26 UTC

- **FR-044** – RW Temporary Execution Log for Recovery and Forensics - 📋 TODO (LOW, Temporary execution logs for Release Workflow) | [FR-044](fr-br/FR-044-rw-temporary-execution-log-for-recovery-and-forensics.md) | [E05:S01:T44](epics/Epic-5/Story-001-fr-repo/T44-rw-temporary-execution-log-for-recovery-and-forensics.md) | —No IPP— | Last modified: 2026-02-22 00:00 UTC

- **FR-039** – AI Dev Kit Project Review and Legacy Clean-up - 📋 TODO (LOW, Review and clean up legacy project elements) | [FR-039](fr-br/FR-039-ai-dev-kit-project-review-and-legacy-clean-up.md) | [E07:S01:T10](epics/Epic-7/Story-001-codebase-maintenance-tasks/T10-project-root-hygiene-and-legacy-docs-rationalization.md) | —No IPP— | Last modified: 2026-05-30 10:26 UTC

- **FR-037** – Kanban Policy Task Prioritisation Queue Stack - 📋 TODO (LOW, Queue stack for task prioritization) | [FR-037](fr-br/FR-037-kanban-policy-task-prioritisation-queue-stack.md) | [E04:S14:T04](epics/Epic-4/Story-014-kanban-framework-maintenance/T04-kanban-policy-task-prioritisation-queue-stack-fr037.md) | —No IPP— | Last modified: 2026-05-30 10:26 UTC

- **FR-029** – Procedural Task Template Generation Hybrid Strategy - 📋 TODO (LOW, Hybrid strategy for task template generation) | [FR-029](fr-br/FR-029-procedural-task-template-generation-hybrid-strategy.md) | [E04:S15:T05](epics/Epic-4/Story-015-procedural-task-template-generation-and-hybrid-strategy.md) | —No IPP— | Last modified: 2025-12-22 00:00 UTC

- **FR-022** – Policy Docs Machine-Readable Salience - 📋 TODO (LOW, Machine-readable policy documentation) | [FR-022](fr-br/FR-022-policy-docs-machine-readable-salience.md) | [E05:S07:T01](epics/Epic-5/Story-007-policy-documentation-structure.md) | —No IPP— | Last modified: 2026-01-16 00:00 UTC

- **FR-020** – Version Validator Abstract Space Awareness - 📋 TODO (LOW, Abstract space awareness in version validator) | [FR-020](fr-br/FR-020-version-validator-abstract-space-awareness.md) | [E02:S10:T06](epics/Epic-2/Story-010-doc-init-build-zero-for-new-est.md) | —No IPP— | Last modified: 2025-12-12 00:00 UTC

- **FR-019** – Intake Workflow Automation - 📋 TODO (LOW, Automation for intake workflow) | [FR-019](fr-br/FR-019-intake-workflow-automation.md) | [E02:S11:T00](epics/Epic-2/Story-011-intake-workflow-automation.md) | —No IPP— | Last modified: 2026-03-30 00:00 UTC

- **FR-018** – Abstract Space Zero Numbered Est Docs - 📋 TODO (LOW, Zero-numbered documents in abstract space) | [FR-018](fr-br/FR-018-abstract-space-zero-numbered-est-docs.md) | [E04:S11:T04](epics/Epic-4/Story-011-kanban-granularity-discrete-task-docs.md) | —No IPP— | Last modified: 2025-12-18 00:00 UTC

- **FR-017** – Versioning Policy Hardening Doc-Init Build - 📋 TODO (LOW, Hardening versioning policy for doc-init builds) | [FR-017](fr-br/FR-017-versioning-policy-hardening-doc-init-build.md) | [E02:S10:T00](epics/Epic-2/Story-010-doc-init-build-zero-for-new-est.md) | —No IPP— | Last modified: 2025-12-12 00:00 UTC

- **FR-016** – Kanban Granularity Discrete Task Docs - 📋 TODO (LOW, Discrete task documents for kanban granularity) | [FR-016](fr-br/FR-016-kanban-granularity-discrete-task-docs.md) | [E04:S11:T07](epics/Epic-4/Story-011-kanban-granularity-discrete-task-docs/T07-planning-spec-tests-impl.md) | —No IPP— | Last modified: 2026-05-30 10:26 UTC

- **FR-014** – RW Trigger for FR/BR Commits - 📋 TODO (LOW, Release Workflow trigger for FR/BR commits) | [FR-014](fr-br/FR-014-rw-trigger-for-fr-br-commits.md) | [E02:S07:T05](epics/Epic-2/Story-007-trigger-aware-release-workflow.md) | —No IPP— | Last modified: 2026-05-16 00:00 UTC

- **FR-013** – Trigger-Aware Release Workflow - 📋 TODO (LOW, Trigger-aware enhancements to Release Workflow) | [FR-013](fr-br/FR-013-trigger-aware-release-workflow.md) | [E02:S07:T01](epics/Epic-2/Story-007-trigger-aware-release-workflow.md) | —No IPP— | Last modified: 2026-05-16 00:00 UTC

- **FR-012** – Agentic Kanban Task Creation from FR/BR - 📋 TODO (LOW, Agentic task creation from FR/BR documents) | [FR-012](fr-br/FR-012-agentic-kanban-task-creation-from-fr-br.md) | [E04:S10:T01](epics/Epic-4/Story-010-agentic-kanban-task-creation-from-fr-br.md) | —No IPP— | Last modified: 2026-05-30 10:26 UTC

- **FR-010** – Agentic task mapping / template two-phase migration (duplicate FR-010 ids — disambiguate on intake) - 📋 TODO (LOW) | [FR-010 mapping](fr-br/FR-010-implement-actual-agentic-intelligence-task-mapping.md) · [FR-010 templates](fr-br/FR-010-template-task-installation-two-phase-migration.md) | [E04:S09:T06](epics/Epic-4/Story-009-bug-fixes-and-agentic-intelligence.md) | —No IPP— | Last modified: 2026-05-30 10:26 UTC

- **FR-009** – Intelligent Epic Matching AI-Assisted Canonical Adoption - 📋 TODO (LOW, AI-assisted epic matching for canonical adoption) | [FR-009](fr-br/FR-009-intelligent-epic-matching-ai-assisted-canonical-adoption.md) | [E04:S08:T05](epics/Epic-4/Story-008-intelligent-epic-matching-canonical-adoption.md) | —No IPP— | Last modified: 2026-04-09 00:00 UTC

- **FR-008** – Package Uninstall Capabilities - 📋 TODO (LOW, Uninstall capabilities for packages) | [FR-008](fr-br/FR-008-package-uninstall-capabilities.md) | [E02:S06:T01](epics/Epic-2/Story-006-package-uninstall-and-recovery.md) | [—IPP—](../../implementation-cycles/IPP-E2S06T01-package-uninstall-reimplementation.md) | Last modified: 2026-05-15 00:00 UTC

- **FR-007** – Migration Utilities and Installation Modes - 📋 TODO (LOW, Migration utilities and installation modes) | [FR-007](fr-br/FR-007-migration-utilities-and-installation-modes.md) | [E04:S07:T02](epics/Epic-4/Story-007-migration-support-and-installation-modes.md) | —No IPP— | Last modified: 2026-05-30 10:26 UTC

- **FR-006** – Localization Language Selection UK/US English - 📋 TODO (LOW, Language selection for UK/US English) | [FR-006](fr-br/FR-006-localization-language-selection-uk-us-english.md) | [E21:S00:T01](epics/Epic-21/Story-000-language-selection-at-setup.md) | —No IPP— | Last modified: 2025-12-09 00:00 UTC

- **FR-003** – Dependency Tracking in Adopting Projects - 📋 TODO (LOW, Dependency tracking for project adoption) | [FR-003](fr-br/FR-003-dependency-tracking-in-adopting-projects.md) | [E01:S02:T14](epics/Epic-1/Story-002-package-and-repo-architecture/T14-dependency-tracking-adopters-fr003.md) | —No IPP— | Last modified: 2026-05-30 10:26 UTC

- **FR-002** – Update Been There README - 📋 TODO (LOW, Update README for been-there functionality) | [FR-002](fr-br/FR-002-update-been-there-readme.md) | [E01:S02:T13](epics/Epic-1/Story-002-package-and-repo-architecture/T13-readme-template-best-readme-fr002.md) | —No IPP— | Last modified: 2026-05-30 10:26 UTC

- **BR-008** – Arbitrary 80 Threshold Contradicts Agentic Intelligence - 📋 TODO (LOW, Arbitrary threshold contradicts agentic approach) | [BR-008](fr-br/BR-008-arbitrary-80-threshold-contradicts-agentic-intelligence.md) | [E04:S09:T05](epics/Epic-4/Story-009-bug-fixes-and-agentic-intelligence.md) | —No IPP— | Last modified: 2026-05-30 10:26 UTC

- **BR-007** – Multiple Bugs Kanban Package Installation - 📋 TODO (LOW, Multiple bugs in kanban package installation) | [BR-007](fr-br/BR-007-multiple-bugs-kanban-package-installation.md) | [E04:S09:T01](epics/Epic-4/Story-009-bug-fixes-and-agentic-intelligence.md) | —No IPP— | Last modified: 2026-05-30 10:26 UTC

- **BR-006** – Missing Migration Support Pre-existing Kanban - 📋 TODO (LOW, Missing migration support for pre-existing kanban) | [BR-006](fr-br/BR-006-missing-migration-support-pre-existing-kanban.md) | [E04:S07:T01](epics/Epic-4/Story-007-migration-support-and-installation-modes.md) | —No IPP— | Last modified: 2026-05-30 10:26 UTC

- **BR-005** – Kanban Framework Epic Structure Gap UAT Finding - 📋 TODO (LOW, Gap found in kanban framework epic structure) | [BR-005](fr-br/BR-005-kanban-framework-epic-structure-gap-uat-finding.md) | [E04:S06:T06](epics/Epic-4/Story-006-comprehensive-canonical-est-template-system.md) | —No IPP— | Last modified: 2025-12-22 00:00 UTC

- **BR-002** – Changelog Validator Ordering Bug - 📋 TODO (LOW, Ordering bug in changelog validator) | [BR-002](fr-br/BR-002-changelog-validator-ordering-bug.md) | [E02:S11:T11](epics/Epic-2/Story-011-intake-workflow-automation/Task-011-Fix-CHANGELOG-Ordering-Violations.md) | —No IPP— | Last modified: 2025-12-16 00:00 UTC

- **BR-001** – Validate Version Bump Epic Story Detection Bug - 📋 TODO (LOW, Bug in epic/story detection for version bump validation) | [BR-001](fr-br/BR-001-validate-version-bump-epic-story-detection-bug.md) | [E02:S01:T06](epics/Epic-2/Story-001-rw-agent-execution-and-docs.md) | —No IPP— | Last modified: 2026-05-26 00:00 UTC

- **BR-058** – CI test workflow missing and pytest failures - 🟢 OPEN (LOW) | [BR-058](fr-br/BR-058-ci-test-workflow-missing-and-pytest-failures.md) | [E08:S03:T04](epics/Epic-8/Story-003-automation-scripts/T04-ci-test-workflow-pytest-remediation-br058.md) | —No IPP— | Last modified: 2026-05-30 10:26 UTC


### Won't Have (W) - Deferred / closed off active board



**2026-05-30 value audit (no-value):** Paired with [`kboard.md`](kboard.md) Won't Have — shipped, vendor-only, or registry anchors.

- **BR-039** – Cascade whitelist security prompt (vendor/product; repo **COMPLETE** **E06:S06:T57**) - ⏸️ **WON'T HAVE** | [BR-039](fr-br/BR-039-cascade-whitelist-security-prompt-usability-blocker.md) | [E06:S06:T57](epics/Epic-6/Story-006-feature-requests/T57-br039-cascade-whitelist-security-prompt-blocker.md) | [—IPP—](../../implementation-cycles/IPW-E6S06T57-br039-vendor-blocker-planning.md) | Last modified: 2026-04-02 00:00 UTC

- **FR-087** – `E6:S07` default-housing investigation (**COMPLETE** **E04:S19:T03**) - ⏸️ **WON'T HAVE** | [FR-087](fr-br/FR-087-e6s07-default-housing-root-cause-and-closure-decision.md) | [E04:S19:T03](epics/Epic-4/Story-019-fr-br-uxr-abstract-governance-and-intake/T03-e6s07-default-housing-drift-investigation-and-closure-decision-fr087.md) | [—IPP—](../../implementation-cycles/IPP-E4S19T03-e6s07-default-housing-drift-investigation.md) | Last modified: 2026-05-30 10:26 UTC

- **FR-077** – IPW-built task status transition + kboard sync (**shipped** **E02:S01:T17**) - ⏸️ **WON'T HAVE** | [FR-077](fr-br/FR-077-ipw-built-task-status-transition-and-kboard-sync.md) | [E02:S01:T17](epics/Epic-2/Story-001-rw-agent-execution-and-docs/T17-ipw-built-task-status-transition-and-kboard-sync-fr077.md) | —No IPP— | Last modified: 2026-04-14 00:00 UTC

- **UXR-006** – Single `dev` branch + RW validators (**shipped** **E02:S01:T10**) - ⏸️ **WON'T HAVE** | [UXR-006](fr-br/UXR-006-dev-branch-and-rw-validator-relaxation.md) | [E02:S01:T10](epics/Epic-2/Story-001-rw-agent-execution-and-docs/T10-dev-branch-support-in-rw-validators.md) | —No IPP— | Last modified: 2026-04-07 00:00 UTC

- **BR-003** – RW branch validation update branches (resolved via **E02:S01:T10** / UXR-006) - ⏸️ **WON'T HAVE** | [BR-003](fr-br/BR-003-rw-branch-validation-update-branches.md) | [E02:S01:T10](epics/Epic-2/Story-001-rw-agent-execution-and-docs/T10-dev-branch-support-in-rw-validators.md) | —No IPP— | Last modified: 2026-04-07 00:00 UTC

- **UXR-001** – Migration user experience research (synthesis **COMPLETE**; delivery **E4:S07** / **FR-007**) - ⏸️ **WON'T HAVE** | [UXR-001](fr-br/UXR-001-migration-user-experience-research.md) | [E07:S00:T01](epics/Epic-7/Story-000-uxr-repo/T01-uxr-001-repository-anchor.md) | —No IPP— | Last modified: 2026-05-30 10:26 UTC

- **UXR-002** – Comprehensive UAT migration utilities (synthesis **COMPLETE**; delivery **E4:S07**) - ⏸️ **WON'T HAVE** | [UXR-002](fr-br/UXR-002-comprehensive-uat-migration-utilities.md) | [E07:S00:T02](epics/Epic-7/Story-000-uxr-repo/T02-uxr-002-repository-anchor.md) | —No IPP— | Last modified: 2026-05-30 10:26 UTC

- **UXR-014** – Two-digit E/S/T identifier formatting (**COMPLETE** **E04:S19:T09** **v0.4.19.9+2**) - ⏸️ **WON'T HAVE** | [UXR-014](fr-br/UXR-014-two-digit-est-identifier-default-formatting.md) | [E04:S19:T09](epics/Epic-4/Story-019-fr-br-uxr-abstract-governance-and-intake/T09-two-digit-est-identifier-default-formatting-uxr014.md) | [—IPP—](../../implementation-cycles/IPP-E4S19T09-two-digit-est-identifier-default-formatting.md) | Last modified: 2026-05-30 10:30 UTC

- **FR-048** – ICW task identifier argument (**COMPLETE**; superseded by **FR-042** IPW) - ⏸️ **WON'T HAVE** | [FR-048](fr-br/FR-048-icw-task-identifier-argument.md) | [E05:S01:T48](epics/Epic-5/Story-001-fr-repo/T48-icw-task-identifier-argument.md) | —No IPP— | Last modified: 2026-03-11 00:00 UTC

- **FR-063** – CMW Epic 5 execution context (**COMPLETE** **E05:S02:T06**) - ⏸️ **WON'T HAVE** | [FR-063](fr-br/FR-063-cmw-epic-5-execution-context.md) | [E05:S02:T06](epics/Epic-5/Story-002/T06-cmw-epic-5-execution-context-fr-063.md) | —No IPP— | Last modified: 2026-03-25 00:00 UTC



- **FR-031** – Multi-agent coordination feasibility — **WON'T HAVE** (deferred **E05:S01:T31**) | [fbu-completed](fbu-completed.md) | [FR-031](fr-br/FR-031-multi-agent-coordination-feasibility-investigation.md) | [E05:S01:T31](epics/Epic-5/Story-001-fr-repo/T31-multi-agent-coordination-feasibility-investigation.md) | —No IPP— | Last modified: 2026-05-30 10:26 UTC

### Ongoing (O) - Perpetual Items

- **FR-023** – Update Kanban Workflow (UKW) - 📋 TODO (LOW, **E02:S16:T04** UKW perpetual on kboard) | [FR-023](fr-br/FR-023-update-kanban-workflow-ukw.md) | [E02:S16:T04](epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T04-ad-hoc-kanban-synchronization-and-hygiene-perpetual.md) | —No IPP— | Last modified: 2026-05-30 00:00 UTC

- **FR-043** – UKW gap discovery (TODO tasks + unfiled FR/BR) - 📋 TODO (HIGH, **E02:S16:T14** on kboard) | [FR-043](fr-br/FR-043-ukw-gap-discovery-todo-tasks-and-unfiled-fr-br.md) | [E02:S16:T14](epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T14-ukw-gap-discovery-unfiled-fr-br-fr043.md) | —No IPP— | Last modified: 2026-05-29 17:18 UTC

- **FR-058** – Markdown maintenance workflow - 💡 PROPOSED (LOW, **E07:S01:T05** perpetual on kboard) | [FR-058](fr-br/FR-058-markdown-maintenance-workflow.md) | [E07:S01:T05](epics/Epic-7/Story-001-codebase-maintenance-tasks/T05-markdown-maintenance-perpetual-task.md) | —No IPP— | Last modified: 2026-03-07 00:00 UTC

---

## Board Statistics


**Active MoSCOW rows:** ~35 (post-consolidation 2026-05-29); full corpus remains in `fr-br/`.

- **Scoped pass note:** kboard restored from fbuboard active M/S/C/O wiring (2026-05-30); +31 task rows re-added to kboard C/S. Completed/superseded FBUs in [`fbu-completed.md`](fbu-completed.md).

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

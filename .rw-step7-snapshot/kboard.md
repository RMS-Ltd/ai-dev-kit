---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T12:02:50Z
expires_at: null
housekeeping_policy: keep
---

# AI Dev Kit – Kanban Board

**Last Updated:** 2026-06-08 (RW: E08:S03:T15)
**Version:** v0.8.3.15+4

**Active board contract:** **Sole active MoSCOW board** ([ADR-018](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/architecture/standards-and-adrs/ADR-018-single-kanban-board-consolidation.md)). Rows are **live work** (TODO / IN PROGRESS / OPEN / WAITING / PERPETUAL) plus filed **Could Have** backlog. **Verification (V)** band holds task-shipped / FBU-open items (`⏳ WAITING`). Remove **terminal** rows and archive prose (use [`kanban-completed.md`](kanban-completed.md) / [`intake-completed.md`](intake-completed.md)).

**Note:** Epics 1, 3, 7, 11 are COMPLETE. Epics 2, 4, 5, 6, 8, **10** are IN PROGRESS. Epic 21 is TODO.

**Wiring:** Every wired row includes FBU link(s) where applicable (UXR-010). Legacy `fbuboard.md` / `kanban-board.md` aliases **removed** (intake rename wave).

> **Structure:** [`kanban-structure.md`](kanban-structure.md) · **Guide:** [`kanban-board-guide.md`](kanban-board-guide.md) · **Completed:** [`kanban-completed.md`](kanban-completed.md) · **FBU inventory:** [`intake-structure.md`](intake-structure.md)

---

## MoSCOW Prioritized In-Progress Tasks

### Must Have (M) - Critical Tasks

*(E02:S17 story complete @ v0.2.17.6+1 — integration sign-off @ v0.2.16.10+8; see [`kanban-completed.md`](kanban-completed.md) · [integration report](epics/epic-02/story-17-rw-semver-characterization-and-release-state-sqlite/integration-test-report-2026-06-07.md).)*

### Should Have (S) - Important Tasks

*(E01:S06:T02 COMPLETE @ **v0.1.6.2+1** — FR-117 MIT LICENSE; see [`kanban-completed.md`](kanban-completed.md) · [`intake-completed.md`](intake-completed.md).)*

*(FR-114 **IMPLEMENTED** @ v0.5.8.4+3 — T03/T04/T15; see [`intake-completed.md`](intake-completed.md) · [`kanban-completed.md`](kanban-completed.md).)*

*(E08:S03:T12 COMPLETE — **re-closed** @ **v0.8.3.12+13** — BR-099 RESOLVED; dashboard Good @ +11; local CQG @ +12; T16 handoff; see [`kanban-completed.md`](kanban-completed.md) · [`intake-completed.md`](intake-completed.md).)*

### Verification (V) - Task Shipped, FBU Verification Pending

*(No rows — T14 COMPLETE @ v0.8.3.14+5; see [`kanban-completed.md`](kanban-completed.md).)*

### Could Have (C) - Nice-to-Have Tasks

*(E02:S01:T25 / E03:S02:T13 COMPLETE @ **v0.2.1.25+1** — FR-115+FR-116 v1 async ingest; see [`kanban-completed.md`](kanban-completed.md).)*

- **E02:S14:T02** – Validate fresh install steps for each path - 📋 TODO (HIGH, Epic 2 workflow-mgt install evaluation) | [Task](epics/epic-02/story-14-workflow-management-package-installation-evaluation/T02-validate-fresh-install-steps-for-each-path.md) | [Story](epics/epic-02/story-14-workflow-management-package-installation-evaluation.md) | —No IPP— | Last modified: 2026-06-05 13:08 UTC

- **E02:S14:T03** – Validate migration/update paths (if supported) - 📋 TODO (HIGH, Epic 2 workflow-mgt install evaluation) | [Task](epics/epic-02/story-14-workflow-management-package-installation-evaluation/T03-validate-migrationupdate-paths-if-supported.md) | [Story](epics/epic-02/story-14-workflow-management-package-installation-evaluation.md) | —No IPP— | Last modified: 2026-06-05 13:09 UTC

- **E02:S14:T04** – Verify post-install configuration and validation steps - 📋 TODO (HIGH, Epic 2 workflow-mgt install evaluation) | [Task](epics/epic-02/story-14-workflow-management-package-installation-evaluation/T04-verify-post-install-configuration-and-validation-steps.md) | [Story](epics/epic-02/story-14-workflow-management-package-installation-evaluation.md) | —No IPP— | Last modified: 2026-06-05 13:10 UTC

- **E02:S14:T05** – Document failure modes and rollback guidance - 📋 TODO (HIGH, Epic 2 workflow-mgt install evaluation) | [Task](epics/epic-02/story-14-workflow-management-package-installation-evaluation/T05-document-failure-modes-and-rollback-guidance.md) | [Story](epics/epic-02/story-14-workflow-management-package-installation-evaluation.md) | —No IPP— | Last modified: 2026-06-05 13:11 UTC

- **E02:S14:T06** – Capture documentation gaps and improvements - 🔄 IN PROGRESS (HIGH, Epic 2 workflow-mgt install evaluation) | [Task](epics/epic-02/story-14-workflow-management-package-installation-evaluation/T06-capture-documentation-gaps-and-improvements.md) | [Story](epics/epic-02/story-14-workflow-management-package-installation-evaluation.md) | —No IPP— | Last modified: 2026-06-05 13:12 UTC

- **E07:S01:T10** – FR-039: AI Dev Kit Project Review and Legacy Clean-up - 📋 TODO (LOW, Review and clean up legacy project elements) | [Task](epics/epic-07/story-01-codebase-maintenance-tasks/T10-project-root-hygiene-and-legacy-docs-rationalization.md) | [FR-039](fr-br/FR-039-ai-dev-kit-project-review-and-legacy-clean-up.md) | —No IPP— | Last modified: 2026-06-04 12:15 UTC

- **E21:S01:T01** – Add language selection prompt to template setup (GitHub template) - 📋 TODO (MEDIUM, FR-006 Phase 1; **v0.21.1.1+1** kanban rehouse) | [Task](epics/epic-21/story-01-language-selection-at-setup/T01-add-language-selection-prompt-to-template-setup-github-templ.md) | [Story](epics/epic-21/story-01-language-selection-at-setup.md) | [FR-006](fr-br/FR-006-localization-language-selection-uk-us-english.md) | —No IPP— | Last modified: 2026-06-06 17:13 UTC

- **E21:S01:T02** – Add language selection prompt to CLI tool (`ai-dev-kit init`) - 📋 TODO (MEDIUM, FR-006; **v0.21.1.2+0** kanban-init filed) | [Task](epics/epic-21/story-01-language-selection-at-setup/T02-add-language-selection-prompt-to-cli-tool-ai-dev-kit-init.md) | [Story](epics/epic-21/story-01-language-selection-at-setup.md) | [FR-006](fr-br/FR-006-localization-language-selection-uk-us-english.md) | —No IPP— | Last modified: 2026-06-05 05:07 UTC

- **E21:S01:T03** – Add language selection prompt to RW Installer (`install_release_workflow.py`) - 📋 TODO (MEDIUM, FR-006; **v0.21.1.3+0** kanban-init filed) | [Task](epics/epic-21/story-01-language-selection-at-setup/T03-add-language-selection-prompt-to-rw-installer-install-releas.md) | [Story](epics/epic-21/story-01-language-selection-at-setup.md) | [FR-006](fr-br/FR-006-localization-language-selection-uk-us-english.md) | —No IPP— | Last modified: 2026-06-05 05:08 UTC

- **E21:S01:T04** – Create UK/US English content variants (documentation, templates) - 📋 TODO (MEDIUM, FR-006; **v0.21.1.4+0** kanban-init filed) | [Task](epics/epic-21/story-01-language-selection-at-setup/T04-create-ukus-english-content-variants-documentation-templates.md) | [Story](epics/epic-21/story-01-language-selection-at-setup.md) | [FR-006](fr-br/FR-006-localization-language-selection-uk-us-english.md) | —No IPP— | Last modified: 2026-06-05 05:09 UTC

- **E21:S01:T05** – Implement configuration persistence (`ai-dev-kit-config.yaml`) - 📋 TODO (MEDIUM, FR-006; **v0.21.1.5+0** kanban-init filed) | [Task](epics/epic-21/story-01-language-selection-at-setup/T05-implement-configuration-persistence-ai-dev-kit-configyaml.md) | [Story](epics/epic-21/story-01-language-selection-at-setup.md) | [FR-006](fr-br/FR-006-localization-language-selection-uk-us-english.md) | —No IPP— | Last modified: 2026-06-05 05:10 UTC

- **E21:S01:T06** – Update content generation to use language preference (RW, templates) - 📋 TODO (MEDIUM, FR-006; **v0.21.1.6+0** kanban-init filed) | [Task](epics/epic-21/story-01-language-selection-at-setup/T06-update-content-generation-to-use-language-preference-rw-temp.md) | [Story](epics/epic-21/story-01-language-selection-at-setup.md) | [FR-006](fr-br/FR-006-localization-language-selection-uk-us-english.md) | —No IPP— | Last modified: 2026-06-05 05:11 UTC

- **E21:S01:T07** – Test UK/US English selection and content generation - 📋 TODO (MEDIUM, FR-006; **v0.21.1.7+0** kanban-init filed) | [Task](epics/epic-21/story-01-language-selection-at-setup/T07-test-ukus-english-selection-and-content-generation.md) | [Story](epics/epic-21/story-01-language-selection-at-setup.md) | [FR-006](fr-br/FR-006-localization-language-selection-uk-us-english.md) | —No IPP— | Last modified: 2026-06-05 05:12 UTC

### Ongoing (O) - Perpetual Tasks

- **E02:S16:T03** – Workflow maintenance (Perpetual) - 🔄 PERPETUAL (BR-059 **RESOLVED** **v0.2.16.3+6**) - [Task](epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md) | [Story](epics/epic-02/story-16-perpetual-ongoing-workflow-operations.md) | [BR-059](fr-br/BR-059-ukw-moscow-incomplete-story-task-coverage.md) | [—IPP—](../../implementation-cycles/IPP-E2S16T03-rehouse-workflow-perpetual-tasks.md) | Last modified: 2026-06-03 12:29 UTC

- **E02:S16:T04** – Ad-hoc Kanban synchronization and hygiene (Perpetual) - 🔄 PERPETUAL (**v0.2.16.4+37** — UKW -u Epic 21 kanban-init wave bookkeeping) - [Task](epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T04-ad-hoc-kanban-synchronization-and-hygiene-perpetual.md) | [Story](epics/epic-02/story-16-perpetual-ongoing-workflow-operations.md) | [FR-023](fr-br/FR-023-update-kanban-workflow-ukw.md) | —No IPP— | Last modified: 2026-06-05 15:03 UTC

- **E02:S16:T05** – Markdown Documentation Maintenance (Perpetual) - 🔄 PERPETUAL (**v0.2.16.5+6** — Wave 2: 36-file link-depth hygiene; BR-068 guard green) - [Task](epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T05-markdown-documentation-maintenance-perpetual.md) | [Story](epics/epic-02/story-16-perpetual-ongoing-workflow-operations.md) | [FR-088](fr-br/FR-088-dedicated-story-for-perpetual-ongoing-tasks.md) | —No IPP— | Last modified: 2026-06-05 10:38 UTC

- **E02:S16:T10** – Ad-hoc Repository Infrastructure Maintenance (Perpetual) - 🔄 PERPETUAL (last RW **v0.2.16.10+8** — E02:S17 integration sign-off; spike → dev PR) - [Task](epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T10-ad-hoc-repository-infrastructure-maintenance-perpetual.md) | [Story](epics/epic-02/story-16-perpetual-ongoing-workflow-operations.md) | —No IPP— | Last modified: 2026-06-07 19:27 UTC

- **E02:S16:T14** – UKW gap discovery: TODO tasks and unfiled FR/BR (**FR-043**) - 📋 TODO (HIGH, perpetual UKW intake hygiene) - [Task](epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T14-ukw-gap-discovery-unfiled-fr-br-fr043.md) | [FR-043](fr-br/FR-043-ukw-gap-discovery-todo-tasks-and-unfiled-fr-br.md) | —No IPP— | Last modified: 2026-05-30 13:36 UTC

- **E07:S01:T05** – Markdown Maintenance (Perpetual Task) - 🔄 PERPETUAL (v0.7.1.5+2; **FR-058** proposed workflow) - [Task](epics/epic-07/story-01-codebase-maintenance-tasks/T05-markdown-maintenance-perpetual-task.md) | [Story](epics/epic-07/story-01-codebase-maintenance-tasks.md) | [FR-058](fr-br/FR-058-markdown-maintenance-workflow.md) | —No IPP— | Last modified: 2026-03-07 00:00 UTC

- **E08:S03:T15** – GitHub Actions CI health (Perpetual) - 🔄 PERPETUAL (**v0.8.3.15+4** — Step 9.7 CI parity gate; no-red-ship OR-T15; AC5/AC6 open) - [Task](epics/epic-08/story-03-automation-scripts/T15-github-actions-ci-health-perpetual-fr112.md) | [FR-112](fr-br/FR-112-perpetual-github-ci-and-security-health-lanes.md) | [—IPP—](../../implementation-cycles/IPP-E08S03T15-github-actions-ci-health-perpetual-fr112.md) | Last modified: 2026-06-08 10:53 UTC

- **E08:S03:T16** – GitHub Security & Code Quality health (Perpetual) - 🔄 PERPETUAL (**v0.8.3.16+1** — merge gate OR-T16: blocked while T15 CI red; CQG≠CI) - [Task](epics/epic-08/story-03-automation-scripts/T16-github-security-code-quality-health-perpetual-fr112.md) | [FR-112](fr-br/FR-112-perpetual-github-ci-and-security-health-lanes.md) | [—IPP—](../../implementation-cycles/IPP-E08S03T16-github-security-code-quality-health-perpetual-fr112.md) | Last modified: 2026-06-08 12:00 UTC

### Won't Have (W) - Deferred Tasks

*(Deferred and shipped items: see [`kanban-completed.md`](kanban-completed.md) and story checklists — not listed on the active board.)*

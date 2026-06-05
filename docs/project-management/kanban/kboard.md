---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T12:02:50Z
expires_at: null
housekeeping_policy: keep
---

# AI Dev Kit – Kanban Board

**Last Updated:** 2026-06-05 (RW: E06:S09:T23)
**Version:** v0.6.9.23+2

**Active board contract:** **Sole active MoSCOW board** ([ADR-018](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/architecture/standards-and-adrs/ADR-018-single-kanban-board-consolidation.md)). Rows are **live work** (TODO / IN PROGRESS / OPEN / WAITING / PERPETUAL) plus filed **Could Have** backlog. **Verification (V)** band holds task-shipped / FBU-open items (`⏳ WAITING`). Remove **terminal** rows and archive prose (use [`kanban-completed.md`](kanban-completed.md) / [`intake-completed.md`](intake-completed.md)).

**Note:** Epics 1, 3, 7, 8, 10, 11 are COMPLETE. Epics 2, 4, 5, 6 are IN PROGRESS. Epic 21 is TODO.

**Wiring:** Every wired row includes FBU link(s) where applicable (UXR-010). Legacy `fbuboard.md` / `kanban-board.md` aliases **removed** (intake rename wave).

> **Structure:** [`kanban-structure.md`](kanban-structure.md) · **Guide:** [`kanban-board-guide.md`](kanban-board-guide.md) · **Completed:** [`kanban-completed.md`](kanban-completed.md) · **FBU inventory:** [`intake-structure.md`](intake-structure.md)

---

## MoSCOW Prioritized In-Progress Tasks

### Must Have (M) - Critical Tasks


### Should Have (S) - Important Tasks

### Verification (V) - Task Shipped, FBU Verification Pending

*(None.)*

### Could Have (C) - Nice-to-Have Tasks

- **E02:S14:T02** – Validate fresh install steps for each path - 📋 TODO (HIGH, Epic 2 workflow-mgt install evaluation) | [Task](epics/epic-02/story-14-workflow-management-package-installation-evaluation/T02-validate-fresh-install-steps-for-each-path.md) | [Story](epics/epic-02/story-14-workflow-management-package-installation-evaluation.md) | Last modified: 2026-06-05 13:08 UTC

- **E02:S14:T03** – Validate migration/update paths (if supported) - 📋 TODO (HIGH, Epic 2 workflow-mgt install evaluation) | [Task](epics/epic-02/story-14-workflow-management-package-installation-evaluation/T03-validate-migrationupdate-paths-if-supported.md) | [Story](epics/epic-02/story-14-workflow-management-package-installation-evaluation.md) | Last modified: 2026-06-05 13:09 UTC

- **E02:S14:T04** – Verify post-install configuration and validation steps - 📋 TODO (HIGH, Epic 2 workflow-mgt install evaluation) | [Task](epics/epic-02/story-14-workflow-management-package-installation-evaluation/T04-verify-post-install-configuration-and-validation-steps.md) | [Story](epics/epic-02/story-14-workflow-management-package-installation-evaluation.md) | Last modified: 2026-06-05 13:10 UTC

- **E02:S14:T05** – Document failure modes and rollback guidance - 📋 TODO (HIGH, Epic 2 workflow-mgt install evaluation) | [Task](epics/epic-02/story-14-workflow-management-package-installation-evaluation/T05-document-failure-modes-and-rollback-guidance.md) | [Story](epics/epic-02/story-14-workflow-management-package-installation-evaluation.md) | Last modified: 2026-06-05 13:11 UTC

- **E02:S14:T06** – Capture documentation gaps and improvements - 🔄 IN PROGRESS (HIGH, Epic 2 workflow-mgt install evaluation) | [Task](epics/epic-02/story-14-workflow-management-package-installation-evaluation/T06-capture-documentation-gaps-and-improvements.md) | [Story](epics/epic-02/story-14-workflow-management-package-installation-evaluation.md) | Last modified: 2026-06-05 13:12 UTC

- **E05:S07:T01** – FR-022: Policy Docs Machine-Readable Salience - 📋 TODO (LOW, Machine-readable policy documentation) | [Task](epics/epic-05/story-07-policy-documentation-structure.md) | [FR-022](fr-br/FR-022-policy-docs-machine-readable-salience.md) | Last modified: 2026-01-16 00:00 UTC

- **E10:S01:T01** – Establish expectations baseline for Document Lifecycle package - 📋 TODO (HIGH, Epic 10 doc-lifecycle RC review) | [Task](epics/epic-10/story-01-document-lifecycle-package-implementation-review.md) | [Story](epics/epic-10/story-01-document-lifecycle-package-implementation-review.md) | Last modified: 2026-01-18 16:44 UTC

- **E10:S01:T02** – Inventory package components and map to expectations - 📋 TODO (HIGH, Epic 10 doc-lifecycle RC review) | [Task](epics/epic-10/story-01-document-lifecycle-package-implementation-review.md) | [Story](epics/epic-10/story-01-document-lifecycle-package-implementation-review.md) | Last modified: 2026-01-18 16:45 UTC

- **E10:S01:T03** – Validate lifecycle behavior against documented guidance - 📋 TODO (HIGH, Epic 10 doc-lifecycle RC review) | [Task](epics/epic-10/story-01-document-lifecycle-package-implementation-review.md) | [Story](epics/epic-10/story-01-document-lifecycle-package-implementation-review.md) | Last modified: 2026-01-18 16:46 UTC

- **E10:S01:T04** – Review integrations and dependency alignment - 📋 TODO (HIGH, Epic 10 doc-lifecycle RC review) | [Task](epics/epic-10/story-01-document-lifecycle-package-implementation-review.md) | [Story](epics/epic-10/story-01-document-lifecycle-package-implementation-review.md) | Last modified: 2026-01-18 16:47 UTC

- **E10:S01:T05** – Create gap log and risk assessment - 📋 TODO (HIGH, Epic 10 doc-lifecycle RC review) | [Task](epics/epic-10/story-01-document-lifecycle-package-implementation-review.md) | [Story](epics/epic-10/story-01-document-lifecycle-package-implementation-review.md) | Last modified: 2026-01-18 16:48 UTC

- **E10:S01:T06** – Define RC sign-off criteria and remediation tasks - 📋 TODO (HIGH, Epic 10 doc-lifecycle RC review) | [Task](epics/epic-10/story-01-document-lifecycle-package-implementation-review.md) | [Story](epics/epic-10/story-01-document-lifecycle-package-implementation-review.md) | Last modified: 2026-01-18 16:49 UTC

- **E07:S01:T10** – FR-039: AI Dev Kit Project Review and Legacy Clean-up - 📋 TODO (LOW, Review and clean up legacy project elements) | [Task](epics/epic-07/story-01-codebase-maintenance-tasks/T10-project-root-hygiene-and-legacy-docs-rationalization.md) | [FR-039](fr-br/FR-039-ai-dev-kit-project-review-and-legacy-clean-up.md) | Last modified: 2026-06-04 12:15 UTC

- **E21:S00:T01** – FR-006: Localization Language Selection UK/US English - 📋 TODO (LOW, Language selection for UK/US English) | [Task](epics/epic-21/story-00-language-selection-at-setup.md) | [FR-006](fr-br/FR-006-localization-language-selection-uk-us-english.md) | Last modified: 2025-12-09 00:00 UTC

### Ongoing (O) - Perpetual Tasks

- **E02:S16:T03** – Workflow maintenance (Perpetual) - 🔄 PERPETUAL (BR-059 **RESOLVED** **v0.2.16.3+6**) - [Task](epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md) | [Story](epics/epic-02/story-16-perpetual-ongoing-workflow-operations.md) | [BR-059](fr-br/BR-059-ukw-moscow-incomplete-story-task-coverage.md) | Last modified: 2026-06-03 12:29 UTC

- **E02:S16:T04** – Ad-hoc Kanban synchronization and hygiene (Perpetual) - 🔄 PERPETUAL (**v0.2.16.4+33** — UKW -c E02:S13 story closure ledger backfill) - [Task](epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T04-ad-hoc-kanban-synchronization-and-hygiene-perpetual.md) | [Story](epics/epic-02/story-16-perpetual-ongoing-workflow-operations.md) | [FR-023](fr-br/FR-023-update-kanban-workflow-ukw.md) | Last modified: 2026-06-05 04:03 UTC

- **E02:S16:T05** – Markdown Documentation Maintenance (Perpetual) - 🔄 PERPETUAL (**v0.2.16.5+6** — Wave 2: 36-file link-depth hygiene; BR-068 guard green) - [Task](epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T05-markdown-documentation-maintenance-perpetual.md) | [Story](epics/epic-02/story-16-perpetual-ongoing-workflow-operations.md) | [FR-088](fr-br/FR-088-dedicated-story-for-perpetual-ongoing-tasks.md) | Last modified: 2026-06-05 10:38 UTC

- **E02:S16:T10** – Ad-hoc Repository Infrastructure Maintenance (Perpetual) - 🔄 PERPETUAL (last RW **v0.2.16.10+5**) - [Task](epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T10-ad-hoc-repository-infrastructure-maintenance-perpetual.md) | [Story](epics/epic-02/story-16-perpetual-ongoing-workflow-operations.md) | Last modified: 2026-06-04 22:55 UTC

- **E02:S16:T14** – UKW gap discovery: TODO tasks and unfiled FR/BR (**FR-043**) - 📋 TODO (HIGH, perpetual UKW intake hygiene) - [Task](epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T14-ukw-gap-discovery-unfiled-fr-br-fr043.md) | [FR-043](fr-br/FR-043-ukw-gap-discovery-todo-tasks-and-unfiled-fr-br.md) | Last modified: 2026-05-30 13:36 UTC

- **E07:S01:T05** – Markdown Maintenance (Perpetual Task) - 🔄 PERPETUAL (v0.7.1.5+2; **FR-058** proposed workflow) - [Task](epics/epic-07/story-01-codebase-maintenance-tasks/T05-markdown-maintenance-perpetual-task.md) | [Story](epics/epic-07/story-01-codebase-maintenance-tasks.md) | [FR-058](fr-br/FR-058-markdown-maintenance-workflow.md) | Last modified: 2026-03-07 00:00 UTC

### Won't Have (W) - Deferred Tasks

*(Deferred and shipped items: see [`kanban-completed.md`](kanban-completed.md) and story checklists — not listed on the active board.)*

---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T12:02:50Z
expires_at: null
housekeeping_policy: keep
---

# AI Dev Kit – Kanban Board

**Last Updated:** 2026-06-07 (RW **v0.21.2.2+1** — E21:S02:T02 locale manifest v2)
**Version:** v0.21.2.2+1

**Active board contract:** **Sole active MoSCOW board** ([ADR-018](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/architecture/standards-and-adrs/ADR-018-single-kanban-board-consolidation.md)). Rows are **live work** (TODO / IN PROGRESS / OPEN / WAITING / PERPETUAL) plus filed **Could Have** backlog. **Verification (V)** band holds task-shipped / FBU-open items (`⏳ WAITING`). Remove **terminal** rows and archive prose (use [`kanban-completed.md`](kanban-completed.md) / [`intake-completed.md`](intake-completed.md)).

**Note:** Epics 1, 3, 7, 11 are COMPLETE. Epics 2, 4, 5, 6, 8, **10** are IN PROGRESS. Epic 21 is IN PROGRESS (S02:T01–T02 shipped).

**Wiring:** Every wired row includes FBU link(s) where applicable (UXR-010). Legacy `fbuboard.md` / `kanban-board.md` aliases **removed** (intake rename wave).

> **Structure:** [`kanban-structure.md`](kanban-structure.md) · **Guide:** [`kanban-board-guide.md`](kanban-board-guide.md) · **Completed:** [`kanban-completed.md`](kanban-completed.md) · **FBU inventory:** [`intake-structure.md`](intake-structure.md)

---

## MoSCOW Prioritized In-Progress Tasks

### Must Have (M) - Critical Tasks


### Should Have (S) - Important Tasks

*(E10:S01 story **COMPLETE** @ v0.10.1.10+2 — RC **APPROVE**; Epic 10 IN PROGRESS — E10:S02 TODO; see [`kanban-completed.md`](kanban-completed.md).)*

- **E21:S02:T03** – Implement locale detection (browser/system locale) - 📋 TODO (MEDIUM, **v0.21.2.3+0** kanban-init) | [Task](epics/epic-21/story-02-internationalisation-infrastructure/T03-implement-locale-detection-browsersystem-locale.md) | [FR-006](fr-br/FR-006-localization-language-selection-uk-us-english.md) | [ADR-024](../../architecture/standards-and-adrs/ADR-024-i18n-framework-strategy.md) | —No IPP— | Last modified: 2026-06-07 17:38 UTC

- **E05:S09:T15** – Docusaurus adopter-public publish allowlist (FR-114) - 📋 TODO (HIGH, **v0.5.9.15+1** RW -k intake) | [Task](epics/epic-05/story-09-docusaurus-documentation-portal/T15-docusaurus-adopter-public-publish-allowlist-fr114.md) | [FR-114](fr-br/FR-114-split-documentation-surfaces-docusaurus-public-notion-maintainer-kb.md) | —No IPP— | Last modified: 2026-06-06 16:16 UTC

- **E05:S08:T03** – Big-bang Notion migration maintainer KB (FR-114) - 🔄 IN PROGRESS (HIGH, **v0.5.8.3+2** Notion clean-slate policy) | [Task](epics/epic-05/story-08-knowledge-base/T03-big-bang-notion-migration-maintainer-kb-fr114.md) | [FR-114](fr-br/FR-114-split-documentation-surfaces-docusaurus-public-notion-maintainer-kb.md) | —No IPP— | Last modified: 2026-06-06 16:51 UTC

- **E05:S08:T04** – Agent Notion-first authoring and bootstrap routing (FR-114) - 📋 TODO (HIGH, **v0.5.8.4+1** RW -k intake) | [Task](epics/epic-05/story-08-knowledge-base/T04-agent-notion-first-authoring-and-bootstrap-routing-fr114.md) | [FR-114](fr-br/FR-114-split-documentation-surfaces-docusaurus-public-notion-maintainer-kb.md) | —No IPP— | Last modified: 2026-06-06 16:22 UTC

- **E08:S03:T12** – Code Quality maintainability backlog (BR-099) - 🔄 IN PROGRESS (MEDIUM, **v0.8.3.12+9** wave-6 IPW; **103/Fair** @ `d5c4bca5`; **`implement wave 6`**) | [Task](epics/epic-08/story-03-automation-scripts/T12-code-quality-maintainability-backlog-br099.md) | [BR-099](fr-br/BR-099-code-quality-maintainability-backlog.md) | [—IPP—](../../implementation-cycles/IPP-E08S03T12-code-quality-maintainability-backlog-br099.md) | Last modified: 2026-06-06 17:01 UTC

### Verification (V) - Task Shipped, FBU Verification Pending

*(No rows — T14 COMPLETE @ v0.8.3.14+5; see [`kanban-completed.md`](kanban-completed.md).)*

### Could Have (C) - Nice-to-Have Tasks

- **E02:S14:T02** – Validate fresh install steps for each path - 📋 TODO (HIGH, Epic 2 workflow-mgt install evaluation) | [Task](epics/epic-02/story-14-workflow-management-package-installation-evaluation/T02-validate-fresh-install-steps-for-each-path.md) | [Story](epics/epic-02/story-14-workflow-management-package-installation-evaluation.md) | —No IPP— | Last modified: 2026-06-05 13:08 UTC

- **E02:S14:T03** – Validate migration/update paths (if supported) - 📋 TODO (HIGH, Epic 2 workflow-mgt install evaluation) | [Task](epics/epic-02/story-14-workflow-management-package-installation-evaluation/T03-validate-migrationupdate-paths-if-supported.md) | [Story](epics/epic-02/story-14-workflow-management-package-installation-evaluation.md) | —No IPP— | Last modified: 2026-06-05 13:09 UTC

- **E02:S14:T04** – Verify post-install configuration and validation steps - 📋 TODO (HIGH, Epic 2 workflow-mgt install evaluation) | [Task](epics/epic-02/story-14-workflow-management-package-installation-evaluation/T04-verify-post-install-configuration-and-validation-steps.md) | [Story](epics/epic-02/story-14-workflow-management-package-installation-evaluation.md) | —No IPP— | Last modified: 2026-06-05 13:10 UTC

- **E02:S14:T05** – Document failure modes and rollback guidance - 📋 TODO (HIGH, Epic 2 workflow-mgt install evaluation) | [Task](epics/epic-02/story-14-workflow-management-package-installation-evaluation/T05-document-failure-modes-and-rollback-guidance.md) | [Story](epics/epic-02/story-14-workflow-management-package-installation-evaluation.md) | —No IPP— | Last modified: 2026-06-05 13:11 UTC

- **E02:S14:T06** – Capture documentation gaps and improvements - 🔄 IN PROGRESS (HIGH, Epic 2 workflow-mgt install evaluation) | [Task](epics/epic-02/story-14-workflow-management-package-installation-evaluation/T06-capture-documentation-gaps-and-improvements.md) | [Story](epics/epic-02/story-14-workflow-management-package-installation-evaluation.md) | —No IPP— | Last modified: 2026-06-05 13:12 UTC

- **E07:S01:T10** – FR-039: AI Dev Kit Project Review and Legacy Clean-up - 📋 TODO (LOW, Review and clean up legacy project elements) | [Task](epics/epic-07/story-01-codebase-maintenance-tasks/T10-project-root-hygiene-and-legacy-docs-rationalization.md) | [FR-039](fr-br/FR-039-ai-dev-kit-project-review-and-legacy-clean-up.md) | —No IPP— | Last modified: 2026-06-04 12:15 UTC

### Ongoing (O) - Perpetual Tasks

- **E02:S16:T03** – Workflow maintenance (Perpetual) - 🔄 PERPETUAL (BR-059 **RESOLVED** **v0.2.16.3+6**) - [Task](epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md) | [Story](epics/epic-02/story-16-perpetual-ongoing-workflow-operations.md) | [BR-059](fr-br/BR-059-ukw-moscow-incomplete-story-task-coverage.md) | [—IPP—](../../implementation-cycles/IPP-E2S16T03-rehouse-workflow-perpetual-tasks.md) | Last modified: 2026-06-03 12:29 UTC

- **E02:S16:T04** – Ad-hoc Kanban synchronization and hygiene (Perpetual) - 🔄 PERPETUAL (**v0.2.16.4+36** — UKW comprehensive: E05:S08, E08:S03 sync) - [Task](epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T04-ad-hoc-kanban-synchronization-and-hygiene-perpetual.md) | [Story](epics/epic-02/story-16-perpetual-ongoing-workflow-operations.md) | [FR-023](fr-br/FR-023-update-kanban-workflow-ukw.md) | —No IPP— | Last modified: 2026-06-05 15:03 UTC

- **E02:S16:T05** – Markdown Documentation Maintenance (Perpetual) - 🔄 PERPETUAL (**v0.2.16.5+6** — Wave 2: 36-file link-depth hygiene; BR-068 guard green) - [Task](epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T05-markdown-documentation-maintenance-perpetual.md) | [Story](epics/epic-02/story-16-perpetual-ongoing-workflow-operations.md) | [FR-088](fr-br/FR-088-dedicated-story-for-perpetual-ongoing-tasks.md) | —No IPP— | Last modified: 2026-06-05 10:38 UTC

- **E02:S16:T10** – Ad-hoc Repository Infrastructure Maintenance (Perpetual) - 🔄 PERPETUAL (last RW **v0.2.16.10+5**) - [Task](epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T10-ad-hoc-repository-infrastructure-maintenance-perpetual.md) | [Story](epics/epic-02/story-16-perpetual-ongoing-workflow-operations.md) | —No IPP— | Last modified: 2026-06-04 22:55 UTC

- **E02:S16:T14** – UKW gap discovery: TODO tasks and unfiled FR/BR (**FR-043**) - 📋 TODO (HIGH, perpetual UKW intake hygiene) - [Task](epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T14-ukw-gap-discovery-unfiled-fr-br-fr043.md) | [FR-043](fr-br/FR-043-ukw-gap-discovery-todo-tasks-and-unfiled-fr-br.md) | —No IPP— | Last modified: 2026-05-30 13:36 UTC

- **E07:S01:T05** – Markdown Maintenance (Perpetual Task) - 🔄 PERPETUAL (v0.7.1.5+2; **FR-058** proposed workflow) - [Task](epics/epic-07/story-01-codebase-maintenance-tasks/T05-markdown-maintenance-perpetual-task.md) | [Story](epics/epic-07/story-01-codebase-maintenance-tasks.md) | [FR-058](fr-br/FR-058-markdown-maintenance-workflow.md) | —No IPP— | Last modified: 2026-03-07 00:00 UTC

- **E08:S03:T15** – GitHub Actions CI health (Perpetual) - 🔄 PERPETUAL (**v0.8.3.15+3** — Wave 2: MDX-safe ADK markers; local Docusaurus green; pending Actions verify) - [Task](epics/epic-08/story-03-automation-scripts/T15-github-actions-ci-health-perpetual-fr112.md) | [FR-112](fr-br/FR-112-perpetual-github-ci-and-security-health-lanes.md) | [—IPP—](../../implementation-cycles/IPP-E08S03T15-github-actions-ci-health-perpetual-fr112.md) | Last modified: 2026-06-05 16:58 UTC

- **E08:S03:T16** – GitHub Security & Code Quality health (Perpetual) - 🔄 PERPETUAL (**v0.8.3.16+1** — Wave 0 baseline @ `777e956`; code-scanning **0** open; CI merge gate → T15) - [Task](epics/epic-08/story-03-automation-scripts/T16-github-security-code-quality-health-perpetual-fr112.md) | [FR-112](fr-br/FR-112-perpetual-github-ci-and-security-health-lanes.md) | [—IPP—](../../implementation-cycles/IPP-E08S03T16-github-security-code-quality-health-perpetual-fr112.md) | Last modified: 2026-06-05 16:52 UTC

### Won't Have (W) - Deferred Tasks

*(Deferred and shipped items: see [`kanban-completed.md`](kanban-completed.md) and story checklists — not listed on the active board.)*

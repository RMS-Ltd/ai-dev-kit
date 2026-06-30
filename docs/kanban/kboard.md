---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T12:02:50Z
expires_at: null
housekeeping_policy: keep
---

# AI Dev Kit – Kanban Board

**Last Updated:** 2026-06-30 (RW: E06:S09:T42)
**Version:** v0.6.9.42+1

**Active board contract:** **Sole active MoSCOW board** ([ADR-018](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/architecture/standards-and-adrs/ADR-018-single-kanban-board-consolidation.md)). Rows are **live work** (TODO / IN PROGRESS / OPEN / WAITING / PERPETUAL) plus filed **Could Have** backlog. **Verification (V)** band holds task-shipped / FBU-open items (`⏳ WAITING`). Remove **terminal** rows and archive prose (use [`kanban-completed.md`](kanban-completed.md) / [`intake-completed.md`](intake-completed.md)).

**Note:** Epics 1, 7, 11 are COMPLETE. Epics 2, 3, 4, 5, 6, 8, **10** are IN PROGRESS. Epic 5 **S08/S09 COMPLETE** (FR-114/FR-121). Epic 21 IN PROGRESS — shipped tasks archived @ UKW -c 2026-06-16 (34 E21 + cross-epic V-band); active board: S04–S07 locale backlog + S08 L2–5 deferred.

**Wiring:** Every wired row includes FBU link(s) where applicable (UXR-010). Legacy `fbuboard.md` / `kanban-board.md` aliases **removed** (intake rename wave).

> **Structure:** [`kanban-structure.md`](kanban-structure.md) · **Guide:** [`kanban-board-guide.md`](kanban-board-guide.md) · **Completed:** [`kanban-completed.md`](kanban-completed.md) · **FBU inventory:** [`intake-structure.md`](intake-structure.md)

---

## MoSCOW Prioritized In-Progress Tasks

### Must Have (M) - Critical Tasks


### Should Have (S) - Important Tasks

- **E06:S09:T41** – External adopter archetype corpus (FR-142) - 🔄 IN PROGRESS (MEDIUM — Wave 1 @ **v0.6.9.41+4**; Wave 3 **deferred** until G1) | [Task](epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T41-external-adopter-archetype-corpus-fr142.md) | [FR-142](fbu/FR-142-external-adopter-archetype-corpus-install-validation.md) | [UXR-029](fbu/UXR-029-adk-install-path-experiment.md)| [adk-install-external](../../../adk-install-external/README.md) | [—IPP—](../../implementation-cycles/IPP-E06S09T41-external-adopter-archetype-corpus-fr142.md) | Last modified: 2026-06-25 13:49 UTC
### Verification (V) - Task Shipped, FBU Verification Pending

- **E06:S09:T42** – SBL kanban TSP operator overlay freeze - ⏳ SHIPPED (HIGH — **v0.6.9.42+1**; **342** tasks; M04 prune; [SBL #3](https://github.com/RMS-Ltd/starborn-legacy/issues/3)) | [Task](epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T42-sbl-kanban-tsp-operator-overlay-freeze.md) | [FR-136](fbu/FR-136-guided-kma-target-structure-pack.md) | [kanban-reference](../../../adk-install-into-sbl/kanban-reference/) | —No IPP— | Last modified: 2026-06-30 17:35 UTC

- **E06:S09:T36** – Adopter Path Selector + Install RC (UXR-029) - ⏳ SHIPPED (HIGH — **v0.6.9.36+3**; AC7 satisfied @ attempt 10) | [Task](epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T36-adopter-path-selector-install-rc-uxr029.md) | [UXR-029](fbu/UXR-029-adk-install-path-experiment.md) | [#52](https://github.com/RMS-Ltd/ai-dev-kit/issues/52) | —No IPP— | Last modified: 2026-06-16 13:57 UTC

### Could Have (C) - Nice-to-Have Tasks

- **E21:S04:T06** – Test cultural adaptations - 📋 TODO (MEDIUM, cultural adaptation) | [Task](epics/epic-21/story-04-cultural-adaptation/T06-test-cultural-adaptations.md) | [Story](epics/epic-21/story-04-cultural-adaptation.md) | [FR-006](fbu/FR-006-localization-language-selection-uk-us-english.md) | —No IPP— | Last modified: 2026-06-07 11:18 UTC

- **E21:S04:T07** – Document cultural considerations and guidelines - 📋 TODO (MEDIUM, cultural adaptation) | [Task](epics/epic-21/story-04-cultural-adaptation/T07-document-cultural-considerations-and-guidelines.md) | [Story](epics/epic-21/story-04-cultural-adaptation.md) | [FR-006](fbu/FR-006-localization-language-selection-uk-us-english.md) | —No IPP— | Last modified: 2026-06-07 11:21 UTC

- **E21:S05:T03** – German (de) translation files - 📋 TODO (LOW, European locales) | [Task](epics/epic-21/story-05-european-languages-localization/T03-german-de-translation-files.md) | [Story](epics/epic-21/story-05-european-languages-localization.md) | [FR-006](fbu/FR-006-localization-language-selection-uk-us-english.md) | —No IPP— | Last modified: 2026-06-07 11:24 UTC

- **E21:S05:T04** – Portuguese (pt-BR / pt-PT) translation files - 📋 TODO (LOW, European locales) | [Task](epics/epic-21/story-05-european-languages-localization/T04-portuguese-pt-translation-files.md) | [Story](epics/epic-21/story-05-european-languages-localization.md) | [FR-006](fbu/FR-006-localization-language-selection-uk-us-english.md) | —No IPP— | Last modified: 2026-06-07 11:27 UTC

- **E21:S06:T02** – Chinese Traditional (zh-TW) translation files - 📋 TODO (LOW, CJK story) | [Task](epics/epic-21/story-06-cjk-languages-localization/T02-chinese-traditional-zh-tw-translation-files.md) | [Story](epics/epic-21/story-06-cjk-languages-localization.md) | [FR-006](fbu/FR-006-localization-language-selection-uk-us-english.md) | —No IPP— | Last modified: 2026-06-07 11:36 UTC

- **E21:S06:T03** – Japanese (ja) translation files - 📋 TODO (LOW, CJK story) | [Task](epics/epic-21/story-06-cjk-languages-localization/T03-japanese-ja-translation-files.md) | [Story](epics/epic-21/story-06-cjk-languages-localization.md) | [FR-006](fbu/FR-006-localization-language-selection-uk-us-english.md) | —No IPP— | Last modified: 2026-06-07 11:39 UTC

- **E21:S07:T01** – Arabic (ar) translation files - 📋 TODO (LOW, RTL / extended locales) | [Task](epics/epic-21/story-07-rtl-and-extended-locales/T01-arabic-ar-translation-files.md) | [Story](epics/epic-21/story-07-rtl-and-extended-locales.md) | [FR-006](fbu/FR-006-localization-language-selection-uk-us-english.md) | —No IPP— | Last modified: 2026-06-08 10:34 UTC

- **E21:S07:T02** – Russian (ru) translation files - 📋 TODO (LOW, RTL / extended locales) | [Task](epics/epic-21/story-07-rtl-and-extended-locales/T02-russian-ru-translation-files.md) | [Story](epics/epic-21/story-07-rtl-and-extended-locales.md) | [FR-006](fbu/FR-006-localization-language-selection-uk-us-english.md) | —No IPP— | Last modified: 2026-06-07 11:51 UTC

- **E02:S14:T02** – Validate fresh install steps for each path - 📋 TODO (HIGH, Epic 2 workflow-mgt install evaluation) | [Task](epics/epic-02/story-14-workflow-management-package-installation-evaluation/T02-validate-fresh-install-steps-for-each-path.md) | [Story](epics/epic-02/story-14-workflow-management-package-installation-evaluation.md) | —No IPP— | Last modified: 2026-06-05 13:08 UTC

- **E02:S14:T03** – Validate migration/update paths (if supported) - 📋 TODO (HIGH, Epic 2 workflow-mgt install evaluation) | [Task](epics/epic-02/story-14-workflow-management-package-installation-evaluation/T03-validate-migrationupdate-paths-if-supported.md) | [Story](epics/epic-02/story-14-workflow-management-package-installation-evaluation.md) | —No IPP— | Last modified: 2026-06-05 13:09 UTC

- **E02:S14:T04** – Verify post-install configuration and validation steps - 📋 TODO (HIGH, Epic 2 workflow-mgt install evaluation) | [Task](epics/epic-02/story-14-workflow-management-package-installation-evaluation/T04-verify-post-install-configuration-and-validation-steps.md) | [Story](epics/epic-02/story-14-workflow-management-package-installation-evaluation.md) | —No IPP— | Last modified: 2026-06-05 13:10 UTC

- **E02:S14:T05** – Document failure modes and rollback guidance - 📋 TODO (HIGH, Epic 2 workflow-mgt install evaluation) | [Task](epics/epic-02/story-14-workflow-management-package-installation-evaluation/T05-document-failure-modes-and-rollback-guidance.md) | [Story](epics/epic-02/story-14-workflow-management-package-installation-evaluation.md) | —No IPP— | Last modified: 2026-06-05 13:11 UTC

- **E02:S14:T06** – Capture documentation gaps and improvements - 🔄 IN PROGRESS (HIGH, Epic 2 workflow-mgt install evaluation) | [Task](epics/epic-02/story-14-workflow-management-package-installation-evaluation/T06-capture-documentation-gaps-and-improvements.md) | [Story](epics/epic-02/story-14-workflow-management-package-installation-evaluation.md) | —No IPP— | Last modified: 2026-06-05 13:12 UTC

- **E07:S01:T10** – FR-039: AI Dev Kit Project Review and Legacy Clean-up - 📋 TODO (LOW, hygiene task; historical FR-059 T10 reconciled) | [Task](epics/epic-07/story-01-codebase-maintenance-tasks/T10-project-root-hygiene-and-legacy-docs-rationalization.md) | [FR-039](fbu/FR-039-ai-dev-kit-project-review-and-legacy-clean-up.md) | [—IPP—](../../implementation-cycles/IPP-E07S01T10-supersession-reconciliation.md) | Last modified: 2026-06-04 12:15 UTC

### Ongoing (O) - Perpetual Tasks

_All perpetual lanes under **E02:S16** only ([IPP-E02S16T24](../../implementation-cycles/IPP-E02S16T24-s16-perpetual-only-semantic-scatter.md), 2026-06-08)._

- **E02:S16:T01** – Workflow maintenance (Perpetual) - 🔄 PERPETUAL (**v0.2.16.1+1** — portal js-yaml 4.2.0) — [Task](epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T01-workflow-maintenance-perpetual.md) | [Story](epics/epic-02/story-16-perpetual-ongoing-workflow-operations.md) | [FR-088](fbu/FR-088-dedicated-story-for-perpetual-ongoing-tasks.md) | [—IPP—](../../implementation-cycles/IPP-E2S16T01-canonical-perpetual-ongoing-tasks-story.md) | Last modified: 2026-06-15 22:43 UTC

- **E02:S16:T02** – Ad-hoc Kanban synchronization and hygiene (Perpetual) - 🔄 PERPETUAL (**v0.2.16.2+14** — UKW: E03:S02:T15 verify; FR-137 intake sync) - [Task](epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T02-ad-hoc-kanban-synchronization-and-hygiene-perpetual.md) | [Story](epics/epic-02/story-16-perpetual-ongoing-workflow-operations.md) | [FR-023](fbu/FR-023-update-kanban-workflow-ukw.md) | [—IPP—](../../implementation-cycles/IPP-E2S16T02-perpetual-task-inventory.md) | Last modified: 2026-06-16 14:30 UTC

- **E02:S16:T03** – Ad-hoc Documentation Maintenance (Perpetual) - 🔄 PERPETUAL (**v0.2.16.3+8**) - [Task](epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T03-ad-hoc-documentation-maintenance-perpetual.md) | [Story](epics/epic-02/story-16-perpetual-ongoing-workflow-operations.md) | [FR-124](fbu/FR-124-meta-workflow-orchestration-composite-workflow-chains.md) | [—IPP—](../../implementation-cycles/IPP-E2S16T03-rehouse-workflow-perpetual-tasks.md) | Last modified: 2026-06-10 14:03 UTC

- **E02:S16:T04** – Ad-hoc Repository Infrastructure Maintenance (Perpetual) - 🔄 PERPETUAL (**v0.2.16.10+7**) - [Task](epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T04-ad-hoc-repository-infrastructure-maintenance-perpetual.md) | [Story](epics/epic-02/story-16-perpetual-ongoing-workflow-operations.md) | —No IPP— | Last modified: 2026-06-07 17:00 UTC

- **E02:S16:T05** – GitHub Actions CI health (Perpetual) - 🔄 PERPETUAL (**v0.2.16.5+13**) - [Task](epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T05-github-actions-ci-health-perpetual.md) | [FR-112](fbu/FR-112-perpetual-github-ci-and-security-health-lanes.md) | [IPP-E02S16T05](../implementation-cycles/IPP-E02S16T05-github-actions-ci-health-perpetual-fr112.md) | [BR-104](fbu/BR-104-codeql-cqg-green-does-not-imply-actions-ci-green.md) | [—IPP—](../../implementation-cycles/IPP-E02S16T05-github-actions-ci-health-perpetual-fr112.md) | Last modified: 2026-06-17 16:49 UTC

- **E02:S16:T06** – GitHub Security & Code Quality health (Perpetual) - 🔄 PERPETUAL (**v0.2.16.6+20** — Wave 12 Dependabot http-proxy-middleware override) - [Task](epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T06-github-security-code-quality-health-perpetual.md) | [FR-112](fbu/FR-112-perpetual-github-ci-and-security-health-lanes.md) | [—IPP—](../../implementation-cycles/IPP-E02S16T06-github-security-code-quality-health-perpetual-fr112.md) | Last modified: 2026-06-23 13:36 UTC

### Won't Have (W) - Deferred Tasks

- **E02:S16:T07** – Ad-hoc Documentation Maintenance (Perpetual) - ⏭️ SUPERSEDED (merged into **E02:S16:T03** per [FR-125](fbu/FR-125-consolidate-e02s16t03-t07-documentation-maintenance-lanes.md), 2026-06-10) | [redirect](epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T07-ad-hoc-documentation-maintenance-perpetual.md) → [T03](epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T03-ad-hoc-documentation-maintenance-perpetual.md) | —No IPP— | Last modified: 2026-06-10 12:00 UTC

- **E21:S04:T02** – Adapt UI/UX for different cultures (examples, imagery) - ⏭️ SUPERSEDED (**v0.21.4.2+1**, merged into E21:S04:T04) | [Task](epics/epic-21/story-04-cultural-adaptation/T02-adapt-uiux-for-different-cultures-examples-imagery.md) | [T04](epics/epic-21/story-04-cultural-adaptation/T04-adapt-content-and-examples-for-cultural-context.md) | [—IPP—](../../implementation-cycles/IPP-E21S04T02-supersede-merge-into-t04.md) | Last modified: 2026-06-10 09:21 UTC

- **E21:S08:T04** – Docusaurus public docs portal accessibility (Layer 2) - ⏸ DEFERRED (MEDIUM, ADR-025 Layer 2; after Layer 1 CLI @ v0.21.8.3+1) | [Task](epics/epic-21/story-08-accessibility/T04-docusaurus-public-docs-portal-accessibility.md) | [Story](epics/epic-21/story-08-accessibility.md) | [FR-115](fbu/FR-115-accessibility-standards-compatibility.md) | [ADR-025](../../architecture/standards-and-adrs/ADR-025-layered-accessibility-strategy.md) | —No IPP— | Last modified: 2026-06-08 10:35 UTC

- **E21:S08:T05** – Markdown / kanban corpora accessibility (Layer 3) - ⏸ DEFERRED (MEDIUM, ADR-025 Layer 3) | [Task](epics/epic-21/story-08-accessibility/T05-markdown-and-kanban-documentation-structure.md) | [Story](epics/epic-21/story-08-accessibility.md) | [FR-115](fbu/FR-115-accessibility-standards-compatibility.md) | [ADR-025](../../architecture/standards-and-adrs/ADR-025-layered-accessibility-strategy.md) | —No IPP— | Last modified: 2026-06-08 10:36 UTC

- **E21:S08:T06** – Agent workflow blocking-state accessibility (Layer 4) - ⏸ DEFERRED (MEDIUM, ADR-025 Layer 4) | [Task](epics/epic-21/story-08-accessibility/T06-agent-workflow-blocking-state-accessibility.md) | [Story](epics/epic-21/story-08-accessibility.md) | [FR-115](fbu/FR-115-accessibility-standards-compatibility.md) | [ADR-025](../../architecture/standards-and-adrs/ADR-025-layered-accessibility-strategy.md) | —No IPP— | Last modified: 2026-06-08 10:36 UTC

- **E21:S08:T07** – Accessibility testing gates and adopter guidelines (Layer 5) - ⏸ DEFERRED (MEDIUM, ADR-025 Layer 5) | [Task](epics/epic-21/story-08-accessibility/T07-accessibility-testing-gates-and-adopter-guidelines.md) | [Story](epics/epic-21/story-08-accessibility.md) | [FR-115](fbu/FR-115-accessibility-standards-compatibility.md) | [ADR-025](../../architecture/standards-and-adrs/ADR-025-layered-accessibility-strategy.md) | —No IPP— | Last modified: 2026-06-08 10:37 UTC


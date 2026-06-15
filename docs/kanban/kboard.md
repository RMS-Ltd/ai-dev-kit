---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T12:02:50Z
expires_at: null
housekeeping_policy: keep
---

# AI Dev Kit – Kanban Board

**Last Updated:** 2026-06-15 (RW: E08:S03:T22)
**Version:** v0.8.3.22+1

**Active board contract:** **Sole active MoSCOW board** ([ADR-018](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/architecture/standards-and-adrs/ADR-018-single-kanban-board-consolidation.md)). Rows are **live work** (TODO / IN PROGRESS / OPEN / WAITING / PERPETUAL) plus filed **Could Have** backlog. **Verification (V)** band holds task-shipped / FBU-open items (`⏳ WAITING`). Remove **terminal** rows and archive prose (use [`kanban-completed.md`](kanban-completed.md) / [`intake-completed.md`](intake-completed.md)).

**Note:** Epics 1, 3, 7, 11 are COMPLETE. Epics 2, 4, 5, 6, 8, **10** are IN PROGRESS. Epic 5 **S08/S09 COMPLETE** (FR-114/FR-121). Epic 21 IN PROGRESS — **all 47 tasks on board** (S01–S03 COMPLETE; S04:T01 + T03 + T05 + S05:T01 + S06:T01 + S08 L0–1 shipped; S09 admin COMPLETE; S04 T04/T06/T07 + S05–S07 locale backlog; S08 L2–5 deferred).

**Wiring:** Every wired row includes FBU link(s) where applicable (UXR-010). Legacy `fbuboard.md` / `kanban-board.md` aliases **removed** (intake rename wave).

> **Structure:** [`kanban-structure.md`](kanban-structure.md) · **Guide:** [`kanban-board-guide.md`](kanban-board-guide.md) · **Completed:** [`kanban-completed.md`](kanban-completed.md) · **FBU inventory:** [`intake-structure.md`](intake-structure.md)

---

## MoSCOW Prioritized In-Progress Tasks

### Must Have (M) - Critical Tasks


### Should Have (S) - Important Tasks

- **E06:S09:T26** – Starborn Legacy ADK install program - 🔄 IN PROGRESS (HIGH — FR-079 **accepted**; adopter sign-off final; greenfield program closed) | [Task](epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T26-starborn-legacy-adk-install-program.md) | [attempt-06 index](../../../../adk-install-into-sbl/attempt-06/README.md) | —No IPP— | Last modified: 2026-06-10 17:24 UTC

### Verification (V) - Task Shipped, FBU Verification Pending

- **E02:S03:T12** – Environment-aware workflow execution (FR-128) - ⏳ SHIPPED (HIGH — **v0.2.3.12+1**; AC1–AC7 runtime verify pending) | [Task](epics/epic-02/story-03-additional-workflows-and-examples/T12-environment-aware-workflow-execution-fr128.md) | [FR-128](fr-br/FR-128-environment-aware-workflow-execution-fr128.md) | [—IPP—](../../implementation-cycles/IPP-E02S03T12-environment-aware-workflow-execution-fr128.md) | Last modified: 2026-06-11 10:49 UTC

- **E06:S09:T33** – ADK package update mechanism (FR-129) - ⏳ SHIPPED (**Must Have** — **v0.6.9.33+2**; SBL AC1 validated; host scaffold merge pending) | [Task](epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T33-adk-package-update-mechanism-fr129.md) | [FR-129](fr-br/FR-129-adk-package-update-mechanism-fr129.md) | [—IPP—](../../implementation-cycles/IPP-E06S09T33-adk-package-update-mechanism-fr129.md) | Last modified: 2026-06-11 11:16 UTC

- **E06:S09:T35** – Kanban v4 three-tier catalogue (FR-132) - ⏳ SHIPPED (HIGH — **v0.6.9.35+2**; agentic KMA UAT + benchmark; FR-132-F6 pending) | [Task](epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T35-kanban-v4-three-tier-catalogue-fr132.md) | [FR-132](fr-br/FR-132-kanban-v4-three-tier-catalogue.md) | [FR-131](fr-br/FR-131-canonical-abstract-task-library-catl.md) | —No IPP— | Last modified: 2026-06-14 17:55 UTC

- **E06:S09:T36** – Adopter Path Selector + Install RC (UXR-029) - ⏳ SHIPPED (HIGH — **v0.6.9.36+3** INSTALL + orchestrator blind KMA; AC7 pending) | [Task](epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T36-adopter-path-selector-install-rc-uxr029.md) | [UXR-029](fr-br/UXR-029-adk-install-path-experiment.md) | [#52](https://github.com/RMS-Ltd/ai-dev-kit/issues/52) | —No IPP— | Last modified: 2026-06-15 13:33 UTC

#### Epic 21 (E21) — full inventory: shipped (32 tasks)

- **E21:S01:T01** – Add language selection prompt to template setup (GitHub template) - ⏳ SHIPPED (MEDIUM, **v0.21.1.1+2**) | [Task](epics/epic-21/story-01-language-selection-at-setup/T01-add-language-selection-prompt-to-template-setup-github-templ.md) | [Story](epics/epic-21/story-01-language-selection-at-setup.md) | [FR-006](fr-br/FR-006-localization-language-selection-uk-us-english.md) | [—IPP—](../../implementation-cycles/IPP-E21S01T01-template-language-selection-github.md) | Last modified: 2026-06-07 10:18 UTC

- **E21:S01:T02** – Add language selection prompt to CLI tool (`ai-dev-kit init`) - ⏳ SHIPPED (MEDIUM, **v0.21.1.2+1**) | [Task](epics/epic-21/story-01-language-selection-at-setup/T02-add-language-selection-prompt-to-cli-tool-ai-dev-kit-init.md) | [Story](epics/epic-21/story-01-language-selection-at-setup.md) | [FR-006](fr-br/FR-006-localization-language-selection-uk-us-english.md) | [—IPP—](../../implementation-cycles/IPP-E21S01T02-cli-init-language-selection.md) | Last modified: 2026-06-07 10:21 UTC

- **E21:S01:T03** – Add language selection prompt to RW Installer (`install_release_workflow.py`) - ⏳ SHIPPED (MEDIUM, **v0.21.1.3+1**) | [Task](epics/epic-21/story-01-language-selection-at-setup/T03-add-language-selection-prompt-to-rw-installer-install-releas.md) | [Story](epics/epic-21/story-01-language-selection-at-setup.md) | [FR-006](fr-br/FR-006-localization-language-selection-uk-us-english.md) | [—IPP—](../../implementation-cycles/IPP-E21S01T03-rw-installer-language-selection.md) | Last modified: 2026-06-07 10:24 UTC

- **E21:S01:T04** – Create UK/US English content variants (documentation, templates) - ⏳ SHIPPED (MEDIUM, **v0.21.1.4+1**) | [Task](epics/epic-21/story-01-language-selection-at-setup/T04-create-ukus-english-content-variants-documentation-templates.md) | [Story](epics/epic-21/story-01-language-selection-at-setup.md) | [FR-006](fr-br/FR-006-localization-language-selection-uk-us-english.md) | [—IPP—](../../implementation-cycles/IPP-E21S01T04-ukus-content-variants-mvp.md) | Last modified: 2026-06-07 10:27 UTC

- **E21:S01:T05** – Implement configuration persistence (`ai-dev-kit-config.yaml`) - ⏳ SHIPPED (MEDIUM, **v0.21.1.5+1**) | [Task](epics/epic-21/story-01-language-selection-at-setup/T05-implement-configuration-persistence-ai-dev-kit-configyaml.md) | [Story](epics/epic-21/story-01-language-selection-at-setup.md) | [FR-006](fr-br/FR-006-localization-language-selection-uk-us-english.md) | [—IPP—](../../implementation-cycles/IPP-E21S01T05-config-read-locale-resolution.md) | Last modified: 2026-06-07 10:30 UTC

- **E21:S01:T06** – Update content generation to use language preference (RW, templates) - ⏳ SHIPPED (MEDIUM, **v0.21.1.6+1**) | [Task](epics/epic-21/story-01-language-selection-at-setup/T06-update-content-generation-to-use-language-preference-rw-temp.md) | [Story](epics/epic-21/story-01-language-selection-at-setup.md) | [FR-006](fr-br/FR-006-localization-language-selection-uk-us-english.md) | [—IPP—](../../implementation-cycles/IPP-E21S01T06-content-generation-locale-wiring.md) | Last modified: 2026-06-07 10:33 UTC

- **E21:S01:T07** – Test UK/US English selection and content generation - ⏳ SHIPPED (MEDIUM, **v0.21.1.7+1**) | [Task](epics/epic-21/story-01-language-selection-at-setup/T07-test-ukus-english-selection-and-content-generation.md) | [Story](epics/epic-21/story-01-language-selection-at-setup.md) | [FR-006](fr-br/FR-006-localization-language-selection-uk-us-english.md) | [—IPP—](../../implementation-cycles/IPP-E21S01T07-fr006-phase1-e2e-tests.md) | Last modified: 2026-06-07 10:36 UTC

- **E21:S02:T01** – Choose i18n framework/library - ⏳ SHIPPED (MEDIUM, **v0.21.2.1+1**) | [Task](epics/epic-21/story-02-internationalisation-infrastructure/T01-choose-i18n-frameworklibrary.md) | [Story](epics/epic-21/story-02-internationalisation-infrastructure.md) | [FR-006](fr-br/FR-006-localization-language-selection-uk-us-english.md) | [—IPP—](../../implementation-cycles/IPP-E21S02T01-choose-i18n-framework.md) | Last modified: 2026-06-07 10:33 UTC

- **E21:S02:T02** – Set up translation file structure (`locales/{lang}/`) - ⏳ SHIPPED (MEDIUM, **v0.21.2.2+1**) | [Task](epics/epic-21/story-02-internationalisation-infrastructure/T02-set-up-translation-file-structure-localeslang.md) | [Story](epics/epic-21/story-02-internationalisation-infrastructure.md) | [FR-006](fr-br/FR-006-localization-language-selection-uk-us-english.md) | [—IPP—](../../implementation-cycles/IPP-E21S02T02-locale-file-structure.md) | Last modified: 2026-06-07 10:36 UTC

- **E21:S02:T03** – Implement locale detection (browser/system locale) - ⏳ SHIPPED (MEDIUM, **v0.21.2.3+1**) | [Task](epics/epic-21/story-02-internationalisation-infrastructure/T03-implement-locale-detection-browsersystem-locale.md) | [Story](epics/epic-21/story-02-internationalisation-infrastructure.md) | [FR-006](fr-br/FR-006-localization-language-selection-uk-us-english.md) | [—IPP—](../../implementation-cycles/IPP-E21S02T03-locale-detection.md) | Last modified: 2026-06-07 10:39 UTC

- **E21:S02:T04** – Add language switching functionality - ⏳ SHIPPED (MEDIUM, **v0.21.2.4+1**) | [Task](epics/epic-21/story-02-internationalisation-infrastructure/T04-add-language-switching-functionality.md) | [Story](epics/epic-21/story-02-internationalisation-infrastructure.md) | [FR-006](fr-br/FR-006-localization-language-selection-uk-us-english.md) | [—IPP—](../../implementation-cycles/IPP-E21S02T04-locale-switching.md) | Last modified: 2026-06-07 10:42 UTC

- **E21:S02:T05** – Configure date/time/number formatting per locale - ⏳ SHIPPED (MEDIUM, **v0.21.2.5+1**) | [Task](epics/epic-21/story-02-internationalisation-infrastructure/T05-configure-datetimenumber-formatting-per-locale.md) | [Story](epics/epic-21/story-02-internationalisation-infrastructure.md) | [FR-006](fr-br/FR-006-localization-language-selection-uk-us-english.md) | [—IPP—](../../implementation-cycles/IPP-E21S02T05-locale-formatting.md) | Last modified: 2026-06-07 10:45 UTC

- **E21:S02:T06** – Implement translation key system - ⏳ SHIPPED (MEDIUM, **v0.21.2.6+1**) | [Task](epics/epic-21/story-02-internationalisation-infrastructure/T06-implement-translation-key-system.md) | [Story](epics/epic-21/story-02-internationalisation-infrastructure.md) | [FR-006](fr-br/FR-006-localization-language-selection-uk-us-english.md) | [—IPP—](../../implementation-cycles/IPP-E21S02T06-locale-key-system.md) | Last modified: 2026-06-07 10:48 UTC

- **E21:S02:T07** – Set up translation fallback chain (selected → UK English → US English) - ⏳ SHIPPED (MEDIUM, **v0.21.2.7+1**) | [Task](epics/epic-21/story-02-internationalisation-infrastructure/T07-set-up-translation-fallback-chain-selected-english-us-englis.md) | [Story](epics/epic-21/story-02-internationalisation-infrastructure.md) | [FR-006](fr-br/FR-006-localization-language-selection-uk-us-english.md) | [—IPP—](../../implementation-cycles/IPP-E21S02T07-locale-fallback-chain.md) | Last modified: 2026-06-07 10:51 UTC

- **E21:S03:T01** – Identify and extract all translatable content - ⏳ SHIPPED (MEDIUM, **v0.21.3.1+1**) | [Task](epics/epic-21/story-03-translation-and-localisation/T01-identify-and-extract-all-translatable-content.md) | [Story](epics/epic-21/story-03-translation-and-localisation.md) | [FR-006](fr-br/FR-006-localization-language-selection-uk-us-english.md) | [—IPP—](../../implementation-cycles/IPP-E21S03T01-identify-extract-translatable-content.md) | Last modified: 2026-06-07 10:48 UTC

- **E21:S03:T02** – Create translation files for major languages - ⏳ SHIPPED (MEDIUM, **v0.21.3.2+1**) | [Task](epics/epic-21/story-03-translation-and-localisation/T02-create-translation-files-for-major-languages.md) | [Story](epics/epic-21/story-03-translation-and-localisation.md) | [FR-006](fr-br/FR-006-localization-language-selection-uk-us-english.md) | [—IPP—](../../implementation-cycles/IPP-E21S03T02-create-translation-files-major-languages.md) | Last modified: 2026-06-07 10:51 UTC

- **E21:S03:T03** – Implement translation lookup and rendering - ⏳ SHIPPED (MEDIUM, **v0.21.3.3+1**) | [Task](epics/epic-21/story-03-translation-and-localisation/T03-implement-translation-lookup-and-rendering.md) | [Story](epics/epic-21/story-03-translation-and-localisation.md) | [FR-006](fr-br/FR-006-localization-language-selection-uk-us-english.md) | [—IPP—](../../implementation-cycles/IPP-E21S03T03-translation-lookup-rendering.md) | Last modified: 2026-06-07 10:54 UTC

- **E21:S03:T04** – Create translation workflow and review process - ⏳ SHIPPED (MEDIUM, **v0.21.3.4+1**) | [Task](epics/epic-21/story-03-translation-and-localisation/T04-create-translation-workflow-and-review-process.md) | [Story](epics/epic-21/story-03-translation-and-localisation.md) | [FR-006](fr-br/FR-006-localization-language-selection-uk-us-english.md) | [—IPP—](../../implementation-cycles/IPP-E21S03T04-translation-workflow-review.md) | Last modified: 2026-06-07 10:57 UTC

- **E21:S03:T05** – Add translation management tools - ⏳ SHIPPED (MEDIUM, **v0.21.3.5+1**) | [Task](epics/epic-21/story-03-translation-and-localisation/T05-add-translation-management-tools.md) | [Story](epics/epic-21/story-03-translation-and-localisation.md) | [FR-006](fr-br/FR-006-localization-language-selection-uk-us-english.md) | [—IPP—](../../implementation-cycles/IPP-E21S03T05-translation-management-tools.md) | Last modified: 2026-06-07 11:00 UTC

- **E21:S03:T06** – Implement translation completeness tracking - ⏳ SHIPPED (MEDIUM, **v0.21.3.6+1**) | [Task](epics/epic-21/story-03-translation-and-localisation/T06-implement-translation-completeness-tracking.md) | [Story](epics/epic-21/story-03-translation-and-localisation.md) | [FR-006](fr-br/FR-006-localization-language-selection-uk-us-english.md) | [—IPP—](../../implementation-cycles/IPP-E21S03T06-translation-completeness-tracking.md) | Last modified: 2026-06-07 11:03 UTC

- **E21:S03:T07** – Test translations and locale support - ⏳ SHIPPED (MEDIUM, **v0.21.3.7+1**) | [Task](epics/epic-21/story-03-translation-and-localisation/T07-test-translations-and-locale-support.md) | [Story](epics/epic-21/story-03-translation-and-localisation.md) | [FR-006](fr-br/FR-006-localization-language-selection-uk-us-english.md) | [—IPP—](../../implementation-cycles/IPP-E21S03T07-test-translations-locale-support.md) | Last modified: 2026-06-07 11:06 UTC

- **E21:S04:T01** – Research cultural requirements for target locales - ⏳ SHIPPED (LOW, **v0.21.4.1+1**) | [Task](epics/epic-21/story-04-cultural-adaptation/T01-research-cultural-requirements-for-target-locales.md) | [Story](epics/epic-21/story-04-cultural-adaptation.md) | [FR-006](fr-br/FR-006-localization-language-selection-uk-us-english.md) | [—IPP—](../../implementation-cycles/IPP-E21S04T01-research-cultural-requirements-target-locales.md) | Last modified: 2026-06-07 11:03 UTC

- **E21:S04:T03** – Implement RTL support (Right-to-Left) for Arabic/Hebrew - ⏳ SHIPPED (MEDIUM, **v0.21.4.3+1**) | [Task](epics/epic-21/story-04-cultural-adaptation/T03-implement-rtl-support-right-to-left-for-arabichebrew.md) | [Story](epics/epic-21/story-04-cultural-adaptation.md) | [FR-006](fr-br/FR-006-localization-language-selection-uk-us-english.md) | [—IPP—](../../implementation-cycles/IPP-E21S04T03-rtl-support-arabic-hebrew.md) | Last modified: 2026-06-10 09:52 UTC

- **E21:S04:T05** – Cultural formatting validation (dates, times, numbers, currency) - ⏳ SHIPPED (MEDIUM, **v0.21.4.5+1**) | [Task](epics/epic-21/story-04-cultural-adaptation/T05-configure-locale-specific-formatting-dates-times-numbers-cur.md) | [Story](epics/epic-21/story-04-cultural-adaptation.md) | [FR-006](fr-br/FR-006-localization-language-selection-uk-us-english.md) | [—IPP—](../../implementation-cycles/IPP-E21S04T05-cultural-formatting-validation.md) | Last modified: 2026-06-07 11:15 UTC

- **E21:S04:T04** – Adapt content and examples for cultural context - ⏳ SHIPPED (MEDIUM, **v0.21.4.4+1**, pt-BR/pt-PT + cultural policy) | [Task](epics/epic-21/story-04-cultural-adaptation/T04-adapt-content-and-examples-for-cultural-context.md) | [Story](epics/epic-21/story-04-cultural-adaptation.md) | [FR-006](fr-br/FR-006-localization-language-selection-uk-us-english.md) | [—IPP—](../../implementation-cycles/IPP-E21S04T04-cultural-content-adaptation.md) | Last modified: 2026-06-10 20:30 UTC

- **E21:S05:T01** – Spanish (es) translation files - ⏳ SHIPPED (LOW, **v0.21.5.1+1**) | [Task](epics/epic-21/story-05-european-languages-localization/T01-spanish-es-translation-files.md) | [Story](epics/epic-21/story-05-european-languages-localization.md) | [FR-006](fr-br/FR-006-localization-language-selection-uk-us-english.md) | [—IPP—](../../implementation-cycles/IPP-E21S05T01-spanish-es-translation-files.md) | Last modified: 2026-06-07 11:18 UTC

- **E21:S06:T01** – Chinese Simplified (zh-CN) translation files - ⏳ SHIPPED (LOW, **v0.21.6.1+1**) | [Task](epics/epic-21/story-06-cjk-languages-localization/T01-chinese-simplified-zh-cn-translation-files.md) | [Story](epics/epic-21/story-06-cjk-languages-localization.md) | [FR-006](fr-br/FR-006-localization-language-selection-uk-us-english.md) | [—IPP—](../../implementation-cycles/IPP-E21S06T01-chinese-simplified-zh-cn-translation-files.md) | Last modified: 2026-06-07 11:33 UTC

- **E21:S08:T01** – CLI accessibility baseline audit (Layer 0) - ⏳ SHIPPED (LOW, **v0.21.8.1+1**) | [Task](epics/epic-21/story-08-accessibility/T01-accessibility-baseline-audit-and-standards-mapping.md) | [Story](epics/epic-21/story-08-accessibility.md) | [FR-115](fr-br/FR-115-accessibility-standards-compatibility.md) | [—IPP—](../../implementation-cycles/IPP-E21S08T01-accessibility-layered-cli-first.md) | Last modified: 2026-06-07 12:03 UTC

- **E21:S08:T02** – Layered accessibility strategy ADR (Layer 0) - ⏳ SHIPPED (LOW, **v0.21.8.2+1**) | [Task](epics/epic-21/story-08-accessibility/T02-adk-accessibility-strategy-adr.md) | [Story](epics/epic-21/story-08-accessibility.md) | [FR-115](fr-br/FR-115-accessibility-standards-compatibility.md) | [ADR-025](../../architecture/standards-and-adrs/ADR-025-layered-accessibility-strategy.md) | —No IPP— | Last modified: 2026-06-07 12:06 UTC

- **E21:S08:T03** – CLI and terminal output accessibility (Layer 1) - ⏳ SHIPPED (LOW, **v0.21.8.3+1**) | [Task](epics/epic-21/story-08-accessibility/T03-cli-and-terminal-output-accessibility.md) | [Story](epics/epic-21/story-08-accessibility.md) | [FR-115](fr-br/FR-115-accessibility-standards-compatibility.md) | [ADR-025](../../architecture/standards-and-adrs/ADR-025-layered-accessibility-strategy.md) | [—IPP—](../../implementation-cycles/IPP-E21S08T03-cli-terminal-accessibility.md) | Last modified: 2026-06-07 12:09 UTC

- **E21:S09:T01** – FR-006 Phase 2 header and status reconciliation - ⏳ SHIPPED (LOW, **v0.21.9.1+1**) | [Task](epics/epic-21/story-09-epic-housekeeping/T01-fr006-phase2-header-and-status-reconciliation.md) | [Story](epics/epic-21/story-09-epic-housekeeping.md) | [FR-006](fr-br/FR-006-localization-language-selection-uk-us-english.md) | —No IPP— | Last modified: 2026-06-07 12:18 UTC

- **E21:S09:T02** – Legacy epic-21 story folder rationalization - ⏳ SHIPPED (LOW, **v0.21.9.2+2**) | [Task](epics/epic-21/story-09-epic-housekeeping/T02-legacy-story-folder-rationalization.md) | [Story](epics/epic-21/story-09-epic-housekeeping.md) | [FR-006](fr-br/FR-006-localization-language-selection-uk-us-english.md) | —No IPP— | Last modified: 2026-06-07 12:21 UTC

- **E21:S09:T03** – PR merge CI parity and adopter-public doc gates - ⏳ SHIPPED (LOW, **v0.21.9.3+1**) | [Task](epics/epic-21/story-09-epic-housekeeping/T03-pr-merge-ci-and-adopter-public-doc-gates.md) | [Story](epics/epic-21/story-09-epic-housekeeping.md) | [FR-006](fr-br/FR-006-localization-language-selection-uk-us-english.md) | —No IPP— | Last modified: 2026-06-07 12:24 UTC

### Could Have (C) - Nice-to-Have Tasks

- **E08:S03:T20** – README Python prerequisites alignment (UXR-026) - ⏳ SHIPPED (MEDIUM, **v0.8.3.20+1**) | [Task](epics/epic-08/story-03-automation-scripts/T20-readme-python-prerequisites-uxr026.md) | [UXR-026](fr-br/UXR-026-readme-python-prerequisites-contradicts-311-policy.md) | [FR-104](fr-br/FR-104-python-minimum-version-policy-alignment.md) | [—IPP—](../../implementation-cycles/IPP-E08S03T20-readme-python-prerequisites-uxr026.md) | Last modified: 2026-06-10 21:30 UTC

- **E08:S03:T21** – CLI pytest coverage dedicated target (UXR-030) - ⏳ SHIPPED (MEDIUM, **v0.8.3.21+1**) | [Task](epics/epic-08/story-03-automation-scripts/T21-cli-pytest-coverage-dedicated-target-uxr030.md) | [UXR-030](fr-br/UXR-030-default-pytest-cli-coverage-misleading-zero-percent.md) | —No IPP— | Last modified: 2026-06-15 19:22 UTC

- **E08:S03:T22** – Pytest warning cleanup (UXR-030 Wave 2) - ⏳ SHIPPED (MEDIUM, **v0.8.3.22+1**) | [Task](epics/epic-08/story-03-automation-scripts/T22-pytest-warning-cleanup-uxr030-wave2.md) | [UXR-030](fr-br/UXR-030-default-pytest-cli-coverage-misleading-zero-percent.md) | [—IPP—](../../implementation-cycles/IPP-E08S03T22-pytest-warning-cleanup-uxr030-wave2.md) | Last modified: 2026-06-15 19:44 UTC

#### Epic 21 (E21) — full inventory: backlog (11 tasks)

- **E21:S04:T06** – Test cultural adaptations - 📋 TODO (MEDIUM, cultural adaptation) | [Task](epics/epic-21/story-04-cultural-adaptation/T06-test-cultural-adaptations.md) | [Story](epics/epic-21/story-04-cultural-adaptation.md) | [FR-006](fr-br/FR-006-localization-language-selection-uk-us-english.md) | —No IPP— | Last modified: 2026-06-07 11:18 UTC

- **E21:S04:T07** – Document cultural considerations and guidelines - 📋 TODO (MEDIUM, cultural adaptation) | [Task](epics/epic-21/story-04-cultural-adaptation/T07-document-cultural-considerations-and-guidelines.md) | [Story](epics/epic-21/story-04-cultural-adaptation.md) | [FR-006](fr-br/FR-006-localization-language-selection-uk-us-english.md) | —No IPP— | Last modified: 2026-06-07 11:21 UTC

- **E21:S05:T02** – French (fr) translation files - ⏳ SHIPPED (LOW, **v0.21.5.2+2**) | [Task](epics/epic-21/story-05-european-languages-localization/T02-french-fr-translation-files.md) | [Story](epics/epic-21/story-05-european-languages-localization.md) | [FR-006](fr-br/FR-006-localization-language-selection-uk-us-english.md) | [—IPP—](../../implementation-cycles/IPP-E21S05T02-french-fr-translation-files.md) | Last modified: 2026-06-11 16:15 UTC

- **E21:S05:T03** – German (de) translation files - 📋 TODO (LOW, European locales) | [Task](epics/epic-21/story-05-european-languages-localization/T03-german-de-translation-files.md) | [Story](epics/epic-21/story-05-european-languages-localization.md) | [FR-006](fr-br/FR-006-localization-language-selection-uk-us-english.md) | —No IPP— | Last modified: 2026-06-07 11:24 UTC

- **E21:S05:T04** – Portuguese (pt-BR / pt-PT) translation files - 📋 TODO (LOW, European locales) | [Task](epics/epic-21/story-05-european-languages-localization/T04-portuguese-pt-translation-files.md) | [Story](epics/epic-21/story-05-european-languages-localization.md) | [FR-006](fr-br/FR-006-localization-language-selection-uk-us-english.md) | —No IPP— | Last modified: 2026-06-07 11:27 UTC

- **E21:S06:T02** – Chinese Traditional (zh-TW) translation files - 📋 TODO (LOW, CJK story) | [Task](epics/epic-21/story-06-cjk-languages-localization/T02-chinese-traditional-zh-tw-translation-files.md) | [Story](epics/epic-21/story-06-cjk-languages-localization.md) | [FR-006](fr-br/FR-006-localization-language-selection-uk-us-english.md) | —No IPP— | Last modified: 2026-06-07 11:36 UTC

- **E21:S06:T03** – Japanese (ja) translation files - 📋 TODO (LOW, CJK story) | [Task](epics/epic-21/story-06-cjk-languages-localization/T03-japanese-ja-translation-files.md) | [Story](epics/epic-21/story-06-cjk-languages-localization.md) | [FR-006](fr-br/FR-006-localization-language-selection-uk-us-english.md) | —No IPP— | Last modified: 2026-06-07 11:39 UTC

- **E21:S07:T01** – Arabic (ar) translation files - 📋 TODO (LOW, RTL / extended locales) | [Task](epics/epic-21/story-07-rtl-and-extended-locales/T01-arabic-ar-translation-files.md) | [Story](epics/epic-21/story-07-rtl-and-extended-locales.md) | [FR-006](fr-br/FR-006-localization-language-selection-uk-us-english.md) | —No IPP— | Last modified: 2026-06-08 10:34 UTC

- **E21:S07:T02** – Russian (ru) translation files - 📋 TODO (LOW, RTL / extended locales) | [Task](epics/epic-21/story-07-rtl-and-extended-locales/T02-russian-ru-translation-files.md) | [Story](epics/epic-21/story-07-rtl-and-extended-locales.md) | [FR-006](fr-br/FR-006-localization-language-selection-uk-us-english.md) | —No IPP— | Last modified: 2026-06-07 11:51 UTC

- **E02:S14:T02** – Validate fresh install steps for each path - 📋 TODO (HIGH, Epic 2 workflow-mgt install evaluation) | [Task](epics/epic-02/story-14-workflow-management-package-installation-evaluation/T02-validate-fresh-install-steps-for-each-path.md) | [Story](epics/epic-02/story-14-workflow-management-package-installation-evaluation.md) | —No IPP— | Last modified: 2026-06-05 13:08 UTC

- **E02:S14:T03** – Validate migration/update paths (if supported) - 📋 TODO (HIGH, Epic 2 workflow-mgt install evaluation) | [Task](epics/epic-02/story-14-workflow-management-package-installation-evaluation/T03-validate-migrationupdate-paths-if-supported.md) | [Story](epics/epic-02/story-14-workflow-management-package-installation-evaluation.md) | —No IPP— | Last modified: 2026-06-05 13:09 UTC

- **E02:S14:T04** – Verify post-install configuration and validation steps - 📋 TODO (HIGH, Epic 2 workflow-mgt install evaluation) | [Task](epics/epic-02/story-14-workflow-management-package-installation-evaluation/T04-verify-post-install-configuration-and-validation-steps.md) | [Story](epics/epic-02/story-14-workflow-management-package-installation-evaluation.md) | —No IPP— | Last modified: 2026-06-05 13:10 UTC

- **E02:S14:T05** – Document failure modes and rollback guidance - 📋 TODO (HIGH, Epic 2 workflow-mgt install evaluation) | [Task](epics/epic-02/story-14-workflow-management-package-installation-evaluation/T05-document-failure-modes-and-rollback-guidance.md) | [Story](epics/epic-02/story-14-workflow-management-package-installation-evaluation.md) | —No IPP— | Last modified: 2026-06-05 13:11 UTC

- **E02:S14:T06** – Capture documentation gaps and improvements - 🔄 IN PROGRESS (HIGH, Epic 2 workflow-mgt install evaluation) | [Task](epics/epic-02/story-14-workflow-management-package-installation-evaluation/T06-capture-documentation-gaps-and-improvements.md) | [Story](epics/epic-02/story-14-workflow-management-package-installation-evaluation.md) | —No IPP— | Last modified: 2026-06-05 13:12 UTC

- **E04:S14:T11** – UKW gap discovery — unfiled FR/BR (FR-043) - 📋 TODO (HIGH, re-housed from E02:S16:T14) | [Task](epics/epic-04/story-14-kanban-framework-maintenance/T11-ukw-gap-discovery-unfiled-fr-br-fr043.md) | [FR-043](fr-br/FR-043-ukw-gap-discovery-todo-tasks-and-unfiled-fr-br.md) | —No IPP— | Last modified: 2026-05-30 13:36 UTC

- **E07:S01:T10** – FR-039: AI Dev Kit Project Review and Legacy Clean-up - 📋 TODO (LOW, hygiene task; historical FR-059 T10 reconciled) | [Task](epics/epic-07/story-01-codebase-maintenance-tasks/T10-project-root-hygiene-and-legacy-docs-rationalization.md) | [FR-039](fr-br/FR-039-ai-dev-kit-project-review-and-legacy-clean-up.md) | [—IPP—](../../implementation-cycles/IPP-E07S01T10-supersession-reconciliation.md) | Last modified: 2026-06-04 12:15 UTC


### Ongoing (O) - Perpetual Tasks

_All perpetual lanes under **E02:S16** only ([IPP-E02S16T24](../../implementation-cycles/IPP-E02S16T24-s16-perpetual-only-semantic-scatter.md), 2026-06-08)._

- **E02:S16:T01** – Workflow maintenance (Perpetual) - 🔄 PERPETUAL — [Task](epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T01-workflow-maintenance-perpetual.md) | [Story](epics/epic-02/story-16-perpetual-ongoing-workflow-operations.md) | [FR-088](fr-br/FR-088-dedicated-story-for-perpetual-ongoing-tasks.md) | [—IPP—](../../implementation-cycles/IPP-E2S16T01-canonical-perpetual-ongoing-tasks-story.md) | Last modified: 2026-06-03 12:29 UTC

- **E02:S16:T02** – Ad-hoc Kanban synchronization and hygiene (Perpetual) - 🔄 PERPETUAL (**v0.2.16.2+11** — E08:S03:T12 terminal prune; UKW -c drift repair) - [Task](epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T02-ad-hoc-kanban-synchronization-and-hygiene-perpetual.md) | [Story](epics/epic-02/story-16-perpetual-ongoing-workflow-operations.md) | [FR-023](fr-br/FR-023-update-kanban-workflow-ukw.md) | [—IPP—](../../implementation-cycles/IPP-E2S16T02-perpetual-task-inventory.md) | Last modified: 2026-06-13 16:36 UTC

- **E02:S16:T03** – Ad-hoc Documentation Maintenance (Perpetual) - 🔄 PERPETUAL (**v0.2.16.3+8**) - [Task](epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T03-ad-hoc-documentation-maintenance-perpetual.md) | [Story](epics/epic-02/story-16-perpetual-ongoing-workflow-operations.md) | [FR-124](fr-br/FR-124-meta-workflow-orchestration-composite-workflow-chains.md) | [—IPP—](../../implementation-cycles/IPP-E2S16T03-rehouse-workflow-perpetual-tasks.md) | Last modified: 2026-06-10 14:03 UTC

- **E02:S16:T04** – Ad-hoc Repository Infrastructure Maintenance (Perpetual) - 🔄 PERPETUAL (**v0.2.16.10+7**) - [Task](epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T04-ad-hoc-repository-infrastructure-maintenance-perpetual.md) | [Story](epics/epic-02/story-16-perpetual-ongoing-workflow-operations.md) | —No IPP— | Last modified: 2026-06-07 17:00 UTC

- **E02:S16:T05** – GitHub Actions CI health (Perpetual) - 🔄 PERPETUAL (**v0.2.16.5+10**) - [Task](epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T05-github-actions-ci-health-perpetual.md) | [FR-112](fr-br/FR-112-perpetual-github-ci-and-security-health-lanes.md) | [IPP-E02S16T05](../implementation-cycles/IPP-E02S16T05-github-actions-ci-health-perpetual-fr112.md) | [BR-104](fr-br/BR-104-codeql-cqg-green-does-not-imply-actions-ci-green.md) | [—IPP—](../../implementation-cycles/IPP-E02S16T05-github-actions-ci-health-perpetual-fr112.md) | Last modified: 2026-06-15 19:07 UTC

- **E02:S16:T06** – GitHub Security & Code Quality health (Perpetual) - 🔄 PERPETUAL (**v0.2.16.6+12** — Wave 7 maintainability burn-down) - [Task](epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T06-github-security-code-quality-health-perpetual.md) | [FR-112](fr-br/FR-112-perpetual-github-ci-and-security-health-lanes.md) | [—IPP—](../../implementation-cycles/IPP-E02S16T06-github-security-code-quality-health-perpetual-fr112.md) | Last modified: 2026-06-15 14:59 UTC

### Won't Have (W) - Deferred Tasks

- **E02:S16:T07** – Ad-hoc Documentation Maintenance (Perpetual) - ⏭️ SUPERSEDED (merged into **E02:S16:T03** per [FR-125](fr-br/FR-125-consolidate-e02s16t03-t07-documentation-maintenance-lanes.md), 2026-06-10) | [redirect](epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T07-ad-hoc-documentation-maintenance-perpetual.md) → [T03](epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T03-ad-hoc-documentation-maintenance-perpetual.md) | —No IPP— | Last modified: 2026-06-10 12:00 UTC


#### Epic 21 (E21) — full inventory: deferred / superseded (5 tasks)

- **E21:S04:T02** – Adapt UI/UX for different cultures (examples, imagery) - ⏭️ SUPERSEDED (**v0.21.4.2+1**, merged into E21:S04:T04) | [Task](epics/epic-21/story-04-cultural-adaptation/T02-adapt-uiux-for-different-cultures-examples-imagery.md) | [T04](epics/epic-21/story-04-cultural-adaptation/T04-adapt-content-and-examples-for-cultural-context.md) | [—IPP—](../../implementation-cycles/IPP-E21S04T02-supersede-merge-into-t04.md) | Last modified: 2026-06-10 09:21 UTC

- **E21:S08:T04** – Docusaurus public docs portal accessibility (Layer 2) - ⏸ DEFERRED (MEDIUM, ADR-025 Layer 2; after Layer 1 CLI @ v0.21.8.3+1) | [Task](epics/epic-21/story-08-accessibility/T04-docusaurus-public-docs-portal-accessibility.md) | [Story](epics/epic-21/story-08-accessibility.md) | [FR-115](fr-br/FR-115-accessibility-standards-compatibility.md) | [ADR-025](../../architecture/standards-and-adrs/ADR-025-layered-accessibility-strategy.md) | —No IPP— | Last modified: 2026-06-08 10:35 UTC

- **E21:S08:T05** – Markdown / kanban corpora accessibility (Layer 3) - ⏸ DEFERRED (MEDIUM, ADR-025 Layer 3) | [Task](epics/epic-21/story-08-accessibility/T05-markdown-and-kanban-documentation-structure.md) | [Story](epics/epic-21/story-08-accessibility.md) | [FR-115](fr-br/FR-115-accessibility-standards-compatibility.md) | [ADR-025](../../architecture/standards-and-adrs/ADR-025-layered-accessibility-strategy.md) | —No IPP— | Last modified: 2026-06-08 10:36 UTC

- **E21:S08:T06** – Agent workflow blocking-state accessibility (Layer 4) - ⏸ DEFERRED (MEDIUM, ADR-025 Layer 4) | [Task](epics/epic-21/story-08-accessibility/T06-agent-workflow-blocking-state-accessibility.md) | [Story](epics/epic-21/story-08-accessibility.md) | [FR-115](fr-br/FR-115-accessibility-standards-compatibility.md) | [ADR-025](../../architecture/standards-and-adrs/ADR-025-layered-accessibility-strategy.md) | —No IPP— | Last modified: 2026-06-08 10:36 UTC

- **E21:S08:T07** – Accessibility testing gates and adopter guidelines (Layer 5) - ⏸ DEFERRED (MEDIUM, ADR-025 Layer 5) | [Task](epics/epic-21/story-08-accessibility/T07-accessibility-testing-gates-and-adopter-guidelines.md) | [Story](epics/epic-21/story-08-accessibility.md) | [FR-115](fr-br/FR-115-accessibility-standards-compatibility.md) | [ADR-025](../../architecture/standards-and-adrs/ADR-025-layered-accessibility-strategy.md) | —No IPP— | Last modified: 2026-06-08 10:37 UTC





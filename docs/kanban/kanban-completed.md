---
lifecycle: evergreen
ttl_days: null
created_at: 2026-03-09T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# AI Dev Kit – Kanban Completed Tasks

**Last Updated:** 2026-06-10 (RW E21:S04:T03 — RTL support Arabic/Hebrew)
**Version:** v0.21.4.3+1

> **For MoSCOW prioritized tasks, see:** [`kboard.md`](kboard.md)  
> **For completed FR/BR/UXR intake items, see:** [`intake-completed.md`](intake-completed.md)
> **For Epic/Story/Task structure, see:** [`kanban-structure.md`](kanban-structure.md)  
> **For rules and explanations, see:** [`kanban-board-guide.md`](kanban-board-guide.md)

---

## 20 Most Recently Completed Tasks

#### **RW (2026-06-10)** — E21:S04:T03 @ **v0.21.4.3+1** (FR-006 Phase 2 — RTL support Arabic/Hebrew)

- **[E21:S04:T03](epics/epic-21/story-04-cultural-adaptation/T03-implement-rtl-support-right-to-left-for-arabichebrew.md)** — `RTL_LOCALES` / `is_rtl_locale` / CLI direction-aware formatting; `locale-rtl-conventions.md`; installer `_print_msg`; tests `test_locale_rtl_support.py`. **Completed:** `2026-06-10T09:52:07Z` | **Version:** `v0.21.4.3+1` | **Agent:** `RW E21:S04:T03 --art` | [FR-006](fr-br/FR-006-localization-language-selection-uk-us-english.md) | [—IPP—](../../implementation-cycles/IPP-E21S04T03-rtl-support-arabic-hebrew.md)

#### **RW (2026-06-10)** — E21:S06:T01 @ **v0.21.6.1+1** (FR-006 — Chinese Simplified zh-CN locale delivery)

- **[E21:S06:T01](epics/epic-21/story-06-cjk-languages-localization/T01-chinese-simplified-zh-cn-translation-files.md)** — Linguistic translation of kanban + workflow-mgt `locales/zh-CN/**`; registry `linguistic_status: complete`; greenfield sync; pytest contract. [FR-006](fr-br/FR-006-localization-language-selection-uk-us-english.md) · [—IPP—](../../implementation-cycles/IPP-E21S06T01-chinese-simplified-zh-cn-translation-files.md)

#### **UKW (2026-06-10)** — Board hygiene: archived terminal E05 FR-114 rows (already shipped)

- **[E05:S09:T15](epics/epic-05/story-09-docusaurus-documentation-portal/T15-docusaurus-adopter-public-publish-allowlist-fr114.md)** — Docusaurus adopter-public allowlist; ADR-024; Wave 2 @ **v0.5.9.15+2**. [FR-114](fr-br/FR-114-split-documentation-surfaces-docusaurus-public-notion-maintainer-kb.md) · [—IPP—](../../implementation-cycles/IPP-E05S09T15-docusaurus-adopter-public-publish-allowlist-fr114.md)
- **[E05:S08:T04](epics/epic-05/story-08-knowledge-base/T04-agent-notion-first-authoring-and-bootstrap-routing-fr114.md)** — Agent Notion-first authoring + bootstrap routing @ **v0.5.8.4+2**. [FR-114](fr-br/FR-114-split-documentation-surfaces-docusaurus-public-notion-maintainer-kb.md) · [—IPP—](../../implementation-cycles/IPP-E05S08T04-agent-notion-first-authoring-and-bootstrap-routing-fr114.md)
- **[E05:S08:T03](epics/epic-05/story-08-knowledge-base/T03-big-bang-notion-migration-maintainer-kb-fr114.md)** — Big-bang Notion maintainer KB migration @ **v0.5.8.3+3** (later superseded maintainer SoT by FR-121 T05). [FR-114](fr-br/FR-114-split-documentation-surfaces-docusaurus-public-notion-maintainer-kb.md) · [—IPP—](../../implementation-cycles/IPP-E05S08T03-big-bang-notion-migration-maintainer-kb-fr114.md)

#### **RW (2026-06-09)** — E21:S05:T01 @ **v0.21.5.1+1** (FR-006 — Spanish es locale delivery)

- **[E21:S05:T01](epics/epic-21/story-05-european-languages-localization/T01-spanish-es-translation-files.md)** — Linguistic translation of kanban + workflow-mgt `locales/es/**`; registry `linguistic_status: complete`; greenfield sync; pytest contract. [FR-006](fr-br/FR-006-localization-language-selection-uk-us-english.md) · [—IPP—](../../implementation-cycles/IPP-E21S05T01-spanish-es-translation-files.md)

#### **RW (2026-06-09)** — E21:S04:T01 @ **v0.21.4.1+1** (FR-006 Phase 2 — cultural requirements desk research)

- **[E21:S04:T01](epics/epic-21/story-04-cultural-adaptation/T01-research-cultural-requirements-for-target-locales.md)** — `locale-cultural-requirements.md` (nine-locale matrix + recommendations); `test_locale_cultural_requirements.py` (C1–C6); cross-links in rollout matrix and translatable inventory.
  **Completed:** `2026-06-09T21:04:40Z` | **Version:** `v0.21.4.1+1` | **Agent:** `IDW E21:S04:T01 --rw` | [FR-006](fr-br/FR-006-localization-language-selection-uk-us-english.md) | [—IPP—](../../implementation-cycles/IPP-E21S04T01-research-cultural-requirements-target-locales.md)

#### **RW (2026-06-09)** — E05:S08:T07 @ **v0.5.8.7+1** (FR-121 wave 3 — optional Obsidian editor profiles at greenfield install)

- **[E05:S08:T07](epics/epic-05/story-08-knowledge-base/T07-optional-obsidian-editor-profiles-greenfield-install-fr121.md)** — `--maintainer-editor-profile` installer flag; `documentation_surfaces` + `maintainer_editor_profile` in rw-config; Obsidian team/personal templates; `docs/maintainer/OBSIDIAN.md`. [FR-121](fr-br/FR-121-git-internal-maintainer-kb-oss-documentation-surfaces.md) · [—IPP—](../../implementation-cycles/IPP-E05S08T07-optional-obsidian-editor-profiles-greenfield-install-fr121.md)

#### **RW (2026-06-09)** — E05:S08:T06 @ **v0.5.8.6+1** (FR-121 wave 2 — ADR-026 + git-maintainer bootstrap)

- **[E05:S08:T06](epics/epic-05/story-08-knowledge-base/T06-adr-026-git-maintainer-authoring-bootstrap-fr121.md)** — ADR-026 two-surface model; `P-GIT-MAINTAINER`; manifest + rw-config schema; ADR-024/FR-114 supersession banners. [FR-121](fr-br/FR-121-git-internal-maintainer-kb-oss-documentation-surfaces.md) · [—IPP—](../../implementation-cycles/IPP-E05S08T06-adr-026-git-maintainer-authoring-bootstrap-fr121.md)

#### **RW (2026-06-09)** — E05:S08:T05 @ **v0.5.8.5+2** (FR-121 wave 1 — reverse Notion migration to git-internal maintainer KB)

- **[E05:S08:T05](epics/epic-05/story-08-knowledge-base/T05-reverse-notion-migration-git-internal-maintainer-kb-fr121.md)** — Restored 218 manifest paths from pre-stub git; `fr121-reverse-migration-manifest.json`; git SoT README. [FR-121](fr-br/FR-121-git-internal-maintainer-kb-oss-documentation-surfaces.md) · [—IPP—](../../implementation-cycles/IPP-E05S08T05-reverse-notion-migration-git-internal-maintainer-kb-fr121.md)

#### **RW (2026-06-09)** — E06:S09:T25 @ **v0.6.9.25+3** (Starborn attempt 2 closure — F9 v1 catalog triage)

- **[E06:S09:T25](epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T25-starborn-legacy-greenfield-install-diary-triage-uxr025.md)** — Attempt 2 forensic artifacts; triage **F9** (v1 packaged kanban vs v3.2); install SHA-256 verify docs.
  **Completed:** `2026-06-09T10:40:32Z` | **Version:** `v0.6.9.25+3` | **Agent:** `RW E06:S09:T25 --art` | [Attempt 02](../../../adk-install-into-sbl/attempt-02/greenfield-install-diary.md) | [Triage F9](../../knowledge/analysis/projects/starborn-legacy-install-triage-matrix.md)

#### **RW (2026-06-09)** — E06:S09:T25 @ **v0.6.9.25+2** (Starborn Legacy install diary — UXR-025)

- **[E06:S09:T25](epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T25-starborn-legacy-greenfield-install-diary-triage-uxr025.md)** — Triage matrix + greenfield orchestrator F4/F5 fix (`resolve_frameworks_base`, `--config`, `--non-interactive` forward) + install docs.
  **Completed:** `2026-06-09T09:11:54Z` | **Version:** `v0.6.9.25+2` | **Agent:** `RW E06:S09:T25 --art` | [UXR-025](fr-br/UXR-025-starborn-legacy-greenfield-install-diary.md) | [IPP](../../implementation-cycles/IPP-E06S09T25-starborn-legacy-greenfield-install-diary-triage-uxr025.md) | [Triage](../../knowledge/analysis/projects/starborn-legacy-install-triage-matrix.md)

#### **RW (2026-06-08)** — E21:S03:T07 @ **v0.21.3.7+1** (Phase 3 translation locale E2E tests; S03 closed)

- **[E21:S03:T07](epics/epic-21/story-03-translation-and-localisation/T07-test-translations-and-locale-support.md)** — `test_fr006_phase3_translation_locale_e2e.py` (P3E1–P3E11); parametrized scaffold-locale setup-path + fallback tests; `pytest -m fr006` green.
  **Completed:** `2026-06-08T14:30:00Z` | **Version:** `v0.21.3.7+1` | **Agent:** `RW E21:S03:T07 --art` | [FR-006](fr-br/FR-006-localization-language-selection-uk-us-english.md) | [IPP](../../../implementation-cycles/IPP-E21S03T07-test-translations-locale-support.md)

#### **RW (2026-06-08)** — E21:S03:T06 @ **v0.21.3.6+1** (translation completeness tracking)

- **[E21:S03:T06](epics/epic-21/story-03-translation-and-localisation/T06-implement-translation-completeness-tracking.md)** — `report_locale_completeness.py`, tier metrics, missing-translation alerts; `pytest -m fr006` green.

#### **RW (2026-06-08)** — E21:S03:T05 @ **v0.21.3.5+1** (translation management tools)

- **[E21:S03:T05](epics/epic-21/story-03-translation-and-localisation/T05-add-translation-management-tools.md)** — `validate_locale_translations.py`, `sync_locale_keys.py`, maintainer guide; `pytest -m fr006` green.
  **Completed:** `2026-06-08T13:09:04Z` | **Version:** `v0.21.3.5+1` | **Agent:** `RW E21:S03:T05 --art` | [FR-006](fr-br/FR-006-localization-language-selection-uk-us-english.md) | [IPP](../../../implementation-cycles/IPP-E21S03T05-translation-management-tools.md)

#### **RW (2026-06-08)** — E21:S09:T02 @ **v0.21.9.2+2** (bootstrap open-work refresh)

- **[E21:S09:T02](epics/epic-21/story-09-epic-housekeeping/T02-legacy-story-folder-rationalization.md)** — `AGENTS.md` + manifest `openWork` → E21:S03:T01; kboard version metadata sync.
  **Completed:** `2026-06-08T11:29:45Z` | **Version:** `v0.21.9.2+2` | **Agent:** `RW E21:S09:T02 --art`

#### **RW (2026-06-08)** — E21:S09:T02 @ **v0.21.9.2+1** (legacy story folder redirects)

- **[E21:S09:T02](epics/epic-21/story-09-epic-housekeeping/T02-legacy-story-folder-rationalization.md)** — Redirect stubs for S00/mis-numbered epic-21 story paths; `kanban-structure.md` defers to `Epic-21.md`.
  **Completed:** `2026-06-08T11:18:58Z` | **Version:** `v0.21.9.2+1` | **Agent:** `RW E21:S09:T02 --art`

#### **RW (2026-06-08)** — E21:S09:T01 @ **v0.21.9.1+1** (UKW Epic 21 housekeeping)

- **[E21:S09:T01](epics/epic-21/story-09-epic-housekeeping/T01-fr006-phase2-header-and-status-reconciliation.md)** — FR-006 Phase 2 header sync; Epic 21 kboard visibility (S03+/S09 admin/S08 deferred rows); S02 story COMPLETE.
  **Completed:** `2026-06-08T10:25:52Z` | **Version:** `v0.21.9.1+1` | **Agent:** `RW -k E21:S09:T01 --art` | [FR-006](fr-br/FR-006-localization-language-selection-uk-us-english.md)

#### **RW (2026-06-07)** — E21:S08:T03 @ **v0.21.8.3+1** (CLI accessibility Layer 1)

- **[E21:S08:T03](epics/epic-21/story-08-accessibility/T03-cli-and-terminal-output-accessibility.md)** — Text-first `print_*`, `NO_COLOR` / `--no-color`, stderr warnings, ASCII markers; [cli-accessibility-conventions.md](../../../governance/standards/cli-accessibility-conventions.md); [IPP-E21S08T03](../../../implementation-cycles/IPP-E21S08T03-cli-terminal-accessibility.md).

#### **RW (2026-06-07)** — E21:S02:T07 @ **v0.21.2.7+1** (translation fallback chain)

- **[E21:S02:T07](epics/epic-21/story-02-internationalisation-infrastructure/T07-set-up-translation-fallback-chain-selected-english-us-englis.md)** — ADR-024 fallback chain (`language_fallback_chain`, en-US step); locale-fallback-conventions policy.

#### **RW (2026-06-07)** — E21:S02:T06 @ **v0.21.2.6+1** (translation key system)

- **[E21:S02:T06](epics/epic-21/story-02-internationalisation-infrastructure/T06-implement-translation-key-system.md)** — `resolve_locale_key`, YAML catalog cache, `prompt_language_choice` key integration; locale-key-conventions policy.

#### **RW (2026-06-07)** — E21:S02:T05 @ **v0.21.2.5+1** (locale date/time/number formatting)

- **[E21:S02:T05](epics/epic-21/story-02-internationalisation-infrastructure/T05-configure-datetimenumber-formatting-per-locale.md)** — `locale_formatting.py` Babel wrappers + stdlib fallback; `format_for_project`; locale-formatting-conventions policy.

#### **RW (2026-06-07)** — E21:S02:T04 @ **v0.21.2.4+1** (language switching + CLI --locale)

- **[E21:S02:T04](epics/epic-21/story-02-internationalisation-infrastructure/T04-add-language-switching-functionality.md)** — `switch_locale`, `adk config locale`, `--locale` on init/installer, FR-006 config round-trip.

#### **RW (2026-06-07)** — E21:S02:T03 @ **v0.21.2.3+1** (locale detection + ADR-024 precedence)

- **[E21:S02:T03](epics/epic-21/story-02-internationalisation-infrastructure/T03-implement-locale-detection-browsersystem-locale.md)** — System/browser/env detection APIs; `resolve_language` precedence chain; locale-detection-conventions policy.

#### **RW (2026-06-07)** — E21:S02:T02 @ **v0.21.2.2+1** (locale manifest v2 + keys scaffold)

- **[E21:S02:T02](epics/epic-21/story-02-internationalisation-infrastructure/T02-set-up-translation-file-structure-localeslang.md)** — Manifest v2, en-GB/en-US `keys/` catalogs, `supported_locales` registry, structure conventions policy.

#### **RW (2026-06-07)** — E21:S02:T01 @ **v0.21.2.1+1** (ADR-024 i18n framework C1 hybrid)

- **[E21:S02:T01](epics/epic-21/story-02-internationalisation-infrastructure/T01-choose-i18n-frameworklibrary.md)** — i18n framework selection: evaluation matrix, ADR-024, IPP, S02:T02–T07 integration handoffs.

#### **RW (2026-06-07)** — E21:S01:T07 @ **v0.21.1.7+1** (FR-006 Phase 1 E2E tests)

- **[E21:S01:T07](epics/epic-21/story-01-language-selection-at-setup/T07-test-ukus-english-selection-and-content-generation.md)** — FR-006 Phase 1 E2E test suite (`test_fr006_phase1_e2e_localisation.py` E1–E8); E21:S01 story complete.
  **Completed:** `2026-06-07T16:28:44Z` | **Version:** `v0.21.1.7+1` | **Agent:** `RW E21:S01:T07 --art` | [IPP](../../implementation-cycles/IPP-E21S01T07-fr006-phase1-e2e-tests.md) | [FR-006](fr-br/FR-006-localization-language-selection-uk-us-english.md)

#### **RW (2026-06-07)** — E21:S01:T06 @ **v0.21.1.6+1** (content generation locale wiring)

- **[E21:S01:T06](epics/epic-21/story-01-language-selection-at-setup/T06-update-content-generation-to-use-language-preference-rw-temp.md)** — Wire RW installer scaffolds and kanban intake templates to locale manifest (`render_locale_text`, `resolve_kanban_intake_template`).
  **Completed:** `2026-06-07T10:57:19Z` | **Version:** `v0.21.1.6+1` | **Agent:** `RW E21:S01:T06 --art` | [IPP](../../implementation-cycles/IPP-E21S01T06-content-generation-locale-wiring.md) | [FR-006](fr-br/FR-006-localization-language-selection-uk-us-english.md)

#### **RW (2026-06-07)** — E21:S01:T05 @ **v0.21.1.5+1** (config read locale resolution)

- **[E21:S01:T05](epics/epic-21/story-01-language-selection-at-setup/T05-implement-configuration-persistence-ai-dev-kit-configyaml.md)** — Configuration read/resolve API (`read_localisation_config`, `resolve_locale_asset`).
  **Completed:** `2026-06-07T10:54:27Z` | **Version:** `v0.21.1.5+1` | **Agent:** `RW E21:S01:T05 --art` | [IPP](../../implementation-cycles/IPP-E21S01T05-config-read-locale-resolution.md) | [FR-006](fr-br/FR-006-localization-language-selection-uk-us-english.md)

#### **RW (2026-06-07)** — E21:S01:T04 @ **v0.21.1.4+1** (UK/US locale content MVP)

- **[E21:S01:T04](epics/epic-21/story-01-language-selection-at-setup/T04-create-ukus-english-content-variants-documentation-templates.md)** — Create UK/US English content variants — kanban locale manifest + 8 core templates; workflow-mgt scaffold fragments.
  **Completed:** `2026-06-07T10:49:24Z` | **Version:** `v0.21.1.4+1` | **Agent:** `RW E21:S01:T04 --art` | [IPP](../../implementation-cycles/IPP-E21S01T04-ukus-content-variants-mvp.md) | [FR-006](fr-br/FR-006-localization-language-selection-uk-us-english.md)

#### **RW (2026-06-07)** — E21:S01:T03 @ **v0.21.1.3+1** (RW installer language selection)

- **[E21:S01:T03](epics/epic-21/story-01-language-selection-at-setup/T03-add-language-selection-prompt-to-rw-installer-install-releas.md)** — Add language selection prompt to RW Installer (`install_release_workflow.py`) — language-first install + `ai-dev-kit-config.yaml`.
  **Completed:** `2026-06-07T10:43:33Z` | **Version:** `v0.21.1.3+1` | **Agent:** `RW E21:S01:T03 --art` | [IPP](../../implementation-cycles/IPP-E21S01T03-rw-installer-language-selection.md) | [FR-006](fr-br/FR-006-localization-language-selection-uk-us-english.md)

#### **RW (2026-06-07)** — E21:S01:T02 @ **v0.21.1.2+1** (CLI init language selection)

- **[E21:S01:T02](epics/epic-21/story-01-language-selection-at-setup/T02-add-language-selection-prompt-to-cli-tool-ai-dev-kit-init.md)** — Add language selection prompt to CLI tool (`ai-dev-kit init`) — language-first init + `ai-dev-kit-config.yaml`.
  **Completed:** `2026-06-07T10:33:49Z` | **Version:** `v0.21.1.2+1` | **Agent:** `RW E21:S01:T02 --art` | [IPP](../../implementation-cycles/IPP-E21S01T02-cli-init-language-selection.md) | [FR-006](fr-br/FR-006-localization-language-selection-uk-us-english.md)

#### **RW (2026-06-07)** — E21:S01:T01 @ **v0.21.1.1+2** (template language selection docs-first)

- **[E21:S01:T01](epics/epic-21/story-01-language-selection-at-setup/T01-add-language-selection-prompt-to-template-setup-github-templ.md)** — Add language selection prompt to template setup (GitHub template) — Step 0 post-template guide + `ai-dev-kit-config.example.yaml`.
  **Completed:** `2026-06-07T10:28:27Z` | **Version:** `v0.21.1.1+2` | **Agent:** `RW E21:S01:T01 --art` | [IPP](../../implementation-cycles/IPP-E21S01T01-template-language-selection-github.md) | [FR-006](fr-br/FR-006-localization-language-selection-uk-us-english.md)

#### **RW (2026-06-06)** — E10:S01 story sign-off @ **v0.10.1.10+2** (all tasks COMPLETE; RC **APPROVE** @ T06)

- **E10:S01** — Document Lifecycle Package Implementation Review — Story **COMPLETE** (T01–T10; RC **APPROVE**; handoff → E10:S02).
  **Completed:** `2026-06-06T16:34:00Z` | **Version:** `v0.10.1.10+2` | **Agent:** `RW E10:S01:T10 --art` | [Story](epics/epic-10/story-01-document-lifecycle-package-implementation-review.md) | [T06 RC](epics/epic-10/story-01-document-lifecycle-package-implementation-review/T06-define-rc-sign-off-criteria-and-remediation-tasks.md) | [Orchestration](../../implementation-cycles/E10S01-orchestration-plan.md)

- **[E10:S01:T10](epics/epic-10/story-01-document-lifecycle-package-implementation-review/T10-fix-document-lifecycle-validator.md)** — Story sign-off RW anchor (validator fix @ v0.10.1.10+1; kanban reconciliation @ +2).
  **Completed:** `2026-06-06T16:34:00Z` | **Version:** `v0.10.1.10+2` | **Agent:** `RW E10:S01:T10 --art` | [IPP-T10](../../implementation-cycles/IPP-E10S01T10-fix-document-lifecycle-validator.md)

- **[E10:S01:T10](epics/epic-10/story-01-document-lifecycle-package-implementation-review/T10-fix-document-lifecycle-validator.md)** — Fix DocumentLifecycleValidator: PyYAML import, five-field metadata enforcement, pytest TC1–TC8 green, greenfield mirror; closes GAP-DOCLIFE-TEST-001.
  **Completed:** `2026-06-06T16:05:00Z` | **Version:** `v0.10.1.10+1` | **Agent:** `RW E10:S01:T10 --art` | [IPP-T10](../../implementation-cycles/IPP-E10S01T10-fix-document-lifecycle-validator.md) | [T05 gap](epics/epic-10/story-01-document-lifecycle-package-implementation-review/T05-create-gap-log-and-risk-assessment.md)

- **[E10:S01:T09](epics/epic-10/story-01-document-lifecycle-package-implementation-review/T09-sync-architecture-adr-dual-sot.md)** — Sync architecture ADR dual SoT: ADR-023, package `policies/` SoT, `policy-salience-schema.md` packaged, mirror banners, salience cross-links, FR-110 greenfield re-sync; closes GAP-DOCLIFE-INTG-001.
  **Completed:** `2026-06-06T15:06:47Z` | **Version:** `v0.10.1.9+1` | **Agent:** `RW E10:S01:T09 --art` | [IPP-T09](../../implementation-cycles/IPP-E10S01T09-sync-architecture-adr-dual-sot.md) | [ADR-023](../../architecture/standards-and-adrs/ADR-023-doc-lifecycle-package-architecture-dual-sot.md)

- **[E08:S03:T17](epics/epic-08/story-03-automation-scripts/T17-local-code-quality-gate-cqg-fr113.md)** — Local Code Quality Gate (CQG) (FR-113): CodeQL engine, RW Step 9 advisory validator, 6 h monitor, ADR-022; verified post-merge **v0.8.3.17+4**.
  **Completed:** `2026-06-06T16:00:00Z` | **Version:** `v0.8.3.17+4` | **Agent:** `RW E08:S03:T17 --art` | [FR-113](fr-br/FR-113-local-code-quality-gate-cqg-fr113.md) | [ADR-022](../../architecture/standards-and-adrs/ADR-022-local-code-quality-gate-architecture.md) | [IPP](../../implementation-cycles/IPP-E08S03T17-local-code-quality-gate-cqg-fr113.md)

- **[E10:S01:T08](epics/epic-10/story-01-document-lifecycle-package-implementation-review/T08-implement-doc-housekeeping-workflow-and-scripts.md)** — Doc housekeeping workflow and scripts: DHKW YAML, five-field validator, reference-aware scanner, pytest (12 green), FR-110 mirror; closes GAP-DOCLIFE-STRUCT-001/002/003.
  **Completed:** `2026-06-06T15:04:48Z` | **Version:** `v0.10.1.8+1` | **Agent:** `RW E10:S01:T08 --art` | [IPP-T08](../../implementation-cycles/IPP-E10S01T08-doc-housekeeping-workflow-scripts.md) | [T05 gap](epics/epic-10/story-01-document-lifecycle-package-implementation-review/T05-create-gap-log-and-risk-assessment.md)

- **[E10:S01:T05](epics/epic-10/story-01-document-lifecycle-package-implementation-review/T05-create-gap-log-and-risk-assessment.md)** — Create gap log and risk assessment: 16 `GAP-DOCLIFE-*` entries consolidated from T01–T04; conditional RC posture; `validate_gap_log.py --strict` PASS.
  **Completed:** `2026-06-06T14:51:20Z` | **Version:** `v0.10.1.5+1` | **Agent:** `RW E10:S01:T05 --art` | [Gap log](epics/epic-10/story-01-document-lifecycle-package-implementation-review/T05-create-gap-log-and-risk-assessment.md) | [IPP-T05](../../implementation-cycles/IPP-E10S01T05-gap-log-risk-assessment.md)

- **[E10:S01:T04](epics/epic-10/story-01-document-lifecycle-package-implementation-review/T04-review-integrations-and-dependency-alignment.md)** — Review integrations and dependency alignment: companion integration-alignment-report (nine domains), task doc fleshed, V1–V10 verified; feeds T05 gap log.
  **Completed:** `2026-06-06T14:48:05Z` | **Version:** `v0.10.1.4+1` | **Agent:** `RW E10:S01:T04 --art` | [Report](epics/epic-10/story-01-document-lifecycle-package-implementation-review/integration-alignment-report.md) | [IPP-T04](../../implementation-cycles/IPP-E10S01T04-integration-dependency-alignment.md)

- **[E10:S01:T02](epics/epic-10/story-01-document-lifecycle-package-implementation-review/T02-inventory-package-components-and-map-to-expectations.md)** — Inventory package components and map to expectations: companion inventory map, task doc fleshed, V1–V8 verified; feeds T05 gap remediation.
  **Completed:** `2026-06-06T14:47:28Z` | **Version:** `v0.10.1.2+1` | **Agent:** `RW E10:S01:T02 --art` | [Inventory](epics/epic-10/story-01-document-lifecycle-package-implementation-review/component-inventory-map.md) | [IPP-T02](../../implementation-cycles/IPP-E10S01T02-component-inventory-map.md)

- **[E10:S01:T01](epics/epic-10/story-01-document-lifecycle-package-implementation-review/T01-establish-expectations-baseline-for-document-lifecycle-packa.md)** — Establish expectations baseline for Document Lifecycle package: companion baseline artefact, task doc fleshed, V1–V8 verified; Wave 2A gate complete.
  **Completed:** `2026-06-06T14:45:56Z` | **Version:** `v0.10.1.1+1` | **Agent:** `RW E10:S01:T01 --art` | [Baseline](epics/epic-10/story-01-document-lifecycle-package-implementation-review/expectations-baseline.md) | [IPP-T01](../../implementation-cycles/IPP-E10S01T01-expectations-baseline-doc-lifecycle.md)

- **[E10:S01:T07](epics/epic-10/story-01-document-lifecycle-package-implementation-review/T07-coordinator-orchestration-plan-and-epic-branch-bootstrap.md)** — Coordinator orchestration plan and epic branch bootstrap: E10S01 orchestration SoT, `epic/10-doc-lifecycle-framework`, triage wiring, kanban init.
  **Completed:** `2026-06-06T14:10:06Z` | **Version:** `v0.10.1.7+1` | **Agent:** `RW -k E10:S01:T07 --art --dpz` | [Orchestration](../../implementation-cycles/E10S01-orchestration-plan.md)

- **[E08:S03:T12](epics/epic-08/story-03-automation-scripts/T12-code-quality-maintainability-backlog-br099.md)** — Code Quality maintainability backlog (BR-099): waves 1–6 burn-down; operator dashboard **Good** @ `main` `ed379ab`; re-closed @ **v0.8.3.12+13**; handoff **E02:S16:T06**.
  **Completed:** `2026-06-07T18:06:22Z` | **Version:** `v0.8.3.12+13` | **Agent:** `RW E08:S03:T12 --art` | [BR-099](fr-br/BR-099-code-quality-maintainability-backlog.md) | [IPP](../../implementation-cycles/IPP-E08S03T12-code-quality-maintainability-backlog-br099.md)

- **[E08:S03:T14](epics/epic-08/story-03-automation-scripts/T14-code-quality-ai-suggestions-backlog-br101.md)** — Code Quality AI suggestions backlog (BR-101): wave-1 **12/14** apply; wave-2b **AI-VENDOR-TREE** 4/4; **F-SYNC-02** waiver; lag-accepted GH panel closure.
  **Completed:** `2026-06-06T13:09:50Z` | **Version:** `v0.8.3.14+5` | **Agent:** `RW E08:S03:T14 --art` | [BR-101](fr-br/BR-101-code-quality-ai-suggestions-backlog.md) | [IPP](../../implementation-cycles/IPP-E08S03T14-code-quality-ai-suggestions-backlog-br101.md)

- **[E08:S03:T13](epics/epic-08/story-03-automation-scripts/T13-code-quality-reliability-backlog-br100.md)** — Code Quality reliability backlog (BR-100): waves 1–3 burn-down (**133→28** open; **12** exit/quit fixed wave 3; **16** print → T12).
  **Completed:** `2026-06-06T13:02:41Z` | **Version:** `v0.8.3.13+4` | **Agent:** `RW E08:S03:T13 --art` | [BR-100](fr-br/BR-100-code-quality-reliability-backlog.md) | [IPP](../../implementation-cycles/IPP-E08S03T13-code-quality-reliability-backlog-br100.md)

- **[E05:S07:T01](epics/epic-05/story-07-policy-documentation-structure/T01-implement-policy-documents-machine-readable-salience-section.md)** — Policy Docs machine-readable salience section (FR-022): schema, template, guides, key policy updates.
  **Completed:** `2025-12-12T00:00:00Z` | **Version:** `v0.5.7.1+1` | **Agent:** `UKW -u` | [FR-022](fr-br/FR-022-policy-docs-machine-readable-salience.md) | [schema](../../architecture/standards-and-adrs/policy-salience-schema.md)

- **[E02:S16:T20](epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T20-restore-kboard-ipp-segment-uxr023.md)** — Restore kboard IPP segment on MoSCOW rows (UXR-023): normalizer, validator, corpus repair.
  **Completed:** `2026-06-05T19:45:00Z` | **Version:** `v0.2.16.20+2` | **Agent:** `RW E02:S16:T20 --art` | [UXR-023](fr-br/UXR-023-kboard-ipp-segment-regression.md) | [IPP](../../implementation-cycles/IPP-E02S16T20-restore-kboard-ipp-segment-uxr023.md)

- **[E02:S16:T21](epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T21-rw-local-release-default-no-push-uxr024.md)** — RW local-default no push (UXR-024): agent SoT, `--push` opt-in, batch-push runbook, packaged parity.
  **Completed:** `2026-06-05T15:22:51Z` | **Version:** `v0.2.16.21+1` | **Agent:** `RW E02:S16:T21 --art` (local) | [UXR-024](fr-br/UXR-024-rw-local-release-default-no-push-batch-operator-push.md)

- **[E02:S16:T19](epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T19-rw-dpz-short-flag-doc-policy-zero-uxr022.md)** — RW `--dpz` short flag for doc-policy-zero (UXR-022): parsers, tests, cheatsheet, agent SoT.
  **Completed:** `2026-06-05T15:12:49Z` | **Version:** `v0.2.16.19+2` | **Agent:** `RW E02:S16:T19 --art` | [UXR-022](fr-br/UXR-022-rw-doc-policy-zero-short-flag-dpz.md) | [IPP](../../implementation-cycles/IPP-E02S16T19-rw-dpz-short-flag-uxr022.md)

- **[E06:S09:T24](epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T24-acquisition-layer-adk-error-codes-fr111.md)** — Acquisition-layer ADK error codes (registry 1.1.0 I05/I06, `verify_vendor_tree.py`, CLI I06, doc-sync CI guard).
  **Completed:** `2026-06-05T15:30:00Z` | **Version:** `v0.6.9.24+2` | **Agent:** `RW E06:S09:T24 --art` | [T24](epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T24-acquisition-layer-adk-error-codes-fr111.md) | [FR-111](fr-br/FR-111-acquisition-layer-adk-error-codes-and-install-error-doc-hygiene.md) | [IPP](../../implementation-cycles/IPP-E06S09T24-acquisition-layer-adk-error-codes-fr111.md)

- **[E06:S09:T23](epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T23-greenfield-install-github-packages-delivery-uxr021.md)** — Greenfield GHCR delivery (`ghcr.io/rms-ltd/ai-dev-kit-greenfield`, FR-110-F5 tarball, ADR-021).
  **Completed:** `2026-06-05T14:30:00Z` | **Version:** `v0.6.9.23+3` | **Agent:** `RW E06:S09:T23 --art` | [T23](epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T23-greenfield-install-github-packages-delivery-uxr021.md) | [UXR-021](fr-br/UXR-021-greenfield-install-github-packages-delivery-channel.md) | [ADR-021](../../architecture/standards-and-adrs/ADR-021-greenfield-install-ghcr-delivery-channel.md)

- **[E06:S09:T21](epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T21-lean-adopter-distribution-footprint-fr110.md)** — Lean adopter distribution footprint (`greenfield-install/` tree, sync script, CI drift guard).
  **Completed:** `2026-06-05T10:00:22Z` | **Version:** `v0.6.9.21+4` | **Agent:** `RW E06:S09:T21 --art` | [T21](epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T21-lean-adopter-distribution-footprint-fr110.md) | [FR-110](fr-br/FR-110-lean-adopter-distribution-footprint-and-vendor-bundle.md)

- **[E06:S09:T22](epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T22-package-documentation-greenfield-install-alignment-fr110.md)** — Package documentation greenfield-install alignment (FR-110 framework READMEs + install guides).
  **Completed:** `2026-06-05T12:00:00Z` | **Version:** `v0.6.9.22+1` | **Agent:** `RW E06:S09:T22 --art` | [T22](epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T22-package-documentation-greenfield-install-alignment-fr110.md) | [FR-110](fr-br/FR-110-lean-adopter-distribution-footprint-and-vendor-bundle.md)

- **[E02:S14:T01](epics/epic-02/story-14-workflow-management-package-installation-evaluation/T01-enumerate-supported-installation-paths-for-workflow-manageme.md)** — Enumerate workflow-mgt installation paths (19-row matrix; two-phase acquisition/configuration model).
  **Completed:** `2026-06-05T08:02:29Z` | **Version:** `v0.2.14.1+1` | **Agent:** `RW E02:S14:T01 --art` | [Matrix](epics/epic-02/story-14-workflow-management-package-installation-evaluation/installation-paths-matrix.md) | [IPP](../../implementation-cycles/IPP-E02S14T01-enumerate-workflow-mgt-installation-paths.md)

- **[E02:S13:T10](epics/epic-02/story-13-workflow-management-package-implementation-review/T10-kanban-transform-consolidation.md)** — Kanban transform consolidation + `rw_config_loader` unification (GAP-INTG-001/002).
  **Completed:** `2026-06-05T07:38:22Z` | **Version:** `v0.2.13.10+1` | **Agent:** `RW E02:S13:T10 --art` | [T10](epics/epic-02/story-13-workflow-management-package-implementation-review/T10-kanban-transform-consolidation.md) | [IPP](../../implementation-cycles/IPP-E02S13T10-kanban-transform-consolidation-and-config-loader-unification.md) | [ADR-020](../../architecture/standards-and-adrs/ADR-020-kanban-transform-entrypoint-contract-and-rw-config-loader-unification.md)

#### **UKW -c archive batch (2026-06-05)** — E02:S13 story closure (T10 ledger backfill; row already pruned from active `kboard.md` at RW)

- **[E02:S13:T09](epics/epic-02/story-13-workflow-management-package-implementation-review/T09-fr050-workflows-directory-reorganization.md)** — FR-050 workflows directory reorganization (flat YAML stubs; nested SoT).
  **Completed:** `2026-06-05T18:30:00Z` | **Version:** `v0.2.13.9+1` | **Agent:** `RW E02:S13:T09 --art` | [T09](epics/epic-02/story-13-workflow-management-package-implementation-review/T09-fr050-workflows-directory-reorganization.md) | [IPP](../../implementation-cycles/IPP-E02S13T09-fr050-workflows-directory-reorganization.md) | [FR-050](fr-br/FR-050-workflows-directory-structure-reorganization.md)

- **[E02:S13:T06](epics/epic-02/story-13-workflow-management-package-implementation-review/T06-define-rc-sign-off-criteria-and-remediation-tasks.md)** — Workflow-mgt RC sign-off criteria and remediation (DEFER; T09/T10 filed).
  **Completed:** `2026-06-05T06:24:18Z` | **Version:** `v0.2.13.6+1` | **Agent:** `RW E02:S13:T06 --art` | [T06](epics/epic-02/story-13-workflow-management-package-implementation-review/T06-define-rc-sign-off-criteria-and-remediation-tasks.md) | [IPP](../../implementation-cycles/IPP-E02S13T06-rc-sign-off-remediation.md)

- **[E02:S13:T05](epics/epic-02/story-13-workflow-management-package-implementation-review/T05-create-gap-log-and-risk-assessment.md)** — Workflow-mgt gap log and risk assessment (16 gaps; conditional RC).
  **Completed:** `2026-06-05T06:06:01Z` | **Version:** `v0.2.13.5+1` | **Agent:** `RW E02:S13:T05 --art` | [gap log](epics/epic-02/story-13-workflow-management-package-implementation-review/T05-create-gap-log-and-risk-assessment.md) | [IPP](../../implementation-cycles/IPP-E02S13T05-gap-log-risk-assessment.md)

- **[E02:S13:T04](epics/epic-02/story-13-workflow-management-package-implementation-review/T04-review-integrations-and-dependency-alignment.md)** — Workflow-mgt integration and dependency alignment review.
  **Completed:** `2026-06-05T06:01:11Z` | **Version:** `v0.2.13.4+1` | **Agent:** `RW E02:S13:T04 --art` | [integration report](epics/epic-02/story-13-workflow-management-package-implementation-review/integration-alignment-report.md) | [IPP](../../implementation-cycles/IPP-E02S13T04-integration-dependency-alignment.md)

- **[E02:S13:T03](epics/epic-02/story-13-workflow-management-package-implementation-review/T03-validate-workflow-behavior-against-documented-guidance.md)** — Workflow-mgt behavior validation against documented guidance.
  **Completed:** `2026-06-05T05:55:07Z` | **Version:** `v0.2.13.3+1` | **Agent:** `RW E02:S13:T03 --art` | [validation report](epics/epic-02/story-13-workflow-management-package-implementation-review/workflow-behavior-validation-report.md) | [IPP](../../implementation-cycles/IPP-E02S13T03-workflow-behavior-validation.md)

- **[E02:S13:T02](epics/epic-02/story-13-workflow-management-package-implementation-review/T02-inventory-package-components-and-map-to-expectations.md)** — Workflow-mgt component inventory mapped to T01 expectations.
  **Completed:** `2026-06-05T14:00:00Z` | **Version:** `v0.2.13.2+1` | **Agent:** `RW E02:S13:T02 --art` | [component-inventory-map](epics/epic-02/story-13-workflow-management-package-implementation-review/component-inventory-map.md) | [IPP](../../implementation-cycles/IPP-E02S13T02-inventory-package-components-map.md)

- **[E05:S01:T44](epics/epic-05/story-01-fr-repo/T44-rw-temporary-execution-log-for-recovery-and-forensics.md)** — **FR-044** RW temporary execution log (incremental dual-write logging).
  **Completed:** `2026-06-05T05:44:26Z` | **Version:** `v0.5.1.44+1` | **Agent:** `RW E05:S01:T44 --art` | [FR-044](fr-br/FR-044-rw-temporary-execution-log-for-recovery-and-forensics.md) | [IPP](../../implementation-cycles/IPP-E05S01T44-rw-temporary-execution-log.md) | [ADR-011](../../architecture/standards-and-adrs/ADR-011-workflow-step-tracker-and-agent-run-log.md)

- **[E04:S11:T07](epics/epic-04/story-11-kanban-granularity-discrete-task-docs/T07-planning-spec-tests-impl.md)** — **FR-016** embedded → discrete task doc migration (Waves 0–5).
  **Completed:** `2026-06-05T05:12:40Z` | **Version:** `v0.4.11.7+16` | **Agent:** `RW E04:S11:T07 --art` | [FR-016](fr-br/FR-016-kanban-granularity-discrete-task-docs.md) | [IPP](../../implementation-cycles/IPP-E04S11T07-fr016-discrete-task-docs-migration.md) | [migration guide](epics/epic-04/story-11-kanban-granularity-discrete-task-docs/migration-guide.md)

- **[E04:S15:T05](epics/epic-04/story-15-procedural-task-template-generation-and-hybrid-strategy/T05-hybrid-strategy-maintainer-client-docs-fr029.md)** — **FR-029** hybrid task template docs.
  **Completed:** `2026-06-05T12:30:00Z` | **Version:** `v0.4.15.5+1` | **Agent:** `RW E04:S15:T05 --art` | [FR-029](fr-br/FR-029-procedural-task-template-generation-hybrid-strategy.md) | [IPP](../../implementation-cycles/IPP-E04S15T05-hybrid-strategy-docs-and-generator-integration.md)

- **[E02:S11:T14](epics/epic-02/story-11-intake-workflow-automation/T14-github-actions-workflow-optimization-br052.md)** — **BR-052** GHA workflow optimization.
  **Completed:** `2026-06-05T20:00:00Z` | **Version:** `v0.2.11.14+2` | **Agent:** `RW` | [BR-052](fr-br/BR-052-github-actions-workflow-optimization.md)

- **[E02:S11:T13](epics/epic-02/story-11-intake-workflow-automation/T13-github-actions-workflow-spam-emails-br051.md)** — **BR-051** GHA workflow spam hygiene.
  **Completed:** `2026-06-05T19:30:00Z` | **Version:** `v0.2.11.13+3` | **Agent:** `RW` | [BR-051](fr-br/BR-051-github-actions-workflow-spam-emails.md)

- **[E02:S01:T06](epics/epic-02/story-01-rw-agent-execution-and-docs/T06-validate-version-bump-story-detection-br001.md)** — **BR-001** validate_version_bump path/Code detection.
  **Completed:** `2026-06-05T19:15:00Z` | **Version:** `v0.2.1.6+2` | **Agent:** `RW` | [BR-001](fr-br/BR-001-validate-version-bump-epic-story-detection-bug.md)

#### **UKW -c archive batch (2026-06-05)** — doc-terminal rows pruned from active `kboard.md` C-band

- **[E02:S07:T01](epics/epic-02/story-07-trigger-aware-release-workflow.md)** — **FR-013** trigger-aware RW verification closure (parallel E04 wave merge).
  **Completed:** `2026-06-05T03:55:22Z` | **Version:** `v0.2.16.4+7` | **Agent:** `UKW -c` | [FR-013](fr-br/FR-013-trigger-aware-release-workflow.md)

- **[E02:S07:T05](epics/epic-02/story-07-trigger-aware-release-workflow.md)** — **FR-014** RW trigger for FR/BR commits verification closure.
  **Completed:** `2026-06-05T03:55:22Z` | **Version:** `v0.2.16.4+7` | **Agent:** `UKW -c` | [FR-014](fr-br/FR-014-rw-trigger-for-fr-br-commits.md)

- **[E04:S14:T04](epics/epic-04/story-14-kanban-framework-maintenance/T04-kanban-policy-task-prioritisation-queue-stack-fr037.md)** — **FR-037** Kanban policy task prioritisation queue stack.
  **Completed:** `2026-06-05T03:55:22Z` | **Version:** `v0.5.1.37+3` | **Agent:** `UKW -c` | [FR-037](fr-br/FR-037-kanban-policy-task-prioritisation-queue-stack.md)

- **[E02:S11:T11](epics/epic-02/story-11-intake-workflow-automation/Task-011-Fix-CHANGELOG-Ordering-Violations.md)** — **BR-002** changelog validator ordering.
  **Completed:** `2026-06-05T03:55:22Z` | **Version:** `v0.2.11.11+1` | **Agent:** `UKW -c` | [BR-002](fr-br/BR-002-changelog-validator-ordering-bug.md)

- **[E02:S10:T00](epics/epic-02/story-10-doc-init-build-zero-for-new-est.md)** — **FR-017** doc-init build (+0) policy hardening.
  **Completed:** `2026-06-05T03:55:22Z` | **Version:** `v0.2.10.7+1` | **Agent:** `UKW -c` | [FR-017](fr-br/FR-017-versioning-policy-hardening-doc-init-build.md)

- **[E02:S10:T06](epics/epic-02/story-10-doc-init-build-zero-for-new-est.md)** — **FR-020** version validator abstract-space awareness.
  **Completed:** `2026-06-05T03:55:22Z` | **Version:** `v0.2.10.7+1` | **Agent:** `UKW -c` | [FR-020](fr-br/FR-020-version-validator-abstract-space-awareness.md)

- **[E02:S11:T00](epics/epic-02/story-11-intake-workflow-automation.md)** — **FR-019** intake workflow automation.
  **Completed:** `2026-06-05T03:55:22Z` | **Version:** `v0.2.11.12+1` | **Agent:** `UKW -c` | [FR-019](fr-br/FR-019-intake-workflow-automation.md)

*(Seven additional pruned rows were already present in this ledger: E04:S11:T04, E04:S10:T01, E04:S09:T06, E04:S09:T05, E07:S05:T03, E02:S06:T01, E06:S08:T01.)*

#### **Epic 2: Workflow Management Framework (Story 1 — RW Agent Execution & Docs)**
- **[E02:S01:T24](epics/epic-02/story-01-rw-agent-execution-and-docs/T24-rw-build-increment-enforcement-and-tag-immutability-br097.md)** — **BR-097**: RW BUILD increment enforcement + release-tag immutability (`resolve_rw_build.py`, tag immutability validator, agent FORBIDDEN contract); **+3** task_touch registry finalize, release contract validator, strategy-aware collision recovery.
  **Completed:** `2026-06-05T06:13:58Z` | **Version:** `v0.2.1.24+3` | **Agent:** `RW E02:S01:T24 --art` | [BR-097](fr-br/BR-097-rw-agent-reuses-tagged-build-and-force-moves-release-tags.md) | [ADR-019](../../architecture/standards-and-adrs/ADR-019-rw-build-increment-and-tag-immutability.md) | [IPP](../../implementation-cycles/IPP-E02S01T24-rw-build-increment-tag-immutability.md)

#### **Epic 4: Kanban Framework (Story 19 — FR/BR/UXR abstract governance)**
- **[E04:S19:T12](epics/epic-04/story-19-fr-br-uxr-abstract-governance-and-intake/T12-fbuboard-necessity-investigation-uxr020.md)** — **UXR-020 R3**: Single-board consolidation — `kboard` sole active MoSCOW; `fbuboard` deprecated stub; V-band; kanban-root `fr-br-uxr-*` aliases removed (Waves 1–4).
  **Completed:** `2026-06-05T01:42:57Z` | **Version:** `v0.4.19.12+4` | **Agent:** `RW --art` | [UXR-020](fr-br/UXR-020-fbuboard-necessity-after-task-fbu-wiring.md) | [ADR-018](../../architecture/standards-and-adrs/ADR-018-single-kanban-board-consolidation.md) | [IPP](../../implementation-cycles/IPP-E04S19T12-single-board-consolidation-uxr020.md)

#### **Epic 1: AI Dev Kit Core (Story 2 — Package & Repo Architecture)**
- **[E01:S02:T13](epics/epic-01/story-02-package-and-repo-architecture/T13-readme-template-best-readme-fr002.md)** — **FR-002**: README hygiene — removed book-workspace branding from public README.
  **Completed:** `2026-06-05T01:29:00Z` | **Version:** `v0.1.2.13+1` | **Agent:** `RW --art` | [FR-002](fr-br/FR-002-update-been-there-readme.md)

#### **Epic 8: Tooling & Automation (Story 3 — Automation Scripts)**
- **[E08:S03:T10](epics/epic-08/story-03-automation-scripts/T10-codeql-incomplete-url-substring-sanitization-br096.md)** — **BR-096**: CodeQL incomplete URL substring sanitization — `urlparse` hostname check in portal test.
  **Completed:** `2026-06-05T01:06:43Z` | **Version:** `v0.8.3.10+1` | **Agent:** `RW --art` | [BR-096](fr-br/BR-096-codeql-incomplete-url-substring-sanitization.md)

- **[E08:S03:T09](epics/epic-08/story-03-automation-scripts/T09-codeql-insecure-temporary-file-mktemp-br095.md)** — **BR-095**: CodeQL insecure `tempfile.mktemp` — replace with `NamedTemporaryFile`.
  **Completed:** `2026-06-05T01:03:42Z` | **Version:** `v0.8.3.9+1` | **Agent:** `RW --art` | [BR-095](fr-br/BR-095-codeql-insecure-temporary-file-mktemp.md)

#### **Epic 7: Codebase Maintenance (Story 7 — Code Reviews)**
- **[E07:S07:T03](epics/epic-07/story-07-code-reviews/T03-workflow-validator-slug-path-resolution-br091.md)** — **BR-091**: Workflow validator slug path resolution (`workflow-mgt` first, legacy fallback).
  **Completed:** `2026-06-05T00:34:25Z` | **Version:** `v0.7.7.3+1` | **Agent:** `RW E07:S07:T03` | [BR-091](fr-br/BR-091-workflow-validator-legacy-workflow-mgt-path-hardcoded.md) | [IPP](../../implementation-cycles/IPP-E07S07T03-workflow-validator-slug-path-resolution-br091.md)

#### **Epic 5: Documentation Management (Story 9 — Docusaurus Documentation Portal)**
- **[E05:S09:T13](epics/epic-05/story-09-docusaurus-documentation-portal/T13-docusaurus-faster-package-alignment-br090.md)** — **BR-090**: Docusaurus `@docusaurus/faster@3.10.1` + package.json alignment.
  **Completed:** `2026-06-05T00:30:47Z` | **Version:** `v0.5.9.13+1` | **Agent:** `RW E05:S09:T13` | [BR-090](fr-br/BR-090-docusaurus-faster-missing-dependabot-310-lockfile-drift.md) | [IPP](../../implementation-cycles/IPP-E05S09T13-docusaurus-faster-package-alignment.md)

- **[E05:S09:T14](epics/epic-05/story-09-docusaurus-documentation-portal/T14-docusaurus-ci-workflow-deduplication-br093.md)** — **BR-093**: Docusaurus CI build/deploy deduplication — merged workflow + artifact handoff ([ADR-017](../../architecture/standards-and-adrs/ADR-017-docusaurus-ci-build-deploy-topology.md)).
  **Completed:** `2026-06-05T00:23:30Z` | **Version:** `v0.5.9.14+2` | **Agent:** `RW E05:S09:T14` | [BR-093](fr-br/BR-093-docusaurus-ci-duplicate-build-deploy-job-waste.md) | [IPP](../../implementation-cycles/IPP-E05S09T14-docusaurus-ci-workflow-deduplication.md)

#### **Epic 8: Tooling & Automation (Story 3 — Automation Scripts)**
- **[E08:S03:T08](epics/epic-08/story-03-automation-scripts/T08-codeql-git-tag-handler-syntax-br094.md)** — **BR-094**: CodeQL `git_tag_handler.py` indentation syntax fix.
  **Completed:** `2026-06-05T00:10:09Z` | **Version:** `v0.8.3.8+1` | **Agent:** `RW --art` | [BR-094](fr-br/BR-094-codeql-git-tag-handler-syntax-error.md)

- **[E08:S03:T07](epics/epic-08/story-03-automation-scripts/T07-tests-ci-requests-dependency-br092.md)** — **BR-092**: Tests CI `requests` dependency — `setup.py` [dev] extras + `tests/requirements.txt` parity.
  **Completed:** `2026-06-04T23:51:26Z` | **Version:** `v0.8.3.7+1` | **Agent:** `RW` | [BR-092](fr-br/BR-092-tests-ci-missing-requests-dev-dependency.md) | [IPP](../../implementation-cycles/IPP-E08S03T07-tests-ci-requests-dependency-br092.md)

#### **Epic 4: Kanban Framework (Story 19 — FR/BR/UXR Abstract Governance)**
- **[E04:S19:T11](epics/epic-04/story-19-fr-br-uxr-abstract-governance-and-intake/T11-kanban-epic-story-path-lowercase-naming-uxr017.md)** — **UXR-017**: Kanban epic/story path lowercase naming — kit shipped; GH #12–#20 closed.
  **Completed:** `2026-06-04T23:07:14Z` | **Version:** `v0.4.19.11+1` | **Agent:** `UKW -c` | [UXR-017](fr-br/UXR-017-kanban-epic-story-path-lowercase-naming.md) | [IPP](../../implementation-cycles/IPP-E04S19T11-kanban-epic-story-path-lowercase-naming.md)

#### **Epic 6: Framework Management (Story 9 — Installation)**
- **[E06:S09:T16](epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T16-rw-install-lowercase-fresh-kanban-patterns-br086.md)** — **BR-086**: RW install lowercase fresh kanban patterns & sign-off — [#17](https://github.com/RMS-Ltd/ai-dev-kit/issues/17) closed.
  **Completed:** `2026-06-04T23:09:08Z` | **Version:** `v0.6.9.16+3` | **Agent:** `RW --art` | [BR-086](fr-br/BR-086-rw-install-lowercase-fresh-kanban-patterns-signoff.md) | [IPP-E6S9T16](../../implementation-cycles/IPP-E06S09T16-br086-lowercase-fresh-kanban-patterns.md)

#### **Epic 8: Tooling & Automation (Story 3 — Automation Scripts)**
- **[E08:S03:T04](epics/epic-08/story-03-automation-scripts/T04-ci-test-workflow-pytest-remediation-br058.md)** — **BR-058**: Repo-wide Tests CI workflow + pytest remediation.
  **Completed:** `2026-06-04T22:32:54Z` | **Version:** `v0.8.3.4+1` | **Agent:** `RW` | [BR-058](fr-br/BR-058-ci-test-workflow-missing-and-pytest-failures.md) | [IPP](../../implementation-cycles/IPP-E08S03T04-ci-test-workflow-pytest-remediation-br058.md)

#### **Epic 9: Release Candidate Readiness (Story 1 — RC Readiness Gap Analysis)**
- **[E09:S01:T03](epics/epic-09/story-01-rc-readiness-gap-analysis/T03-gap-analysis-fr032.md)** — **FR-032.3**: RC gap comparison — T01 inventory, T02 RC=1 criteria, gap matrix report.
  **Completed:** `2026-06-04T22:15:00Z` | **Version:** `v0.9.1.3+1` | **Agent:** `RW` | [FR-032](fr-br/FR-032-release-candidate-readiness-gap-analysis.md) | [Report](epics/epic-09/story-01-rc-readiness-gap-analysis/T03-gap-comparison-fr032-report.md) | [IPP](../../implementation-cycles/IPP-E09S01T03-gap-comparison-fr032.md)

#### **Epic 1: AI Dev Kit Core (Story 2 — Package & Repo Architecture)**
- **[E01:S02:T14](epics/epic-01/story-02-package-and-repo-architecture/T14-dependency-tracking-adopters-fr003.md)** — **FR-003**: Adopter external resource dependency tracking (guide + copy-paste templates).
  **Completed:** `2026-06-04T19:57:56Z` | **Version:** `v0.1.2.14+1` | **Agent:** `RW` | [FR-003](fr-br/FR-003-dependency-tracking-in-adopting-projects.md) | [IPP](../../implementation-cycles/IPP-E01S02T14-adopter-external-dependency-tracking.md)

#### **Epic 2: Workflow Management (Story 16 — Perpetual)**
- **[E02:S16:T18](epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T18-ukw-lean-active-board-contract-fr109.md)** — **FR-109**: UKW lean active board contract — validator, Gate 11, dual-source parity.
  **Completed:** `2026-06-04T22:15:00Z` | **Version:** `v0.2.16.18+1` | **Agent:** `RW` | [FR-109](fr-br/FR-109-ukw-lean-active-board-contract.md)

#### **Epic 6: Framework Management (Story 9 — Installation)**
- **[E06:S09:T10](epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T10-kanban-install-datetime-utcnow-br081.md)** — **BR-081**: Kanban install `datetime.utcnow()` deprecation fix.
  **Completed:** `2026-06-04T18:04:56Z` | **Version:** `v0.6.9.10+2` | **Agent:** `RW` | [BR-081](fr-br/BR-081-kanban-install-datetime-utcnow-deprecated.md) | [#13](https://github.com/RMS-Ltd/ai-dev-kit/issues/13)

- **[E06:S09:T20](epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T20-install-setup-error-code-registry-fr108.md)** — **FR-108**: Install/setup `ADK-*` error code registry + emission + docs.
  **Completed:** `2026-06-04T17:32:25Z` | **Version:** `v0.6.9.20+2` | **Agent:** `RW` | [FR-108](fr-br/FR-108-install-setup-error-code-registry-and-emission.md) | [IPP-E6S9T20](../../implementation-cycles/IPP-E06S09T20-install-setup-error-code-registry-fr108.md)

- **[E06:S09:T19](epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T19-rw-install-version-file-scaffold-br088.md)** — **BR-088**: RW mode C `version_file` scaffold when no `src/`.
  **Completed:** `2026-06-04T17:08:38Z` | **Version:** `v0.6.9.19+1` | **Agent:** `RW` | [BR-088](fr-br/BR-088-rw-install-mode-c-missing-version-file-scaffold.md) | [IPP-E6S9T19](../../implementation-cycles/IPP-E06S09T19-br088-version-file-scaffold.md)

- **[E06:S09:T18](epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T18-br087-framework-slug-install-closure.md)** — **BR-087** wave 2: framework slug install closure (registry, GitHub release).
  **Completed:** `2026-06-04T16:00:30Z` | **Version:** `v0.6.9.18+2` | **Agent:** `RW` | [BR-087](fr-br/BR-087-framework-install-directory-slug-mismatch.md) | [IPP-E6S9T18](../../implementation-cycles/IPP-E06S09T18-br087-framework-slug-install-closure.md)

- **[E06:S09:T17](epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T17-framework-install-directory-slugs-br087.md)** — **BR-087** wave 1: framework install directory slugs.
  **Completed:** `2026-06-04T12:53:00Z` | **Version:** `v0.6.9.17+1` | **Agent:** `RW` | [BR-087](fr-br/BR-087-framework-install-directory-slug-mismatch.md)

#### **Epic 2: Workflow Management (Story 16 — Perpetual operations)**
- **[E02:S16:T02](epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T02-inventory-and-classify-workflow-perpetual-tasks.md)** — Perpetual task inventory and classification (IPP).
  **Completed:** `2026-04-20T18:20:00Z` | **Version:** (inventory IPP) | **Agent:** `UKW` | [IPP-E2S16T2](../../implementation-cycles/IPP-E2S16T02-perpetual-task-inventory.md)

#### **Epic 3: Numbering & Versioning (Story 2 — Cookbook)**
- **[E03:S02:T12](epics/epic-03/story-02-versioning-cookbook-and-examples/T12-implement-task-touch-semver-mapping-mode.md)** — **FR-045** / **FR-046** / **BR-061**: Task-touch SemVer collision remediation wave 2.
  **Completed:** `2026-06-04T22:00:00Z` | **Version:** `v0.3.2.12+4` | **Agent:** `RW` | [FR-045](fr-br/FR-045-adr-002-task-touch-derived-mapping.md) · [FR-046](fr-br/FR-046-rw-semver-tag-task-touch-mode.md) · [BR-061](fr-br/BR-061-semver-task-touch-counter-increments-too-often.md) | [IPP-E3S2T12](../../implementation-cycles/IPP-E03S02T12-task-touch-semver-collision-hardening.md)

#### **Epic 5: Documentation Management (Story 1 — FR Repo)**
- **[E05:S09:T12](epics/epic-05/story-09-docusaurus-documentation-portal/T12-changelog-directory-consolidation-uxr018.md)** — **UXR-018**: Changelog directory consolidation — retired `docs/changelog/` and knowledge mirror; single pillar `docs/changelog-and-release-notes/`.
  **Completed:** `2026-06-04T14:35:00Z` | **Version:** `v0.5.9.12+3` | **Agent:** `RW` | [UXR-018](fr-br/UXR-018-changelog-directory-consolidation.md) | [IPP](../../implementation-cycles/IPP-E05S09T12-changelog-directory-consolidation.md) | [Remediation](../../maintenance/coordinate-remediation-uxr018-e05s09t12.md)

#### **Epic 6: Framework Management (Story 9 — Installation)**
- **[E06:S09:T15](epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T15-install-setup-interactive-feedback-external-semver-uxr016.md)** — **UXR-016**: Install/setup interactive feedback shows external SemVer (banners + telemetry; reclassified from FR-108).
  **Completed:** `2026-06-04T12:00:00Z` | **Version:** `v0.6.9.15+2` (docs rewire) | **Agent:** `RW` | [UXR-016](fr-br/UXR-016-install-setup-interactive-feedback-external-semver-version.md) | [IPP-E6S9T15](../../implementation-cycles/IPP-E06S09T15-install-setup-interactive-feedback-external-semver.md)

- **[E06:S09:T14](epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T14-rw-install-story-pattern-loop-br085.md)** — **BR-085**: RW mode C story pattern prompt loop after fresh kanban (`{story:03d}` validation + epic-only escape).
  **Completed:** `2026-06-03T23:00:21Z` | **Version:** `v0.6.9.14+1` | **Agent:** `RW` | [BR-085](fr-br/BR-085-rw-install-story-pattern-placeholder-loop-fresh-kanban.md)

#### **Epic 10: Document Lifecycle Framework (Story 1 — Package implementation review)** ✅ COMPLETE (`v0.10.1.10+2`)
- **E10:S01** — Document Lifecycle Package Implementation Review — Story sign-off (T01–T10; RC **APPROVE** @ T06; HIGH gaps remediated T08–T10).
  **Completed:** `2026-06-06T16:34:00Z` | **Version:** `v0.10.1.10+2` | **Agent:** `RW E10:S01:T10 --art` | [Story](epics/epic-10/story-01-document-lifecycle-package-implementation-review.md) | [Orchestration](../../implementation-cycles/E10S01-orchestration-plan.md)
- **[E10:S01:T10](epics/epic-10/story-01-document-lifecycle-package-implementation-review/T10-fix-document-lifecycle-validator.md)** — Fix DocumentLifecycleValidator (GAP-DOCLIFE-TEST-001).
  **Completed:** `2026-06-06T16:05:00Z` | **Version:** `v0.10.1.10+1` | **Agent:** `RW E10:S01:T10 --art` | [IPP](../../implementation-cycles/IPP-E10S01T10-fix-document-lifecycle-validator.md)
- **[E10:S01:T09](epics/epic-10/story-01-document-lifecycle-package-implementation-review/T09-sync-architecture-adr-dual-sot.md)** — Sync architecture ADR dual SoT (GAP-DOCLIFE-INTG-001).
  **Completed:** `2026-06-06T15:06:47Z` | **Version:** `v0.10.1.9+1` | **Agent:** `RW E10:S01:T09 --art` | [ADR-023](../../architecture/standards-and-adrs/ADR-023-doc-lifecycle-package-architecture-dual-sot.md)
- **[E10:S01:T08](epics/epic-10/story-01-document-lifecycle-package-implementation-review/T08-implement-doc-housekeeping-workflow-and-scripts.md)** — Doc housekeeping workflow and scripts (GAP-DOCLIFE-STRUCT-001/002/003).
  **Completed:** `2026-06-06T15:04:48Z` | **Version:** `v0.10.1.8+1` | **Agent:** `RW E10:S01:T08 --art` | [IPP](../../implementation-cycles/IPP-E10S01T08-doc-housekeeping-workflow-scripts.md)
- **[E10:S01:T06](epics/epic-10/story-01-document-lifecycle-package-implementation-review/T06-define-rc-sign-off-criteria-and-remediation-tasks.md)** — RC sign-off criteria and remediation (**APPROVE**).
  **Completed:** `2026-06-06T16:05:00Z` | **Version:** `v0.10.1.6+4` | **Agent:** `RW E10:S01:T06 --art` | [IPP](../../implementation-cycles/IPP-E10S01T06-rc-sign-off-remediation.md)

#### **Epic 2: Workflow Management Framework (Story 13 — Package implementation review)** ✅ COMPLETE (`v0.2.13.10+1`)
- **[E02:S13:T10](epics/epic-02/story-13-workflow-management-package-implementation-review/T10-kanban-transform-consolidation.md)** — Kanban transform consolidation + `rw_config_loader` unification (GAP-INTG-001/002).
  **Completed:** `2026-06-05T07:38:22Z` | **Version:** `v0.2.13.10+1` | **Agent:** `RW E02:S13:T10 --art` | [IPP](../../implementation-cycles/IPP-E02S13T10-kanban-transform-consolidation-and-config-loader-unification.md) | [ADR-020](../../architecture/standards-and-adrs/ADR-020-kanban-transform-entrypoint-contract-and-rw-config-loader-unification.md)
- **[E02:S13:T09](epics/epic-02/story-13-workflow-management-package-implementation-review/T09-fr050-workflows-directory-reorganization.md)** — **FR-050**: Workflows directory reorganization (flat YAML stubs; nested SoT).
  **Completed:** `2026-06-05T18:30:00Z` | **Version:** `v0.2.13.9+1` | **Agent:** `RW E02:S13:T09 --art` | [FR-050](fr-br/FR-050-workflows-directory-structure-reorganization.md) | [IPP](../../implementation-cycles/IPP-E02S13T09-fr050-workflows-directory-reorganization.md)
- **[E02:S13:T08](epics/epic-02/story-13-workflow-management-package-implementation-review/T08-sync-packaged-workflows-with-live-repo-implementation.md)** — **FR-106**: Sync packaged workflows with live repo (YAML, registry, dual-source RW/UKW parity).
  **Completed:** `2026-06-03T21:00:00Z` | **Version:** `v0.2.13.8+2` | **Agent:** `RW` | [FR-106](fr-br/FR-106-packaged-workflows-sync-with-live-repo-implementation.md) | [IPP-E2S13T8](../../implementation-cycles/IPP-E02S13T08-sync-packaged-workflows-live-spec.md)

#### **Epic 7: Codebase Maintenance (Story 7 — Code Reviews)**
- **[E07:S07:T01](epics/epic-07/story-07-code-reviews/T01-comprehensive-workflow-machinery-code-review.md)** — **FR-107**: Workflow machinery code review report (severity-ranked findings).
  **Completed:** `2026-06-03T20:28:00Z` | **Version:** `v0.7.7.1+1` | **Agent:** `RW` | [FR-107](fr-br/FR-107-comprehensive-workflow-machinery-code-review.md) | [IPP-E7S7T1](../../implementation-cycles/IPP-E07S07T01-workflow-machinery-code-review.md)

#### **Epic 6: Framework Management (Story 9 — Installation)**
- **[E06:S09:T13](epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T13-rw-install-mode-c-rw-config-generation-br084.md)** — **BR-084**: RW mode C `task_doc_pattern` + `fr_br_root`.
  **Completed:** `2026-06-03T19:55:09Z` | **Version:** `v0.6.9.13+2` | **Agent:** `RW` | [BR-084](fr-br/BR-084-rw-install-mode-c-missing-task-doc-pattern.md)
- **[E06:S09:T12](epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T12-rw-install-pattern-defaults-br083.md)** — **BR-083**: RW mode C kanban pattern defaults.
  **Completed:** `2026-06-03T19:50:30Z` | **Version:** `v0.6.9.12+2` | **Agent:** `RW` | [BR-083](fr-br/BR-083-rw-install-default-patterns-mismatch-fresh-kanban-layout.md)
- **[E06:S09:T07](epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T07-kanban-fresh-install-structure-template-missing-br078.md)** — **BR-078**: Ship `KANBAN_STRUCTURE_TEMPLATE`; fresh install SUCCESS when board + epics.
  **Completed:** `2026-06-03T20:25:00Z` | **Version:** `v0.6.9.7+2` | **Agent:** `RW` | [BR-078](fr-br/BR-078-kanban-fresh-install-structure-template-missing.md) | [IPP-E6S9T7](../../implementation-cycles/IPP-E06S09T07-br078-kanban-structure-template-missing.md)
- **[E06:S09:T11](epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T11-rw-install-pyyaml-preflight-br082.md)** — **BR-082**: RW install PyYAML preflight (`--check-deps`, INSTALL Step 3b).
  **Completed:** `2026-06-03T19:19:22Z` | **Version:** `v0.6.9.11+2` | **Agent:** `RW` | [BR-082](fr-br/BR-082-rw-install-missing-pyyaml-preflight.md) | [IPP-E6S9T11](../../implementation-cycles/IPP-E06S09T11-br082-rw-install-pyyaml-preflight.md)
- **[E06:S09:T09](epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T09-kanban-fresh-mode-validation-br080.md)** — **BR-080**: Fresh kanban install on empty repo without `--force` (skeleton-before-validate).
  **Completed:** `2026-06-03T19:15:00Z` | **Version:** `v0.6.9.9+2` | **Agent:** `RW` | [BR-080](fr-br/BR-080-kanban-fresh-mode-validation-requires-force-on-empty-repo.md) | [IPP-E6S9T9](../../implementation-cycles/IPP-E06S09T09-br080-fresh-mode-empty-repo-validation.md)

#### **Epic 8: Tooling & Automation (Story 3 — Automation scripts)**
- **[E08:S03:T06](epics/epic-08/story-03-automation-scripts/T06-dependabot-enablement-fr105.md)** — **FR-105**: Dependabot pip + portal npm, security updates, npm audit triage.
  **Completed:** `2026-06-03T16:00:00Z` | **Version:** `v0.8.3.6+2` | **Agent:** `RW` | [FR-105](fr-br/FR-105-dependabot-dependency-security-automation.md) | [IPP-E8S3T6](../../implementation-cycles/IPP-E08S03T06-dependabot-enablement-fr105.md)
- **[E08:S03:T05](epics/epic-08/story-03-automation-scripts/T05-python-minimum-version-fr104-br077.md)** — **FR-104** / **BR-077**: Python 3.11+ minimum policy alignment.
  **Completed:** `2026-06-03T15:00:00Z` | **Version:** `v0.8.3.5+2` | **Agent:** `RW` | [FR-104](fr-br/FR-104-python-minimum-version-policy-alignment.md) | [BR-077](fr-br/BR-077-documented-python-38-contradicts-repo-310-requirement.md) | [IPP-E8S3T5](../../implementation-cycles/IPP-E08S03T05-python-minimum-version-fr104-br077.md)

#### **Epic 2: Workflow Management Framework (Story 15 — IPW governance)**
- **[E02:S15:T01](epics/epic-02/story-15-ipw-governance-and-publication-contract/T01-ipw-docusaurus-filing-contract-and-backfill-br066.md)** — **BR-066** Phase 3: corpus tail wired (`--audit-inventory` **0** unwired); BR-066 **RESOLVED**.
  **Completed:** `2026-06-03T14:30:00Z` | **Version:** `v0.2.15.1+3` | **Agent:** `RW` | [BR-066](fr-br/BR-066-ipw-missing-docusaurus-filing-for-planning-artifacts.md) | [IPP-E2S15T1-br066-corpus-tail-phase3](../../implementation-cycles/IPP-E02S15T01-br066-corpus-tail-phase3.md)

#### **Epic 2: Workflow Management Framework (Story 16 — Perpetual workflow ops)**
- **[E02:S16:T13](epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T13-br059-ukw-moscow-full-story-task-coverage.md)** — **BR-059**: UKW MoSCOW full open-task coverage per story (Part B.1 + validator).
  **Completed:** `2026-06-03T12:00:00Z` | **Version:** `v0.2.16.13+1` | **Agent:** `UKW` | [BR-059](fr-br/BR-059-ukw-moscow-incomplete-story-task-coverage.md) | [IPP-E2S16T13](../../implementation-cycles/IPP-E02S16T13-br059-ukw-moscow-full-story-coverage.md)

#### **Epic 2: Workflow Management Framework (Story 15 — IPW governance and publication contract)**
- **[E02:S15:T01](epics/epic-02/story-15-ipw-governance-and-publication-contract/T01-ipw-docusaurus-filing-contract-and-backfill-br066.md)** — **BR-066** Phase 2: bulk publication audit, validator hardening, targeted backfill, IPP.
  **Completed:** `2026-06-02T12:49:39Z` | **Version:** `v0.2.15.1+2` | **Agent:** `UKW -c` | [BR-066](fr-br/BR-066-ipw-missing-docusaurus-filing-for-planning-artifacts.md) | [IPP](../../implementation-cycles/IPP-E02S15T01-br066-corpus-tail-phase3.md)

#### **Epic 7: Codebase Maintenance (Story 1 — maintenance tasks)**
- **[E07:S01:T09](epics/epic-07/story-01-codebase-maintenance-tasks/E07S01T09-kanban-template-governance.md)** — UXR-005 MoSCOW spacing validator, corpus pass, RW/UKW Gate 10.
  **Completed:** `2026-06-01T18:00:00Z` | **Version:** `v0.7.1.9+5` | **Agent:** `IPW` | [UXR-005](fr-br/UXR-005-kanban-board-formatting-and-governance.md) | [IPP-E7S1T9](../../implementation-cycles/IPP-E07S01T09-kanban-template-governance-uxr005.md) | [log](../../maintenance/logs/uxr-005-spacing-20260601.md)

#### **Epic 4: Kanban Framework (Story 19 — FR/BR/UXR abstract governance)**
- **[E04:S19:T08](epics/epic-04/story-19-fr-br-uxr-abstract-governance-and-intake/T08-fr072-approach-d-phase-d2-d4-migration-and-doc-sweep.md)** — FR-072 Approach D D2–D4; ADR-014; merged T07/FR-021 supersession.
  **Completed:** `2026-06-01T18:40:00Z` | **Version:** `v0.4.19.8+2` | **Agent:** `RW` | [FR-072](fr-br/FR-072-uniform-repository-abstract-space-kanban-rules.md) | [ADR-014](../../architecture/standards-and-adrs/ADR-014-repository-abstract-space-fr072-approach-d.md) | [IPP-E4S19T8](../../implementation-cycles/IPP-E04S19T08-fr072-approach-d-d2-d4-migration-and-doc-sweep.md)
- **[E04:S19:T07](epics/epic-04/story-19-fr-br-uxr-abstract-governance-and-intake/T07-fr021-repository-pattern-supersession-fr072-reconciliation.md)** — FR-021 supersession (merged into T08).
  **Completed:** `2026-06-01T18:40:00Z` | **Version:** `v0.4.19.8+2` | **Agent:** `RW` | [FR-021](fr-br/FR-021-fr-br-uxr-repository-stories.md)

#### **Epic 6: Framework Management (Story 7 — ADK implementation analysis)**
- **[E06:S07:T107](epics/epic-06/story-07-adk-implementation-analysis-and-package-management/T107-ide-command-whitelist-optimization.md)** — IDE command whitelist — ADR-013 catalog, validator, Cursor maintainer playbook.
  **Completed:** `2026-05-30T23:59:00Z` | **Version:** `v0.6.7.107+3` | **Agent:** `RW` | [ADR-013](../../architecture/standards-and-adrs/ADR-013-ide-command-allowlist-catalog-and-enforcement.md) | [IPP-E6S7T107](../../implementation-cycles/IPP-E06S07T107-ide-command-whitelist-optimization.md)

#### **Epic 2: Workflow Management (Story 16 — Perpetual workflow ops)**
- **[E02:S16:T17](epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T17-agent-bootstrap-and-task-routing-fr103.md)** — **FR-103**: Agent bootstrap and task routing — ADR-012, single-step `AGENTS.md`, manifest mirror.
  **Completed:** `2026-05-30T22:30:00Z` | **Version:** `v0.2.16.17+2` | **Agent:** `UKW Agent` | [FR-103](fr-br/FR-103-agent-bootstrap-and-task-routing.md) | [ADR-012](../../architecture/standards-and-adrs/ADR-012-agent-bootstrap-and-task-routing.md) | [IPP-E2S16T17](../../implementation-cycles/IPP-E02S16T17-agent-bootstrap-and-task-routing-fr103.md)

#### **Epic 2: Workflow Management (Story 1 — RW agent execution)**
- **[E02:S01:T23](epics/epic-02/story-01-rw-agent-execution-and-docs/T23-tool-agnostic-workflow-step-tracking-and-runlogs.md)** — Tool-agnostic workflow step tracking + agent run log v1 (ADR-011).
  **Completed:** `2026-05-30T17:02:00Z` | **Version:** `v0.2.1.23+1` | **Agent:** `UKW Agent` | [ADR-011](../../architecture/standards-and-adrs/ADR-011-workflow-step-tracker-and-agent-run-log.md) | [IPP-E2S1T23](../../implementation-cycles/IPP-E2S01T23-tool-agnostic-workflow-step-tracking-runlogs.md)

#### **Epic 2: Workflow Management (Story 16 — Perpetual workflow ops)**
- **[E02:S16:T16](epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T16-ukw-archive-completed-board-rows-fr102.md)** — **FR-102**: UKW archive completed (`UKW -c`) — ADR-010, agent SoT, Option A prune gating.
  **Completed:** `2026-05-30T16:30:00Z` | **Version:** `v0.2.16.16+2` | **Agent:** `UKW Agent` | [FR-102](fr-br/FR-102-ukw-archive-completed-board-rows.md) | [ADR-010](../../architecture/standards-and-adrs/ADR-010-ukw-archive-completed-c-flag.md) | [IPP-E2S16T16](../../implementation-cycles/IPP-E02S16T16-ukw-archive-completed-fr102.md)

#### **Epic 4: Kanban Framework (Story 19 — Abstract governance)**
- **[E04:S19:T10](epics/epic-04/story-19-fr-br-uxr-abstract-governance-and-intake/T10-e7-s00-detasking-abstract-space-enforcement-br076.md)** — **BR-076**: E7:S00 abstract-only detasking; historical UXR anchors; intake S00 ban.
  **Completed:** `2026-05-30T13:28:56Z` | **Version:** `v0.4.19.10+2` | **Agent:** `RW` | [BR-076](fr-br/BR-076-e7-s00-must-not-host-concrete-tasks.md) | [IPP-E4S19T10](../../implementation-cycles/IPP-E04S19T10-e7-s00-detasking-br076.md)

#### **Epic 5: Documentation Management (Story 1 — FR Repo)**
- **[E05:S01:T46](epics/epic-05/story-01-fr-repo/T46-rw-semver-tag-task-touch-mode.md)** — **FR-046**: Dual-version RW SemVer task-touch tagging — closure wave audit + IPP.
  **Completed:** `2026-05-30T08:55:34Z` | **Version:** `v0.5.1.46+7` | **Agent:** `RW` | [FR-046](fr-br/FR-046-rw-semver-tag-task-touch-mode.md) | [IPP-E5S1T46](../../implementation-cycles/IPP-E5S01T46-fr046-closure-wave.md)

- **[E05:S01:T74](epics/epic-05/story-01-fr-repo/T74-kanban-intake-atomic-kg-r2-kg-r6-governance.md)** — **FR-074**: Kanban intake atomic KG-R2 / semantic KG-R6 governance.
  **Completed:** `2026-05-29T00:00:00Z` | **Version:** `v0.5.1.74+3` | **Agent:** `RW` | [FR-074](fr-br/FR-074-kanban-intake-atomic-kg-r2-kg-r6-governance.md)

#### **Epic 7: Codebase Maintenance (Story 1)**
- **[E07:S01:T11](epics/epic-07/story-01-codebase-maintenance-tasks/T11-consolidate-governance-under-docs-governance-fr101.md)** — **FR-101**: Consolidate governance under `docs/governance/` (Waves 0–F; ADR-007).
  **Completed:** `2026-05-29T21:30:00Z` | **Version:** `v0.7.1.11+8` | **Agent:** `RW` | [FR-101](fr-br/FR-101-consolidate-governance-under-docs-governance.md) | [IPP-E7S1T11](../../implementation-cycles/IPP-E7S01T11-consolidate-governance-under-docs-governance.md)

- **[E07:S01:T06](epics/epic-07/story-01-codebase-maintenance-tasks/T06-update-changelog-workflow.md)** — **FR-057**: Update Changelog Workflow (UCW/CMW scope).
  **Completed:** `2026-03-16T17:00:00Z` | **Version:** `v0.7.1.7+4` | **Agent:** `RW` | [FR-057](fr-br/FR-057-update-changelog-workflow.md)

#### **Epic 2: Workflow management (Story 1)**
- **[E02:S01:T08](epics/epic-02/story-01-rw-agent-execution-and-docs.md)** — **FR-024**: RW Step 9.6 IDE/linter check before commit (story-level task).
  **Completed:** `2026-05-29T00:00:00Z` | **Version:** `v0.2.1.8+1` | **Agent:** `RW` | [FR-024](fr-br/FR-024-ide-linter-check-before-commit-in-release-workflow.md)

#### **Epic 5: Documentation Management (Story 1 — FR Repo)**
- **[E05:S01:T31](epics/epic-05/story-01-fr-repo/T31-multi-agent-coordination-feasibility-investigation.md)** — **FR-031**: Multi-agent coordination feasibility — **WON'T HAVE** (deferred off active board).
  **Completed:** `2026-05-29T00:00:00Z` | **Version:** `v0.5.1.31+0` | **Agent:** `Maintainer` | [FR-031](fr-br/FR-031-multi-agent-coordination-feasibility-investigation.md)

#### **Epic 5: Documentation Management (Story 1 — FR Repo)**
- **[E05:S01:T62](epics/epic-05/story-01-fr-repo/T62-github-release-installation-experience.md)** — **FR-062**: install receipt JSON, release CI workflow, installer hardening (published artifacts may follow).
  **Completed:** `2026-05-29T16:00:00Z` | **Version:** `v0.5.1.62+1` | **Agent:** `RW` | [—IPP—](../../implementation-cycles/IPP-E5S01T62-github-release-install-fr062.md)

#### **Epic 4: Intelligent epic matching (Story 8)**
- **[E04:S08:T07](epics/epic-04/story-08-intelligent-epic-matching-canonical-adoption/T07-task-splitting-across-multiple-canonical-epics-fr-011.md)** — **FR-011**: multi-epic task split engine, CLI, intake hook, tests.
  **Completed:** `2026-05-29T15:30:00Z` | **Version:** `v0.4.8.7+1` | **Agent:** `RW` | [—IPP—](../../implementation-cycles/IPP-E4S08T07-task-split-multi-epic-fr011.md)

#### **Epic 2: Workflow Management Framework (Story 16 — Perpetual)**
- **[E02:S16:T07](epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T07-ukw-extension-for-fr-br-uxr-temporal-tracking-fr050.md)** — **FR-050**: UKW FBU temporal sync, `intake-completed` dashboard, agent docs + skill wiring.
  **Completed:** `2026-05-29T15:15:00Z` | **Version:** `v0.2.16.7+1` | **Agent:** `RW` | [—IPP—](../../implementation-cycles/IPP-E2S16T07-ukw-fbu-temporal-tracking-fr050.md)

#### **Epic 2: Workflow management (Story 1)**
- **[E02:S01:T22](epics/epic-02/story-01-rw-agent-execution-and-docs/T22-rw-perpetual-task-version-py-build-increment-br075.md)** — **BR-075**: perpetual RW `VERSION_BUILD` must increment in `version_file` (validator fail-closed).
  **Completed:** `2026-05-29T15:00:00Z` | **Version:** `v0.2.1.22+1` | **Agent:** `RW` | [—IPP—](../../implementation-cycles/IPP-E2S01T22-rw-perpetual-version-py-build-br075.md)

#### **Epic 6: Installation and adopter integration (Story 9)**
- **[E06:S09:T02](epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T02-brownfield-modular-adopter-integration-fr081.md)** — **FR-081**: brownfield modular adoption — INSTALL chapter, matrices, worked example, installer messaging.
  **Completed:** `2026-05-29T12:30:00Z` | **Version:** `v0.6.9.2+2` | **Agent:** `RW` | [—IPP—](../../implementation-cycles/IPP-E6S09T02-brownfield-modular-adopter-integration-fr081.md)

- **[E06:S09:T03](epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T03-installation-canonical-repo-alignment-fr082.md)** — **FR-082**: bootstrap public [`RMS-Ltd/ai-dev-kit`](https://github.com/RMS-Ltd/ai-dev-kit) + rewire canonical install/docs URLs.
  **Completed:** `2026-05-28T17:25:00Z` | **Version:** `v0.6.9.3+2` | **Agent:** `RW`

#### **Epic 1: AI Dev Kit Core (Story 4 — Repository branding; FR-099 phases 0–4)**
- **[E01:S04:T07](epics/epic-01/story-04-repository-branding-and-renaming/T07-fr099-phase4-rewire-and-verify.md)** — **FR-099 Phase 4**: rewire install URLs + public smoke; FR-099 IMPLEMENTED.
  **Completed:** `2026-05-26T16:15:00Z` | **Version:** `v0.1.4.7+2` | **Agent:** `RW` | [—IPP—](../../implementation-cycles/IPP-E1S04-fr099-book-private-public-migration.md)

- **[E01:S04:T06](epics/epic-01/story-04-repository-branding-and-renaming/T06-fr099-phase3-public-ai-dev-kit-rebirth.md)** — **FR-099 Phase 3**: public [`earlution/ai-dev-kit`](https://github.com/earlution/ai-dev-kit) bootstrap (orphan + replay from `f21bac102`).
  **Completed:** `2026-05-26T16:01:04Z` | **Version:** `v0.1.4.6+2` | **Agent:** `RW` | [—IPP—](../../implementation-cycles/IPP-E1S04-fr099-book-private-public-migration.md)

- **[E01:S04:T05](epics/epic-01/story-04-repository-branding-and-renaming/T05-fr099-phase2-book-extraction-genesis.md)** — **FR-099 Phase 2**: book extraction genesis on private `hf-ai-dev-kit` (genesis RW **v0.1.4.3+1**; kanban init **v0.1.4.5+1**).
  **Completed:** `2026-05-26T12:17:16Z` | **Version:** `v0.1.4.5+1` | **Agent:** `RW` | [—IPP—](../../implementation-cycles/IPP-E1S04-fr099-book-private-public-migration.md)

- **[E01:S04:T04](epics/epic-01/story-04-repository-branding-and-renaming/T04-fr099-phase1-privatize-rename-hf-ai-dev-kit.md)** — **FR-099 Phase 1**: privatize + rename to `RMS-Ltd/hf-ai-dev-kit`.
  **Completed:** `2026-05-26T00:00:00Z` | **Version:** `v0.1.4.4+1` | **Agent:** `RW -k` | [—IPP—](../../implementation-cycles/IPP-E1S04-fr099-book-private-public-migration.md)

- **[E01:S04:T03](epics/epic-01/story-04-repository-branding-and-renaming/T03-fr099-phase0-inventory-adr-approval.md)** — **FR-099 Phase 0**: inventory + ADR-006 outline; E01:S04:T02 superseded; phase split **v0.1.4.3+3**.
  **Completed:** `2026-05-26T00:00:00Z` | **Version:** `v0.1.4.3+3` | **Agent:** `RW -k` | [—IPP—](../../implementation-cycles/IPP-E1S04-fr099-book-private-public-migration.md)

#### **Epic 6: Framework Management (Story 9 — Installation and adopter integration)**
- **[E06:S09:T06](epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T06-ecc-harness-phases-2-5-fr098.md)** — **FR-098 phases 2–5**: bridge validator, optional install helper, hooks/AgentShield docs, cheatsheet; dogfood T8 dry-run + validators PASS; `--copy-bridge` fix.
  **Completed:** `2026-05-26T14:59:56Z` | **Version:** `v0.6.9.6+3` | **Agent:** `RW`

- **[E06:S09:T05](epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T05-adk-workflow-skill-pack-ecc-fr098.md)** — **FR-098 Phase 1**: ADK ECC workflow skill pack (`adk-*` skills), `validate_adk_ecc_skill_pack.py`, pytest coverage, IPP + integration spec §10; SemVer collision remediation formalized under RW `--art`.
  **Completed:** `2026-05-26T13:13:00Z` | **Version:** `v0.6.9.5+3` | **Agent:** `RW`

- **[E06:S09:T04](epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T04-ecc-harness-layer-phase0-compatibility-fr098.md)** — **FR-098 Phase 0**: compatibility evaluation matrix, bridge template, Phase 1 **GO** decision; archived via UKW (no dedicated RW release).
  **Completed:** `2026-05-26T12:00:00Z` | **Version:** `Phase 0 complete` | **Agent:** `UKW`

#### **Epic 2: Workflow Management Framework (Story 16 — Perpetual Ongoing Workflow Operations)**
- **[E02:S16:T12](epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T12-ipw-adr-necessity-checklist-fr100.md)** — **FR-100**: IPW Phase 5.0 ADR necessity gate; policy `ipw-adr-necessity-checklist.md`; IPP §2.5; Phase 9 validation; FR-042 step 4.5.
  **Completed:** `2026-05-26T14:15:00Z` | **Version:** `v0.2.16.12+2` | **Agent:** `RW`

- **[E02:S16:T11](epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T11-ipw-documentation-phases-update-create-and-housing-fr096.md)** — **FR-096**: IPW mandatory Phases 5–6 (documentation update/create + housing); IPP §5–§7; ten-phase `/ipw`; aligned FR-042, template, gates, and policy.
  **Completed:** `2026-05-20T08:43:35Z` | **Version:** `v0.2.16.11+1` | **Agent:** `RW`

#### **Epic 9: Release Candidate Readiness (Story 5 — Canonical E/S/T Review and Refinement)**
- **[E09:S05:T04](epics/epic-09/story-05-canonical-est-review-and-refinement/T04-kanban-naming-hygiene-and-directory-systematic-cleanup-uxr011.md)** — UXR-011: Kanban naming hygiene and directory systematic cleanup. Systematically cleaned up naming and structural hygiene issues across the entire `docs/kanban/` directory tree. Renamed 51 stale Txxx files to Txx (2-digit, zero-padded), reconciled 21 duplicate story files across Epics 5/6/7/9, removed duplicate task files in epic-02/story-002, resolved zero-padding issue (epic-07/story-004 → story-004), updated 34+ markdown files with corrected internal links, amended kanban governance policy with explicit naming convention, created regression validator (`validate_kanban_naming.py`), and verified zero defects post-cleanup. All 10 acceptance criteria satisfied.
  **Completed:** `2026-05-18T00:00:00Z` | **Version:** `v0.9.5.4+2` | **Agent:** `IPW`

#### **Epic 5: Documentation Management (Story 1 — FR Repo)**
- **[E05:S01:T56](epics/epic-05/story-01-fr-repo/T56-standardize-packaged-workflow-documentation-and-instructions.md)** — FR-056 standardize packaged workflow documentation and instructions. Fixed `validate-workflow-docs.py` section-extraction bug (plain-text `## ` headings falsely reported missing, invisible U+FE0F variation selector). Created `release-workflow/README.md` from canonical template (17 steps, triggers `RW`/`RW -k`/`RW -d`). Repaired 18+ broken internal links across 9 workflow READMEs. Brought `implementation-cycle-workflow/README.md` into full template compliance. All 11 packaged workflow READMEs pass structural validation with 0 errors and 0 warnings. Updated FR-056, task doc, and kboard to reflect 11-workflow reality.  
  **Completed:** `2026-05-15T00:00:00Z` | **Version:** `v0.5.1.56+1` | **Agent:** `IPW`

#### **Epic 4: Agentic Intelligence (Story 10 — Agentic Kanban Task Creation)**
- **[E04:S10:T01](epics/epic-04/story-10-agentic-kanban-task-creation-from-fr-br.md)** — FR-012 agentic kanban task creation from intake documents. Design document created: `agentic-fr-br-analysis-workflow-design.md`. Intelligent epic/story mapping, template-based task creation, and task contextualization framework implemented.  
  **Completed:** `2026-05-15T00:00:00Z` | **Version:** `v0.4.10.1+0` | **Agent:** `RW Agent`

#### **Epic 4: Bug Fixes and Agentic Intelligence (Story 9)**
- **[E04:S09:T06](epics/epic-04/story-09-bug-fixes-and-agentic-intelligence.md)** — FR-010 implement actual agentic intelligence for task mapping. Foundation implemented with extensible framework for LLM integration. Enhanced keyword extraction, intelligent task-to-story mapping with confidence scores, explanation generation for mapping decisions. Integrated into `migrate_structure.py` for canonical adoption mode.  
  **Completed:** `2026-05-15T00:00:00Z` | **Version:** `v0.4.9.1+1` | **Agent:** `RW Agent`

- **[E04:S09:T05](epics/epic-04/story-09-bug-fixes-and-agentic-intelligence.md)** — BR-008 remove arbitrary 80% threshold contradicting agentic intelligence. Removed all blocking threshold-based logic from `migrate_structure.py`. Updated `analyze_structure.py` to process all semantic matches. Display logic shows all matches (informational only).  
  **Completed:** `2026-05-15T00:00:00Z` | **Version:** `v0.4.9.1+1` | **Agent:** `RW Agent`

- **[E04:S09:T01](epics/epic-04/story-09-bug-fixes-and-agentic-intelligence.md)** — BR-007 fix multiple kanban package installation defects. Fixed missing `Tuple` import in `analyze_structure.py`. Fixed semantic matcher regex optional group handling. Added `canonical_adoption` mode to `migrate_structure.py`. Fixed analysis recommendation logic.  
  **Completed:** `2026-05-15T00:00:00Z` | **Version:** `v0.4.9.1+1` | **Agent:** `RW Agent`

#### **Epic 4: Migration Support (Story 7)**
- **[E04:S07:T02](epics/epic-04/story-07-migration-support-and-installation-modes.md)** — FR-007 migration utilities and installation modes. Implemented `migrate_structure.py` (backups, migration, preserve forensic markers, all modes). Implemented `install_kanban_framework.py` (interactive mode selection, Fresh/Migration/Update/Hybrid). Timestamp-based backup directories.  
  **Completed:** `2026-05-15T00:00:00Z` | **Version:** `v0.4.7.2+1` | **Agent:** `RW Agent`

- **[E04:S07:T01](epics/epic-04/story-07-migration-support-and-installation-modes/T01-br006-detection-analysis-verification-closure.md)** — BR-006 detection/analysis utilities for existing structures. Implemented `detect_existing_structure.py` (scans epic directories, detects documents, identifies tasks, generates report). Implemented `analyze_structure.py` (maps to E/S/T format, identifies conflicts/gaps, generates migration plan). Verification closure: analyze_structure NameError fix; IPP wired.  
  **Completed:** `2026-06-05T03:38:55Z` | **Version:** `v0.4.7.1+1` | **Agent:** `RW Agent` | [BR-006](fr-br/BR-006-missing-migration-support-pre-existing-kanban.md) | [IPP](../../implementation-cycles/IPP-E04S07T01-br006-migration-support-pre-existing-kanban.md)

#### **Epic 2: Workflow Management Framework (Story 6 — Package Uninstall and Recovery)**
- **[E02:S06:T01](epics/epic-02/story-06-package-uninstall-and-recovery.md)** — FR-008 uninstall command and safety rails — **RE-IMPLEMENTED**. Fixed broken CLI `remove` command (`select_backend` parameter mismatch, backend instantiation bug). Added `uninstall` alias. Implemented dependency validation (`_check_dependencies`) and backup creation (`_create_backup`). Added 27 tests across `tests/cli/test_remove_command.py`, `tests/test_backends.py`, and `tests/test_uninstall_package.py`. All FR-008 AC-1..AC-5 and NFR-1..NFR-3 verified. **[FR-008](fr-br/FR-008-package-uninstall-capabilities.md)** **COMPLETE (AC-1..AC-5)**.  
  **Completed:** `2026-05-15T00:00:00Z` | **Version:** `v0.2.6.1+2` | **Agent:** `IPW`

#### **Epic 5: Documentation Management (Story 1 — FR Repo)**
- **[E05:S01:T35](epics/epic-05/story-01-fr-repo/T35-task-template-cross-wiring-section.md)** — FR-035 task template cross-wiring section. Enhanced `TASK_TEMPLATE.md` with explicit `## Cross-Wiring` section (bidirectional wiring callout, 6 relationship types with definitions, context guidance, Dependencies vs Cross-Wiring distinction table, 3 examples). Enhanced `## Related Work` section with bidirectional wiring reminder and SoP references. All 10 ACs closed. Structural validation (8 checks) passed.  
  **Completed:** `2026-05-15T00:00:00Z` | **Version:** `v0.5.1.35+1` | **Agent:** `IPW`

#### **Epic 2: Workflow Management Framework (Story 1 — RW Agent Execution & Docs)**
- **[E02:S01:T20](epics/epic-02/story-01-rw-agent-execution-and-docs/T20-semver-task-touch-collision-retrospective-fix-br073.md)** — BR-073 SemVer task-touch collision retrospective fix. Patched `semver-registry.yaml` to add retroactive mappings (`0.24.1.6+1` → `0.4.778+1`, `0.2.1.18+1` → `0.4.779+1`); incremented `task_touch_counter` from 777 to 779. Updated README version line to `v0.4.779+1`. Verified converter output for both internal versions. All ACs 1–6 closed.  
  **Completed:** `2026-05-15T00:00:00Z` | **Version:** `v0.2.1.18+1` | **Agent:** `UKW`

- **[E02:S01:T18](epics/epic-02/story-01-rw-agent-execution-and-docs/T18-rw-step-8-stage-completeness-guardrails-br070.md)** — BR-070 AC4 post-commit verification validator implementation. Implemented `validate_rw_step7_post_commit.py` (belt-and-suspenders check after `git commit` proving release commit contains every Step-7 output). Added 8 test cases (all green). Updated RW execution guide with Step 11.5 documentation. Updated both `release-workflow.yaml` files with `step-10.5`/`step-11.5`. Finalized T18 (all ACs complete, status COMPLETE with forensic marker) and BR-070 (all ACs closed, status CLOSED). No regression in existing pre-commit validator tests (9 tests still pass).  
  **Completed:** `2026-05-15T00:00:00Z` | **Version:** `v0.2.1.18+1` | **Agent:** `RW Agent`

> **Epic 24 completions** (E24:S05:T01–T02) archived in private `RMS-Ltd/hf-ai-dev-kit` — removed from public genesis tree per [ADR-006](../../architecture/standards-and-adrs/ADR-006-book-project-private-repository-spin-off.md) (FR-099 Phase 2).

#### **Epic 6: Framework Management (Story 1 — BR Repo)**
- **[E06:S01:T38](epics/epic-06/story-01-br-repo/T38-ukw-completed-tasks-not-removed-from-kboard-br072.md)** — **BR-072** UKW completed-task removal fix (UKW definition restructured — Part A/B separation of completed-task removal from MoSCOW classification; explicit `kanban-completed.md` archive write step added; cross-section deduplication guard added; root cause was removal clause buried as subordinate within MoSCOW step; AC5 confirmed via first live UKW execution 2026-05-12; all 6 ACs satisfied); **[BR-072](fr-br/BR-072-ukw-completed-tasks-not-removed-from-kboard.md)** **RESOLVED**.  
  **Completed:** `2026-05-13T00:00:00Z` | **Version:** `v0.6.1.38+2` | **Agent:** `RW Agent`

#### **Epic 2: Workflow Management Framework (Story 1 — RW Agent Execution & Docs)**
- **[E02:S01:T19](epics/epic-02/story-01-rw-agent-execution-and-docs/T19-rw-trigger-routing-execution-regression-br071.md)** — **BR-071** RW trigger routing execution regression fix (created `CLAUDE.md` + `.claude/commands/rw.md`; RW trigger routing restored for Claude Code sessions; AC1–AC5 complete); **[BR-071](fr-br/BR-071-rw-trigger-routing-not-executing-from-chat-session.md)** **RESOLVED**.  
  **Completed:** `2026-05-13T13:52:05Z` | **Version:** `v0.2.1.19+1` | **Agent:** `RW Agent`

#### **Epic 2: Workflow Management Framework (Story 15 — IPW governance and publication contract)**
- **[E02:S15:T07](epics/epic-02/story-15-ipw-governance-and-publication-contract/T07-canonical-rw-ukw-kanban-consistency-program-fr092.md)** — **FR-092** canonical RW/UKW kanban consistency program (Waves 0–8 delivered; four-surface reconciliation, corpus canonicalization, BR-070 stage-completeness gate, UXR-009 forensic stamp gating, aggregate release-readiness validation); **[FR-092](fr-br/FR-092-canonical-rw-ukw-kanban-consistency-program.md)** **COMPLETE**.  
  **Completed:** `2026-04-27T00:00:00Z` | **Version:** `v0.2.15.7+1` | **Agent:** `UKW`

#### **Epic 2: Workflow Management Framework (Story 16 — Perpetual ongoing workflow operations)**
- **[E02:S16:T01](epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T01-establish-canonical-perpetual-ongoing-tasks-story-fr088.md)** — **FR-088** establish canonical perpetual ongoing tasks story (Story 016 ownership, scope boundaries, renumbering policy, guardrail baseline; downstream inventory delegated to T02); **[FR-088](fr-br/FR-088-dedicated-story-for-perpetual-ongoing-tasks.md)** **COMPLETE**.  
  **Completed:** `2026-04-27T12:34:00Z` | **Version:** `v0.2.16.1+4` | **Agent:** `UKW`

#### **Epic 2: Workflow Management Framework (Story 15 — IPW governance and publication contract)**
- **[E02:S15:T03](epics/epic-02/story-15-ipw-governance-and-publication-contract/T03-ipw-board-row-footer-duplication-validation-hardening-fr089.md)** — **FR-089** board-row traceability-churn hardening (duplicate-footer dual-agreement, divergence signaling, traceability normalization + tests; IPP alignment **v0.2.15.3+2**); **[FR-089](fr-br/FR-089-ipw-board-row-footer-duplication-validation-hardening.md)** **IMPLEMENTED**.  
  **Completed:** `2026-04-21T12:00:00Z` | **Version:** `v0.2.15.3+2` | **Agent:** `UKW / Maintainer`

#### **Epic 5: Documentation Management (Story 9 — Docusaurus Documentation Portal)**
- **[E05:S09:T11](epics/epic-05/story-09-docusaurus-documentation-portal/T11-docusaurus-monorepo-markdown-link-resolution-br068.md)** — **BR-068** monorepo cross-root Markdown / MDX link resolution (**IPW-E5S9T11** Waves **1–4**); **`portal`** strict production build green; **[BR-068](fr-br/BR-068-docusaurus-monorepo-markdown-links-break-strict-production-build.md)** **COMPLETE**.  
  **Completed:** `2026-04-19T23:59:00Z` | **Version:** `v0.5.9.11+5` | **Agent:** `RW Agent`

#### **Epic 6: Framework Management (Story 9 — Installation and adopter integration)**
- **[E06:S09:T05](epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T05-adk-workflow-skill-pack-ecc-fr098.md)** — **FR-098 Phase 1** ADK ECC workflow skill pack — ✅ COMPLETE (**v0.6.9.5+3**)
- **[E06:S09:T04](epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T04-ecc-harness-layer-phase0-compatibility-fr098.md)** — **FR-098 Phase 0** ECC harness compatibility evaluation — ✅ COMPLETE (Phase 0 GO)
- **[E06:S09:T01](epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T01-greenfield-installation-process-fr080.md)** — **FR-080** end-to-end **greenfield** installation: spec + `install_greenfield_path.py` + INSTALL/user-docs + Wave 4 validators / reference transcript + Wave 5 FR/T01/IPW traceability; **[FR-080](fr-br/FR-080-greenfield-installation-process.md)** **IMPLEMENTED**.  
  **Completed:** `2026-04-19T17:10:00Z` | **Version:** `v0.6.9.1+8` | **Agent:** `RW Agent`

#### **Epic 7: Codebase Maintenance (Story 6 — Post-Windsurf Project Review)**
- **[E07:S06:T18](epics/epic-07/story-06-post-windsurf-project-review/T18-interactive-installer-kanban-pattern-prompt-clarity.md)** — **UXR-007** interactive installer Kanban pattern / prompt clarity; publication-aligned ICW split; RW **v0.7.6.18+3** (task-touch SemVer traceability).  
  **Completed:** `2026-04-18T15:23:00Z` | **Version:** `v0.7.6.18+3` | **Agent:** `RW Agent`

#### **Epic 2: Workflow Management Framework (Story 15 — IPW governance and publication contract)**
- **[E02:S15:T01](epics/epic-02/story-15-ipw-governance-and-publication-contract/T01-ipw-docusaurus-filing-contract-and-backfill-br066.md)** — **BR-066** Phase 2: bulk publication audit, validator hardening, targeted backfill (supersedes Phase 1 ledger line).  
  **Completed:** `2026-06-02T12:49:39Z` | **Version:** `v0.2.15.1+2` | **Agent:** `RW` / `UKW -c`

#### **Epic 2: Workflow Management Framework (Story 1 — RW agent execution)**
- **[E02:S01:T13](epics/epic-02/story-01-rw-agent-execution-and-docs/T13-rw-k-forensic-task-attribution-alignment-br063.md)** — **BR-063**: `RW -k` task attribution drift — forensic-strict mismatch guard, `--art` adoption path, `validate_version_bump` alignment, `workflow_orchestrator` parsing, regression tests, `.cursorrules` + portable excerpt + RW agent execution doc updates.  
  **Completed:** `2026-04-07T15:52:33Z` | **Version:** `v0.2.1.13+2` | **Agent:** `RW Agent`

#### **Epic 6: Framework Management (Story 6 — feature requests)**
- **[E06:S06:T63](epics/epic-06/story-06-feature-requests/T63-rw-recovery-journal-and-rollback-contract-br038.md)** — **BR-038** active scope: RW Recovery Journal and Rollback Contract (`RWJournal`, `RecoveryReport`, `RollbackContract`), operator docs (`docs/journals/`), 28 journal tests + 25 regression tests passing.  
  **Completed:** `2026-05-17T15:48:00Z` | **Version:** `v0.6.6.63+2` | **Agent:** `RW Agent`

- **[E06:S06:T57](epics/epic-06/story-06-feature-requests/T57-br039-cascade-whitelist-security-prompt-blocker.md)** — **BR-039** **repo** implementation **COMPLETE**: traceability, evidence, **Cursor-only** maintainer policy, **no Windsurf** verification obligation (no subscription); **[BR-039](fr-br/BR-039-cascade-whitelist-security-prompt-usability-blocker.md)** stays **IN PROGRESS** for **Cascade** vendor/product.  
  **Completed:** `2026-04-02T16:00:00Z` | **Version:** `v0.6.6.57+6` (`RW -k` repair) | **Agent:** `RW Agent`

#### **Epic 5: FR Repo (repository story)**
- **[E05:S01:T75](epics/epic-05/story-01-fr-repo/T75-icw-durable-planning-artifacts-documentation-system.md)** — **ICW durable planning artifacts** in repo documentation (**FR-075**): `specification-and-planning-artifacts-policy.md`, `docs/implementation-cycles/README.md`, ICW framework README + guide, `icw-workflow.yaml` comment, `.cursorrules`; intake **FR-075** + board row.  
  **Completed:** `2026-04-01T15:46:20Z` | **Version:** `v0.5.1.75+1` | **Agent:** `RW Agent`

#### **Epic 5: Documentation Management**
- **[E05:S09:T10](epics/epic-05/story-09-docusaurus-documentation-portal/T10-docusaurus-strict-broken-anchors-post-t08.md)** – Docusaurus **strict broken anchors** (`onBrokenAnchors: 'throw'`) post–**T08** (**FR-067 FU-3**): corpus anchor/heading alignment, `portal/docusaurus.config.js`, `portal/README.md`, `tests/test_portal_fr067_build_triage.py`; filing **v0.5.9.10+1**; implementation **v0.5.9.10+2** (**RW E05:S09:T10**).  
  **Completed:** `2026-04-01T15:17:58Z` | **Version:** `v0.5.9.10+2` | **Agent:** `RW Agent`

#### **Epic 2: Workflow Management Framework**
- **[E02:S11:T12](epics/epic-02/story-11-intake-workflow-automation/T12-github-actions-workflow-bug-resolution.md)** – GitHub Actions intake (**BR-053**) — **COMPLETE (workaround, v0.2.11.12+2)** — workflow unregistered (`fr-br-intake.yml.DISABLED`); manual intake; closure per BR-053 *Resolution / current status* (not a vendor trigger fix)  
  **Completed:** `2026-03-30T16:00:00Z` | **Version:** `v0.2.11.12+2` | **Agent:** `UKW / Maintainer`

#### **Epic 5: Documentation Management**
- **[E05:S09:T09](epics/epic-05/story-09-docusaurus-documentation-portal/T09-github-pages-go-live-verification.md)** – GitHub Pages **go-live** (**FR-070** follow-up): `epic/5` → **`main`**, Actions run **23796236180** green, Pages legacy **`gh-pages`/`/`**, canonical **HTTP 200**, [portal/README.md](https://github.com/earlution/ai-dev-kit/blob/main/portal/README.md) go-live/troubleshooting; task doc **`Task ID`** for RW validators; *init* **v0.5.9.9+1** (`RW -k`), *release* **v0.5.9.9+2** (**RW E05:S09:T09**).  
  **Completed:** `2026-03-31T12:10:00Z` | **Version:** `v0.5.9.9+2` | **Agent:** `RW Agent`

- **[E05:S09:T08](epics/epic-05/story-09-docusaurus-documentation-portal/T08-docusaurus-strict-broken-links-post-fr067.md)** – Docusaurus **strict** broken **links** (**`throw`**) post–**FR-067** (**FU-1** closed): corpus link remediation, `portal/docusaurus.config.js`, `portal/README.md`, `tests/test_portal_fr067_build_triage.py`; *init* **v0.5.9.8+1** (`RW -k`), implementation **v0.5.9.8+2**; merged **epic/5** → **`main`**.  
  **Completed:** `2026-04-01T14:30:00Z` | **Version:** `v0.5.9.8+2` | **Agent:** `RW Agent`

- **[E05:S09:T07](epics/epic-05/story-09-docusaurus-documentation-portal/T07-docusaurus-search-fr-071.md)** – Docusaurus site search (**FR-071**): `@easyops-cn/docusaurus-search-local` in [`portal/docusaurus.config.js`](https://github.com/earlution/ai-dev-kit/blob/main/portal/docusaurus.config.js), [`portal/README.md`](https://github.com/earlution/ai-dev-kit/blob/main/portal/README.md) (smoke queries, privacy, build time), [`tests/test_portal_fr071_search.py`](https://github.com/earlution/ai-dev-kit/blob/main/tests/test_portal_fr071_search.py)  
  **Completed:** `2026-03-30T16:59:05Z` | **Version:** `v0.5.9.7+1` | **Agent:** `RW Agent`

- **[E05:S09:T06](epics/epic-05/story-09-docusaurus-documentation-portal/T06-docusaurus-deployment-fr-070.md)** – Docusaurus GitHub Pages deployment (**FR-070**): [`.github/workflows/docusaurus-deploy.yml`](https://github.com/earlution/ai-dev-kit/blob/main/.github/workflows/docusaurus-deploy.yml), portal hosting README, root README link, `tests/test_portal_fr070_deployment.py`  
  **Completed:** `2026-03-30T16:11:41Z` | **Version:** `v0.5.9.6+1` | **Agent:** `RW Agent`

- **[E05:S09:T05](epics/epic-05/story-09-docusaurus-documentation-portal/T05-docusaurus-ci-fr-069.md)** – Docusaurus CI build gate (**FR-069**): [`.github/workflows/docusaurus-build.yml`](https://github.com/earlution/ai-dev-kit/blob/main/.github/workflows/docusaurus-build.yml), `tests/test_portal_fr069_ci.py`, portal README CI pointer  
  **Completed:** `2026-03-30T15:52:14Z` | **Version:** `v0.5.9.5+1` | **Agent:** `RW Agent`

- **[E05:S09:T04](epics/epic-05/story-09-docusaurus-documentation-portal/T04-docusaurus-navigation-fr-068.md)** – Docusaurus navigation / sidebar IA / landing (**FR-068**): `portal/sidebars.js`, `portal/docusaurus.config.js`, homepage, `tests/test_portal_fr068_navigation.py`, portal README mapping + `--no-minify` build workaround  
  **Completed:** `2026-03-30T15:27:28Z` | **Version:** `v0.5.9.4+1` | **Agent:** `RW Agent`

- **[E05:S09:T03](epics/epic-05/story-09-docusaurus-documentation-portal/T03-docusaurus-build-triage-fr-067.md)** – Docusaurus production build corpus triage (**FR-067**): MDX/placeholder escapes, `onBrokenLinks`/`onBrokenMarkdownLinks` policy, `scripts/escape_mdx_placeholders.py`, `tests/test_portal_fr067_build_triage.py`, `docs/maintenance/docusaurus-corpus-triage-fr-067.md`  
  **Completed:** `2026-03-30T22:30:00Z` | **Version:** `v0.5.9.3+1` | **Agent:** `RW Agent`

- **[E05:S09:T02](epics/epic-05/story-09-docusaurus-documentation-portal/T02-docusaurus-canonical-docs-path-fr-066.md)** – Canonical **`docs/`** path and publish scope (**FR-066**): `portal/docusaurus.config.js`, `portal/README.md`, `tests/test_portal_fr066_docs_path.py`, `docs/documentation/docusaurus-portal-index.md`  
  **Completed:** `2026-03-30T21:45:00Z` | **Version:** `v0.5.9.2+2` | **Agent:** `RW Agent`

- **[E05:S09:T01](epics/epic-05/story-09-docusaurus-documentation-portal/T01-docusaurus-site-identity-fr-065.md)** – Docusaurus site identity (**FR-065**): `portal/docusaurus.config.js`, `portal/README.md`, `tests/test_portal_fr065_identity.py`  
  **Completed:** `2026-03-30T20:35:00Z` | **Version:** `v0.5.9.1+2` | **Agent:** `RW Agent`

- **[E05:S01:T69](epics/epic-05/story-01-fr-repo/T69-shields-branch-private-repo-fr-064.md)** – Retire **`shields`** branch (FR-064): delete `update-badges.yml` BYOB; README static-badge policy; `git push origin --delete shields`  
  **Completed:** `2026-03-30T12:44:00Z` | **Version:** `v0.5.1.69+1` | **Agent:** `RW Agent`

- **[E05:S01:T68](epics/epic-05/story-01-fr-repo/T68-packaged-frameworks-consumer-paths-and-versioning.md)** – Packaged frameworks — `rw-config`/`scripts_path` consumer doc; packages README semver policy; numbering + kanban README (FR-060 triggers / paths)  
  **Completed:** `2026-03-30T12:15:00Z` | **Version:** `v0.5.1.68+2` | **Agent:** `RW Agent`

- **[E05:S01:T67](epics/epic-05/story-01-fr-repo/T67-adopter-install-docs-rw-task-token.md)** – Adopter install docs — mandatory **RW** + task id same message (**FR-060**); INSTALL + user-docs + workflow mgt README + package install cross-ref  
  **Completed:** `2026-03-30T11:29:20Z` | **Version:** `v0.5.1.67+2` | **Agent:** `RW Agent`

- **[E05:S01:T66](epics/epic-05/story-01-fr-repo/T66-cursorrules-vs-packaged-rw-trigger-parity.md)** – `.cursorrules` vs packaged RW trigger parity (parity doc; excerpt **1b/1c/1d** todos; FR citations; root dual-source link)  
  **Completed:** `2026-03-30T10:48:54Z` | **Version:** `v0.5.1.66+2` | **Agent:** `RW Agent`

- **[E05:S01:T65](epics/epic-05/story-01-fr-repo/T65-align-workflow-mgt-readme-with-workflow-registry-count.md)** – Align workflow mgt README with registry count (**11** + `workflow-registry.yaml` SoT; Specialized (4); no phantom Documentation Workflow)  
  **Completed:** `2026-03-30T10:40:14Z` | **Version:** `v0.5.1.65+2` | **Agent:** `RW Agent`

- **[E05:S01:T63](epics/epic-05/story-01-fr-repo/T63-rw-task-argument-requirement.md)** – RW Task Argument Requirement / FR-060 (strict task token; `validate_rw_task_complete.py`; docs; T63 renumber; `find_story_file` fr-repo preference)  
  **Completed:** `2026-03-25T16:26:47Z` | **Version:** `v0.5.1.63+1` | **Agent:** `RW Agent`

#### **Epic 7: Codebase Maintenance**
- **[E07:S06:T09](epics/epic-07/story-06-post-windsurf-project-review/T09-config-and-git-state-validation.md)** – Config and git state validation (rw-config path matrix; version vs branch; git baseline; `.cursorrules` vs config; `.cursorignore` absent; Story 6 COMPLETE)  
  **Completed:** `2026-03-25T15:15:34Z` | **Version:** `v0.7.6.9+1` | **Agent:** `RW Agent`

- **[E07:S06:T08](epics/epic-07/story-06-post-windsurf-project-review/T08-dependency-and-tooling-audit.md)** – Dependency and tooling audit (setup.py vs requirements; pytest 85/92; CI `Tests` gap; BR-058; `test_validation` aligned)  
  **Completed:** `2026-03-25T15:00:00Z` | **Version:** `v0.7.6.8+1` | **Agent:** `RW Agent`

- **[E07:S06:T07](epics/epic-07/story-06-post-windsurf-project-review/T07-general-documentation-integrity.md)** – General documentation and cross-reference integrity (README path spot-check; docs tree; fr-br `(epics/` re-scan clean; audit in T07 doc)  
  **Completed:** `2026-03-25T14:34:13Z` | **Version:** `v0.7.6.7+1` | **Agent:** `RW Agent`

- **[E07:S06:T06](epics/epic-07/story-06-post-windsurf-project-review/T06-fr-br-uxr-intake-documentation-quality.md)** – FR/BR/UXR intake documentation quality (aggregate doc audit; `../epics/` link fixes in nine fr-br files; cross-links kanban vs FR/BR/UXR completed)  
  **Completed:** `2026-03-25T14:30:53Z` | **Version:** `v0.7.6.6+1` | **Agent:** `RW Agent`

- **[E07:S06:T05](epics/epic-07/story-06-post-windsurf-project-review/T05-workflow-script-integrity.md)** – Workflow script integrity (ukw_syntax_parser, task_inference, orchestrator/executor; canonical_steps + test fixes; no BR filed)  
  **Completed:** `2026-03-25T14:25:32Z` | **Version:** `v0.7.6.5+1` | **Agent:** `RW Agent`

- **[E07:S06:T04](epics/epic-07/story-06-post-windsurf-project-review/T04-recent-commit-review.md)** – Recent commit review (last ~15 commits: RW compliance, batch scope, quality; no BR/FR filed)  
  **Completed:** `2026-03-25T14:17:31Z` | **Version:** `v0.7.6.4+1` | **Agent:** `RW Agent`

- **[E07:S06:T03](epics/epic-07/story-06-post-windsurf-project-review/T03-kanban-documentation-consistency.md)** – Kanban documentation consistency (live SoT, E9/E18 disambiguation, cross-refs, epic-09 S05 stub)  
  **Completed:** `2026-03-25T12:00:00Z` | **Version:** `v0.7.6.3+1` | **Agent:** `Cursor-Agent`

---

#### **Epic 6: Framework Management and Maintenance**
- **[E06:S06:T56](epics/epic-06/story-06-feature-requests/T56-rw-ambiguous-task-identifier-typo-risk.md)** – RW ambiguous task identifier typo risk (BR-056 verified)  
  **Completed:** `2026-03-25T12:55:31Z` | **Version:** `v0.6.6.56+4` | **Agent:** `RW Agent`

---

### 🚀 Latest Releases (Today - 2026-03-12)

**📋 Batch Release: 8 Should Have Tasks via RW Execution**

---

#### **Epic 11: Debugging and Troubleshooting**
- **[E11:S01:T01](epics/epic-11/story-01-debug-path-package-implementation-review.md)** – Debug path expectations baseline  
  **Completed:** `2026-03-12T14:00:00Z` | **Version:** `v0.11.1.1+1` | **Agent:** `PM-AGENT-001`


---

#### **Epic 10: Documentation and Knowledge Management**
- **[E10:S01:T04](epics/epic-10/story-01-document-lifecycle-package-implementation-review/T04-review-integrations-and-dependency-alignment.md)** – Review integrations and dependency alignment  
  **Completed:** `2026-06-06T14:48:05Z` | **Version:** `v0.10.1.4+1` | **Agent:** `RW E10:S01:T04 --art` | [Report](epics/epic-10/story-01-document-lifecycle-package-implementation-review/integration-alignment-report.md)

- **[E10:S01:T01](epics/epic-10/story-01-document-lifecycle-package-implementation-review/T01-establish-expectations-baseline-for-document-lifecycle-packa.md)** – Establish expectations baseline for Document Lifecycle package  
  **Completed:** `2026-06-06T14:45:56Z` | **Version:** `v0.10.1.1+1` | **Agent:** `RW E10:S01:T01 --art` | [Baseline](epics/epic-10/story-01-document-lifecycle-package-implementation-review/expectations-baseline.md)


---

#### **Epic 8: Tooling & Automation**
- **[E08:S04:T01](epics/epic-08/story-04-tooling-automation-package-implementation-review.md)** – Tooling & Automation expectations baseline  
  **Completed:** `2026-03-12T14:00:00Z` | **Version:** `v0.8.4.1+1` | **Agent:** `PM-AGENT-001`


---

#### **Epic 1: AI Dev Kit Core**
- **[E01:S06:T01](epics/epic-01/story-06-repository-ci-cd-setup/T01-setup-byob-badges-for-private-repository.md)** – Set up BYOB badges for private repository  
  **Completed:** `2026-03-12T14:00:00Z` | **Version:** `v0.1.6.1+1` | **Agent:** `PM-AGENT-001`


---

#### **Epic 6: Framework Management and Maintenance**
- **[E06:S07:T18](epics/epic-02/story-01-rw-agent-execution-and-docs/T23-tool-agnostic-workflow-step-tracking-and-runlogs.md)** – Tool-Agnostic Workflow Step Tracking + Persisted Run Logs  
  **Completed:** `2026-03-12T14:00:00Z` | **Version:** `v0.6.7.18+1` | **Agent:** `PM-AGENT-001`


---

#### **Epic 4: Kanban Framework**
- **[E04:S11:T07](epics/epic-04/story-11-kanban-granularity-discrete-task-docs/T07-planning-spec-tests-impl.md)** – Migrate Embedded Tasks to Discrete Task Documents  
  **Completed:** `2026-03-12T14:00:00Z` | **Version:** `v0.4.11.7+1` | **Agent:** `PM-AGENT-001`


---

#### **Epic 6: Framework Management and Maintenance**
- **[E06:S07:T106](epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md)** – Windsurf Migration: .cursorrules to Workflow Equivalents  
  **Completed:** `2026-03-12T14:00:00Z` | **Version:** `v0.6.7.106+1` | **Agent:** `PM-AGENT-001`


---

#### **Epic 7: Codebase Maintenance and Review**
- **[BR-052](fr-br/BR-052-github-actions-workflow-optimization.md)** – GitHub Actions Workflow Optimization  
  **Completed:** `2026-03-12T11:09:00Z` | **Version:** `v0.7.1.5+4` | **Agent:** `RW Agent`


---

#### **Epic 7: Codebase Maintenance and Review**
- **[E07:S01:T06](epics/epic-07/story-01-codebase-maintenance-tasks/T06-update-changelog-workflow.md)** – Implement Update Changelog Workflow (UCW)  
  **Completed:** `2026-03-16T17:00:00Z` | **Version:** `v0.7.1.7+4` | **Agent:** `RW Agent`


---

#### **Epic 7: Codebase Maintenance and Review**
- **[E07:S01:T07](epics/epic-07/story-01-codebase-maintenance-tasks/T07-markdown-maintenance-workflow.md)** – Markdown Maintenance Workflow (MMW)  
  **Completed:** `2026-03-16T17:30:00Z` | **Version:** `v0.7.1.7+4` | **Agent:** `RW Agent`


---

#### **Epic 7: Codebase Maintenance and Review**
- **[E07:S01:T08](epics/epic-07/story-01-codebase-maintenance-tasks/E07S01T08-task-doc-naming-standardization.md)** – Task Doc Naming Standardization  
  **Completed:** `2026-03-16T17:45:00Z` | **Version:** `v0.7.1.8+4` | **Agent:** `RW Agent`


---

### 📅 Recent Completions (Yesterday - 2026-03-11)

#### **Epic 6: Framework Management and Maintenance**
- **[E06:S07:T108](epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T07-ukw-extension-for-fr-br-uxr-temporal-tracking-fr050.md)** – UKW Extension for FR/BR/UXR Temporal Tracking and Synchronization  
  **Completed:** `2026-03-11T17:15:00Z` | **Version:** `v0.6.7.108+1` | **Agent:** `RW Agent`


---

#### **Epic 6: Framework Management and Maintenance**
- **[E06:S06:T02](epics/epic-06/story-06-feature-requests/T02-fix-release-workflow-micromanagement-issues.md)** – Fix Release Workflow Micromanagement Issues  
  **Completed:** `2026-03-11T16:45:00Z` | **Version:** `v0.6.6.2+8` | **Agent:** `Documentation Agent`


---

#### **Epic 5: Framework Management and FR Repository**
- **[E05:S01:T49](epics/epic-05/story-01-fr-repo/T49-enhanced-kanban-completed-with-timestamps-and-recent-tasks.md)** – Enhanced kanban-completed.md with Timestamps and Recent Tasks  
  **Completed:** `2026-03-11T16:30:00Z` | **Version:** `v0.5.1.49+2` | **Agent:** `Documentation Agent`


---

#### **Epic 5: Framework Management and FR Repository**
- **[E05:S01:T48](epics/epic-05/story-01-fr-repo/T48-icw-task-identifier-argument.md)** – ICW Task Identifier Argument  
  **Completed:** `2026-03-11T16:20:00Z` | **Version:** `v0.5.1.48+1` | **Agent:** `Documentation Agent`


---

#### **Epic 6: Framework Management and Maintenance**
- **[E06:S06:T42](epics/epic-06/story-06-feature-requests/T42-fix-ukw-agent-board-cleanup-failure.md)** – Fix UKW Agent Board Cleanup Failure  
  **Completed:** `2026-03-11T16:15:00Z` | **Version:** `v0.6.6.41+1` | **Agent:** `Documentation Agent`


---

#### **Epic 6: Framework Management and Maintenance**
- **[E06:S06:T999](epics/epic-06/story-06-feature-requests/T999-board-cleanup-test.md)** – Board Cleanup Test Task  
  **Completed:** `2026-03-11T16:10:00Z` | **Version:** `v0.6.6.41+1` | **Agent:** `Documentation Agent`


---

#### **Epic 6: Framework Management and Maintenance**
- **[E06:S06:T41](epics/epic-06/story-06-feature-requests/T41-implementation-summary.md)** – Windsurf: Investigate how to leverage AGENTS.md and SKILL.md for workflows  
  **Completed:** `2026-03-11T16:05:00Z` | **Version:** `v0.6.6.41+1` | **Agent:** `Documentation Agent`


---

#### **Epic 6: Framework Management and Maintenance**
- **[E06:S06:T03](epics/epic-06/story-06-feature-requests/T03-apple-sdk-license-blocking-issue.md)** – Investigate Apple SDK License Blocking Issue  
  **Completed:** `2026-03-11T16:00:00Z` | **Version:** `v0.6.6.3+1` | **Agent:** `Documentation Agent`


---

#### **Epic 5: Framework Management and FR Repository**
- **[E05:S01:T37](epics/epic-05/story-01-fr-repo/T37-kanban-policy-task-prioritisation-queue-stack.md)** – Kanban Policy Task Prioritisation and Queue/Stack  
  **Completed:** `2026-03-11T15:55:00Z` | **Version:** `v0.5.1.37+3` | **Agent:** `Documentation Agent`


---

#### **Epic 5: Framework Management and FR Repository**
- **[E05:S01:T36](epics/epic-05/story-01-fr-repo/T36-rw-update-kanban-board-on-task-completion.md)** – RW Update Kanban Board on Task Completion  
  **Completed:** `2026-03-11T15:50:00Z` | **Version:** `v0.5.1.36+1` | **Agent:** `Documentation Agent`


---

#### **Epic 5: Framework Management and FR Repository**
- **[E05:S01:T34](epics/epic-05/story-01-fr-repo/T34-ukw-granular-control-and-use-case-flags.md)** – UKW Granular Control and Use Case Flags  
  **Completed:** `2026-03-11T15:45:00Z` | **Version:** `v0.5.1.34+1` | **Agent:** `Documentation Agent`


---

#### **Epic 4: Kanban Framework**
- **[E04:S13:T06](epics/epic-04/story-13-kanban-board-moscow-prioritized-task-view/T06-update-other-affected-packages.md)** – Update other affected packages (MoSCOW board workstream)  
  **Completed:** `2025-12-15T14:00:00Z` | **Version:** `v0.4.13.6+2` | **Agent:** `Documentation Agent`


---

#### **Epic 4: Kanban Framework**
- **[E04:S05:T01](epics/epic-04/story-05-canonical-epics-for-kanban-framework.md)** – Create canonical Epic structure  
  **Completed:** `2025-11-05T16:00:00Z` | **Version:** `v0.4.5.1+1` | **Agent:** `Documentation Agent`


---

#### **Epic 4: Kanban Framework**
- **[E04:S04:T01](epics/epic-04/story-04-kanban-structure-refactoring.md)** – Refactor board structure  
  **Completed:** `2025-11-01T16:00:00Z` | **Version:** `v0.4.4.1+1` | **Agent:** `Documentation Agent`


---

## Overview

This document tracks all **completed tasks** across the AI Dev Kit project. Tasks are organized by Epic and Story, with completion dates and version markers for forensic tracking.

**Completion Criteria:** A task is marked COMPLETE only when:
- **Implementation is fully done** (code or docs delivered, released in a version)
- **Sign-off is obtained** (validated, accepted by the responsible party)

---

## Completed Tasks by Epic

### Epic 1: AI Dev Kit Core ✅ COMPLETE

**Status:** COMPLETE  
**Completed:** 2025-12-02  
**Version:** v0.1.2.5+1

#### Story 001: AI Dev Kit Kanban and Versioning ✅ COMPLETE
- **E01:S01:T01** – Create Kanban board structure - ✅ COMPLETE (v0.1.1.1+1)
- **E01:S01:T02** – Implement versioning schema - ✅ COMPLETE (v0.1.1.2+1)
- **E01:S01:T03** – Create governance policies - ✅ COMPLETE (v0.1.1.3+1)
- **E01:S01:T04** – Create task tracking system - ✅ COMPLETE (v0.1.1.4+1)
- **E01:S01:T05** – Create documentation framework - ✅ COMPLETE (v0.1.1.5+1)
- **E01:S01:T06** – Integrate with versioning - ✅ COMPLETE (v0.1.1.6+1)

#### Story 002: Package and Repo Architecture ✅ COMPLETE
- **E01:S02:T01** – Analyze current package structure - ✅ COMPLETE (v0.1.2.1+1)
- **E01:S02:T02** – Document modularity principles - ✅ COMPLETE (v0.1.2.2+1)
- **E01:S02:T03** – Create package dependency matrix - ✅ COMPLETE (v0.1.2.3+1)
- **E01:S02:T04** – Document consumption patterns - ✅ COMPLETE (v0.1.2.4+1)
- **E01:S02:T05** – Update package READMEs - ✅ COMPLETE (v0.1.2.5+1)

#### Story 003: Core Infrastructure ✅ COMPLETE
- **E01:S03:T01** – Establish project structure - ✅ COMPLETE (v0.1.3.1+1)
- **E01:S03:T02** – Create build system - ✅ COMPLETE (v0.1.3.2+1)
- **E01:S03:T03** – Implement testing framework - ✅ COMPLETE (v0.1.3.3+1)

---

### Epic 3: Numbering & Versioning Framework ✅ COMPLETE

**Status:** COMPLETE  
**Completed:** 2025-12-04  
**Version:** v0.3.3.3+1

#### Story 001: Versioning Schema Design ✅ COMPLETE
- **E03:S01:T01** – Design RC.EPIC.STORY.TASK+BUILD schema - ✅ COMPLETE (v0.3.1.1+1)
- **E03:S01:T02** – Create versioning policies - ✅ COMPLETE (v0.3.1.2+1)
- **E03:S01:T03** – Implement version tracking - ✅ COMPLETE (v0.3.1.3+1)

#### Story 002: Numbering System ✅ COMPLETE
- **E03:S02:T01** – Create Epic/Story/Task numbering - ✅ COMPLETE (v0.3.2.1+1)
- **E03:S02:T02** – Implement build numbering - ✅ COMPLETE (v0.3.2.2+1)

#### Story 003: Integration Framework ✅ COMPLETE
- **E03:S03:T01** – Integrate with Kanban - ✅ COMPLETE (v0.3.3.1+1)
- **E03:S03:T02** – Integrate with Release Workflow - ✅ COMPLETE (v0.3.3.2+1)
- **E03:S03:T03** – Create version validation - ✅ COMPLETE (v0.3.3.3+1)

---

### Epic 4: Kanban Framework 🔄 IN PROGRESS

**Status:** IN PROGRESS  
**Priority:** HIGH  
**Last Updated:** 2026-03-09 (RW: E04:S18:T01+1)

#### Completed Stories ✅

**Story 001: Dev Kit Kanban Implementation** ✅ COMPLETE (v0.4.1.1+6)
- **E04:S01:T01** – Create Kanban board structure - ✅ COMPLETE (v0.4.1.1+1)
- **E04:S01:T02** – Implement MoSCOW prioritization - ✅ COMPLETE (v0.4.1.2+1)
- **E04:S01:T03** – Create task tracking system - ✅ COMPLETE (v0.4.1.3+1)
- **E04:S01:T04** – Implement governance policies - ✅ COMPLETE (v0.4.1.4+1)
- **E04:S01:T05** – Create documentation framework - ✅ COMPLETE (v0.4.1.5+1)
- **E04:S01:T06** – Integrate with versioning - ✅ COMPLETE (v0.4.1.6+1)

**Story 002: FR/BR Intake to Tasks** ✅ COMPLETE (v0.4.2.6+3)
- **E04:S02:T01** – Create FR/BR templates - ✅ COMPLETE (v0.4.2.1+1)
- **E04:S02:T02** – Implement intake workflow - ✅ COMPLETE (v0.4.2.2+1)
- **E04:S02:T03** – Create task generation system - ✅ COMPLETE (v0.4.2.3+1)
- **E04:S02:T04** – Implement Epic/Story matching - ✅ COMPLETE (v0.4.2.4+1)
- **E04:S02:T05** – Create validation system - ✅ COMPLETE (v0.4.2.5+1)
- **E04:S02:T06** – Add GitHub integration - ✅ COMPLETE (v0.4.2.6+3)

**Story 003: Kanban + Versioning + RW Integration** ✅ COMPLETE (v0.4.3.7+1)
- **E04:S03:T01** – Integrate versioning with Kanban - ✅ COMPLETE (v0.4.3.1+1)
- **E04:S03:T02** – Integrate RW with Kanban - ✅ COMPLETE (v0.4.3.2+2)
- **E04:S03:T03** – Create synchronization system - ✅ COMPLETE (v0.4.3.3+1)
- **E04:S03:T04** – Implement automated updates - ✅ COMPLETE (v0.4.3.4+1)
- **E04:S03:T05** – Create dev-kit integration guide - ✅ COMPLETE (v0.4.3.5+1)
- **E04:S03:T06** – Document integration examples - ✅ COMPLETE (v0.4.3.6+1)
- **E04:S03:T07** – Address integration gaps - ✅ COMPLETE (v0.4.3.7+1)

**Story 004: Kanban Structure Refactoring** ✅ COMPLETE (v0.4.4.1+1)
- **E04:S04:T01** – Refactor board structure - ✅ COMPLETE (v0.4.4.1+1)

**Story 005: Canonical Epics for Kanban Framework** ✅ COMPLETE (v0.4.5.1+1)
- **E04:S05:T01** – Create canonical Epic structure - ✅ COMPLETE (v0.4.5.1+1)

**Story 006: Comprehensive Canonical EST Template System** ✅ COMPLETE (v0.4.6.8+1)
- **E04:S06:T00** – Create template framework - ✅ COMPLETE (v0.4.6.1+1)
- **E04:S06:T01** – FR-005 canonical EST template closure (audit + kanban reconcile) - ✅ COMPLETE (v0.4.6.1+1) — [task](epics/epic-04/story-06-comprehensive-canonical-est-template-system/T01-canonical-est-template-closure-fr005.md); corpus delivery story-006 T00–T10 (epic 1–7 at v0.4.6.7+1)
- **E04:S06:T02** – Create Story templates - ✅ COMPLETE (v0.4.6.3+1)
- **E04:S06:T03** – Build Task templates - ✅ COMPLETE (v0.4.6.4+1)
- **E04:S06:T04** – Create template validation - ✅ COMPLETE (v0.4.6.5+1)
- **E04:S06:T05** – Implement template system - ✅ COMPLETE (v0.4.6.6+1)
- **E04:S06:T06** – BR-005: CANONICAL_EPICS.md gap closure (verification wave) - ✅ COMPLETE (v0.4.6.6+1) — [task](epics/epic-04/story-06-comprehensive-canonical-est-template-system/T06-br005-canonical-epics-structure-gap.md) | [BR-005](fr-br/BR-005-kanban-framework-epic-structure-gap-uat-finding.md)
- **E04:S06:T07** – Add template examples - ✅ COMPLETE (v0.4.6.8+1)
- **E04:S06:T08** – Create template testing - ✅ COMPLETE (v0.4.6.8+1)
- **E04:S06:T09** – Implement template distribution - ✅ COMPLETE (v0.4.6.8+1)
- **E04:S06:T10** – Create template migration - ✅ COMPLETE (v0.4.6.8+1)

**Story 007: Migration Support and Installation Modes** ✅ COMPLETE (v0.4.7.3+1)
- **E04:S07:T00** – Design migration framework - ✅ COMPLETE (v0.4.7.1+1)
- **E04:S07:T01** – Create installation modes - ✅ COMPLETE (v0.4.7.2+1)
- **E04:S07:T02** – Implement migration scripts - ✅ COMPLETE (v0.4.7.3+1)
- **E04:S07:T03** – Create migration documentation - ✅ COMPLETE (v0.4.7.3+1)

**Story 008: Intelligent Epic Matching and Canonical Structure Adoption** ✅ COMPLETE (v0.4.8.6+1)
- **E04:S08:T01** – Create matching algorithm - ✅ COMPLETE (v0.4.8.1+1)
- **E04:S08:T02** – Implement structure validation - ✅ COMPLETE (v0.4.8.2+1)
- **E04:S08:T03** – Create canonical adoption - ✅ COMPLETE (v0.4.8.3+1)
- **E04:S08:T04** – Add intelligent matching - ✅ COMPLETE (v0.4.8.4+1)
- **E04:S08:T05** – Create matching documentation - ✅ COMPLETE (v0.4.8.5+1)
- **E04:S08:T06** – Implement validation system - ✅ COMPLETE (v0.4.8.6+1)

**Story 009: Bug Fixes and Agentic Intelligence Implementation** ✅ COMPLETE (v0.4.9.1+1)
- **E04:S09:T01** – Fix critical bugs - ✅ COMPLETE (v0.4.9.1+1)

**Story 010: Agentic Kanban Task Creation from FR/BR** ✅ COMPLETE (v0.4.10.7+0)
- **E04:S10:T00** – Create agentic framework - ✅ COMPLETE (v0.4.10.1+1)
- **E04:S10:T01** – Implement FR processing - ✅ COMPLETE (v0.4.10.2+1)
- **E04:S10:T02** – Add BR processing - ✅ COMPLETE (v0.4.10.3+1)
- **E04:S10:T03** – Create task generation - ✅ COMPLETE (v0.4.10.4+1)
- **E04:S10:T04** – Implement validation - ✅ COMPLETE (v0.4.10.5+1)
- **E04:S10:T05** – Add integration testing - ✅ COMPLETE (v0.4.10.6+1)
- **E04:S10:T06** – Create documentation - ✅ COMPLETE (v0.4.10.7+0)
- **E04:S10:T07** – Add deployment support - ✅ COMPLETE (v0.4.10.7+0)

**Story 011: Kanban Granularity & Discrete Task Docs** ✅ COMPLETE (v0.4.11.6+2)
- **E04:S11:T00** – Design granularity framework - ✅ COMPLETE (v0.4.11.1+1)
- **E04:S11:T01** – Create discrete task structure - ✅ COMPLETE (v0.4.11.2+2)
- **E04:S11:T02** – Implement task documentation - ✅ COMPLETE (v0.4.11.3+1)
- **E04:S11:T03** – Create task validation - ✅ COMPLETE (v0.4.11.4+1)
- **E04:S11:T04** – Add task tracking - ✅ COMPLETE (v0.4.11.5+0)
- **E04:S11:T05** – Implement task integration - ✅ COMPLETE (v0.4.11.6+2)
- **E04:S11:T06** – Create task documentation - ✅ COMPLETE (v0.4.11.6+2)

**Story 013: Kanban Board Enhancement - MoSCOW Prioritized Task View** ✅ COMPLETE (v0.4.13.6+2)
- **E04:S13:T01** – Create MoSCOW view - ✅ COMPLETE (v0.4.13.1+1)
- **E04:S13:T02** – Implement prioritization - ✅ COMPLETE (v0.4.13.2+1)
- **E04:S13:T03** – Add task ordering - ✅ COMPLETE (v0.4.13.3+1)
- **E04:S13:T04** – Create view validation - ✅ COMPLETE (v0.4.13.4+3)
- **E04:S13:T05** – Implement view updates - ✅ COMPLETE (v0.4.13.5+1)
- **E04:S13:T06** – Add view documentation - ✅ COMPLETE (v0.4.13.6+2, 2025-12-15T14:00:00Z)

**Story 016: Kanban Package Implementation Review** ✅ COMPLETE (v0.4.16.5+2)
- **E04:S16:T01** – Review implementation - ✅ COMPLETE (v0.4.16.1+1)
- **E04:S16:T02** – Create gap analysis - ✅ COMPLETE (v0.4.16.2+1)
- **E04:S16:T03** – Implement remediation - ✅ COMPLETE (v0.4.16.3+1)
- **E04:S16:T04** – Add validation testing - ✅ COMPLETE (v0.4.16.4+1)
- **E04:S16:T05** – Create risk assessment - ✅ COMPLETE (v0.4.16.5+2)

**Story 017: Kanban Package Installation Evaluation** ✅ COMPLETE (v0.4.17.6+1)
- **E04:S17:T01** – Evaluate installation - ✅ COMPLETE (v0.4.17.1+1)
- **E04:S17:T02** – Test installation process - ✅ COMPLETE (v0.4.17.2+1)
- **E04:S17:T03** – Validate installation - ✅ COMPLETE (v0.4.17.3+1)
- **E04:S17:T04** – Create installation guide - ✅ COMPLETE (v0.4.17.4+1)
- **E04:S17:T05** – Add troubleshooting - ✅ COMPLETE (v0.4.17.5+1)
- **E04:S17:T06** – Document evaluation - ✅ COMPLETE (v0.4.17.6+1)

**Story 018: Kanban Board Info-Only Split** ✅ COMPLETE (v0.4.18.1+1)
- **E04:S18:T01** – Implement three-way split - ✅ COMPLETE (v0.4.18.1+1)
- **E04:S18:T02** – Upgrade packaged framework - ✅ COMPLETE (v0.4.18.2+1)

---

### Epic 6: Framework Management and Maintenance ✅ COMPLETE

**Status:** COMPLETE  
**Completed:** 2026-01-05  
**Version:** v0.6.8.13+1

#### Story 001: Framework Version Management 
- **E06:S01:T01** – Create versioning strategy - COMPLETE (v0.6.1.1+1)
- **E06:S01:T02** – Implement version tracking - COMPLETE (v0.6.1.2+1)
- **E06:S01:T03** – Create compatibility policy - COMPLETE (v0.6.1.3+1)
- **E06:S01:T04** – Add dependency architecture - COMPLETE (v0.6.1.4+1)
- **E06:S01:T05** – Create version tagging - COMPLETE (v0.6.1.5+1)

#### Story 002: Framework Update and Migration 
- **E06:S02:T01** – Create update procedures - COMPLETE (v0.6.2.1+1)
- **E06:S02:T02** – Build migration guide - COMPLETE (v0.6.2.2+1)
- **E06:S02:T03** – Implement backward compatibility - COMPLETE (v0.6.2.3+1)
- **E06:S02:T05** – Add auto-update mechanisms - COMPLETE (v0.6.2.5+1)

#### Story 003: Framework Health Monitoring ✅ COMPLETE
- **E06:S03:T01** – Define health metrics - ✅ COMPLETE (v0.6.3.1+1)
- **E06:S03:T02** – Create monitoring tools - ✅ COMPLETE (v0.6.3.2+1)
- **E06:S03:T03** – Build health dashboard - ✅ COMPLETE (v0.6.3.3+1)

#### Story 008: ai-dev-kit CLI Tool ✅ COMPLETE (v0.6.8.13+1)
- **E06:S08:T00** – Design CLI architecture - ✅ COMPLETE (v0.6.8.1+1)
- **E06:S08:T01** – Implement core commands - ✅ COMPLETE (v0.6.8.2+1)
- **E06:S08:T02** – Add backend abstraction - ✅ COMPLETE (v0.6.8.3+1)

#### Story 006: Feature Requests 🔄 IN PROGRESS
- **E06:S06:T01** – FR/BR/UXR Prioritization Board Implementation - ✅ COMPLETE (v0.6.6.1+1)
- **E06:S06:T02** – Fix Release Workflow Micromanagement Issues - ✅ COMPLETE (v0.6.6.2+8, 2026-03-11T16:45:00Z)
- **E06:S06:T03** – Investigate Apple SDK License Blocking Issue - ✅ COMPLETE (v0.6.6.3+1)
- **E06:S06:T41** – Windsurf: Investigate how to leverage AGENTS.md and SKILL.md for workflows - ✅ COMPLETE (v0.6.6.41+1, 2026-03-11T16:05:00Z)
- **E06:S06:T42** – Fix UKW Agent Board Cleanup Failure - ✅ COMPLETE (v0.6.6.41+1, 2026-03-11T16:15:00Z)
- **E06:S06:T999** – Board Cleanup Test Task - ✅ COMPLETE (v0.6.6.41+1, 2026-03-11T16:10:00Z)
- **E06:S08:T03** – Create configuration management - ✅ COMPLETE (v0.6.8.4+1)
- **E06:S08:T04** – Add error handling - ✅ COMPLETE (v0.6.8.5+1)
- **E06:S08:T05** – Create migration utilities - ✅ COMPLETE (v0.6.8.6+1)
- **E06:S08:T06** – Add remove command - ✅ COMPLETE (v0.6.8.7+1)
- **E06:S08:T07** – Create documentation - ✅ COMPLETE (v0.6.8.8+1)
- **E06:S08:T08** – Add testing framework - ✅ COMPLETE (v0.6.8.9+1)
- **E06:S08:T09** – Implement validation - ✅ COMPLETE (v0.6.8.10+1)
- **E06:S08:T10** – Add PyPI packaging - ✅ COMPLETE (v0.6.8.11+1)
- **E06:S08:T11** – Create deployment scripts - ✅ COMPLETE (v0.6.8.12+1)
- **E06:S08:T12** – Add integration testing - ✅ COMPLETE (v0.6.8.13+1)
- **E06:S08:T13** – Create user guide - ✅ COMPLETE (v0.6.8.13+1)

---

### Epic 7: Codebase Maintenance and Review ✅ COMPLETE

**Status:** COMPLETE  
**Completed:** 2026-01-05  
**Version:** v0.7.5.4+1

#### Story 001: Codebase Maintenance Tasks ✅ COMPLETE
- **E07:S01:T02** – Create maintenance framework - ✅ COMPLETE (v0.7.1.2+1)
- **E07:S01:T03** – Document maintenance workflows - ✅ COMPLETE (v0.7.1.3+1)
- **E07:S01:T04** – Integrate with Kanban - ✅ COMPLETE (v0.7.1.4+1)
- **E07:S01:T05** – PERPETUAL: Markdown maintenance - 🔄 ONGOING
- **E07:S01:T06** – Implement Update Changelog Workflow (UCW) - ✅ COMPLETE (v0.7.1.7+4)
- **E07:S01:T07** – Markdown Maintenance Workflow (MMW) - ✅ COMPLETE (v0.7.1.7+4)
- **E07:S01:T08** – Task Doc Naming Standardization - ✅ COMPLETE (v0.7.1.8+4)
- **E07:S01:T09** – Kanban Template Governance & UXR Ownership - ✅ COMPLETE (v0.7.1.9+5 — UXR-005 spacing validator)
- **E07:S01:T10** – Enhanced Workflow Logging System Implementation - ✅ COMPLETE (v0.7.1.10+1, 2026-03-17T12:00:00Z)

#### Story 002: Code Review Standards and Processes ✅ COMPLETE
- **E07:S02:T01** – Create review standards - ✅ COMPLETE (v0.7.2.1+1)
- **E07:S02:T02** – Build checklist templates - ✅ COMPLETE (v0.7.2.2+1)
- **E07:S02:T03** – Establish review workflows - ✅ COMPLETE (v0.7.2.3+1)
- **E07:S02:T04** – Integrate with Kanban - ✅ COMPLETE (v0.7.2.4+1)

#### Story 003: Code Quality Metrics and Monitoring ✅ COMPLETE
- **E07:S03:T01** – Design metrics framework - ✅ COMPLETE (v0.7.3.1+0)
- **E07:S03:T02** – Create monitoring dashboards - ✅ COMPLETE (v0.7.3.2+0)
- **E07:S03:T03** – Integrate with Kanban - ✅ COMPLETE (v0.7.3.3+0)
- **E07:S03:T04** – Document monitoring processes - ✅ COMPLETE (v0.7.3.4+0)

#### Story 004: Maintenance Automation and Tooling ✅ COMPLETE
- **E07:S04:T01** – Design automation requirements - ✅ COMPLETE (v0.7.4.1+0)
- **E07:S04:T02** – Develop automation scripts - ✅ COMPLETE (v0.7.4.2+0)
- **E07:S04:T03** – Integrate with workflows - ✅ COMPLETE (v0.7.4.3+0)
- **E07:S04:T04** – Document automation usage - ✅ COMPLETE (v0.7.4.4+0)

#### Story 005: Migration UXR – Pre-Existing Kanban Structures ✅ COMPLETE
- **E07:S05:T01** – Synthesize UXR-001 - ✅ COMPLETE (v0.7.5.1+0)
- **E07:S05:T02** – Synthesize UXR-002 - ✅ COMPLETE (v0.7.5.2+0)
- **E07:S05:T03** – Synthesize UXR-003 - ✅ COMPLETE (v0.7.5.3+0)
- **E07:S05:T04** – Synthesize UXR-004 - ✅ COMPLETE (v0.7.5.4+0)

---

### Epic 5: Framework Management and FR Repository 🔄 IN PROGRESS

**Status:** IN PROGRESS  
**Started:** 2025-12-04  
**Version:** v0.5.1.48+1

#### Story 001: Feature Request Repository 🔄 IN PROGRESS (PERPETUAL)
- **E05:S01:T34** – UKW Granular Control and Use Case Flags - ✅ COMPLETE (v0.5.1.34+1)
- **E05:S01:T36** – RW Update Kanban Board on Task Completion - ✅ COMPLETE (v0.5.1.36+1)
- **E05:S01:T37** – Kanban Policy Task Prioritisation and Queue/Stack - ✅ COMPLETE (v0.5.1.37+3)
- **E05:S01:T49** – Enhanced kanban-completed.md with Timestamps and Recent Tasks - ✅ COMPLETE (v0.5.1.49+2, 2026-03-11T16:30:00Z)
- **E05:S01:T47** – Install Logging for Framework Dependencies - 🔄 IN PROGRESS (v0.5.1.47+3)

---

### Epic 8: Tooling & Automation ✅ COMPLETE

**Status:** COMPLETE  
**Completed:** 2026-03-12  
**Version:** v0.8.4.1+1

#### Story 001: Code Generators ✅ COMPLETE
- **E08:S01:T01** – Create generator framework - ✅ COMPLETE (v0.8.1.1+1)
- **E08:S01:T02** – Build template-based generators - ✅ COMPLETE (v0.8.1.2+1)
- **E08:S01:T03** – Establish generator patterns - ✅ COMPLETE (v0.8.1.3+1)

#### Story 002: Additional Validators ✅ COMPLETE
- **E08:S02:T01** – Create validator framework - ✅ COMPLETE (v0.8.2.1+1)
- **E08:S02:T02** – Build framework-specific validators - ✅ COMPLETE (v0.8.2.2+1)
- **E08:S02:T03** – Establish validation patterns - ✅ COMPLETE (v0.8.2.3+1)

#### Story 004: Tooling Baseline ✅ COMPLETE
- **E08:S04:T01** – Tooling & Automation expectations baseline - ✅ COMPLETE (v0.8.4.1+1)

---

### Epic 10: Document Lifecycle Framework — IN PROGRESS

**Status:** IN PROGRESS  
**Last updated:** 2026-06-06  
**Version:** v0.10.1.1+1

#### Story 001: Document Lifecycle Package Implementation Review — IN PROGRESS
- **E10:S01:T01** – Establish expectations baseline for Document Lifecycle package - ✅ COMPLETE (v0.10.1.1+1)

---

### Epic 11: Debugging and Troubleshooting ✅ COMPLETE

**Status:** COMPLETE  
**Completed:** 2026-03-12  
**Version:** v0.11.1.1+1

#### Story 001: Debug Path ✅ COMPLETE
- **E11:S01:T01** – Debug path expectations baseline - ✅ COMPLETE (v0.11.1.1+1)

---

## Forensic Markers

**Format:** `✅ COMPLETE (vRC.EPIC.STORY.TASK+BUILD)`

**Examples:**
- `✅ COMPLETE (v0.4.18.1+1)` - Epic 4, Story 18, Task 1, Build 1
- `✅ COMPLETE (v0.7.1.5+2)` - Epic 7, Story 1, Task 5, Build 2

**Purpose:** 
- Track exact version when task completed
- Enable forensic analysis of project history
- Support rollback and impact analysis
- Provide audit trail for releases

---

## Completion Statistics

### Overall Progress
- **Total Epics:** 9 (6 COMPLETE, 3 IN PROGRESS/TODO)
- **Total Stories:** 50+ (35+ COMPLETE, others IN PROGRESS/TODO)
- **Total Tasks:** 200+ (160+ COMPLETE, others IN PROGRESS/TODO)

### Completion Rate by Epic
- **Epic 1:** 100% (3/3 Stories COMPLETE)
- **Epic 3:** 100% (3/3 Stories COMPLETE)
- **Epic 6:** 100% (8/8 Stories COMPLETE)
- **Epic 7:** 100% (5/5 Stories COMPLETE)
- **Epic 8:** 100% (3/3 Stories COMPLETE)
- **Epic 10:** 100% (1/1 Stories COMPLETE)
- **Epic 11:** 100% (1/1 Stories COMPLETE)
- **Epic 4:** 85% (15/18+ Stories COMPLETE)
- **Epic 2:** 75% (8/11 Stories COMPLETE)
- **Epic 5:** 40% (2/5 Stories COMPLETE)
- **Epic 9:** 20% (1/5 Stories COMPLETE)

---

## Notes

- This document complements the three-way Kanban split
- Use `kboard.md` for active MoSCOW tasks
- Use `kanban-structure.md` for Epic/Story/Task hierarchy
- Use `kanban-board-guide.md` for rules and procedures
- This document serves as the historical record of all completed work

---

*Last Updated: 2026-03-12 (UKW: Post-RW Board Synchronization - All 8 Should Have Tasks Completed)*

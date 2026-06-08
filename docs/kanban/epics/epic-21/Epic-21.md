---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-09T18:30:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 21: Internationalisation and Localisation

**Status:** TODO  
**Priority:** MEDIUM  
**Estimated Effort:** [TBD]  
**Created:** 2025-12-09  
**Last updated:** 2026-06-07 (v0.21.1.1+1 — S00→S01 renumber hygiene; branch `epic/21-internationalisation-localisation`)  
**Branch:** `epic/21-internationalisation-localisation`  
**Version Schema:** `0.21.S.T+B`  
**Production URL:** [N/A for this repo]

---

## Story Checklist

- [ ] **E21:S01 – Language Selection at Setup (UK/US English)** - TODO (v0.21.1.1+1 kanban rehouse)
  - Story: [`story-01-language-selection-at-setup.md`](story-01-language-selection-at-setup.md)
  - Tasks: T01-T07 TODO

- [ ] **E21:S02 – Internationalisation Infrastructure** - TODO (v0.21.2.0+0)
  - Story: [`story-02-internationalisation-infrastructure.md`](story-02-internationalisation-infrastructure.md)
  - Tasks: T01-T07 TODO

- [ ] **E21:S03 – Translation and Localisation** - TODO (v0.21.3.0+0)
  - Story: [`story-03-translation-and-localisation.md`](story-03-translation-and-localisation.md)
  - Tasks: T01-T07 TODO

- [ ] **E21:S04 – Cultural Adaptation** - TODO (v0.21.4.0+0)
  - Story: [`story-04-cultural-adaptation.md`](story-04-cultural-adaptation.md)
  - Tasks: T01-T07 TODO

- [ ] **E21:S05 – European Languages Localization** - TODO (v0.21.5.0+0)
  - Story: [`story-05-european-languages-localization.md`](story-05-european-languages-localization.md)
  - Tasks: T01-T04 TODO

- [ ] **E21:S06 – CJK Languages Localization** - TODO (v0.21.6.0+0)
  - Story: [`story-06-cjk-languages-localization.md`](story-06-cjk-languages-localization.md)
  - Tasks: T01-T03 TODO

- [ ] **E21:S07 – RTL and Extended Locales** - TODO (v0.21.7.0+0)
  - Story: [`story-07-rtl-and-extended-locales.md`](story-07-rtl-and-extended-locales.md)
  - Tasks: T01-T02 TODO


---

## Overview

Epic 21 owns the **Internationalisation and Localisation** framework for ai-dev-kit, making the framework accessible to users worldwide. This epic addresses:

- Language selection at setup (UK/US English + international)
- Translation infrastructure and management
- Cultural adaptation and locale-specific formatting
- RTL (Right-to-Left) support for Arabic/Hebrew

It ensures that:
- Users can select their preferred English variant (UK/US) at setup
- Framework content can be localized to multiple languages
- Cultural preferences are respected (date/time/number formatting)
- Framework is accessible to international developers

---

## Goals

1. **Language Selection at Setup**  
   - Add UK/US English selection prompt at start of all setup processes
   - Create UK/US English content variants
   - Persist language preference in configuration

2. **Internationalisation Infrastructure**  
   - Set up i18n framework and translation file structure
   - Implement locale detection and language switching
   - Configure locale-specific formatting

3. **Translation and Localisation**  
   - Translate framework content to major languages
   - Implement translation workflow and management
   - Track translation completeness

4. **Cultural Adaptation**  
   - Adapt content for different cultures
   - Implement RTL support for Arabic/Hebrew
   - Configure locale-specific formatting

---

## Stories

### Story 1: Language Selection at Setup (UK/US English)

**Status:** TODO  
**Priority:** MEDIUM  
**Estimated Effort:** [TBD]  
**Last updated:** 2025-12-09 (v0.21.1.0+0 – Story created)

**Goal:**  
Add language selection prompt at the very beginning of all setup processes, starting with UK and US English variants. This addresses cultural preferences and makes the framework more accessible.

**Tasks:**
- [ ] E21:S01:T01 – Add language selection prompt to template setup (GitHub template)
- [ ] E21:S01:T02 – Add language selection prompt to CLI tool (`ai-dev-kit init`)
- [ ] E21:S01:T03 – Add language selection prompt to RW Installer (`install_release_workflow.py`)
- [ ] E21:S01:T04 – Create UK/US English content variants (documentation, templates)
- [ ] E21:S01:T05 – Implement configuration persistence (`ai-dev-kit-config.yaml`)
- [ ] E21:S01:T06 – Update content generation to use language preference (RW, templates)
- [ ] E21:S01:T07 – Test UK/US English selection and content generation

> Full story: [`story-01-language-selection-at-setup.md`](story-01-language-selection-at-setup.md)

---

### Story 2: Internationalisation Infrastructure

**Status:** TODO  
**Priority:** MEDIUM  
**Estimated Effort:** [TBD]  
**Last updated:** 2025-12-09 (v0.21.2.0+0 – Story created)

**Goal:**  
Set up i18n infrastructure and framework for broader language support beyond UK/US English.

**Tasks:**
- [ ] E21:S02:T01 – Choose i18n framework/library
- [ ] E21:S02:T02 – Set up translation file structure (`locales/{lang}/`)
- [ ] E21:S02:T03 – Implement locale detection (browser/system locale)
- [ ] E21:S02:T04 – Add language switching functionality
- [ ] E21:S02:T05 – Configure date/time/number formatting per locale
- [ ] E21:S02:T06 – Implement translation key system
- [ ] E21:S02:T07 – Set up translation fallback chain (selected → UK English → US English)

> Full story: [`story-02-internationalisation-infrastructure.md`](story-02-internationalisation-infrastructure.md)

---

### Story 3: Translation and Localisation

**Status:** TODO  
**Priority:** LOW  
**Estimated Effort:** [TBD]  
**Last updated:** 2025-12-09 (v0.21.3.0+0 – Story created)

**Goal:**  
Implement translations and localisation for major languages.

**Tasks:**
- [ ] E21:S03:T01 – Identify and extract all translatable content
- [ ] E21:S03:T02 – Create translation files for major languages
- [ ] E21:S03:T03 – Implement translation lookup and rendering
- [ ] E21:S03:T04 – Create translation workflow and review process
- [ ] E21:S03:T05 – Add translation management tools
- [ ] E21:S03:T06 – Implement translation completeness tracking
- [ ] E21:S03:T07 – Test translations and locale support

> Full story: [`story-03-translation-and-localisation.md`](story-03-translation-and-localisation.md)

---

### Story 4: Cultural Adaptation

**Status:** TODO  
**Priority:** LOW  
**Estimated Effort:** [TBD]  
**Last updated:** 2025-12-09 (v0.21.4.0+0 – Story created)

**Goal:**  
Adapt content and features for different cultures and regions.

**Tasks:**
- [ ] E21:S04:T01 – Research cultural requirements for target locales
- [ ] E21:S04:T02 – Adapt UI/UX for different cultures (examples, imagery)
- [ ] E21:S04:T03 – Implement RTL support (Right-to-Left) for Arabic/Hebrew
- [ ] E21:S04:T04 – Adapt content and examples for cultural context
- [ ] E21:S04:T05 – Configure locale-specific formatting (dates, times, numbers, currency)
- [ ] E21:S04:T06 – Test cultural adaptations
- [ ] E21:S04:T07 – Document cultural considerations and guidelines

> Full story: [`story-04-cultural-adaptation.md`](story-04-cultural-adaptation.md)

---

## Kanban-init intake (`RW -k`)

Run **on branch** `epic/21-internationalisation-localisation` — one task per release. Each command adopts the task as version anchor (`--art`) with doc-init BUILD +0 (`--dpz`; [BR-067](../../fr-br/BR-067-rw-first-doc-only-release-defaults-to-build-plus-one-not-plus-zero.md)).

### E21:S01 — Language selection at setup

| Task | Trigger | Version anchor |
| ---- | ------- | -------------- |
| T01 | `RW -k E21:S01:T01 --art --dpz` | `v0.21.1.1+0` |
| T02 | `RW -k E21:S01:T02 --art --dpz` | `v0.21.1.2+0` |
| T03 | `RW -k E21:S01:T03 --art --dpz` | `v0.21.1.3+0` |
| T04 | `RW -k E21:S01:T04 --art --dpz` | `v0.21.1.4+0` |
| T05 | `RW -k E21:S01:T05 --art --dpz` | `v0.21.1.5+0` |
| T06 | `RW -k E21:S01:T06 --art --dpz` | `v0.21.1.6+0` |
| T07 | `RW -k E21:S01:T07 --art --dpz` | `v0.21.1.7+0` |

### E21:S02 — Internationalisation infrastructure

| Task | Trigger | Version anchor |
| ---- | ------- | -------------- |
| T01 | `RW -k E21:S02:T01 --art --dpz` | `v0.21.2.1+0` |
| T02 | `RW -k E21:S02:T02 --art --dpz` | `v0.21.2.2+0` |
| T03 | `RW -k E21:S02:T03 --art --dpz` | `v0.21.2.3+0` |
| T04 | `RW -k E21:S02:T04 --art --dpz` | `v0.21.2.4+0` |
| T05 | `RW -k E21:S02:T05 --art --dpz` | `v0.21.2.5+0` |
| T06 | `RW -k E21:S02:T06 --art --dpz` | `v0.21.2.6+0` |
| T07 | `RW -k E21:S02:T07 --art --dpz` | `v0.21.2.7+0` |

### E21:S03 — Translation and localisation

| Task | Trigger | Version anchor |
| ---- | ------- | -------------- |
| T01 | `RW -k E21:S03:T01 --art --dpz` | `v0.21.3.1+0` |
| T02 | `RW -k E21:S03:T02 --art --dpz` | `v0.21.3.2+0` |
| T03 | `RW -k E21:S03:T03 --art --dpz` | `v0.21.3.3+0` |
| T04 | `RW -k E21:S03:T04 --art --dpz` | `v0.21.3.4+0` |
| T05 | `RW -k E21:S03:T05 --art --dpz` | `v0.21.3.5+0` |
| T06 | `RW -k E21:S03:T06 --art --dpz` | `v0.21.3.6+0` |
| T07 | `RW -k E21:S03:T07 --art --dpz` | `v0.21.3.7+0` |

### E21:S04 — Cultural adaptation

| Task | Trigger | Version anchor |
| ---- | ------- | -------------- |
| T01 | `RW -k E21:S04:T01 --art --dpz` | `v0.21.4.1+0` |
| T02 | `RW -k E21:S04:T02 --art --dpz` | `v0.21.4.2+0` |
| T03 | `RW -k E21:S04:T03 --art --dpz` | `v0.21.4.3+0` |
| T04 | `RW -k E21:S04:T04 --art --dpz` | `v0.21.4.4+0` |
| T05 | `RW -k E21:S04:T05 --art --dpz` | `v0.21.4.5+0` |
| T06 | `RW -k E21:S04:T06 --art --dpz` | `v0.21.4.6+0` |
| T07 | `RW -k E21:S04:T07 --art --dpz` | `v0.21.4.7+0` |

### E21:S05 — European languages localization

| Task | Trigger | Version anchor |
| ---- | ------- | -------------- |
| T01 | `RW -k E21:S05:T01 --art --dpz` | `v0.21.5.1+0` |
| T02 | `RW -k E21:S05:T02 --art --dpz` | `v0.21.5.2+0` |
| T03 | `RW -k E21:S05:T03 --art --dpz` | `v0.21.5.3+0` |
| T04 | `RW -k E21:S05:T04 --art --dpz` | `v0.21.5.4+0` |

### E21:S06 — CJK languages localization

| Task | Trigger | Version anchor |
| ---- | ------- | -------------- |
| T01 | `RW -k E21:S06:T01 --art --dpz` | `v0.21.6.1+0` |
| T02 | `RW -k E21:S06:T02 --art --dpz` | `v0.21.6.2+0` |
| T03 | `RW -k E21:S06:T03 --art --dpz` | `v0.21.6.3+0` |

### E21:S07 — RTL and extended locales

| Task | Trigger | Version anchor |
| ---- | ------- | -------------- |
| T01 | `RW -k E21:S07:T01 --art --dpz` | `v0.21.7.1+0` |
| T02 | `RW -k E21:S07:T02 --art --dpz` | `v0.21.7.2+0` |

Per-task triggers are also recorded in each task doc under **Kanban-init intake**.

---

## Dependencies

**Blocks:**
- Improved accessibility for international users
- Cultural preference support (UK/US English)
- Broader framework adoption

**Blocked By:**
- FR-006: Localisation and Language Selection (accepted, this epic implements it)

**Coordinates With:**
- Epic 1: AI Dev Kit Core (setup processes)
- Epic 2: Workflow Management Framework (RW installer)
- Epic 4: Kanban Framework (templates and documentation)

---

## References

- `packages/frameworks/kanban/templates/COMPREHENSIVE_CANONICAL_EST_STRUCTURE.md` - Epic 21 canonical definition
- `docs/kanban/fr-br/FR-006-localization-language-selection-uk-us-english.md` - Feature request
- `docs/documentation/user-docs/framework-dependency-post-template-setup-guide.md` - Setup process
- `packages/frameworks/workflow-mgt/scripts/install_release_workflow.py` - RW installer

---


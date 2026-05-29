---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-09T18:30:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 21: Internationalization and Localization

**Status:** TODO  
**Priority:** MEDIUM  
**Estimated Effort:** [TBD]  
**Created:** 2025-12-09  
**Last updated:** 2025-12-09 (v0.21.0.0+0 – Epic created)  
**Branch:** `epic/21-internationalization-localization`  
**Version Schema:** `0.21.S.T+B`  
**Production URL:** [N/A for this repo]

---

## Story Checklist

- [ ] **E21:S00 – Language Selection at Setup (UK/US English)** - TODO (v0.21.0.0+0)
  - Story: [`Story-000-language-selection-at-setup.md`](Story-000-language-selection-at-setup.md)
  - Tasks: T01-T07 TODO

- [ ] **E21:S01 – Internationalization Infrastructure** - TODO (v0.21.0.0+0)
  - Story: [`Story-001-internationalization-infrastructure.md`](Story-001-internationalization-infrastructure.md)
  - Tasks: T01-T07 TODO

- [ ] **E21:S02 – Translation and Localization** - TODO (v0.21.0.0+0)
  - Story: [`Story-002-translation-and-localization.md`](Story-002-translation-and-localization.md)
  - Tasks: T01-T07 TODO

- [ ] **E21:S03 – Cultural Adaptation** - TODO (v0.21.0.0+0)
  - Story: [`Story-003-cultural-adaptation.md`](Story-003-cultural-adaptation.md)
  - Tasks: T01-T07 TODO


---

## Overview

Epic 21 owns the **Internationalization and Localization** framework for ai-dev-kit, making the framework accessible to users worldwide. This epic addresses:

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

2. **Internationalization Infrastructure**  
   - Set up i18n framework and translation file structure
   - Implement locale detection and language switching
   - Configure locale-specific formatting

3. **Translation and Localization**  
   - Translate framework content to major languages
   - Implement translation workflow and management
   - Track translation completeness

4. **Cultural Adaptation**  
   - Adapt content for different cultures
   - Implement RTL support for Arabic/Hebrew
   - Configure locale-specific formatting

---

## Stories

### Story 0: Language Selection at Setup (UK/US English)

**Status:** TODO  
**Priority:** MEDIUM  
**Estimated Effort:** [TBD]  
**Last updated:** 2025-12-09 (v0.21.0.0+0 – Story created)

**Goal:**  
Add language selection prompt at the very beginning of all setup processes, starting with UK and US English variants. This addresses cultural preferences and makes the framework more accessible.

**Tasks:**
- [ ] E21:S00:T01 – Add language selection prompt to template setup (GitHub template)
- [ ] E21:S00:T02 – Add language selection prompt to CLI tool (`ai-dev-kit init`)
- [ ] E21:S00:T03 – Add language selection prompt to RW Installer (`install_release_workflow.py`)
- [ ] E21:S00:T04 – Create UK/US English content variants (documentation, templates)
- [ ] E21:S00:T05 – Implement configuration persistence (`ai-dev-kit-config.yaml`)
- [ ] E21:S00:T06 – Update content generation to use language preference (RW, templates)
- [ ] E21:S00:T07 – Test UK/US English selection and content generation

> Full story: [`Story-000-language-selection-at-setup.md`](Story-000-language-selection-at-setup.md)

---

### Story 1: Internationalization Infrastructure

**Status:** TODO  
**Priority:** MEDIUM  
**Estimated Effort:** [TBD]  
**Last updated:** 2025-12-09 (v0.21.0.0+0 – Story created)

**Goal:**  
Set up i18n infrastructure and framework for broader language support beyond UK/US English.

**Tasks:**
- [ ] E21:S01:T01 – Choose i18n framework/library
- [ ] E21:S01:T02 – Set up translation file structure (`locales/{lang}/`)
- [ ] E21:S01:T03 – Implement locale detection (browser/system locale)
- [ ] E21:S01:T04 – Add language switching functionality
- [ ] E21:S01:T05 – Configure date/time/number formatting per locale
- [ ] E21:S01:T06 – Implement translation key system
- [ ] E21:S01:T07 – Set up translation fallback chain (selected → English → US English)

> Full story: [`Story-001-internationalization-infrastructure.md`](Story-001-internationalization-infrastructure.md)

---

### Story 2: Translation and Localization

**Status:** TODO  
**Priority:** LOW  
**Estimated Effort:** [TBD]  
**Last updated:** 2025-12-09 (v0.21.0.0+0 – Story created)

**Goal:**  
Implement translations and localization for major languages.

**Tasks:**
- [ ] E21:S02:T01 – Identify and extract all translatable content
- [ ] E21:S02:T02 – Create translation files for major languages
- [ ] E21:S02:T03 – Implement translation lookup and rendering
- [ ] E21:S02:T04 – Create translation workflow and review process
- [ ] E21:S02:T05 – Add translation management tools
- [ ] E21:S02:T06 – Implement translation completeness tracking
- [ ] E21:S02:T07 – Test translations and locale support

> Full story: [`Story-002-translation-and-localization.md`](Story-002-translation-and-localization.md)

---

### Story 3: Cultural Adaptation

**Status:** TODO  
**Priority:** LOW  
**Estimated Effort:** [TBD]  
**Last updated:** 2025-12-09 (v0.21.0.0+0 – Story created)

**Goal:**  
Adapt content and features for different cultures and regions.

**Tasks:**
- [ ] E21:S03:T01 – Research cultural requirements for target locales
- [ ] E21:S03:T02 – Adapt UI/UX for different cultures (examples, imagery)
- [ ] E21:S03:T03 – Implement RTL support (Right-to-Left) for Arabic/Hebrew
- [ ] E21:S03:T04 – Adapt content and examples for cultural context
- [ ] E21:S03:T05 – Configure locale-specific formatting (dates, times, numbers, currency)
- [ ] E21:S03:T06 – Test cultural adaptations
- [ ] E21:S03:T07 – Document cultural considerations and guidelines

> Full story: [`Story-003-cultural-adaptation.md`](Story-003-cultural-adaptation.md)

---

## Dependencies

**Blocks:**
- Improved accessibility for international users
- Cultural preference support (UK/US English)
- Broader framework adoption

**Blocked By:**
- FR-006: Localization and Language Selection (accepted, this epic implements it)

**Coordinates With:**
- Epic 1: AI Dev Kit Core (setup processes)
- Epic 2: Workflow Management Framework (RW installer)
- Epic 4: Kanban Framework (templates and documentation)

---

## References

- `packages/frameworks/kanban/templates/COMPREHENSIVE_CANONICAL_EST_STRUCTURE.md` - Epic 21 canonical definition
- `docs/project-management/kanban/fr-br/FR-006-localization-language-selection-uk-us-english.md` - Feature request
- `docs/documentation/user-docs/framework-dependency-post-template-setup-guide.md` - Setup process
- `packages/frameworks/workflow mgt/scripts/install_release_workflow.py` - RW installer

---


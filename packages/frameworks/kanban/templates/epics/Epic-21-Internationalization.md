---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-10T18:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 21: Internationalization and Localization

**Status:** TODO  
**Priority:** HIGH  
**Estimated Effort:** [TBD]  
**Created:** [YYYY-MM-DD]  
**Last updated:** [YYYY-MM-DD] (v0.21.0.0+0 – Template created)  
**Branch:** `epic/21-internationalization`  
**Version Schema:** `0.21.S.T+B`  
**Production URL:** [Optional]

---

## Story Checklist

- [ ] **E21:S00 – Language Selection at Setup (MVP - UK/US English)** - TODO
- [ ] **E21:S01 – Internationalization Infrastructure** - TODO
- [ ] **E21:S02 – Translation and Localization** - TODO
- [ ] **E21:S03 – Cultural Adaptation** - TODO

> **CRITICAL:** This Story Checklist is the **SINGLE SOURCE OF TRUTH** for story status and version markers.  
> **Forensic Marker Format:** `✅ COMPLETE (vRC.E.S.T+B)` (e.g., `✅ COMPLETE (v0.21.1.3+1)`)  
> **Release Workflow Requirement:** When Release Workflow (RW) Step 4 updates this Epic document, it MUST update **ALL sections**:
> - Epic header `Last updated` field
> - Story Checklist (status and version markers)
> - Detailed story sections (Status, Last updated, task checkboxes)
> - Any other references to the story/task being released
> 
> **Consistency Check:** After each RW, verify that Epic header, Story Checklist, and detailed sections all match.

---

## Overview

This epic encompasses internationalization (i18n) and localization (l10n) activities, including language selection at setup, translation infrastructure, translation management, and cultural adaptation. This epic provides the organizational structure for making the framework accessible to users worldwide, supporting multiple languages and cultural preferences.

**Purpose:** Multi-language support and localization.  
**Scope:** Translation, locale management, cultural adaptation, RTL support, language selection at setup.  
**Status:** Project-specific (canonical pattern)

---

## Goals

1. **Language Selection at Setup:** Add language selection prompt (UK/US English MVP)
2. **Set Up i18n Infrastructure:** Establish i18n infrastructure for broader language support
3. **Implement Translations:** Create translations and localization for major languages
4. **Cultural Adaptation:** Adapt content and features for different cultures

---

## Stories

### Story 0: Language Selection at Setup (MVP - UK/US English)

**Status:** TODO  
**Priority:** HIGH  
**Estimated Effort:** [TBD]  
**Last updated:** [YYYY-MM-DD] (v0.21.0.0+0 – Template created)

**Goal:** Add language selection prompt at the very beginning of setup processes, starting with UK and US English variants.

**Tasks:**
- [ ] E21:S00:T01 – Add language selection prompt to template setup (GitHub template)
- [ ] E21:S00:T02 – Add language selection prompt to CLI tool (`ai-dev-kit init`)
- [ ] E21:S00:T03 – Add language selection prompt to RW Installer (`install_release_workflow.py`)
- [ ] E21:S00:T04 – Create UK/US English content variants (documentation, templates)
- [ ] E21:S00:T05 – Implement configuration persistence (`ai-dev-kit-config.yaml`)
- [ ] E21:S00:T06 – Update content generation to use language preference (RW, templates)
- [ ] E21:S00:T07 – Test UK/US English selection and content generation

> **Format:** Always use full `Exx:Sxx:Txx` format (e.g., `E21:S00:T01`, not `T01` alone)

> **Forensic Marker Format:** `✅ COMPLETE (vRC.E.S.T+B)` (e.g., `✅ COMPLETE (v0.21.0.3+1)`)  
> **Consistency:** Task checkboxes in this detailed section must match the Story file's Task Checklist.

**Acceptance Criteria:**
- Language selection prompt added to all setup processes
- UK/US English content variants created
- Configuration persistence implemented
- Content generation uses language preference
- UK/US English selection tested

**Parallel Development Dependencies:**
- None
- *Parallel Development Candidacy:* Safe (can be done independently)

> Full story: `docs/project-management/kanban/epics/Epic-21/Story-000-language-selection-at-setup.md`

---

### Story 1: Internationalization Infrastructure

**Status:** TODO  
**Priority:** HIGH  
**Estimated Effort:** [TBD]  
**Last updated:** [YYYY-MM-DD] (v0.21.1.0+0 – Template created)

**Goal:** Set up i18n infrastructure and framework for broader language support.

**Tasks:**
- [ ] E21:S01:T01 – Choose i18n framework/library (e.g., gettext, i18next, or custom)
- [ ] E21:S01:T02 – Set up translation file structure (`locales/{lang}/`)
- [ ] E21:S01:T03 – Implement locale detection (browser/system locale)
- [ ] E21:S01:T04 – Add language switching functionality
- [ ] E21:S01:T05 – Configure date/time/number formatting per locale
- [ ] E21:S01:T06 – Implement translation key system
- [ ] E21:S01:T07 – Set up translation fallback chain (selected → English → US English)

> **Format:** Always use full `Exx:Sxx:Txx` format (e.g., `E21:S01:T01`, not `T01` alone)

> **Forensic Marker Format:** `✅ COMPLETE (vRC.E.S.T+B)` (e.g., `✅ COMPLETE (v0.21.1.3+1)`)  
> **Consistency:** Task checkboxes in this detailed section must match the Story file's Task Checklist.

**Acceptance Criteria:**
- i18n framework chosen and set up
- Translation file structure created
- Locale detection implemented
- Language switching functionality added
- Date/time/number formatting configured per locale
- Translation key system implemented
- Translation fallback chain set up

**Parallel Development Dependencies:**
- Depends on Story 0 (Language Selection at Setup)
- *Parallel Development Candidacy:* Blocked (requires Story 0 language selection)

> Full story: `docs/project-management/kanban/epics/Epic-21/Story-001-internationalization-infrastructure.md`

---

### Story 2: Translation and Localization

**Status:** TODO  
**Priority:** HIGH  
**Estimated Effort:** [TBD]  
**Last updated:** [YYYY-MM-DD] (v0.21.2.0+0 – Template created)

**Goal:** Implement translations and localization for major languages.

**Tasks:**
- [ ] E21:S02:T01 – Identify and extract all translatable content
- [ ] E21:S02:T02 – Create translation files for major languages (Spanish, French, German, Chinese, Japanese, Portuguese, Russian, Arabic)
- [ ] E21:S02:T03 – Implement translation lookup and rendering
- [ ] E21:S02:T04 – Create translation workflow and review process
- [ ] E21:S02:T05 – Add translation management tools
- [ ] E21:S02:T06 – Implement translation completeness tracking
- [ ] E21:S02:T07 – Test translations and locale support

> **Format:** Always use full `Exx:Sxx:Txx` format (e.g., `E21:S02:T01`, not `T01` alone)

> **Forensic Marker Format:** `✅ COMPLETE (vRC.E.S.T+B)` (e.g., `✅ COMPLETE (v0.21.2.3+1)`)  
> **Consistency:** Task checkboxes in this detailed section must match the Story file's Task Checklist.

**Acceptance Criteria:**
- All translatable content identified and extracted
- Translation files created for major languages
- Translation lookup and rendering implemented
- Translation workflow and review process created
- Translation management tools added
- Translation completeness tracking implemented
- Translations and locale support tested

**Parallel Development Dependencies:**
- Depends on Story 1 (Internationalization Infrastructure)
- *Parallel Development Candidacy:* Blocked (requires Story 1 infrastructure)

> Full story: `docs/project-management/kanban/epics/Epic-21/Story-002-translation-and-localization.md`

---

### Story 3: Cultural Adaptation

**Status:** TODO  
**Priority:** HIGH  
**Estimated Effort:** [TBD]  
**Last updated:** [YYYY-MM-DD] (v0.21.3.0+0 – Template created)

**Goal:** Adapt content and features for different cultures and regions.

**Tasks:**
- [ ] E21:S03:T01 – Research cultural requirements for target locales
- [ ] E21:S03:T02 – Adapt UI/UX for different cultures (examples, imagery)
- [ ] E21:S03:T03 – Implement RTL support (Right-to-Left) for Arabic/Hebrew
- [ ] E21:S03:T04 – Adapt content and examples for cultural context
- [ ] E21:S03:T05 – Configure locale-specific formatting (dates, times, numbers, currency)
- [ ] E21:S03:T06 – Test cultural adaptations
- [ ] E21:S03:T07 – Document cultural considerations and guidelines

> **Format:** Always use full `Exx:Sxx:Txx` format (e.g., `E21:S03:T01`, not `T01` alone)

> **Forensic Marker Format:** `✅ COMPLETE (vRC.E.S.T+B)` (e.g., `✅ COMPLETE (v0.21.3.3+1)`)  
> **Consistency:** Task checkboxes in this detailed section must match the Story file's Task Checklist.

**Acceptance Criteria:**
- Cultural requirements researched for target locales
- UI/UX adapted for different cultures
- RTL support implemented for Arabic/Hebrew
- Content and examples adapted for cultural context
- Locale-specific formatting configured
- Cultural adaptations tested
- Cultural considerations and guidelines documented

**Parallel Development Dependencies:**
- Depends on Story 2 (Translation and Localization)
- Coordinates with Epic 12 (Frontend & UI) for RTL support
- *Parallel Development Candidacy:* Blocked (requires Story 2 translations)

> Full story: `docs/project-management/kanban/epics/Epic-21/Story-003-cultural-adaptation.md`

---

## Dependencies

**Blocks:**
- Multi-language support
- International user access
- Cultural adaptation

**Blocked By:**
- None (project-specific epic)

**Coordinates With:**
- Epic 12: Frontend and User Interface (RTL support, UI adaptation)
- All feature epics (i18n/l10n requirements)

---

## Risks & Mitigations

- **Risk:** Translation quality issues — **Mitigation:** Use professional translators, implement review process, test translations
- **Risk:** Cultural adaptation complexity — **Mitigation:** Research cultural requirements, consult cultural experts, test adaptations
- **Risk:** RTL support complexity — **Mitigation:** Use RTL-aware frameworks, test thoroughly, follow RTL best practices

---

## References

- Internationalization best practices
- Translation management standards
- Cultural adaptation guidelines
- RTL support patterns

---

## Contextualization Notes

**Placeholders to Replace:**
- None (project-specific epic, customize based on project needs)

**Customization Guidance:**
- Adjust language selection based on project requirements
- Modify translation approach based on project needs
- Customize cultural adaptation based on target locales
- Integrate with project-specific i18n/l10n tools

---

## Integration Points

- **Epic 12 (Frontend & UI):** RTL support and UI adaptation
- **All Feature Epics:** i18n/l10n requirements for all features


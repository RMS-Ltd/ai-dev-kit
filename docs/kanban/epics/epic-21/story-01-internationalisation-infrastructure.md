---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-09T18:35:00Z
expires_at: null
housekeeping_policy: keep
---

# Story 001 – Internationalisation Infrastructure

**Status:** TODO  
**Priority:** MEDIUM  
**Estimated Effort:** [TBD]  
**Created:** 2025-12-09  
**Last updated:** 2025-12-09 (v0.21.0.0+0 – Story created)  
**Version:** v0.21.0.0+0  
**Code:** E21S01

---

## Overview

Set up i18n infrastructure and framework for broader language support beyond UK/US English. This story establishes the foundation for multi-language support, including translation file structure, locale detection, and language switching.

---

## Goal

Establish a robust internationalisation infrastructure that supports multiple languages, with locale detection, language switching, and locale-specific formatting. This provides the foundation for Phase 2 of FR-006 (international localisation).

---

## Task Checklist

- [ ] **E21:S01:T01 – Choose i18n framework/library** - TODO
  - Task: [`T01-choose-i18n-frameworklibrary`](story-01-internationalisation-infrastructure/T01-choose-i18n-frameworklibrary.md)
- [ ] **E21:S01:T02 – Set up translation file structure (`locales/{lang}/`)** - TODO
  - Task: [`T02-set-up-translation-file-structure-localeslang`](story-01-internationalisation-infrastructure/T02-set-up-translation-file-structure-localeslang.md)
- [ ] **E21:S01:T03 – Implement locale detection (browser/system locale)** - TODO
  - Task: [`T03-implement-locale-detection-browsersystem-locale`](story-01-internationalisation-infrastructure/T03-implement-locale-detection-browsersystem-locale.md)
- [ ] **E21:S01:T04 – Add language switching functionality** - TODO
  - Task: [`T04-add-language-switching-functionality`](story-01-internationalisation-infrastructure/T04-add-language-switching-functionality.md)
- [ ] **E21:S01:T05 – Configure date/time/number formatting per locale** - TODO
  - Task: [`T05-configure-datetimenumber-formatting-per-locale`](story-01-internationalisation-infrastructure/T05-configure-datetimenumber-formatting-per-locale.md)
- [ ] **E21:S01:T06 – Implement translation key system** - TODO
  - Task: [`T06-implement-translation-key-system`](story-01-internationalisation-infrastructure/T06-implement-translation-key-system.md)
- [ ] **E21:S01:T07 – Set up translation fallback chain (selected → UK English → US English)** - TODO
  - Task: [`T07-set-up-translation-fallback-chain-selected-english-us-englis`](story-01-internationalisation-infrastructure/T07-set-up-translation-fallback-chain-selected-english-us-englis.md)

---

## Acceptance Criteria

- [ ] i18n framework selected and integrated
- [ ] Translation file structure established
- [ ] Locale detection works
- [ ] Language switching works
- [ ] Locale-specific formatting configured
- [ ] Translation key system implemented
- [ ] Fallback chain works correctly

---

## Dependencies

**Blocks:**
- Translation and Localisation (Story 2)
- Cultural Adaptation (Story 3)

**Blocked By:**
- E21:S00: Language Selection at Setup (MVP)

**Related Work:**
- **FR-006:** Localisation and Language Selection (Phase 2)
- **E21:S02:** Translation and Localisation
- **E21:S03:** Cultural Adaptation

---

## References

- `docs/kanban/fr-br/FR-006-localization-language-selection-uk-us-english.md` - Feature request
- `packages/frameworks/kanban/templates/COMPREHENSIVE_CANONICAL_EST_STRUCTURE.md` - Epic 21 canonical definition

---

_Last updated: 2025-12-09 (v0.21.0.0+0 – Story created)_


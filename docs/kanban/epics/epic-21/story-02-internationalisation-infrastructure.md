---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-09T18:35:00Z
expires_at: null
housekeeping_policy: keep
---

# Story 02 – Internationalisation Infrastructure

**Status:** COMPLETE  
**Priority:** MEDIUM  
**Estimated Effort:** [TBD]  
**Created:** 2025-12-09  
**Last updated:** 2026-06-08 (UKW — all tasks shipped; v0.21.2.7+1)  
**Version:** v0.21.2.7+1  
**Code:** E21S02

---

## Overview

Set up i18n infrastructure and framework for broader language support beyond UK/US English. **All seven tasks complete** — ADR-024 hybrid strategy, manifest v2 locale layout, detection/switching/formatting APIs, translation key resolution, and fallback chain (en-GB → en-US).

---

## Goal

Establish a robust internationalisation infrastructure that supports multiple languages, with locale detection, language switching, and locale-specific formatting. This provides the foundation for Phase 2 of FR-006 (international localisation).

---

## Task Checklist

- [x] **E21:S02:T01 – Choose i18n framework/library** - COMPLETE (v0.21.2.1+1 — ADR-024 C1 hybrid)
  - Task: [`T01-choose-i18n-frameworklibrary`](story-02-internationalisation-infrastructure/T01-choose-i18n-frameworklibrary.md)
  - Planning: [IPP-E21S02T01](../../../implementation-cycles/IPP-E21S02T01-choose-i18n-framework.md) · [ADR-024](../../../architecture/standards-and-adrs/ADR-024-i18n-framework-strategy.md)
- [x] **E21:S02:T02 – Set up translation file structure (`locales/{lang}/`)** - COMPLETE (v0.21.2.2+1 — manifest v2 + keys scaffold)
  - Task: [`T02-set-up-translation-file-structure-localeslang`](story-02-internationalisation-infrastructure/T02-set-up-translation-file-structure-localeslang.md)
  - Planning: [IPP-E21S02T02](../../../implementation-cycles/IPP-E21S02T02-locale-file-structure.md) · [locale-file-structure-conventions](../../../governance/standards/locale-file-structure-conventions.md)
- [x] **E21:S02:T03 – Implement locale detection (browser/system locale)** - COMPLETE (v0.21.2.3+1 — ADR-024 precedence + detection APIs)
  - Task: [`T03-implement-locale-detection-browsersystem-locale`](story-02-internationalisation-infrastructure/T03-implement-locale-detection-browsersystem-locale.md)
  - Planning: [IPP-E21S02T03](../../../implementation-cycles/IPP-E21S02T03-locale-detection.md) · [locale-detection-conventions](../../../governance/standards/locale-detection-conventions.md)
- [x] **E21:S02:T04 – Add language switching functionality** - COMPLETE (v0.21.2.4+1 — switch_locale + CLI --locale)
  - Task: [`T04-add-language-switching-functionality`](story-02-internationalisation-infrastructure/T04-add-language-switching-functionality.md)
  - Planning: [IPP-E21S02T04](../../../implementation-cycles/IPP-E21S02T04-locale-switching.md) · [locale-switching-conventions](../../../governance/standards/locale-switching-conventions.md)
- [x] **E21:S02:T05 – Configure date/time/number formatting per locale** - COMPLETE (v0.21.2.5+1 — locale_formatting.py + Babel)
  - Task: [`T05-configure-datetimenumber-formatting-per-locale`](story-02-internationalisation-infrastructure/T05-configure-datetimenumber-formatting-per-locale.md)
  - Planning: [IPP-E21S02T05](../../../implementation-cycles/IPP-E21S02T05-locale-formatting.md) · [locale-formatting-conventions](../../../governance/standards/locale-formatting-conventions.md)
- [x] **E21:S02:T06 – Implement translation key system** - COMPLETE (v0.21.2.6+1 — resolve_locale_key + catalog cache)
  - Task: [`T06-implement-translation-key-system`](story-02-internationalisation-infrastructure/T06-implement-translation-key-system.md)
  - Planning: [IPP-E21S02T06](../../../implementation-cycles/IPP-E21S02T06-locale-key-system.md) · [locale-key-conventions](../../../governance/standards/locale-key-conventions.md)
- [x] **E21:S02:T07 – Set up translation fallback chain (selected → UK English → US English)** - COMPLETE (v0.21.2.7+1 — ADR-024 chain + en-US step)
  - Task: [`T07-set-up-translation-fallback-chain-selected-english-us-englis`](story-02-internationalisation-infrastructure/T07-set-up-translation-fallback-chain-selected-english-us-englis.md)
  - Planning: [IPP-E21S02T07](../../../implementation-cycles/IPP-E21S02T07-locale-fallback-chain.md) · [locale-fallback-conventions](../../../governance/standards/locale-fallback-conventions.md)

---

## Acceptance Criteria

- [x] i18n framework selected and integrated (T01 @ v0.21.2.1+1 — ADR-024)
- [x] Translation file structure established (T02 @ v0.21.2.2+1)
- [x] Locale detection works (T03 @ v0.21.2.3+1)
- [x] Language switching works (T04 @ v0.21.2.4+1)
- [x] Locale-specific formatting configured (T05 @ v0.21.2.5+1)
- [x] Translation key system implemented (T06 @ v0.21.2.6+1)
- [x] Fallback chain works correctly (T07 @ v0.21.2.7+1)

---

## Dependencies

**Blocks:**
- Translation and Localisation (Story 2)
- Cultural Adaptation (Story 3)

**Blocked By:**
- E21:S01: Language Selection at Setup (MVP)

**Related Work:**
- **FR-006:** Localisation and Language Selection (Phase 2)
- **E21:S03:** Translation and Localisation
- **E21:S04:** Cultural Adaptation

---

## References

- `docs/kanban/fr-br/FR-006-localization-language-selection-uk-us-english.md` - Feature request
- [ADR-024](../../../architecture/standards-and-adrs/ADR-024-i18n-framework-strategy.md) - i18n framework strategy (E21:S02:T01)
- [locale-file-structure-conventions.md](../../../governance/standards/locale-file-structure-conventions.md) - manifest v2 layout (E21:S02:T02)
- [IPP-E21S02T02](../../../implementation-cycles/IPP-E21S02T02-locale-file-structure.md) - T02 planning package
- [IPP-E21S02T01](../../../implementation-cycles/IPP-E21S02T01-choose-i18n-framework.md) - T01 planning package
- `packages/frameworks/kanban/templates/COMPREHENSIVE_CANONICAL_EST_STRUCTURE.md` - Epic 21 canonical definition

---

_Last updated: 2026-06-08 (UKW bookkeeping — story COMPLETE @ v0.21.2.7+1)_


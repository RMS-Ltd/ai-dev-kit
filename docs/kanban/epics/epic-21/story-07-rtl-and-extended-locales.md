---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-06T17:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Story 07 – RTL and Extended Locales

**Status:** TODO  
**Priority:** LOW  
**Estimated Effort:** [TBD]  
**Created:** 2026-06-06  
**Last updated:** 2026-06-06 (E21 rehouse — per-locale delivery split from S02:T02)  
**Version:** v0.21.1.0+0  
**Code:** E21S07

---

## Overview

Deliver translation files for Arabic (RTL) and Russian, coordinating with E21:S03 for RTL layout and locale-specific formatting.

---

## Goal

Populate `locales/ar/` and `locales/ru/` with framework user-facing content. Arabic delivery coordinates with E21:S04:T03 (RTL support).

---

## Task Checklist

- [ ] **E21:S07:T01 – Arabic (ar) translation files** - TODO
  - Task: [`T01-arabic-ar-translation-files`](story-07-rtl-and-extended-locales/T01-arabic-ar-translation-files.md)
- [ ] **E21:S07:T02 – Russian (ru) translation files** - TODO
  - Task: [`T02-russian-ru-translation-files`](story-07-rtl-and-extended-locales/T02-russian-ru-translation-files.md)

---

## Acceptance Criteria

- [ ] Each locale has translation files under `locales/{lang}/`
- [ ] Arabic strings validated with RTL rendering (E21:S03)
- [ ] Priority user-facing strings translated (setup, README, core guides)
- [ ] Fallback to English documented per locale
- [ ] Each locale task can ship independently via RW

---

## Dependencies

**Blocked By:**
- E21:S02: Internationalization Infrastructure
- E21:S03:T01: Translatable content extracted
- E21:S03:T02: Locale rollout matrix defined

**Coordinates With:**
- E21:S04:T03: RTL support (Arabic)

**Related Work:**
- **FR-006:** Localization and Language Selection (Phase 2)
- **E21:S03:** Translation pipeline (horizontal)

---

## References

- `docs/kanban/fbu/FR-006-localization-language-selection-uk-us-english.md`
- `docs/kanban/epics/epic-21/story-04-cultural-adaptation.md`

---

_Last updated: 2026-06-06 (E21 rehouse — RTL and extended locale delivery)_

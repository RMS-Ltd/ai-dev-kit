---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-06T17:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Story 06 – CJK Languages Localization

**Status:** IN PROGRESS  
**Priority:** LOW  
**Estimated Effort:** [TBD]  
**Created:** 2026-06-06  
**Last updated:** 2026-06-10 (v0.21.6.1+1 – Kanban documentation setup)
**Version:** v0.21.6.1+1
**Code:** E21S06

---

## Overview

Deliver translation files and reviewed content for Chinese (Simplified and Traditional) and Japanese. CJK locales are grouped for shared typography and review conventions.

---

## Goal

Populate `locales/zh-CN/`, `locales/zh-TW/`, and `locales/ja/` with framework user-facing content, with independent RW attribution per locale.

---

## Task Checklist

- [x] **E21:S06:T01 – Chinese Simplified (zh-CN) translation files** - COMPLETE (v0.21.6.1+1)
  - Task: [`T01-chinese-simplified-zh-cn-translation-files`](story-06-cjk-languages-localization/T01-chinese-simplified-zh-cn-translation-files.md)
- [ ] **E21:S06:T02 – Chinese Traditional (zh-TW) translation files** - TODO
  - Task: [`T02-chinese-traditional-zh-tw-translation-files`](story-06-cjk-languages-localization/T02-chinese-traditional-zh-tw-translation-files.md)
- [ ] **E21:S06:T03 – Japanese (ja) translation files** - TODO
  - Task: [`T03-japanese-ja-translation-files`](story-06-cjk-languages-localization/T03-japanese-ja-translation-files.md)

---

## Acceptance Criteria

- [ ] Each locale has translation files under `locales/{lang}/`
- [ ] Priority user-facing strings translated (setup, README, core guides)
- [ ] Fallback to English documented per locale
- [ ] Completeness tracked via E21:S03:T06 tooling
- [ ] Each locale task can ship independently via RW

---

## Dependencies

**Blocked By:**
- E21:S02: Internationalization Infrastructure
- E21:S03:T01: Translatable content extracted
- E21:S03:T02: Locale rollout matrix defined

**Related Work:**
- **FR-006:** Localization and Language Selection (Phase 2)
- **E21:S03:** Translation pipeline (horizontal)
- **E21:S04:** Cultural Adaptation (locale formatting)

---

## References

- `docs/kanban/fr-br/FR-006-localization-language-selection-uk-us-english.md`
- `docs/kanban/epics/epic-21/story-03-translation-and-localization.md`

---

_Last updated: 2026-06-06 (E21 rehouse — per-locale CJK delivery)_

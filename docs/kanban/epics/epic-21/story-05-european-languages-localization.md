---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-06T17:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Story 05 – European Languages Localization

**Status:** IN PROGRESS  
**Priority:** LOW  
**Estimated Effort:** [TBD]  
**Created:** 2026-06-06  
**Last updated:** 2026-06-10 (v0.21.5.1+1 – Kanban documentation setup)
**Version:** v0.21.5.1+1
**Code:** E21S05

---

## Overview

Deliver translation files and reviewed content for European target locales. One discrete task per language enables independent prioritization, RW attribution, and community contribution.

---

## Goal

Populate `locales/{lang}/` for Spanish, French, German, and Portuguese with framework user-facing content, meeting completeness thresholds defined in E21:S02 before cultural adaptation (E21:S03) where applicable.

---

## Task Checklist

- [x] **E21:S05:T01 – Spanish (es) translation files** - ✅ COMPLETE (**v0.21.5.1+1**) — [—IPP—](../../implementation-cycles/IPP-E21S05T01-spanish-es-translation-files.md)
  - Task: [`T01-spanish-es-translation-files`](story-05-european-languages-localization/T01-spanish-es-translation-files.md)
- [ ] **E21:S05:T02 – French (fr) translation files** - TODO
  - Task: [`T02-french-fr-translation-files`](story-05-european-languages-localization/T02-french-fr-translation-files.md)
- [ ] **E21:S05:T03 – German (de) translation files** - TODO
  - Task: [`T03-german-de-translation-files`](story-05-european-languages-localization/T03-german-de-translation-files.md)
- [ ] **E21:S05:T04 – Portuguese (pt) translation files** - TODO
  - Task: [`T04-portuguese-pt-translation-files`](story-05-european-languages-localization/T04-portuguese-pt-translation-files.md)

---

## Acceptance Criteria

- [ ] Each locale has translation files under `locales/{lang}/`
- [ ] Priority user-facing strings translated (setup, README, core guides)
- [ ] Fallback to English documented per locale
- [ ] Completeness tracked via E21:S03:T06 tooling
- [ ] Each locale task can ship independently via RW

---

## Dependencies

**Blocks:**
- European locale availability in language selection (extends E21:S01 after Phase 1)

**Blocked By:**
- E21:S02: Internationalization Infrastructure
- E21:S03:T01: Translatable content extracted
- E21:S03:T02: Locale rollout matrix defined

**Related Work:**
- **FR-006:** Localization and Language Selection (Phase 2)
- **E21:S03:** Translation pipeline (horizontal)
- **E21:S04:** Cultural Adaptation

---

## References

- `docs/kanban/fr-br/FR-006-localization-language-selection-uk-us-english.md`
- `docs/kanban/epics/epic-21/story-03-translation-and-localization.md`

---

_Last updated: 2026-06-06 (E21 rehouse — per-locale European delivery)_

---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-06T17:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Story 004 – European Languages Localization

**Status:** TODO  
**Priority:** LOW  
**Estimated Effort:** [TBD]  
**Created:** 2026-06-06  
**Last updated:** 2026-06-06 (E21 rehouse — per-locale delivery split from S02:T02)  
**Version:** v0.21.0.0+0  
**Code:** E21S04

---

## Overview

Deliver translation files and reviewed content for European target locales. One discrete task per language enables independent prioritization, RW attribution, and community contribution.

---

## Goal

Populate `locales/{lang}/` for Spanish, French, German, and Portuguese with framework user-facing content, meeting completeness thresholds defined in E21:S02 before cultural adaptation (E21:S03) where applicable.

---

## Task Checklist

- [ ] **E21:S04:T01 – Spanish (es) translation files** - TODO
  - Task: [`T01-spanish-es-translation-files`](story-04-european-languages-localization/T01-spanish-es-translation-files.md)
- [ ] **E21:S04:T02 – French (fr) translation files** - TODO
  - Task: [`T02-french-fr-translation-files`](story-04-european-languages-localization/T02-french-fr-translation-files.md)
- [ ] **E21:S04:T03 – German (de) translation files** - TODO
  - Task: [`T03-german-de-translation-files`](story-04-european-languages-localization/T03-german-de-translation-files.md)
- [ ] **E21:S04:T04 – Portuguese (pt) translation files** - TODO
  - Task: [`T04-portuguese-pt-translation-files`](story-04-european-languages-localization/T04-portuguese-pt-translation-files.md)

---

## Acceptance Criteria

- [ ] Each locale has translation files under `locales/{lang}/`
- [ ] Priority user-facing strings translated (setup, README, core guides)
- [ ] Fallback to English documented per locale
- [ ] Completeness tracked via E21:S02:T06 tooling
- [ ] Each locale task can ship independently via RW

---

## Dependencies

**Blocks:**
- European locale availability in language selection (extends E21:S00 after S01)

**Blocked By:**
- E21:S01: Internationalization Infrastructure
- E21:S02:T01: Translatable content extracted
- E21:S02:T02: Locale rollout matrix defined

**Related Work:**
- **FR-006:** Localization and Language Selection (Phase 2)
- **E21:S02:** Translation pipeline (horizontal)
- **E21:S03:** Cultural Adaptation

---

## References

- `docs/project-management/kanban/fr-br/FR-006-localization-language-selection-uk-us-english.md`
- `docs/project-management/kanban/epics/epic-21/story-02-translation-and-localization.md`

---

_Last updated: 2026-06-06 (E21 rehouse — per-locale European delivery)_

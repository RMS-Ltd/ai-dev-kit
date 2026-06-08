---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-09T18:35:00Z
expires_at: null
housekeeping_policy: keep
---

# Story 03 – Translation and Localisation

**Status:** COMPLETE  
**Priority:** LOW  
**Estimated Effort:** [TBD]  
**Created:** 2025-12-09  
**Last updated:** 2026-06-08 (v0.21.3.7+1 — E21:S03:T07 COMPLETE; story closed)  
**Version:** v0.21.3.7+1  
**Code:** E21S03

---

## Overview

Implement translations and localisation for major languages. This story covers the actual translation work, translation workflow, and translation management tools.

---

## Goal

Translate framework content to major languages, establish translation workflow, and implement translation management tools. This enables Phase 2 of FR-006 (international localisation).

---

## Task Checklist

- [x] **E21:S03:T01 – Identify and extract all translatable content** - ✅ COMPLETE (v0.21.3.1+1)
  - Task: [`T01-identify-and-extract-all-translatable-content`](story-03-translation-and-localisation/T01-identify-and-extract-all-translatable-content.md)
- [x] **E21:S03:T02 – Create translation files for major languages** - ✅ COMPLETE (v0.21.3.2+1)
  - Task: [`T02-create-translation-files-for-major-languages`](story-03-translation-and-localisation/T02-create-translation-files-for-major-languages.md)
- [x] **E21:S03:T03 – Implement translation lookup and rendering** - ✅ COMPLETE (v0.21.3.3+1)
  - Task: [`T03-implement-translation-lookup-and-rendering`](story-03-translation-and-localisation/T03-implement-translation-lookup-and-rendering.md)
- [x] **E21:S03:T04 – Create translation workflow and review process** - ✅ COMPLETE (v0.21.3.4+1)
  - Task: [`T04-create-translation-workflow-and-review-process`](story-03-translation-and-localisation/T04-create-translation-workflow-and-review-process.md)
- [x] **E21:S03:T05 – Add translation management tools** - ✅ COMPLETE (v0.21.3.5+1)
  - Task: [`T05-add-translation-management-tools`](story-03-translation-and-localisation/T05-add-translation-management-tools.md)
- [x] **E21:S03:T06 – Implement translation completeness tracking** - ✅ COMPLETE (v0.21.3.6+1)
  - Task: [`T06-implement-translation-completeness-tracking`](story-03-translation-and-localisation/T06-implement-translation-completeness-tracking.md)
- [x] **E21:S03:T07 – Test translations and locale support** - ✅ COMPLETE (v0.21.3.7+1)
  - Task: [`T07-test-translations-and-locale-support`](story-03-translation-and-localisation/T07-test-translations-and-locale-support.md)

---

## Acceptance Criteria

- [x] All translatable content identified and extracted
- [x] Translation files created for major languages
- [x] Translation lookup and rendering works
- [x] Translation workflow established
- [x] Translation management tools available
- [x] Translation completeness tracked
- [x] Translations tested

---

## Dependencies

**Blocks:**
- Cultural Adaptation (Story 4)

**Blocked By:**
- E21:S02: Internationalisation Infrastructure

**Related Work:**
- **FR-006:** Localisation and Language Selection (Phase 2)
- **E21:S02:** Internationalisation Infrastructure
- **E21:S04:** Cultural Adaptation

---

## References

- `docs/project-management/kanban/fr-br/FR-006-localization-language-selection-uk-us-english.md` - Feature request
- `packages/frameworks/kanban/templates/COMPREHENSIVE_CANONICAL_EST_STRUCTURE.md` - Epic 21 canonical definition

---

_Last updated: 2025-12-09 (v0.21.1.0+0 – Story created)_


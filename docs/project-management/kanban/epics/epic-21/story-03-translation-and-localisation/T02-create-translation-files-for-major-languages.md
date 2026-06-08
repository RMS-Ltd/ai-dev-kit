---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T05:06:04Z
expires_at: null
housekeeping_policy: keep
---

# Epic 21, Story 3, Task 2: Create translation files for major languages

**Task ID:** E21:S03:T02  
**Status:** COMPLETE  
**Priority:** MEDIUM  
**Last updated:** 2026-06-08 (v0.21.3.2+1 — major-language locale scaffolding)
**Version:** v0.21.3.2+1

✅ COMPLETE (v0.21.3.2+1)
**Code:** E21S03T02

---

## Task ID

**Format:** `E{epic}:S{story}:T{task}`

**Full Task ID:** `E21:S03:T02`

---

## Scope

Create translation files for major target languages (rollout matrix). **T02 delivers scaffold trees** (en-GB interim copy); linguistic translation in E21:S05–S07.

---

## Input

- Translation keys from [E21:S03:T01](T01-identify-and-extract-all-translatable-content.md)
- [IPP-E21S03T02](../../../../implementation-cycles/IPP-E21S03T02-create-translation-files-major-languages.md)
- [locale-rollout-matrix.md](../../../../governance/standards/locale-rollout-matrix.md)
- Target languages (Spanish, French, German, Chinese, Japanese, Portuguese, Russian, Arabic)

---

## Deliverable

- Translation files for major languages (scaffold)
- Rollout matrix for S05–S07
- Structural review complete

---

## Acceptance Criteria

- [x] Translation files created for major languages
- [x] Translations completed (or partial) — en-GB interim scaffold
- [x] Translations reviewed — structural review
- [x] Translation files updated

**Target Languages:**
- Spanish (Español) — `es`
- French (Français) — `fr`
- German (Deutsch) — `de`
- Chinese Simplified (中文简体) — `zh-CN`
- Chinese Traditional (中文繁體) — `zh-TW`
- Japanese (日本語) — `ja`
- Portuguese (Português) — `pt`
- Russian (Русский) — `ru`
- Arabic (العربية) — `ar`

---

## Kanban-init intake

**Released:** `v0.21.3.2+0` — RW -k --art --dpz (2026-06-07)

**Branch:** `epic/21-internationalisation-localisation`

---

## References

- [IPP-E21S03T02](../../../../implementation-cycles/IPP-E21S03T02-create-translation-files-major-languages.md)
- [locale-rollout-matrix.md](../../../../governance/standards/locale-rollout-matrix.md)
- [translatable-content-registry.yaml](../../../../governance/standards/translatable-content-registry.yaml)
- [scaffold_locale_trees.py](../../../../../packages/frameworks/workflow-mgt/scripts/scaffold_locale_trees.py)
- [FR-006](../../../fr-br/FR-006-localization-language-selection-uk-us-english.md)

---

## Migration Notes

Migrated from embedded Story section via `generate_task_doc.py` (FR-016 Wave 1 tooling).

**Source Story:** `docs/project-management/kanban/epics/epic-21/story-03-translation-and-localisation.md`

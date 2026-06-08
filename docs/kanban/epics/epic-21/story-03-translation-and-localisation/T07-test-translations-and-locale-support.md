---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T05:06:04Z
expires_at: null
housekeeping_policy: keep
---

# Epic 21, Story 3, Task 7: Test translations and locale support

**Task ID:** E21:S03:T07  
**Status:** COMPLETE  
**Priority:** MEDIUM  
**Last updated:** 2026-06-08 (v0.21.3.7+1 — RW E21:S03:T07 --art)
**Version:** v0.21.3.7+1
**Code:** E21S03T07

---

## Task ID

**Format:** `E{epic}:S{story}:T{task}`

**Full Task ID:** `E21:S03:T07`

---

## Scope

Test-only Phase 3 E2E verification: parametrized translation/locale/fallback tests across all scaffold locales, consolidated `fr006` regression bundle, and E21:S03 story closure. Closes Story 3.

**Planning:** [IPP-E21S03T07-test-translations-locale-support.md](../../../../implementation-cycles/IPP-E21S03T07-test-translations-locale-support.md)

---

## Input

- T01–T06 implementation (corpus, lookup, workflow, tools, completeness)
- [IPP-E21S03T07-test-translations-locale-support.md](../../../../implementation-cycles/IPP-E21S03T07-test-translations-locale-support.md)
- All translation files and existing `fr006` test modules

---

## Deliverable

- Test results for translations
- Test results for locale support
- Test documentation

---

## Acceptance Criteria

- [x] Translations tested for each language
- [x] Locale support tested
- [x] Fallback behaviour tested
- [x] Test documentation created

---

---

## Kanban-init intake

**Released:** `v0.21.3.7+0` — RW -k --art --dpz (2026-06-07)

**Branch:** `epic/21-internationalisation-localisation`

**Trigger:**

```text
RW -k E21:S03:T07 --art --dpz
```

**Target version anchor:** `v0.21.3.7+0` (doc-init BUILD +0 per [BR-067](../../../fr-br/BR-067-rw-first-doc-only-release-defaults-to-build-plus-one-not-plus-zero.md)).

---

## Version Anchor

**Forensic Marker Format:** `✅ COMPLETE (vRC.E.S.T+B)`

---

## Migration Notes

Migrated from embedded Story section via `generate_task_doc.py` (FR-016 Wave 1 tooling).

**Source Story:** `docs/kanban/epics/epic-21/story-03-translation-and-localisation.md`

---

## References

- [IPP-E21S03T07-test-translations-locale-support.md](../../../../implementation-cycles/IPP-E21S03T07-test-translations-locale-support.md)
- [IPP-E21S03T06-translation-completeness-tracking.md](../../../../implementation-cycles/IPP-E21S03T06-translation-completeness-tracking.md)
- [IPP-E21S01T07-fr006-phase1-e2e-tests.md](../../../../implementation-cycles/IPP-E21S01T07-fr006-phase1-e2e-tests.md)
- [FR-006](../../../fr-br/FR-006-localization-language-selection-uk-us-english.md)
- [ADR-024](../../../../architecture/standards-and-adrs/ADR-024-i18n-framework-strategy.md)


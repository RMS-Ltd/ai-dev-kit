---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T05:06:04Z
expires_at: null
housekeeping_policy: keep
---

# Epic 21, Story 4, Task 3: Implement RTL support (Right-to-Left) for Arabic/Hebrew

**Task ID:** E21:S04:T03  
**Status:** COMPLETE  
**Priority:** MEDIUM  
**Last updated:** 2026-06-10 (RW **v0.21.4.3+1** — RTL support)
**Version:** v0.21.4.3+1

✅ COMPLETE (v0.21.4.3+1)
**Code:** E21S04T03

---

## Task ID

**Format:** `E{epic}:S{story}:T{task}`

**Full Task ID:** `E21:S04:T03`

---

## Scope

Implement RTL (Right-to-Left) support for Arabic/Hebrew locales.

---

## Input

- Arabic/Hebrew translations — `locales/ar/` scaffold (linguistic delivery: E21:S07:T01)
- UI/UX content — [locale-cultural-requirements.md](../../../../governance/standards/locale-cultural-requirements.md) (Arabic RTL row; P0 recommendation)
- [IPP-E21S04T03-rtl-support-arabic-hebrew.md](../../../../implementation-cycles/IPP-E21S04T03-rtl-support-arabic-hebrew.md)
- [ADR-024](../../../../architecture/standards-and-adrs/ADR-024-i18n-framework-strategy.md)

**Publication Status:** NOT_APPLICABLE (framework + maintainer governance per IPP §6)

---

## Deliverable

- RTL support implementation — `RTL_LOCALES`, `is_rtl_locale`, `text_direction_for_locale`, CLI formatting helpers in [`localisation_config.py`](../../../../../packages/frameworks/workflow-mgt/scripts/localisation_config.py)
- RTL UI/UX adaptations — installer `_print_msg` + `prompt_language_choice` direction-aware formatting
- RTL testing — `tests/test_locale_rtl_support.py`, `tests/test_locale_rtl_conventions.py`
- RTL support documented — [locale-rtl-conventions.md](../../../../governance/standards/locale-rtl-conventions.md)

---

## Acceptance Criteria

- [x] RTL support implemented
- [x] UI adapted for RTL
- [x] RTL rendering tested
- [x] RTL support documented

---

---

## Kanban-init intake

**Released:** `v0.21.4.3+0` — RW -k --art --dpz (2026-06-07)

**Branch:** `epic/21-internationalisation-localisation`

**Trigger:**

```text
RW -k E21:S04:T03 --art --dpz
```

**Target version anchor:** `v0.21.4.3+0` (doc-init BUILD +0 per [BR-067](../../../fbu/BR-067-rw-first-doc-only-release-defaults-to-build-plus-one-not-plus-zero.md)).

---

## Version Anchor

**Forensic Marker Format:** `✅ COMPLETE (vRC.E.S.T+B)`

---

## Migration Notes

Migrated from embedded Story section via `generate_task_doc.py` (FR-016 Wave 1 tooling).

**Source Story:** `docs/kanban/epics/epic-21/story-04-cultural-adaptation.md`

---

## References

- [IPP-E21S04T03-rtl-support-arabic-hebrew.md](../../../../implementation-cycles/IPP-E21S04T03-rtl-support-arabic-hebrew.md)
- [locale-rtl-conventions.md](../../../../governance/standards/locale-rtl-conventions.md)
- [locale-cultural-requirements.md](../../../../governance/standards/locale-cultural-requirements.md)
- [FR-006](../../../../fbu/FR-006-localization-language-selection-uk-us-english.md)
- [E21:S04 story](../story-04-cultural-adaptation.md)
- [ADR-024](../../../../architecture/standards-and-adrs/ADR-024-i18n-framework-strategy.md)

---

## Planning artifacts

| Artifact | Path | Status |
| -------- | ---- | ------ |
| IPP | [`IPP-E21S04T03-rtl-support-arabic-hebrew.md`](../../../../implementation-cycles/IPP-E21S04T03-rtl-support-arabic-hebrew.md) | Approved (IPW 2026-06-10) |

---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T05:06:04Z
expires_at: null
housekeeping_policy: keep
---

# Epic 21, Story 4, Task 5: Cultural formatting validation (dates, times, numbers, currency)

**Task ID:** E21:S04:T05  
**Status:** COMPLETE  
**Priority:** MEDIUM  
**Last updated:** 2026-06-10 (v0.21.4.5+1 — cultural formatting validation)
**Version:** v0.21.4.5+1
**Code:** E21S04T05

✅ **COMPLETE (v0.21.4.5+1)**

---

## Task ID

**Format:** `E{epic}:S{story}:T{task}`

**Full Task ID:** `E21:S04:T05`

---

## Scope

Validate that E21:S02:T05 formatting profiles align with E21:S04:T01 cultural expectations: publish per-locale smoke examples, cross-check desk-research matrix rows, and add cultural smoke tests for downstream T06/T07. **Does not** re-implement `locale_formatting.py`.

---

## Input

- [E21:S02:T05](../../../../implementation-cycles/IPP-E21S02T05-locale-formatting.md) — formatting infrastructure SoT
- [locale-formatting-conventions.md](../../../../governance/standards/locale-formatting-conventions.md)
- [locale-cultural-requirements.md](../../../../governance/standards/locale-cultural-requirements.md) — T01 formatting rows
- [IPP-E21S04T05-cultural-formatting-validation.md](../../../../implementation-cycles/IPP-E21S04T05-cultural-formatting-validation.md)

**Publication Status:** NOT_APPLICABLE (maintainer governance deliverable per IPP §6)

---

## Deliverable

- Per-locale smoke example table in `locale-formatting-conventions.md` §7
- Formatting validation cross-check in `locale-cultural-requirements.md`
- `tests/fixtures/locale_formatting_smoke.yaml` + `tests/test_locale_cultural_formatting.py`

---

## Acceptance Criteria

- [x] Date formatting smoke examples published per locale
- [x] Time formatting smoke examples published per locale
- [x] Number formatting smoke examples published per locale
- [x] Currency formatting smoke examples published per locale
- [x] Cultural matrix cross-check documented (aligned vs review-gap)
- [x] Formatting tested across locales (`pytest -m fr006`)

---

## Planning

**IPP:** [IPP-E21S04T05-cultural-formatting-validation.md](../../../../implementation-cycles/IPP-E21S04T05-cultural-formatting-validation.md)  
**Infra SoT:** [E21:S02:T05](../../story-02-internationalisation-infrastructure/T05-configure-datetimenumber-formatting-per-locale.md) @ `v0.21.2.5+1`

---

## Kanban-init intake

**Released:** `v0.21.4.5+0` — RW -k --art --dpz (2026-06-07)

**Branch:** `epic/21-internationalisation-localisation`

**Trigger:**

```text
RW -k E21:S04:T05 --art --dpz
```

**Target version anchor:** `v0.21.4.5+0` (doc-init BUILD +0 per [BR-067](../../../fbu/BR-067-rw-first-doc-only-release-defaults-to-build-plus-one-not-plus-zero.md)).

---

## Version Anchor

**Forensic Marker Format:** `✅ COMPLETE (vRC.E.S.T+B)`

---

## Migration Notes

Migrated from embedded Story section via `generate_task_doc.py` (FR-016 Wave 1 tooling).

**Source Story:** `docs/kanban/epics/epic-21/story-04-cultural-adaptation.md`

---

## References

- [IPP-E21S04T05-cultural-formatting-validation.md](../../../../implementation-cycles/IPP-E21S04T05-cultural-formatting-validation.md)
- [IPP-E21S02T05-locale-formatting.md](../../../../implementation-cycles/IPP-E21S02T05-locale-formatting.md)
- [locale-formatting-conventions.md](../../../../governance/standards/locale-formatting-conventions.md)
- [locale-cultural-requirements.md](../../../../governance/standards/locale-cultural-requirements.md)
- [FR-006](../../../fbu/FR-006-localization-language-selection-uk-us-english.md)
- [E21:S04 story](../story-04-cultural-adaptation.md)

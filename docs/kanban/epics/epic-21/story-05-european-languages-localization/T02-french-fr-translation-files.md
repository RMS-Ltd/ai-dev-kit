---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-06T17:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 21, Story 5, Task 2: French (fr) translation files

**Task ID:** E21:S05:T02  
**Status:** ✅ COMPLETE (v0.21.5.2+2)  
**Priority:** LOW  
**Last updated:** 2026-06-11 (v0.21.5.2+2 — Kanban documentation hygiene)  
**Version:** v0.21.5.2+2
**Code:** E21S05T02

**Associated FR:** [FR-006](../../../fbu/FR-006-localization-language-selection-uk-us-english.md) (Phase 2)

---

## Scope

Create and review French (`fr` / `locales/fr/`) translation files for priority user-facing framework content.

---

## Input

- [IPP-E21S05T02 — French (fr) translation files (FR-006)](../../../../implementation-cycles/IPP-E21S05T02-french-fr-translation-files.md)
- Translation keys from E21:S03:T01
- Locale structure from E21:S01
- Rollout matrix from E21:S03:T02

---

## Deliverable

- `locales/fr/` translation files populated for priority strings
- Completeness report for French locale

---

## Acceptance Criteria

- [x] French translation files created under `locales/fr/`
- [x] Setup prompts, README, and core guides translated (priority tier) — setup index + templates; root README out of registry scope
- [x] Missing keys fall back to English per S01 fallback chain (unchanged infrastructure)
- [x] Review completed (maintainer review; **native/pro review pending** for P0/P1 — see Review notes)
- [x] Completeness tracked in E21:S03:T06 tooling (`linguistic_status: complete` @ ~97%)

---

## Review notes

- **Maintainer review:** Agent delivery @ v0.21.5.2+1; `validate_locale_translations.py --locale fr --strict` green (7 interim-copy advisories on literal pip/placeholder lines).
- **Native/pro gap:** P0/P1 installer strings flagged per [locale-cultural-requirements.md](../../../../governance/standards/locale-cultural-requirements.md) § fr — operator verification recommended.
- **Register:** Formal **vous** in installer wizard/run strings; neutral technical French elsewhere; epicene phrasing for inclusivity per cultural matrix.

---

---

## Kanban-init intake

**Released:** `v0.21.5.2+0` — RW -k --art --dpz (2026-06-07)

**Branch:** `epic/21-internationalisation-localisation`

**Trigger:**

```text
RW -k E21:S05:T02 --art --dpz
```

**Target version anchor:** `v0.21.5.2+0` (doc-init BUILD +0 per [BR-067](../../../fbu/BR-067-rw-first-doc-only-release-defaults-to-build-plus-one-not-plus-zero.md)).

## References

- [IPP-E21S05T02 — French (fr) translation files (FR-006)](../../../../implementation-cycles/IPP-E21S05T02-french-fr-translation-files.md)
- [FR-006](../../../fbu/FR-006-localization-language-selection-uk-us-english.md)
- [locale-rollout-matrix.md](../../../../governance/standards/locale-rollout-matrix.md)
- [locale-cultural-requirements.md](../../../../governance/standards/locale-cultural-requirements.md) § French (fr)
- [translation-workflow-and-review.md](../../../../governance/standards/translation-workflow-and-review.md)

---

## Version Anchor

**Forensic Marker Format:** `✅ COMPLETE (vRC.E.S.T+B)`

**Source Story:** `docs/kanban/epics/epic-21/story-05-european-languages-localization.md`

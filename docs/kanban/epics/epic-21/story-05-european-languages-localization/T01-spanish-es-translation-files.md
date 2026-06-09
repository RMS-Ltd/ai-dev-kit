---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-06T17:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 21, Story 5, Task 1: Spanish (es) translation files

**Task ID:** E21:S05:T01  
**Status:** ✅ COMPLETE (v0.21.5.1+1)  
**Priority:** LOW  
**Last updated:** 2026-06-09 (v0.21.5.1+1 — Spanish es locale delivery)  
**Version:** v0.21.5.1+1
**Code:** E21S05T01

**Associated FR:** [FR-006](../../../fr-br/FR-006-localization-language-selection-uk-us-english.md) (Phase 2)

---

## Scope

Create and review Spanish (`es` / `locales/es/`) translation files for priority user-facing framework content.

---

## Input

- [IPP-E21S05T01 — Spanish (es) translation files (FR-006)](../../../../implementation-cycles/IPP-E21S05T01-spanish-es-translation-files.md)
- Translation keys from E21:S03:T01
- Locale structure from E21:S01
- Rollout matrix from E21:S03:T02

---

## Deliverable

- `locales/es/` translation files populated for priority strings
- Completeness report for Spanish locale

---

## Acceptance Criteria

- [x] Spanish translation files created under `locales/es/`
- [x] Setup prompts, README, and core guides translated (priority tier) — setup index + templates; root README out of registry scope
- [x] Missing keys fall back to English per S01 fallback chain (unchanged infrastructure)
- [x] Review completed (maintainer review; **native/pro review pending** for P0/P1 — see Review notes)
- [x] Completeness tracked in E21:S03:T06 tooling (`linguistic_status: complete` @ ~96.6%)

---

## Review notes

- **Maintainer review:** Agent delivery @ v0.21.5.1+1; `validate_locale_translations.py --locale es --strict` green.
- **Native/pro gap:** P0/P1 installer strings flagged per [locale-cultural-requirements.md](../../../../governance/standards/locale-cultural-requirements.md) § es — operator verification recommended before treating as verified translation.
- **Register:** Formal **usted** imperative in installer wizard/run strings; neutral technical Spanish elsewhere.

---

## References

- [IPP-E21S05T01 — Spanish (es) translation files (FR-006)](../../../../implementation-cycles/IPP-E21S05T01-spanish-es-translation-files.md)
- [FR-006](../../../fr-br/FR-006-localization-language-selection-uk-us-english.md)
- [locale-rollout-matrix.md](../../../../governance/standards/locale-rollout-matrix.md)
- [locale-cultural-requirements.md](../../../../governance/standards/locale-cultural-requirements.md) § Spanish (es)
- [translation-workflow-and-review.md](../../../../governance/standards/translation-workflow-and-review.md)

---

## Kanban-init intake

**Released:** `v0.21.5.1+0` — RW -k --art --dpz (2026-06-07)

**Branch:** `epic/21-internationalisation-localisation`

**Trigger:**

```text
RW -k E21:S05:T01 --art --dpz
```

**Target version anchor:** `v0.21.5.1+0` (doc-init BUILD +0 per [BR-067](../../../fr-br/BR-067-rw-first-doc-only-release-defaults-to-build-plus-one-not-plus-zero.md)).

## Version Anchor

**Forensic marker:** ✅ COMPLETE (**v0.21.5.1+1** — FR-006 Spanish es locale delivery)

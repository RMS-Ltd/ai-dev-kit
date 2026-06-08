---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-06T17:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 21, Story 6, Task 1: Arabic (ar) translation files

**Task ID:** E21:S06:T01  
**Status:** TODO  
**Priority:** LOW  
**Last updated:** 2026-06-06 (E21 rehouse — per-locale delivery)  
**Version:** v0.0.0.0+0  
**Code:** E21S06T01

**Associated FR:** [FR-006](../../../fr-br/FR-006-localization-language-selection-uk-us-english.md) (Phase 2)

---

## Scope

Create and review Arabic (`ar` / `locales/ar/`) translation files for priority user-facing framework content, coordinating with E21:S03 RTL support.

---

## Input

- Translation keys from E21:S02:T01
- Locale structure from E21:S01
- Rollout matrix from E21:S02:T02
- RTL requirements from E21:S03:T03

---

## Deliverable

- `locales/ar/` translation files populated for priority strings
- RTL validation notes for Arabic content

---

## Acceptance Criteria

- [ ] Arabic translation files created under `locales/ar/`
- [ ] Setup prompts, README, and core guides translated (priority tier)
- [ ] RTL rendering validated with E21:S03 infrastructure
- [ ] Missing keys fall back to English per S01 fallback chain
- [ ] Review completed (native or professional review)

---

## Version Anchor

**Forensic Marker Format:** `✅ COMPLETE (vRC.E.S.T+B)`

**Source Story:** `docs/kanban/epics/epic-21/story-06-rtl-and-extended-locales.md`

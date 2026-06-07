---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-06T17:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 21, Story 6, Task 1: Chinese Simplified (zh-CN) translation files

**Task ID:** E21:S06:T01  
**Status:** TODO  
**Priority:** LOW  
**Last updated:** 2026-06-06 (E21 rehouse — per-locale delivery)  
**Version:** v0.0.0.0+0  
**Code:** E21S06T01

**Associated FR:** [FR-006](../../../fr-br/FR-006-localization-language-selection-uk-us-english.md) (Phase 2)

---

## Scope

Create and review Chinese Simplified (`zh-CN` / `locales/zh-CN/`) translation files for priority user-facing framework content.

---

## Input

- Translation keys from E21:S03:T01
- Locale structure from E21:S01
- Rollout matrix from E21:S03:T02

---

## Deliverable

- `locales/zh-CN/` translation files populated for priority strings
- Completeness report for zh-CN locale

---

## Acceptance Criteria

- [ ] zh-CN translation files created under `locales/zh-CN/`
- [ ] Setup prompts, README, and core guides translated (priority tier)
- [ ] Missing keys fall back to English per S01 fallback chain
- [ ] Review completed (native or professional review)
- [ ] Completeness tracked in E21:S03:T06 tooling

---

---

## Kanban-init intake

**Branch:** `epic/21-internationalisation-localisation`

**Trigger:**

```text
RW -k E21:S06:T01 --art --dpz
```

**Target version anchor:** `v0.21.6.1+0` (doc-init BUILD +0 per [BR-067](../../../fr-br/BR-067-rw-first-doc-only-release-defaults-to-build-plus-one-not-plus-zero.md)).

## Version Anchor

**Forensic Marker Format:** `✅ COMPLETE (vRC.E.S.T+B)`

**Source Story:** `docs/project-management/kanban/epics/epic-21/story-06-cjk-languages-localization.md`

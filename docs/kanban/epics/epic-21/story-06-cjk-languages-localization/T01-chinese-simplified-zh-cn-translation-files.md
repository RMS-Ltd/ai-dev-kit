---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-06T17:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 21, Story 6, Task 1: Chinese Simplified (zh-CN) translation files

**Task ID:** E21:S06:T01  
**Status:** COMPLETE  
**Priority:** LOW  
**Last updated:** 2026-06-10 (v0.21.6.1+1 — RW E21:S06:T01 zh-CN translation delivery)  
**Completed:** 2026-06-10  
**Version:** v0.21.6.1+1
**Code:** E21S06T01

**Associated FR:** [FR-006](../../../fbu/FR-006-localization-language-selection-uk-us-english.md) (Phase 2)

---

## Scope

Create and review Chinese Simplified (`zh-CN` / `locales/zh-CN/`) translation files for priority user-facing framework content.

---

## Input

- Translation keys from E21:S03:T01
- Locale structure from E21:S01
- Rollout matrix from E21:S03:T02
- **IPP:** [`IPP-E21S06T01-chinese-simplified-zh-cn-translation-files.md`](../../../../implementation-cycles/IPP-E21S06T01-chinese-simplified-zh-cn-translation-files.md) (E21:S06:T01)

---

## Deliverable

- `locales/zh-CN/` translation files populated for priority strings
- Completeness report for zh-CN locale

---

## Acceptance Criteria

- [x] zh-CN translation files created under `locales/zh-CN/`
- [x] Setup prompts, README, and core guides translated (priority tier)
- [x] Missing keys fall back to English per S01 fallback chain
- [ ] Review completed (native or professional review) — **professional zh-CN review pending** (maintainer delivery @ v0.21.6.1+1)
- [x] Completeness tracked in E21:S03:T06 tooling

---

---

## Kanban-init intake

**Released:** `v0.21.6.1+0` — RW -k --art --dpz (2026-06-07)

**Branch:** `epic/21-internationalisation-localisation`

**Trigger:**

```text
RW -k E21:S06:T01 --art --dpz
```

**Target version anchor:** `v0.21.6.1+0` (doc-init BUILD +0 per [BR-067](../../../fbu/BR-067-rw-first-doc-only-release-defaults-to-build-plus-one-not-plus-zero.md)).

## Version Anchor

**Forensic Marker Format:** `✅ COMPLETE (vRC.E.S.T+B)`

✅ COMPLETE (v0.21.6.1+1)

**Source Story:** `docs/kanban/epics/epic-21/story-06-cjk-languages-localization.md`

---

## References

- [IPP-E21S06T01-chinese-simplified-zh-cn-translation-files.md](../../../../implementation-cycles/IPP-E21S06T01-chinese-simplified-zh-cn-translation-files.md) — consolidated implementation plan (FR-042)
- [locale-cultural-requirements.md](../../../../governance/standards/locale-cultural-requirements.md) § Chinese Simplified (zh-CN)
- [IPP-E21S05T01-spanish-es-translation-files.md](../../../../implementation-cycles/IPP-E21S05T01-spanish-es-translation-files.md) — delivery pattern (es @ v0.21.5.1+1)

---

## Review notes

**Glossary (maintainer):** 工作流 (workflow), 看板 (Kanban brand).

**Maintainer review:** OK for scaffold delivery — concise Simplified Chinese, imperative CLI tone, placeholders preserved.

**Professional zh-CN review:** **Pending** for P0/P1 installer/CLI strings per cultural matrix. Changelog uses "Attempted translation" until confirmed.

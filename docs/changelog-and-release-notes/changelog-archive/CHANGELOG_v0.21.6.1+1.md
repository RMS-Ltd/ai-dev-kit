# Changelog v0.21.6.1+1

**Release Date:** 2026-06-10 08:29:32 UTC  
**Epic:** 21 | **Story:** 6 | **Task:** 1  
**Internal Version:** 0.21.6.1+1  
**SemVer:** v0.4.1109+1

---

## Summary

**E21:S06:T01** — FR-006 Phase 3+: Chinese Simplified (`zh-CN`) linguistic translation for kanban + workflow-mgt locale trees (first CJK locale delivery).

---

## Changes

### Implementation

- **Attempted translation:** Translated `packages/frameworks/kanban/locales/zh-CN/**` and `packages/frameworks/workflow-mgt/locales/zh-CN/**` (P0–P2 keys, templates, scaffolds, setup index).
- **Change implemented:** `translatable-content-registry.yaml` — `zh-CN.linguistic_status: complete`.
- **Change implemented:** Greenfield mirror sync for locale trees.
- **Change implemented:** `tests/test_zh_cn_locale_e21s06t01.py`; interim-copy tests exclude `zh-CN` post-T01.

### Documentation

- **Change implemented:** [IPP-E21S06T01](../../implementation-cycles/IPP-E21S06T01-chinese-simplified-zh-cn-translation-files.md) planning package.

### Review

- **Attempted translation:** Maintainer delivery with concise Simplified Chinese CLI tone; glossary 工作流/看板; **professional zh-CN review pending** for P0/P1 per [locale-cultural-requirements.md](../../governance/standards/locale-cultural-requirements.md) § Chinese Simplified (zh-CN).

---

## Related

- [FR-006](../../kanban/fr-br/FR-006-localization-language-selection-uk-us-english.md)
- [T01 task doc](../../kanban/epics/epic-21/story-06-cjk-languages-localization/T01-chinese-simplified-zh-cn-translation-files.md)

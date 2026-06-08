# Changelog v0.21.1.4+1

**Release Date:** 2026-06-07 10:49:24 UTC  
**Epic:** 21 | **Story:** 01 | **Task:** 04  
**SemVer:** v0.4.1071+1

---

## Summary

E21:S01:T04 — **Change implemented:** Phase 1 MVP UK/US locale content corpus — kanban `locales/` manifest + 8 core template pairs; workflow-mgt scaffold fragments.

---

## Changed

### Locale corpus

- `packages/frameworks/kanban/locales/` — manifest, en-GB/en-US templates (FR/BR/UXR/FB/TASK/STORY/EPIC/PLAN_DOC), setup index docs
- `packages/frameworks/workflow-mgt/locales/` — changelog/version scaffold fragments per locale

### Tests

- `tests/test_locale_content_manifest.py` — T1–T7 manifest and content checks

### Documentation

- `docs/implementation-cycles/IPP-E21S01T04-ukus-content-variants-mvp.md`
- Locale README files under kanban and workflow-mgt

### Sync

- `greenfield-install/` via `sync_greenfield_install.py`

---

## References

- [T04](../project-management/kanban/epics/epic-21/story-01-language-selection-at-setup/T04-create-ukus-english-content-variants-documentation-templates.md)
- [IPP-E21S01T04](../implementation-cycles/IPP-E21S01T04-ukus-content-variants-mvp.md)
- [FR-006](../project-management/kanban/fr-br/FR-006-localization-language-selection-uk-us-english.md)

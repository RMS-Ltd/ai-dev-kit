---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T05:06:04Z
expires_at: null
housekeeping_policy: keep
---

# Epic 21, Story 3, Task 5: Add translation management tools

**Task ID:** E21:S03:T05  
**Status:** COMPLETE  
**Priority:** MEDIUM  
**Last updated:** 2026-06-08 (v0.21.3.5+1 — translation management tools released)
**Version:** v0.21.3.5+1
**Code:** E21S03T05

✅ COMPLETE (v0.21.3.5+1)

---

## Task ID

**Format:** `E{epic}:S{story}:T{task}`

**Full Task ID:** `E21:S03:T05`

---

## Scope

Add translation management tools for maintainers.

---

## Input

- Translation files
- Translation workflow
- [IPP-E21S03T05-translation-management-tools.md](../../../../../implementation-cycles/IPP-E21S03T05-translation-management-tools.md)

---

## Deliverable

- Translation management tools
- Tools for updating translations
- Translation validation tools

---

## Acceptance Criteria

- [x] Translation management tools available
- [x] Tools for updating translations
- [x] Translation validation tools
- [x] Tools documented

---

---

## Kanban-init intake

**Released:** `v0.21.3.5+0` — RW -k --art --dpz (2026-06-07)

**Branch:** `epic/21-internationalisation-localisation`

**Trigger:**

```text
RW -k E21:S03:T05 --art --dpz
```

**Target version anchor:** `v0.21.3.5+0` (doc-init BUILD +0 per [BR-067](../../../fr-br/BR-067-rw-first-doc-only-release-defaults-to-build-plus-one-not-plus-zero.md)).

---

## Version Anchor

**Forensic Marker Format:** `✅ COMPLETE (vRC.E.S.T+B)`

---

## Migration Notes

Migrated from embedded Story section via `generate_task_doc.py` (FR-016 Wave 1 tooling).

**Source Story:** `docs/kanban/epics/epic-21/story-03-translation-and-localisation.md`

---

## References

- [IPP-E21S03T05-translation-management-tools.md](../../../../../implementation-cycles/IPP-E21S03T05-translation-management-tools.md)
- [translation-management-tools.md](../../../../../documentation/user-docs/translation-management-tools.md)
- [IPP-E21S03T04-translation-workflow-review.md](../../../../../implementation-cycles/IPP-E21S03T04-translation-workflow-review.md)
- [translation-workflow-and-review.md](../../../../../governance/standards/translation-workflow-and-review.md)
- [scaffold_locale_trees.py](../../../../../../packages/frameworks/workflow-mgt/scripts/scaffold_locale_trees.py)
- [validate_locale_translations.py](../../../../../../packages/frameworks/workflow-mgt/scripts/validate_locale_translations.py)
- [sync_locale_keys.py](../../../../../../packages/frameworks/workflow-mgt/scripts/sync_locale_keys.py)
- [FR-006](../../../fr-br/FR-006-localization-language-selection-uk-us-english.md)

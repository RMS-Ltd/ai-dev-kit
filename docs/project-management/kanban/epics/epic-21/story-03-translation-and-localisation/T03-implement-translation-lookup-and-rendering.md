---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T05:06:04Z
expires_at: null
housekeeping_policy: keep
---

# Epic 21, Story 3, Task 3: Implement translation lookup and rendering

**Task ID:** E21:S03:T03  
**Status:** COMPLETE  
**Priority:** MEDIUM  
**Last updated:** 2026-06-08 (v0.21.3.3+1 — translation lookup/rendering wired)
**Version:** v0.21.3.3+1

✅ COMPLETE (v0.21.3.3+1)
**Code:** E21S03T03

---

## Task ID

**Format:** `E{epic}:S{story}:T{task}`

**Full Task ID:** `E21:S03:T03`

---

## Scope

Implement translation lookup and rendering in framework surfaces.

---

## Input

- Translation files
- Translation key system
- [IPP-E21S03T03](../../../../implementation-cycles/IPP-E21S03T03-translation-lookup-rendering.md)

---

## Deliverable

- Translation lookup implementation
- Content rendering with translations
- Fallback handling

---

## Acceptance Criteria

- [x] Translation lookup works
- [x] Content renders with translations
- [x] Fallback works for missing translations
- [x] Translation rendering tested

---

---

## Kanban-init intake

**Released:** `v0.21.3.3+0` — RW -k --art --dpz (2026-06-07)

**Branch:** `epic/21-internationalisation-localisation`

**Trigger:**

```text
RW -k E21:S03:T03 --art --dpz
```

**Target version anchor:** `v0.21.3.3+0` (doc-init BUILD +0 per [BR-067](../../../fr-br/BR-067-rw-first-doc-only-release-defaults-to-build-plus-one-not-plus-zero.md)).

---

## Version Anchor

**Forensic Marker Format:** `✅ COMPLETE (vRC.E.S.T+B)`

---

## Migration Notes

Migrated from embedded Story section via `generate_task_doc.py` (FR-016 Wave 1 tooling).

**Source Story:** `docs/project-management/kanban/epics/epic-21/story-03-translation-and-localisation.md`

## References

- [IPP-E21S03T03](../../../../implementation-cycles/IPP-E21S03T03-translation-lookup-rendering.md)
- [translatable-content-inventory.md](../../../../governance/standards/translatable-content-inventory.md)
- [ADR-024](../../../../architecture/standards-and-adrs/ADR-024-i18n-framework-strategy.md)
- [FR-006](../../../fr-br/FR-006-localization-language-selection-uk-us-english.md)


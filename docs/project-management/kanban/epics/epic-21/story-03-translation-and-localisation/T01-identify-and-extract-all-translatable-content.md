---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T05:06:04Z
expires_at: null
housekeeping_policy: keep
---

# Epic 21, Story 3, Task 1: Identify and extract all translatable content

**Task ID:** E21:S03:T01  
**Status:** COMPLETE  
**Priority:** MEDIUM  
**Last updated:** 2026-06-08 (v0.21.3.1+1 — translatable content inventory + key extraction)
**Version:** v0.21.3.1+1

✅ COMPLETE (v0.21.3.1+1)
**Code:** E21S03T01

---

## Task ID

**Format:** `E{epic}:S{story}:T{task}`

**Full Task ID:** `E21:S03:T01`

---

## Scope

Identify and extract all translatable framework content into translation keys.

---

## Input

- All framework content (documentation, templates, UI)
- Translation key system
- [IPP-E21S03T01 — Identify and extract translatable content](../../../../implementation-cycles/IPP-E21S03T01-identify-extract-translatable-content.md)
- [ADR-024](../../../../architecture/standards-and-adrs/ADR-024-i18n-framework-strategy.md) C1 hybrid strategy
- [E21:S02](../../../../epics/epic-21/story-02-internationalisation-infrastructure.md) i18n infrastructure (COMPLETE)

---

## Deliverable

- List of all translatable content
- Content extraction completed
- Translation keys assigned

---

## Acceptance Criteria

- [x] All translatable content identified
- [x] Content extracted to translation keys
- [x] Translation keys assigned
- [x] Content documented

---

## Kanban-init intake

**Released:** `v0.21.3.1+0` — RW -k --art --dpz (2026-06-07)

**Branch:** `epic/21-internationalisation-localisation`

**Trigger:**

```text
RW -k E21:S03:T01 --art --dpz
```

**Target version anchor:** `v0.21.3.1+0` (doc-init BUILD +0 per [BR-067](../../../fr-br/BR-067-rw-first-doc-only-release-defaults-to-build-plus-one-not-plus-zero.md)).

---

## Version Anchor

**Forensic Marker Format:** `✅ COMPLETE (vRC.E.S.T+B)`

---

## Migration Notes

Migrated from embedded Story section via `generate_task_doc.py` (FR-016 Wave 1 tooling).

**Source Story:** `docs/project-management/kanban/epics/epic-21/story-03-translation-and-localisation.md`

---

## References

- [IPP-E21S03T01](../../../../implementation-cycles/IPP-E21S03T01-identify-extract-translatable-content.md)
- [translatable-content-inventory.md](../../../../governance/standards/translatable-content-inventory.md)
- [translatable-content-registry.yaml](../../../../governance/standards/translatable-content-registry.yaml)
- [FR-006](../../../fr-br/FR-006-localization-language-selection-uk-us-english.md)
- [locale-key-conventions.md](../../../../governance/standards/locale-key-conventions.md)

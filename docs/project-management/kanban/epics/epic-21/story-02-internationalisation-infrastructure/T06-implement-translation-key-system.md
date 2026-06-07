---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T05:06:04Z
expires_at: null
housekeeping_policy: keep
---

# Epic 21, Story 2, Task 6: Implement translation key system

**Task ID:** E21:S02:T06  
**Status:** COMPLETE  
**Priority:** MEDIUM  
**Last updated:** 2026-06-07 (v0.21.2.6+1 — translation key system shipped)
**Version:** v0.21.2.6+1
**Code:** E21S02T06

---

## Task ID

**Format:** `E{epic}:S{story}:T{task}`

**Full Task ID:** `E21:S02:T06`

---

## Scope

Implement translation key system for extractable user-facing strings.

---

## Input

- Selected i18n framework
- Translation file structure

---

## Deliverable

- Translation key system
- Key naming conventions
- Key organisation standards

---

## Acceptance Criteria

- [x] Translation key system implemented
- [x] Key naming conventions defined
- [x] Keys organised logically
- [x] Key system documented

✅ **COMPLETE (v0.21.2.6+1)**

---

## Planning

**IPP:** [IPP-E21S02T06-locale-key-system.md](../../../../implementation-cycles/IPP-E21S02T06-locale-key-system.md)  
**Policy:** [locale-key-conventions.md](../../../../governance/standards/locale-key-conventions.md)

---

## Kanban-init intake

**Released:** `v0.21.2.6+0` — RW -k --art --dpz (2026-06-07)

**Branch:** `epic/21-internationalisation-localisation`

**Trigger:**

```text
RW -k E21:S02:T06 --art --dpz
```

**Target version anchor:** `v0.21.2.6+0` (doc-init BUILD +0 per [BR-067](../../../fr-br/BR-067-rw-first-doc-only-release-defaults-to-build-plus-one-not-plus-zero.md)).

---

## Version Anchor

**Forensic Marker Format:** `✅ COMPLETE (vRC.E.S.T+B)`

---

## Migration Notes

Migrated from embedded Story section via `generate_task_doc.py` (FR-016 Wave 1 tooling).

**Source Story:** `docs/project-management/kanban/epics/epic-21/story-02-internationalisation-infrastructure.md`


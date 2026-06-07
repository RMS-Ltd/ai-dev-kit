---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T05:06:04Z
expires_at: null
housekeeping_policy: keep
---

# Epic 21, Story 2, Task 5: Configure date/time/number formatting per locale

**Task ID:** E21:S02:T05  
**Status:** COMPLETE  
**Priority:** MEDIUM  
**Last updated:** 2026-06-07 (v0.21.2.5+1 — locale formatting shipped)
**Version:** v0.21.2.5+1
**Code:** E21S02T05

---

## Task ID

**Format:** `E{epic}:S{story}:T{task}`

**Full Task ID:** `E21:S02:T05`

---

## Scope

Configure date, time, and number formatting per locale.

---

## Input

- Translation file structure
- Locale requirements

---

## Deliverable

- Locale-specific date/time formatting
- Locale-specific number formatting
- Formatting configuration per locale

---

## Acceptance Criteria

- [x] Date formatting works per locale
- [x] Time formatting works per locale
- [x] Number formatting works per locale
- [x] Formatting tested across locales

✅ **COMPLETE (v0.21.2.5+1)**

---

## Planning

**IPP:** [IPP-E21S02T05-locale-formatting.md](../../../../implementation-cycles/IPP-E21S02T05-locale-formatting.md)  
**Policy:** [locale-formatting-conventions.md](../../../../governance/standards/locale-formatting-conventions.md)

---

## Kanban-init intake

**Released:** `v0.21.2.5+0` — RW -k --art --dpz (2026-06-07)

**Branch:** `epic/21-internationalisation-localisation`

**Trigger:**

```text
RW -k E21:S02:T05 --art --dpz
```

**Target version anchor:** `v0.21.2.5+0` (doc-init BUILD +0 per [BR-067](../../../fr-br/BR-067-rw-first-doc-only-release-defaults-to-build-plus-one-not-plus-zero.md)).

---

## Version Anchor

**Forensic Marker Format:** `✅ COMPLETE (vRC.E.S.T+B)`

---

## Migration Notes

Migrated from embedded Story section via `generate_task_doc.py` (FR-016 Wave 1 tooling).

**Source Story:** `docs/project-management/kanban/epics/epic-21/story-02-internationalisation-infrastructure.md`


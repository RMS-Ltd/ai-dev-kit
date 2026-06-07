---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T05:06:04Z
expires_at: null
housekeeping_policy: keep
---

# Epic 21, Story 1, Task 6: Update content generation to use language preference (RW, templates)

**Task ID:** E21:S01:T06  
**Status:** TODO  
**Priority:** MEDIUM  
**Last updated:** 2026-06-05 (v0.0.0.0+0 – migrated from embedded Story section)  
**Version:** v0.0.0.0+0  
**Code:** E21S01T06

---

## Task ID

**Format:** `E{epic}:S{story}:T{task}`

**Full Task ID:** `E21:S01:T06`

---

## Scope

[To be filled during migration]

---

## Input

- Language preference from configuration
- Content generation processes (RW, templates)

---

## Deliverable

- RW uses language preference for changelog generation
- Templates use language preference for content generation
- All generated content uses selected variant

---

## Acceptance Criteria

- [ ] RW reads language preference from config
- [ ] RW uses selected variant for changelog generation
- [ ] Templates use selected variant
- [ ] All generated content uses selected variant

---

---

## Kanban-init intake

**Branch:** `epic/21-internationalisation-localisation`

**Trigger:**

```text
RW -k E21:S01:T06 --art --dpz
```

**Target version anchor:** `v0.21.1.6+0` (doc-init BUILD +0 per [BR-067](../../../fr-br/BR-067-rw-first-doc-only-release-defaults-to-build-plus-one-not-plus-zero.md)).

---

## Version Anchor

**Forensic Marker Format:** `✅ COMPLETE (vRC.E.S.T+B)`

---

## Migration Notes

Migrated from embedded Story section via `generate_task_doc.py` (FR-016 Wave 1 tooling).

**Source Story:** `docs/project-management/kanban/epics/epic-21/story-01-language-selection-at-setup.md`


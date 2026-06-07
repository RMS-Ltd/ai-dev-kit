---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T05:06:04Z
expires_at: null
housekeeping_policy: keep
---

# Epic 21, Story 2, Task 3: Implement locale detection (browser/system locale)

**Task ID:** E21:S02:T03  
**Status:** TODO  
**Priority:** MEDIUM  
**Last updated:** 2026-06-07 (v0.21.2.3+0 — RW -k kanban-init doc filing)
**Version:** v0.21.2.3+0
**Code:** E21S02T03

---

## Task ID

**Format:** `E{epic}:S{story}:T{task}`

**Full Task ID:** `E21:S02:T03`

---

## Scope

Implement browser/system locale detection for framework setup and runtime.

---

## Input

- Translation file structure
- Locale detection requirements

---

## Deliverable

- Locale detection implementation
- Browser/system locale detection
- Fallback to default locale

---

## Acceptance Criteria

- [ ] Browser locale detection works
- [ ] System locale detection works
- [ ] Fallback to default works
- [ ] Locale detection tested

---

---

## Kanban-init intake

**Released:** `v0.21.2.3+0` — RW -k --art --dpz (2026-06-07)

**Branch:** `epic/21-internationalisation-localisation`

**Trigger:**

```text
RW -k E21:S02:T03 --art --dpz
```

**Target version anchor:** `v0.21.2.3+0` (doc-init BUILD +0 per [BR-067](../../../fr-br/BR-067-rw-first-doc-only-release-defaults-to-build-plus-one-not-plus-zero.md)).

---

## Version Anchor

**Forensic Marker Format:** `✅ COMPLETE (vRC.E.S.T+B)`

---

## Migration Notes

Migrated from embedded Story section via `generate_task_doc.py` (FR-016 Wave 1 tooling).

**Source Story:** `docs/project-management/kanban/epics/epic-21/story-02-internationalisation-infrastructure.md`


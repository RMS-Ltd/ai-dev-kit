---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T05:06:04Z
expires_at: null
housekeeping_policy: keep
---

# Epic 21, Story 4, Task 6: Test cultural adaptations

**Task ID:** E21:S04:T06  
**Status:** TODO  
**Priority:** MEDIUM  
**Last updated:** 2026-06-07 (v0.21.4.6+0 — RW -k kanban-init doc filing)
**Version:** v0.21.4.6+0
**Code:** E21S04T06

---

## Task ID

**Format:** `E{epic}:S{story}:T{task}`

**Full Task ID:** `E21:S04:T06`

---

## Scope

Test cultural adaptations across target locales.

---

## Input

- Complete cultural adaptations
- All locale configurations
- Formatting smoke fixtures — `tests/fixtures/locale_formatting_smoke.yaml` ([E21:S04:T05](T05-configure-locale-specific-formatting-dates-times-numbers-cur.md) · [locale-formatting-conventions.md §7](../../../../governance/standards/locale-formatting-conventions.md))

---

## Deliverable

- Test results for cultural adaptations
- Test documentation
- Cultural adaptation validation

---

## Acceptance Criteria

- [ ] Cultural adaptations tested for each locale
- [ ] RTL support tested
- [ ] Locale-specific formatting tested
- [ ] Cultural appropriateness validated
- [ ] Test documentation created

---

---

## Kanban-init intake

**Released:** `v0.21.4.6+0` — RW -k --art --dpz (2026-06-07)

**Branch:** `epic/21-internationalisation-localisation`

**Trigger:**

```text
RW -k E21:S04:T06 --art --dpz
```

**Target version anchor:** `v0.21.4.6+0` (doc-init BUILD +0 per [BR-067](../../../fr-br/BR-067-rw-first-doc-only-release-defaults-to-build-plus-one-not-plus-zero.md)).

---

## Version Anchor

**Forensic Marker Format:** `✅ COMPLETE (vRC.E.S.T+B)`

---

## Migration Notes

Migrated from embedded Story section via `generate_task_doc.py` (FR-016 Wave 1 tooling).

**Source Story:** `docs/kanban/epics/epic-21/story-04-cultural-adaptation.md`


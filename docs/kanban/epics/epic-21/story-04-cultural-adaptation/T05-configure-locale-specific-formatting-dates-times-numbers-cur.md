---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T05:06:04Z
expires_at: null
housekeeping_policy: keep
---

# Epic 21, Story 4, Task 5: Cultural formatting validation (dates, times, numbers, currency)

**Task ID:** E21:S04:T05  
**Status:** COMPLETE  
**Priority:** MEDIUM  
**Last updated:** 2026-06-10 (v0.21.4.5+1 — cultural formatting validation)  
**Version:** v0.21.4.5+1  
**Code:** E21S04T05

---

## Task ID

**Format:** `E{epic}:S{story}:T{task}`

**Full Task ID:** `E21:S04:T05`

---

## Scope

Cultural validation layer for locale-specific formatting — smoke examples, T01 matrix cross-check, and cultural smoke tests. **Does not** re-implement formatting infrastructure (owned by **E21:S02:T05**).

---

## Input

- [IPP-E21S04T05](../../../implementation-cycles/IPP-E21S04T05-cultural-formatting-validation.md)
- [locale_formatting.py](../../../../packages/frameworks/workflow-mgt/scripts/locale_formatting.py) (S02:T05 SoT)
- [locale-cultural-requirements.md](../../../governance/standards/locale-cultural-requirements.md) formatting rows

---

## Deliverable

- §7 per-locale smoke examples in [locale-formatting-conventions.md](../../../governance/standards/locale-formatting-conventions.md)
- Formatting validation cross-check in [locale-cultural-requirements.md](../../../governance/standards/locale-cultural-requirements.md)
- `tests/fixtures/locale_formatting_smoke.yaml` + `tests/test_locale_cultural_formatting.py`

---

## Acceptance Criteria

- [x] Smoke examples published for date, time, number, currency × nine rollout locales
- [x] Cultural matrix cross-check documented (aligned vs review-gap)
- [x] Cultural smoke tests green under `pytest -m fr006`
- [x] IPP ↔ task bidirectional links

---

## Planning

**IPP:** [IPP-E21S04T05-cultural-formatting-validation.md](../../../implementation-cycles/IPP-E21S04T05-cultural-formatting-validation.md)

**Infra SoT:** [IPP-E21S02T05-locale-formatting.md](../../../implementation-cycles/IPP-E21S02T05-locale-formatting.md)

---

## Kanban-init intake

**Released:** `v0.21.4.5+0` — RW -k --art --dpz (2026-06-07)

**Branch:** `dev`

---

## Version Anchor

**Forensic Marker:** `✅ COMPLETE (v0.21.4.5+1)`

**Forensic Marker Format:** `✅ COMPLETE (vRC.E.S.T+B)`

---

## Migration Notes

Migrated from embedded Story section via `generate_task_doc.py` (FR-016 Wave 1 tooling).

**Source Story:** `docs/kanban/epics/epic-21/story-04-cultural-adaptation.md`

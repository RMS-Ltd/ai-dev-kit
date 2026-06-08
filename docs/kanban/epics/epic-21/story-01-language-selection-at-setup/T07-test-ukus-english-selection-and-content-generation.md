---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T05:06:04Z
expires_at: null
housekeeping_policy: keep
---

# Epic 21, Story 1, Task 7: Test UK/US English selection and content generation

**Task ID:** E21:S01:T07  
**Status:** COMPLETE  
**Priority:** MEDIUM  
**Last updated:** 2026-06-07 (v0.21.1.7+1 — RW E21:S01:T07 --art)
**Version:** v0.21.1.7+1
**Code:** E21S01T07

---

## Task ID

**Format:** `E{epic}:S{story}:T{task}`

**Full Task ID:** `E21:S01:T07`

---

## Scope

Consolidated FR-006 Phase 1 E2E pytest (`test_fr006_phase1_e2e_localisation.py` E1–E8) plus test matrix documentation. Test-only — no new production wiring. Closes E21:S01.

**Planning:** [IPP-E21S01T07-fr006-phase1-e2e-tests.md](../../../../implementation-cycles/IPP-E21S01T07-fr006-phase1-e2e-tests.md)

---

## Input

- T01–T06 implementation (selection, corpus, read/resolve, content wiring)
- Existing unit/integration test modules per task

---

## Deliverable

- E2E test module chaining selection → config → content generation
- Test matrix in kanban locales README
- Full FR-006 regression bundle documented and green

---

## Acceptance Criteria

- [x] Language selection works in all setup processes (E1–E3, E5, E6 + prior T02/T03 tests)
- [x] UK English content generation works correctly (E2, E4)
- [x] US English content generation works correctly (E1, E3, E4, E8)
- [x] Content is consistent with selected variant (E4 markers, E5 schema)
- [x] Test documentation created (IPP §3 + locales README matrix)

---

---

## Kanban-init intake

**Released:** `v0.21.1.7+0` — RW -k --art --dpz (2026-06-07)

**Branch:** `epic/21-internationalisation-localisation`

**Trigger:**

```text
RW -k E21:S01:T07 --art --dpz
```

**Target version anchor:** `v0.21.1.7+0` (doc-init BUILD +0 per [BR-067](../../../fr-br/BR-067-rw-first-doc-only-release-defaults-to-build-plus-one-not-plus-zero.md)).

---

## Version Anchor

**Forensic Marker Format:** `✅ COMPLETE (vRC.E.S.T+B)`

---

## Migration Notes

Migrated from embedded Story section via `generate_task_doc.py` (FR-016 Wave 1 tooling).

**Source Story:** `docs/kanban/epics/epic-21/story-01-language-selection-at-setup.md`


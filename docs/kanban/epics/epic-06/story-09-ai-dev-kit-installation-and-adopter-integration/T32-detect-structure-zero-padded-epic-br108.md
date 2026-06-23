---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-11T10:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E06:S09:T32 — Detect structure zero-padded epic names (BR-108 / F23)

**Task ID:** E06:S09:T32  
**Status:** COMPLETE  
**Priority:** MEDIUM  
**Created:** 2026-06-11  
**Last updated:** 2026-06-12 (✅ COMPLETE v0.6.9.32+1 — BR-108 detector fix)  
**Code:** E06S09T32  
**Version Anchor:** v0.6.9.32+1

**Parent program:** [E06:S09:T26](T26-starborn-legacy-adk-install-program.md)  
**Upstream:** [BR-108](../../../fbu/BR-108-detect-existing-structure-zero-padded-epic-names.md) · triage **F23**

---

## Input

- [IPP-E06S09T32](../../../../implementation-cycles/IPP-E06S09T32-detect-structure-zero-padded-epic-br108.md) (implementation plan)
- [BR-108](../../../fbu/BR-108-detect-existing-structure-zero-padded-epic-names.md)
- SBL attempt 06: `adk-install-into-sbl/attempt-06/feedback-package/kanban-migration-experiment-report.md`

## References

- [IPP-E06S09T32](../../../../implementation-cycles/IPP-E06S09T32-detect-structure-zero-padded-epic-br108.md)

---

## Scope

Fix `detect_existing_structure.py` to recognise zero-padded legacy epic filenames (`Epic-01.md` … `Epic-09.md`) without `int()` normalisation breaking path matching.

---

## Deliverable

Patched detector + unit test with SBL-style legacy layout fixture.

---

## Acceptance criteria

- [x] **AC1:** `Epic-01.md`–`Epic-09.md` detected correctly.
- [x] **AC2:** Unit test passes in `packages/frameworks/kanban/`.
- [x] **AC3:** No regression on existing detector fixtures.

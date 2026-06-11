---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-11T10:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E06:S09:T32 — Detect structure zero-padded epic names (BR-108 / F23)

**Task ID:** E06:S09:T32  
**Status:** TODO  
**Priority:** MEDIUM  
**Created:** 2026-06-11  
**Last updated:** 2026-06-11 (FR-079 attempt 06 intake)  
**Code:** E06S09T32

**Parent program:** [E06:S09:T26](T26-starborn-legacy-adk-install-program.md)  
**Upstream:** [BR-108](../../../fr-br/BR-108-detect-existing-structure-zero-padded-epic-names.md) · triage **F23**

---

## Input

- [BR-108](../../../fr-br/BR-108-detect-existing-structure-zero-padded-epic-names.md)
- SBL attempt 06: `starborn_legacy/logs/ai-dev-kit/install/attempt-06/feedback-package/kanban-migration-experiment-report.md`

---

## Scope

Fix `detect_existing_structure.py` to recognise zero-padded legacy epic filenames (`Epic-01.md` … `Epic-09.md`) without `int()` normalisation breaking path matching.

---

## Deliverable

Patched detector + unit test with SBL-style legacy layout fixture.

---

## Acceptance criteria

- [ ] **AC1:** `Epic-01.md`–`Epic-09.md` detected correctly.
- [ ] **AC2:** Unit test passes in `packages/frameworks/kanban/`.
- [ ] **AC3:** No regression on existing detector fixtures.

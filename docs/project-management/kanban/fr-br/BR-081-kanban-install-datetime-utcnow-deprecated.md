---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-03T17:40:00Z
expires_at: null
housekeeping_policy: keep
---

# Bug Report BR-081: `install_kanban_framework.py` Uses Deprecated `datetime.utcnow()`

**Bug ID:** BR-081  
**Priority:** LOW  
**Severity:** LOW (DeprecationWarning noise; future Python risk)  
**Status:** OPEN (INTAKE)  
**GitHub Issue:** [#13](https://github.com/RMS-Ltd/ai-dev-kit/issues/13)  
**Implementing Task:** [E06:S09:T10](../epics/Epic-6/Story-009-ai-dev-kit-installation-and-adopter-integration/T10-kanban-install-datetime-utcnow-br081.md)  
**Created:** 2026-06-03  
**Source:** Book dry-run; Python 3.14.5; ADK `dev` @ `84efa7b`

---

## Summary

Kanban installer emits `DeprecationWarning` for `datetime.datetime.utcnow()` (~lines 93, 185).

---

## Expected

Timezone-aware UTC, e.g. `datetime.now(datetime.UTC)`.

## Acceptance Criteria

- [ ] No `utcnow()` in `install_kanban_framework.py` on supported Python versions.
- [ ] Regression test or lint guard optional (no new warning on 3.12+).

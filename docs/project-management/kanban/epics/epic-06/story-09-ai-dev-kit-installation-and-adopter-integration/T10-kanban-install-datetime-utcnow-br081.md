---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-03T17:45:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 6, Story 9, Task 10: Replace `utcnow()` in kanban installer (BR-081)

**Task ID:** E06:S09:T10  
**Status:** ✅ COMPLETE (v0.6.9.10+2)  
**Priority:** LOW  
**Created:** 2026-06-03  
**Last updated:** 2026-06-04  
**Code:** E06S09T10

**Upstream:** [BR-081](../../../fr-br/BR-081-kanban-install-datetime-utcnow-deprecated.md) · [GitHub #13](https://github.com/RMS-Ltd/ai-dev-kit/issues/13)

## Version Anchor

**Version:** v0.6.9.10+2 (RW E06:S09:T10)

---

## Scope

Replace deprecated `datetime.utcnow()` in `install_kanban_framework.py` with timezone-aware UTC.

---

## Input

- [IPP-E6S9T10-br081-kanban-install-datetime-utcnow](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/implementation-cycles/IPP-E06S09T10-br081-kanban-install-datetime-utcnow.md)
- [BR-081](../../../fr-br/BR-081-kanban-install-datetime-utcnow-deprecated.md)
- Python 3.12+ dry-run output

---

## Deliverable

- Timezone-aware UTC timestamps in installer; no DeprecationWarning on 3.12+

---

## Acceptance Criteria

- [x] No DeprecationWarning on Python 3.12+ dry-run (`TestInstallNoUtcnowDeprecation`).

---

## Links

- [IPP-E6S9T10](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/implementation-cycles/IPP-E06S09T10-br081-kanban-install-datetime-utcnow.md)
- [BR-081](../../../fr-br/BR-081-kanban-install-datetime-utcnow-deprecated.md)
- [Story 009](../story-09-ai-dev-kit-installation-and-adopter-integration.md)

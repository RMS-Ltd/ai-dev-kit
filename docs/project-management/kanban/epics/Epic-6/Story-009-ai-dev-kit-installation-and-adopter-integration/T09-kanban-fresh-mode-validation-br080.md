---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-03T17:45:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 6, Story 9, Task 9: Kanban fresh mode validation on empty repo (BR-080)

**Task ID:** E06:S09:T09  
**Status:** TODO  
**Priority:** HIGH  
**Created:** 2026-06-03  
**Code:** E06S09T09

**Upstream:** [BR-080](../../../fr-br/BR-080-kanban-fresh-mode-validation-requires-force-on-empty-repo.md) · [GitHub #12](https://github.com/RMS-Ltd/ai-dev-kit/issues/12)

## Version Anchor

**Version:** (pending — RW -k)

---

## Scope

Relax or reorder pre-install validation for `--mode fresh` on empty repos so first-time install does not require `--force`.

---

## Input

- [BR-080](../../../fr-br/BR-080-kanban-fresh-mode-validation-requires-force-on-empty-repo.md)
- `install_kanban_framework.py` validation path for fresh mode

---

## Deliverable

- Empty-repo fresh install succeeds without `--force`, or guided first-run message
- `INSTALL_IN_YOUR_PROJECT.md` / greenfield docs aligned

---

## Acceptance Criteria

- [ ] Fresh install on empty repo succeeds without `--force` or prints guided first-run message.
- [ ] `INSTALL_IN_YOUR_PROJECT.md` / greenfield docs aligned.

---

## Links

- [BR-080](../../../fr-br/BR-080-kanban-fresh-mode-validation-requires-force-on-empty-repo.md)
- [BR-078](../../../fr-br/BR-078-kanban-fresh-install-structure-template-missing.md)
- [Story 009](../Story-009-ai-dev-kit-installation-and-adopter-integration.md)

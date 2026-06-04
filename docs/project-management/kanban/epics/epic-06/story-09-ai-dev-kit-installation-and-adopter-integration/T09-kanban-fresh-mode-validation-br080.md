---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-03T17:45:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 6, Story 9, Task 9: Kanban fresh mode validation on empty repo (BR-080)

**Task ID:** E06:S09:T09  
**Status:** ✅ COMPLETE (**v0.6.9.9+2** — BR-080 skeleton-before-validate)  
**Priority:** HIGH  
**Created:** 2026-06-03  
**Last updated:** 2026-06-03 (RW **v0.6.9.9+2** — BR-080 implementation release)  
**Code:** E06S09T09

**Upstream:** [BR-080](../../../fr-br/BR-080-kanban-fresh-mode-validation-requires-force-on-empty-repo.md) · [GitHub #12](https://github.com/RMS-Ltd/ai-dev-kit/issues/12)

## Version Anchor

**Version:** v0.6.9.9+2 (RW --art)

---

## Scope

Relax or reorder pre-install validation for `--mode fresh` on empty repos so first-time install does not require `--force`.

---

## Input

- [BR-080](../../../fr-br/BR-080-kanban-fresh-mode-validation-requires-force-on-empty-repo.md)
- `install_kanban_framework.py` validation path for fresh mode
- **IPW:** [IPP-E06S09T09-br080-fresh-mode-empty-repo-validation.md](../../../../../implementation-cycles/IPP-E06S09T09-br080-fresh-mode-empty-repo-validation.md) — **Publication Status: PUBLISHED**

---

## Deliverable

- Empty-repo fresh install succeeds without `--force`, or guided first-run message
- `INSTALL_IN_YOUR_PROJECT.md` / greenfield docs aligned

---

## Acceptance Criteria

- [x] Fresh install on empty repo succeeds without `--force` (see `tests/kanban/test_install_fresh_validation.py`).
- [x] `INSTALL_IN_YOUR_PROJECT.md` greenfield note: `--force` not required for empty-repo directory checks.
- [ ] User verification on book dry-run replay (ExpensesTracker T03 Step 1).

---

## Links

- [BR-080](../../../fr-br/BR-080-kanban-fresh-mode-validation-requires-force-on-empty-repo.md)
- [IPP-E06S09T09](../../../../../implementation-cycles/IPP-E06S09T09-br080-fresh-mode-empty-repo-validation.md)
- [BR-078](../../../fr-br/BR-078-kanban-fresh-install-structure-template-missing.md)
- [Story 009](../story-09-ai-dev-kit-installation-and-adopter-integration.md)

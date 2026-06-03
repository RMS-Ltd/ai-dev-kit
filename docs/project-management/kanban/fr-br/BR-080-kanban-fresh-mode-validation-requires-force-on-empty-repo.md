---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-03T17:40:00Z
expires_at: null
housekeeping_policy: keep
---

# Bug Report BR-080: Kanban Fresh Mode Pre-Install Validation Fails Without `--force`

**Bug ID:** BR-080  
**Priority:** HIGH  
**Severity:** HIGH (first-run install aborts; book must document `--force`)  
**Status:** OPEN (INTAKE)  
**GitHub Issue:** [#12](https://github.com/RMS-Ltd/ai-dev-kit/issues/12)  
**Implementing Task:** [E06:S09:T09](../epics/Epic-6/Story-009-ai-dev-kit-installation-and-adopter-integration/T09-kanban-fresh-mode-validation-br080.md)  
**Created:** 2026-06-03  
**Source:** Book dry-run (ExpensesTracker T03 Step 1); ADK `dev` @ `84efa7b`

---

## Summary

`install_kanban_framework.py --mode fresh` (without `--force`) aborts on empty repo because pre-install validation reports missing `epics/` directory.

---

## Steps to Reproduce

1. New project with no `docs/project-management/kanban/epics`.
2. Run `--mode fresh` (no `--force`).

## Actual

```
❌ ERRORS (must be fixed before installation):
  ❌ Required directory missing: epics
```

## Expected

**Fresh** mode skips or relaxes validation that assumes an existing tree, **or** creates skeleton before validation.

## Workaround

`--mode fresh --force` (documented in book packet).

## Related

- [BR-078](BR-078-kanban-fresh-install-structure-template-missing.md) — same dry-run context

## Acceptance Criteria

- [ ] Empty-repo fresh install succeeds without `--force` **or** CLI prints explicit first-run guidance before abort.
- [ ] Validation order: create skeleton → validate (if validation retained).
- [ ] `INSTALL_IN_YOUR_PROJECT.md` / greenfield path updated.

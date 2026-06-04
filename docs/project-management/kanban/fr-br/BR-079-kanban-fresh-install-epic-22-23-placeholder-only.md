---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-03T17:40:00Z
expires_at: null
housekeeping_policy: keep
---

# Bug Report BR-079: Kanban Fresh Install — Epic 22 and 23 Placeholder Only

**Bug ID:** BR-079  
**Priority:** MEDIUM  
**Severity:** MEDIUM (inconsistent fresh-install epic docs)  
**Status:** OPEN (fix attempted **v0.6.9.8+2** — pending verification)  
**GitHub Issue:** [#11](https://github.com/RMS-Ltd/ai-dev-kit/issues/11)  
**Implementing Task:** [E06:S09:T08](../epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T08-kanban-fresh-install-epic-22-23-templates-br079.md)  
**Created:** 2026-06-03  
**Source:** Book dry-run (ExpensesTracker T03 Step 1); ADK `dev` @ `84efa7b`

---

## Summary

Fresh kanban install creates **Epic 22** and **Epic 23** with placeholder content (`template not found`) while other epics install from canonical templates.

---

## Steps to Reproduce

1. `install_kanban_framework.py --mode fresh --force` on empty consumer repo.

## Actual

```
⚠️  Epic 22 created with placeholder (template not found)
⚠️  Epic 23 created with placeholder (template not found)
```

## Expected

Epics 22 and 23 install from templates like Epics 1–8, 10, 18.

## Workaround

Manual replacement from template pack when available.

## Acceptance Criteria

- [x] Epic 22/23 templates ship in `packages/frameworks/kanban/templates/Epic-{22,23}/` (E06:S09:T08).
- [x] Fresh install no longer emits placeholder-only epics for 22/23 in default path.
- [x] Installer logs distinguish missing template vs successful install (path in success line).

**Verification:** User to confirm on book replay (GitHub #11) before closing BR-079.

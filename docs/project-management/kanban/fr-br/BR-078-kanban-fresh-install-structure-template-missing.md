---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-03T17:40:00Z
expires_at: null
housekeeping_policy: keep
---

# Bug Report BR-078: Kanban Fresh Install — KANBAN_STRUCTURE_TEMPLATE.md Not Found

**Bug ID:** BR-078  
**Priority:** MEDIUM  
**Severity:** MEDIUM (PARTIAL install status; structure doc missing)  
**Status:** RESOLVED (verified ExpensesTracker replay **2026-06-04** @ `v0.4.885+2`)  
**GitHub Issue:** [#10](https://github.com/RMS-Ltd/ai-dev-kit/issues/10)  
**Implementing Task:** [E06:S09:T07](../epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T07-kanban-fresh-install-structure-template-missing-br078.md)  
**Created:** 2026-06-03  
**Source:** Book dry-run (ExpensesTracker T03 Step 1); ADK `dev` @ `84efa7b`

---

## Summary

`install_kanban_framework.py --mode fresh --force` warns that `packages/frameworks/kanban/templates/KANBAN_STRUCTURE_TEMPLATE.md` is missing; install ends **PARTIAL** even when `kboard.md` and `epics/` are created.

---

## Steps to Reproduce

1. Fresh install on empty consumer repo (no `docs/project-management/kanban/epics` yet).
2. Run `python …/install_kanban_framework.py --mode fresh --force`.

## Actual

```
⚠️  Structure template not found: …/packages/frameworks/kanban/templates/KANBAN_STRUCTURE_TEMPLATE.md
Final status: PARTIAL
```

## Expected

Structure template copied or generated from framework templates; **SUCCESS** (or documented acceptable partial) when core board + epics exist.

## Workaround

Proceed if `kboard.md` and `epics/` exist; document PARTIAL as acceptable in adopter packet.

## Acceptance Criteria

- [x] Template path exists in package (**E06:S09:T07** — `KANBAN_STRUCTURE_TEMPLATE.md`).
- [x] Fresh install does not emit false-alarm PARTIAL when board + epics succeed (pre-install warnings ignored for fresh mode).
- [x] Book/adopter docs aligned with actual install outcome.

**Verification:** User to confirm on book replay (GitHub #10) before closing BR-078.

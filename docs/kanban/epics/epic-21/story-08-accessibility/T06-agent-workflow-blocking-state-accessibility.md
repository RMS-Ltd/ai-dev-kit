---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-07T20:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 21, Story 8, Task 6: Agent workflow blocking-state accessibility

**Task ID:** E21:S08:T06  
**Status:** DEFERRED  
**Priority:** MEDIUM  
**Layer:** 4 (agent workflows)  
**Last updated:** 2026-06-07 (Deferred — Layer 1 CLI first)  
**Version:** v0.21.8.6+0  
**Code:** E21S08T06

---

## Scope

**Deferred until Layer 1 COMPLETE.** Ensure RW, UKW, and IPW agent outputs communicate blocking, in-progress, and complete states in plain text without relying on emoji or colour alone. Align with workflow step tracker atomicity (existing accessibility-critical RW rules).

---

## Acceptance Criteria

- [ ] RW ABORTED / COMPLETE templates include explicit step number and required operator action
- [ ] Cursor rules and slash-command docs updated
- [ ] Examples validated for screen-reader readability

---

## Kanban-init intake

**Trigger:** `RW -k E21:S08:T06 --art --dpz`  
**Target version anchor:** `v0.21.8.6+0`

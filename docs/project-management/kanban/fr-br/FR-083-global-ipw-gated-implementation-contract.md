---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-20T13:07:00Z
expires_at: null
housekeeping_policy: keep
---

# FR-083: Global IPW-gated implementation contract

**Type:** Feature Request (FR)  
**ID:** FR-083  
**Submitted:** 2026-04-20  
**Submitted By:** User feedback / governance hardening  
**Priority:** HIGH  
**Severity:** HIGH  
**Status:** IMPLEMENTED

**Implementing Task:** [E6:S06:T62](../epics/Epic-6/Story-006-feature-requests/T62-global-ipw-gated-implementation-contract-fr083.md)
**Planning package (IPW):** [IPW-E6S06T62-global-ipw-gated-implementation-contract](../../../implementation-cycles/IPW-E6S06T62-global-ipw-gated-implementation-contract.md)

---

## Summary

Establish a hard repository-wide execution contract that blocks all implementation work behind a complete IPW package plus explicit user authorization, preventing intent override during intake and planning requests.

---

## Problem Statement

Current behavior can drift from requested artifact scope (for example, a request to file a UXR/FR/BR triggers direct implementation). This violates user control, bypasses planning stages, and weakens governance traceability.

---

## Requirements

### Functional Requirements

- [x] **FR-083-F1:** Define and enforce a global "no implementation before IPW" gate in governing agent rules.
- [x] **FR-083-F2:** Require all implementation to satisfy three preconditions: task anchor (`E#:S#:T#`), linked IPW package (`specification`, `test-design`, `implementation-plan`), and explicit user execution authorization in a separate instruction.
- [x] **FR-083-F3:** Require planning/intake requests (UXR/FR/BR/task/spec/plan/review) to remain planning-only and stop on completion.
- [x] **FR-083-F4:** Require missing-precondition handling to request only missing prerequisites, without inferred permission or opportunistic implementation.

### Non-Functional Requirements

- [x] **FR-083-NF1:** Policy language is unambiguous and applies repository-wide (not limited to one workflow).
- [x] **FR-083-NF2:** Rule placement is durable across sessions by updating both `AGENTS.md` and `.cursorrules`.

---

## Acceptance Criteria

- [x] Contract is present in both primary rule sources and states all gate preconditions explicitly.
- [x] Contract explicitly blocks implementation while gate is closed and requires stop-and-wait after planning artifact completion.
- [x] FR and task are bidirectionally linked and listed in active story/board tracking surfaces.

---

## Scope Analysis

**Problem Domain:** Governance, workflow safety, agent execution contract  
**Affected Areas:**

- [x] `AGENTS.md`
- [x] `.cursorrules`
- [x] Kanban intake/task/board wiring docs
- [ ] Runtime workflow scripts (not required for initial policy filing)

**Estimated Complexity:**

- [x] Simple (1-3 days)
- [ ] Medium (1 week)
- [ ] Complex (2+ weeks)
- [ ] Very Complex (1+ month)

---

## Related

- [FR-042](./FR-042-implementation-planning-workflow-ipw.md)
- [FR-074](./FR-074-kanban-intake-atomic-kg-r2-kg-r6-governance.md)
- [UXR-008](./UXR-008-kboard-fbuboard-default-naming-adoption.md)

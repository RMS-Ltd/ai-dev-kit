---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-20T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# FR-096: IPW mandatory documentation phases (update/create + housing)

**Type:** Feature Request (FR)  
**ID:** FR-096  
**Submitted:** 2026-05-20  
**Submitted By:** User — close gap between FR-042 Step 5 intent and runnable `/ipw` command  
**Priority:** HIGH  
**Severity:** MEDIUM  
**Status:** RESOLVED — v0.2.16.11+1

**Implementing Task:** [E2:S16:T11](../epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T11-ipw-documentation-phases-update-create-and-housing-fr096.md)

**Related:** [FR-042](./FR-042-implementation-planning-workflow-ipw.md) (product definition; steps 5–6 now operationalized), [FR-094](./FR-094-ipw-slash-command-and-task-state-transition-mandate.md) (slash command + phase gates), [BR-066](./BR-066-ipw-missing-docusaurus-filing-for-planning-artifacts.md) (publication housing)

---

## Summary

Add two **mandatory IPW phases** after implementation planning and **before** the IPP is written:

1. **Phase 5 — Documentation update and creation** — inventory existing docs, classify UPDATE / CREATE / NONE, gap analysis.
2. **Phase 6 — House documentation** — canonical paths in the documentation system, publication status, lifecycle, inbound links.

Persist outputs in IPP **§5 Documentation deliverables** and **§6 Documentation housing** (`PLAN_DOC_TEMPLATE.md`). Align runnable `/ipw`, agent execution guide, FR-042, and global gate references (Sections 1–7).

---

## Problem Statement

FR-042 defined **Identify Required Documentation** as Step 5, but the operational `/ipw` command and `PLAN_DOC_TEMPLATE.md` did not enforce it. IPW could complete without:

- Scanning existing documentation for required updates.
- Recording documentation gaps.
- Assigning canonical housing paths before implementation.

This weakened traceability between planning and the project documentation system (KB, user docs, ADRs, Docusaurus).

---

## Proposed Solution

| Phase | Name |
| ----- | ---- |
| 5 | Documentation update and creation |
| 6 | House documentation |
| 7 | Create plan doc (IPP §1–§7) |
| 8 | Wire to host task |
| 9 | Validate |

Update `.claude/commands/ipw.md`, `implementation-planning-workflow-agent-execution.md`, `PLAN_DOC_TEMPLATE.md`, FR-042 step table, `dev-kit-ipw-ipp-vs-icw-artifacts.md`, `specification-and-planning-artifacts-policy.md`, `AGENTS.md`, `.cursorrules`, and IPW agent stub.

---

## Acceptance Criteria

- [x] **AC1:** `/ipw` defines Phases 5–6 with mandatory gates after Phase 4.
- [x] **AC2:** `PLAN_DOC_TEMPLATE.md` includes §5 (deliverables) and §6 (housing); success criteria in §7.
- [x] **AC3:** Agent execution guide phase table is 0–9 and documents housing ladder.
- [x] **AC4:** FR-042 formal steps 5–9 match operational phases.
- [x] **AC5:** Global gate (`AGENTS.md`, `.cursorrules`) references IPP Sections 1–7.
- [x] **AC6:** FR-096 ↔ E2:S16:T11 bidirectionally linked.

---

## References

- [FR-042](./FR-042-implementation-planning-workflow-ipw.md)
- [FR-094](./FR-094-ipw-slash-command-and-task-state-transition-mandate.md)
- [BR-066](./BR-066-ipw-missing-docusaurus-filing-for-planning-artifacts.md)
- `.claude/commands/ipw.md`

---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-08T18:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 2, Story 16, Task 22: Implementation Delivery Workflow (IDW) — FR-118

**Task ID:** E02:S03:T08
**Historical Anchor:** E02:S16:T22  
**Status:** COMPLETE  
**Priority:** HIGH  
**Estimated Effort:** Medium  
**Created:** 2026-06-08  
**Last updated:** 2026-06-08 (IDW delivery + RW v0.2.16.22+1)  
**Version Anchor:** v0.2.16.22+1  
**Code:** E02S03T08  

✅ COMPLETE (v0.2.16.22+1)

Publication Status: PUBLISHED  
**Planning package:** [`IPP-E02S03T08-implementation-delivery-workflow-idw-fr118.md`](../../../../../implementation-cycles/IPP-E02S03T08-implementation-delivery-workflow-idw-fr118.md)

**Upstream:** [FR-119 — Implementation Delivery Workflow (IDW)](../../../fr-br/FR-119-implementation-delivery-workflow-idw.md)

---

## Input

- [FR-118](../../../fr-br/FR-119-implementation-delivery-workflow-idw.md)
- [IPP-E02S03T08](../../../../../implementation-cycles/IPP-E02S03T08-implementation-delivery-workflow-idw-fr118.md)
- Pattern references: `.claude/commands/ipw.md`, `.claude/commands/rw.md`
- [FR-083](../../../fr-br/FR-083-global-ipw-gated-implementation-contract.md)

---

## Problem statement

IPW produces IPP; RW releases. Implementation execution lacks a named workflow, gates, and optional `--rw` chain. FR-083 authorization is implicit (`implement`).

---

## Deliverable

- `.claude/commands/idw.md` and KB `implementation-delivery-workflow-agent-execution.md`
- `workflows/implementation-delivery-workflow/` package + registry entry
- Routing updates: `CLAUDE.md`, `.cursorrules`, `AGENTS.md`, `project-agent-manifest.json`
- Cheatsheet §4b, sequences, flag disambiguation for `--rw`
- IPP + FR + task wiring; RW release

---

## Acceptance criteria

- [x] **AC1:** `/idw` exists; blocks plan mode; gates before edits.
- [x] **AC2:** `--rw` chain documented; IDW does not own commit/tag.
- [x] **AC3:** FR-083: `IDW E:S:T` is explicit authorization.
- [x] **AC4:** Cheatsheet and agent SoT aligned.
- [x] **AC5:** FR-118 ↔ T22 ↔ IPP wired; RW version anchor.

---

## References

- [FR-118](../../../fr-br/FR-119-implementation-delivery-workflow-idw.md)
- [IPP-E02S03T08](../../../../../implementation-cycles/IPP-E02S03T08-implementation-delivery-workflow-idw-fr118.md)
- [Workflow initiation cheatsheet](../../../../../guides/workflow-initiation-cheatsheet.md)

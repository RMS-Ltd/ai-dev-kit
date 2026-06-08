---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-08T18:00:00Z
expires_at: null
housekeeping_policy: keep
---

# FR-119: Implementation Delivery Workflow (IDW) with optional `--rw` chain

**Type:** Feature Request (FR)  
**ID:** FR-119  
**Submitted:** 2026-06-08  
**Submitted By:** User — workflow model hardening (IPW → IDW → RW)  
**Priority:** HIGH  
**Severity:** MEDIUM  
**Status:** IMPLEMENTED

**Implementing Task:** [E02:S16:T22](../epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T22-implementation-delivery-workflow-idw-fr118.md)

---

## Summary

Formalize **Implementation Delivery Workflow (IDW)** as the canonical implementation execution surface between **IPW** (planning → IPP) and **RW** (release). IDW executes a linked IPP; optional lowercase **`--rw`** chains local-complete RW after `IDW COMPLETE`. IPW remains isolated by default (no auto-chain).

---

## Problem Statement

FR-083 gates implementation behind IPP + explicit authorization, but the middle step is implicit (`implement` free text). IPW and RW are first-class workflows; implementation is not. Operators lack a named trigger, gates, and cheatsheet coverage for IPP execution. Chaining release after implementation is ad hoc.

---

## Requirements

### Functional

- [x] **FR-119-F1:** `.claude/commands/idw.md` — self-contained IDW command (implementation mode; not plan mode).
- [x] **FR-119-F2:** KB agent execution guide for IDW under workflow-mgt vwmp.
- [x] **FR-119-F3:** Workflow registry entry `implementation-delivery-workflow` with triggers `IDW`.
- [x] **FR-119-F4:** `CLAUDE.md`, `.cursorrules`, `AGENTS.md`, `project-agent-manifest.json` routing for `IDW` / `idw`.
- [x] **FR-119-F5:** Cheatsheet §4b + sequences; `--rw` flag documented (lowercase).
- [x] **FR-119-F6:** Invoking `IDW E:S:T` satisfies FR-083 explicit implementation authorization.
- [x] **FR-119-F7:** `IDW E:S:T --rw` chains RW after `IDW COMPLETE`; `--push` / `--art` forward to RW when present.

### Non-functional

- [x] **FR-119-NF1:** IDW does not commit, tag, or bump version (RW owns release).
- [x] **FR-119-NF2:** IPW does not chain to IDW or RW by default.

---

## Acceptance Criteria

- [x] AC1: `/idw` command exists and blocks plan mode.
- [x] AC2: Gates before edits: branch safety, task token, linked IPP/ICW.
- [x] AC3: `--rw` documented and wired in command + cheatsheet.
- [x] AC4: FR ↔ task ↔ IPP bidirectional links.
- [x] AC5: RW release with version anchor on T22 (v0.2.16.22+1).

---

## Related

- [FR-083](FR-083-global-ipw-gated-implementation-contract.md)
- [FR-042](FR-042-implementation-planning-workflow-ipw.md)
- [FR-094](FR-094-ipw-slash-command-and-task-state-transition-mandate.md)
- [UXR-015](UXR-015-workflow-initiation-cheatsheet.md)

---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-09T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# ICW-E2S01T17-Specification: FR-077 IPW-built Task Status Transition and Kboard Sync

**Task:** E2:S01:T17  
**Related FR:** FR-077  
**Host Task:** [T17-ipw-built-task-status-transition-and-kboard-sync-fr077.md](../project-management/kanban/epics/Epic-2/Story-001-rw-agent-execution-and-docs/T17-ipw-built-task-status-transition-and-kboard-sync-fr077.md)  
**Created:** 2026-04-09

---

## Executive Summary

Define canonical lifecycle rules so tasks planned with IPW cannot remain stale on task docs or kboard after implementation starts or completes. The solution must identify transition timing, workflow ownership, and atomic propagation behavior.

---

## Problem Statement

Current execution can produce a drift state where planning is completed and implementation work occurs, but task status remains `TODO` on task docs and/or `kboard.md`. This breaks forensic traceability and distorts operational prioritization.

FR-077 requires explicit transition contracts and synchronization responsibility across IPW, implementation flow, and RW/UKW synchronization surfaces.

---

## Scope

In scope:

- Define normative transition points for `TODO`, `IN PROGRESS`, and `COMPLETE`.
- Specify authoritative ownership for transition application and board propagation.
- Define atomic update expectations for task-doc and kboard status synchronization.
- Specify audit/validation behavior for implemented-but-TODO drift.

Out of scope:

- Implementing workflow/validator code in this planning package.
- Releasing process changes (RW execution).
- Reworking unrelated prioritization governance outside transition-state semantics.

---

## Functional Invariants

1. **Transition timing invariant**  
   `TODO -> IN PROGRESS` occurs at first non-planning implementation action; `IN PROGRESS -> COMPLETE` occurs only after acceptance evidence is satisfied.

2. **Ownership invariant**  
   Workflow documentation must name exactly which step/actor applies status changes and which step propagates board state.

3. **Atomic sync invariant**  
   Task-doc and kboard status updates for a transition are part of the same change set/session.

4. **Drift-detection invariant**  
   System includes at least one repeatable check that flags implemented-but-TODO divergence.

5. **Safety invariant**  
   New transition automation must not mark tasks complete without evidence gates.

---

## Requirement Mapping (T17 AC)

- **AC-1:** Policy and docs explicitly define `TODO`, `IN PROGRESS`, `COMPLETE` application points.
- **AC-2:** IPW output includes explicit transition intent/checklist for downstream implementation and release steps.
- **AC-3:** Task-doc and kboard synchronization defined as atomic on status transitions.
- **AC-4:** Regression/audit check reports stale TODO status when implementation evidence exists.

---

## Non-Functional Constraints

- **Traceability:** Transitions are auditable via docs and changelog context.
- **Clarity:** Ownership and step responsibilities are unambiguous.
- **Predictability:** Transition behavior is deterministic across comparable scenarios.
- **Governance:** MoSCOW views and source task docs remain semantically aligned.

---

## Edge Cases and Boundaries

- IPW artifact creation without subsequent implementation: status should remain `TODO`.
- Partial implementation with incomplete AC evidence: status should be `IN PROGRESS`, not `COMPLETE`.
- RW/UKW run that updates board metadata without task-state intent: must not silently alter authoritative task status.
- Multiple concurrent changes touching the same task status: atomic sync rule must avoid split-brain board/doc outcomes.

Boundary policy:

- Prefer conservative transitions when evidence is ambiguous.
- Never treat planning-only activity as implementation start.
- Never apply COMPLETE without explicit acceptance verification markers.

---

## Acceptance Assertions

- Planning artifacts provide testable contracts for FR-077 AC-1 through AC-4.
- Lifecycle ownership and atomic sync expectations are explicit.
- Host task and FR are bidirectionally linked to all ICW planning artifacts.

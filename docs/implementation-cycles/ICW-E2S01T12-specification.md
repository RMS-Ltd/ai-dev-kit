---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-09T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# ICW-E2S01T12-Specification: BR-061 Explicit RW Task-ID Version Alignment

**Task:** E2:S01:T12  
**Related BR:** BR-061  
**Host Task:** [T12-rw-explicit-task-id-version-alignment-br061.md](../project-management/kanban/epics/Epic-2/Story-001-rw-agent-execution-and-docs/T12-rw-explicit-task-id-version-alignment-br061.md)  
**Created:** 2026-04-09

---

## Executive Summary

Define implementation constraints and behavioral contracts so explicit `RW E:S:T` intent can proceed without manual pre-alignment of `version.py`, while preserving strict branch safety and task-intent guardrails.

---

## Problem Statement

Current Step 1 branch validation can block valid explicit-task RW runs when `version.py` reflects a previously active epic. This introduces manual pre-work and breaks single-command expectations for explicit release intent.

BR-061 requires reducing this false friction without weakening protections against cross-epic contamination, mistyped task identifiers, or ambiguous intent.

---

## Scope

In scope:

- Define acceptable pre-Step-2 handling for explicit `E:S:T` requests when version coordinates lag branch/task context.
- Specify guardrail-preserving behavior for Step 1, Step 1b, and Step 1d composition.
- Establish verification contracts for branch safety, intent validation, and typo risk controls.
- Define documentation update obligations for RW behavior.

Out of scope:

- Implementing script changes in this planning package.
- Release execution and final workflow rollout.
- Non-RW branch policy redesign unrelated to explicit-task path.

---

## Functional Invariants

1. **Explicit intent invariant**  
   When user provides explicit `E:S:T`, workflow behavior must treat that input as authoritative intent for release anchoring, subject to safety validation.

2. **Branch safety invariant**  
   Wrong-branch or cross-epic contamination risk must remain a blocking condition.

3. **Intent guard invariant**  
   Step 1d task-intent checks must continue to reject ambiguous or incorrect task alignment unless explicitly adopted via documented override semantics.

4. **No manual pre-alignment invariant**  
   Valid explicit-task release flow must not require manual `version.py` edits before RW can proceed.

5. **Deterministic reconciliation invariant**  
   Any version alignment/reconciliation behavior for explicit-task flow must be deterministic, auditable, and loggable.

---

## Ordering Contract (Pre-Step-2)

The implementation for BR-061 must preserve the mandatory gate sequence while removing false friction:

1. **Step 1 (`validate_branch_context.py --strict`)** remains mandatory and blocking.
2. **Step 1.3/1.4/1.5** run in canonical order (token required, task releasable, intent guard).
3. **Explicit `--art` behavior in Step 1.5** may adopt requested `E:S:T` as canonical anchor when intent is explicit.
4. **Step 2 (version bump/reconciliation)** performs deterministic version file update and persists selected anchor.

This package explicitly forbids bypassing mandatory safety gates to solve BR-061. The fix target is false mismatch friction, not guardrail relaxation.

---

## Re-Baselined Behavioral Expectations

- **Allowed (should proceed):** Explicit valid `RW E:S:T` on a valid branch while `version.py` is stale from a previously active epic/story/task.
- **Blocked (must fail):** Wrong branch context, ambiguous task intent, malformed/typo task token, unreleasable task doc state for the selected RW mode.
- **Auditable transition:** Any adoption/reconciliation decision must be visible in validator/workflow logs and documentation.

---

## Requirement Mapping (T12 AC)

- **AC-1:** `RW E:S:T` on valid target branch does not require manual pre-alignment of `version.py`.
- **AC-2:** Step 1/1b/1d still block invalid branch or ambiguous/incorrect task intent.
- **AC-3:** RW documentation reflects explicit-task alignment behavior and decision points.
- **AC-4:** Regression tests cover BR-061 repro and safety-preservation paths.

---

## Non-Functional Constraints

- **Safety-first:** Reduced friction must not weaken validation rigor.
- **Explainability:** Decision path must be explicit in logs and docs.
- **Operability:** Failure messages should remain actionable and concise.
- **Compatibility:** Behavior should compose cleanly with existing `--art`/intent guard semantics.

---

## Edge Cases and Boundaries

- Explicit task targets an epic different from stale `version.py` while branch is valid.
- Explicit task identifier has typo but still resembles a valid ID format.
- Requested task is valid but task document status/context is non-releasable.
- Requested task and current anchor diverge in `RW -k` style scenarios requiring strict intent handling.
- Explicit trigger uses `--art` to intentionally adopt requested task across RW modes.

Boundary policy:

- Block on safety/intent uncertainty.
- Reconcile only when confidence and guard checks permit deterministic action.
- Never silently continue on mismatched branch context.

---

## Acceptance Assertions

- Planning artifacts define explicit, testable checks for all T12 acceptance criteria.
- Safety and intent guardrails remain explicit first-class constraints.
- Host task is bidirectionally linked to all ICW artifacts for implementation handoff.

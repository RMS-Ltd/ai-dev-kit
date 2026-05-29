---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-14T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# ADR-004: Mandatory IPP State Transition Steps

**Status:** Accepted  
**Date:** 2026-05-14  
**Deciders:** User (Ruari Mears)  
**Implementing task:** [E2:S16:T09](../../project-management/kanban/epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T09-ipw-slash-command-claude-code-fr094.md)  
**Origin FR:** [FR-094](../../project-management/kanban/fr-br/FR-094-ipw-slash-command-and-task-state-transition-mandate.md)  
**Related:** [FR-077](../../project-management/kanban/fr-br/FR-077-ipw-built-task-status-transition-and-kboard-sync.md) — established the ownership contract that this ADR embeds in the IPP artefact

---

## Context

[FR-077](../../project-management/kanban/fr-br/FR-077-ipw-built-task-status-transition-and-kboard-sync.md) established that task state transitions (`TODO → IN PROGRESS`, `IN PROGRESS → COMPLETE`) are owned by implementation execution — not IPW (planning). Validators (`validate_ipw_status_drift.py`, RW Step 1c) correctly detect TODO drift after implementation begins, but only after the fact, causing RW gate failures and manual intervention.

The root cause is that the ownership contract exists in documentation, not in the artefact the implementer is directly following: the IPP (Implementation Plan document produced by IPW). Implementers who work from the IPP without re-reading ownership docs will naturally skip the transition unless it is a prescribed step in the plan they are following.

### Recurrence evidence

Multiple incidents recorded in FR-077: tasks found in `TODO` state after IPW completion and substantial implementation work, blocking RW gating at Step 1c. The validator correctly catches drift — but the fix is preventive (encode the step), not reactive (keep the validator as-is).

---

## Decision

**Every IPP (Implementation Plan document) produced by IPW must include two mandatory prescribed steps in its Implementation Plan section (Section 4), regardless of task type:**

**Step 1 (always first):**
> Transition task `E{epic}:S{story}:T{task}` status from `TODO` to `IN PROGRESS` in task document. Update `Last updated` date.

**Final step (always last):**
> Reconcile task `E{epic}:S{story}:T{task}` status with actual implementation state: if all acceptance criteria are satisfied with evidence → transition to `COMPLETE` and add forensic marker `✅ COMPLETE (v{version})`; if implementation is ongoing → confirm status remains `IN PROGRESS`; if blocked → transition to `BLOCKED` with documented reason. Update `Last updated` date.

These steps are **executor-prescribed**: IPW (planning) writes them into the plan, but implementation execution runs them. This preserves the FR-077 ownership contract while making compliance automatic for any implementer following the plan.

The final step is a **state reconciliation**, not a forced `→ COMPLETE`. A task that spans multiple implementation sessions legitimately ends those sessions in `IN PROGRESS` until all ACs are satisfied.

---

## Enforcement Points

1. **`PLAN_DOC_TEMPLATE.md` Section 4** — mandatory placeholder rows for Step 1 and final step. Implementers using the template will see them immediately.
2. **`.claude/commands/ipw.md`** — Phase 4 gate requires both steps to be present before the phase is complete.
3. **`implementation-planning-workflow-agent-execution.md`** — Phase 4 mandate documented in the canonical IPW agent execution guide.

---

## Consequences

### Positive

- Eliminates the root cause of TODO drift without adding new validators or changing the FR-077 ownership contract.
- Implementers following the IPP see the state contract as the first and last prescribed actions — no documentation lookup required.
- The final reconciliation step correctly handles partial implementations (ongoing → `IN PROGRESS`) rather than forcing closure.

### Negative / Trade-offs

- IPPs for trivial tasks will include two "bookkeeping" steps that feel redundant. This is intentional: the cost of including them is negligible; the cost of omitting them is recurring drift.
- Existing IPPs (pre-ADR-004) do not have these steps. They are grandfathered — this ADR applies to all new IPW runs only.

### Neutral

- Existing validators (`validate_ipw_status_drift.py`, RW Step 1c) remain unchanged. They are complementary — they catch drift that still occurs (e.g. from non-IPW execution paths). This ADR reduces their trigger frequency but does not replace them.
- FR-077's ownership contract is unchanged. Implementation execution owns the transitions. The IPP prescribes; execution acts.

---

## Alternatives Considered

### Alternative 1: Validator-only approach (rejected)

Strengthen `validate_ipw_status_drift.py` to block earlier. Rejected because: (a) the validator is already working correctly; (b) it is reactive — it catches drift after it has occurred; (c) the root cause (transition not prescribed in the IPP) remains.

### Alternative 2: Forced `→ COMPLETE` as the final step (rejected)

Make the final step always transition to `COMPLETE`. Rejected because: tasks that legitimately span multiple IPW runs or partial releases should stay `IN PROGRESS` between sessions. A forced `→ COMPLETE` would create false-positive completions. The correct behaviour is reconciliation to actual state.

### Alternative 3: Separate "transition checklist" document (rejected)

Create a separate checklist document linked from each IPP. Rejected because: adding indirection creates the same problem FR-077 solved — implementers have one more document to read separately from the plan they are following. The transition steps must live inside the artefact, not alongside it.

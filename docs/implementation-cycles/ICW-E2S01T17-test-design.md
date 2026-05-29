---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-09T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# ICW-E2S01T17-Test-Design: FR-077 IPW-built Task Status Transition and Kboard Sync

**Task:** E2:S01:T17  
**Related FR:** FR-077  
**Host Task:** [T17-ipw-built-task-status-transition-and-kboard-sync-fr077.md](../project-management/kanban/epics/Epic-2/Story-001-rw-agent-execution-and-docs/T17-ipw-built-task-status-transition-and-kboard-sync-fr077.md)  
**Created:** 2026-04-09

---

## Test Strategy

Validate transition timing, ownership, and synchronization contracts so implementation work cannot leave task status stale across task docs and kboard.

---

## Coverage Matrix

1. **Planning-only scenario guard (AC-1)**  
   - Input: IPW artifacts created, no implementation commits.  
   - Expectation: task remains `TODO`; no false transition.

2. **Implementation start transition (AC-1/AC-2)**  
   - Input: first non-planning implementation evidence appears.  
   - Expectation: transition to `IN PROGRESS` is required by documented owner step.

3. **Completion evidence transition (AC-1/AC-2)**  
   - Input: acceptance criteria evidence present.  
   - Expectation: transition to `COMPLETE` only when evidence gates pass.

4. **Atomic propagation check (AC-3)**  
   - Input: status transition event.  
   - Expectation: task-doc status and kboard row status update in the same change set/session.

5. **Drift detection regression (AC-4)**  
   - Input: simulated implemented-but-TODO state.  
   - Expectation: audit/validator reports mismatch deterministically.

6. **Ownership clarity verification (AC-2/AC-3)**  
   - Input: updated docs/workflow instructions.  
   - Expectation: no contradictory ownership language across IPW/RW/UKW guidance.

---

## Failure Modes

- Task transitions to `IN PROGRESS` during planning-only activity.
- COMPLETE applied without acceptance evidence.
- Task-doc and kboard statuses diverge after transition.
- Drift check fails to detect implemented-but-TODO state.
- Documentation leaves ownership ambiguous across workflows.

---

## Red/Green Verification Sequence

1. Add failing tests/checks for planning-only, start, completion, and drift scenarios.
2. Implement transition policy behavior until transition timing checks pass.
3. Implement atomic propagation contract checks.
4. Implement drift detection and reporting checks.
5. Re-run full suite including ownership-document consistency checks.

---

## Regression Guard Checklist

- Planning-only does not trigger status escalation.
- First implementation evidence triggers IN PROGRESS requirement.
- COMPLETE requires acceptance verification evidence.
- Task-doc and kboard are synchronized atomically on transition.
- Drift audit detects stale TODO mismatches.
- Cross-doc ownership wording remains consistent.

---

## Evidence for Handoff

- Scenario matrix mapped to FR-077 AC-1..AC-4.
- Example mismatch fixtures for drift detection.
- Pass/fail checklist for transition timing and synchronization guarantees.

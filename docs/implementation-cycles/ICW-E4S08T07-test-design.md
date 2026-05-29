---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-09T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# ICW-E4S08T07-Test-Design: FR-011 Multi-Epic Task Splitting

**Task:** E4:S08:T07  
**Related FR:** FR-011  
**Host Task:** [T07-task-splitting-across-multiple-canonical-epics-fr-011.md](../project-management/kanban/epics/Epic-4/Story-008-intelligent-epic-matching-canonical-adoption/T07-task-splitting-across-multiple-canonical-epics-fr-011.md)  
**Created:** 2026-04-09

---

## Test Strategy

Validate split-candidate detection, task-level assignment, explainability output, ID remap determinism, and reference rewrite integrity for FR-011.

---

## Coverage Matrix

1. **Multi-epic candidate detection (FR-1 / AC-1)**  
   - Input: source epic with two or more partial canonical matches.  
   - Expectation: split-candidate classification is emitted.

2. **Task-content assignment analysis (FR-2 / AC-2)**  
   - Input: mixed task corpus with versioning and workflow tasks.  
   - Expectation: tasks route to canonical epic targets aligned to content signals.

3. **Split execution behavior (FR-3 / AC-3)**  
   - Input: eligible split-candidate epic with N tasks.  
   - Expectation: all tasks assigned, no task omitted or multiply assigned.

4. **Split-plan explainability output (FR-4 / AC-4)**  
   - Input: generated split plan.  
   - Expectation: per-task rationale, confidence/tie-break metadata, and mapping table.

5. **Task ID remap correctness (FR-5 / AC-5)**  
   - Input: split output + target story/task spaces.  
   - Expectation: IDs remapped deterministically and collision-safe.

6. **Reference rewrite integrity (FR-6 / AC-6)**  
   - Input: docs containing pre-split IDs.  
   - Expectation: structured references updated; unresolved ambiguous references reported.

---

## Failure Modes

- Single-best-match fallback still used despite multi-match eligibility.
- Non-deterministic assignment when scores are tied.
- Rationale omitted or inconsistent with assignment decisions.
- ID collision or unstable numbering between runs.
- Partial reference updates leaving stale IDs in linked docs.

---

## Red/Green Verification Sequence

1. Start with failing assertions for FR-1..FR-6 behaviors.
2. Implement detection and assignment logic until behavioral tests pass.
3. Implement explainability schema checks.
4. Implement deterministic remap and replay-idempotence checks.
5. Implement reference rewrite checks and unresolved-report checks.
6. Re-run full regression set on mixed synthetic and realistic fixtures.

---

## Regression Guard Checklist

- Deterministic replay test: identical input produces identical split mapping.
- Tie-break policy test: explicit deterministic order for equal-confidence tasks.
- Orphan guard test: no task dropped from split outputs.
- Reference guard test: stale IDs absent from structured targets post-rewrite.
- Explainability guard test: each assignment has rationale payload.

---

## Evidence for Handoff

- Test case list mapped to FR-011 FR/AC identifiers.
- Fixture set definitions for mixed-responsibility epic scenarios.
- Pass/fail checklist for deterministic and integrity guards.

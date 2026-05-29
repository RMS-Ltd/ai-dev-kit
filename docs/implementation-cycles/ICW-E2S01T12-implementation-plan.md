---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-09T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# ICW-E2S01T12-Implementation-Plan: BR-061 Explicit RW Task-ID Version Alignment

**Task:** E2:S01:T12  
**Related BR:** BR-061  
**Host Task:** [T12-rw-explicit-task-id-version-alignment-br061.md](../project-management/kanban/epics/Epic-2/Story-001-rw-agent-execution-and-docs/T12-rw-explicit-task-id-version-alignment-br061.md)  
**Created:** 2026-04-09

---

## Build Plan

1. Establish explicit-intent pre-check design

   - Define where explicit `E:S:T` intent becomes authoritative in early RW flow.
   - Ensure ordering composes with Step 1 safety constraints and Step 1d intent guard.
   - Confirm behavior parity across full RW, `RW -d`, and `RW -k` (including `--art` variants).

2. Implement deterministic reconciliation path

   - Add deterministic alignment/reconciliation behavior for stale `version.py` epic in valid explicit-task runs.
   - Keep all actions auditable in validator/workflow logs.
   - Ensure reconciliation decision is derived from a single authoritative requested anchor to prevent split-brain outcomes.

3. Preserve blocking guardrails

   - Confirm wrong-branch contexts remain immediate hard-fail.
   - Confirm typo/ambiguous intent remains blocked unless explicitly allowed by policy.

4. Update workflow documentation/rules

   - Update RW execution docs and trigger guidance to reflect explicit-task alignment behavior.
   - Ensure docs describe both happy-path and failure-path outcomes.

5. Add regression tests

   - Add BR-061 replay scenario tests.
   - Add negative tests for wrong branch and intent mismatch.

6. Validate and harden

   - Run targeted validator and workflow regression suite.
   - Resolve any drift between documented behavior and implementation.

---

## Deterministic Rollout Controls

1. **Control point A - Precheck completion**
   - Require successful parse and validation of requested task token before any reconciliation.

2. **Control point B - Guardrail pass**
   - Require Step 1 and Step 1.5 safety/intent outcomes before applying reconciliation logic.

3. **Control point C - Single-write reconciliation**
   - Apply one deterministic version-state write per run; avoid incremental speculative edits.

4. **Control point D - Post-write verification**
   - Re-read version and intent context immediately after write; abort on mismatch.

---

## Integration Touchpoints

- `packages/frameworks/workflow mgt/scripts/validation/validate_branch_context.py`
- `packages/frameworks/workflow mgt/scripts/validation/validate_rw_task_intent.py`
- `packages/frameworks/workflow mgt/docs/documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md`
- `.cursorrules` RW trigger section and associated dual-source RW trigger docs

---

## Rollback and Recovery

- Gate behavior updates behind deterministic condition checks and explicit diagnostics.
- Keep previous validation path available for rapid rollback if safety regressions are observed.
- On regression detection, revert to prior strict behavior and emit actionable mismatch guidance.
- Maintain rollback trigger list:
  - wrong-branch false pass observed,
  - intent mismatch false pass observed,
  - non-deterministic version output across identical inputs.

---

## Exit Criteria

- T12 AC-1 satisfied: explicit `RW E:S:T` no longer requires manual `version.py` pre-alignment on valid branch context.
- T12 AC-2 satisfied: branch and intent guardrails remain blocking where required.
- T12 AC-3 satisfied: docs/rules reflect actual execution behavior.
- T12 AC-4 satisfied: BR-061 regression scenario covered by automated tests.

---

## Evidence Checklist

- [ ] Explicit-task no-pre-alignment scenario passes.
- [ ] Wrong-branch hard-block scenario passes.
- [ ] Intent mismatch/typo negative scenarios pass.
- [ ] Documentation updates merged and consistent with runtime behavior.
- [ ] Regression test artifacts included for BR-061 replay.

---

## Handoff Notes

Use this ICW package as the planning source of truth for implementing BR-061 behavior. Keep BR/task/story links synchronized in the same change set and record any scope deviations directly in task notes before RW release.

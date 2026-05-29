---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-09T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# ICW-E2S01T12-Test-Design: BR-061 Explicit RW Task-ID Version Alignment

**Task:** E2:S01:T12  
**Related BR:** BR-061  
**Host Task:** [T12-rw-explicit-task-id-version-alignment-br061.md](../project-management/kanban/epics/Epic-2/Story-001-rw-agent-execution-and-docs/T12-rw-explicit-task-id-version-alignment-br061.md)  
**Created:** 2026-04-09

---

## Test Strategy

Validate that explicit `RW E:S:T` flows proceed without manual `version.py` pre-alignment on valid branch context, while maintaining strict blocking behavior for wrong-branch and intent/typo risk scenarios.

---

## Coverage Matrix

1. **Explicit-task no-pre-alignment path (AC-1)**  
   - Input: explicit `E:S:T`, valid branch, stale `version.py` epic.  
   - Expectation: workflow proceeds through early guards without manual file edit prerequisite.
   - Replay example: `RW E2:S01:T12 --art` while `version.py` is anchored to another epic.

2. **Branch mismatch blocking (AC-2)**  
   - Input: explicit `E:S:T`, invalid branch context.  
   - Expectation: Step 1 remains blocking with actionable error.

3. **Intent ambiguity blocking (AC-2)**  
   - Input: explicit `E:S:T` conflicting with intent guard conditions.  
   - Expectation: Step 1d fails unless explicitly permitted by defined adoption semantics (`--art` or confirmed override flow).

4. **Typo-risk rejection (AC-2)**  
   - Input: malformed or incorrect task token near valid ID shape.  
   - Expectation: validator blocks with clear mismatch diagnostics.

5. **Documentation consistency checks (AC-3)**  
   - Input: updated RW docs/rules content.  
   - Expectation: behavior and guardrail sequencing documented without contradiction.

6. **BR-061 regression replay (AC-4)**  
   - Input: known repro profile from BR-061 (epic switch + explicit task).  
   - Expectation: no false Step 1 friction in valid branch context.

---

## Scenario Set (Required)

1. **Positive path - stale version epic + explicit task**  
   Expected: passes Step 1/1.3/1.4/1.5 and proceeds to Step 2 without manual `version.py` edits.

2. **Negative path - wrong branch**  
   Expected: blocked at Step 1 with branch mismatch diagnostics.

3. **Negative path - task intent typo/mismatch**  
   Expected: blocked at Step 1.5 unless explicitly adopted or confirmed override is provided per policy.

4. **Regression replay fixtures**  
   - Fixture A: stale epic mismatch from BR-061 repro.
   - Fixture B: same-story newer completed task progression check.
   - Fixture C: malformed token near-valid shape (`E2:S0l:T12`, `E2S1T1Z`, etc.).

---

## Failure Modes

- Step 1 still hard-fails on stale `version.py` despite explicit valid task intent.
- Branch-safety checks are softened unintentionally for wrong-branch scenarios.
- Intent guard behavior drifts and permits ambiguous requests.
- Error diagnostics become less actionable after reconciliation changes.
- Documentation promises behavior that validators do not implement.

---

## Red/Green Verification Sequence

1. Create failing tests for BR-061 repro scenario and guardrail cases.
2. Implement explicit-task alignment behavior until AC-1 scenario turns green.
3. Re-run branch mismatch and intent-ambiguity tests to confirm blocking behavior remains.
4. Add typo/malformed ID negative tests and verify deterministic rejection.
5. Validate documentation/rule text consistency against implemented flow.
6. Execute full regression pass for E2:S01 RW validator suite.
7. Record replay fixture outcomes in task evidence notes for release handoff.

---

## Regression Guard Checklist

- Explicit-task replay no-manual-edit guard is green.
- Wrong-branch hard-block guard is green.
- Intent guard mismatch rejection remains green.
- Typo-risk negative guard is green.
- Documentation and execution flow remain synchronized.

---

## Evidence for Handoff

- Test list mapped to T12 AC-1..AC-4.
- BR-061 repro fixture and expected outcomes documented.
- Pass/fail matrix for explicit-task flow and guardrail-preservation paths.

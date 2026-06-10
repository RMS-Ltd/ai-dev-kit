---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-10T16:30:00Z
expires_at: null
housekeeping_policy: keep
---

# Bug Report BR-103: `workflow-scripts-pytest` CI false-green — tuple-return tests pass without asserting

**Type:** Bug Report (BR)  
**Bug ID:** BR-103  
**Submitted:** 2026-06-10  
**Submitted By:** Agent — investigation of `PytestReturnNotNoneWarning` during `validate_actions_ci_parity.py` / `workflow-scripts-pytest`  
**Priority:** HIGH  
**Severity:** HIGH  
**Status:** IMPLEMENTED (attempted fix @ v0.8.3.19+1 — pending operator verification)

**Implementing Task:** [E08:S03:T19](../epics/epic-08/story-03-automation-scripts/T19-workflow-scripts-pytest-tuple-return-false-green-br103.md)

**Related:** [E07:S07:T02](../epics/epic-07/story-07-code-reviews/T02-ci-pytest-gate-for-workflow-scripts.md) (introduced CI gate) · [FR-097](FR-097-board-stamp-authority-and-forensic-timestamp-recovery.md) · [UXR-009](UXR-009-last-modified-stamp-forensic-integrity-and-drift-protection.md) · [FR-112](FR-112-perpetual-github-ci-and-security-health-lanes.md)

---

## Summary

Seven tests in [`test_stamp_evidence_gate.py`](../../../packages/frameworks/workflow-mgt/scripts/test_stamp_evidence_gate.py) use a **script-runner** `(bool, str)` return convention but are collected by **pytest** via [`run_workflow_scripts_ci_pytest.sh`](../../../packages/frameworks/workflow-mgt/scripts/validation/run_workflow_scripts_ci_pytest.sh). Pytest **ignores** the returned tuple and marks tests **passed** unless an exception is raised — producing **false-green CI** with `PytestReturnNotNoneWarning`.

---

## Problem Statement

The stamp-evidence gate (UXR-009 / FR-092 Wave 6) is covered by `test_stamp_evidence_gate.py`, documented as **7/7 green**. The file supports two execution modes:

| Mode | Invocation | Enforces `(False, msg)`? |
| ---- | ---------- | ------------------------ |
| Script | `python test_stamp_evidence_gate.py` → `main()` | **Yes** — `_run_test()` checks bool |
| Pytest | `run_workflow_scripts_ci_pytest.sh` (CI + Actions CI parity) | **No** — pytest passes; warns only |

When pytest collects `test_*` functions that `return (False, "reason")`, the test **still passes** (verified: probe test `return False, "deliberate"` → exit 0). Regression in stamp-evidence behavior would **not** fail CI.

---

## Expected Behavior

1. Every test in the **workflow-scripts-pytest** curated corpus uses **`assert`** (or `pytest.raises`) so pytest failures are real failures.
2. CI and `validate_actions_ci_parity.py` **workflow-scripts-pytest** lane must not report green when stamp-evidence invariants are violated.
3. Optional: `pytest.ini` treats `PytestReturnNotNoneWarning` as error to prevent recurrence.

---

## Observed Behavior

1. Run `bash packages/frameworks/workflow-mgt/scripts/validation/run_workflow_scripts_ci_pytest.sh`.
2. Observe **7×** `PytestReturnNotNoneWarning: … returned <class 'tuple'>. Did you mean to use assert instead of return?`
3. Suite reports **passed** (e.g. 147 passed) despite tuple-return anti-pattern.
4. A deliberate `return False, "msg"` in a `test_*` function **passes** under pytest.

**Affected tests (all in `test_stamp_evidence_gate.py`):**

- `test_work_authoritative_appends_missing_stamps`
- `test_non_substantive_never_appends_stamps`
- `test_gated_requires_positive_evidence`
- `test_gated_without_provider_is_conservative`
- `test_existing_stamps_never_rewritten`
- `test_invalid_evidence_mode_raises`
- `test_corpus_sweep_uses_non_substantive_mode`

---

## Steps to Reproduce

1. `cd` repo root.
2. `bash packages/frameworks/workflow-mgt/scripts/validation/run_workflow_scripts_ci_pytest.sh 2>&1 | rg PytestReturnNotNoneWarning`
3. Confirm seven warnings for `test_stamp_evidence_gate.py`.
4. (Proof) Add a temporary `test_probe(): return False, "fail"` — pytest reports **passed**.

---

## Root Cause (analysis)

| Factor | Detail |
| ------ | ------ |
| **Dual-purpose test file** | Written script-first (`main()` + `_run_test(ok, err)`) per Wave 6 delivery |
| **CI wiring (E07:S07:T02)** | File added to curated pytest list without converting to pytest asserts |
| **Pytest semantics** | Return values are not pass/fail signals (modern pytest); only exceptions/assertions fail |
| **Misleading docs** | UXR-009 / FR-097 / T115 cite "7/7 green" — true for script mode, not CI mode |

**Not in scope of this BR:** Production `enforce_moscow_row_timestamps_with_stats` / `EVIDENCE_MODE_*` logic — architecture is sound; **test harness integration** is broken.

**Related latent risk:** Other script-style tests (`test_update_kanban_docs.py`, `test_validate_rw_step7_*.py`) use the same tuple pattern but are **not** in the curated CI list today.

---

## Impact

| Area | Effect |
| ---- | ------ |
| **CI integrity** | `workflow-scripts-pytest.yml` and RW Step 9.7 parity gate can be green while stamp-evidence regressions ship |
| **Forensic stamp policy** | UXR-009 / FR-097 regression coverage is illusory under pytest |
| **Operator trust** | "147 passed" implies enforcement; seven cases are no-ops under pytest |
| **Severity** | HIGH — silent false green on a blocking CI lane |

---

## Acceptance Criteria

- [ ] **AC1:** All seven `test_stamp_evidence_gate.py` cases use pytest `assert` / `pytest.raises`; no `return (bool, str)` from `test_*` functions.
- [ ] **AC2:** `run_workflow_scripts_ci_pytest.sh` reports **zero** `PytestReturnNotNoneWarning` for that file.
- [ ] **AC3:** Introduce a failing-case probe (or negative test) proving pytest fails when stamp logic is violated.
- [ ] **AC4:** Optional hardening: `filterwarnings = error::pytest.PytestReturnNotNoneWarning` in workflow-scripts `pytest.ini`.
- [ ] **AC5:** Update UXR-009 / FR-097 test citations to distinguish script vs pytest CI enforcement (if still dual-entry).
- [ ] **AC6:** BR-103 ↔ E08:S03:T19 bidirectional links; board row present.

---

## Proposed Fix (guidance)

1. Refactor each test to idiomatic pytest (`assert stats[...] == …`, `pytest.raises(ValueError)`).
2. Keep `main()` as thin wrapper calling shared helpers or `pytest.main()` if standalone script entry is still desired.
3. Audit curated CI list for other tuple-return `test_*` files; document or fix.
4. Greenfield sync per FR-110 if scripts under `packages/frameworks/` change.

---

## Intake

**Intake Status:** ACCEPTED  
**Intake Date:** 2026-06-10  
**Intake By:** Agent (user request — file BR after investigation)

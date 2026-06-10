# IPP — E08:S03:T19 — BR-103 workflow-scripts pytest false-green

**Host task:** E08:S03:T19  
**Status:** APPROVED FOR IMPLEMENTATION  
**Created:** 2026-06-10

---

## 1. Goal

Restore **real** pytest enforcement for stamp-evidence gate tests in the `workflow-scripts-pytest` CI lane by converting `test_stamp_evidence_gate.py` from tuple-return script tests to idiomatic `assert` / `pytest.raises` tests, with optional `pytest.ini` hardening.

---

## 2. Specification

### Functional

1. Seven existing cases remain logically equivalent (work_authoritative, non_substantive, gated×2, never-rewrite, invalid mode, corpus sweep).
2. `run_workflow_scripts_ci_pytest.sh` produces **zero** `PytestReturnNotNoneWarning` for the module.
3. `main()` script entry still works (calls tests; `AssertionError` = fail).
4. Audit note for other tuple-return script tests **not** in CI corpus.

### Non-functional

- No production changes to `update_kanban_docs.py`.
- Greenfield sync (FR-110).

### Out of scope

- Refactoring `test_update_kanban_docs.py` / `test_validate_rw_step7_*.py` (document only).

---

## 3. Test design

| ID | Test | Red → Green |
| -- | ---- | ----------- |
| T1–T7 | Converted assert tests | Fail under pytest when invariant broken |
| T8 | `test_pytest_detects_assertion_failure` — meta probe using `pytest.raises(AssertionError)` on a one-line bad assert helper | Proves CI path fails on violation |

---

## 4. Implementation plan

1. **TODO → IN PROGRESS** on T19; link this IPP.
2. Refactor `test_stamp_evidence_gate.py` to `assert` / `pytest.raises`.
3. Update `main()` to catch `AssertionError`.
4. Add `filterwarnings = error::pytest.PytestReturnNotNoneWarning` to workflow-scripts `pytest.ini`.
5. Add BR-103 audit subsection to `validation/README.md`.
6. `sync_greenfield_install.py`.
7. Run `run_workflow_scripts_ci_pytest.sh` + `validate_actions_ci_parity.py --strict`.
8. Mark AC1–AC5; reconcile T19 **COMPLETE**; update BR-103 status.
9. **RW E08:S03:T19 --art**.

---

## 5. Documentation

- Task doc, BR-103, validation README audit note.

---

## 6. Housing

- Code: `packages/frameworks/workflow-mgt/scripts/test_stamp_evidence_gate.py`, `validation/pytest.ini`, `validation/README.md`
- Kanban: T19, story-03, kboard

---

## 7. Verification

- [ ] Zero `PytestReturnNotNoneWarning` in CI script output
- [ ] `validate_actions_ci_parity.py --strict` pass
- [ ] `python test_stamp_evidence_gate.py` exit 0

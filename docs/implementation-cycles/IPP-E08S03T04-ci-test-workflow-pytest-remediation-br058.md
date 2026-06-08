---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-04T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E08:S03:T04 — Planning: Spec, Tests, Implementation Plan (IPW)

**Host Task:** [`T04-ci-test-workflow-pytest-remediation-br058.md`](../kanban/epics/epic-08/story-03-automation-scripts/T04-ci-test-workflow-pytest-remediation-br058.md) **(E08:S03:T04)**  
**Planning for:** [BR-058](../kanban/fr-br/BR-058-ci-test-workflow-missing-and-pytest-failures.md)  
**Status:** Approved (implementation authorized)

> **IPW:** Produced for E08:S03:T04. Complements [IPP-E7S7T2](IPP-E07S07T02-ci-pytest-gate-for-workflow-scripts.md) (scoped workflow-mgt pytest only).

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements (ascertained)

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RF1 | Add runnable **repo-wide** test workflow under `.github/workflows/` | T04 AC1, BR-058 |
| RF2 | Pin **`python-version: "3.11"`** in workflow | T04 deliverable, FR-104 |
| RF3 | `pip install -e ".[dev]"` and `pytest tests/` in CI | BR-058, setup.py |
| RF4 | Remediate all failing/erroring root tests — green locally and in CI | T04 AC2 |
| RF5 | Update **BR-058** resolution; wire **fbuboard** to E08:S03:T04 | T04 AC3 |
| RF6 | Coexist with E07:S07:T02 scoped gate | T02 scope |

### 1.2 Non-functional requirements (ascertained)

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RNF1 | Workflow YAML valid for PyYAML parsers (quote `"on"`) | docusaurus-build.yml pattern |
| RNF2 | CI runtime target ≤5 min | Practical gate |
| RNF3 | Changelog: "Change implemented" until user verifies green CI | RW rules |

### 1.3 Invariants and boundaries

- **In scope:** `tests.yml`, root `tests/**` fixes, BR-058 / kanban on RW, validation README cross-link
- **Out of scope:** FR-105 `pip-audit` in CI, full `scripts/**` corpus, changing `workflow-scripts-pytest.yml`

---

## 2. Specification

### 2.1 Goal

Restore automated **repo-wide pytest** on PR/push so contributors get a blocking green gate for the root `tests/` suite, closing BR-058.

### 2.2 Specification mapping

RF1–RF3 → `.github/workflows/tests.yml`; RF4 → test remediation; RF5 → RW Step 7; RF6 → two-gate CI model documented in validation README.

### 2.3 Constraints

- Python **3.11** per FR-104 / T05
- Trigger: every PR + push to `main`/`dev` (no path filter; suite ~25s)

### 2.4 Status transition intent

- **Current:** TODO → **IN PROGRESS** at implementation Step 1
- **COMPLETE:** All AC1–AC3 evidenced; forensic marker on RW
- **Owner:** Implementation execution

### 2.5 ADR necessity decision

| ID | Trigger | Y/N | Evidence |
| -- | ------- | --- | -------- |
| T1 | Alternatives | N | BR-058 prescribes add `tests.yml`; E07 owns scoped gate |
| T2 | Reversibility | N | Revert workflow + test edits in one PR |
| T3 | Blast radius | N | Confined to CI config + test files |
| T4 | Precedent | N | E07:S07:T02 IPP established pytest-in-CI precedent |
| T5 | Trade-off | N | Trigger scope documented in §2.3 |
| T6 | Governance | N | No RW/IPW gate change |
| T7 | Supersedes | N | No ADR contradiction |

| ID | Exemption | Pass? | Evidence |
| -- | --------- | ----- | -------- |
| E1 | Single locus | Pass | §4.1 file list |
| E2 | No new options | Pass | Implements BR-058 + T04 AC |
| E3 | Reversible | Pass | Standard revert |
| E4 | Spec elsewhere | Pass | This IPP + task AC |
| E5 | Documented NONE | Pass | validation README + IPP-E7S7T2 |

**Outcome:** `EXEMPT`

---

## 3. Test design

| ID | Behavior / layer | Expected check | Covers |
| -- | ---------------- | -------------- | ------ |
| T1 | CI smoke | `tests.yml` runs on PR; job exits 0 | RF1, RF3 |
| T2 | Local parity | `python3.11 -m pytest tests/` → 0 failed, 0 errors | RF4 |
| T3 | Regression — utils | `test_utils.py` passes on macOS and Linux | Path `.resolve()` fix |
| T4 | Regression — receipt | `test_install_receipt_fr062.py` loads from `workflow-mgt` | Slug path fix |
| T5 | Regression — kanban | Epic 22/23 + fresh install logging tests pass | Lowercase path alignment |
| T6 | Regression — policy | `test_validate_compliant_policy_passes` passes | R06 in fixture content |
| T7 | Regression — ICW | `test_icw_workflow_customization` passes | Replace-not-merge semantics |
| T8 | Isolation | E07 workflow still independent | RF6 |

---

## 4. Implementation plan

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| **1** | **[MANDATORY]** `E08:S03:T04` `TODO → IN PROGRESS` | Task doc |
| 2 | Add `.github/workflows/tests.yml` | RF1–RF3 |
| 3 | Fix `tests/test_utils.py` — `.resolve()` comparisons | T3 |
| 4 | Fix `tests/tests/test_install_receipt_fr062.py` — `workflow-mgt` path | T4 |
| 5 | Fix kanban tests — lowercase epic paths + `kboard.md` | T5 |
| 6 | Fix `test_validate_kanban_governance_policy.py` — R06 in fixture | T6 |
| 7 | Fix `test_icw_workflow_customization` — no `phases` when config replaced | T7 |
| 8 | Run full suite locally; confirm green | T2 |
| 9 | Update validation README — two-gate model | RF6 |
| 10 | Update BR-058; RW Step 7 four-surface | RF5 |
| 11 | `RW E08:S03:T04` | Release |
| **12** | **[MANDATORY]** Reconcile status `COMPLETE` + `✅ COMPLETE (v{version})` | Task doc |

### 4.1 Files to create or modify

- CREATE: `.github/workflows/tests.yml`, this IPP
- UPDATE: tests listed in §3; validation README; task doc; BR-058; story/kboard (RW)

### 4.2 Dependency order

Test fixes → local green → workflow YAML → RW kanban closure

---

## 5. Documentation deliverables

| Doc ID | Path | Action | Scope |
| ------ | ---- | ------ | ----- |
| D-C1 | `.github/workflows/tests.yml` | CREATE | Repo-wide pytest gate |
| D-U1 | `tests/**` | UPDATE | Remediation |
| D-U2 | `packages/frameworks/workflow-mgt/scripts/validation/README.md` | UPDATE | Two-gate CI model |
| D-U3 | `docs/kanban/fr-br/BR-058-*.md` | UPDATE | Resolution |
| D-U4 | Task doc, story, kboard, fbuboard | UPDATE | RW Step 7 |
| D-C2 | This IPP | CREATE | Planning package |
| D-N1 | Root README Contributing | NONE | cli/README already documents pytest |
| D-N2 | ADR | NONE | EXEMPT per §2.5 |
| D-N3 | pip-audit in CI | NONE | FR-105 follow-up only |

---

## 6. Documentation housing

| Doc ID | Canonical path | Publication | Lifecycle |
| ------ | -------------- | ----------- | --------- |
| D-C2 | `docs/implementation-cycles/IPP-E8S3T4-*.md` | NOT_APPLICABLE | evergreen |
| D-C1 | `.github/workflows/tests.yml` | NOT_APPLICABLE | evergreen |
| D-U2 | validation README | NOT_APPLICABLE | evergreen |

---

## 7. Success / verification criteria

- [x] AC1: `.github/workflows/tests.yml` exists; triggers on PR + push to main/dev
- [x] AC2: `pytest tests/` — 0 failed, 0 errors locally
- [x] AC3: BR-058 resolved; fbuboard wired to E08:S03:T04
- [x] IPP bidirectionally linked from task doc
- [x] E07 `workflow-scripts-pytest.yml` unchanged and independent

---

## References

- [BR-058](../kanban/fr-br/BR-058-ci-test-workflow-missing-and-pytest-failures.md)
- [IPP-E7S7T2](IPP-E07S07T02-ci-pytest-gate-for-workflow-scripts.md)
- [FR-104](../kanban/fr-br/FR-104-python-minimum-version-policy-alignment.md)
- [ipw-adr-necessity-checklist.md](../architecture/standards-and-adrs/ipw-adr-necessity-checklist.md)

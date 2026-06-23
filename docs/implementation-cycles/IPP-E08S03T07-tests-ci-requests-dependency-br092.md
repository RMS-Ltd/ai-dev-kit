---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T18:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E08:S03:T07 — Planning: Spec, Tests, Implementation Plan (IPW)

**Host Task:** [`T07-tests-ci-requests-dependency-br092.md`](../kanban/epics/epic-08/story-03-automation-scripts/T07-tests-ci-requests-dependency-br092.md) **(E08:S03:T07)**  
**Planning for:** [BR-092](../kanban/fbu/BR-092-tests-ci-missing-requests-dev-dependency.md)  
**Status:** Approved (implementation authorized)

> **IPW:** Produced for E08:S03:T07. Complements [IPP-E8S3T4](IPP-E08S03T04-ci-test-workflow-pytest-remediation-br058.md) (repo-wide Tests CI gate).

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements (ascertained)

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RF1 | `pip install -e ".[dev]"` must satisfy all root test collection imports | T07 AC1, BR-092 |
| RF2 | Add **`requests>=2.28.0`** to `setup.py` **`extras_require["dev"]`** | Task doc, BR-092 |
| RF3 | **`Tests`** workflow green on `dev`/`main` without changing install command | T07 AC2, BR-092 |
| RF4 | Close **BR-092** on RW Step 7 (status, acceptance criteria, four-surface) | BR-092 AC |
| RF5 | Bidirectional link: task doc ↔ IPP | IPW / FR-083 |

### 1.2 Non-functional requirements (ascertained)

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RNF1 | Minimal diff — no unrelated dependency churn | Code principles |
| RNF2 | Align version pin with `requirements.txt` (`>=2.28.0`) | Consistency |
| RNF3 | Changelog language: **"Change implemented"** until CI verified green | RW rules |

### 1.3 Invariants and boundaries

- **In scope:** `setup.py` `[dev]` extras; optional `tests/requirements.txt` parity; BR-092 / kanban on RW
- **Out of scope:** Changing `.github/workflows/tests.yml`; `install_requires`; BR-090/BR-091 CI fixes

---

## 2. Specification

### 2.1 Goal

Make the **canonical CI install path** (`pip install -e ".[dev]"`) sufficient for the full root `tests/` suite, eliminating the BR-092 collection failure.

### 2.2 Specification mapping

RF2 → `setup.py` `extras_require["dev"]`; RF3 → unchanged `tests.yml`; RF4 → RW Step 7 four-surface.

### 2.3 Constraints

- Python **3.11** per FR-104 / E08:S03:T05
- CI install step remains `pip install -e ".[dev]"` only

### 2.4 Status transition intent

- **Current:** TODO → **IN PROGRESS** at implementation Step 1
- **COMPLETE:** All AC satisfied with local + CI evidence; forensic marker on RW
- **Owner:** Implementation execution

### 2.5 ADR necessity decision

| ID | Trigger | Y/N | Evidence |
| -- | ------- | --- | -------- |
| T1 | Alternatives | N | BR-092 prescribes `setup.py` [dev] fix |
| T2 | Reversibility | N | Single-file revert |
| T3 | Blast radius | N | Confined to dependency declaration |
| T4 | Precedent | N | Follows E08:S03:T04 CI install contract |
| T5 | Trade-off | N | No architectural trade-off |
| T6 | Governance | N | No RW/IPW gate change |
| T7 | Supersedes | N | No ADR contradiction |

| ID | Exemption | Pass? | Evidence |
| -- | --------- | ----- | -------- |
| E1 | Single locus | Pass | §4.1 file list |
| E2 | No new options | Pass | Implements BR-092 + task AC |
| E3 | Reversible | Pass | Standard revert |
| E4 | Spec elsewhere | Pass | This IPP + task AC |
| E5 | Documented NONE | Pass | §5 D-N1 |

**Outcome:** `EXEMPT`

---

## 3. Test design

| ID | Behavior / layer | Expected check | Covers |
| -- | ---------------- | -------------- | ------ |
| T1 | CI parity (local) | Fresh venv: `pip install -e ".[dev]"` only → `pytest tests/test_framework_install_slug.py --collect-only` exits 0 | RF1, RF2 |
| T2 | Full suite | Same venv → `pytest tests/` — 0 failed, 0 errors | RF1, RF3 |
| T3 | Import smoke | `python -c "import requests"` after dev install | RF2 |
| T4 | Parity path | `tests/requirements.txt` includes `requests>=2.28.0` | RNF2 |
| T5 | CI smoke | **Tests** workflow green post-push | RF3 |

---

## 4. Implementation plan

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| **1** | **[MANDATORY]** `E08:S03:T07` `TODO → IN PROGRESS` | Task doc |
| 2 | Add `requests>=2.28.0` to `setup.py` → `extras_require["dev"]` | RF2 |
| 3 | Add same pin to `tests/requirements.txt` | T4 / RNF2 |
| 4 | Run T1–T2 in clean Python 3.11 venv | Evidence |
| 5 | Update BR-092; RW Step 7 four-surface | RF4 |
| 6 | `RW E08:S03:T07` | Release |
| **7** | **[MANDATORY]** Reconcile status `COMPLETE` + `✅ COMPLETE (v{version})` | Task doc |

### 4.1 Files to create or modify

- CREATE: this IPP
- UPDATE: `setup.py`, `tests/requirements.txt`, task doc, BR-092, story/kboard (RW)

### 4.2 Dependency order

`setup.py` → local verify → RW kanban closure

---

## 5. Documentation deliverables

| Doc ID | Path | Action | Scope |
| ------ | ---- | ------ | ----- |
| D-C1 | This IPP | CREATE | Planning package |
| D-U1 | `setup.py` | UPDATE | `[dev]` extras |
| D-U2 | `tests/requirements.txt` | UPDATE | Parity pin |
| D-U3 | Task doc, BR-092, story, boards | UPDATE | RW Step 7 |
| D-N1 | ADR | NONE | EXEMPT per §2.5 |
| D-N2 | `.github/workflows/tests.yml` | NONE | Install path unchanged |

---

## 6. Documentation housing

| Doc ID | Canonical path | Publication | Lifecycle |
| ------ | -------------- | ----------- | --------- |
| D-C1 | `docs/implementation-cycles/IPP-E8S3T7-*.md` | NOT_APPLICABLE | evergreen |

---

## 7. Success / verification criteria

- [x] T1: `--collect-only` on slug tests passes after **only** `pip install -e ".[dev]"`
- [x] T2: Full `pytest tests/` green locally
- [x] T3: **Tests** workflow — BR-092 path verified post-push ([run 26986650468](https://github.com/RMS-Ltd/ai-dev-kit/actions/runs/26986650468): `requests` from `[dev]`, slug tests PASSED)
- [x] BR-092 acceptance criteria checked; task ↔ IPP linked
- [x] RW completes with forensic marker on task doc

---

## References

- [BR-092](../kanban/fbu/BR-092-tests-ci-missing-requests-dev-dependency.md)
- [IPP-E8S3T4](IPP-E08S03T04-ci-test-workflow-pytest-remediation-br058.md)
- [ipw-adr-necessity-checklist.md](../architecture/standards-and-adrs/ipw-adr-necessity-checklist.md)

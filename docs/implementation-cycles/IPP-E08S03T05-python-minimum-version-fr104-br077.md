---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-03T16:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E08:S03:T05 — Planning: Spec, Tests, Implementation Plan (IPW)

**Host Task:** [`T05-python-minimum-version-fr104-br077.md`](../project-management/kanban/epics/epic-08/story-03-automation-scripts/T05-python-minimum-version-fr104-br077.md) **(E08:S03:T05)**  
**Planning for:** [FR-104](../project-management/kanban/fr-br/FR-104-python-minimum-version-policy-alignment.md), [BR-077](../project-management/kanban/fr-br/BR-077-documented-python-38-contradicts-repo-310-requirement.md)  
**Status:** Approved (implementation authorized)

> **IPW:** Produced for E08:S03:T05. Policy: **Python 3.11+** minimum repo-wide (user decision).

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements (ascertained)

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RF1 | Single authoritative policy: **minimum 3.11** for package install, development, CI | User + FR-104:R01 |
| RF2 | `setup.py` `python_requires` and classifiers reflect **>=3.11** | FR-104:R02 |
| RF3 | README badge + prerequisites **3.11+** | FR-104:R03 |
| RF4 | Canonical user install docs updated (no stale 3.8+) | FR-104:R03 |
| RF5 | Maintenance doc examples use **3.11** where Python shown | FR-104:NF02 |
| RF6 | Policy recorded in task doc; **BR-077** resolved on delivery | T05 AC1/AC4 |
| RF7 | **E08:S03:T04** notes Tests workflow Python **3.11** | T05 AC5 |

### 1.2 Non-functional requirements (ascertained)

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RNF1 | Adopters on &lt;3.11 fail via `pip`/metadata, not obscure `SyntaxError` | FR-104:NF01 |
| RNF2 | Doc CI examples align with `framework-release.yml` (3.11) | FR-104:NF02 |

### 1.3 Invariants and boundaries

- **Policy:** Minimum **Python 3.11** everywhere (matches CI).
- **In scope:** `setup.py`, README, user/maintenance docs, `.python-version`, FR/BR/T04 notes, policy test.
- **Out of scope:** FR-105/Dependabot, BR-058/pytest CI, `pyproject.toml` migration.

---

## 2. Specification

### 2.1 Goal

One coherent Python version contract: **requires Python 3.11+** for installing `ai-dev-kit`, running validators/workflow scripts, and contributing to the repo.

### 2.2 Specification mapping

RF1–RF3 → packaging + README; RF4–RF5 → doc corpus; RF6–RF7 → kanban closure + T04 coordination.

### 2.3 Constraints

- Changelog: “Change implemented” until user verifies (RW rules).
- FR-030 NFR-1 footnote: superseded by 3.11 policy for monorepo package.

### 2.4 Status transition intent

- **Current:** TODO → **IN PROGRESS** at implementation Step 1.
- **COMPLETE:** All AC1–AC5 evidenced; forensic marker on RW.
- **Owner:** Implementation execution.

### 2.5 ADR necessity decision

| ID | Trigger | Y/N | Evidence |
| -- | ------- | --- | -------- |
| T1 | Alternatives | N | User locked 3.11 minimum |
| T2 | Reversibility | Y | Drops 3.10 support — documented in install guide |
| T3 | Blast radius | Y | Many doc files + setup.py |
| T4 | Precedent | Y | Canonical Python policy |
| T5 | Trade-off | Y | Support breadth vs CI alignment |
| T6 | Governance | N | No RW/IPW gate change |
| T7 | Supersedes | N | No ADR claims 3.8 |

| ID | Exemption | Pass? | Evidence |
| -- | --------- | ----- | -------- |
| E1 | Single locus | Pass | §4.1 file list |
| E2 | No new options | Pass | Policy fixed in §2.1 |
| E3 | Reversible | Pass | Revert PR |
| E4 | Spec elsewhere | Pass | Install guide policy subsection |
| E5 | Documented NONE | Pass | This IPP + install guide |

**Outcome:** `EXEMPT` — governing doc: [framework-dependency-installation-guide.md](../documentation/user-docs/framework-dependency-installation-guide.md) (Python version subsection).

---

## 3. Test design

| ID | Behavior / layer | Expected check | Covers |
| -- | ---------------- | -------------- | ------ |
| T1 | Packaging | `python_requires >=3.11` in setup.py | RF2 |
| T2 | Syntax | `python3.11 -m compileall` on kb scripts (PEP 604 offenders) | RNF1 |
| T3 | CLI smoke | `python3.11 -m cli.main --help` | RF1 |
| T4 | Docs grep | No `3.8+` / `Python 3.8` in canonical paths (excl. changelog archive, BR-077 historical) | RF3 |
| T5 | pytest | `tests/test_python_version_policy.py` | RF2 |

---

## 4. Implementation plan

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| **1** | **[MANDATORY]** `E08:S03:T05` `TODO → IN PROGRESS` | Task doc |
| 2 | Policy subsection in task doc | AC1 |
| 3 | Update `setup.py` | RF2 |
| 4 | Update README | RF3 |
| 5 | Update user + maintenance docs (§5 table) | RF4, RF5 |
| 6 | Create `.python-version` | D9 |
| 7 | Grep sweep + fix stragglers | AC3 |
| 8 | Add `tests/test_python_version_policy.py`; run T1–T5 | Verification |
| 9 | Update FR-104, BR-077, T04, FR-030 | AC4, AC5 |
| 10 | `RW E08:S03:T05` | Release |
| **11** | **[MANDATORY]** Reconcile status `COMPLETE` + `✅ COMPLETE (v{version})` | Task doc |

### 4.1 Files to create or modify

- CREATE: `docs/implementation-cycles/IPP-E8S3T5-python-minimum-version-fr104-br077.md`, `.python-version`, `tests/test_python_version_policy.py`
- UPDATE: `setup.py`, `README.md`, user-docs (4), maintenance (4), `package-management-design.md`, FR-104, BR-077, T04, FR-030, task T05

### 4.2 Dependency order

Policy → setup.py → README → user docs → maintenance → tests → FR/BR → RW.

---

## 5. Documentation deliverables

| Doc ID | Path | Action | Scope |
| ------ | ---- | ------ | ----- |
| D1 | `setup.py` | UPDATE | `python_requires`, classifiers |
| D2 | `README.md` | UPDATE | Badge, prerequisites |
| D3 | `docs/documentation/user-docs/framework-dependency-installation-guide.md` | UPDATE | Policy subsection |
| D4 | `framework-dependency-faq.md` | UPDATE | 3.11+ |
| D5 | `cli-publishing-guide.md` | UPDATE | 3.11+ |
| D6 | `cli-troubleshooting-guide.md` | UPDATE | Version text |
| D7 | `docs/maintenance/release-integration-guides.md` | UPDATE | python-version 3.11 |
| D8 | runbook, checklist, BUILD_AND_UPLOAD | UPDATE | 3.11+ |
| D9 | `.python-version` | CREATE | `3.11` |
| D10–D13 | FR-104, BR-077, T04, FR-030 | UPDATE | Closure / notes |
| D14 | `package-management-design.md` | UPDATE | If 3.8+ present |
| D15 | This IPP | CREATE | Planning package |
| D16 | Task T05 | UPDATE | IPP links, policy |

### 5.3 Gaps / NONE

| Topic | Resolution |
| ----- | ---------- |
| New ADR | NONE — install guide is governing doc |
| Changelog archive | NONE — historical entries retain 3.8 badge text |

---

## 6. Documentation housing

| Doc ID | Canonical path | Publication | Lifecycle |
| ------ | -------------- | ----------- | --------- |
| D3 | `docs/documentation/user-docs/...` | PUBLISHED | evergreen |
| D15 | `docs/implementation-cycles/IPP-E8S3T5-*.md` | PUBLISHED | evergreen |
| D9 | `.python-version` | NOT_APPLICABLE | tooling hint |

---

## 7. Success / verification criteria

- [x] AC1–AC5 satisfied with evidence
- [x] T1–T5 pass on Python 3.11
- [x] §5 deliverables implemented
- [x] IPP ↔ task bidirectional links
- [x] RW `E08:S03:T05` complete

---

## References

- [FR-104](../project-management/kanban/fr-br/FR-104-python-minimum-version-policy-alignment.md)
- [BR-077](../project-management/kanban/fr-br/BR-077-documented-python-38-contradicts-repo-310-requirement.md)
- [E07:S06:T08](../project-management/kanban/epics/epic-07/story-06-post-windsurf-project-review/T08-dependency-and-tooling-audit.md)
- [ipw-adr-necessity-checklist.md](../architecture/standards-and-adrs/ipw-adr-necessity-checklist.md)
- [`.github/workflows/framework-release.yml`](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/.github/workflows/framework-release.yml)

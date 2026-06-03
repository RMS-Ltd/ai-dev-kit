---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-03T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 8, Story 3, Task 5: Python minimum version policy alignment (FR-104 / BR-077)

**Task ID:** E08:S03:T05  
**Status:** COMPLETE  
**Priority:** HIGH (Must Have — MoSCOW **M**)  
**Created:** 2026-06-03  
**Last updated:** 2026-06-03 (v0.8.3.5+2 – Python 3.11 policy implemented)  
**Version:** v0.8.3.5+2  
**Version Anchor:** v0.8.3.5+2  
**Code:** E08S03T05

**Upstream:** [FR-104 — Python minimum version policy alignment](../../../fr-br/FR-104-python-minimum-version-policy-alignment.md)  
**Upstream:** [BR-077 — Documented Python 3.8+ contradicts repo 3.10+ requirement](../../../fr-br/BR-077-documented-python-38-contradicts-repo-310-requirement.md)  
**Related audit:** [E07:S06:T08](../../Epic-7/Story-006-post-windsurf-project-review/T08-dependency-and-tooling-audit.md)

Publication Status: NOT_APPLICABLE

---

## Policy

**AI Dev Kit Python:** Minimum **3.11** for package install, development, validators, and CI. Matches `python_requires` in [`setup.py`](../../../../../../setup.py) and [`.github/workflows/framework-release.yml`](../../../../../../.github/workflows/framework-release.yml).

---

## Scope

Align declared Python minimum version (`setup.py`, README, install guides) with the effective **3.11** floor; resolve **BR-077**.

---

## Input

- [FR-104](../../../fr-br/FR-104-python-minimum-version-policy-alignment.md), [BR-077](../../../fr-br/BR-077-documented-python-38-contradicts-repo-310-requirement.md)
- [E07:S06:T08](../../Epic-7/Story-006-post-windsurf-project-review/T08-dependency-and-tooling-audit.md) audit findings
- [IPP-E08S03T05-python-minimum-version-fr104-br077.md](../../../../implementation-cycles/IPP-E08S03T05-python-minimum-version-fr104-br077.md) (IPW)

---

## Deliverable

Single coherent **Python version policy** for ai-dev-kit: update `setup.py`, README, and canonical install docs; resolve **BR-077**; align doc examples with CI (**3.11**).

## Acceptance criteria

- [x] **AC1:** Policy choice recorded (Python **3.11** minimum — see § Policy).
- [x] **AC2:** `setup.py` and README prerequisites match policy.
- [x] **AC3:** Stale “3.8+” in canonical install paths updated (grep sweep; changelog archive excluded).
- [x] **AC4:** **FR-104** and **BR-077** status updated on RW delivery; bidirectional links verified.
- [x] **AC5:** **E08:S03:T04** documents Python **3.11** for future Tests workflow.

## Out of scope (this task)

- Dependabot ([FR-105](Story-003-automation-scripts/T06-dependabot-enablement-fr105.md))
- pytest fixes ([BR-058](Story-003-automation-scripts/T04-ci-test-workflow-pytest-remediation-br058.md))

## References

- [IPP-E08S03T05-python-minimum-version-fr104-br077.md](../../../../implementation-cycles/IPP-E08S03T05-python-minimum-version-fr104-br077.md)
- [FR-104](../../../fr-br/FR-104-python-minimum-version-policy-alignment.md)
- [BR-077](../../../fr-br/BR-077-documented-python-38-contradicts-repo-310-requirement.md)

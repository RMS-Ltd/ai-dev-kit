---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-03T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 8, Story 3, Task 5: Python minimum version policy alignment (FR-104 / BR-077)

**Task ID:** E08:S03:T05  
**Status:** TODO  
**Priority:** HIGH (Must Have — MoSCOW **M**)  
**Created:** 2026-06-03  
**Last updated:** 2026-06-03 (v0.8.3.5+1 – Kanban documentation setup)  
**Version:** v0.8.3.5+1  
**Version Anchor:** v0.8.3.5+1  
**Code:** E08S03T05

**Upstream:** [FR-104 — Python minimum version policy alignment](../../../fr-br/FR-104-python-minimum-version-policy-alignment.md)  
**Upstream:** [BR-077 — Documented Python 3.8+ contradicts repo 3.10+ requirement](../../../fr-br/BR-077-documented-python-38-contradicts-repo-310-requirement.md)  
**Related audit:** [E07:S06:T08](../../Epic-7/Story-006-post-windsurf-project-review/T08-dependency-and-tooling-audit.md)

Publication Status: NOT_APPLICABLE

---

## Scope

Align declared Python minimum version (`setup.py`, README, install guides) with the effective **3.10+** floor required by repo scripts; resolve **BR-077**; recommend **3.11** for CI/contributors.

---

## Input

- [FR-104](../../../fr-br/FR-104-python-minimum-version-policy-alignment.md), [BR-077](../../../fr-br/BR-077-documented-python-38-contradicts-repo-310-requirement.md)
- [E07:S06:T08](../../Epic-7/Story-006-post-windsurf-project-review/T08-dependency-and-tooling-audit.md) audit findings
- Explicit implementation authorization (IPW/IPP optional before code changes)

---

## Deliverable

Single coherent **Python version policy** for ai-dev-kit: update `setup.py`, README, and canonical install docs; resolve **BR-077**; align doc examples with CI (**3.11** recommended).

## Recommended approach (default)

**Option A:** `python_requires=">=3.10"`; README “Python 3.10+ (3.11 recommended)”; note CLI-only historical 3.8 in changelog if needed.

## Acceptance criteria

- [ ] **AC1:** Policy choice recorded (Option A or B) in task doc or short governance note.
- [ ] **AC2:** `setup.py` and README prerequisites match policy.
- [ ] **AC3:** Stale “3.8+” in canonical install paths updated or scoped to CLI-only.
- [ ] **AC4:** **FR-104** and **BR-077** status updated; bidirectional links verified.
- [ ] **AC5:** Future **E08:S03:T04** Tests workflow doc comment references same Python pin.

## Out of scope (this task)

- Dependabot ([FR-105](Story-003-automation-scripts/T06-dependabot-enablement-fr105.md))
- pytest fixes ([BR-058](Story-003-automation-scripts/T04-ci-test-workflow-pytest-remediation-br058.md))

## References

- [FR-104](../../../fr-br/FR-104-python-minimum-version-policy-alignment.md)
- [BR-077](../../../fr-br/BR-077-documented-python-38-contradicts-repo-310-requirement.md)

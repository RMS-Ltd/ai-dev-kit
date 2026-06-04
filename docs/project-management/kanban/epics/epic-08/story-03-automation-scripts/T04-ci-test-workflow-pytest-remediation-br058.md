---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-29T17:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 8, Story 3, Task 4: CI test workflow and pytest remediation (BR-058)

**Task ID:** E08:S03:T04  
**Status:** TODO  
**Priority:** LOW  
**Created:** 2026-05-29  
**Last updated:** 2026-05-29 (intake — semantic delivery under E8:S03 automation)  
**Code:** E08S03T04

**Upstream:** [BR-058 — CI test workflow missing and pytest failures](../../../fr-br/BR-058-ci-test-workflow-missing-and-pytest-failures.md)  
**Related audit:** [E07:S06:T08](../../epic-07/story-06-post-windsurf-project-review/T08-dependency-and-tooling-audit.md) (tooling context)

Publication Status: NOT_APPLICABLE

---

## Deliverable

Restore a **`Tests`** (or equivalent) GitHub Actions workflow; fix failing pytest suite so CI is green and `workflow_run` triggers (e.g. badge workflows) can fire.

**Python version (E08:S03:T05 / FR-104):** When adding the Tests workflow, pin **`python-version: "3.11"`** (matches [`framework-release.yml`](../../../../../../.github/workflows/framework-release.yml) and repo `python_requires`).

## Acceptance criteria

- [ ] **AC1:** `.github/workflows` includes runnable test workflow on PR/push.
- [ ] **AC2:** `pytest` passes locally and in CI (or documented skip matrix with rationale).
- [ ] **AC3:** **BR-058** resolution updated; **fbuboard** wired to **E08:S03:T04**.

## References

- [BR-058](../../../fr-br/BR-058-ci-test-workflow-missing-and-pytest-failures.md)

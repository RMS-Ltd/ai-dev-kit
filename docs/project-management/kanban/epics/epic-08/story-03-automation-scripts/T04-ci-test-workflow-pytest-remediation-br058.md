---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-29T17:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 8, Story 3, Task 4: CI test workflow and pytest remediation (BR-058)

**Task ID:** E08:S03:T04  
**Status:** ✅ COMPLETE (v0.8.3.4+1)  
**Priority:** LOW  
**Created:** 2026-05-29  
**Last updated:** 2026-06-04 (v0.8.3.4+1 — Tests CI workflow + pytest remediation)  
**Version Anchor:** ✅ COMPLETE (v0.8.3.4+1)  
**Code:** E08S03T04

**Upstream:** [BR-058 — CI test workflow missing and pytest failures](../../../fr-br/BR-058-ci-test-workflow-missing-and-pytest-failures.md)  
**Related audit:** [E07:S06:T08](../../epic-07/story-06-post-windsurf-project-review/T08-dependency-and-tooling-audit.md) (tooling context)

Publication Status: NOT_APPLICABLE

---

## Input

- [BR-058](../../../fr-br/BR-058-ci-test-workflow-missing-and-pytest-failures.md)
- [IPP-E08S03T04-ci-test-workflow-pytest-remediation-br058.md](../../../../../implementation-cycles/IPP-E08S03T04-ci-test-workflow-pytest-remediation-br058.md)
- [IPP-E07S07T02-ci-pytest-gate-for-workflow-scripts.md](../../../../../implementation-cycles/IPP-E07S07T02-ci-pytest-gate-for-workflow-scripts.md) (scoped workflow-mgt gate — complementary)

---

## Deliverable

Restore a **`Tests`** (or equivalent) GitHub Actions workflow; fix failing pytest suite so CI is green.

**Python version (E08:S03:T05 / FR-104):** Tests workflow pins **`python-version: "3.11"`** (matches [`framework-release.yml`](../../../../../../.github/workflows/framework-release.yml) and repo `python_requires`).

## Acceptance criteria

- [x] **AC1:** `.github/workflows/tests.yml` runs on PR/push to `main`/`dev`.
- [x] **AC2:** `pytest tests/` — 348 passed, 1 skipped locally (CI pending user verification).
- [x] **AC3:** **BR-058** resolved; **fbuboard** wired to **E08:S03:T04**.

## References

- [BR-058](../../../fr-br/BR-058-ci-test-workflow-missing-and-pytest-failures.md)
- [IPP-E08S03T04-ci-test-workflow-pytest-remediation-br058.md](../../../../../implementation-cycles/IPP-E08S03T04-ci-test-workflow-pytest-remediation-br058.md)

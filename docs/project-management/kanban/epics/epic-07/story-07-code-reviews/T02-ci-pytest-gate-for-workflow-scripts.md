---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-03T21:40:00Z
expires_at: null
housekeeping_policy: keep
---

# E07:S07:T02 – CI pytest gate for workflow scripts (H1)

**Task ID:** E07:S07:T02  
**Status:** ✅ COMPLETE  
**Priority:** HIGH  
**Created:** 2026-06-03  
**Last updated:** 2026-06-03 (v0.7.7.2+1 — CI pytest gate shipped)
**Version Anchor:** ✅ COMPLETE (v0.7.7.2+1)  
**Epic:** E07 – Codebase Maintenance  
**Story:** E07:S07 – Code Reviews  
**Code:** E07S07T02  
**Source:** [T01 review report §5 H1](T01-workflow-machinery-code-review-report.md) — no CI pytest gate for workflow script corpus

**Planning:** [IPP-E07S07T02-ci-pytest-gate-for-workflow-scripts.md](../../../../../implementation-cycles/IPP-E07S07T02-ci-pytest-gate-for-workflow-scripts.md)

---

## Input

- [T01 review report H1](T01-workflow-machinery-code-review-report.md) — no CI pytest gate for workflow script corpus.
- Existing [`run_isolated_pytest.sh`](../../../../../../packages/frameworks/workflow-mgt/scripts/validation/run_isolated_pytest.sh) (single-file runner).

---

## Deliverable

- GitHub Actions workflow `.github/workflows/workflow-scripts-pytest.yml`.
- CI runner `run_workflow_scripts_ci_pytest.sh` + validation README.
- Kanban release attribution for **E07:S07:T02** at **v0.7.7.2+1**.

---

## Scope

Add a **blocking CI gate** that runs the isolated workflow-script pytest suite on changes under `packages/frameworks/workflow-mgt/`. Implements remediation **H1** from [T01](T01-comprehensive-workflow-machinery-code-review.md).

**In scope:**

1. Curated CI runner script (`run_workflow_scripts_ci_pytest.sh`) — `validation/` corpus + stable co-located tests (stamp evidence, est_format, task_touch mapping).
2. GitHub Actions workflow on PR/push when workflow package paths change.
3. Document entrypoint in package validation README.

**Out of scope:**

- Full `scripts/**` corpus (36 files; some need fixture fixes — see report M5).
- **BR-058** / **E08:S03:T04** repo-wide Tests workflow (separate; may reuse patterns).

---

## Acceptance criteria

- [x] **AC1:** `.github/workflows/workflow-scripts-pytest.yml` runs on PR/push for workflow mgt path changes.
- [x] **AC2:** CI runner executes isolated pytest (`PYTEST_DISABLE_PLUGIN_AUTOLOAD=1`, `validation/pytest.ini`) over `validation/` + curated co-located modules; exits 0 locally and in CI.
- [x] **AC3:** Entrypoint documented in `packages/frameworks/workflow-mgt/scripts/validation/README.md`.
- [x] **AC4:** Task doc + Story checklist + `kboard.md` row wired; **RW** attributing **v0.7.7.2+1**.

---

## References

- [T01 workflow machinery code review report](T01-workflow-machinery-code-review-report.md)
- [E08:S03:T04 — BR-058 CI test workflow](../../epic-08/story-03-automation-scripts/T04-ci-test-workflow-pytest-remediation-br058.md) (broader scope)
- [`run_isolated_pytest.sh`](../../../../../../packages/frameworks/workflow-mgt/scripts/validation/run_isolated_pytest.sh)

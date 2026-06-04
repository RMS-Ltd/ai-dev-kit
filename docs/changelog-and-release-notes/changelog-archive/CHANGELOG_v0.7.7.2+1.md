# Changelog — v0.7.7.2+1

**Release Date:** 2026-06-03 20:39:13 UTC  
**Epic:** 7 | **Story:** 7 | **Task:** 2  
**SemVer:** v0.4.862+1

---

## Summary

E07:S07:T02 — CI pytest gate for Workflow Management scripts (review **H1**): GitHub Actions workflow, curated isolated pytest runner, validation README.

---

## Attempted Changes

### CI pytest gate (H1)

- Added [`.github/workflows/workflow-scripts-pytest.yml`](../../../.github/workflows/workflow-scripts-pytest.yml) — runs on PR/push when `packages/frameworks/workflow mgt/**` changes (Python 3.11).
- Added [`run_workflow_scripts_ci_pytest.sh`](../../../packages/frameworks/workflow%20mgt/scripts/validation/run_workflow_scripts_ci_pytest.sh) — `validation/` corpus + curated co-located tests (103 tests).
- Updated [`run_isolated_pytest.sh`](../../../packages/frameworks/workflow%20mgt/scripts/validation/run_isolated_pytest.sh) to delegate to CI runner.
- Added [`scripts/validation/README.md`](../../../packages/frameworks/workflow%20mgt/scripts/validation/README.md) documenting the CI entrypoint.

### Kanban / planning

- Task doc, IPP, story-007 checklist updated for **E07:S07:T02** release attribution.

---

## References

- [IPP-E07S07T02](../../implementation-cycles/IPP-E07S07T02-ci-pytest-gate-for-workflow-scripts.md)
- [T01 review report H1](../../project-management/kanban/epics/epic-07/story-07-code-reviews/T01-workflow-machinery-code-review-report.md)

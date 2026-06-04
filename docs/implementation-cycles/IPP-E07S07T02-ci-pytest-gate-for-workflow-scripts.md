---
lifecycle: timeboxed
ttl_days: 90
created_at: 2026-06-03T21:40:00Z
expires_at: null
housekeeping_policy: archive
---

# IPP — E07:S07:T02: CI pytest gate for workflow scripts (H1)

**Task:** E07:S07:T02  
**Host:** [T02-ci-pytest-gate-for-workflow-scripts.md](../project-management/kanban/epics/epic-07/story-07-code-reviews/T02-ci-pytest-gate-for-workflow-scripts.md)  
**Source finding:** [T01 report H1](../project-management/kanban/epics/epic-07/story-07-code-reviews/T01-workflow-machinery-code-review-report.md)

---

## 1. Problem

Workflow Management has ~36 co-located pytest modules but CI only runs `build_all_packages.sh` (`framework-release.yml`). Regressions in validators/scripts can ship undetected.

## 2. Objectives

- Blocking GitHub Actions gate for workflow mgt changes.
- Reuse isolated pytest config (`validation/pytest.ini`) to avoid root `pytest.ini` / pytest-django pollution.
- Curated stable subset first; expand in follow-on (M5).

## 3. Specification

| ID | Requirement |
| -- | ----------- |
| R1 | New script `run_workflow_scripts_ci_pytest.sh` runs `validation/` + curated co-located tests |
| R2 | Workflow triggers on `packages/frameworks/workflow-mgt/**` path filter |
| R3 | Python 3.11, deps: `pytest`, `pyyaml` |
| R4 | `run_isolated_pytest.sh` delegates to CI script for backward compatibility |
| R5 | Document CI entrypoint in validation README |

## 4. Test design

| ID | Test | Type |
| -- | ---- | ---- |
| T1 | Script exits 0 locally with curated suite | Manual / CI |
| T2 | Workflow YAML valid (path filters, python 3.11) | Review |
| T3 | Change under `validation/` fails CI if test broken | CI regression |

## 5. Implementation plan

1. [x] Transition E07:S07:T02 → **IN PROGRESS** (kanban + task doc).
2. [x] Add `run_workflow_scripts_ci_pytest.sh` + update `run_isolated_pytest.sh`.
3. [x] Add `.github/workflows/workflow-scripts-pytest.yml`.
4. [x] Document in `scripts/validation/README.md`.
5. [x] Mark AC1–AC3 complete; reconcile task status post-verification.
6. [x] **RW E07:S07:T02** for release attribution (**v0.7.7.2+1**).

## 6. Documentation deliverables

- Validation README CI section
- Task doc AC checkboxes
- story-007 checklist entry

## 7. Verification checklist

- [x] Local: `bash run_workflow_scripts_ci_pytest.sh` → exit 0 (103 passed)
- [x] AC1–AC3 satisfied on task doc
- [x] RW attributes E07:S07:T02 (**v0.7.7.2+1**)

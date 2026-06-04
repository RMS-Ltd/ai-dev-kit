# Workflow validation scripts — pytest CI gate

**CI entrypoint (E07:S07:T02 / review H1):**

```bash
bash "packages/frameworks/workflow-mgt/scripts/validation/run_workflow_scripts_ci_pytest.sh"
```

**GitHub Actions:** [`.github/workflows/workflow-scripts-pytest.yml`](../../../../../../.github/workflows/workflow-scripts-pytest.yml) — runs on PR/push when `packages/frameworks/workflow-mgt/**` changes.

**Isolated config:** `pytest.ini` in this directory disables root `testpaths`, coverage, and `pytest-django` autoload (`PYTEST_DISABLE_PLUGIN_AUTOLOAD=1`).

**Suite scope (curated):**

- All tests under `validation/`
- Co-located: `test_stamp_evidence_gate.py`, `test_stamp_authority.py`, `kanban/test_est_format.py`, `kanban/test_discover_perpetual_task_candidates.py`, `version/test_task_touch_mapping.py`

**Legacy alias:** `run_isolated_pytest.sh` delegates to the CI runner.

## Two-gate CI model (E07:S07:T02 + E08:S03:T04)

| Workflow | Scope | Trigger |
| -------- | ----- | ------- |
| [`workflow-scripts-pytest.yml`](../../../../../../.github/workflows/workflow-scripts-pytest.yml) | Workflow Management validation corpus + curated co-located tests | Path filter: `packages/frameworks/workflow-mgt/**` |
| [`tests.yml`](../../../../../../.github/workflows/tests.yml) | Repo-wide root `tests/` suite | Every PR + push to `main`/`dev` |

**Local repo-wide pytest:**

```bash
pip install -e ".[dev]"
python -m pytest tests/
```

"""
BR-052 / E02:S11:T14: GitHub Actions workflow optimization contract.

Validates path filters, pip caching, and intake trigger-scope topology.
"""

from __future__ import annotations

from pathlib import Path

import yaml

REPO_ROOT = Path(__file__).resolve().parents[1]

TESTS_WORKFLOW = REPO_ROOT / ".github/workflows/tests.yml"
WORKFLOW_SCRIPTS_WORKFLOW = REPO_ROOT / ".github/workflows/workflow-scripts-pytest.yml"
FRAMEWORK_RELEASE_WORKFLOW = REPO_ROOT / ".github/workflows/framework-release.yml"
DOCUSAURUS_WORKFLOW = REPO_ROOT / ".github/workflows/docusaurus-build.yml"
INTAKE_ACTIVE = REPO_ROOT / ".github/workflows/fr-br-intake.yml"
INTAKE_FUTURE = REPO_ROOT / ".github/workflows/fr-br-intake.yml.DISABLED"
INTAKE_DUPLICATE = REPO_ROOT / ".github/workflows/fr-br-intake.yml.DISABLED-AGAIN"


def _load_workflow(path: Path) -> dict:
    text = path.read_text(encoding="utf-8")
    return yaml.safe_load(text)


def _setup_python_step(workflow: dict) -> dict:
    for job in workflow.get("jobs", {}).values():
        for step in job.get("steps", []):
            if step.get("uses", "").startswith("actions/setup-python"):
                return step
    raise AssertionError("setup-python step not found")


def test_tests_workflow_path_filters():
    wf = _load_workflow(TESTS_WORKFLOW)
    on = wf["on"]
    for event in ("push", "pull_request"):
        paths = on[event]["paths"]
        assert "tests/**" in paths
        assert "src/**" in paths
        assert "packages/**" in paths
        assert "pyproject.toml" in paths
        assert ".github/workflows/tests.yml" in paths


def test_tests_workflow_pip_cache():
    wf = _load_workflow(TESTS_WORKFLOW)
    step = _setup_python_step(wf)
    assert step["with"]["cache"] == "pip"
    assert step["with"]["cache-dependency-path"] == "pyproject.toml"


def test_workflow_scripts_pip_cache():
    wf = _load_workflow(WORKFLOW_SCRIPTS_WORKFLOW)
    step = _setup_python_step(wf)
    assert step["with"]["cache"] == "pip"


def test_framework_release_pip_cache():
    wf = _load_workflow(FRAMEWORK_RELEASE_WORKFLOW)
    step = _setup_python_step(wf)
    assert step["with"]["cache"] == "pip"


def test_docusaurus_workflow_unchanged_cache():
    wf = _load_workflow(DOCUSAURUS_WORKFLOW)
    build_job = wf["jobs"]["build"]
    node_step = next(
        s for s in build_job["steps"] if s.get("uses", "").startswith("actions/setup-node")
    )
    assert node_step["with"]["cache"] == "npm"
    assert "portal/**" in wf["on"]["pull_request"]["paths"]


def test_active_intake_dispatch_only_no_issue_triggers():
    """BR-051/BR-053: active intake uses workflow_dispatch only — no spam triggers."""
    wf = _load_workflow(INTAKE_ACTIVE)
    on = wf["on"]
    assert "workflow_dispatch" in on
    assert "issues" not in on
    assert "push" not in on
    job_if = wf["jobs"]["convert-issue-to-document"]["if"]
    assert "workflow_dispatch" in job_if


def test_intake_future_template_has_br052_trigger_scope():
    """BR-052 optimizations preserved for post-BR-053 re-enable."""
    wf = _load_workflow(INTAKE_FUTURE)
    assert wf["on"]["issues"]["types"] == ["opened", "labeled", "unlabeled"]
    assert "workflow_dispatch" in wf["on"]
    job_if = wf["jobs"]["convert-issue-to-document"]["if"]
    assert "github.event.action != 'edited'" in job_if
    assert "github.event_name == 'issues'" in job_if


def test_no_duplicate_disabled_intake_file():
    assert not INTAKE_DUPLICATE.exists(), "duplicate DISABLED-AGAIN should be removed"

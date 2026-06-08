"""
BR-093 / E5:S09:T14: Docusaurus CI build/deploy deduplication contract.

Executable spec T1–T4 from IPP-E05S09T14.

See: docs/kanban/fr-br/BR-093-docusaurus-ci-duplicate-build-deploy-job-waste.md
"""

from __future__ import annotations

from pathlib import Path
from typing import Any

import pytest
import yaml

REPO_ROOT = Path(__file__).resolve().parent.parent
BUILD_WORKFLOW_REL = Path(".github/workflows/docusaurus-build.yml")
BUILD_WORKFLOW_PATH = REPO_ROOT / BUILD_WORKFLOW_REL
DEPLOY_WORKFLOW_PATH = REPO_ROOT / ".github/workflows/docusaurus-deploy.yml"


@pytest.fixture
def workflow_doc() -> dict[str, Any]:
    assert BUILD_WORKFLOW_PATH.is_file(), f"Missing {BUILD_WORKFLOW_PATH}"
    return yaml.safe_load(BUILD_WORKFLOW_PATH.read_text(encoding="utf-8"))


def _job_steps(job: dict[str, Any]) -> list[dict[str, Any]]:
    steps = job.get("steps")
    if not isinstance(steps, list):
        return []
    return [s for s in steps if isinstance(s, dict)]


def test_br093_t1_single_build_topology(workflow_doc: dict[str, Any]):
    """T1 — deploy job needs build; deploy omits npm run build."""
    jobs = workflow_doc.get("jobs", {})
    deploy = jobs.get("deploy")
    assert isinstance(deploy, dict)
    assert deploy.get("needs") == "build"
    runs = [str(s.get("run") or "") for s in _job_steps(deploy)]
    joined = "\n".join(runs)
    assert "npm run build" not in joined
    assert "npm ci" not in joined


def test_br093_t2_fail_fast_gate(workflow_doc: dict[str, Any]):
    """T2 — deploy declares needs: build (GitHub skips on upstream failure)."""
    deploy = workflow_doc["jobs"]["deploy"]
    assert deploy.get("needs") == "build"


def test_br093_t3_pr_gate_preserved(workflow_doc: dict[str, Any]):
    """T3 — PR path filters (FR-114 allowlist); deploy if excludes pull_request-only runs."""
    on = workflow_doc["on"]
    pr_paths = on["pull_request"]["paths"]
    assert "portal/**" in pr_paths
    # FR-114 narrowed CI from docs/** to adopter-public allowlist (E05:S09:T15).
    for allowlisted in (
        "docs/guides/**",
        "docs/documentation/**",
        "docs/developer-tools/ide-whitelist-guide.md",
        ".github/workflows/docusaurus-build.yml",
    ):
        assert allowlisted in pr_paths
    deploy_if = str(workflow_doc["jobs"]["deploy"].get("if", ""))
    assert "pull_request" not in deploy_if or "github.event_name" in deploy_if


def test_br093_t4_artifact_handoff(workflow_doc: dict[str, Any]):
    """T4 — build uploads portal/build; deploy downloads before peaceiris."""
    build_steps = _job_steps(workflow_doc["jobs"]["build"])
    deploy_steps = _job_steps(workflow_doc["jobs"]["deploy"])
    upload = any(
        "upload-artifact" in str(s.get("uses", "")) and "portal/build" in str(s.get("with", {}))
        for s in build_steps
    )
    download_idx = publish_idx = None
    for i, s in enumerate(deploy_steps):
        uses = str(s.get("uses") or "")
        if "download-artifact" in uses:
            download_idx = i
        if "peaceiris/actions-gh-pages" in uses:
            publish_idx = i
    assert upload, "build job must upload portal/build artifact"
    assert download_idx is not None and publish_idx is not None
    assert download_idx < publish_idx


def test_br093_no_duplicate_deploy_workflow():
    """Retired docusaurus-deploy.yml must not reintroduce duplicate push trigger."""
    assert not DEPLOY_WORKFLOW_PATH.is_file(), (
        f"Duplicate workflow still present: {DEPLOY_WORKFLOW_PATH}"
    )

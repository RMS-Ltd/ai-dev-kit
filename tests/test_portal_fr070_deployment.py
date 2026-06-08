"""
FR-070 / E5:S09:T06: Docusaurus production hosting (GitHub Pages) contract.

Executable spec S1–S7 (E2E URL/deploy green is manual).

Cross-job deploy topology per ADR-017 (supersedes same-job S7).

See: docs/kanban/fr-br/FR-070-docusaurus-deployment-and-hosting.md
"""

from __future__ import annotations

import re
from pathlib import Path
from typing import Any

import pytest
import yaml

REPO_ROOT = Path(__file__).resolve().parent.parent
BUILD_WORKFLOW_REL = Path(".github/workflows/docusaurus-build.yml")
BUILD_WORKFLOW_PATH = REPO_ROOT / BUILD_WORKFLOW_REL
PORTAL_README = REPO_ROOT / "portal" / "README.md"
ROOT_README = REPO_ROOT / "README.md"
CONFIG_PATH = REPO_ROOT / "portal" / "docusaurus.config.js"

CANONICAL_SITE_URL = "https://rms-ltd.github.io/ai-dev-kit/"


@pytest.fixture
def build_workflow_doc() -> dict[str, Any]:
    assert BUILD_WORKFLOW_PATH.is_file(), f"Missing {BUILD_WORKFLOW_PATH}"
    text = BUILD_WORKFLOW_PATH.read_text(encoding="utf-8")
    return yaml.safe_load(text)


@pytest.fixture
def config_text() -> str:
    return CONFIG_PATH.read_text(encoding="utf-8")


def _job_steps(job: dict[str, Any]) -> list[dict[str, Any]]:
    steps = job.get("steps")
    if not isinstance(steps, list):
        return []
    return [s for s in steps if isinstance(s, dict)]


def test_fr070_s2_config_url_baseurl(config_text: str):
    """S2 — docusaurus.config.js url/baseUrl match GitHub Pages project site."""
    assert "url: 'https://rms-ltd.github.io'" in config_text or 'url: "https://rms-ltd.github.io"' in config_text
    assert "baseUrl: '/ai-dev-kit/'" in config_text or 'baseUrl: "/ai-dev-kit/"' in config_text


def test_fr070_s1_readme_documents_canonical_url():
    """S1 — portal README documents production URL."""
    text = PORTAL_README.read_text(encoding="utf-8")
    assert CANONICAL_SITE_URL in text


def test_fr070_s3_deploy_job_in_build_workflow(build_workflow_doc: dict[str, Any]):
    """S3 — deploy job in merged workflow with gh-pages publish (ADR-017)."""
    jobs = build_workflow_doc.get("jobs")
    assert isinstance(jobs, dict) and jobs
    deploy = jobs.get("deploy")
    assert isinstance(deploy, dict)
    steps = _job_steps(deploy)
    publish_like = False
    for s in steps:
        uses = s.get("uses")
        if uses and "peaceiris/actions-gh-pages" in str(uses):
            publish_like = True
            with_ = s.get("with") or {}
            pd = with_.get("publish_dir")
            assert pd is not None and "portal/build" in str(pd).replace("\\", "/")
    assert publish_like
    build = jobs.get("build")
    assert isinstance(build, dict)
    build_runs = "\n".join(str(s.get("run") or "") for s in _job_steps(build))
    assert "npm ci" in build_runs
    assert "npm run build" in build_runs


def test_fr070_s4_root_readme_site_link():
    """S4 — root README links to live doc site."""
    text = ROOT_README.read_text(encoding="utf-8")
    assert CANONICAL_SITE_URL in text or "earlution.github.io/ai-dev-kit" in text


def test_fr070_s5_no_literal_secrets(build_workflow_doc: dict[str, Any]):
    """S5 — no obvious PAT literals; deploy uses GITHUB_TOKEN."""
    raw = BUILD_WORKFLOW_PATH.read_text(encoding="utf-8")
    assert "ghp_" not in raw
    deploy_steps = _job_steps(build_workflow_doc["jobs"]["deploy"])
    joined = "\n".join(str(s) for s in deploy_steps)
    assert "GITHUB_TOKEN" in joined or "secrets.GITHUB_TOKEN" in joined


def test_fr070_s6_rollback_mentioned():
    """S6 — portal README documents rollback."""
    text = PORTAL_README.read_text(encoding="utf-8")
    assert re.search(r"rollback", text, re.IGNORECASE)


def test_fr070_s7_artifact_freshness_before_publish(build_workflow_doc: dict[str, Any]):
    """S7 — build uploads artifact; deploy downloads before publish (same run)."""
    build_steps = _job_steps(build_workflow_doc["jobs"]["build"])
    deploy_steps = _job_steps(build_workflow_doc["jobs"]["deploy"])
    assert build_workflow_doc["jobs"]["deploy"].get("needs") == "build"
    upload_idx = download_idx = publish_idx = None
    for i, s in enumerate(build_steps):
        if "upload-artifact" in str(s.get("uses") or ""):
            upload_idx = i
    for i, s in enumerate(deploy_steps):
        uses = str(s.get("uses") or "")
        if "download-artifact" in uses:
            download_idx = i
        if "peaceiris/actions-gh-pages" in uses:
            publish_idx = i
    assert upload_idx is not None
    assert download_idx is not None and publish_idx is not None
    assert download_idx < publish_idx

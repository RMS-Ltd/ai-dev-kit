"""
FR-070 / E5:S09:T06: Docusaurus production hosting (GitHub Pages) contract.

Executable spec S1–S7 (E2E URL/deploy green is manual).

See: docs/project-management/kanban/fr-br/FR-070-docusaurus-deployment-and-hosting.md
"""

from __future__ import annotations

import re
from pathlib import Path
from typing import Any

import pytest
import yaml

REPO_ROOT = Path(__file__).resolve().parent.parent
DEPLOY_WORKFLOW_REL = Path(".github/workflows/docusaurus-deploy.yml")
DEPLOY_WORKFLOW_PATH = REPO_ROOT / DEPLOY_WORKFLOW_REL
PORTAL_README = REPO_ROOT / "portal" / "README.md"
ROOT_README = REPO_ROOT / "README.md"
CONFIG_PATH = REPO_ROOT / "portal" / "docusaurus.config.js"

CANONICAL_SITE_URL = "https://earlution.github.io/ai-dev-kit/"


@pytest.fixture
def deploy_workflow_doc() -> dict[str, Any]:
    assert DEPLOY_WORKFLOW_PATH.is_file(), f"Missing {DEPLOY_WORKFLOW_PATH}"
    text = DEPLOY_WORKFLOW_PATH.read_text(encoding="utf-8")
    return yaml.safe_load(text)


@pytest.fixture
def config_text() -> str:
    return CONFIG_PATH.read_text(encoding="utf-8")


def test_fr070_s2_config_url_baseurl(config_text: str):
    """S2 — docusaurus.config.js url/baseUrl match GitHub Pages project site."""
    assert "url: 'https://earlution.github.io'" in config_text or 'url: "https://earlution.github.io"' in config_text
    assert "baseUrl: '/ai-dev-kit/'" in config_text or 'baseUrl: "/ai-dev-kit/"' in config_text


def test_fr070_s1_readme_documents_canonical_url():
    """S1 — portal README documents production URL."""
    text = PORTAL_README.read_text(encoding="utf-8")
    assert CANONICAL_SITE_URL in text


def test_fr070_s3_deploy_workflow_exists(deploy_workflow_doc: dict[str, Any]):
    """S3 — deploy workflow YAML with build + gh-pages publish."""
    assert isinstance(deploy_workflow_doc, dict)
    assert deploy_workflow_doc.get("name")
    assert deploy_workflow_doc.get("on")
    jobs = deploy_workflow_doc.get("jobs")
    assert isinstance(jobs, dict) and jobs
    deploy = jobs.get("deploy")
    assert isinstance(deploy, dict)
    steps = deploy.get("steps")
    assert isinstance(steps, list)
    texts: list[str] = []
    publish_like = False
    for s in steps:
        if not isinstance(s, dict):
            continue
        uses = s.get("uses")
        run = s.get("run")
        if uses:
            texts.append(str(uses))
            if "peaceiris/actions-gh-pages" in str(uses):
                publish_like = True
                with_ = s.get("with") or {}
                pd = with_.get("publish_dir")
                assert pd is not None and "portal/build" in str(pd).replace("\\", "/")
        if run:
            texts.append(str(run))
    joined = "\n".join(texts)
    assert "npm ci" in joined
    assert "npm run build" in joined
    assert publish_like


def test_fr070_s4_root_readme_site_link():
    """S4 — root README links to live doc site."""
    text = ROOT_README.read_text(encoding="utf-8")
    assert CANONICAL_SITE_URL in text or "earlution.github.io/ai-dev-kit" in text


def test_fr070_s5_no_literal_secrets():
    """S5 — no obvious PAT literals in deploy workflow."""
    raw = DEPLOY_WORKFLOW_PATH.read_text(encoding="utf-8")
    assert "ghp_" not in raw
    assert "${{ secrets.GITHUB_TOKEN }}" in raw or "secrets.GITHUB_TOKEN" in raw


def test_fr070_s6_rollback_mentioned():
    """S6 — portal README documents rollback."""
    text = PORTAL_README.read_text(encoding="utf-8")
    assert re.search(r"rollback", text, re.IGNORECASE)


def test_fr070_s7_build_before_publish(deploy_workflow_doc: dict[str, Any]):
    """S7 — publish step after build in the same job."""
    deploy = deploy_workflow_doc["jobs"]["deploy"]
    steps = deploy["steps"]
    idx_build: int | None = None
    idx_publish: int | None = None
    for i, s in enumerate(steps):
        if not isinstance(s, dict):
            continue
        if s.get("run") and "npm run build" in str(s.get("run")):
            idx_build = i
        uses = str(s.get("uses") or "")
        if "peaceiris/actions-gh-pages" in uses:
            idx_publish = i
    assert idx_build is not None and idx_publish is not None
    assert idx_publish > idx_build

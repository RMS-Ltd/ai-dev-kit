"""
FR-069 / E5:S09:T05: GitHub Actions Docusaurus build gate (workflow contract).

Executable spec S1–S7 (S8 is process / observational).

See: docs/project-management/kanban/fr-br/FR-069-docusaurus-ci-build-gate.md
"""

from __future__ import annotations

from pathlib import Path
from typing import Any

import pytest
import yaml

REPO_ROOT = Path(__file__).resolve().parent.parent
WORKFLOW_REL = Path(".github/workflows/docusaurus-build.yml")
WORKFLOW_PATH = REPO_ROOT / WORKFLOW_REL
README_PATH = REPO_ROOT / "portal" / "README.md"


@pytest.fixture
def workflow_doc() -> dict[str, Any]:
    assert WORKFLOW_PATH.is_file(), f"Missing {WORKFLOW_PATH}"
    text = WORKFLOW_PATH.read_text(encoding="utf-8")
    return yaml.safe_load(text)


def test_fr069_workflow_file_exists():
    assert WORKFLOW_PATH.is_file(), f"Missing {WORKFLOW_PATH}"


def test_fr069_s1_yaml_structure(workflow_doc: dict[str, Any]):
    """S1 — valid workflow YAML with name, on, jobs."""
    assert isinstance(workflow_doc, dict)
    assert workflow_doc.get("name")
    assert workflow_doc.get("on")
    jobs = workflow_doc.get("jobs")
    assert isinstance(jobs, dict) and jobs
    for _jid, job in jobs.items():
        if not isinstance(job, dict):
            continue
        assert job.get("runs-on")
        assert job.get("steps")


def _paths_from_trigger(trigger: Any) -> list[str]:
    if not isinstance(trigger, dict):
        return []
    raw = trigger.get("paths")
    if raw is None:
        return []
    if isinstance(raw, list):
        return [str(p) for p in raw]
    return []


def test_fr069_s2_pr_push_paths(workflow_doc: dict[str, Any]):
    """S2 — pull_request and push filters include portal/** and docs/**."""
    on = workflow_doc["on"]
    assert isinstance(on, dict)
    pr = on.get("pull_request")
    push = on.get("push")
    assert isinstance(pr, dict), "on.pull_request must be a mapping with paths"
    assert isinstance(push, dict), "on.push must be a mapping with paths"
    for label, trig in ("pull_request", pr), ("push", push):
        paths = _paths_from_trigger(trig)
        assert "portal/**" in paths, f"{label} must include portal/**"
        assert "docs/**" in paths, f"{label} must include docs/**"
    branches = push.get("branches")
    assert branches == ["main"], "push should be limited to main per T05 spec"


def test_fr069_s3_docusaurus_naming(workflow_doc: dict[str, Any]):
    """S3 — clear Docusaurus naming; job id build."""
    name = workflow_doc.get("name", "")
    assert isinstance(name, str) and "docusaurus" in name.lower()
    assert "build" in workflow_doc.get("jobs", {})


def _collect_steps(workflow_doc: dict[str, Any]) -> list[dict[str, Any]]:
    steps: list[dict[str, Any]] = []
    for job in workflow_doc.get("jobs", {}).values():
        if isinstance(job, dict) and isinstance(job.get("steps"), list):
            for s in job["steps"]:
                if isinstance(s, dict):
                    steps.append(s)
    return steps


def test_fr069_s4_node_20(workflow_doc: dict[str, Any]):
    """S4 — Node 20 via setup-node."""
    steps = _collect_steps(workflow_doc)
    found = False
    for s in steps:
        uses = s.get("uses") or ""
        if "setup-node" not in str(uses):
            continue
        with_ = s.get("with") or {}
        ver = with_.get("node-version")
        assert ver is not None, "setup-node must set node-version"
        sver = str(ver).strip()
        assert sver == "20" or sver.startswith("20."), f"expected Node 20, got {ver!r}"
        found = True
    assert found, "expected actions/setup-node step"


def test_fr069_s5_npm_ci_and_build(workflow_doc: dict[str, Any]):
    """S5 — working-directory portal; npm ci + npm run build."""
    assert workflow_doc.get("defaults", {}).get("run", {}).get("working-directory") == "portal"
    steps = _collect_steps(workflow_doc)
    runs = []
    for s in steps:
        r = s.get("run")
        if isinstance(r, str):
            runs.append(r)
    joined = "\n".join(runs)
    assert "npm ci" in joined
    assert "npm run build" in joined


def test_fr069_s6_npm_cache(workflow_doc: dict[str, Any]):
    """S6 — npm cache + lockfile path."""
    steps = _collect_steps(workflow_doc)
    for s in steps:
        uses = s.get("uses") or ""
        if "setup-node" not in str(uses):
            continue
        with_ = s.get("with") or {}
        assert with_.get("cache") == "npm"
        assert with_.get("cache-dependency-path") == "portal/package-lock.json"
        return
    pytest.fail("setup-node step not found")


def test_fr069_s7_readme_links_workflow():
    """S7 — portal README references workflow path."""
    text = README_PATH.read_text(encoding="utf-8")
    assert str(WORKFLOW_REL).replace("\\", "/") in text or ".github/workflows/docusaurus-build.yml" in text

"""Tests for lean PARTIAL→SUCCESS helpers (E06:S09:T46 / FR-110)."""

from __future__ import annotations

import importlib.util
import sys
from pathlib import Path

import pytest

_REPO = Path(__file__).resolve().parents[2]
_SCRIPTS = _REPO / "packages" / "frameworks" / "workflow-mgt" / "scripts"


@pytest.fixture(scope="module")
def rw_install_mod():
    path = _SCRIPTS / "install_release_workflow.py"
    spec = importlib.util.spec_from_file_location("install_release_workflow", path)
    mod = importlib.util.module_from_spec(spec)
    assert spec.loader is not None
    sys.modules["install_release_workflow"] = mod
    spec.loader.exec_module(mod)
    return mod


def test_is_vendor_scripts_path(rw_install_mod):
    assert rw_install_mod.is_vendor_scripts_path(
        "vendor/ai-dev-kit/packages/frameworks/workflow-mgt/scripts"
    )
    assert not rw_install_mod.is_vendor_scripts_path("tools/workflow_mgt/scripts")
    assert not rw_install_mod.is_vendor_scripts_path("")


def test_intentional_lean_when_vendor_scripts_path(tmp_path, rw_install_mod):
    project = tmp_path / "proj"
    project.mkdir()
    config = {
        "scripts_path": "vendor/ai-dev-kit/packages/frameworks/workflow-mgt/scripts"
    }
    assert rw_install_mod.is_intentional_lean_missing_workflow(project, config) is True


def test_not_lean_when_tools_scripts_path(tmp_path, rw_install_mod):
    project = tmp_path / "proj"
    project.mkdir()
    config = {"scripts_path": "tools/workflow_mgt/scripts"}
    # Installer file is not under vendor relative to project
    assert (
        rw_install_mod.is_intentional_lean_missing_workflow(
            project, config, installer_file=_SCRIPTS / "install_release_workflow.py"
        )
        is False
    )


def test_intentional_lean_when_installer_under_project_vendor(tmp_path, rw_install_mod):
    project = tmp_path / "proj"
    vendor_script = (
        project
        / "vendor"
        / "ai-dev-kit"
        / "packages"
        / "frameworks"
        / "workflow-mgt"
        / "scripts"
        / "install_release_workflow.py"
    )
    vendor_script.parent.mkdir(parents=True)
    vendor_script.write_text("# stub\n", encoding="utf-8")
    config = {"scripts_path": "tools/workflow_mgt/scripts"}
    assert (
        rw_install_mod.is_intentional_lean_missing_workflow(
            project, config, installer_file=vendor_script
        )
        is True
    )

"""Tests for install_greenfield_path.py (UXR-025 / E06:S09:T25)."""

from __future__ import annotations

import importlib.util
import subprocess
import sys
from pathlib import Path

import pytest

_REPO = Path(__file__).resolve().parents[2]
_SCRIPTS = _REPO / "packages" / "frameworks" / "workflow-mgt" / "scripts"

_RW_REL = "packages/frameworks/workflow-mgt/scripts/install_release_workflow.py"
_KANBAN_REL = "packages/frameworks/kanban/scripts/install_kanban_framework.py"


def _write_stub_scripts(root: Path) -> None:
    for rel in (_RW_REL, _KANBAN_REL):
        path = root / rel
        path.parent.mkdir(parents=True, exist_ok=True)
        path.write_text("# stub\n", encoding="utf-8")


@pytest.fixture(scope="module")
def greenfield_mod():
    path = _SCRIPTS / "install_greenfield_path.py"
    spec = importlib.util.spec_from_file_location("install_greenfield_path", path)
    mod = importlib.util.module_from_spec(spec)
    assert spec.loader is not None
    sys.modules["install_greenfield_path"] = mod
    spec.loader.exec_module(mod)
    return mod


def test_resolve_frameworks_base_prefers_project_packages(tmp_path, greenfield_mod):
    project = tmp_path / "project"
    vendor = tmp_path / "vendor"
    project.mkdir()
    vendor.mkdir()
    _write_stub_scripts(project)
    _write_stub_scripts(vendor)

    assert greenfield_mod.resolve_frameworks_base(project, vendor) == project


def test_resolve_frameworks_base_uses_vendor_when_no_project_packages(
    tmp_path, greenfield_mod
):
    project = tmp_path / "project"
    vendor = tmp_path / "vendor"
    project.mkdir()
    vendor.mkdir()
    _write_stub_scripts(vendor)

    assert greenfield_mod.resolve_frameworks_base(project, vendor) == vendor


def test_build_rw_command_includes_non_interactive_and_config(tmp_path, greenfield_mod):
    base = tmp_path / "base"
    _write_stub_scripts(base)
    cfg = tmp_path / "rw-input.yaml"
    cfg.write_text("mode: c\n", encoding="utf-8")

    cmd = greenfield_mod.build_rw_command(
        base,
        project_root=tmp_path / "proj",
        rw_mode="c",
        config=cfg,
        non_interactive=True,
    )

    assert "--non-interactive" in cmd
    assert "--config" in cmd
    assert str(cfg) in cmd
    assert cmd[1].endswith("install_release_workflow.py")


def test_build_kanban_command_force_when_non_interactive(tmp_path, greenfield_mod):
    base = tmp_path / "base"
    _write_stub_scripts(base)

    cmd = greenfield_mod.build_kanban_command(
        base,
        kanban_mode="fresh",
        catalog="v4",
        non_interactive=True,
    )

    assert "--force" in cmd
    assert cmd[1].endswith("install_kanban_framework.py")


def test_dry_run_uses_vendor_script_paths(tmp_path):
    project = tmp_path / "project"
    vendor = tmp_path / "vendor" / "ai-dev-kit"
    project.mkdir(parents=True)
    vendor.mkdir(parents=True)
    _write_stub_scripts(vendor)

    script = _SCRIPTS / "install_greenfield_path.py"
    result = subprocess.run(
        [
            sys.executable,
            str(script),
            "--project-root",
            str(project),
            "--vendor-root",
            str(vendor),
            "--non-interactive",
            "--no-verify-vendor",
            "--dry-run",
        ],
        cwd=project,
        capture_output=True,
        text=True,
        check=False,
    )

    assert result.returncode == 0, result.stderr
    rw_path = str(vendor / _RW_REL)
    assert rw_path in result.stdout
    assert "--non-interactive" in result.stdout


def test_dry_run_adoption_path_and_sqlite_flags(tmp_path):
    project = tmp_path / "project"
    vendor = tmp_path / "vendor" / "ai-dev-kit"
    project.mkdir(parents=True)
    vendor.mkdir(parents=True)
    _write_stub_scripts(vendor)

    script = _SCRIPTS / "install_greenfield_path.py"
    result = subprocess.run(
        [
            sys.executable,
            str(script),
            "--project-root",
            str(project),
            "--vendor-root",
            str(vendor),
            "--non-interactive",
            "--no-verify-vendor",
            "--dry-run",
            "--adoption-path",
            "arm-b",
            "--init-sqlite",
            "--run-install-rc",
        ],
        cwd=project,
        capture_output=True,
        text=True,
        check=False,
    )

    assert result.returncode == 0, result.stderr
    assert "arm-b" in result.stdout
    assert "init_release_state_db" in result.stdout or "import_legacy" in result.stdout
    assert "validate_install_rc" in result.stdout

"""BR-078 / E06:S09:T07: KANBAN_STRUCTURE_TEMPLATE fresh install."""

from __future__ import annotations

import importlib.util
import subprocess
import sys
from pathlib import Path

import pytest

REPO_ROOT = Path(__file__).resolve().parents[2]
INSTALL_SCRIPT = REPO_ROOT / "packages/frameworks/kanban/scripts/install_kanban_framework.py"
SCRIPTS_DIR = REPO_ROOT / "packages/frameworks/kanban/scripts"
TEMPLATES_DIR = REPO_ROOT / "packages/frameworks/kanban/templates"
STRUCTURE_TEMPLATE = TEMPLATES_DIR / "KANBAN_STRUCTURE_TEMPLATE.md"


def _load_install_module():
    sys.path.insert(0, str(SCRIPTS_DIR))
    spec = importlib.util.spec_from_file_location("install_kanban_framework", INSTALL_SCRIPT)
    module = importlib.util.module_from_spec(spec)
    assert spec is not None and spec.loader is not None
    spec.loader.exec_module(module)
    return module


def test_structure_template_exists_in_package():
    """T1: KANBAN_STRUCTURE_TEMPLATE.md ships in package templates/."""
    assert STRUCTURE_TEMPLATE.is_file()


def test_resolve_structure_template_points_at_canonical_file():
    """T1b: resolver returns shipped template path."""
    mod = _load_install_module()
    resolved = mod.resolve_structure_template(TEMPLATES_DIR)
    assert resolved == STRUCTURE_TEMPLATE
    assert resolved.is_file()


@pytest.fixture
def empty_project(tmp_path: Path) -> Path:
    (tmp_path / ".git").mkdir()
    return tmp_path


def test_fresh_install_creates_structure_doc_and_success(empty_project: Path) -> None:
    """T2/T3: no missing-structure warning; Final status SUCCESS."""
    kanban_rel = "docs/project-management/kanban"
    cmd = [
        sys.executable,
        str(INSTALL_SCRIPT),
        "--mode",
        "fresh",
        "--kanban-path",
        kanban_rel,
        "--force",
    ]
    env = {**dict(subprocess.os.environ), "PYTHONPATH": str(SCRIPTS_DIR)}
    result = subprocess.run(
        cmd,
        cwd=empty_project,
        capture_output=True,
        text=True,
        env=env,
        timeout=180,
    )
    combined = result.stdout + result.stderr
    assert "Structure template not found" not in combined
    assert (empty_project / kanban_rel / "kanban-structure.md").is_file()
    assert "Final status: SUCCESS" in combined, combined
    assert result.returncode == 0, combined


def test_fresh_dry_run_mentions_structure_template(empty_project: Path) -> None:
    """T2 dry-run: structure path resolved in dry-run output."""
    cmd = [
        sys.executable,
        str(INSTALL_SCRIPT),
        "--mode",
        "fresh",
        "--dry-run",
        "--kanban-path",
        "docs/project-management/kanban",
    ]
    env = {**dict(subprocess.os.environ), "PYTHONPATH": str(SCRIPTS_DIR)}
    result = subprocess.run(
        cmd,
        cwd=empty_project,
        capture_output=True,
        text=True,
        env=env,
        timeout=120,
    )
    combined = result.stdout + result.stderr
    assert "KANBAN_STRUCTURE_TEMPLATE.md" in combined
    assert "Structure template not found" not in combined
    assert "Final status: SUCCESS" in combined

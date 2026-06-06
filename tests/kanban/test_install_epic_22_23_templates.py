"""BR-079 / E06:S09:T08: Epic 22/23 template resolution on fresh install."""

from __future__ import annotations

import importlib.util
import subprocess
import sys
from pathlib import Path

import pytest

REPO_ROOT = Path(__file__).resolve().parents[2]
MIGRATE_SCRIPT = REPO_ROOT / "packages/frameworks/kanban/scripts/migrate_structure.py"
INSTALL_SCRIPT = REPO_ROOT / "packages/frameworks/kanban/scripts/install_kanban_framework.py"
SCRIPTS_DIR = REPO_ROOT / "packages/frameworks/kanban/scripts"

PLACEHOLDER_SNIPPET = "template not found"


def _template_path_logged(combined: str, epic_num: int) -> bool:
    """Package templates may use legacy Epic-NN/ layout on disk (Linux CI)."""
    sn = f"{epic_num:02d}"
    return any(
        needle in combined
        for needle in (
            f"epic-{sn}/epic-{sn}.md",
            f"epic-{sn}.md",
            f"Epic-{sn}/Epic-{sn}.md",
            f"Epic-{sn}.md",
        )
    )


def _load_migrate_module():
    sys.path.insert(0, str(SCRIPTS_DIR))
    spec = importlib.util.spec_from_file_location("migrate_structure", MIGRATE_SCRIPT)
    module = importlib.util.module_from_spec(spec)
    assert spec is not None and spec.loader is not None
    spec.loader.exec_module(module)
    return module


def test_epic_22_23_templates_exist_in_package():
    """T1: Epic 22/23 templates resolve via directory layout."""
    mod = _load_migrate_module()
    migrator = mod.KanbanStructureMigrator(
        analysis_report={"semantic_matches": []},
        kanban_path=Path("/tmp/unused"),
        mode="fresh",
    )
    t22 = migrator._get_epic_template_file(22)
    t23 = migrator._get_epic_template_file(23)
    assert t22 is not None and t22.is_file()
    assert t23 is not None and t23.is_file()
    assert t22.name.lower() == "epic-22.md"
    assert t23.name.lower() == "epic-23.md"


@pytest.fixture
def empty_project(tmp_path: Path) -> Path:
    (tmp_path / ".git").mkdir()
    return tmp_path


def test_fresh_install_epic_22_23_not_placeholder(empty_project: Path) -> None:
    """T2/T3: fresh install uses real templates, not placeholder bodies."""
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
    assert result.returncode == 0, combined
    assert "Epic 22 created with placeholder" not in combined
    assert "Epic 23 created with placeholder" not in combined
    assert "installed from template" in combined
    e22 = empty_project / kanban_rel / "epics" / "epic-22" / "epic-22.md"
    e23 = empty_project / kanban_rel / "epics" / "epic-23" / "epic-23.md"
    assert e22.is_file() and e23.is_file()
    assert PLACEHOLDER_SNIPPET not in e22.read_text(encoding="utf-8").lower()
    assert PLACEHOLDER_SNIPPET not in e23.read_text(encoding="utf-8").lower()
    assert "Architecture Refactoring" in e22.read_text(encoding="utf-8")
    assert "Process Automation" in e23.read_text(encoding="utf-8")


def test_dry_run_logs_template_paths_for_epic_22_23(empty_project: Path) -> None:
    """T3: dry-run distinguishes template resolution for E22/E23."""
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
    assert _template_path_logged(combined, 22)
    assert _template_path_logged(combined, 23)
    assert "Would install Epic 22 from template" in combined
    assert "Would install Epic 23 from template" in combined

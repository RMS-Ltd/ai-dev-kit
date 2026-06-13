"""BR-079 / E06:S09:T08 + v3.2 (T27): epic template resolution on fresh install.

v3.3 Small-tier fresh install ships E01–E09 only. Legacy E22/E23 CI/CD epics
consolidate into E06 Process Automation & CI/CD; templates for 22/23 remain in
the package for brownfield/migration but are not installed on --mode fresh.
"""

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
            f"epic-{sn}-",
        )
    )


def _load_migrate_module():
    sys.path.insert(0, str(SCRIPTS_DIR))
    spec = importlib.util.spec_from_file_location("migrate_structure", MIGRATE_SCRIPT)
    module = importlib.util.module_from_spec(spec)
    assert spec is not None and spec.loader is not None
    spec.loader.exec_module(module)
    return module


def test_epic_22_23_templates_still_in_package_for_migration():
    """T1: Epic 22/23 directory templates remain for brownfield (not v3.2 fresh list)."""
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


def test_fresh_install_v33_e06_not_placeholder(empty_project: Path) -> None:
    """T2: v3.3 fresh installs E06 (ex-E22/E23) from template, not E22/E23 dirs."""
    kanban_rel = "docs/kanban"
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
    assert "installed from template" in combined
    e06 = empty_project / kanban_rel / "epics" / "epic-06" / "epic-06.md"
    assert e06.is_file()
    assert PLACEHOLDER_SNIPPET not in e06.read_text(encoding="utf-8").lower()
    assert "Process Automation" in e06.read_text(encoding="utf-8")
    assert not (empty_project / kanban_rel / "epics" / "epic-22").exists()
    assert not (empty_project / kanban_rel / "epics" / "epic-23").exists()


def test_dry_run_logs_v33_e06_template_not_e22_e23(empty_project: Path) -> None:
    """T3: v3.3 dry-run installs E06 template; E22/E23 not in fresh epic list."""
    cmd = [
        sys.executable,
        str(INSTALL_SCRIPT),
        "--mode",
        "fresh",
        "--dry-run",
        "--kanban-path",
        "docs/kanban",
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
    assert _template_path_logged(combined, 6)
    assert "Would install Epic 6 from template" in combined
    assert "Would install Epic 22 from template" not in combined
    assert "Would install Epic 23 from template" not in combined

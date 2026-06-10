"""BR-107 / E06:S09:T30: epic install stdout uses padded destination paths."""

from __future__ import annotations

import importlib.util
import re
import subprocess
import sys
from pathlib import Path

import pytest

REPO_ROOT = Path(__file__).resolve().parents[2]
MIGRATE_SCRIPT = REPO_ROOT / "packages/frameworks/kanban/scripts/migrate_structure.py"
INSTALL_SCRIPT = REPO_ROOT / "packages/frameworks/kanban/scripts/install_kanban_framework.py"
SCRIPTS_DIR = REPO_ROOT / "packages/frameworks/kanban/scripts"

# Single-digit epic segment after epic- (not epic-10, epic-11, …)
UNPADDED_DEST_RE = re.compile(r"epics/epic-(\d)(?:/|\.md)")


def _load_migrate_module():
    sys.path.insert(0, str(SCRIPTS_DIR))
    spec = importlib.util.spec_from_file_location("migrate_structure", MIGRATE_SCRIPT)
    module = importlib.util.module_from_spec(spec)
    assert spec is not None and spec.loader is not None
    spec.loader.exec_module(module)
    return module


@pytest.fixture
def empty_project(tmp_path: Path) -> Path:
    (tmp_path / ".git").mkdir()
    return tmp_path


def test_fresh_install_stdout_shows_padded_epic_destinations(empty_project: Path) -> None:
    """T1/T3: success lines use epics/epic-01/… and epics/epic-05/…"""
    cmd = [
        sys.executable,
        str(INSTALL_SCRIPT),
        "--mode",
        "fresh",
        "--kanban-path",
        "docs/kanban",
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
    assert "epics/epic-01/epic-01.md" in combined
    assert "epics/epic-05/epic-05.md" in combined
    assert UNPADDED_DEST_RE.search(combined) is None, (
        "stdout must not advertise unpadded epic destination paths"
    )


def test_dry_run_stdout_uses_padded_epic_destinations(empty_project: Path) -> None:
    """T4: dry-run destination hints use epic-07 not epic-7."""
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
    assert result.returncode == 0, combined
    assert "epics/epic-07/epic-07.md" in combined
    assert "epics/epic-7/" not in combined
    assert UNPADDED_DEST_RE.search(combined) is None


def test_migrator_success_log_uses_padded_path(tmp_path: Path, capsys, monkeypatch) -> None:
    """T6: unit-level capsys check on KanbanStructureMigrator epic install."""
    mod = _load_migrate_module()
    kanban_path = tmp_path / "docs" / "kanban"
    kanban_path.mkdir(parents=True)

    monkeypatch.setattr(
        "kanban_v32_catalog.fresh_epic_list",
        lambda: [1],
        raising=False,
    )
    migrator = mod.KanbanStructureMigrator(
        analysis_report={"semantic_matches": []},
        kanban_path=kanban_path,
        mode="fresh",
        dry_run=False,
    )
    migrator._install_canonical_epics()
    captured = capsys.readouterr()
    combined = captured.out + captured.err
    assert "epics/epic-01/epic-01.md" in combined
    assert UNPADDED_DEST_RE.search(combined) is None
    assert (kanban_path / "epics" / "epic-01" / "epic-01.md").is_file()

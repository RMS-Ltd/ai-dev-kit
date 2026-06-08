"""BR-080 / E06:S09:T09: fresh-mode validation on empty repos."""

from __future__ import annotations

import subprocess
import sys
from pathlib import Path

import pytest

REPO_ROOT = Path(__file__).resolve().parents[2]
INSTALL_SCRIPT = REPO_ROOT / "packages/frameworks/kanban/scripts/install_kanban_framework.py"
SCRIPTS_DIR = REPO_ROOT / "packages/frameworks/kanban/scripts"


@pytest.fixture
def empty_project(tmp_path: Path) -> Path:
    """Empty consumer project (no kanban tree)."""
    (tmp_path / ".git").mkdir()
    return tmp_path


def test_fresh_install_on_empty_repo_without_force(empty_project: Path) -> None:
    """T1: --mode fresh succeeds without --force when epics/ is absent."""
    kanban_rel = "docs/kanban"
    cmd = [
        sys.executable,
        str(INSTALL_SCRIPT),
        "--mode",
        "fresh",
        "--kanban-path",
        kanban_rel,
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
    assert "Required directory missing: epics" not in combined
    assert (empty_project / kanban_rel / "epics").is_dir()
    assert result.returncode == 0, combined


def test_migration_mode_still_requires_epics_dir(empty_project: Path) -> None:
    """T2: strict validation for non-fresh modes on empty tree."""
    sys.path.insert(0, str(SCRIPTS_DIR))
    from validate_installation import InstallationValidator  # noqa: E402

    kanban_path = empty_project / "docs/kanban"
    kanban_path.mkdir(parents=True)
    validator = InstallationValidator(kanban_path, empty_project)
    is_valid, errors, _warnings = validator.validate_all()
    assert not is_valid
    assert any("epics" in err for err in errors)
    assert any("--mode fresh" in err for err in errors)


def test_fresh_dry_run_allows_missing_epics_with_warning(empty_project: Path) -> None:
    """Dry-run fresh: relaxed skeleton check (warning, not error)."""
    sys.path.insert(0, str(SCRIPTS_DIR))
    from validate_installation import InstallationValidator  # noqa: E402

    kanban_path = empty_project / "docs/kanban"
    validator = InstallationValidator(kanban_path, empty_project)
    is_valid, errors, warnings = validator.validate_all(allow_missing_empty_skeleton=True)
    assert is_valid
    assert not any("Required directory missing: epics" in e for e in errors)
    assert any("epics/" in w for w in warnings)


def test_fresh_cli_stderr_has_no_raw_epics_error_without_hint(empty_project: Path) -> None:
    """T4: no bare epics missing error on fresh path."""
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
        timeout=60,
    )
    combined = result.stdout + result.stderr
    assert "Required directory missing: epics" not in combined

"""Tests for greenfield-install sync (FR-110 / E06:S09:T21)."""

from __future__ import annotations

import subprocess
import sys
from pathlib import Path

import pytest

REPO_ROOT = Path(__file__).resolve().parents[1]
SYNC_SCRIPT = REPO_ROOT / "scripts" / "sync_greenfield_install.py"
GREENFIELD_ROOT = REPO_ROOT / "greenfield-install"
ORCHESTRATOR = (
    GREENFIELD_ROOT
    / "packages/frameworks/workflow-mgt/scripts/install_greenfield_path.py"
)


@pytest.fixture(scope="module")
def synced_tree() -> Path:
    result = subprocess.run(
        [sys.executable, str(SYNC_SCRIPT)],
        cwd=REPO_ROOT,
        check=False,
        capture_output=True,
        text=True,
    )
    assert result.returncode == 0, result.stderr
    return GREENFIELD_ROOT


def test_sync_check_passes(synced_tree: Path) -> None:
    result = subprocess.run(
        [sys.executable, str(SYNC_SCRIPT), "--check"],
        cwd=REPO_ROOT,
        check=False,
        capture_output=True,
        text=True,
    )
    assert result.returncode == 0, result.stderr or result.stdout


def test_greenfield_layout(synced_tree: Path) -> None:
    assert (synced_tree / "README.md").is_file()
    assert (synced_tree / "FOOTPRINT.md").is_file()
    assert (synced_tree / "packages/frameworks/workflow-mgt").is_dir()
    assert (synced_tree / "packages/frameworks/kanban").is_dir()
    assert ORCHESTRATOR.is_file()


def test_installer_scripts_present(synced_tree: Path) -> None:
    rw = synced_tree / "packages/frameworks/workflow-mgt/scripts/install_release_workflow.py"
    kanban = synced_tree / "packages/frameworks/kanban/scripts/install_kanban_framework.py"
    assert rw.is_file()
    assert kanban.is_file()


def test_install_greenfield_dry_run(synced_tree: Path) -> None:
    result = subprocess.run(
        [
            sys.executable,
            str(ORCHESTRATOR),
            "--dry-run",
            "--non-interactive",
            "--project-root",
            str(synced_tree),
        ],
        cwd=synced_tree,
        check=False,
        capture_output=True,
        text=True,
    )
    assert result.returncode == 0, result.stderr or result.stdout
    assert "dry-run" in result.stdout.lower()


def test_footprint_under_budget(synced_tree: Path) -> None:
    total = sum(
        p.stat().st_size for p in synced_tree.rglob("*") if p.is_file()
    )
    # AC1: ≤50% of ~27 MiB full repo → ≤14 MiB
    assert total < 14 * 1024 * 1024, f"greenfield-install too large: {total} bytes"

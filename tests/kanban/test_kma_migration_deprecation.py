"""KMA migration deprecation gates (FR-127 / E06:S09:T31)."""

import subprocess
import sys
from pathlib import Path
from typing import Optional

REPO_ROOT = Path(__file__).resolve().parents[2]
INSTALLER = REPO_ROOT / "packages/frameworks/kanban/scripts/install_kanban_framework.py"
KMA_GUIDE = (
    "packages/frameworks/kanban/KB/Documentation/Developer_Docs/"
    "kanban-migration-agent-execution.md"
)


def _run_installer(*args: str, cwd: Optional[Path] = None) -> subprocess.CompletedProcess:
    cmd = [sys.executable, str(INSTALLER), *args]
    return subprocess.run(
        cmd,
        cwd=cwd or REPO_ROOT,
        capture_output=True,
        text=True,
        check=False,
    )


def test_migration_mode_gated_exit_2():
    result = _run_installer("--mode", "migration", "--kanban-path", "docs/kanban")
    assert result.returncode == 2
    assert "DEPRECATED" in result.stderr
    assert "KMA" in result.stderr or "Kanban Migration Agent" in result.stderr
    assert KMA_GUIDE.split("/")[-1] in result.stderr or "kanban-migration-agent" in result.stderr


def test_fresh_mode_not_gated_on_empty_tmp(tmp_path):
    kanban = tmp_path / "docs" / "kanban"
    kanban.mkdir(parents=True)
    result = _run_installer(
        "--mode",
        "fresh",
        "--kanban-path",
        str(kanban.relative_to(tmp_path)),
        "--dry-run",
        cwd=tmp_path,
    )
    assert result.returncode == 0, result.stderr
    assert "DEPRECATED" not in result.stderr


def test_install_contains_agentic_legacy_migration_section():
    install = (REPO_ROOT / "INSTALL_IN_YOUR_PROJECT.md").read_text(encoding="utf-8")
    assert "Agentic legacy migration" in install
    assert "KMA" in install

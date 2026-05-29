"""
Tests for Kanban installer logging (FR-047): env-based log path and KANBAN_* markers.

When AI_DEV_KIT_INSTALL_LOG_PATH is set, the installer appends phase-tagged lines
([KANBAN_MODE], [KANBAN_VALIDATE], [KANBAN_FRESH_INSTALL], etc.) to that file.
"""

import os
import subprocess
import sys
import tempfile
from pathlib import Path

import pytest


# Repo root (tests/kanban -> tests -> root)
REPO_ROOT = Path(__file__).resolve().parent.parent.parent
KANBAN_SCRIPT = REPO_ROOT / "packages" / "frameworks" / "kanban" / "scripts" / "install_kanban_framework.py"


@pytest.mark.skipif(not KANBAN_SCRIPT.exists(), reason="Kanban installer script not found")
class TestKanbanInstallerEnvLogPath:
    """Kanban installer writes KANBAN_* tagged lines to env-configured log file."""

    def test_fresh_dry_run_writes_kanban_markers_to_log_file(self):
        """Run installer --mode fresh --dry-run with AI_DEV_KIT_INSTALL_LOG_PATH set; assert log contains markers."""
        with tempfile.TemporaryDirectory() as tmp:
            temp_dir = Path(tmp)
            kanban_path = temp_dir / "docs" / "project-management" / "kanban"
            kanban_path.mkdir(parents=True)
            log_file = temp_dir / "install.log"
            log_file.write_text("")  # create empty

            env = {**os.environ, "AI_DEV_KIT_INSTALL_LOG_PATH": str(log_file)}
            result = subprocess.run(
                [sys.executable, str(KANBAN_SCRIPT), "--mode", "fresh", "--dry-run", "--force", "--kanban-path", str(kanban_path)],
                cwd=str(temp_dir),
                env=env,
                capture_output=True,
                text=True,
                timeout=60,
            )
            assert result.returncode == 0, f"stderr: {result.stderr}"

            content = log_file.read_text(encoding="utf-8")
            assert "[KANBAN_MODE]" in content, "log should contain KANBAN_MODE marker"
            assert "[KANBAN_VALIDATE]" in content, "log should contain KANBAN_VALIDATE marker"
            assert "[KANBAN_FRESH_INSTALL]" in content, "log should contain KANBAN_FRESH_INSTALL marker"

    def test_log_lines_use_iso_timestamp_and_level(self):
        """Log file lines have format [timestamp] [LEVEL] kanban.install message."""
        with tempfile.TemporaryDirectory() as tmp:
            temp_dir = Path(tmp)
            kanban_path = temp_dir / "docs" / "project-management" / "kanban"
            kanban_path.mkdir(parents=True)
            log_file = temp_dir / "install.log"
            log_file.write_text("")

            env = {**os.environ, "AI_DEV_KIT_INSTALL_LOG_PATH": str(log_file)}
            subprocess.run(
                [sys.executable, str(KANBAN_SCRIPT), "--mode", "fresh", "--dry-run", "--force", "--kanban-path", str(kanban_path)],
                cwd=str(temp_dir),
                env=env,
                capture_output=True,
                timeout=60,
            )

            content = log_file.read_text(encoding="utf-8")
            lines = [l.strip() for l in content.strip().split("\n") if l.strip()]
            assert lines
            for line in lines:
                assert line.startswith("["), "each log line should start with [timestamp]"
                assert "] [INFO]" in line or "] [ERROR]" in line or "] [WARNING]" in line
                assert "kanban.install" in line


@pytest.mark.skipif(not KANBAN_SCRIPT.exists(), reason="Kanban installer script not found")
class TestKanbanFreshInstallIntegration:
    """Integration: fresh install produces clean consumer board and KANBAN_* log entries."""

    def test_fresh_install_creates_clean_board_and_logs_phases(self):
        """Run installer --mode fresh (no dry-run); assert no Epic 24, canonical epics present, log has KANBAN_*."""
        with tempfile.TemporaryDirectory() as tmp:
            temp_dir = Path(tmp)
            kanban_path = temp_dir / "docs" / "project-management" / "kanban"
            kanban_path.mkdir(parents=True)
            log_file = temp_dir / "install.log"
            log_file.write_text("")

            env = {**os.environ, "AI_DEV_KIT_INSTALL_LOG_PATH": str(log_file)}
            result = subprocess.run(
                [sys.executable, str(KANBAN_SCRIPT), "--mode", "fresh", "--force", "--kanban-path", str(kanban_path)],
                cwd=str(temp_dir),
                env=env,
                capture_output=True,
                text=True,
                timeout=120,
            )
            assert result.returncode == 0, f"stderr: {result.stderr}"

            # Consumer board: no Epic 24 (BR-037), canonical epics only
            epics_dir = kanban_path / "epics"
            if epics_dir.exists():
                epic_dirs = [d.name for d in epics_dir.iterdir() if d.is_dir() and d.name.startswith("Epic-")]
                assert "Epic-24" not in epic_dirs, "consumer board must not contain Epic 24 (ai-dev-kit-specific)"
                canonical = {"Epic-1", "Epic-2", "Epic-3", "Epic-4", "Epic-5", "Epic-6", "Epic-7", "Epic-8", "Epic-10", "Epic-18", "Epic-22", "Epic-23"}
                found = set(epic_dirs) & canonical
                assert len(found) >= 1, "canonical epics should be installed"

            # Board skeleton at repo root
            board_file = kanban_path / "kanban-board.md"
            assert board_file.exists()
            board_content = board_file.read_text(encoding="utf-8")
            # Post-fix invariant: consumer boards must NOT claim to be "AI Dev Kit – Kanban Board"
            assert "AI Dev Kit – Kanban Board" not in board_content

            # Log contains phase markers
            content = log_file.read_text(encoding="utf-8")
            assert "[KANBAN_FRESH_INSTALL]" in content

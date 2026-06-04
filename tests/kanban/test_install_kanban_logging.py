"""
Tests for Kanban installer logging (FR-047): env-based log path and KANBAN_* markers.

When AI_DEV_KIT_INSTALL_LOG_PATH is set, the installer appends phase-tagged lines
([KANBAN_MODE], [KANBAN_VALIDATE], [KANBAN_FRESH_INSTALL], etc.) to that file.

BR-081 / E06:S09:T10: no datetime.utcnow() in installer; DeprecationWarning guard.
"""

import os
import re
import subprocess
import sys
import tempfile
from pathlib import Path

import pytest


# Repo root (tests/kanban -> tests -> root)
REPO_ROOT = Path(__file__).resolve().parent.parent.parent
KANBAN_SCRIPT = REPO_ROOT / "packages" / "frameworks" / "kanban" / "scripts" / "install_kanban_framework.py"


@pytest.mark.skipif(not KANBAN_SCRIPT.exists(), reason="Kanban installer script not found")
class TestInstallNoUtcnowDeprecation:
    """BR-081: installer must not use deprecated datetime.utcnow()."""

    def test_installer_source_has_no_utcnow(self):
        content = KANBAN_SCRIPT.read_text(encoding="utf-8")
        assert "utcnow" not in content

    def test_fresh_dry_run_no_deprecation_warning_as_error(self):
        with tempfile.TemporaryDirectory() as tmp:
            temp_dir = Path(tmp)
            kanban_path = temp_dir / "docs" / "project-management" / "kanban"
            kanban_path.mkdir(parents=True)
            env = {
                **os.environ,
                "PYTHONWARNINGS": "error::DeprecationWarning",
            }
            result = subprocess.run(
                [
                    sys.executable,
                    str(KANBAN_SCRIPT),
                    "--mode",
                    "fresh",
                    "--dry-run",
                    "--force",
                    "--kanban-path",
                    str(kanban_path),
                ],
                cwd=str(temp_dir),
                env=env,
                capture_output=True,
                text=True,
                timeout=60,
            )
            assert result.returncode == 0, result.stderr + result.stdout


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
            iso_ts = re.compile(
                r"^\[\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z\] \[(INFO|ERROR|WARNING)\] kanban\.install "
            )
            for line in lines:
                assert line.startswith("["), "each log line should start with [timestamp]"
                assert "] [INFO]" in line or "] [ERROR]" in line or "] [WARNING]" in line
                assert "kanban.install" in line
                assert iso_ts.match(line), f"log line should use ISO-Z UTC timestamp: {line!r}"


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

            # Consumer board: no Epic 24 (BR-037), canonical epics only (lowercase epic-* dirs)
            epics_dir = kanban_path / "epics"
            if epics_dir.exists():
                epic_dirs = [
                    d.name
                    for d in epics_dir.iterdir()
                    if d.is_dir() and d.name.lower().startswith("epic-")
                ]
                assert "Epic-24" not in epic_dirs and "epic-24" not in epic_dirs, (
                    "consumer board must not contain Epic 24 (ai-dev-kit-specific)"
                )
                canonical = {
                    "epic-01", "epic-02", "epic-03", "epic-04", "epic-05",
                    "epic-06", "epic-07", "epic-08", "epic-10", "epic-18",
                    "epic-22", "epic-23",
                }
                found = set(epic_dirs) & canonical
                assert len(found) >= 1, "canonical epics should be installed"

            # Board skeleton at repo root (fresh install uses kboard.md)
            board_file = kanban_path / "kboard.md"
            assert board_file.exists()
            board_content = board_file.read_text(encoding="utf-8")
            # Post-fix invariant: consumer boards must NOT claim to be "AI Dev Kit – Kanban Board"
            assert "AI Dev Kit – Kanban Board" not in board_content

            # Log contains phase markers
            content = log_file.read_text(encoding="utf-8")
            assert "[KANBAN_FRESH_INSTALL]" in content

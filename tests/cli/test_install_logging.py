"""
Unit tests for CLI install logging (FR-047).

Test design (from apply-test-install-learnings plan):
- Per-run log file is created when InstallCommand.execute() is invoked with logging enabled.
- Log lines include timestamp, level, and install.main / install.framework contexts.
- Log rotation honours install_logging.keep by retaining only the N newest files.
- --no-install-log prevents log file creation.
- Redaction masks GITHUB_TOKEN=, password=, Bearer in log output.
"""

import argparse
import json
import os
import re
from pathlib import Path

import pytest

from cli.commands.install import InstallCommand
from cli.config import Config
from cli.logging import close_install_logger, create_install_logger


class TestInstallLoggingEnabled:
    """When logging is enabled, a per-run log file is created with expected format."""

    def test_log_file_created_under_project_root(self, temp_config_file: Path):
        """Execute install with logging enabled (dry-run); assert one log file under project logs dir."""
        project_root = temp_config_file.parent
        log_dir = project_root / "logs" / "ai-dev-kit" / "install"
        original_cwd = os.getcwd()
        try:
            os.chdir(project_root)
            args = argparse.Namespace(
                frameworks=["kanban"],
                backend=None,
                path=None,
                dry_run=True,
                log_path=None,
                no_install_log=False,
            )
            command = InstallCommand(args)
            command.execute()
            assert log_dir.exists()
            logs = list(log_dir.glob("install-*.log"))
            assert len(logs) >= 1
            content = logs[0].read_text(encoding="utf-8")
            assert "install.main" in content
            assert "ai-dev-kit install started in" in content
            assert "Dry run" in content or "dry run" in content.lower()
        finally:
            os.chdir(original_cwd)

    def test_log_lines_have_timestamp_level_context(self, temp_config_file: Path):
        """Log file lines match format [ISO8601] [LEVEL] [context] message."""
        project_root = temp_config_file.parent
        log_dir = project_root / "logs" / "ai-dev-kit" / "install"
        original_cwd = os.getcwd()
        try:
            os.chdir(project_root)
            args = argparse.Namespace(
                frameworks=["kanban"],
                backend=None,
                path=None,
                dry_run=True,
                log_path=None,
                no_install_log=False,
            )
            command = InstallCommand(args)
            command.execute()
            logs = list(log_dir.glob("install-*.log"))
            assert len(logs) >= 1
            content = logs[0].read_text(encoding="utf-8")
            # At least one line like [2026-03-04T...Z] [INFO] [install.main] ...
            line_pattern = re.compile(r"\[\d{4}-\d{2}-\d{2}T[\d:]+\w\]\s*\[(INFO|ERROR|WARNING)\]\s*\[[\w.]+\]\s+.+")
            lines = [l.strip() for l in content.strip().split("\n") if l.strip()]
            assert lines, "log file should not be empty"
            for line in lines:
                assert line_pattern.match(line), f"log line should match format: {line}"
        finally:
            os.chdir(original_cwd)


class TestInstallLoggingDisabled:
    """When --no-install-log is set, no log file is created."""

    def test_no_log_file_when_no_install_log(self, temp_config_file: Path):
        """Execute install with --no-install-log; assert no log file under default log dir."""
        project_root = temp_config_file.parent
        log_dir = project_root / "logs" / "ai-dev-kit" / "install"
        original_cwd = os.getcwd()
        try:
            os.chdir(project_root)
            args = argparse.Namespace(
                frameworks=["kanban"],
                backend=None,
                path=None,
                dry_run=True,
                log_path=None,
                no_install_log=True,
            )
            command = InstallCommand(args)
            command.execute()
            # Log dir may not exist, or exist but empty
            if log_dir.exists():
                logs = list(log_dir.glob("install-*.log"))
                assert len(logs) == 0
        finally:
            os.chdir(original_cwd)


class TestInstallLogRotation:
    """Log rotation keeps only the N newest files when install_logging.keep is set (runs on success path)."""

    def test_rotation_keeps_only_keep_newest(self, temp_project_dir: Path):
        """Create two old log files, run install with keep=2 and mock backend so success path runs; assert 2 files remain."""
        config_content = """version: "1.0.0"
default_backend: "git-submodule"
frameworks: {}
install_logging:
  enabled: true
  path: "logs/ai-dev-kit/install"
  keep: 2
"""
        (temp_project_dir / ".ai-dev-kit.yaml").write_text(config_content)
        log_dir = temp_project_dir / "logs" / "ai-dev-kit" / "install"
        log_dir.mkdir(parents=True, exist_ok=True)
        (log_dir / "install-20200101-000000.log").write_text("old1\n")
        (log_dir / "install-20200101-000001.log").write_text("old2\n")
        original_cwd = os.getcwd()
        try:
            os.chdir(temp_project_dir)
            from unittest.mock import patch, MagicMock
            mock_backend = MagicMock()
            mock_backend.install.return_value = True
            with patch("cli.commands.install.get_backend", return_value=MagicMock(return_value=mock_backend)):
                with patch("cli.commands.install.select_backend", return_value="git-submodule"):
                    args = argparse.Namespace(
                        frameworks=["kanban"],
                        backend=None,
                        path=None,
                        dry_run=False,
                        log_path=None,
                        no_install_log=False,
                    )
                    command = InstallCommand(args)
                    command.execute()
            logs = sorted(log_dir.glob("install-*.log"))
            assert len(logs) == 2, "rotation should retain only keep=2 newest files"
            newest_name = logs[-1].name
            assert newest_name.startswith("install-202") or newest_name.startswith("install-203")
        finally:
            os.chdir(original_cwd)


class TestInstallLoggingJsonFormat:
    """When install_logging.format=json, logs are written as JSON lines with expected keys."""

    def test_json_log_lines_have_expected_structure(self, temp_project_dir: Path):
        """Execute install with format=json; assert log lines are valid JSON with core fields."""
        config_content = """version: "1.0.0"
default_backend: "git-submodule"
frameworks: {}
install_logging:
  enabled: true
  path: "logs/ai-dev-kit/install"
  format: json
"""
        (temp_project_dir / ".ai-dev-kit.yaml").write_text(config_content)
        log_dir = temp_project_dir / "logs" / "ai-dev-kit" / "install"
        original_cwd = os.getcwd()
        try:
            os.chdir(temp_project_dir)
            args = argparse.Namespace(
                frameworks=["kanban"],
                backend=None,
                path=None,
                dry_run=True,
                log_path=None,
                no_install_log=False,
            )
            command = InstallCommand(args)
            command.execute()
            assert log_dir.exists()
            logs = sorted(log_dir.glob("install-*.log"))
            assert logs, "expected at least one JSON log file"
            content = logs[-1].read_text(encoding="utf-8")
            lines = [l for l in content.strip().split("\n") if l.strip()]
            assert lines, "JSON log file should not be empty"

            saw_header = False
            for line in lines:
                entry = json.loads(line)
                assert "timestamp_utc" in entry
                assert "level" in entry
                assert "context" in entry
                assert "message" in entry
                assert "install_run_id" in entry
                if (
                    entry["context"] == "install.main"
                    and "ai-dev-kit install started in" in entry["message"]
                ):
                    saw_header = True
            assert saw_header, "expected an install.main header entry in JSON log"
        finally:
            os.chdir(original_cwd)

    def test_json_log_lines_include_event_contract_and_correlation(self, temp_project_dir: Path):
        """JSON logs include event_contract triad and step correlation fields."""
        config_content = """version: "1.0.0"
default_backend: "git-submodule"
frameworks: {}
install_logging:
  enabled: true
  path: "logs/ai-dev-kit/install"
  format: json
"""
        (temp_project_dir / ".ai-dev-kit.yaml").write_text(config_content)
        log_dir = temp_project_dir / "logs" / "ai-dev-kit" / "install"
        original_cwd = os.getcwd()
        try:
            os.chdir(temp_project_dir)
            args = argparse.Namespace(
                frameworks=["kanban"],
                backend=None,
                path=None,
                dry_run=True,
                log_path=None,
                no_install_log=False,
            )
            command = InstallCommand(args)
            command.execute()
            logs = sorted(log_dir.glob("install-*.log"))
            assert logs, "expected at least one JSON log file"
            entries = [
                json.loads(line)
                for line in logs[-1].read_text(encoding="utf-8").splitlines()
                if line.strip()
            ]
            assert entries, "expected JSON log entries"
            for entry in entries:
                assert "install_run_id" in entry
                assert "step_id" in entry
                assert "event_contract" in entry
                contract = entry["event_contract"]
                assert "intent" in contract
                assert "action" in contract
                assert "result" in contract
        finally:
            os.chdir(original_cwd)

    def test_strict_event_contract_rejects_invalid_event_payload(self, temp_project_dir: Path):
        """When strict_event_contract=true, malformed event payload should raise ValueError."""
        config_content = """version: "1.0.0"
default_backend: "git-submodule"
frameworks: {}
install_logging:
  enabled: true
  path: "logs/ai-dev-kit/install"
  format: json
  strict_event_contract: true
"""
        config_path = temp_project_dir / ".ai-dev-kit.yaml"
        config_path.write_text(config_content)
        config = Config(config_path)
        args = argparse.Namespace(log_path=None, no_install_log=False)
        log, log_dir, _log_file, fh = create_install_logger(temp_project_dir, config, args)
        try:
            with pytest.raises(ValueError, match="event_contract.intent.summary is required"):
                log(
                    "INFO",
                    "install.main",
                    "bad event",
                    event={
                        "intent": {},
                        "action": {"summary": "x"},
                        "result": {"status": "ok", "details": "x"},
                    },
                )
        finally:
            close_install_logger(fh, log_dir, config)


class TestInstallLogRedaction:
    """Sensitive patterns are redacted in log output (via cli.utils.redact)."""

    def test_redact_masks_github_token(self):
        """redact() replaces GITHUB_TOKEN= with GITHUB_TOKEN=*** (pattern masked)."""
        from cli.utils import redact
        out = redact("url?GITHUB_TOKEN=secret")
        assert "GITHUB_TOKEN=***" in out
        assert "GITHUB_TOKEN=secret" not in out

    def test_redact_masks_password_and_bearer(self):
        """redact() masks password=, PASSWORD=, Bearer ."""
        from cli.utils import redact
        assert "password=***" in redact("login password=xyz")
        assert "PASSWORD=***" in redact("env PASSWORD=secret")
        assert "Bearer ***" in redact("Authorization: Bearer tok")

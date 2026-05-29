"""
Tests for the 'ai-dev-kit logs install-history' command.
"""

import argparse
import json
import os
from pathlib import Path

from cli.commands.logs import LogsCommand


class TestInstallHistory:
    """Summarises recent install runs from text and JSON logs."""

    def test_history_handles_text_and_json_logs(self, temp_project_dir: Path):
        logs_dir = temp_project_dir / "logs" / "ai-dev-kit" / "install"
        logs_dir.mkdir(parents=True, exist_ok=True)

        # Old text log
        text_log = logs_dir / "install-20250101-000000.log"
        text_log.write_text(
            "[2025-01-01T00:00:00Z] [INFO] [install.main] ai-dev-kit install started in /tmp/project\n"
            "[2025-01-01T00:00:01Z] [INFO] [install.framework] Installing kanban@latest to /tmp/project/frameworks/kanban\n"
            "[2025-01-01T00:00:02Z] [INFO] [install.framework] Using source https://example.com backend git-submodule\n"
            "[2025-01-01T00:00:03Z] [INFO] [install.main] Successfully installed 1 framework(s)\n",
            encoding="utf-8",
        )

        # Newer JSON log
        json_log = logs_dir / "install-20260101-000000.log"
        entries = [
            {
                "timestamp_utc": "2026-01-01T00:00:00Z",
                "level": "INFO",
                "context": "install.main",
                "message": "ai-dev-kit install started in /tmp/project",
                "install_run_id": "abc",
            },
            {
                "timestamp_utc": "2026-01-01T00:00:01Z",
                "level": "INFO",
                "context": "install.framework",
                "message": "Installing workflow-mgmt@2.0.0 to /tmp/project/frameworks/workflow-mgmt",
                "install_run_id": "abc",
            },
            {
                "timestamp_utc": "2026-01-01T00:00:02Z",
                "level": "INFO",
                "context": "install.framework",
                "message": "Using source https://example.com backend git-submodule",
                "install_run_id": "abc",
            },
            {
                "timestamp_utc": "2026-01-01T00:00:03Z",
                "level": "INFO",
                "context": "install.main",
                "message": "Successfully installed 1 framework(s)",
                "install_run_id": "abc",
            },
        ]
        json_log.write_text("\n".join(json.dumps(e) for e in entries), encoding="utf-8")

        original_cwd = os.getcwd()
        try:
            os.chdir(temp_project_dir)
            args = argparse.Namespace(
                logs_command="install-history",
                limit=5,
            )
            command = LogsCommand(args)
            rc = command.execute()
            assert rc == 0
        finally:
            os.chdir(original_cwd)


"""
Unit tests for CLI remove command (and uninstall alias).

Covers FR-008 AC-1..AC-5 for E2:S06:T01.
"""

import argparse
import os
import shutil
from pathlib import Path
from unittest.mock import patch, MagicMock

import pytest

from cli.commands.remove import RemoveCommand
from cli.config import Config


class TestRemoveCommandDryRun:
    """T3: Dry-run mode previews removal without making changes."""

    def test_dry_run_returns_zero_and_leaves_files(self, temp_project_dir: Path):
        """Dry run must return 0 and not modify filesystem or config."""
        # Set up a fake framework
        fw_path = temp_project_dir / "frameworks" / "workflow-mgmt"
        fw_path.mkdir(parents=True)
        (fw_path / "file.txt").write_text("hello")

        config_file = temp_project_dir / ".ai-dev-kit.yaml"
        config_file.write_text("""version: "1.0.0"
default_backend: "git-submodule"
frameworks:
  workflow-mgmt:
    backend: git-submodule
    path: frameworks/workflow-mgmt
""")

        args = argparse.Namespace(
            framework="workflow-mgmt",
            keep_files=False,
            force=False,
            recovery=False,
            dry_run=True,
        )
        cmd = RemoveCommand(args)

        original_cwd = os.getcwd()
        try:
            os.chdir(temp_project_dir)
            result = cmd.execute()
        finally:
            os.chdir(original_cwd)

        assert result == 0
        assert fw_path.exists(), "Dry-run must not delete files"
        config = Config(config_file)
        assert "workflow-mgmt" in config.get_frameworks()


class TestRemoveCommandForce:
    """T4: Force mode bypasses confirmation; without it the command exits safely."""

    def test_without_force_returns_one(self, temp_project_dir: Path):
        """Without --force the command must refuse to proceed and return 1."""
        config_file = temp_project_dir / ".ai-dev-kit.yaml"
        config_file.write_text("""version: "1.0.0"
frameworks:
  workflow-mgmt:
    backend: git-submodule
    path: frameworks/workflow-mgmt
""")

        args = argparse.Namespace(
            framework="workflow-mgmt",
            keep_files=False,
            force=False,
            recovery=False,
            dry_run=False,
        )
        cmd = RemoveCommand(args)

        original_cwd = os.getcwd()
        try:
            os.chdir(temp_project_dir)
            result = cmd.execute()
        finally:
            os.chdir(original_cwd)

        assert result == 1

    @patch("cli.commands.remove.select_backend")
    @patch("cli.commands.remove.get_backend")
    def test_with_force_removes_framework(
        self, mock_get_backend, mock_select_backend, temp_project_dir: Path
    ):
        """With --force the command must proceed through removal."""
        fw_path = temp_project_dir / "frameworks" / "workflow-mgmt"
        fw_path.mkdir(parents=True)
        (fw_path / "file.txt").write_text("hello")

        config_file = temp_project_dir / ".ai-dev-kit.yaml"
        config_file.write_text("""version: "1.0.0"
frameworks:
  workflow-mgmt:
    backend: git-submodule
    path: frameworks/workflow-mgmt
""")

        mock_select_backend.return_value = "git-submodule"
        mock_backend_instance = MagicMock()
        mock_backend_instance.remove.return_value = True
        mock_get_backend.return_value = lambda: mock_backend_instance

        args = argparse.Namespace(
            framework="workflow-mgmt",
            keep_files=False,
            force=True,
            recovery=False,
            dry_run=False,
        )
        cmd = RemoveCommand(args)

        original_cwd = os.getcwd()
        try:
            os.chdir(temp_project_dir)
            result = cmd.execute()
        finally:
            os.chdir(original_cwd)

        assert result == 0
        mock_select_backend.assert_called_once()
        call_kwargs = mock_select_backend.call_args[1]
        assert call_kwargs.get("preferred") == "git-submodule"
        assert call_kwargs.get("auto_detect") is True
        assert isinstance(call_kwargs.get("project_root"), Path)
        mock_get_backend.assert_called_once_with("git-submodule")
        mock_backend_instance.remove.assert_called_once()
        remove_kwargs = mock_backend_instance.remove.call_args[1]
        assert remove_kwargs.get("framework") == "workflow-mgmt"
        assert remove_kwargs.get("keep_files") is False
        assert isinstance(remove_kwargs.get("path"), Path)
        assert not fw_path.exists(), "Framework files should be removed"
        config = Config(config_file)
        assert "workflow-mgmt" not in config.get_frameworks()


class TestRemoveCommandBackup:
    """T6: Removal flow creates a timestamped backup."""

    @patch("cli.commands.remove.select_backend")
    @patch("cli.commands.remove.get_backend")
    def test_backup_created_before_removal(
        self, mock_get_backend, mock_select_backend, temp_project_dir: Path
    ):
        """A timestamped backup directory must be created containing framework files and config."""
        fw_path = temp_project_dir / "frameworks" / "workflow-mgmt"
        fw_path.mkdir(parents=True)
        (fw_path / "file.txt").write_text("hello")

        config_file = temp_project_dir / ".ai-dev-kit.yaml"
        config_file.write_text("""version: "1.0.0"
frameworks:
  workflow-mgmt:
    backend: git-submodule
    path: frameworks/workflow-mgmt
""")

        mock_select_backend.return_value = "git-submodule"
        mock_backend_instance = MagicMock()
        mock_backend_instance.remove.return_value = True
        mock_get_backend.return_value = lambda: mock_backend_instance

        args = argparse.Namespace(
            framework="workflow-mgmt",
            keep_files=False,
            force=True,
            recovery=False,
            dry_run=False,
        )
        cmd = RemoveCommand(args)

        original_cwd = os.getcwd()
        try:
            os.chdir(temp_project_dir)
            result = cmd.execute()
        finally:
            os.chdir(original_cwd)

        assert result == 0
        # Find backup directory
        backups = list(temp_project_dir.glob(".backup-workflow-mgmt-*"))
        assert len(backups) == 1, "Expected exactly one backup directory"
        backup_dir = backups[0]
        assert (backup_dir / "workflow-mgmt" / "file.txt").exists()
        assert (backup_dir / ".ai-dev-kit.yaml").exists()


class TestRemoveCommandDependencies:
    """T8: Dependency validation warns and blocks removal unless --force."""

    def test_dependency_check_blocks_without_force(self, temp_project_dir: Path):
        """If another framework depends on the target, removal without --force must return 1."""
        config_file = temp_project_dir / ".ai-dev-kit.yaml"
        config_file.write_text("""version: "1.0.0"
frameworks:
  workflow-mgmt:
    backend: git-submodule
    path: frameworks/workflow-mgmt
  kanban:
    backend: git-submodule
    path: frameworks/kanban
    depends_on:
      - workflow-mgmt
""")
        fw_path = temp_project_dir / "frameworks" / "workflow-mgmt"
        fw_path.mkdir(parents=True)

        args = argparse.Namespace(
            framework="workflow-mgmt",
            keep_files=False,
            force=False,
            recovery=False,
            dry_run=False,
        )
        cmd = RemoveCommand(args)

        original_cwd = os.getcwd()
        try:
            os.chdir(temp_project_dir)
            result = cmd.execute()
        finally:
            os.chdir(original_cwd)

        assert result == 1
        config = Config(config_file)
        assert "workflow-mgmt" in config.get_frameworks()

    @patch("cli.commands.remove.select_backend")
    @patch("cli.commands.remove.get_backend")
    def test_dependency_check_overridden_with_force(
        self, mock_get_backend, mock_select_backend, temp_project_dir: Path
    ):
        """With --force, dependency warning is bypassed and removal proceeds."""
        config_file = temp_project_dir / ".ai-dev-kit.yaml"
        config_file.write_text("""version: "1.0.0"
frameworks:
  workflow-mgmt:
    backend: git-submodule
    path: frameworks/workflow-mgmt
  kanban:
    backend: git-submodule
    path: frameworks/kanban
    depends_on:
      - workflow-mgmt
""")
        fw_path = temp_project_dir / "frameworks" / "workflow-mgmt"
        fw_path.mkdir(parents=True)

        mock_select_backend.return_value = "git-submodule"
        mock_backend_instance = MagicMock()
        mock_backend_instance.remove.return_value = True
        mock_get_backend.return_value = lambda: mock_backend_instance

        args = argparse.Namespace(
            framework="workflow-mgmt",
            keep_files=False,
            force=True,
            recovery=False,
            dry_run=False,
        )
        cmd = RemoveCommand(args)

        original_cwd = os.getcwd()
        try:
            os.chdir(temp_project_dir)
            result = cmd.execute()
        finally:
            os.chdir(original_cwd)

        assert result == 0
        config = Config(config_file)
        assert "workflow-mgmt" not in config.get_frameworks()


class TestRemoveCommandRecovery:
    """T5: Recovery mode detects and cleans up failed/partial installations."""

    def test_recovery_detects_incomplete_installation(self, temp_project_dir: Path):
        """Recovery mode must detect a dir with very few files and clean it up."""
        fw_path = temp_project_dir / "frameworks" / "workflow-mgmt"
        fw_path.mkdir(parents=True)
        (fw_path / "partial.txt").write_text("incomplete")

        config_file = temp_project_dir / ".ai-dev-kit.yaml"
        config_file.write_text("""version: "1.0.0"
frameworks:
  workflow-mgmt:
    backend: git-submodule
    path: frameworks/workflow-mgmt
""")

        args = argparse.Namespace(
            framework="workflow-mgmt",
            keep_files=False,
            force=True,
            recovery=True,
            dry_run=False,
        )
        cmd = RemoveCommand(args)

        original_cwd = os.getcwd()
        try:
            os.chdir(temp_project_dir)
            result = cmd.execute()
        finally:
            os.chdir(original_cwd)

        assert result == 0
        assert not fw_path.exists()
        config = Config(config_file)
        assert "workflow-mgmt" not in config.get_frameworks()

    def test_recovery_falls_through_when_no_issues(self, temp_project_dir: Path):
        """If installation looks complete, recovery should fall through to normal removal."""
        fw_path = temp_project_dir / "frameworks" / "workflow-mgmt"
        fw_path.mkdir(parents=True)
        for i in range(6):
            (fw_path / f"file{i}.txt").write_text("data")

        config_file = temp_project_dir / ".ai-dev-kit.yaml"
        config_file.write_text("""version: "1.0.0"
frameworks:
  workflow-mgmt:
    backend: git-submodule
    path: frameworks/workflow-mgmt
""")

        args = argparse.Namespace(
            framework="workflow-mgmt",
            keep_files=False,
            force=True,
            recovery=True,
            dry_run=False,
        )
        cmd = RemoveCommand(args)

        original_cwd = os.getcwd()
        try:
            os.chdir(temp_project_dir)
            result = cmd.execute()
        finally:
            os.chdir(original_cwd)

        # Falls through to _handle_removal, which attempts backend removal.
        # Without mocked backend, it will warn and continue with manual cleanup.
        assert result == 0
        assert not fw_path.exists()


class TestRemoveCommandConfigCleanup:
    """T7: After removal the framework entry is gone from config."""

    @patch("cli.commands.remove.select_backend")
    @patch("cli.commands.remove.get_backend")
    def test_config_entry_removed(
        self, mock_get_backend, mock_select_backend, temp_project_dir: Path
    ):
        """Config must no longer contain the removed framework."""
        fw_path = temp_project_dir / "frameworks" / "workflow-mgmt"
        fw_path.mkdir(parents=True)
        (fw_path / "file.txt").write_text("hello")

        config_file = temp_project_dir / ".ai-dev-kit.yaml"
        config_file.write_text("""version: "1.0.0"
frameworks:
  workflow-mgmt:
    backend: git-submodule
    path: frameworks/workflow-mgmt
""")

        mock_select_backend.return_value = "git-submodule"
        mock_backend_instance = MagicMock()
        mock_backend_instance.remove.return_value = True
        mock_get_backend.return_value = lambda: mock_backend_instance

        args = argparse.Namespace(
            framework="workflow-mgmt",
            keep_files=False,
            force=True,
            recovery=False,
            dry_run=False,
        )
        cmd = RemoveCommand(args)

        original_cwd = os.getcwd()
        try:
            os.chdir(temp_project_dir)
            result = cmd.execute()
        finally:
            os.chdir(original_cwd)

        assert result == 0
        config = Config(config_file)
        assert "workflow-mgmt" not in config.get_frameworks()


class TestUninstallAlias:
    """T9: 'uninstall' routes to RemoveCommand."""

    def test_uninstall_alias_registered(self):
        """The main command registry must contain 'uninstall' pointing to RemoveCommand."""
        from cli.main import _COMMANDS
        from cli.commands.remove import RemoveCommand

        assert "uninstall" in _COMMANDS
        assert _COMMANDS["uninstall"] is RemoveCommand

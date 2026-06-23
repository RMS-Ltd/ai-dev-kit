import argparse
from pathlib import Path
from unittest.mock import patch

from cli.commands.update import UpdateCommand, parse_framework_version


def test_parse_framework_version_handles_explicit_version():
    assert parse_framework_version("kanban@1.2.3") == ("kanban", "1.2.3")


def test_parse_framework_version_defaults_to_none():
    assert parse_framework_version("kanban") == ("kanban", None)


@patch("cli.commands.update.get_project_root", return_value=None)
def test_update_command_requires_project_root(_mock_root):
    cmd = UpdateCommand(argparse.Namespace(framework=None, all=False, check=False, dry_run=False))
    assert cmd.execute() == 1


@patch("cli.commands.update.get_project_root")
@patch("cli.commands.update.Config")
def test_update_command_requires_target_or_all(mock_config, mock_root, tmp_path: Path):
    mock_root.return_value = tmp_path
    mock_config.return_value.get_frameworks.return_value = {"kanban": {"version": "1.0.0"}}
    cmd = UpdateCommand(argparse.Namespace(framework=None, all=False, check=False, dry_run=False))
    assert cmd.execute() == 1


@patch("cli.commands.update.get_project_root")
@patch("cli.commands.update.Config")
def test_update_command_rejects_all_and_framework(mock_config, mock_root, tmp_path: Path):
    mock_root.return_value = tmp_path
    mock_config.return_value.get_frameworks.return_value = {"kanban": {"version": "1.0.0"}}
    cmd = UpdateCommand(argparse.Namespace(framework="kanban", all=True, check=False, dry_run=False))
    assert cmd.execute() == 1


@patch("cli.commands.update.get_project_root")
@patch("cli.commands.update.Config")
def test_update_command_all_with_no_installed_frameworks(mock_config, mock_root, tmp_path: Path):
    mock_root.return_value = tmp_path
    mock_config.return_value.get_frameworks.return_value = {}
    cmd = UpdateCommand(argparse.Namespace(framework=None, all=True, check=False, dry_run=False))
    assert cmd.execute() == 0


@patch("cli.commands.update.get_project_root")
@patch("cli.commands.update.Config")
def test_update_command_check_mode(mock_config, mock_root, tmp_path: Path):
    mock_root.return_value = tmp_path
    mock_config.return_value.get_frameworks.return_value = {"kanban": {"version": "1.0.0"}}
    cmd = UpdateCommand(argparse.Namespace(framework="kanban@1.2.3", all=False, check=True, dry_run=False))
    assert cmd.execute() == 0


@patch("cli.commands.update.get_project_root")
@patch("cli.commands.update.Config")
def test_update_command_dry_run_mode(mock_config, mock_root, tmp_path: Path):
    mock_root.return_value = tmp_path
    mock_config.return_value.get_frameworks.return_value = {"kanban": {"version": "1.0.0"}}
    cmd = UpdateCommand(argparse.Namespace(framework="kanban", all=False, check=False, dry_run=True))
    assert cmd.execute() == 0


@patch("cli.commands.update.get_project_root")
@patch("cli.commands.update.Config")
def test_update_command_not_implemented_path(mock_config, mock_root, tmp_path: Path):
    mock_root.return_value = tmp_path
    mock_config.return_value.get_frameworks.return_value = {"kanban": {"version": "1.0.0"}}
    cmd = UpdateCommand(argparse.Namespace(framework="kanban", all=False, check=False, dry_run=False))
    assert cmd.execute() == 1

import argparse
from pathlib import Path
from unittest.mock import patch

from cli.commands.check import CheckCommand


@patch("cli.commands.check.get_project_root", return_value=None)
def test_check_command_requires_project_root(_mock_root):
    cmd = CheckCommand(argparse.Namespace(framework=None, json=False))
    assert cmd.execute() == 1


@patch("cli.commands.check.get_project_root")
@patch("cli.commands.check.Config")
def test_check_command_handles_no_frameworks(mock_config, mock_root, tmp_path: Path):
    mock_root.return_value = tmp_path
    mock_config.return_value.get_frameworks.return_value = {}
    cmd = CheckCommand(argparse.Namespace(framework=None, json=False))
    assert cmd.execute() == 0


@patch("cli.commands.check.get_project_root")
@patch("cli.commands.check.Config")
def test_check_command_errors_for_missing_selected_framework(mock_config, mock_root, tmp_path: Path):
    mock_root.return_value = tmp_path
    mock_config.return_value.get_frameworks.return_value = {"kanban": {"version": "1.0.0"}}
    cmd = CheckCommand(argparse.Namespace(framework="workflow-mgt", json=False))
    assert cmd.execute() == 1


@patch("cli.commands.check.get_project_root")
@patch("cli.commands.check.Config")
def test_check_command_json_not_implemented(mock_config, mock_root, tmp_path: Path):
    mock_root.return_value = tmp_path
    mock_config.return_value.get_frameworks.return_value = {"kanban": {"version": "1.0.0"}}
    cmd = CheckCommand(argparse.Namespace(framework=None, json=True))
    assert cmd.execute() == 1


@patch("cli.commands.check.get_project_root")
@patch("cli.commands.check.Config")
def test_check_command_human_output_success(mock_config, mock_root, tmp_path: Path):
    mock_root.return_value = tmp_path
    mock_config.return_value.get_frameworks.return_value = {
        "kanban": {"version": "1.0.0", "backend": "git-submodule"}
    }
    cmd = CheckCommand(argparse.Namespace(framework=None, json=False))
    assert cmd.execute() == 0

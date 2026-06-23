import argparse
import json
from pathlib import Path
from unittest.mock import patch

from cli.commands.status import StatusCommand


@patch("cli.commands.status.get_project_root", return_value=None)
def test_status_command_requires_project_root(_mock_root):
    cmd = StatusCommand(argparse.Namespace(framework=None, json=False))
    assert cmd.execute() == 1


@patch("cli.commands.status.print_session_banner")
@patch("cli.commands.status.get_project_root")
@patch("cli.commands.status.Config")
def test_status_command_no_frameworks_json_returns_zero(
    mock_config, mock_root, _mock_banner, tmp_path: Path, capsys
):
    mock_root.return_value = tmp_path
    mock_config.return_value.get_frameworks.return_value = {}
    cmd = StatusCommand(argparse.Namespace(framework=None, json=True))
    assert cmd.execute() == 0
    assert capsys.readouterr().out.strip() == "{}"


@patch("cli.commands.status.print_session_banner")
@patch("cli.commands.status.get_project_root")
@patch("cli.commands.status.Config")
def test_status_command_missing_framework_returns_error(mock_config, mock_root, _mock_banner, tmp_path: Path):
    mock_root.return_value = tmp_path
    mock_config.return_value.get_frameworks.return_value = {"kanban": {"version": "1.0.0"}}
    cmd = StatusCommand(argparse.Namespace(framework="workflow-mgt", json=False))
    assert cmd.execute() == 1


@patch("cli.commands.status.print_session_banner")
@patch("cli.commands.status.get_project_root")
@patch("cli.commands.status.Config")
def test_status_command_json_for_single_framework(
    mock_config, mock_root, _mock_banner, tmp_path: Path, capsys
):
    mock_root.return_value = tmp_path
    mock_config.return_value.get_frameworks.return_value = {
        "kanban": {"version": "1.2.3", "backend": "git-submodule", "path": "frameworks/kanban"}
    }
    cmd = StatusCommand(argparse.Namespace(framework="kanban", json=True))
    assert cmd.execute() == 0
    payload = json.loads(capsys.readouterr().out)
    assert payload["kanban"]["version"] == "1.2.3"


@patch("cli.commands.status.print_session_banner")
@patch("cli.commands.status.get_project_root")
@patch("cli.commands.status.Config")
def test_status_command_human_output_success(mock_config, mock_root, _mock_banner, tmp_path: Path):
    mock_root.return_value = tmp_path
    mock_config.return_value.get_frameworks.return_value = {
        "kanban": {"version": "1.2.3", "backend": "git-submodule", "path": "frameworks/kanban"},
        "workflow-mgt": {"version": "2.0.0", "backend": "git-subtree", "path": "frameworks/workflow-mgt"},
    }
    cmd = StatusCommand(argparse.Namespace(framework=None, json=False))
    assert cmd.execute() == 0

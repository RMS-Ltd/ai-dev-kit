import argparse
from pathlib import Path
from unittest.mock import patch

from cli.commands.config import ConfigCommand


def _run(command_args: argparse.Namespace, project_root: Path) -> int:
    with patch("cli.commands.config.get_project_root", return_value=project_root):
        return ConfigCommand(command_args).execute()


def test_config_get_missing_key_returns_error(temp_project_dir: Path):
    args = argparse.Namespace(config_action="get", key="missing.key", json=False)
    assert _run(args, temp_project_dir) == 1


def test_config_set_then_get_roundtrip(temp_project_dir: Path, capsys):
    set_args = argparse.Namespace(config_action="set", key="default_backend", value="pip")
    get_args = argparse.Namespace(config_action="get", key="default_backend", json=False)
    assert _run(set_args, temp_project_dir) == 0
    assert _run(get_args, temp_project_dir) == 0
    assert "pip" in capsys.readouterr().out


def test_config_list_json(temp_project_dir: Path, capsys):
    args = argparse.Namespace(config_action="list", json=True)
    assert _run(args, temp_project_dir) == 0
    out = capsys.readouterr().out
    assert "default_backend" in out


def test_config_reset_requires_force(temp_project_dir: Path):
    args = argparse.Namespace(config_action="reset", force=False)
    assert _run(args, temp_project_dir) == 1


def test_config_reset_with_force(temp_project_dir: Path):
    args = argparse.Namespace(config_action="reset", force=True)
    assert _run(args, temp_project_dir) == 0


def test_config_validate_with_fix(temp_project_dir: Path):
    cfg = temp_project_dir / ".ai-dev-kit.yaml"
    cfg.write_text('version: "1.0.0"\ndefault_backend: "invalid"\nframeworks: {}\n')
    args = argparse.Namespace(config_action="validate", fix=True)
    assert _run(args, temp_project_dir) == 1


def test_config_unknown_action_returns_error(temp_project_dir: Path):
    args = argparse.Namespace(config_action="unknown")
    assert _run(args, temp_project_dir) == 1

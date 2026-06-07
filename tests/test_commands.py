"""
Unit tests for CLI commands.
"""

import argparse
from pathlib import Path
from unittest.mock import patch

import pytest
import yaml

from cli.commands.config import ConfigCommand
from cli.commands.init import InitCommand
from cli.commands.list import ListCommand
from cli.config import Config
from cli.localisation import LOCALISATION_CONFIG_FILENAME
from cli.main import create_parser


def _init_args(**overrides):
    """Build argparse.Namespace for InitCommand with defaults for new flags."""
    defaults = {
        "force": False,
        "backend": "git-submodule",
        "locale": None,
        "language": None,
        "non_interactive": True,
    }
    defaults.update(overrides)
    return argparse.Namespace(**defaults)


def _read_localisation(path: Path) -> dict:
    with open(path, encoding="utf-8") as handle:
        return yaml.safe_load(handle)["localisation"]


class TestInitCommand:
    """Tests for the init command."""

    @patch("cli.commands.init.print_session_banner")
    def test_init_creates_config_file(self, _banner, temp_project_dir: Path):
        """Test that init creates .ai-dev-kit.yaml file."""
        command = InitCommand(_init_args())
        import os

        original_cwd = os.getcwd()
        try:
            os.chdir(temp_project_dir)
            result = command.execute()

            assert result == 0
            config_file = temp_project_dir / ".ai-dev-kit.yaml"
            assert config_file.exists()

            config = Config(config_file)
            assert config.get("version") == "1.0.0"
            assert config.get("default_backend") == "git-submodule"
        finally:
            os.chdir(original_cwd)

    @patch("cli.commands.init.print_session_banner")
    def test_init_with_custom_backend(self, _banner, temp_project_dir: Path):
        """Test init with custom backend."""
        command = InitCommand(_init_args(backend="git-subtree"))
        import os

        original_cwd = os.getcwd()
        try:
            os.chdir(temp_project_dir)
            result = command.execute()

            assert result == 0
            config = Config(temp_project_dir / ".ai-dev-kit.yaml")
            assert config.get("default_backend") == "git-subtree"
        finally:
            os.chdir(original_cwd)

    @patch("cli.commands.init.print_session_banner")
    def test_init_non_interactive_writes_en_gb(self, _banner, temp_project_dir: Path):
        """T1: non-interactive init writes ai-dev-kit-config.yaml with en-GB."""
        command = InitCommand(_init_args(non_interactive=True))
        import os

        original_cwd = os.getcwd()
        try:
            os.chdir(temp_project_dir)
            assert command.execute() == 0
            loc_path = temp_project_dir / LOCALISATION_CONFIG_FILENAME
            assert loc_path.exists()
            assert _read_localisation(loc_path) == {
                "language": "en-GB",
                "variant": "UK",
            }
        finally:
            os.chdir(original_cwd)

    @patch("cli.commands.init.print_session_banner")
    def test_init_language_en_us_flag(self, _banner, temp_project_dir: Path):
        """T2: --language en-US writes US variant without prompt."""
        command = InitCommand(_init_args(language="en-US", non_interactive=False))
        import os

        original_cwd = os.getcwd()
        try:
            os.chdir(temp_project_dir)
            assert command.execute() == 0
            assert _read_localisation(temp_project_dir / LOCALISATION_CONFIG_FILENAME) == {
                "language": "en-US",
                "variant": "US",
            }
        finally:
            os.chdir(original_cwd)

    @patch("cli.commands.init.print_session_banner")
    def test_init_interactive_choice_two(self, _banner, temp_project_dir: Path):
        """T3: interactive choice 2 writes en-US."""
        command = InitCommand(_init_args(non_interactive=False))
        import os

        original_cwd = os.getcwd()
        try:
            os.chdir(temp_project_dir)
            with patch("builtins.input", return_value="2"):
                assert command.execute() == 0
            assert _read_localisation(temp_project_dir / LOCALISATION_CONFIG_FILENAME) == {
                "language": "en-US",
                "variant": "US",
            }
        finally:
            os.chdir(original_cwd)

    @patch("cli.commands.init.print_session_banner")
    def test_init_interactive_default_en_gb(self, _banner, temp_project_dir: Path):
        """T4: interactive Enter/default writes en-GB."""
        command = InitCommand(_init_args(non_interactive=False))
        import os

        original_cwd = os.getcwd()
        try:
            os.chdir(temp_project_dir)
            with patch("builtins.input", return_value=""):
                assert command.execute() == 0
            assert _read_localisation(temp_project_dir / LOCALISATION_CONFIG_FILENAME) == {
                "language": "en-GB",
                "variant": "UK",
            }
        finally:
            os.chdir(original_cwd)

    @patch("cli.commands.init.print_session_banner")
    def test_init_existing_localisation_without_force_fails(
        self, _banner, temp_project_dir: Path
    ):
        """T5: existing ai-dev-kit-config.yaml without --force exits 1."""
        loc_path = temp_project_dir / LOCALISATION_CONFIG_FILENAME
        loc_path.write_text("localisation:\n  language: en-GB\n  variant: UK\n")
        command = InitCommand(_init_args())
        import os

        original_cwd = os.getcwd()
        try:
            os.chdir(temp_project_dir)
            assert command.execute() == 1
            assert not (temp_project_dir / ".ai-dev-kit.yaml").exists()
        finally:
            os.chdir(original_cwd)

    @patch("cli.commands.init.print_session_banner")
    def test_init_force_overwrites_localisation(self, _banner, temp_project_dir: Path):
        """T6: --force overwrites existing ai-dev-kit-config.yaml."""
        loc_path = temp_project_dir / LOCALISATION_CONFIG_FILENAME
        loc_path.write_text("localisation:\n  language: en-US\n  variant: US\n")
        command = InitCommand(_init_args(force=True, language="en-GB"))
        import os

        original_cwd = os.getcwd()
        try:
            os.chdir(temp_project_dir)
            assert command.execute() == 0
            assert _read_localisation(loc_path) == {
                "language": "en-GB",
                "variant": "UK",
            }
        finally:
            os.chdir(original_cwd)

    def test_init_invalid_language_rejected_by_argparse(self):
        """T8: invalid --language rejected at argparse level."""
        parser = create_parser()
        with pytest.raises(SystemExit):
            parser.parse_args(["init", "--language", "fr-FR"])

    @patch("cli.commands.init.print_session_banner")
    def test_init_locale_en_us_flag(self, _banner, temp_project_dir: Path):
        """S7: --locale en-US equivalent to --language en-US."""
        command = InitCommand(_init_args(locale="en-US"))
        import os

        original_cwd = os.getcwd()
        try:
            os.chdir(temp_project_dir)
            assert command.execute() == 0
            assert _read_localisation(temp_project_dir / LOCALISATION_CONFIG_FILENAME) == {
                "language": "en-US",
                "variant": "US",
            }
        finally:
            os.chdir(original_cwd)

    def test_init_locale_and_language_argparse(self):
        """S7: --locale fr accepted; --language still en-GB/en-US only."""
        parser = create_parser()
        args = parser.parse_args(["init", "--locale", "fr", "--non-interactive"])
        assert args.locale == "fr"


class TestConfigCommand:
    """Tests for the config command."""
    
    def test_config_get(self, temp_config_file: Path):
        """Test config get command."""
        args = argparse.Namespace(
            config_action="get",
            key="default_backend",
            json=False,
        )
        
        import os
        original_cwd = os.getcwd()
        try:
            os.chdir(temp_config_file.parent)
            command = ConfigCommand(args)
            result = command.execute()
            
            assert result == 0
        finally:
            os.chdir(original_cwd)
    
    def test_config_set(self, temp_config_file: Path):
        """Test config set command."""
        args = argparse.Namespace(
            config_action="set",
            key="default_backend",
            value="git-subtree",
        )
        
        import os
        original_cwd = os.getcwd()
        try:
            os.chdir(temp_config_file.parent)
            command = ConfigCommand(args)
            result = command.execute()
            
            assert result == 0
            
            config = Config(temp_config_file)
            assert config.get("default_backend") == "git-subtree"
        finally:
            os.chdir(original_cwd)
    
    def test_config_list(self, temp_config_file: Path):
        """Test config list command."""
        args = argparse.Namespace(
            config_action="list",
            json=False,
        )
        
        import os
        original_cwd = os.getcwd()
        try:
            os.chdir(temp_config_file.parent)
            command = ConfigCommand(args)
            result = command.execute()
            
            assert result == 0
        finally:
            os.chdir(original_cwd)
    
    def test_config_validate(self, temp_config_file: Path):
        """Test config validate command."""
        args = argparse.Namespace(
            config_action="validate",
            fix=False,
        )
        
        import os
        original_cwd = os.getcwd()
        try:
            os.chdir(temp_config_file.parent)
            command = ConfigCommand(args)
            result = command.execute()
            
            assert result == 0
        finally:
            os.chdir(original_cwd)

    def test_config_locale_show_default(self, temp_project_dir: Path):
        """Config locale show returns default when no file."""
        args = argparse.Namespace(
            config_action="locale",
            locale_action="show",
        )
        import os

        original_cwd = os.getcwd()
        try:
            os.chdir(temp_project_dir)
            assert ConfigCommand(args).execute() == 0
        finally:
            os.chdir(original_cwd)

    def test_config_locale_set_en_us(self, temp_project_dir: Path):
        """Config locale set writes ai-dev-kit-config.yaml."""
        args = argparse.Namespace(
            config_action="locale",
            locale_action="set",
            tag="en-US",
            interactive=False,
        )
        import os

        original_cwd = os.getcwd()
        try:
            os.chdir(temp_project_dir)
            assert ConfigCommand(args).execute() == 0
            assert _read_localisation(temp_project_dir / LOCALISATION_CONFIG_FILENAME) == {
                "language": "en-US",
                "variant": "US",
            }
        finally:
            os.chdir(original_cwd)


class TestListCommand:
    """Tests for the list command."""
    
    def test_list_command(self):
        """Test list command execution."""
        args = argparse.Namespace(
            versions=False,
            json=False,
        )
        command = ListCommand(args)
        
        result = command.execute()
        assert result in [0, 1]

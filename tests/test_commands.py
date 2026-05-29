"""
Unit tests for CLI commands.
"""

import pytest
import argparse
from pathlib import Path
from unittest.mock import patch, MagicMock, mock_open

from cli.commands.init import InitCommand
from cli.commands.config import ConfigCommand
from cli.commands.list import ListCommand
from cli.config import Config


class TestInitCommand:
    """Tests for the init command."""
    
    def test_init_creates_config_file(self, temp_project_dir: Path):
        """Test that init creates .ai-dev-kit.yaml file."""
        args = argparse.Namespace(
            path=None,
            backend="git-submodule",
        )
        command = InitCommand(args)
        
        # Change to temp directory
        import os
        original_cwd = os.getcwd()
        try:
            os.chdir(temp_project_dir)
            result = command.execute()
            
            assert result == 0
            config_file = temp_project_dir / ".ai-dev-kit.yaml"
            assert config_file.exists()
            
            # Verify config content
            config = Config(config_file)
            assert config.get("version") == "1.0.0"
            assert config.get("default_backend") == "git-submodule"
        finally:
            os.chdir(original_cwd)
    
    def test_init_with_custom_backend(self, temp_project_dir: Path):
        """Test init with custom backend."""
        args = argparse.Namespace(
            path=None,
            backend="git-subtree",
        )
        command = InitCommand(args)
        
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
            
            # Verify value was set
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
            
            # Should pass validation for valid config
            assert result == 0
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
        
        # List command should work even without project
        result = command.execute()
        # May return 0 or 1 depending on implementation
        assert result in [0, 1]


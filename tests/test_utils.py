"""
Unit tests for utility functions.
"""

import pytest
from pathlib import Path
from unittest.mock import patch

from cli.utils import (
    get_project_root,
    print_success,
    print_error,
    print_info,
    print_warning,
)


class TestProjectRoot:
    """Tests for project root detection."""
    
    def test_get_project_root_with_git(self, temp_project_dir: Path):
        """Test getting project root when .git exists."""
        import os
        original_cwd = os.getcwd()
        try:
            os.chdir(temp_project_dir)
            root = get_project_root()
            assert root == temp_project_dir
        finally:
            os.chdir(original_cwd)
    
    def test_get_project_root_with_config(self, temp_config_file: Path):
        """Test getting project root when .ai-dev-kit.yaml exists."""
        import os
        original_cwd = os.getcwd()
        try:
            os.chdir(temp_config_file.parent)
            root = get_project_root()
            assert root == temp_config_file.parent
        finally:
            os.chdir(original_cwd)


class TestPrintFunctions:
    """Tests for print utility functions."""
    
    def test_print_success(self, capsys):
        """Test print_success function."""
        print_success("Test success")
        captured = capsys.readouterr()
        assert "Test success" in captured.out or "Test success" in captured.err
    
    def test_print_error(self, capsys):
        """Test print_error function."""
        print_error("Test error")
        captured = capsys.readouterr()
        assert "Test error" in captured.out or "Test error" in captured.err
    
    def test_print_info(self, capsys):
        """Test print_info function."""
        print_info("Test info")
        captured = capsys.readouterr()
        assert "Test info" in captured.out or "Test info" in captured.err
    
    def test_print_warning(self, capsys):
        """Test print_warning function."""
        print_warning("Test warning")
        captured = capsys.readouterr()
        assert "Test warning" in captured.out or "Test warning" in captured.err


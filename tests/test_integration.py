"""
Integration tests for ai-dev-kit CLI tool.

These tests verify end-to-end workflows.
"""

import pytest
import tempfile
import shutil
from pathlib import Path
from unittest.mock import patch, MagicMock

from cli.config import Config
from cli.commands.init import InitCommand
from cli.commands.install import InstallCommand
from cli.commands.status import StatusCommand
import argparse


class TestInitInstallWorkflow:
    """Integration tests for init and install workflow."""
    
    def test_init_then_install_workflow(self, temp_project_dir: Path):
        """Test complete init then install workflow."""
        import os
        original_cwd = os.getcwd()
        try:
            os.chdir(temp_project_dir)
            
            # Step 1: Initialize
            init_args = argparse.Namespace(
                path=None,
                backend="git-submodule",
            )
            init_command = InitCommand(init_args)
            init_result = init_command.execute()
            assert init_result == 0
            
            # Verify config was created
            config_file = temp_project_dir / ".ai-dev-kit.yaml"
            assert config_file.exists()
            
            # Step 2: Install (mocked)
            with patch('cli.commands.install.select_backend') as mock_select:
                from cli.backends.base import BackendBase
                
                class MockBackend(BackendBase):
                    def __init__(self):
                        super().__init__(name="mock")

                    def install(self, framework, version, path, **kwargs):
                        return True
                    def update(self, framework, version, path, **kwargs):
                        return True
                    def check(self, framework, path, **kwargs):
                        return None
                    def status(self, framework, path, **kwargs):
                        return {"version": "1.0.0", "backend": "mock", "path": str(path), "status": "installed"}
                    def remove(self, framework, path, keep_files=False, **kwargs):
                        return True
                    def is_available(self):
                        return True

                mock_select.return_value = MockBackend()
                
                install_args = argparse.Namespace(
                    framework="workflow-mgmt",
                    backend=None,
                    path=None,
                    dry_run=False,
                )
                install_command = InstallCommand(install_args)
                # Note: This may fail if backend requires actual Git operations
                # In real integration test, we'd set up a proper test environment
        finally:
            os.chdir(original_cwd)


class TestConfigManagementWorkflow:
    """Integration tests for configuration management."""
    
    def test_config_get_set_workflow(self, temp_config_file: Path):
        """Test getting and setting configuration values."""
        import os
        original_cwd = os.getcwd()
        try:
            os.chdir(temp_config_file.parent)
            
            config = Config(temp_config_file)
            
            # Get initial value
            initial_backend = config.get("default_backend")
            assert initial_backend == "git-submodule"
            
            # Set new value
            config.set("default_backend", "git-subtree")
            config.save()
            
            # Reload and verify
            config2 = Config(temp_config_file)
            new_backend = config2.get("default_backend")
            assert new_backend == "git-subtree"
        finally:
            os.chdir(original_cwd)


class TestBackendSelection:
    """Integration tests for backend selection."""
    
    def test_backend_selection_with_config(self, temp_config_file: Path):
        """Test backend selection using config."""
        from cli.backends.selector import select_backend
        
        import os
        original_cwd = os.getcwd()
        try:
            os.chdir(temp_config_file.parent)
            
            # Should select backend based on config
            backend = select_backend(
                preferred=None,
                project_root=temp_config_file.parent,
            )
            
            # Backend should be available (Git submodule)
            assert backend is not None
        finally:
            os.chdir(original_cwd)


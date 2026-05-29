"""
Unit tests for backend implementations.
"""

import pytest
from pathlib import Path
from unittest.mock import patch, MagicMock

from cli.backends.base import BackendBase
from cli.backends.git_submodule import GitSubmoduleBackend
from cli.backends.git_subtree import GitSubtreeBackend
from cli.backends.package_manager import NpmBackend, PipBackend


class TestBackendBase:
    """Tests for BackendBase abstract class."""
    
    def test_backend_base_interface(self):
        """Test that BackendBase defines required interface."""
        # BackendBase should be abstract
        with pytest.raises(TypeError):
            BackendBase("test", "Test backend")


class TestGitSubmoduleBackend:
    """Tests for Git submodule backend."""
    
    def test_git_submodule_backend_initialization(self):
        """Test Git submodule backend initialization."""
        backend = GitSubmoduleBackend()
        assert backend.name == "git-submodule"
        assert backend.description == "Git submodule backend for framework dependencies"
    
    @patch('cli.backends.git_submodule.subprocess.run')
    def test_git_submodule_is_available(self, mock_run):
        """Test checking if Git submodule backend is available."""
        mock_run.return_value = MagicMock(returncode=0)
        backend = GitSubmoduleBackend()
        assert backend.is_available() is True
    
    @patch('cli.backends.git_submodule.subprocess.run')
    def test_git_submodule_is_not_available(self, mock_run):
        """Test when Git is not available."""
        mock_run.side_effect = FileNotFoundError()
        backend = GitSubmoduleBackend()
        assert backend.is_available() is False


class TestGitSubtreeBackend:
    """Tests for Git subtree backend."""
    
    def test_git_subtree_backend_initialization(self):
        """Test Git subtree backend initialization."""
        backend = GitSubtreeBackend()
        assert backend.name == "git-subtree"
        assert backend.description == "Git subtree backend for framework dependencies"
    
    @patch('cli.backends.git_subtree.subprocess.run')
    def test_git_subtree_is_available(self, mock_run):
        """Test checking if Git subtree backend is available."""
        mock_run.return_value = MagicMock(returncode=0)
        backend = GitSubtreeBackend()
        assert backend.is_available() is True


class TestPackageManagerBackend:
    """Tests for package manager backend."""

    def test_npm_backend_initialization(self):
        """Test npm backend initialization."""
        backend = NpmBackend()
        assert backend.name == "npm"
        assert "npm" in backend.description.lower()

    def test_pip_backend_initialization(self):
        """Test pip backend initialization."""
        backend = PipBackend()
        assert backend.name == "pip"
        assert "pip" in backend.description.lower()

    @patch('cli.backends.package_manager.subprocess.run')
    def test_npm_backend_is_available(self, mock_run):
        """Test checking if npm backend is available."""
        mock_run.return_value = MagicMock(returncode=0)
        backend = NpmBackend()
        assert backend.is_available() is True

    @patch('cli.backends.package_manager.subprocess.run')
    def test_pip_backend_is_available(self, mock_run):
        """Test checking if pip backend is available."""
        mock_run.return_value = MagicMock(returncode=0)
        backend = PipBackend()
        assert backend.is_available() is True


class TestGitSubmoduleBackendRemove:
    """T1: Git submodule backend remove() invokes correct subprocess commands."""

    @patch('cli.backends.git_submodule.subprocess.run')
    @patch('cli.backends.git_submodule.shutil.rmtree')
    def test_remove_calls_deinit_and_rm(self, mock_rmtree, mock_run, tmp_path: Path):
        """remove() must call git submodule deinit and git rm."""
        mock_run.return_value = MagicMock(returncode=0)
        backend = GitSubmoduleBackend()
        fw_path = tmp_path / "frameworks" / "workflow-mgmt"
        fw_path.mkdir(parents=True)
        result = backend.remove("workflow-mgmt", fw_path)
        assert result is True
        calls = [c[0][0] for c in mock_run.call_args_list]
        assert any("deinit" in str(c) for c in calls)
        mock_rmtree.assert_called_once()


class TestGitSubtreeBackendRemove:
    """T1: Git subtree backend remove() invokes correct subprocess commands."""

    @patch('cli.backends.git_subtree.subprocess.run')
    @patch('cli.backends.git_subtree.shutil.rmtree')
    def test_remove_calls_git_rm(self, mock_rmtree, mock_run, tmp_path: Path):
        """remove() must call git rm -r for the subtree prefix."""
        mock_run.return_value = MagicMock(returncode=0)
        backend = GitSubtreeBackend()
        fw_path = tmp_path / "frameworks" / "workflow-mgmt"
        fw_path.mkdir(parents=True)
        result = backend.remove("workflow-mgmt", fw_path)
        assert result is True
        calls = [c[0][0] for c in mock_run.call_args_list]
        assert any("rm" in str(c) and "-r" in str(c) for c in calls)
        mock_rmtree.assert_called_once()


class TestNpmBackendRemove:
    """T1: npm backend remove() invokes npm uninstall."""

    @patch('cli.backends.package_manager.subprocess.run')
    def test_remove_calls_npm_uninstall(self, mock_run):
        """remove() must call npm uninstall <package>."""
        mock_run.return_value = MagicMock(returncode=0)
        backend = NpmBackend()
        fw_path = Path("node_modules/ai-dev-kit-workflow-mgmt")
        result = backend.remove("workflow-mgmt", fw_path)
        assert result is True
        calls = [c[0][0] for c in mock_run.call_args_list]
        assert any("npm" in str(c) and "uninstall" in str(c) for c in calls)


class TestPipBackendRemove:
    """T1: pip backend remove() invokes pip uninstall -y."""

    @patch('cli.backends.package_manager.subprocess.run')
    def test_remove_calls_pip_uninstall(self, mock_run):
        """remove() must call pip uninstall -y <package>."""
        mock_run.return_value = MagicMock(returncode=0)
        backend = PipBackend()
        fw_path = Path(".venv/lib/ai-dev-kit-workflow-mgmt")
        result = backend.remove("workflow-mgmt", fw_path)
        assert result is True
        calls = [c[0][0] for c in mock_run.call_args_list]
        assert any("pip" in str(c) and "uninstall" in str(c) and "-y" in str(c) for c in calls)


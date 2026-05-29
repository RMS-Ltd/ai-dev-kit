"""
Pytest configuration and fixtures for ai-dev-kit CLI tests.
"""

import pytest
import tempfile
import shutil
from pathlib import Path
from typing import Generator


@pytest.fixture
def temp_project_dir() -> Generator[Path, None, None]:
    """
    Create a temporary project directory for testing.
    
    Yields:
        Path to temporary directory
    """
    temp_dir = tempfile.mkdtemp()
    project_path = Path(temp_dir)
    
    # Create a basic project structure
    (project_path / ".git").mkdir(exist_ok=True)
    
    yield project_path
    
    # Cleanup
    shutil.rmtree(temp_dir, ignore_errors=True)


@pytest.fixture
def temp_config_file(temp_project_dir: Path) -> Path:
    """
    Create a temporary .ai-dev-kit.yaml config file.
    
    Args:
        temp_project_dir: Temporary project directory
        
    Returns:
        Path to config file
    """
    config_file = temp_project_dir / ".ai-dev-kit.yaml"
    config_file.write_text("""version: "1.0.0"
default_backend: "git-submodule"
frameworks: {}
""")
    return config_file


@pytest.fixture
def mock_backend():
    """
    Create a mock backend for testing.
    
    Returns:
        Mock backend instance
    """
    from unittest.mock import MagicMock
    from cli.backends.base import BackendBase
    
    class MockBackend(BackendBase):
        def install(self, framework: str, version: str, path: Path, **kwargs) -> bool:
            return True
        
        def update(self, framework: str, version: str, path: Path, **kwargs) -> bool:
            return True
        
        def check(self, framework: str, path: Path, **kwargs):
            return None
        
        def status(self, framework: str, path: Path, **kwargs):
            return {
                "version": "1.0.0",
                "backend": "mock",
                "path": str(path),
                "status": "installed",
            }
        
        def remove(self, framework: str, path: Path, keep_files: bool = False, **kwargs) -> bool:
            return True
        
        def is_available(self) -> bool:
            return True
    
    return MockBackend()


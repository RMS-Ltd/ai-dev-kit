"""
Unit tests for configuration management.
"""

import pytest
import tempfile
import shutil
from pathlib import Path
from cli.config import Config


class TestConfig:
    """Tests for Config class."""
    
    def test_config_creation(self):
        """Test creating a new config."""
        with tempfile.TemporaryDirectory() as temp_dir:
            config_path = Path(temp_dir) / ".ai-dev-kit.yaml"
            config = Config(config_path)
            
            assert config.get("version") == "1.0.0"
            assert config.get("default_backend") == "git-submodule"
            assert config.get("frameworks") == {}
    
    def test_config_load_existing(self, temp_config_file: Path):
        """Test loading existing config file."""
        config = Config(temp_config_file)
        
        assert config.get("version") == "1.0.0"
        assert config.get("default_backend") == "git-submodule"
    
    def test_config_get_set(self, temp_config_file: Path):
        """Test getting and setting config values."""
        config = Config(temp_config_file)
        
        # Set value
        config.set("default_backend", "git-subtree")
        config.save()
        
        # Get value
        value = config.get("default_backend")
        assert value == "git-subtree"
    
    def test_config_nested_get_set(self, temp_config_file: Path):
        """Test getting and setting nested config values."""
        config = Config(temp_config_file)
        
        # Set nested value
        config.set("frameworks.workflow-mgmt.version", "2.0.0")
        config.save()
        
        # Get nested value
        value = config.get("frameworks.workflow-mgmt.version")
        assert value == "2.0.0"
    
    def test_config_add_framework(self, temp_config_file: Path):
        """Test adding a framework to config."""
        config = Config(temp_config_file)
        
        config.add_framework(
            name="workflow-mgmt",
            version="2.0.0",
            backend="git-submodule",
            path="frameworks/workflow-mgmt",
        )
        config.save()
        
        frameworks = config.get_frameworks()
        assert "workflow-mgmt" in frameworks
        assert frameworks["workflow-mgmt"]["version"] == "2.0.0"
    
    def test_config_remove_framework(self, temp_config_file: Path):
        """Test removing a framework from config."""
        config = Config(temp_config_file)
        
        # Add framework first
        config.add_framework(
            name="workflow-mgmt",
            version="2.0.0",
            backend="git-submodule",
            path="frameworks/workflow-mgmt",
        )
        config.save()
        
        # Remove framework
        config.remove_framework("workflow-mgmt")
        config.save()
        
        frameworks = config.get_frameworks()
        assert "workflow-mgmt" not in frameworks
    
    def test_config_validate(self, temp_config_file: Path):
        """Test config validation."""
        config = Config(temp_config_file)
        
        errors = config.validate()
        # Valid config should have no errors
        assert len(errors) == 0
    
    def test_config_validate_invalid_backend(self, temp_config_file: Path):
        """Test config validation with invalid backend."""
        config = Config(temp_config_file)
        config.set("default_backend", "invalid-backend")
        config.save()
        
        errors = config.validate()
        # Should have validation errors
        assert len(errors) > 0


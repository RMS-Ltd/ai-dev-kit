#!/usr/bin/env python3
"""
Tests for VersionValidator

Part of: Epic 8, Story 2 - Additional Validators
Task: E8:S02:T02 - Build framework-specific validators
"""

import sys
import tempfile
from pathlib import Path

# Add validators directory to path for imports
validators_path = Path(__file__).parent.parent
if str(validators_path) not in sys.path:
    sys.path.insert(0, str(validators_path))

# Import from modules (validators_path is in sys.path)
try:
    from framework.version_validator import VersionValidator
    from base import ValidatorConfig, ValidationStatus
except ImportError:
    # Fallback: try package import
    from validators.framework.version_validator import VersionValidator
    from validators.base import ValidatorConfig, ValidationStatus


def test_version_validator_valid_version():
    """Test VersionValidator with valid version file."""
    with tempfile.TemporaryDirectory() as tmpdir:
        version_file = Path(tmpdir) / "version.py"
        version_file.write_text("""VERSION_RC = 0
VERSION_EPIC = 5
VERSION_STORY = 3
VERSION_TASK = 1
VERSION_BUILD = 1
VERSION_STRING = "0.5.3.1+1"
""")
        
        config = ValidatorConfig(project_root=Path(tmpdir))
        validator = VersionValidator(config)
        result = validator.run(version_file=str(version_file))
        
        assert result.is_pass(), f"Validation should pass, but got: {[i.message for i in result.issues]}"


def test_version_validator_missing_component():
    """Test VersionValidator with missing version component."""
    with tempfile.TemporaryDirectory() as tmpdir:
        version_file = Path(tmpdir) / "version.py"
        version_file.write_text("""VERSION_RC = 0
VERSION_EPIC = 5
VERSION_STORY = 3
# VERSION_TASK missing
VERSION_BUILD = 1
VERSION_STRING = "0.5.3.1+1"
""")
        
        config = ValidatorConfig(project_root=Path(tmpdir))
        validator = VersionValidator(config)
        result = validator.run(version_file=str(version_file))
        
        assert result.is_fail(), "Validation should fail for missing component"
        assert any("missing required component: VERSION_TASK" in issue.message for issue in result.issues)


def test_version_validator_invalid_format():
    """Test VersionValidator with invalid version string format."""
    with tempfile.TemporaryDirectory() as tmpdir:
        version_file = Path(tmpdir) / "version.py"
        version_file.write_text("""VERSION_RC = 0
VERSION_EPIC = 5
VERSION_STORY = 3
VERSION_TASK = 1
VERSION_BUILD = 1
VERSION_STRING = "invalid-format"
""")
        
        config = ValidatorConfig(project_root=Path(tmpdir))
        validator = VersionValidator(config)
        result = validator.run(version_file=str(version_file))
        
        assert result.is_fail(), "Validation should fail for invalid format"
        assert any("VERSION_STRING format invalid" in issue.message for issue in result.issues)


if __name__ == "__main__":
    test_version_validator_valid_version()
    test_version_validator_missing_component()
    test_version_validator_invalid_format()
    print("✅ All tests passed!")


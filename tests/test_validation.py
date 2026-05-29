"""
Unit tests for validation functions.
"""

import pytest
from pathlib import Path
from cli.validation import (
    validate_framework_name,
    validate_framework_spec,
    validate_backend,
    validate_path,
    validate_version_string,
    is_valid_version,
    parse_framework_spec,
)
from cli.exceptions import InvalidInputError, FrameworkNotFoundError, VersionNotFoundError


class TestFrameworkValidation:
    """Tests for framework validation."""

    def test_validate_framework_name_valid(self):
        assert validate_framework_name("workflow-mgmt") == "workflow-mgmt"
        assert validate_framework_name("kanban") == "kanban"
        assert validate_framework_name("numbering-versioning") == "numbering-versioning"

    def test_validate_framework_name_invalid(self):
        with pytest.raises(InvalidInputError):
            validate_framework_name("")
        with pytest.raises(InvalidInputError):
            validate_framework_name("workflow mgmt")

    def test_validate_framework_name_not_in_registry(self):
        with pytest.raises(FrameworkNotFoundError):
            validate_framework_name("missing", available_frameworks=["kanban"])

    def test_validate_framework_spec(self):
        name, version = validate_framework_spec("workflow-mgmt")
        assert name == "workflow-mgmt"
        assert version is None

        name, version = validate_framework_spec("workflow-mgmt@2.0.0")
        assert name == "workflow-mgmt"
        assert version == "2.0.0"

    def test_parse_framework_spec_alias(self):
        assert parse_framework_spec("kanban@1.0.0") == ("kanban", "1.0.0")

    def test_validate_backend(self):
        assert validate_backend("git-submodule") == "git-submodule"
        assert validate_backend("git-subtree") == "git-subtree"
        assert validate_backend("npm") == "npm"
        assert validate_backend("pip") == "pip"
        with pytest.raises(InvalidInputError):
            validate_backend("invalid")

    def test_is_valid_version(self):
        assert is_valid_version("2.0.0") is True
        assert is_valid_version("1.0.0") is True
        assert is_valid_version("latest") is True
        assert is_valid_version("") is False
        assert is_valid_version("not-a-version") is False

    def test_validate_version_string(self):
        assert validate_version_string("2.0.0") == "2.0.0"
        assert validate_version_string("latest") == "latest"
        with pytest.raises(InvalidInputError):
            validate_version_string("")
        with pytest.raises(InvalidInputError):
            validate_version_string("not-a-version")

    def test_validate_version_string_not_found(self):
        with pytest.raises(VersionNotFoundError):
            validate_version_string(
                "9.9.9",
                framework_name="fw",
                available_versions=["1.0.0", "2.0.0"],
            )

    def test_validate_path(self):
        p = validate_path("/tmp", must_exist=False)
        assert isinstance(p, Path)
        with pytest.raises(InvalidInputError):
            validate_path("")

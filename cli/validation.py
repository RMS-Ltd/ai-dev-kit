"""
Validation utilities for the ai-dev-kit CLI tool.

Provides input validation functions for commands.
"""

import re
from typing import Tuple, Optional, List
from pathlib import Path

from cli.exceptions import InvalidInputError, FrameworkNotFoundError, VersionNotFoundError
from cli.utils import print_warning


def validate_framework_spec(spec: str) -> Tuple[str, Optional[str]]:
    """
    Validate and parse framework specification.
    
    Format: 'framework-name' or 'framework-name@version'
    
    Args:
        spec: Framework specification string
    
    Returns:
        Tuple of (framework_name, version)
    
    Raises:
        InvalidInputError: If specification is invalid
    """
    if not spec or not spec.strip():
        raise InvalidInputError(
            "framework specification",
            spec or "(empty)",
            "Format: 'framework-name' or 'framework-name@version'"
        )
    
    spec = spec.strip()
    
    # Check for @ separator
    if '@' in spec:
        parts = spec.split('@', 1)
        if len(parts) != 2:
            raise InvalidInputError(
                "framework specification",
                spec,
                "Format: 'framework-name@version' (only one @ allowed)"
            )
        framework_name, version = parts
        framework_name = framework_name.strip()
        version = version.strip()
        
        if not framework_name:
            raise InvalidInputError(
                "framework specification",
                spec,
                "Framework name cannot be empty"
            )
        if not version:
            raise InvalidInputError(
                "framework specification",
                spec,
                "Version cannot be empty when using @ separator"
            )
        
        # Validate version format
        if version != "latest" and not is_valid_version(version):
            raise InvalidInputError(
                "version",
                version,
                "Semantic version (e.g., '1.0.0') or 'latest'"
            )
        
        return framework_name, version
    else:
        # No version specified, use latest
        if not spec:
            raise InvalidInputError(
                "framework specification",
                spec,
                "Framework name cannot be empty"
            )
        return spec, None


def is_valid_version(version: str) -> bool:
    """
    Check if a version string is valid.
    
    Accepts semantic versions (e.g., '1.0.0', '2.1.3') or 'latest'.
    
    Args:
        version: Version string to validate
    
    Returns:
        True if version is valid, False otherwise
    """
    if version == "latest":
        return True
    
    # Semantic version pattern: MAJOR.MINOR.PATCH (with optional pre-release and build)
    pattern = r'^\d+\.\d+\.\d+(-[a-zA-Z0-9.-]+)?(\+[a-zA-Z0-9.-]+)?$'
    return bool(re.match(pattern, version))


def validate_backend(backend: str) -> str:
    """
    Validate backend name.
    
    Args:
        backend: Backend name to validate
    
    Returns:
        Validated backend name
    
    Raises:
        InvalidInputError: If backend is invalid
    """
    valid_backends = ["git-submodule", "git-subtree", "npm", "pip"]
    
    if backend not in valid_backends:
        raise InvalidInputError(
            "backend",
            backend,
            f"One of: {', '.join(valid_backends)}"
        )
    
    return backend


def validate_path(path: str, must_exist: bool = False, must_be_directory: bool = False) -> Path:
    """
    Validate a file or directory path.
    
    Args:
        path: Path string to validate
        must_exist: If True, path must exist
        must_be_directory: If True, path must be a directory
    
    Returns:
        Path object
    
    Raises:
        InvalidInputError: If path is invalid
    """
    if not path or not path.strip():
        raise InvalidInputError(
            "path",
            path or "(empty)",
            "Non-empty path string"
        )
    
    path_obj = Path(path)
    
    if must_exist and not path_obj.exists():
        raise InvalidInputError(
            "path",
            path,
            "Path must exist"
        )
    
    if must_be_directory:
        if must_exist and not path_obj.is_dir():
            raise InvalidInputError(
                "path",
                path,
                "Path must be a directory"
            )
        # If not must_exist, ensure parent exists for directory creation
        if not must_exist and path_obj.exists() and not path_obj.is_dir():
            raise InvalidInputError(
                "path",
                path,
                "Path exists but is not a directory"
            )
    
    return path_obj


def validate_framework_name(name: str, available_frameworks: Optional[List[str]] = None) -> str:
    """
    Validate framework name.
    
    Args:
        name: Framework name to validate
        available_frameworks: Optional list of available framework names
    
    Returns:
        Validated framework name
    
    Raises:
        FrameworkNotFoundError: If framework name is not found
        InvalidInputError: If framework name format is invalid
    """
    if not name or not name.strip():
        raise InvalidInputError(
            "framework name",
            name or "(empty)",
            "Non-empty framework name"
        )
    
    name = name.strip()
    
    # Basic format validation (alphanumeric, hyphens, underscores)
    if not re.match(r'^[a-zA-Z0-9_-]+$', name):
        raise InvalidInputError(
            "framework name",
            name,
            "Alphanumeric characters, hyphens, and underscores only"
        )
    
    # Check if framework exists (if available_frameworks provided)
    if available_frameworks and name not in available_frameworks:
        # Try to find similar names
        similar = [f for f in available_frameworks if name.lower() in f.lower() or f.lower() in name.lower()]
        raise FrameworkNotFoundError(name, similar if similar else available_frameworks)
    
    return name


def validate_version_string(version: str, framework_name: Optional[str] = None, available_versions: Optional[List[str]] = None) -> str:
    """
    Validate version string.
    
    Args:
        version: Version string to validate
        framework_name: Optional framework name for error messages
        available_versions: Optional list of available versions
    
    Returns:
        Validated version string
    
    Raises:
        VersionNotFoundError: If version is not found
        InvalidInputError: If version format is invalid
    """
    if not version or not version.strip():
        raise InvalidInputError(
            "version",
            version or "(empty)",
            "Non-empty version string"
        )
    
    version = version.strip()
    
    # Validate format
    if version != "latest" and not is_valid_version(version):
        raise InvalidInputError(
            "version",
            version,
            "Semantic version (e.g., '1.0.0') or 'latest'"
        )
    
    # Check if version exists (if available_versions provided)
    if available_versions and version != "latest" and version not in available_versions:
        # Find closest versions
        similar = [v for v in available_versions if version in v or v.startswith(version.split('.')[0])]
        raise VersionNotFoundError(
            framework_name or "framework",
            version,
            similar[:10] if similar else available_versions[:10]
        )
    
    return version


def parse_framework_spec(spec: str) -> Tuple[str, Optional[str]]:
    """
    Parse framework specification (alias for validate_framework_spec for backward compatibility).
    
    Args:
        spec: Framework specification string
    
    Returns:
        Tuple of (framework_name, version)
    
    Raises:
        InvalidInputError: If specification is invalid
    """
    return validate_framework_spec(spec)


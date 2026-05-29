"""
Backend implementations for framework dependency management.

This package contains backend implementations for different dependency management
systems (Git submodules, Git subtrees, package managers, etc.).
"""

# Import base classes and registry
from cli.backends.base import BackendBase
from cli.backends.registry import (
    BackendRegistry,
    get_registry,
    register_backend,
    get_backend,
)
from cli.backends.selector import (
    detect_project_type,
    select_backend,
    list_available_backends,
)

# Import backend implementations
from cli.backends.git_submodule import GitSubmoduleBackend
from cli.backends.git_subtree import GitSubtreeBackend
from cli.backends.package_manager import NpmBackend, PipBackend

# Register backends
register_backend("git-submodule", GitSubmoduleBackend)
register_backend("git-subtree", GitSubtreeBackend)
register_backend("npm", NpmBackend)
register_backend("pip", PipBackend)

__all__ = [
    "BackendBase",
    "BackendRegistry",
    "get_registry",
    "register_backend",
    "get_backend",
    "detect_project_type",
    "select_backend",
    "list_available_backends",
    "GitSubmoduleBackend",
    "GitSubtreeBackend",
    "NpmBackend",
    "PipBackend",
]


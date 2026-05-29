"""
Backend selection logic for choosing appropriate backends.
"""

from pathlib import Path
from typing import Optional, List
from cli.backends.registry import get_registry
from cli.utils import print_info, print_warning


def detect_project_type(project_root: Path) -> Optional[str]:
    """
    Detect project type to suggest appropriate backend.
    
    Args:
        project_root: Path to project root
    
    Returns:
        Suggested backend name, or None if unable to detect
    """
    # Check for package.json (Node.js/npm project)
    if (project_root / "package.json").exists():
        return "npm"
    
    # Check for requirements.txt or setup.py (Python/pip project)
    if (project_root / "requirements.txt").exists() or (project_root / "setup.py").exists():
        return "pip"
    
    # Check for .git directory (Git project - can use submodules/subtrees)
    if (project_root / ".git").exists():
        return "git-submodule"  # Default to submodule for Git projects
    
    # Default to git-submodule if Git is available
    return "git-submodule"


def select_backend(
    preferred: Optional[str] = None,
    project_root: Optional[Path] = None,
    auto_detect: bool = True,
) -> Optional[str]:
    """
    Select an appropriate backend for framework installation.
    
    Args:
        preferred: Preferred backend name (if specified)
        project_root: Path to project root (for auto-detection)
        auto_detect: Whether to auto-detect project type if preferred is None
    
    Returns:
        Selected backend name, or None if no suitable backend found
    """
    registry = get_registry()
    available_backends = registry.get_available_backends()
    
    # If preferred backend is specified, check if it's available
    if preferred:
        if preferred in available_backends:
            return preferred
        else:
            print_warning(f"Preferred backend '{preferred}' is not available.")
            print_info(f"Available backends: {', '.join(available_backends)}")
            # Fall through to auto-detection
    
    # Auto-detect if enabled and project root provided
    if auto_detect and project_root:
        detected = detect_project_type(project_root)
        if detected and detected in available_backends:
            print_info(f"Auto-detected backend: {detected}")
            return detected
    
    # Use default (first available backend, or git-submodule if available)
    if available_backends:
        default = "git-submodule" if "git-submodule" in available_backends else available_backends[0]
        if default != preferred:
            print_info(f"Using default backend: {default}")
        return default
    
    return None


def list_available_backends() -> List[str]:
    """
    List all available backends on the current system.
    
    Returns:
        List of available backend names
    """
    registry = get_registry()
    return registry.get_available_backends()


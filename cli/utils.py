"""
Utility functions for the ai-dev-kit CLI tool.
"""

import os
import sys
import traceback
from pathlib import Path
from typing import Optional

from cli.exceptions import AIDevKitError
from cli.localisation import locale_message


def color_enabled() -> bool:
    """Return True when CLI may emit emoji/ANSI (NO_COLOR unset per no-color.org)."""
    return os.environ.get("NO_COLOR") is None


def _status_label(
    project_root: Optional[Path],
    key: str,
    fallback: str,
) -> str:
    try:
        return locale_message(project_root, key)
    except (KeyError, ValueError, FileNotFoundError):
        return fallback


def _format_status(level: str, message: str, *, glyph: str) -> str:
    """Build status line with mandatory text label; optional glyph when color enabled."""
    label = f"{level}: {message}"
    if color_enabled():
        return f"{glyph} {label}"
    return label


def redact(message: str) -> str:
    """
    Redact obvious secrets from a message (e.g. for install logs).
    Replaces GITHUB_TOKEN=, password=, PASSWORD=, Bearer with ... suffix.
    """
    out = message
    for pattern in ("GITHUB_TOKEN=", "password=", "PASSWORD=", "Bearer "):
        if pattern in out:
            out = out.replace(pattern, f"{pattern}***")
    return out


def get_project_root() -> Optional[Path]:
    """
    Find the project root by looking for .ai-dev-kit.yaml or .git directory.

    Returns:
        Path to project root, or None if not found
    """
    current = Path.cwd()

    # Check current directory and parent directories
    for path in [current] + list(current.parents):
        if (path / ".ai-dev-kit.yaml").exists() or (path / ".git").exists():
            return path

    return None


def print_error(message: str, project_root: Optional[Path] = None) -> None:
    """Print an error message to stderr."""
    level = _status_label(project_root, "cli.status.error_label", "Error")
    print(_format_status(level, message, glyph="❌"), file=sys.stderr)


def print_success(message: str, project_root: Optional[Path] = None) -> None:
    """Print a success message to stdout."""
    level = _status_label(project_root, "cli.status.success_label", "Success")
    print(_format_status(level, message, glyph="✅"))


def print_warning(message: str, project_root: Optional[Path] = None) -> None:
    """Print a warning message to stderr."""
    level = _status_label(project_root, "cli.status.warning_label", "Warning")
    print(_format_status(level, message, glyph="⚠️"), file=sys.stderr)


def print_info(message: str, project_root: Optional[Path] = None) -> None:
    """Print an info message to stdout."""
    level = _status_label(project_root, "cli.status.info_label", "Info")
    print(_format_status(level, message, glyph="ℹ️"))


def handle_error(error: Exception, debug: bool = False) -> int:
    """
    Handle an error and return appropriate exit code.

    Args:
        error: Exception to handle
        debug: If True, print full traceback

    Returns:
        Exit code (0 for success, non-zero for failure)
    """
    root = get_project_root()
    if isinstance(error, AIDevKitError):
        print_error(str(error), project_root=root)
        return 1
    elif isinstance(error, KeyboardInterrupt):
        cancelled = locale_message(
            root,
            "cli.init.cancelled",
        ) if root else "Operation cancelled by user"
        print_error(cancelled, project_root=root)
        return 130
    else:
        unexpected = (
            locale_message(root, "cli.init.unexpected_error", {"error": str(error)})
            if root
            else f"Unexpected error: {str(error)}"
        )
        print_error(unexpected, project_root=root)
        if debug:
            traceback.print_exc()
        return 1

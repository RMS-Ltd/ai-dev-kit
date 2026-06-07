"""
Utility functions for the ai-dev-kit CLI tool.
"""

import os
import sys
import traceback
from pathlib import Path
from typing import Optional

from cli.exceptions import AIDevKitError


def color_enabled() -> bool:
    """Return True when CLI may emit emoji/ANSI (NO_COLOR unset per no-color.org)."""
    return os.environ.get("NO_COLOR") is None


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


def print_error(message: str) -> None:
    """Print an error message to stderr."""
    print(_format_status("Error", message, glyph="❌"), file=sys.stderr)


def print_success(message: str) -> None:
    """Print a success message to stdout."""
    print(_format_status("Success", message, glyph="✅"))


def print_warning(message: str) -> None:
    """Print a warning message to stderr."""
    print(_format_status("Warning", message, glyph="⚠️"), file=sys.stderr)


def print_info(message: str) -> None:
    """Print an info message to stdout."""
    print(_format_status("Info", message, glyph="ℹ️"))


def handle_error(error: Exception, debug: bool = False) -> int:
    """
    Handle an error and return appropriate exit code.

    Args:
        error: Exception to handle
        debug: If True, print full traceback

    Returns:
        Exit code (0 for success, non-zero for failure)
    """
    if isinstance(error, AIDevKitError):
        print_error(str(error))
        return 1
    elif isinstance(error, KeyboardInterrupt):
        print_error("\nOperation cancelled by user")
        return 130
    else:
        print_error(f"Unexpected error: {str(error)}")
        if debug:
            traceback.print_exc()
        return 1

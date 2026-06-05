#!/usr/bin/env python3
"""
Shared `rw-config.yaml` loader utilities for workflow-mgt scripts.

This centralizes parsing, missing-file behavior, and backward-compatible
return conventions so all validators/scripts derive identical config inputs.
"""

from __future__ import annotations

from pathlib import Path
from typing import Any, Dict, Optional

try:
    import yaml
except ImportError:  # pragma: no cover
    yaml = None


def load_rw_config_from_path(config_path: Optional[Path] = None) -> Optional[Dict[str, Any]]:
    """
    Load `rw-config.yaml` from an explicit path.

    Returns `None` when the file is missing, YAML isn't available, or parsing fails.
    """

    if config_path is None or yaml is None:
        return None
    if not config_path.exists():
        return None

    try:
        with open(config_path, "r", encoding="utf-8") as f:
            data = yaml.safe_load(f)
        return data if isinstance(data, dict) else None
    except Exception:
        return None


def load_rw_config(project_root: Optional[Path] = None) -> Optional[Dict[str, Any]]:
    """
    Load `rw-config.yaml` from a project root directory.

    If `project_root` is omitted, uses `Path.cwd()`.
    """

    root = project_root or Path.cwd()
    return load_rw_config_from_path(root / "rw-config.yaml")


def load_rw_config_or_empty(project_root: Optional[Path] = None) -> Dict[str, Any]:
    """Same as `load_rw_config`, but never returns None (missing => {})."""

    cfg = load_rw_config(project_root)
    return cfg if isinstance(cfg, dict) else {}


def require_rw_config(project_root: Optional[Path] = None) -> Dict[str, Any]:
    """Load rw-config.yaml or raise a clear error when missing/unreadable."""

    cfg = load_rw_config_or_empty(project_root)
    if not cfg:
        # Keep message actionable; many validators rely on this being present.
        raise FileNotFoundError(
            "rw-config.yaml not found or unreadable (expected at project root). "
            "Check `rw-config.yaml` path or pass correct `--config` where supported."
        )
    return cfg


def find_project_root(start: Optional[Path] = None, config_filename: str = "rw-config.yaml") -> Path:
    """
    Walk upwards from `start` (or cwd) until `rw-config.yaml` is found.

    Returns the best-effort last directory tried when the file is not found.
    """

    current = (start or Path.cwd()).resolve()
    for parent in [current, *current.parents]:
        if (parent / config_filename).exists():
            return parent
    return current


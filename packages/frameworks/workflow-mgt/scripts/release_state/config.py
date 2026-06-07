"""Release-state backend configuration (rw-config.yaml)."""

from __future__ import annotations

from pathlib import Path
from typing import Any, Dict

from rw_config_loader import find_project_root, load_rw_config_or_empty

_VALID_BACKENDS = frozenset({"legacy", "sqlite"})


def get_release_state_backend(project_root: Path | None = None) -> str:
    root = project_root or find_project_root(Path(__file__).parent)
    config: Dict[str, Any] = load_rw_config_or_empty(root)
    backend = str(config.get("release_state_backend", "legacy")).strip().lower()
    return backend if backend in _VALID_BACKENDS else "legacy"


def get_release_state_db_path(project_root: Path | None = None) -> Path:
    root = project_root or find_project_root(Path(__file__).parent)
    config: Dict[str, Any] = load_rw_config_or_empty(root)
    rel = config.get("release_state_db", ".adk/release-state.db")
    return (root / str(rel)).resolve()

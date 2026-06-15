"""Resolve kanban-completed ledger paths from rw-config.yaml."""

from __future__ import annotations

from pathlib import Path
from typing import Any, Dict, Tuple

import yaml


def find_project_root(start: Path | None = None) -> Path:
    current = (start or Path.cwd()).resolve()
    for candidate in [current, *current.parents]:
        if (candidate / "rw-config.yaml").is_file():
            return candidate
    return current


def load_rw_config(project_root: Path) -> Dict[str, Any]:
    path = project_root / "rw-config.yaml"
    if not path.is_file():
        return {}
    with path.open(encoding="utf-8") as fh:
        data = yaml.safe_load(fh) or {}
    return data if isinstance(data, dict) else {}


def ledger_paths(project_root: Path | None = None) -> Tuple[Path, Path]:
    root = project_root or find_project_root()
    cfg = load_rw_config(root)
    block = cfg.get("kanban_completed") or {}
    db_rel = block.get("db", ".adk/kanban-completed.db")
    pdf_rel = block.get("pdf", "docs/kanban/kanban-completed.pdf")
    return (root / db_rel).resolve(), (root / pdf_rel).resolve()

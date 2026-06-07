"""Load release_metadata_store paths from rw-config.yaml."""

from __future__ import annotations

from pathlib import Path
from typing import Any, Dict, Optional, Tuple

import sys

_SCRIPTS = Path(__file__).resolve().parent.parent
if str(_SCRIPTS) not in sys.path:
    sys.path.insert(0, str(_SCRIPTS))

from rw_config_loader import find_project_root, load_rw_config_or_empty  # noqa: E402

DEFAULT_STORE_PATH = ".data/adk-release-metadata.sqlite"
DEFAULT_SEMVER_FILE = "semver-registry.yaml"


def resolve_project_root(start: Optional[Path] = None) -> Path:
    return find_project_root(start or Path.cwd())


def get_store_config(
    project_root: Optional[Path] = None,
    rw_config: Optional[Dict[str, Any]] = None,
) -> Dict[str, Any]:
    root = project_root or resolve_project_root()
    cfg = rw_config if rw_config is not None else load_rw_config_or_empty(root)
    store_cfg = cfg.get("release_metadata_store") or {}
    ingest_cfg = cfg.get("ingest") or {}

    store_path = Path(store_cfg.get("path") or DEFAULT_STORE_PATH)
    if not store_path.is_absolute():
        store_path = root / store_path

    main_changelog = ingest_cfg.get("changelog_main") or cfg.get("main_changelog") or "CHANGELOG.md"
    archive_dir = ingest_cfg.get("changelog_archive_dir") or cfg.get("changelog_dir") or (
        "docs/changelog-and-release-notes/changelog-archive"
    )
    semver_file = ingest_cfg.get("semver_registry_file") or DEFAULT_SEMVER_FILE

    return {
        "project_root": root,
        "store_path": store_path,
        "semver_registry_path": root / semver_file,
        "changelog_main_path": root / main_changelog if not Path(main_changelog).is_absolute() else Path(main_changelog),
        "changelog_archive_dir": root / archive_dir if not Path(archive_dir).is_absolute() else Path(archive_dir),
        "ingest_enabled": bool(ingest_cfg.get("enabled", True)),
        "incremental_default": bool(ingest_cfg.get("incremental", True)),
    }


def ensure_store_parent(store_path: Path) -> None:
    store_path.parent.mkdir(parents=True, exist_ok=True)

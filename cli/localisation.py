"""
Language/localisation helpers for ai-dev-kit CLI (E21:S01:T02 / FR-006 Phase 1).

Delegates to workflow-mgt scripts localisation_config (canonical for installers + CLI).
"""

from __future__ import annotations

import importlib.util
import sys
from pathlib import Path

_SCRIPTS_DIR = (
    Path(__file__).resolve().parents[1]
    / "packages"
    / "frameworks"
    / "workflow-mgt"
    / "scripts"
)
_MODULE_PATH = _SCRIPTS_DIR / "localisation_config.py"

_spec = importlib.util.spec_from_file_location("localisation_config", _MODULE_PATH)
if _spec is None or _spec.loader is None:
    raise ImportError(f"Cannot load localisation_config from {_MODULE_PATH}")

_mod = importlib.util.module_from_spec(_spec)
sys.modules["localisation_config"] = _mod
_spec.loader.exec_module(_mod)

DEFAULT_LANGUAGE = _mod.DEFAULT_LANGUAGE
LOCALE_VARIANTS = _mod.LOCALE_VARIANTS
LOCALISATION_CONFIG_FILENAME = _mod.LOCALISATION_CONFIG_FILENAME
prompt_language_choice = _mod.prompt_language_choice
resolve_language_from_args = _mod.resolve_language_from_args
write_localisation_config = _mod.write_localisation_config
ensure_localisation_config = _mod.ensure_localisation_config
read_localisation_config = _mod.read_localisation_config
resolve_language = _mod.resolve_language
normalize_language = _mod.normalize_language
load_locale_manifest = _mod.load_locale_manifest
resolve_locale_asset = _mod.resolve_locale_asset
default_frameworks_root = _mod.default_frameworks_root
kanban_locales_root = _mod.kanban_locales_root
workflow_locales_root = _mod.workflow_locales_root

__all__ = [
    "DEFAULT_LANGUAGE",
    "LOCALE_VARIANTS",
    "LOCALISATION_CONFIG_FILENAME",
    "default_frameworks_root",
    "ensure_localisation_config",
    "kanban_locales_root",
    "load_locale_manifest",
    "normalize_language",
    "prompt_language_choice",
    "read_localisation_config",
    "resolve_language",
    "resolve_language_from_args",
    "resolve_locale_asset",
    "workflow_locales_root",
    "write_localisation_config",
]

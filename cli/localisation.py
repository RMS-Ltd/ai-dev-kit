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

_FMT_MODULE_PATH = _SCRIPTS_DIR / "locale_formatting.py"
_fmt_spec = importlib.util.spec_from_file_location("locale_formatting", _FMT_MODULE_PATH)
if _fmt_spec is None or _fmt_spec.loader is None:
    raise ImportError(f"Cannot load locale_formatting from {_FMT_MODULE_PATH}")
_fmt_mod = importlib.util.module_from_spec(_fmt_spec)
sys.modules["locale_formatting"] = _fmt_mod
_fmt_spec.loader.exec_module(_fmt_mod)

DEFAULT_LANGUAGE = _mod.DEFAULT_LANGUAGE
LOCALE_VARIANTS = _mod.LOCALE_VARIANTS
LOCALISATION_CONFIG_FILENAME = _mod.LOCALISATION_CONFIG_FILENAME
ADK_LOCALE_ENV = _mod.ADK_LOCALE_ENV
ADK_ACCEPT_LANGUAGE_ENV = _mod.ADK_ACCEPT_LANGUAGE_ENV
FR006_SUPPORTED_LOCALES = _mod.FR006_SUPPORTED_LOCALES
parse_locale_tag = _mod.parse_locale_tag
map_to_supported_locale = _mod.map_to_supported_locale
detect_env_locale = _mod.detect_env_locale
detect_system_locale = _mod.detect_system_locale
parse_accept_language = _mod.parse_accept_language
detect_browser_locale = _mod.detect_browser_locale
prompt_language_choice = _mod.prompt_language_choice
resolve_language_from_args = _mod.resolve_language_from_args
write_localisation_config = _mod.write_localisation_config
locale_payload_from_tag = _mod.locale_payload_from_tag
switch_locale = _mod.switch_locale
ensure_localisation_config = _mod.ensure_localisation_config
read_localisation_config = _mod.read_localisation_config
resolve_language = _mod.resolve_language
normalize_language = _mod.normalize_language
load_locale_manifest = _mod.load_locale_manifest
resolve_locale_asset = _mod.resolve_locale_asset
resolve_locale_key = _mod.resolve_locale_key
default_frameworks_root = _mod.default_frameworks_root
kanban_locales_root = _mod.kanban_locales_root
workflow_locales_root = _mod.workflow_locales_root
KANBAN_INTAKE_TEMPLATE_KEYS = _mod.KANBAN_INTAKE_TEMPLATE_KEYS
render_locale_text = _mod.render_locale_text
resolve_kanban_intake_template = _mod.resolve_kanban_intake_template
LOCALE_FORMAT_PROFILES = _fmt_mod.LOCALE_FORMAT_PROFILES
is_babel_available = _fmt_mod.is_babel_available
to_babel_locale = _fmt_mod.to_babel_locale
get_locale_format_profile = _fmt_mod.get_locale_format_profile
format_date = _fmt_mod.format_date
format_time = _fmt_mod.format_time
format_datetime = _fmt_mod.format_datetime
format_decimal = _fmt_mod.format_decimal
format_number = _fmt_mod.format_number
format_currency = _fmt_mod.format_currency
format_for_project = _fmt_mod.format_for_project

__all__ = [
    "ADK_ACCEPT_LANGUAGE_ENV",
    "ADK_LOCALE_ENV",
    "DEFAULT_LANGUAGE",
    "FR006_SUPPORTED_LOCALES",
    "LOCALE_VARIANTS",
    "LOCALISATION_CONFIG_FILENAME",
    "default_frameworks_root",
    "detect_browser_locale",
    "detect_env_locale",
    "detect_system_locale",
    "map_to_supported_locale",
    "parse_accept_language",
    "parse_locale_tag",
    "ensure_localisation_config",
    "format_currency",
    "format_date",
    "format_datetime",
    "format_decimal",
    "format_for_project",
    "format_number",
    "format_time",
    "get_locale_format_profile",
    "is_babel_available",
    "locale_payload_from_tag",
    "LOCALE_FORMAT_PROFILES",
    "KANBAN_INTAKE_TEMPLATE_KEYS",
    "kanban_locales_root",
    "load_locale_manifest",
    "normalize_language",
    "prompt_language_choice",
    "read_localisation_config",
    "resolve_language",
    "resolve_language_from_args",
    "switch_locale",
    "to_babel_locale",
    "resolve_locale_asset",
    "resolve_locale_key",
    "resolve_kanban_intake_template",
    "render_locale_text",
    "workflow_locales_root",
    "write_localisation_config",
]

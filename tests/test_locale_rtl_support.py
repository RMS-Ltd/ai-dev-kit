"""RTL locale support tests (E21:S04:T03 / FR-006 Phase 2)."""

from __future__ import annotations

import importlib.util
import sys
from pathlib import Path

import pytest
import yaml

REPO_ROOT = Path(__file__).resolve().parent.parent
_SCRIPTS = REPO_ROOT / "packages" / "frameworks" / "workflow-mgt" / "scripts"
_MODULE_PATH = _SCRIPTS / "localisation_config.py"

_spec = importlib.util.spec_from_file_location("localisation_config_rtl_test", _MODULE_PATH)
assert _spec is not None and _spec.loader is not None
_mod = importlib.util.module_from_spec(_spec)
sys.modules["localisation_config_rtl_test"] = _mod
_spec.loader.exec_module(_mod)

is_rtl_locale = _mod.is_rtl_locale
text_direction_for_locale = _mod.text_direction_for_locale
format_cli_status_line = _mod.format_cli_status_line
format_numbered_choice = _mod.format_numbered_choice
format_locale_line_for_direction = _mod.format_locale_line_for_direction

pytestmark = pytest.mark.fr006


@pytest.mark.parametrize(
    "tag,expected",
    [
        ("ar", True),
        ("he", True),
        ("ar-SA", True),
        ("en-GB", False),
        ("es", False),
        (None, False),
        ("", False),
    ],
)
def test_t1_is_rtl_locale(tag, expected):
    assert is_rtl_locale(tag) is expected


@pytest.mark.parametrize(
    "tag,expected",
    [
        ("ar", "rtl"),
        ("he", "rtl"),
        ("en-GB", "ltr"),
        (None, "ltr"),
    ],
)
def test_t2_text_direction_for_locale(tag, expected):
    assert text_direction_for_locale(tag) == expected


def test_t3_format_cli_status_line_rtl():
  line = format_cli_status_line("ar", "✅", "Loaded config")
  assert line == "Loaded config ✅"


def test_t3_format_cli_status_line_ltr():
  line = format_cli_status_line("en-GB", "✅", "Loaded config")
  assert line == "✅ Loaded config"


def test_t3_format_numbered_choice_rtl():
  line = format_numbered_choice("ar", 1, "UK English")
  assert line == "  UK English [1]"


def test_t3_format_numbered_choice_ltr():
  line = format_numbered_choice("en-GB", 1, "UK English")
  assert line == "  [1] UK English"


def test_t3_format_locale_line_for_direction_rtl():
  raw = "✅ Loaded config from: /tmp/project"
  assert format_locale_line_for_direction("ar", raw) == "Loaded config from: /tmp/project ✅"


@pytest.mark.parametrize(
    "manifest_rel",
    [
        "packages/frameworks/kanban/locales/manifest.yaml",
        "packages/frameworks/workflow-mgt/locales/manifest.yaml",
    ],
)
def test_t6_manifest_locale_metadata_ar_rtl(manifest_rel):
    path = REPO_ROOT / manifest_rel
    data = yaml.safe_load(path.read_text(encoding="utf-8"))
    assert data["locale_metadata"]["ar"]["text_direction"] == "rtl"

"""Tests for locale detection APIs (E21:S02:T03 / ADR-024)."""

import importlib.util
import sys
import tempfile
from pathlib import Path

import pytest

REPO_ROOT = Path(__file__).resolve().parent.parent
LOC_SCRIPT = REPO_ROOT / "packages" / "frameworks" / "workflow-mgt" / "scripts" / "localisation_config.py"


def _load_module():
    spec = importlib.util.spec_from_file_location("localisation_config", LOC_SCRIPT)
    module = importlib.util.module_from_spec(spec)
    assert spec is not None and spec.loader is not None
    sys.modules["localisation_config"] = module
    spec.loader.exec_module(module)
    return module


@pytest.fixture
def loc():
    return _load_module()


def test_t1_detect_env_locale_adk_locale(loc):
    """T1: ADK_LOCALE=en-US maps to en-US."""
    assert loc.detect_env_locale({"ADK_LOCALE": "en-US"}) == "en-US"


def test_t2_detect_system_locale_lang(loc):
    """T2: LANG=en_GB.UTF-8 maps to en-GB."""
    assert loc.detect_system_locale({"LANG": "en_GB.UTF-8"}) == "en-GB"


def test_t3_lc_all_overrides_lang(loc):
    """T3: LC_ALL overrides LANG."""
    env = {"LANG": "en_GB.UTF-8", "LC_ALL": "en_US.UTF-8"}
    assert loc.detect_system_locale(env) == "en-US"


def test_t4_accept_language_prefers_en_gb(loc):
    """T4: Accept-Language en-GB,en;q=0.9 picks en-GB."""
    assert loc.detect_browser_locale("en-GB,en;q=0.9") == "en-GB"


def test_t5_accept_language_quality_fr_first(loc):
    """T5: fr beats en-GB when fr has higher q."""
    assert loc.detect_browser_locale("fr,en-GB;q=0.8") == "fr"


def test_t6_bare_en_maps_to_default(loc):
    """T6: Bare en maps to project DEFAULT_LANGUAGE (en-GB)."""
    assert loc.map_to_supported_locale("en") == "en-GB"


def test_t7_unknown_tag_falls_back(loc):
    """T7: Unknown tag xx-YY falls back to en-GB."""
    assert loc.map_to_supported_locale("xx-YY") == "en-GB"


def test_t8_config_file_beats_env(loc, monkeypatch):
    """T8: Valid config file beats ADK_LOCALE."""
    monkeypatch.setenv("ADK_LOCALE", "en-US")
    with tempfile.TemporaryDirectory() as tmp:
        root = Path(tmp)
        (root / loc.LOCALISATION_CONFIG_FILENAME).write_text(
            "localisation:\n  language: en-GB\n  variant: UK\n",
            encoding="utf-8",
        )
        assert loc.resolve_language(root) == "en-GB"


def test_t9_env_beats_system_when_no_config(loc, monkeypatch):
    """T9: ADK_LOCALE beats system locale when no config file."""
    monkeypatch.setenv("ADK_LOCALE", "en-US")
    monkeypatch.setenv("LANG", "en_GB.UTF-8")
    with tempfile.TemporaryDirectory() as tmp:
        root = Path(tmp)
        assert loc.resolve_language(root) == "en-US"


def test_t10_system_beats_default_when_no_config_or_env(loc, monkeypatch):
    """T10: System locale beats default when no config or ADK_LOCALE."""
    monkeypatch.delenv("ADK_LOCALE", raising=False)
    monkeypatch.setenv("LANG", "en_US.UTF-8")
    with tempfile.TemporaryDirectory() as tmp:
        root = Path(tmp)
        assert loc.resolve_language(root) == "en-US"


def test_t11_override_always_wins(loc, monkeypatch):
    """T11: override parameter always wins."""
    monkeypatch.setenv("ADK_LOCALE", "en-US")
    with tempfile.TemporaryDirectory() as tmp:
        root = Path(tmp)
        (root / loc.LOCALISATION_CONFIG_FILENAME).write_text(
            "localisation:\n  language: en-GB\n  variant: UK\n",
            encoding="utf-8",
        )
        assert loc.resolve_language(root, override="en-US") == "en-US"


def test_t12_read_config_unchanged_resolve_uses_detection(loc, monkeypatch):
    """T12: read_localisation_config still defaults; resolve_language detects env."""
    monkeypatch.setenv("ADK_LOCALE", "en-US")
    with tempfile.TemporaryDirectory() as tmp:
        root = Path(tmp)
        assert loc.read_localisation_config(root)["language"] == "en-GB"
        assert loc.resolve_language(root) == "en-US"


def test_parse_accept_language_ordering(loc):
    """Parse Accept-Language sorts by descending q."""
    parsed = loc.parse_accept_language("en;q=0.5, en-GB")
    assert parsed[0] == ("en-GB", 1.0)
    assert parsed[1][1] == 0.5


def test_parse_locale_tag_normalizes_underscores(loc):
    """parse_locale_tag normalizes POSIX-style tags."""
    assert loc.parse_locale_tag("en_GB.UTF-8") == "en-GB"

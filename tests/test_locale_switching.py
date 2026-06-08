"""Tests for locale switching APIs (E21:S02:T04 / ADR-024)."""

import importlib.util
import sys
import tempfile
from pathlib import Path

import pytest
import yaml

REPO_ROOT = Path(__file__).resolve().parent.parent
LOC_SCRIPT = REPO_ROOT / "packages" / "frameworks" / "workflow-mgt" / "scripts" / "localisation_config.py"
WF_LOCALES = REPO_ROOT / "packages" / "frameworks" / "workflow-mgt" / "locales"
KANBAN_LOCALES = REPO_ROOT / "packages" / "frameworks" / "kanban" / "locales"
FRAMEWORKS_ROOT = REPO_ROOT / "packages" / "frameworks"


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


def test_s1_switch_locale_writes_yaml(loc, capsys):
    """S1: switch_locale writes config and returns before/after."""
    with tempfile.TemporaryDirectory() as tmp:
        root = Path(tmp)
        result = loc.switch_locale(root, "en-US")
        assert result["previous"]["language"] == "en-GB"
        assert result["current"]["language"] == "en-US"
        assert (root / loc.LOCALISATION_CONFIG_FILENAME).is_file()
        captured = capsys.readouterr()
        assert "en-US" in captured.out


def test_s2_switch_fr_round_trips(loc):
    """S2: Switch to fr persists in read_localisation_config."""
    with tempfile.TemporaryDirectory() as tmp:
        root = Path(tmp)
        loc.switch_locale(root, "fr")
        assert loc.read_localisation_config(root)["language"] == "fr"
        assert loc.read_localisation_config(root)["variant"] == "fr"


def test_s3_switch_idempotent(loc):
    """S3: switch_locale to same tag is idempotent."""
    with tempfile.TemporaryDirectory() as tmp:
        root = Path(tmp)
        loc.switch_locale(root, "en-GB")
        result = loc.switch_locale(root, "en-GB")
        assert result["previous"]["language"] == "en-GB"
        assert result["current"]["language"] == "en-GB"


def test_s4_ensure_force_overwrites(loc, capsys):
    """S4: ensure_localisation_config force=True overwrites existing."""
    with tempfile.TemporaryDirectory() as tmp:
        root = Path(tmp)
        loc.write_localisation_config(root, loc.LOCALE_VARIANTS["en-GB"])
        loc.ensure_localisation_config(
            root,
            language="en-US",
            force=True,
            non_interactive=True,
        )
        assert loc.read_localisation_config(root)["language"] == "en-US"


def test_s5_template_path_after_switch(loc):
    """S5: resolve_kanban_intake_template uses en-US after switch."""
    with tempfile.TemporaryDirectory() as tmp:
        root = Path(tmp)
        loc.switch_locale(root, "en-US")
        path = loc.resolve_kanban_intake_template(
            root,
            "fr",
            frameworks_root=FRAMEWORKS_ROOT,
        )
        assert "en-US" in str(path)


def test_s6_render_locale_text_after_switch(loc):
    """S6: render_locale_text resolves en-US scaffold after switch."""
    with tempfile.TemporaryDirectory() as tmp:
        root = Path(tmp)
        loc.switch_locale(root, "en-US")
        text_us = loc.render_locale_text(
            WF_LOCALES,
            category="scaffolds",
            key="changelog_stub",
            project_root=root,
            substitutions={"project_name": "TestProj"},
        )
        loc.switch_locale(root, "en-GB")
        text_gb = loc.render_locale_text(
            WF_LOCALES,
            category="scaffolds",
            key="changelog_stub",
            project_root=root,
            substitutions={"project_name": "TestProj"},
        )
        assert "TestProj" in text_us
        assert "TestProj" in text_gb
        assert text_us != text_gb or "en-US" in str(
            loc.resolve_locale_asset(
                WF_LOCALES,
                category="scaffolds",
                key="changelog_stub",
                project_root=root,
            )
        )


def test_locale_payload_from_tag_en_and_fr(loc):
    """locale_payload_from_tag handles English and registry tags."""
    assert loc.locale_payload_from_tag("en-US") == {
        "language": "en-US",
        "variant": "US",
    }
    assert loc.locale_payload_from_tag("fr") == {
        "language": "fr",
        "variant": "fr",
    }

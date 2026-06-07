"""Tests for locale fallback chain (E21:S02:T07 / ADR-024)."""

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


def _load_module():
    spec = importlib.util.spec_from_file_location("localisation_config", LOC_SCRIPT)
    module = importlib.util.module_from_spec(spec)
    assert spec is not None and spec.loader is not None
    sys.modules["localisation_config"] = module
    spec.loader.exec_module(module)
    return module


@pytest.fixture
def loc():
    mod = _load_module()
    mod._KEY_CATALOG_CACHE.clear()
    return mod


@pytest.fixture
def project_root():
    with tempfile.TemporaryDirectory() as tmp:
        yield Path(tmp)


def test_f1_fr_chain_includes_en_us(loc):
    """F1: fr preferred → fr, en-GB, en-US."""
    chain = loc.language_fallback_chain(WF_LOCALES, "fr")
    assert chain == ["fr", "en-GB", "en-US"]


def test_f2_en_us_preferred_deduped(loc):
    """F2: en-US preferred → en-US, en-GB (no duplicate en-US)."""
    chain = loc.language_fallback_chain(WF_LOCALES, "en-US")
    assert chain == ["en-US", "en-GB"]


def test_f3_fr_not_collapsed_to_en_gb_first(loc):
    """F3: FR-006 registry tag preserved as first chain entry."""
    chain = loc.language_fallback_chain(WF_LOCALES, "fr")
    assert chain[0] == "fr"
    assert chain[0] != "en-GB"


def test_f4_asset_falls_back_to_en_us_when_en_gb_missing(loc):
    """F4: resolve_locale_asset uses en-US when en-GB file absent."""
    with tempfile.TemporaryDirectory() as tmp:
        root = Path(tmp)
        fw = root / "frameworks"
        locales = fw / "kanban" / "locales"
        (locales / "en-US" / "templates").mkdir(parents=True)
        us_template = locales / "en-US" / "templates" / "FR_TEMPLATE.md"
        us_template.write_text("# US FR template\n", encoding="utf-8")
        manifest = {
            "version": 2,
            "default_locale": "en-GB",
            "framework": "kanban",
            "locales": {
                "en-GB": {"templates": {"fr": "templates/FR_TEMPLATE.md"}},
                "en-US": {"templates": {"fr": "templates/FR_TEMPLATE.md"}},
            },
        }
        (locales / "manifest.yaml").write_text(
            yaml.safe_dump(manifest, sort_keys=False),
            encoding="utf-8",
        )
        project = root / "project"
        project.mkdir()
        path = loc.resolve_locale_asset(
            locales,
            category="templates",
            key="fr",
            language="fr",
            project_root=project,
        )
        assert path == us_template.resolve()


def test_f5_canonical_fallback_after_chain(loc):
    """F5: canonical template used when chain locales have no on-disk file."""
    with tempfile.TemporaryDirectory() as tmp:
        root = Path(tmp)
        fw = root / "frameworks"
        locales = fw / "kanban" / "locales"
        locales.mkdir(parents=True)
        (locales / "manifest.yaml").write_text(
            "version: 2\ndefault_locale: en-GB\nframework: kanban\n"
            "locales:\n  en-GB:\n    templates:\n      fr: templates/FR_TEMPLATE.md\n",
            encoding="utf-8",
        )
        canonical = fw / "kanban" / "templates"
        canonical.mkdir(parents=True)
        canonical_fr = canonical / "FR_TEMPLATE.md"
        canonical_fr.write_text("# Canonical FR fallback\n", encoding="utf-8")
        project = root / "project"
        project.mkdir()
        path = loc.resolve_locale_asset(
            locales,
            category="templates",
            key="fr",
            language="fr",
            project_root=project,
            fallback_path=canonical_fr,
        )
        assert path == canonical_fr.resolve()


def test_f6_key_falls_back_to_en_us_catalog(loc):
    """F6: resolve_locale_key walks chain to en-US when earlier locales lack key."""
    with tempfile.TemporaryDirectory() as tmp:
        root = Path(tmp)
        fw = root / "frameworks" / "workflow-mgt"
        locales = fw / "locales"
        (locales / "en-GB" / "keys").mkdir(parents=True)
        (locales / "en-US" / "keys").mkdir(parents=True)
        (locales / "en-GB" / "keys" / "cli.yaml").write_text(
            "keys:\n  cli.prompt.language_choice: UK prompt\n",
            encoding="utf-8",
        )
        (locales / "en-US" / "keys" / "cli.yaml").write_text(
            "keys:\n  cli.test.fallback_only: US-only value\n",
            encoding="utf-8",
        )
        manifest = {
            "version": 2,
            "default_locale": "en-GB",
            "framework": "workflow-mgt",
            "locales": {
                "en-GB": {"keys": {"cli": "keys/cli.yaml"}},
                "en-US": {"keys": {"cli": "keys/cli.yaml"}},
            },
        }
        (locales / "manifest.yaml").write_text(
            yaml.safe_dump(manifest, sort_keys=False),
            encoding="utf-8",
        )
        project = root / "project"
        project.mkdir()
        loc._KEY_CATALOG_CACHE.clear()
        result = loc.resolve_locale_key(
            project,
            "cli.test.fallback_only",
            package="workflow-mgt",
            language="fr",
            frameworks_root=fw.parent,
        )
        assert result == "US-only value"


def test_f7_es_registry_walks_to_en_gb(loc, project_root):
    """F7: es (no on-disk tree) falls back to en-GB key catalog."""
    loc._KEY_CATALOG_CACHE.clear()
    result = loc.resolve_locale_key(
        project_root,
        "cli.prompt.language_choice",
        language="es",
    )
    assert result == "Select your preferred English variant:"

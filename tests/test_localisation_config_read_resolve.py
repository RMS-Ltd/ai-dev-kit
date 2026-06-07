"""Tests for localisation read/resolve API (E21:S01:T05 / FR-006)."""

import importlib.util
import sys
import tempfile
from pathlib import Path

import pytest
import yaml

REPO_ROOT = Path(__file__).resolve().parent.parent
LOC_SCRIPT = REPO_ROOT / "packages" / "frameworks" / "workflow-mgt" / "scripts" / "localisation_config.py"
KANBAN_LOCALES = REPO_ROOT / "packages" / "frameworks" / "kanban" / "locales"
WF_LOCALES = REPO_ROOT / "packages" / "frameworks" / "workflow-mgt" / "locales"
CANONICAL_FR = REPO_ROOT / "packages" / "frameworks" / "kanban" / "templates" / "FR_TEMPLATE.md"


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


def test_t1_read_localisation_config_valid(loc):
    """T1: read_localisation_config reads valid YAML."""
    with tempfile.TemporaryDirectory() as tmp:
        root = Path(tmp)
        config_path = root / loc.LOCALISATION_CONFIG_FILENAME
        config_path.write_text(
            "localisation:\n  language: en-US\n  variant: US\n",
            encoding="utf-8",
        )
        assert loc.read_localisation_config(root) == {
            "language": "en-US",
            "variant": "US",
        }


def test_t2_read_missing_defaults_en_gb(loc):
    """T2: Missing config returns en-GB default."""
    with tempfile.TemporaryDirectory() as tmp:
        root = Path(tmp)
        assert loc.read_localisation_config(root) == {
            "language": "en-GB",
            "variant": "UK",
        }


def test_t3_invalid_language_defaults(loc):
    """T3: Invalid language in file normalizes to en-GB."""
    with tempfile.TemporaryDirectory() as tmp:
        root = Path(tmp)
        (root / loc.LOCALISATION_CONFIG_FILENAME).write_text(
            "localisation:\n  language: fr-FR\n  variant: FR\n",
            encoding="utf-8",
        )
        assert loc.read_localisation_config(root)["language"] == "en-GB"


def test_t4_load_kanban_manifest(loc):
    """T4: load_locale_manifest loads kanban manifest."""
    manifest = loc.load_locale_manifest(KANBAN_LOCALES / "manifest.yaml")
    assert manifest["default_locale"] == "en-GB"
    assert "fr" in manifest["locales"]["en-GB"]["templates"]


def test_t5_resolve_en_gb_fr_template(loc):
    """T5: resolve_locale_asset en-GB templates.fr."""
    path = loc.resolve_locale_asset(
        KANBAN_LOCALES,
        category="templates",
        key="fr",
        language="en-GB",
    )
    assert path.name == "FR_TEMPLATE.md"
    assert "en-GB" in str(path)


def test_t6_resolve_en_us_fr_template(loc):
    """T6: resolve_locale_asset en-US templates.fr."""
    path = loc.resolve_locale_asset(
        KANBAN_LOCALES,
        category="templates",
        key="fr",
        language="en-US",
    )
    assert path.name == "FR_TEMPLATE.md"
    assert "en-US" in str(path)


def test_t7_resolve_fallback_canonical(loc):
    """T7: Missing locale file uses fallback_path."""
    with tempfile.TemporaryDirectory() as tmp:
        locales_root = Path(tmp) / "locales"
        locales_root.mkdir(parents=True)
        (locales_root / "manifest.yaml").write_text(
            yaml.dump(
                {
                    "version": 1,
                    "default_locale": "en-GB",
                    "locales": {
                        "en-GB": {"templates": {"fr": "templates/MISSING.md"}},
                    },
                }
            ),
            encoding="utf-8",
        )
        path = loc.resolve_locale_asset(
            locales_root,
            category="templates",
            key="fr",
            language="en-GB",
            fallback_path=CANONICAL_FR,
        )
        assert path == CANONICAL_FR.resolve()


def test_t8_resolve_workflow_changelog_stub(loc):
    """T8: Workflow scaffolds.changelog_stub for both locales."""
    for language in ("en-GB", "en-US"):
        path = loc.resolve_locale_asset(
            WF_LOCALES,
            category="scaffolds",
            key="changelog_stub",
            language=language,
        )
        assert path.is_file()
        assert path.name == "changelog_stub.md"


def test_t9_framework_root_helpers(loc):
    """T9: default_frameworks_root and kanban_locales_root point at repo manifests."""
    fw = loc.default_frameworks_root()
    assert (fw / "kanban" / "locales" / "manifest.yaml").is_file()
    assert loc.kanban_locales_root(fw) == fw / "kanban" / "locales"
    assert loc.workflow_locales_root(fw) == fw / "workflow-mgt" / "locales"


def test_t10_resolve_language_override(loc):
    """T10: resolve_language honours override."""
    with tempfile.TemporaryDirectory() as tmp:
        root = Path(tmp)
        assert loc.resolve_language(root, override="en-US") == "en-US"

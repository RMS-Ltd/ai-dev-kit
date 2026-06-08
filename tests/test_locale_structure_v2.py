"""Locale manifest v2 structure tests (E21:S02:T02 / ADR-024)."""

from pathlib import Path

import pytest
import yaml

REPO_ROOT = Path(__file__).resolve().parent.parent
KANBAN_LOCALES = REPO_ROOT / "packages" / "frameworks" / "kanban" / "locales"
WF_LOCALES = REPO_ROOT / "packages" / "frameworks" / "workflow-mgt" / "locales"
CONVENTIONS = (
    REPO_ROOT / "docs" / "governance" / "standards" / "locale-file-structure-conventions.md"
)

PHYSICAL_LOCALES = ("en-GB", "en-US")
SCAFFOLD_LOCALES = ("es", "fr", "de", "zh-CN", "zh-TW", "ja", "pt", "ru", "ar")
ALL_ON_DISK_LOCALES = PHYSICAL_LOCALES + SCAFFOLD_LOCALES
KEY_FILES = ("cli.yaml", "errors.yaml")
WF_KEY_FILES = ("cli.yaml", "errors.yaml", "installer.yaml")
FR006_SUPPORTED = (
    "en-GB",
    "en-US",
    "es",
    "fr",
    "de",
    "zh-CN",
    "zh-TW",
    "ja",
    "pt",
    "ru",
    "ar",
)


@pytest.fixture
def kanban_manifest():
    with open(KANBAN_LOCALES / "manifest.yaml", encoding="utf-8") as handle:
        return yaml.safe_load(handle)


@pytest.fixture
def wf_manifest():
    with open(WF_LOCALES / "manifest.yaml", encoding="utf-8") as handle:
        return yaml.safe_load(handle)


def test_v1_manifest_version_two(kanban_manifest, wf_manifest):
    """V1: Both manifests are schema v2."""
    assert kanban_manifest["version"] == 2
    assert wf_manifest["version"] == 2


def test_v1_supported_locales_registry(kanban_manifest, wf_manifest):
    """V1: supported_locales contains all FR-006 Phase 2 codes."""
    for manifest in (kanban_manifest, wf_manifest):
        supported = manifest.get("supported_locales", [])
        for code in FR006_SUPPORTED:
            assert code in supported, f"missing {code} in {manifest.get('framework')}"


def test_v2_key_files_exist_both_packages():
    """V2: en-GB/en-US key catalogs on disk per package."""
    for locale in PHYSICAL_LOCALES:
        for name in KEY_FILES:
            path = KANBAN_LOCALES / locale / "keys" / name
            assert path.is_file(), str(path)
        for name in WF_KEY_FILES:
            path = WF_LOCALES / locale / "keys" / name
            assert path.is_file(), str(path)


def test_v3_manifest_keys_paths_resolve(kanban_manifest, wf_manifest):
    """V3: Manifest keys category paths exist."""
    for locale in ALL_ON_DISK_LOCALES:
        for key_name, rel in kanban_manifest["locales"][locale]["keys"].items():
            path = KANBAN_LOCALES / locale / rel
            assert path.is_file(), f"kanban {locale} keys.{key_name}"
        for key_name, rel in wf_manifest["locales"][locale]["keys"].items():
            path = WF_LOCALES / locale / rel
            assert path.is_file(), f"workflow-mgt {locale} keys.{key_name}"


def test_v4_phase1_template_paths_unchanged(kanban_manifest):
    """V4: Phase 1 template paths unchanged."""
    expected = {
        "fr": "templates/FR_TEMPLATE.md",
        "plan_doc": "templates/PLAN_DOC_TEMPLATE.md",
    }
    for locale in PHYSICAL_LOCALES:
        templates = kanban_manifest["locales"][locale]["templates"]
        for key, rel in expected.items():
            assert templates[key] == rel
            assert (KANBAN_LOCALES / locale / rel).is_file()


def test_v4_phase1_scaffold_paths_unchanged(wf_manifest):
    """V4: Phase 1 scaffold paths unchanged."""
    rel = "scaffolds/changelog_stub.md"
    for locale in PHYSICAL_LOCALES:
        assert wf_manifest["locales"][locale]["scaffolds"]["changelog_stub"] == rel
        assert (WF_LOCALES / locale / rel).is_file()


def test_v6_key_file_schema(kanban_manifest):
    """V6: Key files have _meta and dotted keys under keys:."""
    rel = kanban_manifest["locales"]["en-GB"]["keys"]["cli"]
    data = yaml.safe_load((KANBAN_LOCALES / "en-GB" / rel).read_text(encoding="utf-8"))
    assert data["_meta"]["domain"] == "cli"
    assert "keys" in data
    assert "cli.prompt.language_choice" in data["keys"]


def test_v8_conventions_doc_exists():
    """V8: Naming conventions policy exists and references ADR-024."""
    assert CONVENTIONS.is_file()
    text = CONVENTIONS.read_text(encoding="utf-8")
    assert "ADR-024" in text
    assert "domain.section.key" in text

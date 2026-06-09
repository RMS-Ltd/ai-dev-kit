"""Locale scaffold tests for major languages (E21:S03:T02 / FR-006)."""

from pathlib import Path

import pytest
import yaml

REPO_ROOT = Path(__file__).resolve().parent.parent
KANBAN_LOCALES = REPO_ROOT / "packages" / "frameworks" / "kanban" / "locales"
WF_LOCALES = REPO_ROOT / "packages" / "frameworks" / "workflow-mgt" / "locales"
ROLLOUT = (
    REPO_ROOT / "docs" / "governance" / "standards" / "locale-rollout-matrix.md"
)
REGISTRY = (
    REPO_ROOT / "docs" / "governance" / "standards" / "translatable-content-registry.yaml"
)

SCAFFOLD_LOCALES = ("es", "fr", "de", "zh-CN", "zh-TW", "ja", "pt", "ru", "ar")
SOURCE_LOCALE = "en-GB"


@pytest.fixture
def kanban_manifest():
    with open(KANBAN_LOCALES / "manifest.yaml", encoding="utf-8") as handle:
        return yaml.safe_load(handle)


@pytest.fixture
def wf_manifest():
    with open(WF_LOCALES / "manifest.yaml", encoding="utf-8") as handle:
        return yaml.safe_load(handle)


def _key_sets(locale_root: Path, locale: str, key_files: tuple[str, ...]) -> dict[str, set[str]]:
    out: dict[str, set[str]] = {}
    for name in key_files:
        path = locale_root / locale / "keys" / name
        data = yaml.safe_load(path.read_text(encoding="utf-8"))
        out[name] = set(data.get("keys", {}))
    return out


def test_s1_rollout_and_registry_exist():
    """S1: Rollout matrix and registry scaffold section exist."""
    assert ROLLOUT.is_file()
    registry = yaml.safe_load(REGISTRY.read_text(encoding="utf-8"))
    assert registry.get("scaffold_locales")
    for code in SCAFFOLD_LOCALES:
        assert code in registry["scaffold_locales"]


def test_s2_manifest_blocks_all_scaffold_locales(kanban_manifest, wf_manifest):
    """S2: All scaffold locales registered in both manifests."""
    for manifest in (kanban_manifest, wf_manifest):
        locales = manifest.get("locales", {})
        for code in SCAFFOLD_LOCALES:
            assert code in locales, manifest.get("framework")


def test_s3_manifest_paths_exist(kanban_manifest, wf_manifest):
    """S3: Every manifest path exists on disk for scaffold locales."""
    for code in SCAFFOLD_LOCALES:
        for key_name, rel in kanban_manifest["locales"][code]["keys"].items():
            path = KANBAN_LOCALES / code / rel
            assert path.is_file(), f"kanban {code} keys.{key_name}"
        for key_name, rel in wf_manifest["locales"][code]["keys"].items():
            path = WF_LOCALES / code / rel
            assert path.is_file(), f"workflow-mgt {code} keys.{key_name}"


def test_s4_key_parity_with_en_gb():
    """S4: Scaffold locales share en-GB key sets."""
    kanban_keys = ("cli.yaml", "errors.yaml")
    wf_keys = ("cli.yaml", "errors.yaml", "installer.yaml")
    gb_k = _key_sets(KANBAN_LOCALES, SOURCE_LOCALE, kanban_keys)
    gb_w = _key_sets(WF_LOCALES, SOURCE_LOCALE, wf_keys)
    for code in SCAFFOLD_LOCALES:
        assert _key_sets(KANBAN_LOCALES, code, kanban_keys) == gb_k, code
        assert _key_sets(WF_LOCALES, code, wf_keys) == gb_w, code


def test_s5_meta_locale_matches_directory():
    """S5: _meta.locale matches directory name in key YAML."""
    for code in SCAFFOLD_LOCALES:
        for root, names in (
            (WF_LOCALES, ("cli.yaml", "installer.yaml")),
            (KANBAN_LOCALES, ("cli.yaml",)),
        ):
            for name in names:
                data = yaml.safe_load((root / code / "keys" / name).read_text(encoding="utf-8"))
                assert data["_meta"]["locale"] == code, f"{code}/{name}"


def test_s6_resolve_locale_key_es_translated():
    """S6: resolve_locale_key returns Spanish catalog for es (E21:S05:T01)."""
    import sys

    scripts = REPO_ROOT / "packages" / "frameworks" / "workflow-mgt" / "scripts"
    if str(scripts) not in sys.path:
        sys.path.insert(0, str(scripts))
    from localisation_config import resolve_locale_key

    value = resolve_locale_key(
        REPO_ROOT, "cli.prompt.language_choice", language="es", package="workflow-mgt"
    )
    assert value == "Seleccione su variante de inglés preferida:"

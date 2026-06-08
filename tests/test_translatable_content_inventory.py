"""Translatable content inventory tests (E21:S03:T01 / FR-006 Phase 3)."""

from pathlib import Path

import pytest
import yaml

REPO_ROOT = Path(__file__).resolve().parent.parent
REGISTRY = (
    REPO_ROOT / "docs" / "governance" / "standards" / "translatable-content-registry.yaml"
)
INVENTORY = (
    REPO_ROOT / "docs" / "governance" / "standards" / "translatable-content-inventory.md"
)
WF_LOCALES = REPO_ROOT / "packages" / "frameworks" / "workflow-mgt" / "locales"
PHYSICAL_LOCALES = ("en-GB", "en-US")
KEY_DOMAINS = ("cli", "errors", "installer")


@pytest.fixture
def registry():
    with open(REGISTRY, encoding="utf-8") as handle:
        return yaml.safe_load(handle)


@pytest.fixture
def wf_manifest():
    with open(WF_LOCALES / "manifest.yaml", encoding="utf-8") as handle:
        return yaml.safe_load(handle)


def _load_keys(locale: str, domain: str) -> dict:
    path = WF_LOCALES / locale / "keys" / f"{domain}.yaml"
    data = yaml.safe_load(path.read_text(encoding="utf-8"))
    return data.get("keys", {})


def test_i1_inventory_and_registry_exist():
    """I1: Canonical inventory artifacts exist."""
    assert INVENTORY.is_file()
    assert REGISTRY.is_file()


def test_i2_registry_validator_scope_option_b(registry):
    """I2: Validator tier deferred per IPP Option B."""
    assert registry["validator_scope"] == "option_b_inventory_only"
    deferred = registry["deferred_surfaces"]
    assert any(item["tier"] == "operator_validator" for item in deferred)


def test_i3_installer_domain_in_manifest(wf_manifest):
    """I3: installer registered in manifest for both locales."""
    for locale in PHYSICAL_LOCALES:
        keys = wf_manifest["locales"][locale]["keys"]
        assert "installer" in keys
        assert keys["installer"] == "keys/installer.yaml"


def test_i4_key_parity_all_domains():
    """I4: en-GB and en-US share identical key sets per domain."""
    for domain in KEY_DOMAINS:
        gb = set(_load_keys("en-GB", domain))
        us = set(_load_keys("en-US", domain))
        assert gb == us, domain
        assert gb, f"empty domain {domain}"


def test_i5_key_naming_convention():
    """I5: Keys match domain.section.name and file domain prefix."""
    for locale in PHYSICAL_LOCALES:
        for domain in KEY_DOMAINS:
            path = WF_LOCALES / locale / "keys" / f"{domain}.yaml"
            data = yaml.safe_load(path.read_text(encoding="utf-8"))
            meta_domain = data.get("_meta", {}).get("domain")
            assert meta_domain == domain
            for key in data.get("keys", {}):
                parts = key.split(".")
                assert len(parts) >= 3, key
                assert parts[0] == domain, key


def test_i6_registry_key_counts_match_disk(registry):
    """I6: Registry key_count matches on-disk YAML."""
    wf = registry["packages"]["workflow-mgt"]["key_domains"]
    for domain, info in wf.items():
        count = len(_load_keys("en-GB", domain))
        assert info["key_count"] == count, domain


def test_i7_installer_keys_resolve():
    """I7: Sample installer keys resolve via resolve_locale_key."""
    import sys

    scripts = REPO_ROOT / "packages" / "frameworks" / "workflow-mgt" / "scripts"
    if str(scripts) not in sys.path:
        sys.path.insert(0, str(scripts))
    from localisation_config import resolve_locale_key

    samples = (
        "installer.wizard.config_header",
        "installer.deps.missing_title",
        "cli.init.initialized",
        "errors.installer.config_not_found",
    )
    for key in samples:
        value = resolve_locale_key(REPO_ROOT, key)
        assert value and isinstance(value, str), key

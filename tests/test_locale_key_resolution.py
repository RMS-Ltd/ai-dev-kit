"""Tests for locale key resolution APIs (E21:S02:T06 / ADR-024)."""

import importlib.util
import sys
import tempfile
from pathlib import Path
from unittest import mock

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
    mod = _load_module()
    mod._KEY_CATALOG_CACHE.clear()
    return mod


@pytest.fixture
def project_root():
    with tempfile.TemporaryDirectory() as tmp:
        yield Path(tmp)


def test_k1_invalid_key_shape_raises(loc):
    """K1: Invalid key shape raises ValueError."""
    with pytest.raises(ValueError, match="domain.section.name"):
        loc._parse_locale_key("cli.only")
    with pytest.raises(ValueError, match="domain.section.name"):
        loc._parse_locale_key("")


def test_k2_resolve_known_key(loc, project_root):
    """K2: resolve_locale_key returns non-empty string for seeded key."""
    result = loc.resolve_locale_key(project_root, "cli.prompt.language_choice")
    assert result == "Select your preferred English variant:"


def test_k3_us_locale_after_switch(loc, project_root):
    """K3: After switch to en-US, US-specific catalog values apply."""
    loc.switch_locale(project_root, "en-US")
    uk_line = loc.resolve_locale_key(project_root, "cli.prompt.language_uk")
    assert "realize" in uk_line or "realise" in uk_line


def test_k4_both_packages_resolve(loc, project_root):
    """K4: workflow-mgt and kanban packages resolve same key shape."""
    wf = loc.resolve_locale_key(project_root, "cli.prompt.enter_choice", package="workflow-mgt")
    kb = loc.resolve_locale_key(project_root, "cli.prompt.enter_choice", package="kanban")
    assert wf == "Enter choice [1-2]:"
    assert kb == "Enter choice [1-2]:"


def test_k5_substitutions(loc, project_root):
    """K5: {{placeholder}} tokens are replaced."""
    result = loc.resolve_locale_key(
        project_root,
        "cli.config.using_existing",
        substitutions={"path": "/tmp/x"},
    )
    assert "/tmp/x" in result
    assert "{{path}}" not in result


def test_k6_catalog_cache_reuse(loc, project_root):
    """K6: Second lookup reuses cached catalog."""
    loc.resolve_locale_key(project_root, "cli.prompt.language_choice")
    assert loc._KEY_CATALOG_CACHE
    with mock.patch("builtins.open", wraps=open) as mocked_open:
        loc.resolve_locale_key(project_root, "cli.prompt.enter_choice")
        yaml_opens = [
            call
            for call in mocked_open.call_args_list
            if str(call.args[0]).endswith("cli.yaml")
        ]
        assert len(yaml_opens) == 0


def test_k7_fallback_unregistered_locale(loc, project_root):
    """K7: Unsupported on-disk locale falls back to en-GB catalog."""
    result = loc.resolve_locale_key(
        project_root,
        "cli.prompt.language_choice",
        language="es",
    )
    assert result == "Select your preferred English variant:"


def test_k8_missing_key_raises(loc, project_root):
    """K8: Missing key across chain raises KeyError."""
    with pytest.raises(KeyError, match="cli.nonexistent.missing.key"):
        loc.resolve_locale_key(project_root, "cli.nonexistent.missing.key")


def test_prompt_language_choice_uses_keys(loc, project_root, capsys, monkeypatch):
    """Integration: prompt_language_choice loads strings from key catalogs."""
    monkeypatch.setattr("builtins.input", lambda _: "1")
    loc.prompt_language_choice(project_root)
    captured = capsys.readouterr()
    assert "Select your preferred English variant:" in captured.out
    assert "UK English (en-GB)" in captured.out

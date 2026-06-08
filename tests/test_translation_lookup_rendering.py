"""Tests for translation lookup and rendering wiring (E21:S03:T03 / FR-006)."""

import importlib.util
import sys
import tempfile
from pathlib import Path

import pytest
import yaml

REPO_ROOT = Path(__file__).resolve().parent.parent
LOC_SCRIPT = REPO_ROOT / "packages" / "frameworks" / "workflow-mgt" / "scripts" / "localisation_config.py"
INSTALL_SCRIPT = REPO_ROOT / "packages" / "frameworks" / "workflow-mgt" / "scripts" / "install_release_workflow.py"
WF_LOCALES = REPO_ROOT / "packages" / "frameworks" / "workflow-mgt" / "locales"
KANBAN_LOCALES = REPO_ROOT / "packages" / "frameworks" / "kanban" / "locales"
REGISTRY = REPO_ROOT / "docs" / "governance" / "standards" / "translatable-content-registry.yaml"

pytestmark = pytest.mark.fr006


def _load_loc():
    spec = importlib.util.spec_from_file_location("localisation_config", LOC_SCRIPT)
    module = importlib.util.module_from_spec(spec)
    assert spec is not None and spec.loader is not None
    sys.modules["localisation_config"] = module
    spec.loader.exec_module(module)
    return module


def _load_installer():
    spec = importlib.util.spec_from_file_location("install_release_workflow", INSTALL_SCRIPT)
    module = importlib.util.module_from_spec(spec)
    assert spec is not None and spec.loader is not None
    sys.modules["install_release_workflow"] = module
    spec.loader.exec_module(module)
    return module


def _write_config(root: Path, language: str) -> None:
    (root / "ai-dev-kit-config.yaml").write_text(
        yaml.dump({"localisation": {"language": language}}),
        encoding="utf-8",
    )


def test_l1_locale_message_installer_deps_title():
    """L1: locale_message resolves installer.deps.missing_title."""
    loc = _load_loc()
    with tempfile.TemporaryDirectory() as tmp:
        root = Path(tmp)
        _write_config(root, "en-GB")
        text = loc.locale_message(root, "installer.deps.missing_title")
        assert "missing" in text.lower()


def test_l2_render_locale_text_scaffold_es():
    """L2: render_locale_text returns content for scaffold locale es."""
    loc = _load_loc()
    with tempfile.TemporaryDirectory() as tmp:
        root = Path(tmp)
        _write_config(root, "es")
        text = loc.render_locale_text(
            WF_LOCALES,
            category="scaffolds",
            key="changelog_stub",
            project_root=root,
            substitutions={"project_name": "demo"},
        )
        assert text
        assert "{{project_name}}" not in text
        assert "demo" in text


def test_l3_kanban_intake_template_es():
    """L3: resolve_kanban_intake_template resolves es scaffold path."""
    loc = _load_loc()
    with tempfile.TemporaryDirectory() as tmp:
        root = Path(tmp)
        _write_config(root, "es")
        path = loc.resolve_kanban_intake_template(root, "fr")
        assert "locales/es" in str(path).replace("\\", "/")


def test_l4_key_fallback_to_en_gb():
    """L4: Missing key in es falls back via chain."""
    loc = _load_loc()
    with tempfile.TemporaryDirectory() as tmp:
        root = Path(tmp)
        _write_config(root, "es")
        gb = loc.locale_message(root, "cli.prompt.language_choice", language="en-GB")
        es = loc.locale_message(root, "cli.prompt.language_choice", language="es")
        assert gb == es


def test_l5_format_dependency_help_uses_keys():
    """L5: format_dependency_help uses locale keys not hardcoded title."""
    mod = _load_installer()
    text = mod.format_dependency_help(["pyyaml"], project_root=None)
    assert "ERROR: RW installer dependencies are missing." in text
    assert "pyyaml" in text


def test_l6_cli_init_keys_resolve():
    """L6: CLI init keys resolve for en-GB."""
    loc = _load_loc()
    with tempfile.TemporaryDirectory() as tmp:
        root = Path(tmp)
        _write_config(root, "en-GB")
        msg = loc.locale_message(
            root,
            "cli.init.initialized",
            {"path": str(root)},
        )
        assert str(root) in msg


def test_l7_registry_key_counts_match_disk():
    """L7: Registry key_count matches on-disk YAML."""
    registry = yaml.safe_load(REGISTRY.read_text(encoding="utf-8"))
    wf = registry["packages"]["workflow-mgt"]["key_domains"]

    def _count(domain: str) -> int:
        path = WF_LOCALES / "en-GB" / "keys" / f"{domain}.yaml"
        data = yaml.safe_load(path.read_text(encoding="utf-8"))
        return len(data["keys"])

    for domain, info in wf.items():
        assert info["key_count"] == _count(domain), domain

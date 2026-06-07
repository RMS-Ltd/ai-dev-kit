"""Tests for content generation locale wiring (E21:S01:T06 / FR-006)."""

import importlib.util
import sys
import tempfile
from pathlib import Path

import yaml

REPO_ROOT = Path(__file__).resolve().parent.parent
LOC_SCRIPT = REPO_ROOT / "packages" / "frameworks" / "workflow-mgt" / "scripts" / "localisation_config.py"
INSTALL_SCRIPT = REPO_ROOT / "packages" / "frameworks" / "workflow-mgt" / "scripts" / "install_release_workflow.py"
WF_LOCALES = REPO_ROOT / "packages" / "frameworks" / "workflow-mgt" / "locales"
KANBAN_LOCALES = REPO_ROOT / "packages" / "frameworks" / "kanban" / "locales"
CANONICAL_FR = REPO_ROOT / "packages" / "frameworks" / "kanban" / "templates" / "FR_TEMPLATE.md"
FRAMEWORKS_ROOT = REPO_ROOT / "packages" / "frameworks"


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
    spec.loader.exec_module(module)
    return module


def _write_config(root: Path, language: str) -> None:
    (root / "ai-dev-kit-config.yaml").write_text(
        yaml.dump({"localisation": {"language": language}}),
        encoding="utf-8",
    )


def test_t1_render_locale_text_substitutes_placeholders():
    """T1: render_locale_text substitutes all placeholders."""
    loc = _load_loc()
    with tempfile.TemporaryDirectory() as tmp:
        root = Path(tmp)
        _write_config(root, "en-GB")
        text = loc.render_locale_text(
            WF_LOCALES,
            category="scaffolds",
            key="changelog_stub",
            project_root=root,
            substitutions={"project_name": "demo-app"},
        )
        assert "{{project_name}}" not in text
        assert "demo-app" in text


def test_t2_changelog_stub_en_gb_markers():
    """T2: en-GB config produces UK English markers in changelog stub."""
    mod = _load_installer()
    with tempfile.TemporaryDirectory() as tmp:
        root = Path(tmp)
        _write_config(root, "en-GB")
        text = mod.render_changelog_stub(root, "my-project")
        assert "colour" in text or "organise" in text


def test_t3_changelog_stub_en_us_markers():
    """T3: en-US config produces US English markers in changelog stub."""
    mod = _load_installer()
    with tempfile.TemporaryDirectory() as tmp:
        root = Path(tmp)
        _write_config(root, "en-US")
        text = mod.render_changelog_stub(root, "my-project")
        assert "color" in text or "organize" in text


def test_t4_changelog_stub_defaults_en_gb():
    """T4: missing config defaults to en-GB stub text."""
    mod = _load_installer()
    with tempfile.TemporaryDirectory() as tmp:
        root = Path(tmp)
        text = mod.render_changelog_stub(root, "my-project")
        assert "colour" in text or "organise" in text


def test_t5_version_decline_help_locale_and_placeholder():
    """T5: version decline help includes version_rel and locale prose."""
    mod = _load_installer()
    with tempfile.TemporaryDirectory() as tmp:
        root = Path(tmp)
        _write_config(root, "en-GB")
        text = mod.format_version_scaffold_decline_help(root, "src/app/version.py")
        assert "src/app/version.py" in text
        assert "organise" in text or "colour" in text


def test_t6_changelog_decline_help_placeholder():
    """T6: changelog decline help includes changelog_rel."""
    mod = _load_installer()
    with tempfile.TemporaryDirectory() as tmp:
        root = Path(tmp)
        _write_config(root, "en-US")
        text = mod.format_changelog_scaffold_decline_help(root, "CHANGELOG.md")
        assert "CHANGELOG.md" in text


def test_t7_resolve_kanban_intake_template_en_us():
    """T7: resolve_kanban_intake_template returns en-US path when configured."""
    loc = _load_loc()
    with tempfile.TemporaryDirectory() as tmp:
        root = Path(tmp)
        _write_config(root, "en-US")
        path = loc.resolve_kanban_intake_template(
            root, "fr", frameworks_root=FRAMEWORKS_ROOT
        )
        assert "en-US" in str(path)
        assert path.name == "FR_TEMPLATE.md"
        assert "color" in path.read_text(encoding="utf-8")


def test_t8_resolve_kanban_intake_template_canonical_fallback():
    """T8: falls back to canonical templates/FR_TEMPLATE.md when locale missing."""
    loc = _load_loc()
    with tempfile.TemporaryDirectory() as tmp:
        root = Path(tmp)
        fw = Path(tmp) / "frameworks"
        kanban_locales = fw / "kanban" / "locales"
        kanban_locales.mkdir(parents=True)
        (kanban_locales / "manifest.yaml").write_text(
            "version: 1\ndefault_locale: en-GB\nframework: kanban\n"
            "locales:\n  en-GB:\n    templates:\n      fr: templates/FR_TEMPLATE.md\n",
            encoding="utf-8",
        )
        canonical = fw / "kanban" / "templates"
        canonical.mkdir(parents=True)
        canonical_fr = canonical / "FR_TEMPLATE.md"
        canonical_fr.write_text("# Canonical FR fallback\n", encoding="utf-8")

        path = loc.resolve_kanban_intake_template(
            root, "fr", frameworks_root=fw
        )
        assert path == canonical_fr.resolve()


def test_t9_ensure_changelog_scaffold_reflects_language():
    """T9: ensure_main_changelog_scaffold created file reflects configured language."""
    mod = _load_installer()
    with tempfile.TemporaryDirectory() as tmp:
        root = Path(tmp)
        _write_config(root, "en-US")
        config = {
            "main_changelog": "CHANGELOG.md",
            "project_name": "locale-test",
        }
        result = mod.ensure_main_changelog_scaffold(
            root,
            config,
            dry_run=False,
            interactive=False,
            create_if_missing=True,
        )
        assert result.status == "created"
        content = (root / "CHANGELOG.md").read_text(encoding="utf-8")
        assert "color" in content or "organize" in content


def test_t10_t05_regression_still_green():
    """T10: T05 read/resolve regression (smoke)."""
    loc = _load_loc()
    with tempfile.TemporaryDirectory() as tmp:
        root = Path(tmp)
        assert loc.read_localisation_config(root)["language"] == "en-GB"
        path = loc.resolve_locale_asset(
            KANBAN_LOCALES,
            category="templates",
            key="fr",
            project_root=root,
            fallback_path=CANONICAL_FR,
        )
        assert path.is_file()

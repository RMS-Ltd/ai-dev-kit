"""FR-006 Phase 3 translation and locale E2E tests (E21:S03:T07)."""

from __future__ import annotations

import argparse
import importlib.util
import os
import subprocess
import sys
import tempfile
from pathlib import Path
from unittest.mock import patch

import pytest
import yaml

from cli.commands.init import InitCommand
from cli.localisation import LOCALISATION_CONFIG_FILENAME

REPO_ROOT = Path(__file__).resolve().parent.parent
LOC_SCRIPT = REPO_ROOT / "packages" / "frameworks" / "workflow-mgt" / "scripts" / "localisation_config.py"
INSTALL_SCRIPT = REPO_ROOT / "packages" / "frameworks" / "workflow-mgt" / "scripts" / "install_release_workflow.py"
VALIDATE_SCRIPT = REPO_ROOT / "packages" / "frameworks" / "workflow-mgt" / "scripts" / "validate_locale_translations.py"
REPORT_SCRIPT = REPO_ROOT / "packages" / "frameworks" / "workflow-mgt" / "scripts" / "report_locale_completeness.py"
WF_LOCALES = REPO_ROOT / "packages" / "frameworks" / "workflow-mgt" / "locales"
KANBAN_LOCALES = REPO_ROOT / "packages" / "frameworks" / "kanban" / "locales"
FRAMEWORKS_ROOT = REPO_ROOT / "packages" / "frameworks"

SCAFFOLD_LOCALES = ("es", "fr", "de", "zh-CN", "zh-TW", "ja", "pt", "ru", "ar")
INTERIM_SCAFFOLD_LOCALES = tuple(locale for locale in SCAFFOLD_LOCALES if locale != "es")
SAMPLE_SETUP_LOCALES = ("es", "fr", "zh-CN", "ar")
P0_KEY = "cli.prompt.language_choice"

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
    (root / LOCALISATION_CONFIG_FILENAME).write_text(
        yaml.dump({"localisation": {"language": language}}),
        encoding="utf-8",
    )


def _read_localisation(path: Path) -> dict:
    with open(path, encoding="utf-8") as handle:
        return yaml.safe_load(handle)["localisation"]


def _init_args(**overrides):
    defaults = {
        "force": False,
        "backend": "git-submodule",
        "locale": None,
        "language": None,
        "non_interactive": True,
    }
    defaults.update(overrides)
    return argparse.Namespace(**defaults)


def _rw_chain_changelog(root: Path, *, language: str):
    """RW path: persist language then scaffold changelog."""
    loc = _load_loc()
    install = _load_installer()
    loc.ensure_localisation_config(
        root,
        language=language,
        non_interactive=True,
        force=False,
        dry_run=False,
    )
    config = {
        "main_changelog": "CHANGELOG.md",
        "project_name": "e2e-project",
    }
    result = install.ensure_main_changelog_scaffold(
        root,
        config,
        dry_run=False,
        interactive=False,
        create_if_missing=True,
    )
    return result, (root / "CHANGELOG.md")


@pytest.fixture
def loc():
    mod = _load_loc()
    mod._KEY_CATALOG_CACHE.clear()
    return mod


@pytest.mark.parametrize("locale", SCAFFOLD_LOCALES)
def test_p3e1_resolve_language_honours_config(locale: str, loc):
    """P3E1: resolve_language returns configured scaffold locale tag."""
    with tempfile.TemporaryDirectory() as tmp:
        root = Path(tmp)
        _write_config(root, locale)
        assert loc.resolve_language(root) == loc.map_to_supported_locale(locale)


@pytest.mark.parametrize("locale", SCAFFOLD_LOCALES)
def test_p3e2_locale_message_resolves_p0_key(locale: str, loc):
    """P3E2: P0 key resolves to non-empty string for each scaffold locale."""
    with tempfile.TemporaryDirectory() as tmp:
        root = Path(tmp)
        _write_config(root, locale)
        text = loc.locale_message(root, P0_KEY, language=locale)
        assert text
        assert isinstance(text, str)


@pytest.mark.parametrize("locale", INTERIM_SCAFFOLD_LOCALES)
def test_p3e3_interim_copy_matches_en_gb(locale: str, loc):
    """P3E3: interim-copy scaffold locale equals en-GB for P0 key (es excluded post T01)."""
    with tempfile.TemporaryDirectory() as tmp:
        root = Path(tmp)
        _write_config(root, locale)
        gb = loc.locale_message(root, P0_KEY, language="en-GB")
        target = loc.locale_message(root, P0_KEY, language=locale)
        assert target == gb


@pytest.mark.parametrize("locale", SCAFFOLD_LOCALES)
def test_p3e4_render_changelog_stub_substituted(locale: str, loc):
    """P3E4: changelog_stub renders with substitutions for each locale."""
    with tempfile.TemporaryDirectory() as tmp:
        root = Path(tmp)
        _write_config(root, locale)
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


@pytest.mark.parametrize("locale", SCAFFOLD_LOCALES)
def test_p3e5_kanban_intake_template_locale_path(locale: str, loc):
    """P3E5: intake template path includes configured locale directory."""
    with tempfile.TemporaryDirectory() as tmp:
        root = Path(tmp)
        _write_config(root, locale)
        path = loc.resolve_kanban_intake_template(
            root,
            "fr",
            frameworks_root=FRAMEWORKS_ROOT,
        )
        normalized = str(path).replace("\\", "/")
        assert f"locales/{locale}" in normalized


@pytest.mark.parametrize("locale", SAMPLE_SETUP_LOCALES)
@patch("cli.commands.init.print_session_banner")
def test_p3e6_cli_init_locale_persists_config(_banner, locale: str, tmp_path):
    """P3E6: CLI init --locale persists scaffold locale in config."""
    command = InitCommand(_init_args(locale=locale))
    original_cwd = os.getcwd()
    try:
        os.chdir(tmp_path)
        assert command.execute() == 0
        payload = _read_localisation(tmp_path / LOCALISATION_CONFIG_FILENAME)
        assert payload["language"] == locale
    finally:
        os.chdir(original_cwd)


@pytest.mark.parametrize("locale", SAMPLE_SETUP_LOCALES)
def test_p3e7_rw_installer_scaffold_persists_locale(locale: str):
    """P3E7: RW installer scaffolds changelog and persists locale config."""
    with tempfile.TemporaryDirectory() as tmp:
        root = Path(tmp)
        result, changelog = _rw_chain_changelog(root, language=locale)
        assert result.status == "created"
        assert changelog.is_file()
        assert changelog.read_text(encoding="utf-8")
        assert _read_localisation(root / LOCALISATION_CONFIG_FILENAME)["language"] == locale


def test_p3e8_missing_key_falls_back_to_en_gb(loc):
    """P3E8: removed target key resolves via en-GB fallback chain."""
    with tempfile.TemporaryDirectory() as tmp:
        root = Path(tmp)
        fw = root / "frameworks" / "workflow-mgt"
        locales = fw / "locales"
        (locales / "es" / "keys").mkdir(parents=True)
        (locales / "en-GB" / "keys").mkdir(parents=True)
        (locales / "en-GB" / "keys" / "cli.yaml").write_text(
            "keys:\n  cli.prompt.language_choice: UK prompt from fixture\n",
            encoding="utf-8",
        )
        (locales / "es" / "keys" / "cli.yaml").write_text(
            "keys:\n  cli.other.key: es-only\n",
            encoding="utf-8",
        )
        manifest = {
            "version": 2,
            "default_locale": "en-GB",
            "framework": "workflow-mgt",
            "locales": {
                "en-GB": {"keys": {"cli": "keys/cli.yaml"}},
                "es": {"keys": {"cli": "keys/cli.yaml"}},
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
            P0_KEY,
            package="workflow-mgt",
            language="es",
            frameworks_root=fw.parent,
        )
        assert result == "UK prompt from fixture"


def test_p3e9_missing_scaffold_falls_back_to_en_us_or_canonical(loc):
    """P3E9: missing scaffold file falls back through chain."""
    with tempfile.TemporaryDirectory() as tmp:
        root = Path(tmp)
        fw = root / "frameworks" / "workflow-mgt"
        locales = fw / "locales"
        (locales / "en-US" / "scaffolds").mkdir(parents=True)
        us_stub = locales / "en-US" / "scaffolds" / "changelog_stub.md"
        us_stub.write_text("# US changelog for {{project_name}}\n", encoding="utf-8")
        manifest = {
            "version": 2,
            "default_locale": "en-GB",
            "framework": "workflow-mgt",
            "locales": {
                "en-GB": {"scaffolds": {"changelog_stub": "scaffolds/changelog_stub.md"}},
                "en-US": {"scaffolds": {"changelog_stub": "scaffolds/changelog_stub.md"}},
                "es": {"scaffolds": {"changelog_stub": "scaffolds/changelog_stub.md"}},
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
            category="scaffolds",
            key="changelog_stub",
            language="es",
            project_root=project,
        )
        assert path == us_stub.resolve()


def test_p3e10_validate_locale_translations_repo_corpus():
    """P3E10: structural validation passes on full repo corpus."""
    result = subprocess.run(
        [sys.executable, str(VALIDATE_SCRIPT), "--package", "all"],
        cwd=REPO_ROOT,
        capture_output=True,
        text=True,
        check=False,
    )
    assert result.returncode == 0, result.stderr or result.stdout


def test_p3e11_report_locale_completeness_json():
    """P3E11: completeness report runs for all scaffold locales."""
    result = subprocess.run(
        [sys.executable, str(REPORT_SCRIPT), "--package", "all", "--format", "json"],
        cwd=REPO_ROOT,
        capture_output=True,
        text=True,
        check=False,
    )
    assert result.returncode == 0, result.stderr or result.stdout
    assert "locales" in result.stdout or "structural" in result.stdout.lower()

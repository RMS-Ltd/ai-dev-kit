"""Tests for RW installer language selection (E21:S01:T03 / FR-006 Phase 1)."""

import importlib.util
import sys
import tempfile
from pathlib import Path

import pytest
import yaml

REPO_ROOT = Path(__file__).resolve().parent.parent
LOC_SCRIPT = REPO_ROOT / "packages" / "frameworks" / "workflow-mgt" / "scripts" / "localisation_config.py"
INSTALL_SCRIPT = REPO_ROOT / "packages" / "frameworks" / "workflow-mgt" / "scripts" / "install_release_workflow.py"


def _load_localisation_module():
    spec = importlib.util.spec_from_file_location("localisation_config", LOC_SCRIPT)
    module = importlib.util.module_from_spec(spec)
    assert spec is not None and spec.loader is not None
    sys.modules["localisation_config"] = module
    spec.loader.exec_module(module)
    return module


def _load_install_module():
    spec = importlib.util.spec_from_file_location("install_release_workflow", INSTALL_SCRIPT)
    module = importlib.util.module_from_spec(spec)
    assert spec is not None and spec.loader is not None
    spec.loader.exec_module(module)
    return module


def _read_localisation(path: Path) -> dict:
    with open(path, encoding="utf-8") as handle:
        return yaml.safe_load(handle)["localisation"]


@pytest.fixture
def loc_mod():
    return _load_localisation_module()


def test_t1_non_interactive_defaults_en_gb(loc_mod):
    """T1: non-interactive resolves to en-GB."""
    locale = loc_mod.resolve_language_from_args(None, non_interactive=True)
    assert locale == {"language": "en-GB", "variant": "UK"}


def test_t2_language_flag_en_us(loc_mod):
    """T2: --language en-US resolves to US payload."""
    locale = loc_mod.resolve_language_from_args("en-US", non_interactive=False)
    assert locale == {"language": "en-US", "variant": "US"}


def test_t3_interactive_choice_two(loc_mod, monkeypatch):
    """T3: interactive input 2 selects en-US."""
    monkeypatch.setattr("builtins.input", lambda _: "2")
    locale = loc_mod.prompt_language_choice()
    assert locale["language"] == "en-US"


def test_t4_interactive_default_empty(loc_mod, monkeypatch):
    """T4: interactive default/empty selects en-GB."""
    monkeypatch.setattr("builtins.input", lambda _: "")
    locale = loc_mod.prompt_language_choice()
    assert locale["language"] == "en-GB"


def test_t5_ensure_creates_yaml(loc_mod):
    """T5: ensure_localisation_config creates file when missing."""
    with tempfile.TemporaryDirectory() as tmp:
        root = Path(tmp)
        result = loc_mod.ensure_localisation_config(
            root, non_interactive=True, dry_run=False
        )
        config_path = root / loc_mod.LOCALISATION_CONFIG_FILENAME
        assert result == config_path
        assert config_path.exists()
        assert _read_localisation(config_path)["language"] == "en-GB"


def test_t6_existing_file_skip_without_force(loc_mod):
    """T6: existing file without --force is unchanged."""
    with tempfile.TemporaryDirectory() as tmp:
        root = Path(tmp)
        config_path = root / loc_mod.LOCALISATION_CONFIG_FILENAME
        config_path.write_text(
            "localisation:\n  language: en-US\n  variant: US\n",
            encoding="utf-8",
        )
        result = loc_mod.ensure_localisation_config(
            root, non_interactive=True, force=False
        )
        assert result is None
        assert _read_localisation(config_path)["language"] == "en-US"


def test_t7_existing_file_force_overwrites(loc_mod):
    """T7: --force overwrites existing file."""
    with tempfile.TemporaryDirectory() as tmp:
        root = Path(tmp)
        config_path = root / loc_mod.LOCALISATION_CONFIG_FILENAME
        config_path.write_text(
            "localisation:\n  language: en-US\n  variant: US\n",
            encoding="utf-8",
        )
        loc_mod.ensure_localisation_config(
            root, language="en-GB", non_interactive=True, force=True
        )
        assert _read_localisation(config_path)["language"] == "en-GB"


def test_t8_dry_run_no_file_written(loc_mod, capsys):
    """T8: dry-run prints intent without writing file."""
    with tempfile.TemporaryDirectory() as tmp:
        root = Path(tmp)
        config_path = root / loc_mod.LOCALISATION_CONFIG_FILENAME
        result = loc_mod.ensure_localisation_config(
            root, non_interactive=True, dry_run=True
        )
        assert result is None
        assert not config_path.exists()
        captured = capsys.readouterr()
        assert "DRY RUN" in captured.out


def test_t9_language_step_before_rw_config_collection():
    """T9: ensure_localisation_config is invoked before collect_config_interactive in main."""
    source = INSTALL_SCRIPT.read_text(encoding="utf-8")
    main_body = source.split("def main():", 1)[1]
    ensure_idx = main_body.index("ensure_localisation_config(")
    collect_idx = main_body.index("collect_config_interactive(")
    assert ensure_idx < collect_idx

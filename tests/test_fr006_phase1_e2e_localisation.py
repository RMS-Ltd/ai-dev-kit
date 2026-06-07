"""FR-006 Phase 1 end-to-end localisation tests (E21:S01:T07)."""

from __future__ import annotations

import argparse
import importlib.util
import os
import re
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
FRAMEWORKS_ROOT = REPO_ROOT / "packages" / "frameworks"
POST_TEMPLATE_GUIDE = (
    REPO_ROOT / "docs/documentation/user-docs/framework-dependency-post-template-setup-guide.md"
)
CONFIG_EXAMPLE = (
    REPO_ROOT
    / "packages/frameworks/workflow-mgt/config/examples/ai-dev-kit-config.example.yaml"
)

TEMPLATE_KEYS = ("fr", "br", "uxr", "fb", "task", "story", "epic", "plan_doc")

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
    spec.loader.exec_module(module)
    return module


def _read_localisation(path: Path) -> dict:
    with open(path, encoding="utf-8") as handle:
        return yaml.safe_load(handle)["localisation"]


def _init_args(**overrides):
    defaults = {
        "force": False,
        "backend": "git-submodule",
        "language": None,
        "non_interactive": True,
    }
    defaults.update(overrides)
    return argparse.Namespace(**defaults)


def _uk_markers(text: str) -> bool:
    return bool(re.search(r"colour|organise", text, re.IGNORECASE))


def _us_markers(text: str) -> bool:
    return bool(re.search(r"color|organize", text, re.IGNORECASE))


def _rw_chain_changelog(root: Path, *, language: str | None = None, force: bool = False):
    """RW path: persist language then scaffold changelog."""
    loc = _load_loc()
    install = _load_installer()
    loc.ensure_localisation_config(
        root,
        language=language,
        non_interactive=True,
        force=force,
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


def test_e1_rw_en_us_config_produces_us_changelog():
    """E1: RW ensure_localisation_config(en-US) → US changelog markers."""
    with tempfile.TemporaryDirectory() as tmp:
        root = Path(tmp)
        result, changelog = _rw_chain_changelog(root, language="en-US")
        assert result.status == "created"
        content = changelog.read_text(encoding="utf-8")
        assert _us_markers(content)
        assert _read_localisation(root / LOCALISATION_CONFIG_FILENAME)["language"] == "en-US"


def test_e2_rw_default_en_gb_produces_uk_changelog():
    """E2: RW non-interactive default → UK changelog markers."""
    with tempfile.TemporaryDirectory() as tmp:
        root = Path(tmp)
        result, changelog = _rw_chain_changelog(root, language=None)
        assert result.status == "created"
        content = changelog.read_text(encoding="utf-8")
        assert _uk_markers(content)
        assert _read_localisation(root / LOCALISATION_CONFIG_FILENAME)["language"] == "en-GB"


@patch("cli.commands.init.print_session_banner")
def test_e3_cli_init_en_us_then_intake_template_us_markers(_banner, tmp_path):
    """E3: CLI init en-US + resolve_kanban_intake_template → US template path."""
    loc = _load_loc()
    command = InitCommand(_init_args(language="en-US", non_interactive=False))
    original_cwd = os.getcwd()
    try:
        os.chdir(tmp_path)
        assert command.execute() == 0
        path = loc.resolve_kanban_intake_template(
            tmp_path, "fr", frameworks_root=FRAMEWORKS_ROOT
        )
        assert "en-US" in str(path)
        assert _us_markers(path.read_text(encoding="utf-8"))
    finally:
        os.chdir(original_cwd)


@pytest.mark.parametrize("template_key", TEMPLATE_KEYS)
def test_e4_all_intake_keys_locale_aware(template_key: str):
    """E4: Each intake key resolves to distinct en-GB vs en-US locale files."""
    loc = _load_loc()
    with tempfile.TemporaryDirectory() as tmp:
        root = Path(tmp)
        (root / LOCALISATION_CONFIG_FILENAME).write_text(
            "localisation:\n  language: en-GB\n  variant: UK\n",
            encoding="utf-8",
        )
        gb_path = loc.resolve_kanban_intake_template(
            root, template_key, frameworks_root=FRAMEWORKS_ROOT
        )
        (root / LOCALISATION_CONFIG_FILENAME).write_text(
            "localisation:\n  language: en-US\n  variant: US\n",
            encoding="utf-8",
        )
        us_path = loc.resolve_kanban_intake_template(
            root, template_key, frameworks_root=FRAMEWORKS_ROOT
        )
        assert gb_path != us_path
        assert "en-GB" in str(gb_path)
        assert "en-US" in str(us_path)
        assert _uk_markers(gb_path.read_text(encoding="utf-8"))
        assert _us_markers(us_path.read_text(encoding="utf-8"))


@patch("cli.commands.init.print_session_banner")
def test_e5_cross_path_schema_consistency_en_us(_banner, tmp_path):
    """E5: RW and CLI init write identical localisation dict for en-US."""
    loc = _load_loc()
    rw_root = tmp_path / "rw"
    rw_root.mkdir()
    loc.ensure_localisation_config(
        rw_root, language="en-US", non_interactive=True, force=True
    )
    rw_payload = _read_localisation(rw_root / LOCALISATION_CONFIG_FILENAME)

    cli_root = tmp_path / "cli"
    cli_root.mkdir()
    (cli_root / ".git").mkdir()
    command = InitCommand(_init_args(language="en-US", non_interactive=False))
    original_cwd = os.getcwd()
    try:
        os.chdir(cli_root)
        assert command.execute() == 0
        cli_payload = _read_localisation(cli_root / LOCALISATION_CONFIG_FILENAME)
    finally:
        os.chdir(original_cwd)

    assert rw_payload == cli_payload == {"language": "en-US", "variant": "US"}


def test_e6_t01_post_template_static_contract():
    """E6: Post-template guide Step 0 + example config en-GB default."""
    guide = POST_TEMPLATE_GUIDE.read_text(encoding="utf-8")
    assert "Step 0" in guide
    assert "ai-dev-kit-config.yaml" in guide
    example = yaml.safe_load(CONFIG_EXAMPLE.read_text(encoding="utf-8"))
    assert example["localisation"]["language"] == "en-GB"
    assert example["localisation"]["variant"] == "UK"


def test_e7_regression_bundle_modules_importable():
    """E7: FR-006 regression modules are importable (smoke for bundle)."""
    assert LOC_SCRIPT.is_file()
    assert INSTALL_SCRIPT.is_file()
    assert _load_loc() is not None
    assert _load_installer() is not None


def test_e8_force_reselection_updates_changelog_to_us():
    """E8: force en-US after en-GB updates config and US changelog on re-scaffold."""
    with tempfile.TemporaryDirectory() as tmp:
        root = Path(tmp)
        _rw_chain_changelog(root, language="en-GB")
        first = (root / "CHANGELOG.md").read_text(encoding="utf-8")
        assert _uk_markers(first)
        (root / "CHANGELOG.md").unlink()
        result, changelog = _rw_chain_changelog(root, language="en-US", force=True)
        assert result.status == "created"
        assert _read_localisation(root / LOCALISATION_CONFIG_FILENAME)["language"] == "en-US"
        assert _us_markers(changelog.read_text(encoding="utf-8"))

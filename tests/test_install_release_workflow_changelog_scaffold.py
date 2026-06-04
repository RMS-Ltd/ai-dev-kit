"""Tests for RW installer main_changelog scaffold (GitHub #19)."""

import importlib.util
import tempfile
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent
SCRIPT_PATH = REPO_ROOT / "packages" / "frameworks" / "workflow-mgt" / "scripts" / "install_release_workflow.py"


def _load_module():
    spec = importlib.util.spec_from_file_location("install_release_workflow", SCRIPT_PATH)
    module = importlib.util.module_from_spec(spec)
    assert spec is not None and spec.loader is not None
    spec.loader.exec_module(module)
    return module


def test_render_changelog_stub():
    mod = _load_module()
    text = mod.render_changelog_stub("expenses-tracker")
    assert "# Changelog" in text
    assert "expenses-tracker" in text
    assert "## [Unreleased]" in text


def test_ensure_changelog_scaffold_creates_file():
    mod = _load_module()
    with tempfile.TemporaryDirectory() as tmp:
        root = Path(tmp)
        config = {
            "main_changelog": "CHANGELOG.md",
            "project_name": "my-project",
        }
        result = mod.ensure_main_changelog_scaffold(
            root,
            config,
            dry_run=False,
            interactive=False,
            create_if_missing=True,
        )
        assert result.status == "created"
        assert not result.main_changelog_missing
        cl = root / "CHANGELOG.md"
        assert cl.is_file()
        assert "Keep a Changelog" in cl.read_text(encoding="utf-8")


def test_ensure_changelog_scaffold_skips_when_exists():
    mod = _load_module()
    with tempfile.TemporaryDirectory() as tmp:
        root = Path(tmp)
        cl = root / "CHANGELOG.md"
        cl.write_text("# Existing\n", encoding="utf-8")
        config = {"main_changelog": "CHANGELOG.md"}
        result = mod.ensure_main_changelog_scaffold(
            root,
            config,
            interactive=False,
            create_if_missing=True,
        )
        assert result.status == "skipped_exists"
        assert cl.read_text(encoding="utf-8") == "# Existing\n"

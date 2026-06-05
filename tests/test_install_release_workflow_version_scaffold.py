"""Tests for RW installer version_file scaffold (BR-088 / E06:S09:T19)."""

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


def test_render_version_stub_devkit_schema():
    mod = _load_module()
    text = mod.render_version_py_stub(devkit_schema=True)
    assert "VERSION_RC = 0" in text
    assert "VERSION_EPIC = 1" in text
    assert "VERSION_STRING = f" in text
    assert mod.DEVKIT_VERSIONING_SCHEMA in text


def test_ensure_scaffold_creates_parents_and_file():
    mod = _load_module()
    with tempfile.TemporaryDirectory() as tmp:
        root = Path(tmp)
        config = {
            "version_file": "src/myapp/version.py",
            "versioning_schema": mod.DEVKIT_VERSIONING_SCHEMA,
        }
        result = mod.ensure_version_file_scaffold(
            root,
            config,
            dry_run=False,
            interactive=False,
            create_if_missing=True,
        )
        assert result.status == "created"
        assert not result.version_file_missing
        vf = root / "src/myapp/version.py"
        assert vf.is_file()
        assert "VERSION_BUILD = 1" in vf.read_text(encoding="utf-8")


def test_ensure_scaffold_skips_when_exists():
    mod = _load_module()
    with tempfile.TemporaryDirectory() as tmp:
        root = Path(tmp)
        vf = root / "version.py"
        vf.write_text("VERSION_RC = 0\n", encoding="utf-8")
        config = {"version_file": "version.py"}
        result = mod.ensure_version_file_scaffold(
            root,
            config,
            interactive=False,
            create_if_missing=True,
        )
        assert result.status == "skipped_exists"
        assert vf.read_text(encoding="utf-8") == "VERSION_RC = 0\n"


def test_ensure_scaffold_decline_sets_missing_flag():
    mod = _load_module()
    with tempfile.TemporaryDirectory() as tmp:
        root = Path(tmp)
        config = {
            "version_file": "src/app/version.py",
            "versioning_schema": mod.DEVKIT_VERSIONING_SCHEMA,
        }
        result = mod.ensure_version_file_scaffold(
            root,
            config,
            dry_run=False,
            interactive=False,
            create_if_missing=False,
        )
        assert result.status == "declined"
        assert result.version_file_missing
        assert not (root / "src/app/version.py").exists()


def test_ensure_scaffold_dry_run_no_write(capsys):
    mod = _load_module()
    with tempfile.TemporaryDirectory() as tmp:
        root = Path(tmp)
        config = {
            "version_file": "src/x/version.py",
            "versioning_schema": mod.DEVKIT_VERSIONING_SCHEMA,
        }
        result = mod.ensure_version_file_scaffold(
            root,
            config,
            dry_run=True,
            interactive=False,
        )
        assert result.status == "dry_run_would_create"
        assert not (root / "src/x/version.py").exists()
        out = capsys.readouterr().out
        assert "DRY RUN" in out

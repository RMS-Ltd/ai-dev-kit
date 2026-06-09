"""Tests for Obsidian maintainer editor profile install (FR-121 / E05:S08:T07)."""

import importlib.util
import subprocess
import sys
import tempfile
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent
SCRIPT_PATH = REPO_ROOT / "packages" / "frameworks" / "workflow-mgt" / "scripts" / "install_release_workflow.py"
INSTALL_DOC = REPO_ROOT / "INSTALL_IN_YOUR_PROJECT.md"
GREENFIELD_SCRIPT = (
    REPO_ROOT / "packages" / "frameworks" / "workflow-mgt" / "scripts" / "install_greenfield_path.py"
)


def _load_module():
    spec = importlib.util.spec_from_file_location("install_release_workflow", SCRIPT_PATH)
    module = importlib.util.module_from_spec(spec)
    assert spec is not None and spec.loader is not None
    spec.loader.exec_module(module)
    return module


def _minimal_config(profile: str = "none") -> dict:
    return {
        "project_name": "test",
        "version_file": "version.py",
        "main_changelog": "CHANGELOG.md",
        "changelog_dir": "docs/changelogs",
        "scripts_path": "scripts",
        "readme_file": "README.md",
        "use_kanban": False,
        "maintainer_editor_profile": profile,
    }


def test_generate_rw_config_yaml_includes_documentation_surfaces_and_profile():
    mod = _load_module()
    yaml_text = mod.generate_rw_config_yaml(_minimal_config("obsidian-team"))
    assert "documentation_surfaces:" in yaml_text
    assert "maintainer_kb:" in yaml_text
    assert "sot: git" in yaml_text
    assert "maintainer_editor_profile: obsidian-team" in yaml_text


def test_apply_profile_none_is_noop():
    mod = _load_module()
    with tempfile.TemporaryDirectory() as tmp:
        root = Path(tmp)
        (root / ".gitignore").write_text("node_modules/\n", encoding="utf-8")
        result = mod.apply_maintainer_editor_profile(root, "none")
        assert result.status == "skipped"
        assert not (root / "docs").exists()


def test_apply_profile_personal_creates_quickstart_and_gitignore():
    mod = _load_module()
    with tempfile.TemporaryDirectory() as tmp:
        root = Path(tmp)
        result = mod.apply_maintainer_editor_profile(root, "obsidian-personal")
        assert result.status == "created"
        quickstart = root / mod.OBSIDIAN_PERSONAL_QUICKSTART_REL
        assert quickstart.is_file()
        gitignore = (root / ".gitignore").read_text(encoding="utf-8")
        assert ".obsidian/" in gitignore


def test_apply_profile_team_copies_stable_config_and_gitignores_workspace():
    mod = _load_module()
    with tempfile.TemporaryDirectory() as tmp:
        root = Path(tmp)
        result = mod.apply_maintainer_editor_profile(root, "obsidian-team")
        assert result.status == "created"
        obsidian = root / ".obsidian"
        assert (obsidian / "app.json").is_file()
        assert (obsidian / "community-plugins.json").is_file()
        gitignore = (root / ".gitignore").read_text(encoding="utf-8")
        assert ".obsidian/workspace.json" in gitignore
        assert ".obsidian/plugins/" in gitignore


def test_merge_gitignore_lines_idempotent():
    mod = _load_module()
    with tempfile.TemporaryDirectory() as tmp:
        root = Path(tmp)
        (root / ".gitignore").write_text(".obsidian/\n", encoding="utf-8")
        changed = mod.merge_gitignore_lines(root, mod.OBSIDIAN_PERSONAL_GITIGNORE_LINES)
        assert changed is False


def test_install_doc_mentions_all_profiles():
    text = INSTALL_DOC.read_text(encoding="utf-8")
    assert "obsidian-personal" in text
    assert "obsidian-team" in text
    assert "maintainer_editor_profile" in text or "Maintainer editor profile" in text


def test_cli_non_interactive_team_profile(tmp_path: Path):
    result = subprocess.run(
        [
            sys.executable,
            str(SCRIPT_PATH),
            "--project-root",
            str(tmp_path),
            "--non-interactive",
            "--maintainer-editor-profile",
            "obsidian-team",
            "--dry-run",
        ],
        cwd=REPO_ROOT,
        capture_output=True,
        text=True,
        check=False,
    )
    assert result.returncode == 0, result.stderr
    assert "maintainer_editor_profile: obsidian-team" in result.stdout


def test_greenfield_build_rw_command_forwards_profile():
    spec = importlib.util.spec_from_file_location("install_greenfield_path", GREENFIELD_SCRIPT)
    module = importlib.util.module_from_spec(spec)
    assert spec is not None and spec.loader is not None
    spec.loader.exec_module(module)
    cmd = module.build_rw_command(
        REPO_ROOT,
        project_root=REPO_ROOT,
        rw_mode="c",
        config=None,
        non_interactive=True,
        maintainer_editor_profile="obsidian-personal",
    )
    assert "--maintainer-editor-profile" in cmd
    assert "obsidian-personal" in cmd

"""BR-082 / E06:S09:T11: RW installer dependency preflight."""

from __future__ import annotations

import importlib.util
import subprocess
import sys
from pathlib import Path
from unittest.mock import patch

import pytest

REPO_ROOT = Path(__file__).resolve().parent.parent
SCRIPT_PATH = REPO_ROOT / "packages/frameworks/workflow mgt/scripts/install_release_workflow.py"
INSTALL_DOC = REPO_ROOT / "INSTALL_IN_YOUR_PROJECT.md"


def _load_module():
    spec = importlib.util.spec_from_file_location("install_release_workflow", SCRIPT_PATH)
    module = importlib.util.module_from_spec(spec)
    assert spec is not None and spec.loader is not None
    spec.loader.exec_module(module)
    return module


def test_check_dependencies_missing_yaml_reports_pyyaml():
    """T1: missing yaml import → not ok; help cites pip install."""
    mod = _load_module()
    with patch("importlib.util.find_spec", return_value=None):
        ok, missing = mod.check_dependencies()
    assert not ok
    assert "pyyaml" in missing
    help_text = mod.format_dependency_help(missing)
    assert "pip install" in help_text
    assert "pyyaml>=6.0" in help_text


def test_check_deps_flag_ok_when_yaml_installed(tmp_path: Path) -> None:
    """T2: --check-deps exits 0 when PyYAML is available."""
    result = subprocess.run(
        [sys.executable, str(SCRIPT_PATH), "--check-deps", "--project-root", str(tmp_path)],
        capture_output=True,
        text=True,
        timeout=30,
    )
    assert result.returncode == 0, result.stderr + result.stdout
    assert "OK" in result.stdout
    assert "pyyaml" in result.stdout.lower()


def test_dry_run_with_config_reaches_output_without_interactive(tmp_path: Path) -> None:
    """T2b: dry-run + --config completes when deps present."""
    config = tmp_path / "rw-config.yaml"
    config.write_text(
        "\n".join(
            [
                "version_file: src/app/version.py",
                "main_changelog: CHANGELOG.md",
                "changelog_dir: docs/changelogs",
                "scripts_path: scripts",
                "readme_file: README.md",
                "use_kanban: false",
            ]
        ),
        encoding="utf-8",
    )
    result = subprocess.run(
        [
            sys.executable,
            str(SCRIPT_PATH),
            "--dry-run",
            "--config",
            str(config),
            "--project-root",
            str(tmp_path),
        ],
        capture_output=True,
        text=True,
        timeout=60,
    )
    assert result.returncode == 0, result.stderr + result.stdout
    assert "Generated rw-config.yaml" in result.stdout


def test_install_doc_lists_deps_before_install_release_workflow_command():
    """T3: INSTALL spine documents venv deps before RW install command."""
    text = INSTALL_DOC.read_text(encoding="utf-8")
    deps_idx = text.index("Installer venv dependencies")
    rw_cmd = 'install_release_workflow.py" --mode c'
    assert rw_cmd in text
    assert text.index(rw_cmd) > deps_idx
    assert "pyyaml>=6.0" in text[deps_idx : text.index(rw_cmd)]


def test_check_deps_cli_exits_one_when_yaml_missing(capsys) -> None:
    """T1b: --check-deps exits 1 with pip install guidance when yaml missing."""
    mod = _load_module()
    with patch.object(mod, "check_dependencies", return_value=(False, ["pyyaml"])):
        with patch.object(sys, "argv", ["install_release_workflow.py", "--check-deps"]):
            with pytest.raises(SystemExit) as exc:
                mod.main()
    assert exc.value.code == 1
    captured = capsys.readouterr()
    assert "pip install" in captured.err
    assert "pyyaml" in captured.err.lower()

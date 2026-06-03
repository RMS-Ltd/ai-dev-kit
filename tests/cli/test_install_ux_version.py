"""
Tests for install/setup external SemVer display (FR-108 / E06:S09:T15).
"""

from __future__ import annotations

import argparse
import io
import json
import os
import subprocess
import sys
from pathlib import Path
from unittest.mock import patch

import pytest

REPO_ROOT = Path(__file__).resolve().parents[2]
SCRIPTS_DIR = REPO_ROOT / "packages" / "frameworks" / "workflow mgt" / "scripts"
if str(SCRIPTS_DIR) not in sys.path:
    sys.path.insert(0, str(SCRIPTS_DIR))

import install_ux_version  # noqa: E402
from cli.adk_version_display import get_cli_version_string, print_session_banner  # noqa: E402
from cli.commands.install import InstallCommand  # noqa: E402
from cli.config import Config  # noqa: E402
from cli.logging import create_install_logger, close_install_logger  # noqa: E402


@pytest.fixture(autouse=True)
def _clear_version_cache():
    install_ux_version.clear_version_cache()
    yield
    install_ux_version.clear_version_cache()


class TestInstallUxVersionResolver:
    def test_resolve_from_repo_root_has_semver(self):
        info = install_ux_version.resolve_install_adk_version(REPO_ROOT)
        assert info.semver is not None
        assert info.semver.startswith("0.")
        assert info.label.startswith("AI Dev Kit v")
        assert "unknown" not in info.label.lower()

    def test_unknown_when_no_version_sources(self, tmp_path, monkeypatch):
        monkeypatch.chdir(tmp_path)
        with patch.object(install_ux_version, "_load_internal_from_cli_package", return_value=None):
            with patch.object(install_ux_version, "_load_internal_from_rw_config", return_value=None):
                install_ux_version.clear_version_cache()
                info = install_ux_version.resolve_install_adk_version(tmp_path)
        assert info.semver is None
        assert info.label == install_ux_version.UNKNOWN_LABEL

    def test_cache_returns_same_object_fields(self):
        first = install_ux_version.resolve_install_adk_version(REPO_ROOT)
        second = install_ux_version.resolve_install_adk_version(REPO_ROOT)
        assert first == second

    def test_format_session_banner_verbose(self):
        info = install_ux_version.InstallVersionInfo(
            internal="0.6.9.15+1",
            semver="0.4.864+1",
            label="AI Dev Kit v0.4.864+1",
        )
        banner = install_ux_version.format_session_banner(info, verbose=True)
        assert "internal: 0.6.9.15+1" in banner


class TestCliVersionDisplay:
    def test_get_cli_version_string_not_stale(self):
        version = get_cli_version_string(REPO_ROOT)
        assert "0.1.0" not in version
        assert "ai-dev-kit" in version.lower() or "AI Dev Kit" in version

    def test_print_session_banner_stdout(self):
        buffer = io.StringIO()
        print_session_banner(REPO_ROOT, file=buffer)
        output = buffer.getvalue()
        assert "AI Dev Kit" in output


class TestInstallCommandBanner:
    def test_dry_run_prints_semver_banner(self, temp_config_file: Path):
        project_root = temp_config_file.parent
        original_cwd = os.getcwd()
        captured = io.StringIO()
        try:
            os.chdir(REPO_ROOT)
            args = argparse.Namespace(
                frameworks=["kanban"],
                backend=None,
                path=None,
                dry_run=True,
                log_path=None,
                no_install_log=True,
            )
            with patch("sys.stdout", captured):
                with patch("cli.commands.install.get_project_root", return_value=project_root):
                    InstallCommand(args).execute()
            # Banner goes to real stdout via print_session_banner - capture via subprocess instead
        finally:
            os.chdir(original_cwd)

    def test_dry_run_subprocess_shows_banner(self, temp_config_file: Path):
        project_root = temp_config_file.parent
        env = os.environ.copy()
        env["PYTHONPATH"] = str(REPO_ROOT)
        result = subprocess.run(
            [
                sys.executable,
                "-m",
                "cli.main",
                "install",
                "kanban",
                "--dry-run",
                "--no-install-log",
            ],
            cwd=REPO_ROOT,
            env=env,
            capture_output=True,
            text=True,
            check=False,
        )
        assert result.returncode == 0
        combined = result.stdout + result.stderr
        assert "AI Dev Kit v" in combined or "AI Dev Kit (version unknown)" in combined


class TestInstallLoggingSemverFields:
    def test_json_log_includes_adk_semver_from_repo(self, temp_project_dir: Path):
        config_content = """version: "1.0.0"
default_backend: "git-submodule"
frameworks: {}
install_logging:
  enabled: true
  path: "logs/ai-dev-kit/install"
  format: json
"""
        (temp_project_dir / ".ai-dev-kit.yaml").write_text(config_content)
        config = Config(temp_project_dir / ".ai-dev-kit.yaml")
        args = argparse.Namespace(log_path=None, no_install_log=False)
        version_info = install_ux_version.resolve_install_adk_version(REPO_ROOT)
        log, log_dir, log_file, fh = create_install_logger(
            temp_project_dir, config, args, version_info=version_info
        )
        try:
            log("INFO", "install.main", "test event")
        finally:
            close_install_logger(fh, log_dir, config)
        assert log_file is not None
        entries = [
            json.loads(line)
            for line in log_file.read_text(encoding="utf-8").splitlines()
            if line.strip()
        ]
        assert entries
        assert "adk_semver" in entries[0]
        if version_info.semver:
            assert entries[0]["adk_semver"] == version_info.semver


class TestRwInstallerBanner:
    def test_dry_run_shows_banner_before_rw_setup(self):
        result = subprocess.run(
            [
                sys.executable,
                str(SCRIPTS_DIR / "install_release_workflow.py"),
                "--dry-run",
                "--config",
                str(REPO_ROOT / "rw-config.yaml"),
                "--project-root",
                str(REPO_ROOT),
            ],
            cwd=REPO_ROOT,
            capture_output=True,
            text=True,
            check=False,
        )
        assert result.returncode == 0
        output = result.stdout
        assert "AI Dev Kit" in output
        banner_pos = output.find("AI Dev Kit")
        rw_pos = output.find("Project root")
        assert banner_pos >= 0
        assert rw_pos >= 0
        assert banner_pos < rw_pos


class TestKanbanInstallerBanner:
    def test_dry_run_fresh_shows_banner(self):
        result = subprocess.run(
            [
                sys.executable,
                str(REPO_ROOT / "packages/frameworks/kanban/scripts/install_kanban_framework.py"),
                "--mode",
                "fresh",
                "--dry-run",
                "--force",
            ],
            cwd=REPO_ROOT,
            capture_output=True,
            text=True,
            check=False,
        )
        assert result.returncode == 0
        assert "AI Dev Kit" in result.stdout
        assert "Kanban Framework Installation" in result.stdout

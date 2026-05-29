"""
Unit tests for the standalone uninstall_package.py script.

Covers FR-008 AC-1..AC-5 for the standalone path (E2:S06:T01).
"""

import importlib.util
import os
import sys
from pathlib import Path
from unittest.mock import patch, MagicMock

import pytest
import yaml

# Load the standalone script as a module (path contains a space)
_UNINSTALL_SCRIPT = Path(__file__).parent.parent / "packages" / "frameworks" / "workflow mgt" / "scripts" / "uninstall_package.py"
spec = importlib.util.spec_from_file_location("uninstall_package", _UNINSTALL_SCRIPT)
uninstall_module = importlib.util.module_from_spec(spec)
sys.modules["uninstall_package"] = uninstall_module
spec.loader.exec_module(uninstall_module)

PackageUninstaller = uninstall_module.PackageUninstaller


class TestStandaloneDryRun:
    """T10: Standalone dry-run produces a valid report without modifying files."""

    def test_dry_run_report(self, tmp_path: Path):
        """Dry run must return a completed report and leave files untouched."""
        fw_path = tmp_path / "packages" / "frameworks" / "workflow-mgmt"
        fw_path.mkdir(parents=True)
        (fw_path / "file.txt").write_text("hello")

        config_file = tmp_path / ".ai-dev-kit.yaml"
        config_file.write_text(yaml.safe_dump({
            "version": "1.0.0",
            "frameworks": {
                "workflow-mgmt": {
                    "backend": "git-submodule",
                    "path": str(fw_path.relative_to(tmp_path)),
                }
            }
        }))

        uninstaller = PackageUninstaller(
            package_name="workflow-mgmt",
            backend="git-submodule",
            dry_run=True,
            force=True,
            project_root=tmp_path,
        )
        report = uninstaller.uninstall()

        assert report["status"] in ("completed", "completed_with_warnings")
        assert report["package"] == "workflow-mgmt"
        assert fw_path.exists(), "Dry-run must not delete files"
        config = yaml.safe_load(config_file.read_text())
        assert "workflow-mgmt" in config.get("frameworks", {})


class TestStandaloneBackup:
    """T11: Standalone script creates a timestamped backup directory."""

    @patch("uninstall_package.subprocess.run")
    def test_backup_created(self, mock_run, tmp_path: Path):
        """A timestamped backup must be created containing framework files and config."""
        mock_run.return_value = MagicMock(returncode=0, stdout="", stderr="")

        fw_path = tmp_path / "packages" / "frameworks" / "workflow-mgmt"
        fw_path.mkdir(parents=True)
        (fw_path / "file.txt").write_text("hello")

        config_file = tmp_path / ".ai-dev-kit.yaml"
        config_file.write_text(yaml.safe_dump({
            "version": "1.0.0",
            "frameworks": {
                "workflow-mgmt": {
                    "backend": "git-submodule",
                    "path": str(fw_path.relative_to(tmp_path)),
                }
            }
        }))

        uninstaller = PackageUninstaller(
            package_name="workflow-mgmt",
            backend="git-submodule",
            dry_run=False,
            force=True,
            project_root=tmp_path,
        )
        report = uninstaller.uninstall()

        assert report["status"] in ("completed", "completed_with_warnings")
        backup_path = report.get("backup_path")
        assert backup_path is not None
        backup_dir = Path(backup_path)
        assert backup_dir.exists()
        assert (backup_dir / "workflow-mgmt" / "file.txt").exists()
        assert (backup_dir / ".ai-dev-kit.yaml").exists()


class TestStandaloneVerification:
    """T12: Verification correctly reports clean state after removal."""

    @patch("uninstall_package.subprocess.run")
    def test_verification_reports_clean_after_removal(self, mock_run, tmp_path: Path):
        """After uninstall, _verify_cleanup must report clean=True."""
        import shutil
        mock_run.return_value = MagicMock(returncode=0, stdout="", stderr="")

        fw_path = tmp_path / "packages" / "frameworks" / "workflow-mgmt"
        fw_path.mkdir(parents=True)
        (fw_path / "file.txt").write_text("hello")

        config_file = tmp_path / ".ai-dev-kit.yaml"
        config_file.write_text(yaml.safe_dump({
            "version": "1.0.0",
            "frameworks": {
                "workflow-mgmt": {
                    "backend": "git-submodule",
                    "path": str(fw_path.relative_to(tmp_path)),
                }
            }
        }))

        uninstaller = PackageUninstaller(
            package_name="workflow-mgmt",
            backend="git-submodule",
            dry_run=False,
            force=True,
            project_root=tmp_path,
        )
        report = uninstaller.uninstall()

        # In tests git is mocked, so files are not actually deleted.
        # Simulate git cleanup and re-verify.
        shutil.rmtree(fw_path)
        verification = uninstaller._verify_cleanup({
            "name": "workflow-mgmt",
            "paths": [str(fw_path)],
            "config_entries": [".ai-dev-kit.yaml"],
        })
        assert verification["clean"] is True
        assert verification["issues_count"] == 0

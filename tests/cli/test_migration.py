import argparse
from pathlib import Path
from unittest.mock import patch

from cli.commands.migrate import MigrateCommand
from cli.migration import DetectedFramework, convert_framework_to_dependency, detect_frameworks, validate_migration


def test_detect_frameworks_returns_empty_for_clean_project(tmp_path: Path):
    detected = detect_frameworks(project_root=tmp_path, search_paths=[tmp_path / "frameworks"])
    assert detected == []


def test_detect_frameworks_finds_workflow_mgmt_signature(tmp_path: Path):
    fw = tmp_path / "frameworks" / "workflow-mgmt"
    (fw / "scripts" / "validation").mkdir(parents=True)
    (fw / "workflows").mkdir(parents=True)
    (fw / "scripts" / "validation" / "validate_branch_context.py").write_text("pass")
    (fw / "workflows" / "release-workflow.yaml").write_text("name: rw")
    detected = detect_frameworks(project_root=tmp_path, search_paths=[tmp_path / "frameworks"])
    assert detected
    assert detected[0].framework_type == "workflow-mgmt"
    assert detected[0].confidence >= 0.5


def test_convert_framework_to_dependency_dry_run(tmp_path: Path):
    fw = DetectedFramework(
        name="workflow-mgmt",
        path=tmp_path / "frameworks" / "workflow-mgmt",
        detected_version=None,
        framework_type="workflow-mgmt",
        confidence=1.0,
    )
    ok, message = convert_framework_to_dependency(fw, project_root=tmp_path, dry_run=True)
    assert ok is True
    assert "Would convert" in message


def test_validate_migration_reports_missing_config(tmp_path: Path):
    valid, issues = validate_migration(project_root=tmp_path)
    assert valid is False
    assert any(".ai-dev-kit.yaml" in issue for issue in issues)


@patch("cli.commands.migrate.get_project_root", return_value=None)
def test_migrate_execute_without_action_returns_error(_mock_root):
    cmd = MigrateCommand(
        argparse.Namespace(
            detect=False,
            convert=False,
            validate=False,
            framework=None,
            backend="git-submodule",
            dry_run=False,
        )
    )
    assert cmd.execute() == 1


@patch("cli.commands.migrate.detect_frameworks")
@patch("cli.commands.migrate.get_project_root")
def test_migrate_detect_path(mock_root, mock_detect, tmp_path: Path):
    mock_root.return_value = tmp_path
    mock_detect.return_value = [
        DetectedFramework(
            name="workflow-mgmt",
            path=tmp_path / "frameworks" / "workflow-mgmt",
            detected_version="1.0.0",
            framework_type="workflow-mgmt",
            confidence=1.0,
        )
    ]
    cmd = MigrateCommand(
        argparse.Namespace(
            detect=True,
            convert=False,
            validate=False,
            framework=None,
            backend="git-submodule",
            dry_run=False,
        )
    )
    assert cmd.execute() == 0


@patch("cli.commands.migrate.convert_framework_to_dependency", return_value=(True, "ok"))
@patch("cli.commands.migrate.detect_frameworks")
@patch("cli.commands.migrate.get_project_root")
def test_migrate_convert_dry_run(mock_root, mock_detect, _mock_convert, tmp_path: Path):
    mock_root.return_value = tmp_path
    mock_detect.return_value = [
        DetectedFramework(
            name="workflow-mgmt",
            path=tmp_path / "frameworks" / "workflow-mgmt",
            detected_version="1.0.0",
            framework_type="workflow-mgmt",
            confidence=1.0,
        )
    ]
    cmd = MigrateCommand(
        argparse.Namespace(
            detect=False,
            convert=True,
            validate=False,
            framework=None,
            backend="git-submodule",
            dry_run=True,
        )
    )
    assert cmd.execute() == 0


@patch("cli.commands.migrate.validate_migration", return_value=(True, []))
@patch("cli.commands.migrate.get_project_root")
def test_migrate_validate_success(mock_root, _mock_validate, tmp_path: Path):
    mock_root.return_value = tmp_path
    cmd = MigrateCommand(
        argparse.Namespace(
            detect=False,
            convert=False,
            validate=True,
            framework=None,
            backend="git-submodule",
            dry_run=False,
        )
    )
    assert cmd.execute() == 0

"""Wave 4 (FR-138 Phase 2) — per-module coverage hardening."""

import argparse
import json
import os
from pathlib import Path
from unittest.mock import MagicMock, patch

import pytest

import cli.adk_install_errors_bridge as bridge
from cli.backends.git_submodule import GitSubmoduleBackend
from cli.backends.git_subtree import GitSubtreeBackend
from cli.backends.package_manager import NpmBackend, PipBackend
from cli.commands.install import InstallCommand, parse_framework_spec
from cli.commands.logs import LogsCommand
from cli.commands.remove import RemoveCommand
from cli.config import Config
from cli.migration import (
    DetectedFramework,
    _extract_version_from_config,
    convert_framework_to_dependency,
    detect_frameworks,
    validate_migration,
)


def _subprocess_result(returncode: int = 0, stdout: str = "", stderr: str = "") -> MagicMock:
    result = MagicMock()
    result.returncode = returncode
    result.stdout = stdout
    result.stderr = stderr
    return result


# --- migration.py ---


@patch("cli.migration.get_project_root", return_value=None)
def test_detect_frameworks_falls_back_to_cwd(_mock_root, tmp_path: Path):
    detected = detect_frameworks(project_root=None, search_paths=[tmp_path / "missing"])
    assert detected == []


def test_detect_frameworks_extracts_version_from_rw_config(tmp_path: Path):
    fw = tmp_path / "packages" / "frameworks" / "workflow-mgmt"
    (fw / "scripts" / "validation").mkdir(parents=True)
    (fw / "workflows").mkdir(parents=True)
    (fw / "scripts" / "validation" / "validate_branch_context.py").write_text("x")
    (fw / "workflows" / "release-workflow.yaml").write_text("x")
    (fw / "config").mkdir()
    (fw / "config" / "rw-config.yaml").write_text("version: 2.5.0\n")
    detected = detect_frameworks(project_root=tmp_path, search_paths=[tmp_path / "packages" / "frameworks"])
    assert detected
    assert detected[0].detected_version == "2.5.0"


def test_extract_version_from_config_reads_framework_version(tmp_path: Path):
    cfg = tmp_path / "rw-config.yaml"
    cfg.write_text("framework_version: 1.2.3\n")
    assert _extract_version_from_config(cfg) == "1.2.3"


def test_extract_version_from_config_handles_invalid_yaml(tmp_path: Path):
    cfg = tmp_path / "bad.yaml"
    cfg.write_text(": [unterminated\n")
    assert _extract_version_from_config(cfg) is None


def test_convert_framework_to_dependency_success(tmp_path: Path):
    fw_path = tmp_path / "frameworks" / "workflow-mgmt"
    fw_path.mkdir(parents=True)
    (fw_path / "marker.txt").write_text("data")
    framework = DetectedFramework(
        name="workflow-mgmt",
        path=fw_path,
        detected_version="1.0.0",
        framework_type="workflow-mgmt",
        confidence=1.0,
    )
    ok, message = convert_framework_to_dependency(framework, project_root=tmp_path, dry_run=False)
    assert ok is True
    assert "Converted" in message
    assert not fw_path.exists()
    config = Config(tmp_path / ".ai-dev-kit.yaml")
    assert "workflow-mgmt" in config.get_frameworks()


@patch("cli.migration.Config.save", side_effect=OSError("disk full"))
def test_convert_framework_to_dependency_failure(_mock_save, tmp_path: Path):
    fw_path = tmp_path / "frameworks" / "kanban"
    fw_path.mkdir(parents=True)
    framework = DetectedFramework(
        name="kanban",
        path=fw_path,
        detected_version=None,
        framework_type="kanban",
        confidence=0.5,
    )
    ok, message = convert_framework_to_dependency(framework, project_root=tmp_path, dry_run=False)
    assert ok is False
    assert "Failed" in message


def test_validate_migration_success_with_migrated_framework(tmp_path: Path):
    config_file = tmp_path / ".ai-dev-kit.yaml"
    config_file.write_text(
        """version: "1.0.0"
frameworks:
  workflow-mgmt:
    backend: git-submodule
    path: frameworks/workflow-mgmt
    migrated_from: frameworks/workflow-mgmt
"""
    )
    valid, issues = validate_migration(project_root=tmp_path)
    assert valid is True
    assert issues == []


def test_validate_migration_flags_missing_backend_on_migrated(tmp_path: Path):
    config_file = tmp_path / ".ai-dev-kit.yaml"
    config_file.write_text(
        """version: "1.0.0"
frameworks:
  workflow-mgmt:
    path: frameworks/workflow-mgmt
    migrated_from: frameworks/workflow-mgmt
"""
    )
    valid, issues = validate_migration(project_root=tmp_path)
    assert valid is False
    assert any("backend" in issue for issue in issues)


def test_validate_migration_no_frameworks_configured(tmp_path: Path):
    (tmp_path / ".ai-dev-kit.yaml").write_text('version: "1.0.0"\nframeworks: {}\n')
    valid, issues = validate_migration(project_root=tmp_path)
    assert valid is False
    assert any("No frameworks" in issue for issue in issues)


# --- adk_install_errors_bridge.py ---


def test_load_module_caches_and_reuses_module():
    bridge._MODULE = None
    mod1 = bridge._load_module()
    mod2 = bridge._load_module()
    assert mod1 is mod2


def test_candidate_script_dirs_includes_rw_config_cwd(tmp_path: Path, monkeypatch):
    monkeypatch.chdir(tmp_path)
    (tmp_path / "rw-config.yaml").write_text("version: 1\n")
    dirs = bridge._candidate_script_dirs()
    assert any("workflow-mgt" in str(d) for d in dirs)


def test_merge_error_into_event_failed_status():
    with patch("cli.adk_install_errors_bridge.build_result_extras", return_value={"adk_error_code": "ADK-I06.E01"}):
        merged = bridge.merge_error_into_event({"result": {"status": "failed", "details": "x"}}, "ADK-I06.E01")
    assert merged["result"].get("adk_error_code") == "ADK-I06.E01"


def test_emit_install_error_delegates():
    bridge._MODULE = None
    with patch.object(bridge, "_load_module") as mock_load:
        mock_mod = MagicMock()
        mock_load.return_value = mock_mod
        bridge.emit_install_error("ADK-I06.E01", detail="boom")
        mock_mod.emit_install_error.assert_called_once()


# --- git_submodule.py ---


@patch("cli.backends.git_submodule.platform.system", return_value="Darwin")
@patch("cli.backends.git_submodule.subprocess.run")
def test_git_submodule_apple_prereq_success_on_darwin(mock_run, _mock_system):
    mock_run.side_effect = [_subprocess_result(0), _subprocess_result(0)]
    assert GitSubmoduleBackend()._check_apple_sdk_prerequisites() is True


@patch("cli.backends.git_submodule.platform.system", return_value="Darwin")
@patch("cli.backends.git_submodule.subprocess.run")
def test_git_submodule_apple_prereq_fails_when_xcode_missing(mock_run, _mock_system):
    mock_run.return_value = _subprocess_result(1)
    assert GitSubmoduleBackend()._check_apple_sdk_prerequisites() is False


@patch("cli.backends.git_submodule.platform.system", return_value="Darwin")
@patch("cli.backends.git_submodule.subprocess.run", side_effect=FileNotFoundError)
def test_git_submodule_apple_prereq_file_not_found(_mock_run, _mock_system):
    assert GitSubmoduleBackend()._check_apple_sdk_prerequisites() is False


def test_git_submodule_detect_apple_sdk_error():
    backend = GitSubmoduleBackend()
    assert backend._detect_apple_sdk_error("Please run xcode-select --install") is True
    assert backend._detect_apple_sdk_error("generic error") is False


@patch("cli.backends.git_submodule.platform.system", return_value="Darwin")
@patch.object(GitSubmoduleBackend, "_check_apple_sdk_prerequisites", return_value=False)
def test_git_submodule_install_fails_when_prereq_fails(_mock_prereq, _mock_system, tmp_path: Path):
    backend = GitSubmoduleBackend()
    assert (
        backend.install(
            "workflow-mgt",
            "main",
            tmp_path / "fw",
            source="https://example.com/repo.git",
        )
        is False
    )


@patch.object(GitSubmoduleBackend, "_check_apple_sdk_prerequisites", return_value=True)
@patch("cli.backends.git_submodule.subprocess.run")
def test_git_submodule_install_subprocess_failure(mock_run, _mock_prereq, tmp_path: Path):
    mock_run.return_value = _subprocess_result(1, stderr="git failed")
    backend = GitSubmoduleBackend()
    assert (
        backend.install(
            "workflow-mgt",
            "main",
            tmp_path / "fw",
            source="https://example.com/repo.git",
        )
        is False
    )


# --- git_subtree.py ---


@patch("cli.backends.git_subtree.subprocess.run")
def test_git_subtree_install_failure(mock_run, tmp_path: Path):
    mock_run.return_value = _subprocess_result(1, stderr="subtree failed")
    backend = GitSubtreeBackend()
    path = tmp_path / "frameworks" / "kanban"
    assert backend.install("kanban", "main", path, source="https://example.com/repo.git") is False


@patch("cli.backends.git_subtree.subprocess.run")
def test_git_subtree_check_returns_none_on_failure(mock_run, tmp_path: Path):
    path = tmp_path / "frameworks" / "kanban"
    path.mkdir(parents=True)
    mock_run.return_value = _subprocess_result(1)
    assert GitSubtreeBackend().check("kanban", path, source="https://example.com/repo.git") is None


@patch("cli.backends.git_subtree.shutil.rmtree", side_effect=OSError("rm failed"))
def test_git_subtree_remove_failure(_mock_rmtree, tmp_path: Path):
    path = tmp_path / "frameworks" / "kanban"
    path.mkdir(parents=True)
    removed = GitSubtreeBackend().remove("kanban", path, keep_files=False, prefix=str(path))
    assert removed is False


# --- package_manager.py ---


@patch("cli.backends.package_manager.subprocess.run")
def test_npm_is_available_true(mock_run):
    mock_run.return_value = _subprocess_result(0, stdout="10.0.0\n")
    assert NpmBackend().is_available() is True


@patch("cli.backends.package_manager.subprocess.run", side_effect=FileNotFoundError)
def test_npm_is_available_false(_mock_run):
    assert NpmBackend().is_available() is False


@patch("cli.backends.package_manager.subprocess.run")
def test_npm_check_package_exists_with_version(mock_run):
    mock_run.return_value = _subprocess_result(0)
    assert NpmBackend()._check_package_exists("@ai-dev-kit/kanban", version="1.0.0") is True


@patch("cli.backends.package_manager.subprocess.run", side_effect=RuntimeError("boom"))
def test_npm_check_package_exists_handles_exception(_mock_run):
    assert NpmBackend()._check_package_exists("@ai-dev-kit/kanban") is False


@patch.object(NpmBackend, "_check_package_exists", return_value=True)
@patch("cli.backends.package_manager.subprocess.run")
def test_npm_install_subprocess_failure(mock_run, _mock_exists, tmp_path: Path):
    mock_run.return_value = _subprocess_result(1, stderr="npm err")
    assert NpmBackend().install("kanban", "1.0.0", tmp_path) is False


@patch.object(NpmBackend, "_check_package_exists", return_value=True)
@patch("cli.backends.package_manager.subprocess.run")
def test_npm_update_subprocess_failure(mock_run, _mock_exists, tmp_path: Path):
    mock_run.return_value = _subprocess_result(1, stderr="npm err")
    assert NpmBackend().update("kanban", "2.0.0", tmp_path) is False


@patch("cli.backends.package_manager.subprocess.run")
def test_npm_check_returns_none_on_failure(mock_run, tmp_path: Path):
    mock_run.return_value = _subprocess_result(1)
    assert NpmBackend().check("kanban", tmp_path) is None


def test_npm_status_error_on_bad_package_json(tmp_path: Path):
    (tmp_path / "package.json").write_text("{not json")
    cwd = Path.cwd()
    try:
        os.chdir(tmp_path)
        status = NpmBackend().status("kanban", tmp_path)
    finally:
        os.chdir(cwd)
    assert status["status"] == "error"


@patch.object(PipBackend, "_get_pip_command", return_value="pip")
@patch("cli.backends.package_manager.subprocess.run")
def test_pip_is_available(mock_run, _mock_cmd):
    mock_run.return_value = _subprocess_result(0)
    assert PipBackend().is_available() is True


@patch.object(PipBackend, "_get_pip_command", return_value="pip")
@patch("cli.backends.package_manager.subprocess.run")
def test_pip_check_package_exists_with_version(mock_run, _mock_cmd):
    mock_run.return_value = _subprocess_result(0)
    assert PipBackend()._check_package_exists("ai-dev-kit-kanban", version="1.0.0") is True


@patch.object(PipBackend, "_check_package_exists", return_value=True)
@patch.object(PipBackend, "_get_pip_command", return_value="pip")
@patch("cli.backends.package_manager.subprocess.run")
def test_pip_install_timeout(mock_run, _mock_cmd, _mock_exists, tmp_path: Path):
    import subprocess

    mock_run.side_effect = subprocess.TimeoutExpired(cmd="pip", timeout=120)
    assert PipBackend().install("kanban", "1.0.0", tmp_path) is False


# --- install.py ---


def test_parse_framework_spec_valid_and_invalid():
    assert parse_framework_spec("kanban@1.0.0") == ("kanban", "1.0.0")
    assert parse_framework_spec("kanban") == ("kanban", None)
    with pytest.raises(ValueError):
        parse_framework_spec("")


@patch("cli.commands.install.get_project_root", return_value=None)
def test_install_uses_cwd_when_no_project_root(mock_root, temp_config_file: Path):
    del mock_root
    project_root = temp_config_file.parent
    args = argparse.Namespace(
        frameworks=["kanban"],
        backend=None,
        path=None,
        dry_run=True,
        log_path=None,
        no_install_log=True,
    )
    original_cwd = os.getcwd()
    try:
        os.chdir(project_root)
        assert InstallCommand(args).execute() == 0
    finally:
        os.chdir(original_cwd)


@patch("cli.commands.install.select_backend", return_value=None)
@patch("cli.commands.install.get_project_root")
def test_install_backend_unavailable(mock_root, mock_select, temp_config_file: Path):
    mock_root.return_value = temp_config_file.parent
    args = argparse.Namespace(
        frameworks=["kanban"],
        backend="npm",
        path=None,
        dry_run=False,
        log_path=None,
        no_install_log=True,
    )
    original_cwd = os.getcwd()
    try:
        os.chdir(temp_config_file.parent)
        assert InstallCommand(args).execute() == 1
    finally:
        os.chdir(original_cwd)


@patch("cli.commands.install.get_backend", return_value=None)
@patch("cli.commands.install.select_backend", return_value="npm")
@patch("cli.commands.install.get_project_root")
def test_install_backend_not_registered(mock_root, _mock_select, _mock_get, temp_config_file: Path):
    mock_root.return_value = temp_config_file.parent
    args = argparse.Namespace(
        frameworks=["kanban"],
        backend="npm",
        path=None,
        dry_run=False,
        log_path=None,
        no_install_log=True,
    )
    original_cwd = os.getcwd()
    try:
        os.chdir(temp_config_file.parent)
        assert InstallCommand(args).execute() == 1
    finally:
        os.chdir(original_cwd)


@patch("cli.commands.install.validate_path")
@patch("cli.commands.install.select_backend", return_value="git-submodule")
@patch("cli.commands.install.get_project_root")
def test_install_invalid_path(mock_root, _mock_select, mock_validate, temp_config_file: Path):
    from cli.exceptions import InvalidInputError

    mock_root.return_value = temp_config_file.parent
    mock_validate.side_effect = InvalidInputError("path", "../escape", "safe relative path")
    args = argparse.Namespace(
        frameworks=["kanban"],
        backend=None,
        path="../escape",
        dry_run=False,
        log_path=None,
        no_install_log=True,
    )
    original_cwd = os.getcwd()
    try:
        os.chdir(temp_config_file.parent)
        assert InstallCommand(args).execute() == 1
    finally:
        os.chdir(original_cwd)


@patch("cli.commands.install.get_backend")
@patch("cli.commands.install.select_backend", return_value="git-submodule")
@patch("cli.commands.install.get_project_root")
def test_install_backend_returns_false(
    mock_root, _mock_select, mock_get_backend, temp_config_file: Path
):
    mock_root.return_value = temp_config_file.parent
    backend = MagicMock()
    backend.install.return_value = False
    mock_get_backend.return_value = lambda: backend
    args = argparse.Namespace(
        frameworks=["kanban"],
        backend=None,
        path="frameworks",
        dry_run=False,
        log_path=None,
        no_install_log=True,
    )
    original_cwd = os.getcwd()
    try:
        os.chdir(temp_config_file.parent)
        assert InstallCommand(args).execute() == 1
    finally:
        os.chdir(original_cwd)


# --- remove.py ---


@patch("cli.commands.remove.get_project_root", return_value=None)
def test_remove_uses_cwd_when_no_project_root(_mock_root, temp_project_dir: Path):
    config_file = temp_project_dir / ".ai-dev-kit.yaml"
    config_file.write_text(
        """version: "1.0.0"
frameworks:
  workflow-mgmt:
    backend: git-submodule
    path: frameworks/workflow-mgmt
"""
    )
    args = argparse.Namespace(
        framework="workflow-mgmt",
        keep_files=False,
        force=False,
        recovery=False,
        dry_run=True,
    )
    original_cwd = os.getcwd()
    try:
        os.chdir(temp_project_dir)
        assert RemoveCommand(args).execute() == 0
    finally:
        os.chdir(original_cwd)


def test_remove_framework_not_found(temp_project_dir: Path):
    (temp_project_dir / ".ai-dev-kit.yaml").write_text('version: "1.0.0"\nframeworks: {}\n')
    args = argparse.Namespace(
        framework="missing",
        keep_files=False,
        force=True,
        recovery=False,
        dry_run=False,
    )
    original_cwd = os.getcwd()
    try:
        os.chdir(temp_project_dir)
        assert RemoveCommand(args).execute() == 1
    finally:
        os.chdir(original_cwd)


@patch("cli.commands.remove.select_backend")
@patch("cli.commands.remove.get_backend")
def test_remove_backend_remove_fails(
    mock_get_backend, mock_select_backend, temp_project_dir: Path
):
    fw_path = temp_project_dir / "frameworks" / "workflow-mgmt"
    fw_path.mkdir(parents=True)
    (temp_project_dir / ".ai-dev-kit.yaml").write_text(
        """version: "1.0.0"
frameworks:
  workflow-mgmt:
    backend: git-submodule
    path: frameworks/workflow-mgmt
"""
    )
    mock_select_backend.return_value = "git-submodule"
    backend = MagicMock()
    backend.remove.return_value = False
    mock_get_backend.return_value = lambda: backend
    args = argparse.Namespace(
        framework="workflow-mgmt",
        keep_files=False,
        force=True,
        recovery=False,
        dry_run=False,
    )
    original_cwd = os.getcwd()
    try:
        os.chdir(temp_project_dir)
        assert RemoveCommand(args).execute() == 0
    finally:
        os.chdir(original_cwd)


# --- logs.py ---


def test_logs_execute_without_subcommand():
    args = argparse.Namespace(logs_command=None)
    assert LogsCommand(args).execute() == 1


def test_logs_unknown_subcommand():
    args = argparse.Namespace(logs_command="not-a-real-command")
    assert LogsCommand(args).execute() == 1


def test_install_history_summarises_text_log(temp_project_dir: Path):
    _write_logs_config(temp_project_dir)
    log_dir = temp_project_dir / "logs" / "ai-dev-kit" / "install"
    log_dir.mkdir(parents=True)
    log_file = log_dir / "install-20260411-120000.log"
    log_file.write_text(
        "2026-04-11 12:00:00 INFO install.main ai-dev-kit install started in dry-run\n"
        "2026-04-11 12:00:01 INFO install.framework Installing kanban@latest to /tmp\n"
        "2026-04-11 12:00:02 INFO install.main Successfully installed 1 framework(s)\n",
        encoding="utf-8",
    )
    args = argparse.Namespace(logs_command="install-history", limit=5)
    original_cwd = os.getcwd()
    try:
        os.chdir(temp_project_dir)
        assert LogsCommand(args).execute() == 0
    finally:
        os.chdir(original_cwd)


def test_validate_install_log_specific_file(temp_project_dir: Path):
    _write_logs_config(temp_project_dir)
    log_file = temp_project_dir / "single.log"
    log_file.write_text(
        json.dumps(
            {
                "timestamp_utc": "2026-04-11T12:00:00Z",
                "level": "INFO",
                "context": "install.main",
                "message": "ok",
                "install_run_id": "run-x",
                "step_id": "step-0001",
                "event_contract": {
                    "intent": {"summary": "i"},
                    "action": {"summary": "a"},
                    "result": {"status": "ok", "details": "d"},
                },
            }
        )
        + "\n",
        encoding="utf-8",
    )
    args = argparse.Namespace(
        logs_command="validate-install-log",
        file=str(log_file),
        limit=1,
    )
    original_cwd = os.getcwd()
    try:
        os.chdir(temp_project_dir)
        assert LogsCommand(args).execute() == 0
    finally:
        os.chdir(original_cwd)


def test_validate_feedback_payload_missing_fields(temp_project_dir: Path):
    bad = temp_project_dir / "bad-feedback.json"
    bad.write_text(json.dumps({"install_run_id": ""}), encoding="utf-8")
    args = argparse.Namespace(logs_command="validate-feedback-payload", file=str(bad))
    original_cwd = os.getcwd()
    try:
        os.chdir(temp_project_dir)
        assert LogsCommand(args).execute() == 1
    finally:
        os.chdir(original_cwd)


def test_git_subtree_install_requires_source(tmp_path: Path):
    assert GitSubtreeBackend().install("kanban", "main", tmp_path / "fw") is False


@patch("cli.backends.git_subtree.subprocess.run", side_effect=FileNotFoundError)
def test_git_subtree_is_available_false(_mock_run):
    assert GitSubtreeBackend().is_available() is False


@patch("cli.commands.remove.get_backend", return_value=None)
@patch("cli.commands.remove.select_backend", return_value="git-submodule")
def test_remove_proceeds_when_backend_not_registered(
    _mock_select, _mock_get, temp_project_dir: Path
):
    fw_path = temp_project_dir / "frameworks" / "workflow-mgmt"
    fw_path.mkdir(parents=True)
    (fw_path / "file.txt").write_text("x")
    (temp_project_dir / ".ai-dev-kit.yaml").write_text(
        """version: "1.0.0"
frameworks:
  workflow-mgmt:
    backend: git-submodule
    path: frameworks/workflow-mgmt
"""
    )
    args = argparse.Namespace(
        framework="workflow-mgmt",
        keep_files=False,
        force=True,
        recovery=False,
        dry_run=False,
    )
    original_cwd = os.getcwd()
    try:
        os.chdir(temp_project_dir)
        assert RemoveCommand(args).execute() == 0
    finally:
        os.chdir(original_cwd)


@patch("cli.commands.remove.shutil.rmtree", side_effect=OSError("denied"))
@patch("cli.commands.remove.select_backend", return_value="git-submodule")
@patch("cli.commands.remove.get_backend")
def test_remove_fails_when_file_deletion_fails(
    mock_get_backend, _mock_select, _mock_rmtree, temp_project_dir: Path
):
    fw_path = temp_project_dir / "frameworks" / "workflow-mgmt"
    fw_path.mkdir(parents=True)
    (fw_path / "file.txt").write_text("x")
    (temp_project_dir / ".ai-dev-kit.yaml").write_text(
        """version: "1.0.0"
frameworks:
  workflow-mgmt:
    backend: git-submodule
    path: frameworks/workflow-mgmt
"""
    )
    backend = MagicMock()
    backend.remove.return_value = True
    mock_get_backend.return_value = lambda: backend
    args = argparse.Namespace(
        framework="workflow-mgmt",
        keep_files=False,
        force=True,
        recovery=False,
        dry_run=False,
    )
    original_cwd = os.getcwd()
    try:
        os.chdir(temp_project_dir)
        assert RemoveCommand(args).execute() == 1
    finally:
        os.chdir(original_cwd)


@patch("cli.commands.remove.select_backend", return_value="git-submodule")
@patch("cli.commands.remove.get_backend")
def test_remove_cleans_gitmodules(
    mock_get_backend, _mock_select, temp_project_dir: Path
):
    fw_path = temp_project_dir / "frameworks" / "workflow-mgmt"
    fw_path.mkdir(parents=True)
    (temp_project_dir / ".ai-dev-kit.yaml").write_text(
        """version: "1.0.0"
frameworks:
  workflow-mgmt:
    backend: git-submodule
    path: frameworks/workflow-mgmt
"""
    )
    gitmodules = temp_project_dir / ".gitmodules"
    gitmodules.write_text(
        "[submodule \"workflow-mgmt\"]\n"
        "\tpath = frameworks/workflow-mgmt\n"
        "\turl = https://example.com/repo.git\n"
        "[submodule \"kanban\"]\n"
        "\tpath = frameworks/kanban\n"
        "\turl = https://example.com/kanban.git\n"
    )
    backend = MagicMock()
    backend.remove.return_value = True
    mock_get_backend.return_value = lambda: backend
    args = argparse.Namespace(
        framework="workflow-mgmt",
        keep_files=True,
        force=True,
        recovery=False,
        dry_run=False,
    )
    original_cwd = os.getcwd()
    try:
        os.chdir(temp_project_dir)
        assert RemoveCommand(args).execute() == 0
        content = gitmodules.read_text()
        assert "workflow-mgmt" not in content
        assert "kanban" in content
    finally:
        os.chdir(original_cwd)


def test_prepare_feedback_payload_no_install_log(temp_project_dir: Path):
    _write_logs_config(temp_project_dir)
    args = argparse.Namespace(
        logs_command="prepare-feedback-payload",
        install_log=None,
        output=None,
    )
    original_cwd = os.getcwd()
    try:
        os.chdir(temp_project_dir)
        assert LogsCommand(args).execute() == 1
    finally:
        os.chdir(original_cwd)


def test_install_history_skips_malformed_log_lines(temp_project_dir: Path):
    _write_logs_config(temp_project_dir)
    log_dir = temp_project_dir / "logs" / "ai-dev-kit" / "install"
    log_dir.mkdir(parents=True)
    good = log_dir / "install-20260412-010101.log"
    good.write_text(
        json.dumps(
            {
                "timestamp_utc": "2026-04-12T01:01:01Z",
                "level": "INFO",
                "context": "install.main",
                "message": "ai-dev-kit install started in /tmp",
                "install_run_id": "run-1",
                "step_id": "s1",
                "event_contract": {
                    "intent": {"summary": "i"},
                    "action": {"summary": "a"},
                    "result": {"status": "ok", "details": "d"},
                },
            }
        )
        + "\n{broken json\n",
        encoding="utf-8",
    )
    args = argparse.Namespace(logs_command="install-history", limit=5)
    original_cwd = os.getcwd()
    try:
        os.chdir(temp_project_dir)
        assert LogsCommand(args).execute() == 0
    finally:
        os.chdir(original_cwd)


def test_validate_feedback_payload_file_not_found(temp_project_dir: Path):
    args = argparse.Namespace(
        logs_command="validate-feedback-payload",
        file="missing-payload.json",
    )
    original_cwd = os.getcwd()
    try:
        os.chdir(temp_project_dir)
        assert LogsCommand(args).execute() == 1
    finally:
        os.chdir(original_cwd)


def test_submit_feedback_invalid_json(temp_project_dir: Path):
    bad = temp_project_dir / "bad.json"
    bad.write_text("not-json", encoding="utf-8")
    args = argparse.Namespace(logs_command="submit-feedback-payload", file=str(bad))
    original_cwd = os.getcwd()
    try:
        os.chdir(temp_project_dir)
        assert LogsCommand(args).execute() == 1
    finally:
        os.chdir(original_cwd)


def test_summarise_json_log_failed_status():
    content = "\n".join(
        [
            json.dumps(
                {
                    "timestamp_utc": "2026-04-12T02:00:00Z",
                    "context": "install.main",
                    "message": "Failed installations: kanban",
                }
            ),
            json.dumps(
                {
                    "context": "install.framework",
                    "message": "Installing kanban@latest to /tmp",
                }
            ),
        ]
    )
    summary = LogsCommand(argparse.Namespace())._summarise_json_log(content)
    assert summary["status"] == "FAIL"
    assert "kanban@latest" in summary["frameworks"]


def _write_logs_config(project_root: Path) -> None:
    (project_root / ".ai-dev-kit.yaml").write_text(
        """version: "1.0.0"
default_backend: "git-submodule"
frameworks: {}
install_logging:
  enabled: true
  path: "logs/ai-dev-kit/install"
  format: json
""",
        encoding="utf-8",
    )

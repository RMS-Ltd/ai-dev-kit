import json
from pathlib import Path
from unittest.mock import MagicMock, patch

from cli.backends.base import BackendBase
from cli.backends.git_submodule import GitSubmoduleBackend
from cli.backends.git_subtree import GitSubtreeBackend
from cli.backends.package_manager import NpmBackend, PipBackend
from cli.backends.selector import detect_project_type, select_backend


class _DummyBackend(BackendBase):
    def install(self, framework: str, version: str, path: Path, **kwargs) -> bool:
        return True

    def update(self, framework: str, version: str, path: Path, **kwargs) -> bool:
        return True

    def check(self, framework: str, path: Path, **kwargs):
        return "v1.0.0"

    def status(self, framework: str, path: Path, **kwargs):
        return {"status": "installed"}

    def remove(self, framework: str, path: Path, keep_files: bool = False, **kwargs) -> bool:
        return True

    def is_available(self) -> bool:
        return True


def _result(returncode: int = 0, stdout: str = "", stderr: str = "") -> MagicMock:
    completed = MagicMock()
    completed.returncode = returncode
    completed.stdout = stdout
    completed.stderr = stderr
    return completed


def test_backend_base_get_info_reports_availability():
    backend = _DummyBackend(name="dummy", description="dummy backend")
    info = backend.get_info()
    assert info["name"] == "dummy"
    assert info["description"] == "dummy backend"
    assert info["available"] == "True"


def test_detect_project_type_prefers_package_json(tmp_path: Path):
    (tmp_path / "package.json").write_text("{}")
    assert detect_project_type(tmp_path) == "npm"


def test_detect_project_type_handles_python_project(tmp_path: Path):
    (tmp_path / "requirements.txt").write_text("pytest")
    assert detect_project_type(tmp_path) == "pip"


@patch("cli.backends.selector.get_registry")
def test_select_backend_respects_preferred_backend(mock_registry):
    registry = MagicMock()
    registry.get_available_backends.return_value = ["git-submodule", "pip"]
    mock_registry.return_value = registry
    assert select_backend(preferred="pip", auto_detect=False) == "pip"


@patch("cli.backends.selector.get_registry")
def test_select_backend_falls_back_to_default(mock_registry):
    registry = MagicMock()
    registry.get_available_backends.return_value = ["git-submodule"]
    mock_registry.return_value = registry
    assert select_backend(preferred="npm", auto_detect=False) == "git-submodule"


@patch("cli.backends.git_submodule.subprocess.run")
def test_git_submodule_is_available_true(mock_run):
    mock_run.return_value = _result(returncode=0)
    assert GitSubmoduleBackend().is_available() is True


@patch("cli.backends.git_submodule.subprocess.run", side_effect=FileNotFoundError)
def test_git_submodule_is_available_false_when_missing(_mock_run):
    assert GitSubmoduleBackend().is_available() is False


@patch("cli.backends.git_submodule.platform.system", return_value="Linux")
def test_git_submodule_apple_prereq_noop_on_non_darwin(mock_system):
    del mock_system
    assert GitSubmoduleBackend()._check_apple_sdk_prerequisites() is True


def test_git_submodule_install_requires_source(tmp_path: Path):
    backend = GitSubmoduleBackend()
    assert backend.install("workflow-mgt", "main", tmp_path / "frameworks" / "workflow-mgt") is False


@patch.object(GitSubmoduleBackend, "_check_apple_sdk_prerequisites", return_value=True)
@patch("cli.backends.git_submodule.subprocess.run")
def test_git_submodule_install_happy_path(mock_run, _mock_prereq, tmp_path: Path):
    mock_run.return_value = _result(returncode=0)
    backend = GitSubmoduleBackend()
    ok = backend.install(
        "workflow-mgt",
        "main",
        tmp_path / "frameworks" / "workflow-mgt",
        source="https://example.com/repo.git",
    )
    assert ok is True


@patch.object(GitSubmoduleBackend, "_check_apple_sdk_prerequisites", return_value=True)
@patch.object(GitSubmoduleBackend, "_detect_apple_sdk_error", return_value=True)
@patch("cli.backends.git_submodule.subprocess.run")
def test_git_submodule_install_handles_apple_sdk_error(
    mock_run, _mock_detect, _mock_prereq, tmp_path: Path
):
    mock_run.return_value = _result(returncode=1, stderr="xcode-select license issue")
    backend = GitSubmoduleBackend()
    ok = backend.install(
        "workflow-mgt",
        "main",
        tmp_path / "frameworks" / "workflow-mgt",
        source="https://example.com/repo.git",
    )
    assert ok is False


def test_git_submodule_status_not_installed(tmp_path: Path):
    backend = GitSubmoduleBackend()
    info = backend.status("workflow-mgt", tmp_path / "missing")
    assert info["status"] == "not_installed"


@patch("cli.backends.git_submodule.subprocess.run")
def test_git_submodule_status_installed_with_tag(mock_run, tmp_path: Path):
    fw = tmp_path / "frameworks" / "workflow-mgt"
    fw.mkdir(parents=True)
    mock_run.side_effect = [
        _result(returncode=0, stdout="abcdef123456\n"),
        _result(returncode=0, stdout="v1.2.3\n"),
        _result(returncode=0, stdout=" abcdef path\n"),
    ]
    info = GitSubmoduleBackend().status("workflow-mgt", fw)
    assert info["status"] == "installed"
    assert info["version"] == "v1.2.3"


@patch("cli.backends.git_subtree.subprocess.run")
def test_git_subtree_install_and_remove_paths(mock_run, tmp_path: Path):
    mock_run.return_value = _result(returncode=0)
    backend = GitSubtreeBackend()
    path = tmp_path / "frameworks" / "kanban"
    installed = backend.install("kanban", "main", path, source="https://example.com/repo.git")
    assert installed is True
    path.mkdir(parents=True, exist_ok=True)
    removed = backend.remove("kanban", path, keep_files=True)
    assert removed is True


def test_git_subtree_update_requires_existing_prefix(tmp_path: Path):
    backend = GitSubtreeBackend()
    ok = backend.update(
        "kanban",
        "main",
        tmp_path / "frameworks" / "kanban",
        source="https://example.com/repo.git",
    )
    assert ok is False


@patch("cli.backends.git_subtree.subprocess.run")
def test_git_subtree_update_and_check_happy_paths(mock_run, tmp_path: Path):
    path = tmp_path / "frameworks" / "kanban"
    path.mkdir(parents=True)
    backend = GitSubtreeBackend()
    mock_run.side_effect = [
        _result(returncode=0),  # update pull
        _result(returncode=0),  # fetch
        _result(returncode=0, stdout="abc123 message"),  # current
        _result(returncode=0, stdout="def456\tHEAD"),  # latest
        _result(returncode=0, stdout="def456\trefs/tags/v2.0.0\n"),  # tags
    ]
    updated = backend.update(
        "kanban", "main", path, source="https://example.com/repo.git", prefix=str(path)
    )
    assert updated is True
    checked = backend.check(
        "kanban", path, source="https://example.com/repo.git", prefix=str(path)
    )
    assert checked == "v2.0.0"


@patch("cli.backends.git_subtree.subprocess.run")
def test_git_subtree_status_and_remove_non_keep_files(mock_run, tmp_path: Path):
    path = tmp_path / "frameworks" / "kanban"
    path.mkdir(parents=True)
    backend = GitSubtreeBackend()
    mock_run.side_effect = [
        _result(returncode=0, stdout="abc123 subtree commit"),
        _result(returncode=0, stdout="Merge tag v3.1.4"),
        _result(returncode=1, stderr="not tracked"),
    ]
    status = backend.status("kanban", path, prefix=str(path))
    assert status["status"] == "installed"
    assert status["version"] == "v3.1.4"
    removed = backend.remove("kanban", path, keep_files=False, prefix=str(path))
    assert removed is True


def test_package_name_normalization():
    npm = NpmBackend()
    pip = PipBackend()
    assert npm._get_package_name("Workflow Mgt") == "@ai-dev-kit/workflow-mgt"
    assert pip._get_package_name("Numbering_Versioning") == "ai-dev-kit-numbering-versioning"


@patch.object(NpmBackend, "_check_package_exists", return_value=False)
def test_npm_install_rejects_missing_registry_package(_mock_exists, tmp_path: Path):
    npm = NpmBackend()
    assert npm.install("kanban", "1.0.0", tmp_path) is False


@patch.object(NpmBackend, "_check_package_exists", return_value=True)
@patch("cli.backends.package_manager.subprocess.run")
def test_npm_install_success(mock_run, _mock_exists, tmp_path: Path):
    mock_run.return_value = _result(returncode=0)
    npm = NpmBackend()
    assert npm.install("kanban", "1.0.0", tmp_path) is True


@patch.object(NpmBackend, "_check_package_exists", return_value=True)
@patch("cli.backends.package_manager.subprocess.run")
def test_npm_update_check_and_remove_paths(mock_run, _mock_exists, tmp_path: Path):
    mock_run.side_effect = [
        _result(returncode=0),  # update
        _result(returncode=0, stdout="2.4.0\n"),  # check
        _result(returncode=0),  # remove
    ]
    npm = NpmBackend()
    assert npm.update("kanban", "2.4.0", tmp_path) is True
    assert npm.check("kanban", tmp_path) == "2.4.0"
    removed = npm.remove("kanban", tmp_path)
    assert removed is True


def test_npm_status_reads_package_json(tmp_path: Path):
    package_json = {"dependencies": {"@ai-dev-kit/kanban": "^1.2.3"}}
    (tmp_path / "package.json").write_text(json.dumps(package_json))
    cwd = Path.cwd()
    try:
        import os

        os.chdir(tmp_path)
        status = NpmBackend().status("kanban", tmp_path)
    finally:
        os.chdir(cwd)
    assert status["status"] == "installed"
    assert status["version"] == "1.2.3"


@patch("cli.backends.package_manager.subprocess.run")
def test_pip_command_falls_back_to_pip3(mock_run):
    mock_run.side_effect = [OSError("pip missing"), _result(returncode=0)]
    backend = PipBackend()
    assert backend._get_pip_command() == "pip3"


@patch.object(PipBackend, "_get_pip_command", return_value="pip")
@patch("cli.backends.package_manager.subprocess.run")
def test_pip_status_installed_parses_show_output(mock_run, _mock_cmd, tmp_path: Path):
    mock_run.return_value = _result(returncode=0, stdout="Name: ai-dev-kit-kanban\nVersion: 2.0.1\n")
    status = PipBackend().status("kanban", tmp_path)
    assert status["status"] == "installed"
    assert status["version"] == "2.0.1"


@patch.object(PipBackend, "_check_package_exists", return_value=True)
@patch.object(PipBackend, "_get_pip_command", return_value="pip")
@patch("cli.backends.package_manager.subprocess.run")
def test_pip_install_update_check_remove_paths(mock_run, _mock_cmd, _mock_exists, tmp_path: Path):
    mock_run.side_effect = [
        _result(returncode=0),  # install
        _result(returncode=0),  # update
        _result(returncode=0, stdout="Available versions: 3.1.0, 3.0.0"),
        _result(returncode=0),  # remove
    ]
    pip_backend = PipBackend()
    assert pip_backend.install("kanban", "3.1.0", tmp_path, user=True) is True
    assert pip_backend.update("kanban", "3.1.0", tmp_path) is True
    assert pip_backend.check("kanban", tmp_path) == "3.1.0,"
    removed = pip_backend.remove("kanban", tmp_path)
    assert removed is True


@patch("cli.backends.git_submodule.subprocess.run")
def test_git_submodule_update_check_and_remove(mock_run, tmp_path: Path):
    path = tmp_path / "frameworks" / "workflow-mgt"
    path.mkdir(parents=True)
    backend = GitSubmoduleBackend()
    mock_run.side_effect = [
        _result(returncode=0),  # update remote merge
        _result(returncode=0),  # checkout version
        _result(returncode=0),  # fetch tags
        _result(returncode=0, stdout="abc12345"),  # current
        _result(returncode=0, stdout="def67890"),  # latest
        _result(returncode=1, stdout=""),  # exact tag lookup fails
        _result(returncode=0),  # deinit
        _result(returncode=0),  # remove section
    ]
    assert backend.update("workflow-mgt", "v2.0.0", path)
    assert backend.check("workflow-mgt", path) == "def67890"
    removed = backend.remove("workflow-mgt", path, keep_files=True)
    assert removed is True

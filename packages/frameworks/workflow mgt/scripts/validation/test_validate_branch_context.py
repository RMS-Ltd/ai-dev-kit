"""Regression tests for validate_branch_context.py explicit-task reconciliation."""

from __future__ import annotations

import subprocess
import sys
from pathlib import Path
import yaml


SCRIPT = Path(__file__).resolve().parent / "validate_branch_context.py"


def _run(args: list[str], cwd: Path) -> subprocess.CompletedProcess:
    return subprocess.run(
        [sys.executable, str(SCRIPT)] + args,
        cwd=cwd,
        capture_output=True,
        text=True,
    )


def _git(cmd: list[str], cwd: Path) -> None:
    subprocess.run(cmd, cwd=cwd, check=True, capture_output=True, text=True)


def _init_repo(tmp_path: Path, branch_name: str, version_epic: int) -> Path:
    repo = tmp_path / "repo"
    repo.mkdir()
    _git(["git", "init"], repo)
    _git(["git", "checkout", "-b", branch_name], repo)
    _git(["git", "config", "user.name", "Test User"], repo)
    _git(["git", "config", "user.email", "test@example.com"], repo)

    vdir = repo / "src" / "fynd_deals"
    vdir.mkdir(parents=True)
    (vdir / "version.py").write_text(
        "\n".join(
            [
                "VERSION_RC = 0",
                f"VERSION_EPIC = {version_epic}",
                "VERSION_STORY = 1",
                "VERSION_TASK = 17",
                "VERSION_BUILD = 1",
                "VERSION_STRING = f\"{VERSION_RC}.{VERSION_EPIC}.{VERSION_STORY}.{VERSION_TASK}+{VERSION_BUILD}\"",
            ]
        ),
        encoding="utf-8",
    )
    _git(["git", "add", "."], repo)
    _git(["git", "commit", "-m", "init"], repo)
    return repo


def _write_rw_config(repo: Path, *, versioning_mode: str | None = None, semver_mapping_strategy: str | None = None) -> None:
    data = {
        "version_file": "src/fynd_deals/version.py",
        "main_changelog": "CHANGELOG.md",
        "changelog_dir": "docs/changelog-and-release-notes/changelog-archive",
        "scripts_path": "packages/frameworks/workflow mgt/scripts",
        "readme_file": "README.md",
    }
    if versioning_mode is not None:
        data["versioning_mode"] = versioning_mode
    if semver_mapping_strategy is not None:
        data["semver_mapping_strategy"] = semver_mapping_strategy
    (repo / "rw-config.yaml").write_text(yaml.safe_dump(data, sort_keys=False), encoding="utf-8")


def test_explicit_requested_allows_stale_version_epic_on_matching_branch(tmp_path: Path):
    repo = _init_repo(tmp_path, "epic/2-branch", version_epic=7)
    result = _run(["--strict", "--requested", "E2:S01:T12"], cwd=repo)
    assert result.returncode == 0, result.stderr + result.stdout
    assert "Explicit-task reconciliation" in result.stdout


def test_explicit_requested_blocks_cross_epic_branch_request(tmp_path: Path):
    repo = _init_repo(tmp_path, "epic/7-branch", version_epic=7)
    result = _run(["--strict", "--requested", "E2:S01:T12"], cwd=repo)
    assert result.returncode == 1, result.stderr + result.stdout
    assert "cross-epic request blocked" in result.stdout


def test_dual_mode_with_task_touch_passes(tmp_path: Path):
    repo = _init_repo(tmp_path, "dev", version_epic=5)
    _write_rw_config(repo, versioning_mode="dual", semver_mapping_strategy="task_touch")
    result = _run(["--strict"], cwd=repo)
    assert result.returncode == 0, result.stderr + result.stdout
    assert "Versioning mode: dual" in result.stdout


def test_dual_mode_with_non_task_touch_fails(tmp_path: Path):
    repo = _init_repo(tmp_path, "dev", version_epic=5)
    _write_rw_config(repo, versioning_mode="dual", semver_mapping_strategy="registry")
    result = _run(["--strict"], cwd=repo)
    assert result.returncode == 1, result.stderr + result.stdout
    assert "FR-046 policy violation" in result.stdout
    assert "versioning_mode=dual" in result.stdout


def test_legacy_mode_without_versioning_mode_stays_compatible(tmp_path: Path):
    repo = _init_repo(tmp_path, "dev", version_epic=5)
    _write_rw_config(repo, semver_mapping_strategy="registry")
    result = _run(["--strict"], cwd=repo)
    assert result.returncode == 0, result.stderr + result.stdout
    assert "legacy mode applied" in result.stdout


def test_semver_only_with_registry_passes_no_dual_invariant(tmp_path: Path):
    repo = _init_repo(tmp_path, "dev", version_epic=5)
    _write_rw_config(repo, versioning_mode="semver_only", semver_mapping_strategy="registry")
    result = _run(["--strict"], cwd=repo)
    assert result.returncode == 0, result.stderr + result.stdout
    assert "Versioning mode: semver_only" in result.stdout
    assert "FR-046" not in result.stdout


def test_kanban_only_with_registry_passes_no_dual_invariant(tmp_path: Path):
    repo = _init_repo(tmp_path, "dev", version_epic=5)
    _write_rw_config(repo, versioning_mode="kanban_only", semver_mapping_strategy="registry")
    result = _run(["--strict"], cwd=repo)
    assert result.returncode == 0, result.stderr + result.stdout
    assert "Versioning mode: kanban_only" in result.stdout
    assert "FR-046" not in result.stdout


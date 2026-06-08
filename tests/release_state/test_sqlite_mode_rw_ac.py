"""AC1/AC2: SQLite backend RW path — no legacy YAML writes; validators pass."""

from __future__ import annotations

import subprocess
import sys
from pathlib import Path

import pytest

REPO_ROOT = Path(__file__).resolve().parents[2]
SCRIPTS = REPO_ROOT / "packages/frameworks/workflow-mgt/scripts"
VERSION_DIR = SCRIPTS / "version"
VALIDATION_DIR = SCRIPTS / "validation"
FIXTURE_YAML = REPO_ROOT / "tests/fixtures/semver-registry-mini.yaml"

sys.path.insert(0, str(SCRIPTS))
sys.path.insert(0, str(VERSION_DIR))

import finalize_rw_semver_registry as frsr  # noqa: E402
import semver_converter  # noqa: E402
from release_state.import_legacy import import_registry_yaml  # noqa: E402


def _write_rw_config(tmp: Path, db_rel: str) -> None:
    (tmp / "rw-config.yaml").write_text(
        "\n".join(
            [
                "version_file: src/ai_dev_kit/version.py",
                "semver_mapping_strategy: task_touch",
                "release_state_backend: sqlite",
                f"release_state_db: {db_rel}",
            ]
        ),
        encoding="utf-8",
    )


def _write_version(tmp: Path, *, epic=2, story=17, task=4, build=2) -> None:
    vf = tmp / "src/ai_dev_kit/version.py"
    vf.parent.mkdir(parents=True, exist_ok=True)
    vf.write_text(
        f"VERSION_RC = 0\nVERSION_EPIC = {epic}\nVERSION_STORY = {story}\n"
        f"VERSION_TASK = {task}\nVERSION_BUILD = {build}\n",
        encoding="utf-8",
    )


def _patch_sqlite_env(monkeypatch, tmp: Path, db_path: Path) -> None:
    config = {
        "semver_mapping_strategy": "task_touch",
        "release_state_backend": "sqlite",
        "release_state_db": str(db_path.relative_to(tmp)),
        "version_file": "src/ai_dev_kit/version.py",
    }
    monkeypatch.chdir(tmp)
    monkeypatch.setattr(semver_converter, "load_rw_config", lambda: config)
    monkeypatch.setattr(semver_converter, "get_release_state_backend", lambda: "sqlite")
    monkeypatch.setattr(semver_converter, "get_release_state_db_path", lambda: db_path)


def _git_init(tmp: Path) -> None:
    subprocess.run(["git", "init"], cwd=tmp, check=True, capture_output=True)
    subprocess.run(["git", "config", "user.email", "sqlite-rw@test"], cwd=tmp, check=True, capture_output=True)
    subprocess.run(["git", "config", "user.name", "sqlite-rw"], cwd=tmp, check=True, capture_output=True)


@pytest.fixture
def sqlite_worktree(tmp_path, monkeypatch):
    """Minimal RW worktree with sqlite backend seeded from mini fixture."""
    yaml_path = tmp_path / "semver-registry.yaml"
    yaml_path.write_bytes(FIXTURE_YAML.read_bytes())
    yaml_hash_before = yaml_path.read_bytes()

    db_path = tmp_path / ".adk" / "release-state.db"
    _write_rw_config(tmp_path, ".adk/release-state.db")
    _write_version(tmp_path, build=2)
    _git_init(tmp_path)

    import_registry_yaml(yaml_path, db_path, changelog_dir=None)
    _patch_sqlite_env(monkeypatch, tmp_path, db_path)

    return tmp_path, yaml_path, yaml_hash_before, db_path


class TestSQLiteModeAC1:
    def test_finalize_does_not_mutate_legacy_yaml(self, sqlite_worktree):
        """AC1: Step 2.5 finalize writes DB only; semver-registry.yaml unchanged."""
        _tmp, yaml_path, yaml_hash_before, _db = sqlite_worktree
        payload = frsr.finalize_rw_semver_registry("0.2.17.4+2")
        assert payload["skipped"] is False
        assert payload["created"] is True
        assert yaml_path.read_bytes() == yaml_hash_before

    def test_finalize_updates_sqlite_mapping(self, sqlite_worktree):
        _tmp, _yaml, _hash, db_path = sqlite_worktree
        frsr.finalize_rw_semver_registry("0.2.17.4+2")
        from release_state.store import lookup_semver_by_internal

        assert lookup_semver_by_internal(db_path, "0.2.17.4+2") is not None


class TestSQLiteModeAC2:
    def test_validators_pass_after_finalize(self, sqlite_worktree):
        """AC2: Step 9 validators green in sqlite mode (staged DB)."""
        tmp, _yaml, _hash, db_path = sqlite_worktree
        internal = "0.2.17.4+2"
        frsr.finalize_rw_semver_registry(internal)

        subprocess.run(["git", "add", str(db_path.relative_to(tmp))], cwd=tmp, check=True)
        subprocess.run(["git", "add", "src/ai_dev_kit/version.py"], cwd=tmp, check=True)

        r1 = subprocess.run(
            [sys.executable, str(VALIDATION_DIR / "validate_semver_registry_injective.py")],
            cwd=tmp,
            capture_output=True,
            text=True,
        )
        assert r1.returncode == 0, r1.stderr or r1.stdout

        r2 = subprocess.run(
            [
                sys.executable,
                str(VALIDATION_DIR / "validate_task_touch_release_contract.py"),
                "--strict",
                "--internal-version",
                internal,
            ],
            cwd=tmp,
            capture_output=True,
            text=True,
        )
        assert r2.returncode == 0, r2.stderr or r2.stdout

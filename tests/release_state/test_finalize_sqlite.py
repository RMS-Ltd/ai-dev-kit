"""Finalize RW semver registry with SQLite backend."""

from __future__ import annotations

import sys
from pathlib import Path

import pytest
import yaml

_REPO_ROOT = Path(__file__).resolve().parents[2]
_SCRIPT_DIR = _REPO_ROOT / "packages/frameworks/workflow-mgt/scripts"
_VERSION_DIR = _SCRIPT_DIR / "version"
sys.path.insert(0, str(_SCRIPT_DIR))
sys.path.insert(0, str(_VERSION_DIR))

import finalize_rw_semver_registry as frsr  # noqa: E402
import semver_converter  # noqa: E402
from release_state.store import load_registry_from_sqlite  # noqa: E402


@pytest.fixture
def isolated_sqlite_task_touch(tmp_path, monkeypatch):
    db_path = tmp_path / "release-state.db"
    registry_path = tmp_path / "semver-registry.yaml"
    registry = {
        "rc_0": {
            "epic_to_minor": {},
            "story_to_patch": {},
            "task_touch_mode": {
                "epic_count": 4,
                "task_touch_counter": 940,
                "mapping_history": [],
            },
        },
        "rc_1": {"epic_to_minor": {}, "story_to_patch": {}},
    }
    registry_path.write_text(yaml.dump(registry), encoding="utf-8")
    config = {
        "semver_mapping_strategy": "task_touch",
        "release_state_backend": "sqlite",
        "release_state_db": str(db_path.relative_to(tmp_path)),
    }

    monkeypatch.chdir(tmp_path)
    monkeypatch.setattr(semver_converter, "find_registry_file", lambda: registry_path)
    monkeypatch.setattr(semver_converter, "load_rw_config", lambda: config)
    monkeypatch.setattr(
        semver_converter,
        "get_release_state_db_path",
        lambda: db_path,
    )
    monkeypatch.setattr(semver_converter, "get_release_state_backend", lambda: "sqlite")

    from release_state.import_legacy import import_registry_yaml

    import_registry_yaml(registry_path, db_path, changelog_dir=None)
    return tmp_path, db_path


def test_finalize_sqlite_creates_mapping(isolated_sqlite_task_touch):
    _tmp, db_path = isolated_sqlite_task_touch
    payload = frsr.finalize_rw_semver_registry("0.2.13.4+1")
    assert payload["skipped"] is False
    assert payload["created"] is True
    assert payload["semver_full"] == "0.4.941+1"

    data = load_registry_from_sqlite(db_path)
    history = data["rc_0"]["task_touch_mode"]["mapping_history"]
    assert any(e["internal_version"] == "0.2.13.4+1" for e in history)
    assert data["rc_0"]["task_touch_mode"]["task_touch_counter"] == 941


def test_finalize_sqlite_idempotent(isolated_sqlite_task_touch):
    frsr.finalize_rw_semver_registry("0.2.13.4+1")
    payload = frsr.finalize_rw_semver_registry("0.2.13.4+1")
    assert payload["created"] is False

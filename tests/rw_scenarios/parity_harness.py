"""Shared fixtures for T05 legacy vs SQLite parity comparison."""

from __future__ import annotations

from pathlib import Path
from typing import Any

import yaml

import finalize_rw_semver_registry as frsr
import semver_converter as sc
from release_state.import_legacy import import_registry_yaml
from release_state.store import load_registry_from_sqlite


def _empty_registry_dict(counter: int) -> dict:
    return {
        "rc_0": {
            "epic_to_minor": {},
            "story_to_patch": {},
            "task_touch_mode": {
                "epic_count": 0,
                "task_touch_counter": counter,
                "mapping_history": [],
            },
        }
    }


def init_legacy_backend(work_dir: Path, monkeypatch, *, counter: int) -> Path:
    work_dir.mkdir(parents=True, exist_ok=True)
    registry_path = work_dir / "semver-registry.yaml"
    registry_path.write_text(yaml.dump(_empty_registry_dict(counter)), encoding="utf-8")
    config = {"semver_mapping_strategy": "task_touch", "release_state_backend": "legacy"}
    monkeypatch.chdir(work_dir)
    monkeypatch.setattr(sc, "find_registry_file", lambda: registry_path)
    monkeypatch.setattr(sc, "load_rw_config", lambda: config)
    monkeypatch.setattr(sc, "get_release_state_backend", lambda: "legacy")
    return registry_path


def init_sqlite_backend(work_dir: Path, monkeypatch, *, counter: int) -> Path:
    work_dir.mkdir(parents=True, exist_ok=True)
    yaml_path = work_dir / "semver-registry.yaml"
    db_path = work_dir / ".adk" / "release-state.db"
    yaml_path.write_text(yaml.dump(_empty_registry_dict(counter)), encoding="utf-8")
    import_registry_yaml(yaml_path, db_path, changelog_dir=None)
    config = {
        "semver_mapping_strategy": "task_touch",
        "release_state_backend": "sqlite",
        "release_state_db": ".adk/release-state.db",
    }
    monkeypatch.chdir(work_dir)
    monkeypatch.setattr(sc, "load_rw_config", lambda: config)
    monkeypatch.setattr(sc, "get_release_state_backend", lambda: "sqlite")
    monkeypatch.setattr(sc, "get_release_state_db_path", lambda: db_path)
    monkeypatch.setattr(sc, "find_registry_file", lambda: yaml_path)
    return db_path


def finalize_once(internal: str) -> dict[str, Any]:
    before = sc.get_task_touch_counter(0)
    payload = frsr.finalize_rw_semver_registry(internal)
    return {
        "semver_full": payload["semver_full"],
        "created": payload["created"],
        "counter_before": before,
        "counter_after": sc.get_task_touch_counter(0),
    }


def assert_registry_parity(legacy: dict[str, Any], sqlite: dict[str, Any], *, scenario_id: str) -> None:
    assert legacy["semver_full"] == sqlite["semver_full"], (
        f"{scenario_id}: semver mismatch legacy={legacy['semver_full']} sqlite={sqlite['semver_full']}"
    )
    assert legacy["counter_after"] == sqlite["counter_after"], (
        f"{scenario_id}: counter mismatch legacy={legacy['counter_after']} sqlite={sqlite['counter_after']}"
    )


def export_sqlite_history(db_path: Path) -> list[dict]:
    reg = load_registry_from_sqlite(db_path)
    return reg["rc_0"]["task_touch_mode"]["mapping_history"]

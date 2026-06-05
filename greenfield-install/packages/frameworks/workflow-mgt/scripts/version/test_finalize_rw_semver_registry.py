"""Tests for finalize_rw_semver_registry."""

from __future__ import annotations

import sys
from pathlib import Path

import pytest
import yaml

_SCRIPT_DIR = Path(__file__).resolve().parent
if str(_SCRIPT_DIR) not in sys.path:
    sys.path.insert(0, str(_SCRIPT_DIR))

import semver_converter  # noqa: E402
import finalize_rw_semver_registry as frsr  # noqa: E402


@pytest.fixture
def isolated_task_touch(tmp_path, monkeypatch):
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
    config = {"semver_mapping_strategy": "task_touch"}

    monkeypatch.setattr(semver_converter, "find_registry_file", lambda: registry_path)
    monkeypatch.setattr(semver_converter, "load_rw_config", lambda: config)
    return tmp_path, registry_path


def test_finalize_creates_registry_row(isolated_task_touch):
    _tmp, registry_path = isolated_task_touch
    payload = frsr.finalize_rw_semver_registry("0.2.13.4+1")
    assert payload["skipped"] is False
    assert payload["created"] is True
    assert payload["semver_full"] == "0.4.941+1"
    assert payload["primary_tag"] == "v0.4.941"

    data = yaml.safe_load(registry_path.read_text(encoding="utf-8"))
    history = data["rc_0"]["task_touch_mode"]["mapping_history"]
    assert any(e["internal_version"] == "0.2.13.4+1" for e in history)
    assert data["rc_0"]["task_touch_mode"]["task_touch_counter"] == 941


def test_finalize_idempotent_when_row_exists(isolated_task_touch):
    frsr.finalize_rw_semver_registry("0.2.13.4+1")
    payload = frsr.finalize_rw_semver_registry("0.2.13.4+1")
    assert payload["created"] is False
    assert payload["semver_full"] == "0.4.941+1"


def test_finalize_skipped_for_registry_strategy(tmp_path, monkeypatch):
    registry_path = tmp_path / "semver-registry.yaml"
    registry_path.write_text("rc_0: {epic_to_minor: {}, story_to_patch: {}}\n", encoding="utf-8")
    monkeypatch.setattr(semver_converter, "find_registry_file", lambda: registry_path)
    monkeypatch.setattr(
        semver_converter,
        "load_rw_config",
        lambda: {"semver_mapping_strategy": "registry"},
    )
    payload = frsr.finalize_rw_semver_registry("0.2.13.4+1")
    assert payload["skipped"] is True
    assert "not task_touch" in payload["reason"]

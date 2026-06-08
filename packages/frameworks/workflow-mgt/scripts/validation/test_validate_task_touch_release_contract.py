"""Tests for validate_task_touch_release_contract."""

from __future__ import annotations

import sys
from pathlib import Path

import pytest

_val_dir = Path(__file__).resolve().parent
_version_dir = _val_dir.parent / "version"
for p in (_val_dir, _version_dir):
    if str(p) not in sys.path:
        sys.path.insert(0, str(p))

import validate_task_touch_release_contract as vttrc  # noqa: E402
import semver_converter  # noqa: E402


@pytest.fixture
def task_touch_project(tmp_path, monkeypatch):
    (tmp_path / "rw-config.yaml").write_text(
        "version_file: src/v.py\nsemver_mapping_strategy: task_touch\n",
        encoding="utf-8",
    )
    (tmp_path / "src").mkdir()
    (tmp_path / "src/v.py").write_text(
        "VERSION_RC = 0\nVERSION_EPIC = 2\nVERSION_STORY = 13\n"
        "VERSION_TASK = 4\nVERSION_BUILD = 1\n",
        encoding="utf-8",
    )
    registry = {
        "rc_0": {
            "epic_to_minor": {},
            "story_to_patch": {},
            "task_touch_mode": {
                "epic_count": 4,
                "task_touch_counter": 941,
                "mapping_history": [
                    {
                        "internal_version": "0.2.13.4+1",
                        "semver": "0.4.941+1",
                        "patch": 941,
                        "rc": 0,
                        "epic": 2,
                        "story": 13,
                        "task": 4,
                        "build": 1,
                    }
                ],
            },
        },
        "rc_1": {"epic_to_minor": {}, "story_to_patch": {}, "task_touch_mode": {"epic_count": 0, "task_touch_counter": 0, "mapping_history": []}},
    }
    import yaml

    reg_path = tmp_path / "semver-registry.yaml"
    reg_path.write_text(yaml.dump(registry, default_flow_style=False), encoding="utf-8")
    monkeypatch.chdir(tmp_path)
    monkeypatch.setattr(semver_converter, "load_semver_registry", lambda: registry)
    monkeypatch.setattr(
        semver_converter,
        "get_semver_mapping_strategy",
        lambda: "task_touch",
    )
    monkeypatch.setattr(semver_converter, "get_release_state_backend", lambda: "legacy")
    return tmp_path


def test_ok_when_registry_finalized(task_touch_project, monkeypatch):
    monkeypatch.setattr(
        vttrc,
        "_git_show_staged_registry",
        lambda _root: "internal_version: 0.2.13.4+1",
    )
    monkeypatch.setattr(
        semver_converter,
        "convert_version_string",
        lambda _iv, strategy="task_touch", finalize=False: "0.4.941+1",
    )
    monkeypatch.setattr(
        semver_converter,
        "get_rw_tag_info",
        lambda _iv, finalize=False: {
            "primary_tag": "v0.4.941",
            "semver_full": "0.4.941+1",
        },
    )
    ok, errors = vttrc.validate_task_touch_release_contract(check_staged_registry=True)
    assert ok, errors
    assert errors == []


def test_blocks_missing_registry_row(task_touch_project, monkeypatch):
    monkeypatch.setattr(
        vttrc,
        "_git_show_staged_registry",
        lambda _root: "internal_version: 0.2.13.4+1",
    )
    ok, errors = vttrc.validate_task_touch_release_contract(
        internal_version="0.2.13.9+1",
        check_staged_registry=False,
    )
    assert not ok
    assert any("missing finalized" in e for e in errors)


def test_blocks_unstaged_registry(task_touch_project, monkeypatch):
    monkeypatch.setattr(vttrc, "_git_show_staged_registry", lambda _root: None)
    ok, errors = vttrc.validate_task_touch_release_contract()
    assert not ok
    assert any("not staged" in e for e in errors)

"""Tests for task_touch registry audit/repair and finalize injective guards."""

from __future__ import annotations

import copy
import sys
from pathlib import Path

import pytest
import yaml

ROOT = Path(__file__).resolve().parents[1]
VERSION_DIR = ROOT / "packages/frameworks/workflow mgt/scripts/version"
sys.path.insert(0, str(VERSION_DIR))

from semver_converter import (  # noqa: E402
    convert_internal_to_semver_task_touch,
    format_semver,
    load_semver_registry,
    save_semver_registry,
    set_epic_count,
)
from task_touch_registry_audit import audit_task_touch_history, has_collisions  # noqa: E402


@pytest.fixture
def isolated_registry(tmp_path, monkeypatch):
    reg_file = tmp_path / "semver-registry.yaml"
    monkeypatch.setattr("semver_converter.find_registry_file", lambda: reg_file)
    base = {
        "rc_0": {
            "epic_to_minor": {},
            "story_to_patch": {},
            "task_touch_mode": {
                "epic_count": 4,
                "task_touch_counter": 0,
                "mapping_history": [],
            },
        },
        "rc_1": {
            "epic_to_minor": {},
            "story_to_patch": {},
            "task_touch_mode": {
                "epic_count": 0,
                "task_touch_counter": 0,
                "mapping_history": [],
            },
        },
    }
    save_semver_registry(base)
    yield reg_file


def test_audit_detects_patch_collision():
    ttm = {
        "epic_count": 4,
        "task_touch_counter": 2,
        "mapping_history": [
            {
                "internal_version": "0.1.1.1+1",
                "semver": "0.4.1+1",
                "patch": 1,
                "rc": 0,
                "epic": 1,
                "story": 1,
                "task": 1,
                "build": 1,
            },
            {
                "internal_version": "0.2.2.2+1",
                "semver": "0.4.2+1",
                "patch": 1,
                "rc": 0,
                "epic": 2,
                "story": 2,
                "task": 2,
                "build": 1,
            },
        ],
    }
    report = audit_task_touch_history(ttm)
    assert has_collisions(report)
    assert 1 in report["patch_collisions"]


def test_repair_manifest_restores_injective(isolated_registry):
    from repair_semver_registry_collisions import apply_manifest

    registry = load_semver_registry()  # tmp_path registry only (chdir)
    ttm = registry["rc_0"]["task_touch_mode"]
    ttm["mapping_history"] = [
        {
            "internal_version": "0.5.9.12+2",
            "semver": "0.4.10+2",
            "patch": 10,
            "rc": 0,
            "epic": 5,
            "story": 9,
            "task": 12,
            "build": 2,
        },
        {
            "internal_version": "0.5.1.76+2",
            "semver": "0.4.10+2",
            "patch": 10,
            "rc": 0,
            "epic": 5,
            "story": 9,
            "task": 12,
            "build": 2,
        },
        {
            "internal_version": "0.6.9.17+1",
            "semver": "0.4.10+1",
            "patch": 10,
            "rc": 0,
            "epic": 6,
            "story": 9,
            "task": 17,
            "build": 1,
        },
    ]
    ttm["task_touch_counter"] = 10
    save_semver_registry(registry)

    manifest = {
        "rc": 0,
        "canonical_keep": ["0.5.9.12+2", "0.6.9.17+1"],
        "remove_internal": ["0.5.1.76+2"],
        "reassign_internal": ["0.6.9.17+1"],
    }
    # 0.6.9.17+1 collides on patch 10 with 0.5.9.12+2 — reassign 0.6.9.17+1
    manifest["reassign_internal"] = ["0.6.9.17+1"]
    manifest["canonical_keep"] = ["0.5.9.12+2"]
    apply_manifest(registry, manifest, dry_run=False)

    report = audit_task_touch_history(registry["rc_0"]["task_touch_mode"])
    assert not has_collisions(report)

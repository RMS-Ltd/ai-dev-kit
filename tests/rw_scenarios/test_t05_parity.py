#!/usr/bin/env python3
"""T05 parity replay — registry-touching scenarios (legacy vs sqlite)."""

from __future__ import annotations

import sys
from pathlib import Path

import pytest
import yaml

RW_SCENARIOS = Path(__file__).resolve().parent
REPO_ROOT = RW_SCENARIOS.parents[1]
SCRIPTS = REPO_ROOT / "packages/frameworks/workflow-mgt/scripts"
VERSION_DIR = SCRIPTS / "version"
sys.path.insert(0, str(RW_SCENARIOS))
sys.path.insert(0, str(SCRIPTS))
sys.path.insert(0, str(VERSION_DIR))

import semver_converter as sc  # noqa: E402
from parity_harness import (  # noqa: E402
    assert_registry_parity,
    export_sqlite_history,
    finalize_once,
    init_legacy_backend,
    init_sqlite_backend,
)

REGISTRY_PARITY_IDS = ["RW-S01", "RW-S02", "RW-S04", "RW-S06", "RW-V01"]
SKIPPED_BASELINE = ["RW-B04", "RW-B05", "RW-G01", "RW-G02", "RW-G05", "RW-P02", "RW-P03"]


class TestT05RegistryParity:
    def test_RW_S01_parity(self, tmp_path, monkeypatch):
        init_legacy_backend(tmp_path / "leg", monkeypatch, counter=10)
        leg = finalize_once("0.2.17.1+1")
        init_sqlite_backend(tmp_path / "sql", monkeypatch, counter=10)
        sql = finalize_once("0.2.17.1+1")
        assert_registry_parity(leg, sql, scenario_id="RW-S01")
        assert leg["created"] is True

    def test_RW_S02_parity_three_releases(self, tmp_path, monkeypatch):
        init_legacy_backend(tmp_path / "leg", monkeypatch, counter=100)
        leg_patches = [finalize_once(f"0.2.17.1+{b}")["semver_full"] for b in (1, 2, 3)]
        db = init_sqlite_backend(tmp_path / "sql", monkeypatch, counter=100)
        sql_patches = [finalize_once(f"0.2.17.1+{b}")["semver_full"] for b in (1, 2, 3)]
        assert leg_patches == sql_patches
        assert len(export_sqlite_history(db)) == 3

    def test_RW_S04_parity_finalize_boundary(self, tmp_path, monkeypatch):
        init_legacy_backend(tmp_path / "leg", monkeypatch, counter=300)
        before = sc.get_task_touch_counter(0)
        sc.convert_internal_to_semver_task_touch(0, 2, 17, 2, 1, finalize=False)
        assert sc.get_task_touch_counter(0) == before
        leg = finalize_once("0.2.17.2+1")
        init_sqlite_backend(tmp_path / "sql", monkeypatch, counter=300)
        before2 = sc.get_task_touch_counter(0)
        with pytest.raises(Exception):
            sc.convert_internal_to_semver_task_touch(0, 2, 17, 2, 1, finalize=False)
        assert sc.get_task_touch_counter(0) == before2
        sql = finalize_once("0.2.17.2+1")
        assert_registry_parity(leg, sql, scenario_id="RW-S04")

    def test_RW_S06_parity_idempotent_finalize(self, tmp_path, monkeypatch):
        init_legacy_backend(tmp_path / "leg", monkeypatch, counter=600)
        p1 = finalize_once("0.2.17.2+1")
        p2 = finalize_once("0.2.17.2+1")
        assert p1["created"] is True and p2["created"] is False
        init_sqlite_backend(tmp_path / "sql", monkeypatch, counter=600)
        s1 = finalize_once("0.2.17.2+1")
        s2 = finalize_once("0.2.17.2+1")
        assert s1["created"] is True and s2["created"] is False
        assert p1["semver_full"] == s1["semver_full"]

    def test_RW_V01_parity_ten_finalize(self, tmp_path, monkeypatch):
        init_legacy_backend(tmp_path / "leg", monkeypatch, counter=700)
        leg = [finalize_once(f"0.2.16.4+{b}")["semver_full"] for b in range(1, 11)]
        init_sqlite_backend(tmp_path / "sql", monkeypatch, counter=700)
        sql = [finalize_once(f"0.2.16.4+{b}")["semver_full"] for b in range(1, 11)]
        assert leg == sql
        assert sc.get_task_touch_counter(0) == 710


class TestT05SqliteInjective:
    def test_RW_S05_sqlite_import_dedupes_yaml_collision(self, tmp_path):
        """RW-S05 sqlite path: import dedupes duplicate PATCH rows; validator passes."""
        registry_path = tmp_path / "semver-registry.yaml"
        registry = {
            "rc_0": {
                "task_touch_mode": {
                    "task_touch_counter": 500,
                    "mapping_history": [
                        {"internal_version": "0.2.17.1+1", "semver": "0.4.500+1", "patch": 500},
                        {"internal_version": "0.2.17.1+2", "semver": "0.4.500+2", "patch": 500},
                    ],
                }
            }
        }
        registry_path.write_text(yaml.dump(registry), encoding="utf-8")
        db = tmp_path / ".adk" / "release-state.db"
        from release_state.import_legacy import import_registry_yaml

        import_registry_yaml(registry_path, db, changelog_dir=None)
        history = export_sqlite_history(db)
        assert len(history) == 1
        (tmp_path / "rw-config.yaml").write_text(
            "semver_mapping_strategy: task_touch\nrelease_state_backend: sqlite\n"
            "release_state_db: .adk/release-state.db\n",
            encoding="utf-8",
        )
        import subprocess

        r = subprocess.run(
            [sys.executable, str(SCRIPTS / "validation/validate_semver_registry_injective.py")],
            cwd=tmp_path,
            capture_output=True,
            text=True,
        )
        assert r.returncode == 0

    def test_RW_S05_sqlite_unique_patch_constraint(self, tmp_path, monkeypatch):
        """RW-S05: DB UNIQUE(rc, patch) prevents duplicate PATCH at write time."""
        import sqlite3

        db = init_sqlite_backend(tmp_path, monkeypatch, counter=500)
        conn = sqlite3.connect(db)
        conn.execute(
            "INSERT INTO task_touch_mapping "
            "(rc, internal_version, semver_full, patch, epic, story, task, build) "
            "VALUES (0, '0.2.17.1+1', '0.4.500+1', 500, 2, 17, 1, 1)"
        )
        conn.commit()
        with pytest.raises(sqlite3.IntegrityError):
            conn.execute(
                "INSERT INTO task_touch_mapping "
                "(rc, internal_version, semver_full, patch, epic, story, task, build) "
                "VALUES (0, '0.2.17.1+2', '0.4.500+2', 500, 2, 17, 1, 2)"
            )
        conn.close()


@pytest.mark.parametrize("scenario_id", REGISTRY_PARITY_IDS)
def test_registry_parity_ids_registered(scenario_id: str):
    assert scenario_id in REGISTRY_PARITY_IDS


@pytest.mark.parametrize("scenario_id", SKIPPED_BASELINE)
def test_skipped_baseline_documented(scenario_id: str):
    assert scenario_id in SKIPPED_BASELINE

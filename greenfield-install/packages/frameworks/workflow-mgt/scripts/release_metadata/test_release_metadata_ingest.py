#!/usr/bin/env python3
"""Tests for release_metadata async ingest (FR-115 / FR-116)."""

from __future__ import annotations

import tempfile
from pathlib import Path

import pytest

_PKG = Path(__file__).resolve().parent
_SCRIPTS = _PKG.parent
import sys

if str(_SCRIPTS) not in sys.path:
    sys.path.insert(0, str(_SCRIPTS))

from release_metadata.audit_semver import audit_collisions  # noqa: E402
from release_metadata.ingest import run_ingest  # noqa: E402
from release_metadata.ingest_semver import db_mapping_count, ingest_semver_registry, yaml_mapping_count  # noqa: E402
from release_metadata.query import query_by_version  # noqa: E402
from release_metadata.store import init_schema, open_store  # noqa: E402

SAMPLE_REGISTRY = """
rc_0:
  epic_to_minor:
    2: 2
  story_to_patch:
    (2, 1): 6
  task_touch_mode:
    epic_count: 4
    task_touch_counter: 2
    mapping_history:
      - internal_version: 0.2.1.1+1
        semver: 0.4.100+1
        patch: 100
        rc: 0
        epic: 2
        story: 1
        task: 1
        build: 1
      - internal_version: 0.2.1.2+1
        semver: 0.4.101+1
        patch: 101
        rc: 0
        epic: 2
        story: 1
        task: 2
        build: 1
"""

SAMPLE_CHANGELOG = """# Changelog

## [0.2.1.1+1] - 07-06-26

E02:S01:T01 — summary line one.

### Added
- item a

---

## [0.2.1.2+1] - 07-06-26

E02:S01:T02 — summary line two.
"""


@pytest.fixture
def mini_project(tmp_path: Path):
    (tmp_path / ".data").mkdir()
    (tmp_path / "rw-config.yaml").write_text(
        f"""
release_metadata_store:
  path: .data/test.sqlite
ingest:
  enabled: true
  semver_registry_file: semver-registry.yaml
main_changelog: CHANGELOG.md
changelog_dir: archive
""",
        encoding="utf-8",
    )
    (tmp_path / "semver-registry.yaml").write_text(SAMPLE_REGISTRY, encoding="utf-8")
    (tmp_path / "CHANGELOG.md").write_text(SAMPLE_CHANGELOG, encoding="utf-8")
    (tmp_path / "archive").mkdir()
    return tmp_path


def test_semver_ingest_row_count(mini_project: Path):
    db = mini_project / ".data" / "test.sqlite"
    with open_store(db) as conn:
        stats = ingest_semver_registry(conn, mini_project / "semver-registry.yaml")
        conn.commit()
    assert stats["mappings"] == 2
    assert yaml_mapping_count(mini_project / "semver-registry.yaml") == 2
    with open_store(db, init=False) as conn:
        assert db_mapping_count(conn) == 2


def test_full_ingest_idempotent(mini_project: Path):
    rw = {
        "release_metadata_store": {"path": ".data/test.sqlite"},
        "ingest": {"enabled": True, "semver_registry_file": "semver-registry.yaml"},
        "main_changelog": "CHANGELOG.md",
        "changelog_dir": "archive",
    }
    r1 = run_ingest(project_root=mini_project, full=True, rw_config=rw)
    r2 = run_ingest(project_root=mini_project, full=False, rw_config=rw)
    assert not r1.skipped
    assert r2.skipped


def test_query_by_version(mini_project: Path):
    rw = {
        "release_metadata_store": {"path": ".data/test.sqlite"},
        "ingest": {"enabled": True},
        "main_changelog": "CHANGELOG.md",
        "changelog_dir": "archive",
    }
    run_ingest(project_root=mini_project, full=True, rw_config=rw)
    db = mini_project / ".data" / "test.sqlite"
    with open_store(db, init=False) as conn:
        row = query_by_version(conn, "0.2.1.1+1")
    assert row is not None
    assert row["semver"] == "0.4.100+1"
    assert "summary" in row


def test_audit_no_collisions(mini_project: Path):
    db_path = mini_project / "audit.sqlite"
    with open_store(db_path) as conn:
        ingest_semver_registry(conn, mini_project / "semver-registry.yaml")
        conn.commit()
    with open_store(db_path, init=False) as conn:
        report = audit_collisions(conn)
    assert not report["patch_collisions"]
    assert not report["core_collisions"]


def test_audit_detects_patch_collision():
    with tempfile.TemporaryDirectory() as tmp:
        db = Path(tmp) / "t.sqlite"
        with open_store(db) as conn:
            init_schema(conn)
            conn.execute(
                "INSERT INTO release (internal_version, ingested_at) VALUES ('0.1.1.1+1', 't')"
            )
            conn.execute(
                "INSERT INTO release (internal_version, ingested_at) VALUES ('0.1.1.2+1', 't')"
            )
            conn.execute(
                """
                INSERT INTO semver_mapping (
                  internal_version, semver, semver_core, patch, row_hash, ingested_at
                ) VALUES ('0.1.1.1+1', '0.4.5+1', '0.4.5', 5, 'a', 't')
                """
            )
            conn.execute(
                """
                INSERT INTO semver_mapping (
                  internal_version, semver, semver_core, patch, row_hash, ingested_at
                ) VALUES ('0.1.1.2+1', '0.4.5+2', '0.4.5', 5, 'b', 't')
                """
            )
            conn.commit()
        with open_store(db, init=False) as conn:
            report = audit_collisions(conn)
        assert report["patch_collisions"]

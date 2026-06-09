"""Tests for validate_allocator_health (FR-122 Step 1e)."""

from __future__ import annotations

import subprocess
import sys
from pathlib import Path

import pytest

_val_dir = Path(__file__).resolve().parent
_scripts_dir = _val_dir.parent
_version_dir = _scripts_dir / "version"
for p in (_val_dir, _scripts_dir, _version_dir):
    if str(p) not in sys.path:
        sys.path.insert(0, str(p))

import validate_allocator_health as vah  # noqa: E402
from release_state.db import open_db, utc_now_iso  # noqa: E402


def _seed_db(db_path: Path, *, counter: int, max_patch: int, epic_count: int = 4) -> None:
    conn = open_db(db_path)
    now = utc_now_iso()
    conn.execute(
        "INSERT INTO semver_rc (rc, epic_count, updated_at) VALUES (0, ?, ?)",
        (epic_count, now),
    )
    conn.execute(
        """
        INSERT INTO task_touch_state (rc, epic_count, task_touch_counter, max_patch, updated_at)
        VALUES (0, ?, ?, ?, ?)
        """,
        (epic_count, counter, max_patch, now),
    )
    conn.commit()
    conn.close()


@pytest.fixture
def sqlite_project(tmp_path, monkeypatch):
    db = tmp_path / ".adk" / "release-state.db"
    (tmp_path / "rw-config.yaml").write_text(
        """
version_file: src/v.py
semver_mapping_strategy: task_touch
release_state_backend: sqlite
release_state_db: .adk/release-state.db
allocator_health:
  enabled: true
  min_patch_floor: 1000
""".strip(),
        encoding="utf-8",
    )
    (tmp_path / "src").mkdir()
    (tmp_path / "src/v.py").write_text("VERSION_RC = 0\n", encoding="utf-8")
    monkeypatch.chdir(tmp_path)
    return tmp_path, db


def test_truncated_max_patch_fails_strict(sqlite_project):
    root, db = sqlite_project
    _seed_db(db, counter=10, max_patch=10)
    ok, lines = vah.validate_allocator_health(project_root=root, strict=True)
    assert not ok
    assert any("min_patch_floor" in line for line in lines)


def test_healthy_allocator_passes(sqlite_project):
    root, db = sqlite_project
    _seed_db(db, counter=1096, max_patch=1096)
    ok, lines = vah.validate_allocator_health(project_root=root, strict=True)
    assert ok
    assert any("allocator_health: OK" in line for line in lines)


def test_counter_behind_max_patch_fails(sqlite_project):
    root, db = sqlite_project
    _seed_db(db, counter=5, max_patch=1096)
    ok, lines = vah.validate_allocator_health(project_root=root, strict=True)
    assert not ok
    assert any("counter" in line and "max_patch" in line for line in lines)

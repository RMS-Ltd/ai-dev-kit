"""Tests for validate_git_tag_occupancy (FR-122 Step 1f)."""

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

import validate_git_tag_occupancy as vgt  # noqa: E402
from release_state.db import open_db, utc_now_iso  # noqa: E402


def _seed_db(db_path: Path, *, counter: int, epic_count: int = 4) -> None:
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
        (epic_count, counter, counter, now),
    )
    conn.commit()
    conn.close()


def _git_init_with_tag(path: Path, tag: str) -> None:
    subprocess.run(["git", "init"], cwd=path, check=True, capture_output=True)
    subprocess.run(
        ["git", "config", "user.email", "test@example.com"],
        cwd=path,
        check=True,
        capture_output=True,
    )
    subprocess.run(
        ["git", "config", "user.name", "Test"],
        cwd=path,
        check=True,
        capture_output=True,
    )
    (path / "f.txt").write_text("x", encoding="utf-8")
    subprocess.run(["git", "add", "f.txt"], cwd=path, check=True, capture_output=True)
    subprocess.run(
        ["git", "commit", "-m", "init"],
        cwd=path,
        check=True,
        capture_output=True,
    )
    subprocess.run(
        ["git", "tag", "-a", tag, "-m", "test"],
        cwd=path,
        check=True,
        capture_output=True,
    )


@pytest.fixture
def sqlite_git_project(tmp_path, monkeypatch):
    db = tmp_path / ".adk" / "release-state.db"
    (tmp_path / "rw-config.yaml").write_text(
        """
version_file: src/v.py
semver_mapping_strategy: task_touch
release_state_backend: sqlite
release_state_db: .adk/release-state.db
git_tag_occupancy:
  enabled: true
""".strip(),
        encoding="utf-8",
    )
    (tmp_path / "src").mkdir()
    (tmp_path / "src/v.py").write_text("VERSION_RC = 0\n", encoding="utf-8")
    monkeypatch.chdir(tmp_path)
    return tmp_path, db


def test_predicted_tag_collision_fails_strict(sqlite_git_project):
    root, db = sqlite_git_project
    _git_init_with_tag(root, "v0.4.11")
    _seed_db(db, counter=10, epic_count=4)
    ok, lines = vgt.validate_git_tag_occupancy(project_root=root, strict=True)
    assert not ok
    assert any("v0.4.11" in line for line in lines)


def test_healthy_namespace_passes(sqlite_git_project):
    root, db = sqlite_git_project
    _git_init_with_tag(root, "v0.4.11")
    _seed_db(db, counter=1096, epic_count=4)
    ok, lines = vgt.validate_git_tag_occupancy(project_root=root, strict=True)
    assert ok
    assert any("predicted_tag=v0.4.1097" in line for line in lines)

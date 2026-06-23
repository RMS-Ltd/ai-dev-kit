"""Tests for validate_rw_split_brain_streak (FR-122 Wave 8)."""

from __future__ import annotations

import subprocess
import sys
from pathlib import Path

import pytest

_val_dir = Path(__file__).resolve().parent
for p in (_val_dir, _val_dir.parent / "version", _val_dir.parent):
    if str(p) not in sys.path:
        sys.path.insert(0, str(p))

import validate_rw_split_brain_streak as streak  # noqa: E402


def _git(cwd: Path, *args: str) -> None:
    subprocess.run(["git", *args], cwd=cwd, check=True, capture_output=True)


@pytest.fixture
def mini_repo(tmp_path):
    _git(tmp_path, "init")
    _git(tmp_path, "config", "user.email", "t@test")
    _git(tmp_path, "config", "user.name", "t")
    (tmp_path / "rw-config.yaml").write_text(
        """
version_file: src/v.py
readme_file: README.md
main_changelog: CHANGELOG.md
release_state_db: .adk/release-state.db
semver_mapping_strategy: task_touch
release_state_backend: sqlite
split_brain_streak:
  enabled: true
  min_streak: 2
""",
        encoding="utf-8",
    )
    (tmp_path / "src").mkdir()
    (tmp_path / ".adk").mkdir()
    return tmp_path


def _write_release(
    repo: Path,
    internal: str,
    semver: str,
    *,
    display_semver: str | None = None,
    tag: bool = True,
) -> None:
    rc, epic, story, task, build = internal.replace("+", ".").split(".")
    shown = display_semver or semver.split("+", 1)[0]
    (repo / "src/v.py").write_text(
        f"VERSION_RC = {rc}\nVERSION_EPIC = {epic}\nVERSION_STORY = {story}\n"
        f"VERSION_TASK = {task}\nVERSION_BUILD = {build}\n",
        encoding="utf-8",
    )
    (repo / "README.md").write_text(
        f"**Version (SemVer):** `v{shown}` | **Internal:** `v{internal}`\n",
        encoding="utf-8",
    )
    (repo / "CHANGELOG.md").write_text(
        f"## [{internal}] - 09-06-26\n\nSemVer **v{shown}**.\n",
        encoding="utf-8",
    )
    # Minimal sqlite mapping
    db = repo / ".adk/release-state.db"
    import sqlite3

    conn = sqlite3.connect(db)
    conn.execute(
        """
        CREATE TABLE IF NOT EXISTS task_touch_mapping (
            id INTEGER PRIMARY KEY,
            rc INTEGER, internal_version TEXT, semver_full TEXT,
            semver_core TEXT, patch INTEGER, epic INTEGER, story INTEGER,
            task INTEGER, build INTEGER, created_at TEXT
        )
        """
    )
    parts = semver.split("+")[0].split(".")
    conn.execute(
        """
        INSERT INTO task_touch_mapping
        (rc, internal_version, semver_full, semver_core, patch, epic, story, task, build, created_at)
        VALUES (0, ?, ?, ?, ?, ?, ?, ?, ?, '2026-06-09T00:00:00Z')
        """,
        (internal, semver, ".".join(parts[:3]), int(parts[2]), int(epic), int(story), int(task), int(build)),
    )
    conn.commit()
    conn.close()
    _git(repo, "add", "-A")
    _git(repo, "commit", "-m", f"release {internal}")
    if tag:
        _git(repo, "tag", f"v{internal}")


def test_compute_streak_breaks_on_first_failure():
    audits = [
        streak.ReleaseAudit("v0.1.1.1+1", "0.1.1.1+1", "aaa", True, []),
        streak.ReleaseAudit("v0.1.1.1+2", "0.1.1.1+2", "bbb", False, ["mismatch"]),
        streak.ReleaseAudit("v0.1.1.1+3", "0.1.1.1+3", "ccc", True, []),
    ]
    assert streak.compute_streak(audits) == 1


def test_streak_two_coherent_releases(mini_repo):
    _write_release(mini_repo, "0.2.1.1+1", "0.4.1+1", display_semver="0.4.1")
    _write_release(mini_repo, "0.2.1.1+2", "0.4.2+2", display_semver="0.4.2")
    ok, payload = streak.validate_rw_split_brain_streak(
        project_root=mini_repo,
        min_streak=2,
        limit=5,
        strict=True,
    )
    assert ok
    assert payload["current_streak"] >= 2


def test_internal_tag_filter():
    assert streak._INTERNAL_TAG_RE.match("v0.2.1.30+5")
    assert not streak._INTERNAL_TAG_RE.match("v0.4.1103")

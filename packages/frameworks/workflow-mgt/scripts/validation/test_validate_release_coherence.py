"""Tests for validate_release_coherence (FR-122 Step 9)."""

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

import validate_release_coherence as vrc  # noqa: E402
from release_state.db import open_db, utc_now_iso  # noqa: E402


def _seed_mapping(db_path: Path, internal: str, semver_full: str, patch: int) -> None:
    conn = open_db(db_path)
    now = utc_now_iso()
    conn.execute(
        "INSERT INTO semver_rc (rc, epic_count, updated_at) VALUES (0, 4, ?)",
        (now,),
    )
    conn.execute(
        """
        INSERT INTO task_touch_state (rc, epic_count, task_touch_counter, max_patch, updated_at)
        VALUES (0, 4, ?, ?, ?)
        """,
        (patch, patch, now),
    )
    core = semver_full.split("+")[0]
    parts = internal.split(".")
    conn.execute(
        """
        INSERT INTO task_touch_mapping
          (rc, internal_version, semver_full, semver_core, patch, epic, story, task, build, finalized_at)
        VALUES (0, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        """,
        (
            internal,
            semver_full,
            core,
            patch,
            int(parts[1]),
            int(parts[2]),
            int(parts[3].split("+")[0]),
            int(parts[3].split("+")[1]),
            now,
        ),
    )
    conn.commit()
    conn.close()


@pytest.fixture
def coherence_project(tmp_path, monkeypatch):
    db = tmp_path / ".adk" / "release-state.db"
    (tmp_path / "src").mkdir()
    (tmp_path / "src/v.py").write_text(
        "VERSION_RC = 0\nVERSION_EPIC = 2\nVERSION_STORY = 1\n"
        "VERSION_TASK = 30\nVERSION_BUILD = 2\n",
        encoding="utf-8",
    )
    (tmp_path / "README.md").write_text(
        "**Version (SemVer):** `v0.4.1097` | **Internal:** `v0.2.1.30+2`\n",
        encoding="utf-8",
    )
    (tmp_path / "CHANGELOG.md").write_text(
        "## [0.2.1.30+2] - 09-06-26\n\nSemVer **v0.4.1097**.\n",
        encoding="utf-8",
    )
    (tmp_path / "rw-config.yaml").write_text(
        """
version_file: src/v.py
readme_file: README.md
main_changelog: CHANGELOG.md
semver_mapping_strategy: task_touch
release_state_backend: sqlite
release_state_db: .adk/release-state.db
release_coherence:
  enabled: true
""".strip(),
        encoding="utf-8",
    )
    _seed_mapping(db, "0.2.1.30+2", "0.4.1097+2", 1097)
    subprocess.run(["git", "init"], cwd=tmp_path, check=True, capture_output=True)
    subprocess.run(
        ["git", "config", "user.email", "t@example.com"],
        cwd=tmp_path,
        check=True,
        capture_output=True,
    )
    subprocess.run(
        ["git", "config", "user.name", "T"],
        cwd=tmp_path,
        check=True,
        capture_output=True,
    )
    monkeypatch.chdir(tmp_path)
    return tmp_path


def test_coherent_release_passes(coherence_project):
    ok, lines = vrc.validate_release_coherence(
        project_root=coherence_project, strict=True, check_staged=False
    )
    assert ok
    assert any("OK" in line for line in lines)


def test_readme_build_suffix_fails(coherence_project):
    readme = coherence_project / "README.md"
    readme.write_text(
        "**Version (SemVer):** `v0.4.1097+2` | **Internal:** `v0.2.1.30+2`\n",
        encoding="utf-8",
    )
    ok, lines = vrc.validate_release_coherence(
        project_root=coherence_project, strict=True, check_staged=False
    )
    assert not ok
    assert any("+BUILD" in line or "core-only" in line for line in lines)


def test_attempt11_core_only_coherence_passes(tmp_path, monkeypatch):
    """SBL attempt 11: internal 0.2.16.2+2 maps to public 0.0.5 (no +BUILD on surfaces)."""
    db = tmp_path / ".adk" / "release-state.db"
    (tmp_path / "src").mkdir()
    (tmp_path / "src/v.py").write_text(
        "VERSION_RC = 0\nVERSION_EPIC = 2\nVERSION_STORY = 16\n"
        "VERSION_TASK = 2\nVERSION_BUILD = 2\n",
        encoding="utf-8",
    )
    (tmp_path / "README.md").write_text(
        "**Version (SemVer):** `v0.0.5` | **Internal:** `v0.2.16.2+2`\n",
        encoding="utf-8",
    )
    (tmp_path / "CHANGELOG.md").write_text(
        "## [0.2.16.2+2] - 24-06-26\n\nSemVer **v0.0.5**.\n",
        encoding="utf-8",
    )
    (tmp_path / "rw-config.yaml").write_text(
        """
version_file: src/v.py
readme_file: README.md
main_changelog: CHANGELOG.md
semver_mapping_strategy: task_touch
release_state_backend: sqlite
release_state_db: .adk/release-state.db
release_coherence:
  enabled: true
""".strip(),
        encoding="utf-8",
    )
    _seed_mapping(db, "0.2.16.2+2", "0.0.5+2", 5)
    subprocess.run(["git", "init"], cwd=tmp_path, check=True, capture_output=True)
    subprocess.run(
        ["git", "config", "user.email", "t@example.com"],
        cwd=tmp_path,
        check=True,
        capture_output=True,
    )
    subprocess.run(
        ["git", "config", "user.name", "T"],
        cwd=tmp_path,
        check=True,
        capture_output=True,
    )
    monkeypatch.chdir(tmp_path)
    ok, lines = vrc.validate_release_coherence(
        project_root=tmp_path, strict=True, check_staged=False
    )
    assert ok, lines


def test_readme_semver_mismatch_fails(coherence_project):
    readme = coherence_project / "README.md"
    readme.write_text(
        "**Version (SemVer):** `v0.4.11` | **Internal:** `v0.2.1.30+2`\n",
        encoding="utf-8",
    )
    ok, lines = vrc.validate_release_coherence(
        project_root=coherence_project, strict=True, check_staged=False
    )
    assert not ok
    assert any("README SemVer" in line for line in lines)

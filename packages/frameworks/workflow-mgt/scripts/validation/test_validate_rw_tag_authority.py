"""Tests for validate_rw_tag_authority (FR-122 Step 11)."""

from __future__ import annotations

import subprocess
import sys
from pathlib import Path

import pytest

_val_dir = Path(__file__).resolve().parent
for p in (_val_dir, _val_dir.parent, _val_dir.parent / "version"):
    if str(p) not in sys.path:
        sys.path.insert(0, str(p))

import validate_rw_tag_authority as vrta  # noqa: E402


@pytest.fixture
def tag_project(tmp_path, monkeypatch):
    (tmp_path / "rw-config.yaml").write_text(
        "semver_mapping_strategy: registry\nrw_tag_authority:\n  enabled: true\n",
        encoding="utf-8",
    )
    (tmp_path / "README.md").write_text("# test\n", encoding="utf-8")
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
    (tmp_path / "f.txt").write_text("x\n", encoding="utf-8")
    subprocess.run(["git", "add", "f.txt"], cwd=tmp_path, check=True, capture_output=True)
    subprocess.run(
        ["git", "commit", "-m", "init"],
        cwd=tmp_path,
        check=True,
        capture_output=True,
    )
    monkeypatch.chdir(tmp_path)
    return tmp_path


def test_pre_mode_missing_tags_ok(tag_project):
    ok, lines = vrta.validate_rw_tag_authority(
        project_root=tag_project,
        internal_version="0.9.9.9+1",
        mode="pre",
    )
    assert ok
    assert any("pre OK" in line for line in lines)


def test_forbidden_raw_lightweight_tag():
    hits = vrta._scan_forbidden_raw_tag_commands(["git tag v0.4.1098"])
    assert hits == ["git tag v0.4.1098"]
    ok_hits = vrta._scan_forbidden_raw_tag_commands(
        ['git tag -a v0.4.1098 -m "Release"']
    )
    assert ok_hits == []


def test_post_requires_annotated_tag(tag_project):
    subprocess.run(
        ["git", "tag", "v0.9.9.9+1"],
        cwd=tag_project,
        check=True,
        capture_output=True,
    )
    ok, lines = vrta.validate_rw_tag_authority(
        project_root=tag_project,
        internal_version="0.9.9.9+1",
        mode="post",
    )
    assert not ok
    assert any("annotated" in line for line in lines)

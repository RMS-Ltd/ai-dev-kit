"""UXR-018 / E05:S01:T76 — changelog directory consolidation regression guards."""

from pathlib import Path

import pytest
import yaml

REPO_ROOT = Path(__file__).resolve().parents[1]
FORBIDDEN_DIRS = (
    REPO_ROOT / "docs/changelog",
    REPO_ROOT / "docs/knowledge/changelog-and-release-notes",
)
ARCHIVE = REPO_ROOT / "docs/changelog-and-release-notes/changelog-archive"
ACTIVE_LINK_FILES = (
    ARCHIVE / "CHANGELOG_ARCHIVE.md",
    ARCHIVE / "GITHUB_RELEASE_v0.4.14.4+1.md",
)
RW_CONFIG = REPO_ROOT / "rw-config.yaml"
SIDEBARS = REPO_ROOT / "portal/sidebars.js"
EXPECTED_CHANGELOG_DIR = "docs/changelog-and-release-notes/changelog-archive"


def test_forbidden_legacy_dirs_absent():
    for path in FORBIDDEN_DIRS:
        assert not path.exists(), f"forbidden path still exists: {path}"


def test_active_index_files_have_no_docs_changelog_paths():
    needle = "docs/changelog/"
    for path in ACTIVE_LINK_FILES:
        assert path.is_file(), f"missing {path}"
        content = path.read_text(encoding="utf-8")
        assert needle not in content, f"{path} still references {needle}"


def test_rw_config_changelog_dir_unchanged():
    config = yaml.safe_load(RW_CONFIG.read_text(encoding="utf-8"))
    assert config.get("changelog_dir") == EXPECTED_CHANGELOG_DIR


def test_portal_sidebars_has_no_legacy_changelog_category():
    text = SIDEBARS.read_text(encoding="utf-8")
    assert "dirName: 'changelog'" not in text
    assert "Changelog (legacy root)" not in text


def test_canonical_epic_renumbering_archive_present():
    assert (ARCHIVE / "CHANGELOG_v0.4.14.4+1.md").is_file()

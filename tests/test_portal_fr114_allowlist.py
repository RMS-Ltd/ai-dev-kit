"""
FR-114 / E05:S09:T15 — adopter-public Docusaurus allowlist contract.

Executable spec from IPP-E05S09T15.
"""

from __future__ import annotations

import re
from pathlib import Path

import pytest
import yaml

from tests.portal_allowlist import (
    ALLOWLIST_SIDEBAR_DIRS,
    BANNED_REL_PREFIXES,
    CI_ALLOWLIST_PATHS,
    CONFIG_EXCLUDE_GLOBS,
    PORTAL_DIR,
    REPO_ROOT,
    allowlisted_markdown_files,
)

CONFIG_PATH = PORTAL_DIR / "docusaurus.config.js"
SIDEBARS_PATH = PORTAL_DIR / "sidebars.js"
README_PATH = PORTAL_DIR / "README.md"
INDEX_PATH = PORTAL_DIR / "src" / "pages" / "index.js"
FEATURES_PATH = PORTAL_DIR / "src" / "components" / "HomepageFeatures" / "index.js"
WORKFLOW_PATH = REPO_ROOT / ".github/workflows/docusaurus-build.yml"
RELEASE_NOTES_ALT = REPO_ROOT / "docs" / "release-notes" / "README.md"

MARKDOWN_LINK_RE = re.compile(r"\[[^\]]*\]\(([^)]+)\)")


@pytest.fixture
def config_text() -> str:
    return CONFIG_PATH.read_text(encoding="utf-8")


@pytest.fixture
def sidebars_text() -> str:
    return SIDEBARS_PATH.read_text(encoding="utf-8")


@pytest.fixture
def readme_text() -> str:
    return README_PATH.read_text(encoding="utf-8")


def test_fr114_t1_config_excludes_maintainer_trees(config_text: str):
    """T1 — exclude globs for FR-114 maintainer corpora (ADR-024)."""
    for token in CONFIG_EXCLUDE_GLOBS:
        assert token in config_text, f"missing exclude glob: {token}"


def test_fr114_t2_sidebar_allowlist_only(sidebars_text: str):
    """T2 — sidebar categories limited to adopter-public corpus."""
    dir_names = set(re.findall(r"dirName:\s*['\"]([^'\"]+)['\"]", sidebars_text))
    assert dir_names <= ALLOWLIST_SIDEBAR_DIRS, f"unexpected sidebar dirs: {dir_names - ALLOWLIST_SIDEBAR_DIRS}"
    assert "developer-tools/ide-whitelist-guide" in sidebars_text


def test_fr114_t3_readme_documents_allowlist(readme_text: str):
    """T3 — portal README FR-114 section + both release-note locations."""
    lower = readme_text.lower()
    assert "fr-114" in lower
    assert "allowlist" in lower or "included (allowlist)" in lower
    assert "release-notes-policy" in lower or "rc ≥ 1" in lower or "rc >=" in lower
    assert "docs/release-notes" in lower or "release-notes/" in lower


def test_fr114_t4_ci_narrowed_paths():
    """T4 — workflow paths use explicit allowlist (not bare docs/**)."""
    doc = yaml.safe_load(WORKFLOW_PATH.read_text(encoding="utf-8"))
    on = doc["on"]
    for key in ("pull_request", "push"):
        paths = on[key]["paths"]
        for expected in CI_ALLOWLIST_PATHS:
            if expected == "portal/**":
                continue
            assert expected in paths, f"{key} missing {expected}"
        assert "docs/**" not in paths


def test_fr114_t5_allowlisted_corpus_no_banned_relative_links():
    """T5 — allowlisted markdown uses GitHub blob for excluded-tree targets."""
    violations: list[str] = []
    for md in allowlisted_markdown_files():
        text = md.read_text(encoding="utf-8")
        for m in MARKDOWN_LINK_RE.finditer(text):
            target = m.group(1).strip()
            if target.startswith(("http://", "https://", "mailto:", "#", "/")):
                continue
            for prefix in BANNED_REL_PREFIXES:
                if target.startswith(prefix):
                    violations.append(f"{md.relative_to(REPO_ROOT)}: {target}")
                    break
    assert not violations, "banned relative links:\n" + "\n".join(violations[:20])


def test_fr114_t6_release_notes_alternative_documented():
    """T6 — docs/release-notes policy stub exists (alternative to portal/blog)."""
    assert RELEASE_NOTES_ALT.is_file()
    text = RELEASE_NOTES_ALT.read_text(encoding="utf-8")
    assert "portal/blog" in text
    assert "fr-114" in text.lower() or "FR-114" in text


def test_fr114_t7_homepage_no_excluded_portal_routes():
    """T7 — homepage JSX has no in-portal links to excluded trees."""
    index = INDEX_PATH.read_text(encoding="utf-8")
    features = FEATURES_PATH.read_text(encoding="utf-8")
    for blob in (index, features):
        assert "/docs/architecture/" not in blob
        assert "/docs/project-management/" not in blob
        assert "/docs/knowledge/" not in blob

"""
FR-066 / E5:S09:T02: canonical docs path, publish scope, changelog excludes.

No green `npm run build` assertion here (FR-067).
"""

from __future__ import annotations

from pathlib import Path

import pytest

REPO_ROOT = Path(__file__).resolve().parent.parent
PORTAL_DIR = REPO_ROOT / "portal"
CONFIG_PATH = PORTAL_DIR / "docusaurus.config.js"
README_PATH = PORTAL_DIR / "README.md"


@pytest.fixture
def config_text() -> str:
    return CONFIG_PATH.read_text(encoding="utf-8")


@pytest.fixture
def readme_text() -> str:
    return README_PATH.read_text(encoding="utf-8")


def test_fr066_s1_docs_path_points_at_repo_docs(config_text: str):
    """S1 — docs plugin path is repo docs/."""
    assert "path:" in config_text
    assert "'../docs'" in config_text or '"../docs"' in config_text


def test_fr066_s4_edit_url_docs_tree(config_text: str):
    """S4 — editUrl for docs uses main/docs/; blog still portal/blog."""
    base = "https://github.com/earlution/ai-dev-kit/tree/main/docs/"
    assert base in config_text, "docs editUrl must point at repo docs/ (FR-066:R04)"
    assert "editUrl" in config_text
    assert "tree/main/portal/blog/" in config_text


def test_fr066_s3_exclude_changelog_archive(config_text: str):
    """S3 — mass changelog archive excluded from plugin."""
    assert "exclude:" in config_text
    assert "changelog-archive" in config_text


def test_fr066_s2_s7_readme_publish_scope(readme_text: str):
    """S2, S7 — publish scope + link to ultimate canonical KB structure."""
    assert "Publish scope" in readme_text
    assert "ultimate-canonical-kb-structure.md" in readme_text
    assert "Included" in readme_text or "included" in readme_text.lower()
    assert "Excluded" in readme_text or "excluded" in readme_text.lower()
    assert "changelog" in readme_text.lower()


def test_fr066_s5_portal_docs_scaffold_gone():
    """S5 — tutorial scaffold markdown removed from portal/docs (single source docs/)."""
    portal_docs = PORTAL_DIR / "docs"
    if not portal_docs.is_dir():
        return
    md = list(portal_docs.rglob("*.md"))
    mdx = list(portal_docs.rglob("*.mdx"))
    assert md == [], f"Expected no .md under portal/docs, found: {md}"
    assert mdx == [], f"Expected no .mdx under portal/docs, found: {mdx}"

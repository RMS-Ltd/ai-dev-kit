"""
FR-071 / E5:S09:T07: Docusaurus site search (local/offline) contract.

Executable spec S1–S6; production query E2E is manual.

See: docs/project-management/kanban/fr-br/FR-071-docusaurus-site-search.md
"""

from __future__ import annotations

import json
import re
from pathlib import Path

import pytest

REPO_ROOT = Path(__file__).resolve().parent.parent
PORTAL_DIR = REPO_ROOT / "portal"
PACKAGE_JSON = PORTAL_DIR / "package.json"
CONFIG_PATH = PORTAL_DIR / "docusaurus.config.js"
PORTAL_README = PORTAL_DIR / "README.md"

LOCAL_SEARCH_PKG = "@easyops-cn/docusaurus-search-local"


@pytest.fixture
def package_json() -> dict:
    return json.loads(PACKAGE_JSON.read_text(encoding="utf-8"))


@pytest.fixture
def config_text() -> str:
    return CONFIG_PATH.read_text(encoding="utf-8")


@pytest.fixture
def readme_text() -> str:
    return PORTAL_README.read_text(encoding="utf-8")


def test_fr071_s1_search_plugin_or_theme_config(package_json: dict, config_text: str):
    """S1 — local search theme registered."""
    deps = {**package_json.get("dependencies", {}), **package_json.get("devDependencies", {})}
    assert LOCAL_SEARCH_PKG in deps, f"Missing dependency {LOCAL_SEARCH_PKG}"
    assert LOCAL_SEARCH_PKG in config_text or "docusaurus-search-local" in config_text
    assert "themes:" in config_text
    assert "require.resolve" in config_text or "@easyops-cn/docusaurus-search-local" in config_text


def test_fr071_s2_readme_smoke_queries(readme_text: str):
    """S2 — README lists ≥3 smoke queries with expected hits."""
    idx = readme_text.find("### Smoke-test queries")
    assert idx != -1, "Expected ### Smoke-test queries section in portal/README.md"
    section = readme_text[idx:]
    bullets = [line for line in section.splitlines() if line.strip().startswith("- ")][:10]
    assert len(bullets) >= 3, "Expected at least 3 smoke query bullets"
    for b in bullets[:3]:
        assert "→" in b or "->" in b, f"Each smoke line should map query to expected hit: {b!r}"


def test_fr071_s4_privacy_section(readme_text: str):
    """S4 — Privacy subsection for local/offline search."""
    assert re.search(r"Site search \(FR-071\)", readme_text), "Expected FR-071 section"
    assert re.search(r"### Privacy", readme_text, re.IGNORECASE) or re.search(
        r"\*\*Privacy\*\*", readme_text
    ), "Expected Privacy subsection"
    lowered = readme_text.lower()
    assert "third-party" in lowered or "offline" in lowered or "local index" in lowered


def test_fr071_s6_build_scripts_unchanged(package_json: dict):
    """S6 — FR-068 build retains --no-minify."""
    scripts = package_json.get("scripts", {})
    assert scripts.get("build") == "docusaurus build --no-minify"


def test_fr071_no_sensitive_algolia_admin_keys(config_text: str):
    """Heuristic: no private Algolia admin-style secrets in committed config.

    DocSearch client search-only apiKey in themeConfig.algolia is public by design;
    this project uses local search only — should not contain Admin API patterns.
    """
    assert "ALGOLIA_ADMIN" not in config_text
    assert re.search(r"adminApiKey|admin_api_key", config_text, re.IGNORECASE) is None

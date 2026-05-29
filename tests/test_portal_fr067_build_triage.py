"""
FR-067 / E5:S09:T03: production build triage — link policy, exclude/README parity, triage note.

S1 (green `npm run build`): `tests/test_portal_fr065_identity.py::test_fr065_s9_portal_production_build`
with PORTAL_BUILD_STRICT=1.
"""

from __future__ import annotations

import re
from pathlib import Path

import pytest

REPO_ROOT = Path(__file__).resolve().parent.parent
PORTAL_DIR = REPO_ROOT / "portal"
CONFIG_PATH = PORTAL_DIR / "docusaurus.config.js"
README_PATH = PORTAL_DIR / "README.md"
TRIAGE_PATH = REPO_ROOT / "docs" / "maintenance" / "docusaurus-corpus-triage-fr-067.md"


@pytest.fixture
def config_text() -> str:
    return CONFIG_PATH.read_text(encoding="utf-8")


@pytest.fixture
def readme_text() -> str:
    return README_PATH.read_text(encoding="utf-8")


@pytest.fixture
def triage_text() -> str:
    return TRIAGE_PATH.read_text(encoding="utf-8")


def _docs_exclude_globs(config_text: str) -> list[str]:
    m = re.search(r"exclude:\s*\[([\s\S]*?)\]\s*,", config_text)
    assert m, "docs.exclude array not found in docusaurus.config.js"
    inner = m.group(1)
    return re.findall(r"['\"]([^'\"]+)['\"]", inner)


def test_fr067_s2_link_policy_explicit(config_text: str, readme_text: str):
    """S2 — broken link policy strict (`throw`) in config + README (E5:S09:T08 / FR-067 FU-1)."""
    assert "onBrokenLinks:" in config_text
    assert re.search(r"onBrokenLinks:\s*['\"]throw['\"]", config_text)
    assert "onBrokenMarkdownLinks:" in config_text
    assert re.search(r"onBrokenMarkdownLinks:\s*['\"]throw['\"]", config_text)
    lowered = readme_text.lower()
    assert "throw" in lowered or "strict" in lowered
    assert "broken link" in lowered
    assert "FR-067" in readme_text


def test_fr067_s3_exclude_globs_match_readme(config_text: str, readme_text: str):
    """S3 — every docs plugin exclude glob appears under Excluded in portal README."""
    globs = _docs_exclude_globs(config_text)
    assert len(globs) >= 1
    for g in globs:
        key = g.split("/")[0] if "/" in g else g
        assert key in readme_text or g in readme_text, (
            f"exclude glob not documented in README: {g}"
        )


def test_fr067_s4_triage_note(readme_text: str, triage_text: str):
    """S4 — maintenance triage note with required sections."""
    assert TRIAGE_PATH.is_file()
    assert "docusaurus-corpus-triage-fr-067" in readme_text
    lowered = triage_text.lower()
    assert "failure class" in lowered or "failure classes" in lowered
    assert "exclude" in lowered
    assert "fr-067" in lowered


def test_fr067_s5_anchor_policy_strict(config_text: str, readme_text: str):
    """S5 — broken anchor policy strict (`throw`) in config + README (E5:S09:T10 / FR-067 FU-3)."""
    assert "onBrokenAnchors:" in config_text
    assert re.search(r"onBrokenAnchors:\s*['\"]throw['\"]", config_text)
    lowered = readme_text.lower()
    assert "anchor" in lowered
    assert "throw" in lowered or "strict" in lowered
    assert "e5:s09:t10" in lowered or "t10" in lowered

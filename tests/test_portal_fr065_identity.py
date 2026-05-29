"""
FR-065 / E5:S09:T01: portal identity regressions (portal/docusaurus.config.js + portal/README.md).

Executable spec S1–S8. S9: green build with PORTAL_BUILD_STRICT=1 (FR-067).
"""

from __future__ import annotations

import os
import subprocess
from pathlib import Path

import pytest

REPO_ROOT = Path(__file__).resolve().parent.parent
PORTAL_DIR = REPO_ROOT / "portal"
CONFIG_PATH = PORTAL_DIR / "docusaurus.config.js"
README_PATH = PORTAL_DIR / "README.md"

CONFIG_FORBIDDEN = [
    "My Site",
    "Dinosaurs are cool",
    "your-docusaurus-site.example.com",
    "organizationName: 'facebook'",
    'organizationName: "facebook"',
    "projectName: 'docusaurus'",
    'projectName: "docusaurus"',
    "create-docusaurus/templates/shared",
    "https://stackoverflow.com/questions/tagged/docusaurus",
    "https://discordapp.com/invite/docusaurus",
    "https://x.com/docusaurus",
    "https://github.com/facebook/docusaurus",
    "My Project, Inc.",
]


@pytest.fixture
def config_text() -> str:
    return CONFIG_PATH.read_text(encoding="utf-8")


@pytest.fixture
def readme_text() -> str:
    return README_PATH.read_text(encoding="utf-8")


def test_fr065_config_exists():
    assert CONFIG_PATH.is_file(), f"Missing {CONFIG_PATH}"


def test_fr065_s1_no_template_placeholders(config_text: str):
    """S1 / FR-065:R01 — no create-docusaurus template strings."""
    lowered = config_text  # keep case-sensitive checks per plan
    for forbidden in CONFIG_FORBIDDEN:
        assert forbidden not in lowered, f"S1: found forbidden fragment {forbidden!r}"


def test_fr065_s2_org_project_names(config_text: str):
    """S2 — GitHub deployment fields."""
    assert "organizationName: 'earlution'" in config_text or 'organizationName: "earlution"' in config_text
    assert "projectName: 'ai-dev-kit'" in config_text or 'projectName: "ai-dev-kit"' in config_text


def test_fr065_s3_url_not_example(config_text: str):
    """S3 — production URL strategy (GitHub Pages)."""
    assert "your-docusaurus-site.example.com" not in config_text
    assert "https://earlution.github.io" in config_text
    assert "'/ai-dev-kit/'" in config_text or '"/ai-dev-kit/"' in config_text


def test_fr065_s4_edit_url_points_at_repo_docs_and_blog(config_text: str):
    """S4 / FR-065:R02 + FR-066 — docs editUrl at repo docs/; blog at portal/blog/."""
    base_docs = "https://github.com/earlution/ai-dev-kit/tree/main/docs/"
    base_blog = "https://github.com/earlution/ai-dev-kit/tree/main/portal/blog/"
    assert base_docs in config_text, "docs editUrl must target repo docs/ (FR-066)"
    assert base_blog in config_text, "blog editUrl missing or wrong"


def test_fr065_s5_s6_navbar_ai_dev_kit(config_text: str):
    """S5–S6 — navbar title and logo alt."""
    assert "title: 'AI Dev Kit'" in config_text or 'title: "AI Dev Kit"' in config_text
    assert "alt: 'AI Dev Kit" in config_text or 'alt: "AI Dev Kit' in config_text
    assert "label: 'Docs'" in config_text or 'label: "Docs"' in config_text


def test_fr065_s7_footer_copyright_not_template(config_text: str):
    """S7 — footer copyright is project-scoped."""
    assert "My Project, Inc." not in config_text
    assert "AI Dev Kit" in config_text


def test_fr065_s8_readme(readme_text: str):
    """AC3 — portal README names project and links root README."""
    assert "AI Dev Kit" in readme_text
    assert "](../README.md)" in readme_text


@pytest.mark.portal_build
def test_fr065_s9_portal_production_build():
    """S9 — green `npm run build` (FR-067); FR-066 wires full docs/ and build may fail."""
    if os.environ.get("PORTAL_BUILD_STRICT") != "1":
        pytest.skip(
            "Green portal build: set PORTAL_BUILD_STRICT=1 (FR-067 corpus triage)."
        )

    assert PORTAL_DIR.is_dir()
    env = {**os.environ, "CI": "true"}
    proc = subprocess.run(
        ["npm", "run", "build"],
        cwd=str(PORTAL_DIR),
        env=env,
        capture_output=True,
        text=True,
        timeout=600,
    )
    assert proc.returncode == 0, f"npm run build failed:\n{proc.stdout}\n{proc.stderr}"

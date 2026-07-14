"""
BR-090 / E5:S09:T13: Docusaurus @docusaurus/faster + package alignment contract (current pin 3.10.2).

Executable spec T1–T6 from IPP-E05S09T13.

See: docs/kanban/fbu/BR-090-docusaurus-faster-missing-dependabot-310-lockfile-drift.md
"""

from __future__ import annotations

import json
from pathlib import Path

import pytest

REPO_ROOT = Path(__file__).resolve().parent.parent
PORTAL_DIR = REPO_ROOT / "portal"
PACKAGE_JSON = PORTAL_DIR / "package.json"
PACKAGE_LOCK = PORTAL_DIR / "package-lock.json"
CONFIG_PATH = PORTAL_DIR / "docusaurus.config.js"
README_PATH = PORTAL_DIR / "README.md"

DOCUSAURUS_VERSION = "3.10.2"


@pytest.fixture
def package_manifest() -> dict:
    assert PACKAGE_JSON.is_file(), f"Missing {PACKAGE_JSON}"
    return json.loads(PACKAGE_JSON.read_text(encoding="utf-8"))


@pytest.fixture
def lock_manifest() -> dict:
    assert PACKAGE_LOCK.is_file(), f"Missing {PACKAGE_LOCK}"
    return json.loads(PACKAGE_LOCK.read_text(encoding="utf-8"))


def _docusaurus_deps(manifest: dict) -> dict[str, str]:
    out: dict[str, str] = {}
    for section in ("dependencies", "devDependencies"):
        block = manifest.get(section) or {}
        if not isinstance(block, dict):
            continue
        for name, version in block.items():
            if isinstance(name, str) and name.startswith("@docusaurus/"):
                out[name] = str(version)
    return out


def test_br090_t1_faster_dependency(package_manifest: dict):
    """T1 — @docusaurus/faster present at current pin in dependencies."""
    deps = package_manifest.get("dependencies") or {}
    assert deps.get("@docusaurus/faster") == DOCUSAURUS_VERSION


def test_br090_t2_version_homogeneity(package_manifest: dict):
    """T2 — all @docusaurus/* pins share the current DOCUSAURUS_VERSION."""
    docusaurus = _docusaurus_deps(package_manifest)
    assert docusaurus, "Expected @docusaurus/* entries in package.json"
    for name, version in docusaurus.items():
        assert version == DOCUSAURUS_VERSION, f"{name} is {version}, expected {DOCUSAURUS_VERSION}"


def test_br090_t3_lockfile_alignment(package_manifest: dict, lock_manifest: dict):
    """T3 — lockfile root dependencies match package.json pins."""
    pkg_deps = package_manifest.get("dependencies") or {}
    lock_deps = (lock_manifest.get("packages") or {}).get("") or {}
    lock_root = lock_deps.get("dependencies") or {}
    for name in ("@docusaurus/core", "@docusaurus/faster", "@docusaurus/preset-classic"):
        assert pkg_deps.get(name) == DOCUSAURUS_VERSION
        assert lock_root.get(name) == DOCUSAURUS_VERSION, f"lockfile root missing {name}@{DOCUSAURUS_VERSION}"


def test_br090_t4_v4_flag_preserved():
    """T4 — future.v4: true retained (BR-090 preferred fix)."""
    text = CONFIG_PATH.read_text(encoding="utf-8")
    assert "v4:true" in text.replace(" ", "")


def test_br090_t6_readme_faster_note():
    """T6 — README documents @docusaurus/faster requirement with future.v4."""
    text = README_PATH.read_text(encoding="utf-8").lower()
    assert "@docusaurus/faster" in text
    assert "future.v4" in text or "future v4" in text or "v4 future" in text


CHEATSHEET_PATH = REPO_ROOT / "docs/guides/workflow-initiation-cheatsheet.md"
GITHUB_BLOB_PREFIX = "github.com/RMS-Ltd/ai-dev-kit/blob/main/"
OUT_OF_PLUGIN_BANNED_PREFIXES = (
    "](../../.claude/",
    "](../../.cursorrules",
    "](../../CLAUDE.md",
    "](../../rw-config",
    "](../../.cursor/",
    "](../../../.claude/",
    "](../../../.cursorrules",
)


def test_br090_t8_cheatsheet_out_of_plugin_ban():
    """T8 — cheatsheet has no out-of-docs relative link targets (BR-068 Wave 2)."""
    text = CHEATSHEET_PATH.read_text(encoding="utf-8")
    for prefix in OUT_OF_PLUGIN_BANNED_PREFIXES:
        assert prefix not in text, f"Found banned out-of-plugin pattern: {prefix}"


def test_br090_t9_cheatsheet_strategy_a_blob_links():
    """T9 — cheatsheet agent/command deep links use GitHub blob URLs."""
    text = CHEATSHEET_PATH.read_text(encoding="utf-8")
    assert GITHUB_BLOB_PREFIX in text
    assert f"{GITHUB_BLOB_PREFIX}.cursorrules" in text
    assert f"{GITHUB_BLOB_PREFIX}.claude/commands/rw.md" in text


def test_br090_t10_portal_production_build_gate():
    """T10 — PORTAL_BUILD_STRICT=1 production build passes (delegates to FR-065 S9)."""
    from tests.test_portal_fr065_identity import test_fr065_s9_portal_production_build

    test_fr065_s9_portal_production_build()


def test_br090_t11_wave1_regression_t1_t6(package_manifest: dict, lock_manifest: dict):
    """T11 — Wave 1 T1–T6 contracts still hold."""
    test_br090_t1_faster_dependency(package_manifest)
    test_br090_t2_version_homogeneity(package_manifest)
    test_br090_t3_lockfile_alignment(package_manifest, lock_manifest)
    test_br090_t4_v4_flag_preserved()
    test_br090_t6_readme_faster_note()

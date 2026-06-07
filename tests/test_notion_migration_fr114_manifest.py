"""FR-114 Notion migration manifest contract tests (E05:S08:T03)."""

from __future__ import annotations

import json
import re
from pathlib import Path

import pytest

REPO_ROOT = Path(__file__).resolve().parent.parent
MANIFEST = REPO_ROOT / "docs" / "knowledge" / "fr114-notion-migration-manifest.json"
RW_CONFIG = REPO_ROOT / "rw-config.yaml"
DOCS = REPO_ROOT / "docs"

REQUIRED_ENTRY_KEYS = {"source_path", "notion_url", "stub_applied", "migrated_at"}
ADOPTER_PREFIXES = ("guides/", "documentation/", "project-management/", "governance/")
NOTION_URL_RE = re.compile(r"^https://www\.notion\.so/[0-9a-f]{32}$")


@pytest.fixture
def manifest() -> dict:
    return json.loads(MANIFEST.read_text(encoding="utf-8"))


def test_manifest_schema_and_completeness(manifest: dict) -> None:
    assert manifest.get("schema") == "fr114-notion-migration-v1"
    assert manifest.get("entry_count") == len(manifest.get("entries", []))
    assert manifest["entry_count"] >= 200
    for entry in manifest["entries"]:
        for key in ("source_path", "notion_url", "stub_applied", "migrated_at"):
            assert entry.get(key) is not None, f"missing {key} for {entry.get('source_path')}"


def test_manifest_excludes_adopter_and_ipp_icw(manifest: dict) -> None:
    for entry in manifest["entries"]:
        rel = entry["source_path"]
        base = Path(rel).name
        for prefix in ADOPTER_PREFIXES:
            assert not rel.startswith(prefix), rel
        assert not base.startswith("IPP-"), rel
        assert not base.startswith("ICW-"), rel


def test_stubbed_files_have_notion_sot_frontmatter(manifest: dict) -> None:
    for entry in manifest["entries"]:
        path = DOCS / entry["source_path"]
        assert path.exists(), entry["source_path"]
        text = path.read_text(encoding="utf-8")
        assert "notion_sot: true" in text, entry["source_path"]
        assert entry["notion_url"] in text, entry["source_path"]
        assert NOTION_URL_RE.match(entry["notion_url"]), entry["notion_url"]


def test_rw_config_notion_urls_updated() -> None:
    text = RW_CONFIG.read_text(encoding="utf-8")
    assert "378b6f8962c181dda420fb0236d9e060" in text
    assert "378b6f8962c18189aacbe8629677403d" in text
    assert "30db6f8962c181ceb811f3a6c78ecd4b" not in text


def test_ipp_icw_files_not_stubbed() -> None:
    ic_dir = DOCS / "implementation-cycles"
    for path in ic_dir.glob("*.md"):
        name = path.name
        if not (name.startswith("IPP-") or name.startswith("ICW-")):
            continue
        text = path.read_text(encoding="utf-8")
        assert not text.lstrip().startswith("---\n") or "notion_sot: true" not in text.split("---", 2)[1], name


def test_binding_adrs_not_stubbed(manifest: dict) -> None:
    for adr in manifest.get("binding_adrs_retained", []):
        path = DOCS / adr
        if not path.exists():
            continue
        text = path.read_text(encoding="utf-8")
        assert "notion_sot: true" not in text, adr

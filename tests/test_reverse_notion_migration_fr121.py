"""FR-121 reverse Notion migration contract tests (E05:S08:T05)."""

from __future__ import annotations

import json
import subprocess
from pathlib import Path

import pytest

REPO_ROOT = Path(__file__).resolve().parent.parent
DOCS = REPO_ROOT / "docs"
FR114_MANIFEST = DOCS / "knowledge" / "fr114-notion-migration-manifest.json"
FR121_MANIFEST = DOCS / "knowledge" / "fr121-reverse-migration-manifest.json"

REQUIRED_REVERSE_KEYS = {
    "source_path",
    "restore_source",
    "source_commit",
    "export_timestamp",
    "restore_status",
    "link_repair_notes",
    "exclusion_reason",
}
STUB_MIN_BODY = 200


@pytest.fixture
def fr114() -> dict:
    return json.loads(FR114_MANIFEST.read_text(encoding="utf-8"))


@pytest.fixture
def fr121() -> dict:
    return json.loads(FR121_MANIFEST.read_text(encoding="utf-8"))


def test_reverse_manifest_schema(fr121: dict) -> None:
    assert fr121.get("schema") == "fr121-reverse-migration-v1"
    assert fr121.get("entry_count") == len(fr121.get("entries", []))
    assert fr121["entry_count"] == 218
    for entry in fr121["entries"]:
        missing = REQUIRED_REVERSE_KEYS - set(entry)
        assert not missing, f"missing keys {missing} for {entry.get('source_path')}"


def test_fr114_reverse_migration_complete(fr114: dict) -> None:
    assert fr114.get("reverse_migration_complete") is True
    assert all(not e.get("stub_applied") for e in fr114["entries"])


def test_corpus_restored_or_excluded(fr121: dict) -> None:
    for entry in fr121["entries"]:
        assert entry["restore_status"] == "restored", entry["source_path"]
        assert entry["exclusion_reason"] is None, entry["source_path"]


def test_no_notion_sot_in_manifest_paths(fr114: dict) -> None:
    for entry in fr114["entries"]:
        path = DOCS / entry["source_path"]
        text = path.read_text(encoding="utf-8")
        assert "notion_sot: true" not in text, entry["source_path"]


def test_restored_content_substance(fr114: dict) -> None:
    for entry in fr114["entries"]:
        path = DOCS / entry["source_path"]
        text = path.read_text(encoding="utf-8")
        body = text.split("---", 2)[-1] if text.startswith("---") else text
        assert len(body.strip()) > STUB_MIN_BODY, entry["source_path"]
        assert "Full content lives in Notion." not in text, entry["source_path"]


def test_binding_adrs_not_stubbed(fr114: dict) -> None:
    for adr in fr114.get("binding_adrs_retained", []):
        path = DOCS / adr
        if not path.exists():
            continue
        text = path.read_text(encoding="utf-8")
        assert "notion_sot: true" not in text, adr


def test_ipp_icw_not_stubbed() -> None:
    ic_dir = DOCS / "implementation-cycles"
    for path in ic_dir.glob("*.md"):
        name = path.name
        if not (name.startswith("IPP-") or name.startswith("ICW-")):
            continue
        text = path.read_text(encoding="utf-8")
        if text.lstrip().startswith("---"):
            front = text.split("---", 2)[1]
            assert "notion_sot: true" not in front, name


def test_kb_index_regenerates() -> None:
    result = subprocess.run(
        ["python3", str(REPO_ROOT / "scripts" / "kb_index.py")],
        cwd=REPO_ROOT,
        capture_output=True,
        text=True,
    )
    assert result.returncode == 0, result.stderr or result.stdout

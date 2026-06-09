"""FR-114 agent bootstrap Notion routing tests (E05:S08:T04)."""

from __future__ import annotations

import json
import subprocess
import sys
from pathlib import Path

import pytest

REPO_ROOT = Path(__file__).resolve().parent.parent
AGENTS = REPO_ROOT / "AGENTS.md"
MANIFEST = REPO_ROOT / "docs" / "project-agent-manifest.json"
SCHEMA = REPO_ROOT / "docs" / "project-agent-manifest.schema.json"
RW_CONFIG = REPO_ROOT / "rw-config.yaml"
ADR_024 = (
    REPO_ROOT
    / "docs"
    / "architecture"
    / "standards-and-adrs"
    / "ADR-024-documentation-surfaces-three-surface-model-fr114.md"
)
KB_README = REPO_ROOT / "docs" / "knowledge" / "README.md"
STUB_SCRIPT = REPO_ROOT / "scripts" / "apply_notion_stubs.py"

NOTION_KB_ID = "378b6f8962c18189aacbe8629677403d"


def test_agents_md_maintainer_kb_track_and_notion_first() -> None:
    text = AGENTS.read_text(encoding="utf-8")
    if "P-GIT-MAINTAINER" in text:
        pytest.skip("FR-121 wave 2 superseded Notion-first bootstrap (ADR-026)")
    assert "`maintainer-kb`" in text
    assert "P-NOTION-FIRST" in text
    assert "ADR-024" in text


def test_agents_md_line_count_within_adr012_budget() -> None:
    lines = AGENTS.read_text(encoding="utf-8").splitlines()
    assert len(lines) <= 150, f"AGENTS.md has {len(lines)} lines (max 150 per ADR-012)"


def test_manifest_maintainer_kb_routing() -> None:
    data = json.loads(MANIFEST.read_text(encoding="utf-8"))
    protocol_ids = {p["id"] for p in data["protocol"]}
    if "P-GIT-MAINTAINER" in protocol_ids:
        pytest.skip("FR-121 wave 2 superseded Notion-first bootstrap (ADR-026)")
    routes = {r["intent"]: r for r in data["taskRouting"]}
    assert "maintainer-kb" in routes
    route = routes["maintainer-kb"]
    assert "Notion" in route["keywords"]
    assert "rw-config.yaml" in route["loadFirst"]
    assert any("ADR-024" in p for p in route["loadFirst"])
    assert "docs/knowledge/README.md" in route["loadFirst"]


def test_manifest_documentation_surfaces_match_rw_config() -> None:
    data = json.loads(MANIFEST.read_text(encoding="utf-8"))
    surfaces = data["documentationSurfaces"]
    rw_text = RW_CONFIG.read_text(encoding="utf-8")
    assert surfaces["notionKbUrl"] in rw_text
    assert NOTION_KB_ID in surfaces["notionKbUrl"]
    assert surfaces["configSource"] == "rw-config.yaml"


def test_adr_024_exists_accepted_with_required_sections() -> None:
    text = ADR_024.read_text(encoding="utf-8")
    assert "**Status:** Accepted" in text
    assert "three-surface" in text.lower() or "Three surfaces" in text
    assert "SoT matrix" in text
    assert "stub template" in text.lower() or "Canonical git stub template" in text
    assert "RC ≥ 1" in text or "RC >= 1" in text


def test_adr_024_not_stubbed() -> None:
    text = ADR_024.read_text(encoding="utf-8")
    assert text.lstrip().startswith("---\n")
    frontmatter = text.split("---", 2)[1]
    assert "notion_sot: true" not in frontmatter


def test_knowledge_readme_documents_maintainer_kb_surface() -> None:
    text = KB_README.read_text(encoding="utf-8")
    fr114 = json.loads(
        (REPO_ROOT / "docs" / "knowledge" / "fr114-notion-migration-manifest.json").read_text(
            encoding="utf-8"
        )
    )
    if fr114.get("reverse_migration_complete"):
        assert "FR-121" in text
        assert "Git is the authoritative source" in text
        assert "fr121-reverse-migration-manifest.json" in text
    else:
        assert "ADR-024" in text
    assert "interim until T04" not in text


def test_validate_project_agent_manifest_paths() -> None:
    result = subprocess.run(
        [sys.executable, str(REPO_ROOT / "scripts" / "validate-project-agent-manifest-paths.py")],
        cwd=REPO_ROOT,
        capture_output=True,
        text=True,
    )
    assert result.returncode == 0, result.stderr or result.stdout


def test_manifest_jsonschema_valid() -> None:
    jsonschema = pytest.importorskip("jsonschema")
    manifest = json.loads(MANIFEST.read_text(encoding="utf-8"))
    schema = json.loads(SCHEMA.read_text(encoding="utf-8"))
    jsonschema.validate(manifest, schema)


def test_stub_template_matches_apply_notion_stubs_contract() -> None:
    adr_text = ADR_024.read_text(encoding="utf-8")
    script_text = STUB_SCRIPT.read_text(encoding="utf-8")
    for key in ("lifecycle:", "created_at:", "housekeeping_policy:", "notion_sot: true"):
        assert key in adr_text
        assert key in script_text

    data = json.loads(MANIFEST.read_text(encoding="utf-8"))
    protocol_ids = {p["id"] for p in data["protocol"]}
    if "P-GIT-MAINTAINER" in protocol_ids:
        assert "P-NOTION-FIRST" not in protocol_ids
        canon_ids = {c["id"] for c in data.get("canon", [])}
        assert "C-ADR-026" in canon_ids
    else:
        assert "P-NOTION-FIRST" in protocol_ids

    canon_ids = {c["id"] for c in data.get("canon", [])}
    assert "C-ADR-024" in canon_ids

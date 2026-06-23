"""FR-121 agent bootstrap git-maintainer routing tests (E05:S08:T06)."""

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
ADR_026 = (
    REPO_ROOT
    / "docs"
    / "architecture"
    / "standards-and-adrs"
    / "ADR-026-git-internal-maintainer-kb-fr121.md"
)
ADR_024 = (
    REPO_ROOT
    / "docs"
    / "architecture"
    / "standards-and-adrs"
    / "ADR-024-documentation-surfaces-three-surface-model-fr114.md"
)
FR_114 = (
    REPO_ROOT
    / "docs"
    / "kanban"
    / "fbu"
    / "FR-114-split-documentation-surfaces-docusaurus-public-notion-maintainer-kb.md"
)
KB_README = REPO_ROOT / "docs" / "knowledge" / "README.md"


def test_agents_md_maintainer_kb_track_and_git_maintainer() -> None:
    text = AGENTS.read_text(encoding="utf-8")
    assert "`maintainer-kb`" in text
    assert "P-GIT-MAINTAINER" in text
    assert "P-NOTION-FIRST" not in text
    assert "ADR-026" in text


def test_agents_md_line_count_within_adr012_budget() -> None:
    lines = AGENTS.read_text(encoding="utf-8").splitlines()
    assert len(lines) <= 150, f"AGENTS.md has {len(lines)} lines (max 150 per ADR-012)"


def test_manifest_git_maintainer_protocol_and_routing() -> None:
    data = json.loads(MANIFEST.read_text(encoding="utf-8"))
    protocol_ids = {p["id"] for p in data["protocol"]}
    assert "P-GIT-MAINTAINER" in protocol_ids
    assert "P-NOTION-FIRST" not in protocol_ids

    routes = {r["intent"]: r for r in data["taskRouting"]}
    route = routes["maintainer-kb"]
    assert "docs/knowledge/README.md" in route["loadFirst"]
    assert any("ADR-026" in p for p in route["loadFirst"])
    assert "rw-config.yaml" in route["loadFirst"]
    assert route["loadFirst"][0] == "docs/knowledge/README.md"

    canon_ids = {c["id"] for c in data.get("canon", [])}
    assert "C-ADR-026" in canon_ids


def test_manifest_documentation_surfaces_git_sot() -> None:
    data = json.loads(MANIFEST.read_text(encoding="utf-8"))
    surfaces = data["documentationSurfaces"]
    assert surfaces.get("maintainerKbSot") == "git"
    rw_text = RW_CONFIG.read_text(encoding="utf-8")
    assert "documentation_surfaces:" in rw_text
    assert "maintainer_kb:" in rw_text
    assert "sot: git" in rw_text


def test_adr_026_exists_accepted_with_two_surface_model() -> None:
    text = ADR_026.read_text(encoding="utf-8")
    assert "**Status:** Accepted" in text
    assert "two publish surface" in text.lower() or "Two publish surfaces" in text
    assert "P-GIT-MAINTAINER" in text
    assert "git paths" in text.lower() or "repo paths" in text.lower()


def test_adr_024_supersession_banner() -> None:
    text = ADR_024.read_text(encoding="utf-8")
    assert "Partially superseded" in text
    assert "ADR-026" in text
    assert "FR-121" in text


def test_fr_114_supersession_banner() -> None:
    text = FR_114.read_text(encoding="utf-8")
    assert "Partially superseded" in text
    assert "FR-121" in text
    assert "ADR-026" in text


def test_knowledge_readme_points_to_adr_026() -> None:
    text = KB_README.read_text(encoding="utf-8")
    assert "ADR-026" in text
    assert "P-GIT-MAINTAINER" in text or "Policy SoT" in text


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

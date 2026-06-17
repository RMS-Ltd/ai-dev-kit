"""Tests for guided KMA mode documentation surfaces (FR-136 AC1 / AC3)."""

from __future__ import annotations

import subprocess
import sys
from pathlib import Path

import yaml

REPO_ROOT = Path(__file__).resolve().parents[2]
GUARDRAILS = REPO_ROOT / "packages/frameworks/kanban/manifests/kma-agent-guardrails.yaml"
KMA_CMD = REPO_ROOT / ".claude/commands/kma.md"
KMA_GUIDE = (
    REPO_ROOT
    / "packages/frameworks/kanban/KB/Documentation/Developer_Docs/kanban-migration-agent-execution.md"
)
PROPOSAL = REPO_ROOT / "packages/frameworks/kanban/templates/MIGRATION_PROPOSAL_TEMPLATE.md"
REF_README = REPO_ROOT / "packages/frameworks/kanban/reference/README.md"
TEMPLATES = REPO_ROOT / "packages/frameworks/kanban/reference/templates"


def test_guardrails_kma_mode_enum():
    data = yaml.safe_load(GUARDRAILS.read_text(encoding="utf-8"))
    assert data.get("kma_mode") == "blind"
    assert "guided_inputs" in data
    assert "target_est_tree" in data["guided_inputs"]["required"]
    assert "guided_tsp_required" in {i["id"] for i in data["invariants"]}


def test_kma_command_documents_modes():
    text = KMA_CMD.read_text(encoding="utf-8")
    for mode in ("blind", "guided", "score"):
        assert mode in text
    assert "fail fast" in text.lower() or "Fail fast" in text


def test_execution_guide_mode_matrix():
    text = KMA_GUIDE.read_text(encoding="utf-8")
    assert "KMA modes" in text
    assert "score_kma_structure.py" in text
    assert "kma_collision_detect.py" in text


def test_proposal_template_guided_section():
    text = PROPOSAL.read_text(encoding="utf-8")
    assert "Guided mode" in text
    assert "Lazy fan-out policy" in text
    assert "Deduped unique task count" in text


def test_reference_pack_templates_exist():
    expected = [
        "TARGET-EST-TREE.template.md",
        "TARGET-EST-ALIASES.template.md",
        "BAND-PARITY.template.md",
        "TITLE-RESOLUTION-RULES.template.md",
        "LEGACY-EPIC-REMAP.template.yaml",
        "TARGET-FOLDER-MAP.template.yaml",
        "SCORING-RUBRIC.template.yaml",
    ]
    for name in expected:
        assert (TEMPLATES / name).is_file(), name


def test_reference_readme_links_sbl_exemplar():
    text = REF_README.read_text(encoding="utf-8")
    assert "adk-install-into-sbl/kanban-reference" in text
    assert "attempt-11" in text


def test_scorer_missing_kanban_root_exits_nonzero():
    result = subprocess.run(
        [
            sys.executable,
            str(REPO_ROOT / "packages/frameworks/kanban/scripts/score_kma_structure.py"),
            "--tsp",
            str(REPO_ROOT / "tests/fixtures/kma-guided-tsp-minimal/TARGET-EST-TREE.md"),
            "--kanban-root",
            "/nonexistent/kanban",
        ],
        capture_output=True,
        text=True,
    )
    assert result.returncode != 0

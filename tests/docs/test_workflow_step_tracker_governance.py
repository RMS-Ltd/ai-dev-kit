"""Governance tests for E02:S01:T23 — Workflow Step Tracker contract."""

from __future__ import annotations

import json
from pathlib import Path

import pytest

ROOT = Path(__file__).resolve().parents[2]

CONTRACT = ROOT / (
    "packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/"
    "workflow-step-tracker-contract.md"
)
SCHEMA = ROOT / "docs/architecture/standards-and-adrs/schemas/workflow-agent-run-log-v1.schema.json"
EXAMPLE = ROOT / "docs/architecture/standards-and-adrs/examples/workflow-agent-run-log-v1.example.json"
ADR_008 = ROOT / "docs/architecture/standards-and-adrs/ADR-008-workflow-forensic-logging-and-checkpoints.md"
ADR_011 = ROOT / "docs/architecture/standards-and-adrs/ADR-011-workflow-step-tracker-and-agent-run-log.md"
PARITY = ROOT / "packages/frameworks/workflow-mgt/docs/rw-trigger-dual-source-parity.md"

GOVERNANCE_FILES = [
    ROOT / ".cursorrules",
    ROOT / "packages/frameworks/workflow-mgt/cursorrules-rw-trigger-section.md",
    ROOT / "packages/frameworks/workflow-mgt/cursorrules-ukw-trigger-section.md",
    ROOT / "docs/architecture/standards-and-adrs/workflow-hardening-guide.md",
] + list(
    (ROOT / "packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp").glob(
        "*-workflow-agent-execution.md"
    )
)


def test_tc2_contract_contains_required_states_and_lifecycle():
    text = CONTRACT.read_text(encoding="utf-8")
    for state in ("pending", "in_progress", "completed", "cancelled"):
        assert state in text, f"missing state {state}"
    assert "At workflow start" in text
    assert "exactly one" in text.lower() or "exactly one" in text


def test_tc3_example_run_log_validates_against_schema():
    schema = json.loads(SCHEMA.read_text(encoding="utf-8"))
    example = json.loads(EXAMPLE.read_text(encoding="utf-8"))
    required = set(schema["required"])
    assert required <= set(example.keys())
    assert example["schema_version"] in (1, 1.1)
    assert example["status"] in schema["properties"]["status"]["enum"]
    for step in example["steps"]:
        assert step["status"] in schema["properties"]["steps"]["items"]["properties"]["status"]["enum"]


def test_tc4_adr_boundary_cross_links():
    adr008 = ADR_008.read_text(encoding="utf-8")
    adr011 = ADR_011.read_text(encoding="utf-8")
    assert "ADR-011" in adr008
    assert "ADR-008" in adr011
    assert "forensic" in adr011.lower()
    assert "boundary" in adr011.lower() or "distinct" in adr011.lower()


def test_tc5_windsurf_todo_list_appendix():
    text = CONTRACT.read_text(encoding="utf-8")
    assert "todo_list" in text
    assert "Windsurf" in text


def test_tc6_dual_source_parity_tracker_row():
    text = PARITY.read_text(encoding="utf-8")
    assert "Workflow Step Tracker" in text


@pytest.mark.parametrize("path", GOVERNANCE_FILES, ids=lambda p: p.name)
def test_tc1_governance_references_tracker_not_cursor_only(path: Path):
    text = path.read_text(encoding="utf-8")
    if "**MUST** use `todo_write`" in text or "**MUST** use `todo_write` to create" in text:
        pytest.fail(f"{path}: bare MUST use todo_write without tracker contract migration")
    if "MUST use Cursor TODOs" in text or "MUST USE Cursor TODOs" in text:
        pytest.fail(f"{path}: still mandates Cursor TODOs specifically")
    if "Progress Tracking" in text or "Workflow Step Tracker" in text or "todo_write" in text:
        assert "Workflow Step Tracker" in text, (
            f"{path}: mentions progress tracking/todo_write but not Workflow Step Tracker"
        )

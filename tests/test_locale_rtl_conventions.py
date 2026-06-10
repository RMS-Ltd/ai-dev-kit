"""RTL conventions documentation contract tests (E21:S04:T03 / FR-006 Phase 2)."""

from pathlib import Path

import pytest

REPO_ROOT = Path(__file__).resolve().parent.parent
RTL_DOC = REPO_ROOT / "docs" / "governance" / "standards" / "locale-rtl-conventions.md"
TASK_DOC = (
    REPO_ROOT
    / "docs"
    / "kanban"
    / "epics"
    / "epic-21"
    / "story-04-cultural-adaptation"
    / "T03-implement-rtl-support-right-to-left-for-arabichebrew.md"
)

REQUIRED_SECTIONS = (
    "## Purpose",
    "## RTL locale registry",
    "## Public API",
    "## CLI and installer conventions",
    "## RTL checklist",
    "## Boundaries and handoffs",
)

pytestmark = pytest.mark.fr006


def test_t5_rtl_conventions_doc_exists():
    assert RTL_DOC.is_file()


def test_t5_required_sections_present():
    text = RTL_DOC.read_text(encoding="utf-8")
    for heading in REQUIRED_SECTIONS:
        assert heading in text, f"missing section: {heading}"


def test_t5_lists_ar_and_he():
    text = RTL_DOC.read_text(encoding="utf-8")
    assert "`ar`" in text
    assert "`he`" in text


def test_t5_references_adr_024_and_task():
    text = RTL_DOC.read_text(encoding="utf-8")
    assert "ADR-024" in text
    assert "E21:S04:T03" in text
    assert TASK_DOC.name in text or "T03-implement-rtl" in text

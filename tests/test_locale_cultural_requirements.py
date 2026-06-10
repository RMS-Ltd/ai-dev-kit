"""Cultural requirements documentation contract tests (E21:S04:T01 / FR-006 Phase 2)."""

from pathlib import Path

import pytest

REPO_ROOT = Path(__file__).resolve().parent.parent
CULTURAL_DOC = (
    REPO_ROOT / "docs" / "governance" / "standards" / "locale-cultural-requirements.md"
)
ROLLOUT_MATRIX = REPO_ROOT / "docs" / "governance" / "standards" / "locale-rollout-matrix.md"

LOCALE_CODES = ("es", "fr", "de", "pt", "zh-CN", "zh-TW", "ja", "ru", "ar")

REQUIRED_SECTIONS = (
    "## Research method",
    "## Dimension catalog",
    "## Per-locale matrix",
    "## English baseline",
    "## Adaptation recommendations",
    "## Guideline framework (draft)",
    "## Handoffs",
)

DOWNSTREAM_TASKS = (
    "E21:S04:T03",
    "E21:S04:T04",
    "E21:S04:T05",
    "E21:S04:T06",
)

pytestmark = pytest.mark.fr006


def test_c1_canonical_cultural_requirements_doc_exists():
    """C1: Canonical cultural requirements doc exists."""
    assert CULTURAL_DOC.is_file()


def test_c2_nine_locale_subsections_present():
    """C2: All nine target locales appear as dedicated subsections."""
    text = CULTURAL_DOC.read_text(encoding="utf-8")
    for code in LOCALE_CODES:
        assert f"({code})" in text, f"missing locale subsection marker for {code}"


def test_c3_required_top_level_sections_present():
    """C3: Mandatory top-level sections present."""
    text = CULTURAL_DOC.read_text(encoding="utf-8")
    for heading in REQUIRED_SECTIONS:
        assert heading in text, f"missing section: {heading}"


def test_c4_recommendations_map_to_downstream_tasks():
    """C4: Recommendations reference E21:S04:T03–T06 (T02 superseded → T04)."""
    text = CULTURAL_DOC.read_text(encoding="utf-8")
    rec_section = text.split("## Adaptation recommendations", 1)[-1]
    assert "E21:S04:T02" not in rec_section
    assert any(task in rec_section for task in DOWNSTREAM_TASKS)


def test_c7_handoffs_t04_absorbs_imagery_scope():
    """C7: Handoffs — T04 owns absorbed imagery scope; no active T02 handoff row."""
    text = CULTURAL_DOC.read_text(encoding="utf-8")
    handoffs = text.split("## Handoffs", 1)[-1].split("## References", 1)[0]
    assert "E21:S04:T02" not in handoffs or "superseded" in handoffs.lower()
    assert "imagery" in handoffs.lower()
    assert "E21:S04:T04" in handoffs


def test_c5_outbound_cross_links():
    """C5: Doc links to rollout matrix and translation workflow."""
    text = CULTURAL_DOC.read_text(encoding="utf-8")
    assert "locale-rollout-matrix.md" in text
    assert "translation-workflow-and-review.md" in text


def test_c6_rollout_matrix_links_back():
    """C6: Rollout matrix links to cultural requirements doc."""
    text = ROLLOUT_MATRIX.read_text(encoding="utf-8")
    assert "locale-cultural-requirements.md" in text


def test_c8_handoff_t05_links_smoke_section():
    """C8: T05 handoff references locale-formatting-conventions §7 smoke examples."""
    text = CULTURAL_DOC.read_text(encoding="utf-8")
    handoffs = text.split("## Handoffs", 1)[-1]
    assert "E21:S04:T05" in handoffs
    assert "locale-formatting-conventions" in text
    assert "## 7. Per-locale smoke examples" in (
        REPO_ROOT / "docs" / "governance" / "standards" / "locale-formatting-conventions.md"
    ).read_text(encoding="utf-8")

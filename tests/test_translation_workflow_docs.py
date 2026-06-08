"""Translation workflow documentation contract tests (E21:S03:T04 / FR-006 Phase 3)."""

from pathlib import Path

import pytest

REPO_ROOT = Path(__file__).resolve().parent.parent
WORKFLOW_DOC = (
    REPO_ROOT / "docs" / "governance" / "standards" / "translation-workflow-and-review.md"
)
CONTRIBUTOR_GUIDE = (
    REPO_ROOT / "docs" / "documentation" / "user-docs" / "contributing-translations.md"
)
INVENTORY = (
    REPO_ROOT / "docs" / "governance" / "standards" / "translatable-content-inventory.md"
)
CONTRIBUTING = REPO_ROOT / "CONTRIBUTING.md"
KANBAN_LOCALES_README = (
    REPO_ROOT / "packages" / "frameworks" / "kanban" / "locales" / "README.md"
)
WORKFLOW_LOCALES_README = (
    REPO_ROOT / "packages" / "frameworks" / "workflow-mgt" / "locales" / "README.md"
)

REQUIRED_WORKFLOW_SECTIONS = (
    "## Contributor workflow",
    "## Review process",
    "## Translation guidelines",
    "## Workflow integration",
    "## Out of scope",
)

pytestmark = pytest.mark.fr006


def test_w1_canonical_workflow_doc_exists():
    """W1: Canonical workflow policy exists."""
    assert WORKFLOW_DOC.is_file()


def test_w2_required_sections_present():
    """W2: Workflow doc contains mandatory sections."""
    text = WORKFLOW_DOC.read_text(encoding="utf-8")
    for heading in REQUIRED_WORKFLOW_SECTIONS:
        assert heading in text, f"missing section: {heading}"


def test_w3_contributor_guide_links_to_standard():
    """W3: User-docs guide exists and links to governance standard."""
    assert CONTRIBUTOR_GUIDE.is_file()
    text = CONTRIBUTOR_GUIDE.read_text(encoding="utf-8")
    assert "translation-workflow-and-review.md" in text


def test_w4_inventory_handoff_includes_t04():
    """W4: Inventory Handoffs table includes E21:S03:T04."""
    text = INVENTORY.read_text(encoding="utf-8")
    assert "E21:S03:T04" in text
    assert "translation-workflow-and-review.md" in text


def test_w5_contributing_links_to_guide():
    """W5: Root CONTRIBUTING.md links to contributing-translations guide."""
    text = CONTRIBUTING.read_text(encoding="utf-8")
    assert "contributing-translations.md" in text


def test_w6_locale_readmes_have_contributing_section():
    """W6: Package locale READMEs include Contributing translations section."""
    for path in (KANBAN_LOCALES_README, WORKFLOW_LOCALES_README):
        text = path.read_text(encoding="utf-8")
        assert "## Contributing translations" in text
        assert "translation-workflow-and-review.md" in text

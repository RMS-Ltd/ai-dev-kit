"""Structural checks for FR-081 brownfield content in INSTALL_IN_YOUR_PROJECT.md (TD7)."""

from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parents[1]
INSTALL = REPO_ROOT / "INSTALL_IN_YOUR_PROJECT.md"


def test_install_contains_brownfield_section():
    text = INSTALL.read_text(encoding="utf-8")
    assert "## Brownfield adoption (existing repositories)" in text


def test_install_brownfield_anchors():
    text = INSTALL.read_text(encoding="utf-8")
    assert "ADR-003" in text
    assert "use_kanban: false" in text
    assert "Per-surface adoption matrix" in text
    assert "Worked example: partial adoption" in text
    assert "ai-dev-kit/ai-dev-kit" not in text


def test_greenfield_boundary_points_to_brownfield():
    text = INSTALL.read_text(encoding="utf-8")
    assert "Brownfield adoption (existing repositories)" in text
    idx_greenfield_boundary = text.find("### Scope boundary")
    idx_brownfield = text.find("## Brownfield adoption")
    assert idx_greenfield_boundary < idx_brownfield

"""
Unit tests for detect_existing_structure (E06:S09:T32 / BR-108).
"""

from pathlib import Path

try:
    from .detect_existing_structure import KanbanStructureDetector
except ImportError:  # pragma: no cover - fallback for direct execution contexts
    from detect_existing_structure import KanbanStructureDetector


def _write(p: Path, content: str) -> None:
    p.parent.mkdir(parents=True, exist_ok=True)
    p.write_text(content, encoding="utf-8")


def _epic_doc(epic_dir: Path, epic_num: int, padded: bool) -> None:
    label = f"{epic_num:02d}" if padded else str(epic_num)
    _write(epic_dir / f"Epic-{label}.md", f"# Epic {epic_num}\n")


def test_detects_zero_padded_legacy_epic_documents(tmp_path: Path) -> None:
    """SBL-style layout: Epic-01/Epic-01.md through Epic-09/Epic-09.md."""
    kanban = tmp_path / "docs" / "kanban"
    epics_dir = kanban / "epics"

    for epic_num in (1, 9):
        epic_dir = epics_dir / f"Epic-{epic_num:02d}"
        _epic_doc(epic_dir, epic_num, padded=True)

    report = KanbanStructureDetector(kanban).detect()

    assert report["status"] == "detected"
    assert report["summary"]["epic_count"] == 2

    by_num = {e["epic_number"]: e for e in report["epics"]}
    assert by_num[1]["epic_document"] == "epics/Epic-01/Epic-01.md"
    assert by_num[9]["epic_document"] == "epics/Epic-09/Epic-09.md"


def test_detects_unpadded_epic_documents(tmp_path: Path) -> None:
    """Regression: Epic-1/Epic-1.md still detected."""
    kanban = tmp_path / "docs" / "kanban"
    epic_dir = kanban / "epics" / "Epic-1"
    _epic_doc(epic_dir, 1, padded=False)

    report = KanbanStructureDetector(kanban).detect()

    assert report["summary"]["epic_count"] == 1
    epic = report["epics"][0]
    assert epic["epic_number"] == 1
    assert epic["epic_document"] == "epics/Epic-1/Epic-1.md"

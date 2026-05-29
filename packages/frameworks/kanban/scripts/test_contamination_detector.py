"""
Unit tests for Kanban contamination detector (E6:S01:T37).
"""

from pathlib import Path

from contamination_detector import scan_kanban_tree


def _write(p: Path, content: str) -> None:
    p.parent.mkdir(parents=True, exist_ok=True)
    p.write_text(content, encoding="utf-8")


def test_scan_empty_tree(tmp_path: Path) -> None:
    root = tmp_path / "docs" / "project-management" / "kanban"
    root.mkdir(parents=True)
    findings = scan_kanban_tree(root)
    assert findings == []


def test_scan_classifies_consumer_board(tmp_path: Path) -> None:
    root = tmp_path / "docs" / "project-management" / "kanban"
    board = root / "kboard.md"
    _write(board, "# MyProject – Kanban Board\nVersion: v0.0.0.0+0\n")
    findings = scan_kanban_tree(root)
    assert len(findings) == 1
    f = findings[0]
    assert f.classification == "template"
    assert "consumer board" in f.reason


def test_scan_flags_devkit_board(tmp_path: Path) -> None:
    root = tmp_path / "docs" / "project-management" / "kanban"
    board = root / "kboard.md"
    _write(board, "# AI Dev Kit – Kanban Board\nVersion: v0.5.1.44+1\n")
    findings = scan_kanban_tree(root)
    assert len(findings) == 1
    f = findings[0]
    assert f.classification == "contaminated"
    assert "dev-kit board" in f.reason


def test_scan_flags_fr_br_docs(tmp_path: Path) -> None:
    root = tmp_path / "docs" / "project-management" / "kanban"
    br = root / "fr-br" / "BR-999-example.md"
    _write(br, "# Bug Report: Example\n")
    findings = scan_kanban_tree(root)
    assert any(f.classification == "contaminated" for f in findings)


def test_scan_flags_non_canonical_epics(tmp_path: Path) -> None:
    root = tmp_path / "docs" / "project-management" / "kanban"
    epic1 = root / "epics" / "Epic-1" / "Epic-1.md"
    epic6 = root / "epics" / "Epic-6" / "Epic-6.md"
    _write(epic1, "# Epic 1: Project Core\n")
    _write(epic6, "# Epic 6: Framework Management\n")
    findings = scan_kanban_tree(root)
    by_rel = {f.path.as_posix(): f for f in findings}
    assert by_rel["epics/Epic-1/Epic-1.md"].classification == "template"
    assert by_rel["epics/Epic-6/Epic-6.md"].classification == "contaminated"


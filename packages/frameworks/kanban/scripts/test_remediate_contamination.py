"""
Tests for Kanban contamination remediation tooling.
"""

from pathlib import Path

from packages.frameworks.kanban.scripts.contamination_detector import Finding
from packages.frameworks.kanban.scripts.remediate_contamination import remediate


def _write(p: Path, content: str) -> None:
    p.parent.mkdir(parents=True, exist_ok=True)
    p.write_text(content, encoding="utf-8")


def test_remediate_dry_run_archives_to_contaminated_folder(tmp_path: Path) -> None:
    kanban_root = tmp_path / "docs" / "project-management" / "kanban"
    kanban_root.mkdir(parents=True)
    contaminated_file = kanban_root / "epics" / "Epic-6" / "Epic-6.md"
    _write(contaminated_file, "# Epic 6: Framework Management\n")

    # dry-run archive mode -> no filesystem changes
    code = remediate(kanban_root, dry_run=True, mode="archive")
    assert code == 0
    assert contaminated_file.exists()


def test_remediate_archive_moves_files(tmp_path: Path, monkeypatch) -> None:
    kanban_root = tmp_path / "docs" / "project-management" / "kanban"
    kanban_root.mkdir(parents=True)
    contaminated_file = kanban_root / "epics" / "Epic-6" / "Epic-6.md"
    _write(contaminated_file, "# Epic 6: Framework Management\n")

    # Ensure detector sees file as contaminated by overriding scan_kanban_tree
    from remediate_contamination import scan_kanban_tree as real_scan

    def _fake_scan(root):
        return [
            Finding(
                path=contaminated_file.relative_to(kanban_root),
                classification="contaminated",
                reason="non-canonical epic copied from dev-kit",
            )
        ]

    monkeypatch.setattr("remediate_contamination.scan_kanban_tree", _fake_scan)

    code = remediate(kanban_root, dry_run=False, mode="archive")
    assert code == 0
    assert not contaminated_file.exists()
    archived = kanban_root / ".contaminated" / "epics" / "Epic-6" / "Epic-6.md"
    assert archived.exists()


def test_remediate_delete_removes_files(tmp_path: Path, monkeypatch) -> None:
    kanban_root = tmp_path / "docs" / "project-management" / "kanban"
    kanban_root.mkdir(parents=True)
    contaminated_file = kanban_root / "epics" / "Epic-6" / "Epic-6.md"
    _write(contaminated_file, "# Epic 6: Framework Management\n")

    from remediate_contamination import scan_kanban_tree as real_scan

    def _fake_scan(root):
        return [
            Finding(
                path=contaminated_file.relative_to(kanban_root),
                classification="contaminated",
                reason="non-canonical epic copied from dev-kit",
            )
        ]

    monkeypatch.setattr("remediate_contamination.scan_kanban_tree", _fake_scan)

    code = remediate(kanban_root, dry_run=False, mode="delete")
    assert code == 0
    assert not contaminated_file.exists()
    deleted_archived = kanban_root / ".contaminated" / "epics" / "Epic-6" / "Epic-6.md"
    assert not deleted_archived.exists()


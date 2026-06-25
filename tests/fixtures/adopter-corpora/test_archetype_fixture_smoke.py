"""Smoke tests for external adopter archetype fixtures (FR-142 / E06:S09:T41)."""

from pathlib import Path

import pytest

REPO_ROOT = Path(__file__).resolve().parents[3]
EXTERNAL_ROOT = REPO_ROOT / "adk-install-external"
FIXTURES_ROOT = Path(__file__).resolve().parent
MAX_FIXTURE_BYTES = 500_000

ARCHETYPE_DIRS = (
    "archetype-a5-minimal-nonempty",
    "archetype-a1-issues-only",
    "archetype-a2-docs-sprawl",
)


def _fixture_size_bytes(root: Path) -> int:
    return sum(f.stat().st_size for f in root.rglob("*") if f.is_file())


@pytest.mark.parametrize("name", ARCHETYPE_DIRS)
def test_archetype_fixture_exists_and_bounded(name: str):
    root = FIXTURES_ROOT / name
    assert root.is_dir(), f"missing fixture tree: {name}"
    assert _fixture_size_bytes(root) <= MAX_FIXTURE_BYTES


def test_a5_minimal_has_readme_and_license_only_kanban_absent():
    root = FIXTURES_ROOT / "archetype-a5-minimal-nonempty"
    assert (root / "README.md").is_file()
    assert (root / "LICENSE").is_file()
    assert not (root / "docs" / "kanban").exists()


def test_a1_issues_only_has_todo_not_kanban():
    root = FIXTURES_ROOT / "archetype-a1-issues-only"
    assert (root / "README.md").is_file()
    assert (root / "TODO.md").is_file()
    assert not list(root.glob("**/epic-*"))


def test_a2_docs_sprawl_multiple_pm_surfaces():
    root = FIXTURES_ROOT / "archetype-a2-docs-sprawl"
    assert (root / "docs" / "ROADMAP.md").is_file()
    assert (root / "doc" / "notes.md").is_file()
    assert (root / "PROJECT.md").is_file()


def test_external_programme_ethics_readme():
    readme = EXTERNAL_ROOT / "README.md"
    assert readme.is_file()
    text = readme.read_text(encoding="utf-8").lower()
    assert "local-only" in text or "local only" in text
    assert "no commit" in text or "no third-party" in text


def test_recon_protocol_documents_pre_score():
    protocol = EXTERNAL_ROOT / "RECON-PROTOCOL.md"
    assert protocol.is_file()
    text = protocol.read_text(encoding="utf-8")
    assert "Install RC" in text
    assert "pre-score" in text.lower() or "pre score" in text.lower()

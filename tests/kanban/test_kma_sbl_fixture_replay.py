"""KMA SBL-style fixture replay tests (FR-127 AC2)."""

import os
from pathlib import Path

import pytest

REPO_ROOT = Path(__file__).resolve().parents[2]
FIXTURE_ROOT = REPO_ROOT / "tests/fixtures/sbl-legacy-kanban-minimal"
KMA_GUIDE = (
    REPO_ROOT
    / "packages/frameworks/kanban/KB/Documentation/Developer_Docs/"
    "kanban-migration-agent-execution.md"
)
PROPOSAL_TEMPLATE = (
    REPO_ROOT / "packages/frameworks/kanban/templates/MIGRATION_PROPOSAL_TEMPLATE.md"
)

# Import ingest helper
sys_path = REPO_ROOT / "packages/frameworks/kanban/scripts"
import sys

if str(sys_path) not in sys.path:
    sys.path.insert(0, str(sys_path))
from kma_ingest import ingest_legacy_corpus  # noqa: E402


def test_sbl_minimal_fixture_ingest_counts():
    report = ingest_legacy_corpus(FIXTURE_ROOT)
    assert report.to_dict()["epic_count"] >= 3
    assert report.to_dict()["story_count"] >= 8
    assert "E{n}-S{m}" in report.naming_patterns or report.to_dict()["story_count"] >= 8


def test_ingest_does_not_modify_legacy_mtime(tmp_path):
    legacy = tmp_path / "legacy"
    legacy.mkdir()
    epic = legacy / "Epic-01.md"
    epic.write_text("# Epic\n", encoding="utf-8")
    stories = legacy / "stories"
    stories.mkdir()
    (stories / "E01-S01.md").write_text("E01:S01:T01\n", encoding="utf-8")
    before = epic.stat().st_mtime_ns
    ingest_legacy_corpus(legacy)
    after = epic.stat().st_mtime_ns
    assert before == after


def test_proposal_template_required_sections():
    text = PROPOSAL_TEMPLATE.read_text(encoding="utf-8")
    for section in ("Epic map", "Keep", "Drop", "Merge", "Domain rationale", "Operator sign-off"):
        assert section in text


def test_kma_guide_blocks_writes_before_signoff():
    text = KMA_GUIDE.read_text(encoding="utf-8")
    assert "DO NOT" in text
    assert "sign-off" in text.lower() or "Sign-off" in text


@pytest.mark.integration
def test_optional_full_sbl_corpus_ingest():
    root = os.environ.get("SBL_LEGACY_KANBAN_ROOT")
    if not root:
        pytest.skip("SBL_LEGACY_KANBAN_ROOT not set")
    path = Path(root)
    if not path.is_dir():
        pytest.skip(f"SBL_LEGACY_KANBAN_ROOT not a directory: {root}")
    report = ingest_legacy_corpus(path)
    d = report.to_dict()
    assert d["epic_count"] >= 19, f"expected >=19 epics, got {d['epic_count']}"
    assert d["story_count"] >= 80, f"expected >=80 stories, got {d['story_count']}"

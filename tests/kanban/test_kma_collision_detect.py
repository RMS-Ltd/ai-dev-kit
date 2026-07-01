"""Tests for kma_collision_detect.py (FR-136 M02)."""

from __future__ import annotations

import sys
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parents[2]
SCRIPTS = REPO_ROOT / "packages/frameworks/kanban/scripts"
FIXTURE = REPO_ROOT / "tests/fixtures/kma-guided-tsp-minimal"

sys.path.insert(0, str(SCRIPTS))
from kma_collision_detect import detect_collisions  # noqa: E402
from score_kma_structure import build_score_report  # noqa: E402


def test_clean_tree_no_collisions():
    report = detect_collisions(FIXTURE / "candidate")
    assert report["clean"] is True
    assert report["collision_count"] == 0


def test_collision_detector_reports_duplicates(tmp_path):
    kanban = tmp_path / "docs/kanban"
    epic = kanban / "epics/epic-01"
    epic.mkdir(parents=True)
    (epic / "story-01-alpha.md").write_text("# A\n", encoding="utf-8")
    (epic / "subdir").mkdir()
    (epic / "subdir/story-01-alpha.md").write_text("# B\n", encoding="utf-8")
    report = detect_collisions(kanban)
    assert report["collision_count"] >= 1
    assert report["clean"] is False


def test_scorer_collision_dimension_penalized(tmp_path):
    kanban = tmp_path / "kanban"
    epic = kanban / "epics/epic-01"
    epic.mkdir(parents=True)
    (epic / "story-01-a.md").write_text("E01:S01:T01\n", encoding="utf-8")
    sub = epic / "nested"
    sub.mkdir()
    (sub / "story-01-a.md").write_text("E01:S01:T02\n", encoding="utf-8")
    tsp = FIXTURE / "TARGET-EST-TREE.md"
    rubric = FIXTURE / "SCORING-RUBRIC.yaml"
    score = build_score_report(tsp, kanban, rubric)
    coll = score["dimensions"]["story_filename_collision"]["score"]
    assert coll < 1.0

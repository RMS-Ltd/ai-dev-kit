"""KMA benchmark — automated pipeline ~0 vs agentic ingest 1.0 on minimal fixture."""

import sys
from pathlib import Path

import pytest
import yaml

_KANBAN_TESTS = Path(__file__).resolve().parent
if str(_KANBAN_TESTS) not in sys.path:
    sys.path.insert(0, str(_KANBAN_TESTS))

from kma_migration_benchmark import (
    FIXTURE_ROOT,
    GROUND_TRUTH_PATH,
    load_ground_truth,
    run_fixture_benchmark,
    score_agentic_ingest,
    score_automated_pipeline,
    story_recall,
)

REPO_ROOT = Path(__file__).resolve().parents[2]


def test_ground_truth_fixture_counts():
    gt = load_ground_truth()
    assert gt["counts"]["epics"] == 3
    assert gt["counts"]["stories"] == 8
    assert gt["counts"]["inline_tasks"] == 9
    assert len(gt["stories"]) == 8
    assert len(gt["inline_tasks"]) == 9


def test_sbl_attempt_06_evidence_in_ground_truth():
    gt = load_ground_truth()
    a06 = gt["sbl_attempt_06"]
    assert a06["automated_pipeline"]["stories_detected"] == 0
    assert a06["agentic_kma"]["stories_migrated"] == 72


def test_automated_pipeline_near_zero_on_fixture():
    score, counts = score_automated_pipeline(FIXTURE_ROOT)
    gt = load_ground_truth()
    max_recall = float(gt["benchmark_expectations"]["automated_story_recall_max"])
    assert counts["stories"] == 0, f"expected 0 stories from detect pipeline, got {counts}"
    assert score <= max_recall, f"automated recall {score} exceeds max {max_recall}"


def test_agentic_ingest_full_recall_on_fixture():
    score, counts = score_agentic_ingest(FIXTURE_ROOT)
    gt = load_ground_truth()
    min_recall = float(gt["benchmark_expectations"]["agentic_story_recall_min"])
    assert counts["epics"] == gt["counts"]["epics"]
    assert counts["stories"] == gt["counts"]["stories"]
    assert counts["inline_tasks"] == gt["counts"]["inline_tasks"]
    assert score >= min_recall, f"agentic recall {score} below min {min_recall}"
    assert score == pytest.approx(1.0)


def test_story_recall_helper():
    assert story_recall(0, 8) == 0.0
    assert story_recall(8, 8) == 1.0
    assert story_recall(4, 8) == 0.5


def test_run_fixture_benchmark_summary():
    result = run_fixture_benchmark()
    assert result["automated"]["score"] <= 0.05
    assert result["agentic"]["score"] == pytest.approx(1.0)
    assert result["sbl_attempt_06"]["score_delta"] == "0 vs 72"


def test_ground_truth_yaml_parseable():
    assert GROUND_TRUTH_PATH.is_file()
    with open(GROUND_TRUTH_PATH, encoding="utf-8") as f:
        data = yaml.safe_load(f)
    assert data["fixture_id"] == "sbl-legacy-kanban-minimal"

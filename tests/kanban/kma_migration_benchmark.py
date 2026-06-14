"""KMA migration benchmark — automated detect→analyze vs agentic exhaustive scan.

Scores story recall against benchmark-ground-truth.yaml for the SBL minimal fixture.
Part of FR-127 UAT (E06:S09:T31 extension).
"""

from __future__ import annotations

import sys
from pathlib import Path
from typing import Any, Dict, Tuple

import yaml

REPO_ROOT = Path(__file__).resolve().parents[2]
FIXTURE_ROOT = REPO_ROOT / "tests/fixtures/sbl-legacy-kanban-minimal"
GROUND_TRUTH_PATH = FIXTURE_ROOT / "benchmark-ground-truth.yaml"

KANBAN_SCRIPTS = REPO_ROOT / "packages/frameworks/kanban/scripts"
if str(KANBAN_SCRIPTS) not in sys.path:
    sys.path.insert(0, str(KANBAN_SCRIPTS))

from detect_existing_structure import KanbanStructureDetector  # noqa: E402
from kma_ingest import ingest_legacy_corpus  # noqa: E402


def load_ground_truth(path: Path | None = None) -> Dict[str, Any]:
    """Load benchmark ground truth YAML."""
    gt_path = path or GROUND_TRUTH_PATH
    with open(gt_path, encoding="utf-8") as f:
        return yaml.safe_load(f)


def story_recall(detected: int, expected: int) -> float:
    """Compute story detection recall in [0.0, 1.0]."""
    if expected <= 0:
        return 1.0 if detected == 0 else 0.0
    return min(1.0, detected / expected)


def score_automated_pipeline(legacy_root: Path) -> Tuple[float, Dict[str, int]]:
    """Score deprecated detect→analyze pipeline (directory-layout assumptions).

    Uses KanbanStructureDetector — expects canonical epics/ + Story-N layout.
    Returns (story_recall_score, counts_dict).
    """
    detector = KanbanStructureDetector(legacy_root)
    report = detector.detect()
    summary = report.get("summary", {})
    detected_stories = int(summary.get("story_count", 0))
    detected_epics = int(summary.get("epic_count", 0))
    detected_tasks = int(summary.get("task_count", 0))
    return story_recall(detected_stories, 8), {
        "epics": detected_epics,
        "stories": detected_stories,
        "tasks": detected_tasks,
    }


def score_agentic_ingest(legacy_root: Path) -> Tuple[float, Dict[str, int]]:
    """Score agentic exhaustive scan via kma_ingest (read-only content walk).

    Returns (story_recall_score, counts_dict).
    """
    report = ingest_legacy_corpus(legacy_root)
    d = report.to_dict()
    expected_stories = 8
    detected_stories = int(d["story_count"])
    return story_recall(detected_stories, expected_stories), {
        "epics": int(d["epic_count"]),
        "stories": detected_stories,
        "inline_tasks": int(d["inline_task_count"]),
    }


def run_fixture_benchmark(
    legacy_root: Path | None = None,
    ground_truth: Dict[str, Any] | None = None,
) -> Dict[str, Any]:
    """Run full benchmark on fixture; return scores and counts."""
    root = legacy_root or FIXTURE_ROOT
    gt = ground_truth or load_ground_truth()
    expected_stories = int(gt["counts"]["stories"])

    auto_score, auto_counts = score_automated_pipeline(root)
    agentic_score, agentic_counts = score_agentic_ingest(root)

    # Re-score automated against ground truth file (not hardcoded 8)
    auto_score = story_recall(auto_counts["stories"], expected_stories)
    agentic_score = story_recall(agentic_counts["stories"], expected_stories)

    return {
        "fixture_id": gt.get("fixture_id"),
        "expected": gt["counts"],
        "automated": {"score": auto_score, "counts": auto_counts},
        "agentic": {"score": agentic_score, "counts": agentic_counts},
        "sbl_attempt_06": gt.get("sbl_attempt_06"),
    }

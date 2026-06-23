"""Tests for score_kma_structure.py (FR-136 AC2 / AC5)."""

from __future__ import annotations

import json
import os
import subprocess
import sys
from pathlib import Path

import pytest

REPO_ROOT = Path(__file__).resolve().parents[2]
SCRIPTS = REPO_ROOT / "packages/frameworks/kanban/scripts"
FIXTURE = REPO_ROOT / "tests/fixtures/kma-guided-tsp-minimal"
SBL_REF = REPO_ROOT / "adk-install-into-sbl/kanban-reference"

sys.path.insert(0, str(SCRIPTS))
from score_kma_structure import (  # noqa: E402
    build_score_report,
    parse_tsp_markdown,
    render_markdown_report,
)


def test_tsp_self_test_minimal_fixture():
    report = build_score_report(
        FIXTURE / "TARGET-EST-TREE.md",
        FIXTURE / "candidate",
        FIXTURE / "SCORING-RUBRIC.yaml",
    )
    assert report["weighted_total"] >= 0.85
    assert report["passed"] is True


def test_tsp_against_itself_scores_at_least_98_percent():
    tsp = FIXTURE / "TARGET-EST-TREE.md"
    report = build_score_report(
        tsp, FIXTURE / "candidate", FIXTURE / "SCORING-RUBRIC.yaml", self_test=True
    )
    assert report["weighted_total"] >= 0.98


def test_json_output_stable_sorted_keys():
    tsp = FIXTURE / "TARGET-EST-TREE.md"
    r1 = build_score_report(tsp, FIXTURE / "candidate", FIXTURE / "SCORING-RUBRIC.yaml")
    r2 = build_score_report(tsp, FIXTURE / "candidate", FIXTURE / "SCORING-RUBRIC.yaml")
    assert json.dumps(r1, sort_keys=True) == json.dumps(r2, sort_keys=True)


def test_all_six_rubric_dimensions_present():
    report = build_score_report(
        FIXTURE / "TARGET-EST-TREE.md",
        FIXTURE / "candidate",
        FIXTURE / "SCORING-RUBRIC.yaml",
    )
    expected = {
        "unique_task_coverage",
        "epic_band_parity",
        "title_coverage",
        "story_filename_collision",
        "folder_alignment",
        "orphan_and_reserved",
    }
    assert set(report["dimensions"]) == expected
    total_weight = sum(d["weight"] for d in report["dimensions"].values())
    assert abs(total_weight - 1.0) < 0.001


def test_parse_tsp_extracts_unique_tasks():
    inv = parse_tsp_markdown(FIXTURE / "TARGET-EST-TREE.md")
    assert len(inv.tasks) == 12


def test_cli_stdout_json(tmp_path):
    out = subprocess.check_output(
        [
            sys.executable,
            str(SCRIPTS / "score_kma_structure.py"),
            "--tsp",
            str(FIXTURE / "TARGET-EST-TREE.md"),
            "--kanban-root",
            str(FIXTURE / "candidate"),
            "--rubric",
            str(FIXTURE / "SCORING-RUBRIC.yaml"),
            "--stdout-json",
        ],
        text=True,
    )
    data = json.loads(out)
    assert "weighted_total" in data


def test_markdown_report_renders():
    report = build_score_report(
        FIXTURE / "TARGET-EST-TREE.md",
        FIXTURE / "candidate",
        FIXTURE / "SCORING-RUBRIC.yaml",
    )
    md = render_markdown_report(report)
    assert "KMA Structural Score Report" in md
    assert "unique_task_coverage" in md


@pytest.mark.integration
def test_sbl_exemplar_self_test_when_env_set():
    root = os.environ.get("KMA_SBL_TSP_ROOT", str(SBL_REF))
    tsp = Path(root) / "TARGET-EST-TREE.md"
    rubric = Path(root) / "SCORING-RUBRIC.yaml"
    if not tsp.is_file() or not rubric.is_file():
        pytest.skip("SBL kanban-reference not present")
    report = build_score_report(tsp, Path(root), rubric, self_test=True)
    assert report["weighted_total"] >= 0.98

"""Tests for FR-009 migration plan presentation (E04:S08:T05, IPP T1–T7)."""

from __future__ import annotations

import sys
from pathlib import Path

import pytest

SCRIPTS_DIR = Path(__file__).resolve().parents[2] / "packages/frameworks/kanban/scripts"
sys.path.insert(0, str(SCRIPTS_DIR))

from migration_plan_presenter import (  # noqa: E402
    categorize_semantic_matches,
    format_migration_plan_preview,
)


@pytest.fixture
def sample_analysis() -> dict:
    return {
        "semantic_matches": [
            {
                "user_epic_number": 1,
                "canonical_epic_number": 8,
                "similarity_score": 82.5,
                "match_type": "semantic_match",
            },
            {
                "user_epic_number": 2,
                "canonical_epic_number": 2,
                "similarity_score": 55.0,
                "match_type": "partial_match",
            },
            {
                "user_epic_number": 3,
                "canonical_epic_number": 3,
                "similarity_score": 25.0,
                "match_type": "no_match",
            },
        ],
        "conflicts": [
            {
                "severity": "high",
                "message": "Epic 1 number conflicts with canonical Epic 1",
            }
        ],
        "migration_plan": {
            "recommended_mode": "canonical_adoption",
            "recommendation_rationale": "Canonical adoption recommended: 3 semantic matches found.",
            "steps": [
                {
                    "step": 1,
                    "action": "backup_existing_structure",
                    "description": "Create backup of existing Kanban structure",
                    "required": True,
                }
            ],
        },
    }


def test_format_includes_semantic_match_lines(sample_analysis: dict) -> None:
    output = format_migration_plan_preview(sample_analysis)
    assert "Epic 1 → Canonical Epic 8 (82.5%, semantic_match)" in output


def test_format_includes_recommended_mode(sample_analysis: dict) -> None:
    output = format_migration_plan_preview(sample_analysis)
    assert "canonical_adoption" in output


def test_format_includes_mode_comparison(sample_analysis: dict) -> None:
    output = format_migration_plan_preview(sample_analysis)
    assert "Mode Comparison" in output


def test_format_handles_empty_analysis() -> None:
    output = format_migration_plan_preview({})
    assert "Migration Plan Preview" in output


def test_format_with_matches_no_name_error(sample_analysis: dict) -> None:
    output = format_migration_plan_preview(sample_analysis)
    assert "Partial matches (sample)" in output


def test_format_shows_high_severity_conflicts(sample_analysis: dict) -> None:
    output = format_migration_plan_preview(sample_analysis)
    assert "1 high-severity conflicts detected" in output


def test_categorize_matches_bands() -> None:
    matches = [{"similarity_score": 90}, {"similarity_score": 50}, {"similarity_score": 10}]
    high, medium, low = categorize_semantic_matches(matches)
    assert len(high) == 1 and len(medium) == 1 and len(low) == 1

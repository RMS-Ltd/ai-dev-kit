"""FR-011 / E4:S08:T07 — multi-epic task split engine tests."""

from __future__ import annotations

import json
import subprocess
import sys
from pathlib import Path

import pytest

SCRIPTS = Path(__file__).resolve().parents[1] / "packages/frameworks/workflow mgt/scripts"
if str(SCRIPTS) not in sys.path:
    sys.path.insert(0, str(SCRIPTS))

from task_split.engine import (  # noqa: E402
    assign_tasks,
    build_split_plan,
    deterministic_id_remap,
    rewrite_references,
    split_candidates,
)
from task_split.models import TaskAssignment  # noqa: E402


class TestSplitCandidates:
    """FR-1 / AC-1."""

    def test_detects_multi_epic_partial_match(self):
        is_candidate, candidates, rationale = split_candidates(
            3,
            65.0,
            "partial",
            [(2, 55.0, "partial")],
        )
        assert is_candidate is True
        assert len(candidates) >= 2
        assert "Split-candidate" in rationale

    def test_single_epic_not_candidate(self):
        is_candidate, _, _ = split_candidates(
            3,
            80.0,
            "exact",
            [],
        )
        assert is_candidate is False


class TestAssignTasks:
    """FR-2 / FR-3 / AC-2 / AC-3."""

    @pytest.fixture
    def mixed_tasks(self):
        return [
            {
                "source_story": 1,
                "source_task": 1,
                "title": "Implement versioning schema",
                "description": "semver schema",
            },
            {
                "source_story": 1,
                "source_task": 2,
                "title": "Create release workflow",
                "description": "RW automation trigger",
            },
        ]

    def test_routes_versioning_to_epic_3(self, mixed_tasks):
        candidates = [(3, 65.0, "partial"), (2, 55.0, "partial")]
        assignments = assign_tasks(mixed_tasks, candidates, source_epic=3)
        assert len(assignments) == 2
        by_task = {a.source_task: a for a in assignments}
        assert by_task[1].target_epic == 3
        assert by_task[2].target_epic == 2

    def test_each_task_assigned_once(self, mixed_tasks):
        candidates = [(3, 65.0, "partial"), (2, 55.0, "partial")]
        assignments = assign_tasks(mixed_tasks, candidates, source_epic=3)
        assert len(assignments) == len(mixed_tasks)
        assert len({a.source_task for a in assignments}) == len(mixed_tasks)

    def test_rationale_present(self, mixed_tasks):
        candidates = [(3, 65.0, "partial"), (2, 55.0, "partial")]
        assignments = assign_tasks(mixed_tasks, candidates, source_epic=3)
        assert all(a.rationale for a in assignments)
        assert all(isinstance(a.signals, list) for a in assignments)


class TestSplitPlanOutput:
    """FR-4 / AC-4."""

    def test_plan_includes_mappings_and_rationale(self):
        plan = build_split_plan(
            3,
            3,
            65.0,
            "partial",
            [(2, 55.0, "partial")],
            [
                {
                    "source_story": 1,
                    "source_task": 1,
                    "title": "semver bump",
                },
            ],
        )
        assert plan.is_split_candidate
        assert len(plan.assignments) == 1
        data = plan.to_dict()
        assert "assignments" in data
        assert data["assignments"][0]["rationale"]


class TestDeterministicRemap:
    """FR-5 / AC-5."""

    def test_remap_stable_across_runs(self):
        assignments = [
            TaskAssignment(3, 1, 2, 2, 1, 0, 0.5, "r1"),
            TaskAssignment(3, 1, 1, 3, 1, 0, 0.8, "r2"),
        ]
        first = deterministic_id_remap(assignments)
        assignments2 = [
            TaskAssignment(3, 1, 2, 2, 1, 0, 0.5, "r1"),
            TaskAssignment(3, 1, 1, 3, 1, 0, 0.8, "r2"),
        ]
        second = deterministic_id_remap(assignments2)
        assert first == second
        assert first["E3:S01:T01"] == "E3:S01:T01"
        assert first["E3:S01:T02"] == "E2:S01:T01"

    def test_no_collision_in_buckets(self):
        assignments = assign_tasks(
            [
                {"source_story": 1, "source_task": 1, "title": "workflow RW"},
                {"source_story": 1, "source_task": 2, "title": "workflow UKW"},
            ],
            [(2, 60.0, "partial"), (3, 50.0, "partial")],
            source_epic=9,
        )
        remap = deterministic_id_remap(assignments)
        targets = list(remap.values())
        assert len(targets) == len(set(targets))


class TestReferenceRewrite:
    """FR-6 / AC-6."""

    def test_updates_structured_ids(self):
        remap = {"E3:S01:T01": "E3:S01:T05", "E3:S01:T02": "E2:S01:T01"}
        updates, unresolved = rewrite_references(
            {"doc.md": "Track E3:S01:T01 and E3:S01:T02 here."},
            remap,
        )
        assert "E3:S01:T05" in updates["doc.md"]
        assert "E2:S01:T01" in updates["doc.md"]
        assert not unresolved

    def test_reports_unknown_ids(self):
        updates, unresolved = rewrite_references(
            {"doc.md": "See E9:S99:T99"},
            {"E3:S01:T01": "E3:S01:T02"},
        )
        assert "doc.md" not in updates or updates["doc.md"] == "See E9:S99:T99"
        assert any("E9" in u for u in unresolved)


class TestDeterministicReplay:
    def test_identical_plan_on_replay(self):
        kwargs = dict(
            source_epic=3,
            primary_epic=3,
            primary_confidence=65.0,
            primary_match_type="partial",
            secondary_epics=[(2, 55.0, "partial")],
            source_tasks=[
                {
                    "source_story": 1,
                    "source_task": 1,
                    "title": "version semver",
                },
                {
                    "source_story": 1,
                    "source_task": 2,
                    "title": "workflow RW",
                },
            ],
        )
        a = build_split_plan(**kwargs)
        b = build_split_plan(**kwargs)
        assert a.to_dict()["assignments"] == b.to_dict()["assignments"]
        assert a.id_remap == b.id_remap


class TestCLI:
    def test_fixture_json_exit_zero(self):
        cli = SCRIPTS / "task_split_plan.py"
        result = subprocess.run(
            [sys.executable, str(cli), "--fixture", "mixed_responsibility"],
            capture_output=True,
            text=True,
            check=False,
        )
        assert result.returncode == 0
        payload = json.loads(result.stdout)
        assert payload["is_split_candidate"] is True
        assert len(payload["assignments"]) == 3

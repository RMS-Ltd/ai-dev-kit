"""Tests for kma_workflow_story_parity (FR-143 / E06:S09:T44 / K-01)."""

from __future__ import annotations

import json
import subprocess
import sys
from pathlib import Path

import pytest

REPO_ROOT = Path(__file__).resolve().parents[2]
SCRIPTS = REPO_ROOT / "packages/frameworks/kanban/scripts"
FIXTURE = REPO_ROOT / "tests/fixtures/kma-workflow-story-parity-k01"
REGISTRY = (
    REPO_ROOT / "packages/frameworks/workflow-mgt/workflows/workflow-registry.yaml"
)
COLLAPSED = FIXTURE / "TARGET-EST-TREE-collapsed.md"
STORY_MAP = FIXTURE / "E02-WORKFLOW-STORY-MAP.md"
VALIDATOR = SCRIPTS / "validation/validate_kma_workflow_story_parity.py"

sys.path.insert(0, str(SCRIPTS))
from kma_workflow_story_parity import (  # noqa: E402
    check_workflow_story_parity,
    load_workflow_registry,
    parse_e02_stories_from_tsp,
)


def test_registry_has_thirteen_workflows():
    info = load_workflow_registry(REGISTRY)
    assert info.count == 13


def test_collapsed_tsp_has_one_e02_story():
    inv = parse_e02_stories_from_tsp(COLLAPSED)
    assert inv.count == 1


def test_k01_collapsed_fails_guided_parity():
    report = check_workflow_story_parity(
        registry_path=REGISTRY,
        tsp_path=COLLAPSED,
        mode="guided",
    )
    assert report["registry_count"] == 13
    assert report["e02_story_count"] == 1
    assert report["severity"] == "major"
    assert report["passed"] is False
    assert report["blocking"] is True


def test_story_map_resolves_k01_gap():
    report = check_workflow_story_parity(
        registry_path=REGISTRY,
        tsp_path=COLLAPSED,
        story_map_path=STORY_MAP,
        mode="guided",
    )
    assert report["story_map_count"] >= 13
    assert report["passed"] is True


def test_blind_mode_not_blocking():
    report = check_workflow_story_parity(
        registry_path=REGISTRY,
        tsp_path=COLLAPSED,
        mode="blind",
    )
    assert report["blocking"] is False


def test_validator_strict_exits_nonzero_on_collapsed():
    proc = subprocess.run(
        [
            sys.executable,
            str(VALIDATOR),
            "--tsp",
            str(COLLAPSED),
            "--registry",
            str(REGISTRY),
            "--mode",
            "guided",
            "--strict",
        ],
        capture_output=True,
        text=True,
    )
    assert proc.returncode == 1


def test_validator_strict_passes_with_story_map():
    proc = subprocess.run(
        [
            sys.executable,
            str(VALIDATOR),
            "--tsp",
            str(COLLAPSED),
            "--registry",
            str(REGISTRY),
            "--story-map",
            str(STORY_MAP),
            "--mode",
            "guided",
            "--strict",
        ],
        capture_output=True,
        text=True,
    )
    assert proc.returncode == 0


def test_stdout_json_stable():
    report = check_workflow_story_parity(
        registry_path=REGISTRY,
        tsp_path=COLLAPSED,
        mode="guided",
    )
    s1 = json.dumps(report, sort_keys=True)
    s2 = json.dumps(report, sort_keys=True)
    assert s1 == s2

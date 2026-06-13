"""Tests for Kanban v3.5 fresh-install catalog."""

from __future__ import annotations

import sys
import tempfile
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parents[2]
KANBAN_SCRIPTS = REPO_ROOT / "packages" / "frameworks" / "kanban" / "scripts"
if str(KANBAN_SCRIPTS) not in sys.path:
    sys.path.insert(0, str(KANBAN_SCRIPTS))

from kanban_v35_catalog import (  # noqa: E402
    V35_FRESH_STORIES,
    V35_FRESH_TASK_STORIES,
    assert_v35_fingerprint,
    fresh_epic_list,
)
from migrate_structure import install_canonical_epics_only  # noqa: E402


def test_v35_fresh_epics_small_tier():
    assert fresh_epic_list() == list(range(1, 9))


def test_v35_story_and_task_catalog_counts():
    assert len(V35_FRESH_STORIES) == 15
    assert (8, 2) in V35_FRESH_STORIES
    assert (1, 1) in V35_FRESH_TASK_STORIES
    assert (5, 1) in V35_FRESH_TASK_STORIES


def test_install_canonical_epics_only_v35_fingerprint():
    with tempfile.TemporaryDirectory() as tmp:
        kanban_path = Path(tmp) / "docs" / "kanban"
        result = install_canonical_epics_only(kanban_path, dry_run=False)
        assert result["status"] == "completed"
        assert result["epics_installed"] == 8
        ok, errors = assert_v35_fingerprint(kanban_path)
        assert ok, errors
        perp = list(
            (kanban_path / "epics" / "epic-01" / "story-01-perpetual-operations").glob("T*.md")
        )
        assert len(perp) == 6
        e05_tasks = list(
            (kanban_path / "epics" / "epic-05" / "story-01-documentation-scaffold").glob("T*.md")
        )
        assert len(e05_tasks) == 5
        e08_bootstrap = list(
            (kanban_path / "epics" / "epic-08" / "story-01-code-quality-scaffold").glob("T*.md")
        )
        assert len(e08_bootstrap) == 1
        e08_upkeep = list(
            (kanban_path / "epics" / "epic-08" / "story-02-review-and-upkeep").glob("T*.md")
        )
        assert len(e08_upkeep) == 3

"""Tests for Kanban v3.2 fresh-install catalog (E06:S09:T27)."""

from __future__ import annotations

import sys
import tempfile
from pathlib import Path

import pytest

REPO_ROOT = Path(__file__).resolve().parents[2]
KANBAN_SCRIPTS = REPO_ROOT / "packages" / "frameworks" / "kanban" / "scripts"
if str(KANBAN_SCRIPTS) not in sys.path:
    sys.path.insert(0, str(KANBAN_SCRIPTS))

from kanban_v32_catalog import (  # noqa: E402
    V32_FRESH_EPICS,
    V1_FRESH_EPICS,
    assert_v32_fingerprint,
    fresh_epic_list,
)
from migrate_structure import install_canonical_epics_only  # noqa: E402


def test_v32_fresh_epics_small_tier():
    assert fresh_epic_list() == list(range(1, 11))
    assert 18 not in V32_FRESH_EPICS
    assert 22 not in V32_FRESH_EPICS
    assert 9 in V32_FRESH_EPICS
    assert V32_FRESH_EPICS != V1_FRESH_EPICS


def test_fingerprint_rejects_v1_epic5_title():
    with tempfile.TemporaryDirectory() as tmp:
        root = Path(tmp)
        e05_dir = root / "epics" / "epic-05"
        e05_dir.mkdir(parents=True)
        (e05_dir / "epic-05.md").write_text("# Epic 5: FR Implementation\n", encoding="utf-8")
        ok, errors = assert_v32_fingerprint(root)
        assert not ok
        assert any("v1 catalog" in e for e in errors)


def test_fingerprint_accepts_v32_layout():
    with tempfile.TemporaryDirectory() as tmp:
        root = Path(tmp)
        e05_dir = root / "epics" / "epic-05"
        e04_dir = root / "epics" / "epic-04"
        e05_dir.mkdir(parents=True)
        e04_dir.mkdir(parents=True)
        (e05_dir / "epic-05.md").write_text("# Epic 5: Project Architecture\n", encoding="utf-8")
        (e04_dir / "story-02-fr-implementation.md").write_text(
            "# Epic 4, Story 2: FR Implementation\n", encoding="utf-8"
        )
        ok, errors = assert_v32_fingerprint(root)
        assert ok, errors


def test_install_canonical_epics_only_v32_fingerprint():
    with tempfile.TemporaryDirectory() as tmp:
        kanban_path = Path(tmp) / "docs" / "kanban"
        result = install_canonical_epics_only(kanban_path, dry_run=False)
        assert result["status"] == "completed"
        assert result["epics_installed"] == 10
        ok, errors = assert_v32_fingerprint(kanban_path)
        assert ok, errors

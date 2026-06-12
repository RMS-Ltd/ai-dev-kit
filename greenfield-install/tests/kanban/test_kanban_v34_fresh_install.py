"""Tests for Kanban v3.4 fresh-install catalog."""

from __future__ import annotations

import sys
import tempfile
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parents[2]
KANBAN_SCRIPTS = REPO_ROOT / "packages" / "frameworks" / "kanban" / "scripts"
if str(KANBAN_SCRIPTS) not in sys.path:
    sys.path.insert(0, str(KANBAN_SCRIPTS))

from kanban_v34_catalog import (  # noqa: E402
    V34_FRESH_EPICS,
    assert_v34_fingerprint,
    fresh_epic_list,
)
from migrate_structure import install_canonical_epics_only  # noqa: E402


def test_v34_fresh_epics_small_tier():
    assert fresh_epic_list() == list(range(1, 9))
    assert 7 in V34_FRESH_EPICS  # Security
    assert 9 not in V34_FRESH_EPICS


def test_fingerprint_rejects_v33_testing_epic_at_e07():
    with tempfile.TemporaryDirectory() as tmp:
        root = Path(tmp)
        e07 = root / "epics" / "epic-07"
        e07.mkdir(parents=True)
        (e07 / "epic-07.md").write_text(
            "# Epic 7: Testing & Quality Assurance\n", encoding="utf-8"
        )
        ok, errors = assert_v34_fingerprint(root)
        assert not ok
        assert any("Testing" in e for e in errors)


def test_fingerprint_accepts_v35_layout():
    with tempfile.TemporaryDirectory() as tmp:
        root = Path(tmp)
        layouts = [
            ("epic-01", [
                ("story-02-versioning.md", "Versioning"),
                ("story-03-test.md", "Test"),
                ("story-01-perpetual-operations/T01.md", "Perpetual"),
            ]),
            ("epic-03", [("epic-03.md", "Kanban"), ("story-02-fr.md", "FR Implementation")]),
            ("epic-04", [("epic-04.md", "Project Architecture"), ("story-01-adr.md", "adr scaffold")]),
            ("epic-05", [
                ("story-01-documentation-scaffold.md", "Documentation"),
                ("story-01-documentation-scaffold/T01.md", "README"),
            ]),
            ("epic-06", [("story-01-ci.md", "ci pipeline")]),
            ("epic-07", [("epic-07.md", "Security"), ("story-01-security.md", "security baseline")]),
            (
                "epic-08",
                [
                    ("epic-08.md", "Code Quality"),
                    ("story-01-code-quality-scaffold.md", "Code Quality Scaffold"),
                    ("story-01-code-quality-scaffold/T01.md", "CodeQL"),
                    ("story-02-review.md", "review upkeep"),
                ],
            ),
        ]
        for d, files in layouts:
            p = root / "epics" / d
            for name, body in files:
                dest = p / name
                dest.parent.mkdir(parents=True, exist_ok=True)
                dest.write_text(f"# {body}\n", encoding="utf-8")
        ok, errors = assert_v34_fingerprint(root)
        assert ok, errors


def test_install_canonical_epics_only_v34_fingerprint():
    with tempfile.TemporaryDirectory() as tmp:
        kanban_path = Path(tmp) / "docs" / "kanban"
        result = install_canonical_epics_only(kanban_path, dry_run=False)
        assert result["status"] == "completed"
        assert result["epics_installed"] == 8
        ok, errors = assert_v34_fingerprint(kanban_path)
        assert ok, errors

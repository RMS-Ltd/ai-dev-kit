"""Tests for validate_story_moscow_coverage.py."""

from __future__ import annotations

from pathlib import Path

import validate_story_moscow_coverage as v


def test_extract_open_tasks_ignores_complete():
    content = """
## Task Checklist
- [ ] **E10:S01:T01** – Foo - TODO
- [x] **E10:S01:T02** – Bar - ✅ COMPLETE (v0.1.0.0+1)
- [ ] **E10:S01:T03** – Baz - IN PROGRESS
"""
    open_tasks = v.extract_open_tasks_from_story(content, 10, 1)
    assert open_tasks == ["E10:S1:T1", "E10:S1:T3"]


def test_extract_board_tasks_in_should_and_wont():
    board = """
### Should Have (S)
- **E10:S01:T01** – task one
### Won't Have (W)
- **E10:S01:T02** – deferred
"""
    on_board = v.extract_board_tasks_for_story(board, 10, 1)
    assert "E10:S1:T1" in on_board
    assert "E10:S1:T2" in on_board


def test_compute_coverage_missing_tasks():
    story = """
- [ ] **E5:S09:T01** – a - TODO
- [ ] **E5:S09:T02** – b - TODO
- [ ] **E5:S09:T03** – c - TODO
"""
    board = """
### Should Have (S)
- **E5:S09:T01** – only one
"""
    report = v.compute_coverage(story, board, 5, 9, Path("story.md"))
    assert report.missing == ["E5:S9:T2", "E5:S9:T3"]
    assert not report.ok


def test_wont_have_counts_as_covered(tmp_path: Path):
    story = "- [ ] **E10:S01:T01** – x - TODO\n- [ ] **E10:S01:T02** – y - TODO\n"
    board = """
### Could Have (C)
- **E10:S01:T01** – on board
### Won't Have (W)
- **E10:S01:T02** – explicit deferral
"""
    report = v.compute_coverage(story, board, 10, 1, tmp_path / "s.md")
    assert report.ok


def test_cli_pass_on_fixture(tmp_path: Path):
    root = tmp_path
    kroot = root / "docs/project-management/kanban"
    (kroot / "epics/Epic-10").mkdir(parents=True)
    story = kroot / "epics/Epic-10/Story-001-sample.md"
    story.write_text(
        """**Code:** E10S01
## Task Checklist
- [ ] **E10:S01:T01** – one - TODO
- [ ] **E10:S01:T02** – two - TODO
""",
        encoding="utf-8",
    )
    (kroot / "kboard.md").write_text(
        """### Should Have (S)
- **E10:S01:T01** – one
- **E10:S01:T02** – two
""",
        encoding="utf-8",
    )
    report = v.compute_coverage(
        story.read_text(encoding="utf-8"),
        (kroot / "kboard.md").read_text(encoding="utf-8"),
        10,
        1,
        story,
    )
    assert report.ok

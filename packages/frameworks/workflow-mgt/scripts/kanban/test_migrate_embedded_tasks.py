"""Unit and integration tests for embedded → discrete task migration (IPP E04:S11:T07, T1–T12)."""

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))

from extract_embedded_tasks import (  # noqa: E402
    extract_embedded_tasks,
    slugify_title,
    task_doc_filename,
)
from generate_task_doc import generate_task_doc, render_task_document  # noqa: E402
from migrate_story import migrate_story  # noqa: E402
from update_story_refs import build_task_link_map, update_story_refs  # noqa: E402
from validate_migration import validate_story_file  # noqa: E402

SIMPLE_STORY = """\
# Story 11 – Kanban granularity

## Overview

Pilot overview paragraph must remain intact.

### E04:S11:T01 – Catalog embedded tasks

**Status:** TODO

**Input:**
- Migration plan

**Deliverable:**
- Task inventory

**Acceptance Criteria:**
- [ ] Inventory complete
"""

MULTI_STORY = """\
## Tasks

### E04:S11:T01 – First task

**Scope:** Scope one

### E04:S11:T02 – Second task

**Scope:** Scope two

### E04:S11:T03 – Third task

**Scope:** Scope three
"""

NESTED_STORY = """\
### E04:S11:T01 – Task with nested detail

**Status:** IN PROGRESS

#### Implementation notes

Nested content belongs to T01.

#### More detail

Still part of T01.

### E04:S11:T02 – Next task

Body of T02.
"""

MINIMAL_STORY = """\
### E04:S11:T05 – Minimal task

Single line only.
"""

OVERVIEW_STORY = """\
# Epic 4 Story 11

## Strategic overview

Keep this section verbatim.

## Background

Also preserved.

### E04:S11:T01 – Only embedded task

**Deliverable:**
- One file

## Post-task section

Footer content stays.
"""


def test_extract_embedded_task_simple():
    tasks = extract_embedded_tasks(SIMPLE_STORY)
    assert len(tasks) == 1
    t = tasks[0]
    assert t.epic == 4 and t.story == 11 and t.task == 1
    assert t.title == "Catalog embedded tasks"
    assert "Migration plan" in t.input_text
    assert "Task inventory" in t.deliverable


def test_extract_embedded_task_multiple():
    tasks = extract_embedded_tasks(MULTI_STORY)
    assert len(tasks) == 3
    assert [t.task for t in tasks] == [1, 2, 3]
    assert tasks[0].title == "First task"
    assert tasks[2].title == "Third task"
    assert tasks[0].end_line == tasks[1].header_line
    assert tasks[1].end_line == tasks[2].header_line


def test_extract_handles_nested_sections():
    tasks = extract_embedded_tasks(NESTED_STORY)
    assert len(tasks) == 2
    t1 = tasks[0]
    assert "Implementation notes" in t1.body
    assert "Still part of T01" in t1.body
    assert "Body of T02" not in t1.body
    assert tasks[1].task == 2


def test_extract_handles_missing_fields():
    tasks = extract_embedded_tasks(MINIMAL_STORY)
    assert len(tasks) == 1
    t = tasks[0]
    assert t.scope == "[To be filled during migration]"
    assert t.input_text == "[To be filled during migration]"
    assert t.deliverable == "[To be filled during migration]"
    assert "Criterion to be defined" in t.acceptance_criteria


def test_generate_task_doc_required_fields():
    tasks = extract_embedded_tasks(SIMPLE_STORY)
    doc = render_task_document(tasks[0])
    for heading in ("## Scope", "## Input", "## Deliverable", "## Acceptance Criteria"):
        assert heading in doc
    assert "**Status:** TODO" in doc
    assert "## Version Anchor" in doc


def test_generate_task_doc_naming():
    tasks = extract_embedded_tasks(SIMPLE_STORY)
    assert task_doc_filename(tasks[0].task, tasks[0].title) == "T01-catalog-embedded-tasks.md"
    assert slugify_title("Catalog embedded tasks!") == "catalog-embedded-tasks"


def test_story_update_replaces_embedded():
    tasks = extract_embedded_tasks(SIMPLE_STORY)
    rel_paths = build_task_link_map(tasks)
    updated = update_story_refs(SIMPLE_STORY, tasks, rel_paths)
    assert "### E04:S11:T01" not in updated
    assert "**Input:**" not in updated
    assert "## Task Checklist" in updated
    assert "(T01-catalog-embedded-tasks.md)" in updated
    assert "E04:S11:T01" in updated


def test_story_update_preserves_non_task():
    tasks = extract_embedded_tasks(OVERVIEW_STORY)
    rel_paths = build_task_link_map(tasks)
    updated = update_story_refs(OVERVIEW_STORY, tasks, rel_paths)
    assert "## Strategic overview" in updated
    assert "Keep this section verbatim." in updated
    assert "## Background" in updated
    assert "## Post-task section" in updated
    assert "Footer content stays." in updated
    assert "### E04:S11:T01" not in updated


def test_validation_no_embedded_remaining(tmp_path):
    story = tmp_path / "story.md"
    story.write_text(SIMPLE_STORY, encoding="utf-8")
    report_before = validate_story_file(story)
    assert report_before.embedded_task_count == 1
    assert not report_before.ok

    tasks = extract_embedded_tasks(SIMPLE_STORY)
    out_dir = tmp_path / "tasks"
    for t in tasks:
        generate_task_doc(t, out_dir)
    rel_paths = {t.task: f"tasks/{task_doc_filename(t.task, t.title)}" for t in tasks}
    migrated = update_story_refs(SIMPLE_STORY, tasks, rel_paths)
    story.write_text(migrated, encoding="utf-8")

    report_after = validate_story_file(story)
    assert report_after.embedded_task_count == 0
    assert report_after.ok


def test_generate_writes_file(tmp_path):
    tasks = extract_embedded_tasks(SIMPLE_STORY)
    path = generate_task_doc(tasks[0], tmp_path)
    assert path.is_file()
    content = path.read_text(encoding="utf-8")
    assert "## Scope" in content


def test_migrate_story_orchestrator(tmp_path):
    """T9 — migrate_story end-to-end removes embedded sections."""
    story = tmp_path / "story.md"
    story.write_text(SIMPLE_STORY, encoding="utf-8")
    out_dir = tmp_path / "tasks"
    out_dir.mkdir()
    result = migrate_story(story, out_dir, task_subdir="tasks")
    assert result.tasks_migrated == [1]
    assert "### E04:S11:T01" not in story.read_text(encoding="utf-8")
    report = validate_story_file(story)
    assert report.embedded_task_count == 0


def test_validation_all_refs_valid(tmp_path):
    """T10 — migrated story has no broken task doc links."""
    story = tmp_path / "story.md"
    story.write_text(SIMPLE_STORY, encoding="utf-8")
    out_dir = tmp_path / "tasks"
    out_dir.mkdir()
    migrate_story(story, out_dir, task_subdir="tasks")
    report = validate_story_file(story)
    assert not report.broken_links
    assert report.ok


def test_rw_step1_locates_task_doc(tmp_path):
    """T11 — generated task doc exposes **Task ID:** for RW Step 1c discovery."""
    story = tmp_path / "story.md"
    story.write_text(SIMPLE_STORY, encoding="utf-8")
    out_dir = tmp_path / "tasks"
    out_dir.mkdir()
    migrate_story(story, out_dir, task_subdir="tasks")
    task_doc = next(out_dir.glob("T01-*.md"))
    content = task_doc.read_text(encoding="utf-8")
    assert "**Task ID:** E04:S11:T01" in content


def test_migration_idempotent(tmp_path):
    """T12 — second migrate_story run produces no duplicate task docs."""
    story = tmp_path / "story.md"
    story.write_text(SIMPLE_STORY, encoding="utf-8")
    out_dir = tmp_path / "tasks"
    out_dir.mkdir()
    first = migrate_story(story, out_dir, task_subdir="tasks")
    second = migrate_story(story, out_dir, task_subdir="tasks")
    assert first.tasks_migrated == [1]
    assert second.tasks_migrated == []
    assert len(list(out_dir.glob("T01-*.md"))) == 1

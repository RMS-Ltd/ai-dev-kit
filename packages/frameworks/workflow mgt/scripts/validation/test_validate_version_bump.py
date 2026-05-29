#!/usr/bin/env python3
"""
Tests for validate_version_bump.py - perpetual task support (E4:S14:T01).

Part of: E4:S14 - Kanban Framework Maintenance
Task: T01 - Update Packaged RW to Handle UKW Context and Perpetual Tasks
"""

import os
import sys
import tempfile
from pathlib import Path

# Add parent to path for imports
script_dir = Path(__file__).resolve().parent
if str(script_dir) not in sys.path:
    sys.path.insert(0, str(script_dir))

from validate_version_bump import (
    extract_task_id_canonical,
    is_perpetual_task,
    parse_requested_task_id,
    validate_task_doc_alignment,
    validate_task_doc_fields,
    validate_perpetual_guardrails,
    validate_version_bump,
)


# --- T1: Task ID extraction prefers canonical section ---
def test_task_id_extraction_prefers_canonical_section():
    """Extract E2:S16:T03 from doc with Progress 'E4:S16:T05' and canonical '**Value:** E2:S16:T03'."""
    content = """
**Progress:** UKW execution. Four completed tasks removed: E4:S16:T05, E4:S16:T06, E5:S01:T34, E5:S01:T37.

## Task ID
**Format:** E{epic}:S{story}:T{task}
**Value:** `E2:S16:T03`
"""
    result = extract_task_id_canonical(content)
    assert result is not None, "Should extract Task ID from canonical section"
    epic, story, task = result
    assert epic == 2 and story == 16 and task == 3, (
        f"Expected (2, 16, 3), got ({epic}, {story}, {task})"
    )


# --- T2: Perpetual task detection by task number ---
def test_perpetual_task_detection_by_task_number():
    """is_perpetual_task(101) returns True; is_perpetual_task(103) returns True; is_perpetual_task(5) returns False."""
    assert is_perpetual_task(101) is True
    assert is_perpetual_task(100) is True
    assert is_perpetual_task(103) is True  # T103 RW Maintenance
    assert is_perpetual_task(5) is False
    assert is_perpetual_task(99) is False


# --- T3: Perpetual task detection by doc content ---
def test_perpetual_task_detection_by_doc_content():
    """Doc with 'Task Type: Perpetual Maintenance' -> perpetual."""
    content = """
**Task Type:** Perpetual Maintenance
**Build Warning Suppression:** true
"""
    assert is_perpetual_task(5, content) is True
    assert is_perpetual_task(37, "perpetual_task: true\nOther text") is True


# --- T4: validate_version_bump passes for perpetual task ---
def test_validate_version_bump_passes_for_perpetual_task():
    """Temp version 0.6.7.101+31, temp T101 task doc, story file -> validation passes."""
    with tempfile.TemporaryDirectory() as tmpdir:
        tmp = Path(tmpdir)
        orig_cwd = os.getcwd()
        try:
            os.chdir(tmp)

            # Version file
            version_dir = tmp / "src" / "proj"
            version_dir.mkdir(parents=True)
            version_file = version_dir / "version.py"
            version_file.write_text("""
VERSION_RC = 0
VERSION_EPIC = 6
VERSION_STORY = 7
VERSION_TASK = 101
VERSION_BUILD = 31
VERSION_STRING = "0.6.7.101+31"
""")

            # rw-config
            (tmp / "rw-config.yaml").write_text("""
version_file: src/proj/version.py
use_kanban: true
kanban_root: docs/project-management/kanban
story_doc_pattern: epics/Epic-{epic}/Story-{story}-*.md
""")

            # Kanban layout: Epic-6/Story-007-.../T101-...
            story_dir = tmp / "docs" / "project-management" / "kanban" / "epics" / "Epic-6"
            story_dir.mkdir(parents=True)
            task_dir = story_dir / "Story-007-adk-implementation-analysis-and-package-management"
            task_dir.mkdir(parents=True)

            story_file = story_dir / "Story-007-adk-implementation-analysis-and-package-management.md"
            story_file.write_text("""
# Story 007 – ADK Implementation Analysis
**Code:** E6S07

## Task Checklist
- [ ] **E2:S16:T03** – Update Kanban Workflow (UKW) - IN PROGRESS (Perpetual)
""")

            task_file = task_dir / "T101-update-kanban-workflow-ukw.md"
            task_file.write_text("""
# Epic 6, Story 7, Task 101: Update Kanban Workflow (UKW)

**Status:** IN PROGRESS (Perpetual)
**Task Type:** Perpetual Maintenance
**Scope:** UKW synchronization work.

**Historical Anchor:** Legacy perpetual task ID T101 predates Story 016 canonical lanes. Retained for backward traceability.
**Perpetual Override Rationale:** Housed under Epic 6 for historical organizational reasons; all new perpetual work is canonical under E2:S16.

**Progress:** Completed tasks removed: E4:S16:T05, E4:S16:T06.

## Task ID
**Value:** `E6:S7:T101`

## Acceptance Criteria
- [x] Criterion one
""")

            config = {
                "version_file": "src/proj/version.py",
                "use_kanban": True,
                "kanban_root": "docs/project-management/kanban",
                "story_doc_pattern": "epics/Epic-{epic}/Story-{story}-*.md",
            }

            story_path = tmp / "docs" / "project-management" / "kanban" / "epics" / "Epic-6" / "Story-007-adk-implementation-analysis-and-package-management.md"
            is_valid, errors = validate_version_bump(
                version_file, story_file=story_path, config=config
            )
            assert is_valid, f"Validation should pass for perpetual task, errors: {errors}"
        finally:
            os.chdir(orig_cwd)


# --- T5: Perpetual task relaxed field validation ---
def test_perpetual_task_relaxed_field_validation():
    """T101 doc without Input/Deliverable -> no field errors when perpetual."""
    content = """
**Status:** IN PROGRESS (Perpetual)
**Task Type:** Perpetual Maintenance
**Scope:** UKW work.

## Task ID
**Value:** `E2:S16:T03`

## Acceptance Criteria
- [x] Criterion one
"""
    is_valid, errors = validate_task_doc_fields(
        content, 6, 7, 101, relax_for_perpetual=True
    )
    input_deliverable_errors = [e for e in errors if "input" in e.lower() or "deliverable" in e.lower()]
    assert len(input_deliverable_errors) == 0, (
        f"Perpetual task should not require Input/Deliverable: {errors}"
    )


# --- T6: validate_version_bump build increment for perpetual ---
def test_validate_version_bump_build_increment_perpetual():
    """Same task, BUILD+1 -> pass; BUILD=0 for perpetual with BUILD 31 should pass (same task)."""
    with tempfile.TemporaryDirectory() as tmpdir:
        tmp = Path(tmpdir)
        orig_cwd = os.getcwd()
        try:
            os.chdir(tmp)

            version_dir = tmp / "src" / "proj"
            version_dir.mkdir(parents=True)
            version_file = version_dir / "version.py"

            story_dir = tmp / "docs" / "project-management" / "kanban" / "epics" / "Epic-6"
            task_dir = story_dir / "Story-007-adk-implementation-analysis-and-package-management"
            task_dir.mkdir(parents=True)

            story_file = story_dir / "Story-007-adk-implementation-analysis-and-package-management.md"
            story_file.write_text("""
# Story 007
**Code:** E6S07
## Task Checklist
- [ ] **E2:S16:T03** – UKW - IN PROGRESS (Perpetual)
""")

            task_file = task_dir / "T101-ukw-build-increment.md"
            task_file.write_text("""
**Status:** IN PROGRESS (Perpetual)
**Task Type:** Perpetual Maintenance
**Scope:** UKW.
**Historical Anchor:** Legacy T101; canonical is E2:S16:T03.
**Perpetual Override Rationale:** Historical placement under E6:S7.
## Task ID
**Value:** `E6:S7:T101`
## Acceptance Criteria
- [x] One
""")

            # Same task, BUILD 32 (incremented) -> should pass
            version_file.write_text("""
VERSION_RC = 0
VERSION_EPIC = 6
VERSION_STORY = 7
VERSION_TASK = 101
VERSION_BUILD = 32
VERSION_STRING = "0.6.7.101+32"
""")
            config = {"use_kanban": True, "kanban_root": "docs/project-management/kanban"}
            is_valid, _ = validate_version_bump(version_file, story_file=story_file, config=config)
            assert is_valid, "BUILD 32 (incremented) for perpetual task should pass"
        finally:
            os.chdir(orig_cwd)


# --- T7: validate_version_bump passes for T103 (RW Maintenance perpetual task) ---
def test_validate_version_bump_passes_for_t103():
    """Version 0.6.7.103+1, T103 task doc, story checklist -> validation passes (E2:S16:T03 RW Maintenance)."""
    with tempfile.TemporaryDirectory() as tmpdir:
        tmp = Path(tmpdir)
        orig_cwd = os.getcwd()
        try:
            os.chdir(tmp)

            version_dir = tmp / "src" / "proj"
            version_dir.mkdir(parents=True)
            version_file = version_dir / "version.py"
            version_file.write_text("""
VERSION_RC = 0
VERSION_EPIC = 6
VERSION_STORY = 7
VERSION_TASK = 103
VERSION_BUILD = 1
VERSION_STRING = "0.6.7.103+1"
""")

            (tmp / "rw-config.yaml").write_text("""
version_file: src/proj/version.py
use_kanban: true
kanban_root: docs/project-management/kanban
story_doc_pattern: epics/Epic-{epic}/Story-{story}-*.md
""")

            story_dir = tmp / "docs" / "project-management" / "kanban" / "epics" / "Epic-6"
            story_dir.mkdir(parents=True)
            task_dir = story_dir / "Story-007-adk-implementation-analysis-and-package-management"
            task_dir.mkdir(parents=True)

            story_file = story_dir / "Story-007-adk-implementation-analysis-and-package-management.md"
            story_file.write_text("""
# Story 007 – ADK Implementation Analysis
**Code:** E6S07

## Task Checklist
- [ ] **E2:S16:T03** – Release Workflow (RW) Maintenance - IN PROGRESS (Perpetual)
""")

            task_file = task_dir / "T103-release-workflow-rw-maintenance.md"
            task_file.write_text("""
# Epic 6, Story 7, Task 103: Release Workflow (RW) Maintenance - Perpetual Task

**Status:** IN PROGRESS (Perpetual)
**Task Type:** Perpetual Maintenance
**Scope:** RW maintenance work (Step 7 fixes, validator updates, doc corrections).

**Historical Anchor:** Legacy T103; canonical is E2:S16:T03.
**Perpetual Override Rationale:** Historical placement under E6:S7.

## Task ID
**Value:** `E6:S7:T103`

## Acceptance Criteria
- [x] Criterion one
""")

            config = {
                "version_file": "src/proj/version.py",
                "use_kanban": True,
                "kanban_root": "docs/project-management/kanban",
                "story_doc_pattern": "epics/Epic-{epic}/Story-{story}-*.md",
            }

            story_path = tmp / "docs" / "project-management" / "kanban" / "epics" / "Epic-6" / "Story-007-adk-implementation-analysis-and-package-management.md"
            is_valid, errors = validate_version_bump(
                version_file, story_file=story_path, config=config
            )
            assert is_valid, f"Validation should pass for T103 (RW Maintenance), errors: {errors}"
        finally:
            os.chdir(orig_cwd)


def test_validate_version_bump_doc_policy_zero_allows_existing_t103_build_zero():
    """BUILD +0 with existing T103 doc passes when docs-only and --doc-policy-zero is set (BR-067)."""
    with tempfile.TemporaryDirectory() as tmpdir:
        tmp = Path(tmpdir)
        orig_cwd = os.getcwd()
        try:
            os.chdir(tmp)

            version_dir = tmp / "src" / "proj"
            version_dir.mkdir(parents=True)
            version_file = version_dir / "version.py"
            version_file.write_text("""
VERSION_RC = 0
VERSION_EPIC = 6
VERSION_STORY = 7
VERSION_TASK = 103
VERSION_BUILD = 0
VERSION_STRING = "0.6.7.103+0"
""")

            (tmp / "rw-config.yaml").write_text("""
version_file: src/proj/version.py
use_kanban: true
kanban_root: docs/project-management/kanban
story_doc_pattern: epics/Epic-{epic}/Story-{story}-*.md
""")

            story_dir = tmp / "docs" / "project-management" / "kanban" / "epics" / "Epic-6"
            story_dir.mkdir(parents=True)
            task_dir = story_dir / "Story-007-adk-implementation-analysis-and-package-management"
            task_dir.mkdir(parents=True)

            story_file = story_dir / "Story-007-adk-implementation-analysis-and-package-management.md"
            story_file.write_text("""
# Story 007 – ADK Implementation Analysis
**Code:** E6S07

## Task Checklist
- [ ] **E2:S16:T03** – Release Workflow (RW) Maintenance - IN PROGRESS (Perpetual)
""")

            task_file = task_dir / "T103-rw-maintenance-doc-policy.md"
            task_file.write_text("""
# Epic 6, Story 7, Task 103: Release Workflow (RW) Maintenance - Perpetual Task

**Status:** IN PROGRESS (Perpetual)
**Task Type:** Perpetual Maintenance

**Historical Anchor:** Legacy T103; canonical is E2:S16:T03.
**Perpetual Override Rationale:** Historical placement under E6:S7.

## Task ID
**Value:** `E6:S7:T103`

## Acceptance Criteria
- [x] Criterion one
""")

            # Create canonical T03 doc for --art adoption
            story2_dir = tmp / "docs" / "project-management" / "kanban" / "epics" / "Epic-2"
            story2_dir.mkdir(parents=True)
            task2_dir = story2_dir / "Story-016-perpetual-ongoing-workflow-operations"
            task2_dir.mkdir(parents=True)
            story2_file = story2_dir / "Story-016-perpetual-ongoing-workflow-operations.md"
            story2_file.write_text("""
# Story 016 – Perpetual Ongoing Workflow Operations
**Code:** E2S16

## Task Checklist
- [ ] **E2:S16:T03** – Workflow maintenance (Perpetual) - IN PROGRESS
""")
            task2_file = task2_dir / "T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md"
            task2_file.write_text("""
# Epic 2, Story 16, Task 3: Workflow maintenance (Perpetual)

**Status:** IN PROGRESS
**Task Type:** Perpetual Maintenance
**Scope:** Umbrella perpetual anchor for ad-hoc workflow maintenance.

## Task ID
**Value:** `E2:S16:T03`

## Acceptance Criteria
- [x] Criterion one
""")

            config = {
                "version_file": "src/proj/version.py",
                "use_kanban": True,
                "kanban_root": "docs/project-management/kanban",
                "story_doc_pattern": "epics/Epic-{epic}/Story-{story}-*.md",
            }

            story_path = tmp / "docs" / "project-management" / "kanban" / "epics" / "Epic-2" / "Story-016-perpetual-ongoing-workflow-operations.md"
            is_valid, errors = validate_version_bump(
                version_file,
                story_file=story_path,
                config=config,
                requested="E2:S16:T03",
                art=True,
                doc_policy_zero=True,
            )
            assert is_valid, f"doc-policy-zero should allow +0 for existing T103: {errors}"
        finally:
            os.chdir(orig_cwd)


def test_parse_requested_task_id_formats():
    assert parse_requested_task_id("E2S01T13") == (2, 1, 13)
    assert parse_requested_task_id("E2:S01:T13") == (2, 1, 13)
    assert parse_requested_task_id("nope") is None


def test_validate_version_bump_art_requires_task_alignment():
    """--art + requested E:S:T must align with the Task document's Task ID."""
    with tempfile.TemporaryDirectory() as tmpdir:
        tmp = Path(tmpdir)
        orig_cwd = os.getcwd()
        try:
            os.chdir(tmp)
            (tmp / "rw-config.yaml").write_text("""
version_file: src/proj/version.py
use_kanban: true
kanban_root: docs/project-management/kanban
story_doc_pattern: epics/Epic-{epic}/Story-{story}-*.md
""")
            version_dir = tmp / "src" / "proj"
            version_dir.mkdir(parents=True)
            version_file = version_dir / "version.py"
            version_file.write_text(
                "\n".join(
                    [
                        "VERSION_RC = 0",
                        "VERSION_EPIC = 2",
                        "VERSION_STORY = 1",
                        "VERSION_TASK = 10",
                        "VERSION_BUILD = 6",
                    ]
                )
            )

            story_dir = tmp / "docs" / "project-management" / "kanban" / "epics" / "Epic-2"
            task_dir = story_dir / "Story-001-test"
            task_dir.mkdir(parents=True)
            story_file = story_dir / "Story-001-test.md"
            story_file.write_text("- [x] **E2:S01:T13** - ✅ COMPLETE\n")
            task_file = task_dir / "T13-test.md"
            task_file.write_text(
                "\n".join(
                    [
                        "**Task ID:** E2:S01:T10",
                        "**Status:** COMPLETE",
                        "## Acceptance Criteria",
                        "- [x] Done",
                        "## Input",
                        "- i",
                        "## Deliverable",
                        "- d",
                        "## Scope",
                        "- s",
                    ]
                )
            )

            ok, errors = validate_version_bump(
                version_file,
                story_file=story_file,
                requested="E2:S01:T13",
                art=True,
                config={
                    "version_file": "src/proj/version.py",
                    "use_kanban": True,
                    "kanban_root": "docs/project-management/kanban",
                    "story_doc_pattern": "epics/Epic-{epic}/Story-{story}-*.md",
                },
            )
            assert not ok
            assert any("TASK ID MISMATCH" in e for e in errors)
        finally:
            os.chdir(orig_cwd)


def test_validate_perpetual_guardrails_rejects_outside_story_016_without_override():
    content = """
**Task ID:** E6:S07:T15
**Task Type:** Perpetual Maintenance
"""
    errors, warnings = validate_perpetual_guardrails(6, 7, 15, content)
    assert len(warnings) == 0
    assert any("Perpetual placement guardrail" in e for e in errors)


def test_validate_perpetual_guardrails_allows_override_outside_story_016():
    content = """
**Task ID:** E6:S07:T15
**Task Type:** Perpetual Maintenance
Perpetual Override Rationale: Legacy installer lane in transition.
"""
    errors, warnings = validate_perpetual_guardrails(6, 7, 15, content)
    assert errors == []
    assert warnings == []


def test_validate_perpetual_guardrails_rejects_t1xx_without_historical_anchor():
    content = """
**Task ID:** E2:S16:T103
**Task Type:** Perpetual Maintenance
"""
    errors, _ = validate_perpetual_guardrails(2, 16, 103, content)
    assert any("T1xx task IDs are legacy/historical-only" in e for e in errors)


def test_validate_perpetual_guardrails_warns_for_missing_marker_on_story_016_lane():
    content = """
**Task ID:** E2:S16:T03
**Status:** IN PROGRESS
"""
    errors, warnings = validate_perpetual_guardrails(2, 16, 3, content)
    assert errors == []
    assert any("expected to carry `Task Type: Perpetual Maintenance`" in w for w in warnings)


if __name__ == "__main__":
    import pytest
    sys.exit(pytest.main([__file__, "-v"]))

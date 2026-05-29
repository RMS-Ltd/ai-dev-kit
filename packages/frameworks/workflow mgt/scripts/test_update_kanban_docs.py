#!/usr/bin/env python3
"""
Test Suite for update_kanban_docs.py

This test suite validates the framework-agnostic Kanban update script
against the test matrix defined in T07 test plan.

Usage:
    python packages/frameworks/workflow mgt/scripts/test_update_kanban_docs.py [--test-category CATEGORY] [--verbose]

    --test-category: Run specific test category (1-6, or 'all')
    --verbose: Show detailed output
"""

import argparse
import importlib.util
import os
import shutil
import subprocess
import sys
import tempfile
import time
from pathlib import Path
from typing import Dict, List, Tuple

# Test results tracking
test_results = {
    'passed': [],
    'failed': [],
    'skipped': []
}


def run_test(test_name: str, setup_func, test_func, teardown_func=None) -> Tuple[bool, str]:
    """
    Run a single test case.
    
    Returns:
        (success, error_message)
    """
    test_dir = None
    try:
        # Setup
        test_dir = setup_func()
        
        # Run test
        success, error_msg = test_func(test_dir)
        
        # Teardown
        if teardown_func:
            teardown_func(test_dir)
        else:
            # Default: remove test directory
            if test_dir and os.path.exists(test_dir):
                shutil.rmtree(test_dir)
        
        return success, error_msg
    except Exception as e:
        if test_dir and os.path.exists(test_dir):
            shutil.rmtree(test_dir)
        return False, f"Test setup/teardown error: {e}"


def create_test_project(base_dir: Path, epic: int = 2, story: int = 8, task: int = 7) -> Dict[str, Path]:
    """Create a test project structure."""
    project = {
        'root': base_dir,
        'version_file': base_dir / 'src' / 'fynd_deals' / 'version.py',
        'story_doc': base_dir / 'docs' / 'project-management' / 'kanban' / 'epics' / f'Epic-{epic}' / f'Story-{story:03d}-test.md',
        'epic_doc': base_dir / 'docs' / 'project-management' / 'kanban' / 'epics' / f'Epic-{epic}' / f'Epic-{epic}.md',
    }
    
    # Create directories
    project['version_file'].parent.mkdir(parents=True, exist_ok=True)
    project['story_doc'].parent.mkdir(parents=True, exist_ok=True)
    project['epic_doc'].parent.mkdir(parents=True, exist_ok=True)
    
    return project


def create_version_file(version_file: Path, rc: int = 0, epic: int = 2, story: int = 8, task: int = 7, build: int = 1):
    """Create a test version file."""
    version_file.write_text(f"""VERSION_RC = {rc}
VERSION_EPIC = {epic}
VERSION_STORY = {story}
VERSION_TASK = {task}
VERSION_BUILD = {build}
""")


def create_story_doc(story_doc: Path, epic: int = 2, story: int = 8, task: int = 7, version: str = "v0.2.8.7+1", 
                     status: str = "IN PROGRESS", completed: bool = False, task_complete: bool = True,
                     last_updated: str = None):
    """Create a test Story doc."""
    completed_date = "2025-12-15" if completed else None
    task_status = "✅ COMPLETE" if task_complete else "- [ ]"
    task_version = f" ({version})" if task_complete else ""
    
    if last_updated is None:
        last_updated = f"2025-12-15 (v0.2.8.6+1 – T{task-1:02d} complete: Task)" if task > 1 else "2025-12-15"
    
    story_doc.write_text(f"""# Story {story:03d} – Test Story

**Status:** {status}
**Priority:** HIGH
**Created:** 2025-12-15
**Last updated:** {last_updated}
**Version:** {version}
{f"**Completed:** {completed_date}" if completed_date else ""}

## Task Checklist

- {task_status} **E{epic}:S{story}:T{task:02d} – Test Task**{task_version}
""")


def create_epic_doc(epic_doc: Path, epic: int = 2, story: int = 8, version: str = "v0.2.8.7+1"):
    """Create a test Epic doc."""
    epic_doc.write_text(f"""# Epic {epic} – Test Epic

**Status:** IN PROGRESS
**Created:** 2025-12-15
**Last updated:** 2025-12-15 ({version} – Story {story} Task 7 complete)

## Story Checklist

- [ ] **E{epic}:S{story}** – Test Story - IN PROGRESS ({version})
""")


def run_script(test_dir: Path, version_file: Path = None, dry_run: bool = False, 
               allow_override: bool = False) -> Tuple[int, str, str]:
    """Run the update_kanban_docs.py script."""
    script_path = (Path(__file__).parent / 'update_kanban_docs.py').resolve()
    
    cmd = ['python', str(script_path)]
    if version_file:
        cmd.extend(['--version-file', str(version_file)])
    if dry_run:
        cmd.append('--dry-run')
    if allow_override:
        cmd.append('--allow-override')
    
    # Change to test directory
    old_cwd = os.getcwd()
    os.chdir(test_dir)
    
    try:
        result = subprocess.run(
            cmd,
            capture_output=True,
            text=True,
            timeout=10
        )
        return result.returncode, result.stdout, result.stderr
    finally:
        os.chdir(old_cwd)


# Test Category 1: Canonical Flows
def test_1_1_normal_task_completion():
    """Test 1.1: Normal Task Completion"""
    def setup():
        test_dir = tempfile.mkdtemp()
        project = create_test_project(Path(test_dir))
        create_version_file(project['version_file'], task=7, build=1)
        create_story_doc(project['story_doc'], task=7, task_complete=True)
        create_epic_doc(project['epic_doc'], story=8)
        return test_dir
    
    def test(test_dir):
        project = create_test_project(Path(test_dir))
        exit_code, stdout, stderr = run_script(Path(test_dir), project['version_file'])
        
        if exit_code != 0:
            return False, f"Script failed with exit code {exit_code}\nstdout: {stdout}\nstderr: {stderr}"
        
        # Verify Story doc was updated
        story_content = project['story_doc'].read_text()
        if "v0.2.8.7+1" not in story_content:
            return False, "Story doc version not updated"
        
        # Verify Epic doc was updated
        epic_content = project['epic_doc'].read_text()
        if "v0.2.8.7+1" not in epic_content:
            return False, "Epic doc version not updated"
        
        return True, ""
    
    return run_test("Test 1.1: Normal Task Completion", setup, test)


def test_1_2_story_completion():
    """Test 1.2: Story Completion (All Tasks Complete)"""
    def setup():
        test_dir = tempfile.mkdtemp()
        project = create_test_project(Path(test_dir))
        create_version_file(project['version_file'], task=7, build=1)
        # Create Story doc with T7 already marked complete (script updates version markers)
        # All tasks complete - script should detect and mark story COMPLETE
        story_content = f"""# Story 008 – Test Story

**Status:** IN PROGRESS
**Priority:** HIGH
**Created:** 2025-12-15
**Last updated:** 2025-12-15 (v0.2.8.6+1 – T06 complete: Task)
**Version:** v0.2.8.6+1

## Task Checklist

- [x] **E2:S8:T1** ✅ COMPLETE (v0.2.8.1+1)
- [x] **E2:S8:T2** ✅ COMPLETE (v0.2.8.2+1)
- [x] **E2:S8:T3** ✅ COMPLETE (v0.2.8.3+1)
- [x] **E2:S8:T4** ✅ COMPLETE (v0.2.8.4+1)
- [x] **E2:S8:T5** ✅ COMPLETE (v0.2.8.5+1)
- [x] **E2:S8:T6** ✅ COMPLETE (v0.2.8.6+1)
- [x] **E2:S8:T7** ✅ COMPLETE (v0.2.8.7+1)
"""
        project['story_doc'].write_text(story_content)
        create_epic_doc(project['epic_doc'], story=8)
        return test_dir
    
    def test(test_dir):
        project = create_test_project(Path(test_dir))
        exit_code, stdout, stderr = run_script(Path(test_dir), project['version_file'])
        
        if exit_code != 0:
            return False, f"Script failed with exit code {exit_code}\nstdout: {stdout}\nstderr: {stderr}"
        
        # Verify Story marked COMPLETE (all tasks complete detected)
        story_content = project['story_doc'].read_text()
        if "**Status:** ✅ COMPLETE" not in story_content:
            return False, "Story not marked COMPLETE (all tasks complete should trigger story completion)"
        
        if "**Completed:**" not in story_content:
            return False, "Completed date not added for completed story"
        
        return True, ""
    
    return run_test("Test 1.2: Story Completion", setup, test)


# Test Category 2: Recoverable Flows
def test_2_1_missing_required_field():
    """Test 2.1: Missing Required Field (Recoverable)"""
    def setup():
        test_dir = tempfile.mkdtemp()
        project = create_test_project(Path(test_dir))
        create_version_file(project['version_file'], task=7, build=1)
        # Create Story doc missing Version field
        story_content = """# Story 008 – Test Story

**Status:** IN PROGRESS
**Last updated:** 2025-12-15

## Task Checklist

- [x] **E2:S8:T7** ✅ COMPLETE (v0.2.8.7+1)
"""
        project['story_doc'].write_text(story_content)
        create_epic_doc(project['epic_doc'], story=8)
        return test_dir
    
    def test(test_dir):
        project = create_test_project(Path(test_dir))
        exit_code, stdout, stderr = run_script(Path(test_dir), project['version_file'])
        
        if exit_code == 0:
            return False, "Script should have failed for missing required field"
        
        if "REQUIRED FIELD MISSING" not in stdout and "REQUIRED FIELD MISSING" not in stderr:
            return False, "Error message should identify missing required field"
        
        if "RECOVERY GUIDANCE" not in stdout:
            return False, "Recovery guidance should be provided"
        
        return True, ""
    
    return run_test("Test 2.1: Missing Required Field", setup, test)


def test_2_2_version_mismatch():
    """Test 2.2: Version Mismatch (Recoverable)"""
    def setup():
        test_dir = tempfile.mkdtemp()
        project = create_test_project(Path(test_dir))
        create_version_file(project['version_file'], task=7, build=1)
        # Create Story doc with wrong version
        create_story_doc(project['story_doc'], task=7, version="v0.2.8.6+1", task_complete=True)
        create_epic_doc(project['epic_doc'], story=8)
        return test_dir
    
    def test(test_dir):
        project = create_test_project(Path(test_dir))
        exit_code, stdout, stderr = run_script(Path(test_dir), project['version_file'])
        
        if exit_code == 0:
            return False, "Script should have failed for version mismatch"
        
        if "VERSION MISMATCH" not in stdout and "VERSION MISMATCH" not in stderr:
            return False, "Error message should identify version mismatch"
        
        return True, ""
    
    return run_test("Test 2.2: Version Mismatch", setup, test)


# Test Category 3: Hard-Fail Flows
def test_3_1_story_doc_missing():
    """Test 3.1: Story Doc Missing"""
    def setup():
        test_dir = tempfile.mkdtemp()
        project = create_test_project(Path(test_dir))
        create_version_file(project['version_file'], task=7, build=1)
        # Don't create Story doc
        create_epic_doc(project['epic_doc'], story=8)
        return test_dir
    
    def test(test_dir):
        project = create_test_project(Path(test_dir))
        exit_code, stdout, stderr = run_script(Path(test_dir), project['version_file'])
        
        if exit_code == 0:
            return False, "Script should have failed for missing Story doc"
        
        if "REQUIRED DOC MISSING" not in stdout and "REQUIRED DOC MISSING" not in stderr:
            return False, "Error message should identify missing doc"
        
        return True, ""
    
    return run_test("Test 3.1: Story Doc Missing", setup, test)


# Test Category 4: Edge Cases
def test_4_1_dry_run_mode():
    """Test 4.1: Dry-Run Mode"""
    def setup():
        test_dir = tempfile.mkdtemp()
        project = create_test_project(Path(test_dir))
        create_version_file(project['version_file'], task=7, build=1)
        create_story_doc(project['story_doc'], task=7, task_complete=True)
        create_epic_doc(project['epic_doc'], story=8)
        return test_dir
    
    def test(test_dir):
        project = create_test_project(Path(test_dir))
        original_story_content = project['story_doc'].read_text()
        
        exit_code, stdout, stderr = run_script(Path(test_dir), project['version_file'], dry_run=True)
        
        if exit_code != 0:
            return False, f"Dry-run should succeed, got exit code {exit_code}"
        
        # Verify files were NOT modified
        new_story_content = project['story_doc'].read_text()
        if original_story_content != new_story_content:
            return False, "Files should not be modified in dry-run mode"
        
        return True, ""
    
    return run_test("Test 4.1: Dry-Run Mode", setup, test)


def test_4_2_kanban_init_prunes_stale_completed_row():
    """Test 4.2: kanban_init prunes stale COMPLETE MoSCOW row for target task."""
    def setup():
        test_dir = tempfile.mkdtemp()
        board_path = Path(test_dir) / "kboard.md"
        board_path.write_text(
            """# Board

**Last Updated:** 2026-04-01 (RW: E2:S1:T9)
**Version:** v0.2.1.9+2

## MoSCOW Prioritized In-Progress Tasks

### Must Have (M) - Critical Tasks

- **E2:S01:T09** – stale row - ✅ COMPLETE (v0.2.1.9+2) | Last modified: 2026-04-01 10:00 UTC
- **E2:S01:T11** – active todo - TODO | Last modified: 2026-04-01 10:00 UTC
"""
        )
        return test_dir

    def test(test_dir):
        module_path = Path(__file__).parent / "update_kanban_docs.py"
        spec = importlib.util.spec_from_file_location("update_kanban_docs", module_path)
        mod = importlib.util.module_from_spec(spec)
        spec.loader.exec_module(mod)

        board_path = Path(test_dir) / "kboard.md"
        target_state = {"version_string": "v0.2.1.10+3", "mode": "kanban_init"}
        completion_state = {"is_complete": False}
        ok, changes = mod.update_kanban_board(
            board_path=board_path,
            epic=2,
            story=1,
            task=9,
            target_state=target_state,
            story_completion_state=completion_state,
            dry_run=False,
        )
        if not ok:
            return False, f"update_kanban_board failed: {changes}"

        updated = board_path.read_text()
        if "E2:S01:T09" in updated:
            return False, "Stale COMPLETE row for E2:S01:T09 was not pruned in kanban_init mode"
        if "E2:S01:T11" not in updated:
            return False, "Unrelated active row was incorrectly removed"
        if "v0.2.1.10+3" not in updated:
            return False, "Board metadata version was not updated"
        return True, ""

    return run_test("Test 4.2: kanban_init prune stale complete row", setup, test)


def test_4_3_fbuboard_reconciliation_prunes_and_keeps_exception():
    """Test 4.3: fbuboard reconciliation removes terminal rows but keeps unresolved exceptions."""
    def setup():
        test_dir = Path(tempfile.mkdtemp())
        kb_dir = test_dir / "docs" / "project-management" / "kanban"
        frbr_dir = kb_dir / "fr-br"
        frbr_dir.mkdir(parents=True, exist_ok=True)

        # Source docs
        (frbr_dir / "FR-900-terminal.md").write_text(
            "# FR-900\n\n**Status:** IMPLEMENTED\n",
            encoding="utf-8",
        )
        (frbr_dir / "BR-901-exception.md").write_text(
            "# BR-901\n\n**Status:** IN PROGRESS (product verification pending; linked task COMPLETE)\n",
            encoding="utf-8",
        )

        board = kb_dir / "fbuboard.md"
        board.write_text(
            """# FR Board

**Last Updated:** 2026-04-01 (old)

## MoSCOW Prioritized FR/BR/UXR Items

### Must Have (M) - Critical Items

- **FR-900** – terminal row - TODO - [FR-900](fr-br/FR-900-terminal.md) | Last modified: 2026-04-01 10:00 UTC
- **BR-901** – exception row - TODO - [BR-901](fr-br/BR-901-exception.md) | Last modified: 2026-03-28 09:41 UTC
""",
            encoding="utf-8",
        )
        (kb_dir / "kboard.md").write_text("# Kanban\n\n## MoSCOW Prioritized In-Progress Tasks\n", encoding="utf-8")
        return str(test_dir)

    def test(test_dir):
        module_path = Path(__file__).parent / "update_kanban_docs.py"
        spec = importlib.util.spec_from_file_location("update_kanban_docs", module_path)
        mod = importlib.util.module_from_spec(spec)
        spec.loader.exec_module(mod)

        changes = mod.enforce_terminal_timestamps_on_boards(Path(test_dir), dry_run=False)
        board = Path(test_dir) / "docs" / "project-management" / "kanban" / "fbuboard.md"
        updated = board.read_text(encoding="utf-8")

        if "FR-900" in updated:
            return False, "Terminal FR row should have been pruned from active section"
        if "BR-901" not in updated:
            return False, "Exception BR row should have been preserved in active section"
        if "Last modified: 2026-03-28 09:41 UTC" not in updated:
            return False, "Existing row timestamp should be preserved for exception row"
        if not any("fbuboard reconciliation:" in c for c in changes):
            return False, "Expected fbuboard reconciliation stats in change log"
        return True, ""

    return run_test("Test 4.3: fbuboard reconciliation", setup, test)


def test_4_4_full_mode_prunes_completed_rows_from_active_kboard():
    """Test 4.4: full mode prunes COMPLETE rows from active MoSCOW sections."""
    def setup():
        test_dir = tempfile.mkdtemp()
        board_path = Path(test_dir) / "kboard.md"
        board_path.write_text(
            """# Board

**Last Updated:** 2026-04-01 (RW: E2:S1:T9)
**Version:** v0.2.1.9+2

## MoSCOW Prioritized In-Progress Tasks

### Must Have (M) - Critical Tasks

- **E2:S01:T12** – completed row - ✅ COMPLETE (v0.2.1.12+2) | Last modified: 2026-04-01 10:00 UTC
- **E2:S01:T13** – active row - TODO | Last modified: 2026-04-01 10:00 UTC

### Should Have (S) - Important Tasks

- **E2:S02:T02** – completed row - COMPLETE ✅ (v0.2.2.2+1) | Last modified: 2026-04-01 10:00 UTC
- **E2:S02:T03** – active row - IN PROGRESS | Last modified: 2026-04-01 10:00 UTC
"""
        )
        return test_dir

    def test(test_dir):
        module_path = Path(__file__).parent / "update_kanban_docs.py"
        spec = importlib.util.spec_from_file_location("update_kanban_docs", module_path)
        mod = importlib.util.module_from_spec(spec)
        spec.loader.exec_module(mod)

        board_path = Path(test_dir) / "kboard.md"
        target_state = {"version_string": "v0.2.1.12+3", "mode": "full"}
        completion_state = {"is_complete": False}
        ok, changes = mod.update_kanban_board(
            board_path=board_path,
            epic=2,
            story=1,
            task=12,
            target_state=target_state,
            story_completion_state=completion_state,
            dry_run=False,
        )
        if not ok:
            return False, f"update_kanban_board failed: {changes}"

        updated = board_path.read_text()
        if "E2:S01:T12" in updated or "E2:S02:T02" in updated:
            return False, "COMPLETE rows should be pruned from active MoSCOW sections in full mode"
        if "E2:S01:T13" not in updated or "E2:S02:T03" not in updated:
            return False, "Active rows were incorrectly removed from kboard"
        if not any("Pruned COMPLETE rows from active kboard MoSCOW sections" in c for c in changes):
            return False, "Expected cleanup change message not emitted"
        return True, ""

    return run_test("Test 4.4: full-mode kboard prune complete rows", setup, test)


def test_4_5_touch_only_run_preserves_unique_moscow_timestamps():
    """Test 4.5: touch-only timestamp enforcement preserves existing unique row stamps."""
    def setup():
        test_dir = tempfile.mkdtemp()
        board_path = Path(test_dir) / "kboard.md"
        board_path.write_text(
            """# Board

**Last Updated:** 2026-04-01 (RW: E2:S1:T9)
**Version:** v0.2.1.9+2

## MoSCOW Prioritized In-Progress Tasks

### Must Have (M) - Critical Tasks

- **E2:S01:T11** – active row one - TODO | Last modified: 2026-04-01 10:00 UTC
- **E2:S01:T12** – active row two - IN PROGRESS | Last modified: 2026-03-15 08:30 UTC

### Should Have (S) - Important Tasks

- **E2:S02:T01** – active row three - TODO | Last modified: 2026-02-10 22:11 UTC
"""
        )
        return test_dir

    def test(test_dir):
        module_path = Path(__file__).parent / "update_kanban_docs.py"
        spec = importlib.util.spec_from_file_location("update_kanban_docs", module_path)
        mod = importlib.util.module_from_spec(spec)
        spec.loader.exec_module(mod)

        board_path = Path(test_dir) / "kboard.md"
        before = board_path.read_text()
        updated = mod.enforce_moscow_row_timestamps(before, "2026-04-20 16:00 UTC")
        if updated != before:
            return False, "Touch-only enforcement should not rewrite existing unique timestamps"
        return True, ""

    return run_test("Test 4.5: preserve unique timestamps on touch-only runs", setup, test)


def test_4_6_planning_artifact_resolution_prefers_ipp_over_ipw():
    """Test 4.6: planning artifact resolver prefers canonical IPP over legacy IPW."""
    def setup():
        test_dir = Path(tempfile.mkdtemp())
        planning_dir = test_dir / "docs" / "implementation-cycles"
        planning_dir.mkdir(parents=True, exist_ok=True)
        (planning_dir / "IPP-E4S19T04-canonical.md").write_text("# IPP", encoding="utf-8")
        (planning_dir / "IPW-E4S19T04-legacy.md").write_text("# IPW", encoding="utf-8")
        return str(test_dir)

    def test(test_dir):
        module_path = Path(__file__).parent / "update_kanban_docs.py"
        spec = importlib.util.spec_from_file_location("update_kanban_docs", module_path)
        mod = importlib.util.module_from_spec(spec)
        spec.loader.exec_module(mod)

        resolved = mod.resolve_planning_artifact_for_task("E4:S19:T04", Path(test_dir))
        if not resolved:
            return False, "Expected resolver to find canonical IPP artifact"
        if resolved.name != "IPP-E4S19T04-canonical.md":
            return False, f"Expected canonical IPP artifact, found: {resolved.name}"

        token = mod.render_ipp_segment_for_task("E4:S19:T04", Path(test_dir))
        if "[—IPP—](../../implementation-cycles/IPP-E4S19T04-canonical.md)" != token:
            return False, f"Unexpected IPP token rendering: {token}"
        return True, ""

    return run_test("Test 4.6: resolver prefers IPP", setup, test)


def test_4_7_planning_artifact_resolution_falls_back_to_ipw_or_none():
    """Test 4.7: resolver falls back to IPW, then plain No IPP token when absent."""
    def setup():
        test_dir = Path(tempfile.mkdtemp())
        planning_dir = test_dir / "docs" / "implementation-cycles"
        planning_dir.mkdir(parents=True, exist_ok=True)
        (planning_dir / "IPW-E6S07T15-legacy.md").write_text("# IPW", encoding="utf-8")
        return str(test_dir)

    def test(test_dir):
        module_path = Path(__file__).parent / "update_kanban_docs.py"
        spec = importlib.util.spec_from_file_location("update_kanban_docs", module_path)
        mod = importlib.util.module_from_spec(spec)
        spec.loader.exec_module(mod)

        resolved = mod.resolve_planning_artifact_for_task("E6:S7:T15", Path(test_dir))
        if not resolved or resolved.name != "IPW-E6S07T15-legacy.md":
            return False, f"Expected legacy IPW fallback artifact, found: {resolved}"

        token = mod.render_ipp_segment_for_task("E6:S7:T15", Path(test_dir))
        if "[—IPP—](../../implementation-cycles/IPW-E6S07T15-legacy.md)" != token:
            return False, f"Unexpected fallback IPP token rendering: {token}"

        no_artifact_token = mod.render_ipp_segment_for_task("E9:S9:T99", Path(test_dir))
        if no_artifact_token != "—No IPP—":
            return False, f"Expected plain no-artifact token, found: {no_artifact_token}"
        return True, ""

    return run_test("Test 4.7: resolver fallback to IPW/none", setup, test)


def test_4_8_traceability_segment_normalization_for_fbuboard_rows():
    """Test 4.8: fbuboard rows append deterministic FBU/task/IPP segments."""
    def setup():
        test_dir = Path(tempfile.mkdtemp())
        planning_dir = test_dir / "docs" / "implementation-cycles"
        planning_dir.mkdir(parents=True, exist_ok=True)
        (planning_dir / "IPP-E4S19T04-contract.md").write_text("# IPP", encoding="utf-8")
        return str(test_dir)

    def test(test_dir):
        module_path = Path(__file__).parent / "update_kanban_docs.py"
        spec = importlib.util.spec_from_file_location("update_kanban_docs", module_path)
        mod = importlib.util.module_from_spec(spec)
        spec.loader.exec_module(mod)

        line = (
            "- **UXR-010** – kboard/fbuboard add IPP segment - OPEN "
            "- [UXR-010](fr-br/UXR-010-kboard-fbuboard-add-ipp-column-after-fbu-and-task-links.md) "
            "| [E4:S19:T04](epics/Epic-4/Story-019-fr-br-uxr-abstract-governance-and-intake/"
            "T04-kboard-fbuboard-add-ipp-column-after-fbu-and-task-links-uxr010.md) "
            "| Last modified: 2026-04-20 21:35 UTC"
        )
        normalized = mod._normalize_traceability_segments_for_row(line, Path(test_dir))
        if "| [UXR-010](fr-br/UXR-010-kboard-fbuboard-add-ipp-column-after-fbu-and-task-links.md) | [E4:S19:T04](" not in normalized:
            return False, f"FBU/task token segment order not preserved: {normalized}"
        if "[—IPP—](../../implementation-cycles/IPP-E4S19T04-contract.md)" not in normalized:
            return False, f"Expected linked IPP token not found: {normalized}"
        return True, ""

    return run_test("Test 4.8: fbuboard traceability normalization", setup, test)


def test_4_9_duplicate_footer_dual_agreement_normalizes_to_single_oldest():
    """Test 4.9: duplicate footer with dual agreement normalizes to one canonical footer."""
    def setup():
        test_dir = tempfile.mkdtemp()
        return test_dir

    def test(test_dir):
        module_path = Path(__file__).parent / "update_kanban_docs.py"
        spec = importlib.util.spec_from_file_location("update_kanban_docs", module_path)
        mod = importlib.util.module_from_spec(spec)
        spec.loader.exec_module(mod)

        content = """## MoSCOW Prioritized In-Progress Tasks

### Must Have (M) - Critical Tasks

- **E2:S15:T03** – duplicate footer case - TODO | Last modified: 2026-04-20 10:00 UTC | Last modified: 2026-04-21 12:00 UTC
"""
        normalized, report = mod.reconcile_duplicate_moscow_row_footers(content)
        if report["rows_with_duplicate_footers"] != 1:
            return False, f"Expected one duplicate row, got {report}"
        if report["timestamp_order_divergence_rows"] != 0:
            return False, f"Did not expect divergence, got {report}"
        if normalized.count("Last modified:") != 1:
            return False, f"Expected one canonical footer after normalization, got: {normalized}"
        if "2026-04-20 10:00 UTC" not in normalized:
            return False, f"Expected oldest/first timestamp to be preserved, got: {normalized}"
        return True, ""

    return run_test("Test 4.9: dual-agreement normalization", setup, test)


def test_4_10_duplicate_footer_divergence_is_flagged_without_silent_normalization():
    """Test 4.10: oldest-time vs first-footer divergence is flagged and preserved."""
    def setup():
        test_dir = tempfile.mkdtemp()
        return test_dir

    def test(test_dir):
        module_path = Path(__file__).parent / "update_kanban_docs.py"
        spec = importlib.util.spec_from_file_location("update_kanban_docs", module_path)
        mod = importlib.util.module_from_spec(spec)
        spec.loader.exec_module(mod)

        content = """## MoSCOW Prioritized FR/BR/UXR Items

### Must Have (M) - Critical Items

- **BR-069** – divergence case - OPEN | Last modified: 2026-04-21 11:00 UTC | Last modified: 2026-04-20 09:00 UTC
"""
        normalized, report = mod.reconcile_duplicate_moscow_row_footers(content)
        if report["rows_with_duplicate_footers"] != 1:
            return False, f"Expected duplicate footer row count = 1, got {report}"
        if report["timestamp_order_divergence_rows"] != 1:
            return False, f"Expected divergence row count = 1, got {report}"
        if normalized.count("Last modified:") != 2:
            return False, "Divergence case should preserve both chunks for forensic visibility"
        return True, ""

    return run_test("Test 4.10: divergence detection without silent normalization", setup, test)


def test_4_11_single_footer_row_not_flagged_as_duplicate():
    """Test 4.11: valid single footer rows are not flagged or rewritten."""
    def setup():
        test_dir = tempfile.mkdtemp()
        return test_dir

    def test(test_dir):
        module_path = Path(__file__).parent / "update_kanban_docs.py"
        spec = importlib.util.spec_from_file_location("update_kanban_docs", module_path)
        mod = importlib.util.module_from_spec(spec)
        spec.loader.exec_module(mod)

        content = """## MoSCOW Prioritized In-Progress Tasks

### Should Have (S) - Important Tasks

- **E4:S19:T04** – valid row - IN PROGRESS | Last modified: 2026-04-19 07:30 UTC
"""
        normalized, report = mod.reconcile_duplicate_moscow_row_footers(content)
        if report["rows_with_duplicate_footers"] != 0 or report["timestamp_order_divergence_rows"] != 0:
            return False, f"Expected clean report for single footer row, got {report}"
        if normalized != content:
            return False, "Single-footer row should remain unchanged"
        return True, ""

    return run_test("Test 4.11: single footer baseline", setup, test)


def test_4_12_repeated_runs_do_not_walk_timestamp_forward_after_normalization():
    """Test 4.12: repeated runs remain stable after duplicate-footer reconciliation."""
    def setup():
        test_dir = tempfile.mkdtemp()
        return test_dir

    def test(test_dir):
        module_path = Path(__file__).parent / "update_kanban_docs.py"
        spec = importlib.util.spec_from_file_location("update_kanban_docs", module_path)
        mod = importlib.util.module_from_spec(spec)
        spec.loader.exec_module(mod)

        initial = """## MoSCOW Prioritized In-Progress Tasks

### Must Have (M) - Critical Tasks

- **E2:S15:T03** – repeated-run drift guardrail - TODO | Last modified: 2026-04-20 10:00 UTC | Last modified: 2026-04-21 12:00 UTC
"""
        first_pass, _ = mod.reconcile_duplicate_moscow_row_footers(initial)
        second_pass, second_report = mod.reconcile_duplicate_moscow_row_footers(first_pass)
        if first_pass != second_pass:
            return False, "Duplicate-footer reconciliation should be idempotent on repeated runs"
        if second_report["rows_with_duplicate_footers"] != 0:
            return False, f"Expected no duplicates after first normalization, got {second_report}"
        if "2026-04-20 10:00 UTC" not in second_pass:
            return False, "Expected earliest canonical timestamp to remain stable"
        return True, ""

    return run_test("Test 4.12: repeated-run drift prevention", setup, test)


def test_4_13_br069_pipeline_order_divergence_and_non_terminal_footer_append():
    """Phase 2 regression: unified pipeline order and terminal-footer preservation prevent BR-069 style synthetic second footer append."""
    def setup():
        test_dir = Path(tempfile.mkdtemp())
        planning_dir = test_dir / "docs" / "implementation-cycles"
        planning_dir.mkdir(parents=True, exist_ok=True)
        # No IPP on disk for E2:S15:T04 in fixture -> —No IPP—
        return str(test_dir)

    def test(test_dir):
        module_path = Path(__file__).parent / "update_kanban_docs.py"
        spec = importlib.util.spec_from_file_location("update_kanban_docs", module_path)
        mod = importlib.util.module_from_spec(spec)
        spec.loader.exec_module(mod)

        root = Path(test_dir)
        now = "2099-06-15 18:00 UTC"

        header = "## MoSCOW Priority\n\n### Must Have\n\n"
        dup_row = (
            '- **[BR-069](fr-br/BR-069.md)** – OPEN | '
            "[E2:S15:T04](epics/E2/T04.md) | [—IPP—](../../implementation-cycles/x.md) | "
            "Last modified: 2024-01-01 08:00 UTC | "
            "Last modified: 2026-04-21 10:00 UTC\n"
        )
        doc_dup = header + dup_row

        out_u, diag_u = mod.apply_canonical_row_transform_pipeline(
            board_content=doc_dup,
            project_root=root,
            timestamp_value=now,
            contract=mod.ROW_TRANSFORM_CONTRACT_RW_STEP7,
        )
        out_k, diag_k = mod.apply_canonical_row_transform_pipeline(
            board_content=doc_dup,
            project_root=root,
            timestamp_value=now,
            contract=mod.ROW_TRANSFORM_CONTRACT_STANDALONE,
        )
        if out_u != out_k:
            return False, "Expected unified RW/UKW contracts to produce identical output"
        if diag_u["executed_steps"] != diag_k["executed_steps"]:
            return False, "Expected unified contract step order between RW and standalone paths"

        single_row = (
            '- **[BR-069](fr-br/BR-069.md)** – OPEN | '
            "[E2:S15:T04](epics/E2/T04.md) | Last modified: 2024-06-01 09:00 UTC\n"
        )
        doc_single = header + single_row
        single_out, _ = mod.apply_canonical_row_transform_pipeline(
            board_content=doc_single,
            project_root=root,
            timestamp_value=now,
            contract=mod.ROW_TRANSFORM_CONTRACT_STANDALONE,
        )
        if single_out.count("Last modified:") != 1:
            return False, f"Expected a single Last modified footer after transform, got: {single_out!r}"
        if not single_out.rstrip().endswith("Last modified: 2024-06-01 09:00 UTC"):
            return False, "Expected historical footer to remain terminal after traceability normalization"

        return True, ""

    return run_test("Test 4.13: BR-069 pipeline order + double-footer append (documentary)", setup, test)


def test_4_14_phase1_canonical_entrypoint_exposes_contract_selected_order():
    """Test 4.14: shared canonical entrypoint exposes unified contract order."""
    def setup():
        test_dir = Path(tempfile.mkdtemp())
        planning_dir = test_dir / "docs" / "implementation-cycles"
        planning_dir.mkdir(parents=True, exist_ok=True)
        return str(test_dir)

    def test(test_dir):
        module_path = Path(__file__).parent / "update_kanban_docs.py"
        spec = importlib.util.spec_from_file_location("update_kanban_docs", module_path)
        mod = importlib.util.module_from_spec(spec)
        spec.loader.exec_module(mod)

        root = Path(test_dir)
        now = "2099-06-15 18:00 UTC"
        header = "## MoSCOW Priority\n\n### Must Have\n\n"
        row = (
            '- **[BR-069](fr-br/BR-069.md)** – OPEN | '
            "[E2:S15:T04](epics/E2/T04.md) | [—IPP—](../../implementation-cycles/x.md) | "
            "Last modified: 2024-01-01 08:00 UTC | "
            "Last modified: 2026-04-21 10:00 UTC\n"
        )
        content = header + row

        rw_out, rw_diag = mod.apply_canonical_row_transform_pipeline(
            board_content=content,
            project_root=root,
            timestamp_value=now,
            contract=mod.ROW_TRANSFORM_CONTRACT_RW_STEP7,
        )
        standalone_out, standalone_diag = mod.apply_canonical_row_transform_pipeline(
            board_content=content,
            project_root=root,
            timestamp_value=now,
            contract=mod.ROW_TRANSFORM_CONTRACT_STANDALONE,
        )

        if rw_diag["contract"] != "rw_step_7":
            return False, f"Expected rw_step_7 diagnostics contract, got {rw_diag['contract']}"
        if standalone_diag["contract"] != "standalone":
            return False, f"Expected standalone diagnostics contract, got {standalone_diag['contract']}"

        expected_rw_steps = ["traceability", "duplicate_footer_reconcile", "timestamp_enforce"]
        expected_standalone_steps = ["traceability", "duplicate_footer_reconcile", "timestamp_enforce"]
        if rw_diag["executed_steps"] != expected_rw_steps:
            return False, f"Unexpected rw_step_7 step order: {rw_diag['executed_steps']}"
        if standalone_diag["executed_steps"] != expected_standalone_steps:
            return False, f"Unexpected standalone step order: {standalone_diag['executed_steps']}"

        if rw_out != standalone_out:
            return False, "Expected unified contracts to produce identical output"

        return True, ""

    return run_test("Test 4.14: Phase 1 canonical entrypoint contract order", setup, test)


def test_4_15_phase3_parity_and_repeated_run_idempotency_matrix():
    """Test 4.15: parity + ordering + timestamp + dedup + idempotency across canonical fixtures."""
    def setup():
        test_dir = Path(tempfile.mkdtemp())
        planning_dir = test_dir / "docs" / "implementation-cycles"
        planning_dir.mkdir(parents=True, exist_ok=True)
        return str(test_dir)

    def test(test_dir):
        module_path = Path(__file__).parent / "update_kanban_docs.py"
        spec = importlib.util.spec_from_file_location("update_kanban_docs", module_path)
        mod = importlib.util.module_from_spec(spec)
        spec.loader.exec_module(mod)

        root = Path(test_dir)
        now = "2099-07-01 12:00 UTC"

        header = "## MoSCOW Priority\n\n### Must Have\n\n"
        fixture = (
            '- **[BR-069](fr-br/BR-069.md)** – OPEN | '
            "[E2:S15:T04](epics/E2/T04.md) | [—IPP—](../../implementation-cycles/x.md) | "
            "Last modified: 2024-01-01 08:00 UTC | Last modified: 2026-04-21 10:00 UTC\n"
            '- **[FR-090](fr-br/FR-090.md)** – IN PROGRESS | '
            "[E2:S15:T05](epics/E2/T05.md) | Last modified: 2025-02-01 09:30 UTC\n"
        )
        content = header + fixture

        rw_once, rw_diag = mod.apply_canonical_row_transform_pipeline(
            board_content=content,
            project_root=root,
            timestamp_value=now,
            contract=mod.ROW_TRANSFORM_CONTRACT_RW_STEP7,
        )
        standalone_once, standalone_diag = mod.apply_canonical_row_transform_pipeline(
            board_content=content,
            project_root=root,
            timestamp_value=now,
            contract=mod.ROW_TRANSFORM_CONTRACT_STANDALONE,
        )

        # Parity: both contexts should produce byte-identical canonical output.
        if rw_once != standalone_once:
            return False, "Expected RW and standalone canonical outputs to be identical"
        if rw_diag["executed_steps"] != standalone_diag["executed_steps"]:
            return False, "Expected identical step ordering diagnostics across contexts"

        # Dedup/timestamp correctness: first row should collapse to one (oldest) footer.
        if rw_once.count("2024-01-01 08:00 UTC") != 1:
            return False, "Expected oldest duplicate-footer timestamp to be preserved once"
        if "2026-04-21 10:00 UTC" in rw_once:
            return False, "Expected newer duplicate-footer timestamp to be removed during reconcile"

        # No synthetic append on already-terminal valid row.
        if rw_once.count("2025-02-01 09:30 UTC") != 1:
            return False, "Expected existing valid terminal footer to remain singular"

        # Idempotency: second run must be byte-stable and report no further duplicates.
        rw_twice, rw_diag_twice = mod.apply_canonical_row_transform_pipeline(
            board_content=rw_once,
            project_root=root,
            timestamp_value=now,
            contract=mod.ROW_TRANSFORM_CONTRACT_RW_STEP7,
        )
        if rw_twice != rw_once:
            return False, "Expected canonical output to be byte-stable on repeated run"
        if rw_diag_twice["dup_report"]["rows_with_duplicate_footers"] != 0:
            return False, f"Expected no duplicate-footer rows on second run: {rw_diag_twice['dup_report']}"

        return True, ""

    return run_test("Test 4.15: Phase 3 parity/idempotency matrix", setup, test)


def test_4_16_t04_phase_a_reproduction_harness_fixed_orders():
    """Test 4.16: T04 Phase A harness with fixed-order parity and minimal fixtures."""
    def setup():
        test_dir = Path(tempfile.mkdtemp())
        planning_dir = test_dir / "docs" / "implementation-cycles"
        planning_dir.mkdir(parents=True, exist_ok=True)
        return str(test_dir)

    def test(test_dir):
        module_path = Path(__file__).parent / "update_kanban_docs.py"
        spec = importlib.util.spec_from_file_location("update_kanban_docs", module_path)
        mod = importlib.util.module_from_spec(spec)
        spec.loader.exec_module(mod)

        root = Path(test_dir)
        now = "2099-08-01 12:00 UTC"
        header = "## MoSCOW Prioritized In-Progress Tasks\n\n### Should Have (S) - Important Tasks\n\n"

        def run_order_a(content: str) -> str:
            # update_kanban_board order in IPP §5
            normalized = mod.normalize_board_traceability_segments(content, root)
            reconciled, _ = mod.reconcile_duplicate_moscow_row_footers(normalized)
            return mod.enforce_moscow_row_timestamps(reconciled, now)

        def run_order_b(content: str) -> str:
            # enforce_terminal_timestamps_on_boards order in IPP §5 (non-fbuboard branch)
            reconciled, _ = mod.reconcile_duplicate_moscow_row_footers(content)
            normalized = mod.normalize_board_traceability_segments(reconciled, root)
            return mod.enforce_moscow_row_timestamps(normalized, now)

        fixtures = {
            "single_footer": (
                '- **[BR-069](fr-br/BR-069.md)** – OPEN | '
                "[E2:S15:T04](epics/E2/T04.md) | "
                "Last modified: 2024-06-01 09:00 UTC\n"
            ),
            "dual_footer_pass": (
                '- **[BR-069](fr-br/BR-069.md)** – OPEN | '
                "[E2:S15:T04](epics/E2/T04.md) | [—IPP—](../../implementation-cycles/x.md) | "
                "Last modified: 2024-01-01 08:00 UTC | "
                "Last modified: 2026-04-21 10:00 UTC\n"
            ),
            "dual_footer_divergence": (
                '- **[BR-069](fr-br/BR-069.md)** – OPEN | '
                "[E2:S15:T04](epics/E2/T04.md) | "
                "Last modified: 2026-04-21 10:00 UTC | "
                "Last modified: 2024-01-01 08:00 UTC\n"
            ),
            "fbu_task_ipp_shape": (
                '- **[BR-069](fr-br/BR-069.md)** – OPEN | '
                "[BR-069](fr-br/BR-069.md) | "
                "[E2:S15:T04](epics/E2/T04.md) | "
                "[—IPP—](../../implementation-cycles/x.md) | "
                "Last modified: 2024-06-01 09:00 UTC\n"
            ),
        }

        for fixture_name, row in fixtures.items():
            content = header + row
            out_a = run_order_a(content)
            out_b = run_order_b(content)
            if out_a != out_b:
                return False, f"Expected parity between documented orders for fixture '{fixture_name}'"

            if fixture_name == "single_footer":
                if out_a.count("Last modified:") != 1:
                    return False, "Single-footer fixture gained duplicate Last modified footer"
                if "Last modified: 2024-06-01 09:00 UTC" not in out_a:
                    return False, "Single-footer fixture did not preserve historical footer"

            if fixture_name == "fbu_task_ipp_shape":
                if out_a.count("[E2:S15:T04](epics/E2/T04.md)") != 1:
                    return False, "FBU/task/IPP fixture duplicated task link after normalization"

        return True, ""

    return run_test("Test 4.16: T04 Phase A reproduction harness", setup, test)


def test_4_17_phase_c_timestamp_suppression_metrics_idempotent():
    """Test 4.17: suppression metrics are explicit and stable on repeated clean runs."""
    def setup():
        test_dir = Path(tempfile.mkdtemp())
        return str(test_dir)

    def test(test_dir):
        module_path = Path(__file__).parent / "update_kanban_docs.py"
        spec = importlib.util.spec_from_file_location("update_kanban_docs", module_path)
        mod = importlib.util.module_from_spec(spec)
        spec.loader.exec_module(mod)

        now = "2099-09-01 12:00 UTC"
        header = "## MoSCOW Prioritized In-Progress Tasks\n\n### Should Have (S) - Important Tasks\n\n"
        clean_row = (
            "- **E2:S15:T04** – clean canonical row - IN PROGRESS | "
            "Last modified: 2024-06-01 09:00 UTC\n"
        )
        content = header + clean_row

        once, once_diag = mod.apply_canonical_row_transform_pipeline(
            board_content=content,
            project_root=Path(test_dir),
            timestamp_value=now,
            contract=mod.ROW_TRANSFORM_CONTRACT_STANDALONE,
        )
        twice, twice_diag = mod.apply_canonical_row_transform_pipeline(
            board_content=once,
            project_root=Path(test_dir),
            timestamp_value=now,
            contract=mod.ROW_TRANSFORM_CONTRACT_STANDALONE,
        )

        if once != twice:
            return False, "Expected clean canonical row to remain byte-identical on repeated run"

        if once_diag["dup_report"]["rows_with_duplicate_footers"] != 0:
            return False, "Expected zero duplicate-footer rows on clean row (first run)"
        if twice_diag["dup_report"]["rows_with_duplicate_footers"] != 0:
            return False, "Expected zero duplicate-footer rows on clean row (second run)"

        if once_diag["timestamp_report"]["timestamps_append_suppressed_existing_footer"] != 0:
            return False, "Expected zero suppressed-appends on clean terminal-footer row (first run)"
        if twice_diag["timestamp_report"]["timestamps_append_suppressed_existing_footer"] != 0:
            return False, "Expected zero suppressed-appends on clean terminal-footer row (second run)"

        if once_diag["timestamp_report"]["timestamps_appended_missing"] != 0:
            return False, "Expected zero appended-missing footers on clean row (first run)"
        if twice_diag["timestamp_report"]["timestamps_appended_missing"] != 0:
            return False, "Expected zero appended-missing footers on clean row (second run)"

        return True, ""

    return run_test("Test 4.17: Phase C suppression metrics idempotent", setup, test)


def test_4_18_four_surface_reconciliation_report_classifies_changes_and_resolves_paths():
    """Test 4.18: build_four_surface_report classifies changes by surface and resolves task/FBU/kboard/fbuboard paths."""
    def setup():
        test_dir = Path(tempfile.mkdtemp())
        kb_dir = test_dir / "docs" / "project-management" / "kanban"
        epic_dir = kb_dir / "epics" / "Epic-2"
        story_dir = epic_dir / "Story-015-ipw-governance-and-publication-contract"
        frbr_dir = kb_dir / "fr-br"
        for d in (epic_dir, story_dir, frbr_dir):
            d.mkdir(parents=True, exist_ok=True)
        (kb_dir / "kboard.md").write_text("# Kanban\n", encoding="utf-8")
        (kb_dir / "fbuboard.md").write_text("# FBU Board\n", encoding="utf-8")
        (story_dir / "T07-test-task.md").write_text(
            "# Task T07\n\n"
            "Upstream: [FR-092](../../../fr-br/FR-092-canonical-rw-ukw-kanban-consistency-program.md)\n",
            encoding="utf-8",
        )
        (frbr_dir / "FR-092-canonical-rw-ukw-kanban-consistency-program.md").write_text(
            "# FR-092\n", encoding="utf-8"
        )
        return str(test_dir)

    def test(test_dir):
        module_path = Path(__file__).parent / "update_kanban_docs.py"
        spec = importlib.util.spec_from_file_location("update_kanban_docs", module_path)
        mod = importlib.util.module_from_spec(spec)
        spec.loader.exec_module(mod)

        project_root = Path(test_dir)
        kb_dir = project_root / "docs" / "project-management" / "kanban"
        all_changes = [
            "Updated board Last Updated: 2026-04-27",
            "Enforced terminal row timestamps: kboard.md",
            "fbuboard reconciliation: audited=2, removed=1",
            "Updated Story doc: header version",
            "Epic doc: status mirror",
        ]
        report = mod.build_four_surface_report(
            invocation_context="rw_step_7",
            epic=2,
            story=15,
            task=7,
            version_string="v0.2.15.5+99",
            project_root=project_root,
            paths={
                "kanban_board": kb_dir / "kboard.md",
                "story_doc": kb_dir / "epics/Epic-2/Story-015-ipw-governance-and-publication-contract/T07-test-task.md",
            },
            all_changes=all_changes,
        )
        d = report.as_dict()

        if "kboard" not in d["summary"]["touched_surfaces"]:
            return False, f"Expected kboard touched, got: {d['summary']['touched_surfaces']}"
        if "fbuboard" not in d["summary"]["touched_surfaces"]:
            return False, f"Expected fbuboard touched, got: {d['summary']['touched_surfaces']}"

        task_paths = d["surfaces"]["task_doc"]["paths"]
        if not any("T07-test-task.md" in p for p in task_paths):
            return False, f"Expected task_doc resolution to find T07-test-task.md, got: {task_paths}"
        fbu_paths = d["surfaces"]["fbu_doc"]["paths"]
        if not any("FR-092" in p for p in fbu_paths):
            return False, f"Expected fbu_doc resolution to find FR-092, got: {fbu_paths}"

        if d["contract"] != "FR-092 / FR-091 (RW Step 7 self-sufficient four-surface reconciliation)":
            return False, f"Expected FR-092/FR-091 contract identifier, got: {d['contract']}"

        md_text = report.to_markdown()
        if "RW Step 7 four-surface reconciliation report" not in md_text:
            return False, "Markdown report should include canonical title"
        if "task_doc" not in md_text or "kboard" not in md_text or "fbuboard" not in md_text:
            return False, "Markdown report should enumerate all four surfaces"

        return True, ""

    return run_test("Test 4.18: four-surface reconciliation report", setup, test)


def test_4_20_fr092_wave4_b1_drift_eliminates_duplicate_inline_fbu_link():
    """Test 4.20: FR-092 Wave 4 (B1) — duplicate inline FBU/task link in row body is removed by canonical pipeline.

    Reproduction harness using the live-board pre-sweep fixture. Locks outcome
    parity for the regression that survived T05 sign-off (B1 drift).
    """
    def setup():
        test_dir = Path(tempfile.mkdtemp())
        kb_dir = test_dir / "docs" / "project-management" / "kanban"
        frbr_dir = kb_dir / "fr-br"
        epics_dir = kb_dir / "epics" / "Epic-2" / "Story-015-ipw-governance-and-publication-contract"
        for d in (frbr_dir, epics_dir):
            d.mkdir(parents=True, exist_ok=True)
        (frbr_dir / "FR-092-canonical-rw-ukw-kanban-consistency-program.md").write_text("# FR-092\n", encoding="utf-8")
        (frbr_dir / "BR-069-kboard-fbuboard-earliest-last-modified-timestamps-overwritten.md").write_text("# BR-069\n", encoding="utf-8")
        (frbr_dir / "FR-090-ukw-canonical-row-transform-engine-and-board-specific-rendering-contracts.md").write_text("# FR-090\n", encoding="utf-8")
        (epics_dir / "T07-canonical-rw-ukw-kanban-consistency-program-fr092.md").write_text("# T07\n", encoding="utf-8")
        (epics_dir / "T04-investigate-earliest-last-modified-timestamp-overwrite-regression-br069.md").write_text("# T04\n", encoding="utf-8")
        fixture_src = Path(__file__).parent / "fixtures" / "fr092_wave4" / "fbuboard_pre_corpus_sweep.md"
        (kb_dir / "fbuboard.md").write_text(fixture_src.read_text(encoding="utf-8"), encoding="utf-8")
        (kb_dir / "kboard.md").write_text("# kboard\n\n## MoSCOW Prioritized In-Progress Tasks\n", encoding="utf-8")
        return str(test_dir)

    def test(test_dir):
        module_path = Path(__file__).parent / "update_kanban_docs.py"
        spec = importlib.util.spec_from_file_location("update_kanban_docs", module_path)
        mod = importlib.util.module_from_spec(spec)
        spec.loader.exec_module(mod)

        project_root = Path(test_dir)
        board_path = project_root / "docs" / "project-management" / "kanban" / "fbuboard.md"
        before = board_path.read_text(encoding="utf-8")

        for fbu_id in ("FR-092", "BR-069", "FR-090"):
            inline_count = before.count(f"[{fbu_id}](fr-br/{fbu_id}-")
            if inline_count < 2:
                return False, f"Pre-condition failed: expected duplicate {fbu_id} inline link in fixture, got count={inline_count}"

        changes, sweep_report = mod.run_corpus_canonical_sweep(project_root, dry_run=False)
        after = board_path.read_text(encoding="utf-8")

        for fbu_id in ("FR-092", "BR-069", "FR-090"):
            inline_count = after.count(f"[{fbu_id}](fr-br/{fbu_id}-")
            if inline_count != 1:
                return False, f"Expected exactly one canonical {fbu_id} link after sweep, got count={inline_count}"

        if "| | " in after:
            return False, "Expected empty `| |` separator between IPP and Last modified to be normalized away"

        changes2, sweep_report2 = mod.run_corpus_canonical_sweep(project_root, dry_run=False)
        after2 = board_path.read_text(encoding="utf-8")
        if after != after2:
            return False, "Sweep must be idempotent: second pass produced different output"

        for board in sweep_report["boards"]:
            if board["path"].endswith("fbuboard.md"):
                if board["rows_changed"] == 0:
                    return False, "Expected fbuboard rows_changed > 0 in first sweep"
                break
        else:
            return False, "Expected fbuboard.md entry in sweep_report"

        for board in sweep_report2["boards"]:
            if board["path"].endswith("fbuboard.md"):
                if board["rows_changed"] != 0:
                    return False, f"Expected fbuboard rows_changed == 0 in second (idempotent) sweep, got {board['rows_changed']}"
                break

        return True, ""

    return run_test("Test 4.20: FR-092 Wave 4 B1 drift fix", setup, test)


def test_4_19_four_surface_report_persists_to_changelog_archive():
    """Test 4.19: write_four_surface_report writes JSON + Markdown artifacts to provided directory."""
    def setup():
        return tempfile.mkdtemp()

    def test(test_dir):
        module_path = Path(__file__).parent / "update_kanban_docs.py"
        spec = importlib.util.spec_from_file_location("update_kanban_docs", module_path)
        mod = importlib.util.module_from_spec(spec)
        spec.loader.exec_module(mod)

        out_dir = Path(test_dir) / "out"
        report = mod.build_four_surface_report(
            invocation_context="rw_step_7",
            epic=2,
            story=15,
            task=7,
            version_string="v0.2.15.5+99",
            project_root=Path(test_dir),
            paths={},
            all_changes=["Enforced terminal row timestamps: kboard.md"],
        )
        written = mod.write_four_surface_report(report, out_dir)
        if len(written) != 2:
            return False, f"Expected 2 artifacts (json + md), got {len(written)}: {written}"
        json_files = [p for p in written if p.suffix == ".json"]
        md_files = [p for p in written if p.suffix == ".md"]
        if not json_files or not md_files:
            return False, f"Expected one .json and one .md, got: {written}"
        json_text = json_files[0].read_text()
        if "FR-092" not in json_text:
            return False, "JSON report should reference FR-092 contract identifier"
        if "v0.2.15.5+99" not in json_text:
            return False, "JSON report should embed version string"
        md_text = md_files[0].read_text()
        if "## Touched-surface summary" not in md_text:
            return False, "Markdown report should include Touched-surface summary section"
        return True, ""

    return run_test("Test 4.19: four-surface report persistence", setup, test)


# Test Category 5: Performance
def test_5_1_performance():
    """Test 5.1: Typical Project Performance"""
    def setup():
        test_dir = tempfile.mkdtemp()
        project = create_test_project(Path(test_dir))
        create_version_file(project['version_file'], task=7, build=1)
        create_story_doc(project['story_doc'], task=7, task_complete=True)
        create_epic_doc(project['epic_doc'], story=8)
        return test_dir
    
    def test(test_dir):
        project = create_test_project(Path(test_dir))
        
        start_time = time.time()
        exit_code, stdout, stderr = run_script(Path(test_dir), project['version_file'])
        elapsed_time = time.time() - start_time
        
        if exit_code != 0:
            return False, f"Script failed with exit code {exit_code}"
        
        if elapsed_time > 5.0:
            return False, f"Performance test failed: {elapsed_time:.2f}s > 5s"
        
        return True, f"Performance: {elapsed_time:.2f}s"
    
    return run_test("Test 5.1: Performance", setup, test)


def main():
    parser = argparse.ArgumentParser(description="Test suite for update_kanban_docs.py")
    parser.add_argument(
        "--test-category",
        type=str,
        default="all",
        help="Test category to run (1-6, or 'all')",
    )
    parser.add_argument(
        "--verbose",
        action="store_true",
        help="Show detailed output",
    )
    args = parser.parse_args()
    
    print("🧪 Running Step 7 Hardening Test Suite")
    print("=" * 80)
    
    # Category 1: Canonical Flows
    if args.test_category in ['1', 'all']:
        print("\n📋 Category 1: Purely Canonical Flows")
        print("-" * 80)
        success, error = test_1_1_normal_task_completion()
        if success:
            print("✅ Test 1.1: Normal Task Completion - PASSED")
            test_results['passed'].append("1.1")
        else:
            print(f"❌ Test 1.1: Normal Task Completion - FAILED: {error}")
            test_results['failed'].append("1.1")
        
        success, error = test_1_2_story_completion()
        if success:
            print("✅ Test 1.2: Story Completion - PASSED")
            test_results['passed'].append("1.2")
        else:
            print(f"❌ Test 1.2: Story Completion - FAILED: {error}")
            test_results['failed'].append("1.2")
    
    # Category 2: Recoverable Flows
    if args.test_category in ['2', 'all']:
        print("\n📋 Category 2: Non-Canonical but Recoverable Flows")
        print("-" * 80)
        success, error = test_2_1_missing_required_field()
        if success:
            print("✅ Test 2.1: Missing Required Field - PASSED")
            test_results['passed'].append("2.1")
        else:
            print(f"❌ Test 2.1: Missing Required Field - FAILED: {error}")
            test_results['failed'].append("2.1")
        
        success, error = test_2_2_version_mismatch()
        if success:
            print("✅ Test 2.2: Version Mismatch - PASSED")
            test_results['passed'].append("2.2")
        else:
            print(f"❌ Test 2.2: Version Mismatch - FAILED: {error}")
            test_results['failed'].append("2.2")
    
    # Category 3: Hard-Fail Flows
    if args.test_category in ['3', 'all']:
        print("\n📋 Category 3: Hard-Fail Flows")
        print("-" * 80)
        success, error = test_3_1_story_doc_missing()
        if success:
            print("✅ Test 3.1: Story Doc Missing - PASSED")
            test_results['passed'].append("3.1")
        else:
            print(f"❌ Test 3.1: Story Doc Missing - FAILED: {error}")
            test_results['failed'].append("3.1")
    
    # Category 4: Edge Cases
    if args.test_category in ['4', 'all']:
        print("\n📋 Category 4: Edge Cases")
        print("-" * 80)
        success, error = test_4_1_dry_run_mode()
        if success:
            print("✅ Test 4.1: Dry-Run Mode - PASSED")
            test_results['passed'].append("4.1")
        else:
            print(f"❌ Test 4.1: Dry-Run Mode - FAILED: {error}")
            test_results['failed'].append("4.1")

        success, error = test_4_2_kanban_init_prunes_stale_completed_row()
        if success:
            print("✅ Test 4.2: kanban_init prune stale complete row - PASSED")
            test_results['passed'].append("4.2")
        else:
            print(f"❌ Test 4.2: kanban_init prune stale complete row - FAILED: {error}")
            test_results['failed'].append("4.2")

        success, error = test_4_3_fbuboard_reconciliation_prunes_and_keeps_exception()
        if success:
            print("✅ Test 4.3: fbuboard reconciliation - PASSED")
            test_results['passed'].append("4.3")
        else:
            print(f"❌ Test 4.3: fbuboard reconciliation - FAILED: {error}")
            test_results['failed'].append("4.3")

        success, error = test_4_4_full_mode_prunes_completed_rows_from_active_kboard()
        if success:
            print("✅ Test 4.4: full-mode kboard prune complete rows - PASSED")
            test_results['passed'].append("4.4")
        else:
            print(f"❌ Test 4.4: full-mode kboard prune complete rows - FAILED: {error}")
            test_results['failed'].append("4.4")

        success, error = test_4_5_touch_only_run_preserves_unique_moscow_timestamps()
        if success:
            print("✅ Test 4.5: preserve unique timestamps on touch-only runs - PASSED")
            test_results['passed'].append("4.5")
        else:
            print(f"❌ Test 4.5: preserve unique timestamps on touch-only runs - FAILED: {error}")
            test_results['failed'].append("4.5")

        success, error = test_4_6_planning_artifact_resolution_prefers_ipp_over_ipw()
        if success:
            print("✅ Test 4.6: resolver prefers IPP - PASSED")
            test_results['passed'].append("4.6")
        else:
            print(f"❌ Test 4.6: resolver prefers IPP - FAILED: {error}")
            test_results['failed'].append("4.6")

        success, error = test_4_7_planning_artifact_resolution_falls_back_to_ipw_or_none()
        if success:
            print("✅ Test 4.7: resolver fallback to IPW/none - PASSED")
            test_results['passed'].append("4.7")
        else:
            print(f"❌ Test 4.7: resolver fallback to IPW/none - FAILED: {error}")
            test_results['failed'].append("4.7")

        success, error = test_4_8_traceability_segment_normalization_for_fbuboard_rows()
        if success:
            print("✅ Test 4.8: fbuboard traceability normalization - PASSED")
            test_results['passed'].append("4.8")
        else:
            print(f"❌ Test 4.8: fbuboard traceability normalization - FAILED: {error}")
            test_results['failed'].append("4.8")

        success, error = test_4_9_duplicate_footer_dual_agreement_normalizes_to_single_oldest()
        if success:
            print("✅ Test 4.9: dual-agreement normalization - PASSED")
            test_results['passed'].append("4.9")
        else:
            print(f"❌ Test 4.9: dual-agreement normalization - FAILED: {error}")
            test_results['failed'].append("4.9")

        success, error = test_4_10_duplicate_footer_divergence_is_flagged_without_silent_normalization()
        if success:
            print("✅ Test 4.10: divergence detection without silent normalization - PASSED")
            test_results['passed'].append("4.10")
        else:
            print(f"❌ Test 4.10: divergence detection without silent normalization - FAILED: {error}")
            test_results['failed'].append("4.10")

        success, error = test_4_11_single_footer_row_not_flagged_as_duplicate()
        if success:
            print("✅ Test 4.11: single footer baseline - PASSED")
            test_results['passed'].append("4.11")
        else:
            print(f"❌ Test 4.11: single footer baseline - FAILED: {error}")
            test_results['failed'].append("4.11")

        success, error = test_4_12_repeated_runs_do_not_walk_timestamp_forward_after_normalization()
        if success:
            print("✅ Test 4.12: repeated-run drift prevention - PASSED")
            test_results['passed'].append("4.12")
        else:
            print(f"❌ Test 4.12: repeated-run drift prevention - FAILED: {error}")
            test_results['failed'].append("4.12")

        success, error = test_4_13_br069_pipeline_order_divergence_and_non_terminal_footer_append()
        if success:
            print("✅ Test 4.13: BR-069 pipeline order + double-footer append - PASSED")
            test_results['passed'].append("4.13")
        else:
            print(f"❌ Test 4.13: BR-069 pipeline order + double-footer append - FAILED: {error}")
            test_results['failed'].append("4.13")

        success, error = test_4_14_phase1_canonical_entrypoint_exposes_contract_selected_order()
        if success:
            print("✅ Test 4.14: Phase 1 canonical entrypoint contract order - PASSED")
            test_results['passed'].append("4.14")
        else:
            print(f"❌ Test 4.14: Phase 1 canonical entrypoint contract order - FAILED: {error}")
            test_results['failed'].append("4.14")

        success, error = test_4_15_phase3_parity_and_repeated_run_idempotency_matrix()
        if success:
            print("✅ Test 4.15: Phase 3 parity/idempotency matrix - PASSED")
            test_results['passed'].append("4.15")
        else:
            print(f"❌ Test 4.15: Phase 3 parity/idempotency matrix - FAILED: {error}")
            test_results['failed'].append("4.15")

        success, error = test_4_16_t04_phase_a_reproduction_harness_fixed_orders()
        if success:
            print("✅ Test 4.16: T04 Phase A reproduction harness - PASSED")
            test_results['passed'].append("4.16")
        else:
            print(f"❌ Test 4.16: T04 Phase A reproduction harness - FAILED: {error}")
            test_results['failed'].append("4.16")

        success, error = test_4_17_phase_c_timestamp_suppression_metrics_idempotent()
        if success:
            print("✅ Test 4.17: Phase C suppression metrics idempotent - PASSED")
            test_results['passed'].append("4.17")
        else:
            print(f"❌ Test 4.17: Phase C suppression metrics idempotent - FAILED: {error}")
            test_results['failed'].append("4.17")

        success, error = test_4_18_four_surface_reconciliation_report_classifies_changes_and_resolves_paths()
        if success:
            print("✅ Test 4.18: four-surface reconciliation report - PASSED")
            test_results['passed'].append("4.18")
        else:
            print(f"❌ Test 4.18: four-surface reconciliation report - FAILED: {error}")
            test_results['failed'].append("4.18")

        success, error = test_4_19_four_surface_report_persists_to_changelog_archive()
        if success:
            print("✅ Test 4.19: four-surface report persistence - PASSED")
            test_results['passed'].append("4.19")
        else:
            print(f"❌ Test 4.19: four-surface report persistence - FAILED: {error}")
            test_results['failed'].append("4.19")

        success, error = test_4_20_fr092_wave4_b1_drift_eliminates_duplicate_inline_fbu_link()
        if success:
            print("✅ Test 4.20: FR-092 Wave 4 B1 drift fix - PASSED")
            test_results['passed'].append("4.20")
        else:
            print(f"❌ Test 4.20: FR-092 Wave 4 B1 drift fix - FAILED: {error}")
            test_results['failed'].append("4.20")

    # Category 5: Performance
    if args.test_category in ['5', 'all']:
        print("\n📋 Category 5: Performance Testing")
        print("-" * 80)
        success, error = test_5_1_performance()
        if success:
            print(f"✅ Test 5.1: Performance - PASSED ({error})")
            test_results['passed'].append("5.1")
        else:
            print(f"❌ Test 5.1: Performance - FAILED: {error}")
            test_results['failed'].append("5.1")
    
    # Summary
    print("\n" + "=" * 80)
    print("📊 Test Summary")
    print("=" * 80)
    print(f"✅ Passed: {len(test_results['passed'])}")
    print(f"❌ Failed: {len(test_results['failed'])}")
    print(f"⏭️  Skipped: {len(test_results['skipped'])}")
    
    if test_results['failed']:
        print(f"\n❌ Failed Tests: {', '.join(test_results['failed'])}")
        sys.exit(1)
    else:
        print("\n✅ All tests passed!")
        sys.exit(0)


if __name__ == "__main__":
    main()

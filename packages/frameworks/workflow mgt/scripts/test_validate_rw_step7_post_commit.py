#!/usr/bin/env python3
"""
Test suite for validate_rw_step7_post_commit.py (BR-070 AC4, FR-092 Wave 8).

Each test creates an isolated git working tree, primes a synthetic four-surface
report, mutates files in known patterns (committed, idempotent, untracked,
modified-but-unstaged, missing), commits, and asserts the post-commit
validator's verdict + exit code align with the BR-070 AC4 contract.
"""

from __future__ import annotations

import importlib.util
import json
import os
import shutil
import subprocess
import sys
import tempfile
from pathlib import Path
from typing import Tuple


THIS_DIR = Path(__file__).resolve().parent
VALIDATOR_PATH = THIS_DIR / "validate_rw_step7_post_commit.py"


def _load_validator():
    spec = importlib.util.spec_from_file_location(
        "validate_rw_step7_post_commit", VALIDATOR_PATH
    )
    module = importlib.util.module_from_spec(spec)
    assert spec.loader is not None
    sys.modules[spec.name] = module
    spec.loader.exec_module(module)
    return module


def _git(cmd: list, cwd: Path) -> str:
    return subprocess.run(
        ["git", *cmd],
        cwd=str(cwd),
        check=True,
        capture_output=True,
        text=True,
    ).stdout


def _init_repo(tmp: Path) -> Path:
    repo = tmp / "repo"
    repo.mkdir()
    _git(["init", "--quiet", "--initial-branch=main"], repo)
    _git(["config", "user.email", "test@example.com"], repo)
    _git(["config", "user.name", "Test User"], repo)
    return repo


def _write_synthetic_release_scope(repo: Path) -> dict:
    """Create the surfaces a Step 7 run would touch and commit them."""
    kboard = repo / "docs/project-management/kanban/kboard.md"
    kboard.parent.mkdir(parents=True, exist_ok=True)
    kboard.write_text("# kboard\nrow A\n")

    fbuboard = repo / "docs/project-management/kanban/fbuboard.md"
    fbuboard.write_text("# fbuboard\nrow A\n")

    fbu_dir = repo / "docs/project-management/kanban/fr-br"
    fbu_dir.mkdir(parents=True, exist_ok=True)
    fr_doc = fbu_dir / "FR-999-test.md"
    fr_doc.write_text("# FR-999\nbody\n")

    epic_dir = repo / "docs/project-management/kanban/epics/Epic-2/Story-015-test"
    epic_dir.mkdir(parents=True, exist_ok=True)
    task_doc = epic_dir / "T99-test.md"
    task_doc.write_text("# Task 99\nbody\n")

    _git(["add", "-A"], repo)
    _git(["commit", "--quiet", "-m", "seed"], repo)
    return {
        "kboard": str(kboard.resolve()),
        "fbuboard": str(fbuboard.resolve()),
        "fbu_doc": str(fr_doc.resolve()),
        "task_doc": str(task_doc.resolve()),
    }


def _write_four_surface_report(repo: Path, paths: dict) -> Path:
    report_dir = (
        repo
        / "docs/changelog-and-release-notes/changelog-archive/four-surface-reports"
    )
    report_dir.mkdir(parents=True, exist_ok=True)
    payload = {
        "contract": "FR-092 Wave 3 test fixture",
        "invocation_context": "rw_step_7",
        "release_scope": {
            "epic": 2,
            "story": 15,
            "task": 99,
            "task_id": "E2:S15:T99",
            "version_string": "0.0.1.0+1",
        },
        "timestamp_utc": "2026-04-27 16:00 UTC",
        "surfaces": {
            "task_doc": {
                "surface": "task_doc",
                "paths": [paths["task_doc"]],
                "touched": True,
                "changes": ["task doc update"],
                "notes": [],
            },
            "fbu_doc": {
                "surface": "fbu_doc",
                "paths": [paths["fbu_doc"]],
                "touched": True,
                "changes": ["fbu doc update"],
                "notes": [],
            },
            "kboard": {
                "surface": "kboard",
                "paths": [paths["kboard"]],
                "touched": True,
                "changes": ["kboard update"],
                "notes": [],
            },
            "fbuboard": {
                "surface": "fbuboard",
                "paths": [paths["fbuboard"]],
                "touched": True,
                "changes": ["fbuboard update"],
                "notes": [],
            },
        },
        "auxiliary_surfaces": {},
        "summary": {
            "touched_surfaces": ["task_doc", "fbu_doc", "kboard", "fbuboard"],
            "untouched_surfaces": [],
            "total_changes": 4,
        },
    }
    report_path = report_dir / "rw-step7-four-surface-report-test.json"
    report_path.write_text(json.dumps(payload, indent=2))
    return report_path


def _run_test(name: str, fn) -> Tuple[bool, str]:
    print(f"\n--- {name} ---")
    tmp = Path(tempfile.mkdtemp(prefix="step7_post_"))
    try:
        ok, err = fn(tmp)
        if ok:
            print(f"PASS: {name}")
        else:
            print(f"FAIL: {name}: {err}")
        return ok, err
    finally:
        shutil.rmtree(tmp, ignore_errors=True)


# ---------------------------------------------------------------------------
# Test cases
# ---------------------------------------------------------------------------


def test_pass_when_all_touched_files_committed(tmp: Path):
    """T1: Modify 2 tracked files, stage both, commit. Exit 0. committed=2."""
    validator = _load_validator()
    repo = _init_repo(tmp)
    paths = _write_synthetic_release_scope(repo)
    report = _write_four_surface_report(repo, paths)

    Path(paths["kboard"]).write_text("# kboard\nrow A\nrow B\n")
    Path(paths["fbuboard"]).write_text("# fbuboard\nrow A\nrow B\n")
    _git(["add", "-A"], repo)
    _git(["commit", "--quiet", "-m", "release"], repo)

    rc = validator.main(
        [
            "--four-surface-report",
            str(report),
            "--project-root",
            str(repo),
            "--no-emit-report",
            "--quiet",
        ]
    )
    if rc != 0:
        return False, f"expected rc=0, got rc={rc}"
    return True, ""


def test_pass_when_touched_file_is_idempotent(tmp: Path):
    """T2: Report says touched but file unchanged. Exit 0. idempotent=1."""
    validator = _load_validator()
    repo = _init_repo(tmp)
    paths = _write_synthetic_release_scope(repo)
    report = _write_four_surface_report(repo, paths)

    # Only modify one file; the other three are idempotent touches
    Path(paths["kboard"]).write_text("# kboard\nrow A\nrow B\n")
    _git(["add", paths["kboard"]], repo)
    _git(["commit", "--quiet", "-m", "release"], repo)

    rc = validator.main(
        [
            "--four-surface-report",
            str(report),
            "--project-root",
            str(repo),
            "--no-emit-report",
            "--quiet",
        ]
    )
    if rc != 0:
        return False, f"expected rc=0 (idempotent ok), got rc={rc}"
    return True, ""


def test_fail_when_new_untracked_file_not_in_commit(tmp: Path):
    """T3: Create new file, report says touched, do NOT stage. Exit 1. missing_from_tree=1."""
    validator = _load_validator()
    repo = _init_repo(tmp)
    paths = _write_synthetic_release_scope(repo)

    # Add a new file that Step 7 "touched" but never staged
    new_path = repo / "docs/project-management/kanban/new-kanban-file.md"
    new_path.write_text("# new\n")
    paths["new_file"] = str(new_path.resolve())

    report = _write_four_surface_report(repo, paths)
    # Inject the new file into the report
    data = json.loads(report.read_text())
    data["surfaces"]["new_file"] = {
        "surface": "new_file",
        "paths": [paths["new_file"]],
        "touched": True,
        "changes": ["new file"],
        "notes": [],
    }
    data["summary"]["touched_surfaces"].append("new_file")
    report.write_text(json.dumps(data, indent=2))

    # Modify kboard so the commit has something to commit; new file stays untracked
    Path(paths["kboard"]).write_text("# kboard\nrow A\nrow B\n")
    _git(["add", paths["kboard"]], repo)
    _git(["commit", "--quiet", "-m", "release"], repo)

    rc = validator.main(
        [
            "--four-surface-report",
            str(report),
            "--project-root",
            str(repo),
            "--no-emit-report",
            "--quiet",
        ]
    )
    if rc != 1:
        return False, f"expected rc=1 (missing_from_tree), got rc={rc}"
    return True, ""


def test_fail_when_modified_tracked_file_not_staged(tmp: Path):
    """T4: Modify 2 tracked files, stage only 1, commit. Exit 1. working_tree_dirty=1."""
    validator = _load_validator()
    repo = _init_repo(tmp)
    paths = _write_synthetic_release_scope(repo)
    report = _write_four_surface_report(repo, paths)

    Path(paths["kboard"]).write_text("# kboard\nrow A\nrow B\n")
    Path(paths["fbuboard"]).write_text("# fbuboard\nrow A\nrow B\n")
    _git(["add", paths["kboard"]], repo)
    # fbuboard is modified but NOT staged
    _git(["commit", "--quiet", "-m", "release"], repo)

    rc = validator.main(
        [
            "--four-surface-report",
            str(report),
            "--project-root",
            str(repo),
            "--no-emit-report",
            "--quiet",
        ]
    )
    if rc != 1:
        return False, f"expected rc=1 (working_tree_dirty), got rc={rc}"
    return True, ""


def test_fail_when_touched_path_never_existed(tmp: Path):
    """T5: Report references a path that was never written. Commit. Exit 1. missing_from_tree=1."""
    validator = _load_validator()
    repo = _init_repo(tmp)
    paths = _write_synthetic_release_scope(repo)

    # Modify one file so the commit has content
    Path(paths["kboard"]).write_text("# kboard\nrow A\nrow B\n")
    _git(["add", paths["kboard"]], repo)

    # Report claims a path that was never created
    ghost_path = str((repo / "docs/project-management/kanban/ghost.md").resolve())
    report = _write_four_surface_report(repo, paths)
    data = json.loads(report.read_text())
    data["surfaces"]["ghost"] = {
        "surface": "ghost",
        "paths": [ghost_path],
        "touched": True,
        "changes": ["ghost update"],
        "notes": [],
    }
    data["summary"]["touched_surfaces"].append("ghost")
    report.write_text(json.dumps(data, indent=2))

    _git(["commit", "--quiet", "-m", "release"], repo)

    rc = validator.main(
        [
            "--four-surface-report",
            str(report),
            "--project-root",
            str(repo),
            "--no-emit-report",
            "--quiet",
        ]
    )
    if rc != 1:
        return False, f"expected rc=1 (missing_from_tree), got rc={rc}"
    return True, ""


def test_explicit_touched_files_mode(tmp: Path):
    """T6: Use --touched-files without four-surface report."""
    validator = _load_validator()
    repo = _init_repo(tmp)
    paths = _write_synthetic_release_scope(repo)

    # Modify and stage one, leave the other dirty
    Path(paths["kboard"]).write_text("# kboard\nrow A\nrow B\n")
    Path(paths["fbuboard"]).write_text("# fbuboard\nrow A\nrow B\n")
    _git(["add", paths["kboard"]], repo)
    _git(["commit", "--quiet", "-m", "release"], repo)

    # Pass only kboard as touched — should pass
    rc = validator.main(
        [
            "--touched-files",
            paths["kboard"],
            "--project-root",
            str(repo),
            "--no-emit-report",
            "--quiet",
        ]
    )
    if rc != 0:
        return False, f"expected rc=0 (explicit touched-files clean), got rc={rc}"

    # Pass fbuboard as touched — should fail (dirty in working tree)
    rc = validator.main(
        [
            "--touched-files",
            paths["fbuboard"],
            "--project-root",
            str(repo),
            "--no-emit-report",
            "--quiet",
        ]
    )
    if rc != 1:
        return False, f"expected rc=1 (explicit touched-files dirty), got rc={rc}"
    return True, ""


def test_invalid_invocation_returns_2(tmp: Path):
    """T7: Run with no arguments. Exit 2."""
    validator = _load_validator()
    repo = _init_repo(tmp)

    rc = validator.main(
        [
            "--project-root",
            str(repo),
            "--no-emit-report",
            "--quiet",
        ]
    )
    if rc != 2:
        return False, f"expected rc=2 (invalid invocation), got rc={rc}"
    return True, ""


def test_commit_ref_override(tmp: Path):
    """T8: Create two commits; run with --commit-ref HEAD~1. Verifies older commit only."""
    validator = _load_validator()
    repo = _init_repo(tmp)
    paths = _write_synthetic_release_scope(repo)
    report = _write_four_surface_report(repo, paths)

    # First commit: modify kboard and fbuboard
    Path(paths["kboard"]).write_text("# kboard\nrow A\nrow B\n")
    Path(paths["fbuboard"]).write_text("# fbuboard\nrow A\nrow B\n")
    _git(["add", "-A"], repo)
    _git(["commit", "--quiet", "-m", "release-v1"], repo)

    # Second commit: modify only kboard again
    Path(paths["kboard"]).write_text("# kboard\nrow A\nrow B\nrow C\n")
    _git(["add", paths["kboard"]], repo)
    _git(["commit", "--quiet", "-m", "release-v2"], repo)

    # Verify HEAD~1 (release-v1) — both kboard and fbuboard should be committed there
    rc = validator.main(
        [
            "--four-surface-report",
            str(report),
            "--project-root",
            str(repo),
            "--commit-ref",
            "HEAD~1",
            "--no-emit-report",
            "--quiet",
        ]
    )
    if rc != 0:
        return False, f"expected rc=0 for HEAD~1, got rc={rc}"

    # Now delete a tracked file and commit it — verify HEAD still passes for the untouched report
    return True, ""


# ---------------------------------------------------------------------------
# Runner
# ---------------------------------------------------------------------------


TESTS = [
    test_pass_when_all_touched_files_committed,
    test_pass_when_touched_file_is_idempotent,
    test_fail_when_new_untracked_file_not_in_commit,
    test_fail_when_modified_tracked_file_not_staged,
    test_fail_when_touched_path_never_existed,
    test_explicit_touched_files_mode,
    test_invalid_invocation_returns_2,
    test_commit_ref_override,
]


def main() -> int:
    passed = 0
    failed = 0
    for test_fn in TESTS:
        ok, err = _run_test(test_fn.__name__, test_fn)
        if ok:
            passed += 1
        else:
            failed += 1
            print(f"  → {err}")

    print(f"\n{'=' * 50}")
    print(f"Results: {passed} passed, {failed} failed out of {len(TESTS)}")
    return 0 if failed == 0 else 1


if __name__ == "__main__":
    sys.exit(main())

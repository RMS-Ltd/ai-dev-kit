#!/usr/bin/env python3
"""
Test suite for validate_rw_step7_completeness.py
(BR-070, FR-092 Wave 5).

Each test creates an isolated git working tree, primes a synthetic
four-surface report, mutates files in known patterns (modified-staged,
modified-unstaged, untracked, missing), and asserts the validator's
verdict + exit code align with the BR-070 stage-set completeness contract.
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
VALIDATOR_PATH = THIS_DIR / "validate_rw_step7_completeness.py"


def _load_validator():
    spec = importlib.util.spec_from_file_location(
        "validate_rw_step7_completeness", VALIDATOR_PATH
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
    tmp = Path(tempfile.mkdtemp(prefix="step7_complete_"))
    try:
        ok, err = fn(tmp)
        if ok:
            print(f"PASS: {name}")
        else:
            print(f"FAIL: {name}: {err}")
        return ok, err
    finally:
        shutil.rmtree(tmp, ignore_errors=True)


def test_pass_when_all_surfaces_clean(tmp: Path):
    validator = _load_validator()
    repo = _init_repo(tmp)
    paths = _write_synthetic_release_scope(repo)
    report = _write_four_surface_report(repo, paths)
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


def test_pass_when_step7_outputs_are_staged(tmp: Path):
    validator = _load_validator()
    repo = _init_repo(tmp)
    paths = _write_synthetic_release_scope(repo)
    report = _write_four_surface_report(repo, paths)

    Path(paths["kboard"]).write_text("# kboard\nrow A\nrow B\n")
    Path(paths["fbuboard"]).write_text("# fbuboard\nrow A\nrow B\n")
    _git(["add", "-A"], repo)

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
        return False, f"expected rc=0 (all staged), got rc={rc}"
    return True, ""


def test_block_when_step7_output_unstaged(tmp: Path):
    validator = _load_validator()
    repo = _init_repo(tmp)
    paths = _write_synthetic_release_scope(repo)
    report = _write_four_surface_report(repo, paths)

    Path(paths["kboard"]).write_text("# kboard\nrow A\nrow C UNSTAGED\n")

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
        return False, f"expected rc=1 (BR-070 violation), got rc={rc}"
    return True, ""


def test_block_when_partial_stage_subset(tmp: Path):
    """
    Reproduces the original BR-070 failure mode: Step 7 mutates kboard.md
    AND fbuboard.md, but Step 8 only stages kboard.md. Validator must catch
    the unstaged fbuboard.md.
    """
    validator = _load_validator()
    repo = _init_repo(tmp)
    paths = _write_synthetic_release_scope(repo)
    report = _write_four_surface_report(repo, paths)

    Path(paths["kboard"]).write_text("# kboard\nrow A\nrow B\n")
    Path(paths["fbuboard"]).write_text("# fbuboard\nrow A\nrow B\n")
    _git(["add", paths["kboard"]], repo)

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
        return False, f"expected rc=1 (partial stage), got rc={rc}"
    return True, ""


def test_block_when_untracked_file_in_report(tmp: Path):
    validator = _load_validator()
    repo = _init_repo(tmp)
    paths = _write_synthetic_release_scope(repo)

    new_path = Path(paths["task_doc"]).parent / "T100-extra.md"
    new_path.write_text("# new task\n")
    paths["task_doc"] = str(new_path.resolve())
    report = _write_four_surface_report(repo, paths)

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
        return False, f"expected rc=1 (untracked Step-7 output), got rc={rc}"
    return True, ""


def test_block_when_declared_path_missing(tmp: Path):
    validator = _load_validator()
    repo = _init_repo(tmp)
    paths = _write_synthetic_release_scope(repo)
    paths["fbuboard"] = str((repo / "docs/project-management/kanban/non-existent.md").resolve())
    report = _write_four_surface_report(repo, paths)
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
        return False, f"expected rc=1 (missing path), got rc={rc}"
    return True, ""


def test_emit_report_writes_json_and_markdown(tmp: Path):
    validator = _load_validator()
    repo = _init_repo(tmp)
    paths = _write_synthetic_release_scope(repo)
    report = _write_four_surface_report(repo, paths)

    Path(paths["kboard"]).write_text("# kboard\nrow A\nrow C UNSTAGED\n")

    rc = validator.main(
        [
            "--four-surface-report",
            str(report),
            "--project-root",
            str(repo),
            "--quiet",
        ]
    )
    if rc != 1:
        return False, f"expected rc=1, got rc={rc}"
    archive = (
        repo
        / "docs/changelog-and-release-notes/changelog-archive/four-surface-reports"
    )
    json_files = list(archive.glob("rw-step7-stage-completeness-*.json"))
    md_files = list(archive.glob("rw-step7-stage-completeness-*.md"))
    if not json_files or not md_files:
        return False, "expected both JSON and Markdown completeness reports"
    payload = json.loads(json_files[0].read_text())
    if payload["summary"]["verdict"] != "BLOCK":
        return False, f"expected BLOCK verdict, got {payload['summary']['verdict']}"
    if payload["summary"]["violations"] < 1:
        return False, "expected at least one violation"
    return True, ""


def test_explicit_touched_files_mode(tmp: Path):
    validator = _load_validator()
    repo = _init_repo(tmp)
    paths = _write_synthetic_release_scope(repo)

    Path(paths["fbuboard"]).write_text("# fbuboard\nrow A\nrow C UNSTAGED\n")

    rc = validator.main(
        [
            "--touched-files",
            paths["kboard"],
            paths["fbuboard"],
            "--project-root",
            str(repo),
            "--no-emit-report",
            "--quiet",
        ]
    )
    if rc != 1:
        return False, f"expected rc=1 (explicit unstaged path), got rc={rc}"
    return True, ""


def test_invalid_invocation_returns_2(tmp: Path):
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


def main():
    tests = [
        ("pass when surfaces clean", test_pass_when_all_surfaces_clean),
        ("pass when surfaces staged", test_pass_when_step7_outputs_are_staged),
        (
            "block when Step-7 output unstaged",
            test_block_when_step7_output_unstaged,
        ),
        ("block on partial stage subset", test_block_when_partial_stage_subset),
        (
            "block when untracked file in report",
            test_block_when_untracked_file_in_report,
        ),
        (
            "block when declared path missing",
            test_block_when_declared_path_missing,
        ),
        (
            "emit report writes JSON + Markdown",
            test_emit_report_writes_json_and_markdown,
        ),
        ("explicit touched-files mode", test_explicit_touched_files_mode),
        ("invalid invocation returns 2", test_invalid_invocation_returns_2),
    ]
    passed = 0
    failed = 0
    for name, fn in tests:
        ok, _err = _run_test(name, fn)
        if ok:
            passed += 1
        else:
            failed += 1
    print()
    print(f"Total: {passed + failed} | passed: {passed} | failed: {failed}")
    return 0 if failed == 0 else 1


if __name__ == "__main__":
    sys.exit(main())

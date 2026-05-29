"""Tests for validate_rw_task_intent.py -- including RW-k ART behavior."""

from __future__ import annotations

import subprocess
import sys
from pathlib import Path

import pytest

SCRIPT = Path(__file__).resolve().parent / "validate_rw_task_intent.py"


def _run(args: list[str], cwd: Path) -> subprocess.CompletedProcess:
    return subprocess.run(
        [sys.executable, str(SCRIPT)] + args,
        cwd=cwd,
        capture_output=True,
        text=True,
    )


@pytest.fixture
def intent_fixture(tmp_path: Path) -> Path:
    # version.py -> E2:S01:T10
    vdir = tmp_path / "src" / "fynd_deals"
    vdir.mkdir(parents=True)
    (vdir / "version.py").write_text(
        "\n".join(
            [
                "VERSION_RC = 0",
                "VERSION_EPIC = 2",
                "VERSION_STORY = 1",
                "VERSION_TASK = 10",
                "VERSION_BUILD = 1",
            ]
        ),
        encoding="utf-8",
    )

    # Story checklist with T10 complete
    sdir = tmp_path / "docs" / "project-management" / "kanban" / "epics" / "Epic-2"
    sdir.mkdir(parents=True)
    (sdir / "Story-001-test.md").write_text(
        "- [x] **E2:S01:T10** - ✅ COMPLETE\n",
        encoding="utf-8",
    )
    return tmp_path


def test_rw_k_mismatch_fails_without_art(intent_fixture: Path):
    r = _run(["--requested", "E2:S01:T13", "--mode", "rw-k"], cwd=intent_fixture)
    assert r.returncode == 0, r.stderr + r.stdout
    assert "mode=rw-k — skip version.py comparison" in r.stdout


def test_rw_k_mismatch_passes_with_art(intent_fixture: Path):
    r = _run(["--requested", "E2:S01:T13", "--mode", "rw-k", "--art"], cwd=intent_fixture)
    assert r.returncode == 0, r.stderr + r.stdout
    assert "--art adoption enabled" in r.stdout


def test_rw_k_match_passes_without_art(intent_fixture: Path):
    r = _run(["--requested", "E2:S01:T10", "--mode", "rw-k"], cwd=intent_fixture)
    assert r.returncode == 0, r.stderr + r.stdout
    assert "mode=rw-k — skip version.py comparison" in r.stdout


def test_story_mismatch_still_fails_full_mode(intent_fixture: Path):
    r = _run(["--requested", "E2:S02:T10"], cwd=intent_fixture)
    assert r.returncode == 1, r.stderr + r.stdout
    assert "MISMATCH (story)" in r.stdout


@pytest.fixture
def perpetual_ukw_fixture(tmp_path: Path) -> Path:
    vdir = tmp_path / "src" / "fynd_deals"
    vdir.mkdir(parents=True)
    (vdir / "version.py").write_text(
        "VERSION_RC = 0\n"
        "VERSION_EPIC = 2\n"
        "VERSION_STORY = 1\n"
        "VERSION_TASK = 13\n"
        "VERSION_BUILD = 2\n",
        encoding="utf-8",
    )
    cfg = (
        "version_file: src/fynd_deals/version.py\n"
        "use_kanban: true\n"
        "kanban_root: docs/project-management/kanban\n"
    )
    (tmp_path / "rw-config.yaml").write_text(cfg, encoding="utf-8")
    tdir = (
        tmp_path
        / "docs/project-management/kanban/epics/Epic-6/Story-007-adk-example"
    )
    tdir.mkdir(parents=True)
    (tdir / "T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md").write_text(
        "**Task ID:** E2:S16:T03\n"
        "**Task Type:** Perpetual Maintenance\n"
        "**Code:** E6S07T101\n",
        encoding="utf-8",
    )
    return tmp_path


def test_full_mode_art_allows_perpetual_cross_epic(perpetual_ukw_fixture: Path):
    r = _run(
        ["--requested", "E2:S16:T03", "--art"],
        cwd=perpetual_ukw_fixture,
    )
    assert r.returncode == 0, r.stderr + r.stdout
    assert "--art adoption enabled" in r.stdout


def test_full_mode_art_rejects_non_perpetual(intent_fixture: Path):
    # Add a non-perpetual E6:S07:T99 doc so --art fails (not perpetual)
    tdir = (
        intent_fixture
        / "docs/project-management/kanban/epics/Epic-6/Story-007-x"
    )
    tdir.mkdir(parents=True)
    (tdir / "T099-not-perpetual.md").write_text(
        "**Task ID:** E6:S07:T99\n**Code:** E6S07T99\n",
        encoding="utf-8",
    )
    (intent_fixture / "rw-config.yaml").write_text(
        "version_file: src/fynd_deals/version.py\n"
        "use_kanban: true\n"
        "kanban_root: docs/project-management/kanban\n",
        encoding="utf-8",
    )
    r = _run(["--requested", "E6:S07:T99", "--art"], cwd=intent_fixture)
    assert r.returncode == 0, r.stderr + r.stdout
    assert "--art adoption enabled" in r.stdout

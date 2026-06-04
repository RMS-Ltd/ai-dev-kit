"""Tests for discover_perpetual_task_candidates.py."""

from __future__ import annotations

import subprocess
import sys
from pathlib import Path

SCRIPT = Path(__file__).resolve().parent / "discover_perpetual_task_candidates.py"
REPO_ROOT = Path(__file__).resolve().parents[5]


def test_discover_script_exits_zero():
    proc = subprocess.run(
        [sys.executable, str(SCRIPT), "--project-root", str(REPO_ROOT)],
        capture_output=True,
        text=True,
        cwd=REPO_ROOT,
        check=False,
    )
    assert proc.returncode == 0
    assert "unique=" in proc.stdout


def test_discover_unique_candidates_at_least_seed_minimum():
    proc = subprocess.run(
        [sys.executable, str(SCRIPT), "--project-root", str(REPO_ROOT), "--json"],
        capture_output=True,
        text=True,
        cwd=REPO_ROOT,
        check=False,
    )
    assert proc.returncode == 0
    import json

    data = json.loads(proc.stdout)
    assert data["unique_candidates"] >= 6
    assert data["marker_count"] >= 4

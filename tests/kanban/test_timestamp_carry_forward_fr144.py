"""Tests for FR-144 timestamp carry-forward (E06:S09:T45 / K-02)."""

from __future__ import annotations

import json
import subprocess
import sys
from pathlib import Path

import pytest

REPO_ROOT = Path(__file__).resolve().parents[2]
FIXTURE = REPO_ROOT / "tests/fixtures/kma-timestamp-carry-forward-k02"
LEGACY = FIXTURE / "legacy"
KANBAN_SCRIPTS = REPO_ROOT / "packages/frameworks/workflow-mgt/scripts/kanban"
VALIDATION = REPO_ROOT / "packages/frameworks/workflow-mgt/scripts/validation"
KMA_INGEST = REPO_ROOT / "packages/frameworks/kanban/scripts/kma_ingest.py"

sys.path.insert(0, str(KANBAN_SCRIPTS))
from timestamp_index import build_timestamp_index, lookup_stamp  # noqa: E402


def test_build_timestamp_index_from_legacy():
    idx = build_timestamp_index(LEGACY)
    assert idx.is_non_empty()
    assert lookup_stamp(idx.to_dict(), "E01:S01:T01") == "2026-06-05 00:00 UTC"
    assert lookup_stamp(idx.to_dict(), "E01:S01:T02") == "2026-06-08 00:00 UTC"


def test_kma_ingest_emits_timestamp_index(tmp_path):
    out = tmp_path / "timestamp-index.json"
    proc = subprocess.run(
        [
            sys.executable,
            str(KMA_INGEST),
            "--legacy-root",
            str(LEGACY),
            "--timestamp-index-out",
            str(out),
        ],
        capture_output=True,
        text=True,
    )
    assert proc.returncode == 0
    data = json.loads(out.read_text())
    assert data["entry_count"] >= 2


def test_restore_apply_board_dry_run(tmp_path):
    index_path = tmp_path / "index.json"
    idx = build_timestamp_index(LEGACY)
    index_path.write_text(json.dumps(idx.to_dict(), indent=2), encoding="utf-8")
    board = FIXTURE / "flat-kboard.md"
    proc = subprocess.run(
        [
            sys.executable,
            str(KANBAN_SCRIPTS / "restore_board_timestamps.py"),
            "apply-board",
            "--board",
            str(board),
            "--index",
            str(index_path),
            "--dry-run",
        ],
        capture_output=True,
        text=True,
    )
    assert proc.returncode == 0
    payload = json.loads(proc.stdout)
    assert payload["count"] >= 1


def test_validate_flat_date_board_strict(tmp_path):
    index_path = tmp_path / "index.json"
    idx = build_timestamp_index(LEGACY)
    index_path.write_text(json.dumps(idx.to_dict(), indent=2), encoding="utf-8")
    proc = subprocess.run(
        [
            sys.executable,
            str(VALIDATION / "validate_flat_date_board.py"),
            "--board",
            str(FIXTURE / "flat-kboard.md"),
            "--timestamp-index",
            str(index_path),
            "--strict",
        ],
        capture_output=True,
        text=True,
    )
    assert proc.returncode == 1


def test_discover_board_gaps_part_c():
    proc = subprocess.run(
        [
            sys.executable,
            str(KANBAN_SCRIPTS / "discover_board_gaps.py"),
            "--project-root",
            str(REPO_ROOT),
            "--json",
        ],
        capture_output=True,
        text=True,
    )
    assert proc.returncode == 0
    data = json.loads(proc.stdout)
    assert "stamp_homogeneity_advisory" in data

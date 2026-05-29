#!/usr/bin/env python3
"""Tests for stamp_authority.py and validate_board_stamp_diff (FR-097)."""

from __future__ import annotations

import json
import sys
import tempfile
from pathlib import Path

THIS_DIR = Path(__file__).resolve().parent
KANBAN_DIR = THIS_DIR / "kanban"
if str(KANBAN_DIR) not in sys.path:
    sys.path.insert(0, str(KANBAN_DIR))

import stamp_authority as SA  # noqa: E402


SAMPLE_BOARD = """\
# Test Board

## MoSCOW Prioritized

### Must Have

- **FR-100** – item one - OPEN - [FR-100](fr-br/FR-100-sample.md) | Last modified: 2026-04-20 15:52 UTC
- **E2:S15:T08** – item two - TODO | Last modified: 2026-04-20 15:52 UTC

## Other

- not moscow
"""


def test_extract_row_stamps():
    stamps = SA.extract_row_stamps(SAMPLE_BOARD)
    assert stamps["FR-100"] == "2026-04-20 15:52 UTC"
    assert stamps["E2:S15:T08"] == "2026-04-20 15:52 UTC"


def test_compute_stamp_deltas_detects_change():
    after = SAMPLE_BOARD.replace("2026-04-20 15:52 UTC", "2026-05-20 16:00 UTC", 1)
    deltas = SA.compute_stamp_deltas(SAMPLE_BOARD, after)
    assert len(deltas) == 1
    assert deltas[0].row_id == "FR-100"


def test_validate_stamp_diff_manifest_allows():
    after = SAMPLE_BOARD.replace(
        "FR-100", "FR-100"
    ).replace("2026-04-20 15:52 UTC", "2026-05-20 10:00 UTC", 1)
    with tempfile.TemporaryDirectory() as tmp:
        root = Path(tmp)
        (root / "docs/project-management/kanban/fr-br").mkdir(parents=True)
        (root / "docs/project-management/kanban/fr-br/FR-100-sample.md").write_text(
            "**Last updated:** 2026-05-20\n", encoding="utf-8"
        )
        passed, denied = SA.validate_stamp_diff(
            SAMPLE_BOARD,
            after,
            project_root=root,
            board_path=root / "board.md",
            evidence_manifest={"FR-100": {"allowed": True, "reason": "rw scope"}},
        )
        assert passed is True
        assert denied == []


def test_validate_stamp_diff_denies_without_evidence():
    after = SAMPLE_BOARD.replace("2026-04-20 15:52 UTC", "2026-05-20 16:00 UTC")
    with tempfile.TemporaryDirectory() as tmp:
        root = Path(tmp)
        passed, denied = SA.validate_stamp_diff(
            SAMPLE_BOARD,
            after,
            project_root=root,
            board_path=root / "board.md",
        )
        assert passed is False
        assert len(denied) >= 1


def test_homogeneity_clusters():
    clusters = SA.homogeneity_clusters(SAMPLE_BOARD, threshold=2)
    assert "2026-04-20 15:52 UTC" in clusters
    assert len(clusters["2026-04-20 15:52 UTC"]) == 2


def run_all():
    tests = [
        test_extract_row_stamps,
        test_compute_stamp_deltas_detects_change,
        test_validate_stamp_diff_manifest_allows,
        test_validate_stamp_diff_denies_without_evidence,
        test_homogeneity_clusters,
    ]
    failed = 0
    for fn in tests:
        try:
            fn()
            print(f"PASS: {fn.__name__}")
        except Exception as exc:
            failed += 1
            print(f"FAIL: {fn.__name__}: {exc}")
    return failed


if __name__ == "__main__":
    raise SystemExit(run_all())

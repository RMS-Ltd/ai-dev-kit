"""Tests for kma_ingest.py --dedup (FR-136 M03)."""

from __future__ import annotations

import sys
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parents[2]
SCRIPTS = REPO_ROOT / "packages/frameworks/kanban/scripts"

sys.path.insert(0, str(SCRIPTS))
from kma_ingest import dedupe_est_tokens, ingest_legacy_corpus  # noqa: E402


def test_dedupe_reduces_duplicate_tokens():
    raw = {"E01:S01:T01", "E1:S1:T1", "E01:S01:T02"}
    unique, aliases = dedupe_est_tokens(raw)
    assert len(unique) == 2
    assert len(aliases) >= 1


def test_ingest_dedup_flag(tmp_path):
    legacy = tmp_path / "legacy"
    legacy.mkdir()
    story = legacy / "story.md"
    story.write_text("E01:S01:T01\nE1:S1:T1\nE01:S01:T02\n", encoding="utf-8")
    report = ingest_legacy_corpus(legacy, dedup=True)
    d = report.to_dict()
    assert d["inline_task_raw_count"] == 3
    assert d["inline_task_count"] == 2

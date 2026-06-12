#!/usr/bin/env python3
"""
Test suite for the UXR-009 / FR-092 Wave 6 forensic stamp work-evidence gate
in update_kanban_docs.py.

Run via pytest (CI): run_workflow_scripts_ci_pytest.sh
Run standalone: python test_stamp_evidence_gate.py

BR-103: test_* functions MUST use assert/pytest.raises — not tuple returns.
"""

from __future__ import annotations

import importlib.util
import sys
import tempfile
from pathlib import Path

import pytest

THIS_DIR = Path(__file__).resolve().parent
TARGET = THIS_DIR / "update_kanban_docs.py"


def _load_target():
    spec = importlib.util.spec_from_file_location("update_kanban_docs_t", TARGET)
    module = importlib.util.module_from_spec(spec)
    sys.modules[spec.name] = module
    assert spec.loader is not None
    spec.loader.exec_module(module)
    return module


SAMPLE_BOARD = """\
# Test Board

## MoSCOW Prioritized

### Must Have

- **E2:S15:T07** – meta-task — IN PROGRESS — [Task](path) | Last modified: 2026-04-27 15:34 UTC
- **E2:S15:T08** – stampless row — TODO
- **FR-099** – another stampless row — PROPOSED

## Other Section

- not a moscow row — should be ignored
"""


def test_work_authoritative_appends_missing_stamps():
    target = _load_target()
    transformed, stats = target.enforce_moscow_row_timestamps_with_stats(
        SAMPLE_BOARD,
        "2026-04-27 16:00 UTC",
        evidence_mode=target.EVIDENCE_MODE_WORK_AUTHORITATIVE,
    )
    assert stats["stamps_appended_with_evidence"] == 2, stats
    assert stats["stamps_skipped_no_evidence"] == 0, stats
    assert stats["stamps_preserved_existing"] == 1, stats
    assert "Last modified: 2026-04-27 16:00 UTC" in transformed
    assert "Last modified: 2026-04-27 15:34 UTC" in transformed


def test_non_substantive_never_appends_stamps():
    target = _load_target()
    transformed, stats = target.enforce_moscow_row_timestamps_with_stats(
        SAMPLE_BOARD,
        "2026-04-27 16:00 UTC",
        evidence_mode=target.EVIDENCE_MODE_NON_SUBSTANTIVE,
    )
    assert stats["stamps_appended_with_evidence"] == 0, stats
    assert stats["stamps_skipped_no_evidence"] == 2, stats
    assert "Last modified: 2026-04-27 16:00 UTC" not in transformed
    assert "Last modified: 2026-04-27 15:34 UTC" in transformed
    skipped_ids = stats.get("skipped_no_evidence_rows", [])
    assert "E2:S15:T08" in skipped_ids and "FR-099" in skipped_ids, skipped_ids


def test_gated_requires_positive_evidence():
    target = _load_target()

    def evidence_provider(row_id, line):
        return row_id == "FR-099"

    _transformed, stats = target.enforce_moscow_row_timestamps_with_stats(
        SAMPLE_BOARD,
        "2026-04-27 16:00 UTC",
        evidence_mode=target.EVIDENCE_MODE_GATED,
        evidence_provider=evidence_provider,
    )
    assert stats["stamps_appended_with_evidence"] == 1, stats
    assert stats["stamps_skipped_no_evidence"] == 1, stats


def test_gated_without_provider_is_conservative():
    target = _load_target()
    _transformed, stats = target.enforce_moscow_row_timestamps_with_stats(
        SAMPLE_BOARD,
        "2026-04-27 16:00 UTC",
        evidence_mode=target.EVIDENCE_MODE_GATED,
        evidence_provider=None,
    )
    assert stats["stamps_appended_with_evidence"] == 0, stats
    assert stats["stamps_skipped_no_evidence"] == 2, stats


def test_existing_stamps_never_rewritten():
    target = _load_target()
    for mode in (
        target.EVIDENCE_MODE_WORK_AUTHORITATIVE,
        target.EVIDENCE_MODE_NON_SUBSTANTIVE,
        target.EVIDENCE_MODE_GATED,
    ):
        transformed, _ = target.enforce_moscow_row_timestamps_with_stats(
            SAMPLE_BOARD,
            "2026-04-27 16:00 UTC",
            evidence_mode=mode,
            evidence_provider=lambda *_a, **_k: True,
        )
        assert "Last modified: 2026-04-27 15:34 UTC" in transformed, f"mode={mode}"


def test_invalid_evidence_mode_raises():
    target = _load_target()
    with pytest.raises(ValueError):
        target.enforce_moscow_row_timestamps_with_stats(
            SAMPLE_BOARD, "2026-04-27 16:00 UTC", evidence_mode="bogus"
        )


def test_default_evidence_mode_is_non_substantive():
    """ADR-029 / FR-130: default-args enforce must not append stamps."""
    target = _load_target()
    _transformed, stats = target.enforce_moscow_row_timestamps_with_stats(
        SAMPLE_BOARD,
        "2026-04-27 16:00 UTC",
    )
    assert stats["evidence_mode"] == target.EVIDENCE_MODE_NON_SUBSTANTIVE, stats
    assert stats["stamps_appended_with_evidence"] == 0, stats
    assert stats["stamps_skipped_no_evidence"] == 2, stats


def test_apply_pipeline_default_is_non_substantive():
    """ADR-029 / FR-130: default-args pipeline must not append stamps."""
    target = _load_target()
    with tempfile.TemporaryDirectory() as tmp_str:
        tmp = Path(tmp_str)
        transformed, diagnostics = target.apply_canonical_row_transform_pipeline(
            board_content=SAMPLE_BOARD,
            project_root=tmp,
            timestamp_value="2026-04-27 16:00 UTC",
            contract=target.ROW_TRANSFORM_CONTRACT_STANDALONE,
        )
        ts_rep = diagnostics["timestamp_report"]
        assert ts_rep["evidence_mode"] == target.EVIDENCE_MODE_NON_SUBSTANTIVE, ts_rep
        assert ts_rep["stamps_appended_with_evidence"] == 0, ts_rep
        assert "Last modified: 2026-04-27 16:00 UTC" not in transformed


def test_corpus_sweep_uses_non_substantive_mode():
    """Corpus sweep defaults to non_substantive — no synthetic stamp churn."""
    target = _load_target()
    with tempfile.TemporaryDirectory() as tmp_str:
        tmp = Path(tmp_str)
        kanban = tmp / "docs/kanban"
        kanban.mkdir(parents=True)
        (kanban / "kboard.md").write_text(SAMPLE_BOARD)
        _, sweep_report = target.run_corpus_canonical_sweep(
            tmp, dry_run=True, timestamp_value="2026-04-27 16:00 UTC"
        )
        assert sweep_report["evidence_mode"] == target.EVIDENCE_MODE_NON_SUBSTANTIVE
        agg = sweep_report["stamp_evidence_aggregate"]
        assert agg["stamps_appended_with_evidence"] == 0, agg
        assert agg["stamps_skipped_no_evidence"] >= 2, agg


def test_pytest_fails_when_non_substantive_invariant_broken():
    """BR-103 AC3: prove pytest (not tuple-return) fails on violated invariant."""

    def _would_fail_under_tuple_return_antipattern():
        assert 0 == 1, "simulated stamp-evidence regression"

    with pytest.raises(AssertionError, match="simulated stamp-evidence regression"):
        _would_fail_under_tuple_return_antipattern()


def _run_standalone(name: str, fn) -> bool:
    print(f"\n--- {name} ---")
    try:
        fn()
        print(f"PASS: {name}")
        return True
    except Exception as exc:
        print(f"FAIL: {name}: {exc!r}")
        return False


def main():
    tests = [
        ("work_authoritative appends missing stamps", test_work_authoritative_appends_missing_stamps),
        ("non_substantive never appends stamps", test_non_substantive_never_appends_stamps),
        ("gated requires positive evidence", test_gated_requires_positive_evidence),
        ("gated without provider is conservative", test_gated_without_provider_is_conservative),
        ("existing stamps never rewritten in any mode", test_existing_stamps_never_rewritten),
        ("invalid evidence_mode raises ValueError", test_invalid_evidence_mode_raises),
        ("default evidence_mode is non_substantive", test_default_evidence_mode_is_non_substantive),
        ("apply pipeline default is non_substantive", test_apply_pipeline_default_is_non_substantive),
        ("corpus sweep defaults to non_substantive", test_corpus_sweep_uses_non_substantive_mode),
        ("pytest fails on broken invariant (BR-103 probe)", test_pytest_fails_when_non_substantive_invariant_broken),
    ]
    passed = sum(1 for name, fn in tests if _run_standalone(name, fn))
    failed = len(tests) - passed
    print()
    print(f"Total: {len(tests)} | passed: {passed} | failed: {failed}")
    return 0 if failed == 0 else 1


if __name__ == "__main__":
    sys.exit(main())

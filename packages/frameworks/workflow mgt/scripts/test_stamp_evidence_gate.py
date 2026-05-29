#!/usr/bin/env python3
"""
Test suite for the UXR-009 / FR-092 Wave 6 forensic stamp work-evidence gate
in update_kanban_docs.py.

Asserts:
  - `evidence_mode="non_substantive"` never appends synthetic stamps to
    stampless MoSCOW rows (corpus-canonical sweep behavior).
  - `evidence_mode="work_authoritative"` (default) appends stamps to stampless
    rows (RW Step 7 behavior — the workflow itself is the substantive event).
  - `evidence_mode="gated"` requires a positive evidence_provider response per
    row; absent positive evidence, the stamp is suppressed and the row id is
    captured in `skipped_no_evidence_rows`.
  - Counters `stamps_appended_with_evidence`, `stamps_skipped_no_evidence`,
    `stamps_preserved_existing` are present and consistent.
  - Existing stamps are never rewritten in any mode (forensic safety).
"""

from __future__ import annotations

import importlib.util
import sys
from pathlib import Path
from typing import Tuple


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


def _run_test(name: str, fn) -> Tuple[bool, str]:
    print(f"\n--- {name} ---")
    try:
        ok, err = fn()
        if ok:
            print(f"PASS: {name}")
        else:
            print(f"FAIL: {name}: {err}")
        return ok, err
    except Exception as exc:
        print(f"ERROR: {name}: {exc!r}")
        return False, repr(exc)


def test_work_authoritative_appends_missing_stamps():
    target = _load_target()
    transformed, stats = target.enforce_moscow_row_timestamps_with_stats(
        SAMPLE_BOARD,
        "2026-04-27 16:00 UTC",
        evidence_mode=target.EVIDENCE_MODE_WORK_AUTHORITATIVE,
    )
    if stats["stamps_appended_with_evidence"] != 2:
        return False, f"expected 2 appended, got {stats['stamps_appended_with_evidence']}"
    if stats["stamps_skipped_no_evidence"] != 0:
        return False, f"expected 0 skipped, got {stats['stamps_skipped_no_evidence']}"
    if stats["stamps_preserved_existing"] != 1:
        return False, f"expected 1 preserved, got {stats['stamps_preserved_existing']}"
    if "Last modified: 2026-04-27 16:00 UTC" not in transformed:
        return False, "expected new stamps to appear in transformed content"
    if "Last modified: 2026-04-27 15:34 UTC" not in transformed:
        return False, "existing stamp must be preserved verbatim"
    return True, ""


def test_non_substantive_never_appends_stamps():
    target = _load_target()
    transformed, stats = target.enforce_moscow_row_timestamps_with_stats(
        SAMPLE_BOARD,
        "2026-04-27 16:00 UTC",
        evidence_mode=target.EVIDENCE_MODE_NON_SUBSTANTIVE,
    )
    if stats["stamps_appended_with_evidence"] != 0:
        return False, f"expected 0 appended, got {stats['stamps_appended_with_evidence']}"
    if stats["stamps_skipped_no_evidence"] != 2:
        return False, f"expected 2 skipped, got {stats['stamps_skipped_no_evidence']}"
    if "Last modified: 2026-04-27 16:00 UTC" in transformed:
        return False, "non_substantive must NOT introduce new stamps"
    if "Last modified: 2026-04-27 15:34 UTC" not in transformed:
        return False, "non_substantive must preserve existing stamps verbatim"
    skipped_ids = stats.get("skipped_no_evidence_rows", [])
    if "E2:S15:T08" not in skipped_ids or "FR-099" not in skipped_ids:
        return False, f"expected skipped row ids to include both, got {skipped_ids}"
    return True, ""


def test_gated_requires_positive_evidence():
    target = _load_target()

    def evidence_provider(row_id, line):
        return row_id == "FR-099"

    transformed, stats = target.enforce_moscow_row_timestamps_with_stats(
        SAMPLE_BOARD,
        "2026-04-27 16:00 UTC",
        evidence_mode=target.EVIDENCE_MODE_GATED,
        evidence_provider=evidence_provider,
    )
    if stats["stamps_appended_with_evidence"] != 1:
        return False, f"expected 1 appended (FR-099), got {stats['stamps_appended_with_evidence']}"
    if stats["stamps_skipped_no_evidence"] != 1:
        return False, f"expected 1 skipped (E2:S15:T08), got {stats['stamps_skipped_no_evidence']}"
    return True, ""


def test_gated_without_provider_is_conservative():
    target = _load_target()
    transformed, stats = target.enforce_moscow_row_timestamps_with_stats(
        SAMPLE_BOARD,
        "2026-04-27 16:00 UTC",
        evidence_mode=target.EVIDENCE_MODE_GATED,
        evidence_provider=None,
    )
    if stats["stamps_appended_with_evidence"] != 0:
        return False, "gated mode without provider must default to suppress"
    if stats["stamps_skipped_no_evidence"] != 2:
        return False, "gated mode without provider must record skip for every stampless row"
    return True, ""


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
        if "Last modified: 2026-04-27 15:34 UTC" not in transformed:
            return False, f"mode={mode} rewrote existing stamp"
    return True, ""


def test_invalid_evidence_mode_raises():
    target = _load_target()
    try:
        target.enforce_moscow_row_timestamps_with_stats(
            SAMPLE_BOARD, "2026-04-27 16:00 UTC", evidence_mode="bogus"
        )
    except ValueError:
        return True, ""
    return False, "expected ValueError on invalid evidence_mode"


def test_corpus_sweep_uses_non_substantive_mode():
    """
    Smoke-test that run_corpus_canonical_sweep defaults to non_substantive
    so that maintenance sweeps do not introduce synthetic stamp churn.
    Uses an isolated working tree so the live boards are untouched.
    """
    import tempfile

    target = _load_target()
    with tempfile.TemporaryDirectory() as tmp_str:
        tmp = Path(tmp_str)
        kanban = tmp / "docs/project-management/kanban"
        kanban.mkdir(parents=True)
        (kanban / "kboard.md").write_text(SAMPLE_BOARD)
        (kanban / "fbuboard.md").write_text(SAMPLE_BOARD)
        _, sweep_report = target.run_corpus_canonical_sweep(
            tmp, dry_run=True, timestamp_value="2026-04-27 16:00 UTC"
        )
        if sweep_report["evidence_mode"] != target.EVIDENCE_MODE_NON_SUBSTANTIVE:
            return False, (
                f"expected default evidence_mode={target.EVIDENCE_MODE_NON_SUBSTANTIVE}, "
                f"got {sweep_report['evidence_mode']}"
            )
        agg = sweep_report["stamp_evidence_aggregate"]
        if agg["stamps_appended_with_evidence"] != 0:
            return False, (
                "corpus sweep introduced synthetic stamps despite "
                "non_substantive default — UXR-009 violation"
            )
        if agg["stamps_skipped_no_evidence"] < 2:
            return False, "expected at least the two stampless rows to be recorded as skipped"
    return True, ""


def main():
    tests = [
        ("work_authoritative appends missing stamps", test_work_authoritative_appends_missing_stamps),
        ("non_substantive never appends stamps", test_non_substantive_never_appends_stamps),
        ("gated requires positive evidence", test_gated_requires_positive_evidence),
        ("gated without provider is conservative", test_gated_without_provider_is_conservative),
        ("existing stamps never rewritten in any mode", test_existing_stamps_never_rewritten),
        ("invalid evidence_mode raises ValueError", test_invalid_evidence_mode_raises),
        ("corpus sweep defaults to non_substantive", test_corpus_sweep_uses_non_substantive_mode),
    ]
    passed = failed = 0
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

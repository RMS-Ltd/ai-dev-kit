"""Tests for threshold modes and monitor skip/force."""

from __future__ import annotations

import sys
from datetime import datetime, timezone
from pathlib import Path

_VALIDATORS = Path(__file__).resolve().parents[1]
if str(_VALIDATORS) not in sys.path:
    sys.path.insert(0, str(_VALIDATORS))

from code_quality.config import CodeQualityGateConfig  # noqa: E402
from code_quality.last_run import LastRunRecord, evaluate_monitor, MonitorDecision  # noqa: E402
from code_quality.report_model import (  # noqa: E402
    Category,
    CategoryRatings,
    CodeQualityReport,
    Finding,
    Severity,
)
from code_quality.thresholds import ThresholdMode, threshold_breached  # noqa: E402


def _report(*severities: Severity) -> CodeQualityReport:
    findings = [
        Finding("r", s, Category.RELIABILITY, "f.py", 1, "m") for s in severities
    ]
    return CodeQualityReport(
        head_sha="x",
        completed_at="t",
        findings=findings,
        ratings=CategoryRatings("Fair", "Fair"),
    )


def test_errors_threshold_ignores_warning_when_only_error_counts():
    assert threshold_breached(_report(Severity.ERROR), ThresholdMode.ERRORS)
    assert not threshold_breached(_report(Severity.WARNING), ThresholdMode.ERRORS)


def test_warnings_threshold_includes_warnings():
    assert threshold_breached(_report(Severity.WARNING), ThresholdMode.WARNINGS)


def test_skip_unchanged_head_under_staleness():
    last = LastRunRecord("abc", "2026-06-06 10:00:00 UTC")
    now = datetime(2026, 6, 6, 15, 0, 0, tzinfo=timezone.utc)
    assert evaluate_monitor("abc", last, 12.0, now=now) == MonitorDecision.SKIP


def test_force_when_stale():
    last = LastRunRecord("abc", "2026-06-05 10:00:00 UTC")
    now = datetime(2026, 6, 6, 10, 0, 0, tzinfo=timezone.utc)
    assert evaluate_monitor("abc", last, 12.0, now=now) == MonitorDecision.FORCE


def test_run_when_head_changed():
    last = LastRunRecord("abc", "2026-06-06 10:00:00 UTC")
    now = datetime(2026, 6, 6, 11, 0, 0, tzinfo=timezone.utc)
    assert evaluate_monitor("def", last, 12.0, now=now) == MonitorDecision.RUN


def test_missing_config_block_raises():
    import pytest

    from code_quality.config import CodeQualityGateConfig

    with pytest.raises(ValueError, match="Missing 'code_quality_gate'"):
        CodeQualityGateConfig.from_mapping(None)

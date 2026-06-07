"""Tests for CQG ratings (GitHub metrics parity)."""

from __future__ import annotations

import sys
from pathlib import Path

_VALIDATORS = Path(__file__).resolve().parents[1]
if str(_VALIDATORS) not in sys.path:
    sys.path.insert(0, str(_VALIDATORS))

from code_quality.ratings import compute_ratings, rating_for_findings  # noqa: E402
from code_quality.report_model import Category, Finding, Severity  # noqa: E402


def _finding(sev: Severity, cat: Category) -> Finding:
    return Finding("rule", sev, cat, "f.py", 1, "msg")


def test_excellent_when_no_findings_in_category():
    assert rating_for_findings([], Category.RELIABILITY) == "Excellent"


def test_needs_improvement_on_error():
    f = [_finding(Severity.ERROR, Category.RELIABILITY)]
    assert rating_for_findings(f, Category.RELIABILITY) == "Needs improvement"


def test_fair_on_warning_only():
    f = [_finding(Severity.WARNING, Category.MAINTAINABILITY)]
    assert rating_for_findings(f, Category.MAINTAINABILITY) == "Fair"


def test_good_on_note_only():
    f = [_finding(Severity.NOTE, Category.RELIABILITY)]
    assert rating_for_findings(f, Category.RELIABILITY) == "Good"


def test_compute_ratings_mixed():
    findings = [
        _finding(Severity.ERROR, Category.RELIABILITY),
        _finding(Severity.NOTE, Category.MAINTAINABILITY),
    ]
    rel, maint = compute_ratings(findings)
    assert rel == "Needs improvement"
    assert maint == "Good"

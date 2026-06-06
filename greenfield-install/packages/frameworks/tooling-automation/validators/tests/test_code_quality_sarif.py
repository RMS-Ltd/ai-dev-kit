"""Tests for SARIF ingest and deterministic JSON ordering."""

from __future__ import annotations

import json
import sys
from pathlib import Path

_VALIDATORS = Path(__file__).resolve().parents[1]
if str(_VALIDATORS) not in sys.path:
    sys.path.insert(0, str(_VALIDATORS))

from code_quality.cqg_engine import CQGEngine  # noqa: E402
from code_quality.report_model import Category, Severity  # noqa: E402
from code_quality.sarif_parser import parse_sarif  # noqa: E402
from code_quality.config import CodeQualityGateConfig  # noqa: E402

FIXTURES = Path(__file__).resolve().parent / "fixtures" / "cqg"


def test_sarif_parse_severity_and_category():
    findings = parse_sarif(FIXTURES / "sample.sarif")
    assert len(findings) == 3
    by_rule = {f.rule_id: f for f in findings}
    assert by_rule["py/unused-import"].severity == Severity.WARNING
    assert by_rule["py/unused-import"].category == Category.MAINTAINABILITY
    assert by_rule["py/unsafe-deserialization"].severity == Severity.ERROR
    assert by_rule["py/unsafe-deserialization"].category == Category.RELIABILITY


def test_parity_golden_counts():
    findings = parse_sarif(FIXTURES / "sample.sarif")
    golden = json.loads((FIXTURES / "golden-counts.json").read_text())
    engine = CQGEngine(CodeQualityGateConfig())
    report = engine.build_report(findings, "abc123")
    assert report.counts() == golden["counts"]
    assert len(report.findings) == golden["findings_count"]


def test_deterministic_json_ordering():
    findings = parse_sarif(FIXTURES / "sample.sarif")
    engine = CQGEngine(CodeQualityGateConfig())
    r1 = engine.build_report(findings, "sha")
    r2 = engine.build_report(findings, "sha")
    r1.completed_at = r2.completed_at = "2026-06-06 12:00:00 UTC"
    assert r1.to_json() == r2.to_json()

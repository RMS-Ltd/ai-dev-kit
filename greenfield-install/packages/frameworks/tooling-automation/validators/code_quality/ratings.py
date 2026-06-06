"""GitHub Code Quality rating calculation.

Reference: https://docs.github.com/en/code-security/code-quality/reference/metrics-and-ratings
"""

from __future__ import annotations

from .report_model import Category, Finding, Severity


def rating_for_findings(findings: list[Finding], category: Category) -> str:
    """Return Excellent / Good / Fair / Needs improvement for one category."""
    scoped = [f for f in findings if f.category == category]
    if not scoped:
        return "Excellent"
    severities = {f.severity for f in scoped}
    if Severity.ERROR in severities:
        return "Needs improvement"
    if Severity.WARNING in severities:
        return "Fair"
    if Severity.NOTE in severities:
        return "Good"
    return "Excellent"


def compute_ratings(findings: list[Finding]) -> tuple[str, str]:
    reliability = rating_for_findings(findings, Category.RELIABILITY)
    maintainability = rating_for_findings(findings, Category.MAINTAINABILITY)
    return reliability, maintainability

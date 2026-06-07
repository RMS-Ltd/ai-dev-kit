"""Threshold evaluation for CQG exit codes."""

from __future__ import annotations

from enum import Enum

from .report_model import CodeQualityReport


class ThresholdMode(str, Enum):
    ERRORS = "errors"
    WARNINGS = "warnings"
    NOTES = "notes"
    ALL = "all"


def parse_threshold(value: str) -> ThresholdMode:
    normalized = value.strip().lower()
    try:
        return ThresholdMode(normalized)
    except ValueError as exc:
        allowed = ", ".join(member.value for member in ThresholdMode.__members__.values())
        raise ValueError(
            f"Invalid threshold mode {value!r}; expected one of: {allowed}"
        ) from exc


def threshold_breached(report: CodeQualityReport, mode: ThresholdMode) -> bool:
    counts = report.counts()
    if mode == ThresholdMode.ERRORS:
        return counts["Error"] > 0
    if mode == ThresholdMode.WARNINGS:
        return counts["Error"] + counts["Warning"] > 0
    if mode == ThresholdMode.NOTES:
        return counts["Error"] + counts["Warning"] + counts["Note"] > 0
    if mode == ThresholdMode.ALL:
        return len(report.findings) > 0
    return False

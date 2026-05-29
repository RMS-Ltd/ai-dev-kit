"""
Unit tests for Gap Log and Risk Assessment Validator (E4:S16:T05 spec).

Tests that validate_gap_log.py correctly validates gap log documents
per docs/architecture/standards-and-adrs/gap-log-schema.md.
"""

import sys
from pathlib import Path

validation_dir = Path(__file__).resolve().parent.parent / "packages/frameworks/workflow mgt/scripts/validation"
if str(validation_dir) not in sys.path:
    sys.path.insert(0, str(validation_dir))

from validate_gap_log import validate_gap_log, _validate_gap_block, _extract_gap_blocks


class TestValidGapLogPasses:
    """E4:S16:T05 and E3:S04:T05 gap logs pass validation."""

    def test_e4_s16_t05_passes(self):
        path = (
            Path(__file__).resolve().parent.parent
            / "docs/project-management/kanban/epics/Epic-4/Story-016-kanban-package-implementation-review/T05-create-gap-log-and-risk-assessment.md"
        )
        if path.exists():
            content = path.read_text(encoding="utf-8")
            passed, errors = validate_gap_log(content)
            assert passed, errors
            assert len(errors) == 0

    def test_e3_s04_t05_passes(self):
        path = (
            Path(__file__).resolve().parent.parent
            / "docs/project-management/kanban/epics/Epic-3/Story-004-numbering-versioning-package-implementation-review/T05-gap-log-and-risk-assessment.md"
        )
        if path.exists():
            content = path.read_text(encoding="utf-8")
            passed, errors = validate_gap_log(content)
            assert passed, errors
            assert len(errors) == 0


class TestMissingSectionFails:
    """Document missing required section fails."""

    def test_missing_risk_assessment_fails(self):
        content = """
## Scope
Consolidate findings from T01-T04.

## Input
- T01, T02, T03, T04

## Gap Log
### Summary of Direct Package Gaps
No direct gaps.
"""
        passed, errors = validate_gap_log(content)
        assert not passed
        assert any("Risk Assessment" in e for e in errors)


class TestMissingGapFieldFails:
    """Gap entry missing required field fails."""

    def test_missing_severity_fails(self):
        block = """
### Gap 1 – Test Gap

- **ID:** GAP-TEST-001-001
- **Category:** Behavioral
- **Description:** Test description.
- **Source:** T01
- **Ownership:** Package
- **Likelihood:** LOW
- **RC Impact:** NON-BLOCKING
- **Tracking:** BR-001
"""
        errors = _validate_gap_block(block, 1)
        assert any("Severity" in e for e in errors)


class TestMissingRcConclusionFails:
    """Risk Assessment without RC conclusion fails."""

    def test_risk_assessment_without_rc_conclusion_fails(self):
        content = """
## Scope
Scope.

## Input
Input.

## Gap Log
### Summary of Direct Package Gaps
No gaps.

## Risk Assessment
### Overall RC Risk Posture
- **Structural Risk:** LOW
- **Behavioral Risk:** LOW
- **Integration Risk:** LOW
"""
        passed, errors = validate_gap_log(content)
        assert not passed
        assert any("RC Impact Conclusion" in e or "RC-blocking" in e for e in errors)


class TestInvalidSeverityFails:
    """Severity value not in {LOW,MEDIUM,HIGH} fails."""

    def test_invalid_severity_fails(self):
        block = """
### Gap 1 – Test

- **ID:** GAP-TEST-001-001
- **Category:** Behavioral
- **Description:** Test.
- **Source:** T01
- **Ownership:** Package
- **Severity:** CRITICAL
- **Likelihood:** LOW
- **RC Impact:** NON-BLOCKING
- **Tracking:** BR-001
"""
        errors = _validate_gap_block(block, 1)
        assert any("Severity" in e or "Invalid" in e for e in errors)


class TestInvalidRcImpactFails:
    """RC Impact not in {BLOCKER,NON-BLOCKING,INFORMATIONAL} fails."""

    def test_invalid_rc_impact_fails(self):
        block = """
### Gap 1 – Test

- **ID:** GAP-TEST-001-001
- **Category:** Behavioral
- **Description:** Test.
- **Source:** T01
- **Ownership:** Package
- **Severity:** LOW
- **Likelihood:** LOW
- **RC Impact:** UNKNOWN
- **Tracking:** BR-001
"""
        errors = _validate_gap_block(block, 1)
        assert any("RC Impact" in e for e in errors)


class TestEmptyGapLogPassesWithSummary:
    """Document with zero gaps but valid Summary + Risk Assessment passes."""

    def test_empty_gap_log_passes(self):
        content = """
## Scope
Consolidate findings from T01-T04.

## Input
- T01, T02, T03, T04

## Gap Log
### Summary of Direct Package Gaps
From T01-T04: No gaps identified. All components present.

## Risk Assessment
### Overall RC Risk Posture
- **Structural Risk:** NONE
- **Behavioral Risk:** NONE
- **Integration Risk:** NONE

**RC Impact Conclusion:**
There are no RC-blocking risks for the package.
"""
        passed, errors = validate_gap_log(content)
        assert passed, errors
        assert len(errors) == 0

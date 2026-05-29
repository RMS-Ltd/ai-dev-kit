"""
Unit tests for FR-037 Kanban Governance Policy Validator.

Tests that validate_kanban_governance_policy.py correctly asserts
R01-R05 content in the governance policy.
"""

import sys
from pathlib import Path

# Add validation scripts path for import
validation_dir = Path(__file__).resolve().parent.parent / "packages/frameworks/workflow mgt/scripts/validation"
if str(validation_dir) not in sys.path:
    sys.path.insert(0, str(validation_dir))

from validate_kanban_governance_policy import (
    check_r01,
    check_r02,
    check_r03,
    check_r04,
    check_r05,
    validate_policy,
)


class TestCheckR01:
    """R01: Task prioritisation section."""

    def test_r01_passes_with_required_content(self):
        content = """
## Task prioritisation

All new tasks must be placed in a MoSCOW category first. No task is added directly to COMPLETE.
"""
        passed, errors = check_r01(content)
        assert passed, errors
        assert len(errors) == 0

    def test_r01_fails_without_section_heading(self):
        content = "MoSCOW category. No task directly to COMPLETE."
        passed, errors = check_r01(content)
        assert not passed
        assert any("Task prioritisation" in e for e in errors)

    def test_r01_fails_without_complete_rule(self):
        content = "## Task prioritisation\n\nMoSCOW categories exist."
        passed, errors = check_r01(content)
        assert not passed


class TestCheckR02:
    """R02: MUST HAVE stack/queue ordering."""

    def test_r02_passes_with_required_content(self):
        content = """
Stack for bug-based tasks: add to top. Queue for other MUST HAVE: add to end, work front-first.
Breaking tasks go to top.
"""
        passed, errors = check_r02(content)
        assert passed, errors
        assert len(errors) == 0

    def test_r02_fails_without_stack(self):
        content = "Queue for MUST HAVE. Add to end. Bug-based."
        passed, errors = check_r02(content)
        assert not passed
        assert any("stack" in e.lower() for e in errors)

    def test_r02_fails_without_queue(self):
        content = "Stack for bug-based. Add to top. Breaking."
        passed, errors = check_r02(content)
        assert not passed
        assert any("queue" in e.lower() for e in errors)


class TestCheckR03:
    """R03: Scripts/UKW/RW respect stack vs queue or document manual/agent-defined."""

    def test_r03_passes_with_ukw_and_stack_queue(self):
        content = "UKW and Release Workflow must respect stack and queue when ordering."
        passed, errors = check_r03(content)
        assert passed, errors

    def test_r03_passes_with_manual_documented(self):
        content = "UKW and RW update MoSCOW. Ordering is manual or agent-defined."
        passed, errors = check_r03(content)
        assert passed, errors

    def test_r03_fails_without_scripts_ref(self):
        content = "Stack and queue exist."
        passed, errors = check_r03(content)
        assert not passed


class TestCheckR04:
    """R04 (optional): COMPLETE definition."""

    def test_r04_optional_always_passes(self):
        # R04 is optional; validator does not fail on it
        content = "COMPLETE means done."
        passed, errors = check_r04(content)
        assert passed


class TestCheckR05:
    """R05: Discoverability - board guide or prioritisation ref."""

    def test_r05_passes_with_board_guide_ref(self):
        content = "See the board guide for prioritisation and queue/stack."
        passed, errors = check_r05(content)
        assert passed, errors

    def test_r05_passes_with_prioritisation(self):
        content = "Prioritisation rules. Queue for MUST HAVE."
        passed, errors = check_r05(content)
        assert passed, errors


class TestValidatePolicy:
    """Full policy validation."""

    def test_validate_compliant_policy_passes(self):
        content = """
## Task prioritisation and MUST HAVE ordering

All new tasks must be placed in a MoSCOW category first. No task is added directly to COMPLETE.

For MUST HAVE: use a stack for bug-based or breaking tasks (add to top, work top-first)
and a queue for all other MUST HAVE tasks (add to end, work front-first).

Scripts (UKW, RW) that update the MoSCOW section respect stack vs queue or document
that ordering is manual or agent-defined.

See the board guide for prioritisation and queue/stack.
"""
        passed, errors = validate_policy(content)
        assert passed, errors
        assert len(errors) == 0

    def test_validate_minimal_policy_fails(self):
        content = "MoSCOW categories: M, S, C, O, W. Tasks are ordered."
        passed, errors = validate_policy(content)
        assert not passed
        assert len(errors) > 0

"""Tests for MoSCOW multi-line bullet spacing (UXR-005)."""

from __future__ import annotations

import sys
from pathlib import Path

_KANBAN_DIR = Path(__file__).resolve().parent / "kanban"
if str(_KANBAN_DIR) not in sys.path:
    sys.path.insert(0, str(_KANBAN_DIR))

from kanban_moscow_spacing import (  # noqa: E402
    MULTILINE_THRESHOLD,
    check_spacing_lines,
    fix_spacing_lines,
    is_multiline_bullet,
)


def test_short_bullets_adjacent_ok():
    lines = [
        "## MoSCOW Prioritized Tasks",
        "### Should Have (S)",
        "- **E01:S01:T01** – short one",
        "- **E01:S01:T02** – short two",
    ]
    assert check_spacing_lines(lines) == []


def test_long_bullets_need_blank():
    long_a = "- **E01:S01:T01** – " + "x" * MULTILINE_THRESHOLD
    long_b = "- **E01:S01:T02** – " + "y" * MULTILINE_THRESHOLD
    lines = [
        "## MoSCOW Prioritized Tasks",
        "### Should Have (S)",
        long_a,
        long_b,
    ]
    v = check_spacing_lines(lines)
    assert len(v) == 1
    assert "E01:S01:T01" in v[0].bullet_token or "T01" in v[0].message


def test_long_bullets_with_blank_ok():
    long_a = "- **E01:S01:T01** – " + "x" * MULTILINE_THRESHOLD
    long_b = "- **E01:S01:T02** – " + "y" * MULTILINE_THRESHOLD
    lines = [
        "## MoSCOW Prioritized Tasks",
        "### Should Have (S)",
        long_a,
        "",
        long_b,
    ]
    assert check_spacing_lines(lines) == []


def test_fix_idempotent():
    long_a = "- **E01:S01:T01** – " + "x" * MULTILINE_THRESHOLD
    long_b = "- **E01:S01:T02** – " + "y" * MULTILINE_THRESHOLD
    lines = [
        "## MoSCOW Prioritized Tasks",
        "### Should Have (S)",
        long_a,
        long_b,
    ]
    fixed, n = fix_spacing_lines(lines)
    assert n == 1
    assert check_spacing_lines(fixed) == []
    fixed2, n2 = fix_spacing_lines(fixed)
    assert n2 == 0


def test_is_multiline_threshold():
    assert not is_multiline_bullet("- **T** – " + "a" * 50)
    assert is_multiline_bullet("- **T** – " + "a" * 101)

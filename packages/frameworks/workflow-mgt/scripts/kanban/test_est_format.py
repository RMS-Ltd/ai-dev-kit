"""Tests for est_format.py (UXR-014 / E4:S19:T09)."""

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))

from est_format import (  # noqa: E402
    find_unpadded_est_violations,
    format_est_compact,
    format_est_reference,
    normalize_est_inline_in_text,
)


def test_format_est_reference_regular():
    assert format_est_reference(2, 1, 4) == "E02:S01:T04"
    assert format_est_reference(21, 16, 57) == "E21:S16:T57"
    assert format_est_reference(4, 19, 9) == "E04:S19:T09"


def test_format_est_reference_perpetual():
    assert format_est_reference(2, 16, 101) == "E02:S16:T101"


def test_format_est_compact():
    assert format_est_compact(2, 16, 4) == "E02S16T04"
    assert format_est_compact(2, 16, 101) == "E02S16T101"


def test_normalize_colon_form():
    text = "Task **E2:S16:T4** on kboard"
    new, n = normalize_est_inline_in_text(text)
    assert n == 1
    assert "E02:S16:T04" in new
    assert "E2:S16:T4" not in new


def test_normalize_idempotent():
    text = "Row **E02:S16:T04** unchanged"
    new, n = normalize_est_inline_in_text(text)
    assert n == 0
    assert new == text


def test_normalize_leaves_high_numbers():
    text = "Row **E21:S16:T57**"
    new, n = normalize_est_inline_in_text(text)
    assert n == 0
    assert new == text


def test_normalize_compact():
    text = "RW E2S16T4 --art"
    new, n = normalize_est_inline_in_text(text)
    assert n == 1
    assert "E02S16T04" in new


def test_skips_code_fences():
    text = "Prose E2:S1:T2\n```\nE2:S1:T2\n```\n"
    new, n = normalize_est_inline_in_text(text)
    assert n == 1
    assert "E02:S01:T02" in new.split("```")[0]
    assert "E2:S1:T2" in new.split("```")[1]


def test_does_not_touch_version_strings():
    text = "Version v0.4.19.9+1 and task E2:S1:T2"
    new, n = normalize_est_inline_in_text(text)
    assert "v0.4.19.9+1" in new
    assert "E02:S01:T02" in new


def test_find_violations():
    assert find_unpadded_est_violations("E2:S16:T4") == ["E2:S16:T4"]
    assert find_unpadded_est_violations("E02:S16:T04") == []


def test_ipp_filename_not_mangled():
    text = "See IPP-E4S19T09-two-digit.md and RW E2S16T4"
    new, n = normalize_est_inline_in_text(text)
    assert "IPP-E4S19T09" in new
    assert "E02S16T04" in new
    assert n == 1

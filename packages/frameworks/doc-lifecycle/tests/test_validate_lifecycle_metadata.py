"""Tests for validate_lifecycle_metadata.py."""

from __future__ import annotations

import subprocess
import sys
from pathlib import Path

PACKAGE_ROOT = Path(__file__).resolve().parents[1]
SCRIPT = PACKAGE_ROOT / "scripts" / "validate_lifecycle_metadata.py"
FIXTURES = Path(__file__).resolve().parent / "fixtures"


def run_validator(*args: str) -> subprocess.CompletedProcess[str]:
    return subprocess.run(
        [sys.executable, str(SCRIPT), *args],
        capture_output=True,
        text=True,
        check=False,
    )


def test_valid_evergreen_fixture_passes_strict() -> None:
    result = run_validator(
        "--path",
        str(FIXTURES),
        "--file",
        str(FIXTURES / "valid_evergreen.md"),
        "--strict",
    )
    assert result.returncode == 0
    assert "PASS" in result.stdout


def test_missing_ttl_days_fails_strict() -> None:
    result = run_validator(
        "--path",
        str(FIXTURES),
        "--file",
        str(FIXTURES / "missing_ttl_days.md"),
        "--strict",
    )
    assert result.returncode == 1
    assert "missing required field: ttl_days" in result.stdout


def test_invalid_lifecycle_fails_strict() -> None:
    result = run_validator(
        "--path",
        str(FIXTURES),
        "--file",
        str(FIXTURES / "invalid_lifecycle.md"),
        "--strict",
    )
    assert result.returncode == 1
    assert "invalid lifecycle" in result.stdout


def test_expires_at_arithmetic_fails_strict() -> None:
    result = run_validator(
        "--path",
        str(FIXTURES),
        "--file",
        str(FIXTURES / "expires_at_bad.md"),
        "--strict",
    )
    assert result.returncode == 1
    assert "expires_at does not match" in result.stdout


def test_evergreen_cross_field_fails_strict() -> None:
    result = run_validator(
        "--path",
        str(FIXTURES),
        "--file",
        str(FIXTURES / "evergreen_cross_field.md"),
        "--strict",
    )
    assert result.returncode == 1
    assert "evergreen documents must have ttl_days: null" in result.stdout

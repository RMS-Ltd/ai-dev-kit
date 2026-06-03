"""Policy tests for Python minimum version (FR-104 / E08:S03:T05)."""

from pathlib import Path

import pytest

REPO_ROOT = Path(__file__).resolve().parents[1]


def test_setup_python_requires_minimum_311():
    text = (REPO_ROOT / "setup.py").read_text(encoding="utf-8")
    assert 'python_requires=">=3.11"' in text
    assert 'python_requires=">=3.8"' not in text


def test_readme_python_badge_311():
    readme = (REPO_ROOT / "README.md").read_text(encoding="utf-8")
    assert "python-3.11+" in readme
    assert "python-3.8+" not in readme


def test_python_version_file():
    pyver = (REPO_ROOT / ".python-version").read_text(encoding="utf-8").strip()
    assert pyver == "3.11"

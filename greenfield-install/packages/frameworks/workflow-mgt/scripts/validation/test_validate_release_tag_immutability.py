#!/usr/bin/env python3
"""Tests for validate_release_tag_immutability.py (BR-097)."""

import json
import sys
import tempfile
from pathlib import Path

script_dir = Path(__file__).resolve().parent
if str(script_dir) not in sys.path:
    sys.path.insert(0, str(script_dir))

import validate_release_tag_immutability as vrti  # noqa: E402


def test_blocks_git_tag_force_in_journal():
    journal = {
        "steps": [
            {
                "name": "Step 11",
                "commands": ["git tag -f v0.5.9.14+2"],
            }
        ]
    }
    with tempfile.NamedTemporaryFile(mode="w", suffix=".json", delete=False) as f:
        json.dump(journal, f)
        path = Path(f.name)
    try:
        ok, errors = vrti.validate_release_tag_immutability(journal_path=path)
        assert not ok
        assert any("IMMUTABILITY" in e for e in errors)
    finally:
        path.unlink()


def test_blocks_git_push_force():
    ok, errors = vrti.validate_release_tag_immutability(
        extra_commands=["git push origin main --force --tags"]
    )
    assert not ok
    assert any("Forbidden command" in e for e in errors)


def test_passes_clean_journal():
    journal = {
        "steps": [
            {
                "name": "Step 11",
                "commands": ["git tag -a v0.2.1.24+1 -m 'release'"],
            }
        ]
    }
    with tempfile.NamedTemporaryFile(mode="w", suffix=".json", delete=False) as f:
        json.dump(journal, f)
        path = Path(f.name)
    try:
        ok, errors = vrti.validate_release_tag_immutability(journal_path=path)
        assert ok, errors
    finally:
        path.unlink()

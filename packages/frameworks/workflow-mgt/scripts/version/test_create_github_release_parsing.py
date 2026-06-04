#!/usr/bin/env python3
"""
Regression tests for create_github_release version parsing.
"""

from pathlib import Path
import sys


SCRIPT_DIR = Path(__file__).resolve().parent
SCRIPTS_ROOT = SCRIPT_DIR.parent
sys.path.insert(0, str(SCRIPTS_ROOT))

import create_github_release as cgr  # noqa: E402
from create_github_release import normalize_internal_version, get_release_tag_info  # noqa: E402


def test_normalize_internal_version_accepts_v_prefixed():
    assert normalize_internal_version("v0.6.7.113+1") == "0.6.7.113+1"


def test_normalize_internal_version_accepts_non_prefixed():
    assert normalize_internal_version("0.6.7.113+1") == "0.6.7.113+1"


def test_normalize_internal_version_rejects_malformed_v0():
    try:
        normalize_internal_version("v0")
        assert False, "Expected ValueError for malformed internal version"
    except ValueError as exc:
        message = str(exc)
        assert "--internal-version" in message
        assert "v0" in message
        assert "Expected format" in message


def test_normalize_internal_version_rejects_non_numeric_tokens():
    try:
        normalize_internal_version("v0.a.7.113+1")
        assert False, "Expected ValueError for non-numeric internal version"
    except ValueError as exc:
        message = str(exc)
        assert "--internal-version" in message
        assert "v0.a.7.113+1" in message


def test_get_release_tag_info_handles_v_prefixed_internal_version():
    info = get_release_tag_info("v0.6.7.113+1")
    assert "primary_tag" in info
    assert info["primary_tag"].startswith("v")


def test_get_release_tag_info_normalizes_explicit_semver_tag(monkeypatch):
    monkeypatch.setattr(
        cgr,
        "get_rw_tag_info",
        lambda _internal: {
            "strategy": "task_touch",
            "primary_tag": "v0.4.733",
            "internal_tag": "v0.6.7.113+1",
            "semver_full": "0.4.733+1",
            "tag_message": "Release 0.4.733",
        },
    )
    info = get_release_tag_info("0.6.7.113+1", semver_tag="0.4.733")
    assert info["primary_tag"] == "v0.4.733"
    assert info["semver_full"] == "0.4.733"


def test_get_release_tag_info_rejects_mismatched_explicit_semver_tag(monkeypatch):
    monkeypatch.setattr(
        cgr,
        "get_rw_tag_info",
        lambda _internal: {
            "strategy": "task_touch",
            "primary_tag": "v0.4.733",
            "internal_tag": "v0.6.7.113+1",
            "semver_full": "0.4.733+1",
            "tag_message": "Release 0.4.733",
        },
    )
    try:
        get_release_tag_info("0.6.7.113+1", semver_tag="v9.9.9")
        assert False, "Expected ValueError for mismatched semver tag"
    except ValueError as exc:
        message = str(exc)
        assert "SemVer tag/internal version mismatch" in message
        assert "v9.9.9" in message

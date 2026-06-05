"""Tests for push_rw_release.release_tag_names."""

from __future__ import annotations

import sys
from pathlib import Path

_SCRIPT_DIR = Path(__file__).resolve().parent
if str(_SCRIPT_DIR) not in sys.path:
    sys.path.insert(0, str(_SCRIPT_DIR))

import push_rw_release as prr  # noqa: E402


def test_release_tag_names_task_touch(monkeypatch):
    monkeypatch.setattr(
        prr,
        "get_rw_tag_info",
        lambda _v, finalize=False: {
            "strategy": "task_touch",
            "primary_tag": "v0.4.922",
            "internal_tag": "v0.2.1.6+2",
            "semver_full": "0.4.922+2",
            "tag_message": "x",
        },
    )
    assert prr.release_tag_names("0.2.1.6+2") == ["v0.4.922", "v0.2.1.6+2"]


def test_release_tag_names_registry(monkeypatch):
    monkeypatch.setattr(
        prr,
        "get_rw_tag_info",
        lambda _v, finalize=False: {
            "strategy": "registry",
            "primary_tag": "v0.6.7.18+2",
            "internal_tag": None,
            "semver_full": None,
            "tag_message": "x",
        },
    )
    assert prr.release_tag_names("0.6.7.18+2") == ["v0.6.7.18+2"]

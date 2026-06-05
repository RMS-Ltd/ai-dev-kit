"""Tests for tag_collision_recovery.format_tag_collision_recovery."""

from __future__ import annotations

import sys
from pathlib import Path

_SCRIPT_DIR = Path(__file__).resolve().parent
if str(_SCRIPT_DIR) not in sys.path:
    sys.path.insert(0, str(_SCRIPT_DIR))

from tag_collision_recovery import format_tag_collision_recovery  # noqa: E402


def test_task_touch_primary_mentions_new_patch():
    msg = format_tag_collision_recovery(
        "v0.4.940",
        strategy="task_touch",
        is_primary=True,
        internal_version="0.2.13.4+1",
    )
    assert "task_touch" in msg
    assert "NEW SemVer PATCH" in msg
    assert "finalize_rw_semver_registry" in msg
    assert "force-push" in msg.lower() or "Never" in msg


def test_registry_internal_tag_mentions_build_plus_one():
    msg = format_tag_collision_recovery(
        "v0.2.13.4+1",
        strategy="registry",
        is_primary=True,
        internal_version="0.2.13.4+1",
    )
    assert "BUILD+1" in msg
    assert "resolve_rw_build" in msg

"""Shared pytest path setup for release_state integration tests."""

from __future__ import annotations

import sys
from pathlib import Path

_REPO_ROOT = Path(__file__).resolve().parents[2]
_SCRIPTS = _REPO_ROOT / "packages/frameworks/workflow-mgt/scripts"

_SCRIPTS_STR = str(_SCRIPTS)
if _SCRIPTS_STR not in sys.path:
    sys.path.insert(0, _SCRIPTS_STR)
